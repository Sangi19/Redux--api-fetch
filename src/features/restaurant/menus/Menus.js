import React, { useEffect, useState } from 'react'
import {useGetMenusQuery} from '../api/menusApi'
import { DataGrid } from '@mui/x-data-grid';


const columns= [
    { field: 'name', headerName: 'name', width: 150 },
    { field: 'tagline', headerName: 'tagline', width: 150 },
    { field: 'description', headerName: 'description', width: 150 },


  ];

//   let rows=data.map((item)=> (
//     <tr>
        
// <td></td>
//     </tr>
//   ))

//   let data=[
//     { id: 1, name: 'Hello', tagline: 'World', description:'xxxxxxxxxxx',xy:"we" },
//     { id: 2, name: 'DataGridPro', tagline: 'is Awesome',  description:'yyyyyyyyyyy',xy:"we"  },
//     { id: 3, name: 'MUI', tagline: 'is Amazing', description:'zzzzzzzzzz',xy:"we"  },
//   ]
export default function Menus() {

    const { data,isLoading } = useGetMenusQuery(1);
    
    const [drinks, setDrinks] = useState(data)
    console.log(data)

    useEffect(()=>{
        
    }
    ,[drinks,data])

  return (
    <div>
        <input placeholder='Enter the name to filter'/>
        {isLoading ? (
        <div>Loading....</div>
      ) : (
        <div  style={{ height: 300, width: '100%' }}>
            <DataGrid rows={drinks} columns={columns} />
            <h1>pagination</h1>
        </div>
    )}
    </div>
  )
}
