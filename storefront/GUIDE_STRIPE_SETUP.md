# 🚀 Configuration Stripe - Guide Rapide

## ✅ Étapes Déjà Complétées

Votre boutique est déjà pré-configurée pour Stripe ! Voici ce qui a été fait :

### 1. Backend Configuré ✅
- Module Stripe ajouté dans `bigtest/medusa-config.ts`
- Variables d'environnement préparées dans `bigtest/.env`

### 2. Frontend Configuré ✅
- Variable Stripe ajoutée dans `bigtest-storefront/.env.local`

## 🔑 Prochaines Étapes - Obtenir vos Clés Stripe

### Étape 1 : Créer un Compte Stripe

1. **Allez sur** [stripe.com](https://stripe.com)
2. **Cliquez** sur "Commencer maintenant"
3. **Créez** votre compte avec votre email
4. **Vérifiez** votre email

### Étape 2 : Récupérer vos Clés de Test

1. **Connectez-vous** à votre dashboard Stripe
2. **Assurez-vous** d'être en mode "Test" (toggle en haut à droite)
3. **Allez** dans "Développeurs" > "Clés API"
4. **Copiez** vos clés :

```
Clé publique : pk_test_51...
Clé secrète : sk_test_51...
```

### Étape 3 : Remplacer les Clés dans vos Fichiers

#### Dans `bigtest/.env` :
```env
STRIPE_API_KEY=sk_test_51VOTRE_CLE_SECRETE_ICI
```

#### Dans `bigtest-storefront/.env.local` :
```env
NEXT_PUBLIC_STRIPE_KEY=pk_test_51VOTRE_CLE_PUBLIQUE_ICI
```

### Étape 4 : Redémarrer les Services

```bash
# Terminal 1 - Backend
cd bigtest
npm run dev

# Terminal 2 - Frontend  
cd bigtest-storefront
npm run dev
```

## 🧪 Tester les Paiements

### Cartes de Test Stripe

Une fois configuré, utilisez ces cartes pour tester :

```
✅ Paiement réussi :
4242 4242 4242 4242

❌ Paiement échoué :
4000 0000 0000 0002

🔐 Authentification 3D Secure :
4000 0025 0000 3155

💳 Autres informations :
- Date d'expiration : n'importe quelle date future
- CVC : n'importe quel code à 3 chiffres
- Code postal : n'importe lequel
```

## 🎯 Vérifier que ça Marche

1. **Allez** sur votre boutique : http://localhost:3000
2. **Ajoutez** un produit au panier
3. **Procédez** au checkout
4. **Utilisez** une carte de test
5. **Vérifiez** dans votre dashboard Stripe que le paiement apparaît

## 🔧 Configuration Avancée (Optionnel)

### Webhooks pour Production

Quand vous passerez en production, configurez les webhooks :

1. **Dashboard Stripe** > "Développeurs" > "Webhooks"
2. **Ajoutez** un endpoint : `https://votre-domaine.com/hooks/stripe`
3. **Sélectionnez** les événements :
   - `payment_intent.succeeded`
   - `payment_intent.payment_failed`
   - `checkout.session.completed`

### Variables pour Production

```env
# Production - bigtest/.env
STRIPE_API_KEY=sk_live_VOTRE_CLE_LIVE
STRIPE_WEBHOOK_SECRET=whsec_VOTRE_WEBHOOK_SECRET

# Production - bigtest-storefront/.env.local
NEXT_PUBLIC_STRIPE_KEY=pk_live_VOTRE_CLE_PUBLIQUE_LIVE
```

## 🛡️ Sécurité

### ✅ Bonnes Pratiques
- Utilisez toujours les variables d'environnement
- Ne commitez jamais vos clés dans Git
- Utilisez des clés différentes pour test/production
- Activez les webhooks en production

### ❌ À Éviter
- Mettre les clés directement dans le code
- Utiliser les clés de production en développement
- Partager vos clés secrètes

## 🆘 Dépannage

### Problème : "Stripe not configured"
**Solution :** Vérifiez que vos clés sont bien dans les fichiers .env

### Problème : "Invalid API key"
**Solution :** Assurez-vous d'utiliser les bonnes clés (test vs production)

### Problème : Paiement ne fonctionne pas
**Solution :** 
1. Vérifiez les logs du backend
2. Assurez-vous d'être en mode test
3. Utilisez les cartes de test Stripe

## 📞 Support

- **Documentation Stripe :** [stripe.com/docs](https://stripe.com/docs)
- **Support Stripe :** Disponible 24/7 dans votre dashboard
- **Documentation Medusa :** [docs.medusajs.com](https://docs.medusajs.com)

---

**🎉 Félicitations !** Votre boutique est maintenant prête à accepter des paiements Stripe !
