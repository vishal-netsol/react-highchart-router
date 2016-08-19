import React from 'react';
import ReactDOM from 'react-dom';
var Highcharts = require('highcharts');

var GraphView = React.createClass({

  getInitialState: function() {
    return {
      data: [{name: "category1", y: 6},{name: "category2", y: 4},{name: "category3", y: 4},{name: "category4", y: 1},{name: "category5", y: 7}]
    };
  },

  componentDidMount: function() {
    this.chart = $(ReactDOM.findDOMNode(this.refs.chart)).highcharts({
              chart: {
                  type: 'pie'
              },
              title: 'Analysis of Data',
              yAxis: {
                  title: {
                      text: 'Total percent market share'
                  }
              },
              plotOptions: {
                  pie: {
                      shadow: false
                  }
              },
              tooltip: {
                  formatter: function() {
                      return '<b>'+ this.point.name +'</b>: '+ this.y +' %';
                  }
              },
              series: [{
                  name: 'Data Analysis',
                  data: this.state.data,
                  size: '100%',
                  innerSize: '85%',
                  showInLegend:true,
                  dataLabels: {
                      enabled: true
                  }
              }]
          });
    //this.chart.highcharts().series[0].setData(this.state.data);
  },
  
  // componentWillReceiveProps: function(props) {
  //   this.chart.highcharts().series[0].setData(props.data);
  // },

  render: function(){
    return (
        <div ref='chart'>
        </div>
      );
  }

})

export default GraphView