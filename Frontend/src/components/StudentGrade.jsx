import React, {Component} from 'react';
import TableGrade from './TableGrade'
import "./StudentGrade.css"
class StudentGrade extends Component {
    render() {
        var studGrade=[{"subject":"DISI","grade":8,"credits":5}]

        return (
            <div>
              <br/>
              <br/>
              <div className="table-G">
              <TableGrade data={studGrade} />
              </div>
            </div>
        );
    }
}

export default StudentGrade;