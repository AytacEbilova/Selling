import { Link } from "react-router-dom"
import styles from "../Header/header.module.scss"
const Header = () => {
  return (
    <div>
      <header>
        <div className={styles.all}>
          <div className={styles.container}>
            <div className={styles.logo}>
              <h2 className={styles.h2}>Selling</h2>
            </div>
            <div className={styles.right}>
              <ul>
                <li>
                  <Link to={"/"} className={styles.link}>Home</Link>
                </li>
                <li>
                  <Link to={"products"}className={styles.link}>Products</Link>
                </li>
                <li>
                  <Link to={"about"}className={styles.link}>About Us</Link>
                </li>
                <li>
                  <Link to={"special"}className={styles.link}>Special</Link>
                </li>
                <li>
                  <Link to={"add"}className={styles.link}>Add</Link>
                </li>
                <li>
                  <Link to={"blog"}className={styles.link}>Blog</Link>
                </li>
                <li>
                  <Link to={"contact"}className={styles.link}>Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header