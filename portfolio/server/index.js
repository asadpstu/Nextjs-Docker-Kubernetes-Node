const express = require('express')
const next = require('next')

//First task before starting graphQl --Start
const graphqlHTTP = require('express-graphql');
const { buildSchema} = require('graphql');  
//First task before starting graphQl --End

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  // Defining a schema using graphql schema language
  const schema = buildSchema(`
    type Query {
      hello : String
    } 
  `);

  // root will give a resolver for each endpoint
  const root = {
    hello: () =>{
      return  'Hello World'
    }
  }

  server.use('/graphql',graphqlHTTP({
    schema : schema,
    rootValue : root,
    graphiql : true
  }))

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})