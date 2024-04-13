import Head from "next/head";
import React from "react";
import Theme from "../layouts/Theme";

import styles from './index.module.scss';
import GridItemApp from "@/components/GridItemApp/GridItemApp";

function PageHome() {
    const title = `Dragna.io - Hub for all things DragnaCarta`;
    const description = "D&D 5e Tools, Resources, and more.";

    const callToActions = [
      {
        publicImagePath: '/haunted-house.svg',
        title: 'Curse of Strahd: Reloaded',
        description: 'Where the magic happens',
        target: 'https://www.strahdreloaded.com/'
      },
      {
        publicImagePath: '/haunted-house.svg',
        title: 'Challenge Rated',
        description: 'D&D 5e Encounter Calculator',
        target: '/challenge-rated'
      },
      {
        publicImagePath: '/haunted-house.svg',
        title: 'Patreon',
        description: 'Access resources before anyone else, while supporting the creator',
        target: 'https://www.patreon.com/DragnaCarta'
      },
      {
        publicImagePath: '/fangs.svg',
        title: 'Twice Bitten',
        description: 'A rules-as-written (RAW) playing of Curse of Strahd',
        target: 'https://www.youtube.com/playlist?list=PL4R3TunxDm1q9UbfJddRGv7pmMsALnzZu'
      }
    ]

    return (
      <div>
        <Head>
          <meta charSet="utf-8" />
          <title>{title}</title>
          <meta content={title} property="og:title" />
          <meta content={description} name="description" />
          <meta content={description} property="og:description" />
          <meta content="@dannyrb" name="author" />
          <meta content="https://dragna.io" property="og:url" />
          <meta
            content="https://dragna.io/static/img/facebook.png"
            property="og:image"
          />
        </Head>

        <Theme>
          <header className={styles.hero}>
            <div className={styles.particles}>
              <div className={styles.stars}></div>
              <div className={styles.stars2}></div>
              <div className={styles.stars3}></div>
            </div>
            <div className={styles.container}>
              <div className={styles.content}>
                <h1 className="title">Dragna.io</h1>
              </div>
            </div>
            <div className={styles.castle}></div>
          </header>
          <main>
            <div className={styles.home}>
              {/* MAIN CONTENT */}
              <section className={`${styles.gridContainer} ${styles.contentContainer}`}>
                <div className={styles.titleWrapper}>
                  <h2>Discover</h2>
                  <span>Something, something, something from the mind of DragnaCarta</span>
                </div>

                <ul className={styles.grid}>
                  {callToActions.map((item, i) => (
                    <li key={i}>
                      <GridItemApp {...item} />
                    </li>
                  ))}
                </ul>
              </section>
            </div>



          </main>
        </Theme>
      </div>
    );
  }

              {/* <img
              className="icon"
              src={`/static/icons/${this.props.query.icon}`}
              width={220}
              height={220}
              alt={'title'}
            /> */}

export default PageHome;