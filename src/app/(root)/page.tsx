import { Metadata } from "next";
import Home from "./Home";
import React from "react";
import { productService } from "@/services/product.service";

export const metadata: Metadata = {
  title: 'Ваш шопинг, ваше удовольствие - все в одном месте!'
}

export const revalidate = 60

async function getProducts() {
  const data = (await productService.getMostPopular()).slice(0, 6)

  return data
}

export default async function HomePage() {
  const data = await getProducts()

  return <Home products={data} />
}