import React from 'react'
import { MdOutlineDownloadDone } from "react-icons/md";

// higher order component
import HocSecTitle from './HocSecTitle';

// custom styles
import styles from '../../App.module.css'

const InputTitle = (props)=>{
  const {secTitle, inputRef, onChangeHandler, handleEditSecTitle} = props
  return(
    <form className={styles.inputform} onSubmit={(e)=>{handleEditSecTitle(e)}} onBlur={(e)=>{handleEditSecTitle(e)}}>
      <input ref={inputRef} value={secTitle} onChange={(e)=>onChangeHandler(e)} />
      <span className={styles.icon} onClick={(e) => handleEditSecTitle(e)}><MdOutlineDownloadDone /></span>
    </form>
  )
}

const CommmonTitleCode = (props)=>{
  const {edit, secTitle, handleClickSecTitle} = props
  return(
    <div className={styles.secTitle}>
      {
        edit?(
          <InputTitle {...props}/>
        ):(
          <h1 onClick={handleClickSecTitle}>{secTitle}</h1>
        )
      }
    </div>
  )
}

const TechnicalSkillsTitle = (props)=>{
  return(
    <CommmonTitleCode {...props}/>
  )
}

const InterestSecTitle = (props)=>{
  return(
    <CommmonTitleCode {...props}/>
  )
}

const ProgLangsTitle = (props)=>{
  return(
    <CommmonTitleCode {...props}/>
  )
}

// wrapping HOC
const NewInterestSecTitle = HocSecTitle(InterestSecTitle, "Interests")
const NewTechnicalSkillsTitle = HocSecTitle(TechnicalSkillsTitle, "TechnicalSkills")
const NewProgLangsTitle = HocSecTitle(ProgLangsTitle, "mouse" )

// Exporting modified components
export { NewInterestSecTitle, NewTechnicalSkillsTitle, NewProgLangsTitle  }