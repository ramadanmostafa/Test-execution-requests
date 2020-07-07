import React, {Component}  from 'react';
import Aux from "../../hoc/Aux/Aux";

class TestItemDetails extends Component {


  render(){
      let className = "failed";
     if (this.props.currentItem.status === "SUCCESS") {
         className = 'succeed'
     } else if (this.props.currentItem.status === "RUNNING" || this.props.currentItem.status === "CREATED") {
         className = 'running'
     }
    return (
        <Aux>
            <div className="row">
              <div className="col-md-12">
                <a className="btn btn-primary float-right" href="#" onClick={this.props.backClicked.bind(this)}>Back</a>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <fieldset>
                  <legend>Test details</legend>
                  <div className="table-responsive">
                    <table className="table table-striped">
                      <tbody>
                      <tr>
                        <td className="title">ID</td>
                        <td>{this.props.currentItem.id}</td>
                      </tr>
                      <tr>
                        <td className="title">Requested by</td>
                        <td>{this.props.currentItem.requested_by}</td>
                      </tr>
                      <tr>
                        <td className="title">Env</td>
                        <td>{this.props.currentItem.env_name}</td>
                      </tr>
                      <tr>
                        <td className="title">Path</td>
                        <td>{this.props.currentItem.displayPath}</td>
                      </tr>
                      <tr className={className}>
                        <td className="title">Status</td>
                        <td>{this.props.currentItem.status}</td>
                      </tr>
                      <tr>
                        <td className="title">Logs</td>
                        <td>
                    <pre><code className="python">
                      {this.props.currentItem.logs}
                      </code></pre>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </fieldset>
              </div>
            </div>
        </Aux>
    );
  }
}

export default TestItemDetails;