import Person from "../components/person";
import structure from '../styles/structure.module.css'

export default function Structure() {
  return (
    <>
      <h1>Руководство министерства</h1>
      <div className={structure.structure}>
        <div className={structure.ministr}>
          <Person
            image='/person.jpg'
            width={216}
            height={286}
            surname='Сат'
            name='Айдыс'
            patronymic='Александрович'
            position='Министр экономического развития и промышленности'

            photos='/link'
          />
        </div>
        <div className={structure.headOf}>
          <Person
            image='/person.jpg'
            width={216}
            height={286}
            surname='Ховалыг'
            name='Снежана'
            patronymic='Кушкаш-ооловна'
            position='Первый заместитель министра'

            photos='/link'
          />
          <Person
            image='/person.jpg'
            width={216}
            height={286}
            surname='Конгар'
            name='Анзатмаа'
            patronymic='Аяс-кызы'
            position='Заместитель министра - начальник департамента по развитию промышленности и инвестиционной политике'

            photos='/link'
          />
          <Person
            image='/person.jpg'
            width={216}
            height={286}
            surname='Таспанчик  '
            name='Темир'
            patronymic='Чаш-оолович'
            position='Заместитель министра'

            photos='/link'
          />
        </div>
      </div>
    </>
  )
}