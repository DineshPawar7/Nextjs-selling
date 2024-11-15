"use client";
import React from 'react';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';
import styles from './styles/Header.module.css';


export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          
          <span>MyStore</span>
        </Link>
      </div>
      <nav className={styles.nav}>
        <Link href="/" className={styles.navLink}>
          Home
        </Link>
        <Link href="/products" className={styles.navLink}>
          Products
        </Link>
        <Link href="/about" className={styles.navLink}>
          About
        </Link>
        <Link href="/mats" className={styles.navLink}>Contact</Link>

      </nav>
      <div className={styles.cart}>
        <Link href="/cart">
          <FaShoppingCart className={styles.cartIcon} />
        </Link>
      </div>
    </header>
  );
}
