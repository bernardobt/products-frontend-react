import Table from "react-bootstrap/Table";

const CustomTable = ({ tableColumns, tableRows }) => {
  return (
    <Table hover>
      <thead>
        <tr className="text-capitalize">
          {tableColumns.map((col, index) => {
            return <th key={index}>{col}</th>;
          })}
        </tr>
      </thead>

      <tbody>
        {tableRows.map((row, index) => {
          return (
            <tr key={index} className="text-capitalize">
              <td>{index + 1}</td>
              {Object.entries(row).map((entry, index) => {
                if (
                  entry[0] != "_id" &&
                  entry[0] != "synopsis" &&
                  entry[0] != "createdAt" &&
                  entry[0] != "__v"
                )
                  return <td key={index}>{entry[1]}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default CustomTable;
