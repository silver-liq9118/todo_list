
import React from 'react';
import styles from './Main.module.scss';

const Login = (
{
      id = "ID",
      password = "Password",
      inputRec = "https://static.overlay-tech.com/assets/bf6404a9-6a23-4e2e-88ab-e88e7d2edbfc.png",
      listRec = "https://static.overlay-tech.com/assets/0722ba06-7ec5-4e65-bff3-4d14f2b86f54.png",
      toDoList = <><strong className={styles.toDoListEmphasis0}>✅ </strong>To DO Lis<strong className={styles.toDoListEmphasis0}>t 💬</strong> </>,
  }
) => {
  return (<div className={styles.main}><div className={styles.flexWrapperOne}><p className={styles.toDoList}><strong className={styles.toDoListEmphasis0}>✅ </strong>To DO Lis<strong className={styles.toDoListEmphasis0}>t 💬</strong> </p><div className={styles.relativeWrapperOne}><img alt="" className={styles.idRec} src={idRec}/><p className={styles.id}>{id}</p></div><div className={styles.flexWrapperTwo}><p className={styles.password}>{password}</p></div></div></div>);
};

export default Login;