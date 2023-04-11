import React, { useState } from 'react';
import './App.css';
import Menus from './features/restaurant/menus/Menus';
import { useGetMenusQuery , useFilterPostQuery} from './features/restaurant/api/menusApi';
import { TextField } from '@mui/material';
// import { skipToken } from "@reduxjs/toolkit/query";

function App() {
  const[pageno,setPageNo]=useState(1)

  const [searched, setSearched] = useState('');

  const {
    data: tabledata = [],
    isLoading,
    isFetching,
    isError,
    error,
  } = useGetMenusQuery(searched);

  
  if (isLoading || isFetching) {
    return <div>loading...</div>;
  }

  if (isError) {
    console.log({ error });
    return <div>{error.status}</div>;
  }

  
  function currentPage(page){
    setPageNo(page)
  }

  function requestSearch (e)  {
    setSearched(e.target.value)
  };

  return (
    <div className="App">
      {isLoading && !tabledata.length ? <div>isLoading...</div>: 
        
      <div>
        <TextField
          value={searched}
          onChange={ (e)=>requestSearch(e)}
        />
        <Menus tabledata={tabledata} currentPage={currentPage} />
      </div>
      }
    </div>
  );
}
export default App;
