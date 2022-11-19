import axios from "axios";
import { AiOutlineForm, AiOutlineDelete } from "react-icons/ai";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../lib/helper";
import { toggleAction } from "../redux/reducer";
import { Loading } from "../components/Loading";
import { useState } from "react";

const BASE_URL = "http://localhost:3000"

const Table = () => {

  // const { isLoading, isError, data, error } = useQuery('users', getUser)

  // const [result, setData] = useState({})

  try {
    const res = axios.get(`${BASE_URL}/api/user`)
    console.log(res, ' this is response ');
    setData(res)

  } catch (error) {
    console.error(error)
  }
  // console.log(result ,'this is result ')


  // console.log(data, 'this is data');

  // const { users } =  data;

  const dispatch = useDispatch();

  const visible = useSelector((state) => state.app.value.toggle)

  console.log(visible);


  const onUpdate = () => {

    dispatch(toggleAction())

  }

  // if (isLoading) return <div className="flex justify-center"> <Loading /> </div>
  // if (isError) return <div>error..{error}</div>
  return (
    <div>
      <table className='container mx-auto mt-5'>
        <thead className='bg-black'>
          <tr className='text-white'>
            <th>Name</th>
            <th>Email</th>
            <th>Salary</th>
            <th>DOB</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        {/* <tbody className='bg-gray-200'>
          {
            data.users.map(item => (
              <tr className='text-center'>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.salary}</td>
                <td>{item.dob}</td>
                <td className={item.status == 'active' ? 'bg-green-500 ' : 'bg-rose-500 '}>{item.status}</td>
                <td className='gap-5 flex justify-center'>
                  <button onClick={onUpdate}><AiOutlineForm /></button>
                  <button><AiOutlineDelete /></button>
                </td>
              </tr>
            )
              // return (<Tr {...item} key={i} />)

            )
          }
        </tbody> */}
      </table>
    </div>
  )
}

// function Tr({ id, name, email, salary, status, dob }) {
//   <tr className='text-center'>
//     <td>{name || 'unknown'}</td>
//     <td>{email || 'unknown'}</td>
//     <td>{salary || 'unknown'}</td>
//     <td>{dob || 'unknown'}</td>
//     <td className='bg-green-500 rounded  w-24'>{status || 'unknown'}</td>
//     <td className='gap-5 flex justify-center'>
//       <button><AiOutlineForm /></button>
//       <button><AiOutlineDelete /></button>
//     </td>
//   </tr>
// }

export default Table




