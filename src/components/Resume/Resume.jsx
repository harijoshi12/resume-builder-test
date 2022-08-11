import React from 'react'
import { TechSec, ProgSec, InterestSec } from '../Sections/Sections'
import styles from '../../App.module.css'
const Resume = () => { 
  return (
    <div className={styles.resume}>
      <div className={styles.content}>
        <div className={styles.left}>
          <TechSec/>
          <InterestSec/>
        </div>
        <div className={styles.right}>
          <ProgSec/>
        </div>
      </div>
    </div>
  )
}

export default Resume