import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Loader2, Package } from "lucide-react";

interface Product {
  id: string;
  name: string;
  default_price: number;
  main_image_url: string | null;
  variations_count: number;
}

const Index = () => {
  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const { data: productsData, error } = await supabase
        .from("products")
        .select("id, name, default_price, main_image_url")
        .eq("active", true)
        .order("created_at", { ascending: false });

      if (error) throw error;

      // Get variation counts for each product
      const productsWithVariations = await Promise.all(
        (productsData || []).map(async (product) => {
          const { count } = await supabase
            .from("product_variations")
            .select("*", { count: "exact", head: true })
            .eq("product_id", product.id);

          return {
            ...product,
            variations_count: count || 0,
          };
        })
      );

      return productsWithVariations as Product[];
    },
  });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Products Grid */}
        <section className="container py-6 px-4">
          <h2 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
            <Package className="h-5 w-5 text-ml-blue" />
            Nossos Produtos
          </h2>

          {isLoading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-ml-blue" />
            </div>
          ) : products && products.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.default_price}
                  imageUrl={product.main_image_url}
                  hasVariations={product.variations_count > 0}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-card rounded-lg">
              <Package className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Nenhum produto disponível
              </h3>
              <p className="text-sm text-muted-foreground">
                Em breve novidades incríveis!
              </p>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
