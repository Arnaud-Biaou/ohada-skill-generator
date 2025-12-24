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
  Book,
  Table,
  Scale,
  FileEdit,
  Folder,
  File,
  Edit3
} from 'lucide-react';

export default function CPCBeninSkillGenerator() {
  const [skillName, setSkillName] = useState('CPC Bénin - Code de Procédure Civile');
  const [skillDescription, setSkillDescription] = useState('Documentation complète du Code de Procédure Civile du Bénin avec toutes les modifications législatives (2016-16, 2020-08, 2022-20)');
  const [mainInstructions, setMainInstructions] = useState(`# Code de Procédure Civile du Bénin

## À Propos de cette Skill

Documentation exhaustive du Code de Procédure Civile du Bénin, incluant:
- Les dispositions originales organisées en 3 Livres
- Les modifications de la Loi 2016-16
- La modernisation par la Loi 2020-08 (procédure électronique, petites créances)
- Les ajouts de la Loi 2022-20 (saisies immobilières)

## Utilisation

Accède rapidement aux articles et procédures selon le type de contentieux ou la phase procédurale.`);

  // Structure complète : Livres → Titres → Chapitres (avec sections optionnelles)
  const [livres, setLivres] = useState([
    {
      num: '1',
      title: 'Dispositions Communes',
      titres: [
        {
          num: '1',
          title: 'Dispositions Liminaires',
          type: 'folder',
          content: '',
          chapitres: [
            { num: '1', title: 'Principes Directeurs', articles: 'Art. 1-21', type: 'file', sections: [], content: '' },
            { num: '2', title: 'Représentation et Assistance', articles: 'Art. 22-29', type: 'file', sections: [], content: '' },
            { num: '3', title: 'Action en Justice', articles: 'Art. 30-33', type: 'file', sections: [], content: '' },
            { 
              num: '4', 
              title: 'Compétence des Juridictions', 
              articles: 'Art. 34-52',
              type: 'file',
              sections: [
                { num: '1', title: 'Compétence d\'attribution', articles: 'Art. 34-39', content: '' },
                { num: '2', title: 'Compétence territoriale', articles: 'Art. 40-52', content: '' }
              ],
              content: '' 
            },
          ]
        },
        {
          num: '2',
          title: 'Introduction et Instruction de l\'Instance',
          type: 'folder',
          content: '',
          chapitres: [
            { num: '1', title: 'Actes et Délais de Procédure', articles: 'Art. 53-115', type: 'file', sections: [], content: '' },
            { 
              num: '2', 
              title: 'Introduction de l\'Instance', 
              articles: 'Art. 116-144',
              type: 'file',
              sections: [
                { num: '1', title: 'Demande initiale', articles: 'Art. 116-132', content: '' },
                { num: '2', title: 'Demandes incidentes', articles: 'Art. 133-140', content: '' },
                { num: '3', title: 'Mise au rôle', articles: 'Art. 141-144', content: '' }
              ],
              content: '' 
            },
            { num: '3', title: 'Instruction de l\'Affaire', articles: 'Art. 145-390', type: 'file', sections: [], content: '' },
          ]
        },
        {
          num: '3',
          title: 'Jugement',
          type: 'folder',
          content: '',
          chapitres: [
            { num: '1', title: 'Dispositions Générales', articles: 'Art. 500-540', type: 'file', sections: [], content: '' },
            { num: '2', title: 'Défaut', articles: 'Art. 541-548', type: 'file', sections: [], content: '' },
            { 
              num: '3', 
              title: 'Dispositions Spéciales aux Jugements', 
              articles: 'Art. 549-606',
              type: 'file',
              sections: [
                { num: '1', title: 'Jugements sur le fond', articles: 'Art. 549-570', content: '' },
                { num: '2', title: 'Exécution provisoire', articles: 'Art. 597-606', content: '' },
                { num: '3', title: 'Délai de grâce, astreinte', articles: 'Art. 593-596', content: '' }
              ],
              content: '' 
            },
          ]
        },
        {
          num: '4',
          title: 'Voies de Recours',
          type: 'folder',
          content: '',
          chapitres: [
            { num: '1', title: 'Dispositions Communes', articles: 'Art. 607-620', type: 'file', sections: [], content: '' },
            { 
              num: '2', 
              title: 'Voies de Recours Ordinaires', 
              articles: 'Art. 621-656',
              type: 'folder',
              sections: [
                { num: '1', title: 'Appel', articles: 'Art. 621-647', content: '' },
                { num: '2', title: 'Opposition', articles: 'Art. 648-653', content: '' }
              ],
              content: '' 
            },
            { 
              num: '3', 
              title: 'Voies de Recours Extraordinaires', 
              articles: 'Art. 657-708',
              type: 'folder',
              sections: [
                { num: '1', title: 'Tierce opposition', articles: 'Art. 657-667', content: '' },
                { num: '2', title: 'Recours en révision', articles: 'Art. 668-678', content: '' },
                { num: '3', title: 'Pourvoi en cassation', articles: 'Art. 679-708', content: '' }
              ],
              content: '' 
            },
          ]
        },
        {
          num: '6',
          title: 'Coopération Judiciaire Internationale',
          type: 'file',
          articles: 'Art. 709-743',
          chapitres: [],
          content: ''
        },
      ]
    },
    {
      num: '2',
      title: 'Dispositions Particulières aux Juridictions',
      titres: [
        {
          num: '1',
          title: 'Procédure devant le TPI',
          type: 'folder',
          content: '',
          chapitres: [
            { num: '1', title: 'Matière Civile et Commerciale', articles: 'Art. 744-781', type: 'file', sections: [], content: '' },
            { num: '2', title: 'Matière Sociale', articles: 'Art. 782-820', type: 'file', sections: [], content: '' },
            { num: '3', title: 'Matière Administrative', articles: 'Art. 821-853', type: 'file', sections: [], content: '' },
            { 
              num: '4', 
              title: 'Pouvoirs du Président du TPI', 
              articles: 'Art. 854-861',
              type: 'file',
              sections: [
                { num: '1', title: 'Référés', articles: 'Art. 854-856', content: '' },
                { num: '2', title: 'Ordonnances sur requête', articles: 'Art. 857-858', content: '' }
              ],
              content: '' 
            },
          ]
        },
        {
          num: '2',
          title: 'Procédure devant la Cour d\'Appel',
          type: 'folder',
          content: '',
          chapitres: [
            { num: '1', title: 'Matière Civile, Commerciale et Sociale', articles: 'Art. 862-898', type: 'file', sections: [], content: '' },
            { num: '2', title: 'Matière Administrative', articles: 'Art. 899-905', type: 'file', sections: [], content: '' },
            { num: '3', title: 'Matière des Comptes', articles: 'Art. 906-910', type: 'file', sections: [], content: '' },
          ]
        },
        {
          num: '3',
          title: 'Procédure devant la Cour Suprême',
          type: 'file',
          articles: 'Art. 918-980',
          chapitres: [],
          content: ''
        },
      ]
    },
    {
      num: '3',
      title: 'Procédures Particulières',
      titres: [
        {
          num: '1',
          title: 'Personnes et Famille',
          type: 'file',
          articles: 'Art. 981 et s.',
          chapitres: [],
          content: ''
        },
        {
          num: '2',
          title: 'Arbitrage et Exequatur',
          type: 'file',
          articles: 'Art. 1159 et s.',
          chapitres: [],
          content: ''
        },
        {
          num: '3',
          title: 'Dispositions Diverses',
          type: 'file',
          articles: 'Art. 1171 et s.',
          chapitres: [],
          content: ''
        },
      ]
    },
  ]);

  // Modifications législatives
  const [modifications, setModifications] = useState([
    { filename: 'loi-2016-16-modifications', title: 'Loi 2016-16 - Modifications', subsections: [], content: '' },
    { 
      filename: 'loi-2020-08-modernisation', 
      title: 'Loi 2020-08 - Modernisation',
      subsections: [
        'Procédure électronique (Art. 57, 116 modifiés)',
        'Petites créances (Art. 768-1 et s.)',
        'Pool de l\'exécution'
      ],
      content: '' 
    },
    { filename: 'loi-2022-20-article-585-1', title: 'Loi 2022-20 - Article 585.1 (saisies immobilières)', subsections: [], content: '' },
  ]);

  // Tables de référence
  const [tables, setTables] = useState([
    { filename: 'delais-imperatifs', title: 'Délais Impératifs', content: '' },
    { filename: 'competences-attribution', title: 'Compétences d\'Attribution', content: '' },
    { filename: 'competences-territoriales', title: 'Compétences Territoriales', content: '' },
    { filename: 'voies-recours-synthese', title: 'Voies de Recours - Synthèse', content: '' },
    { filename: 'mentions-obligatoires', title: 'Mentions Obligatoires', content: '' },
  ]);

  const [copied, setCopied] = useState(null);
  const [zipGenerated, setZipGenerated] = useState(false);
  const [expandedLivres, setExpandedLivres] = useState({});
  const [expandedTitres, setExpandedTitres] = useState({});
  const [expandedChapitres, setExpandedChapitres] = useState({});
  const [showModifications, setShowModifications] = useState(false);
  const [showTables, setShowTables] = useState(false);
  
  // État pour l'édition du contenu
  const [editingContent, setEditingContent] = useState(null);

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
    let navigation = '';
    
    livres.forEach((livre) => {
      const livreSlug = `livre-${livre.num}-${sanitizeFilename(livre.title)}`;
      navigation += `\n## 📖 Livre ${livre.num} - ${livre.title}\n\n`;
      
      livre.titres.forEach((titre) => {
        const titreSlug = `titre-${titre.num}-${sanitizeFilename(titre.title)}`;
        
        if (titre.type === 'file') {
          const filePath = `references/${livreSlug}/${titreSlug}.md`;
          navigation += `### [Titre ${titre.num} - ${titre.title}](${filePath})`;
          if (titre.articles) navigation += ` *(${titre.articles})*`;
          navigation += '\n\n';
        } else {
          navigation += `### Titre ${titre.num} - ${titre.title}\n`;
          
          titre.chapitres.forEach((chap) => {
            const chapSlug = `chap-${chap.num}-${sanitizeFilename(chap.title)}`;
            
            if (chap.type === 'folder' && chap.sections.length > 0) {
              navigation += `- 📁 **Chapitre ${chap.num}: ${chap.title}**`;
              if (chap.articles) navigation += ` *(${chap.articles})*`;
              navigation += '\n';
              
              chap.sections.forEach((section) => {
                const secSlug = `section-${section.num}-${sanitizeFilename(section.title)}`;
                const secPath = `references/${livreSlug}/${titreSlug}/${chapSlug}/${secSlug}.md`;
                navigation += `  - [Section ${section.num}: ${section.title}](${secPath})`;
                if (section.articles) navigation += ` *(${section.articles})*`;
                navigation += '\n';
              });
            } else {
              const filePath = `references/${livreSlug}/${titreSlug}/${chapSlug}.md`;
              navigation += `- [Chapitre ${chap.num}: ${chap.title}](${filePath})`;
              if (chap.articles) navigation += ` *(${chap.articles})*`;
              navigation += '\n';
              
              if (chap.sections && chap.sections.length > 0) {
                chap.sections.forEach((section) => {
                  navigation += `  - Section ${section.num}: ${section.title}`;
                  if (section.articles) navigation += ` *(${section.articles})*`;
                  navigation += '\n';
                });
              }
            }
          });
          navigation += '\n';
        }
      });
    });

    navigation += `## 📜 Modifications Législatives\n\n`;
    modifications.forEach((mod) => {
      navigation += `- [${mod.title}](references/modifications/${mod.filename}.md)\n`;
    });

    navigation += `\n## 📊 Tables de Référence\n\n`;
    tables.forEach((table) => {
      navigation += `- [${table.title}](references/tables/${table.filename}.md)\n`;
    });

    return `---
name: "${cleanedName}"
description: "${skillDescription}"
---

# ${skillName}

${navigation}

## Instructions

${mainInstructions}
`;
  };

  // Générer le contenu d'un titre-fichier
  const generateTitreContent = (livre, titre) => {
    let content = `# Livre ${livre.num} - ${livre.title}\n`;
    content += `## Titre ${titre.num} - ${titre.title}\n\n`;
    if (titre.articles) content += `**Articles:** ${titre.articles}\n\n`;
    content += `---\n\n`;
    content += titre.content || `[Contenu à compléter]\n`;
    return content;
  };

  // Générer le contenu d'un chapitre
  const generateChapitreContent = (livre, titre, chapitre) => {
    let content = `# Livre ${livre.num} - ${livre.title}\n`;
    content += `## Titre ${titre.num} - ${titre.title}\n`;
    content += `### Chapitre ${chapitre.num} - ${chapitre.title}\n\n`;
    if (chapitre.articles) content += `**Articles:** ${chapitre.articles}\n\n`;
    content += `---\n\n`;
    
    if (chapitre.sections && chapitre.sections.length > 0 && chapitre.type === 'file') {
      chapitre.sections.forEach((section) => {
        content += `## Section ${section.num} - ${section.title}\n\n`;
        if (section.articles) content += `**Articles:** ${section.articles}\n\n`;
        content += section.content || `[Contenu à compléter]\n`;
        content += '\n---\n\n';
      });
    } else {
      content += chapitre.content || `[Contenu à compléter]\n`;
    }
    return content;
  };

  // Générer le contenu d'une section séparée
  const generateSectionContent = (livre, titre, chapitre, section) => {
    let content = `# Livre ${livre.num} - ${livre.title}\n`;
    content += `## Titre ${titre.num} - ${titre.title}\n`;
    content += `### Chapitre ${chapitre.num} - ${chapitre.title}\n`;
    content += `#### Section ${section.num} - ${section.title}\n\n`;
    if (section.articles) content += `**Articles:** ${section.articles}\n\n`;
    content += `---\n\n`;
    content += section.content || `[Contenu à compléter]\n`;
    return content;
  };

  // Générer l'aperçu de la structure
  const generateFolderStructure = () => {
    const cleanedName = sanitizeFilename(skillName);
    let structure = `${cleanedName}/\n├── SKILL.md\n└── references/\n`;
    
    livres.forEach((livre, livreIdx) => {
      const livreSlug = `livre-${livre.num}-${sanitizeFilename(livre.title)}`;
      const isLastLivre = livreIdx === livres.length - 1 && modifications.length === 0 && tables.length === 0;
      structure += `    ${isLastLivre ? '└──' : '├──'} ${livreSlug}/\n`;
      
      livre.titres.forEach((titre, titreIdx) => {
        const titreSlug = `titre-${titre.num}-${sanitizeFilename(titre.title)}`;
        const isLastTitre = titreIdx === livre.titres.length - 1;
        const titreConnector = isLastLivre ? '    ' : '│   ';
        
        if (titre.type === 'file') {
          structure += `    ${titreConnector}${isLastTitre ? '└──' : '├──'} ${titreSlug}.md\n`;
        } else {
          structure += `    ${titreConnector}${isLastTitre ? '└──' : '├──'} ${titreSlug}/\n`;
          
          titre.chapitres.forEach((chap, chapIdx) => {
            const chapSlug = `chap-${chap.num}-${sanitizeFilename(chap.title)}`;
            const isLastChap = chapIdx === titre.chapitres.length - 1;
            const chapConnector = isLastTitre ? '    ' : '│   ';
            
            if (chap.type === 'folder' && chap.sections.length > 0) {
              structure += `    ${titreConnector}${chapConnector}${isLastChap ? '└──' : '├──'} ${chapSlug}/\n`;
              chap.sections.forEach((sec, secIdx) => {
                const secSlug = `section-${sec.num}-${sanitizeFilename(sec.title)}.md`;
                const isLastSec = secIdx === chap.sections.length - 1;
                const secConnector = isLastChap ? '    ' : '│   ';
                structure += `    ${titreConnector}${chapConnector}${secConnector}${isLastSec ? '└──' : '├──'} ${secSlug}\n`;
              });
            } else {
              structure += `    ${titreConnector}${chapConnector}${isLastChap ? '└──' : '├──'} ${chapSlug}.md\n`;
            }
          });
        }
      });
    });
    
    if (modifications.length > 0) {
      structure += `    ${tables.length > 0 ? '├──' : '└──'} modifications/\n`;
      modifications.forEach((mod, idx) => {
        const connector = tables.length > 0 ? '│   ' : '    ';
        structure += `    ${connector}${idx === modifications.length - 1 ? '└──' : '├──'} ${mod.filename}.md\n`;
      });
    }
    
    if (tables.length > 0) {
      structure += `    └── tables/\n`;
      tables.forEach((table, idx) => {
        structure += `        ${idx === tables.length - 1 ? '└──' : '├──'} ${table.filename}.md\n`;
      });
    }
    
    return structure;
  };

  // Mettre à jour un titre
  const updateTitre = (livreIdx, titreIdx, field, value) => {
    const updated = [...livres];
    updated[livreIdx].titres[titreIdx][field] = value;
    setLivres(updated);
  };

  // Mettre à jour un chapitre
  const updateChapitre = (livreIdx, titreIdx, chapIdx, field, value) => {
    const updated = [...livres];
    updated[livreIdx].titres[titreIdx].chapitres[chapIdx][field] = value;
    setLivres(updated);
  };

  // Mettre à jour une section
  const updateSection = (livreIdx, titreIdx, chapIdx, secIdx, field, value) => {
    const updated = [...livres];
    updated[livreIdx].titres[titreIdx].chapitres[chapIdx].sections[secIdx][field] = value;
    setLivres(updated);
  };

  // Toggle chapitre type
  const toggleChapitreType = (livreIdx, titreIdx, chapIdx) => {
    const updated = [...livres];
    const chap = updated[livreIdx].titres[titreIdx].chapitres[chapIdx];
    chap.type = chap.type === 'file' ? 'folder' : 'file';
    setLivres(updated);
  };

  // Ajouter une section
  const addSection = (livreIdx, titreIdx, chapIdx) => {
    const updated = [...livres];
    const sections = updated[livreIdx].titres[titreIdx].chapitres[chapIdx].sections;
    sections.push({ num: String(sections.length + 1), title: 'Nouvelle section', articles: '', content: '' });
    setLivres(updated);
  };

  // Supprimer une section
  const removeSection = (livreIdx, titreIdx, chapIdx, secIdx) => {
    const updated = [...livres];
    const sections = updated[livreIdx].titres[titreIdx].chapitres[chapIdx].sections;
    sections.splice(secIdx, 1);
    sections.forEach((s, i) => { s.num = String(i + 1); });
    setLivres(updated);
  };

  // Ajouter un chapitre
  const addChapitre = (livreIdx, titreIdx) => {
    const updated = [...livres];
    const chapitres = updated[livreIdx].titres[titreIdx].chapitres;
    chapitres.push({ num: String(chapitres.length + 1), title: 'Nouveau Chapitre', articles: '', type: 'file', sections: [], content: '' });
    setLivres(updated);
  };

  // Supprimer un chapitre
  const removeChapitre = (livreIdx, titreIdx, chapIdx) => {
    const updated = [...livres];
    const chapitres = updated[livreIdx].titres[titreIdx].chapitres;
    chapitres.splice(chapIdx, 1);
    chapitres.forEach((c, i) => { c.num = String(i + 1); });
    setLivres(updated);
  };

  // Mettre à jour une modification
  const updateModification = (idx, field, value) => {
    const updated = [...modifications];
    updated[idx][field] = value;
    setModifications(updated);
  };

  // Mettre à jour une table
  const updateTable = (idx, field, value) => {
    const updated = [...tables];
    updated[idx][field] = value;
    setTables(updated);
  };

  // Copier dans le presse-papiers
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(null), 2000);
  };

  // Télécharger le ZIP
  const downloadZip = () => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js';
    script.onload = () => {
      const JSZip = window.JSZip;
      const zip = new JSZip();
      const folderName = sanitizeFilename(skillName);

      zip.file(`${folderName}/SKILL.md`, generateSkillMd());

      livres.forEach((livre) => {
        const livreSlug = `livre-${livre.num}-${sanitizeFilename(livre.title)}`;
        
        livre.titres.forEach((titre) => {
          const titreSlug = `titre-${titre.num}-${sanitizeFilename(titre.title)}`;
          
          if (titre.type === 'file') {
            zip.file(`${folderName}/references/${livreSlug}/${titreSlug}.md`, generateTitreContent(livre, titre));
          } else {
            titre.chapitres.forEach((chapitre) => {
              const chapSlug = `chap-${chapitre.num}-${sanitizeFilename(chapitre.title)}`;
              
              if (chapitre.type === 'folder' && chapitre.sections.length > 0) {
                chapitre.sections.forEach((section) => {
                  const secSlug = `section-${section.num}-${sanitizeFilename(section.title)}`;
                  zip.file(
                    `${folderName}/references/${livreSlug}/${titreSlug}/${chapSlug}/${secSlug}.md`,
                    generateSectionContent(livre, titre, chapitre, section)
                  );
                });
              } else {
                zip.file(
                  `${folderName}/references/${livreSlug}/${titreSlug}/${chapSlug}.md`,
                  generateChapitreContent(livre, titre, chapitre)
                );
              }
            });
          }
        });
      });

      modifications.forEach((mod) => {
        let content = `# ${mod.title}\n\n`;
        if (mod.subsections && mod.subsections.length > 0) {
          content += `## Contenu\n\n`;
          mod.subsections.forEach((sub) => { content += `- ${sub}\n`; });
          content += '\n';
        }
        content += mod.content || '[Contenu à compléter]\n';
        zip.file(`${folderName}/references/modifications/${mod.filename}.md`, content);
      });

      tables.forEach((table) => {
        zip.file(`${folderName}/references/tables/${table.filename}.md`, `# ${table.title}\n\n${table.content || '[Contenu à compléter]'}\n`);
      });

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
  };

  const resetForm = () => { if (window.confirm('Réinitialiser ?')) window.location.reload(); };

  const isComplete = skillName && skillDescription && mainInstructions;
  
  // Calcul des stats
  let fileCount = 0;
  livres.forEach(livre => {
    livre.titres.forEach(titre => {
      if (titre.type === 'file') {
        fileCount++;
      } else {
        titre.chapitres.forEach(chap => {
          if (chap.type === 'folder' && chap.sections.length > 0) {
            fileCount += chap.sections.length;
          } else {
            fileCount++;
          }
        });
      }
    });
  });
  fileCount += modifications.length + tables.length;

  const stats = {
    livres: livres.length,
    titres: livres.reduce((acc, l) => acc + l.titres.length, 0),
    chapitres: livres.reduce((acc, l) => acc + l.titres.reduce((a, t) => a + (t.chapitres ? t.chapitres.length : 0), 0), 0),
    files: fileCount
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-slate-900 to-slate-900 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-4">
          <h1 className="text-2xl font-bold text-white mb-1 flex items-center gap-2">
            <Scale size={24} className="text-blue-400" />
            Générateur de Skills CPC Bénin
          </h1>
          <p className="text-slate-400 text-xs">Structure : Livres → Titres → Chapitres → Sections (avec contenu éditable)</p>
        </div>

        {/* Stats */}
        <div className="mb-4 grid grid-cols-4 gap-2">
          <div className="bg-slate-800/50 rounded p-2 text-center border border-slate-700">
            <div className="text-lg font-bold text-blue-400">{stats.livres}</div>
            <div className="text-xs text-slate-400">Livres</div>
          </div>
          <div className="bg-slate-800/50 rounded p-2 text-center border border-slate-700">
            <div className="text-lg font-bold text-indigo-400">{stats.titres}</div>
            <div className="text-xs text-slate-400">Titres</div>
          </div>
          <div className="bg-slate-800/50 rounded p-2 text-center border border-slate-700">
            <div className="text-lg font-bold text-green-400">{stats.chapitres}</div>
            <div className="text-xs text-slate-400">Chapitres</div>
          </div>
          <div className="bg-slate-800/50 rounded p-2 text-center border border-slate-700">
            <div className="text-lg font-bold text-amber-400">{stats.files}</div>
            <div className="text-xs text-slate-400">Fichiers</div>
          </div>
        </div>

        <div className="flex gap-2 mb-4">
          <button onClick={resetForm} className="flex items-center gap-1 px-3 py-1.5 rounded bg-slate-700 text-slate-300 hover:bg-slate-600 text-sm">
            <RotateCcw size={14} /> Reset
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-4">
            {/* Info */}
            <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
              <h2 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                <FileText size={14} className="text-blue-400" /> Informations
              </h2>
              <div className="space-y-2">
                <input type="text" value={skillName} onChange={(e) => setSkillName(e.target.value)} placeholder="Nom" className="w-full px-3 py-1.5 bg-slate-700 border border-slate-600 rounded text-white text-sm" />
                <input type="text" value={skillDescription} onChange={(e) => setSkillDescription(e.target.value)} placeholder="Description" className="w-full px-3 py-1.5 bg-slate-700 border border-slate-600 rounded text-white text-sm" />
                <textarea value={mainInstructions} onChange={(e) => setMainInstructions(e.target.value)} placeholder="Instructions" rows="3" className="w-full px-3 py-1.5 bg-slate-700 border border-slate-600 rounded text-white text-sm font-mono resize-none" />
              </div>
            </div>

            {/* Livres */}
            <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
              <h2 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                <Book size={14} className="text-blue-400" /> Structure du Code
              </h2>
              <div className="space-y-2 max-h-[500px] overflow-y-auto pr-1">
                {livres.map((livre, livreIdx) => (
                  <div key={livreIdx} className="border border-slate-600 rounded overflow-hidden">
                    <div className="flex items-center justify-between p-2 bg-blue-900/30 hover:bg-blue-900/50 cursor-pointer" onClick={() => setExpandedLivres({...expandedLivres, [livreIdx]: !expandedLivres[livreIdx]})}>
                      <div className="flex items-center gap-2">
                        {expandedLivres[livreIdx] ? <ChevronDown size={12} className="text-blue-400" /> : <ChevronRight size={12} className="text-blue-400" />}
                        <span className="text-white text-sm">📖 Livre {livre.num} - {livre.title}</span>
                      </div>
                    </div>
                    {expandedLivres[livreIdx] && (
                      <div className="p-2 bg-slate-800/50 space-y-2">
                        {livre.titres.map((titre, titreIdx) => (
                          <div key={titreIdx} className="border border-slate-600 rounded ml-2">
                            <div className="flex items-center p-2 bg-indigo-900/30 hover:bg-indigo-900/50 cursor-pointer" onClick={() => setExpandedTitres({...expandedTitres, [`${livreIdx}-${titreIdx}`]: !expandedTitres[`${livreIdx}-${titreIdx}`]})}>
                              <div className="flex items-center gap-2 flex-1">
                                {expandedTitres[`${livreIdx}-${titreIdx}`] ? <ChevronDown size={10} className="text-indigo-400" /> : <ChevronRight size={10} className="text-indigo-400" />}
                                {titre.type === 'file' ? <File size={12} className="text-yellow-400" /> : <Folder size={12} className="text-indigo-400" />}
                                <span className="text-white text-xs">Titre {titre.num} - {titre.title}</span>
                                {titre.articles && <span className="text-slate-400 text-xs">({titre.articles})</span>}
                              </div>
                            </div>
                            
                            {expandedTitres[`${livreIdx}-${titreIdx}`] && (
                              <div className="p-2 space-y-2 bg-slate-900/30">
                                {/* Si titre = fichier, afficher zone de contenu */}
                                {titre.type === 'file' && (
                                  <div className="ml-2">
                                    <label className="text-xs text-cyan-400 flex items-center gap-1 mb-1">
                                      <Edit3 size={10} /> Contenu du titre (Markdown)
                                    </label>
                                    <textarea
                                      value={titre.content}
                                      onChange={(e) => updateTitre(livreIdx, titreIdx, 'content', e.target.value)}
                                      placeholder="Saisissez le contenu des articles ici..."
                                      rows="6"
                                      className="w-full px-2 py-1.5 bg-slate-700 border border-slate-600 rounded text-white text-xs font-mono resize-y"
                                    />
                                  </div>
                                )}
                                
                                {/* Si titre = dossier, afficher chapitres */}
                                {titre.type === 'folder' && titre.chapitres.map((chap, chapIdx) => (
                                  <div key={chapIdx} className="border border-slate-600 rounded ml-2">
                                    <div className="flex items-center justify-between p-1.5 bg-slate-700/50 hover:bg-slate-700 cursor-pointer" onClick={() => setExpandedChapitres({...expandedChapitres, [`${livreIdx}-${titreIdx}-${chapIdx}`]: !expandedChapitres[`${livreIdx}-${titreIdx}-${chapIdx}`]})}>
                                      <div className="flex items-center gap-1 flex-1">
                                        {expandedChapitres[`${livreIdx}-${titreIdx}-${chapIdx}`] ? <ChevronDown size={10} className="text-green-400" /> : <ChevronRight size={10} className="text-green-400" />}
                                        {chap.type === 'folder' ? <Folder size={10} className="text-amber-400" /> : <File size={10} className="text-green-400" />}
                                        <span className="text-white text-xs truncate">Ch.{chap.num}: {chap.title}</span>
                                        {chap.articles && <span className="text-slate-400 text-xs">({chap.articles})</span>}
                                        {chap.sections.length > 0 && <span className="text-cyan-400 text-xs">[{chap.sections.length} sec]</span>}
                                      </div>
                                      <button onClick={(e) => { e.stopPropagation(); removeChapitre(livreIdx, titreIdx, chapIdx); }} className="text-red-400 hover:text-red-300 p-0.5">
                                        <Trash2 size={10} />
                                      </button>
                                    </div>
                                    
                                    {expandedChapitres[`${livreIdx}-${titreIdx}-${chapIdx}`] && (
                                      <div className="p-2 bg-slate-900/50 space-y-2">
                                        <div className="flex gap-2 items-center">
                                          <input type="text" value={chap.title} onChange={(e) => updateChapitre(livreIdx, titreIdx, chapIdx, 'title', e.target.value)} className="flex-1 px-2 py-1 bg-slate-700 border border-slate-600 rounded text-white text-xs" placeholder="Titre" />
                                          <button onClick={() => toggleChapitreType(livreIdx, titreIdx, chapIdx)} className="px-2 py-1 bg-slate-600 hover:bg-slate-500 rounded text-xs text-white whitespace-nowrap">
                                            {chap.type === 'file' ? '→ Dossier' : '→ Fichier'}
                                          </button>
                                        </div>
                                        <input type="text" value={chap.articles} onChange={(e) => updateChapitre(livreIdx, titreIdx, chapIdx, 'articles', e.target.value)} className="w-full px-2 py-1 bg-slate-700 border border-slate-600 rounded text-white text-xs" placeholder="Articles (ex: Art. 1-21)" />
                                        
                                        {/* Zone de contenu pour chapitre sans sections ou type fichier */}
                                        {(chap.type === 'file' && chap.sections.length === 0) && (
                                          <div>
                                            <label className="text-xs text-cyan-400 flex items-center gap-1 mb-1">
                                              <Edit3 size={10} /> Contenu du chapitre (Markdown)
                                            </label>
                                            <textarea
                                              value={chap.content}
                                              onChange={(e) => updateChapitre(livreIdx, titreIdx, chapIdx, 'content', e.target.value)}
                                              placeholder="Saisissez le contenu des articles ici..."
                                              rows="5"
                                              className="w-full px-2 py-1.5 bg-slate-700 border border-slate-600 rounded text-white text-xs font-mono resize-y"
                                            />
                                          </div>
                                        )}
                                        
                                        {/* Sections */}
                                        {chap.sections.length > 0 && (
                                          <div className="mt-2 space-y-2">
                                            <p className="text-cyan-400 text-xs font-medium">
                                              Sections {chap.type === 'folder' ? '(fichiers séparés)' : '(dans le fichier)'}:
                                            </p>
                                            {chap.sections.map((sec, secIdx) => (
                                              <div key={secIdx} className="bg-slate-800/50 p-2 rounded border border-slate-600">
                                                <div className="flex items-center gap-1 mb-2">
                                                  <span className="text-slate-400 text-xs">S{sec.num}:</span>
                                                  <input type="text" value={sec.title} onChange={(e) => updateSection(livreIdx, titreIdx, chapIdx, secIdx, 'title', e.target.value)} className="flex-1 px-1 py-0.5 bg-slate-700 border border-slate-600 rounded text-white text-xs" placeholder="Titre section" />
                                                  <input type="text" value={sec.articles} onChange={(e) => updateSection(livreIdx, titreIdx, chapIdx, secIdx, 'articles', e.target.value)} className="w-24 px-1 py-0.5 bg-slate-700 border border-slate-600 rounded text-white text-xs" placeholder="Articles" />
                                                  <button onClick={() => removeSection(livreIdx, titreIdx, chapIdx, secIdx)} className="text-red-400 hover:text-red-300">
                                                    <Trash2 size={10} />
                                                  </button>
                                                </div>
                                                <textarea
                                                  value={sec.content}
                                                  onChange={(e) => updateSection(livreIdx, titreIdx, chapIdx, secIdx, 'content', e.target.value)}
                                                  placeholder="Contenu de la section (Markdown)..."
                                                  rows="4"
                                                  className="w-full px-2 py-1 bg-slate-700 border border-slate-600 rounded text-white text-xs font-mono resize-y"
                                                />
                                              </div>
                                            ))}
                                          </div>
                                        )}
                                        
                                        <button onClick={() => addSection(livreIdx, titreIdx, chapIdx)} className="w-full flex items-center justify-center gap-1 px-2 py-1 bg-cyan-900/30 hover:bg-cyan-900/50 rounded text-xs text-cyan-400">
                                          <Plus size={10} /> Ajouter Section
                                        </button>
                                      </div>
                                    )}
                                  </div>
                                ))}
                                
                                {titre.type === 'folder' && (
                                  <button onClick={() => addChapitre(livreIdx, titreIdx)} className="w-full flex items-center justify-center gap-1 px-2 py-1 bg-green-900/30 hover:bg-green-900/50 rounded text-xs text-green-400 ml-2">
                                    <Plus size={10} /> Ajouter Chapitre
                                  </button>
                                )}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Modifications */}
            <div className="bg-slate-800 rounded-lg p-3 border border-slate-700">
              <div className="flex items-center justify-between cursor-pointer" onClick={() => setShowModifications(!showModifications)}>
                <h2 className="text-xs font-bold text-white flex items-center gap-1"><FileEdit size={12} className="text-amber-400" /> Modifications ({modifications.length})</h2>
                {showModifications ? <ChevronDown size={12} className="text-slate-400" /> : <ChevronRight size={12} className="text-slate-400" />}
              </div>
              {showModifications && (
                <div className="mt-2 space-y-2">
                  {modifications.map((mod, idx) => (
                    <div key={idx} className="bg-slate-700/50 rounded p-2">
                      <p className="text-white text-xs font-medium mb-1">{mod.title}</p>
                      <textarea
                        value={mod.content}
                        onChange={(e) => updateModification(idx, 'content', e.target.value)}
                        placeholder="Contenu de la modification (Markdown)..."
                        rows="3"
                        className="w-full px-2 py-1 bg-slate-700 border border-slate-600 rounded text-white text-xs font-mono resize-y"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Tables */}
            <div className="bg-slate-800 rounded-lg p-3 border border-slate-700">
              <div className="flex items-center justify-between cursor-pointer" onClick={() => setShowTables(!showTables)}>
                <h2 className="text-xs font-bold text-white flex items-center gap-1"><Table size={12} className="text-purple-400" /> Tables ({tables.length})</h2>
                {showTables ? <ChevronDown size={12} className="text-slate-400" /> : <ChevronRight size={12} className="text-slate-400" />}
              </div>
              {showTables && (
                <div className="mt-2 space-y-2">
                  {tables.map((table, idx) => (
                    <div key={idx} className="bg-slate-700/50 rounded p-2">
                      <p className="text-white text-xs font-medium mb-1">{table.title}</p>
                      <textarea
                        value={table.content}
                        onChange={(e) => updateTable(idx, 'content', e.target.value)}
                        placeholder="Contenu de la table (Markdown)..."
                        rows="3"
                        className="w-full px-2 py-1 bg-slate-700 border border-slate-600 rounded text-white text-xs font-mono resize-y"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
              <h3 className="text-sm font-bold text-white mb-2">📁 Structure</h3>
              <pre className="bg-slate-900 p-2 rounded text-slate-300 text-xs overflow-auto max-h-44">{generateFolderStructure()}</pre>
            </div>
            
            <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
              <h3 className="text-sm font-bold text-white mb-2">🔍 SKILL.md</h3>
              <div className="bg-slate-900 rounded p-2 max-h-36 overflow-y-auto border border-slate-700">
                <pre className="text-slate-300 text-xs whitespace-pre-wrap font-mono">{generateSkillMd()}</pre>
              </div>
              <button onClick={() => copyToClipboard(generateSkillMd())} className="w-full mt-2 flex items-center justify-center gap-1 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs">
                <Copy size={12} /> {copied ? '✓ Copié!' : 'Copier'}
              </button>
            </div>
            
            <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
              <button onClick={downloadZip} disabled={!isComplete} className={`w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded font-medium ${isComplete ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-slate-700 text-slate-500 cursor-not-allowed'}`}>
                <Download size={16} /> {zipGenerated ? '✓ Téléchargé!' : 'Télécharger ZIP'}
              </button>
              {isComplete && <div className="mt-2 p-2 bg-green-900/30 border border-green-700 rounded text-green-200 text-xs text-center">✓ {stats.files} fichiers prêts</div>}
            </div>
            
            {/* Légende */}
            <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700">
              <h4 className="text-xs font-bold text-white mb-2">📖 Guide</h4>
              <div className="space-y-1 text-xs text-slate-300">
                <p>• <Edit3 size={10} className="inline text-cyan-400" /> Zones de texte pour saisir le contenu Markdown</p>
                <p>• <File size={10} className="inline text-yellow-400" /> Fichier .md unique</p>
                <p>• <Folder size={10} className="inline text-amber-400" /> Dossier avec sections séparées</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
