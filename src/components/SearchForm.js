import React, { useRef, useState} from 'react';

const SearchForm =()=> {
    const [login, setLogin] = useState('');
    const loginInput = useRef(null);

    const submit = e => {
        e.preventDefault();
        console.log(e.target[0].value)
        let newLogin = login
        newLogin =  e.target[0].value;
        setLogin(newLogin);
    }

    return (
        <form onSubmit={submit}>
            <input
            ref={loginInput}
            type="text"
            required
        />
        <button>Search</button>
        </form>
    )
}

export default SearchForm;