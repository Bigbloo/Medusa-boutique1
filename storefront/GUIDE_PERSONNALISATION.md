# 🎨 Guide de Personnalisation - Ma Boutique Medusa

Ce guide vous explique comment personnaliser l'apparence de votre boutique en ligne Medusa.

## 📁 Structure des Fichiers de Style

```
src/styles/
├── globals.css      # Styles Tailwind + classes utilitaires
├── custom.css       # VOS styles personnalisés (nouveau)
└── tailwind.config.js # Configuration Tailwind
```

## 🎯 1. Méthodes de Personnalisation

### A. Variables CSS (Recommandé)
Modifiez les couleurs principales dans `custom.css` :

```css
:root {
  --primary-color: #3b82f6;     /* Bleu principal */
  --secondary-color: #8b5cf6;   /* Violet secondaire */
  --accent-color: #f59e0b;      /* Orange accent */
}
```

### B. Classes CSS Personnalisées
Utilisez les classes prêtes dans `custom.css` :

```html
<!-- Boutons -->
<button class="btn-custom-primary">Acheter</button>
<button class="btn-custom-secondary">Voir plus</button>

<!-- Cartes produits -->
<div class="product-card-custom">...</div>

<!-- Texte avec dégradé -->
<h1 class="text-gradient">Ma Boutique</h1>
```

### C. Configuration Tailwind
Modifiez `tailwind.config.js` pour vos couleurs :

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        }
      }
    }
  }
}
```

## 🎨 2. Personnalisations Courantes

### Changer les Couleurs Principales

1. **Ouvrez** `src/styles/custom.css`
2. **Modifiez** les variables dans `:root` :

```css
:root {
  --primary-color: #e11d48;     /* Rouge */
  --secondary-color: #7c3aed;   /* Violet */
  --accent-color: #059669;      /* Vert */
}
```

### Personnaliser le Header

1. **Trouvez** le fichier `src/modules/layout/templates/nav/index.tsx`
2. **Ajoutez** la classe `custom-header` :

```tsx
<nav className="custom-header sticky top-0 z-50">
  {/* Contenu du header */}
</nav>
```

### Modifier les Cartes Produits

Remplacez les classes existantes par `product-card-custom` :

```tsx
<div className="product-card-custom hover-scale">
  <div className="product-image-wrapper">
    <img className="product-image" src="..." />
    <span className="product-badge">Nouveau</span>
  </div>
  <div className="product-info">
    <h3 className="product-title">Nom du produit</h3>
    <p className="product-price">€29.99</p>
  </div>
</div>
```

## 🖼️ 3. Ajouter des Images et Logos

### Logo Principal
1. **Placez** votre logo dans `public/images/`
2. **Modifiez** le header dans `nav/index.tsx` :

```tsx
<Link href="/">
  <img src="/images/mon-logo.png" alt="Ma Boutique" className="h-8" />
</Link>
```

### Images de Fond
Ajoutez dans `custom.css` :

```css
.hero-custom {
  background-image: url('/images/hero-bg.jpg');
  background-size: cover;
  background-position: center;
}
```

## 🎭 4. Thèmes et Modes

### Mode Sombre
Le CSS inclut déjà un mode sombre automatique. Pour forcer le mode sombre :

```css
[data-theme="dark"] {
  --background: #111827;
  --text-primary: #f9fafb;
  /* ... autres variables */
}
```

### Thèmes Saisonniers
Créez des variantes dans `custom.css` :

```css
/* Thème Noël */
.theme-christmas {
  --primary-color: #dc2626;
  --secondary-color: #059669;
  --accent-color: #fbbf24;
}

/* Thème Été */
.theme-summer {
  --primary-color: #0ea5e9;
  --secondary-color: #06b6d4;
  --accent-color: #f59e0b;
}
```

## 📱 5. Responsive Design

### Points de Rupture
```css
/* Mobile */
@media (max-width: 640px) {
  .hero-title { font-size: 1.5rem; }
}

/* Tablette */
@media (max-width: 768px) {
  .product-grid { grid-template-columns: repeat(2, 1fr); }
}

