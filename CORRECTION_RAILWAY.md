# 🔧 Correction du Déploiement Railway

## ❌ Problème Identifié
Railway a essayé de déployer depuis la racine du projet au lieu du dossier `backend/`.

## ✅ Solutions (3 options)

### Option 1 : Utiliser la configuration automatique (RECOMMANDÉ)
J'ai ajouté des fichiers de configuration qui permettent à Railway de déployer depuis la racine :
- `package.json` - Scripts de build qui pointent vers le backend
- `railway.toml` - Configuration Railway spécifique
- `backend/nixpacks.toml` - Configuration Nixpacks optimisée

**Action :** Redéployez simplement depuis GitHub, Railway utilisera automatiquement ces configurations.

### Option 2 : Configurer le Root Directory manuellement
Dans Railway :
1. Allez dans **Settings** → **General**
2. Trouvez **Root Directory**
3. Changez de `/` vers `/backend`
4. Cliquez **Save**

### Option 3 : Créer un nouveau déploiement
Si les options précédentes ne marchent pas :
1. Supprimez le déploiement actuel
2. Créez un **New Project**
3. **Deploy from GitHub repo** → Sélectionnez `Medusa-boutique1`
4. **IMPORTANT** : Avant de déployer, cliquez sur **Configure**
5. Définissez **Root Directory** = `backend`
6. Cliquez **Deploy**

### 3. Variables d'environnement à ajouter
Une fois le déploiement corrigé, ajoutez ces variables :

```env
NODE_ENV=production
PORT=9000
DATABASE_URL=${{Postgres.DATABASE_URL}}
JWT_SECRET=votre_secret_jwt_super_securise_123
COOKIE_SECRET=votre_secret_cookie_super_securise_456
MEDUSA_ADMIN_ONBOARDING_TYPE=nextjs
STORE_CORS=http://localhost:3000
ADMIN_CORS=http://localhost:9000
AUTH_CORS=http://localhost:3000,http://localhost:9000
```

### 4. Ajouter PostgreSQL
1. Dans votre projet Railway, cliquez **+ New**
2. **Database** → **PostgreSQL**
3. Railway connectera automatiquement la base

## 🚀 Après correction
Le déploiement devrait réussir et vous devriez voir votre API Medusa en ligne !
