import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";
import { BoloGalleryItem } from "@/data/products";
import { ImageModal } from "@/components/ui/image-modal";

type BoloGalleryItemProps = {
  item: BoloGalleryItem;
};

export default function BoloGalleryItemCard({ item }: BoloGalleryItemProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  
  const hasMultipleImages = item.images.length > 1;
  
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % item.images.length);
  };
  
  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + item.images.length) % item.images.length);
  };
  
  return (
    <motion.div 
      className="gallery-item relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Modal para visualização ampliada da imagem */}
      <ImageModal 
        isOpen={isImageModalOpen}
        onClose={() => setIsImageModalOpen(false)}
        imageUrl={item.images[currentImageIndex]}
        altText={item.name}
      />
      
      {/* Container da imagem com carrossel */}
      <div className="relative h-64 overflow-hidden group">
        <img 
          src={item.images[currentImageIndex]}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Overlay com botão de zoom */}
        <button
          type="button"
          onClick={() => setIsImageModalOpen(true)}
          className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-white focus:ring-inset"
          aria-label={`Ampliar imagem de ${item.name}`}
        >
          <div className="opacity-0 group-hover:opacity-100 bg-white/90 text-gray-800 p-3 rounded-full transition-all duration-300 hover:bg-white hover:scale-110">
            <Search size={20} />
          </div>
        </button>
        
        {/* Controles do carrossel - apenas se houver múltiplas imagens */}
        {hasMultipleImages && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/70"
            >
              <ChevronLeft size={16} />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/70"
            >
              <ChevronRight size={16} />
            </button>
            
            {/* Indicadores de imagem */}
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
              {item.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentImageIndex 
                      ? 'bg-white' 
                      : 'bg-white/50 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
      
      {/* Conteúdo do card */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="font-montserrat font-semibold text-xl mb-2 text-gray-800">
          {item.name}
        </h3>
        
        <div className="min-h-[1.5rem] mb-3">
          {hasMultipleImages && (
            <p className="text-sm text-gray-500">
              {item.images.length} fotos disponíveis
            </p>
          )}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-auto"
        >
          <a
            href="https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20um%20bolo%20personalizado.%20Pode%20me%20dar%20mais%20informações%20sobre%20preços%20e%20opções%20disponíveis?"
            className="inline-flex items-center justify-center w-full bg-[#4B2E1F] text-white py-3 px-4 rounded-lg font-medium hover:bg-[#5D3924] transition-all duration-300 hover:shadow-[0_0_12px_rgba(75,46,31,0.4)]"
          >
            <i className="fab fa-whatsapp text-lg mr-2"></i>
            Solicitar Orçamento
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}