# Guide de Personnalisation du Design - Medusa Storefront

## 🎨 Options de Personnalisation

### 1. **Personnalisation Simple - Couleurs et Thème**

#### A. Modifier les couleurs principales
Éditez `tailwind.config.js` pour ajouter vos couleurs de marque :

```javascript
theme: {
  extend: {
    colors: {
      // Vos couleurs de marque
      primary: {
        50: '#eff6ff',
        100: '#dbeafe',
        500: '#3b82f6',
        600: '#2563eb',
        900: '#1e3a8a',
      },
      secondary: {
        50: '#f0fdf4',
        500: '#22c55e',
        600: '#16a34a',
      },
      // Remplacer les couleurs grises par défaut
      brand: {
        light: '#f8fafc',
        dark: '#0f172a',
      }
    }
  }
}
```

#### B. Changer la police
```javascript
fontFamily: {
  sans: [
    "Poppins", // Votre police préférée
    "Inter",
    "-apple-system",
    "BlinkMacSystemFont",
    "sans-serif",
  ],
},
```

### 2. **Personnalisation Intermédiaire - Composants**

#### A. Modifier le header/navigation
Le fichier `src/modules/layout/templates/nav/index.tsx` contient la navigation.

Exemple de personnalisation :
- Changer "Medusa Store" par le nom de votre boutique
- Modifier les couleurs de fond
- Ajouter un logo

#### B. Modifier la page d'accueil
Le fichier `src/modules/home/` contient les composants de la page d'accueil.

### 3. **Personnalisation Avancée - Layout Complet**

#### A. Créer un thème personnalisé
1. Créer un nouveau fichier de thème
2. Définir vos variables CSS personnalisées
3. Remplacer les composants existants

#### B. Ajouter des sections personnalisées
- Hero section avec votre branding
- Sections de produits mis en avant
- Footer personnalisé

## 🛠️ Outils et Technologies

- **Tailwind CSS** : Framework CSS utilitaire
- **Next.js** : Framework React
- **TypeScript** : Langage de programmation
- **Medusa UI** : Composants pré-construits

## 📁 Structure des Fichiers Importants

```
src/
├── styles/
│   └── globals.css          # Styles globaux
├── modules/
│   ├── layout/             # Composants de mise en page
│   ├── home/               # Page d'accueil
│   ├── products/           # Pages produits
│   └── common/             # Composants réutilisables
└── app/                    # Pages Next.js
```

## 🎯 Exemples Pratiques

### Exemple 1: Changer le nom de la boutique
Fichier: `src/modules/layout/templates/nav/index.tsx`
Ligne 25: Remplacer "Medusa Store" par votre nom

### Exemple 2: Personnaliser les couleurs
Fichier: `tailwind.config.js`
Ajouter vos couleurs dans la section `colors`

### Exemple 3: Ajouter un logo
1. Placer votre logo dans `public/`
2. Modifier le composant navigation
3. Remplacer le texte par une image

## 🚀 Prochaines Étapes

1. **Débutant** : Commencez par changer les couleurs et le nom
2. **Intermédiaire** : Personnalisez les composants existants
3. **Avancé** : Créez vos propres composants et layouts

## 📚 Ressources

- [Documentation Tailwind CSS](https://tailwindcss.com/docs)
- [Documentation Medusa](https://docs.medusajs.com)
- [Documentation Next.js](https://nextjs.org/docs)
