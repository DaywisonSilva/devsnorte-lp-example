import { GraphQLClient } from 'graphql-request'

const $API_URL = process.env.API_URL as string

console.log($API_URL)

const graphQLClient = new GraphQLClient($API_URL)

export { graphQLClient as API }
