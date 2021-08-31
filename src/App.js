import React from 'react';
// import GithubUser from './components/GithubUser';
import List from './components/List';
// import { tahoe_peaks } from './App2';
import { bigList } from './data/bigList'
import {FixedSizeList } from 'react-window';
import './App.css'



function App() {
  // const renderItem = item => (
  //   <div style={{ display: "flex", padding: 20}}>
  //     <img src={item.avatar} alt={item.name} width={50} />
  //     <p>
  //       {item.name} - {item.email}
  //     </p>
  //   </div>
  const renderRow = ({ index, style })=> (
    <div style={{ ...style, ...{display: "flex" }}}>
      <img 
        src={bigList[index].avatar}
        alt={bigList[index].name}
        width={50}
      />
      <p>
        {bigList[index].name} - {bigList[index].email}
      </p>
    </div>
  )
  
  return (
      <div>
        <h1>Satch-Chapter 8</h1>
        {/* <GithubUser login="bluesatch" /> */}
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
        <FixedSizeList 
          height={window.innerHeight}
          width={window.innerWidth - 20}
          itemCount={bigList.length}
          itemSize={50}
        >
          {renderRow}
        </FixedSizeList>
      </div>
  );
}

export default App;
