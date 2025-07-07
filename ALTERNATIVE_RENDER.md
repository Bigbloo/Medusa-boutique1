# 🚀 Alternative : Déploiement sur Render.com

## ❌ Problème avec Railway ?
Si Railway continue de poser des problèmes, Render.com est une excellente alternative !

## ✅ Avantages de Render
- Plus simple à configurer
- Détection automatique des projets Node.js
- PostgreSQL gratuit inclus
- Interface plus intuitive

---

## 🔧 **Déploiement Backend sur Render**

### 1. Créer un compte Render
1. Allez sur **https://render.com**
2. **Get Started for Free**
3. Connectez-vous avec GitHub

### 2. Déployer le Backend
1. **New** → **Web Service**
2. **Connect a repository** → Sélectionnez `Medusa-boutique1`
3. **Root Directory** = `backend`
4. **Environment** = `Node`
5. **Build Command** = `yarn install && yarn build`
6. **Start Command** = `yarn start`
7. Cliquez **Create Web Service**

### 3. Ajouter PostgreSQL
1. **New** → **PostgreSQL**
2. **Name** = `medusa-database`
3. **Plan** = Free
4. Cliquez **Create Database**

### 4. Variables d'environnement Render
Dans votre Web Service → **Environment** :

```env
NODE_ENV=production
PORT=10000
DATABASE_URL=postgresql://[COPIER_DEPUIS_POSTGRES_RENDER]
JWT_SECRET=medusa_super_secret_jwt_2024_secure
COOKIE_SECRET=medusa_super_secret_cookie_2024_secure
MEDUSA_ADMIN_ONBOARDING_TYPE=nextjs
STORE_CORS=http://localhost:3000
ADMIN_CORS=http://localhost:9000
AUTH_CORS=http://localhost:3000,http://localhost:9000
```

### 5. Connecter la base de données
1. Dans PostgreSQL Render → **Info** → Copiez **External Database URL**
2. Dans Web Service → **Environment** → Collez dans `DATABASE_URL`

---

## ▲ **Alternative Frontend : Netlify**

### 1. Créer un compte Netlify
1. Allez sur **https://netlify.com**
2. **Start building for free**
3. Connectez-vous avec GitHub

### 2. Déployer le Frontend
1. **New site from Git** → **GitHub**
2. Sélectionnez `Medusa-boutique1`
3. **Base directory** = `storefront`
4. **Build command** = `npm run build`
5. **Publish directory** = `.next`
6. Cliquez **Deploy site**

### 3. Variables d'environnement Netlify
Dans **Site settings** → **Environment variables** :

```env
NEXT_PUBLIC_MEDUSA_BACKEND_URL=https://VOTRE_BACKEND.onrender.com
NEXT_PUBLIC_BASE_URL=https://VOTRE_FRONTEND.netlify.app
```

---

## 🎯 **Comparaison des plateformes**

### Railway vs Render vs Netlify

| Plateforme | Backend | Frontend | Base de données | Difficulté |
|------------|---------|----------|-----------------|------------|
| **Railway** | ✅ | ❌ | ✅ PostgreSQL | 🔴 Difficile |
| **Render** | ✅ | ❌ | ✅ PostgreSQL | 🟢 Facile |
| **Vercel** | ❌ | ✅ | ❌ | 🟢 Facile |
| **Netlify** | ❌ | ✅ | ❌ | 🟢 Facile |

### Recommandation
- **Backend** : Render.com (plus simple que Railway)
- **Frontend** : Vercel ou Netlify (au choix)

---

## 🚀 **Guide Render Complet**

### Étape 1 : Backend sur Render
1. Render.com → New Web Service
2. Repository : `Medusa-boutique1`
3. Root Directory : `backend`
4. Build : `yarn install && yarn build`
5. Start : `yarn start`

### Étape 2 : PostgreSQL sur Render
1. New → PostgreSQL
2. Copiez l'URL de connexion
3. Ajoutez dans les variables d'environnement

### Étape 3 : Frontend sur Vercel
1. Vercel.com → New Project
2. Repository : `Medusa-boutique1`
3. Root Directory : `storefront`
4. Variables : URL du backend Render

### Étape 4 : Tester
- Backend : `https://votre-backend.onrender.com/health`
- Frontend : `https://votre-frontend.vercel.app`

---

## 💡 **Pourquoi Render est plus simple**

1. **Détection automatique** : Render détecte Node.js automatiquement
2. **Root Directory** : Fonctionne mieux avec les sous-dossiers
3. **PostgreSQL gratuit** : Base de données incluse
4. **Logs clairs** : Messages d'erreur plus compréhensibles
5. **Documentation** : Guides plus simples

---

## 🆘 **Si vous préférez rester sur Railway**

Essayez cette méthode :
1. Créez un **nouveau repository GitHub** avec seulement le contenu du dossier `backend/`
2. Déployez ce nouveau repository sur Railway
3. Ce sera plus simple car Railway verra directement les fichiers Medusa

Voulez-vous que je vous aide à créer ce repository séparé ?
