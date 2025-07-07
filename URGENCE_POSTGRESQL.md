# 🚨 URGENCE : Ajouter PostgreSQL maintenant !

## ✅ **Diagnostic : Erreur normale !**
L'erreur `ECONNREFUSED` est **NORMALE** - Medusa cherche PostgreSQL qui n'existe pas encore.

```
Pg connection failed to connect to the database. Retrying...
{"code":"ECONNREFUSED"}
```

## 🎯 **Solution : Créer PostgreSQL MAINTENANT**

### Étape 1 : Créer la base de données
1. **Dashboard Render** → **New** → **PostgreSQL**
2. **Name** : `medusa-database`
3. **Database** : `medusa`
4. **User** : `medusa`
5. **Region** : `Oregon (US West)` (même que votre backend)
6. **Plan** : `Free`
7. **Create Database**

### Étape 2 : Récupérer l'URL de connexion
1. Allez dans **PostgreSQL** → **Info**
2. Copiez **External Database URL**
3. Format : `postgresql://medusa:PASSWORD@HOST:5432/medusa`

### Étape 3 : Ajouter DATABASE_URL
1. **Web Service** → **Environment**
2. **Add Environment Variable**
3. **Key** : `DATABASE_URL`
4. **Value** : Collez l'URL PostgreSQL
5. **Save Changes**

### Étape 4 : Ajouter les autres variables
```env
NODE_ENV=production
PORT=10000
JWT_SECRET=medusa_super_secret_jwt_2024_secure_render
COOKIE_SECRET=medusa_super_secret_cookie_2024_secure_render
MEDUSA_ADMIN_ONBOARDING_TYPE=nextjs
STORE_CORS=http://localhost:3000
ADMIN_CORS=http://localhost:9000
AUTH_CORS=http://localhost:3000,http://localhost:9000
```

### Étape 5 : Redémarrer le service
1. **Save Changes** (redémarre automatiquement)
2. OU **Settings** → **Manual Deploy**

---

## 🔍 **Logs après correction**

Une fois PostgreSQL connecté, vous devriez voir :
```
✓ Database connected successfully
✓ Medusa server started
✓ Server listening on port 10000
✓ Admin available at /app
```

---

## ⏰ **Temps estimé : 5 minutes**

1. **2 min** : Créer PostgreSQL
2. **1 min** : Copier URL
3. **1 min** : Ajouter variables
4. **1 min** : Redémarrage automatique

---

## 🎉 **Après la correction**

Votre backend sera accessible :
- **Health** : `https://votre-backend.onrender.com/health`
- **Admin** : `https://votre-backend.onrender.com/app`

**C'est la dernière étape critique ! PostgreSQL résoudra tout !** 🚀
