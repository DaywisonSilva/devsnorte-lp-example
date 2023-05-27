import { Poppins } from 'next/font/google'
import Style from './index.module.css'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useRouter } from 'next/router'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600']
})

const DynamicSwup = dynamic(() => import('../components/Swup'), {
  ssr: false
})

export default function Home() {
  const router = useRouter()

  setTimeout(() => {
    router.push('/home')
  }, 3400)

  return (
    <>
      <DynamicSwup />

      <main
        className={`${poppins.className} bg-primary w-full h-screen transition-fade transition-out ${Style.main}`}
        id='swup'
      >
        <h1 className={`${Style.title} text-2xl text-center`}>Conhecimento</h1>
        <h1 className={`${Style.title} text-2xl text-center`}>& Networking</h1>
        <h1 className={`${Style.title} text-2xl text-center`}>
          #WeBuild Together
        </h1>
      </main>
    </>
  )
}
