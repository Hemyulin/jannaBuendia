import styles from "./Header.module.css";
import Link from "next/link";
// import { ProductCard } from "./product_card/product_card.component.jsx"

export const Header = () => {
  return (
    <header className={styles.Header}>
      Janna Buendia
      <div className={styles.links}>
        <Link href="/">HOME</Link>
        <Link href="_">Portfolio</Link>
        <Link href="_">Blog</Link>
        <Link href="/about">About</Link>
        <Link href="_">Contact</Link>
      </div>
      {/* <ProductCard /> */}
    </header>
  );
};
