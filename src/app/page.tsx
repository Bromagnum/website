import Hero from "@/components/Hero";
import {ProductCard,Product} from "@/components/ProductCard";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <div className="flex flex-col mt-3.5 ml-3">
        <ProductCard id={Product.id} />
      </div>
    </div>
  );
}
