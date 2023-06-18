import { ApolloServer } from 'apollo-server';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { schema } from './schema';
import { context } from './context';

const server = new ApolloServer({
    schema,
    context,
    plugins:[ApolloServerPluginLandingPageGraphQLPlayground()]
});

const port = 5000;

server.listen({port}).then(({url}) => console.log(`🚀  Server ready at ${url}`));