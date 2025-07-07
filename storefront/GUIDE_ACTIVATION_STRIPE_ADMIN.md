# Guide d'Activation de Stripe en Mode Live via l'Admin Medusa

## 🎯 Objectif
Activer Stripe en mode live dans l'interface d'administration Medusa pour que vos paiements utilisent vos clés live au lieu du mode test.

## 📋 Prérequis
- ✅ Clés Stripe live configurées dans les fichiers `.env`
- ✅ Serveur Medusa redémarré
- ✅ Accès à l'admin Medusa : http://localhost:9000/app

## 🔧 Étapes d'Activation

### 1. Connexion à l'Admin Medusa
1. Ouvrez votre navigateur
2. Allez sur : `http://localhost:9000/app`
3. Connectez-vous avec vos identifiants admin

### 2. Accéder aux Paramètres des Régions
1. Dans le menu de gauche, cliquez sur **"Settings"** (Paramètres)
2. Cliquez sur **"Regions"** (Régions)
3. Vous verrez votre région (probablement "Europe" ou "US")

### 3. Modifier la Région
1. Cliquez sur votre région pour l'éditer
2. Descendez jusqu'à la section **"Payment Providers"** (Fournisseurs de Paiement)
3. Vous devriez voir une liste des fournisseurs disponibles

### 4. Activer Stripe
1. Cherchez **"Stripe"** dans la liste des fournisseurs
2. **Activez** le fournisseur Stripe en cochant la case ou en cliquant sur le bouton d'activation
3. Assurez-vous que Stripe est bien **activé** et **configuré**

### 5. Vérifier la Configuration
1. Dans la configuration Stripe, vérifiez que :
   - Les clés sont bien détectées
   - Le statut indique "Connecté" ou "Active"
   - Aucun message d'erreur n'apparaît

### 6. Sauvegarder
1. Cliquez sur **"Save"** (Sauvegarder) pour appliquer les modifications
2. Attendez la confirmation que les changements ont été sauvegardés

## 🧪 Test de Vérification

### Tester sur la Boutique
1. Allez sur votre boutique : `http://localhost:3000`
2. Ajoutez un produit au panier
3. Procédez au checkout
4. À l'étape paiement :
   - ✅ **Mode Live** : Vous verrez l'interface Stripe normale (sans message de test)
   - ❌ **Mode Test** : Vous verrez "Manual Payment" ou "For testing purposes only"

### Vérification des Clés
Si vous voyez encore le mode test, vérifiez :

1. **Clés dans `.env`** :
   ```bash
   STRIPE_API_KEY=sk_live_51LdXW1DKPvCMOE5sq...
   ```

2. **Clés dans `.env.local`** :
   ```bash
   NEXT_PUBLIC_STRIPE_KEY=pk_live_51LdXW1DKPvCMOE5su...
   ```

3. **Redémarrage des serveurs** après modification des clés

## 🔍 Dépannage

### Problème : Stripe n'apparaît pas dans les fournisseurs
**Solution** : 
- Vérifiez que les clés Stripe sont bien dans le fichier `.env`
- Redémarrez le serveur Medusa
- Actualisez la page admin

### Problème : Erreur de configuration Stripe
**Solution** :
- Vérifiez que vos clés Stripe live sont valides
- Assurez-vous que les clés correspondent (même compte Stripe)
- Vérifiez qu'il n'y a pas d'espaces avant/après les clés

### Problème : Toujours en mode test
**Solution** :
1. Vérifiez que Stripe est **activé** dans la région
2. Redémarrez les deux serveurs (backend et frontend)
3. Videz le cache du navigateur
4. Testez avec un nouvel onglet privé

## ⚠️ Important

Une fois Stripe activé en mode live :
- 💳 **Les paiements seront réels**
- 💰 **Les cartes seront vraiment débitées**
- 🏦 **Vous recevrez l'argent sur votre compte Stripe**

## 📞 Support

Si vous rencontrez des difficultés :
1. Vérifiez les logs du serveur Medusa dans le terminal
2. Consultez la console du navigateur pour les erreurs
3. Vérifiez votre Dashboard Stripe pour les événements

---

**Date de création** : 7 juin 2025, 6:15 AM
**Statut** : Guide d'activation Stripe Live
