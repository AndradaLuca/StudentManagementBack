import React, {Component} from 'react';
import {BootstrapTable,
    TableHeaderColumn} from 'react-bootstrap-table';

class TableGrade extends Component {
    render() {
        return (
            <div>
                <BootstrapTable data={this.props.data} className="d-sm-table-row"  >
                    <TableHeaderColumn isKey
                                       dataField='subject'
                                       width="45">
                        Subject
                    </TableHeaderColumn>

                    <TableHeaderColumn dataField='grade'
                                       width="110">
                        Grade
                    </TableHeaderColumn>

                    <TableHeaderColumn dataField='credits'
                                       width="170">
                        Credits
                    </TableHeaderColumn>



                </BootstrapTable>
            </div>
        );
    }
}

export default TableGrade;