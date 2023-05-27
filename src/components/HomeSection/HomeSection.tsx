import Image from 'next/image'

interface HomeSectionProps {
  title: string
  image: string
  content: string
}

const HomeSection = ({ content, image, title }: HomeSectionProps) => {
  return (
    <section className='sm:flex items-stretch'>
      <Image
        src={image}
        alt={title}
        width={400}
        height={600}
        className='w-full sm:w-[50%]'
      />
      <div className='text-white w-full p-5 sm:flex items-center '>
        <div>
          <h2 className='text-4xl font-bold inline-block mb-5 relative after:content-[""] after:block after:w-[60%] after:absolute after:bottom-[-6px] after:h-[1px] after:bg-white'>
            {title}
          </h2>
          <p>{content}</p>
        </div>
      </div>
    </section>
  )
}

export { HomeSection }
