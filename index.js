const { ApolloServer, gql } = require('apollo-server')
const products = require('./dummy-products')


const typeDefs = gql`
    type Query {
        hello: String
        products: [Product!]!
        product(id: ID!): Product
    }

    type Product {
        name: String!
        description: String!
        quantity: Int!
        image: String!
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
            return products
        },
        product: (parent, args, context) => {
            const {id} = args
           const product = products.find(product => product.id === id)
           return product
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