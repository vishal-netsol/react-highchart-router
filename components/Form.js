import React from 'react'

var DatePicker = require('react-datepicker');
var moment = require('moment');
import ValidationMixin from '../mixins/ValidationMixin';
import GraphView from './GraphView';

var Form = React.createClass({

  mixins: [ValidationMixin],

  getInitialState: function() {
    return {
      hourly: true,
      error: [],
      data: [{name: "category1", y: 6},{name: "category2", y: 4},{name: "category3", y: 4},{name: "category4", y: 1},{name: "category5", y: 7}]
    };
  },

  componentDidMount: function(){
    document.body.className=''
  },

  handleChange: function (e) {
    var change = {};
    change[e.target.name] = e.target.value;
    this.setState(change);
  },

  submitForm: function(e){
    e.preventDefault()
    if(this.valid(this.state)) {
      console.log('valid')
    }
    else{
      console.log("invalid data");
    }
    
  },

  handleNegotiation: function(e){
    var value = (e.target.value == "hourly" ? true : false)
    this.setState({hourly: value})
  },

  onSelect: function(date){
    this.setState({date: date})
  },
 
  render: function() {
    return (
      <div className="container">
        <div className="row well">
          <form role="form" className="form-horizontal">
            <div className="col-md-6">
              <fieldset>
                <div className="form-group">
                  <label className="col-md-3 control-label">Date</label>  
                  <div className="col-md-9 inputGroupContainer">
                    <div className="input-group">
                      <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                      <DatePicker selected={this.state.date} onChange={this.onSelect} className="form-control" />
                    </div>
                    <span>{this.state.error["invalidDate"]}</span>
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-md-3 control-label">Api Location</label>  
                  <div className="col-md-9 inputGroupContainer">
                    <div className="input-group">
                      <span className="input-group-addon"><i className="glyphicon glyphicon-list"></i></span>
                      <select name="location" className="form-control selectpicker" onChange={this.handleChange}>
                        <option value="" >Select Location</option>
                        <option value="Alabama">Alabama</option>
                        <option value="Alaska">Alaska</option>
                      </select>
                    </div>
                    <span>{this.state.error["invalidLocation"]}</span>
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-md-3 control-label">Exp. Level</label>  
                  <div className="col-md-9 inputGroupContainer">
                    <div className="input-group">
                      <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                      <select name="exp_level" className="form-control selectpicker" onChange={this.handleChange}>
                        <option value="" >Select Level</option>
                        <option value="Junior" >Junior</option>
                        <option value="Senior">Senior</option>
                        <option value="TL">Tech Lead</option>
                      </select>
                    </div>
                    <span>{this.state.error["invalidExpLevel"]}</span>
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-md-3 control-label">Job Label</label>  
                  <div className="col-md-9 inputGroupContainer">
                    <div className="input-group">
                      <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                      <input name="job_label" placeholder="Job Label" className="form-control" type="text" value={this.state.job_label} onChange={this.handleChange} />
                    </div>
                    <span>{this.state.error["invalidJobLabel"]}</span>
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-md-3 control-label">Manager Name</label>  
                  <div className="col-md-9 inputGroupContainer">
                    <div className="input-group">
                      <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                      <input name="mgr_name" placeholder="Manager Name" className="form-control"  type="text" value={this.state.mgr_name} onChange={this.handleChange} />
                    </div>
                    <span>{this.state.error["invalidMgrName"]}</span>
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-md-3 control-label">Supplier</label>  
                  <div className="col-md-9 inputGroupContainer">
                    <div className="input-group">
                      <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                      <input name="supplier_name" placeholder="Enter Supplier Name" className="form-control" type="text" value={this.state.supplier_name} onChange={this.handleChange}/>
                    </div>
                    <span>{this.state.error["invalidSupplier"]}</span>
                  </div>
                </div>
                <div className="form-group">
                  <label className="col-md-3 control-label">Notes</label>  
                  <div className="col-md-9 inputGroupContainer">
                    <div className="input-group">
                      <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                      <textarea className="form-control" name="note" placeholder="Project Description" value={this.state.note} onChange={this.handleChange}></textarea>
                    </div>
                  </div>
                </div>
              </fieldset>
            </div>
            <div className="col-md-6">
              <fieldset>
                <div className="form-group">
                  <label className="col-md-5 control-label">Salary Negotiation</label>  
                  <div className="col-md-7 inputGroupContainer">
                    <div className="col-md-2">
                      <input className="radio" type="radio" value="hourly" name="negotiation" id="hourly" defaultChecked="checked" onChange={this.handleNegotiation}/>
                    </div>
                    <div className="col-md-2">
                      <input className="radio" type="radio" value="annual" name="negotiation" id="annual" onChange={this.handleNegotiation}/>
                    </div>
                  </div>
                </div>

                <div className={this.state.hourly ? 'hourly_div' : 'hide'}>
                  <div className="form-group">
                    <label className="col-md-3 control-label">Submitted Rate</label>  
                    <div className="col-md-9 inputGroupContainer">
                      <div className="input-group">
                        <span className="input-group-addon"><i className="glyphicon glyphicon-usd"></i></span>
                        <input name="submitted_rate" placeholder="Enter Submitted Rate" className="form-control" type="text" value={this.state.submitted_rate} onChange={this.handleChange}/>
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="col-md-3 control-label">Offered Rate</label>  
                    <div className="col-md-9 inputGroupContainer">
                      <div className="input-group">
                        <span className="input-group-addon"><i className="glyphicon glyphicon-usd"></i></span>
                        <input name="offered_rate" placeholder="Enter Offered Rate" className="form-control" type="text" value={this.state.offered_rate} onChange={this.handleChange}/>
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="col-md-3 control-label">Settled Rate</label>  
                    <div className="col-md-9 inputGroupContainer">
                      <div className="input-group">
                        <span className="input-group-addon"><i className="glyphicon glyphicon-usd"></i></span>
                        <input name="settled_rate" placeholder="Enter Settled Rate" className="form-control" type="text" value={this.state.settled_rate} onChange={this.handleChange}/>
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="col-md-3 control-label">Rate</label>  
                    <div className="col-md-9 inputGroupContainer">
                      <div className="input-group">
                        <span className="input-group-addon"><i className="glyphicon glyphicon-usd"></i></span>
                        <input name="rate" placeholder="Enter Rate" className="form-control" type="text" value={this.state.rate} onChange={this.handleChange}/>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={this.state.hourly ? 'hide' : 'annual_div'}>
                  <div className="form-group">
                    <label className="col-md-3 control-label">Submitted Salary</label>  
                    <div className="col-md-9 inputGroupContainer">
                      <div className="input-group">
                        <span className="input-group-addon"><i className="glyphicon glyphicon-usd"></i></span>
                        <input name="submitted_salary" placeholder="Enter Submitted Salary" className="form-control" type="text" value={this.state.submitted_salary} onChange={this.handleChange}/>
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="col-md-3 control-label">Offered Salary</label>  
                    <div className="col-md-9 inputGroupContainer">
                      <div className="input-group">
                        <span className="input-group-addon"><i className="glyphicon glyphicon-usd"></i></span>
                        <input name="offered_salary" placeholder="Enter Offered Salary" className="form-control" type="text" value={this.state.offered_salary} onChange={this.handleChange}/>
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="col-md-3 control-label">Settled Salary</label>  
                    <div className="col-md-9 inputGroupContainer">
                      <div className="input-group">
                        <span className="input-group-addon"><i className="glyphicon glyphicon-usd"></i></span>
                        <input name="settled_salary" placeholder="Enter Settled Rate" className="form-control" type="text" value={this.state.settled_salary} onChange={this.handleChange}/>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label className="col-md-3 control-label">Flat Amount</label>  
                  <div className="col-md-9 inputGroupContainer">
                    <div className="input-group">
                      <span className="input-group-addon"><i className="glyphicon glyphicon-usd"></i></span>
                      <input name="flat_amount" placeholder="0" className="form-control" type="text" value={this.state.flat_amount} onChange={this.handleChange}/>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label className="col-md-3 control-label">Currency</label>  
                  <div className="col-md-9 inputGroupContainer">
                    <span><i className="glyphicon glyphicon-usd"></i>{this.state.saving}</span>
                  </div>
                </div>

                <div className="form-group">
                  <label className="col-md-3 control-label">Currency</label>  
                  <div className="col-md-9 inputGroupContainer">
                    <div className="input-group">
                      <select name="currency" className="form-control selectpicker" onChange={this.handleChange}>
                        <option value=" " >Select Currency</option>
                        <option>USD</option>
                        <option>Rupee</option>
                      </select>
                    </div>
                  </div>
                </div>

              </fieldset>
            </div>
            <button type="submit" name="submit" id="submit" value="Submit" className="btn btn-info pull-right" onClick={this.submitForm}>Save</button>
          </form>

        </div>
      </div>
    );
  },

})

 export default Form
