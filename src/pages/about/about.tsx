import dynamic from 'next/dynamic'
import Link from 'next/link'

const DynamicSwup = dynamic(() => import('../../components/Swup'), {
  ssr: false
})

const About = () => {
  return (
    <>
      <DynamicSwup />

      <main
        id='swup'
        className={`transition-fade transition-out h-screen w-full bg-purple-950`}
      >
        <Link href='/' className='text-white'>
          Home
        </Link>
      </main>
    </>
  )
}

export default About
