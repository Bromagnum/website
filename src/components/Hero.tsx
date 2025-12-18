import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-24 md:grid-cols-2">
        
        {/* TEXT */}
        <div>
          <span className="inline-flex items-center rounded-full border border-border px-3 py-1 text-sm text-muted-foreground">
            🚀 Modern E-commerce Starter
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Build your{" "}
            <span className="bg-linear-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent dark:from-indigo-400 dark:to-purple-400">
              next product
            </span>{" "}
            faster
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            A clean and scalable starter built with Next.js, Tailwind CSS and
            modern component patterns.
          </p>
          

          <div className="mt-10 flex gap-4">
            <Link
              href="/products"
              className="rounded-md bg-foreground px-6 py-3 text-background transition hover:opacity-90"
            >
              View Products
            </Link>

            <Link
              href="/about"
              className="rounded-md border border-border px-6 py-3 text-foreground transition hover:bg-muted"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* IMAGE WITH DARK MODE GLOW */}
        <div className="relative aspect-4/3 w-full">
          {/* Glow */}
          <div className="absolute inset-0 -z-10 scale-105 rounded-xl bg-linear-to-r from-indigo-500/30 to-purple-500/30 blur-3xl dark:from-indigo-400/20 dark:to-purple-400/20" />

          {/* Image */}
          <div className="relative h-full w-full overflow-hidden rounded-xl border border-border bg-muted">
            <Image
              src="/hero.png"
              alt="Product preview"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
