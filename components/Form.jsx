import React from 'react'
import AddUser from './AddUser'
import UpdateUser from './UpdateUser'

const Form = () => {
    const flag = true
  return (

    <div>
        {flag ? <AddUser /> : <UpdateUser />}
    </div>
  )
}

export default Form
