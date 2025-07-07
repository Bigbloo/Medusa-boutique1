import { Button, Heading } from "@medusajs/ui"

const Hero = () => {
  return (
    <div className="h-[60vh] w-full relative bg-black overflow-hidden">
      {/* Background avec effet de brillance */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      <div className="absolute inset-0 fashion-shimmer opacity-20"></div>
      
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-8">
        <div className="space-y-4">
          <Heading
            level="h1"
            className="text-5xl md:text-6xl leading-tight text-white font-playfair font-bold tracking-wide"
          >
            MA BOUTIQUE
          </Heading>
          <Heading
            level="h2"
            className="text-xl md:text-2xl leading-relaxed text-yellow-400 font-light tracking-widest uppercase"
          >
            Collection Exclusive
          </Heading>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
            Découvrez notre sélection de vêtements haut de gamme, 
            alliant élégance intemporelle et modernité sophistiquée.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <a href="/store" className="fashion-btn-primary">
            Découvrir la Collection
          </a>
          <a href="/categories/shirts" className="fashion-btn-secondary">
            Nouveautés
          </a>
        </div>
      </div>
      
      {/* Effet de particules dorées */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-pulse opacity-60"></div>
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-yellow-300 rounded-full animate-pulse opacity-40 animation-delay-1000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-yellow-500 rounded-full animate-pulse opacity-50 animation-delay-2000"></div>
    </div>
  )
}

export default Hero
