# Guide d'Intégration des Produits - Medusa

## 🛍️ Comment Ajouter des Produits à Votre Boutique

### **Méthode 1 : Via l'Interface Admin (Recommandée)**

#### 🔗 **Accès à l'Admin**
- URL : http://localhost:9000/app
- Connectez-vous avec vos identifiants admin

#### 📦 **Étapes pour Ajouter un Produit**

1. **Aller dans "Products"**
   - Cliquez sur "Products" dans le menu de gauche
   - Cliquez sur "Create Product"

2. **Informations de Base**
   ```
   - Titre : Nom de votre produit
   - Sous-titre : Description courte
   - Handle : URL du produit (auto-généré)
   - Description : Description détaillée
   ```

3. **Images**
   - Ajoutez des images de votre produit
   - Image principale + images supplémentaires
   - Formats supportés : JPG, PNG, WebP

4. **Variantes**
   ```
   - Titre : Nom de la variante (ex: "Taille M")
   - SKU : Code produit unique
   - Prix : Prix de vente
   - Inventaire : Quantité disponible
   ```

5. **Organisation**
   ```
   - Collection : Grouper vos produits
   - Catégorie : Classer par type
   - Tags : Mots-clés pour la recherche
   - Type : Type de produit
   ```

6. **Publication**
   - Status : "Published" pour rendre visible
   - Sales Channel : Sélectionner votre canal de vente

### **Méthode 2 : Import en Masse**

#### 📊 **Format CSV**
Créez un fichier CSV avec ces colonnes :
```csv
title,description,handle,status,thumbnail,weight,length,height,width,hs_code,mid_code,material,country_of_origin
```

#### 🔄 **Import via Admin**
1. Aller dans "Products"
2. Cliquer sur "Import Products"
3. Télécharger votre fichier CSV
4. Mapper les colonnes
5. Lancer l'import

### **Méthode 3 : API REST (Avancé)**

#### 🔧 **Endpoint de Création**
```javascript
POST /admin/products
Content-Type: application/json
Authorization: Bearer YOUR_API_KEY

{
  "title": "Mon Produit",
  "description": "Description du produit",
  "status": "published",
  "variants": [
    {
      "title": "Variante par défaut",
      "prices": [
        {
          "amount": 2999,
          "currency_code": "eur"
        }
      ],
      "inventory_quantity": 100
    }
  ]
}
```

## 🏷️ **Structure d'un Produit Medusa**

### **Informations Principales**
- **Title** : Nom du produit
- **Description** : Description détaillée (HTML supporté)
- **Handle** : URL slug (ex: "mon-produit")
- **Status** : draft, proposed, published, rejected
- **Thumbnail** : Image principale

### **Variantes**
Chaque produit peut avoir plusieurs variantes :
- **Titre** : Nom de la variante
- **SKU** : Code unique
- **Prix** : Par devise
- **Inventaire** : Quantité disponible
- **Options** : Taille, couleur, etc.

### **Métadonnées**
- **Weight** : Poids pour la livraison
- **Dimensions** : L x l x h
- **Material** : Matériau
- **Country of Origin** : Pays d'origine

## 📂 **Organisation des Produits**

### **Collections**
Groupes de produits (ex: "Nouveautés", "Soldes")
```
- Créer dans Admin > Collections
- Ajouter des produits à la collection
- Utiliser pour la navigation du site
```

### **Catégories**
Classification hiérarchique
```
- Vêtements
  - Homme
    - T-shirts
    - Pantalons
  - Femme
    - Robes
    - Accessoires
```

### **Tags**
Mots-clés pour la recherche et le filtrage
```
Exemples : "bio", "coton", "été", "promotion"
```

## 🖼️ **Gestion des Images**

### **Types d'Images**
1. **Thumbnail** : Image principale (carrée recommandée)
2. **Images** : Galerie du produit
3. **Variant Images** : Images spécifiques aux variantes

### **Bonnes Pratiques**
- **Format** : JPG ou PNG
- **Taille** : 800x800px minimum
- **Poids** : < 1MB par image
- **Nommage** : Descriptif (ex: "tshirt-rouge-face.jpg")

## 💰 **Gestion des Prix**

### **Prix par Devise**
```javascript
"prices": [
  {
    "amount": 2999,        // 29.99 EUR (en centimes)
    "currency_code": "eur"
  },
  {
    "amount": 3499,        // 34.99 USD
    "currency_code": "usd"
  }
]
```

### **Prix par Région**
- Configurez des régions dans Admin > Settings > Regions
- Assignez des devises à chaque région
- Les prix s'adaptent automatiquement

## 📦 **Gestion des Stocks**

### **Inventaire Simple**
```javascript
"inventory_quantity": 100,
"manage_inventory": true,
"allow_backorder": false
```

### **Inventaire Multi-Entrepôts**
- Configurez des locations dans Admin > Settings > Locations
- Assignez des stocks par location
- Gestion automatique des réservations

## 🚀 **Affichage sur le Storefront**

### **Pages Automatiques**
Vos produits apparaîtront automatiquement sur :
- **Page d'accueil** : Produits récents/populaires
- **Page collection** : `/collections/[handle]`
- **Page produit** : `/products/[handle]`
- **Recherche** : Fonction de recherche intégrée

### **Personnalisation**
Modifiez les templates dans :
```
src/modules/products/
src/modules/store/
src/modules/home/
```

## 🔍 **Exemple Pratique**

### **Créer Votre Premier Produit**

1. **Allez sur** : http://localhost:9000/app/products
2. **Cliquez** : "Create Product"
3. **Remplissez** :
   ```
   Titre : T-shirt Coton Bio
   Description : T-shirt en coton biologique, coupe moderne
   Prix : 29.99 EUR
   Quantité : 50
   ```
4. **Ajoutez** une image
5. **Publiez** le produit
6. **Vérifiez** sur http://localhost:3000

## 💡 **Conseils**

### **SEO**
- Utilisez des titres descriptifs
- Rédigez des descriptions détaillées
- Optimisez les handles (URLs)
- Ajoutez des tags pertinents

### **Performance**
- Optimisez vos images
- Utilisez des descriptions concises
- Organisez avec des collections

### **Expérience Client**
- Photos de qualité
- Descriptions claires
- Prix transparents
- Gestion des stocks précise

## 🛠️ **Outils Utiles**

- **Medusa Admin** : Interface graphique
- **Medusa CLI** : Commandes en ligne
- **API Documentation** : https://docs.medusajs.com/api
- **Postman Collection** : Pour tester l'API

Votre boutique est maintenant prête à accueillir vos produits !
