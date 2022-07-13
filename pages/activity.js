import UniversalCard from "../components/card";

export default function Activity() {
  return (
    <>
      <h1>Деятельность министерства</h1>
      <p>Деятельность министерства представлена в девяти направлениях.</p>
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