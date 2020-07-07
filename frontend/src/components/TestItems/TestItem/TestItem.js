import React, {Component}  from 'react';

class TestItem extends Component {

  render(){
     let className = "failed";
     if (this.props.status === "SUCCESS") {
         className = 'succeed'
     } else if (this.props.status === "RUNNING" || this.props.status === "CREATED") {
         className = 'running'
     }
    return (
        <tr className={className}>
            <td>{this.props.ID}</td>
            <td>{this.props.requestedBy}</td>
            <td>{this.props.createdAt}</td>
            <td>{this.props.env_name}</td>
            <td>{this.props.path}</td>
            <td>{this.props.status}</td>
            <td><a href="#" onClick={this.props.click}>View Details</a></td>
        </tr>
    );
  }
}

export default TestItem;