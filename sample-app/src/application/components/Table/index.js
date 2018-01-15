import React from "react"
import PropTypes from "prop-types"
import { Table } from "react-bootstrap"

const TableComponent = ({ columns, children, sort }) => (
  <Table responsive hover striped condensed>
    <thead>
      <tr>
        {columns.map((col, i) => <th onClick={() => sort(col)} key={i}>{col}</th>)}
      </tr>
    </thead>
    <tbody>
      {children}
    </tbody>
  </Table>
)

TableComponent.propTypes = {
  columns: PropTypes.array.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.func
  ]).isRequired
}

export default TableComponent
