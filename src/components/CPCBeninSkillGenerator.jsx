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

  // Structure EXACTE du CPC Bénin avec numéros d'articles corrects
  const [livres, setLivres] = useState([
    {
      num: 'PREMIER',
      title: 'DES DISPOSITIONS COMMUNES À TOUTES LES JURIDICTIONS',
      titres: [
        {
          num: 'PREMIER',
          title: 'DES DISPOSITIONS LIMINAIRES',
          articlesIntro: 'Art. 1er',
          contentIntro: '',
          chapitres: [
            { 
              num: 'I', 
              title: 'DES PRINCIPES DIRECTEURS DU PROCÈS CIVIL', 
              articles: 'Art. 2-18',
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
          articlesIntro: '',
          contentIntro: '',
          chapitres: [
            { 
              num: 'I', 
              title: 'DES ACTES ET DÉLAIS DE PROCÉDURE', 
              articles: 'Art. 53-115',
              sections: [
                { num: 'I', title: 'Des actes', articles: 'Art. 53-105', content: '' },
                { num: 'II', title: 'Des délais', articles: 'Art. 106-115', content: '' },
              ],
              content: '' 
            },
            { 
              num: 'II', 
              title: 'DE L\'INTRODUCTION DE L\'INSTANCE', 
              articles: 'Art. 116-159',
              sections: [
                { num: 'I', title: 'De la demande initiale', articles: 'Art. 116-132', content: '' },
                { num: 'II', title: 'Des demandes incidentes', articles: 'Art. 133-140', content: '' },
                { num: 'III', title: 'De la mise au rôle', articles: 'Art. 141-159', content: '' },
              ],
              content: '' 
            },
            { 
              num: 'III', 
              title: 'DE LA PROCÉDURE PRÉPARATOIRE AU JUGEMENT', 
              articles: 'Art. 160-390',
              sections: [
                { num: 'I', title: 'De l\'appel des causes', articles: 'Art. 160-161', content: '' },
                { num: 'II', title: 'Des moyens de défense', articles: 'Art. 162-208', content: '' },
                { num: 'III', title: 'Des mesures d\'instruction', articles: 'Art. 209-352', content: '' },
                { num: 'IV', title: 'Des contestations relatives à la preuve littérale', articles: 'Art. 353-384', content: '' },
                { num: 'V', title: 'Du serment judiciaire', articles: 'Art. 385-390', content: '' },
              ],
              content: '' 
            },
            { 
              num: 'IV', 
              title: 'DES INCIDENTS D\'INSTANCE', 
              articles: 'Art. 391-493',
              sections: [
                { num: 'I', title: 'Des demandes incidentes', articles: 'Art. 391-422', content: '' },
                { num: 'II', title: 'De l\'abstention, de la récusation et du renvoi', articles: 'Art. 423-450', content: '' },
                { num: 'III', title: 'Des jonctions et disjonctions d\'instances', articles: 'Art. 451-452', content: '' },
                { num: 'IV', title: 'De l\'interruption de l\'instance', articles: 'Art. 453-460', content: '' },
                { num: 'V', title: 'De la suspension de l\'instance', articles: 'Art. 461-468', content: '' },
                { num: 'VI', title: 'De l\'extinction de l\'instance', articles: 'Art. 469-490', content: '' },
                { num: 'VII', title: 'De l\'acquiescement', articles: 'Art. 491-493', content: '' },
              ],
              content: '' 
            },
          ]
        },
        {
          num: 'III',
          title: 'DE LA CONCILIATION, DE L\'AUDIENCE ET DU JUGEMENT',
          articlesIntro: '',
          contentIntro: '',
          chapitres: [
            { num: 'I', title: 'DE LA CONCILIATION', articles: 'Art. 494-496', sections: [], content: '' },
            { 
              num: 'II', 
              title: 'DE L\'AUDIENCE', 
              articles: 'Art. 497-521',
              sections: [
                { num: 'I', title: 'Des débats', articles: 'Art. 497-515', content: '' },
                { num: 'II', title: 'De la procédure en chambre du conseil', articles: 'Art. 516-519', content: '' },
                { num: 'III', title: 'Du délibéré', articles: 'Art. 520-521', content: '' },
              ],
              content: '' 
            },
            { 
              num: 'III', 
              title: 'DU JUGEMENT', 
              articles: 'Art. 522-606',
              articlesIntro: 'Art. 522-535',
              sections: [
                { num: 'I', title: 'Du jugement contradictoire', articles: 'Art. 536-539', content: '' },
                { num: 'II', title: 'Du jugement rendu par défaut et du jugement réputé contradictoire', articles: 'Art. 540-548', content: '' },
                { num: 'III', title: 'Des dispositions spéciales', articles: 'Art. 549-568', content: '' },
                { num: 'IV', title: 'De l\'exécution du jugement', articles: 'Art. 569-606', content: '' },
              ],
              content: '' 
            },
          ]
        },
        {
          num: 'IV',
          title: 'DES VOIES DE RECOURS',
          articlesIntro: 'Art. 607',
          contentIntro: '',
          chapitres: [
            { num: 'I', title: 'DES DISPOSITIONS COMMUNES', articles: 'Art. 608-618', sections: [], content: '' },
            { 
              num: 'II', 
              title: 'DES VOIES ORDINAIRES DE RECOURS', 
              articles: 'Art. 619-653',
              articlesIntro: 'Art. 619-620',
              sections: [
                { num: 'I', title: 'De l\'appel', articles: 'Art. 621-647', content: '' },
                { num: 'II', title: 'De l\'opposition', articles: 'Art. 648-653', content: '' },
              ],
              content: '' 
            },
            { 
              num: 'III', 
              title: 'DES VOIES DE RECOURS EXTRAORDINAIRES', 
              articles: 'Art. 654-712',
              articlesIntro: 'Art. 654-656',
              sections: [
                { num: 'I', title: 'De la tierce opposition', articles: 'Art. 657-667', content: '' },
                { num: 'II', title: 'Du recours en révision', articles: 'Art. 668-678', content: '' },
                { num: 'III', title: 'Du pourvoi en cassation', articles: 'Art. 679-712', content: '' },
              ],
              content: '' 
            },
          ]
        },
        {
          num: 'V',
          title: 'DES FRAIS ET DES DÉPENS',
          articlesIntro: '',
          contentIntro: '',
          chapitres: [
            { num: 'I', title: 'DE LA CHARGE DES DÉPENS', articles: 'Art. 713-717', sections: [], content: '' },
            { num: 'II', title: 'DE LA LIQUIDATION DES DÉPENS ET DES FRAIS', articles: 'Art. 718-724', sections: [], content: '' },
          ]
        },
        {
          num: 'VI',
          title: 'DES COMMISSIONS ROGATOIRES',
          articlesIntro: '',
          contentIntro: '',
          chapitres: [
            { num: 'I', title: 'DES COMMISSIONS ROGATOIRES INTERNES', articles: 'Art. 725-727', sections: [], content: '' },
            { 
              num: 'II', 
              title: 'DES COMMISSIONS ROGATOIRES INTERNATIONALES', 
              articles: 'Art. 728-743',
              sections: [
                { num: 'I', title: 'Des commissions rogatoires à destination d\'un État étranger', articles: 'Art. 728-730', content: '' },
                { num: 'II', title: 'Des commissions rogatoires en provenance d\'un État étranger', articles: 'Art. 731-743', content: '' },
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
          articlesIntro: '',
          contentIntro: '',
          chapitres: [
            { 
              num: 'I', 
              title: 'DE LA PROCÉDURE EN MATIÈRE CIVILE ET COMMERCIALE', 
              articles: 'Art. 744-781',
              sections: [
                { num: 'I', title: 'De la procédure en matière contentieuse', articles: 'Art. 744-768.8', content: '' },
                { num: 'II', title: 'De la procédure en matière gracieuse', articles: 'Art. 769-771', content: '' },
                { num: 'III', title: 'Des règles particulières à la matière commerciale', articles: 'Art. 772-776.9', content: '' },
                { num: 'IV', title: 'Des dispositions diverses', articles: 'Art. 777-781', content: '' },
              ],
              content: '' 
            },
            { 
              num: 'II', 
              title: 'DE LA PROCÉDURE EN MATIÈRE SOCIALE', 
              articles: 'Art. 782-817',
              sections: [
                { num: 'I', title: 'De la compétence', articles: 'Art. 782-783', content: '' },
                { num: 'II', title: 'De l\'instance', articles: 'Art. 784-810', content: '' },
                { num: 'III', title: 'Des voies de recours', articles: 'Art. 811-817', content: '' },
              ],
              content: '' 
            },
            { 
              num: 'III', 
              title: 'DE LA PROCÉDURE EN MATIÈRE ADMINISTRATIVE', 
              articles: 'Art. 818-853',
              sections: [
                { num: 'I', title: 'De la compétence', articles: 'Art. 818', content: '' },
                { num: 'II', title: 'De l\'instance', articles: 'Art. 819-848', content: '' },
                { num: 'III', title: 'Des voies de recours', articles: 'Art. 849-853', content: '' },
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
                { num: 'III', title: 'Des mesures d\'administration judiciaire', articles: 'Art. 859-861', content: '' },
              ],
              content: '' 
            },
          ]
        },
        {
          num: 'II',
          title: 'DES DISPOSITIONS PARTICULIÈRES DEVANT LA COUR D\'APPEL',
          articlesIntro: '',
          contentIntro: '',
          chapitres: [
            { 
              num: 'I', 
              title: 'DE LA PROCÉDURE EN MATIÈRE CIVILE, COMMERCIALE ET SOCIALE', 
              articles: 'Art. 862-898',
              sections: [
                { num: 'I', title: 'De la compétence, de la saisine et de la mise au rôle', articles: 'Art. 862-870', content: '' },
                { num: 'II', title: 'De l\'instance', articles: 'Art. 871-898', content: '' },
              ],
              content: '' 
            },
            { 
              num: 'II', 
              title: 'DE LA PROCÉDURE EN MATIÈRE ADMINISTRATIVE', 
              articles: 'Art. 899-905',
              sections: [
                { num: 'I', title: 'De la compétence', articles: 'Art. 899', content: '' },
                { num: 'II', title: 'De l\'instance', articles: 'Art. 900-901', content: '' },
                { num: 'III', title: 'Des recours', articles: 'Art. 902-905', content: '' },
              ],
              content: '' 
            },
            { 
              num: 'III', 
              title: 'DE LA PROCÉDURE EN MATIÈRE DES COMPTES', 
              articles: 'Art. 906-912',
              sections: [
                { num: 'I', title: 'De la compétence', articles: 'Art. 906-907', content: '' },
                { num: 'II', title: 'De l\'instance', articles: 'Art. 908-909', content: '' },
                { num: 'III', title: 'Des recours', articles: 'Art. 910-912', content: '' },
              ],
              content: '' 
            },
            { 
              num: 'IV', 
              title: 'DES POUVOIRS DU PRÉSIDENT', 
              articles: 'Art. 913-917',
              sections: [
                { num: 'I', title: 'Des ordonnances sur requête', articles: 'Art. 913-914', content: '' },
                { num: 'II', title: 'Des mesures d\'administration judiciaire', articles: 'Art. 915-917', content: '' },
              ],
              content: '' 
            },
          ]
        },
        {
          num: 'III',
          title: 'DES DISPOSITIONS PARTICULIÈRES À LA COUR SUPRÊME',
          articlesIntro: '',
          contentIntro: '',
          chapitres: [
            { 
              num: 'I', 
              title: 'DE LA PROCÉDURE EN MATIÈRE CIVILE, COMMERCIALE ET SOCIALE', 
              articles: 'Art. 918-947',
              sections: [
                { num: 'I', title: 'De la saisine', articles: 'Art. 918-932', content: '' },
                { num: 'II', title: 'De l\'instance', articles: 'Art. 933-947', content: '' },
              ],
              content: '' 
            },
            { 
              num: 'II', 
              title: 'DE LA PROCÉDURE DEVANT LA CHAMBRE ADMINISTRATIVE', 
              articles: 'Art. 948-955',
              sections: [
                { num: 'I', title: 'De la compétence', articles: 'Art. 948-952', content: '' },
                { num: 'II', title: 'De l\'instance', articles: 'Art. 953-955', content: '' },
              ],
              content: '' 
            },
            { num: 'III', title: 'DE LA PROCÉDURE DEVANT LA CHAMBRE DES COMPTES', articles: 'Art. 956-958', sections: [], content: '' },
            { 
              num: 'IV', 
              title: 'DES DISPOSITIONS DIVERSES', 
              articles: 'Art. 959-981',
              sections: [
                { num: 'I', title: 'Du désistement', articles: 'Art. 959-961', content: '' },
                { num: 'II', title: 'De la récusation', articles: 'Art. 962', content: '' },
                { num: 'III', title: 'De la demande en faux', articles: 'Art. 963-966', content: '' },
                { num: 'IV', title: 'De la prise à partie', articles: 'Art. 967-979', content: '' },
                { num: 'V', title: 'Des dispositions particulières aux juridictions de renvoi après cassation', articles: 'Art. 980-981', content: '' },
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
          articlesIntro: '',
          contentIntro: '',
          chapitres: [
            { 
              num: 'I', 
              title: 'DES BIENS', 
              articles: 'Art. 982-1063',
              sections: [
                { num: 'I', title: 'De la vente des biens immeubles appartenant à des mineurs', articles: 'Art. 982-992', content: '' },
                { num: 'II', title: 'Des partages et licitations', articles: 'Art. 993-1009', content: '' },
                { num: 'III', title: 'Des saisies', articles: 'Art. 1010-1012', content: '' },
                { num: 'IV', title: 'De la vente du mobilier', articles: 'Art. 1013-1020', content: '' },
                { num: 'V', title: 'De la procédure relative à l\'ouverture des successions', articles: 'Art. 1021-1063', content: '' },
              ],
              content: '' 
            },
            { 
              num: 'II', 
              title: 'DES PERSONNES', 
              articles: 'Art. 1064-1158',
              sections: [
                { num: 'I', title: 'Du juge des tutelles et des conseils de famille', articles: 'Art. 1064-1076', content: '' },
                { num: 'II', title: 'Des régimes de protection applicables aux majeurs', articles: 'Art. 1077-1105', content: '' },
                { num: 'III', title: 'De l\'intervention en justice quant aux droits des époux', articles: 'Art. 1106-1109', content: '' },
                { num: 'IV', title: 'De l\'apposition des scellés', articles: 'Art. 1110-1127', content: '' },
                { num: 'V', title: 'Des oppositions aux scellés', articles: 'Art. 1128-1129', content: '' },
                { num: 'VI', title: 'De la levée des scellés', articles: 'Art. 1130-1143', content: '' },
                { num: 'VII', title: 'De l\'inventaire', articles: 'Art. 1144-1147', content: '' },
                { num: 'VIII', title: 'Du bénéfice d\'inventaire', articles: 'Art. 1148-1158', content: '' },
              ],
              content: '' 
            },
          ]
        },
        {
          num: 'II',
          title: 'DE LA PROCÉDURE D\'EXEQUATUR ET DE L\'ARBITRAGE',
          articlesIntro: '',
          contentIntro: '',
          chapitres: [
            { num: 'I', title: 'DE LA PROCÉDURE D\'EXEQUATUR', articles: 'Art. 1159-1166', sections: [], content: '' },
            { num: 'II', title: 'DE LA PROCÉDURE DE L\'ARBITRAGE', articles: 'Art. 1167-1170', sections: [], content: '' },
          ]
        },
        {
          num: 'III',
          title: 'DES DISPOSITIONS DIVERSES',
          articlesIntro: '',
          contentIntro: '',
          chapitres: [
            { num: 'I', title: 'DES SAISIES', articles: 'Art. 1171', sections: [], content: '' },
            { num: 'II', title: 'DES OFFRES DE PAIEMENT ET DE LA CONSIGNATION', articles: 'Art. 1172-1177', sections: [], content: '' },
            { num: 'III', title: 'DES VOIES À PRENDRE POUR AVOIR EXPÉDITION OU COPIE D\'UN ACTE', articles: 'Art. 1178-1198', sections: [], content: '' },
            { num: 'IV', title: 'DE LA RECONSTITUTION DES ACTES DÉTRUITS', articles: 'Art. 1199-1203', sections: [], content: '' },
            { num: 'V', title: 'DES RÉCEPTIONS DE CAUTIONNEMENT', articles: 'Art. 1204-1205', sections: [], content: '' },
            { num: 'VI', title: 'DES REDDITIONS DE COMPTES', articles: 'Art. 1206-1221', sections: [], content: '' },
            { num: 'VII', title: 'DES BIENS INSAISISSABLES', articles: 'Art. 1222-1223', sections: [], content: '' },
            { num: 'VIII', title: 'DES PROCÉDURES SIMPLIFIÉES DE RECOUVREMENT', articles: 'Art. 1224', sections: [], content: '' },
            { num: 'IX', title: 'DES PETITES CRÉANCES', articles: 'Art. 1225-1226', sections: [], content: '' },
          ]
        },
        {
          num: 'IV',
          title: 'DES DISPOSITIONS TRANSITOIRES ET DIVERSES',
          articlesIntro: 'Art. 1227-1231',
          contentIntro: '',
          chapitres: []
        },
      ]
    },
  ]);

  const [modifications] = useState([
    { filename: 'loi-2016-16', title: 'Loi N° 2016-16 du 28 juillet 2016', content: '' },
    { filename: 'loi-2020-08', title: 'Loi N° 2020-08 du 23 avril 2020 (Modernisation)', subsections: ['Procédure électronique', 'Petites créances (Art. 768.1-768.8)', 'Pool de l\'exécution'], content: '' },
    { filename: 'loi-2022-20', title: 'Loi N° 2022-20 du 19 octobre 2022 (Art. 585.1, saisies immobilières)', content: '' },
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
  const [expandedTitres, setExpandedTitres] = useState({'0-0': true});
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
    livres.forEach((livre) => {
      const livreNum = romanToArabic(livre.num);
      nav += `\n## 📖 LIVRE ${livre.num} - ${livre.title}\n\n`;
      livre.titres.forEach((titre) => {
        const titreNum = romanToArabic(titre.num);
        nav += `### TITRE ${titre.num} - ${titre.title}\n\n`;
        if (titre.articlesIntro) {
          nav += `- *Dispositions introductives (${titre.articlesIntro})*\n`;
        }
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

  const generateTitreIntroContent = (livre, titre) => {
    let c = `# LIVRE ${livre.num} - ${livre.title}\n## TITRE ${titre.num} - ${titre.title}\n\n`;
    c += `## Dispositions Introductives\n\n`;
    if (titre.articlesIntro) c += `**Articles:** ${titre.articlesIntro}\n\n`;
    c += titre.contentIntro || '[Contenu à compléter]\n';
    return c;
  };

  const generateChapitreContent = (livre, titre, chap) => {
    let c = `# LIVRE ${livre.num} - ${livre.title}\n## TITRE ${titre.num} - ${titre.title}\n### CHAPITRE ${chap.num} - ${chap.title}\n\n`;
    if (chap.articles) c += `**Articles:** ${chap.articles}\n\n---\n\n`;
    if (chap.articlesIntro) {
      c += `## Dispositions préliminaires\n\n**Articles:** ${chap.articlesIntro}\n\n[Contenu à compléter]\n\n---\n\n`;
    }
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

  const updateTitre = (li, ti, field, value) => {
    const u = [...livres]; u[li].titres[ti][field] = value; setLivres(u);
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
          if (titre.contentIntro || titre.articlesIntro) {
            zip.file(`${fn}/references/livre-${ln}/titre-${tn}/00-dispositions-introductives.md`, generateTitreIntroContent(livre, titre));
          }
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
            Générateur CPC Bénin - Articles Exacts
          </h1>
          <p className="text-slate-400 text-xs">Loi N° 2008-07 - Art. 1 à 1231 (modifiée 2016, 2020, 2022)</p>
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
              <h2 className="text-sm font-bold text-white mb-2 flex items-center gap-2"><Book size={14} className="text-blue-400" /> Structure du Code (Art. 1-1231)</h2>
              <div className="space-y-2 max-h-[500px] overflow-y-auto pr-1">
                {livres.map((livre, li) => (
                  <div key={li} className="border border-slate-600 rounded">
                    <div className="flex items-center p-2 bg-blue-900/30 hover:bg-blue-900/50 cursor-pointer" onClick={() => setExpandedLivres({...expandedLivres, [li]: !expandedLivres[li]})}>
                      {expandedLivres[li] ? <ChevronDown size={12} className="text-blue-400" /> : <ChevronRight size={12} className="text-blue-400" />}
                      <span className="text-white text-sm ml-2">📖 LIVRE {livre.num}</span>
                    </div>
                    {expandedLivres[li] && (
                      <div className="p-2 space-y-2">
                        {livre.titres.map((titre, ti) => (
                          <div key={ti} className="border border-slate-600 rounded ml-2">
                            <div className="flex items-center p-2 bg-indigo-900/30 hover:bg-indigo-900/50 cursor-pointer" onClick={() => setExpandedTitres({...expandedTitres, [`${li}-${ti}`]: !expandedTitres[`${li}-${ti}`]})}>
                              {expandedTitres[`${li}-${ti}`] ? <ChevronDown size={10} className="text-indigo-400" /> : <ChevronRight size={10} className="text-indigo-400" />}
                              <span className="text-white text-xs ml-2">📁 TITRE {titre.num}</span>
                              {titre.articlesIntro && <span className="text-yellow-400 text-xs ml-2">({titre.articlesIntro})</span>}
                            </div>
                            {expandedTitres[`${li}-${ti}`] && (
                              <div className="p-2 space-y-2">
                                {titre.articlesIntro && (
                                  <div className="bg-yellow-900/20 border border-yellow-700/50 rounded p-2 mb-2">
                                    <div className="flex items-center gap-2 mb-2">
                                      <Edit3 size={12} className="text-yellow-400" />
                                      <span className="text-yellow-400 text-xs font-medium">Dispositions introductives ({titre.articlesIntro})</span>
                                    </div>
                                    <textarea 
                                      value={titre.contentIntro || ''} 
                                      onChange={e => updateTitre(li, ti, 'contentIntro', e.target.value)} 
                                      placeholder="Saisissez le contenu des articles introductifs..." 
                                      rows="3" 
                                      className="w-full px-2 py-1 bg-slate-700 border border-slate-600 rounded text-white text-xs font-mono resize-y" 
                                    />
                                  </div>
                                )}
                                
                                {titre.chapitres.map((chap, ci) => (
                                  <div key={ci} className="border border-slate-600 rounded ml-2">
                                    <div className="flex items-center justify-between p-1.5 bg-slate-700/50 hover:bg-slate-700 cursor-pointer" onClick={() => setExpandedChapitres({...expandedChapitres, [`${li}-${ti}-${ci}`]: !expandedChapitres[`${li}-${ti}-${ci}`]})}>
                                      <div className="flex items-center gap-1">
                                        {expandedChapitres[`${li}-${ti}-${ci}`] ? <ChevronDown size={10} className="text-green-400" /> : <ChevronRight size={10} className="text-green-400" />}
                                        <span className="text-white text-xs">📄 Chap. {chap.num}</span>
                                        <span className="text-slate-400 text-xs">({chap.articles})</span>
                                        {chap.sections.length > 0 && <span className="text-cyan-400 text-xs">[{chap.sections.length} sec]</span>}
                                      </div>
                                    </div>
                                    {expandedChapitres[`${li}-${ti}-${ci}`] && (
                                      <div className="p-2 bg-slate-900/50 space-y-2">
                                        <p className="text-slate-300 text-xs">{chap.title}</p>
                                        <input type="text" value={chap.articles} onChange={e => updateChapitre(li,ti,ci,'articles',e.target.value)} className="w-full px-2 py-1 bg-slate-700 border border-slate-600 rounded text-white text-xs" placeholder="Articles" />
                                        {chap.sections.length === 0 && (
                                          <textarea value={chap.content} onChange={e => updateChapitre(li,ti,ci,'content',e.target.value)} placeholder="Contenu du chapitre..." rows="4" className="w-full px-2 py-1 bg-slate-700 border border-slate-600 rounded text-white text-xs font-mono resize-y" />
                                        )}
                                        {chap.sections.length > 0 && (
                                          <div className="space-y-2">
                                            <p className="text-cyan-400 text-xs font-medium">Sections:</p>
                                            {chap.sections.map((sec, si) => (
                                              <div key={si} className="bg-slate-800/50 p-2 rounded border border-slate-600">
                                                <div className="flex items-center gap-1 mb-1">
                                                  <span className="text-slate-400 text-xs">S.{sec.num}:</span>
                                                  <input type="text" value={sec.title} onChange={e => updateSection(li,ti,ci,si,'title',e.target.value)} className="flex-1 px-1 py-0.5 bg-slate-700 border border-slate-600 rounded text-white text-xs" />
                                                  <input type="text" value={sec.articles} onChange={e => updateSection(li,ti,ci,si,'articles',e.target.value)} className="w-28 px-1 py-0.5 bg-slate-700 border border-slate-600 rounded text-white text-xs" placeholder="Articles" />
                                                  <button onClick={() => removeSection(li,ti,ci,si)} className="text-red-400 hover:text-red-300"><Trash2 size={10} /></button>
                                                </div>
                                                <textarea value={sec.content} onChange={e => updateSection(li,ti,ci,si,'content',e.target.value)} placeholder="Contenu..." rows="3" className="w-full px-2 py-1 bg-slate-700 border border-slate-600 rounded text-white text-xs font-mono resize-y" />
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
                ✓ {stats.chapitres} chapitres + {stats.sections} sections
              </div>
            </div>

            <div className="bg-yellow-900/20 rounded-lg p-3 border border-yellow-700/50">
              <h4 className="text-xs font-bold text-yellow-400 mb-2">📋 Numéros exacts</h4>
              <div className="text-xs text-slate-300 space-y-1">
                <p>• Art. 1er: TITRE PREMIER (intro)</p>
                <p>• Art. 607: TITRE IV (intro)</p>
                <p>• Art. 768.1-768.8: Petites créances (Loi 2020)</p>
                <p>• Art. 585.1: Saisies immob. (Loi 2022)</p>
                <p>• Art. 1227-1231: Dispositions finales</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
