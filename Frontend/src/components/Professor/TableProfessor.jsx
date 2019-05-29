import React, {Component} from 'react';
import {BootstrapTable,
    TableHeaderColumn} from 'react-bootstrap-table';

class TableProfessor extends Component {
    render() {
        return (
            <div>
                <BootstrapTable data={this.props.data} className="d-sm-table-row"  >
                    <TableHeaderColumn isKey
                                       dataField='email'
                                       width="220">
                        Email
                    </TableHeaderColumn>

                    <TableHeaderColumn dataField='name'
                                       width="210">
                        Materie
                    </TableHeaderColumn>

                    <TableHeaderColumn dataField='grade'
                                       >
                        Nota
                    </TableHeaderColumn>





                </BootstrapTable>
            </div>
        );
    }
}

export default TableProfessor;