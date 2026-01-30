import { Shield, Truck, Zap, Clock, BadgeCheck, Lock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t mt-auto">
      {/* Trust Badges */}
      <div className="container py-6 px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
            <Truck className="h-8 w-8 text-ml-blue flex-shrink-0" />
            <div>
              <p className="text-sm font-semibold text-foreground">Entrega Rápida</p>
              <p className="text-xs text-muted-foreground">7-15 dias úteis</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
            <Shield className="h-8 w-8 text-ml-green flex-shrink-0" />
            <div>
              <p className="text-sm font-semibold text-foreground">Compra Segura</p>
              <p className="text-xs text-muted-foreground">100% Protegido</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
            <Zap className="h-8 w-8 text-ml-green flex-shrink-0" />
            <div>
              <p className="text-sm font-semibold text-foreground">Aprovação Imediata</p>
              <p className="text-xs text-muted-foreground">Pague via PIX</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
            <Clock className="h-8 w-8 text-ml-yellow flex-shrink-0" />
            <div>
              <p className="text-sm font-semibold text-foreground">Suporte 24h</p>
              <p className="text-xs text-muted-foreground">Estamos aqui</p>
            </div>
          </div>
        </div>
      </div>

      {/* Security Badges */}
      <div className="border-t bg-muted/30">
        <div className="container py-4 px-4">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Lock className="h-5 w-5" />
              <span className="text-xs">SSL Seguro</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <BadgeCheck className="h-5 w-5" />
              <span className="text-xs">Loja Verificada</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Shield className="h-5 w-5" />
              <span className="text-xs">Garantia de Entrega</span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t bg-foreground text-background">
        <div className="container py-4 px-4">
          <p className="text-center text-xs">
            © 2025 MegaStore. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
