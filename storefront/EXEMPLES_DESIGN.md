# Exemples Pratiques de Personnalisation

## 🎨 Changements Déjà Appliqués

### ✅ Nom de la boutique
- **Fichier** : `src/modules/layout/templates/nav/index.tsx`
- **Changement** : "Medusa Store" → "Ma Boutique"
- **Style** : Couleur bleue avec effet hover

### ✅ Header personnalisé
- **Couleur de fond** : Dégradé bleu-vert
- **Bordure** : Couleur primaire
- **Ombre** : Effet subtil

### ✅ Couleurs personnalisées
- **Primaire** : Bleu (#3b82f6)
- **Secondaire** : Vert (#22c55e)
- **Accent** : Violet (#d946ef)

## 🛠️ Comment Utiliser les Nouveaux Styles

### 1. Boutons Personnalisés
```jsx
// Bouton primaire
<button className="btn-primary">
  Acheter maintenant
</button>

// Bouton secondaire
<button className="btn-secondary">
  Ajouter au panier
</button>

// Bouton outline
<button className="btn-outline">
  En savoir plus
</button>
```

### 2. Cartes de Produits
```jsx
<div className="product-card p-4">
  <img src="..." alt="Produit" />
  <h3>Nom du produit</h3>
  <p className="price-current">29,99 €</p>
</div>
```

### 3. Badges
```jsx
// Badge "Nouveau"
<span className="badge-new">Nouveau</span>

// Badge "Promo"
<span className="badge-sale">-20%</span>
```

### 4. Section Hero
```jsx
<section className="hero-section text-center">
  <h1 className="text-4xl font-bold mb-4">
    Bienvenue dans Ma Boutique
  </h1>
  <p className="text-xl mb-8">
    Découvrez nos produits exceptionnels
  </p>
  <button className="btn-primary">
    Découvrir
  </button>
</section>
```

## 🎯 Prochaines Personnalisations Suggérées

### 1. Ajouter un Logo
```jsx
// Dans nav/index.tsx, remplacer le texte par :
<div className="flex items-center">
  <img src="/logo.png" alt="Ma Boutique" className="h-8 w-auto mr-2" />
  <span className="font-bold text-primary-700">Ma Boutique</span>
</div>
```

### 2. Personnaliser la Page d'Accueil
- Modifier `src/modules/home/`
- Ajouter une section hero
- Créer des sections de produits mis en avant

### 3. Personnaliser le Footer
- Modifier `src/modules/layout/templates/footer/`
- Ajouter vos informations de contact
- Personnaliser les couleurs

### 4. Ajouter des Animations
```jsx
// Animation flottante
<div className="float-animation">
  <img src="..." alt="Produit vedette" />
</div>
```

## 📱 Responsive Design

Tous les styles sont responsive grâce à Tailwind CSS :
- `small:` pour tablettes
- `medium:` pour desktop
- `large:` pour grands écrans

## 🎨 Palette de Couleurs Disponibles

### Primaire (Bleu)
- `bg-primary-50` à `bg-primary-900`
- `text-primary-50` à `text-primary-900`
- `border-primary-50` à `border-primary-900`

### Secondaire (Vert)
- `bg-secondary-50` à `bg-secondary-900`
- `text-secondary-50` à `text-secondary-900`
- `border-secondary-50` à `border-secondary-900`

### Accent (Violet)
- `bg-accent-50` à `bg-accent-900`
- `text-accent-50` à `text-accent-900`
- `border-accent-50` à `border-accent-900`

## 🔧 Fichiers Importants

1. **`tailwind.config.js`** : Configuration des couleurs et thème
2. **`src/styles/globals.css`** : Styles globaux
3. **`src/styles/custom.css`** : Vos styles personnalisés
4. **`src/modules/layout/`** : Composants de mise en page
5. **`src/modules/home/`** : Page d'accueil

## 💡 Conseils

1. **Testez vos changements** : Le site se recharge automatiquement
2. **Utilisez les classes Tailwind** : Plus maintenable
3. **Gardez la cohérence** : Utilisez votre palette de couleurs
4. **Pensez mobile** : Testez sur différentes tailles d'écran

## 🌐 Voir les Changements

Votre site est accessible à :
- **Storefront** : http://localhost:3000
- **Admin** : http://localhost:9000/app

Les changements sont visibles immédiatement !
