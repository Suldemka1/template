import Header from "../components/header";
import Head from 'next/head'
import MobileHeader from "../components/mobile-header";
import Link from "next/link";
import Image from "next/image"
import about from '../styles/about.module.css'
import Card from "../components/card";

export default function About() {
  return (
    <>

      <h1>О министерстве</h1>
      <div className={about.textinfo}>
        <p>Министерство сокрназвание Российской Федерации (Минсокрназвание России) является федеральным органом исполнительной власти, образованным в соответствии с Указом Президента Российской Федерации от 15 мая 2018 г. № 215 «О структуре федеральных органов исполнительной власти».</p>
        <br />
        <p>Минсокрназвание России реализует функции по выработке и реализации государственной политики и нормативно-правовому регулированию в сфере общего образования, среднего профессионального образования и соответствующего дополнительного профессионального образования, профессионального обучения, дополнительного образования детей и взрослых, воспитания, опеки и попечительства в отношении несовершеннолетних граждан, социальной поддержки и социальной защиты обучающихся, а также функции по оказанию государственных услуг и управлению государственным имуществом в сфере общего образования, среднего профессионального образования и соответствующего дополнительного профессионального образования, профессионального обучения, дополнительного образования детей и взрослых, воспитания.</p>
        <br />
        <p>Минсокрназвание России не имеет в своей структуре как представительств за рубежом, так и территориальных органов в субъектах Российской Федерации.</p>
      </div>

      <div className={about.documents}>
        <div className={about.documentCard}>
          <Image src={"/file-icon.jpeg"} width={20} height={20} />
          <Link href="/">Ссылка на документ №1</Link>
        </div>
        <div className={about.documentCard}>
          <Image src={"/file-icon.jpeg"} width={20} height={20} />
          <Link href="/">Ссылка на документ №1</Link>
        </div>
        <div className={about.documentCard}>
          <Image src={"/file-icon.jpeg"} width={20} height={20} />
          <Link href="/">Ссылка на документ №1</Link>
        </div>
        <div className={about.documentCard}>
          <Image src={"/file-icon.jpeg"} width={20} height={20} />
          <Link href="/">Ссылка на документ №1</Link>
        </div>
        <div className={about.documentCard}>
          <Image src={"/file-icon.jpeg"} width={20} height={20} />
          <Link href="/">Ссылка на документ №1</Link>
        </div>
      </div>

      <div className={about.links}>
        <Card
          title={'Структура'}
          href={'/structure'}
          image={'/structure-icon.png'}
          width={233}
          height={233} />
        <Card
          title={'Подведомственные организации'}
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
    </>
  )
}