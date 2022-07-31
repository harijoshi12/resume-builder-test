import React, { useEffect, useState } from 'react'
import styles from '../../App.module.css'
import { techSkills, progLangs } from '../../data'

import { TechnicalSkillsTitle, ProgLangsTitle } from '../SectionTitles/SectionTitles'
import { TechnicalSkill, ProgLang } from '../Items/Items'


export const TechSec = () => {
  const [edit, setEdit] = useState(false)
  const [item, setItem] = useState("")
  const [items, setItems] = useState([])

  return (
    <div className={`${styles.technicalSkills} ${styles.resumeSec}`}>
      <TechnicalSkillsTitle/>
      {techSkills.map(data => <TechnicalSkill key={data.id} {...data} />)}
    </div>
  )
}

export const ProgSec = ()=>{
  const [edit, setEdit] = useState(false)
  const [item, setItem] = useState("")
  const [items, setItems] = useState([])
  
  return(
    <div className={`${styles.progLangs} ${styles.resumeSec}`}>
    <ProgLangsTitle/>
    {progLangs.map(data => <ProgLang key={data.id} {...data}/>)}
  </div>
  )
}