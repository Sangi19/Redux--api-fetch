import React from 'react'
import {useGetMenusQuery} from '../api/menusApi'

export default function Menus() {

// const [drinks, setDrinks] = useState(data)

    const { data } = useGetMenusQuery(1);

    console.log(data)
  return (
    <div>
        <input placeholder='Enter the name to filter'/>
        <div  style={{ height: 300, width: '100%' }}>
            <DataGrid rows={rows} columns={columns} />
            <h1>pagination</h1>
        </div>
    </div>
  )
}
