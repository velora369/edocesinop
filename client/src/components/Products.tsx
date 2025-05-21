import { useState } from "react";
import { motion } from "framer-motion";
import { TabsEdoce, TabsEdoceContent, TabsEdoceTrigger } from "@/components/ui/tabs-edoce";
import ProductCard from "@/components/ui/product-card";
import { tacasProducts, potesProducts } from "@/data/products";
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
          className="bg-gradient-to-r from-primary to-accent rounded-xl p-4 md:p-8 mb-16 text-white shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3">
              <img 
                src="https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600" 
                alt="La Crema - O carro-chefe da casa" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-2/3">
              <h3 className="font-dancing text-3xl md:text-4xl mb-2">La Crema - O carro-chefe da casa!</h3>
              <p className="mb-6 text-gray-100">
                Nosso doce mais amado pelos clientes! Uma combinação perfeita de texturas e sabores que conquistou o paladar de todos.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Button asChild variant="secondary" className="bg-white text-primary hover:bg-gray-100 font-medium">
                  <a href="https://wa.me/5566999852299?text=Olá,%20tenho%20interesse%20no%20La%20Crema%20na%20Taça%20M%20(1,4L )%20por%20R$%20149,90.">
                    Taça M (1,4L) - R$ 149,90
                  </a>
                </Button>
                <Button asChild variant="secondary" className="bg-white text-primary hover:bg-gray-100 font-medium">
                  <a href="https://wa.me/5566999852299?text=Olá,%20tenho%20interesse%20no%20La%20Crema%20na%20Taça%20G%20(2,4L )%20por%20R$%20249,90.">
                    Taça G (2,4L) - R$ 249,90
                  </a>
                </Button>
                <Button asChild variant="secondary" className="bg-white text-primary hover:bg-gray-100 font-medium">
                  <a href="https://wa.me/5566999852299?text=Olá,%20tenho%20interesse%20no%20La%20Crema%20no%20Pote%20M%20(500ml )%20por%20R$%2044,90.">
                    Pote M (500ml) - R$ 44,90
                  </a>
                </Button>
                <Button asChild variant="secondary" className="bg-white text-primary hover:bg-gray-100 font-medium">
                  <a href="https://wa.me/5566999852299?text=Olá,%20tenho%20interesse%20no%20La%20Crema%20no%20Pote%20G%20(1L )%20por%20R$%2099,90.">
                    Pote G (1L) - R$ 99,90
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Product Tabs */}
        <TabsEdoce
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <div className="mb-8 border-b border-gray-200">
            <div className="flex flex-wrap -mb-px text-center">
              <TabsEdoceTrigger value="tacas">Taças</TabsEdoceTrigger>
              <TabsEdoceTrigger value="potes">Potes</TabsEdoceTrigger>
              <TabsEdoceTrigger value="bolos">Bolos</TabsEdoceTrigger>
            </div>
          </div>
          
          {/* Taças Tab Content */}
          <TabsEdoceContent value="tacas">
            <div className="mb-8 text-center">
              <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
                Nossas taças são verdadeiras obras de arte, perfeitas para momentos especiais ou para se deliciar em casa.
              </p>
              <div className="bg-gray-100 inline-block py-2 px-6 rounded-full mb-10">
                <span className="font-montserrat mr-4">Taça M (1,4 litros) - R$ 149,90</span>
                <span className="font-montserrat">Taça G (2,4 litros) - R$ 249,90</span>
              </div>
            </div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {tacasProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProductCard product={product} type="taca" />
                </motion.div>
              ))}
            </motion.div>
          </TabsEdoceContent>
          
          {/* Potes Tab Content */}
          <TabsEdoceContent value="potes">
            <div className="mb-8 text-center">
              <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
                Nossos potes são perfeitos para quem quer ter sempre em casa uma sobremesa especial.
              </p>
              <div className="bg-gray-100 inline-block py-2 px-6 rounded-full mb-10">
                <span className="font-montserrat mr-4">Pote M (500 ml) - R$ 44,90</span>
                <span className="font-montserrat">Pote G (1 litro) - R$ 99,90</span>
              </div>
            </div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {potesProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <ProductCard product={product} type="pote" />
                </motion.div>
              ))}
            </motion.div>
          </TabsEdoceContent>
          
          {/* Bolos Tab Content */}
          <TabsEdoceContent value="bolos">
            <div className="text-center mb-12">
              <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
                Nossos bolos são feitos com massa tipo pão de ló e decorados artesanalmente para cada ocasião.
              </p>
              
              <div className="bg-white rounded-lg shadow-md p-6 md:p-8 max-w-3xl mx-auto mb-8">
                <h3 className="font-montserrat font-semibold text-xl mb-4 text-primary">Informações importantes</h3>
                <ul className="space-y-3 text-left">
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-secondary mt-1 mr-2"></i>
                    <span>Pedidos apenas pelo WhatsApp: (66) 99985-2299</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-secondary mt-1 mr-2"></i>
                    <span>Trabalhamos somente com massas tipo pão de ló</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-secondary mt-1 mr-2"></i>
                    <span>Sabores diversos</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-secondary mt-1 mr-2"></i>
                    <span>Nossos bolos são cobrados por tamanho, sabor e decoração</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-secondary mt-1 mr-2"></i>
                    <span>No momento do pedido, enviar data de entrega e foto de referência</span>
                  </li>
                </ul>
                
                <Button 
                  asChild
                  className="mt-8 bg-secondary hover:bg-opacity-90 text-white font-montserrat font-semibold rounded-full"
                >
                  <a href="https://wa.me/5566999852299?text=Olá,%20gostaria%20de%20solicitar%20um%20orçamento%20para%20bolo%20personalizado.%20Tenho%20interesse%20no%20sabor%20[PREENCHER]%20para%20o%20dia%20[PREENCHER].">
                    Solicitar orçamento para bolo personalizado
                  </a>
                </Button>
              </div>
            </div>
            
            {/* Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <img 
                src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=500" 
                alt="Bolo decorado ÉDoce" 
                className="rounded-lg shadow-md w-full h-64 object-cover"
              />
              
              <img 
                src="https://images.unsplash.com/photo-1542826438-bd32f43d626f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=500" 
                alt="Bolo de chocolate ÉDoce" 
                className="rounded-lg shadow-md w-full h-64 object-cover"
              />
              
              <img 
                src="https://pixabay.com/get/g28576a03b4d0b3957e0a340ebd5aebe5dc53b0c62f96154dcaeaf1d24acb077d73c301cb278fb20299fcc2c06300b4a51f9cdb9759da4443338626bb9ad98264_1280.jpg" 
                alt="Bolo de aniversário ÉDoce" 
                className="rounded-lg shadow-md w-full h-64 object-cover"
              />
              
              <img 
                src="https://pixabay.com/get/g26256ea36184fc7006302cbe5915d20a080b444ca34dff0f9adace48e7d6fcf3f107596748c4726aad384a80ef469611535ff652f7709c5f520afefa709d1e9d_1280.jpg" 
                alt="Bolo de casamento ÉDoce" 
                className="rounded-lg shadow-md w-full h-64 object-cover"
              />
              
              <img 
                src="https://images.unsplash.com/photo-1621303837174-89787a7d4729?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=500" 
                alt="Bolo temático ÉDoce" 
                className="rounded-lg shadow-md w-full h-64 object-cover"
              />
            </div>
          </TabsEdoceContent>
        </TabsEdoce>
      </div>
    </section>
  );
}
