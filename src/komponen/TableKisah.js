import React from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";

const TableKisah = ({ kisahs, onDelete }) => {
  const handleDelete = (id) => {
    onDelete(id);
  }
  return (
    <div>
      <h2 className="mt-4">Daftar Kisah</h2>
      <Table striped bordered hover variant="light" className="table-kisah">
        <thead>
          <tr>
            <th>No</th>
            <th>Judul</th>
            <th>Sub Judul</th>
            <th>Tanggal</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {kisahs.map((kisahs, index) => (
            <tr key={kisahs.id}>
            <td>{index + 1}</td>
            <td>{kisahs.judul}</td>
            <td>{kisahs.sub_judul}</td>
            <td>{kisahs.uploaded}</td>
            <td>
              <Button onClick={() => handleDelete(kisahs.id)}>hapus</Button>
            </td>
          </tr>
          ))}
          
        </tbody>
      </Table>
    </div>
  );
};

export default TableKisah;
