import * as React from 'react'
import { cva, VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils/cn'

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
  }
  
  const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type='text', label, showLabel='true', variant, ...props }, ref) => {
      // const [value, setValue] = React.useState<string>('')
      // const [error, setError] = React.useState<boolean>(false)

      // const validateInput = () => {
      //   const inputLength = value.length
      //   return setError(inputLength < 16)
      // }

      return (
        <div ref={ref} className='flex flex-col'>
          <Label.Root
            className='text-sm text-[#E5E7EB] leading-4 font-semibold mb-1 ml-1'
            htmlFor={ label }
          >
            { label }
          </Label.Root>
          <input
            className={cn(inputVariants({variant, className}), clsx({'border-[#FB7185] border-[2px]': true }))}
            type={ type } 
            id={ label }
            // value={ value }
            // onChange={ (e) => setValue(e.target.value) }
            // onBlur={ validateInput }
            {...props}
          />

        </div>
        )
      })
      
Input.displayName = 'Input'

export {Input}