import React from "react"
import styles from '../Main.module.scss';

function TodoItem(props){


    return(
        <div className={styles.TodoItem}>
        {props.item}
        </div>
    )

}

export default TodoItem