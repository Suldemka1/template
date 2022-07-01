import Footer from "../components/footer";
import Header from "../components/header";
import MobileHeader from "../components/mobile-header";
import Person from "../components/person";
import container from '../styles/container.module.css'

export default function Structure(){
  return(
    <>
      <Header/>
      <MobileHeader/>

      <div className={container.container}>
        <h1>Структура министерства</h1>

        <Person
          image='/herb.svg.png'
          width={350}
          height={233}
          surname='Фамилия'
          name='Имя'
          patronymic='Отчество'
          position='Должность'

          department_1='Один из департаментов'
        />
      </div>
      
      <Footer/>
    </>
  )
}