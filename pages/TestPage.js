import React from 'react'

const TestPage = () => {

    const ELEMENT_DATA= [
        {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
        {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
        {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
        {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
        {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
        {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
        {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
        {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
        {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
        {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
      ];

    return (
    <div>TestPage

<div className="example-container mat-elevation-z8">
  <table className='table '>
      <thead className='mat-table-sticky'>
        <tr className='mat-column-position'>
            <th style={{background:"#fff",position: "sticky", left: 0, zIndex:50, resize: "horizontal" }} className=''>{"Sr"}</th>
            <th className=''>{"Name"}</th>
            <th className=''>{"Weight"}</th>
            <th className=''>{"Symbol"}</th>
            <th className=''>{"Srl"}</th>
            <th style={{background:"#fff",position: "sticky", right: 0, zIndex:50 }} className=''>{"Wt"}</th>

        </tr>
      </thead>
      <tbody className='mat-table-sticky'>
        {
            ELEMENT_DATA.map((item, i)=>{
                return(
                    <tr className=''>
                        <td style={{background:"#fff",position: "sticky", left: 0, zIndex:50, resize: "horizontal" }} className=''> {item.position} </td>
                        <td className=''> {item.name} </td>
                        <td className=''> {item.weight} </td>
                        <td className=''> {item.symbol} </td>
                        <td className=''> {item.position} </td>
                        <td style={{background:"#fff",position: "sticky", right: 0, zIndex:50 }} className=''> {item.weight} </td>

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

export default TestPage


