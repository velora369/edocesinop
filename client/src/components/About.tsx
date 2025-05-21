import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="quem-somos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="https://pixabay.com/get/g5beab9b9759a9d785b4827083d65643f452b5612f4fdbda3a0b5b93fb930de3800e4bf7c53cb0e34c5b42cc7897d320a853e8a08af4e336a73920a4eb997bb83_1280.jpg" 
              alt="Confeitaria ÉDoce em ação" 
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-title">
              Sobre a <span className="text-primary">É</span><span className="section-highlight">Doce</span>
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              A ÉDoce nasceu da paixão por transformar ingredientes de qualidade em experiências sensoriais únicas. Cada doce é preparado artesanalmente, com ingredientes cuidadosamente selecionados para garantir sabor incomparável e momentos de pura felicidade. 
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Nossa confeitaria se destaca pela dedicação aos detalhes e pelo compromisso com a excelência em cada criação.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-secondary">
              <p className="font-dancing text-xl text-primary">
                "Ingredientes premium selecionados a dedo para sabores que encantam todos os paladares"
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
