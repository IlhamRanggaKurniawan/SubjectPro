"use client"

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Textarea } from '@/components/ui/textarea'
import { Eye, EyeOff } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Page = () => {
  const [theme, setTheme] = useState("system")
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false)

  useEffect(() => {
    console.log(theme)
  }, [theme])

  return (
    <div className='p-8 w-full'>
      <h1 className='text-4xl font-bold mb-8'>Settings</h1>
      <Tabs defaultValue='credentials'>
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
              <p className='text-slate-500 text-sm mb-4'>Select the theme</p>
              <RadioGroup defaultValue='system' className='flex gap-4'>
                <RadioGroupItem value='light' id="light" className='sr-only' onChange={(e) => setTheme(e.currentTarget.value)} />
                <Label
                  htmlFor="light"
                  className="flex flex-col items-center space-y-2 cursor-pointer"
                >
                  <div className="items-center rounded-md border-2 border-muted p-1 hover:bg-accent">
                    <div className="space-y-2 rounded-sm bg-[#ecedef] p-2">
                      <div className="space-y-2 rounded-md bg-white p-2 shadow-sm">
                        <div className="h-2 w-[80px] rounded-lg bg-[#ecedef]" />
                        <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
                      </div>
                      <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
                        <div className="h-4 w-4 rounded-full bg-[#ecedef]" />
                        <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
                      </div>
                      <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
                        <div className="h-4 w-4 rounded-full bg-[#ecedef]" />
                        <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
                      </div>
                    </div>
                  </div>
                  <span className="font-medium">Light</span>
                </Label>
                <RadioGroupItem value='dark' id='dark' className='sr-only' />
                <Label
                  htmlFor="dark"
                  className="flex flex-col items-center space-y-2 cursor-pointer"
                >
                  <div className="items-center rounded-md border-2 border-muted bg-popover p-1 hover:bg-accent hover:text-accent-foreground">
                    <div className="space-y-2 rounded-sm bg-slate-950 p-2">
                      <div className="space-y-2 rounded-md bg-slate-800 p-2 shadow-sm">
                        <div className="h-2 w-[80px] rounded-lg bg-slate-400" />
                        <div className="h-2 w-[100px] rounded-lg bg-slate-400" />
                      </div>
                      <div className="flex items-center space-x-2 rounded-md bg-slate-800 p-2 shadow-sm">
                        <div className="h-4 w-4 rounded-full bg-slate-400" />
                        <div className="h-2 w-[100px] rounded-lg bg-slate-400" />
                      </div>
                      <div className="flex items-center space-x-2 rounded-md bg-slate-800 p-2 shadow-sm">
                        <div className="h-4 w-4 rounded-full bg-slate-400" />
                        <div className="h-2 w-[100px] rounded-lg bg-slate-400" />
                      </div>
                    </div>
                  </div>
                  <span className="font-medium">dark</span>
                </Label>
                <RadioGroupItem value='system' id="system" className='sr-only' />
                <Label
                  htmlFor="system"
                  className="flex flex-col items-center space-y-2 cursor-pointer"
                >
                  <div className='flex items-center rounded-md border-2 border-muted bg-popover p-1 hover:bg-accent hover:text-accent-foreground'>
                    <div className='space-y-2 rounded-l-sm bg-slate-950 p-2 pr-0 w-[78px]'>
                      <div className='space-y-2 rounded-l-sm bg-slate-800 shadow-sm p-2 pr-0'>
                        <div className='h-2 w-[64px] rounded-l-lg bg-slate-400' />
                        <div className='h-2 w-[64px] rounded-l-lg bg-slate-400' />
                      </div>
                      <div className="flex items-center space-x-2 rounded-l-md bg-slate-800 p-2 pr-0 shadow-sm">
                        <div className="h-4 w-4 rounded-full bg-slate-400" />
                        <div className='h-2 w-[40px] bg-slate-400 rounded-l-lg' />
                      </div>
                      <div className="flex items-center space-x-2 rounded-l-md bg-slate-800 p-2 pr-0 shadow-sm">
                        <div className="h-4 w-4 rounded-full bg-slate-400" />
                        <div className='h-2 w-[40px] bg-slate-400 rounded-l-lg' />
                      </div>
                    </div>
                    <div className='space-y-2 rounded-r-sm bg-[#ecedef] p-2 pl-0 w-[78px]'>
                      <div className='space-y-2 rounded-r-sm bg-white shadow-sm p-2 pl-0'>
                        <div className='h-2 w-[16px] rounded-r-lg bg-[#ecedef]' />
                        <div className='h-2 w-[36px] rounded-r-lg bg-[#ecedef]' />
                      </div>
                      <div className='flex items-center space-x-2 rounded-r-md bg-white p-2 pl-0 shadow-sm'>
                        <div className='h-4 w-full flex items-center'>
                          <div className='h-2 w-full bg-[#ecedef] rounded-r-lg' />
                        </div>
                      </div>
                      <div className='flex items-center space-x-2 rounded-r-md bg-white p-2 pl-0 shadow-sm'>
                        <div className='h-4 w-full flex items-center'>
                          <div className='h-2 w-full bg-[#ecedef] rounded-r-lg' />
                        </div>
                      </div>
                    </div>
                  </div>
                  <span className="font-medium">system</span>
                </Label>
              </RadioGroup>
              <Button className='mt-4'>Update preferences</Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value='credentials'>
          <Card>
            <CardHeader>
              <h3 className='text-2xl font-semibold'>Credentials</h3>
              <p className='text-slate-500'>Manage your account security settings</p>
            </CardHeader>
            <CardContent className='space-y-4'>
              <div className='space-y-2'>
                <Label htmlFor='currentPassword'>Current Password</Label>
                <div className='w-full flex gap-2'>
                  <Input id="currentPassword" type={showCurrentPassword ? "text" : "password"}/>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                  >
                    {showCurrentPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
              <div className='space-y-2'>
                <Label htmlFor='newPassword'>New Password</Label>
                <div className='w-full flex gap-2'>
                  <Input id="newPassword" type={showNewPassword ? "text" : "password"}/>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                  >
                    {showNewPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
              <div className='space-y-2'>
                <Label htmlFor='currentPassword'>Confirm New Password</Label>
                <div className='w-full flex gap-2'>
                  <Input id="currentPassword" type={showConfirmNewPassword ? "text" : "password"}/>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setShowConfirmNewPassword(!showConfirmNewPassword)}
                  >
                    {showConfirmNewPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
              <Button>Update Security Settings</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

    </div>
  )
}

export default Page