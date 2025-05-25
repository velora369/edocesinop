export type PriceOption = {
  type: 'pote' | 'taca_sem_decoracao' | 'taca_com_decoracao';
  price: string;
  label: string;
  link: string;
};

export type ProductType = {
  id: number;
  name: string;
  description: string;
  image: string;
  isLaCrema?: boolean; // Identificar o La Crema para formatação especial
  isPremium?: boolean; // Identificar produtos premium (Niza, Nino, Lyca, Manu)
  priceOptions: PriceOption[]; // Opções de preço: pote, taça sem decoração, taça com decoração
  note?: string; // Observações adicionais
};

// PAVÊS Category
export const tacasProducts: ProductType[] = [
  {
    id: 1,
    name: "LA CREMA",
    description: "Nossa receita original que conquistou o paladar dos clientes. Servido em taça com decoração especial de frutas frescas.",
    image: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/05/whatsapp-image-2025-05-24-at-21.00.30.webp",
    isLaCrema: true,
    priceOptions: [
      {
        type: 'pote',
        price: 'R$ 120,00',
        label: 'Pote 1L',
        link: 'https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20um%20pote%20de%201L%20de%20LA%20CREMA%20por%20R$%20120,00.'
      },
      {
        type: 'taca_sem_decoracao',
        price: 'R$ 125,00/kg',
        label: 'Taça sem decoração',
        link: 'https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20uma%20taça%20de%20LA%20CREMA%20(sem%20decoração)%20por%20R$%20125,00/kg.'
      },
      {
        type: 'taca_com_decoracao',
        price: 'R$ 145,00/kg',
        label: 'Taça com decoração',
        link: 'https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20uma%20taça%20de%20LA%20CREMA%20com%20decoração%20de%20frutas%20por%20R$%20145,00/kg.'
      }
    ]
  },
  {
    id: 2,
    name: "VIBE",
    description: "Uma combinação irresistível de creme de doce de leite, café e ganache de chocolate que vai conquistar seu paladar.",
    image: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/05/whatsapp-image-2025-05-24-at-20.58.15.webp",
    priceOptions: [
      {
        type: 'pote',
        price: 'R$ 120,00',
        label: 'Pote 1L',
        link: 'https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20um%20pote%20de%201L%20de%20VIBE%20por%20R$%20120,00.'
      },
      {
        type: 'taca_sem_decoracao',
        price: 'R$ 125,00/kg',
        label: 'Taça sem decoração',
        link: 'https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20uma%20taça%20de%20VIBE%20(sem%20decoração)%20por%20R$%20125,00/kg.'
      },
      {
        type: 'taca_com_decoracao',
        price: 'R$ 145,00/kg',
        label: 'Taça com decoração',
        link: 'https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20uma%20taça%20de%20VIBE%20com%20decoração%20de%20frutas%20por%20R$%20145,00/kg.'
      }
    ]
  },
  {
    id: 3,
    name: "NIZA",
    description: "Uma experiência única com o sabor refinado do creme de pistache combinado com ganache de chocolate.",
    image: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/05/whatsapp-image-2025-05-24-at-21.01.27.webp",
    isPremium: true,
    priceOptions: [
      {
        type: 'pote',
        price: 'R$ 125,00',
        label: 'Pote 1L',
        link: 'https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20um%20pote%20de%201L%20de%20NIZA%20por%20R$%20125,00.'
      },
      {
        type: 'taca_sem_decoracao',
        price: 'R$ 125,00/kg',
        label: 'Taça sem decoração',
        link: 'https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20uma%20taça%20de%20NIZA%20(sem%20decoração)%20por%20R$%20125,00/kg.'
      },
      {
        type: 'taca_com_decoracao',
        price: 'R$ 145,00/kg',
        label: 'Taça com decoração',
        link: 'https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20uma%20taça%20de%20NIZA%20com%20decoração%20de%20frutas%20por%20R$%20145,00/kg.'
      }
    ]
  },
  {
    id: 4,
    name: "NINO",
    description: "Deliciosa combinação de creme de avelã, ovo maltine e ganache de chocolate que derrete na boca.",
    image: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/05/whatsapp-image-2025-05-24-at-20.58.54.webp",
    isPremium: true,
    priceOptions: [
      {
        type: 'pote',
        price: 'R$ 125,00',
        label: 'Pote 1L',
        link: 'https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20um%20pote%20de%201L%20de%20NINO%20por%20R$%20125,00.'
      },
      {
        type: 'taca_sem_decoracao',
        price: 'R$ 125,00/kg',
        label: 'Taça sem decoração',
        link: 'https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20uma%20taça%20de%20NINO%20(sem%20decoração)%20por%20R$%20125,00/kg.'
      },
      {
        type: 'taca_com_decoracao',
        price: 'R$ 145,00/kg',
        label: 'Taça com decoração',
        link: 'https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20uma%20taça%20de%20NINO%20com%20decoração%20de%20frutas%20por%20R$%20145,00/kg.'
      }
    ]
  },
  {
    id: 5,
    name: "MANU",
    description: "Uma tentação para os amantes de chocolate, com creme de chocolate e ganache de chocolates branco e preto.",
    image: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/05/whatsapp-image-2025-05-24-at-20.56.28.webp",
    isPremium: true,
    priceOptions: [
      {
        type: 'pote',
        price: 'R$ 125,00',
        label: 'Pote 1L',
        link: 'https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20um%20pote%20de%201L%20de%20MANU%20por%20R$%20125,00.'
      },
      {
        type: 'taca_sem_decoracao',
        price: 'R$ 125,00/kg',
        label: 'Taça sem decoração',
        link: 'https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20uma%20taça%20de%20MANU%20(sem%20decoração)%20por%20R$%20125,00/kg.'
      },
      {
        type: 'taca_com_decoracao',
        price: 'R$ 145,00/kg',
        label: 'Taça com decoração',
        link: 'https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20uma%20taça%20de%20MANU%20com%20decoração%20de%20frutas%20por%20R$%20145,00/kg.'
      }
    ]
  },
  {
    id: 6,
    name: "NATI",
    description: "Uma combinação tropical de creme de coco e ganache de chocolate que transporta você para um paraíso de sabores.",
    image: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/05/whatsapp-image-2025-05-24-at-21.15.17.webp",
    priceOptions: [
      {
        type: 'pote',
        price: 'R$ 120,00',
        label: 'Pote 1L',
        link: 'https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20um%20pote%20de%201L%20de%20NATI%20por%20R$%20120,00.'
      },
      {
        type: 'taca_sem_decoracao',
        price: 'R$ 125,00/kg',
        label: 'Taça sem decoração',
        link: 'https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20uma%20taça%20de%20NATI%20(sem%20decoração)%20por%20R$%20125,00/kg.'
      },
      {
        type: 'taca_com_decoracao',
        price: 'R$ 145,00/kg',
        label: 'Taça com decoração',
        link: 'https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20uma%20taça%20de%20NATI%20com%20decoração%20de%20frutas%20por%20R$%20145,00/kg.'
      }
    ]
  },
  {
    id: 7,
    name: "MANGO",
    description: "A doçura exótica da manga combinada com ganache de chocolate, uma experiência refrescante e sofisticada.",
    image: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/05/whatsapp-image-2025-05-24-at-21.06.22.webp",
    priceOptions: [
      {
        type: 'pote',
        price: 'R$ 120,00',
        label: 'Pote 1L',
        link: 'https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20um%20pote%20de%201L%20de%20MANGO%20por%20R$%20120,00.'
      },
      {
        type: 'taca_sem_decoracao',
        price: 'R$ 125,00/kg',
        label: 'Taça sem decoração',
        link: 'https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20uma%20taça%20de%20MANGO%20(sem%20decoração)%20por%20R$%20125,00/kg.'
      },
      {
        type: 'taca_com_decoracao',
        price: 'R$ 145,00/kg',
        label: 'Taça com decoração',
        link: 'https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20uma%20taça%20de%20MANGO%20com%20decoração%20de%20frutas%20por%20R$%20145,00/kg.'
      }
    ]
  },
  {
    id: 8,
    name: "LYCA",
    description: "Uma sobremesa sofisticada com creme de creme brullè, macadâmia e ganache de chocolate para paladares exigentes.",
    image: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/05/pilha-de-semente-crua-de-macadamia.webp",
    isPremium: true,
    priceOptions: [
      {
        type: 'pote',
        price: 'R$ 125,00',
        label: 'Pote 1L',
        link: 'https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20um%20pote%20de%201L%20de%20LYCA%20por%20R$%20125,00.'
      },
      {
        type: 'taca_sem_decoracao',
        price: 'R$ 125,00/kg',
        label: 'Taça sem decoração',
        link: 'https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20uma%20taça%20de%20LYCA%20(sem%20decoração)%20por%20R$%20125,00/kg.'
      },
      {
        type: 'taca_com_decoracao',
        price: 'R$ 145,00/kg',
        label: 'Taça com decoração',
        link: 'https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20uma%20taça%20de%20LYCA%20com%20decoração%20de%20frutas%20por%20R$%20145,00/kg.'
      }
    ]
  },
  {
    id: 9,
    name: "LOLA",
    description: "O sabor marcante do creme de nozes combinado com ganache de chocolate, uma sobremesa rica e saborosa.",
    image: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/05/vista-superior-de-nozes-em-uma-tigela-no-rustico.webp",
    priceOptions: [
      {
        type: 'pote',
        price: 'R$ 120,00',
        label: 'Pote 1L',
        link: 'https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20um%20pote%20de%201L%20de%20LOLA%20por%20R$%20120,00.'
      },
      {
        type: 'taca_sem_decoracao',
        price: 'R$ 125,00/kg',
        label: 'Taça sem decoração',
        link: 'https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20uma%20taça%20de%20LOLA%20(sem%20decoração)%20por%20R$%20125,00/kg.'
      },
      {
        type: 'taca_com_decoracao',
        price: 'R$ 145,00/kg',
        label: 'Taça com decoração',
        link: 'https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20uma%20taça%20de%20LOLA%20com%20decoração%20de%20frutas%20por%20R$%20145,00/kg.'
      }
    ]
  },
  {
    id: 10,
    name: "GITO",
    description: "Uma harmonia perfeita de CreamCheese, chocolate branco e frutas vermelhas que proporcionam uma experiência inesquecível.",
    image: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/05/bagas-misturadas-close-up.webp",
    priceOptions: [
      {
        type: 'pote',
        price: 'R$ 120,00',
        label: 'Pote 1L',
        link: 'https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20um%20pote%20de%201L%20de%20GITO%20por%20R$%20120,00.'
      },
      {
        type: 'taca_sem_decoracao',
        price: 'R$ 125,00/kg',
        label: 'Taça sem decoração',
        link: 'https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20uma%20taça%20de%20GITO%20(sem%20decoração)%20por%20R$%20125,00/kg.'
      },
      {
        type: 'taca_com_decoracao',
        price: 'R$ 145,00/kg',
        label: 'Taça com decoração',
        link: 'https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20uma%20taça%20de%20GITO%20com%20decoração%20de%20frutas%20por%20R$%20145,00/kg.'
      }
    ]
  }
];

