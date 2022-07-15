import UniversalCard from "../components/card";
import { PageName } from "../components/PageName/PageName";

export default function Activity() {
  return (
    <>
      <PageName title='Деятельность министерства' />
      <p>Деятельность министерства представлена в семи направлениях.</p>
      <div className='activity'>
        <UniversalCard
          title={'Ключевые направления работы'}
          href={'/'}
          image={'/main-activity.jpg'}
          width={350}
          height={233} />
        <UniversalCard
          title={'Проектная деятельность'}
          href={'/'}
          image={'/project-activity.jpg'}
          width={350}
          height={233} />
        <UniversalCard
          title={'Государственные услуги'}
          href={'/'}
          image={'/govservice.jpg'}
          width={350}
          height={233} />
        <UniversalCard
          title={'Закупки'}
          href={'/'}
          image={'/zakupki.jpg'}
          width={350}
          height={233} />
        <UniversalCard
          title={'Благотворительность'}
          href={'/'}
          image={'/heart.jpg'}
          width={350}
          height={233} />
        <UniversalCard
          title={'Противодействие терроризму'}
          href={'/'}
          image={'/antiterror.jpg'}
          width={350}
          height={233} />
        <UniversalCard
          title={'Противодействие коррупции'}
          href={'/'}
          image={'/anticorruption.jpeg'}
          width={350}
          height={233} />
      </div>
    </>
  )
}