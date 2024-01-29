import styles from './Sidebar.module.css'
import { FaPen } from 'react-icons/fa'
import { Avatar } from '../avatar/Avatar'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover} src="https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
            <div className={styles.profile}>
            <Avatar src="https://github.com/dannmf.png"/>
                <strong>Daniel Manoel</strong>
                <span>Front-End Developer</span>
            </div>
            <footer>
                <a href="#">
                    <FaPen />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}