import { API } from '@/providers/grapqhql-api'
import { gql } from 'graphql-request'

interface HomeSectionApi {
  homeSections: {
    content: string
    title: string
    id: string
    image: {
      url: string
    }
  }[]
}

const query = gql`
  {
    homeSections {
      content
      title
      id
      image {
        url
      }
    }
  }
`

const getHomeSections = async () => {
  const data = await API.request<HomeSectionApi>(query)

  return data
}

export { getHomeSections }
export type { HomeSectionApi }
