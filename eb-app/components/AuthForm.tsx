'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react';
// From shadcn/ui
import { z } from "zod" // Zod is a library for validating data
import {zodResolver} from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

// We define a string parameters with two rulles, where rule 1 is that
// the username must be at least 2 characters and in the second rule it
//  must be less than 50 characters.
const formSchema = z.object({
  email: z.string().email({message: 'Invalid email address'}),
})
const AuthForm = ( {type}: {type : string}) => {
  /*We use the extention VS Code ES7+ React/Redux/React-Native/JS snippets
  to quickly create the state variables

  Recall that useState is a hook that allows us to create a state variable for enabling
  updating components depending on the data that changes over time.
  When we call useState, it returns an array with two elements: the first is the state variable,
  the second is the function to update the state variable and trigger a re-render of 
  the component to reflect the change on the UI.
  For example: 
  import { useState } from 'react';

    function Counter() {
      // Declare a state variable named "count" initialized to 0
      const [count, setCount] = useState(0);

      return (
        <button onClick={() => setCount(count + 1)}>
          Count is {count}
        </button>
      );
    }

  
  */
  const [user, setUser] = useState(null)

  // Following instructions from https://v3.shadcn.com/docs/components/form
  // 1. Defining the form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })
 
  // 2. Defining the submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    console.log(values)
  }
  return (
    <section className='auth-form'>
        <header className='flex flex-col gap-5 md:gap-8'>
          <Link href="/" className="cursor-pointer flex items-center gap-1">
            <Image src="/icons/favicon.svg" alt="EasyBank" width={34} height={34}
            />
            <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">EasyBank</h1>
          </Link>
          <div className='flex flex-col gap-1 md:gap-3'>
            <h1 className='text-24 lg:text-36 font-bold text-gray-900'>
              {user ? 'Link Account': type === 'sign-in' ? 'Sign In' : 'Sign Up'}
              <p className='text-16 font-normal text-gray-600'>
                {user ? 'Link your bank account to get started' : type === 'sign-in' ? 'Access your account' : 'Create an account to get started'}
              </p>
            </h1>

          </div>
        </header>
    {user ? (
      <div className='flex flex-col gap-4'>
        {/* Show the user's bank accounts */}
      </div>
    ): 
    (
      <div className='flex flex-col gap-4'>
        {/*shadcn form component*/}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <div className='form-item'>
                      <FormLabel className='form-label'>Email</FormLabel>
                      <div className='flex w-full flex-col'>
                        <FormControl>
                          <Input className='input-class' 
                          placeholder="Enter your email" 
                          {...field} />
                        </FormControl>
                        {/* Display the error message */}
                        <FormMessage className='form-message mt-2' />
                      </div>
                  </div>

                )}
              />
              <Button type="submit">Submit</Button>
            </form>
        </Form>
      </div>
    )
  }
    </section >
  )
}

export default AuthForm