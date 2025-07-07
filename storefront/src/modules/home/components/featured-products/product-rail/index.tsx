import { listProducts } from "@lib/data/products"
import { HttpTypes } from "@medusajs/types"
import { Text } from "@medusajs/ui"

import InteractiveLink from "@modules/common/components/interactive-link"
import ProductPreview from "@modules/products/components/product-preview"

export default async function ProductRail({
  collection,
  region,
}: {
  collection: HttpTypes.StoreCollection
  region: HttpTypes.StoreRegion
}) {
  const {
    response: { products: pricedProducts },
  } = await listProducts({
    regionId: region.id,
    queryParams: {
      fields: "*variants.calculated_price",
      limit: 6,
    },
  })

  if (!pricedProducts) {
    return null
  }

  return (
    <div className="content-container py-12 small:py-24">
      <div className="flex justify-between items-center mb-12">
        <div>
          <h2 className="text-3xl font-playfair font-bold text-black mb-2">
            {collection.title}
          </h2>
          <div className="w-16 h-0.5 bg-yellow-400"></div>
        </div>
        <InteractiveLink href={`/collections/${collection.handle}`}>
          <span className="fashion-btn-secondary text-sm">Voir tout</span>
        </InteractiveLink>
      </div>
      <ul className="grid grid-cols-1 small:grid-cols-2 medium:grid-cols-3 gap-8 small:gap-12">
        {pricedProducts &&
          pricedProducts.map((product) => (
            <li key={product.id}>
              <ProductPreview product={product} region={region} isFeatured />
            </li>
          ))}
      </ul>
    </div>
  )
}
