export type ProductType = {
  id: number;
  name: string;
  description: string;
  image: string;
  isLaCrema?: boolean; // Identificar o La Crema para formatação especial
  isPremium?: boolean; // Identificar produtos premium (Niza, Nino, Lyca)
  price: string; // Preço único por produto
  link: string; // Link para pedido via WhatsApp
  note?: string; // Observações adicionais
};

// PAVÊS Category
export const tacasProducts: ProductType[] = [
  {
    id: 1,
    name: "LA CREMA",
    description: "Nossa receita original que conquistou o paladar dos clientes. Servido em taça com decoração especial de frutas frescas.",
    image: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/05/whatsapp-image-2025-05-23-at-21.10.22.webp",
    isLaCrema: true,
    price: "140,00",
    link: "https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20uma%20taça%20de%20La%20Crema%20com%20decoração%20de%20frutas%20por%20R$%20140,00."
  },
  {
    id: 2,
    name: "VIBE",
    description: "Uma combinação irresistível de creme de doce de leite, café e ganache de chocolate que vai conquistar seu paladar.",
    image: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/05/captura-de-tela-2025-05-23-as-20.17.23.webp",
    price: "120,00",
    link: "https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20um%20pote%20de%201L%20de%20VIBE%20por%20R$%20120,00."
  },
  {
    id: 3,
    name: "NIZA",
    description: "Uma experiência única com o sabor refinado do creme de pistache combinado com ganache de chocolate.",
    image: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/05/niza-1.jpg",
    isPremium: true,
    price: "125,00",
    link: "https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20um%20pote%20de%201L%20de%20NIZA%20por%20R$%20125,00."
  },
  {
    id: 4,
    name: "NINO",
    description: "Deliciosa combinação de creme de avelã, ovo maltine e ganache de chocolate que derrete na boca.",
    image: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/05/d_nq_np_2x_832569-mlb53040369209_122022-f.webp-2x.webp",
    isPremium: true,
    price: "125,00",
    link: "https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20um%20pote%20de%201L%20de%20NINO%20por%20R$%20125,00."
  },
  {
    id: 5,
    name: "MANU",
    description: "Uma tentação para os amantes de chocolate, com creme de chocolate e ganache de chocolates branco e preto.",
    image: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/05/captura-de-tela-2025-05-23-as-19.57.25.webp",
    price: "120,00",
    link: "https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20um%20pote%20de%201L%20de%20MANU%20por%20R$%20120,00."
  },
  {
    id: 6,
    name: "NATI",
    description: "Uma combinação tropical de creme de coco e ganache de chocolate que transporta você para um paraíso de sabores.",
    image: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/05/captura-de-tela-2025-05-23-as-20.20.52.webp",
    price: "120,00",
    link: "https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20um%20pote%20de%201L%20de%20NATI%20por%20R$%20120,00."
  },
  {
    id: 7,
    name: "MANGO",
    description: "A doçura exótica da manga combinada com ganache de chocolate, uma experiência refrescante e sofisticada.",
    image: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/05/captura-de-tela-2025-05-23-as-20.22.37.webp",
    price: "120,00",
    link: "https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20um%20pote%20de%201L%20de%20MANGO%20por%20R$%20120,00."
  },
  {
    id: 8,
    name: "LYCA",
    description: "Uma sobremesa sofisticada com creme de creme brullè, macadâmia e ganache de chocolate para paladares exigentes.",
    image: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/05/pilha-de-semente-crua-de-macadamia.webp",
    isPremium: true,
    price: "125,00",
    link: "https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20um%20pote%20de%201L%20de%20LYCA%20por%20R$%20125,00."
  },
  {
    id: 9,
    name: "LOLA",
    description: "O sabor marcante do creme de nozes combinado com ganache de chocolate, uma sobremesa rica e saborosa.",
    image: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/05/vista-superior-de-nozes-em-uma-tigela-no-rustico.webp",
    price: "120,00",
    link: "https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20um%20pote%20de%201L%20de%20LOLA%20por%20R$%20120,00."
  },
  {
    id: 10,
    name: "GITO",
    description: "Uma harmonia perfeita de CreamCheese, chocolate branco e frutas vermelhas que proporcionam uma experiência inesquecível.",
    image: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/05/bagas-misturadas-close-up.webp",
    price: "120,00",
    link: "https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20um%20pote%20de%201L%20de%20GITO%20por%20R$%20120,00."
  }
];

// CASSATAS Category
export const cassatasProducts: ProductType[] = [
  {
    id: 1,
    name: "VIC",
    description: "Uma sobremesa refrescante com camadas de creme, bolacha champagne e morangos frescos, finalizada com chantilly.",
    image: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/05/cassata-de-morango-.webp",
    price: "120,00",
    link: "https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20um%20pote%20de%201L%20de%20VIC%20por%20R$%20120,00.",
    note: "Não é congelável"
  },
  {
    id: 2,
    name: "YAS",
    description: "Uma combinação deliciosa de creme, bolacha champagne, bombom, calda de chocolate e chantiMellow.",
    image: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/05/de-bombons.webp",
    price: "120,00",
    link: "https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20um%20pote%20de%201L%20de%20YAS%20por%20R$%20120,00.",
    note: "Não é congelável"
  },
  {
    id: 3,
    name: "MISSI",
    description: "Uma sobremesa tropical com camadas de creme, bolacha champagne, abacaxi, coco e chantiMellow.",
    image: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/05/deliciosa-natureza-morta-de-abacaxi.webp",
    price: "120,00",
    link: "https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20um%20pote%20de%201L%20de%20MISSI%20por%20R$%20120,00.",
    note: "Não é congelável"
  },
  {
    id: 4,
    name: "NICE",
    description: "Uma combinação sofisticada de creme, bolacha champagne, uva, ganache de chocolate e chantiMellow.",
    image: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/05/cassata-de-uva.webp",
    price: "120,00",
    link: "https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20um%20pote%20de%201L%20de%20NICE%20por%20R$%20120,00.",
    note: "Não é congelável"
  }
];

