import './App.css';
import styles from './Main.module.scss';
import { useState } from 'react';
import TodoBoard from './components/TodoBoard.js';

const inputRec = "https://static.overlay-tech.com/assets/bf6404a9-6a23-4e2e-88ab-e88e7d2edbfc.png"
const listRec = "https://static.overlay-tech.com/assets/0722ba06-7ec5-4e65-bff3-4d14f2b86f54.png"
const toDoList = <><strong className={styles.toDoListEmphasis0}>✅ </strong>To DO List<strong className={styles.toDoListEmphasis0}>💬</strong> </>



function App (){
const [inputValue,setInputValue]=useState('')
const [todoList, setTodoList] = useState([])
const addItem = ()=> {
  setTodoList([...todoList,inputValue])
}


////////////Return////////////
return (<div className={styles.main}>
  <div className={styles.flexWrapperOne}>
    <p className={styles.todoList}>{toDoList}</p>

    <input type="text" value={inputValue} alt="" className={styles.inputRec} src={inputRec} 
    onChange={(event)=>setInputValue(event.target.value)}/>
    <button onClick={addItem} className={styles.addButton}>추가</button><br></br>
    <TodoBoard todoList={todoList}></TodoBoard>
    

  </div>
</div>);
} 



export default App;
