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
                  <div className="text-secondary mb-4 flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-lg italic mb-6">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-montserrat font-bold text-xl">
                      {testimonial.initials}
                    </div>
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
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <motion.div 
                        whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden rounded-xl shadow-md group"
                      >
                        <div className="relative aspect-square overflow-hidden">
                          <img
                            src={image}
                            alt={`Depoimento de cliente ${index + 1}`}
                            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                            <span className="text-white font-medium">Ver depoimento</span>
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
