import React, { useEffect, useRef, useState } from 'react'
import { MdOutlineDownloadDone } from "react-icons/md";
import styles from '../../App.module.css'

export const TechnicalSkillsTitle = ()=>{
  const [edit, setEdit] = useState(false)
  const [secTitle, setSecTitle] = useState("Technical Skills")

  const inputRef = useRef(null)
  const handleClickSecTitle= ()=>{
    setEdit(!edit)
  }
  const onChangeHandler = (e)=>{
    setSecTitle(e.target.value)
    if(e.target.value === ""){
      inputRef.current.placeholder = "Technical Skills"
    }
  }
  const handleEditSecTitle = (e)=>{
    e.preventDefault()
    setEdit(!edit)
    if(secTitle === ""){
      setSecTitle("Technical Skills")
    }
  }
  useEffect(() => {
    inputRef.current?.focus()
  }, [edit])

  return(
    <div className={styles.secTitle}>
      {
        edit?(
          <form className={styles.inputform} onSubmit={(e)=>{handleEditSecTitle(e)}} onBlur={(e)=>{handleEditSecTitle(e)}}>
            <input ref={inputRef} value={secTitle} onChange={(e)=>onChangeHandler(e)} />
            <span className={styles.icon} onClick={(e) => handleEditSecTitle(e)}><MdOutlineDownloadDone /></span>
          </form>
        ):(
          <h1 onClick={handleClickSecTitle}>{secTitle}</h1>
        )
      }
    </div>
  )
}

export const ProgLangsTitle = ()=>{
  const [edit, setEdit] = useState(false)
  const [secTitle, setSecTitle] = useState("Programming Languages")
  const inputRef = useRef(null)
  const handleClickSecTitle= ()=>{
    setEdit(!edit)
  }
  const onChangeHandler = (e)=>{
    setSecTitle(e.target.value)
    if(e.target.value === ""){
      console.log("empty")
      console.log(inputRef.current)
      inputRef.current.placeholder = "Programming Languages"
    }
  }
  const handleEditSecTitle = (e)=>{
    e.preventDefault()
    setEdit(!edit)
    if(secTitle === ""){
      setSecTitle("Programming Languages")
    }
  }
  useEffect(() => {
    inputRef.current?.focus()
  }, [edit])
  return(
    <div className={styles.secTitle}>
      {
        edit?(
          <form className={styles.inputform} onSubmit={(e)=>{handleEditSecTitle(e)}} onBlur={(e)=>{handleEditSecTitle(e)}}>
            <input ref={inputRef} type="text" value={secTitle} onChange={(e)=>onChangeHandler(e)} />
            <span className={styles.icon} onClick={(e) => handleEditSecTitle(e)}><MdOutlineDownloadDone /></span>
          </form>
        ):(
          <h1 onClick={handleClickSecTitle}>{secTitle}</h1>
        )
      }
    </div>
  )
}