import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { EyeOff, Github } from 'lucide-react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import Link from 'next/link'

const RegisterForm = () => {
  return (
    <Card className='w-[400px] shadow-xl'>
                <CardHeader className='flex flex-col items-center'>
                    <CardTitle>Create an account</CardTitle>
                    <CardDescription>Enter your details to sign up</CardDescription>
                </CardHeader>
                <CardContent className='space-y-4'>
                    <Button variant="outline" className='w-full'>
                        <Github />
                        Github
                    </Button>
                    <div className='relative'>
                        <div className='absolute inset-0 flex items-center'>
                            <span className='w-full border-t' />
                        </div>
                        <div className='relative flex justify-center text-xs uppercase'>
                            <span className='bg-background px-2 text-muted-foreground'>
                                Or continue with
                            </span>
                        </div>
                    </div>
                    <div className='space-y-1'>
                        <Label htmlFor='username'>Username</Label>
                        <Input type='text' placeholder='Username' id='username' />
                    </div>
                    <div className='space-y-1'>
                        <Label htmlFor='email'>Email</Label>
                        <Input type='email' placeholder='Email' id='email' />
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
                    <div className='space-y-1'>
                        <Label htmlFor='confPassword'>Confirm password</Label>
                        <div className="relative">
                            <Input type='password' placeholder='Confirm password' id='confPassword' />
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
                    <Button className='w-full'>Sign Up</Button>
                    <div className='text-center w-full text-muted-foreground text-sm'>
                        <span>Already have an account? <Link href="/login" className='underline hover:text-primary'>Sign In</Link></span>
                    </div>
                </CardContent>
            </Card>
  )
}

export default RegisterForm