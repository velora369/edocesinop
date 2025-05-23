import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ProductType } from "@/data/products";

type ProductCardProps = {
  product: ProductType;
  type: 'taca' | 'pote' | 'bolo';
};

export default function ProductCard({ product, type }: ProductCardProps) {
  // Check if it's the featured La Crema product
  const isFeatured = product.name.includes("La Crema");
  
  return (
    <motion.div 
      className="product-card relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Chocolate drip decoration - only for featured products */}
      {isFeatured && <div className="chocolate-drip"></div>}
      
      {/* Featured badge */}
      {isFeatured && (
        <span className="featured-badge">
          Especial
        </span>
      )}
      
      <div className="relative overflow-hidden">
        <motion.img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-56 object-cover transition-transform"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-60"></div>
      </div>
      
      <div className="p-6 relative">
        <h3 className="font-montserrat font-semibold text-xl mb-2 text-chocolate">{product.name}</h3>
        <p className="text-gray-600 mb-3">{product.description}</p>
        
        {product.note && (
          <div className={`text-xs font-medium py-1 px-2 rounded-md mb-3 inline-block 
            ${product.note.includes("não") || product.note.includes("Não") 
              ? "bg-yellow-50 text-yellow-800 border border-yellow-100" 
              : "bg-green-50 text-green-800 border border-green-100"}`}>
            <i className={`${product.note.includes("não") || product.note.includes("Não") 
              ? "fas fa-exclamation-circle" 
              : "fas fa-check-circle"} mr-1`}></i>
            {product.note}
          </div>
        )}
        
        <div className="flex flex-col space-y-3">
          {type === 'taca' ? (
            <>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-500 font-medium">Escolha o tamanho:</span>
              </div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  asChild
                  className="w-full bg-primary hover:bg-opacity-90 text-white rounded-lg shadow-sm group relative overflow-hidden"
                >
                  <a href={product.tamaM.link} className="flex justify-between items-center">
                    <span>Taça M (1,4L)</span>
                    <span className="font-bold bg-white/20 py-1 px-3 rounded-full flex items-center transition-all group-hover:bg-white/30">
                      R$ {product.tamaM.price}
                    </span>
                  </a>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  asChild
                  className="w-full bg-secondary hover:bg-opacity-90 text-white rounded-lg shadow-sm group relative overflow-hidden"
                >
                  <a href={product.tamaG.link} className="flex justify-between items-center">
                    <span>Taça G (2,4L)</span>
                    <span className="font-bold bg-white/20 py-1 px-3 rounded-full flex items-center transition-all group-hover:bg-white/30">
                      R$ {product.tamaG.price}
                    </span>
                  </a>
                </Button>
              </motion.div>
            </>
          ) : (
            <>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-500 font-medium">Escolha o tamanho:</span>
              </div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  asChild
                  className="w-full bg-primary hover:bg-opacity-90 text-white rounded-lg shadow-sm group relative overflow-hidden"
                >
                  <a href={product.poteM.link} className="flex justify-between items-center">
                    <span>Pote M (500ml)</span>
                    <span className="font-bold bg-white/20 py-1 px-3 rounded-full flex items-center transition-all group-hover:bg-white/30">
                      R$ {product.poteM.price}
                    </span>
                  </a>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  asChild
                  className="w-full bg-secondary hover:bg-opacity-90 text-white rounded-lg shadow-sm group relative overflow-hidden"
                >
                  <a href={product.poteG.link} className="flex justify-between items-center">
                    <span>Pote G (1L)</span>
                    <span className="font-bold bg-white/20 py-1 px-3 rounded-full flex items-center transition-all group-hover:bg-white/30">
                      R$ {product.poteG.price}
                    </span>
                  </a>
                </Button>
              </motion.div>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
}
