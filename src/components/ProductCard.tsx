import Image from "next/image";
import Link from "next/link";

type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="group rounded-xl border border-border bg-background p-4 transition hover:shadow-md"
    >
      {/* Image */}
      <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-muted">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition group-hover:scale-105"
        />
      </div>

      {/* Info */}
      <div className="mt-4">
        <h3 className="font-medium text-foreground">{product.name}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{product.price}</p>
      </div>
    </Link>
  );
}
