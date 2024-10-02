import FeaturedCollection from "./components/featured-collection";
import HeroSection from "./components/hero-section";
import Header from "./components/ui/header";
import { CartProvider } from "./contexts/cart-context";
import Layout from "./layout";

export default function Home() {
  return (
    <CartProvider>
      <Layout>
        <div className="bg-[#7AA65A] text-center"> <span className="text-white font-normal text-sm">30% Off All Orders Until 4/27</span></div>
        <Header />
        <HeroSection />
        <FeaturedCollection />
      </Layout>
    </CartProvider>
  );
}
