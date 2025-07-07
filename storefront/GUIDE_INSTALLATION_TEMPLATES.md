# 🎨 Guide d'Installation des Templates

## 📋 Templates Disponibles

### ✅ **Template 1: E-commerce Moderne** (Actuel)
- **Couleurs:** Bleu et Violet
- **Style:** Moderne, professionnel
- **Statut:** ✅ Déjà installé

### 🖤 **Template 2: Boutique de Mode**
- **Couleurs:** Noir et Or
- **Style:** Élégant, luxueux
- **Fichier:** `templates/template-boutique-mode.css`

### 🤖 **Template 3: Tech/Électronique**
- **Couleurs:** Sombre avec néons verts
- **Style:** Futuriste, high-tech
- **Fichier:** `templates/template-tech-electronique.css`

### 🌿 **Template 4: Artisanal/Bio**
- **Couleurs:** Vert nature et beige
- **Style:** Naturel, chaleureux
- **Fichier:** `templates/template-artisanal-bio.css`

---

## 🚀 Installation d'un Template

### Méthode 1: Remplacement Complet (Recommandé)

1. **Sauvegardez** votre configuration actuelle :
   ```bash
   cp src/styles/globals.css src/styles/globals.css.backup
   ```

2. **Choisissez** votre template et copiez son contenu

3. **Remplacez** la section `@layer components` dans `src/styles/globals.css`

4. **Redémarrez** le serveur :
   ```bash
   npm run dev
   ```

### Méthode 2: Ajout Progressif

1. **Ouvrez** `src/styles/globals.css`
2. **Ajoutez** les nouvelles classes à la fin de la section `@layer components`
3. **Utilisez** les nouvelles classes dans vos composants

---

## 📝 Instructions Détaillées par Template

### 🖤 Template Boutique de Mode

#### Installation :
```css
/* Remplacez la section @layer components dans globals.css par : */
@layer components {
  /* Copiez tout le contenu de templates/template-boutique-mode.css */
}
```

#### Classes principales :
- `fashion-header` - Header élégant
- `btn-fashion-primary` - Bouton noir avec effet or
- `btn-fashion-secondary` - Bouton contour noir
- `btn-fashion-gold` - Bouton doré
- `fashion-product-card` - Carte produit luxueuse
- `fashion-hero` - Section héro noire
- `fashion-text-gold` - Texte doré élégant

#### Exemple d'utilisation :
```tsx
<nav className="fashion-header p-4">
  <h1 className="fashion-logo">Ma Boutique</h1>
</nav>

<section className="fashion-hero text-center">
  <div className="fashion-hero-content">
    <h1 className="fashion-hero-title">Collection Exclusive</h1>
    <p className="fashion-hero-subtitle">L'élégance à l'état pur</p>
    <button className="btn-fashion-primary">Découvrir</button>
  </div>
</section>

<div className="fashion-product-card">
  <img className="fashion-product-image" src="..." />
  <div className="fashion-product-info">
    <h3 className="fashion-product-title">Produit Luxe</h3>
    <p className="fashion-product-price">€299</p>
  </div>
</div>
```

---

### 🤖 Template Tech/Électronique

#### Installation :
```css
/* Remplacez la section @layer components dans globals.css par : */
@layer components {
  /* Copiez tout le contenu de templates/template-tech-electronique.css */
}
```

#### Classes principales :
- `tech-header` - Header futuriste
- `btn-tech-primary` - Bouton néon vert
- `btn-tech-secondary` - Bouton cyan
- `tech-product-card` - Carte produit high-tech
- `tech-hero` - Section héro sombre
- `tech-text-neon` - Texte néon lumineux

#### Polices recommandées :
Ajoutez dans votre `<head>` :
```html
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Roboto+Mono:wght@300;400;700&display=swap" rel="stylesheet">
```

#### Exemple d'utilisation :
```tsx
<nav className="tech-header p-4">
  <h1 className="tech-logo">TechStore</h1>
</nav>

<section className="tech-hero tech-bg-pattern">
  <div className="tech-hero-content text-center">
    <h1 className="tech-hero-title">Future Tech</h1>
    <p className="tech-hero-subtitle">Innovation at its finest</p>
    <button className="btn-tech-primary tech-glow">Explore</button>
  </div>
</section>

<div className="tech-product-card tech-hover-glow">
  <img className="tech-product-image" src="..." />
  <div className="tech-product-info">
    <h3 className="tech-product-title">Gaming Laptop</h3>
    <p className="tech-product-price">€1,299</p>
  </div>
</div>
```

