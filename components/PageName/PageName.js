import pagename from './pagename.module.scss'

export const PageName = (params, {children}) => {
  return <div className={pagename.pagename}>{children}<h2>{params.title}</h2></div>
}