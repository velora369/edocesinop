// Preço único por peso/volume (conforme combinado com a cliente)
export const PRICE_BASE_PER_KG_L = "R$150";
export const PRICE_NOTICE =
  "Todos os doces são vendidos por peso/volume. Pote padrão = 1kg. Taças e outros tamanhos são calculados proporcionalmente com base em R$150/kg ou litro.";

export type ProductType = {
  id: number;
  name: string;
  description: string;
  image: string;
  isLaCrema?: boolean;
  isPremium?: boolean;
  note?: string;
};

// PAVÊS Category
export const tacasProducts: ProductType[] = [
  {
    id: 1,
    name: "LA CREMA",
    description: "Pavê de creme iogurtado com cobertura de ganache de chocolate belga, decorado com frutas secas.",
    image: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/05/whatsapp-image-2025-05-24-at-21.00.30.webp",
    isLaCrema: true,
  },
  {
    id: 2,
    name: "VIBE",
    description: "Uma combinação irresistível de creme de doce de leite, café e ganache de chocolate que vai conquistar seu paladar.",
    image: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/05/whatsapp-image-2025-05-24-at-20.58.15.webp",
  },
  {
    id: 3,
    name: "NIZA",
    description: "Uma experiência única com o sabor refinado do creme de pistache combinado com ganache de chocolate.",
    image: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/05/whatsapp-image-2025-05-24-at-21.01.27.webp",
    isPremium: true,
  },
  {
    id: 4,
    name: "NINO",
    description: "Deliciosa combinação de creme de avelã, ovo maltine e ganache de chocolate que derrete na boca.",
    image: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/05/whatsapp-image-2025-05-24-at-20.58.54.webp",
    isPremium: true,
  },
  {
    id: 5,
    name: "MANU",
    description: "Uma tentação para os amantes de chocolate, com creme de chocolate e ganache de chocolates branco e preto.",
    image: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/05/whatsapp-image-2025-05-24-at-20.56.28.webp",
    isPremium: true,
  },
  {
    id: 6,
    name: "NATI",
    description: "Uma combinação tropical de creme de coco e ganache de chocolate que transporta você para um paraíso de sabores.",
    image: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/05/captura-de-tela-2025-05-23-as-20.20.52.webp",
  },
  {
    id: 7,
    name: "MANGO",
    description: "A doçura exótica da manga combinada com ganache de chocolate, uma experiência refrescante e sofisticada.",
    image: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/05/whatsapp-image-2025-05-24-at-21.06.22.webp",
  },
  {
    id: 8,
    name: "LYCA",
    description: "Uma sobremesa sofisticada com creme de creme brullè, macadâmia e ganache de chocolate para paladares exigentes.",
    image: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/05/pilha-de-semente-crua-de-macadamia.webp",
    isPremium: true,
  },
  {
    id: 9,
    name: "LOLA",
    description: "O sabor marcante do creme de nozes combinado com ganache de chocolate, uma sobremesa rica e saborosa.",
    image: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/05/vista-superior-de-nozes-em-uma-tigela-no-rustico.webp",
  },
  {
    id: 10,
    name: "GITO",
    description: "Uma harmonia perfeita de CreamCheese, chocolate branco e frutas vermelhas que proporcionam uma experiência inesquecível.",
    image: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/05/bagas-misturadas-close-up.webp",
  },
];

// CASSATAS Category
export const cassatasProducts: ProductType[] = [
  {
    id: 1,
    name: "VIC",
    description: "Uma sobremesa refrescante com camadas de creme, bolacha champagne e morangos frescos, finalizada com chantilly.",
    image: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/05/whatsapp-image-2025-05-24-at-21.05.25.webp",
    note: "Não é congelável",
  },
  {
    id: 2,
    name: "YAS",
    description: "Uma combinação deliciosa de creme, bolacha champagne, bombom, calda de chocolate e chantiMellow.",
    image: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/05/whatsapp-image-2025-05-24-at-21.13.02.webp",
    note: "Não é congelável",
  },
  {
    id: 3,
    name: "MISSI",
    description: "Uma sobremesa tropical com camadas de creme, bolacha champagne, abacaxi, coco e chantiMellow.",
    image: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/05/whatsapp-image-2025-05-24-at-21.24.42.webp",
    note: "Não é congelável",
  },
  {
    id: 4,
    name: "NICE",
    description: "Uma combinação sofisticada de creme, bolacha champagne, uva, ganache de chocolate e chantiMellow.",
    image: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/05/captura-de-tela-2025-05-25-as-19.37.38.webp",
    note: "Não é congelável",
  },
];

// Demais sobremesas
export const potesProducts: ProductType[] = [
  {
    id: 1,
    name: "TORTA ALEMÃ",
    description: "Camadas de biscoito e creme amanteigado com chocolate, uma receita tradicional que nunca sai de moda.",
    image: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/05/whatsapp-image-2025-05-25-at-19.18.58.webp",
    note: "É congelável",
  },
  {
    id: 2,
    name: "TORTA HOLANDESA",
    description: "A combinação perfeita de creme amanteigado com notas de baunilha e cobertura de chocolate. Uma sobremesa tradicional com toque especial.",
    image: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/05/whatsapp-image-2025-05-25-at-19.18.28.webp",
    note: "É congelável",
  },
  {
    id: 3,
    name: "TIRAMISÙ",
    description: "O clássico italiano com creme de queijo mascarpone, chocolate, café e rum. Uma sobremesa sofisticada e irresistível.",
    image: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/05/tiramissu1.webp",
    note: "É congelável",
  },
  {
    id: 4,
    name: "MARACUNINHO",
    description: "Deliciosa mousse de maracujá com ninho, coberta com ganache de chocolate. Uma combinação perfeita de sabores.",
    image: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/05/whatsapp-image-2025-05-24-at-20.56.06.webp",
    note: "É congelável",
  },
  {
    id: 5,
    name: "LEMON",
    description: "Refrescante mousse de limão com ninho, coberta com ganache de chocolate. Perfeita combinação entre acidez e doçura.",
    image: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/05/composicao-elegante-de-conjunto-de-limoes-em-uma-superficie-branca.webp",
    note: "É congelável",
  },
  {
    id: 6,
    name: "MOUSSE DE CHOCOLATE",
    description: "Clássica mousse de chocolate com textura aveludada e sabor intenso. Um prazer para os amantes de chocolate.",
    image: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/05/captura-de-tela-2025-05-23-as-20.35.24.webp",
    note: "É congelável",
  },
  {
    id: 7,
    name: "BANOFFEE",
    description: "Uma deliciosa combinação de doce de leite cremoso, banana fresca, creme de natas e cobertura de chocolate. Uma sobremesa irresistível e equilibrada.",
    image: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/05/whatsapp-image-2025-05-25-at-19.19.09.webp",
    note: "Não é congelável",
  },
];

// BOLOS Gallery - Galeria de bolos para inspiração
export type BoloGalleryItem = {
  id: number;
  name: string;
  images: string[];
};

export const bolosGallery: BoloGalleryItem[] = [
  {
    id: 1,
    name: "Bolo de Kit Kat",
    images: [
      "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/05/bolo-kitkat.webp",
      "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/05/kit-kat-bolo.webp",
    ],
  },
  {
    id: 2,
    name: "Bolo para festa infantil",
    images: ["https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/05/bolo-naruto-.webp"],
  },
  {
    id: 3,
    name: "Espatulados em Chantininho",
    images: ["https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/05/bolo-3.webp"],
  },
  {
    id: 4,
    name: "Minimalista texturizado",
    images: ["https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/05/bolo-2.webp"],
  },
];
