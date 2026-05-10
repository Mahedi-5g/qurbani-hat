import Link from 'next/link'
import FindError from '@/components/FindError'
 
export default function NotFound() {
  return (
    <div>
        <FindError></FindError>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}