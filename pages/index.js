import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import News from './news'
import styles from '../styles/Home.module.css'
import MobileHeader from '../components/mobile-header'
import Service from '../components/govservice'
import Resourse from '../components/govresourses'
import Footer from '../components/footer'

export default function Home() {
  return (
    <>
      <News />
      <Service />
      <Resourse />
    </>

  )
}
