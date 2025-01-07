import React from 'react'
import { TabsContent } from '../ui/tabs'
import { Card, CardContent, CardHeader } from '../ui/card'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'

const AccountTabs = () => {
  return (
    <TabsContent value='account'>
      <Card>
        <CardHeader>
          <h3 className='text-2xl font-semibold'>Profile</h3>
          <p className='text-slate-500'>Manage your account details</p>
        </CardHeader>
        <CardContent className='space-y-4'>
          <div className='space-y-2'>
            <Label htmlFor='Name'>Name</Label>
            <Input id="Name" />
          </div>
          <div className='space-y-2'>
            <Label htmlFor='Email'>Email</Label>
            <Input id="Email" />
          </div>
          <div className='space-y-2'>
            <Label htmlFor='Motto'>Motto</Label>
            <Textarea placeholder='Tell us about you motto' id="Motto" />
          </div>
          <Button>Save Changes</Button>
        </CardContent>
      </Card>
    </TabsContent>
  )
}

export default AccountTabs