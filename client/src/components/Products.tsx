import { useState } from "react";
import { motion } from "framer-motion";
import ProductCard from "@/components/ui/product-card";
import BoloGalleryItemCard from "@/components/ui/bolo-gallery-item";
import { tacasProducts, cassatasProducts, potesProducts, bolosGallery } from "@/data/products";
import { Button } from "@/components/ui/button";
import { ImageModal } from "@/components/ui/image-modal";
import { useImageModal } from "@/hooks/use-image-modal";
import { Search } from "lucide-react";

export default function Products() {
  const [activeTab, setActiveTab] = useState("tacas");
  const imageModal = useImageModal();

  return (
    <section id="produtos" className="py-24 relative">
      {/* Image Modal for Gallery Images */}
      <ImageModal 
        isOpen={imageModal.isOpen}
        onClose={imageModal.closeModal}
        imageUrl={imageModal.imageUrl}
        altText={imageModal.altText}
      />
      
      {/* Elementos decorativos de fundo */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent z-10"></div>
      <motion.div 
        className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-primary/5 blur-3xl"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.05, 0.08, 0.05] 
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-1/4 left-1/4 w-60 h-60 rounded-full bg-secondary/5 blur-3xl"
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.05, 0.07, 0.05] 
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      ></motion.div>
        
      <div className="container mx-auto px-4 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex flex-col items-center">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-chocolate mb-3 text-center">
              Nossos <span className="text-secondary">Produtos</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
            <p className="text-gray-600 max-w-2xl text-center mt-4">
              Descubra nossas criações artesanais, feitas com ingredientes selecionados para momentos especiais
            </p>
          </div>
        </motion.div>
        
        {/* Featured Product - La Crema */}
        <motion.div 
          className="bg-gradient-to-r from-primary via-primary/95 to-accent rounded-3xl overflow-hidden mb-16 text-white shadow-[var(--shadow-xl)] relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {/* Decorative elements animados */}
          <motion.div 
            className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.15, 0.1]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          ></motion.div>
          <motion.div 
            className="absolute -bottom-12 -left-12 w-48 h-48 bg-secondary/20 rounded-full blur-xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.15, 0.2, 0.15]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          ></motion.div>
          
          {/* Padrão decorativo */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0aDEydjEySDM2eiIvPjxwYXRoIGQ9Ik0xMiAxMmgxMnYxMkgxMnoiLz48cGF0aCBkPSJNMzYgMTJoMTJ2MTJIMTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
          
          <div className="flex flex-col md:flex-row items-center gap-8 p-4 md:p-8 relative z-10">
            <div className="md:w-1/3 relative">
              <div className="absolute -top-4 -right-4 bg-secondary text-white px-5 py-2 rounded-full transform rotate-3 font-dancing text-lg font-bold shadow-[var(--shadow-md)] z-20 flex items-center gap-1.5">
                <span className="animate-pulse">★</span> Favorito!
              </div>
              <motion.div
                whileHover={{ scale: 1.03, rotate: -1 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="relative group"
              >
                {/* Borda decorativa */}
                <div className="absolute -inset-1.5 bg-white/20 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <img 
                  src="https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/05/whatsapp-image-2025-05-23-at-21.10.22.webp" 
                  alt="La Crema - O carro-chefe da casa" 
                  className="rounded-xl shadow-[var(--shadow-lg)] border-4 border-white/40 relative z-10 transition-all duration-300 group-hover:shadow-[var(--shadow-highlight-secondary)]"
                />
                
                {/* Badge decorativo que aparece no hover */}
                <motion.div 
                  className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-md text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 0 }}
                  whileHover={{ opacity: 1, y: 0 }}
                >
                  <span className="mr-1 text-yellow-500">✨</span> <span className="text-secondary">Premium</span>
                </motion.div>
              </motion.div>
            </div>
            
            <div className="md:w-2/3">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="relative inline-block mb-1">
                  <motion.span 
                    className="absolute -top-10 -right-8 text-4xl transform rotate-12 opacity-0"
                    animate={{ 
                      opacity: [0, 1, 0],
                      y: [0, -20, -10],
                      rotate: [12, 6, 12]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 5
                    }}
                  >
                    ✨
                  </motion.span>
                  <h3 className="font-dancing text-3xl md:text-5xl mb-3 relative">
                    La Crema - <span className="relative inline-block">
                      <span className="relative z-10">O carro-chefe da casa!</span>
                      <motion.div 
                        className="absolute bottom-1 left-0 h-3 bg-white/20 rounded-full z-0"
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.9 }}
                      ></motion.div>
                    </span>
                  </h3>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + (i * 0.1) }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-yellow-300 drop-shadow-md">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                      </svg>
                    </motion.div>
                  ))}
                </div>
                
                <motion.p 
                  className="mb-6 text-white text-lg leading-relaxed backdrop-blur-[2px] p-4 rounded-xl bg-white/5 border border-white/10 shadow-inner"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  Nosso doce mais amado pelos clientes! A verdadeira obra-prima da confeitaria com combinação perfeita de texturas e sabores que conquistou o paladar de todos. Experimente esta sensação única de prazer em cada colherada.
                </motion.p>
              </motion.div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    label: "Taça decorada com frutas",
                    price: "155,00/kg",
                    link: "https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20uma%20taça%20de%20La%20Crema%20com%20decoração%20de%20frutas%20por%20R$%20155,00/kg.",
                    icon: "fas fa-glass-martini"
                  },
                  {
                    label: "Pote de 1L",
                    price: "130,00",
                    link: "https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20um%20pote%20de%201L%20de%20La%20Crema%20por%20R$%20130,00.",
                    icon: "fas fa-box-open"
                  }
                ].map((option, index) => (
                  <motion.div
                    key={option.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + (index * 0.1) }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button asChild variant="secondary" className="w-full bg-[#F03D87] text-white hover:bg-[#F03D87] hover:opacity-90 hover:shadow-[0_0_8px_rgba(240,61,135,0.5)] font-medium shadow-md group py-6 text-base">
                      <a href={option.link} className="flex items-center justify-between px-2">
                        <div className="flex items-center flex-1">
                          <i className={`${option.icon} mr-3 text-lg group-hover:text-white transition-colors`}></i>
                          <span className="leading-tight">{option.label}</span>
                        </div>
                        <span className="bg-white/20 px-3 py-2 rounded-full font-bold group-hover:bg-white/30 text-sm whitespace-nowrap ml-2">
                          R$ {option.price}
                        </span>
                      </a>
                    </Button>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Product Tabs - Simplified */}
        <div className="w-full">
          <div className="mb-12 flex justify-center">
            <div className="bg-white rounded-xl shadow-lg p-1 flex flex-wrap gap-1 justify-center">
              {[
                { value: "tacas", label: "Pavês" },
                { value: "cassatas", label: "Cassatas" },
                { value: "potes", label: "Sobremesas" },
                { value: "bolos", label: "Bolos" }
              ].map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => setActiveTab(tab.value)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === tab.value 
                      ? "bg-primary text-white shadow-md" 
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
          
          {/* Tab Content */}
          {activeTab === "tacas" && (
            <div>
              <div className="mb-8 text-center">
                <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
                  Nossos pavês são verdadeiras obras de arte, elaborados com ingredientes selecionados e muito amor. Perfeitos para momentos especiais ou para se deliciar em casa.
                </p>

              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {tacasProducts.map((product, index) => (
                  <div key={product.id}>
                    <ProductCard product={product} type="taca" />
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {activeTab === "cassatas" && (
            <div>
              <div className="mb-8 text-center">
                <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
                  Nossas cassatas combinam cremosidade, sabor e uma apresentação impecável. Cada uma é preparada com carinho em nosso atelier.
                </p>

                <div className="bg-yellow-50 border border-yellow-100 text-yellow-800 rounded-lg py-2 px-4 inline-block mt-2 mb-10">
                  <i className="fas fa-info-circle mr-2"></i>
                  <span className="text-sm font-medium">As cassatas não são congeláveis</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cassatasProducts.map((product, index) => (
                  <div key={product.id}>
                    <ProductCard product={product} type="pote" />
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {activeTab === "potes" && (
            <div>
              <div className="mb-8 text-center">
                <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
                  Nossas sobremesas são preparadas com ingredientes selecionados e recheios diferenciados, garantindo experiências únicas a cada colherada.
                </p>

              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {potesProducts.map((product, index) => (
                  <div key={product.id}>
                    <ProductCard product={product} type="pote" />
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {activeTab === "bolos" && (
            <div>
              <div className="mb-8 text-center">
                <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
                  Nossos bolos são feitos com massa tipo pão de ló e decorados artesanalmente para cada ocasião. Confira alguns dos nossos sabores especiais:
                </p>
                
                <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 max-w-3xl mx-auto mb-12 border border-gray-100">
                  <h3 className="font-montserrat font-semibold text-xl mb-6 text-primary">Informações importantes</h3>
                  <ul className="space-y-4 text-left">
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-secondary mt-1 mr-3 text-lg"></i>
                      <span className="text-gray-700">Nossos bolos são cobrados por tamanho (P, M e G)</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-secondary mt-1 mr-3 text-lg"></i>
                      <span className="text-gray-700">Trabalhamos somente com massas tipo pão de ló e com dois tipos de cobertura: chantininho e ganache de chantilly</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-secondary mt-1 mr-3 text-lg"></i>
                      <span className="text-gray-700">Encomendas com pelo menos 48hs de antecedência</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {bolosGallery.map((item) => (
                  <div key={item.id}>
                    <BoloGalleryItemCard item={item} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}