import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import UtopiaOSFeatures from '@site/src/components/HomepageFeatures/utopia-os';
import UtopiaUIFeatures from '@site/src/components/HomepageFeatures/utopia-ui';
import UtopiaP2PFeatures from '@site/src/components/HomepageFeatures/utopia-p2p';
import DocutopiaFeatures from '@site/src/components/HomepageFeatures/docutopia';
import BrowserOnly from '@docusaurus/BrowserOnly';
import 'leaflet/dist/leaflet.css';
import styles from './index.module.css';


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <BrowserOnly fallback={<div>Loading...</div>}>
          {() => {
            const LibComponent = require('@site/src/components/map').Map;
            return <LibComponent />;
          }}
        </BrowserOnly>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Utopia OS is a Framework to build Apps for real life interaction">
      <HomepageHeader />
      <main>
        <div className="text--center padding-horiz--md padding-vert--lg">
          <div className="hero text--center shadow--lw">
            <div className="container">
              <h1 className="hero__title">Docutopia</h1>
              <p className="hero__subtitle">Join the communal journey of creating a healthier, fair, transparent and anarchic future </p>
              <div>
              <UtopiaOSFeatures />
                <Link href='/docs/intro'>
                  <button className="button button--secondary button--outline button--lg">
                    learn more
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="text--center padding-horiz--md padding-vert--lg">
          <div className="hero text--center shadow--lw">
            <div className="container">
              <h1 className="hero__title">Docutopia 2.0 </h1>
              <p className="hero__subtitle">Reuseable UI Components for all kinds of communities</p>
              <div>
              <DocutopiaFeatures />
                <Link href='/docs/category/utopia-ui'>
                  <button className="button button--secondary button--outline button--lg">
                    learn more
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
