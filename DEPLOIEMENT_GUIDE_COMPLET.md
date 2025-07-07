# 🚀 Guide de Déploiement Complet - Boutique Medusa

## 📋 Statut Actuel
✅ Code prêt sur GitHub : https://github.com/Bigbloo/Medusa-boutique1  
✅ Configuration Nixpacks ajoutée  
✅ Guides de correction créés  
⏳ Déploiement Railway à corriger  
⏳ Déploiement Vercel à faire  
⏳ Configuration Stripe à faire  

---

## 🚂 **ÉTAPE 1 : Corriger le Déploiement Railway**

### Option A : Corriger le déploiement existant
1. Dans Railway, allez dans **Settings** → **General**
2. Changez **Root Directory** de `/` vers `/backend`
3. Cliquez **Save**
4. Le redéploiement se fera automatiquement

### Option B : Nouveau déploiement (recommandé)
1. Supprimez le déploiement actuel dans Railway
2. **New Project** → **Deploy from GitHub repo**
3. Sélectionnez **Medusa-boutique1**
4. **IMPORTANT** : Cliquez **Configure** avant de déployer
5. Définissez **Root Directory** = `backend`
6. Cliquez **Deploy**

### Ajouter PostgreSQL
1. Dans votre projet Railway : **+ New** → **Database** → **PostgreSQL**
2. Railway connectera automatiquement la base

### Variables d'environnement Railway
```env
NODE_ENV=production
PORT=9000
DATABASE_URL=${{Postgres.DATABASE_URL}}
JWT_SECRET=medusa_super_secret_jwt_2024_secure
COOKIE_SECRET=medusa_super_secret_cookie_2024_secure
MEDUSA_ADMIN_ONBOARDING_TYPE=nextjs
STORE_CORS=http://localhost:3000
ADMIN_CORS=http://localhost:9000
AUTH_CORS=http://localhost:3000,http://localhost:9000
```

---

## ▲ **ÉTAPE 2 : Déploiement Vercel (Frontend)**

### Créer le projet Vercel
1. Allez sur **https://vercel.com**
2. **New Project** → **Import Git Repository**
3. Sélectionnez **Medusa-boutique1**
4. **Root Directory** = `storefront`
5. **Framework** : Next.js (auto-détecté)
6. Cliquez **Deploy**

### Variables d'environnement Vercel
```env
NEXT_PUBLIC_MEDUSA_BACKEND_URL=https://VOTRE_BACKEND.railway.app
NEXT_PUBLIC_BASE_URL=https://VOTRE_FRONTEND.vercel.app
```

---

## 🔗 **ÉTAPE 3 : Connecter Backend et Frontend**

### Mettre à jour les CORS dans Railway
Une fois Vercel déployé, mettez à jour dans Railway :
```env
STORE_CORS=https://VOTRE_FRONTEND.vercel.app
ADMIN_CORS=https://VOTRE_BACKEND.railway.app
AUTH_CORS=https://VOTRE_FRONTEND.vercel.app,https://VOTRE_BACKEND.railway.app
```

### Mettre à jour l'URL backend dans Vercel
```env
NEXT_PUBLIC_MEDUSA_BACKEND_URL=https://VOTRE_BACKEND.railway.app
```

---

## 💳 **ÉTAPE 4 : Configuration Stripe**

### Récupérer les clés Stripe
1. Dashboard Stripe → **Developers** → **API Keys**
2. Copiez :
   - **Publishable key** (pk_test_... ou pk_live_...)
   - **Secret key** (sk_test_... ou sk_live_...)

### Ajouter dans Railway
```env
STRIPE_API_KEY=sk_test_VOTRE_CLE_SECRETE
```

### Ajouter dans Vercel
```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_VOTRE_CLE_PUBLIQUE
```

### Configurer les Webhooks Stripe
1. Dashboard Stripe → **Developers** → **Webhooks**
2. **Add endpoint** : `https://votre-backend.railway.app/hooks/stripe`
3. Événements à sélectionner :
   - `payment_intent.succeeded`
   - `payment_intent.payment_failed`
   - `checkout.session.completed`
4. Copiez le **Signing secret** et ajoutez dans Railway :
```env
STRIPE_WEBHOOK_SECRET=whsec_VOTRE_WEBHOOK_SECRET
```

---

## 👤 **ÉTAPE 5 : Créer l'Utilisateur Admin**

### Via Railway Console
1. Railway → votre backend → **Console**
2. Exécutez :
```bash
npx medusa user --email admin@votre-boutique.com --password VotreMotDePasseSecurise123
```

---

## 🧪 **ÉTAPE 6 : Tests**

### Test Backend
- ✅ `https://votre-backend.railway.app/health` → doit retourner `OK`
- ✅ `https://votre-backend.railway.app/app` → interface admin

### Test Frontend
- ✅ `https://votre-frontend.vercel.app` → page d'accueil
- ✅ Navigation et produits

### Test Paiement
- ✅ Ajouter au panier → Checkout
- ✅ Carte test : `4242 4242 4242 4242`

---

## 🎯 **Checklist de Déploiement**

### Railway (Backend)
- [ ] Root Directory configuré sur `/backend`
- [ ] PostgreSQL ajouté
- [ ] Variables d'environnement configurées
- [ ] Déploiement réussi
- [ ] URL backend fonctionnelle

### Vercel (Frontend)
- [ ] Root Directory configuré sur `/storefront`
- [ ] Variables d'environnement configurées
- [ ] Déploiement réussi
- [ ] URL frontend fonctionnelle

### Stripe
- [ ] Clés API récupérées
- [ ] Clés ajoutées dans Railway et Vercel
- [ ] Webhooks configurés
- [ ] Tests de paiement réussis

### Admin
- [ ] Utilisateur admin créé
- [ ] Connexion admin réussie
- [ ] Produits visibles dans l'admin

---

## 🚨 **Résolution de Problèmes**

### Erreur "Nixpacks build failed"
→ Vérifiez que Root Directory = `/backend`

### Erreur CORS
→ Vérifiez les URLs dans les variables CORS

### Erreur de connexion base de données
→ Vérifiez que PostgreSQL est bien connecté dans Railway

### Frontend ne charge pas
→ Vérifiez `NEXT_PUBLIC_MEDUSA_BACKEND_URL` dans Vercel

---

## 🎉 **Succès !**

Une fois tous les tests passés, votre boutique e-commerce est en ligne :

- 🛍️ **Boutique** : `https://votre-frontend.vercel.app`
- 🔧 **Admin** : `https://votre-backend.railway.app/app`
- 💰 **Coût** : ~5-10€/mois

**Prochaines étapes :**
1. Ajouter vos produits via l'admin
2. Personnaliser le design
3. Configurer un domaine personnalisé
4. Passer en mode live Stripe
