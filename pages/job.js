import JobCard from "../components/jobCard"

export default function Job(params) {

  return (
    <>
    <h2>Государственная служба</h2>
      <JobCard
        title="Название вакансии"
        department="Название отдела"
        salary="30000"
        socialVaranty="Социальный пакет" />
    </>

  )
}