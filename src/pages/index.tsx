import Link from 'next/link'
import Head from 'next/head'

export default () =>
    <div>
        <Head>
            <title>This page has a Index 🤔</title>
            <meta charSet='utf-8' />
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>
        Hello World.{' '}
        <Link href="/about">
            <a>About</a>
        </Link>
    </div>