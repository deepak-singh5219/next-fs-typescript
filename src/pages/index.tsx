import axios from 'axios'
import { GetStaticProps } from 'next'
import Link from 'next/link';
import { useState } from 'react';
import { toast } from 'react-toastify';

const IdentityCard = ({hero}:any) => {
  const {_id,superHero,realName} = hero;
  const deleteHero = async (id:string) => {
    try {
      await axios.delete(`http://localhost:3000/api/hero/${id}`);
      toast.success("Hero Deleted!");
      toast.info('Refresh Page!'); 
    } catch (error) {
      toast.error("error in delete!");
    }

  }
  return (
    <div className="relative m-4 max-w-sm w-64 h-full rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
    <div className="flex flex-col justify-between p-6 space-y-8">
      <div className="space-y-2">
        <h2 className="text-3xl text-center font-semibold tracking-wide">{superHero}</h2>
            </div>
            <div className="m-4 flex items-center justify-between w-11/12">
              
      <Link href={`/${_id}`} className=" w-full mx-1 flex items-center justify-center p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900">Identity</Link>
      <button onClick={() => deleteHero(_id)} type="button" className=" w-full mx-1 flex items-center justify-center p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900">Delete</button>
            </div>
    </div>
  </div>
  )
}

const Home = (props:any) => {
  
  const {heros} = props;
  return (
    <div className='flex flex-wrap w-full'>
     {
      heros.map((hero:any)=> <IdentityCard hero={hero}/>)
     }
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await axios.get("http://localhost:3000/api/hero");
  const {heros} = res.data;
  return {
    props: {
      heros
    }, 
  }
}

export default Home;

