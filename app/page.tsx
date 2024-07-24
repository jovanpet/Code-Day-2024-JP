import Image from 'next/image'
import Link from 'next/link'
import CallAPI from './api/user/page'
export default function Home() {
    return (
        <main>
            <h1>Hello World!</h1>
            <CallAPI />
        </main>
    )
}