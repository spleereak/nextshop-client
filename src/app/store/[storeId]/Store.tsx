'use client'
import { Heading } from '@/components/ui/modals/Heading'
import styles from './Store.module.scss'
import { MainStatistics } from './statistics/main-statistics/MainStatistics'
import { MiddleStatistics } from './statistics/middle-statistics/MiddleStatistics'

export default function Store() {
  return <div className={styles.wrapper}>
    <Heading title='Статистика' />
    <MainStatistics />
    <MiddleStatistics />
  </div>
}