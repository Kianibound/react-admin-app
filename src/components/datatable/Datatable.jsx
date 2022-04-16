import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Datatable = ({ rows, columns, title }) => {
  const [data, setData] = useState([])

  useEffect(() => {
    setData(rows)
  }, [rows])

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id))
  }

  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: (params) => {
        return (
          <div className='cellAction'>
            <Link to='/users/test' style={{ textDecoration: 'none' }}>
              <div className='viewButton'>View</div>
            </Link>
            <div
              className='deleteButton'
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        )
      },
    },
  ]
  return (
    <div className='datatable'>
      <div className='datatableTitle'>
        <h1>{title}</h1>
        <Link
          to='/users/new'
          style={{ textDecoration: 'none' }}
          className='newUserLink'
        >
          <div className='addButton'>Add</div>
        </Link>
      </div>
      <DataGrid
        className='datagrid'
        rows={data}
        columns={columns.concat(actionColumn)}
        pageSize={5}
        rowsPerPageOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  )
}

export default Datatable
