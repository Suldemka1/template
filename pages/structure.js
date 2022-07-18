import Person from "../components/PersonCard/Person";
import { PageName } from "../components/PageName/PageName";

export async function getStaticProps() {
  const res = await fetch('http://127.0.0.1:3000/api/staff')
  const staff = await res.json()

  return {
    props: {
      staff: staff
    }
  }
}

export default function Structure({ staff }) {

  const show = staff.staff.map((item) => {
    return (
      <Person
        key={item.id}
        surname={item.surname}
        name={item.name}
        patronymic={item.patronymic}
        position={item.position}
        email={item.email}
        phone={item.phone} />
    )
  })

  return (
    <div className="structure">

      <PageName title='Структура министерства' />
      <div className="headOf">
        <Person
          surname= {staff.ministr.surname}
          name={staff.ministr.name}
          patronymic={staff.ministr.patronymic}
          position={staff.ministr.position}
          email={staff.ministr.email}
          phone={staff.ministr.phone} />
      </div>

      <div className="headOf">
        {show}
      </div>

    </div>

  )
}