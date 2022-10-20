import Head from 'next/head'
import { useState } from 'react';
import { AiOutlineUserAdd } from "react-icons/ai";
import Form from '../components/Form';
import Table from '../components/Table';



export default function Home() {
  
  const handler = () => {
    setVisible(!visible)
  }
  const [visible, setVisible] = useState(false)

  return (
    <section>

      <Head>
        <title>Employee management</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className='text-3xl text-center pt-6'>
          <h1>Employee Management</h1>
        </div>
        <div className='px-12 py-12'>
          <button onClick={handler} className='inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700 gap-5'>Add Employee <AiOutlineUserAdd /></button>
        </div>

        {visible && <Form />}
        
        <Table />
      </main>
    </section>
  )
}
