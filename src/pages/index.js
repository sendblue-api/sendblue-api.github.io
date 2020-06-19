import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import useThemeContext from '@theme/hooks/useThemeContext';

const features = [
  {
    title: <>Use Data to Improve</>,
    imageUrl: 'img/informative.svg',
    description: (
      <>
        Sendblue gives you a detailed analytics on sent messages, 
        such as whether a message was delivered, read, or downgraded.
      </>
    ),
  },
  {
    title: <>Focus on What Matters</>,
    imageUrl: 'img/secure.svg',
    description: (
      <>
        Sendblue was built with a focus on security, so you don't have to.
        Each message is end-to-end encrypted and never stored in plain-text.
      </>
    ),
  },
  {
    title: <>Get More, for Less</>,
    imageUrl: 'img/affordable.svg',
    description: (
      <>
        Build on top of the worlds first iMessaging api, without having to worry
        about your account. Sendblue charges less than many providers.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const {isDarkTheme} = useThemeContext();
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} style={{ filter: isDarkTheme ? `hue-rotate(10deg) brightness(0.9)` : 'none'  }} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
