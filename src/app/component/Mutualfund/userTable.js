import moment from "moment";
import React from "react";
import DataTable from "react-data-table-component";
import "react-data-table-component-extensions/dist/index.css";
import DataTableExtensions from "react-data-table-component-extensions";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";

function UserTable({name, columns, data}) {
  const id = useParams();

  const tableData = {
    columns,
    data,
  };

  return (
    <>
      <div className="page-header2" />
      <Card className="custom-card overflow-hidden">
        <Card.Body className="pt-3 pl-3 pr-3">
          <div>
            <h6 className="main-content-label p-2  mb-1">{name}</h6>
          </div>
          <div>
            <DataTableExtensions {...tableData}>
              <DataTable
                columns={columns}
                data={data}
                noHeader
                responsive={true}
                defaultSortField="id"
                defaultSortAsc={false}
                striped={true}
                center={true}
                persistTableHead
                pagination
                highlightOnHover
              />
            </DataTableExtensions>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default UserTable;
