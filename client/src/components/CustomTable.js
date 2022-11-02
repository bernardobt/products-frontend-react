import Button from "react-bootstrap/esm/Button";
import Table from "react-bootstrap/Table";

const CustomTable = ({ tableColumns, tableRows }) => {
  return (
    <Table responsive hover>
      <thead>
        <tr className="text-capitalize">
          <th>#</th>
          {tableColumns.map((col, index) => {
            return <th key={index}>{col}</th>;
          })}
          <th></th>
        </tr>
      </thead>
      <tbody>
        {tableRows.map((row, index) => {
          return (
            <tr key={index} className="text-capitalize">
              <td>{index + 1}</td>
              <td>{row[`${tableColumns[0]}`]}</td>
              <td>{row[`${tableColumns[1]}`]}</td>
              <td>{row[`${tableColumns[2]}`]}</td>
              <td>{row[`${tableColumns[3]}`]}</td>
              <td>{row[`${tableColumns[4]}`]}</td>
              <td>
                <Button disabled size="sm">
                  詳報
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default CustomTable;
