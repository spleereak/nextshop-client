import { PUBLIC_URL } from "@/config/url.config";
import Link from "next/link";
import styles from './Logo.module.scss'
import Image from "next/image";
import { SITE_NAME } from "@/constants/seo.constants";
import logo from '@/../public/images/logo.svg'

export function Logo() {
  return <Link href={PUBLIC_URL.home()} className={styles.logo}>
    <Image src={logo} alt={SITE_NAME} width={35} height={35} />
    <div>{SITE_NAME}</div>
  </Link>
}