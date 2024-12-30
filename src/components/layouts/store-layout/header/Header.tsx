'use client'
import { MobileSidebar } from '../sidebar/MobileSidebar'
import styles from './Header.module.scss'
import { useProfile } from "@/hooks/useProfile"
import { DASHBOARD_URL } from '@/config/url.config'
import Link from 'next/link'
import Image from 'next/image'
import { Loader } from '@/components/ui/loader'
import { StoreSwitcher } from './StoreSwitcher'

export function Header() {
  const { user, isLoading } = useProfile()

  return <div className={styles.header}>
    <MobileSidebar />
    <div className={styles.header_menu}>
      {isLoading ? (
      <Loader size='sm' />
      ) : (
          user && (
            <>
              <StoreSwitcher items={user.stores} />
              <Link href={DASHBOARD_URL.home()}>
                <Image
                  src={user.picture}
                  alt={user.name}
                  width={42}
                  height={42}
                />
              </Link>
            </>
        )
      )}
    </div>
  </div>
}