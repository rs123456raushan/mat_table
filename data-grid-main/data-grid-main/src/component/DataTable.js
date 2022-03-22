import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'

const columns = [
  { field: 'order_id', headerName: 'ID' },
  { field: 'customer', headerName: 'Customer', width: 300 },
  { field: 'address', headerName: 'Address', width: 600 },
  { field: 'date', headerName: 'Date', width: 600 },
  { field: 'status', headerName: 'Status', width: 600 }
]

const DataTable = () => {

  const [tableData, setTableData] = useState([])

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/Ved-X/assignment/orders")
      .then((data) => data.json())
      .then((data) => setTableData(data))

  }, [])

  console.log(tableData)

  return (
    <div style={{ height: 700, width: '100%' }}>
      <DataGrid
        rows={tableData}
        columns={columns}
        pageSize={12}
      />
    </div>
  )
}

export default DataTable
