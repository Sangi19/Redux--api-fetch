import React, {  useState } from 'react';
import './App.css';
import Menus from './features/restaurant/menus/Menus';
import { useGetMenusQuery } from './features/restaurant/api/menusApi';
import { Box, Button, TextField } from '@mui/material';
 

function App() {
  const[pageno,setPageNo]=useState(Number(1))
  const [temp, setTemp]=useState('')
  const [searched, setSearched] = useState('');
  const [perpageNo, setPerpageNo] = useState(10)
  
  const {
    data: tabledata = [],
    isLoading,
    isFetching,
    isError,
    error,
  } = useGetMenusQuery({qname: searched, page: pageno, perpage1:perpageNo});

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

  function requestSearch ()  {
    setSearched(temp)

  };

  function handleperpage(val){
    setPerpageNo(val)
  }

  return (
    <div className="App">
      <Box>
        {isLoading && !tabledata.length ? 
        <div>isLoading...</div>
        :
        <div>
          <TextField
            value={temp}
            onChange={ (e)=>setTemp(e.target.value)}
          />
          <Button
          onClick={requestSearch}>
            search
          </Button>
          <Menus tabledata={tabledata} currentPage={currentPage} perpageNo={perpageNo} handleperpage={handleperpage} />
        </div>
        }
      </Box>  
    </div>
  );
}
export default App;
