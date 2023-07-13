import { Table } from "react-bootstrap";

const GrafikUser = ({ users }) => {
    return (
      <div>
        <h2 className="mt-4">Daftar User</h2>
        <Table striped bordered hover variant="light" className="table-kisah">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Email</th>
              <th>Tanggal Terdaftar</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.registered}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  };
  
  export default GrafikUser;
  