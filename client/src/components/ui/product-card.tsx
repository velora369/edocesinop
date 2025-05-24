import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ProductType } from "@/data/products";

type ProductCardProps = {
  product: ProductType;
  type: 'taca' | 'pote' | 'bolo';
};

export default function ProductCard({ product, type }: ProductCardProps) {
  // Identificar produtos especiais
  const isLaCrema = product.isLaCrema;
  const isPremium = product.isPremium;
  
  return (
    <motion.div 
      className="product-card relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Chocolate drip decoration - only for featured products */}
      {isLaCrema && <div className="chocolate-drip"></div>}
      
      {/* Featured badge */}
      {isLaCrema && (
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
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button 
              asChild
              className="w-full bg-[#F03D87] text-white hover:bg-[#F03D87] hover:opacity-90 hover:shadow-[0_0_8px_rgba(240,61,135,0.5)] rounded-lg shadow-sm group relative overflow-hidden"
            >
              <a href={product.link} className="flex justify-between items-center">
                <span>
                  {isLaCrema ? 'Taça decorada com frutas' : 'Pote de 1L'}
                </span>
                <span className="font-bold bg-white/20 py-1 px-3 rounded-full flex items-center transition-all group-hover:bg-white/30">
                  R$ {product.price}
                </span>
              </a>
            </Button>
          </motion.div>
          
          {isLaCrema && (
            <div className="mt-2 text-sm text-center text-green-600 font-medium">
              <i className="fas fa-star mr-1"></i>
              Produto com decoração especial de frutas frescas
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
