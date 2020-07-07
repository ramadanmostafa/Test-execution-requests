import React, {Component}  from 'react';

class AddNewRequest extends Component {

  render(){

    return (
        <div className="row">
            <div className="col-md-12">
              <fieldset>
                <legend>New request</legend>
                <form>
                  <div className="row">
                    <div className="col-md-3 form-group">
                      <input type="text" className="form-control" name="requester" id="requester"
                             placeholder="Requester" value={this.props.requester} onChange={this.props.requesterChanged.bind(this)}/>
                             <p className="error-message">{this.props.requesterError}</p>
                    </div>
                    <div className="col-md-3 form-group">
                      <select className="form-control" name="env_id" id="env_id" placeholder="Environment ID"
                              value={this.props.env}  onChange={this.props.envChanged.bind(this)}>
                        <option value="" defaultValue></option>
                        {this.props.assets.test_envs.map(item => <option value={item.id} key={item.id}>{item.name}</option>)}
                      </select>
                             <p className="error-message">{this.props.envError}</p>
                    </div>
                    <div className="col-md-4 form-group">
                      <select className="form-control" name="test_path" id="test_path" multiple
                             placeholder="Test Path" value={this.props.testPath}  onChange={this.props.testPathChanged.bind(this)}>
                        <option value="" defaultValue></option>
                        {this.props.assets.available_paths.map(item => <option value={item.id}  key={item.id}>{item.path}</option>)}
                      </select>
                             <p className="error-message">{this.props.testPathError}</p>
                    </div>
                    <div className="col-md-2">
                      <input type="button" className="btn btn-primary" value="Submit" disabled={this.props.testPath === '' || this.props.requester === '' ||this.props.env === ''} onClick={this.props.submitTest}/>
                    </div>
                  </div>
                </form>
              </fieldset>
            </div>
          </div>
    );
  }
}

export default AddNewRequest;