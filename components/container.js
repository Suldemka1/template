import container from '../styles/container.module.css'

export default function Container({children}){
  return (
    <div className={container.container}>
      {children}
    </div>
  )
}