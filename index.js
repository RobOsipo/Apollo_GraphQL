const { ApolloServer, gql } = require('apollo-server')
const products = require('./dummy-products')


const typeDefs = gql`
    type Query {
        hello: String
        products: [Product!]! # scalar type
    }

    type Product {
        name: String!
        description: String!
        quantity: Int!
        price: Float!
        onSale: Boolean!
    }
`

const resolvers = {
    Query: {
        hello: () => {
            return 'whattup'
        },
        products: () => {
            return [{
                name: "Bike",
                description: "Mountain Bike",
                quantity: 20,
                price: 99.99,
                onSale: false
            }]
        }
        
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})





server.listen().then(({ url }) => {
    console.log(`Server is ready at ${url}`)
})