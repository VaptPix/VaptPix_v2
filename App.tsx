import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import WhatsAppButton from "@/components/WhatsAppButton";
import Index from "./pages/Index";
import ProductPage from "./pages/ProductPage";
import MyOrders from "./pages/MyOrders";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import ProductForm from "./pages/ProductForm";
import NotFound from "./pages/NotFound";

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
          <Route path="/produto/:id" element={<ProductPage />} />
          <Route path="/meus-pedidos" element={<MyOrders />} />
          
          {/* Admin Routes - Hidden */}
          <Route path="/sistema-rafael-vendas" element={<AdminLogin />} />
          <Route path="/sistema-rafael-vendas/dashboard" element={<AdminDashboard />} />
          <Route path="/sistema-rafael-vendas/produto/:id" element={<ProductForm />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <WhatsAppButton />
    </TooltipProvider>
    </CartProvider>
  </QueryClientProvider>
);

export default App;
