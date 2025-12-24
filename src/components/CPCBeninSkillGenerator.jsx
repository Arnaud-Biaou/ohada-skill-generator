import React, { useState } from 'react';
import { 
  Copy, 
  Download, 
  ChevronDown, 
  ChevronRight,
  RotateCcw, 
  FileText, 
  Plus, 
  Trash2,
  FolderPlus,
  Table
} from 'lucide-react';

export default function CPCBeninSkillGenerator() {
  const [skillName, setSkillName] = useState('CPC Bénin - Code de Procédure Civile');
  const [skillDescription, setSkillDescription] = useState('Documentation complète du Code de Procédure Civile du Bénin avec toutes les modifications législatives (2016-16, 2020-08, 2022-20)');
  const [mainInstructions, setMainInstructions] = useState(`# Code de Procédure Civile du Bénin

## À Propos de cette Skill

Cette Skill fournit une documentation exhaustive du Code de Procédure Civile du Bénin, incluant:
- Les dispositions originales
- Les modifications de la Loi 2016-16
- La modernisation par la Loi 2020-08 (procédure électronique, petites créances)
- Les ajouts de la Loi 2022-20 (saisies immobilières)

## Utilisation

Accède rapidement aux articles et procédures selon le type de contentieux ou la phase procédurale.`);

  // Structure principale avec sous-sections
  const [sections, setSections] = useState([
    {
      num: '01',
      title: 'Dispositions Communes',
      subsections: [
        { title: 'Principes directeurs', articles: 'Art. 1-34', content: '' },
        { title: 'Compétence territoriale', articles: 'Art. 35-56', content: '' },
        { title: 'Actes de procédure', articles: 'Art. 57-115', content: '' },
      ]
    },
    {
      num: '02',
      title: 'Demande en Justice',
      subsections: [
        { title: 'Demande initiale', articles: 'Art. 116-145', content: '' },
        { title: 'Demandes incidentes', articles: 'Art. 146-175', content: '' },
        { title: 'Moyens de défense', articles: 'Art. 176-210', content: '' },
      ]
    },
    {
      num: '03',
      title: 'Administration de la Preuve',
      subsections: [
        { title: 'Dispositions générales', articles: 'Art. 211-240', content: '' },
        { title: 'Vérifications personnelles du juge', articles: 'Art. 241-260', content: '' },
        { title: 'Comparution personnelle', articles: 'Art. 261-290', content: '' },
        { title: 'Attestations', articles: 'Art. 291-320', content: '' },
        { title: 'Enquêtes', articles: 'Art. 321-380', content: '' },
        { title: 'Expertise', articles: 'Art. 381-450', content: '' },
        { title: 'Serment', articles: 'Art. 451-470', content: '' },
      ]
    },
    {
      num: '04',
      title: 'Incidents d\'Instance',
      subsections: [
        { title: 'Jonction et disjonction', articles: 'Art. 471-490', content: '' },
        { title: 'Interruption', articles: 'Art. 491-510', content: '' },
        { title: 'Suspension', articles: 'Art. 511-530', content: '' },
        { title: 'Péremption', articles: 'Art. 531-545', content: '' },
        { title: 'Désistement', articles: 'Art. 546-570', content: '' },
      ]
    },
    {
      num: '05',
      title: 'Jugement',
      subsections: [
        { title: 'Dispositions générales', articles: 'Art. 571-600', content: '' },
        { title: 'Prononcé', articles: 'Art. 601-620', content: '' },
        { title: 'Force de chose jugée', articles: 'Art. 621-640', content: '' },
        { title: 'Exécution provisoire', articles: 'Art. 641-670', content: '' },
      ]
    },
    {
      num: '06',
      title: 'Voies de Recours',
      subsections: [
        { title: 'Dispositions communes', articles: 'Art. 671-690', content: '' },
        { title: 'Opposition', articles: 'Art. 691-720', content: '' },
        { title: 'Appel', articles: 'Art. 721-780', content: '' },
        { title: 'Tierce opposition', articles: 'Art. 781-810', content: '' },
        { title: 'Recours en révision', articles: 'Art. 811-840', content: '' },
        { title: 'Pourvoi en cassation', articles: 'Art. 841-920', content: '' },
      ]
    },
    {
      num: '07',
      title: 'Procédure Civile TPI',
      subsections: [
        { title: 'Procédure ordinaire', articles: 'Art. 721-760', content: '' },
        { title: 'Procédure à jour fixe', articles: 'Art. 761-770', content: '' },
        { title: 'Référés', articles: 'Art. 771-800', content: '' },
        { title: 'Requêtes', articles: 'Art. 801-830', content: '' },
      ]
    },
    {
      num: '08',
      title: 'Procédure Commerciale',
      subsections: [
        { title: 'Dispositions générales', articles: 'Art. 831-860', content: '' },
        { title: 'Tribunaux de commerce', articles: 'Art. 861-890', content: '' },
        { title: 'Procédures collectives', articles: 'Renvoi OHADA', content: '' },
        { title: 'Petites créances', articles: 'Art. 768-1 et s. (Loi 2020-08)', content: '' },
      ]
    },
    {
      num: '09',
      title: 'Procédure Sociale',
      subsections: [
        { title: 'Compétence', articles: 'Art. 891-910', content: '' },
        { title: 'Procédure', articles: 'Art. 911-950', content: '' },
        { title: 'Voies de recours', articles: 'Art. 951-980', content: '' },
      ]
    },
    {
      num: '10',
      title: 'Procédure Administrative',
      subsections: [
        { title: 'Recours pour excès de pouvoir', articles: 'Art. 981-1020', content: '' },
        { title: 'Plein contentieux', articles: 'Art. 1021-1060', content: '' },
        { title: 'Référés administratifs', articles: 'Art. 1061-1100', content: '' },
        { title: 'Exécution des décisions', articles: 'Art. 1101-1130', content: '' },
      ]
    },
    {
      num: '11',
      title: 'Procédure des Comptes',
      subsections: [
        { title: 'Juridiction des comptes', articles: 'Art. 1131-1160', content: '' },
        { title: 'Jugement des comptes', articles: 'Art. 1161-1190', content: '' },
        { title: 'Voies de recours', articles: 'Art. 1191-1220', content: '' },
      ]
    },
    {
      num: '12',
      title: 'Procédures Spéciales',
      subsections: [
        { title: 'Exequatur', articles: 'Art. 1159-1180', content: '' },
        { title: 'Arbitrage', articles: 'Art. 1181-1200', content: '' },
        { title: 'Reddition de comptes', articles: 'Art. 1206-1220', content: '' },
        { title: 'Reconstitution d\'actes', articles: 'Art. 1201-1205', content: '' },
      ]
    },
    {
      num: '13',
      title: 'Modifications 2016-16',
      subsections: [
        { title: 'Articles modifiés', articles: 'Ancienne/nouvelle rédaction', content: '' },
      ]
    },
    {
      num: '14',
      title: 'Modernisation 2020-08',
      subsections: [
        { title: 'Procédure électronique', articles: '', content: '' },
        { title: 'Petites créances', articles: 'Art. 768-1 et s.', content: '' },
        { title: 'Pool de l\'exécution', articles: '', content: '' },
        { title: 'Médiation judiciaire', articles: '', content: '' },
      ]
    },
    {
      num: '15',
      title: 'Modification 2022-20',
      subsections: [
        { title: 'Article 585.1 nouveau', articles: 'Saisies immobilières', content: '' },
      ]
    },
  ]);

  // Tables de référence
  const [tables, setTables] = useState([
    { filename: 'delais-imperatifs', title: 'Délais Impératifs', content: '' },
    { filename: 'competences-materielles', title: 'Compétences Matérielles', content: '' },
    { filename: 'competences-territoriales', title: 'Compétences Territoriales', content: '' },
    { filename: 'voies-recours-tableau', title: 'Voies de Recours (Tableau)', content: '' },
  ]);

  const [copied, setCopied] = useState(null);
  const [zipGenerated, setZipGenerated] = useState(false);
  const [expandedSections, setExpandedSections] = useState({});
  const [showTables, setShowTables] = useState(false);

  const sanitizeFilename = (name) => {
    return name
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9-_]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
  };

  // Générer le SKILL.md
  const generateSkillMd = () => {
    const cleanedName = sanitizeFilename(skillName);
    
    let navigation = '## Navigation par Thème\n\n';
    
    sections.forEach((section) => {
      const sectionFilename = `${section.num}-${sanitizeFilename(section.title)}`;
      navigation += `### ${section.num}. ${section.title}\n`;
      navigation += `📄 [${section.title}](references/${sectionFilename}.md)\n`;
      section.subsections.forEach((sub) => {
        navigation += `   - ${sub.title}${sub.articles ? ` (${sub.articles})` : ''}\n`;
      });
      navigation += '\n';
    });

    navigation += '### 📊 Tables de Référence\n';
    tables.forEach((table) => {
      navigation += `- [${table.title}](references/tables/${table.filename}.md)\n`;
    });

    return `---
name: "${cleanedName}"
description: "${skillDescription}"
---

# ${skillName}

${navigation}

## Instructions Principales

${mainInstructions}

## Structure de la Skill

Cette Skill contient une documentation complète organisée comme suit:

- **references/** - Fichiers détaillés par thème (15 sections)
- **references/tables/** - Tableaux de synthèse (délais, compétences, voies de recours)
- **SKILL.md** - Ce fichier (navigation et instructions générales)

## Utilisation

Claude charge automatiquement les fichiers de référence pertinents selon le type de procédure ou la question posée.

## Versions du Code

- **Version initiale** : Code de Procédure Civile du Bénin
- **Loi 2016-16** : Modifications diverses
- **Loi 2020-08** : Modernisation (électronique, petites créances, pool exécution)
- **Loi 2022-20** : Article 585.1 (saisies immobilières)
`;
  };

  // Générer le contenu d'une section
  const generateSectionContent = (section) => {
    let content = `# ${section.num}. ${section.title}\n\n`;
    content += `## Sommaire\n\n`;
    
    section.subsections.forEach((sub, idx) => {
      content += `${idx + 1}. [${sub.title}](#${sanitizeFilename(sub.title)})${sub.articles ? ` - ${sub.articles}` : ''}\n`;
    });
    
    content += '\n---\n\n';
    
    section.subsections.forEach((sub) => {
      content += `## ${sub.title} {#${sanitizeFilename(sub.title)}}\n\n`;
      if (sub.articles) {
        content += `**Articles:** ${sub.articles}\n\n`;
      }
      content += sub.content || `[Contenu à compléter pour ${sub.title}]\n`;
      content += '\n---\n\n';
    });
    
    return content;
  };

  // Générer le contenu d'une table
  const generateTableContent = (table) => {
    return `# ${table.title}

## Description

${table.content || `[Contenu à compléter pour ${table.title}]`}

---

*Table de référence du Code de Procédure Civile du Bénin*
`;
  };

  // Générer l'aperçu de la structure
  const generateFolderStructure = () => {
    const cleanedName = sanitizeFilename(skillName);
    let structure = `${cleanedName}/\n├── SKILL.md\n└── references/\n`;
    
    sections.forEach((section, idx) => {
      const sectionFilename = `${section.num}-${sanitizeFilename(section.title)}.md`;
      const isLast = idx === sections.length - 1 && tables.length === 0;
      structure += `    ${isLast ? '└──' : '├──'} ${sectionFilename}\n`;
      
      // Afficher les sous-sections comme commentaires
      section.subsections.forEach((sub, subIdx) => {
        const prefix = isLast ? '        ' : '    │   ';
        const subPrefix = subIdx === section.subsections.length - 1 ? '└──' : '├──';
        structure += `${prefix}${subPrefix} ${sub.title}${sub.articles ? ` (${sub.articles})` : ''}\n`;
      });
    });
    
    if (tables.length > 0) {
      structure += `    └── tables/\n`;
      tables.forEach((table, idx) => {
        const isLast = idx === tables.length - 1;
        structure += `        ${isLast ? '└──' : '├──'} ${table.filename}.md\n`;
      });
    }
    
    return structure;
  };

  // Mettre à jour une sous-section
  const updateSubsection = (sectionIdx, subIdx, field, value) => {
    const updated = [...sections];
    updated[sectionIdx].subsections[subIdx][field] = value;
    setSections(updated);
  };

  // Ajouter une sous-section
  const addSubsection = (sectionIdx) => {
    const updated = [...sections];
    updated[sectionIdx].subsections.push({
      title: 'Nouvelle sous-section',
      articles: '',
      content: ''
    });
    setSections(updated);
  };

  // Supprimer une sous-section
  const removeSubsection = (sectionIdx, subIdx) => {
    const updated = [...sections];
    updated[sectionIdx].subsections.splice(subIdx, 1);
    setSections(updated);
  };

  // Ajouter une section
  const addSection = () => {
    const nextNum = String(sections.length + 1).padStart(2, '0');
    setSections([...sections, {
      num: nextNum,
      title: 'Nouvelle Section',
      subsections: [
        { title: 'Sous-section 1', articles: '', content: '' }
      ]
    }]);
  };

  // Supprimer une section
  const removeSection = (sectionIdx) => {
    if (sections.length <= 1) return;
    const updated = sections.filter((_, idx) => idx !== sectionIdx);
    // Renuméroter
    updated.forEach((section, idx) => {
      section.num = String(idx + 1).padStart(2, '0');
    });
    setSections(updated);
  };

  // Mettre à jour une table
  const updateTable = (tableIdx, field, value) => {
    const updated = [...tables];
    updated[tableIdx][field] = value;
    setTables(updated);
  };

  // Ajouter une table
  const addTable = () => {
    setTables([...tables, {
      filename: 'nouvelle-table',
      title: 'Nouvelle Table',
      content: ''
    }]);
  };

  // Supprimer une table
  const removeTable = (tableIdx) => {
    setTables(tables.filter((_, idx) => idx !== tableIdx));
  };

  // Copier dans le presse-papiers
  const copyToClipboard = (text, type = 'skill') => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  // Télécharger le ZIP
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

        // Ajouter les fichiers de sections
        sections.forEach((section) => {
          const sectionFilename = `${section.num}-${sanitizeFilename(section.title)}.md`;
          zip.folder(`${folderName}/references`).file(sectionFilename, generateSectionContent(section));
        });

        // Ajouter les tables
        tables.forEach((table) => {
          zip.folder(`${folderName}/references/tables`).file(`${table.filename}.md`, generateTableContent(table));
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

  // Réinitialiser
  const resetForm = () => {
    if (window.confirm('Réinitialiser le formulaire ? Toutes les modifications seront perdues.')) {
      window.location.reload();
    }
  };

  const isComplete = skillName && skillDescription && mainInstructions;

  // Statistiques
  const stats = {
    sections: sections.length,
    subsections: sections.reduce((acc, s) => acc + s.subsections.length, 0),
    tables: tables.length
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-slate-900 to-slate-900 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 flex items-center gap-3">
            <FileText size={36} className="text-blue-400" />
            Générateur de Skills CPC Bénin
          </h1>
          <p className="text-slate-300 text-sm md:text-base">
            Crée des Skills complètes pour le Code de Procédure Civile du Bénin
          </p>
        </div>

        {/* Stats */}
        <div className="mb-6 grid grid-cols-3 gap-4">
          <div className="bg-slate-800/50 rounded-lg p-3 text-center border border-slate-700">
            <div className="text-2xl font-bold text-blue-400">{stats.sections}</div>
            <div className="text-xs text-slate-400">Sections</div>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-3 text-center border border-slate-700">
            <div className="text-2xl font-bold text-green-400">{stats.subsections}</div>
            <div className="text-xs text-slate-400">Sous-sections</div>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-3 text-center border border-slate-700">
            <div className="text-2xl font-bold text-amber-400">{stats.tables}</div>
            <div className="text-xs text-slate-400">Tables</div>
          </div>
        </div>

        {/* Controls */}
        <div className="mb-6 flex flex-wrap gap-2">
          <button
            onClick={resetForm}
            className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium bg-slate-700 text-slate-300 hover:bg-slate-600 transition text-sm"
          >
            <RotateCcw size={18} /> Réinitialiser
          </button>
          <button
            onClick={addSection}
            className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium bg-blue-600 text-white hover:bg-blue-700 transition text-sm"
          >
            <FolderPlus size={18} /> Ajouter Section
          </button>
          <button
            onClick={addTable}
            className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium bg-amber-600 text-white hover:bg-amber-700 transition text-sm"
          >
            <Table size={18} /> Ajouter Table
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Form */}
          <div className="lg:col-span-2 space-y-4">
            {/* Main Info */}
            <div className="bg-slate-800 rounded-lg p-5 border border-slate-700">
              <h2 className="text-lg font-bold text-white mb-4">📋 Informations Principales</h2>
              
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">Nom de la Skill *</label>
                  <input
                    type="text"
                    value={skillName}
                    onChange={(e) => setSkillName(e.target.value)}
                    className={`w-full px-3 py-2 bg-slate-700 border rounded-lg text-white text-sm focus:outline-none transition ${
                      skillName ? 'border-green-500/50' : 'border-slate-600 focus:border-blue-500'
                    }`}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">Description *</label>
                  <input
                    type="text"
                    value={skillDescription}
                    onChange={(e) => setSkillDescription(e.target.value)}
                    className={`w-full px-3 py-2 bg-slate-700 border rounded-lg text-white text-sm focus:outline-none transition ${
                      skillDescription ? 'border-green-500/50' : 'border-slate-600 focus:border-blue-500'
                    }`}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">Instructions (Markdown) *</label>
                  <textarea
                    value={mainInstructions}
                    onChange={(e) => setMainInstructions(e.target.value)}
                    rows="4"
                    className={`w-full px-3 py-2 bg-slate-700 border rounded-lg text-white text-sm focus:outline-none transition resize-none font-mono ${
                      mainInstructions ? 'border-green-500/50' : 'border-slate-600 focus:border-blue-500'
                    }`}
                  />
                </div>
              </div>
            </div>

            {/* Sections */}
            <div className="bg-slate-800 rounded-lg p-5 border border-slate-700">
              <h2 className="text-lg font-bold text-white mb-4">📚 Sections ({sections.length})</h2>
              
              <div className="space-y-2 max-h-96 overflow-y-auto pr-2">
                {sections.map((section, sectionIdx) => (
                  <div key={sectionIdx} className="border border-slate-600 rounded-lg overflow-hidden">
                    {/* Section Header */}
                    <div
                      className="flex items-center justify-between p-3 bg-slate-700 hover:bg-slate-600 cursor-pointer transition"
                      onClick={() => setExpandedSections({
                        ...expandedSections,
                        [sectionIdx]: !expandedSections[sectionIdx]
                      })}
                    >
                      <div className="flex items-center gap-2">
                        {expandedSections[sectionIdx] ? (
                          <ChevronDown size={16} className="text-blue-400" />
                        ) : (
                          <ChevronRight size={16} className="text-blue-400" />
                        )}
                        <span className="text-white text-sm font-medium">
                          {section.num}. {section.title}
                        </span>
                        <span className="text-slate-400 text-xs">
                          ({section.subsections.length} sous-sections)
                        </span>
                      </div>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          removeSection(sectionIdx);
                        }}
                        className="text-red-400 hover:text-red-300 p-1"
                        disabled={sections.length <= 1}
                      >
                        <Trash2 size={14} className={sections.length <= 1 ? 'opacity-30' : ''} />
                      </button>
                    </div>

                    {/* Section Content */}
                    {expandedSections[sectionIdx] && (
                      <div className="p-3 bg-slate-800 border-t border-slate-600 space-y-2">
                        {/* Edit section title */}
                        <input
                          type="text"
                          value={section.title}
                          onChange={(e) => {
                            const updated = [...sections];
                            updated[sectionIdx].title = e.target.value;
                            setSections(updated);
                          }}
                          className="w-full px-2 py-1.5 bg-slate-700 border border-slate-600 rounded text-white text-sm"
                          placeholder="Titre de la section"
                        />

                        {/* Subsections */}
                        <div className="space-y-2 ml-4 border-l-2 border-slate-600 pl-3">
                          {section.subsections.map((sub, subIdx) => (
                            <div key={subIdx} className="bg-slate-700/50 rounded p-2">
                              <div className="flex items-center justify-between mb-2">
                                <input
                                  type="text"
                                  value={sub.title}
                                  onChange={(e) => updateSubsection(sectionIdx, subIdx, 'title', e.target.value)}
                                  className="flex-1 px-2 py-1 bg-slate-600 border border-slate-500 rounded text-white text-xs"
                                  placeholder="Titre"
                                />
                                <button
                                  onClick={() => removeSubsection(sectionIdx, subIdx)}
                                  className="text-red-400 hover:text-red-300 p-1 ml-2"
                                >
                                  <Trash2 size={12} />
                                </button>
                              </div>
                              <input
                                type="text"
                                value={sub.articles}
                                onChange={(e) => updateSubsection(sectionIdx, subIdx, 'articles', e.target.value)}
                                className="w-full px-2 py-1 bg-slate-600 border border-slate-500 rounded text-white text-xs mb-2"
                                placeholder="Articles (ex: Art. 1-34)"
                              />
                              <textarea
                                value={sub.content}
                                onChange={(e) => updateSubsection(sectionIdx, subIdx, 'content', e.target.value)}
                                className="w-full px-2 py-1 bg-slate-600 border border-slate-500 rounded text-white text-xs resize-none font-mono"
                                rows="2"
                                placeholder="Contenu Markdown..."
                              />
                            </div>
                          ))}
                          
                          <button
                            onClick={() => addSubsection(sectionIdx)}
                            className="w-full flex items-center justify-center gap-1 px-2 py-1.5 bg-slate-700/50 hover:bg-slate-700 rounded text-xs text-blue-400"
                          >
                            <Plus size={12} /> Ajouter sous-section
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Tables */}
            <div className="bg-slate-800 rounded-lg p-5 border border-slate-700">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => setShowTables(!showTables)}
              >
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                  <Table size={20} className="text-amber-400" />
                  Tables de Référence ({tables.length})
                </h2>
                {showTables ? <ChevronDown size={20} className="text-slate-400" /> : <ChevronRight size={20} className="text-slate-400" />}
              </div>
              
              {showTables && (
                <div className="mt-4 space-y-3">
                  {tables.map((table, idx) => (
                    <div key={idx} className="bg-slate-700 rounded p-3">
                      <div className="flex items-center justify-between mb-2">
                        <input
                          type="text"
                          value={table.title}
                          onChange={(e) => updateTable(idx, 'title', e.target.value)}
                          className="flex-1 px-2 py-1 bg-slate-600 border border-slate-500 rounded text-white text-sm"
                          placeholder="Titre de la table"
                        />
                        <button
                          onClick={() => removeTable(idx)}
                          className="text-red-400 hover:text-red-300 p-1 ml-2"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                      <input
                        type="text"
                        value={table.filename}
                        onChange={(e) => updateTable(idx, 'filename', sanitizeFilename(e.target.value))}
                        className="w-full px-2 py-1 bg-slate-600 border border-slate-500 rounded text-white text-xs mb-2"
                        placeholder="nom-fichier"
                      />
                      <textarea
                        value={table.content}
                        onChange={(e) => updateTable(idx, 'content', e.target.value)}
                        className="w-full px-2 py-1 bg-slate-600 border border-slate-500 rounded text-white text-xs resize-none font-mono"
                        rows="2"
                        placeholder="Contenu de la table..."
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Preview & Download */}
          <div className="space-y-4">
            {/* Structure Preview */}
            <div className="bg-slate-800 rounded-lg p-5 border border-slate-700">
              <h3 className="text-lg font-bold text-white mb-3">📁 Structure</h3>
              <pre className="bg-slate-900 p-3 rounded text-slate-300 text-xs overflow-x-auto max-h-64 overflow-y-auto">
                {generateFolderStructure()}
              </pre>
            </div>

            {/* SKILL.md Preview */}
            <div className="bg-slate-800 rounded-lg p-5 border border-slate-700">
              <h3 className="text-lg font-bold text-white mb-3">🔍 Aperçu SKILL.md</h3>
              
              <div className="bg-slate-900 rounded p-3 max-h-72 overflow-y-auto border border-slate-700">
                <pre className="text-slate-300 text-xs whitespace-pre-wrap break-words font-mono">
                  {generateSkillMd()}
                </pre>
              </div>

              <button
                onClick={() => copyToClipboard(generateSkillMd())}
                className="w-full mt-3 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium text-sm transition"
              >
                <Copy size={16} />
                {copied === 'skill' ? '✓ Copié!' : 'Copier SKILL.md'}
              </button>
            </div>

            {/* Download */}
            <div className="bg-slate-800 rounded-lg p-5 border border-slate-700">
              <h3 className="text-lg font-bold text-white mb-4">⬇️ Télécharger</h3>
              
              <button
                onClick={downloadZip}
                disabled={!isComplete}
                className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-medium transition ${
                  isComplete
                    ? 'bg-green-600 hover:bg-green-700 text-white cursor-pointer'
                    : 'bg-slate-700 text-slate-500 cursor-not-allowed'
                }`}
              >
                <Download size={20} />
                {zipGenerated ? '✓ ZIP Téléchargé!' : 'Télécharger ZIP'}
              </button>

              {!isComplete && (
                <p className="text-slate-400 text-xs mt-2 text-center">
                  Complète les champs * pour activer
                </p>
              )}

              {isComplete && (
                <div className="mt-3 p-3 bg-green-900/50 border border-green-700 rounded-lg text-green-200 text-xs">
                  ✓ {stats.sections} sections, {stats.subsections} sous-sections, {stats.tables} tables
                </div>
              )}
            </div>

            {/* Help */}
            <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
              <h4 className="text-sm font-semibold text-white mb-2">📖 Installation</h4>
              <div className="text-xs text-slate-400 space-y-1">
                <p>1. Téléchargez le ZIP</p>
                <p>2. Extrayez dans <code className="bg-slate-700 px-1 rounded">~/.claude/skills/</code></p>
                <p>3. Ou dans <code className="bg-slate-700 px-1 rounded">.claude/skills/</code> de votre projet</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center text-slate-500 text-xs">
          <p>Générateur de Skills CPC Bénin • Me Martial Arnaud BIAOU</p>
        </div>
      </div>
    </div>
  );
}
