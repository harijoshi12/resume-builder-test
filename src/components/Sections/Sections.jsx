import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import styles from '../../App.module.css'
import { techSkills, progLangs } from '../../data'

import { NewTechnicalSkillsTitle, NewInterestSecTitle, NewProgLangsTitle } from '../SectionTitles/SectionTitles'
import { TechnicalSkill, ProgLang } from '../Items/Items'
import AddItems from '../AddItem/AddItems'


export const TechSec = () => {
  const [plusEl, setPlusEl] = useState(false)
  // const [secTitleEdit, setSecTitleEdit] = useState(false)
  // const [itemEdit, setItemEdit] = useState(false)
  const [addNewItem, setAddNewItem] = useState(false)
  const [items, setItems] = useState(techSkills)
  

  const addNewItemHandler = ()=>{
    const itemsarr = items.map(d=> ({...d, isLast: false }))
    setItems([...itemsarr, {id:uuidv4(), title:"Technical Skill", isLast: true}])
    setAddNewItem(true)
  }
  return (
    <div className={`${styles.technicalSkills} ${styles.resumeSec}`}>
      <NewTechnicalSkillsTitle setPlusEl={setPlusEl}/>
      {items.map(data => <TechnicalSkill  key={data.id} data={data} dataArray={items} setDataArray={setItems} addNewItem={addNewItem} setPlusEl={setPlusEl} />)}
      {
        plusEl?(
          <div onMouseDown={()=>{addNewItemHandler()}}><AddItems /></div>
        ):null
      }

    </div>
  )
}
export const InterestSec = () => {
  const [plusEl, setPlusEl] = useState(false)
  // const [secTitleEdit, setSecTitleEdit] = useState(false)
  // const [itemEdit, setItemEdit] = useState(false)
  const [addNewItem, setAddNewItem] = useState(false)
  const [items, setItems] = useState(techSkills)
  

  const addNewItemHandler = ()=>{
    const itemsarr = items.map(d=> ({...d, isLast: false }))
    setItems([...itemsarr, {id:uuidv4(), title:"Technical Skill", isLast: true}])
    setAddNewItem(true)
  }
  return (
    <div className={`${styles.technicalSkills} ${styles.resumeSec}`}>
      <NewInterestSecTitle setPlusEl={setPlusEl}/>
      {items.map(data => <TechnicalSkill  key={data.id} data={data} dataArray={items} setDataArray={setItems} addNewItem={addNewItem} setPlusEl={setPlusEl} />)}
      {
        plusEl?(
          <div onMouseDown={()=>{addNewItemHandler()}}><AddItems /></div>
        ):null
      }

    </div>
  )
}

export const ProgSec = ()=>{
  // const [edit, setEdit] = useState(false)
  // const [item, setItem] = useState("")
  const [items, setItems] = useState([])
  const [addNewItem, setAddNewItem] = useState(false)
  const [plusEl, setPlusEl] = useState(false)
  const addNewItemHandler = ()=>{
    const itemsarr = items.map(d=> ({...d, isLast: false }))
    setItems([...itemsarr, {id:uuidv4(), title:"Technical Skill", isLast: true}])
    setAddNewItem(true)
  }
  
  return(
    <div className={`${styles.progLangs} ${styles.resumeSec}`}>
      <NewProgLangsTitle setPlusEl={setPlusEl}/>
      {progLangs.map(data => <ProgLang key={data.id} {...data} addNewItem={addNewItem} setPlusEl={setPlusEl}/>)}
      {
        plusEl?(
          <div onMouseDown={()=>{addNewItemHandler()}}><AddItems /></div>
        ):null
      }
    </div>
  )
}