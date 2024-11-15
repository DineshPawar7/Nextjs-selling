import Header from '../Header';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';


export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.container}>
                <section className={styles.benefits}>
          <div className={styles.benefitCards}>
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
                Buy Now
              </Link>
            </div>
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
                Buy Now
              </Link>
            </div>
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
                Buy Now
              </Link>
            </div>
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
                Buy Now
              </Link>
            </div>
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
                Buy Now
              </Link>
            </div>


            
          </div>
        </section>
      </div>
    </>
  );
}
