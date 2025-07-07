# 🚀 Déploiement Render.com - Étapes Détaillées

## ✅ **Étape 1 : Repository GitHub créé**
✅ **FAIT** : Votre repository `medusa-backend-simple` est prêt sur GitHub !

---

## 🎯 **Étape 2 : Créer un compte Render**

1. Allez sur **https://render.com**
2. Cliquez **Get Started for Free**
3. **Sign up with GitHub** (recommandé)
4. Autorisez Render à accéder à vos repositories

---

## 🔧 **Étape 3 : Déployer le Backend**

### 3.1 Créer le Web Service
1. **Dashboard Render** → **New** → **Web Service**
2. **Connect a repository** → Cherchez `medusa-backend-simple`
3. Cliquez **Connect** sur votre repository

### 3.2 Configuration du service
- **Name** : `medusa-backend` (ou ce que vous voulez)
- **Environment** : `Node` (auto-détecté)
- **Region** : `Oregon (US West)` (gratuit)
- **Branch** : `main`
- **Build Command** : `yarn install && yarn build`
- **Start Command** : `yarn start`
- **Instance Type** : `Free`

### 3.3 Déployer
1. Cliquez **Create Web Service**
2. ⏳ **Attendez** le déploiement (5-10 minutes)
3. ✅ Vous devriez voir "Your service is live"

---

## 🗄️ **Étape 4 : Ajouter PostgreSQL**

### 4.1 Créer la base de données
1. **Dashboard** → **New** → **PostgreSQL**
2. **Name** : `medusa-database`
3. **Database** : `medusa`
4. **User** : `medusa`
5. **Region** : `Oregon (US West)` (même que le backend)
6. **Plan** : `Free`
7. Cliquez **Create Database**

### 4.2 Récupérer l'URL de connexion
1. Allez dans votre **PostgreSQL** → **Info**
2. Copiez **External Database URL**
3. Elle ressemble à : `postgresql://medusa:PASSWORD@HOST:5432/medusa`

---

## ⚙️ **Étape 5 : Variables d'environnement**

### 5.1 Aller dans les paramètres
1. **Web Service** → **Environment**
2. Cliquez **Add Environment Variable**

### 5.2 Ajouter ces variables une par une :

```env
NODE_ENV=production
PORT=10000
DATABASE_URL=postgresql://medusa:PASSWORD@HOST:5432/medusa
JWT_SECRET=medusa_super_secret_jwt_2024_secure_render
COOKIE_SECRET=medusa_super_secret_cookie_2024_secure_render
MEDUSA_ADMIN_ONBOARDING_TYPE=nextjs
STORE_CORS=http://localhost:3000
ADMIN_CORS=http://localhost:9000
AUTH_CORS=http://localhost:3000,http://localhost:9000
```

**⚠️ IMPORTANT** : Remplacez `DATABASE_URL` par l'URL copiée à l'étape 4.2

### 5.3 Redéployer
1. Cliquez **Save Changes**
2. Le service va redémarrer automatiquement

---

## 🧪 **Étape 6 : Tester le Backend**

### 6.1 Récupérer l'URL
1. Dans votre **Web Service**, copiez l'URL (ex: `https://medusa-backend-xyz.onrender.com`)

### 6.2 Tests
1. **Health check** : `https://votre-url.onrender.com/health`
   - ✅ Doit retourner `{"status":"ok"}`
2. **Admin** : `https://votre-url.onrender.com/app`
   - ✅ Doit afficher la page de connexion Medusa

---

## 👤 **Étape 7 : Créer l'utilisateur admin**

### 7.1 Ouvrir le Shell
1. **Web Service** → **Shell** (onglet en haut)
2. Attendez que le terminal se charge

### 7.2 Créer l'admin
```bash
npx medusa user --email admin@votre-boutique.com --password VotreMotDePasse123
```

### 7.3 Tester la connexion
1. Allez sur `https://votre-url.onrender.com/app`
2. Connectez-vous avec vos identifiants
3. ✅ Vous devriez voir le dashboard Medusa

---

## ▲ **Étape 8 : Déployer le Frontend sur Vercel**

### 8.1 Créer le projet Vercel
1. **https://vercel.com** → **New Project**
2. **Import Git Repository** → `Medusa-boutique1`
3. **Root Directory** : `storefront`
4. **Framework** : Next.js (auto-détecté)

### 8.2 Variables d'environnement Vercel
```env
NEXT_PUBLIC_MEDUSA_BACKEND_URL=https://votre-backend.onrender.com
NEXT_PUBLIC_BASE_URL=https://votre-frontend.vercel.app
```

### 8.3 Déployer
1. Cliquez **Deploy**
2. ⏳ Attendez le déploiement

---

## 🔗 **Étape 9 : Connecter Backend et Frontend**

### 9.1 Mettre à jour les CORS
1. **Render** → **Web Service** → **Environment**
2. Modifiez ces variables :

```env
STORE_CORS=https://votre-frontend.vercel.app
ADMIN_CORS=https://votre-backend.onrender.com
AUTH_CORS=https://votre-frontend.vercel.app,https://votre-backend.onrender.com
```

### 9.2 Test final
1. **Frontend** : `https://votre-frontend.vercel.app`
2. **Backend** : `https://votre-backend.onrender.com/health`
3. **Admin** : `https://votre-backend.onrender.com/app`

---

## 🎉 **Succès !**

Votre boutique e-commerce Medusa est maintenant en ligne :

- 🛍️ **Boutique** : `https://votre-frontend.vercel.app`
- 🔧 **Admin** : `https://votre-backend.onrender.com/app`
- 💰 **Coût** : Gratuit !

### Prochaines étapes :
1. Ajouter vos produits via l'admin
2. Configurer Stripe pour les paiements
3. Personnaliser le design
4. Configurer un domaine personnalisé

**Félicitations ! 🎊**
