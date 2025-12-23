# 📤 Guide : Publier le projet sur GitHub

## Prérequis

- Git installé sur votre ordinateur
- Compte GitHub créé (https://github.com)

---

## Étape 1 : Créer le dépôt sur GitHub

1. Connectez-vous sur **github.com**
2. Cliquez sur le **+** en haut à droite → **New repository**
3. Remplissez :
   - **Repository name** : `ohada-skill-generator`
   - **Description** : `Générateur de Skills OHADA pour Claude Code`
   - Sélectionnez **Private** ou **Public** selon votre préférence
   - ❌ NE cochez PAS "Add a README file" (nous en avons déjà un)
4. Cliquez sur **Create repository**

---

## Étape 2 : Préparer le projet localement

### Option A : Téléchargez le ZIP et extrayez-le

1. Téléchargez le fichier `ohada-skill-generator.zip`
2. Extrayez-le dans un dossier de votre choix
3. Ouvrez un terminal/invite de commandes
4. Naviguez vers le dossier extrait :
   ```bash
   cd chemin/vers/ohada-skill-generator
   ```

### Option B : Si vous utilisez Claude Code

```bash
# Naviguez vers le dossier du projet
cd ~/ohada-skill-generator

# Initialisez Git si pas déjà fait
git init
```

---

## Étape 3 : Connecter et pousser vers GitHub

Exécutez ces commandes une par une dans votre terminal :

```bash
# Initialisez le dépôt Git (si pas déjà fait)
git init

# Ajoutez tous les fichiers
git add .

# Créez le premier commit
git commit -m "Initial commit: Générateur de Skills OHADA"

# Renommez la branche en 'main'
git branch -M main

# Connectez au dépôt GitHub (remplacez par votre nom d'utilisateur)
git remote add origin https://github.com/Arnaud-Biaou/ohada-skill-generator.git

# Poussez le code
git push -u origin main
```

---

## Étape 4 : Vérification

1. Retournez sur github.com/Arnaud-Biaou/ohada-skill-generator
2. Vous devriez voir tous vos fichiers
3. Le README s'affiche automatiquement en page d'accueil

---

## En cas d'erreur

### Erreur : "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/Arnaud-Biaou/ohada-skill-generator.git
```

### Erreur d'authentification
GitHub utilise maintenant des tokens au lieu de mots de passe :
1. Allez sur GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Générez un nouveau token avec les permissions "repo"
3. Utilisez ce token comme mot de passe

### Erreur : "Updates were rejected"
```bash
git pull origin main --allow-unrelated-histories
git push -u origin main
```

---

## Mises à jour futures

Pour publier des modifications :

```bash
# Ajouter les fichiers modifiés
git add .

# Créer un commit
git commit -m "Description des changements"

# Pousser vers GitHub
git push
```

---

## Structure du projet

```
ohada-skill-generator/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   └── OhadaSkillGenerator.jsx
│   ├── App.js
│   ├── index.js
│   └── index.css
├── docs/
├── .gitignore
├── CONTRIBUTING.md
├── LICENSE
├── package.json
└── README.md
```

---

## Déployer l'application (optionnel)

### Avec Vercel (recommandé - gratuit)

1. Allez sur [vercel.com](https://vercel.com)
2. Connectez-vous avec GitHub
3. Importez votre dépôt `ohada-skill-generator`
4. Cliquez sur "Deploy"
5. Votre app sera en ligne sur `ohada-skill-generator.vercel.app`

### Avec GitHub Pages

1. Ajoutez à package.json :
   ```json
   "homepage": "https://arnaud-biaou.github.io/ohada-skill-generator"
   ```
2. Installez gh-pages : 
   ```bash
   npm install --save-dev gh-pages
   ```
3. Ajoutez les scripts dans package.json :
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```
4. Déployez : 
   ```bash
   npm run deploy
   ```

---

Bonne publication ! 🚀
