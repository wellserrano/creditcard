import * as React from 'react'
import Image from 'next/image'
import clsx from 'clsx'

import { cn } from '../../lib/utils/cn'
import { cva, VariantProps } from 'class-variance-authority'

import visa from 'public/visa.svg'
import contactless from 'public/ContactlessPayment.svg'

const creditCardVariants = cva(
 `relative flex flex-col items-center bg-[#111827] w-[17.5rem] h-[10.5rem] overflow-hidden 
 rounded-2xl border border-[#374151]
 before:absolute before:z-40 before:block before:w-full before:h-full before:content-[''] before:backdrop-blur-2xl before:backdrop-brightness-50
 `
)

interface CreditCardProps
extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof creditCardVariants> {
  side: 'front'|'back'
  cvv?: string
  cardNumber?: string
  name?: string
}

const CreditCard = React.forwardRef<HTMLDivElement, CreditCardProps>(
({ className, cvv, side, cardNumber, name, ...props }, ref) => {
  const [cardFlag, setCardFlag] = React.useState<'visa'|'master'|'elo'|null>(null)

  const visaRegex = /^4[0-9]{12}(?:[0-9]{3})?$/
  const mastercardRegex = /^5[1-5][0-9]{14}$/
  const eloRegex = /^(4011|4012|5017|5020|5038|6304|6703|6708|6759|6761|6763)[0-9]{12}(?:[0-9]{3})?$/

  // if (cardNumber !== undefined) {
  //   if (visaRegex.test(cardNumber)) {
  //     setCardFlag("visa");
  //   } else if (mastercardRegex.test(cardNumber)) {
  //     setCardFlag("master");
  //   } else if (eloRegex.test(cardNumber)) {
  //     setCardFlag("elo");
  //   } else {
  //     setCardFlag(null);
  //   }
  // }

  // console.log(cardType)

  return (
    <div
     className={cn(creditCardVariants({ className }))}
     ref={ ref }
    >
      {/* blurred background */}
      <div className='absolute z-30 top-16 left-40  rounded-full    bg-[#2DD4BF]   w-32 h-32' />
      <div className='absolute z-30 -top-8 left-20  rounded-ellipse bg-[#2DD4BFCf] w-32 h-20 rotate-45' />
      <div className='absolute z-20 -top-1 left-28  rounded-ellipse bg-[#A855F7]   w-52 h-36 rotate-45' />
      <div className='absolute z-20 top-2  -left-12 rounded-t-full  bg-[#A855F7]   w-20 h-52 rotate-12' />
      <div className='absolute z-20 top-28 -left-10 rounded-r-full  bg-[#A855F7]   w-40 h-14 rotate-12' />
      <div className='absolute z-30 top-28 -left-16 rounded-ellipse bg-[#2DD4BF]   w-32 h-20 rotate-45' />

      {
        side === 'front' 
        ? 
        <div className='absolute z-50 flex flex-col w-full pt-4 px-6 pb-6 '>
          <div className='flex justify-between w-full mb-10'>
            <Image src={visa} height={32} width={32} alt='card flag' />
            <Image src={contactless} height={24} width={24} alt='contactless payment symbol' />
          </div>
          <div className='mb-2'>
            <p className='tracking-[4px] text-[#F9FAFB]'>
              { cardNumber?.padEnd(16, '\u2022').replace(/(.{4})/g, "$1 ").trim() }
            </p>
          </div>
          <div className='flex w-full justify-between'>
            <span className={ clsx('w-3/4 text-[#F9FAFB] font-normal', 
              {'opacity-50': name?.length === 0,
              'opacity-100' : name?.length !== 0})}
            >
              {
                name
                ? name
                : 'Seu nome aqui'
              }
            </span>
            <span className='text-[#F9FAFB] opacity-50 font-normal tracking-[4px]'>&#x2022;&#x2022;/&#x2022;&#x2022;</span>
          </div>
        </div>

        : 
        <div className='absolute flex flex-col justify-center items-center gap-12 z-50 w-full'>
          {/* magnetic bar */}
            <div className='mt-4 bg-[#111827] w-full h-8' />

          {/* CVV display */}
          <div className='flex justify-end items-center gap-2'>
            <div className='flex w-52 h-8 justify-end items-center p-3 rounded-md bg-[#D1D5DB]'>
              <p className='tracking-[4px]'>
                { cvv ? cvv : <span className='text-[#111827] opacity-50'>&#x2022;&#x2022;&#x2022;</span> }
              </p>
            </div>
            <p className='text-[#E5E7EB] text-sm leading-4 font-normal'>CVV</p>
          </div>
        
        </div>
      }



    </div>
  )
})

CreditCard.displayName = 'CreditCard'

export { CreditCard }
