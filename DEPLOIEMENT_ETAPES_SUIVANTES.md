# 🚀 Étapes de Déploiement - Prêt à Lancer !

Vous avez créé vos comptes GitHub, Vercel et Railway. Voici les étapes précises à suivre maintenant :

---

## 📋 **Étape 1 : Créer le Repository GitHub**

### 1.1 Sur GitHub.com :
1. Cliquez sur **"New repository"**
2. **Nom** : `medusa-boutique` (ou le nom de votre choix)
3. **Visibilité** : Public ou Private
4. ✅ Cochez **"Add a README file"**
5. Cliquez **"Create repository"**

### 1.2 Récupérer l'URL :
Copiez l'URL qui ressemble à :
```
https://github.com/VOTRE_USERNAME/medusa-boutique.git
```

---

## 📁 **Étape 2 : Upload du Code**

### 2.1 Initialiser Git (dans le dossier deployment-ready) :
```bash
cd deployment-ready
git init
git add .
git commit -m "Initial commit - Boutique Medusa"
git remote add origin https://github.com/VOTRE_USERNAME/medusa-boutique.git
git push -u origin main
```

### 2.2 Vérifier :
Actualisez votre page GitHub, vous devriez voir :
- 📁 `backend/`
- 📁 `storefront/`
- 📄 `README.md`
- 📄 `GUIDE_DEPLOIEMENT_MEDUSA.md`

---

## 🚂 **Étape 3 : Déployer le Backend sur Railway**

### 3.1 Connexion Railway :
1. Allez sur [railway.app](https://railway.app)
2. Cliquez **"New Project"**
3. Sélectionnez **"Deploy from GitHub repo"**
4. Choisissez votre repository `medusa-boutique`

### 3.2 Configuration du Service Backend :
1. Railway détecte automatiquement le projet
2. **Root Directory** : `backend`
3. Cliquez **"Deploy"**

### 3.3 Ajouter PostgreSQL :
1. Dans votre projet Railway, cliquez **"+ New"**
2. Sélectionnez **"Database" → "PostgreSQL"**
3. Railway connecte automatiquement la base

### 3.4 Variables d'Environnement Railway :
Dans Railway → Variables, ajoutez :

```env
NODE_ENV=production
PORT=9000
DATABASE_URL=${{Postgres.DATABASE_URL}}
JWT_SECRET=votre_secret_jwt_super_securise_123
COOKIE_SECRET=votre_secret_cookie_super_securise_456
STORE_CORS=https://VOTRE_PROJET.vercel.app
ADMIN_CORS=https://VOTRE_PROJET.railway.app
AUTH_CORS=https://VOTRE_PROJET.vercel.app,https://VOTRE_PROJET.railway.app
STRIPE_API_KEY=sk_test_VOTRE_CLE_STRIPE_ICI
STRIPE_WEBHOOK_SECRET=whsec_votre_webhook_secret_ici
MEDUSA_ADMIN_ONBOARDING_TYPE=nextjs
```

**⚠️ Important** : Remplacez `VOTRE_PROJET` par les vraies URLs une fois déployées.

---

## ▲ **Étape 4 : Déployer le Frontend sur Vercel**

### 4.1 Connexion Vercel :
1. Allez sur [vercel.com](https://vercel.com)
2. Cliquez **"New Project"**
3. **Import Git Repository** → Sélectionnez `medusa-boutique`

### 4.2 Configuration Vercel :
1. **Framework Preset** : Next.js
2. **Root Directory** : `storefront`
3. **Build Command** : `npm run build`
4. Cliquez **"Deploy"**

### 4.3 Variables d'Environnement Vercel :
Dans Vercel → Settings → Environment Variables :

```env
NEXT_PUBLIC_MEDUSA_BACKEND_URL=https://VOTRE_BACKEND.railway.app
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_51LdXW1DKPvCMOE5sqcHHleOwsTws2mYJV4tqeQxU0AZFuC006KXE8HEBG8S5icN1NoWvHZruTHEnt6TrG2mEUGRF00BhPNDbuX
NEXT_PUBLIC_BASE_URL=https://VOTRE_FRONTEND.vercel.app
```

---

## 🔗 **Étape 5 : Connecter Backend et Frontend**

### 5.1 Récupérer les URLs :
- **Railway Backend** : `https://votre-projet-production-xxxx.railway.app`
- **Vercel Frontend** : `https://votre-projet-xxxx.vercel.app`

### 5.2 Mettre à jour les Variables :
1. **Dans Railway** : Remplacez `VOTRE_PROJET` par les vraies URLs
2. **Dans Vercel** : Remplacez `VOTRE_BACKEND` et `VOTRE_FRONTEND`
3. **Redéployez** les deux services

---

## 🎯 **Étape 6 : Créer l'Utilisateur Admin en Production**

### 6.1 Via Railway Console :
1. Dans Railway → votre backend → **"Console"**
2. Exécutez :
```bash
npx medusa user --email admin@votre-boutique.com --password VotreMotDePasseSecurise123
```

### 6.2 Tester l'Admin :
1. Allez sur `https://votre-backend.railway.app/app`
2. Connectez-vous avec vos identifiants
3. ✅ Vous devriez voir l'interface d'administration

---

## 🧪 **Étape 7 : Tests Finaux**

### 7.1 Test Frontend :
- ✅ Page d'accueil charge
- ✅ Produits s'affichent
- ✅ Navigation fonctionne

### 7.2 Test Backend :
- ✅ Admin accessible
- ✅ Connexion réussie
- ✅ Produits visibles

### 7.3 Test Stripe :
- ✅ Processus de paiement
- ✅ Webhooks (optionnel pour les tests)

---

## 🎉 **Félicitations !**

Votre boutique est maintenant en ligne :
- 🛍️ **Boutique** : `https://votre-projet.vercel.app`
- 🔧 **Admin** : `https://votre-backend.railway.app/app`

---

## 🔄 **Prochaines Étapes**

### Personnalisation :
1. Modifiez le design localement
2. Push sur GitHub
3. Déploiement automatique

### Domaine personnalisé :
1. Achetez un domaine
2. Configurez dans Vercel
3. Mettez à jour les CORS

### Mode Production Stripe :
1. Activez le mode Live
2. Mettez à jour les clés
3. Configurez les webhooks

---

**🚀 Votre boutique e-commerce est prête à vendre !**
