import DatePicker, { registerLocale } from 'react-datepicker'
import ru from 'date-fns/locale/ru'
registerLocale("ru", ru)
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';


export const Datepicker = (params) => {
  const [startDate, setStartDate] = useState(new Date())


  return <DatePicker
    selected={startDate}
    dateFormat="P"
    locale="ru"
    onChange={(date) => setStartDate(date)}
  />
}