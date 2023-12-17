import {ApolloClient, InMemoryCache} from "@apollo/client";

const apolloClient = new ApolloClient({
	uri: 'http://neural-networks/graphql',
	cache: new InMemoryCache(),
	defaultOptions: {
		query: {fetchPolicy: 'no-cache'},
		watchQuery: {fetchPolicy: 'no-cache'}
	}
});

export default apolloClient;