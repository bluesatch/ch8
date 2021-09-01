import React, { useEffect } from 'react';
import { useIterator } from '../hooks/useIterator';

const RepoMenu =({
    repositories,
    onSelect = f => f
})=> {
    const [{name}, previous, next] = useIterator(repositories);

    useEffect(()=> {
        if (!name) return;
        onSelect(name);
    }, [name]);

    return (
        <div className="buttonDiv">
            <button onClick={previous}>Previous</button>
            <p>{name}</p>
            <button onClick={next}>Next</button>
        </div>
    )
}

export default RepoMenu;