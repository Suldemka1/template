import Link from "next/link";
import Image from "next/image"
import UniversalCard from "../components/card";

export default function About() {
  return (
    <>
      <h1>О министерстве</h1>
      <div className='textinfo'>
        <p>Министерство сокрназвание Российской Федерации (Минсокрназвание России) является федеральным органом исполнительной власти, образованным в соответствии с Указом Президента Российской Федерации от 15 мая 2018 г. № 215 «О структуре федеральных органов исполнительной власти».</p>
        <br />
        <p>Минсокрназвание России реализует функции по выработке и реализации государственной политики и нормативно-правовому регулированию в сфере общего образования, среднего профессионального образования и соответствующего дополнительного профессионального образования, профессионального обучения, дополнительного образования детей и взрослых, воспитания, опеки и попечительства в отношении несовершеннолетних граждан, социальной поддержки и социальной защиты обучающихся, а также функции по оказанию государственных услуг и управлению государственным имуществом в сфере общего образования, среднего профессионального образования и соответствующего дополнительного профессионального образования, профессионального обучения, дополнительного образования детей и взрослых, воспитания.</p>
        <br />
        <p>Минсокрназвание России не имеет в своей структуре как представительств за рубежом, так и территориальных органов в субъектах Российской Федерации.</p>
      </div>

      <div className='documents'>
        <div className='documentCard'>
          <Image src={"/file-icon.jpeg"} width={20} height={20} />
          <Link href="/">Ссылка на документ №1</Link>
        </div>
        <div className='documentCard'>
          <Image src={"/file-icon.jpeg"} width={20} height={20} />
          <Link href="/">Ссылка на документ №1</Link>
        </div>
        <div className='documentCard'>
          <Image src={"/file-icon.jpeg"} width={20} height={20} />
          <Link href="/">Ссылка на документ №1</Link>
        </div>
        <div className='documentCard'>
          <Image src={"/file-icon.jpeg"} width={20} height={20} />
          <Link href="/">Ссылка на документ №1</Link>
        </div>
        <div className='documentCard'>
          <Image src={"/file-icon.jpeg"} width={20} height={20} />
          <Link href="/">Ссылка на документ №1</Link>
        </div>
      </div>

      <div className='links'>

        <UniversalCard
          title={'Руководство'}
          href={'/management'}
          image={'/person.jpg'}
          width={350}
          height={233} />

        <UniversalCard
          title={'Подведомственные организации'}
          href={'/subordinates'}
          image={'/min.png'}
          width={350}
          height={233} />

        <UniversalCard
          title={'Структура'}
          href={'/structure'}
          image={'/min.png'}
          width={350}
          height={233} />

        <UniversalCard
          title={'Новости министерства'}
          href={'/news'}
          image={'/about-news.png'}
          width={350}
          height={233} />

        <UniversalCard
          title={'Государственная служба'}
          href={'/job'}
          image={'/min.png'}
          width={350}
          height={233} />
      </div>




    </>
  )
}