'use client' // Error boundaries must be Client Components

import FindError from '@/components/FindError'
import Link from 'next/link'
import { useEffect } from 'react'

export default function Error({ error }) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <section className="flex items-center h-full p-16 dark:bg-gray-50 dark:text-gray-800">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div className="max-w-md text-center">
                    <FindError></FindError>
                    <Link href="/" rel="noopener noreferrer" className="px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50"> Back to homepage</Link>
                    
                </div>
            </div>
        </section>
    )
}