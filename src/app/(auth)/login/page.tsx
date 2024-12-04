import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { EyeOff, Github } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <div className=' h-screen flex items-center justify-center'>
            <Card className='w-[400px] shadow-xl'>
                <CardHeader className='flex flex-col justify-center items-center'>
                    <CardTitle className='text-xl font-bold'>Welcome Back</CardTitle>
                    <CardDescription>Enter your email to sign in to your account</CardDescription>
                </CardHeader>
                <CardContent className='space-y-4'>
                    <Button variant="outline" className='w-full'>
                        <Github />
                        Github
                    </Button>
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-background px-2 text-muted-foreground">
                                Or continue with
                            </span>
                        </div>
                    </div>
                    <div className='space-y-1'>
                        <Label htmlFor='username'>Email or Username</Label>
                        <Input type='text' placeholder='Email or Username' id='username' />
                    </div>
                    <div className='space-y-1'>
                        <Label htmlFor='password'>Password</Label>
                        <div className="relative">
                            <Input type='password' placeholder='password' id='password' />
                            <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                            >
                                <EyeOff className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                    <Button className='w-full'>Sign In</Button>
                    <div className='text-center text-muted-foreground text-sm'>
                        <span>Don't have an account? <Link href="/register" className="underline hover:text-primary">Sign Up</Link></span>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default page