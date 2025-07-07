# Guide de Résolution - Stripe ne s'affiche pas

## Problème Identifié
Stripe ne s'affiche pas dans le checkout car vous utilisez des clés **live** (production) sur un environnement de développement local (HTTP).

## Solution

### 1. Obtenir vos clés de test Stripe
1. Allez sur https://dashboard.stripe.com/test/apikeys
2. Copiez votre **clé publique de test** (commence par `pk_test_`)
3. Copiez votre **clé secrète de test** (commence par `sk_test_`)

### 2. Mettre à jour le storefront
Éditez le fichier `bigtest-storefront/.env.local` :
```bash
# Remplacez cette ligne :
NEXT_PUBLIC_STRIPE_KEY=pk_test_51LdXW1DKPvCMOE5sKxKxKxKxKxKxKxKxKxKxKxKxKxKxKxKxKxKxKxKxKxKxKxKxKxKxKxKxKxKxKxKxKxKxKxKxKxKx

# Par votre vraie clé de test :
NEXT_PUBLIC_STRIPE_KEY=pk_test_VOTRE_VRAIE_CLE_DE_TEST_ICI
```

### 3. Mettre à jour le backend
Éditez le fichier `bigtest/.env` :
```bash
# Remplacez cette ligne :
STRIPE_API_KEY=sk_test_VOTRE_VRAIE_CLE_SECRETE_DE_TEST_ICI

# Par votre vraie clé secrète de test :
STRIPE_API_KEY=sk_test_VOTRE_VRAIE_CLE_SECRETE_DE_TEST_ICI
```

### 4. Redémarrer les serveurs
```bash
# Redémarrer le backend
cd bigtest
npm run dev

# Redémarrer le storefront (dans un autre terminal)
cd bigtest-storefront
npm run dev -- -p 8000
```

### 5. Tester
1. Allez sur http://localhost:8000/fr
2. Ajoutez un produit au panier
3. Procédez au checkout
4. Stripe devrait maintenant s'afficher avec les champs de carte de crédit

## Pourquoi ce problème ?
- Les clés Stripe **live** (`pk_live_`, `sk_live_`) ne fonctionnent que sur des domaines HTTPS vérifiés en production
- Les clés Stripe **test** (`pk_test_`, `sk_test_`) fonctionnent en développement local (HTTP)
- C'est une mesure de sécurité de Stripe pour éviter les fuites de clés de production

## Pour la production
Quand vous déployez en production :
1. Utilisez vos clés **live** 
2. Assurez-vous que votre domaine est en HTTPS
3. Configurez les webhooks Stripe pour votre domaine de production
