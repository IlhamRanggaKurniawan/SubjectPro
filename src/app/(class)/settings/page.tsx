"use client"

import AppearanceTabs from '@/components/myComponents/AppearanceTabs'
import CredentialsTabs from '@/components/myComponents/CredentialsTabs'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React from 'react'

const Page = () => {

  return (
    <div className='p-2 md:p-8 w-full'>
      <h1 className='text-4xl font-bold mb-8'>Settings</h1>
      <Tabs defaultValue='account'>
        <TabsList className='w-full sm:w-fit'>
          {/* <TabsTrigger value='account'>Account</TabsTrigger> */}
          <TabsTrigger value='appearance'>Appearance</TabsTrigger>
          <TabsTrigger value='credentials'>Credentials</TabsTrigger>
        </TabsList>
        {/* <AccountTabs /> */}
        <AppearanceTabs />
        <CredentialsTabs />
      </Tabs>
    </div>
  )
}

export default Page