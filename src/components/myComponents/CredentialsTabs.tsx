"use client"

import React, { useState } from 'react'
import { TabsContent } from '../ui/tabs'
import { Card, CardContent, CardHeader } from '../ui/card'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Eye, EyeOff } from 'lucide-react'

const CredentialsTabs = () => {
    const [showCurrentPassword, setShowCurrentPassword] = useState(false)
    const [showNewPassword, setShowNewPassword] = useState(false)
    const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false)

    return (
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
                            <Input id="currentPassword" type={showCurrentPassword ? "text" : "password"} />
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
                            <Input id="newPassword" type={showNewPassword ? "text" : "password"} />
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
                            <Input id="currentPassword" type={showConfirmNewPassword ? "text" : "password"} />
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
    )
}

export default CredentialsTabs