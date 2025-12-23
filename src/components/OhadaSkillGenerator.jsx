import React, { useState } from 'react';
import { Copy, Download, ChevronDown, RotateCcw, FileText } from 'lucide-react';

export default function OhadaSkillGenerator() {
  const [skillName, setSkillName] = useState('');
  const [skillDescription, setSkillDescription] = useState('');
  const [mainInstructions, setMainInstructions] = useState('');
  const [referenceSections, setReferenceSections] = useState([
    { title: 'Dispositions Communes', articles: 'Art. 1 à 53', content: '' },
    { title: 'Injonction de Payer', articles: 'Art. 2 à 18', content: '' },
    { title: 'Injonction de Délivrer/Restituer', articles: 'Art. 19 à 27', content: '' },
    { title: 'Dispositions Générales Exécution', articles: 'Art. 28 à 53', content: '' },
    { title: 'Saisies Conservatoires', articles: 'Art. 54 à 90', content: '' },
    { title: 'Saisie-Vente', articles: 'Art. 91 à 152-15', content: '' },
    { title: 'Saisie-Attribution', articles: 'Art. 153 à 172', content: '' },
    { title: 'Saisie Rémunérations', articles: 'Art. 173 à 217', content: '' },
  ]);
  const [copied, setCopied] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState('main');
  const [zipGenerated, setZipGenerated] = useState(false);

  const sanitizeFilename = (name) => {
    return name
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9-_]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
  };

  const generateSkillMd = () => {
    const cleanedName = sanitizeFilename(skillName);
    const navigation = referenceSections
      .map((section, idx) => `- [${section.title}](references/${sanitizeFilename(section.title)}.md) (${section.articles})`)
      .join('\n');

    return `---
name: "${cleanedName}"
description: "${skillDescription}"
---

# ${skillName}

## Navigation Rapide

${navigation}

## Instructions Principales

${mainInstructions || 'Ajoute tes instructions principales ici.'}

## Structure de la Skill

Cette Skill contient une documentation complète organisée en sections thématiques:

- **references/** - Fichiers détaillés par thème avec articles du code OHADA
- **SKILL.md** - Ce fichier (navigation et instructions générales)

## Utilisation

Claude charge automatiquement les fichiers de référence pertinents en fonction de ta demande.
`;
  };

  const generateReferenceSections = () => {
    const sections = {};
    referenceSections.forEach((section) => {
      const filename = sanitizeFilename(section.title);
      sections[filename] = `# ${section.title}

**Articles:** ${section.articles}

## Contenu

${section.content || `Ajoute le contenu pour ${section.title}`}
`;
    });
    return sections;
  };

  const generateFolderStructure = () => {
    const cleanedName = sanitizeFilename(skillName);
    return `${cleanedName}/
├── SKILL.md (navigation + instructions)
└── references/
    ${referenceSections.map((s) => `├── ${sanitizeFilename(s.title)}.md`).join('\n    ')}`;
  };

  const updateReferenceSection = (index, field, value) => {
    const updated = [...referenceSections];
    updated[index][field] = value;
    setReferenceSections(updated);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied('copied');
    setShowSuccess(true);
    setTimeout(() => {
      setCopied(null);
      setShowSuccess(false);
    }, 2000);
  };

  const downloadZip = () => {
    try {
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js';
      script.onload = () => {
        const JSZip = window.JSZip;
        const zip = new JSZip();
        const folderName = sanitizeFilename(skillName);

        // Ajouter SKILL.md
        zip.file(`${folderName}/SKILL.md`, generateSkillMd());

        // Ajouter les fichiers de référence
        const references = generateReferenceSections();
        Object.entries(references).forEach(([filename, content]) => {
          zip.folder(`${folderName}/references`).file(`${filename}.md`, content);
        });

        // Générer le ZIP
        zip.generateAsync({ type: 'blob' }).then((content) => {
          const url = URL.createObjectURL(content);
          const link = document.createElement('a');
          link.href = url;
          link.download = `${folderName}.zip`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          setTimeout(() => URL.revokeObjectURL(url), 100);

          setZipGenerated(true);
          setTimeout(() => setZipGenerated(false), 3000);
        });
      };
      document.body.appendChild(script);
    } catch (error) {
      console.error('Erreur:', error);
      alert('Impossible de générer le ZIP.');
    }
  };

  const resetForm = () => {
    setSkillName('');
    setSkillDescription('');
    setMainInstructions('');
    setReferenceSections([
      { title: 'Dispositions Communes', articles: 'Art. 1 à 53', content: '' },
      { title: 'Injonction de Payer', articles: 'Art. 2 à 18', content: '' },
      { title: 'Injonction de Délivrer/Restituer', articles: 'Art. 19 à 27', content: '' },
      { title: 'Dispositions Générales Exécution', articles: 'Art. 28 à 53', content: '' },
      { title: 'Saisies Conservatoires', articles: 'Art. 54 à 90', content: '' },
      { title: 'Saisie-Vente', articles: 'Art. 91 à 152-15', content: '' },
      { title: 'Saisie-Attribution', articles: 'Art. 153 à 172', content: '' },
      { title: 'Saisie Rémunérations', articles: 'Art. 173 à 217', content: '' },
    ]);
    setActiveTab('main');
  };

  const isComplete = skillName && skillDescription && mainInstructions;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-slate-900 to-slate-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
            <FileText size={40} className="text-purple-400" />
            Générateur de Skills OHADA
          </h1>
          <p className="text-slate-300">Crée des Skills complètes pour les procédures OHADA d'exécution forcée</p>
        </div>

        {/* Controls */}
        <div className="mb-6 flex gap-4">
          <button
            onClick={resetForm}
            className="flex items-center gap-2 px-6 py-3 rounded-lg font-medium bg-slate-700 text-slate-300 hover:bg-slate-600 transition"
          >
            <RotateCcw size={20} /> Réinitialiser
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Form Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Main Info */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <h2 className="text-xl font-bold text-white mb-4">📋 Informations Principales</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Nom de la Skill *</label>
                  <input
                    type="text"
                    value={skillName}
                    onChange={(e) => setSkillName(e.target.value)}
                    placeholder="Ex: Guide OHADA - Procédures d'Exécution"
                    className={`w-full px-4 py-2 bg-slate-700 border rounded-lg text-white placeholder-slate-500 focus:outline-none transition ${
                      skillName ? 'border-green-500' : 'border-slate-600 focus:border-purple-500'
                    }`}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Description *</label>
                  <input
                    type="text"
                    value={skillDescription}
                    onChange={(e) => setSkillDescription(e.target.value)}
                    placeholder="Quand Claude doit-il utiliser cette Skill?"
                    className={`w-full px-4 py-2 bg-slate-700 border rounded-lg text-white placeholder-slate-500 focus:outline-none transition ${
                      skillDescription ? 'border-green-500' : 'border-slate-600 focus:border-purple-500'
                    }`}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Instructions Principales *</label>
                  <textarea
                    value={mainInstructions}
                    onChange={(e) => setMainInstructions(e.target.value)}
                    placeholder="Instructions générales sur la structure et l'utilisation..."
                    rows="4"
                    className={`w-full px-4 py-2 bg-slate-700 border rounded-lg text-white placeholder-slate-500 focus:outline-none transition resize-none font-mono text-sm ${
                      mainInstructions ? 'border-green-500' : 'border-slate-600 focus:border-purple-500'
                    }`}
                  />
                </div>
              </div>
            </div>

            {/* References Sections */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <h2 className="text-xl font-bold text-white mb-4">📚 Sections de Référence</h2>
              
              <div className="space-y-4">
                {referenceSections.map((section, idx) => (
                  <div key={idx} className="bg-slate-700 rounded p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-bold text-white text-sm">{section.title}</h3>
                        <p className="text-slate-400 text-xs">{section.articles}</p>
                      </div>
                    </div>
                    <textarea
                      value={section.content}
                      onChange={(e) => updateReferenceSection(idx, 'content', e.target.value)}
                      placeholder={`Contenu pour ${section.title}...`}
                      rows="2"
                      className="w-full px-3 py-2 bg-slate-600 border border-slate-500 rounded text-white placeholder-slate-400 focus:outline-none focus:border-purple-500 resize-none text-xs"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Preview & Download */}
          <div className="space-y-6">
            {/* Structure Preview */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <h3 className="text-lg font-bold text-white mb-3">📁 Structure</h3>
              
              {skillName && (
                <div className="mb-4 p-3 bg-slate-900 rounded border border-slate-700">
                  <p className="text-xs text-slate-400 mb-2">Transformation :</p>
                  <div className="space-y-1">
                    <p className="text-xs text-white">
                      📝 <span className="text-blue-400">{skillName}</span>
                    </p>
                    <p className="text-xs text-white">
                      ✓ <span className="text-green-400">{sanitizeFilename(skillName)}</span>
                    </p>
                  </div>
                </div>
              )}

              <pre className="bg-slate-900 p-3 rounded text-slate-300 text-xs overflow-x-auto max-h-64 overflow-y-auto">
                {generateFolderStructure()}
              </pre>
            </div>

            {/* SKILL.md Preview */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <h3 className="text-lg font-bold text-white mb-3">🔍 Aperçu SKILL.md</h3>
              
              <div className="bg-slate-900 rounded p-3 max-h-96 overflow-y-auto border border-slate-700">
                <pre className="text-slate-300 text-xs whitespace-pre-wrap break-words font-mono">
                  {generateSkillMd()}
                </pre>
              </div>

              <button
                onClick={() => copyToClipboard(generateSkillMd())}
                className="w-full mt-3 flex items-center justify-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition active:scale-95"
              >
                <Copy size={18} />
                {copied === 'copied' ? '✓ Copié!' : 'Copier SKILL.md'}
              </button>
            </div>

            {/* Download */}
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <h3 className="text-lg font-bold text-white mb-4">⬇️ Télécharger</h3>
              
              <button
                onClick={downloadZip}
                disabled={!isComplete}
                className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-medium transition active:scale-95 ${
                  isComplete
                    ? 'bg-green-600 hover:bg-green-700 text-white cursor-pointer'
                    : 'bg-slate-700 text-slate-500 cursor-not-allowed'
                }`}
              >
                <Download size={20} />
                {zipGenerated ? '✓ ZIP Téléchargé!' : 'Télécharger ZIP'}
              </button>

              {!isComplete && (
                <p className="text-slate-400 text-xs mt-2 text-center">Complète les champs * pour activer</p>
              )}

              {isComplete && (
                <div className="mt-3 p-3 bg-green-900 border border-green-700 rounded-lg text-green-200 text-xs">
                  ✓ Skill prête à uploader dans Claude!
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
