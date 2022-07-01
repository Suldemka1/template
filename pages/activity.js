import Header from "../components/header";
import Image from "next/image";
import activity from '../styles/activity.module.css'
import container from '../styles/container.module.css'
import Card from "../components/card";
import MobileHeader from "../components/mobile-header";
import Footer from "../components/footer";

export default function Activity() {
  return (
    <>
      <Header />
      <MobileHeader />

      <div className={container.container}>
        <h1>Деятельность министерства</h1>
        <p>Деятельность министерства представлена в девяти направлениях.</p>
        <div className={activity.activity}>
          <Card
            title={'sometitle'}
            href={'/'}
            image={'/herb.svg.png'}
            width={350}
            height={233} />
          <Card
            title={'sometitle'}
            href={'/'}
            image={'/herb.svg.png'}
            width={350}
            height={233} />
          <Card
            title={'sometitle'}
            href={'/'}
            image={'/herb.svg.png'}
            width={350}
            height={233} />
          <Card
            title={'sometitle'}
            href={'/'}
            image={'/herb.svg.png'}
            width={350}
            height={233} />
          <Card
            title={'sometitle'}
            href={'/'}
            image={'/herb.svg.png'}
            width={350}
            height={233} />
          <Card
            title={'sometitle'}
            href={'/'}
            image={'/herb.svg.png'}
            width={350}
            height={233} />
          <Card
            title={'sometitle'}
            href={'/'}
            image={'/herb.svg.png'}
            width={350}
            height={233} />
        </div>
      </div>

      <Footer/>
    </>
  )
}