import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from 'react';

type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
};
const initialProduct = [
  {id:1, name:"turquoise-dress",price:"$20",image:"turquoise-dress.jpg"}
]

export default function ProductCard() {

  const [product,setProduct] = useState(initialProduct)
  return (
    <Card className="flex flex-col justify-between max-w-2xs">
      <CardHeader className="flex-col ml-15" >
        <CardTitle >Card Title</CardTitle>

        
      </CardHeader>
      <CardContent className="flex flex-col ml-4 justify-center  ">
        <Image
          src="/turquoise-dress.jpg"
          alt="Product preview"
          height={100}
          width={200}
          className="object-cover"
          priority
        ></Image>
        <div>
          <CardDescription className="text-black mt-2" >Blue Dress</CardDescription>
        </div>
      </CardContent>
      <CardFooter className="flex ml-14 items-start gap-2">
        <Button
          className="rounded-md bg-foreground px-6 py-3 text-background transition hover:opacity-90"
          size="sm"
          variant="outline"
        >
          Ürünü Ekle
        </Button>
      </CardFooter>
    </Card>
  );
}
