import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <div className="flex flex-col mt-3.5 ml-3">
        <ProductCard />
      </div>
    </div>
  );
}
