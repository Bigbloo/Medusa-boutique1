import { Text } from "@medusajs/ui"
import { listProducts } from "@lib/data/products"
import { getProductPrice } from "@lib/util/get-product-price"
import { HttpTypes } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import Thumbnail from "../thumbnail"
import PreviewPrice from "./price"

export default async function ProductPreview({
  product,
  isFeatured,
  region,
}: {
  product: HttpTypes.StoreProduct
  isFeatured?: boolean
  region: HttpTypes.StoreRegion
}) {
  // const pricedProduct = await listProducts({
  //   regionId: region.id,
  //   queryParams: { id: [product.id!] },
  // }).then(({ response }) => response.products[0])

  // if (!pricedProduct) {
  //   return null
  // }

  const { cheapestPrice } = getProductPrice({
    product,
  })

  return (
    <LocalizedClientLink href={`/products/${product.handle}`} className="group">
      <div data-testid="product-wrapper" className="fashion-product-card fashion-hover-lift">
        <div className="relative overflow-hidden">
          <Thumbnail
            thumbnail={product.thumbnail}
            images={product.images}
            size="medium"
            isFeatured={isFeatured}
            className="fashion-product-image"
          />
          <div className="fashion-product-overlay">
            <div className="fashion-product-overlay-content">
              <button className="btn-fashion-gold text-xs px-4 py-2">
                VOIR DÉTAILS
              </button>
            </div>
          </div>
          {isFeatured && (
            <span className="fashion-badge-new">
              NOUVEAU
            </span>
          )}
        </div>
        <div className="fashion-product-info">
          <Text className="fashion-product-title" data-testid="product-title">
            {product.title}
          </Text>
          <div className="flex items-center gap-x-2 mt-2">
            {cheapestPrice && (
              <div className="fashion-product-price">
                <PreviewPrice price={cheapestPrice} />
              </div>
            )}
          </div>
        </div>
      </div>
    </LocalizedClientLink>
  )
}
