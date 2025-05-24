import { useState } from "react";
import { motion } from "framer-motion";
import { TabsEdoce, TabsEdoceContent, TabsEdoceTrigger } from "@/components/ui/tabs-edoce";
import ProductCard from "@/components/ui/product-card";
import { tacasProducts, cassatasProducts, potesProducts } from "@/data/products";
import { Button } from "@/components/ui/button";

export default function Products() {
  const [activeTab, setActiveTab] = useState("tacas");

  return (
    <section id="produtos" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title text-center">
            Nossos <span className="section-highlight">Produtos</span>
          </h2>
        </motion.div>
        
        {/* Featured Product - La Crema */}
        <motion.div 
          className="bg-gradient-to-r from-primary to-accent rounded-2xl overflow-hidden mb-16 text-white shadow-2xl relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary/20 rounded-full blur-xl"></div>
          
          <div className="flex flex-col md:flex-row items-center gap-8 p-4 md:p-8 relative z-10">
            <div className="md:w-1/3 relative">
              <div className="absolute -top-4 -right-4 bg-secondary text-white px-4 py-1 rounded-full transform rotate-3 font-dancing text-lg font-bold shadow-lg z-20">
                Favorito!
              </div>
              <motion.div
                whileHover={{ scale: 1.03, rotate: -1 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <img 
                  src="https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/05/whatsapp-image-2025-05-23-at-21.10.22.webp" 
                  alt="La Crema - O carro-chefe da casa" 
                  className="rounded-lg shadow-lg border-4 border-white/30"
                />
              </motion.div>
            </div>
            
            <div className="md:w-2/3">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="font-dancing text-3xl md:text-5xl mb-3">La Crema - O carro-chefe da casa!</h3>
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-yellow-300">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
                <p className="mb-6 text-white text-lg leading-relaxed">
                  Nosso doce mais amado pelos clientes! A verdadeira obra-prima da confeitaria com combinação perfeita de texturas e sabores que conquistou o paladar de todos. Experimente esta sensação única de prazer em cada colherada.
                </p>
              </motion.div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    label: "Taça M (1,4L)",
                    price: "149,90",
                    link: "https://wa.me/5566999852299?text=Olá,%20tenho%20interesse%20no%20La%20Crema%20na%20Taça%20M%20(1,4L )%20por%20R$%20149,90.",
                    icon: "fas fa-glass-martini"
                  },
                  {
                    label: "Taça G (2,4L)",
                    price: "249,90",
                    link: "https://wa.me/5566999852299?text=Olá,%20tenho%20interesse%20no%20La%20Crema%20na%20Taça%20G%20(2,4L )%20por%20R$%20249,90.",
                    icon: "fas fa-glass-martini"
                  },
                  {
                    label: "Pote M (500ml)",
                    price: "44,90",
                    link: "https://wa.me/5566999852299?text=Olá,%20tenho%20interesse%20no%20La%20Crema%20no%20Pote%20M%20(500ml )%20por%20R$%2044,90.",
                    icon: "fas fa-box"
                  },
                  {
                    label: "Pote G (1L)",
                    price: "99,90",
                    link: "https://wa.me/5566999852299?text=Olá,%20tenho%20interesse%20no%20La%20Crema%20no%20Pote%20G%20(1L )%20por%20R$%2099,90.",
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
                    <Button asChild variant="secondary" className="w-full bg-white text-primary hover:bg-gray-50 font-medium shadow-md group">
                      <a href={option.link} className="flex items-center justify-between">
                        <div className="flex items-center">
                          <i className={`${option.icon} mr-2 group-hover:text-secondary transition-colors`}></i>
                          <span>{option.label}</span>
                        </div>
                        <span className="bg-primary/10 px-2 py-1 rounded-full font-bold text-secondary">
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
        
        {/* Product Tabs */}
        <div>
          <TabsEdoce
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <div className="mb-8 border-b border-gray-200 flex justify-center">
              <div className="flex flex-wrap justify-center rounded-lg bg-gray-100 p-1 shadow-md overflow-hidden">
                {[
                  { value: "tacas", label: "Pavês", icon: "fas fa-glass-martini" },
                  { value: "cassatas", label: "Cassatas", icon: "fas fa-ice-cream" },
                  { value: "potes", label: "Sobremesas", icon: "fas fa-box" },
                  { value: "bolos", label: "Bolos", icon: "fas fa-birthday-cake" }
                ].map((tab) => (
                  <TabsEdoceTrigger 
                    key={tab.value}
                    value={tab.value} 
                    className="flex items-center gap-1 px-3 sm:px-4 md:px-6 py-2 md:py-3 transition-all duration-300 rounded-lg text-xs sm:text-sm md:text-base"
                  >
                    <i className={`${tab.icon} text-base md:text-lg`}></i>
                    <span className="ml-1">{tab.label}</span>
                  </TabsEdoceTrigger>
                ))}
              </div>
            </div>
            
            {/* Pavês Tab Content */}
            <TabsEdoceContent value="tacas">
              <div className="mb-8 text-center">
                <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
                  Nossos pavês são verdadeiras obras de arte, elaborados com ingredientes selecionados e muito amor. Perfeitos para momentos especiais ou para se deliciar em casa.
                </p>
                <div className="bg-gray-100 inline-block py-2 px-6 rounded-full mb-10">
                  <span className="font-montserrat">Taça decorada com frutas - R$ 140,00</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {tacasProducts.map((product, index) => (
                  <div key={product.id}>
                    <ProductCard product={product} type="taca" />
                  </div>
                ))}
              </div>
            </TabsEdoceContent>
            
            {/* Cassatas Tab Content */}
            <TabsEdoceContent value="cassatas">
              <div className="mb-8 text-center">
                <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
                  Nossas cassatas combinam cremosidade, sabor e uma apresentação impecável. Cada uma é preparada com carinho em nosso atelier.
                </p>
                <div className="bg-gray-100 inline-block py-2 px-6 rounded-full mb-6">
                  <span className="font-montserrat">Pote de 1 litro - R$ 120,00</span>
                </div>
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
            </TabsEdoceContent>
            
            {/* Demais Sobremesas Tab Content */}
            <TabsEdoceContent value="potes">
              <div className="mb-8 text-center">
                <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
                  Nossas sobremesas são preparadas com ingredientes selecionados e recheios diferenciados, garantindo experiências únicas a cada colherada.
                </p>
                <div className="bg-gray-100 inline-block py-2 px-6 rounded-full mb-6">
                  <span className="font-montserrat">Pote de 1 litro - R$ 120,00</span>
                </div>
                <div className="bg-green-50 border border-green-100 text-green-800 rounded-lg py-2 px-4 inline-block mt-2 mb-10">
                  <i className="fas fa-check-circle mr-2"></i>
                  <span className="text-sm font-medium">Todas as sobremesas desta categoria são congeláveis</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {potesProducts.map((product, index) => (
                  <div key={product.id}>
                    <ProductCard product={product} type="pote" />
                  </div>
                ))}
              </div>
            </TabsEdoceContent>
            
            {/* Bolos Tab Content */}
            <TabsEdoceContent value="bolos">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
              >
                <h3 className="font-dancing text-3xl text-primary mb-3">Bolos Artesanais ÉDoce</h3>
                <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
                  Nossos bolos são feitos com massa tipo pão de ló e decorados artesanalmente para cada ocasião.
                </p>
                
                <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 max-w-3xl mx-auto mb-12 border border-gray-100">
                  <h3 className="font-montserrat font-semibold text-xl mb-6 text-primary">Informações importantes</h3>
                  <ul className="space-y-4 text-left">
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-secondary mt-1 mr-3 text-lg"></i>
                      <span className="text-gray-700">Trabalhamos somente com massas tipo pão de ló</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-secondary mt-1 mr-3 text-lg"></i>
                      <span className="text-gray-700">Nossos bolos são cobrados por tamanho, sabor e decoração</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-secondary mt-1 mr-3 text-lg"></i>
                      <span className="text-gray-700">No momento do pedido, enviar data de entrega e foto de referência</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-secondary mt-1 mr-3 text-lg"></i>
                      <span className="text-gray-700">Pedidos apenas pelo WhatsApp: (66) 99985-2299</span>
                    </li>
                  </ul>
                  
                  <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="mt-8">
                    <Button 
                      asChild
                      className="mt-8 bg-secondary hover:bg-opacity-90 text-white font-montserrat font-semibold rounded-full px-4 sm:px-8 py-4 sm:py-6 shadow-md w-full sm:w-auto"
                    >
                      <a href="https://wa.me/5566999852299?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento%20para%20bolo%20personalizado.%20Tenho%20interesse%20no%20sabor%20[PREENCHER]%20para%20o%20dia%20[PREENCHER]." className="flex items-center justify-center">
                        <i className="fab fa-whatsapp mr-2 text-xl"></i>
                        <span className="text-sm sm:text-base">Solicitar orçamento</span>
                      </a>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
              
              {/* Gallery Heading */}
              <h3 className="font-dancing text-3xl text-center mb-6">Galeria de Bolos</h3>
              
              {/* Gallery with captions */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {/* Bolo de Kit Kat com Carrossel */}
                <motion.div 
                  className="relative overflow-hidden group rounded-xl shadow-md"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                >
                  <div className="relative w-full h-64">
                    {[
                      "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/05/bolo-kitkat.webp",
                      "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/05/kit-kat-bolo.webp"
                    ].map((src, i) => (
                      <motion.img 
                        key={i}
                        src={src} 
                        alt="Bolo de Kit Kat ÉDoce"
                        className="absolute top-0 left-0 w-full h-full object-cover"
                        initial={{ opacity: i === 0 ? 1 : 0 }}
                        animate={{ 
                          opacity: [0, 1, 1, 0], 
                          zIndex: i === 0 ? [1, 1, 0, 0] : [0, 0, 1, 1] 
                        }}
                        transition={{ 
                          duration: 6, 
                          times: [0, 0.3, 0.7, 1],
                          repeat: Infinity, 
                          repeatDelay: 2,
                          delay: i === 0 ? 0 : 3 
                        }}
                      />
                    ))}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-montserrat font-medium text-center">Bolo de Kit Kat</p>
                  </div>
                </motion.div>

                {/* Bolo para Festa Infantil */}
                <motion.div 
                  className="relative overflow-hidden group rounded-xl shadow-md"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <img 
                    src="https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/05/bolo-naruto-.webp" 
                    alt="Bolo para Festa Infantil ÉDoce" 
                    className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-montserrat font-medium text-center">Bolo para Festa Infantil</p>
                  </div>
                </motion.div>

                {/* Espatulados em Chantininho */}
                <motion.div 
                  className="relative overflow-hidden group rounded-xl shadow-md"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <img 
                    src="https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/05/bolo-3.webp" 
                    alt="Espatulados em Chantininho ÉDoce" 
                    className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-montserrat font-medium text-center">Espatulados em Chantininho</p>
                  </div>
                </motion.div>

                {/* Minimalista texturizado */}
                <motion.div 
                  className="relative overflow-hidden group rounded-xl shadow-md"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <img 
                    src="https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/05/bolo-2.webp" 
                    alt="Minimalista texturizado ÉDoce" 
                    className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white font-montserrat font-medium text-center">Minimalista Texturizado</p>
                  </div>
                </motion.div>
              </div>
            </TabsEdoceContent>
          </TabsEdoce>
        </div>
      </div>
    </section>
  );
}