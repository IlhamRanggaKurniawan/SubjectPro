"use client"

import React, { FormEvent, useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { Eye, EyeOff, Github } from 'lucide-react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const LoginForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault()
            setError("")
            setLoading(true)
            if (!email.trim() || !password.trim()) {
                return setError("all input must be filled")
            }

            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/auth/login`, {
                method: "POST",
                credentials: "include",
                body: JSON.stringify({
                    email,
                    password
                })
            })

            const data = await response.json()

            if(!response.ok) {
                throw new Error(data.error)
            }

            router.push("/")
        } catch (error) {
            setError(`login failed : ${error}`);
        } finally {
            setLoading(false)
        }
    }

    return (
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
                <form className='space-y-4' onSubmit={handleSubmit}>
                    <div className='space-y-1'>
                        <Label htmlFor='Email'>Email</Label>
                        <Input type='text' placeholder='Email' id='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
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
                    <Button className='w-full' disabled={loading}>Sign In</Button>
                    <p className='text-red-500'>{error}</p>
                </form>
                <div className='text-center text-muted-foreground text-sm'>
                    <span>Dont have an account? <Link href="/register" className="underline hover:text-primary">Sign Up</Link></span>
                </div>
            </CardContent>
        </Card>
    )
}

export default LoginForm