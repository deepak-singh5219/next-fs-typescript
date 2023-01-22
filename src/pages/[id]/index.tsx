import axios from "axios"
import { GetServerSideProps } from "next"


const getHeroDetails = () => {
  return (
    <div>hello</div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({params}) => {
  const {id} = params;
  console.log(id);
  const res = await axios.get(`http://localhost:3000/api/hero/${id}`);

  console.log(res.data.hero)

  return {
    props: {}, // will be passed to the page component as props
  }
}

export default getHeroDetails;