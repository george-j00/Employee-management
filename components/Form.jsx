import React from 'react'
import AddUser from '../pages/AddUser'

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
