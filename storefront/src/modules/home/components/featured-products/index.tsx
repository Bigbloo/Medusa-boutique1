import { HttpTypes } from "@medusajs/types"
import ProductRail from "@modules/home/components/featured-products/product-rail"

export default async function FeaturedProducts({
  collections,
  region,
}: {
  collections: HttpTypes.StoreCollection[]
  region: HttpTypes.StoreRegion
}) {
  // Si nous avons des collections, les afficher
  if (collections && collections.length > 0) {
    return collections.map((collection) => (
      <li key={collection.id}>
        <ProductRail collection={collection} region={region} />
      </li>
    ))
  }

  // Sinon, afficher une section "Produits en vedette" générique
  const defaultCollection = {
    id: "featured",
    handle: "featured",
    title: "Produits en Vedette"
  } as HttpTypes.StoreCollection

  return (
    <li key="featured">
      <ProductRail collection={defaultCollection} region={region} />
    </li>
  )
}
