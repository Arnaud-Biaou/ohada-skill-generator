# ⚖️ Générateur de Skills CPC Bénin

[![React](https://img.shields.io/badge/React-18.2-61DAFB?logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**Générateur de Skills pour Claude Code** - Un outil visuel pour créer des Skills documentant le Code de Procédure Civile du Bénin avec une structure hiérarchique complète.

![Screenshot](./docs/screenshot.png)

## ✨ Fonctionnalités

- 📚 **Structure hiérarchique** : Sections → Sous-sections avec articles
- 📊 **Tables de référence** : Délais, compétences, voies de recours
- 🎨 **Interface visuelle intuitive** : Design moderne avec gradient bleu/slate
- 📋 **15 sections prédéfinies** : Couvrant tout le CPC Bénin
- 📁 **Génération complète** : SKILL.md + fichiers de référence + tables
- 📦 **Export ZIP** : Package complet prêt pour Claude Code
- ✏️ **Édition flexible** : Ajoutez, modifiez, supprimez sections et sous-sections
- 🔄 **Versions législatives** : 2016-16, 2020-08, 2022-20 intégrées

## 🚀 Installation

### Prérequis

- Node.js 18+ installé
- npm ou yarn

### Étapes

```bash
# Cloner le dépôt
git clone https://github.com/Arnaud-Biaou/ohada-skill-generator.git

# Accéder au dossier
cd ohada-skill-generator

# Installer les dépendances
npm install

# Lancer l'application
npm start
```

L'application sera disponible sur `http://localhost:3000`

## 📖 Structure générée

```
cpc-benin/
├── SKILL.md
└── references/
    ├── 01-dispositions-communes.md
    │   ├── Principes directeurs (Art. 1-34)
    │   ├── Compétence territoriale (Art. 35-56)
    │   └── Actes de procédure (Art. 57-115)
    │
    ├── 02-demande-en-justice.md
    ├── 03-administration-preuve.md
    ├── 04-incidents-instance.md
    ├── 05-jugement.md
    ├── 06-voies-recours.md
    ├── 07-procedure-civile-tpi.md
    ├── 08-procedure-commerciale.md
    ├── 09-procedure-sociale.md
    ├── 10-procedure-administrative.md
    ├── 11-procedure-comptes.md
    ├── 12-procedures-speciales.md
    ├── 13-modifications-2016-16.md
    ├── 14-modernisation-2020-08.md
    ├── 15-modification-2022-20.md
    │
    └── tables/
        ├── delais-imperatifs.md
        ├── competences-materielles.md
        ├── competences-territoriales.md
        └── voies-recours-tableau.md
```

## 📋 Sections prédéfinies (15)

| # | Section | Contenu |
|---|---------|---------|
| 01 | Dispositions Communes | Principes directeurs, Compétence, Actes |
| 02 | Demande en Justice | Initiale, Incidentes, Moyens de défense |
| 03 | Administration Preuve | Enquêtes, Expertise, Serment, etc. |
| 04 | Incidents d'Instance | Jonction, Interruption, Péremption |
| 05 | Jugement | Prononcé, Chose jugée, Exécution provisoire |
| 06 | Voies de Recours | Opposition, Appel, Cassation |
| 07 | Procédure Civile TPI | Ordinaire, Jour fixe, Référés |
| 08 | Procédure Commerciale | Tribunaux commerce, Petites créances |
| 09 | Procédure Sociale | Compétence, Procédure, Recours |
| 10 | Procédure Administrative | REP, Plein contentieux, Référés |
| 11 | Procédure des Comptes | Juridiction, Jugement, Recours |
| 12 | Procédures Spéciales | Exequatur, Arbitrage, Reddition |
| 13 | Modifications 2016-16 | Articles modifiés |
| 14 | Modernisation 2020-08 | Électronique, Petites créances, Pool |
| 15 | Modification 2022-20 | Art. 585.1 (saisies immobilières) |

## 📊 Tables de référence (4)

- **Délais impératifs** : Tous les délais de procédure
- **Compétences matérielles** : Répartition par juridiction
- **Compétences territoriales** : Règles de territorialité
- **Voies de recours** : Tableau récapitulatif

## 🎯 Cas d'utilisation

### Pour les Huissiers de Justice
- Référence rapide des procédures
- Vérification des délais
- Formation des collaborateurs

### Pour les Avocats
- Rédaction de conclusions
- Recherche procédurale
- Préparation des audiences

### Pour les Magistrats
- Vérification des formalités
- Contrôle des délais
- Aide à la décision

## 🛠️ Technologies

- **React 18** - Interface utilisateur
- **Tailwind CSS** - Styles (via CDN)
- **Lucide React** - Icônes
- **JSZip** - Génération de fichiers ZIP

## 📝 Personnalisation

### Ajouter une section

Cliquez sur le bouton "Ajouter Section" en haut de l'interface.

### Ajouter une sous-section

1. Développez une section existante
2. Cliquez sur "Ajouter sous-section"
3. Remplissez le titre, les articles et le contenu

### Ajouter une table

Cliquez sur "Ajouter Table" pour créer une nouvelle table de référence.

## 🤝 Contribution

Les contributions sont bienvenues ! 

1. Forkez le projet
2. Créez votre branche (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add AmazingFeature'`)
4. Pushez (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 👤 Auteur

**Me Martial Arnaud BIAOU**
- Huissier de Justice près le TPI et la Cour d'Appel de Parakou (Bénin)
- Membre de la Chambre Nationale des Huissiers de Justice du Bénin
- GitHub: [@Arnaud-Biaou](https://github.com/Arnaud-Biaou)

## 📚 Références législatives

- **Code de Procédure Civile du Bénin** (version initiale)
- **Loi 2016-16** : Modifications diverses
- **Loi 2020-08** : Modernisation de la procédure civile
- **Loi 2022-20** : Dispositions sur les saisies immobilières

## 🙏 Remerciements

- [Anthropic](https://www.anthropic.com/) pour Claude et Claude Code
- [Lucide](https://lucide.dev/) pour les icônes
- [Tailwind CSS](https://tailwindcss.com/) pour le framework CSS

---

<p align="center">
  Fait avec ❤️ pour la communauté juridique béninoise
</p>
