import { HomeSection } from '@/components/HomeSection/HomeSection'
import {
  HomeSectionApi,
  getHomeSections
} from '@/services/getHomeSections.service'
import { GetStaticProps } from 'next'

interface Home {
  data: HomeSectionApi
}

const Home = ({ data }: Home) => {
  return (
    <>
      {data.homeSections.map((section) => (
        <HomeSection
          key={section.id}
          title={section.title}
          content={section.content}
          image={section.image.url}
        />
      ))}
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async (context) => {
  const data = await getHomeSections()

  return {
    props: {
      data
    },
    revalidate: 60 // In seconds
  }
}
