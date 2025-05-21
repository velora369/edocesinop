export type ProductType = {
  id: number;
  name: string;
  description: string;
  image: string;
  tamaM: {
    price: string;
    link: string;
  };
  tamaG: {
    price: string;
    link: string;
  };
  poteM: {
    price: string;
    link: string;
  };
  poteG: {
    price: string;
    link: string;
  };
};

export const tacasProducts: ProductType[] = [
  {
    id: 1,
    name: "La Crema Tradicional",
    description: "Nossa receita original que conquistou o paladar dos clientes. Um clássico irresistível.",
    image: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/05/la-crema-trad.webp",
    tamaM: {
      price: "149,90",
      link: "https://wa.me/5566999852299?text=Olá,%20tenho%20interesse%20no%20La%20Crema%20Tradicional%20na%20Taça%20M%20(1,4L )%20por%20R$%20149,90."
    },
    tamaG: {
      price: "249,90",
      link: "https://wa.me/5566999852299?text=Olá,%20tenho%20interesse%20no%20La%20Crema%20Tradicional%20na%20Taça%20G%20(2,4L )%20por%20R$%20249,90."
    },
    poteM: {
      price: "44,90",
      link: "https://wa.me/5566999852299?text=Olá,%20tenho%20interesse%20no%20La%20Crema%20Tradicional%20no%20Pote%20M%20(500ml )%20por%20R$%2044,90."
    },
    poteG: {
      price: "99,90",
      link: "https://wa.me/5566999852299?text=Olá,%20tenho%20interesse%20no%20La%20Crema%20Tradicional%20no%20Pote%20G%20(1L )%20por%20R$%2099,90."
    }
  },
  {
    id: 2,
    name: "La Crema Ninho com Nutella",
    description: "A combinação perfeita do cremoso leite Ninho com a irresistível Nutella, uma explosão de sabores.",
    image: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/05/lacrema-1.webp",
    tamaM: {
      price: "149,90",
      link: "https://wa.me/5566999852299?text=Olá,%20tenho%20interesse%20no%20La%20Crema%20Ninho%20com%20Nutella%20na%20Taça%20M%20(1,4L )%20por%20R$%20149,90."
    },
    tamaG: {
      price: "249,90",
      link: "https://wa.me/5566999852299?text=Olá,%20tenho%20interesse%20no%20La%20Crema%20Ninho%20com%20Nutella%20na%20Taça%20G%20(2,4L )%20por%20R$%20249,90."
    },
    poteM: {
      price: "44,90",
      link: "https://wa.me/5566999852299?text=Olá,%20tenho%20interesse%20no%20La%20Crema%20Ninho%20com%20Nutella%20no%20Pote%20M%20(500ml )%20por%20R$%2044,90."
    },
    poteG: {
      price: "99,90",
      link: "https://wa.me/5566999852299?text=Olá,%20tenho%20interesse%20no%20La%20Crema%20Ninho%20com%20Nutella%20no%20Pote%20G%20(1L )%20por%20R$%2099,90."
    }
  },
  {
    id: 3,
    name: "La Crema Prestígio",
    description: "A união do chocolate com coco, criando uma experiência tropical e sofisticada.",
    image: "https://images.unsplash.com/photo-1514517521153-1be72277b32f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    tamaM: {
      price: "149,90",
      link: "https://wa.me/5566999852299?text=Olá,%20tenho%20interesse%20no%20La%20Crema%20Prestígio%20na%20Taça%20M%20(1,4L )%20por%20R$%20149,90."
    },
    tamaG: {
      price: "249,90",
      link: "https://wa.me/5566999852299?text=Olá,%20tenho%20interesse%20no%20La%20Crema%20Prestígio%20na%20Taça%20G%20(2,4L )%20por%20R$%20249,90."
    },
    poteM: {
      price: "44,90",
      link: "https://wa.me/5566999852299?text=Olá,%20tenho%20interesse%20no%20La%20Crema%20Prestígio%20no%20Pote%20M%20(500ml )%20por%20R$%2044,90."
    },
    poteG: {
      price: "99,90",
      link: "https://wa.me/5566999852299?text=Olá,%20tenho%20interesse%20no%20La%20Crema%20Prestígio%20no%20Pote%20G%20(1L )%20por%20R$%2099,90."
    }
  },
  {
    id: 4,
    name: "BanaCrema",
    description: "A doçura da banana combinada com nosso creme especial, uma sobremesa reconfortante e deliciosa.",
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    tamaM: {
      price: "149,90",
      link: "https://wa.me/5566999852299?text=Olá,%20tenho%20interesse%20no%20BanaCrema%20na%20Taça%20M%20(1,4L )%20por%20R$%20149,90."
    },
    tamaG: {
      price: "249,90",
      link: "https://wa.me/5566999852299?text=Olá,%20tenho%20interesse%20no%20BanaCrema%20na%20Taça%20G%20(2,4L )%20por%20R$%20249,90."
    },
    poteM: {
      price: "44,90",
      link: "https://wa.me/5566999852299?text=Olá,%20tenho%20interesse%20no%20BanaCrema%20no%20Pote%20M%20(500ml )%20por%20R$%2044,90."
    },
    poteG: {
      price: "99,90",
      link: "https://wa.me/5566999852299?text=Olá,%20tenho%20interesse%20no%20BanaCrema%20no%20Pote%20G%20(1L )%20por%20R$%2099,90."
    }
  },
  {
    id: 5,
    name: "MaracuNinho",
    description: "A acidez do maracujá equilibrada com a doçura do leite Ninho, uma combinação refrescante e surpreendente.",
    image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    tamaM: {
      price: "149,90",
      link: "https://wa.me/5566999852299?text=Olá,%20tenho%20interesse%20no%20MaracuNinho%20na%20Taça%20M%20(1,4L )%20por%20R$%20149,90."
    },
    tamaG: {
      price: "249,90",
      link: "https://wa.me/5566999852299?text=Olá,%20tenho%20interesse%20no%20MaracuNinho%20na%20Taça%20G%20(2,4L )%20por%20R$%20249,90."
    },
    poteM: {
      price: "44,90",
      link: "https://wa.me/5566999852299?text=Olá,%20tenho%20interesse%20no%20MaracuNinho%20no%20Pote%20M%20(500ml )%20por%20R$%2044,90."
    },
    poteG: {
      price: "99,90",
      link: "https://wa.me/5566999852299?text=Olá,%20tenho%20interesse%20no%20MaracuNinho%20no%20Pote%20G%20(1L )%20por%20R$%2099,90."
    }
  }
];

