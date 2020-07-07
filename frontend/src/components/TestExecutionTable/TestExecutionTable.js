import React, {Component}  from 'react';
import TestItems from "../TestItems/TestItems";

class TestExecutionTable extends Component {

  render(){
     const tests = <TestItems items={this.props.items} clicked={this.props.viewItemDetails}/>
    return (
        <div className="row">
            <div className="col-md-12">
              <fieldset>
                <legend>Test execution requests</legend>
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                    <tr>
                      <th>Request ID</th>
                      <th>Requested By</th>
                      <th>Created At</th>
                      <th>Test Env</th>
                      <th>Test Path</th>
                      <th>Status</th>
                      <th>Details</th>
                    </tr>
                    </thead>
                    <tbody>
                    {tests}
                    </tbody>
                  </table>
                </div>
              </fieldset>
            </div>
          </div>
    );
  }
}

export default TestExecutionTable;