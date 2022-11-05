import React,{useEffect, useState} from 'react'


const rowsArray = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'TargaryenChinnaPallyMutthuswamiBenuGopalAiyyar', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];
  
const DataGrid = () => {

    const [rows, setRows] = useState(rowsArray || []);
    const [loading, setLoading] = useState(false);
    const [currentFilter, setCurrentFilter] = useState({});

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
    filterable:true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
    filterable:true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    filterable:true,
    width: 160,
    valueGetter: (params) =>
      `${params.firstName || ''} ${params.lastName || ''}`,
  },
];

const onSort=(key, sort="asc") => { 
    setLoading(true)
        setRows(rowsArray.sort((a,b)=> sort==="asc" ? (a[key] > b[key] ? 1 : -1) : (a[key] < b[key] ? 1 : -1)))
        // console.log(rows);

        setTimeout(() => {
            setLoading(false)
        }, 1000);
}

const onFilter=(filter) => { 
console.log(filter)
setRows(rowsArray.filter(element=> filter.value.includes(element[filter.field] && element[filter.field]) && element ))
 }
        
useEffect(() => {
    setRows(rowsArray)
    setLoading(false)
}, [])

  return (
    <div>
        <h3>DataGrid</h3>
        <div>
            {/* <button onClick={onSort("firstName")}>Sort</button> */}
            <table>

                <thead>
                    <tr className='border p-1'>
                    { columns.map((column, index)=>{
                        return(
                            <th key={index} className={"border"}> {column.headerName} {column.filterable ? 
                                <>
                                <button onClick={() => { onSort(column.field, "asc") }}>A</button> : : 
                                <button onClick={() => { onSort(column.field, "dec") }}>D</button>
                                <select onChange={(evt) => { setCurrentFilter({field:column.field, operator:evt.target.value}); console.log(currentFilter) }}>
                                    <option >Select Filter</option>
                                    <option value={"contains"}>Contains</option>
                                    <option value={"equals"}>equals</option>
                                    <option value={"is"}>is</option>
                                </select>
                                <input onBlur={(evt) => { onFilter({...currentFilter,value:evt.target.value}) }} />
                                </>
                                
                                :""}</th>
                        )
                    }) }
                    </tr>
                </thead>

                <tbody>
                        { loading ? <tr><td>loading....</td></tr> : 
                            rows.map((row, index)=>{
                                return(
                                    <tr key={index} className='border'>
                                    {
                                        columns.map((col, i)=>{
                                            return(
                                                <td key={i} className={"border p-1"}style={{maxWidth:col.width, wordWrap:"break-word"}} >
                                                    
                                                    { col.valueGetter ? col.valueGetter(row) :
                                                        col.field  && row[col.field]
                                                    }
        
                                                </td>
                                            )
                                        })
                                    }
                                    </tr>
                                )
                            })
                        }

                </tbody>

            </table>
        </div>
    </div>
  )
}

export default DataGrid 


// import * as React from 'react';
// import Box from '@mui/material/Box';
// import { DataGrid } from '@mui/x-data-grid';

// const columns = [
//   { field: 'id', headerName: 'ID', width: 90 },
//   {
//     field: 'firstName',
//     headerName: 'First name',
//     width: 150,
//     editable: true,
//   },
//   {
//     field: 'lastName',
//     headerName: 'Last name',
//     width: 150,
//     editable: true,
//   },
//   {
//     field: 'age',
//     headerName: 'Age',
//     type: 'number',
//     width: 110,
//     editable: true,
//   },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//   },
// ];

// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];

// export default function DataGridDemo() {
//   return (
//     <Box sx={{ height: 400, width: '100%' }}>
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         pageSize={5}
//         rowsPerPageOptions={[5]}
//         checkboxSelection
//         disableSelectionOnClick
//         experimentalFeatures={{ newEditingApi: true }}
//       />
//     </Box>
//   );
// }
