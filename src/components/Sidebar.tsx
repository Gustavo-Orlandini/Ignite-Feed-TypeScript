import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar';
import styles from "./Sidebar.module.css"; 


export function Sidebar() {   
    return (     
        <aside className={styles.sidebar}>       
            <img         
                className={styles.cover}         
                src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y29kZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"         
                alt=""       
            />       
            <div className={styles.profile}>
                <Avatar src="https://github.com/Gustavo-Orlandini.png" />         
                
                <strong>Gustavo Orlandini</strong>         
                <span>Web Developer</span>       
            </div>       
    
            <footer>         
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>       
            </footer>     
        </aside>   
    ); 
}