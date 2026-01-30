import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import WhatsAppButton from "@/components/WhatsAppButton";
import Index from "./pages/Index";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CartProvider>
    <TooltipProvider>
      <Toaster />
      <Sonner />
            <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
                    </BrowserRouter>
      <WhatsAppButton />
    </TooltipProvider>
  </CartProvider>
</QueryClientProvider>
);

export default App;

