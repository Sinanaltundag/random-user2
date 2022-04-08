import styled from "styled-components";

const StyledTable = styled.table`
  text-align: center;
  width: 100%;
  border-collapse: separate;
  border-spacing: 0.5rem;

  th {
    background-color: #fec861;
    color: purple;
    padding: 0.5rem;
  }
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const Table = ({ tableRows }) => {
  return (
    <StyledTable>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {tableRows.map((row, i) => (
          <tr key={i}>
            <td>{row.name}</td>
            <td>{row.email}</td>
            <td>{row.phone}</td>
            <td>{row.age}</td>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};

export default Table;
