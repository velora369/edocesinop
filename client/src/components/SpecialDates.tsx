import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const specialDatesData = [
  {
    id: 1,
    title: "Natal",
    description: "Panetones artesanais, tortas natalinas e bolos temáticos que trazem o verdadeiro espírito do Natal para sua mesa.",
    image: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    link: "https://wa.me/5566999852299?text=Olá,%20gostaria%20de%20informações%20sobre%20os%20produtos%20especiais%20de%20Natal."
  },
  {
    id: 2,
    title: "Páscoa",
    description: "Ovos de colher recheados, colombas pascal e outras delícias que transformam a Páscoa em uma celebração inesquecível.",
    image: "https://pixabay.com/get/gf579f4a3de706db03e8cd81eeccced11ee8011768f5250da4a9d4e72ca57e6b203ea39c711569f3f5d1b0d0b8ceb32ba76c17fe6d767ff9a3b2d6ef66982df3a_1280.jpg",
    link: "https://wa.me/5566999852299?text=Olá,%20gostaria%20de%20informações%20sobre%20os%20produtos%20especiais%20de%20Páscoa."
  },
  {
    id: 3,
    title: "Dia dos Namorados",
    description: "Doces especiais para dois, com opções românticas e irresistíveis para surpreender quem você ama.",
    image: "https://pixabay.com/get/gb3d28a105cc1ba092ef191f7aa90130542fa35009709584ef0487f7c72e3e11608d5aeed82431ff43bcdebe46a0171d15a77d258f66b5708956a74cd074192e5_1280.jpg",
    link: "https://wa.me/5566999852299?text=Olá,%20gostaria%20de%20informações%20sobre%20os%20produtos%20especiais%20para%20o%20Dia%20dos%20Namorados."
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
          {specialDatesData.map((item, index) => (
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
                  asChild
                  className="bg-primary hover:bg-opacity-90 text-white py-2 px-6 rounded-full transition"
                >
                  <a href={item.link}>
                    Verificar disponibilidade
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
