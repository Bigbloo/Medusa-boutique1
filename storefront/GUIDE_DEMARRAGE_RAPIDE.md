# 🚀 Guide de Démarrage Rapide - Personnalisation CSS

## ✅ Classes CSS Prêtes à Utiliser

Votre boutique dispose maintenant de classes CSS personnalisées prêtes à l'emploi !

### 🎨 **Boutons Stylisés**

```html
<!-- Bouton principal (bleu avec effet de survol) -->
<button className="btn-custom-primary">
  Acheter maintenant
</button>

<!-- Bouton secondaire (contour bleu) -->
<button className="btn-custom-secondary">
  Voir les détails
</button>
```

### 🛍️ **Cartes Produits Améliorées**

```html
<div className="product-card-custom hover-scale">
  <img src="produit.jpg" alt="Produit" />
  <div className="p-4">
    <h3 className="font-semibold">Nom du produit</h3>
    <p className="text-blue-600 font-bold">€29.99</p>
  </div>
</div>
```

### 🎭 **Effets Visuels**

```html
<!-- Texte avec dégradé -->
<h1 className="text-gradient text-4xl font-bold">
  Ma Boutique
</h1>

<!-- Effet de zoom au survol -->
<div className="hover-scale">
  <img src="image.jpg" alt="Image" />
</div>

<!-- Animation d'apparition -->
<div className="animate-fade-in-up">
  <p>Ce contenu apparaît avec une animation</p>
</div>
```

### 🎨 **Header Personnalisé**

```html
<nav className="custom-header p-4">
  <div className="flex justify-between items-center">
    <h1 className="text-white font-bold text-xl">Ma Boutique</h1>
    <div className="space-x-4">
      <a href="#" className="text-white hover:text-blue-200">Accueil</a>
      <a href="#" className="text-white hover:text-blue-200">Produits</a>
    </div>
  </div>
</nav>
```

## 🎯 **Exemples Pratiques**

### Page d'Accueil Moderne

```tsx
export default function HomePage() {
  return (
    <div>
      {/* Header avec dégradé */}
      <nav className="custom-header p-4">
        <h1 className="text-white font-bold text-xl">Ma Boutique</h1>
      </nav>

      {/* Section héro */}
      <section className="py-20 text-center">
        <h1 className="text-gradient text-5xl font-bold mb-4">
          Bienvenue dans Ma Boutique
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Découvrez nos produits exceptionnels
        </p>
        <button className="btn-custom-primary">
          Découvrir nos produits
        </button>
      </section>

      {/* Grille de produits */}
      <section className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map(product => (
            <div key={product.id} className="product-card-custom animate-fade-in-up">
              <img src={product.image} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold mb-2">{product.name}</h3>
                <p className="text-blue-600 font-bold">{product.price}</p>
                <button className="btn-custom-secondary mt-3 w-full">
                  Ajouter au panier
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
```

### Formulaire Stylisé

```tsx
<form className="max-w-md mx-auto">
  <div className="mb-4">
    <label className="block text-gray-700 font-semibold mb-2">
      Nom
    </label>
    <input 
      type="text" 
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
    />
  </div>
  
  <button className="btn-custom-primary w-full">
    Envoyer
  </button>
</form>
```

## 🎨 **Personnalisation Rapide**

### Changer les Couleurs

Pour changer les couleurs principales, modifiez les classes dans `src/styles/globals.css` :

```css
.btn-custom-primary {
  @apply bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1;
}

.custom-header {
  @apply bg-gradient-to-r from-red-600 to-pink-600 shadow-lg;
}

.text-gradient {
  @apply bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent;
}
```

### Ajouter Vos Propres Classes

Ajoutez vos classes dans la section `@layer components` de `globals.css` :

```css
@layer components {
  .ma-classe-custom {
    @apply bg-purple-500 text-white p-4 rounded-lg shadow-lg;
  }
  
  .mon-bouton-special {
    @apply bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-bold py-2 px-4 rounded-full transition-all duration-300;
  }
}
```

## 🚀 **Prêt à Utiliser !**

Vos styles sont maintenant actifs. Vous pouvez :

1. **Utiliser** les classes dans vos composants React
2. **Modifier** les couleurs dans `globals.css`
3. **Ajouter** vos propres classes personnalisées
4. **Tester** en temps réel sur http://localhost:3000

### 🎯 **Classes Disponibles :**

- `btn-custom-primary` - Bouton principal bleu
- `btn-custom-secondary` - Bouton contour bleu  
- `product-card-custom` - Carte produit avec ombres
- `custom-header` - Header avec dégradé
- `text-gradient` - Texte avec dégradé
- `hover-scale` - Effet de zoom au survol
- `animate-fade-in-up` - Animation d'apparition

**Amusez-vous bien avec votre nouvelle boutique ! 🎉**
