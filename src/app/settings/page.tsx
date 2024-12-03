import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Textarea } from '@/components/ui/textarea'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='p-8 w-full'>
      <h1 className='text-4xl font-bold mb-8'>Settings</h1>
      <Tabs defaultValue='account'>
        <TabsList>
          <TabsTrigger value='account'>Account</TabsTrigger>
          <TabsTrigger value='appearance'>Appearance</TabsTrigger>
          <TabsTrigger value='credentials'>Credentials</TabsTrigger>
        </TabsList>
        <TabsContent value='account'>
          <Card>
            <CardHeader>
              <h3 className='text-2xl font-semibold'>Profile</h3>
              <p className='text-slate-500'>Manage your account details</p>
            </CardHeader>
            <CardContent className='space-y-4'>
              <div className='flex items-center gap-4'>
                <Image className='h-20 w-20 rounded-full' src="/image.png" alt='your profile picture' width={2000} height={2000} />
                <Button>Change Avatar</Button>
              </div>
              <div className='space-y-2'>
                <Label htmlFor='Name'>Name</Label>
                <Input id="Name" />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='Email'>Email</Label>
                <Input id="Email" />
              </div>
              <div className='space-y-2'>
                <Label htmlFor='Bio'>Bio</Label>
                <Textarea placeholder='Tell us about yourself' id="Bio" />
              </div>
              <Button>Save Changes</Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value='appearance'>
          <Card>
            <CardHeader>
              <h3 className='text-2xl font-semibold'>Appearance</h3>
              <p className='text-slate-500'>Customize your app experience</p>
            </CardHeader>
            <CardContent>
                <h5>Theme</h5>
                <p>Select the theme</p>
                <Checkbox className='bg-red-500'></Checkbox>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

    </div>
  )
}

export default page