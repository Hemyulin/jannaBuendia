import styles from "./Header.module.css"
import Link from "next/link"

export const Header = () => {
    return <header className={styles.Header}>Janna Buendia
        <div>
            <Link href="_">HOME</Link>
            <a href="-">Portfolio</a>
            <a href="-">Investments</a>
            <a href="-">Blog</a>
            <a href="-">About</a>
        </div>
    </header>
}