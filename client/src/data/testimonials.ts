export type TestimonialType = {
  id: number;
  name: string;
  initials: string;
  content: string;
  description: string;
  rating: number;
  isGoogle?: boolean;
  avatarUrl?: string;
};

export const testimonials: TestimonialType[] = [
  {
    id: 1,
    name: "Maria Carvalho",
    initials: "MC",
    content: "Minha filha pediu a sobremesa La Crema com Nutella para seu aniversário de 15 anos e foi simplesmente um sucesso! Todos os convidados ficaram impressionados com o sabor. Já é a terceira vez que encomendo, e sempre perfeito. Atendimento impecável, entrega pontual. Super recomendo!",
    description: "Cliente fiel desde 2021",
    rating: 5,
    isGoogle: true
  },
  {
    id: 2,
    name: "João Paulo Silva",
    initials: "JP",
    content: "Encomendei a Torta Alemã para o aniversário da minha esposa e foi a melhor escolha que fiz! Todos elogiaram o sabor e a textura. O creme estava no ponto perfeito, nem muito doce nem muito amargo. A Giselle é muito atenciosa e caprichosa, deu dicas excelentes. Repetirei com certeza!",
    description: "Cliente desde 2022",
    rating: 5,
    isGoogle: true
  },
  {
    id: 3,
    name: "Ana Luíza Mendes",
    initials: "AL",
    content: "Descobri a ÉDoce através de uma amiga e não consigo mais parar de pedir! A qualidade dos produtos é impressionante. O La Crema de pistache é divino, e os potes são generosos. Sempre recebo elogios quando levo para reuniões de família. O cuidado no preparo é visível em cada detalhe!",
    description: "Cliente desde 2020",
    rating: 5,
    isGoogle: true
  },
  {
    id: 4,
    name: "Roberto Almeida",
    initials: "RA",
    content: "Sou chef de cozinha e confesso que fiquei impressionado com a qualidade dos doces da ÉDoce. A textura, o sabor e a apresentação são dignos de restaurantes premiados. Encomendei para um evento importante e todos pediram o contato. Profissionalismo e excelência em cada detalhe!",
    description: "Cliente desde 2023",
    rating: 5,
    isGoogle: true
  },
  {
    id: 5,
    name: "Carla Oliveira",
    initials: "CO",
    content: "Minha família é super exigente com doces, e pela primeira vez todos aprovaram unanimemente! O La Crema com morango foi a sensação no almoço de domingo. O que mais me surpreendeu foi o equilíbrio perfeito de sabores. Já estou planejando os próximos pedidos para as festas de fim de ano!",
    description: "Cliente desde 2022",
    rating: 5,
    isGoogle: true
  }
];