---

### 🌿 Template Artisanal/Bio

#### Installation :
```css
/* Remplacez la section @layer components dans globals.css par : */
@layer components {
  /* Copiez tout le contenu de templates/template-artisanal-bio.css */
}
```

#### Classes principales :
- `nature-header` - Header naturel
- `btn-nature-primary` - Bouton vert arrondi
- `btn-nature-secondary` - Bouton contour vert
- `nature-product-card` - Carte produit organique
- `nature-hero` - Section héro verte
- `nature-text-green` - Texte vert naturel

#### Polices recommandées :
```html
<link href="https://fonts.googleapis.com/css2?family=Pacifico&family=Nunito:wght@300;400;600;700&display=swap" rel="stylesheet">
```

#### Exemple d'utilisation :
```tsx
<nav className="nature-header p-4">
  <h1 className="nature-logo">Bio Market</h1>
</nav>

<section className="nature-hero nature-bg-organic">
  <div className="nature-hero-content text-center">
    <h1 className="nature-hero-title">Produits Bio</h1>
    <p className="nature-hero-subtitle">Naturellement délicieux</p>
    <button className="btn-nature-primary nature-hover-lift">Découvrir</button>
  </div>
</section>

<div className="nature-product-card nature-soft-shadow">
  <span className="nature-badge-organic">Bio</span>
  <img className="nature-product-image" src="..." />
  <div className="nature-product-info">
    <h3 className="nature-product-title">Miel Artisanal</h3>
    <p className="nature-product-price">€12.99</p>
  </div>
</div>
```

---

## 🔄 Changement de Template

### Étapes :

1. **Sauvegardez** votre template actuel
2. **Ouvrez** `src/styles/globals.css`
3. **Remplacez** tout le contenu de `@layer components { ... }`
4. **Collez** le nouveau template
5. **Redémarrez** le serveur
6. **Testez** votre site

### Script de changement rapide :

```bash
# Sauvegarder
cp src/styles/globals.css src/styles/globals-backup-$(date +%Y%m%d).css

# Appliquer le nouveau template
# (Remplacez manuellement le contenu)

# Redémarrer
npm run dev
```

---

## 🎨 Personnalisation des Templates

### Modifier les couleurs :

#### Template Mode :
```css
:root {
  --fashion-black: #1a1a1a;    /* Noir plus doux */
  --fashion-gold: #d4af37;     /* Or plus classique */
}
```

#### Template Tech :
```css
:root {
  --tech-neon-green: #00ff00;  /* Vert plus vif */
  --tech-neon-blue: #0080ff;   /* Bleu plus intense */
}
```

#### Template Nature :
```css
:root {
  --nature-green: #228b22;     /* Vert forêt */
  --nature-beige: #f5deb3;     /* Beige plus chaud */
}
```

---

## 🐛 Dépannage

### Problèmes courants :

#### 1. **Styles non appliqués**
- Vérifiez que le serveur est redémarré
- Videz le cache du navigateur (Ctrl+F5)

#### 2. **Polices manquantes**
- Ajoutez les liens Google Fonts dans `<head>`
- Vérifiez la connexion internet

#### 3. **Conflits de styles**
- Assurez-vous d'avoir remplacé tout le contenu `@layer components`
- Vérifiez qu'il n'y a pas de doublons

#### 4. **Erreurs de compilation**
- Vérifiez la syntaxe CSS
- Assurez-vous que toutes les accolades sont fermées

---

## 📱 Test des Templates

### Checklist de test :

- [ ] Header s'affiche correctement
- [ ] Boutons ont les bons styles
- [ ] Cartes produits sont stylisées
- [ ] Animations fonctionnent
- [ ] Responsive design OK
- [ ] Polices chargées
- [ ] Couleurs cohérentes

### Outils de test :

1. **Inspecteur navigateur** (F12)
2. **Mode responsive** (Ctrl+Shift+M)
3. **Test sur mobile réel**

---

## 🎯 Prochaines Étapes

1. **Choisissez** votre template préféré
2. **Installez-le** selon les instructions
3. **Personnalisez** les couleurs
4. **Testez** sur différents écrans
5. **Ajustez** selon vos besoins

**Besoin d'aide ?** Consultez les guides détaillés ou les exemples fournis !
