import * as React from 'react'
import Image from 'next/image';
import { cn } from '../../lib/utils/cn'
import { cva, VariantProps } from 'class-variance-authority'

import questionmark from 'public/questionmark.svg'

import * as Label from '@radix-ui/react-label';
import clsx from 'clsx';

const inputVariants = cva(
  `flex justify-center 
  h-12 p-3
  text-base leading-6 text-[#F3F4F6]
  rounded border-[1px] border-[#374151] hover:border-[2px] 
  outline-none focus:border-[#9333EA] focus:border-[2px]
  bg-[#111827] placeholder:text-[#9CA3AF]
  transition-colors
  `,
  {
    variants: {
      variant: {
        default: 'w-80',
        sm: 'w-44',
        xsm: 'w-32',
      },
    },
    defaultVariants: {
      variant: 'default'
    }
  }
  )
  
  interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, 
  VariantProps<typeof inputVariants> {
    type?: string
    label: string
    showLabel?: boolean
    validateInput?: () => boolean
    hint?: boolean
  }
  
  const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type='text', label, showLabel='true', variant, validateInput, hint, ...props }, ref) => {
      const [error, setError] = React.useState<boolean>(false)

      const handleBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
        if (validateInput !== undefined) {
          setError(validateInput())
        }
      }

      return (
        <div ref={ref} className='flex flex-col'>
          <Label.Root
            className='flex gap-2 text-sm text-[#E5E7EB] leading-4 font-semibold mb-1 ml-1'
            htmlFor={ label }
          >
            { label }
            { 
              hint && 
              <Image src={ questionmark } alt="question mark for details" width={16} height={16} />
            }
          </Label.Root>
          <input
            className={cn(inputVariants({variant, className}), clsx({'border-[#FB7185] border-[2px]': error }))}
            type={ type } 
            id={ label }
            onBlur={ e => handleBlur(e) }
            {...props}
          />

        </div>
        )
      })
      
Input.displayName = 'Input'

export {Input}