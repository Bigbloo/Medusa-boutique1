# 🚀 Solution Simple : Render.com (Alternative à Railway)

## ❌ Railway trop compliqué ?
**Render.com** est beaucoup plus simple et fonctionne mieux avec Medusa !

---

## 🎯 **Étapes simples (15 minutes)**

### 1. Créer un compte Render
1. Allez sur **https://render.com**
2. **Get Started for Free**
3. **Sign up with GitHub**

### 2. Créer le repository backend
1. Allez sur **https://github.com**
2. **New repository**
3. **Repository name** : `medusa-backend-simple`
4. **Public**
5. **Create repository**

### 3. Pousser le code backend
```bash
cd medusa-backend-simple
git remote add origin https://github.com/VOTRE_USERNAME/medusa-backend-simple.git
git branch -M main
git push -u origin main
```

### 4. Déployer sur Render
1. **Render Dashboard** → **New** → **Web Service**
2. **Connect a repository** → Sélectionnez `medusa-backend-simple`
3. **Name** : `medusa-backend`
4. **Environment** : `Node`
5. **Build Command** : `yarn install && yarn build`
6. **Start Command** : `yarn start`
7. **Instance Type** : `Free`
8. **Create Web Service**

### 5. Ajouter PostgreSQL
1. **New** → **PostgreSQL**
2. **Name** : `medusa-database`
3. **Database** : `medusa`
4. **User** : `medusa`
5. **Plan** : `Free`
6. **Create Database**

### 6. Variables d'environnement
Dans votre Web Service → **Environment** :

```env
NODE_ENV=production
PORT=10000
DATABASE_URL=postgresql://medusa:PASSWORD@HOST:5432/medusa
JWT_SECRET=medusa_super_secret_jwt_2024_secure
COOKIE_SECRET=medusa_super_secret_cookie_2024_secure
MEDUSA_ADMIN_ONBOARDING_TYPE=nextjs
STORE_CORS=http://localhost:3000
ADMIN_CORS=http://localhost:9000
AUTH_CORS=http://localhost:3000,http://localhost:9000
```

**Pour DATABASE_URL :**
1. Allez dans votre PostgreSQL → **Info**
2. Copiez **External Database URL**
3. Collez dans `DATABASE_URL`

---

## 🧪 **Test**

Une fois déployé :
- **Health check** : `https://votre-backend.onrender.com/health`
- **Admin** : `https://votre-backend.onrender.com/app`

---

## 👤 **Créer l'utilisateur admin**

1. **Web Service** → **Shell**
2. Exécutez :
```bash
npx medusa user --email admin@votre-boutique.com --password VotreMotDePasse123
```

---

## ▲ **Frontend sur Vercel**

### 1. Déployer le frontend
1. **Vercel.com** → **New Project**
2. **Import Git Repository** → `Medusa-boutique1`
3. **Root Directory** : `storefront`
4. **Deploy**

### 2. Variables d'environnement Vercel
```env
NEXT_PUBLIC_MEDUSA_BACKEND_URL=https://votre-backend.onrender.com
NEXT_PUBLIC_BASE_URL=https://votre-frontend.vercel.app
```

### 3. Mettre à jour les CORS
Dans Render → Variables d'environnement :
```env
STORE_CORS=https://votre-frontend.vercel.app
ADMIN_CORS=https://votre-backend.onrender.com
AUTH_CORS=https://votre-frontend.vercel.app,https://votre-backend.onrender.com
```

---

## 🎉 **Avantages de Render**

### ✅ **Plus simple que Railway**
- Interface plus claire
- Détection automatique
- Logs plus lisibles
- PostgreSQL gratuit inclus

### ✅ **Fonctionne mieux avec Medusa**
- Pas de problèmes de Root Directory
- Build plus stable
- Déploiement plus rapide

### ✅ **Support gratuit**
- 750h/mois gratuites
- PostgreSQL gratuit
- SSL automatique

---

## 📋 **Checklist Render**

### Backend
- [ ] Compte Render créé
- [ ] Repository GitHub créé et poussé
- [ ] Web Service créé sur Render
- [ ] PostgreSQL ajouté
- [ ] Variables d'environnement configurées
- [ ] Test health check réussi
- [ ] Utilisateur admin créé

### Frontend
- [ ] Projet Vercel créé
- [ ] Variables d'environnement configurées
- [ ] CORS mis à jour dans Render
- [ ] Test frontend réussi

---

## 🆘 **Si vous avez des problèmes**

1. **Logs Render** : Plus clairs que Railway
2. **Build failed** : Vérifiez les dépendances
3. **Database connection** : Vérifiez DATABASE_URL
4. **CORS errors** : Vérifiez les URLs

**Render est généralement beaucoup plus simple que Railway !** 🎯
