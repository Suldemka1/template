import JobCard from "../components/jobCard"
import { PageName } from "../components/PageName/PageName"

export default function Job(params) {



  return (
    <>
    <PageName title='Государственная служба'/>
    
      <JobCard
        title="Название вакансии"
        department="Название отдела"
        salary="30000"
        socialVaranty="Социальный пакет" />
    </>
  )
}