import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'


function Navbar() {
  return (
   <>
   <nav>
   <div className="logo">
        <Image src="/IMG_0129.JPG" alt="site logo" width={100} height={77} />
      </div>
      <h1 className={styles.intro}>Case Study</h1>
   </nav>
   </>
  )
}

export default Navbar