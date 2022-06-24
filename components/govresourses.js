import gvres from '../styles/govservice.module.css'

export default function Resourse(){
  return(
      <div className={gvres.bg_gray}>
      <div className={gvres.resourse}>
        <h2>Государственные ресурсы</h2>
        <div className={gvres.cards}>
          <div className={gvres.card}>
            <a href="#"><div>Название информационного ресурса</div></a>
          </div>
          <div className={gvres.card}>
            <a href="#"><div>Название информационного ресурса</div></a>
          </div>
          <div className={gvres.card}>
            <a href="#"><div>Название информационного ресурса</div></a>
          </div>
          <div className={gvres.card}>
            <a href="#"><div>Название информационного ресурса</div></a>
          </div>
          <div className={gvres.card}>
            <a href="#"><div>Название информационного ресурса</div></a>
          </div>
          <div className={gvres.card}>
            <a href="#"><div>Название информационного ресурса</div></a>
          </div>
        </div>
      </div>
    </div>
  )
}