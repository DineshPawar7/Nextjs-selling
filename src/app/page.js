import Header from '../app/Header';
import Image from 'next/image';
import Link from 'next/link';
import styles from './styles/Home.module.css';


export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <section className={styles.hero}>
          <h1>Smart Yoga Products</h1>
          <p>Enhance your yoga experience with cutting-edge technology.</p>
          <Link href="/products" className={styles.ctaButton}>
            Shop Now
          </Link>
        </section>

        <section className={styles.benefits}>
          <div className={styles.benefitCards}>
            {/* Card 1 */}
            <div className={styles.card}>
              <Image
                src="https://www.indicinspirations.com/cdn/shop/products/cotton-yoga-mat-yantras-yoga-mats-830909.jpg?v=1642511976&width=899"
                alt="Yoga Mat"
                width={300}
                height={200}
              />
              <h3>COTTON YOGA MAT</h3>
              <p>Bend it like the Yogis! On this original Yoga Mat with Indic Colours.</p>
              <Link href="/mats" className={styles.ctaButton}>
                View More Mats
              </Link>
            </div>

            {/* Card 2 */}
            <div className={styles.card}>
              <Image
                src="https://www.indicinspirations.com/cdn/shop/products/yoga-props-bolster-denim-blue-bolsters-884851.jpg?v=1621703446&width=899"
                alt="Yoga Block"
                width={300}
                height={200}
              />
              <h3>Yoga Props - Bolster Denim Blue</h3>
              <p>A pillow to lift and support your body to promote deep and restorative poses.</p>
              <Link href="/mats" className={styles.ctaButton}>
                View More Props
              </Link>
            </div>

            {/* Card 3 */}
            <div className={styles.card}>
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL9kaXCR4fNOB5Fim1bz2FyJoQIKP0W8OTZQ&s"
                alt="Yoga Mat"
                width={300}
                height={200}
              />
              <h3>Smart Yoga Book</h3>
              <p>Discover inner peace and strength with essential yoga techniques.</p>
              <Link href="/mats" className={styles.ctaButton}>
                View More Books
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
