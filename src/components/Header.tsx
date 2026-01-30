import { Search, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import CartDrawer from "@/components/CartDrawer";

const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full gradient-header shadow-header">
      <div className="container flex h-14 items-center justify-between gap-4 px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex items-center">
            <span className="text-xl font-bold text-foreground">Vapt</span>
            <span className="text-xl font-bold text-ml-blue">Pix</span>
          </div>
        </Link>

        <div className="hidden flex-1 max-w-xl md:flex">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Buscar produtos..."
              className="w-full pl-10 bg-card border-none shadow-sm focus-visible:ring-ml-blue"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="p-2 md:hidden rounded-lg hover:bg-primary/80 transition-colors"
            aria-label="Buscar"
          >
            <Search className="h-5 w-5 text-foreground" />
          </button>
          <Link 
            to="/meus-pedidos"
            className="p-2 rounded-lg hover:bg-primary/80 transition-colors relative"
            aria-label="Meus Pedidos"
          >
            <Truck className="h-5 w-5 text-foreground" />
          </Link>
          <CartDrawer />
        </div>
      </div>

      {/* Mobile Search */}
      {searchOpen && (
        <div className="md:hidden px-4 pb-3 animate-fade-in">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Buscar produtos..."
              className="w-full pl-10 bg-card border-none shadow-sm"
              autoFocus
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
