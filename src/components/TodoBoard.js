import React from "react"
import styles from '../Main.module.scss';
import { useState } from 'react';
import TodoItem from "./TodoItem";

const listRec = "https://static.overlay-tech.com/assets/0722ba06-7ec5-4e65-bff3-4d14f2b86f54.png"

function TodoBoard(props){

    return(
        
        <div className={styles.listRec} src={listRec}>
        <br></br>
        {props.todoList.map((item)=><TodoItem item={item}/>)}
        </div>
    )
}

export default TodoBoard