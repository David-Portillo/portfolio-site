import type { Component } from "solid-js";
import styles from '../../styles/modules/header.module.css'

const Header: Component = () => {

  return <header class={styles["header"]}>
    <div><img class={styles.logo} src="https://placehold.co/75x75" alt="logo" /></div>
    <nav>
      <ul class={styles["primary-navigation"]}>
        <li><a href=""><span aria-hidden="true">01</span>About Me</a></li>
        <li><a href=""><span aria-hidden="true">02</span>Skills</a></li>
        <li><a href=""><span aria-hidden="true">03</span>Projects</a></li>
      </ul>
    </nav>
  </header>
}

export default Header;