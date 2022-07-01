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
            image='/person.jpg'
            width={'180px'}
            height={'233px'}
            surname='Бартан'
            name='Аяс'
            patronymic='Олегович'
            position='Министр цифрового развития'

            photos='/link'
          />
        </div>
        <div className={structure.headOf}>
          <Person
            image='/person.jpg'
            width={'180px'}
            height={'233px'}
            surname='Бартан'
            name='Аяс'
            patronymic='Олегович'
            position='Министр цифрового развития'

            photos='/link'
          />
          <Person
            image='/person.jpg'
            width={'180px'}
            height={'233px'}
            surname='Бартан'
            name='Аяс'
            patronymic='Олегович'
            position='Министр цифрового развития'

            photos='/link'
          />
          <Person
            image='/person.jpg'
            width={'180px'}
            height={'233px'}
            surname='Бартан'
            name='Аяс'
            patronymic='Олегович'
            position='Министр цифрового развития'

            photos='/link'
          />

          <Person
            image='/person.jpg'
            width={'180px'}
            height={'233px'}
            surname='Бартан'
            name='Аяс'
            patronymic='Олегович'
            position='Министр цифрового развития'

            photos='/link'
          />
        </div>
      </div>
    </>
  )
}