import { NO_INDEX_PAGE } from "@/constants/seo.constants";
import { Metadata } from "next";
import styles from '../hero/Hero.module.scss'
import { PUBLIC_URL } from "@/config/url.config";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Спасибо за покупку',
  ...NO_INDEX_PAGE
}

export default function ThanksPage() {
  return (
    <div className={styles.section}>
      <h1 className={styles.heading}>Спасибо за покупку</h1>
      <p className={styles.description}>
        Спасибо за ваш заказ! Мы ценим ваше доверие и приложим все усилия, чтобы доставить ваш заказ как можно скорее.
      </p>
      <Link href={PUBLIC_URL.home()}>
        <Button variant='primary'>
          На главную
          <ArrowRight />
        </Button>
      </Link>
    </div>
  )
}