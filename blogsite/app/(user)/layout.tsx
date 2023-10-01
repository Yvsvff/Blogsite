
import Header from '@components/Header'
import './../globals.css'
import type { Metadata } from 'next'
import Banner from '@components/Banner'
import dynamic from 'next/dynamic'
import {draftMode} from 'next/headers'
import {token} from './../../sanity/lib/sanity.fetch'




export const metadata: Metadata = {
  
  title: 'Yvsvff Blog',
  description: 'Created by Yusuff Atanda',
 
}


const PreviewProvider = dynamic(() => import('@components/PreviewProvider'))

export default async function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Banner />
        {draftMode().isEnabled ? (
          <PreviewProvider token={token}>{children}</PreviewProvider>
        ) : (
          children
        )}
      </body>
    </html>
  )
}