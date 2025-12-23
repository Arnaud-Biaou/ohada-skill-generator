# ⚖️ Générateur de Skills OHADA

[![React](https://img.shields.io/badge/React-18.2-61DAFB?logo=react)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**Générateur de Skills pour Claude Code** - Un outil visuel pour créer des Skills documentant les procédures OHADA d'exécution forcée et de recouvrement.

![Screenshot](./docs/screenshot.png)

## ✨ Fonctionnalités

- 📚 **Sections prédéfinies OHADA** : Injonction de payer, Saisies conservatoires, Saisie-vente, etc.
- 🎨 **Interface visuelle intuitive** : Design moderne avec gradient violet/slate
- 📋 **Prévisualisation en temps réel** : Voir le SKILL.md généré instantanément
- 📁 **Génération de structure** : Visualisation de l'arborescence des fichiers
- 📦 **Export ZIP** : Téléchargez un package complet prêt pour Claude Code
- ✏️ **Édition flexible** : Modifiez le contenu de chaque section
- 🔄 **Réinitialisation** : Remise à zéro rapide du formulaire

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

## 📖 Utilisation

### 1. Remplir les informations de base

- **Nom de la Skill** : Ex: "Guide OHADA - Procédures d'Exécution"
- **Description** : Quand Claude doit utiliser cette Skill
- **Instructions Principales** : Instructions générales en Markdown

### 2. Compléter les sections de référence

8 sections prédéfinies couvrant l'AUPSRVE :
- Dispositions Communes (Art. 1 à 53)
- Injonction de Payer (Art. 2 à 18)
- Injonction de Délivrer/Restituer (Art. 19 à 27)
- Dispositions Générales Exécution (Art. 28 à 53)
- Saisies Conservatoires (Art. 54 à 90)
- Saisie-Vente (Art. 91 à 152-15)
- Saisie-Attribution (Art. 153 à 172)
- Saisie Rémunérations (Art. 173 à 217)

### 3. Exporter

- **Copier** : Copiez le SKILL.md dans le presse-papiers
- **Télécharger ZIP** : Obtenez un package complet avec tous les fichiers

### 4. Installer dans Claude Code

```bash
# Extraire le ZIP dans le dossier skills de Claude
unzip ma-skill.zip -d ~/.claude/skills/

# Ou pour un projet spécifique
unzip ma-skill.zip -d /chemin/vers/projet/.claude/skills/
```

## 📁 Structure générée

```
guide-ohada-procedures-execution/
├── SKILL.md                              # Fichier principal (navigation + instructions)
└── references/
    ├── dispositions-communes.md
    ├── injonction-de-payer.md
    ├── injonction-de-delivrer-restituer.md
    ├── dispositions-generales-execution.md
    ├── saisies-conservatoires.md
    ├── saisie-vente.md
    ├── saisie-attribution.md
    └── saisie-remunerations.md
```

## 🎯 Cas d'utilisation

### Pour les Huissiers de Justice
- Documentation rapide des procédures OHADA
- Référence pour la rédaction d'actes
- Formation des collaborateurs

### Pour les Juristes
- Aide à la rédaction de conclusions
- Vérification des délais et formalités
- Recherche jurisprudentielle

### Pour les Étudiants en Droit
- Support de révision OHADA
- Compréhension des procédures d'exécution
- Préparation aux examens

## 🛠️ Technologies

- **React 18** - Interface utilisateur
- **Tailwind CSS** - Styles (via CDN)
- **Lucide React** - Icônes
- **JSZip** - Génération de fichiers ZIP

## 📝 Personnalisation

### Ajouter de nouvelles sections

Modifiez le state initial `referenceSections` dans `OhadaSkillGenerator.jsx` :

```javascript
const [referenceSections, setReferenceSections] = useState([
  { title: 'Nouvelle Section', articles: 'Art. X à Y', content: '' },
  // ... autres sections
]);
```

### Modifier le thème

Les couleurs sont définies avec Tailwind. Modifiez les classes :

- `from-purple-900` → Couleur de fond (dégradé)
- `bg-slate-800` → Couleur des cartes
- `text-purple-400` → Couleur d'accent

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

## 📚 Références OHADA

- **AUPSRVE** : Acte Uniforme portant organisation des Procédures Simplifiées de Recouvrement et des Voies d'Exécution
- Version révisée 2023, entrée en vigueur le 16 février 2024
- [Site officiel OHADA](https://www.ohada.org)

## 🙏 Remerciements

- [Anthropic](https://www.anthropic.com/) pour Claude et Claude Code
- [OHADA](https://www.ohada.org/) pour l'harmonisation du droit des affaires
- [Lucide](https://lucide.dev/) pour les icônes
- [Tailwind CSS](https://tailwindcss.com/) pour le framework CSS

---

<p align="center">
  Fait avec ❤️ pour la communauté juridique OHADA
</p>
