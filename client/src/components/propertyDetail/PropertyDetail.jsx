import React, { useEffect, useRef, useState } from 'react'
import {useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'
import { request } from '../../util/fetchAPI' 
import classes from './propertyDetail.module.css'

const PropertyDetail = () => {
  const {user} = useSelector((state) => state.auth)
  const [propertyDetail,setPropertyDetail] = useState(null)
  const [showForm, setShowForm] = useState(false)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const {id} = useParams()
  const formRef = useRef()

  useEffect(() => {
    const fetchDetails = async() => {
      try {
        const data = await request(`/property/${id}`, 'GET')
        setPropertyDetail(data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchDetails()
  }, [id])
  
  console.log(propertyDetail)

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
        <img src={`http://localhost:5000/images/${propertyDetail?.images}`} alt=''/>
        </div>
      </div>
      <div className={classes.right}></div>
    </div>
  )
}

export default PropertyDetail