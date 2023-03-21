import React, { ChangeEvent } from 'react'

type PropsType = {
    isDone:boolean
    callback:(isDone:boolean) => void
} 


export const CheckBox =(props:PropsType) =>{

    const  onChangeHandler = (e:ChangeEvent<HTMLInputElement>) =>{
            props.callback(e.currentTarget.checked)
        
        
    }

  return (
    <input type="checkbox" onChange={onChangeHandler} checked={props.isDone}/>
    

  )
}
