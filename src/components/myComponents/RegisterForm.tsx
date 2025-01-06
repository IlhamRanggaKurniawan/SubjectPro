"use client"

import React, { FormEvent, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { Eye, EyeOff, Github } from 'lucide-react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const RegisterForm = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [confPassword, setConfPassword] = useState("")
    const [showConfPassword, setShowConfPassword] = useState(false)
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault()
            setLoading(true)
            setError("")
            if (!username.trim() || !email.trim() || !password.trim() || !confPassword.trim()) {
                return setError("all input must be filled")
            }

            if (password !== confPassword) {
                return setError("password and confirm password doen't match")
            }

            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/auth`, {
                method: "POST",
                credentials: "include",
                body: JSON.stringify({
                    username,
                    email,
                    password,
                    confirmPassword: confPassword
                })
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.error)
            }

            router.push("/")
        } catch (error) {
            setError(`register failed : ${error}`);
        } finally {
            setLoading(false)
        }
    }

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
                <form onSubmit={handleSubmit} className='space-y-4'>
                    <div className='space-y-1'>
                        <Label htmlFor='username'>Username</Label>
                        <Input type='text' placeholder='Username' id='username' value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className='space-y-1'>
                        <Label htmlFor='email'>Email</Label>
                        <Input type='email' placeholder='Email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='space-y-1'>
                        <Label htmlFor='password'>Password</Label>
                        <div className="relative">
                            <Input type={showPassword ? "text" : "password"} placeholder='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                            <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? (
                                    <EyeOff className="h-4 w-4" />
                                ) : (
                                    <Eye className="h-4 w-4" />
                                )}
                            </Button>
                        </div>
                    </div>
                    <div className='space-y-1'>
                        <Label htmlFor='confPassword'>Confirm password</Label>
                        <div className="relative">
                            <Input type={showConfPassword ? "text" : "password"} placeholder='Confirm password' id='confPassword' value={confPassword} onChange={(e) => setConfPassword(e.target.value)} />
                            <Button
                                type="button"
                                variant="ghost"
                                size="sm"
                                className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                                onClick={() => setShowConfPassword(!showConfPassword)}
                            >
                                {showConfPassword ? (
                                    <EyeOff className="h-4 w-4" />
                                ) : (
                                    <Eye className="h-4 w-4" />
                                )}
                            </Button>
                        </div>
                    </div>
                    <Button className='w-full' disabled={loading}>Sign Up</Button>
                    <p className='text-red-500'>{error}</p>
                </form>
                <div className='text-center w-full text-muted-foreground text-sm'>
                    <span>Already have an account? <Link href="/login" className='underline hover:text-primary'>Sign In</Link></span>
                </div>
            </CardContent>
        </Card>
    )
}

export default RegisterForm