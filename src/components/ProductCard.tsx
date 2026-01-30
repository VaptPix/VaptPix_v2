import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Truck } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  imageUrl: string | null;
  hasVariations?: boolean;
}

const ProductCard = ({ id, name, price, imageUrl, hasVariations }: ProductCardProps) => {
  const formatPrice = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };

  return (
    <Link to={`/produto/${id}`} className="block group">
      <div className="bg-card rounded-lg overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in">
        <div className="relative aspect-square overflow-hidden bg-muted">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
              <span className="text-4xl">📦</span>
            </div>
          )}
          {hasVariations && (
            <Badge className="absolute top-2 left-2 bg-ml-blue text-secondary-foreground text-xs">
              Várias cores
            </Badge>
          )}
        </div>
        
        <div className="p-3">
          <h3 className="text-sm font-medium text-foreground line-clamp-2 min-h-[40px] group-hover:text-ml-blue transition-colors">
            {name}
          </h3>
          
          <div className="mt-2">
            <p className="text-lg font-bold text-foreground">
              {formatPrice(price)}
            </p>
          </div>
          
          <div className="mt-2 flex items-center gap-1 text-ml-green">
            <Truck className="h-3 w-3" />
            <span className="text-xs font-medium">Frete Grátis</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
