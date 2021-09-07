import React, { useEffect } from 'react';
import { useIterator } from '../hooks/useIterator';
// import RepositoryReadMe from './RepositoryReadMe';

const RepoMenu =({
    repositories,
    selected,
    onSelect = f => f
})=> {
    const [{name}, previous, next] = useIterator(
        repositories,
        selected ? repositories.findIndex(repo => repo.name === selected) : null);

    useEffect(()=> {
        if (!name) return;
        onSelect(name);
    }, [name]);

    return (
        <>
            <div className="buttonDiv">
                <button onClick={previous}>Previous</button>
                <p>{name}</p>
                <button onClick={next}>Next</button>
            </div>
            {/* <RepositoryReadMe login={login} repo={name} /> */}
        </>
    )
}

export default RepoMenu;