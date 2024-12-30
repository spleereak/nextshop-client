'use client'

import { Button } from '@/components/ui/button'
import styles from './Auth.module.scss'
import { SERVER_URL } from '@/config/api.config'
import { useRouter } from 'next/navigation'
import { FcGoogle } from 'react-icons/fc'
import {FaYandex} from 'react-icons/fa'

export function Social() {
  const router = useRouter()

  return (
    <div className={styles.social}>
      <Button variant='outline' onClick={() => router.push(`${SERVER_URL}/auth/yandex`)}>
        <FaYandex color='#FC3F1D' />
        Продолжить через Яндекс
      </Button>
    </div>
  )
}