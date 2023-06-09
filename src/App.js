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
    <div className="App" >
      <Box
      sx={{
        mx:40,
        my:15,
        minWidth: 400,
        maxWidth:1400,
        bgcolor:'#E7EBF0',
        boxShadow: 1,
        borderRadius: 4,
        p: 2,
      }}
      >
        {isLoading && !tabledata.length ? 
        <div>isLoading...</div>
        :
        <div>
          <TextField
          sx={{mb:2}}
            value={temp}
            onChange={ (e)=>setTemp(e.target.value)}
          />
          <Button
           variant="contained"
          sx={{
            fontWeight: 'bold',
            mx:2,
            my:1
          }}
          onClick={requestSearch}>
            Search
          </Button>
          <Menus tabledata={tabledata} currentPage={currentPage} perpageNo={perpageNo} handleperpage={handleperpage} />
        </div>
        }
      </Box>  
    </div>
  );
}
export default App;
