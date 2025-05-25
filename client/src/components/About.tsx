import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="quem-somos" className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background futurista */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(0,169,165,0.1)_0%,_transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(240,61,135,0.1)_0%,_transparent_50%)]"></div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header moderno */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
              Quem Somos
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
          </motion.div>
        </motion.div>

        {/* Layout em grid moderno */}
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          
          {/* Card da Giselle */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
              
              <div className="relative bg-slate-800/80 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">GE</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-2xl font-bold text-white mb-1">Giselle Esposito</h3>
                    <p className="text-cyan-400 font-medium">Confeiteira Artesanal</p>
                  </div>
                </div>
                
                <p className="text-slate-300 leading-relaxed mb-6">
                  Criadora e alma da ÉDoceSinop. Transformou sua paixão pela confeitaria em uma arte que encanta 
                  Sinop e região, desenvolvendo receitas exclusivas que combinam tradição e inovação.
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {['Artesanal', 'Premium', 'Inovação', 'Tradição'].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 rounded-full text-sm border border-cyan-500/30">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Informações da empresa */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-xl blur"></div>
              <div className="relative bg-slate-800/60 backdrop-blur-xl rounded-xl p-6 border border-slate-700/50">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center">
                    <span className="text-white text-xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-bold text-white ml-4">Nossa Missão</h3>
                </div>
                <p className="text-slate-300">
                  Transformar ingredientes premium em experiências sensoriais únicas, 
                  criando momentos especiais através da confeitaria artesanal.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl blur"></div>
              <div className="relative bg-slate-800/60 backdrop-blur-xl rounded-xl p-6 border border-slate-700/50">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                    <span className="text-white text-xl">⭐</span>
                  </div>
                  <h3 className="text-xl font-bold text-white ml-4">Nossos Valores</h3>
                </div>
                <p className="text-slate-300">
                  Qualidade premium, técnicas artesanais, ingredientes selecionados 
                  e dedicação aos detalhes em cada criação.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500/20 to-cyan-400/20 rounded-xl blur"></div>
              <div className="relative bg-slate-800/60 backdrop-blur-xl rounded-xl p-6 border border-slate-700/50">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-pink-500 to-cyan-400 flex items-center justify-center">
                    <span className="text-white text-xl">🚀</span>
                  </div>
                  <h3 className="text-xl font-bold text-white ml-4">Nossa Visão</h3>
                </div>
                <p className="text-slate-300">
                  Ser referência em confeitaria artesanal, levando inovação e sabores 
                  excepcionais para toda a região de Sinop.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats futuristas */}
        <motion.div 
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {[
            { number: "100%", label: "Artesanal" },
            { number: "Premium", label: "Ingredientes" },
            { number: "15+", label: "Sabores Únicos" },
            { number: "5★", label: "Avaliação" }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              className="text-center group"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
                <div className="relative bg-slate-800/80 backdrop-blur-xl rounded-lg p-6 border border-slate-700/50">
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-slate-400 text-sm font-medium">{stat.label}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
