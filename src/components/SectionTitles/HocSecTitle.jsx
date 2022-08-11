import React, { useEffect, useRef, useState } from 'react'


const HocSecTitle = (SecTitle, titleName)=>{
  const NewSecTitle = (props)=>{
    const [edit, setEdit] = useState(false)
    const [secTitle, setSecTitle] = useState(titleName)  
    const {setPlusEl} = props
    
    useEffect(()=>{
      console.log("changed= ", edit)
      if(edit){
        setPlusEl(true)
      } else{
        setPlusEl(false)
      }
    },[edit, setPlusEl])

    const handleClickSecTitle= ()=>{
      setEdit(!edit)
    }

    const inputRef = useRef(null)
    const onChangeHandler = (e)=>{
      setSecTitle(e.target.value)
      if(e.target.value === ""){
        inputRef.current.placeholder = titleName
      }
    }

    const handleEditSecTitle = (e)=>{
      e.preventDefault()
      setEdit(!edit)
      if(secTitle === ""){
        setSecTitle(titleName)
      }
    }

    useEffect(() => {
      inputRef.current?.focus()
    }, [edit])
  
    return(
      <SecTitle edit={edit} setEdit={setEdit} secTitle={secTitle} setSecTitle={setSecTitle } {...props} handleClickSecTitle={handleClickSecTitle} inputRef={inputRef} onChangeHandler={onChangeHandler} handleEditSecTitle={handleEditSecTitle}/>
    )
  }
  return NewSecTitle
}

export default HocSecTitle