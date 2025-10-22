import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ProductType } from "@/data/products";
import { ImageModal } from "@/components/ui/image-modal";
import { Search } from "lucide-react";

type ProductCardProps = {
  product: ProductType;
  type: 'taca' | 'pote' | 'bolo';
};

export default function ProductCard({ product, type }: ProductCardProps) {
  // Identificar produtos especiais
  const isLaCrema = product.isLaCrema;
  const isPremium = product.isPremium;
  
  // Estado para controlar a exibição do modal
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  
  return (
    <motion.div 
      className="product-card relative h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Modal para visualização ampliada da imagem */}
      <ImageModal 
        isOpen={isImageModalOpen}
        onClose={() => setIsImageModalOpen(false)}
        imageUrl={product.image}
        altText={`${product.name} - imagem ampliada`}
      />
      
      {/* Chocolate drip decoration - only for featured products */}
      {isLaCrema && <div className="chocolate-drip"></div>}
      
      {/* Featured badge */}
      {isLaCrema && (
        <span className="featured-badge">
          Especial
        </span>
      )}
      
      <div className="relative overflow-hidden group">
        <motion.img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-56 object-cover transition-transform cursor-pointer"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          onClick={() => setIsImageModalOpen(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-60"></div>
        <div 
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          onClick={() => setIsImageModalOpen(true)}
        >
          <div className="bg-white/80 p-3 rounded-full">
            <Search className="text-gray-800" size={24} />
          </div>
        </div>
      </div>
      
      <div className="p-6 relative flex-1 flex flex-col">
        <h3 className="font-montserrat font-semibold text-xl mb-2 text-chocolate">{product.name}</h3>
        <p className="text-gray-600 mb-3">{product.description}</p>
        
        <div className="min-h-[2rem] mb-3">
          {product.note && (
            <div className={`text-xs font-medium py-1 px-2 rounded-md inline-block 
              ${product.note.includes("não") || product.note.includes("Não") 
                ? "bg-yellow-50 text-yellow-800 border border-yellow-100" 
                : "bg-green-50 text-green-800 border border-green-100"}`}>
              <i className={`${product.note.includes("não") || product.note.includes("Não") 
                ? "fas fa-exclamation-circle" 
                : "fas fa-check-circle"} mr-1`}></i>
              {product.note}
            </div>
          )}
        </div>
        
        <div className="flex flex-col space-y-2 mt-auto">
          {product.priceOptions.map((option, index) => (
            <motion.div
              key={option.type}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                asChild
                className={`w-full text-white hover:opacity-90 rounded-lg shadow-sm group relative overflow-hidden ${
                  option.type === 'pote' 
                    ? 'bg-[#F03D87] hover:bg-[#F03D87] hover:shadow-[0_0_8px_rgba(240,61,135,0.5)]'
                    : option.type === 'taca_sem_decoracao'
                    ? 'bg-[#8B4F8B] hover:bg-[#8B4F8B] hover:shadow-[0_0_8px_rgba(139,79,139,0.5)]'
                    : option.type === 'bolo_pequeno'
                    ? 'bg-[#4B2E1F] hover:bg-[#4B2E1F] hover:shadow-[0_0_8px_rgba(75,46,31,0.5)]'
                    : option.type === 'bolo_medio'
                    ? 'bg-[#5D3924] hover:bg-[#5D3924] hover:shadow-[0_0_8px_rgba(93,57,36,0.5)]'
                    : option.type === 'bolo_grande'
                    ? 'bg-[#6F442A] hover:bg-[#6F442A] hover:shadow-[0_0_8px_rgba(111,68,42,0.5)]'
                    : 'bg-[#6B4F8B] hover:bg-[#6B4F8B] hover:shadow-[0_0_8px_rgba(107,79,139,0.5)]'
                }`}
              >
                <a href={option.link} className="flex justify-between items-center py-3">
                  <span className="text-sm font-medium">
                    {option.label}
                  </span>
                  <span className="font-bold bg-white/20 py-1 px-2 rounded-full text-xs transition-all group-hover:bg-white/30">
                    {option.price}
                  </span>
                </a>
              </Button>
            </motion.div>
          ))}
          
          {isLaCrema && (
            <div className="mt-2 text-sm text-center text-green-600 font-medium">
              <i className="fas fa-star mr-1"></i>
              Produto destaque com opções especiais
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
