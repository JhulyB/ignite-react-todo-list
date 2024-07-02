import logo from "../../assets/logo.svg"
import styles from './Header.module.css'

export const Header = () => {
    return(
        <header className={styles.header}>
            <img src={logo } alt="logo" />
        </header>
    )
}