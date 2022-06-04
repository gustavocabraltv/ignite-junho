import styles from './Sidebar.module.css'
export function Sidebar(){ 
    return(
     <aside className={styles.sidebar}> 
        <img className={styles.cover} src='https://images.unsplash.com/photo-1526224617767-e92ff8a3fb71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' />
        <div className={styles.profile}>
            <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/12464543?v=4"/>
            <strong>Gustavo Cabral</strong>
            <span>Web Developer</span>
        </div>

        <footer>
            <a href='#'>Editar seu</a>
        </footer>
     </aside>
    )
}