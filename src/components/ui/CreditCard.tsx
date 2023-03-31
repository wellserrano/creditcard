import * as React from 'react'

import { cva, VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils/cn'

const creditCardVariants = cva(
 `relative bg-[#111827] w-[17.5rem] h-[10.5rem] rounded-2xl overflow-hidden 
 before:absolute before:z-40 before:block before:w-full before:h-full before:content-[''] before:backdrop-blur-2xl before:backdrop-brightness-50
 `,
 {
  variants: {
    variant: {
    },
  },
  defaultVariants: {
  }
 }
)

interface CreditCardProps
extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof creditCardVariants> {
  
}

const CreditCard = React.forwardRef<HTMLDivElement, CreditCardProps>(
({ className }, ref) => {
  return (
    <div
     className={cn(creditCardVariants({ className }))}
     ref={ ref }
    >
        <div className='absolute z-30 top-16 left-40 rounded-full bg-[#2DD4BF] w-32 h-32' />
        <div className='absolute z-30 -top-8 left-20 rounded-ellipse bg-[#2DD4BFCf] w-32 h-20 rotate-45' />
        <div className='absolute z-20 -top-1 left-28 rounded-ellipse bg-[#A855F7] w-52 h-36 rotate-45' />
        <div className='absolute z-20 top-2 -left-12 rounded-t-full bg-[#A855F7] w-20 h-52 rotate-12' />
        <div className='absolute z-20 top-28 -left-10 rounded-r-full bg-[#A855F7] w-40 h-14 rotate-12' />
        <div className='absolute z-30 top-28 -left-16 rounded-ellipse bg-[#2DD4BF] w-32 h-20 rotate-45' />

        {/* <div className='absolute z-50 bg-white w-full h-4 mt-8'></div> */}
    </div>
  )
})

CreditCard.displayName = 'CreditCard'

export { CreditCard }
