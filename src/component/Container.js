import { useState } from 'react'
import Display from './Display'
import Form from './Form'
import axios from 'axios'
import { endpoint } from '../constants'

const Container = () => {

  const initialState = {
    loader: false,
    resp: [],
    err: ''
  }

  const [data, setData] = useState(initialState)

  const clearHandler = () => {
    setData(initialState)
  }

  const submitHandler = (event) => {
    event.preventDefault()
    const search = event?.target?.search?.value
    if (search) {
      setData({
        loader: true,
        resp: [],
        err: ''
      })

      axios.get(endpoint + search)
        .then(response => {
          const responseData = response?.data
          if (responseData) {
            setData({
              loader: false,
              resp: responseData,
              err: ''
            })
          }

        })
        .catch(err => {
          const errMsg = err?.request?.responseText
          setData({
            loader: false,
            resp: [],
            err: errMsg ? JSON.parse(errMsg).message : 'Something went wrong'
          })
        })
    }
  }

  return (
    <>
    <div className='row'>
      <div className='col-12'>
        <Form submitHandler={submitHandler} clearHandler={clearHandler} /> 
      </div>
    </div>
    <div className='row' style={{marginTop:'2rem'}}>
      <div className='col-12'>
        <Display data={data} />
      </div>
    </div>
    </>
  )
}

export default Container
