const { ApolloServer, gql } = require('apollo-server')

const products = require('./dummy-data/dummy-products')
const categories = require('./dummy-data/dummy-categories')


const typeDefs = gql`
    type Query {
        hello: String
        products: [Product!]!
        product(id: ID!): Product
        categories: [Category!]!
        category(id: ID!): Category
    }

    type Product {
        id: ID!
        name: String!
        description: String!
        quantity: Int!
        image: String!
        price: Float!
        onSale: Boolean!
    }

    type Category {
        id: ID!
        name: String!
        products: [Product!]!
    }
`

const resolvers = {
    Query: {
        hello: (parent, args, context) => {
            return 'World'
        },
        products: (parent, args, context) => {
            return products
        },
        product: (parent, args, context) => {
            const {id} = args
           return products.find(product => product.id === id)
           
        },
        categories: (parent, args, context) => {
            return categories
        },
        category: (parent, args, context) => {
            const {id} = args
            // if mongo was here.....
            // .findById(id)
            return categories.find((category) => category.id === id)
          
        }
        
    },
    Category: {
        products: (parent, args, context) => {
           const {id} = parent
           return products.filter((product) => product.categoryId === id)
          
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