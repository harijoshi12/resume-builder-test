import React, { useEffect, useRef, useState } from 'react'
import { AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import styles from '../../App.module.css'

export const TechnicalSkill = ({ data, dataArray, setDataArray, addNewItem, setPlusEl }) => {
  const title = data.title

  const [edit, setEdit] = useState(false)
  const [itemTitle, setItemTitle] = useState(title)

  useEffect(()=>{
    if(data.isLast){
      if(addNewItem){
        setEdit(true)
      } else{
        setEdit(false)
      }
    }
  },[addNewItem])

  useEffect(()=>{
    setPlusEl(edit)
  },[edit])

  const inputRef = useRef(null)

  const handleClickItemTitle = () => {
    setEdit(!edit)
    setPlusEl(true)
  }

  const onChangeHandler = (e) => {
    setItemTitle(e.target.value)
    if (e.target.value === "") {
      inputRef.current.placeholder = "Technical Skills"
    }
  }

  const handleEditItemTitle = (e) => {
    e.preventDefault()
    setPlusEl(false)
    setEdit(!edit)
    if (itemTitle === "") {
      setItemTitle("Technical Skills")
    }else{
      setDataArray(dataArray.map(d=>d.id === data.id? {...d, title:itemTitle}: d))
    }
  }

  const handleDeleteItemTitle = (e)=>{
    setDataArray(dataArray.filter(d=>d.id != data.id))
    setPlusEl(false)
  }
 
  useEffect(() => {
    inputRef.current?.focus()
  }, [edit])

  return (
    <span className={styles.technicalSkill}>
      {
        edit ? (
          <form className={styles.itemInputform} onSubmit={(e) => { handleEditItemTitle(e) }} onBlur={(e) => { handleEditItemTitle(e) }}>
            <input ref={inputRef} value={itemTitle} onChange={(e) => onChangeHandler(e)} />
            <span className={styles.icon} onMouseDown={(e) => handleEditItemTitle(e)}><MdDone /></span>
            <span className={styles.icon} onMouseDown={(e) => handleDeleteItemTitle(e)}><AiFillDelete /></span>
          </form>
        ) : (
          <span onClick={handleClickItemTitle} >{itemTitle}</span>
        )
      }
    </span>
  )
}

export const ProgLang = ({ title, level }) => {
  const [edit, setEdit] = useState(false)
  const [itemTitle, setItemTitle] = useState("Programming Language")

  const inputRef = useRef(null)
  const handleClickItemTitle = () => {
    setEdit(!edit)
  }
  const onChangeHandler = (e) => {
    setItemTitle(e.target.value)
    if (e.target.value === "") {
      inputRef.current.placeholder = "Technical Skills"
    }
  }
  const handleEditItemTitle = (e) => {
    e.preventDefault()
    setEdit(!edit)
    if (itemTitle === "") {
      setItemTitle("Technical Skills")
    }
  }
  useEffect(() => {
    inputRef.current?.focus()
  }, [edit])

  return (
    <div className={styles.progLang}>
      {
        edit ? (
          <form className={styles.inputform} onSubmit={(e) => { handleEditItemTitle(e) }} onBlur={(e) => { handleEditItemTitle(e) }}>
            <input ref={inputRef} value={itemTitle} onChange={(e) => onChangeHandler(e)} />
            <span className={styles.icon} onClick={(e) => handleEditItemTitle(e)}><MdDone /></span>
            <span className={styles.icon} onClick={(e) => handleEditItemTitle(e)}><AiFillDelete /></span>
          </form>
        ) : (
          <span onClick={handleClickItemTitle} className={styles.title}>{title}</span>
        )
      }
      <span className={styles.progressBarOuter}>
        <span className={styles.progressBarInner} style={{ width: `${level * 10}%` }} ></span>
      </span>
    </div>
  )
}
