import { GraphQLClient } from 'graphql-request';

const query = `
    query findRepos($login:String!) {
        user(login:$login) {
            login 
            name 
            location 
            avatar_url: avatarUrl 
            repositories(first:100) {
                totalCount
                nodes {
                    name
                }
            }
        }
    }`;

    const client = new GraphQLClient(
        'https://api.github.com/graphql',
        {
            headers: {
                Authorization: `Bearer  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 `
            }
        }
    );

    client
        .request(query, {login: 'bluesatch'})
        .then(results => JSON.stringify(results, null, 2))
        .then(console.log)
        .catch(console.error);