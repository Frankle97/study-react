import Image from 'next/image'
import { Inter } from '@next/font/google'
import homeStyles from './page.module.css'
import React from "react";
import Head from "next/head";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={homeStyles.headingMd}>
      <Head>
        <title>Frankle</title>
      </Head>
      <section>
        <p>[Frankle Introduction]</p>
        <p>
          (This is a website)
        </p>
      </section>
      <section className={`${homeStyles.headingMd} ${homeStyles.padding1px}`}>
        <h2 className={homeStyles.headingLg}>Blog</h2>
        <ul className={homeStyles.list}>

        </ul>
      </section>
    </div>
  )
}
