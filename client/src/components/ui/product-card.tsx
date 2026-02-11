import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ProductType, PRICE_BASE_PER_KG_L } from "@/data/products";
import { ImageModal } from "@/components/ui/image-modal";
import { Search } from "lucide-react";
import { generateWhatsAppLink } from "@/lib/utils";

const WHATSAPP_PHONE = "5566999852299";

type ProductCardProps = {
  product: ProductType;
  type: "taca" | "pote" | "bolo";
};

export default function ProductCard({ product, type }: ProductCardProps) {
  const isLaCrema = product.isLaCrema;
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  const whatsappMessage = `Olá! Gostaria de consultar sobre ${product.name}.`;

  return (
    <motion.div
      className="product-card relative h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <ImageModal
        isOpen={isImageModalOpen}
        onClose={() => setIsImageModalOpen(false)}
        imageUrl={product.image}
        altText={`${product.name} - imagem ampliada`}
      />

      {isLaCrema && <div className="chocolate-drip"></div>}

      {isLaCrema && (
        <span className="featured-badge">Especial</span>
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

        <p className="text-sm font-medium text-primary mb-3">
          Vendido por KG/L – valor base {PRICE_BASE_PER_KG_L}.
        </p>

        <div className="min-h-[2rem] mb-3">
          {product.note && (
            <div
              className={`text-xs font-medium py-1 px-2 rounded-md inline-block ${
                product.note.includes("não") || product.note.includes("Não")
                  ? "bg-yellow-50 text-yellow-800 border border-yellow-100"
                  : "bg-green-50 text-green-800 border border-green-100"
              }`}
            >
              <i
                className={`${
                  product.note.includes("não") || product.note.includes("Não")
                    ? "fas fa-exclamation-circle"
                    : "fas fa-check-circle"
                } mr-1`}
              ></i>
              {product.note}
            </div>
          )}
        </div>

        <div className="mt-auto">
          <Button
            asChild
            className="w-full bg-[#25D366] text-white hover:bg-[#20BD5A] hover:opacity-90 rounded-lg shadow-sm font-medium py-3"
          >
            <a
              href={generateWhatsAppLink(WHATSAPP_PHONE, whatsappMessage)}
              className="flex items-center justify-center gap-2"
            >
              <i className="fab fa-whatsapp text-lg"></i>
              Consultar no WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
