import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import styles from "./../../styles/Footer.module.css";
import topArrow from "../../assets/top-arrow.png";
import Image from "next/image";

export const Footer = () => {
  const [topButton, setTopButton] = useState(false);

  const handleScroll = () => {
    const position = window.pageYOffset;

    if (position >= 200) {
      setTopButton(true);
    } else {
      setTopButton(false);
    }
  };

  console.log(topButton);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
      <h1>Footer here</h1>

      {topButton && (
        <Link
          activeClass="active"
          to="top"
          spy={true}
          smooth={true}
          offset={0}
          duration={100}
          className={styles.topButton}
        >
          <Image src={topArrow} width={50} height={50} alt="top icon" />
        </Link>
      )}
    </div>
  );
};
