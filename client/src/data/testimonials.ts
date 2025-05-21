export type TestimonialType = {
  id: number;
  name: string;
  initials: string;
  content: string;
  description: string;
};

export const testimonials: TestimonialType[] = [
  {
    id: 1,
    name: "Maria C.",
    initials: "MC",
    content: "O La Crema da ÉDoce é simplesmente divino! Sempre peço a versão com Nutella e nunca me decepciono. É o melhor doce da cidade!",
    description: "Cliente fiel desde 2021"
  },
  {
    id: 2,
    name: "João P.",
    initials: "JP",
    content: "Encomendei a Torta Alemã para um jantar especial e foi um sucesso absoluto. Sabor incrível e apresentação impecável!",
    description: "Cliente desde 2022"
  },
  {
    id: 3,
    name: "Ana L.",
    initials: "AL",
    content: "A qualidade dos ingredientes faz toda diferença! Nunca provei sobremesas tão perfeitas quanto as da ÉDoce.",
    description: "Cliente desde 2020"
  }
];
