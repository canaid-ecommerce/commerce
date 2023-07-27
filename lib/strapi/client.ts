// import { ApolloClient, ApolloLink, HttpLink, InMemoryCache, concat } from '@apollo/client';
// import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc';

// // const GRAPHQL_ENDPOINT =
// //     process.env.GRAPHQL_ENDPOINT || "https://jsonplaceholder.ir/graphql";

// const GRAPHQL_ENDPOINT = 'https://5a03cffb-e055-4896-926e-1fb12368b22a.mock.pstmn.io';
// // const GRAPHQL_ENDPOINT = 'https://webhook.site/08ca8eba-32e1-4bb0-8397-fa4ffa26d778'

// const httpLink = new HttpLink({ uri: GRAPHQL_ENDPOINT });

// const authMiddleware = new ApolloLink((operation, forward) => {
//   operation.setContext(({ headers = {} }) => ({
//     headers: {
//       ...headers,
//       'x-mock-match-request-body': true
//       // "content-type": "application/json"
//       // authorization: 'token',
//     }
//   }));

//   return forward(operation);
// });

// export const { getClient } = registerApolloClient(() => {
//   return new ApolloClient({
//     cache: new InMemoryCache({
//       addTypename: false
//     }),
//     link: concat(authMiddleware, httpLink)
//   });
// });
