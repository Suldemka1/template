export async function getStaticProps(){
    const res = await fetch('http://95.167.178.44:6363/api/getData?data_type=min_name')

    const min_name = await res.json()


    return {
      props: min_name
      
    }
  }

export default function Example(props){
  const i = props.response[0].value
  console.log(i)
  return(
    <>
      <h1>{props.response[0].value}</h1>
    </>
  )
}