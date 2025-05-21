import { Button } from "@/components/ui/button";
import { ProductType } from "@/data/products";

type ProductCardProps = {
  product: ProductType;
  type: 'taca' | 'pote';
};

export default function ProductCard({ product, type }: ProductCardProps) {
  return (
    <div className="product-card">
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-56 object-cover"
      />
      <div className="p-6">
        <h3 className="font-montserrat font-semibold text-xl mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="flex flex-col space-y-2">
          {type === 'taca' ? (
            <>
              <Button 
                asChild
                className="bg-primary hover:bg-opacity-90 text-white"
              >
                <a href={product.tamaM.link}>
                  Taça M - R$ {product.tamaM.price}
                </a>
              </Button>
              <Button 
                asChild
                className="bg-secondary hover:bg-opacity-90 text-white"
              >
                <a href={product.tamaG.link}>
                  Taça G - R$ {product.tamaG.price}
                </a>
              </Button>
            </>
          ) : (
            <>
              <Button 
                asChild
                className="bg-primary hover:bg-opacity-90 text-white"
              >
                <a href={product.poteM.link}>
                  Pote M - R$ {product.poteM.price}
                </a>
              </Button>
              <Button 
                asChild
                className="bg-secondary hover:bg-opacity-90 text-white"
              >
                <a href={product.poteG.link}>
                  Pote G - R$ {product.poteG.price}
                </a>
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
