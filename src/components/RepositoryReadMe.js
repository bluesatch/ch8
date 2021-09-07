import React, {
    useState,
    useEffect,
    useCallback
} from 'react';

import ReactMarkdown from 'react-markdown';

const RepositoryReadMe =({ repo, login })=> {

    // initialize our states
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const [markdown, setMarkdown] = useState();

    // loadReadMe function that will make request for README file 
    const loadReadMe = useCallback(async (login, repo) => {
        setLoading(true);
        const uri = `https://api.github.com/repos/${login}/${repo}/readme`;
        
        const { download_url } = await fetch(uri).then(res => res.json());

        const markdown = await fetch(download_url).then(res => res.text());

        setMarkdown(markdown);
        setLoading(false);
    }, []);

    useEffect(()=> {
        if (!repo || !login) return;
        loadReadMe(login, repo).catch(setError);
    }, [repo]);

    if (error) 
        return <pre>{JSON.stringify(error, null, 2)}</pre>;

    if (loading) return <p>Loading...</p>;

    // imported from 'react-markdown'
    return <ReactMarkdown children={markdown} />;
}

export default RepositoryReadMe;