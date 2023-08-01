import styles from "./Header.module.css";
import Link from "next/link";
// import { ProductCard } from "./product_card/product_card.component.jsx"

export const Header = () => {
  return (
    <header className={styles.Header}>
      <Link href="/">Janna Buendia</Link>
      <div className={styles.links}>
        <Link href="/">HOME</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
      {/* <ProductCard /> */}
    </header>
  );
};
