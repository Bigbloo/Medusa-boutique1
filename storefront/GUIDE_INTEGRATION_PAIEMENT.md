# 🔐 Guide d'Intégration des Processeurs de Paiement

## Vue d'ensemble

Medusa supporte plusieurs processeurs de paiement. Ce guide vous explique comment intégrer les principaux fournisseurs de paiement dans votre boutique.

## 🏆 Processeurs de Paiement Recommandés

### 1. Stripe (Recommandé)
- **Avantages** : Facile à intégrer, support mondial, sécurisé
- **Frais** : ~2.9% + 0.30€ par transaction
- **Supports** : Cartes, Apple Pay, Google Pay, SEPA, etc.

### 2. PayPal
- **Avantages** : Très populaire, confiance des utilisateurs
- **Frais** : ~2.9% + 0.35€ par transaction
- **Supports** : PayPal, cartes via PayPal

### 3. Klarna
- **Avantages** : Paiement en plusieurs fois
- **Frais** : Variables selon le pays
- **Supports** : Paiement différé, en plusieurs fois

## 🚀 Intégration Stripe (Étape par Étape)

### Étape 1 : Créer un compte Stripe

1. Allez sur [stripe.com](https://stripe.com)
2. Créez un compte
3. Activez votre compte (vérification d'identité)
4. Récupérez vos clés API :
   - **Clé publique** : `pk_test_...` (pour les tests)
   - **Clé secrète** : `sk_test_...` (pour les tests)

### Étape 2 : Installer le plugin Stripe dans Medusa

```bash
# Dans le dossier bigtest (backend)
cd bigtest
npm install @medusajs/medusa-payment-stripe
```

### Étape 3 : Configurer le backend Medusa

Modifiez le fichier `bigtest/medusa-config.ts` :

```typescript
import { loadEnv, defineConfig } from '@medusajs/framework/utils'

loadEnv(process.env.NODE_ENV || 'development', process.cwd())

module.exports = defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,
    http: {
      storeCors: process.env.STORE_CORS!,
      adminCors: process.env.ADMIN_CORS!,
      authCors: process.env.AUTH_CORS!,
      jwtSecret: process.env.JWT_SECRET || "supersecret",
      cookieSecret: process.env.COOKIE_SECRET || "supersecret",
    }
  },
  plugins: [
    {
      resolve: "@medusajs/medusa-payment-stripe",
      options: {
        api_key: process.env.STRIPE_API_KEY,
        webhook_secret: process.env.STRIPE_WEBHOOK_SECRET,
      },
    },
  ],
})
```

### Étape 4 : Ajouter les variables d'environnement

Ajoutez dans `bigtest/.env` :

```env
# Stripe Configuration
STRIPE_API_KEY=sk_test_votre_cle_secrete_stripe
STRIPE_WEBHOOK_SECRET=whsec_votre_webhook_secret
```

### Étape 5 : Configurer le frontend

Ajoutez dans `bigtest-storefront/.env.local` :

```env
# Votre clé publique Stripe
NEXT_PUBLIC_STRIPE_KEY=pk_test_votre_cle_publique_stripe
```

### Étape 6 : Redémarrer les services

```bash
# Redémarrer le backend
cd bigtest
npm run dev

# Redémarrer le frontend
cd bigtest-storefront
npm run dev
```

### Étape 7 : Configurer les webhooks Stripe

1. Dans votre dashboard Stripe, allez dans "Webhooks"
2. Ajoutez un endpoint : `http://localhost:9000/hooks/stripe`
3. Sélectionnez les événements :
   - `payment_intent.succeeded`
   - `payment_intent.payment_failed`
   - `checkout.session.completed`

## 💳 Intégration PayPal

### Étape 1 : Installer le plugin PayPal

```bash
cd bigtest
npm install @medusajs/medusa-payment-paypal
```

### Étape 2 : Configuration

Ajoutez dans `medusa-config.ts` :

```typescript
{
  resolve: "@medusajs/medusa-payment-paypal",
  options: {
    sandbox: process.env.NODE_ENV !== "production",
    client_id: process.env.PAYPAL_CLIENT_ID,
    client_secret: process.env.PAYPAL_CLIENT_SECRET,
  },
}
```

### Étape 3 : Variables d'environnement

Ajoutez dans `.env` :

```env
PAYPAL_CLIENT_ID=votre_client_id_paypal
PAYPAL_CLIENT_SECRET=votre_client_secret_paypal
```

## 🛡️ Sécurité et Bonnes Pratiques

### 1. Variables d'environnement
- ❌ **Jamais** de clés secrètes dans le code
- ✅ Utilisez toujours les variables d'environnement
- ✅ Différentes clés pour test/production

### 2. HTTPS en production
```env
# En production
STORE_CORS=https://votre-domaine.com
ADMIN_CORS=https://admin.votre-domaine.com
```

### 3. Webhooks sécurisés
- Vérifiez toujours les signatures des webhooks
- Utilisez HTTPS pour les endpoints de webhook

## 🧪 Tests de Paiement

### Cartes de test Stripe

```
# Carte qui fonctionne
4242 4242 4242 4242

# Carte qui échoue
4000 0000 0000 0002

# Carte qui nécessite 3D Secure
4000 0025 0000 3155
```

### Tests PayPal
- Utilisez le mode sandbox
- Créez des comptes de test dans PayPal Developer

## 📊 Configuration des Régions et Devises

### Dans l'admin Medusa

1. Allez dans "Settings" > "Regions"
2. Configurez vos régions (France, Europe, etc.)
3. Ajoutez les devises (EUR, USD, etc.)
4. Associez les processeurs de paiement aux régions

### Exemple de configuration France :

```
Région : France
Devise : EUR
Processeurs : Stripe, PayPal
Pays : FR
```

## 🔧 Dépannage

### Problèmes courants

1. **Erreur "Payment provider not found"**
   - Vérifiez que le plugin est installé
   - Redémarrez le backend après installation

2. **Clés API invalides**
   - Vérifiez les variables d'environnement
   - Assurez-vous d'utiliser les bonnes clés (test/prod)

3. **CORS errors**
   - Ajoutez votre domaine frontend dans STORE_CORS
   - Redémarrez le backend

### Logs utiles

```bash
# Voir les logs du backend
cd bigtest
npm run dev

# Voir les logs détaillés
DEBUG=medusa:* npm run dev
```

## 🌍 Processeurs par Région

### France/Europe
- **Stripe** : Excellent support SEPA
- **PayPal** : Très populaire
- **Klarna** : Paiement en plusieurs fois

### International
- **Stripe** : Support mondial
- **PayPal** : Disponible dans 200+ pays

## 📱 Paiements Mobiles

### Apple Pay / Google Pay
- Automatiquement supportés avec Stripe
- Nécessite HTTPS en production
- Configuration dans le dashboard Stripe

## 🔄 Migration et Mise à Jour

### Passer de test à production

1. Remplacez les clés de test par les clés de production
2. Mettez à jour les webhooks
3. Testez avec de petites transactions
4. Surveillez les logs

## 📞 Support

### Ressources
- [Documentation Medusa](https://docs.medusajs.com)
- [Documentation Stripe](https://stripe.com/docs)
- [Documentation PayPal](https://developer.paypal.com)

### Communauté
- Discord Medusa
- GitHub Issues
- Stack Overflow

---

**Note importante** : Testez toujours vos intégrations de paiement en mode test avant de passer en production !
