const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Test{
        _id: ID
        name: String
    }

    type Query  {
        Test: [Test]
    }
`

module.exports = typeDefs;