/* Desktop */
@media (min-width: 1024px) {
  .container { max-width: 1200px; }
}
```

## ⚡ 6. Animations et Effets

### Animations Prêtes
```html
<!-- Apparition en fondu -->
<div class="animate-fade-in-up">Contenu</div>

<!-- Effet de pulsation -->
<div class="animate-pulse-custom">Chargement...</div>

<!-- Effet de survol -->
<div class="hover-scale">Survole-moi</div>
```

### Créer Vos Animations
```css
@keyframes slideIn {
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
}

.slide-in {
  animation: slideIn 0.5s ease-out;
}
```

## 🔧 7. Intégration dans les Composants

### Importer les Styles
Dans vos composants React, ajoutez :

```tsx
import '../styles/custom.css'

export default function MonComposant() {
  return (
    <div className="product-card-custom">
      {/* Contenu */}
    </div>
  )
}
```

### Styles Conditionnels
```tsx
const buttonClass = isActive 
  ? "btn-custom-primary" 
  : "btn-custom-secondary"

return <button className={buttonClass}>Cliquez</button>
```

## 🎯 8. Exemples Pratiques

### Page d'Accueil Héroïque
```tsx
<section className="hero-section">
  <div className="container mx-auto px-4">
    <h1 className="hero-title">Bienvenue dans Ma Boutique</h1>
    <p className="hero-subtitle">Découvrez nos produits exceptionnels</p>
    <button className="btn-custom-primary">Découvrir</button>
  </div>
</section>
```

### Grille de Produits
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {products.map(product => (
    <div key={product.id} className="product-card-custom animate-fade-in-up">
      {/* Contenu produit */}
    </div>
  ))}
</div>
```

### Footer Personnalisé
```tsx
<footer className="custom-footer">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      <div className="footer-section">
        <h3 className="footer-title">Ma Boutique</h3>
        <p>Description de votre boutique...</p>
      </div>
      {/* Autres sections */}
    </div>
  </div>
</footer>
```

## 🚀 9. Optimisation et Performance

### CSS Critique
Gardez les styles essentiels dans `globals.css` et les personnalisations dans `custom.css`.

### Purge CSS
Tailwind purge automatiquement les classes non utilisées en production.

### Lazy Loading
```css
.lazy-image {
  opacity: 0;
  transition: opacity 0.3s;
}

.lazy-image.loaded {
  opacity: 1;
}
```

## 🔍 10. Débogage et Outils

### Inspecteur CSS
1. **F12** dans le navigateur
2. **Inspectez** l'élément
3. **Modifiez** les styles en temps réel

### Variables CSS dans DevTools
```css
/* Testez vos couleurs */
:root {
  --test-color: #ff0000;
}
```

## 📚 11. Ressources Utiles

### Générateurs de Couleurs
- [Coolors.co](https://coolors.co) - Palettes de couleurs
- [Adobe Color](https://color.adobe.com) - Roue chromatique

### Icônes
- [Heroicons](https://heroicons.com) - Icônes SVG
- [Feather Icons](https://feathericons.com) - Icônes légères

### Polices
- [Google Fonts](https://fonts.google.com) - Polices gratuites
- [Font Pair](https://fontpair.co) - Associations de polices

## 🎨 12. Exemples de Personnalisation Avancée

### Thème E-commerce Moderne
```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #ec4899;
  --accent-color: #10b981;
  --neutral-100: #f5f5f5;
  --neutral-900: #171717;
}

.modern-card {
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 1px solid var(--neutral-100);
}

.modern-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}
```

### Boutons avec Effets
```css
.btn-gradient {
  background: linear-gradient(45deg, var(--primary-color), var(--secondary-color));
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 2rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.btn-gradient::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  transition: left 0.5s;
}

.btn-gradient:hover::before {
  left: 100%;
}
```

---

## 🎯 Prochaines Étapes

1. **Testez** les styles dans `custom.css`
2. **Modifiez** les couleurs selon votre marque
3. **Ajoutez** vos propres classes CSS
4. **Intégrez** dans vos composants React
5. **Optimisez** pour mobile et desktop

**Besoin d'aide ?** Consultez la documentation Tailwind CSS et les exemples dans ce guide !
