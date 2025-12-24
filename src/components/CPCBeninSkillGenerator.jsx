import React, { useState } from 'react';
import { 
  Copy, Download, ChevronDown, ChevronRight, RotateCcw, FileText, Plus, Trash2,
  Book, Table, Scale, FileEdit, Edit3
} from 'lucide-react';

export default function CPCBeninSkillGenerator() {
  const [skillName, setSkillName] = useState('CPC Bénin - Code de Procédure Civile');
  const [skillDescription, setSkillDescription] = useState('Loi N° 2008-07 du 28 février 2011 portant Code de Procédure Civile, Commerciale, Sociale, Administrative et des Comptes - Modifiée par les lois 2016-16, 2020-08 et 2022-20');
  const [mainInstructions, setMainInstructions] = useState(`# Code de Procédure Civile du Bénin

## Source
Loi N° 2008-07 du 28 février 2011, modifiée et complétée par:
- Loi N° 2016-16 du 28 juillet 2016
- Loi N° 2020-08 du 23 avril 2020
- Loi N° 2022-20 du 19 octobre 2022

## Utilisation
Documentation complète pour les praticiens du droit béninois.`);

  // Structure EXACTE du CPC Bénin
  const [livres, setLivres] = useState([
    {
      num: 'PREMIER',
      title: 'DES DISPOSITIONS COMMUNES À TOUTES LES JURIDICTIONS',
      titres: [
        {
          num: 'PREMIER',
          title: 'DES DISPOSITIONS LIMINAIRES',
          chapitres: [
            { 
              num: 'I', 
              title: 'DES PRINCIPES DIRECTEURS DU PROCÈS CIVIL', 
              articles: 'Art. 1-18',
              sections: [
                { num: 'I', title: 'De l\'instance', articles: 'Art. 2-4', content: '' },
                { num: 'II', title: 'De l\'objet du litige', articles: 'Art. 5-6', content: '' },
                { num: 'III', title: 'Des faits', articles: 'Art. 7-9', content: '' },
                { num: 'IV', title: 'Des preuves', articles: 'Art. 10-12', content: '' },
                { num: 'V', title: 'Du droit', articles: 'Art. 13-14', content: '' },
                { num: 'VI', title: 'De la contradiction', articles: 'Art. 15-18', content: '' },
              ],
              content: '' 
            },
            { num: 'II', title: 'DE LA REPRÉSENTATION ET ASSISTANCE EN JUSTICE', articles: 'Art. 19-29', sections: [], content: '' },
            { num: 'III', title: 'DE L\'ACTION EN JUSTICE', articles: 'Art. 30-33', sections: [], content: '' },
            { 
              num: 'IV', 
              title: 'DE LA COMPÉTENCE DES JURIDICTIONS', 
              articles: 'Art. 34-52',
              sections: [
                { num: 'I', title: 'De la compétence d\'attribution', articles: 'Art. 34-39', content: '' },
                { num: 'II', title: 'De la compétence territoriale', articles: 'Art. 40-52', content: '' },
              ],
              content: '' 
            },
          ]
        },
        {
          num: 'II',
          title: 'DE L\'INTRODUCTION ET DE L\'INSTRUCTION DES INSTANCES',
          chapitres: [
            { 
              num: 'I', 
              title: 'DES ACTES ET DÉLAIS DE PROCÉDURE', 
              articles: 'Art. 53-115',
              sections: [
                { num: 'I', title: 'Des actes', articles: 'Art. 53-99', content: '' },
                { num: 'II', title: 'Des délais', articles: 'Art. 100-115', content: '' },
              ],
              content: '' 
            },
            { 
              num: 'II', 
              title: 'DE L\'INTRODUCTION DE L\'INSTANCE', 
              articles: 'Art. 116-144',
              sections: [
                { num: 'I', title: 'De la demande initiale', articles: 'Art. 116-132', content: '' },
                { num: 'II', title: 'Des demandes incidentes', articles: 'Art. 133-140', content: '' },
                { num: 'III', title: 'De la mise au rôle', articles: 'Art. 141-144', content: '' },
              ],
              content: '' 
            },
            { 
              num: 'III', 
              title: 'DE LA PROCÉDURE PRÉPARATOIRE AU JUGEMENT', 
              articles: 'Art. 145-390',
              sections: [
                { num: 'I', title: 'De l\'appel des causes', articles: '', content: '' },
                { num: 'II', title: 'Des moyens de défense', articles: '', content: '' },
                { num: 'III', title: 'Des mesures d\'instruction', articles: '', content: '' },
                { num: 'IV', title: 'Des contestations relatives à la preuve littérale', articles: '', content: '' },
                { num: 'V', title: 'Du serment judiciaire', articles: '', content: '' },
              ],
              content: '' 
            },
            { 
              num: 'IV', 
              title: 'DES INCIDENTS D\'INSTANCE', 
              articles: '',
              sections: [
                { num: 'I', title: 'Des demandes incidentes', articles: '', content: '' },
                { num: 'II', title: 'De l\'abstention, de la récusation et du renvoi', articles: '', content: '' },
                { num: 'III', title: 'Des jonctions et disjonctions d\'instances', articles: '', content: '' },
                { num: 'IV', title: 'De l\'interruption de l\'instance', articles: '', content: '' },
                { num: 'V', title: 'De la suspension de l\'instance', articles: '', content: '' },
                { num: 'VI', title: 'De l\'extinction de l\'instance', articles: '', content: '' },
                { num: 'VII', title: 'De l\'acquiescement', articles: '', content: '' },
              ],
              content: '' 
            },
          ]
        },
        {
          num: 'III',
          title: 'DE LA CONCILIATION, DE L\'AUDIENCE ET DU JUGEMENT',
          chapitres: [
            { num: 'I', title: 'DE LA CONCILIATION', articles: '', sections: [], content: '' },
            { 
              num: 'II', 
              title: 'DE L\'AUDIENCE', 
              articles: '',
              sections: [
                { num: 'I', title: 'Des débats', articles: '', content: '' },
                { num: 'II', title: 'De la procédure en chambre du conseil', articles: '', content: '' },
                { num: 'III', title: 'Du délibéré', articles: '', content: '' },
              ],
              content: '' 
            },
            { 
              num: 'III', 
              title: 'DU JUGEMENT', 
              articles: '',
              sections: [
                { num: 'I', title: 'Du jugement contradictoire', articles: '', content: '' },
                { num: 'II', title: 'Du jugement rendu par défaut et du jugement réputé contradictoire', articles: '', content: '' },
                { num: 'III', title: 'Des dispositions spéciales', articles: '', content: '' },
                { num: 'IV', title: 'De l\'exécution du jugement', articles: '', content: '' },
              ],
              content: '' 
            },
          ]
        },
        {
          num: 'IV',
          title: 'DES VOIES DE RECOURS',
          chapitres: [
            { num: 'I', title: 'DES DISPOSITIONS COMMUNES', articles: 'Art. 607-620', sections: [], content: '' },
            { 
              num: 'II', 
              title: 'DES VOIES ORDINAIRES DE RECOURS', 
              articles: 'Art. 621-656',
              sections: [
                { num: 'I', title: 'De l\'appel', articles: 'Art. 621-647', content: '' },
                { num: 'II', title: 'De l\'opposition', articles: 'Art. 648-656', content: '' },
              ],
              content: '' 
            },
            { 
              num: 'III', 
              title: 'DES VOIES DE RECOURS EXTRAORDINAIRES', 
              articles: 'Art. 657-708',
              sections: [
                { num: 'I', title: 'De la tierce opposition', articles: 'Art. 657-667', content: '' },
                { num: 'II', title: 'Du recours en révision', articles: 'Art. 668-678', content: '' },
                { num: 'III', title: 'Du pourvoi en cassation', articles: 'Art. 679-708', content: '' },
              ],
              content: '' 
            },
          ]
        },
        {
          num: 'V',
          title: 'DES FRAIS ET DES DÉPENS',
          chapitres: [
            { num: 'I', title: 'DE LA CHARGE DES DÉPENS', articles: '', sections: [], content: '' },
            { num: 'II', title: 'DE LA LIQUIDATION DES DÉPENS ET DES FRAIS', articles: '', sections: [], content: '' },
          ]
        },
        {
          num: 'VI',
          title: 'DES COMMISSIONS ROGATOIRES',
          chapitres: [
            { num: 'I', title: 'DES COMMISSIONS ROGATOIRES INTERNES', articles: '', sections: [], content: '' },
            { 
              num: 'II', 
              title: 'DES COMMISSIONS ROGATOIRES INTERNATIONALES', 
              articles: '',
              sections: [
                { num: 'I', title: 'Des commissions rogatoires à destination d\'un État étranger', articles: '', content: '' },
                { num: 'II', title: 'Des commissions rogatoires en provenance d\'un État étranger', articles: '', content: '' },
              ],
              content: '' 
            },
          ]
        },
      ]
    },
    {
      num: 'DEUXIÈME',
      title: 'DES DISPOSITIONS PARTICULIÈRES À CHAQUE JURIDICTION',
      titres: [
        {
          num: 'PREMIER',
          title: 'DE LA PROCÉDURE DEVANT LE TRIBUNAL DE PREMIÈRE INSTANCE',
          chapitres: [
            { 
              num: 'I', 
              title: 'DE LA PROCÉDURE EN MATIÈRE CIVILE ET COMMERCIALE', 
              articles: 'Art. 744-781',
              sections: [
                { num: 'I', title: 'De la procédure en matière contentieuse', articles: '', content: '' },
                { num: 'II', title: 'De la procédure en matière gracieuse', articles: '', content: '' },
                { num: 'III', title: 'Des règles particulières à la matière commerciale', articles: '', content: '' },
                { num: 'IV', title: 'Des dispositions diverses', articles: '', content: '' },
              ],
              content: '' 
            },
            { 
              num: 'II', 
              title: 'DE LA PROCÉDURE EN MATIÈRE SOCIALE', 
              articles: 'Art. 782-820',
              sections: [
                { num: 'I', title: 'De la compétence', articles: '', content: '' },
                { num: 'II', title: 'De l\'instance', articles: '', content: '' },
                { num: 'III', title: 'Des voies de recours', articles: '', content: '' },
              ],
              content: '' 
            },
            { 
              num: 'III', 
              title: 'DE LA PROCÉDURE EN MATIÈRE ADMINISTRATIVE', 
              articles: 'Art. 821-853',
              sections: [
                { num: 'I', title: 'De la compétence', articles: '', content: '' },
                { num: 'II', title: 'De l\'instance', articles: '', content: '' },
                { num: 'III', title: 'Des voies de recours', articles: '', content: '' },
              ],
              content: '' 
            },
            { 
              num: 'IV', 
              title: 'DES POUVOIRS DU PRÉSIDENT', 
              articles: 'Art. 854-861',
              sections: [
                { num: 'I', title: 'Des ordonnances de référé', articles: 'Art. 854-856', content: '' },
                { num: 'II', title: 'Des ordonnances sur requête', articles: 'Art. 857-858', content: '' },
                { num: 'III', title: 'Des mesures d\'administration judiciaire', articles: '', content: '' },
              ],
              content: '' 
            },
          ]
        },
        {
          num: 'II',
          title: 'DES DISPOSITIONS PARTICULIÈRES DEVANT LA COUR D\'APPEL',
          chapitres: [
            { 
              num: 'I', 
              title: 'DE LA PROCÉDURE EN MATIÈRE CIVILE, COMMERCIALE ET SOCIALE', 
              articles: 'Art. 862-898',
              sections: [
                { num: 'I', title: 'De la compétence, de la saisine et de la mise au rôle', articles: '', content: '' },
                { num: 'II', title: 'De l\'instance', articles: '', content: '' },
              ],
              content: '' 
            },
            { 
              num: 'II', 
              title: 'DE LA PROCÉDURE EN MATIÈRE ADMINISTRATIVE', 
              articles: 'Art. 899-905',
              sections: [
                { num: 'I', title: 'De la compétence', articles: '', content: '' },
                { num: 'II', title: 'De l\'instance', articles: '', content: '' },
                { num: 'III', title: 'Des recours', articles: '', content: '' },
              ],
              content: '' 
            },
            { 
              num: 'III', 
              title: 'DE LA PROCÉDURE EN MATIÈRE DES COMPTES', 
              articles: 'Art. 906-910',
              sections: [
                { num: 'I', title: 'De la compétence', articles: '', content: '' },
                { num: 'II', title: 'De l\'instance', articles: '', content: '' },
                { num: 'III', title: 'Des recours', articles: '', content: '' },
              ],
              content: '' 
            },
            { 
              num: 'IV', 
              title: 'DES POUVOIRS DU PRÉSIDENT', 
              articles: '',
              sections: [
                { num: 'I', title: 'Des ordonnances sur requête', articles: '', content: '' },
                { num: 'II', title: 'Des mesures d\'administration judiciaire', articles: '', content: '' },
              ],
              content: '' 
            },
          ]
        },
        {
          num: 'III',
          title: 'DES DISPOSITIONS PARTICULIÈRES À LA COUR SUPRÊME',
          chapitres: [
            { 
              num: 'I', 
              title: 'DE LA PROCÉDURE EN MATIÈRE CIVILE, COMMERCIALE ET SOCIALE', 
              articles: 'Art. 918-980',
              sections: [
                { num: 'I', title: 'De la saisine', articles: '', content: '' },
                { num: 'II', title: 'De l\'instance', articles: '', content: '' },
              ],
              content: '' 
            },
            { 
              num: 'II', 
              title: 'DE LA PROCÉDURE DEVANT LA CHAMBRE ADMINISTRATIVE', 
              articles: '',
              sections: [
                { num: 'I', title: 'De la compétence', articles: '', content: '' },
                { num: 'II', title: 'De l\'instance', articles: '', content: '' },
              ],
              content: '' 
            },
            { num: 'III', title: 'DE LA PROCÉDURE DEVANT LA CHAMBRE DES COMPTES', articles: '', sections: [], content: '' },
            { 
              num: 'IV', 
              title: 'DES DISPOSITIONS DIVERSES', 
              articles: '',
              sections: [
                { num: 'I', title: 'Du désistement', articles: '', content: '' },
                { num: 'II', title: 'De la récusation', articles: '', content: '' },
                { num: 'III', title: 'De la demande en faux', articles: '', content: '' },
                { num: 'IV', title: 'De la prise à partie', articles: '', content: '' },
                { num: 'V', title: 'Des dispositions particulières aux juridictions de renvoi après cassation', articles: '', content: '' },
              ],
              content: '' 
            },
          ]
        },
      ]
    },
    {
      num: 'TROISIÈME',
      title: 'DES PROCÉDURES PARTICULIÈRES À CERTAINES MATIÈRES',
      titres: [
        {
          num: 'I',
          title: 'DES DISPOSITIONS RELATIVES AUX PERSONNES ET À LA FAMILLE',
          chapitres: [
            { 
              num: 'I', 
              title: 'DES BIENS', 
              articles: 'Art. 981 et s.',
              sections: [
                { num: 'I', title: 'De la vente des biens immeubles appartenant à des mineurs', articles: '', content: '' },
                { num: 'II', title: 'Des partages et licitations', articles: '', content: '' },
                { num: 'III', title: 'Des saisies', articles: '', content: '' },
                { num: 'IV', title: 'De la vente du mobilier', articles: '', content: '' },
                { num: 'V', title: 'De la procédure relative à l\'ouverture des successions', articles: '', content: '' },
              ],
              content: '' 
            },
            { 
              num: 'II', 
              title: 'DES PERSONNES', 
              articles: '',
              sections: [
                { num: 'I', title: 'Du juge des tutelles et des conseils de famille', articles: '', content: '' },
                { num: 'II', title: 'Des régimes de protection applicables aux majeurs', articles: '', content: '' },
                { num: 'III', title: 'De l\'intervention en justice quant aux droits des époux', articles: '', content: '' },
                { num: 'IV', title: 'De l\'apposition des scellés', articles: '', content: '' },
                { num: 'V', title: 'Des oppositions aux scellés', articles: '', content: '' },
                { num: 'VI', title: 'De la levée des scellés', articles: '', content: '' },
                { num: 'VII', title: 'De l\'inventaire', articles: '', content: '' },
                { num: 'VIII', title: 'Du bénéfice d\'inventaire', articles: '', content: '' },
              ],
              content: '' 
            },
          ]
        },
        {
          num: 'II',
          title: 'DE LA PROCÉDURE D\'EXEQUATUR ET DE L\'ARBITRAGE',
          chapitres: [
            { num: 'I', title: 'DE LA PROCÉDURE D\'EXEQUATUR', articles: 'Art. 1159 et s.', sections: [], content: '' },
            { num: 'II', title: 'DE LA PROCÉDURE DE L\'ARBITRAGE', articles: '', sections: [], content: '' },
          ]
        },
        {
          num: 'III',
          title: 'DES DISPOSITIONS DIVERSES',
          chapitres: [
            { num: 'I', title: 'DES SAISIES', articles: '', sections: [], content: '' },
            { num: 'II', title: 'DES OFFRES DE PAIEMENT ET DE LA CONSIGNATION', articles: '', sections: [], content: '' },
            { num: 'III', title: 'DES VOIES À PRENDRE POUR AVOIR EXPÉDITION OU COPIE D\'UN ACTE', articles: '', sections: [], content: '' },
            { num: 'IV', title: 'DE LA RECONSTITUTION DES ACTES DÉTRUITS', articles: '', sections: [], content: '' },
            { num: 'V', title: 'DES RÉCEPTIONS DE CAUTIONNEMENT', articles: '', sections: [], content: '' },
            { num: 'VI', title: 'DES REDDITIONS DE COMPTES', articles: '', sections: [], content: '' },
            { num: 'VII', title: 'DES BIENS INSAISISSABLES', articles: '', sections: [], content: '' },
            { num: 'VIII', title: 'DES PROCÉDURES SIMPLIFIÉES DE RECOUVREMENT', articles: '', sections: [], content: '' },
            { num: 'IX', title: 'DES PETITES CRÉANCES', articles: 'Art. 768-1 et s.', sections: [], content: '' },
          ]
        },
        {
          num: 'IV',
          title: 'DES DISPOSITIONS TRANSITOIRES ET DIVERSES',
          chapitres: [
            { num: 'I', title: 'DES DISPOSITIONS TRANSITOIRES', articles: '', sections: [], content: '' },
            { num: 'II', title: 'DES DISPOSITIONS FINALES', articles: '', sections: [], content: '' },
          ]
        },
      ]
    },
  ]);

  const [modifications] = useState([
    { filename: 'loi-2016-16', title: 'Loi N° 2016-16 du 28 juillet 2016', content: '' },
    { filename: 'loi-2020-08', title: 'Loi N° 2020-08 du 23 avril 2020 (Modernisation)', subsections: ['Procédure électronique', 'Petites créances (Art. 768-1 et s.)', 'Pool de l\'exécution'], content: '' },
    { filename: 'loi-2022-20', title: 'Loi N° 2022-20 du 19 octobre 2022 (Saisies immobilières)', content: '' },
  ]);

  const [tables] = useState([
    { filename: 'delais-imperatifs', title: 'Délais Impératifs' },
    { filename: 'competences-attribution', title: 'Compétences d\'Attribution' },
    { filename: 'competences-territoriales', title: 'Compétences Territoriales' },
    { filename: 'voies-recours-synthese', title: 'Voies de Recours - Synthèse' },
    { filename: 'mentions-obligatoires', title: 'Mentions Obligatoires des Actes' },
  ]);

  const [copied, setCopied] = useState(null);
  const [zipGenerated, setZipGenerated] = useState(false);
  const [expandedLivres, setExpandedLivres] = useState({0: true});
  const [expandedTitres, setExpandedTitres] = useState({});
  const [expandedChapitres, setExpandedChapitres] = useState({});
  const [showModifications, setShowModifications] = useState(false);
  const [showTables, setShowTables] = useState(false);

  const sanitizeFilename = (name) => {
    return name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9-_]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '').substring(0, 50);
  };

  const romanToArabic = (roman) => {
    const map = {'I':1,'II':2,'III':3,'IV':4,'V':5,'VI':6,'VII':7,'VIII':8,'IX':9,'PREMIER':1,'DEUXIÈME':2,'TROISIÈME':3};
    return map[roman] || roman;
  };

  const generateSkillMd = () => {
    let nav = '';
    livres.forEach((livre, li) => {
      const livreNum = romanToArabic(livre.num);
      nav += `\n## 📖 LIVRE ${livre.num} - ${livre.title}\n\n`;
      livre.titres.forEach((titre, ti) => {
        const titreNum = romanToArabic(titre.num);
        nav += `### TITRE ${titre.num} - ${titre.title}\n\n`;
        titre.chapitres.forEach((chap) => {
          const path = `references/livre-${livreNum}/titre-${titreNum}/chapitre-${romanToArabic(chap.num)}.md`;
          nav += `- [**Chapitre ${chap.num}**: ${chap.title}](${path})`;
          if (chap.articles) nav += ` *(${chap.articles})*`;
          nav += '\n';
          if (chap.sections.length > 0) {
            chap.sections.forEach(s => {
              nav += `  - Section ${s.num}: ${s.title}`;
              if (s.articles) nav += ` *(${s.articles})*`;
              nav += '\n';
            });
          }
        });
        nav += '\n';
      });
    });
    nav += `## 📜 MODIFICATIONS LÉGISLATIVES\n\n`;
    modifications.forEach(m => nav += `- [${m.title}](references/modifications/${m.filename}.md)\n`);
    nav += `\n## 📊 TABLES DE RÉFÉRENCE\n\n`;
    tables.forEach(t => nav += `- [${t.title}](references/tables/${t.filename}.md)\n`);
    return `---\nname: "${sanitizeFilename(skillName)}"\ndescription: "${skillDescription}"\n---\n\n# ${skillName}\n\n${nav}\n\n## Instructions\n\n${mainInstructions}\n`;
  };

  const generateChapitreContent = (livre, titre, chap) => {
    let c = `# LIVRE ${livre.num} - ${livre.title}\n## TITRE ${titre.num} - ${titre.title}\n### CHAPITRE ${chap.num} - ${chap.title}\n\n`;
    if (chap.articles) c += `**Articles:** ${chap.articles}\n\n---\n\n`;
    if (chap.sections.length > 0) {
      chap.sections.forEach(s => {
        c += `## Section ${s.num} - ${s.title}\n\n`;
        if (s.articles) c += `**Articles:** ${s.articles}\n\n`;
        c += (s.content || '[Contenu à compléter]') + '\n\n---\n\n';
      });
    } else {
      c += chap.content || '[Contenu à compléter]\n';
    }
    return c;
  };

  const updateSection = (li, ti, ci, si, field, value) => {
    const u = [...livres]; u[li].titres[ti].chapitres[ci].sections[si][field] = value; setLivres(u);
  };
  const updateChapitre = (li, ti, ci, field, value) => {
    const u = [...livres]; u[li].titres[ti].chapitres[ci][field] = value; setLivres(u);
  };
  const addSection = (li, ti, ci) => {
    const u = [...livres]; const secs = u[li].titres[ti].chapitres[ci].sections;
    const nums = ['I','II','III','IV','V','VI','VII','VIII','IX','X'];
    secs.push({ num: nums[secs.length] || String(secs.length+1), title: 'Nouvelle section', articles: '', content: '' });
    setLivres(u);
  };
  const removeSection = (li, ti, ci, si) => {
    const u = [...livres]; u[li].titres[ti].chapitres[ci].sections.splice(si, 1); setLivres(u);
  };

  const downloadZip = () => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js';
    script.onload = () => {
      const zip = new window.JSZip();
      const fn = sanitizeFilename(skillName);
      zip.file(`${fn}/SKILL.md`, generateSkillMd());
      livres.forEach((livre) => {
        const ln = romanToArabic(livre.num);
        livre.titres.forEach((titre) => {
          const tn = romanToArabic(titre.num);
          titre.chapitres.forEach((chap) => {
            const cn = romanToArabic(chap.num);
            zip.file(`${fn}/references/livre-${ln}/titre-${tn}/chapitre-${cn}.md`, generateChapitreContent(livre, titre, chap));
          });
        });
      });
      modifications.forEach(m => {
        let c = `# ${m.title}\n\n`;
        if (m.subsections) { c += '## Contenu\n\n'; m.subsections.forEach(s => c += `- ${s}\n`); c += '\n'; }
        c += m.content || '[Contenu à compléter]\n';
        zip.file(`${fn}/references/modifications/${m.filename}.md`, c);
      });
      tables.forEach(t => zip.file(`${fn}/references/tables/${t.filename}.md`, `# ${t.title}\n\n[Contenu à compléter]\n`));
      zip.generateAsync({type:'blob'}).then(content => {
        const url = URL.createObjectURL(content);
        const a = document.createElement('a'); a.href = url; a.download = `${fn}.zip`;
        document.body.appendChild(a); a.click(); document.body.removeChild(a);
        setZipGenerated(true); setTimeout(() => setZipGenerated(false), 3000);
      });
    };
    document.body.appendChild(script);
  };

  const stats = {
    livres: livres.length,
    titres: livres.reduce((a,l) => a + l.titres.length, 0),
    chapitres: livres.reduce((a,l) => a + l.titres.reduce((b,t) => b + t.chapitres.length, 0), 0),
    sections: livres.reduce((a,l) => a + l.titres.reduce((b,t) => b + t.chapitres.reduce((c,ch) => c + ch.sections.length, 0), 0), 0),
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-slate-900 to-slate-900 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-4">
          <h1 className="text-2xl font-bold text-white mb-1 flex items-center gap-2">
            <Scale size={24} className="text-blue-400" />
            Générateur CPC Bénin - Structure Officielle
          </h1>
          <p className="text-slate-400 text-xs">Loi N° 2008-07 du 28 février 2011 (modifiée 2016, 2020, 2022)</p>
        </div>

        <div className="mb-4 grid grid-cols-4 gap-2">
          {[['Livres', stats.livres, 'blue'], ['Titres', stats.titres, 'indigo'], ['Chapitres', stats.chapitres, 'green'], ['Sections', stats.sections, 'cyan']].map(([l,v,c]) => (
            <div key={l} className="bg-slate-800/50 rounded p-2 text-center border border-slate-700">
              <div className={`text-lg font-bold text-${c}-400`}>{v}</div>
              <div className="text-xs text-slate-400">{l}</div>
            </div>
          ))}
        </div>

        <div className="flex gap-2 mb-4">
          <button onClick={() => window.confirm('Réinitialiser?') && window.location.reload()} className="flex items-center gap-1 px-3 py-1.5 rounded bg-slate-700 text-slate-300 hover:bg-slate-600 text-sm">
            <RotateCcw size={14} /> Reset
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
              <h2 className="text-sm font-bold text-white mb-2 flex items-center gap-2"><FileText size={14} className="text-blue-400" /> Informations</h2>
              <div className="space-y-2">
                <input type="text" value={skillName} onChange={e => setSkillName(e.target.value)} className="w-full px-3 py-1.5 bg-slate-700 border border-slate-600 rounded text-white text-sm" />
                <input type="text" value={skillDescription} onChange={e => setSkillDescription(e.target.value)} className="w-full px-3 py-1.5 bg-slate-700 border border-slate-600 rounded text-white text-sm" />
                <textarea value={mainInstructions} onChange={e => setMainInstructions(e.target.value)} rows="3" className="w-full px-3 py-1.5 bg-slate-700 border border-slate-600 rounded text-white text-sm font-mono resize-none" />
              </div>
            </div>

            <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
              <h2 className="text-sm font-bold text-white mb-2 flex items-center gap-2"><Book size={14} className="text-blue-400" /> Structure du Code</h2>
              <div className="space-y-2 max-h-[500px] overflow-y-auto pr-1">
                {livres.map((livre, li) => (
                  <div key={li} className="border border-slate-600 rounded">
                    <div className="flex items-center p-2 bg-blue-900/30 hover:bg-blue-900/50 cursor-pointer" onClick={() => setExpandedLivres({...expandedLivres, [li]: !expandedLivres[li]})}>
                      {expandedLivres[li] ? <ChevronDown size={12} className="text-blue-400" /> : <ChevronRight size={12} className="text-blue-400" />}
                      <span className="text-white text-sm ml-2">📖 LIVRE {livre.num} - {livre.title}</span>
                    </div>
                    {expandedLivres[li] && (
                      <div className="p-2 space-y-2">
                        {livre.titres.map((titre, ti) => (
                          <div key={ti} className="border border-slate-600 rounded ml-2">
                            <div className="flex items-center p-2 bg-indigo-900/30 hover:bg-indigo-900/50 cursor-pointer" onClick={() => setExpandedTitres({...expandedTitres, [`${li}-${ti}`]: !expandedTitres[`${li}-${ti}`]})}>
                              {expandedTitres[`${li}-${ti}`] ? <ChevronDown size={10} className="text-indigo-400" /> : <ChevronRight size={10} className="text-indigo-400" />}
                              <span className="text-white text-xs ml-2">📁 TITRE {titre.num} - {titre.title}</span>
                            </div>
                            {expandedTitres[`${li}-${ti}`] && (
                              <div className="p-2 space-y-1">
                                {titre.chapitres.map((chap, ci) => (
                                  <div key={ci} className="border border-slate-600 rounded ml-2">
                                    <div className="flex items-center justify-between p-1.5 bg-slate-700/50 hover:bg-slate-700 cursor-pointer" onClick={() => setExpandedChapitres({...expandedChapitres, [`${li}-${ti}-${ci}`]: !expandedChapitres[`${li}-${ti}-${ci}`]})}>
                                      <div className="flex items-center gap-1">
                                        {expandedChapitres[`${li}-${ti}-${ci}`] ? <ChevronDown size={10} className="text-green-400" /> : <ChevronRight size={10} className="text-green-400" />}
                                        <span className="text-white text-xs">📄 Chap. {chap.num}: {chap.title.substring(0,40)}...</span>
                                        {chap.sections.length > 0 && <span className="text-cyan-400 text-xs">[{chap.sections.length} sec]</span>}
                                      </div>
                                    </div>
                                    {expandedChapitres[`${li}-${ti}-${ci}`] && (
                                      <div className="p-2 bg-slate-900/50 space-y-2">
                                        <input type="text" value={chap.articles} onChange={e => updateChapitre(li,ti,ci,'articles',e.target.value)} className="w-full px-2 py-1 bg-slate-700 border border-slate-600 rounded text-white text-xs" placeholder="Articles (ex: Art. 1-18)" />
                                        {chap.sections.length === 0 && (
                                          <textarea value={chap.content} onChange={e => updateChapitre(li,ti,ci,'content',e.target.value)} placeholder="Contenu du chapitre..." rows="4" className="w-full px-2 py-1 bg-slate-700 border border-slate-600 rounded text-white text-xs font-mono resize-y" />
                                        )}
                                        {chap.sections.length > 0 && (
                                          <div className="space-y-2">
                                            <p className="text-cyan-400 text-xs font-medium">Sections:</p>
                                            {chap.sections.map((sec, si) => (
                                              <div key={si} className="bg-slate-800/50 p-2 rounded border border-slate-600">
                                                <div className="flex items-center gap-1 mb-1">
                                                  <span className="text-slate-400 text-xs">Section {sec.num}:</span>
                                                  <input type="text" value={sec.title} onChange={e => updateSection(li,ti,ci,si,'title',e.target.value)} className="flex-1 px-1 py-0.5 bg-slate-700 border border-slate-600 rounded text-white text-xs" />
                                                  <input type="text" value={sec.articles} onChange={e => updateSection(li,ti,ci,si,'articles',e.target.value)} className="w-24 px-1 py-0.5 bg-slate-700 border border-slate-600 rounded text-white text-xs" placeholder="Articles" />
                                                  <button onClick={() => removeSection(li,ti,ci,si)} className="text-red-400 hover:text-red-300"><Trash2 size={10} /></button>
                                                </div>
                                                <textarea value={sec.content} onChange={e => updateSection(li,ti,ci,si,'content',e.target.value)} placeholder="Contenu de la section..." rows="3" className="w-full px-2 py-1 bg-slate-700 border border-slate-600 rounded text-white text-xs font-mono resize-y" />
                                              </div>
                                            ))}
                                          </div>
                                        )}
                                        <button onClick={() => addSection(li,ti,ci)} className="w-full flex items-center justify-center gap-1 px-2 py-1 bg-cyan-900/30 hover:bg-cyan-900/50 rounded text-xs text-cyan-400">
                                          <Plus size={10} /> Section
                                        </button>
                                      </div>
                                    )}
                                  </div>
                                ))}
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

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-800 rounded-lg p-3 border border-slate-700">
                <div className="flex items-center justify-between cursor-pointer" onClick={() => setShowModifications(!showModifications)}>
                  <h2 className="text-xs font-bold text-white flex items-center gap-1"><FileEdit size={12} className="text-amber-400" /> Modifications ({modifications.length})</h2>
                  {showModifications ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
                </div>
                {showModifications && <div className="mt-2 space-y-1">{modifications.map((m,i) => <div key={i} className="bg-slate-700/50 rounded p-1.5 text-xs text-white">{m.title}</div>)}</div>}
              </div>
              <div className="bg-slate-800 rounded-lg p-3 border border-slate-700">
                <div className="flex items-center justify-between cursor-pointer" onClick={() => setShowTables(!showTables)}>
                  <h2 className="text-xs font-bold text-white flex items-center gap-1"><Table size={12} className="text-purple-400" /> Tables ({tables.length})</h2>
                  {showTables ? <ChevronDown size={12} /> : <ChevronRight size={12} />}
                </div>
                {showTables && <div className="mt-2 space-y-1">{tables.map((t,i) => <div key={i} className="bg-slate-700/50 rounded p-1.5 text-xs text-white">{t.title}</div>)}</div>}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
              <h3 className="text-sm font-bold text-white mb-2">🔍 Aperçu SKILL.md</h3>
              <div className="bg-slate-900 rounded p-2 max-h-60 overflow-y-auto border border-slate-700">
                <pre className="text-slate-300 text-xs whitespace-pre-wrap font-mono">{generateSkillMd()}</pre>
              </div>
              <button onClick={() => { navigator.clipboard.writeText(generateSkillMd()); setCopied(true); setTimeout(() => setCopied(null), 2000); }} className="w-full mt-2 flex items-center justify-center gap-1 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs">
                <Copy size={12} /> {copied ? '✓ Copié!' : 'Copier'}
              </button>
            </div>

            <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
              <button onClick={downloadZip} className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded font-medium bg-green-600 hover:bg-green-700 text-white">
                <Download size={16} /> {zipGenerated ? '✓ Téléchargé!' : 'Télécharger ZIP'}
              </button>
              <div className="mt-2 p-2 bg-green-900/30 border border-green-700 rounded text-green-200 text-xs text-center">
                ✓ {stats.chapitres} chapitres + {modifications.length + tables.length} annexes
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700">
              <h4 className="text-xs font-bold text-white mb-2">📖 Structure Officielle</h4>
              <div className="space-y-1 text-xs text-slate-300">
                <p>• <strong>LIVRE I:</strong> Dispositions communes (6 titres)</p>
                <p>• <strong>LIVRE II:</strong> Dispositions particulières (3 titres)</p>
                <p>• <strong>LIVRE III:</strong> Procédures particulières (4 titres)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
