import axios from "axios"
import { GetServerSideProps } from "next"


const getHeroDetails = (props:any) => {

  const {hero} = props;

  return (
    
      <div className="m-16 max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50">
	<div className="mt-6 mb-2">
		<span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">True Identity of</span>
		<h2 className="text-xl font-semibold tracking-wide">{hero.superHero} is</h2>
	</div>
	<p className="dark:text-gray-100">{hero.realName}</p>
</div>
      
  )
}

export const getServerSideProps: GetServerSideProps = async ({params}) => {
  const {id} = params;
  console.log(id);
  const res = await axios.get(`http://localhost:3000/api/hero/${id}`);
  const hero = res.data.hero;

  console.log(res.data.hero)

  return {
    props: {
      hero
    },
  }
}

export default getHeroDetails;