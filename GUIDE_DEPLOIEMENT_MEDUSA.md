# 🚀 Guide de Déploiement Medusa - Boutiques E-commerce

## 📋 Vue d'ensemble

Ce guide vous explique comment déployer vos boutiques Medusa en production avec l'architecture recommandée :
- **Backend Medusa** : Railway
- **Frontend Storefront** : Vercel
- **Base de données** : PostgreSQL (Railway)

---

## 🎯 Étape 1 : Préparation du code

### 1.1 Créer un repository GitHub

1. Allez sur [GitHub.com](https://github.com)
2. Créez un nouveau repository : `medusa-boutique`
3. Initialisez Git dans votre projet :

```bash
cd /Users/athomeproject/Desktop
git init
git add .
git commit -m "Initial commit - Medusa boutique"
git remote add origin https://github.com/VOTRE_USERNAME/medusa-boutique.git
git push -u origin main
```

### 1.2 Structure recommandée

```
medusa-boutique/
├── backend/          # Dossier bigtest
├── storefront/       # Dossier bigtest-storefront
├── README.md
└── .gitignore
```

---

## 🔧 Étape 2 : Déploiement du Backend (Railway)

### 2.1 Inscription Railway

1. Allez sur [Railway.app](https://railway.app)
2. Connectez-vous avec GitHub
3. Cliquez sur "New Project"

### 2.2 Configuration Railway

1. **Sélectionnez** "Deploy from GitHub repo"
2. **Choisissez** votre repository `medusa-boutique`
3. **Configurez** le service :
   - **Root Directory** : `bigtest` (votre dossier backend)
   - **Build Command** : `npm run build`
   - **Start Command** : `npm run start`

### 2.3 Variables d'environnement Railway

Dans Railway, ajoutez ces variables :

```env
# Base
NODE_ENV=production
PORT=9000

# Database (Railway génère automatiquement)
DATABASE_URL=${{Postgres.DATABASE_URL}}

# Secrets
JWT_SECRET=votre_jwt_secret_production
COOKIE_SECRET=votre_cookie_secret_production

# CORS (remplacez par vos domaines)
STORE_CORS=https://votre-boutique.vercel.app
ADMIN_CORS=https://votre-backend.railway.app
AUTH_CORS=https://votre-boutique.vercel.app,https://votre-backend.railway.app

# Stripe PRODUCTION
STRIPE_API_KEY=sk_live_VOTRE_CLE_LIVE_STRIPE
STRIPE_WEBHOOK_SECRET=whsec_VOTRE_WEBHOOK_SECRET

# Medusa
MEDUSA_ADMIN_ONBOARDING_TYPE=nextjs
```

### 2.4 Ajouter PostgreSQL

1. Dans Railway, cliquez sur "Add Service"
2. Sélectionnez "PostgreSQL"
3. Railway connectera automatiquement la base

---

## 🌐 Étape 3 : Déploiement du Frontend (Vercel)

### 3.1 Inscription Vercel

1. Allez sur [Vercel.com](https://vercel.com)
2. Connectez-vous avec GitHub
3. Cliquez sur "New Project"

### 3.2 Configuration Vercel

1. **Sélectionnez** votre repository `medusa-boutique`
2. **Configurez** le projet :
   - **Framework Preset** : Next.js
   - **Root Directory** : `bigtest-storefront`
   - **Build Command** : `npm run build`
   - **Output Directory** : `.next`

### 3.3 Variables d'environnement Vercel

Dans Vercel, ajoutez :

```env
# API Backend (URL Railway)
NEXT_PUBLIC_MEDUSA_BACKEND_URL=https://votre-backend.railway.app

# Stripe Frontend
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_VOTRE_CLE_PUBLIQUE_STRIPE

# Base URL
NEXT_PUBLIC_BASE_URL=https://votre-boutique.vercel.app
```

---

## 🔐 Étape 4 : Configuration Stripe Production

### 4.1 Activer le mode Live

1. Connectez-vous à [Stripe Dashboard](https://dashboard.stripe.com)
2. Basculez en mode "Live" (toggle en haut à droite)
3. Récupérez vos clés de production

### 4.2 Configurer les Webhooks

1. Dans Stripe Dashboard → "Webhooks"
2. Cliquez "Add endpoint"
3. **URL** : `https://votre-backend.railway.app/hooks/stripe`
4. **Événements** : Sélectionnez tous les événements de paiement
5. Copiez le "Signing secret"

---

## 🎨 Étape 5 : Domaines personnalisés

### 5.1 Domaine pour le Frontend (Vercel)

1. Dans Vercel → Settings → Domains
2. Ajoutez votre domaine : `www.votre-boutique.com`
3. Configurez les DNS chez votre registrar

### 5.2 Domaine pour le Backend (Railway)

1. Dans Railway → Settings → Domains
2. Ajoutez : `api.votre-boutique.com`
3. Configurez les DNS

---

## 📊 Étape 6 : Monitoring et Maintenance

### 6.1 Logs et Monitoring

- **Railway** : Logs automatiques du backend
- **Vercel** : Analytics et logs frontend
- **Stripe** : Dashboard pour les paiements

### 6.2 Sauvegardes

- **Base de données** : Railway fait des sauvegardes automatiques
- **Code** : Versioning Git
- **Médias** : Configurez un stockage cloud (AWS S3, Cloudinary)

---

## 💰 Coûts estimés

### Configuration de base :
- **Railway** : ~$5-10/mois (backend + PostgreSQL)
- **Vercel** : Gratuit (jusqu'à certaines limites)
- **Domaine** : ~$10-15/an
- **Total** : ~$5-10/mois + domaine

### Configuration professionnelle :
- **Railway Pro** : ~$20-50/mois
- **Vercel Pro** : ~$20/mois
- **Stockage cloud** : ~$5-20/mois
- **Total** : ~$45-90/mois

---

## 🚨 Points importants

### Sécurité :
- ✅ Utilisez HTTPS partout
- ✅ Clés Stripe en mode Live
- ✅ Variables d'environnement sécurisées
- ✅ CORS configuré correctement

### Performance :
- ✅ CDN Vercel pour le frontend
- ✅ Cache Redis (optionnel)
- ✅ Optimisation des images
- ✅ Monitoring des performances

### SEO :
- ✅ Sitemap automatique
- ✅ Meta tags optimisés
- ✅ URLs propres
- ✅ Temps de chargement rapide

---

## 🔄 Déploiement automatique

Une fois configuré :
1. **Push sur GitHub** → Déploiement automatique
2. **Railway** redémarre le backend
3. **Vercel** rebuild le frontend
4. **Zéro downtime** pour vos clients

---

## 📞 Support et ressources

- **Documentation Medusa** : [docs.medusajs.com](https://docs.medusajs.com)
- **Railway Docs** : [docs.railway.app](https://docs.railway.app)
- **Vercel Docs** : [vercel.com/docs](https://vercel.com/docs)
- **Stripe Docs** : [stripe.com/docs](https://stripe.com/docs)

---

## 🎯 Checklist de déploiement

### Avant le lancement :
- [ ] Code pushé sur GitHub
- [ ] Backend déployé sur Railway
- [ ] Frontend déployé sur Vercel
- [ ] Base de données configurée
- [ ] Variables d'environnement définies
- [ ] Stripe en mode Live
- [ ] Webhooks configurés
- [ ] Domaines configurés
- [ ] Tests de paiement effectués
- [ ] Utilisateur admin créé en production

### Après le lancement :
- [ ] Monitoring activé
- [ ] Sauvegardes vérifiées
- [ ] Performance testée
- [ ] SEO optimisé
- [ ] Analytics configurés

---

**🎉 Félicitations ! Votre boutique Medusa est maintenant en production !**
