"use client"

import React, { useEffect, useState } from 'react'
import { TabsContent } from '../ui/tabs'
import { Card, CardContent, CardHeader } from '../ui/card'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Label } from '../ui/label'
import { Button } from '../ui/button'

const AppearanceTabs = () => {
    const [theme, setTheme] = useState("system")

    useEffect(() => {
        console.log(theme)
    }, [theme])
    return (
        <TabsContent value='appearance'>
            <Card>
                <CardHeader>
                    <h3 className='text-2xl font-semibold'>Appearance</h3>
                    <p className='text-slate-500'>Customize your app experience</p>
                </CardHeader>
                <CardContent>
                    <h5>Theme</h5>
                    <p className='text-slate-500 text-sm mb-4'>Select the theme</p>
                    <RadioGroup defaultValue='system' className='flex gap-4 flex-col lg:flex-row'>
                        <RadioGroupItem value='light' id="light" className='sr-only' onChange={(e) => setTheme(e.currentTarget.value)} />
                        <Label
                            htmlFor="light"
                            className="flex flex-col items-center space-y-2 cursor-pointer w-fit"
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
                            <span className="font-bold">Light</span>
                        </Label>
                        <RadioGroupItem value='dark' id='dark' className='sr-only' />
                        <Label
                            htmlFor="dark"
                            className="flex flex-col items-center space-y-2 cursor-pointer w-fit"
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
                            <span className="font-bold">dark</span>
                        </Label>
                        <RadioGroupItem value='system' id="system" className='sr-only' />
                        <Label
                            htmlFor="system"
                            className="flex flex-col items-center space-y-2 cursor-pointer w-fit"
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
                            <span className="font-bold">system</span>
                        </Label>
                    </RadioGroup>
                    <div className='w-full flex justify-end'>
                        <Button className='mt-4'>Update preferences</Button>
                    </div>
                </CardContent>
            </Card>
        </TabsContent>
    )
}

export default AppearanceTabs