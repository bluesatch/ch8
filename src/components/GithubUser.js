// import React, { useState, useEffect } from 'react';
import React from 'react';
import Fetch from './Fetch';
import UserRepositories from './UserRepositories';
// import custom fetch hook 
// import { useFetch } from '../hooks/useFetch'
// const loadJSON = key => {
//     key && JSON.parse(localStorage.getItem(key));
// }

// const saveJSON =(key, data)=> {
//     localStorage.setItem(key, JSON.stringify(data));
// }



const GithubUser =({ login })=> {
    // const [data, setData] = useState();
    // const [error, setError] = useState();
    // const [loading, setLoading] = useState();
    // const { loading, data, error } = useFetch(
    //     `https://api.github.com/users/${login}`
    // );

    // useEffect(()=> {
    //     if (!data) return;
    //     if (data.login === login) return;
    //     const { name, avatar_url, location } = data;
    //     saveJSON(`user: ${login}`, {
    //         name,
    //         login,
    //         avatar_url,
    //         location
    //     });
    // }, [data, login]);

    // useEffect(()=> {
    //     if (!login) return;
    //     if (data && data.login === login) return;
    //     fetch(`https://api.github.com/users/${login}`)
    //         .then(res => res.json())
    //         .then(setData)
    //         .catch(console.error);
    // }, [data, login]);

    // useEffect(()=> {
    //     if (!login) return;
    //     setLoading(true);
    //     fetch(`https://api.github.com/users/${login}`)
    //         .then(data => data.json())
    //         .then(setData)
    //         .then(()=> setLoading(false))
    //         .catch(setError);
    // }, [login]);


    // if (loading) 
    //     return <h1>loading...</h1>
    // if (error)
    //     return <pre>{JSON.stringify(error, null, 2)}</pre>
    // if (!data) return null; 

    return (
        // <div className="githubUser">
        //     <img
        //         src={data.avatar_url}
        //         alt={data.login}
        //         style={{ width: 200}}
        //     />
        //     <div>
        //         <h1>{data.login}</h1>
        //         {data.name && <p>{data.name}</p>}
        //         {data.location && <p>{data.location}</p>}

        //     </div>
        // </div>

        <Fetch 
            uri={`https://api.github.com/users/${login}`}
            renderSuccess={UserDetails} />
    );


    

    // if (data)
    //     return <pre>{JSON.stringify(data, null, 2)}</pre>
    
    //     return null;
}

const UserDetails =({ data })=> {
    return (
        <div className="githubUser">
            <img 
                src={data.avatar_url} 
                alt={data.login}
                style={{width: 200}} 
                className="githubImg"
            />
            <div className="dataInfo">
                <h1>{data.login}</h1>
                {data.name && <p>{data.name}</p>}
                {data.location && <p>{data.location}</p>}
            </div>
            {/* <UserRepositories 
                login={data.login}
                onSelect={repoName => console.log(`${repoName} selected`)}
            /> */}
        </div>
    )
}


export default GithubUser;