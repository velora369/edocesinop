import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="quem-somos" className="section py-20 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmMGZkZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0aDEydjEySDM2eiIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header da Seção */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-playfair text-4xl md:text-5xl text-gray-800 mb-4">
            Conheça a <span className="font-dancing text-5xl md:text-6xl">
              <span className="text-[#00A9A5]">É</span><span className="text-[#4B2E1F]">Do</span><span className="text-[#00A9A5]">ce</span>
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        {/* Grid Principal */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Imagem */}
          <motion.div 
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
              <img 
                src="https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/05/foto-giselle-.webp" 
                alt="Giselle Esposito - Confeiteira ÉDoceSinop" 
                className="relative rounded-2xl shadow-2xl w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
          </motion.div>

          {/* Conteúdo */}
          <motion.div 
            className="order-1 lg:order-2 space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Card principal */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <h3 className="font-playfair text-2xl font-semibold text-gray-800 mb-4">Nossa História</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                A <span className="font-dancing text-xl text-primary">ÉDoce</span> nasceu da paixão por transformar ingredientes premium em experiências gastronômicas únicas. Cada doce é preparado artesanalmente, priorizando qualidade e sabor em cada criação.
              </p>
            </div>

            {/* Card da Giselle */}
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 border border-primary/20">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-semibold text-lg">G</span>
                </div>
                <div>
                  <h3 className="font-playfair text-xl font-semibold text-gray-800">Giselle Esposito</h3>
                  <p className="text-primary font-medium">Confeiteira Artesanal</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Criadora e alma da ÉDoce, Giselle transformou sua paixão em arte que encanta toda a região. Com técnicas refinadas e olhar especial para detalhes, desenvolve receitas exclusivas que combinam tradição e inovação.
              </p>
            </div>

            {/* Destaque */}
            <div className="relative">
              <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-primary to-secondary rounded-full"></div>
              <div className="pl-6">
                <p className="font-dancing text-2xl text-primary italic">
                  "Cada doce conta uma história de dedicação e amor pela confeitaria artesanal"
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Cards de valores */}
        <motion.div 
          className="grid md:grid-cols-3 gap-6 mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {[
            { title: "Qualidade Premium", desc: "Ingredientes selecionados para garantir sabor excepcional" },
            { title: "Técnica Artesanal", desc: "Cada doce preparado com cuidado e dedicação únicos" },
            { title: "Experiência Única", desc: "Momentos especiais criados através de sabores marcantes" }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <h4 className="font-playfair text-lg font-semibold text-gray-800 mb-3">{item.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
