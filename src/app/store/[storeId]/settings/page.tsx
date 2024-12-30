import { NO_INDEX_PAGE } from "@/constants/seo.constants";
import type { Metadata } from "next";
import { Settings } from "./Settings";

export const metadata: Metadata = {
  title: 'Настройки магазина',
  ...NO_INDEX_PAGE
}

export default function SettingsPage() {
  return <Settings />
}