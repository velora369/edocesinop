import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  const goToNext = () => {
    if (currentIndex < testimonials.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };
  
  const goToPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };
  
  // Scroll carousel when currentIndex changes
  useEffect(() => {
    if (carouselRef.current) {
      const cards = carouselRef.current.querySelectorAll(".testimonial-card");
      if (cards[currentIndex]) {
        cards[currentIndex].scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    }
  }, [currentIndex]);

  return (
    <section id="depoimentos" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title text-center">
            O que nossos <span className="section-highlight">clientes</span> dizem
          </h2>
          <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
            A satisfação dos nossos clientes é o ingrediente mais importante das nossas receitas. Confira alguns depoimentos de quem já experimentou nossas delícias:
          </p>
        </motion.div>
        
        <div className="relative max-w-5xl mx-auto">
          <Button 
            onClick={goToPrev}
            disabled={currentIndex === 0}
            size="icon"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white text-primary border-2 border-primary rounded-full p-2 shadow-md hover:bg-primary hover:text-white focus:outline-none disabled:opacity-50 disabled:bg-gray-100 disabled:text-gray-400 disabled:border-gray-200 transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          
          <div 
            ref={carouselRef}
            className="overflow-x-auto flex snap-x snap-mandatory scrollbar-hide hide-scrollbar" 
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={testimonial.id}
                className="testimonial-card flex-shrink-0 w-full md:w-2/3 px-4 mx-auto scroll-snap-align-center"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-current text-yellow-400" />
                      ))}
                    </div>
                    {testimonial.isGoogle && (
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 mr-1">
                          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                        </svg>
                        <span className="text-xs text-gray-500">Avaliação do Google</span>
                      </div>
                    )}
                  </div>

                  <p className="text-gray-700 text-base mb-6">
                    "{testimonial.content}"
                  </p>

                  <div className="flex items-center">
                    {testimonial.avatarUrl ? (
                      <img 
                        src={testimonial.avatarUrl} 
                        alt={testimonial.name} 
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-montserrat font-bold text-xl">
                        {testimonial.initials}
                      </div>
                    )}
                    <div className="ml-3">
                      <h4 className="font-montserrat font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-500 text-sm">{testimonial.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <Button 
            onClick={goToNext}
            disabled={currentIndex === testimonials.length - 1}
            size="icon"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white text-primary border-2 border-primary rounded-full p-2 shadow-md hover:bg-primary hover:text-white focus:outline-none disabled:opacity-50 disabled:bg-gray-100 disabled:text-gray-400 disabled:border-gray-200 transition-all duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
        
        {/* Imagens de Depoimentos em Carrossel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 mb-12"
        >
          <h3 className="text-2xl text-center font-dancing text-primary mb-8">
            Nossos clientes adoram compartilhar seus momentos doces
          </h3>
          
          <div className="max-w-4xl mx-auto px-4">
            <Carousel 
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {[
                  "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/05/depoimento1.webp",
                  "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/05/depoimento2.webp",
                  "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/05/depoimento3.webp"
                ].map((image, index) => (
                  <CarouselItem key={index} className="basis-full md:basis-1/2">
                    <div className="p-2">
                      <motion.div 
                        whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden rounded-xl shadow-md group bg-white p-2"
                      >
                        <div className="relative overflow-hidden">
                          <img
                            src={image}
                            alt={`Depoimento de cliente ${index + 1}`}
                            className="w-full object-contain max-h-[350px] transition-transform duration-500 group-hover:scale-102"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                            <span className="text-white font-medium px-4 py-2 bg-primary/70 rounded-full">Ver depoimento</span>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-2 mt-4">
                <CarouselPrevious className="relative -left-0 top-0 translate-y-0 border-primary text-primary hover:bg-primary hover:text-white" />
                <CarouselNext className="relative -right-0 top-0 translate-y-0 border-primary text-primary hover:bg-primary hover:text-white" />
              </div>
            </Carousel>
          </div>
        </motion.div>

        <div className="text-center mt-10">
          <a 
            href="https://www.instagram.com/edocesinop" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-2 rounded-full bg-white border-2 border-secondary text-secondary hover:bg-secondary hover:text-white transition-all duration-300 font-medium shadow-md"
          >
            <i className="fab fa-instagram mr-2 text-lg"></i>
            Ver mais no Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
