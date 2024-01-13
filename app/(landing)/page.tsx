import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
const LandingPage = () => {
  return (
    <>
    <div className='text-yellow-500 text-6xl'>LandingPage</div>
    <Link href='/sign-in'>
      <Button size='lg' variant={'destructive'}>Login</Button>
    </Link>
    <Link href='/sign-up'>
      <Button size='lg'>SignUp</Button>
    </Link>
    </>
  )
}

export default LandingPage