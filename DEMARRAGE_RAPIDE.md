# 🚀 Démarrage Rapide - Déploiement de votre Boutique

## ✅ Prérequis
Vous avez déjà créé vos comptes :
- ✅ GitHub
- ✅ Vercel  
- ✅ Railway

## 📋 Étapes à suivre maintenant

### 1️⃣ **Créer le Repository GitHub** (5 minutes)

1. Allez sur [github.com](https://github.com)
2. Cliquez **"New repository"**
3. Nom : `medusa-boutique`
4. Cochez **"Add a README file"**
5. Cliquez **"Create repository"**

### 2️⃣ **Upload du Code** (5 minutes)

Dans votre terminal, depuis le dossier `deployment-ready` :

```bash
cd deployment-ready
git init
git add .
git commit -m "Initial commit - Boutique Medusa"
git remote add origin https://github.com/VOTRE_USERNAME/medusa-boutique.git
git push -u origin main
```

### 3️⃣ **Déployer le Backend sur Railway** (10 minutes)

1. Allez sur [railway.app](https://railway.app)
2. **"New Project"** → **"Deploy from GitHub repo"**
3. Sélectionnez `medusa-boutique`
4. **Root Directory** : `backend`
5. Ajoutez **PostgreSQL** : **"+ New"** → **"Database"** → **"PostgreSQL"**

**Variables d'environnement Railway :**
```env
NODE_ENV=production
PORT=9000
DATABASE_URL=${{Postgres.DATABASE_URL}}
JWT_SECRET=votre_secret_jwt_super_securise_123
COOKIE_SECRET=votre_secret_cookie_super_securise_456
STRIPE_API_KEY=sk_test_VOTRE_CLE_STRIPE_ICI
STRIPE_WEBHOOK_SECRET=whsec_votre_webhook_secret_ici
MEDUSA_ADMIN_ONBOARDING_TYPE=nextjs
```

### 4️⃣ **Déployer le Frontend sur Vercel** (5 minutes)

1. Allez sur [vercel.com](https://vercel.com)
2. **"New Project"** → Sélectionnez `medusa-boutique`
3. **Root Directory** : `storefront`
4. **Framework** : Next.js
5. Cliquez **"Deploy"**

**Variables d'environnement Vercel :**
```env
NEXT_PUBLIC_MEDUSA_BACKEND_URL=https://VOTRE_BACKEND.railway.app
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_51LdXW1DKPvCMOE5sqcHHleOwsTws2mYJV4tqeQxU0AZFuC006KXE8HEBG8S5icN1NoWvHZruTHEnt6TrG2mEUGRF00BhPNDbuX
NEXT_PUBLIC_BASE_URL=https://VOTRE_FRONTEND.vercel.app
```

### 5️⃣ **Connecter Backend et Frontend** (5 minutes)

1. **Récupérez les URLs** générées par Railway et Vercel
2. **Mettez à jour les variables** avec les vraies URLs
3. **Redéployez** si nécessaire

### 6️⃣ **Créer l'Admin en Production** (2 minutes)

Dans Railway → Console :
```bash
npx medusa user --email admin@votre-boutique.com --password VotreMotDePasseSecurise123
```

## 🎉 **Résultat Final**

Votre boutique sera accessible :
- 🛍️ **Frontend** : `https://votre-projet.vercel.app`
- 🔧 **Admin** : `https://votre-backend.railway.app/app`

## 💰 **Coût Total**
- **Railway** : ~$5-10/mois
- **Vercel** : Gratuit
- **Total** : ~$5-10/mois

## 📞 **Aide**

Si vous avez des questions, consultez :
- `GUIDE_DEPLOIEMENT_MEDUSA.md` (guide complet)
- `DEPLOIEMENT_ETAPES_SUIVANTES.md` (étapes détaillées)

**🚀 Temps total estimé : 30 minutes**
