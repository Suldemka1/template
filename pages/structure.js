import Container from "../components/container";
import Footer from "../components/footer";
import Header from "../components/header";
import MobileHeader from "../components/mobile-header";
import Person from "../components/person";
import container from '../styles/container.module.css'
import structure from '../styles/structure.module.css'

export default function Structure() {
  return (
    <>
      <h1>Структура министерства</h1>
      <div className={structure.structure}>
        <div className={structure.ministr}>
          <Person
            image='/herb.svg.png'
            width={'180px'}
            height={'233px'}
            surname='Фамилия'
            name='Имя'
            patronymic='Отчество'
            position='Должность'

            department_1='Один из департаментов'

            photos='/link'
          />
        </div>
        <div className={structure.headOf}>
          <Person
            image='/herb.svg.png'
            width={200}
            height={150}
            surname='Фамилия'
            name='Имя'
            patronymic='Отчество'
            position='Должность'

            department_1='Один из департаментов'

            photos='/link'
          />
          <Person
            image='/herb.svg.png'
            width={200}
            height={150}
            surname='Фамилия'
            name='Имя'
            patronymic='Отчество'
            position='Должность'

            department_1='Один из департаментов'

            photos='/link'
          />
          <Person
            image='/herb.svg.png'
            width={200}
            height={150}
            surname='Фамилия'
            name='Имя'
            patronymic='Отчество'
            position='Должность'

            department_1='Один из департаментов'

            photos='/link'
          />
        </div>
      </div>
    </>
  )
}