import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Layout, Page, TextStyle } from '@shopify/polaris';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Page>
          <Layout>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Steve's app!</a>
          </h1>
          <TextStyle variation="positive">
            Sample app using React and Next.js
          </TextStyle>
          </Layout>
        </Page>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
