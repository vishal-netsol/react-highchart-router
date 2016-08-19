var ValidationMixin = {

  valid: function(state) {
    var error = []
    var i = 0
    if(!state.date){
      error["invalidDate"] = "* Required"
      i++
    }
    else if(!state.location){
      error["invalidLocation"] = "* Required"
      i++
    }
    else if(!state.exp_level){
      error["invalidExpLevel"] = "* Required"
      i++
    }
    else if(!state.job_label){
      error["invalidJobLabel"] = "* Required"
      i++
    }
    else if(!state.mgr_name){
      error["invalidMgrName"] = "* Required"
      i++
    }
    else if(!state.supplier_name){
      error["invalidSupplier"] = "* Required"
      i++
    }
    this.setState({error: error})
    if(i == 0){
      return true
    }
  },
};

export default ValidationMixin