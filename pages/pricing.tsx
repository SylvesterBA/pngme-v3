import type { NextPage } from 'next'
import { useState } from 'react'

import { SwitchButtons } from '../components/switchButtons'
import styles from '../styles/pages/Price.module.css'

const Pricing: NextPage = () => {
  const _titles = ['Monthly', 'Annually']
  const [title, setTitle] = useState(_titles[0])

  return (
    <>
      <div className={styles.pricingHeader}>
        <picture className={styles.circleImg}>
          {/* <source srcSet="/images/quarter-circle.svg" type="image/webp" /> */}
          <img src="/images/quarter-circle.svg" alt="Landscape picture" />
        </picture>

        <p className="text-primary-pink pb-4"><b>PRICING</b></p>
        <h1>Simple, transparent pricing for lending businesses that need to supercharge their growth</h1>
        <SwitchButtons titles={_titles} setTitle={setTitle} styles={styles.switchButtons}/>
      </div>

      <div>

      </div>
    </>
  )
}

export default Pricing
