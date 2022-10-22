import Link from "next/link";
import Image from 'next/image'

export interface Card {
  title: string;
  price: string;
  features: string[];
  img: string;
}

const formatPrice = (price: string) => {
  return price !== 'Free' && price !== 'Custom' ? (
    <div className="flex pb-4 items-center">
      <span className="text-primary-pink text-2xl font-bold">${(price)}</span>
      <span className="text-primary-pink text-sm pl-1">/ mo</span>
    </div> 
  ) : (
    <p className="text-primary-pink pb-4 text-2xl font-bold">{price}</p>
  )
}

export const PricingCard = ({ styles, item }: { styles: any, item: Card }) => (
  <div className={styles.card}>
    <picture className={styles.cardImg}>
      {/* <source srcSet={`/images/${item.img}.svg`} type="image/webp" /> */}
      <img src={`/images/${item.img}.svg`} alt="Card image" height={100} width={100} />
    </picture>

    <div className="flex flex-col px-2">
      <p className="text-4xl py-4">{item.title}</p>
    {formatPrice(item.price)}
      <Link href="/">
        <a className="text-primary-purple underline font-bold underline-offset-4 text-base mb-8">How we calculate price</a>
      </Link>
      <button className="bg-primary-purple text-white py-3 px-10 rounded-full">Get started for FREE →</button>
    </div>

    <hr className="my-8"/>

    <div className="flex flex-col">
      {item.features.map((feature: string, index: number) => (
        <div key={index} className="flex my-1 ">
          <Image src="/icons/pink-check.svg" alt="Check" width={20} height={20} />
          <span className="pl-4">{feature}</span>
        </div>
      ))}
    </div>
  </div>
)