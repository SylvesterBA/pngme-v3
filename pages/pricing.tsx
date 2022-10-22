import type { NextPage } from 'next'
import Link from 'next/link'
import { useState } from 'react'
import { PricingCard } from '../components/pricing/card'

import { SwitchButtons } from '../components/switchButtons'
import styles from '../styles/pages/Price.module.css'

const _titles = ['Monthly', 'Annually']
const _pricing = [
  {
    title: 'Developer',
    price: 'Free',
    calls: [
      {
        title: "20,000 Base API calls",
        elements: ["Account Institutions", "Alerts", "Balances & Transactions"]
      },
      {
        title: "1,000 Rich API calls",
        elements: ["Features API", "Enhanced Credit Report", "Decisioning API (beta)"]
      }
    ],
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
    calls: [
      {
        title: "100,000 Base API calls",
        elements: ["Account Institutions", "Alerts", "Balances & Transactions"]
      },
      {
        title: "2500 Rich API calls",
        elements: ["Features API", "Enhanced Credit Report", "Decisioning API (beta)"]
      }
    ],
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
    calls: [
      {
        title: "Unlimited",
        elements: ["Account Institutions", "Alerts", "Balances & Transactions"]
      },
      {
        title: "Custom",
        elements: ["Features API", "Enhanced Credit Report", "Decisioning API (beta)"]
      }
    ],
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

const Pricing: NextPage = () => {
  const [title, setTitle] = useState(_titles[0])

  return (
    <>
      <div className={styles.pricingHeader}>
        <picture className={styles.circleImg}>
          {/* <source srcSet="/images/quarter-circle.svg" type="image/webp" /> */}
          <img src="/images/quarter-circle.svg" alt="Landscape picture" height={200} width={200}/>
        </picture>

        <span className="text-primary-pink font-bold text-s md:text-xl pb-4">PRICING</span>
        <span className="text-2xl lg:text-4xl m:px-16 xl:px-32 2xl:px-64 3xl:px-96">Simple, transparent pricing for lending businesses that need to supercharge their growth</span>
        <SwitchButtons titles={_titles} setTitle={setTitle} styles={styles.switchButtons}/>
      </div>

      <div className={styles.cards}>
        <div className="bg-dirty-white h-64 lg:h-24 w-full absolute t-0"></div>
        <div className="lg:bg-dirty-white h-24 w-full absolute b-0"></div>
        <div className={styles.cardsContainer}>
          {_pricing.map((item, index) => (
            <PricingCard item={item} styles={styles} key={index} />
            ))}
        </div>
      </div>

      <div>
        {/* FAQ */}
      </div>

      <div className="flex flex-col justify-center items-center py-12">
        <p className="text-primary-pink font-bold text-2xl py-8">Have more questions?</p>

        <button className="bg-primary-purple text-white py-4 px-10 font-bold w-60 rounded-full text-xl">Contact Sales</button>
        <button className="bg-white border-2 text-primary-purple py-4 font-bold w-60 rounded-full my-5 border-primary-purple">Request a demo →</button>
      </div>
    </>
  )
}

export default Pricing
