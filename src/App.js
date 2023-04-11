import React, { useState } from 'react';
import './App.css';
import Menus from './features/restaurant/menus/Menus';
import { useGetMenusQuery } from './features/restaurant/api/menusApi';
import { TextField } from '@mui/material';
// import { skipToken } from "@reduxjs/toolkit/query";

function App() {
  const[pageno,setPageNo]=useState(1)
  const {
    data: tabledata = [],
    isLoading,
    isFetching,
    isError,
    error,
  } = useGetMenusQuery(pageno);
  console.log("d",tabledata)

  if (isLoading || isFetching) {
    return <div>loading...</div>;
  }

  if (isError) {
    console.log({ error });
    return <div>{error.status}</div>;
  }

  // const [searched, setSearched] = useState("");
  // const [dtdata, setdtdata] = useState(data)
  
  function currentPage(page){
    console.log("fn",page)
    setPageNo(page)
    // let res = useGetMenusQuery(pageno);
    // getMenus(page)
  }

  // function requestSearch (e)  {
  //   setSearched(e.target.value)
  //   if(e.target.value===""){
  //     setdtdata(data)
  //   }
  //   else{
  //   const filteredRows = data.filter((row) => {
  //     return row.name.toLowerCase().includes(e.target.value.toLowerCase());
  //   });
  //   setdtdata(filteredRows)
  //   // console.log(data)
  // }
  // };

  return (
    <div className="App">
      {isLoading && !tabledata.length ? <div>isLoading...</div>: 
        
      <div>
        <TextField
          // value={searched}
          // onChange={ (e)=>requestSearch(e)}
        />
        <Menus tabledata={tabledata} currentPage={currentPage} />
      </div>
      }
    </div>
  );
}
export default App;