// Demais sobremesas
export const potesProducts: ProductType[] = [
  {
    id: 1,
    name: "TORTA ALEMÃ",
    description: "Camadas de biscoito e creme amanteigado com chocolate, uma receita tradicional que nunca sai de moda.",
    image: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/05/torta-alema-11.webp",
    price: "120,00",
    link: "https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20um%20pote%20de%201L%20de%20TORTA%20ALEMÃ%20por%20R$%20120,00.",
    note: "É congelável"
  },
  {
    id: 2,
    name: "TORTA HOLANDESA",
    description: "A combinação perfeita de creme amanteigado com notas de baunilha e cobertura de chocolate. Uma sobremesa tradicional com toque especial.",
    image: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/05/de-bombons.webp",
    tamaM: {
      price: "149,90",
      link: "https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20um(a)%20TORTA%20HOLANDESA%20tamanho%20M%20por%20R$%20149,90."
    },
    tamaG: {
      price: "249,90",
      link: "https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20um(a)%20TORTA%20HOLANDESA%20tamanho%20G%20por%20R$%20249,90."
    },
    poteM: {
      price: "44,90",
      link: "https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20um(a)%20TORTA%20HOLANDESA%20tamanho%20Pote%20M%20por%20R$%2044,90."
    },
    poteG: {
      price: "99,90",
      link: "https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20um(a)%20TORTA%20HOLANDESA%20tamanho%20Pote%20G%20por%20R$%2099,90."
    },
    note: "É congelável"
  },
  {
    id: 3,
    name: "TIRAMISÙ",
    description: "O clássico italiano com creme de queijo mascarpone, chocolate, café e rum. Uma sobremesa sofisticada e irresistível.",
    image: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/05/tiramissu1.webp",
    tamaM: {
      price: "149,90",
      link: "https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20um(a)%20TIRAMISÙ%20tamanho%20M%20por%20R$%20149,90."
    },
    tamaG: {
      price: "249,90",
      link: "https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20um(a)%20TIRAMISÙ%20tamanho%20G%20por%20R$%20249,90."
    },
    poteM: {
      price: "44,90",
      link: "https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20um(a)%20TIRAMISÙ%20tamanho%20Pote%20M%20por%20R$%2044,90."
    },
    poteG: {
      price: "99,90",
      link: "https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20um(a)%20TIRAMISÙ%20tamanho%20Pote%20G%20por%20R$%2099,90."
    },
    note: "É congelável"
  },
  {
    id: 4,
    name: "MARACUNINHO",
    description: "Deliciosa mousse de maracujá com ninho, coberta com ganache de chocolate. Uma combinação perfeita de sabores.",
    image: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/05/goiaba-deliciosa-close-up-pronta-para-ser-servida.webp",
    tamaM: {
      price: "149,90",
      link: "https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20um(a)%20MARACUNINHO%20tamanho%20M%20por%20R$%20149,90."
    },
    tamaG: {
      price: "249,90",
      link: "https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20um(a)%20MARACUNINHO%20tamanho%20G%20por%20R$%20249,90."
    },
    poteM: {
      price: "44,90",
      link: "https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20um(a)%20MARACUNINHO%20tamanho%20Pote%20M%20por%20R$%2044,90."
    },
    poteG: {
      price: "99,90",
      link: "https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20um(a)%20MARACUNINHO%20tamanho%20Pote%20G%20por%20R$%2099,90."
    },
    note: "É congelável"
  },
  {
    id: 5,
    name: "LEMON",
    description: "Refrescante mousse de limão com ninho, coberta com ganache de chocolate. Perfeita combinação entre acidez e doçura.",
    image: "https://images.unsplash.com/photo-1528252899556-261345a47a7c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400",
    tamaM: {
      price: "149,90",
      link: "https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20um(a)%20LEMON%20tamanho%20M%20por%20R$%20149,90."
    },
    tamaG: {
      price: "249,90",
      link: "https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20um(a)%20LEMON%20tamanho%20G%20por%20R$%20249,90."
    },
    poteM: {
      price: "44,90",
      link: "https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20um(a)%20LEMON%20tamanho%20Pote%20M%20por%20R$%2044,90."
    },
    poteG: {
      price: "99,90",
      link: "https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20um(a)%20LEMON%20tamanho%20Pote%20G%20por%20R$%2099,90."
    },
    note: "É congelável"
  },
  {
    id: 6,
    name: "MOUSSE DE CHOCOLATE",
    description: "Clássica mousse de chocolate com textura aveludada e sabor intenso. Um prazer para os amantes de chocolate.",
    image: "https://images.unsplash.com/photo-1611292779156-d80ef5bd3339?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400",
    tamaM: {
      price: "149,90",
      link: "https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20um(a)%20MOUSSE%20DE%20CHOCOLATE%20tamanho%20M%20por%20R$%20149,90."
    },
    tamaG: {
      price: "249,90",
      link: "https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20um(a)%20MOUSSE%20DE%20CHOCOLATE%20tamanho%20G%20por%20R$%20249,90."
    },
    poteM: {
      price: "44,90",
      link: "https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20um(a)%20MOUSSE%20DE%20CHOCOLATE%20tamanho%20Pote%20M%20por%20R$%2044,90."
    },
    poteG: {
      price: "99,90",
      link: "https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20um(a)%20MOUSSE%20DE%20CHOCOLATE%20tamanho%20Pote%20G%20por%20R$%2099,90."
    },
    note: "É congelável"
  },

];
