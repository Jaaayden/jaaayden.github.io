import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Intro',
    description: (
      <>
      🧐 Needy but Struggling.<br />
      🧬 Major in Structure Biology<br />
      💬 Be free to ask me anything.<br />
      </>
    ),
  },
  {
    title: 'Make Friends',
    description: (
      <>
      ⚠️ Decode with base64 <br />
      💬 Wechat = enNkenli <br />
      {/* <a herf="mailto:shenmiyouxiang@gamil.com">Email : mailto:shenmiyouxiang@gmail.com</a> <br /> */}
      ✉️ Email : contact@zengxud.top
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
    <div className="text--center">
     
      </div>
  <div class="card">
    <div class="card__header">
      <h3>{title}</h3>
    </div>
    <div class="card__body margin-left--xs">
      <p>
      {description}
      </p>
    </div>
  </div>

    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
