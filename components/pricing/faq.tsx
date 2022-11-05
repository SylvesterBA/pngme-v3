import { useState } from "react"
import Image from 'next/image'

const _questions = [
  {
    id: 1,
    question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra, feugiat cursus. Dictumst risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in suscipit non. Non commodo volutpat, pharetra, vel.'
  },
  {
    id: 2,
    question: 'Lorem ipsum consectetur adipiscing elit?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra, feugiat cursus. Dictumst risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in suscipit non. Non commodo volutpat, pharetra, vel.'
  },
  {
    id: 3,
    question: 'Lorem ipsum dolor sit amet?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra, feugiat cursus. Dictumst risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in suscipit non. Non commodo volutpat, pharetra, vel.'
  },
  {
    id: 4,
    question: 'Dolor sit amet, consectetur adipiscing elit?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra, feugiat cursus. Dictumst risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in suscipit non. Non commodo volutpat, pharetra, vel'
  },
  {
    id: 5,
    question: 'Lorem ipsum dolor sit amet?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra, feugiat cursus. Dictumst risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in suscipit non. Non commodo volutpat, pharetra, vel'
  }
]

const _MoreQuestions = ({ visibleMobile }: { visibleMobile?: boolean}) => (
  <div className="flex flex-col justify-center items-center py-12 lg:items-start lg:pt-0">
    <p className="text-primary-pink font-bold text-2xl py-8 text-center lg:text-left">Have more questions?</p>

    <div className="flex flex-col lg:flex-row">
      <button className="bg-primary-purple text-white py-4 w-52 font-bold rounded-full mb-6 lg:mr-4">Contact Sales</button>
      <button className="bg-white border-2 text-primary-purple py-4 w-52 font-bold rounded-full border-primary-purple lg:mb-6">Request a demo →</button>
    </div>
  </div>
)

export const PricingFAQ = ({ styles }: any) => {
  const [questions, setQuestions] = useState(_questions)
  const [selectedId, setSelectedId] = useState<number>(0)

  return (
    <div className="flex flex-col px-6 mb-32 lg:justify-between lg:flex-row xl:px-32 2xl:px-64 3xl:px-96 xl:justify-evenly"> 
      <div className="flex lg:flex-col">
        <h1 className="text-2xl lg:text-3xl pt-20 pb-4 font-pngme-helvetica lg:py-10">Frequently Asked Questions</h1>
        <hr className="hidden lg:flex border-gray-400"/>

        <div className="hidden lg:flex">
          <_MoreQuestions />
        </div>
      </div>

      <div className="flex flex-col lg:w-6/12 xl:w-2/5 3xl:w-1/3">
        {questions.map(question => (
          <div key={question.id} className="flex flex-col border-b border-gray-400 lg:border-gray-200 pb-4 py-10" onClick={() => setSelectedId(selectedId === question.id ? 0 : question.id )}>
            <div className="flex justify-between">
              <h3 className="text-lg w-9/12">{question.question}</h3>
              <Image src={selectedId === question.id ? "/icons/pink-x.svg" : "/icons/pink-plus.svg"} alt="faq-button" width={25} height={25} />
            </div>
            {selectedId === question.id && (
              <span className="pt-6 pb-3 text-gray-500">{question.answer}</span>
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-center lg:hidden">
        <_MoreQuestions/>
      </div>

    </div>
  )
}