import govservice from '../styles/govservice.module.css'

export default function Resourse() {
  return (
    <div className={govservice.bg_gray}>
      
      <div className={govservice.resourse}>
        <h2>Государственные услуги</h2>
        <div className={govservice.cards}>
          <div className={govservice.card}>
            <a href="#"><div>Название государсвенной услуги со ссылкой на неё</div></a>
          </div>
          <div className={govservice.card}>
            <a href="#"><div>Название государсвенной услуги со ссылкой на неё</div></a>
          </div>
          <div className={govservice.card}>
            <a href="#"><div>Название государсвенной услуги со ссылкой на неё</div></a>
          </div>
          <div className={govservice.card}>
            <a href="#"><div>Название государсвенной услуги со ссылкой на неё</div></a>
          </div>
          <div className={govservice.card}>
            <a href="#"><div>Название государсвенной услуги со ссылкой на неё</div></a>
          </div>
          <div className={govservice.card}>
            <a href="#"><div>Название государсвенной услуги со ссылкой на неё</div></a>
          </div>
        </div>
      </div>
    </div>
  )
}