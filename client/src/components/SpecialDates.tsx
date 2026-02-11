import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { generateWhatsAppLink } from "@/lib/utils";

const getSpecialDatesData = () => [
  {
    id: 1,
    title: "Natal",
    description: "Panetones artesanais, tortas natalinas e bolos temáticos que trazem o verdadeiro espírito do Natal para sua mesa.",
    image: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/05/caixa-de-presente-vermelha-embaixo-de-uma-arvore-de-natal.webp",
    link: generateWhatsAppLink("5566999852299", "Olá, gostaria de informações sobre os produtos especiais de Natal."),
    status: "soon",
    buttonText: "Indisponível"
  },
  {
    id: 2,
    title: "Páscoa",
    description: "Ovos de colher recheados, colombas pascal e outras delícias que transformam a Páscoa em uma celebração inesquecível.",
    image: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/05/captura-de-tela-2025-05-23-as-19.33.13.webp",
    link: generateWhatsAppLink("5566999852299", "Olá, gostaria de informações sobre os produtos especiais de Páscoa."),
    status: "unavailable",
    buttonText: "Indisponível"
  },
  {
    id: 3,
    title: "Dia dos Namorados",
    description: "Doces especiais para dois, com opções românticas e irresistíveis para surpreender quem você ama.",
    image: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/05/11585069.webp",
    link: generateWhatsAppLink("5566999852299", "Olá, gostaria de informações sobre os produtos especiais para o Dia dos Namorados."),
    status: "soon",
    buttonText: "Indisponível"
  }
];

export default function SpecialDates() {
  return (
    <section id="datas-especiais" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title text-center">
            Cardápios <span className="section-highlight">Especiais</span> para Momentos Únicos
          </h2>
          <p className="text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            Celebre as datas mais importantes do ano com nossas criações especiais, desenvolvidas para tornar cada comemoração ainda mais memorável.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {getSpecialDatesData().map((item, index) => (
            <motion.div
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <img 
                src={item.image} 
                alt={`Produtos de ${item.title} ÉDoce`} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="font-montserrat font-semibold text-xl mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-5">
                  {item.description}
                </p>
                <Button 
                  disabled={item.status === 'unavailable' || item.status === 'soon'}
                  className={`py-2 px-6 rounded-full transition ${
                    item.status === 'unavailable' || item.status === 'soon'
                      ? 'bg-gray-400 text-gray-700 hover:bg-gray-400 cursor-not-allowed' 
                      : 'bg-primary hover:bg-opacity-90 text-white'
                  }`}
                >
                  {item.buttonText}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