export const potesProducts: ProductType[] = [
  {
    id: 6,
    name: "Torta Alemã",
    description: "Camadas de biscoito e creme amanteigado, uma receita tradicional que nunca sai de moda.",
    image: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/05/torta-alema-11.webp",
    tamaM: {
      price: "149,90",
      link: "https://wa.me/5566999852299?text=Olá,%20tenho%20interesse%20na%20Torta%20Alemã%20na%20Taça%20M%20(1,4L )%20por%20R$%20149,90."
    },
    tamaG: {
      price: "249,90",
      link: "https://wa.me/5566999852299?text=Olá,%20tenho%20interesse%20na%20Torta%20Alemã%20na%20Taça%20G%20(2,4L )%20por%20R$%20249,90."
    },
    poteM: {
      price: "44,90",
      link: "https://wa.me/5566999852299?text=Olá,%20tenho%20interesse%20na%20Torta%20Alemã%20no%20Pote%20M%20(500ml )%20por%20R$%2044,90."
    },
    poteG: {
      price: "99,90",
      link: "https://wa.me/5566999852299?text=Olá,%20tenho%20interesse%20na%20Torta%20Alemã%20no%20Pote%20G%20(1L )%20por%20R$%2099,90."
    }
  },
  {
    id: 7,
    name: "Torta de Bombons",
    description: "Uma explosão de chocolate com pedaços de bombons, para os verdadeiros chocólatras.",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    tamaM: {
      price: "149,90",
      link: "https://wa.me/5566999852299?text=Olá,%20tenho%20interesse%20na%20Torta%20de%20Bombons%20na%20Taça%20M%20(1,4L )%20por%20R$%20149,90."
    },
    tamaG: {
      price: "249,90",
      link: "https://wa.me/5566999852299?text=Olá,%20tenho%20interesse%20na%20Torta%20de%20Bombons%20na%20Taça%20G%20(2,4L )%20por%20R$%20249,90."
    },
    poteM: {
      price: "44,90",
      link: "https://wa.me/5566999852299?text=Olá,%20tenho%20interesse%20na%20Torta%20de%20Bombons%20no%20Pote%20M%20(500ml )%20por%20R$%2044,90."
    },
    poteG: {
      price: "99,90",
      link: "https://wa.me/5566999852299?text=Olá,%20tenho%20interesse%20na%20Torta%20de%20Bombons%20no%20Pote%20G%20(1L )%20por%20R$%2099,90."
    }
  },
  {
    id: 8,
    name: "Tiramisù",
    description: "O clássico italiano com café, queijo mascarpone e cacau, uma sobremesa sofisticada e irresistível.",
    image: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/05/tiramissu1.webp",
    tamaM: {
      price: "149,90",
      link: "https://wa.me/5566999852299?text=Olá,%20tenho%20interesse%20no%20Tiramisù%20na%20Taça%20M%20(1,4L )%20por%20R$%20149,90."
    },
    tamaG: {
      price: "249,90",
      link: "https://wa.me/5566999852299?text=Olá,%20tenho%20interesse%20no%20Tiramisù%20na%20Taça%20G%20(2,4L )%20por%20R$%20249,90."
    },
    poteM: {
      price: "44,90",
      link: "https://wa.me/5566999852299?text=Olá,%20tenho%20interesse%20no%20Tiramisù%20no%20Pote%20M%20(500ml )%20por%20R$%2044,90."
    },
    poteG: {
      price: "99,90",
      link: "https://wa.me/5566999852299?text=Olá,%20tenho%20interesse%20no%20Tiramisù%20no%20Pote%20G%20(1L )%20por%20R$%2099,90."
    }
  },
  {
    id: 9,
    name: "Banoffee",
    description: "A combinação perfeita de banana, doce de leite e chantilly, uma sobremesa que derrete na boca.",
    image: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/05/banoffe-1.webp",
    tamaM: {
      price: "149,90",
      link: "https://wa.me/5566999852299?text=Olá,%20tenho%20interesse%20no%20Banoffee%20na%20Taça%20M%20(1,4L )%20por%20R$%20149,90."
    },
    tamaG: {
      price: "249,90",
      link: "https://wa.me/5566999852299?text=Olá,%20tenho%20interesse%20no%20Banoffee%20na%20Taça%20G%20(2,4L )%20por%20R$%20249,90."
    },
    poteM: {
      price: "44,90",
      link: "https://wa.me/5566999852299?text=Olá,%20tenho%20interesse%20no%20Banoffee%20no%20Pote%20M%20(500ml )%20por%20R$%2044,90."
    },
    poteG: {
      price: "99,90",
      link: "https://wa.me/5566999852299?text=Olá,%20tenho%20interesse%20no%20Banoffee%20no%20Pote%20G%20(1L )%20por%20R$%2099,90."
    }
  },
  {
    id: 10,
    name: "Manjar Branco",
    description: "Sobremesa tradicional brasileira com calda de ameixa, uma combinação suave e elegante.",
    image: "https://images.unsplash.com/photo-1611293388250-580b08c4a145?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    tamaM: {
      price: "149,90",
      link: "https://wa.me/5566999852299?text=Olá,%20tenho%20interesse%20no%20Manjar%20Branco%20na%20Taça%20M%20(1,4L )%20por%20R$%20149,90."
    },
    tamaG: {
      price: "249,90",
      link: "https://wa.me/5566999852299?text=Olá,%20tenho%20interesse%20no%20Manjar%20Branco%20na%20Taça%20G%20(2,4L )%20por%20R$%20249,90."
    },
    poteM: {
      price: "44,90",
      link: "https://wa.me/5566999852299?text=Olá,%20tenho%20interesse%20no%20Manjar%20Branco%20no%20Pote%20M%20(500ml )%20por%20R$%2044,90."
    },
    poteG: {
      price: "99,90",
      link: "https://wa.me/5566999852299?text=Olá,%20tenho%20interesse%20no%20Manjar%20Branco%20no%20Pote%20G%20(1L )%20por%20R$%2099,90."
    }
  },
  {
    id: 11,
    name: "Creme Louise",
    description: "Creme aveludado com notas de baunilha e um toque especial da casa, uma experiência única.",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    tamaM: {
      price: "149,90",
      link: "https://wa.me/5566999852299?text=Olá,%20tenho%20interesse%20no%20Creme%20Louise%20na%20Taça%20M%20(1,4L )%20por%20R$%20149,90."
    },
    tamaG: {
      price: "249,90",
      link: "https://wa.me/5566999852299?text=Olá,%20tenho%20interesse%20no%20Creme%20Louise%20na%20Taça%20G%20(2,4L )%20por%20R$%20249,90."
    },
    poteM: {
      price: "44,90",
      link: "https://wa.me/5566999852299?text=Olá,%20tenho%20interesse%20no%20Creme%20Louise%20no%20Pote%20M%20(500ml )%20por%20R$%2044,90."
    },
    poteG: {
      price: "99,90",
      link: "https://wa.me/5566999852299?text=Olá,%20tenho%20interesse%20no%20Creme%20Louise%20no%20Pote%20G%20(1L )%20por%20R$%2099,90."
    }
  },
  {
    id: 12,
    name: "Pudim de Leite Condensado",
    description: "O tradicional pudim brasileiro, cremoso e com calda caramelizada perfeita.",
    image: "https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    tamaM: {
      price: "149,90",
      link: "https://wa.me/5566999852299?text=Olá,%20tenho%20interesse%20no%20Pudim%20de%20Leite%20Condensado%20na%20Taça%20M%20(1,4L )%20por%20R$%20149,90."
    },
    tamaG: {
      price: "249,90",
      link: "https://wa.me/5566999852299?text=Olá,%20tenho%20interesse%20no%20Pudim%20de%20Leite%20Condensado%20na%20Taça%20G%20(2,4L )%20por%20R$%20249,90."
    },
    poteM: {
      price: "44,90",
      link: "https://wa.me/5566999852299?text=Olá,%20tenho%20interesse%20no%20Pudim%20de%20Leite%20Condensado%20no%20Pote%20M%20(500ml )%20por%20R$%2044,90."
    },
    poteG: {
      price: "99,90",
      link: "https://wa.me/5566999852299?text=Olá,%20tenho%20interesse%20no%20Pudim%20de%20Leite%20Condensado%20no%20Pote%20G%20(1L )%20por%20R$%2099,90."
    }
  },
  {
    id: 13,
    name: "Cassata de Morango",
    description: "Sorvete artesanal com pedaços de morango, uma sobremesa refrescante para os dias quentes.",
    image: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/05/cassata-de-morango-.webp",
    tamaM: {
      price: "149,90",
      link: "https://wa.me/5566999852299?text=Olá,%20tenho%20interesse%20na%20Cassata%20de%20Morango%20na%20Taça%20M%20(1,4L )%20por%20R$%20149,90."
    },
    tamaG: {
      price: "249,90",
      link: "https://wa.me/5566999852299?text=Olá,%20tenho%20interesse%20na%20Cassata%20de%20Morango%20na%20Taça%20G%20(2,4L )%20por%20R$%20249,90."
    },
    poteM: {
      price: "44,90",
      link: "https://wa.me/5566999852299?text=Olá,%20tenho%20interesse%20na%20Cassata%20de%20Morango%20no%20Pote%20M%20(500ml )%20por%20R$%2044,90."
    },
    poteG: {
      price: "99,90",
      link: "https://wa.me/5566999852299?text=Olá,%20tenho%20interesse%20na%20Cassata%20de%20Morango%20no%20Pote%20G%20(1L )%20por%20R$%2099,90."
    }
  },
  {
    id: 14,
    name: "Cassata de Uva",
    description: "Sorvete cremoso com pedaços de uva, uma opção refrescante e diferenciada.",
    image: "https://yungwizzeprod2.wordpress.com/wp-content/uploads/2025/05/cassata-de-uva.webp",
    tamaM: {
      price: "149,90",
      link: "https://wa.me/5566999852299?text=Olá,%20tenho%20interesse%20na%20Cassata%20de%20Uva%20na%20Taça%20M%20(1,4L )%20por%20R$%20149,90."
    },
    tamaG: {
      price: "249,90",
      link: "https://wa.me/5566999852299?text=Olá,%20tenho%20interesse%20na%20Cassata%20de%20Uva%20na%20Taça%20G%20(2,4L )%20por%20R$%20249,90."
    },
    poteM: {
      price: "44,90",
      link: "https://wa.me/5566999852299?text=Olá,%20tenho%20interesse%20na%20Cassata%20de%20Uva%20no%20Pote%20M%20(500ml )%20por%20R$%2044,90."
    },
    poteG: {
      price: "99,90",
      link: "https://wa.me/5566999852299?text=Olá,%20tenho%20interesse%20na%20Cassata%20de%20Uva%20no%20Pote%20G%20(1L )%20por%20R$%2099,90."
    }
  },
  {
    id: 15,
    name: "Cassata de Abacaxi",
    description: "Sorvete tropical com pedaços de abacaxi caramelizado, uma explosão de sabor.",
    image: "https://images.unsplash.com/photo-1497534446932-c925b458314e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    tamaM: {
      price: "149,90",
      link: "https://wa.me/5566999852299?text=Olá,%20tenho%20interesse%20na%20Cassata%20de%20Abacaxi%20na%20Taça%20M%20(1,4L )%20por%20R$%20149,90."
    },
    tamaG: {
      price: "249,90",
      link: "https://wa.me/5566999852299?text=Olá,%20tenho%20interesse%20na%20Cassata%20de%20Abacaxi%20na%20Taça%20G%20(2,4L )%20por%20R$%20249,90."
    },
    poteM: {
      price: "44,90",
      link: "https://wa.me/5566999852299?text=Olá,%20tenho%20interesse%20na%20Cassata%20de%20Abacaxi%20no%20Pote%20M%20(500ml )%20por%20R$%2044,90."
    },
    poteG: {
      price: "99,90",
      link: "https://wa.me/5566999852299?text=Olá,%20tenho%20interesse%20na%20Cassata%20de%20Abacaxi%20no%20Pote%20G%20(1L )%20por%20R$%2099,90."
    }
  },
  {
    id: 16,
    name: "Niza",
    description: "A combinação perfeita entre o sabor sofisticado do pistache e o irresistível chocolate. Nosso Niza apresenta camadas cremosas de pistache envolvidas por uma cobertura generosa de chocolate ao leite, finalizadas com pedaços crocantes de pistache e uma cereja no topo. Uma experiência sensorial que conquista desde a primeira colherada, unindo texturas e sabores em perfeita harmonia.",
    image: "https://images.unsplash.com/photo-1559622214-f8a9850965bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    tamaM: {
      price: "149,90",
      link: "https://wa.me/5566999852299?text=Olá,%20tenho%20interesse%20no%20Niza%20na%20Taça%20M%20(1,4L )%20por%20R$%20149,90."
    },
    tamaG: {
      price: "249,90",
      link: "https://wa.me/5566999852299?text=Olá,%20tenho%20interesse%20no%20Niza%20na%20Taça%20G%20(2,4L )%20por%20R$%20249,90."
    },
    poteM: {
      price: "44,90",
      link: "https://wa.me/5566999852299?text=Olá,%20tenho%20interesse%20no%20Niza%20no%20Pote%20M%20(500ml )%20por%20R$%2044,90."
    },
    poteG: {
      price: "99,90",
      link: "https://wa.me/5566999852299?text=Olá,%20tenho%20interesse%20no%20Niza%20no%20Pote%20G%20(1L )%20por%20R$%2099,90."
    }
  }
];
