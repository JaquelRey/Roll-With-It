export async function callApi(queryName, query, args) {
    const endpoint = "https://www.dnd5eapi.co/graphql";
    const headers = {
        "content-type": "application/json",
    };

    const graphqlQuery = {
        "operationName": queryName,
        "query": query,
        "variables": { args }
    };

    const options = {
        "method": "GET",
        "headers": headers,
        "body": JSON.stringify(graphqlQuery)
    };

    const response = await fetch(endpoint, options);
    const data = await response.json();

    console.log(data.data); // data
    console.log(data.errors); //

    return data
}


