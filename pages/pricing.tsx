import type { NextPage } from 'next'
import Link from 'next/link'
import { useState } from 'react'
import { PricingCard } from '../components/pricing/card'

import { SwitchButtons } from '../components/switchButtons'
import styles from '../styles/pages/Price.module.css'

const Pricing: NextPage = () => {
  const _titles = ['Monthly', 'Annually']
  const _pricing = [
    {
      title: 'Developer',
      price: 'Free',
      features: [
        'Explore sample data & insights',
        'Query the API in a test environment',
        'Explore the Feature Library',
        'Integration assistance'
      ],
      img: 'lightpink-card-circle',
    },
    {
      title: 'Scale',
      price: '500',
      features: [
        'Explore sample data & insights',
        'Query the API in a test environment',
        'Explore the Feature Library',
        'Discount on Data Science support',
        'Onboarding and go live support'
      ],
      img: 'orange-donut'
    },
    {
      title: 'Enterprise',
      price: 'Custom',
      features: [
        'Unlimited requests for Feature endpoints',
        'Bespoke decisioning endpoint',
        'API endpoint mapping',
        'Dedicated Account Team',
        'Advanced security and controls',
        'Custom contract'
      ],
      img: 'pink-triangle-gradient'
    }
  ]

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

      <div className={styles.cards}>
        <div className="bg-dirty-white h-64 w-full absolute t-0"></div>
        {_pricing.map((item, index) => (
          <PricingCard item={item} styles={styles} key={index} />
        ))}
      </div>
    </>
  )
}

export default Pricing
