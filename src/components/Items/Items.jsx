import React, { useEffect, useRef, useState } from 'react'
import { AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import styles from '../../App.module.css'

export const TechnicalSkill = ({ title }) => {
  const [edit, setEdit] = useState(false)
  const [itemTitle, setItemTitle] = useState(title)

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
    <span className={styles.technicalSkill}>
      {
        edit ? (
          <form className={styles.inputform} onSubmit={(e) => { handleEditItemTitle(e) }} onBlur={(e) => { handleEditItemTitle(e) }}>
            <input ref={inputRef} value={itemTitle} onChange={(e) => onChangeHandler(e)} />
            <span className={styles.icon} onClick={(e) => handleEditItemTitle(e)}><MdDone /></span>
            <span className={styles.icon} onClick={(e) => handleEditItemTitle(e)}><AiFillDelete /></span>
          </form>
        ) : (
          <span onClick={handleClickItemTitle} >{title}</span>
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
