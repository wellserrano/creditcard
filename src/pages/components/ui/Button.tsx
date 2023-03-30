import * as React from 'react'

import { cn } from '../../../lib/utils/cn'
import { cva, VariantProps } from 'class-variance-authority'

import Spinner from 'public/SpinnerGap.svg'
import Image from 'next/image'

const buttonVariants = cva(
  `flex justify-center items-center 
  w-80 h-14 py-4 px-12 
  bg-[#9333EA] hover:bg-[#A855F7] 
  text-lg font-semibold text-[#F9FAFB] 
  rounded-md shadow-[0_4px_16px] shadow-black
  transition-colors
  outline-none focus:ring focus:ring-[#F9FAFB] focus:ring-offset-4 focus:ring-offset-[#1F2937]
  `,
  {
    variants: { 
      state: {
        default: 'opacity-100',
        disabled: 'opacity-50 hover:bg-[#9333EA]',
      }
    },
    defaultVariants: {
      state: 'default'
    }
  }
)

interface ButtonProps
extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  isLoading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, state, children, isLoading, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ state, className }))}
        ref={ref}
        disabled={isLoading}
        {...props}
      >
        {
        isLoading 
        ? <Image 
            src={Spinner} 
            alt='loading animation' 
            width={24} 
            height={24}
            className='animate-spin'
          />
        : children
        }
      </button>
  )
})

Button.displayName= 'Button'

export { Button, buttonVariants }