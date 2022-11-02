// import Link from "next/link";
import styles from "./../../styles/Navbar.module.css";
import cx from "classnames";

import { Link } from "react-scroll";

export const Navbar = () => {
  return (
    <div className={styles.container} id="top">
      {/* <Link href="/" className={styles.navCta}>
        Home
      </Link>
      <Link href="#contact" className={cx(styles.navCta, styles.navButton)}>
        Contact
      </Link> */}
      <Link
        activeClass="active"
        to="/"
        spy={true}
        smooth={true}
        offset={50}
        duration={100}
        className={styles.navCta}
      >
        SSG Online
      </Link>
      <Link
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={50}
        duration={100}
        className={cx(styles.navCta, styles.navButton)}
      >
        Contact
      </Link>
    </div>
  );
};
