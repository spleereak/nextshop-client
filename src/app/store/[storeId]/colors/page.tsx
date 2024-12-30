import { NO_INDEX_PAGE } from "@/constants/seo.constants";
import type { Metadata } from "next";
import { Colors } from "./Colors";

export const metadata: Metadata = {
  title: 'Цвета',
  ...NO_INDEX_PAGE
}

export default function ColorsPage() {
  return <Colors />
}