import React from 'react'
import { BsPlusCircleFill } from 'react-icons/bs'
import {GoPrimitiveDot} from 'react-icons/go'
import styles from '../../App.module.css'
const AddItems = () => {
  return (
    <div className={styles.addItems}>
      <span className={styles.plus}><BsPlusCircleFill/> </span>
      <span className={styles.dashedLine}></span>
      <span className={styles.dot}><GoPrimitiveDot/> </span>
    </div>
  )
}

export default AddItems