// CASSATAS Category
export const cassatasProducts: ProductType[] = [
  {
    id: 1,
    name: "VIC",
    description: "Uma sobremesa refrescante com camadas de creme, bolacha champagne e morangos frescos, finalizada com chantilly.",
    image: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/05/whatsapp-image-2025-05-24-at-21.05.25.webp",
    priceOptions: [
      {
        type: 'pote',
        price: 'R$ 120,00',
        label: 'Pote 1L',
        link: 'https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20um%20pote%20de%201L%20de%20VIC%20por%20R$%20120,00.'
      },
      {
        type: 'taca_sem_decoracao',
        price: 'R$ 125,00/kg',
        label: 'Taça sem decoração',
        link: 'https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20uma%20taça%20de%20VIC%20(sem%20decoração)%20por%20R$%20125,00/kg.'
      },
      {
        type: 'taca_com_decoracao',
        price: 'R$ 145,00/kg',
        label: 'Taça com decoração',
        link: 'https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20uma%20taça%20de%20VIC%20com%20decoração%20de%20frutas%20por%20R$%20145,00/kg.'
      }
    ],
    note: "Não é congelável"
  },
  {
    id: 2,
    name: "YAS",
    description: "Uma combinação deliciosa de creme, bolacha champagne, bombom, calda de chocolate e chantiMellow.",
    image: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/05/whatsapp-image-2025-05-24-at-21.13.02.webp",
    priceOptions: [
      {
        type: 'pote',
        price: 'R$ 120,00',
        label: 'Pote 1L',
        link: 'https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20um%20pote%20de%201L%20de%20YAS%20por%20R$%20120,00.'
      },
      {
        type: 'taca_sem_decoracao',
        price: 'R$ 125,00/kg',
        label: 'Taça sem decoração',
        link: 'https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20uma%20taça%20de%20YAS%20(sem%20decoração)%20por%20R$%20125,00/kg.'
      },
      {
        type: 'taca_com_decoracao',
        price: 'R$ 145,00/kg',
        label: 'Taça com decoração',
        link: 'https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20uma%20taça%20de%20YAS%20com%20decoração%20de%20frutas%20por%20R$%20145,00/kg.'
      }
    ],
    note: "Não é congelável"
  },
  {
    id: 3,
    name: "MISSI",
    description: "Uma sobremesa tropical com camadas de creme, bolacha champagne, abacaxi, coco e chantiMellow.",
    image: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/05/whatsapp-image-2025-05-24-at-21.24.42.webp",
    priceOptions: [
      {
        type: 'pote',
        price: 'R$ 120,00',
        label: 'Pote 1L',
        link: 'https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20um%20pote%20de%201L%20de%20MISSI%20por%20R$%20120,00.'
      },
      {
        type: 'taca_sem_decoracao',
        price: 'R$ 125,00/kg',
        label: 'Taça sem decoração',
        link: 'https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20uma%20taça%20de%20MISSI%20(sem%20decoração)%20por%20R$%20125,00/kg.'
      },
      {
        type: 'taca_com_decoracao',
        price: 'R$ 145,00/kg',
        label: 'Taça com decoração',
        link: 'https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20uma%20taça%20de%20MISSI%20com%20decoração%20de%20frutas%20por%20R$%20145,00/kg.'
      }
    ],
    note: "Não é congelável"
  },
  {
    id: 4,
    name: "NICE",
    description: "Uma combinação sofisticada de creme, bolacha champagne, uva, ganache de chocolate e chantiMellow.",
    image: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/05/cassata-de-uva.webp",
    priceOptions: [
      {
        type: 'pote',
        price: 'R$ 120,00',
        label: 'Pote 1L',
        link: 'https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20um%20pote%20de%201L%20de%20NICE%20por%20R$%20120,00.'
      },
      {
        type: 'taca_sem_decoracao',
        price: 'R$ 125,00/kg',
        label: 'Taça sem decoração',
        link: 'https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20uma%20taça%20de%20NICE%20(sem%20decoração)%20por%20R$%20125,00/kg.'
      },
      {
        type: 'taca_com_decoracao',
        price: 'R$ 145,00/kg',
        label: 'Taça com decoração',
        link: 'https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20uma%20taça%20de%20NICE%20com%20decoração%20de%20frutas%20por%20R$%20145,00/kg.'
      }
    ],
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
    priceOptions: [
      {
        type: 'pote',
        price: 'R$ 120,00',
        label: 'Pote 1L',
        link: 'https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20um%20pote%20de%201L%20de%20TORTA%20ALEMÃ%20por%20R$%20120,00.'
      },
      {
        type: 'taca_sem_decoracao',
        price: 'R$ 125,00/kg',
        label: 'Taça sem decoração',
        link: 'https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20uma%20taça%20de%20TORTA%20ALEMÃ%20(sem%20decoração)%20por%20R$%20125,00/kg.'
      },
      {
        type: 'taca_com_decoracao',
        price: 'R$ 145,00/kg',
        label: 'Taça com decoração',
        link: 'https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20uma%20taça%20de%20TORTA%20ALEMÃ%20com%20decoração%20de%20frutas%20por%20R$%20145,00/kg.'
      }
    ],
    note: "É congelável"
  },
  {
    id: 2,
    name: "TORTA HOLANDESA",
    description: "A combinação perfeita de creme amanteigado com notas de baunilha e cobertura de chocolate. Uma sobremesa tradicional com toque especial.",
    image: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/05/de-bombons.webp",
    priceOptions: [
      {
        type: 'pote',
        price: 'R$ 120,00',
        label: 'Pote 1L',
        link: 'https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20um%20pote%20de%201L%20de%20TORTA%20HOLANDESA%20por%20R$%20120,00.'
      },
      {
        type: 'taca_sem_decoracao',
        price: 'R$ 125,00/kg',
        label: 'Taça sem decoração',
        link: 'https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20uma%20taça%20de%20TORTA%20HOLANDESA%20(sem%20decoração)%20por%20R$%20125,00/kg.'
      },
      {
        type: 'taca_com_decoracao',
        price: 'R$ 145,00/kg',
        label: 'Taça com decoração',
        link: 'https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20uma%20taça%20de%20TORTA%20HOLANDESA%20com%20decoração%20de%20frutas%20por%20R$%20145,00/kg.'
      }
    ],
    note: "É congelável"
  },
  {
    id: 3,
    name: "TIRAMISÙ",
    description: "O clássico italiano com creme de queijo mascarpone, chocolate, café e rum. Uma sobremesa sofisticada e irresistível.",
    image: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/05/tiramissu1.webp",
    priceOptions: [
      {
        type: 'pote',
        price: 'R$ 120,00',
        label: 'Pote 1L',
        link: 'https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20um%20pote%20de%201L%20de%20TIRAMISÙ%20por%20R$%20120,00.'
      },
      {
        type: 'taca_sem_decoracao',
        price: 'R$ 125,00/kg',
        label: 'Taça sem decoração',
        link: 'https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20uma%20taça%20de%20TIRAMISÙ%20(sem%20decoração)%20por%20R$%20125,00/kg.'
      },
      {
        type: 'taca_com_decoracao',
        price: 'R$ 145,00/kg',
        label: 'Taça com decoração',
        link: 'https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20uma%20taça%20de%20TIRAMISÙ%20com%20decoração%20de%20frutas%20por%20R$%20145,00/kg.'
      }
    ],
    note: "É congelável"
  },
  {
    id: 4,
    name: "MARACUNINHO",
    description: "Deliciosa mousse de maracujá com ninho, coberta com ganache de chocolate. Uma combinação perfeita de sabores.",
    image: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/05/goiaba-deliciosa-close-up-pronta-para-ser-servida.webp",
    priceOptions: [
      {
        type: 'pote',
        price: 'R$ 120,00',
        label: 'Pote 1L',
        link: 'https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20um%20pote%20de%201L%20de%20MARACUNINHO%20por%20R$%20120,00.'
      },
      {
        type: 'taca_sem_decoracao',
        price: 'R$ 125,00/kg',
        label: 'Taça sem decoração',
        link: 'https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20uma%20taça%20de%20MARACUNINHO%20(sem%20decoração)%20por%20R$%20125,00/kg.'
      },
      {
        type: 'taca_com_decoracao',
        price: 'R$ 145,00/kg',
        label: 'Taça com decoração',
        link: 'https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20uma%20taça%20de%20MARACUNINHO%20com%20decoração%20de%20frutas%20por%20R$%20145,00/kg.'
      }
    ],
    note: "É congelável"
  },
  {
    id: 5,
    name: "LEMON",
    description: "Refrescante mousse de limão com ninho, coberta com ganache de chocolate. Perfeita combinação entre acidez e doçura.",
    image: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/05/composicao-elegante-de-conjunto-de-limoes-em-uma-superficie-branca.webp",
    priceOptions: [
      {
        type: 'pote',
        price: 'R$ 120,00',
        label: 'Pote 1L',
        link: 'https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20um%20pote%20de%201L%20de%20LEMON%20por%20R$%20120,00.'
      },
      {
        type: 'taca_sem_decoracao',
        price: 'R$ 125,00/kg',
        label: 'Taça sem decoração',
        link: 'https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20uma%20taça%20de%20LEMON%20(sem%20decoração)%20por%20R$%20125,00/kg.'
      },
      {
        type: 'taca_com_decoracao',
        price: 'R$ 145,00/kg',
        label: 'Taça com decoração',
        link: 'https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20uma%20taça%20de%20LEMON%20com%20decoração%20de%20frutas%20por%20R$%20145,00/kg.'
      }
    ],
    note: "É congelável"
  },
  {
    id: 6,
    name: "MOUSSE DE CHOCOLATE",
    description: "Clássica mousse de chocolate com textura aveludada e sabor intenso. Um prazer para os amantes de chocolate.",
    image: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/05/captura-de-tela-2025-05-23-as-20.35.24.webp",
    priceOptions: [
      {
        type: 'pote',
        price: 'R$ 120,00',
        label: 'Pote 1L',
        link: 'https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20um%20pote%20de%201L%20de%20MOUSSE%20DE%20CHOCOLATE%20por%20R$%20120,00.'
      },
      {
        type: 'taca_sem_decoracao',
        price: 'R$ 125,00/kg',
        label: 'Taça sem decoração',
        link: 'https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20uma%20taça%20de%20MOUSSE%20DE%20CHOCOLATE%20(sem%20decoração)%20por%20R$%20125,00/kg.'
      },
      {
        type: 'taca_com_decoracao',
        price: 'R$ 145,00/kg',
        label: 'Taça com decoração',
        link: 'https://wa.me/5566999852299?text=Olá!%20Gostaria%20de%20encomendar%20uma%20taça%20de%20MOUSSE%20DE%20CHOCOLATE%20com%20decoração%20de%20frutas%20por%20R$%20145,00/kg.'
      }
    ],
    note: "É congelável"
  }
];
