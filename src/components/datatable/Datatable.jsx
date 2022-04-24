import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ModalBtn from "../modal/ModalBtn";

const Datatable = ({ rows, columns, title }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(rows);
  }, [rows]);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <ModalBtn handleDelete={handleDelete} params={params} />
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <div className="datatableTitle">
        <h1>{title}</h1>
        <Link
          to="/users/new"
          style={{ textDecoration: "none" }}
          className="newUserLink"
        >
          <div className="addButton">Add</div>
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={columns.concat(actionColumn)}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
