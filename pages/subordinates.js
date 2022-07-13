import Subordinate from '../components/subordinate'

export default function Subordinates() {
  return (
    <div className="subordinates">
      <h1>Подведомственные организации</h1>
      
        <Subordinate
          title='Фонд поддержки предпринимательства Республики Тыва'
          image='/fpprt.png'
          layout="fill"
          adress='Республика Тыва, г. Кызыл, ул. Красных партизан д. 18'
          phone='+7 (39422) 36082'
          email='someemail@mail.ru'
        />


        <Subordinate
          title='Фонд поддержки предпринимательства Республики Тыва'
          image='/fpprt.png'
          layout="fill"
          adress='Республика Тыва, г. Кызыл, ул. Красных партизан д. 18'
          phone='+7 (39422) 36082'
          email='someemail@mail.ru'
        />
    </div>
  )
}