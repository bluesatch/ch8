import React, { useState} from 'react';
import GithubUser from './components/GithubUser';
import UserRepositories from './components/UserRepositories';
import RepositoryReadMe from './components/RepositoryReadMe';
import SearchForm from './components/SearchForm';
// import List from './components/List';
// import { tahoe_peaks } from './App2';
// import { bigList } from './data/bigList'
// import {FixedSizeList } from 'react-window';
import './App.css'



function App() {
  // const renderItem = item => (
  //   <div style={{ display: "flex", padding: 20}}>
  //     <img src={item.avatar} alt={item.name} width={50} />
  //     <p>
  //       {item.name} - {item.email}
  //     </p>
  //   </div>
  // const renderRow = ({ index, style })=> (
  //   <div style={{ ...style, ...{display: "flex" }}}>
  //     <img 
  //       src={bigList[index].avatar}
  //       alt={bigList[index].name}
  //       width={50}
  //     />
  //     <p>
  //       {bigList[index].name} - {bigList[index].email}
  //     </p>
  //   </div>
  // )
  const [login, setLogin] = useState('bluesatch')
  const [repo, setRepo] = useState('2019lessons');
  // const loginInput = useRef(null);

  const handleSearch = login => {
    if (login) return setLogin(login);
    setLogin('');
    setRepo('');
  };

  if (!login) 
    return (
      <SearchForm value={login} onSearch={handleSearch} />
    )

  // const submit = e => {
  //   e.preventDefault();
  //   console.log(e.target[0].value)
  //   let newLogin = login
  //   newLogin =  e.target[0].value;
  //   setLogin(newLogin);
  // }

  
  
  // useEffect(()=> {
    
  // })

  return (
      <div>
        <h1>Satch-Chapter 8</h1>
        {/* <form onSubmit={submit}>
          <input
            ref={loginInput}
            type="text"
            
            required
          />
          <button>Search</button>
        </form> */}
        <SearchForm value={login} onSearch={handleSearch} />
        <GithubUser login={login} />
        {/* {login && <GithubUser login={login} />} */}
        
          <UserRepositories
            login={login}
            repo={repo}
            onSelect={setRepo}
          />
        
    
          <RepositoryReadMe login={login} repo={repo} />
      
        {/* <List 
          data={tahoe_peaks}
          renderEmpty={<p>This list is empty.</p>} 
          renderItem={item => (
            <>
              {item.name} - {item.elevation.toLocaleString()} ft
            </>
          )} 
        /> */}
        {/* <List 
          data={bigList} renderItem={renderItem} />
 */}
        {/* <FixedSizeList 
          height={window.innerHeight}
          width={window.innerWidth - 20}
          itemCount={bigList.length}
          itemSize={50}
        >
          {renderRow}
        </FixedSizeList> */}
      </div>
  );
}

export default App;
