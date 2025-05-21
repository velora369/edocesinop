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
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
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
    image: "https://images.unsplash.com/photo-1541599468348-e96984315921?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
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
    image: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
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
    image: "https://images.unsplash.com/photo-1517400508447-f8dd518b86db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
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
    image: "https://pixabay.com/get/g2091126adb3fa2406a1c8eeee5da409c7986fa114826abd636e23c068efd8d3698c4e5d168ed81899a6d5dab2b74e05b9434ca48aaefab6a7f8ad0cca88e04e9_1280.jpg",
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
    name: "Cassata de Morango",
    description: "Sorvete artesanal com pedaços de morango, uma sobremesa refrescante para os dias quentes.",
    image: "https://pixabay.com/get/g3395d408c063d88fae5951582885d3f607d57a46792f868cd8e285f55678fe47b7c9a76e6c73a9851fb906a70e26d761cf13ba800d47d0e37e5ea3a223f4f6c8_1280.jpg",
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
  }
];
