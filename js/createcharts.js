  var createcharts={};//创建函数对象
  // 首页
      //创建柱状图的函数：
        createcharts.chart1=function(Xdata,Ydata){
        $(function(){
          var chart1= echarts.init(document.getElementById('chart1'));
          var option = {
              //backgroundColor:'rgba(178,220,245,0.4)',//背景色
              color: ['#3da5a1'],
              tooltip : {  //鼠标悬浮显示
                  trigger: 'axis',
                  axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                      type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                  }
              },
              title: {
                  text:"Timing Keep trend",
                  textStyle: {
                      fontSize: 20,
                      fontWeight:'normal',
                      color:'#dadce3',            //标题颜色
                  },
                  x:'center'

              },
              grid: {  //图表的位置
                  left: '6%',
                  right: '12%',
                  bottom: '3%',
                  containLabel: true
              },
              xAxis : [
                  {
                      type : 'category',
                      name : 'x/场景名',
                      data :Xdata,
                      axisTick: {
                          alignWithLabel: true
                      },
                      axisLabel: {
                          show: true,
                          textStyle: {
                              color: '#dadce3'   //x轴字体颜色
                          },
                          // interval:0
                      },
                      axisLine:{
                          lineStyle:{
                              color:'#dadce3',   //x轴线颜色
                          }
                      }
                  }
              ],
              yAxis : [
                  {
                      type : 'value',
                      name : 'y/达标率(%)',
                      axisLabel: {
                          show: true,
                          textStyle: {
                              color: '#dadce3'
                          }
                      },
                      axisLine:{
                          lineStyle:{
                              color:'#dadce3',
                          }
                      }
                  }
              ],
              series : [
                  {
                      name:'达标率',
                      type:'bar',
                      barWidth: '60%',
                      itemStyle:{
                          normal: {

                              color: function (params) {
                                  // build a color map as your need.
                                  var colorList = [
                                      '#05cbcc','#05cbcc','#05cbcc','#05cbcc','#05cbcc','#05cbcc','#05cbcc'
                                  ];
                                  return colorList[params.dataIndex]
                              }
                          }
                      },
                      data:Ydata
                  }
              ]
          };
          chart1.setOption(option);
      });
  };
     //创建横向柱状图的函数：
       createcharts.chart2=function(Xdata,Ydata1,Ydata2){
              $(function(){
                  var chart2= echarts.init(document.getElementById('chart2'));
                  var option = {
                      title: {
                          text:"Monthly NI/NPO sites",
                          textStyle: {
                              fontSize: 20,
                              fontWeight:'normal',
                              color:'#dadce3',            //标题颜色
                          },
                          x:'20%',
                          y:'6px'
                      },
                      grid: {  //图表的位置
                          left: '3%',
                          right: '18%',
                          top:'26%',
                          bottom: '3%',
                          containLabel: true
                      },
                      tooltip : {
                          trigger: 'axis',
                          axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                          }
                      },
                      legend: {  //图例的图表：
                          x:'75%',
                          y:'6px',
                          data:['NI', 'NPO'],
                          textStyle: {
                              color: '#dadce3'   //x轴字体颜色
                          },
                      },
                      calculable : true,
                      xAxis : [
                          {
                              type : 'value',
                              name : 'x/(%)',
                              boundaryGap : [0, 0.01],
                              axisTick: {
                                  alignWithLabel: true
                              },
                              axisLabel: {
                                  show: true,
                                  textStyle: {
                                      color: '#dadce3'   //x轴字体颜色
                                  },
                                  // interval:0
                              },
                              axisLine:{
                                  lineStyle:{
                                      color:'#dadce3',   //x轴线颜色
                                  }
                              }
                          }
                      ],
                      yAxis : [
                          {
                              type : 'category',
                              name : 'y/月份',
                              axisLabel: {
                                  show: true,
                                  textStyle: {
                                      color: '#dadce3'
                                  }
                              },
                              axisLine:{
                                  lineStyle:{
                                      color:'#dadce3',
                                  }
                              },
                              data:Xdata,
                          }
                      ],
                      series : [
                          {
                              name:'NI',
                              type:'bar',
                              data:Ydata1,
                              itemStyle:{
                                  normal: {
                                      color: function (params) {
                                          var colorList = [
                                              '#05cbcc','#05cbcc','#05cbcc','#05cbcc','#05cbcc','#05cbcc'
                                          ];
                                          return colorList[params.dataIndex]
                                      }
                                  }
                              }
                          },
                          {
                              name:'NPO',
                              type:'bar',
                              data:Ydata2,
                              itemStyle:{
                                  normal: {
                                      color: function (params) {
                                          var colorList = [
                                              '#249cf1','#249cf1','#249cf1','#249cf1','#249cf1','#249cf1'
                                          ];
                                          return colorList[params.dataIndex]
                                      }
                                  }
                              }
                          },
                      ]
                  };
                  chart2.setOption(option);
              });
          };
     //创建折线图的函数：
       createcharts.chart3=function(name,Xdata,Ydata1){
          $(function(){
              var chart3= echarts.init(document.getElementById('chart3'));
              var option = {
                  title: {
                      text: 'Monthly Report Submited',
                      textStyle: {
                          fontSize: 20,
                          fontWeight:'normal',
                          color:'#dadce3',            //标题颜色
                      },
                      x:'center',
                      y:'6px'
                  },
                  color:['#a173eb'],
                  grid: {  //图表的位置
                      left: '3%',
                      right: '12%',
                      top:'26%',
                      bottom: '3%',
                      containLabel: true
                  },
                  tooltip : {
                      trigger: 'axis'
                  },

                  xAxis : [
                      {
                          type: 'category',
                          boundaryGap: false,
                          name: 'x/时间',
                          axisLabel: {
                              show: true,
                              textStyle: {
                                  color: '#dadce3'
                              }
                          },
                          axisLine: {
                              lineStyle: {
                                  color: '#dadce3',
                              }
                          },
                          data: Xdata
                      }
                  ],
                  yAxis : [
                      {
                          type : 'value',
                          axisLabel: {
                              show: true,
                              textStyle: {
                                  color: '#dadce3'
                              }
                          },
                          axisLine:{
                              lineStyle:{
                                  color:'#dadce3',
                              }
                          }
                      }
                  ],
                  series : [
                      {
                          name:name,
                          type:'line',
                          stack: '销量',
                          areaStyle: {normal: {}},
                          data:Ydata1
                      }
                  ]
              };
              chart3.setOption(option);
          });
      };
     //map
     //  createcharts.map=function(){
     //      $(function(){
     //          var map = echarts.init(document.getElementById('map'));
     //          var option = {
     //              // title: {
     //              //     text : '上海地图',
     //              //     subtext : '-。-'
     //              // },
     //              // tooltip : {
     //              //     trigger: 'item',
     //              //     formatter: function(a){
     //              //         return a[2];
     //              //     }
     //              // },
     //              // legend: {
     //              //     orient: 'vertical',
     //              //     x:'right',
     //              //     data:['数据名称']
     //              // },
     //              // dataRange: {
     //              //     min: 0,
     //              //     max: 1000,
     //              //     color:['orange','yellow'],
     //              //     text:['高','低'],           // 文本，默认为数值文本
     //              //     calculable : true
     //              // },
     //              grid: {  //图表的位置
     //                  left: '3%',
     //                  right: '18%',
     //                  top:'26%',
     //                  bottom: '3%',
     //                  containLabel: true
     //              },
     //              series : [
     //                  {
     //                      name: '数据名称',
     //                      type: 'map',
     //                      mapType: '上海',
     //                      selectedMode : 'single',
     //                      itemStyle:{
     //                          normal:{label:{show:true}},
     //                          emphasis:{label:{show:true}}
     //                      },
     //                      data:[
     //                          {name: '崇明县',value: Math.round(Math.random()*1000)},
     //                          {name: '宝山区',value: Math.round(Math.random()*1000)},
     //                          {name: '嘉定区',value: Math.round(Math.random()*1000)},
     //                          {name: '青浦区',value: Math.round(Math.random()*1000)},
     //                          {name: '杨浦区',value: Math.round(Math.random()*1000)},
     //                          {name: '虹口区',value: Math.round(Math.random()*1000)},
     //                          {name: '闸北区',value: Math.round(Math.random()*1000)},
     //                          {name: '普陀区',value: Math.round(Math.random()*1000)},
     //                          {name: '静安区',value: Math.round(Math.random()*1000)},
     //                          {name: '黄浦区',value: Math.round(Math.random()*1000)},
     //                          {name: '卢湾区',value: Math.round(Math.random()*1000)},
     //                          {name: '长宁区',value: Math.round(Math.random()*1000)},
     //                          {name: '徐汇区',value: Math.round(Math.random()*1000)},
     //                          {name: '浦东新区',value: Math.round(Math.random()*1000)},
     //                          {name: '松江区',value: Math.round(Math.random()*1000)},
     //                          {name: '闵行区',value: Math.round(Math.random()*1000)},
     //                          {name: '金山区',value: Math.round(Math.random()*1000)},
     //                          {name: '奉贤区',value: Math.round(Math.random()*1000)},
     //                          {name: '南汇区',value: Math.round(Math.random()*1000)}
     //                      ]
     //                  }
     //              ]
     //          };
     //          map.setOption(option);
     //      });
     //  }


  //具体场景：
     //上右 柱状图：
      createcharts.chart4=function(Xdata,Ydata1,Ydata2){
          $(function(){
              var chart4= echarts.init(document.getElementById('chart4'));
              var option = {
                  title: {
                      text:"最近7周比例趋势图",
                      textStyle: {
                          fontSize: 20,
                          fontWeight:'normal',
                          color:'#dadce3',            //标题颜色
                      },
                      x:'3%',
                      y:'6px'
                  },
                  tooltip : {  //鼠标悬浮显示
                      trigger: 'axis',
                      axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                          type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                      }
                  },
                  grid: {  //图表的位置
                      left: '3%',
                      right: '12%',
                      top:'30%',
                      bottom: '3%',
                      containLabel: true
                  },
                  legend: {  //图例的图表：
                      x:'60%',
                      y:'6px',
                      data:['良好栅格(%)', '问题栅格(%)'],
                      textStyle: {
                          color: '#dadce3'   //x轴字体颜色
                      },
                  },
                      toolbox: {
                          show : true,

                      },
                      calculable : true,
                      xAxis : [
                          {   name: 'x/周期',
                              type : 'category',
                              data :Xdata,
                              axisLabel: {
                                  show: true,
                                  textStyle: {
                                      color: '#dadce3'   //x轴字体颜色
                                  },
                                  // interval:0
                              },
                              axisLine:{
                                  lineStyle:{
                                      color:'#dadce3',   //x轴线颜色
                                  }
                              }
                          }
                      ],
                      yAxis : [
                          {
                              type : 'value',
                              axisLabel: {
                                  show: true,
                                  textStyle: {
                                      color: '#dadce3'
                                  }
                              },
                              axisLine:{
                                  lineStyle:{
                                      color:'#dadce3',
                                  }
                              }
                          }
                      ],
                      series : [
                          {
                              name:'良好栅格(%)',
                              type:'bar',
                              data:Ydata1,
                              itemStyle:{
                                  normal: {

                                      color: function (params) {
                                          // build a color map as your need.
                                          var colorList = [
                                              '#05cbcc','#05cbcc','#05cbcc','#05cbcc','#05cbcc','#05cbcc','#05cbcc'
                                          ];
                                          return colorList[params.dataIndex]
                                      }
                                  }
                              }
                          },
                          {
                              name:'问题栅格(%)',
                              type:'bar',
                              data:Ydata2,
                              itemStyle:{
                                  normal: {

                                      color: function (params) {
                                          // build a color map as your need.
                                          var colorList = [
                                              '#249cf1','#249cf1','#249cf1','#249cf1','#249cf1','#249cf1','#249cf1'
                                          ];
                                          return colorList[params.dataIndex]
                                      }
                                  }
                              }
                          }
                      ]
                  };
              chart4.setOption(option);
          });
      };

  // 下右 折线图:
  createcharts.chart5=function(name,Xdata,Ydata1){
      $(function(){
          var chart5= echarts.init(document.getElementById('chart5'));
          var option = {
              title: {
                  text: '4G-KQI近72小时趋势图',
                  textStyle: {
                      fontSize: 20,
                      fontWeight:'normal',
                      color:'#dadce3',            //标题颜色
                  },
                  x:'center',
                  y:'6px'
              },
              color:['#facd78'],
              grid: {  //图表的位置
                  left: '3%',
                  right: '5%',
                  top:'26%',
                  bottom: '3%',
                  containLabel: true
              },
              tooltip : {
                  trigger: 'axis'
              },
              // legend: {  //图例
              //     x:'55%',
              //     y:'10px',
              //     data:[
              //         {
              //             name:'告警',
              //             textStyle:{
              //                 fontSize:12,
              //                 fontWeight:'bolder',
              //                 color:'#249cf1'
              //             },
              //             icon:'stack'
              //         },
              //         {
              //             name:'KPI',
              //             textStyle:{
              //                 fontSize:12,
              //                 fontWeight:'bolder',
              //                 color:'#a173eb'
              //             },
              //             icon:'stack'
              //
              //         },
              //         {
              //             name:'KQI',
              //             textStyle:{
              //                 fontSize:12,
              //                 fontWeight:'bolder',
              //                 color:'#facd78'
              //             },
              //             icon:'stack'
              //         },
              //         {
              //             name:'容量',
              //             textStyle:{
              //                 fontSize:12,
              //                 fontWeight:'bolder',
              //                 color:'#05cbcc'
              //             },
              //             icon:'stack'
              //         }
              //     ]
              // },
              toolbox: {
                  show : true,

              },
              calculable : true,
              xAxis : [
                  {
                      type: 'category',
                      boundaryGap: false,
                      name: 'x/时间',
                      axisLabel: {
                          show: true,
                          textStyle: {
                              color: '#dadce3'
                          }
                      },
                      axisLine: {
                          lineStyle: {
                              color: '#dadce3',
                          }
                      },
                      data: Xdata
                  }
              ],
              yAxis : [
                  {
                      type : 'value',
                      min:3,
                      axisLabel: {
                          show: true,
                          textStyle: {
                              color: '#dadce3'
                          }
                      },
                      axisLine:{
                          lineStyle:{
                              color:'#dadce3',
                          }
                      }
                  }
              ],
              series : [
                  {
                      name:name,
                      type:'line',
                      smooth:true,
                      itemStyle : {
                          normal : {
                              areaStyle: {type: 'default'}
                          }
                      },
                      data:Ydata1
                  }
              ]
          };
          chart5.setOption(option);
      });
  };
    //下左 折线图:
      createcharts.chart6=function(name,Xdata,Ydata1){
          $(function(){
          var chart6= echarts.init(document.getElementById('chart6'));
          var option = {
              title: {
                  text: '3G-KPI近72小时趋势图',
                  textStyle: {
                      fontSize: 20,
                      fontWeight:'normal',
                      color:'#dadce3',            //标题颜色
                  },
                  x:'center',
                  y:'6px'
              },
              color:['#05cbcc'],
              grid: {  //图表的位置
                  left: '3%',
                  right: '12%',
                  top:'26%',
                  bottom: '3%',
                  containLabel: true
              },
              tooltip : {
                  trigger: 'axis'
              },
              toolbox: {
                  show : true,

              },
              calculable : true,
              xAxis : [
                  {
                      type: 'category',
                      boundaryGap: false,
                      name: 'x/时间',
                      axisLabel: {
                          show: true,
                          textStyle: {
                              color: '#dadce3'
                          }
                      },
                      axisLine: {
                          lineStyle: {
                              color: '#dadce3',
                          }
                      },
                      data: Xdata
                  }
              ],
              yAxis : [
                  {
                      type : 'value',
                      axisLabel: {
                          show: true,
                          textStyle: {
                              color: '#dadce3'
                          }
                      },
                      axisLine:{
                          lineStyle:{
                              color:'#dadce3',
                          }
                      }
                  }
              ],
              series : [
                  {
                      name:name,
                      type:'line',
                      smooth:true,
                      itemStyle : {
                          normal : {
                              areaStyle: {type: 'default'}
                          }
                      },
                      data:Ydata1
                  }
              ]
          };
          chart6.setOption(option);
      });
      };
    //下中 折线图：
      createcharts.chart7=function(name,Xdata,Ydata1){
          $(function(){
              var chart7= echarts.init(document.getElementById('chart7'));
              var option = {
                  title: {
                      text: '4G-KPI近72小时趋势图',
                      textStyle: {
                          fontSize: 20,
                          fontWeight:'normal',
                          color:'#dadce3',            //标题颜色
                      },
                      x:'center',
                      y:'6px'
                  },
                  color:['#a173eb'],
                  grid: {  //图表的位置
                      left: '3%',
                      right: '12%',
                      top:'26%',
                      bottom: '3%',
                      containLabel: true
                  },
                  tooltip : {
                      trigger: 'axis'
                  },
                  toolbox: {
                      show : true,

                  },
                  calculable : true,
                  xAxis : [
                      {
                          type: 'category',
                          boundaryGap: false,
                          name: 'x/时间',
                          axisLabel: {
                              show: true,
                              textStyle: {
                                  color: '#dadce3'
                              }
                          },
                          axisLine: {
                              lineStyle: {
                                  color: '#dadce3',
                              }
                          },
                          data: Xdata
                      }
                  ],
                  yAxis : [
                      {
                          type : 'value',
                          axisLabel: {
                              show: true,
                              textStyle: {
                                  color: '#dadce3'
                              }
                          },
                          axisLine:{
                              lineStyle:{
                                  color:'#dadce3',
                              }
                          }
                      }
                  ],
                  series : [
                      {
                          name:name,
                          type:'line',
                          smooth:true,
                          itemStyle : {
                              normal : {
                                  areaStyle: {type: 'default'}
                              }
                          },
                          data:Ydata1
                      }
                  ]
              };
              chart7.setOption(option);
          });
      };

  // ===========index3=====================
  //趋势图：
  createcharts.chart8=function(){
      $(function(){
          var chart8= echarts.init(document.getElementById('chart8'));
          data = [["2000-06-05",116],["2000-06-06",129],["2000-06-07",135],["2000-06-08",86],["2000-06-09",73],["2000-06-10",85],["2000-06-11",73],["2000-06-12",68],["2000-06-13",92],["2000-06-14",130],["2000-06-15",245],["2000-06-16",139],["2000-06-17",115],["2000-06-18",111],["2000-06-19",309],["2000-06-20",206],["2000-06-21",137],["2000-06-22",128],["2000-06-23",85],["2000-06-24",94],["2000-06-25",71],["2000-06-26",106],["2000-06-27",84],["2000-06-28",93],["2000-06-29",85],["2000-06-30",73],["2000-07-01",83],["2000-07-02",125],["2000-07-03",107],["2000-07-04",82],["2000-07-05",44],["2000-07-06",72],["2000-07-07",106],["2000-07-08",107],["2000-07-09",66],["2000-07-10",91],["2000-07-11",92],["2000-07-12",113],["2000-07-13",107],["2000-07-14",131],["2000-07-15",111],["2000-07-16",64],["2000-07-17",69],["2000-07-18",88],["2000-07-19",77],["2000-07-20",83],["2000-07-21",111],["2000-07-22",57],["2000-07-23",55],["2000-07-24",60]];
          var dateList = data.map(function (item) {
              return item[0];
          });
          var valueList = data.map(function (item) {
              return item[1];
          });

          option = {

              // Make gradient line here
              visualMap: [{
                  show: false,
                  type: 'continuous',
                  seriesIndex: 0,
                  min: 0,
                  max: 400
              }],

              title: [{
                  left: 'center',
                  text: '标题',
                  textStyle: {
                      fontSize: 20,
                      fontWeight:'normal',
                      color:'#dadce3',            //标题颜色
                  },
              }],

              grid: {  //图表的位置
                  left: '3%',
                  right: '5%',
                  top:'10%',
                  bottom: '5%',
                  containLabel: true
              },
              tooltip: {
                  trigger: 'axis'
              },
              xAxis: [{
                  data: dateList,
                  axisLabel: {
                      show: true,
                      textStyle: {
                          color: '#dadce3'   //x轴字体颜色
                      },
                      // interval:0
                  },
                  axisLine:{
                      lineStyle:{
                          color:'#dadce3',   //x轴线颜色
                      }
                  }
              }],
              yAxis: [{
                  splitLine: {show: false},
                  axisLabel: {
                      show: true,
                      textStyle: {
                          color: '#dadce3'   //x轴字体颜色
                      },
                      // interval:0
                  },
                  axisLine:{
                      lineStyle:{
                          color:'#dadce3',   //x轴线颜色
                      }
                  }
              }],
              series: [{
                  type: 'line',
                  showSymbol: false,
                  data: valueList
              }]
          };
          chart8.setOption(option);
      });
  };
  //饼图：
  createcharts.chart9=function(){
      $(function(){
          var chart9= echarts.init(document.getElementById('chart9'));
          data9=[
              {value:535, name: 'aa'},
              {value:510, name: 'bb'},
              {value:634, name: 'cc'},
              {value:735, name: 'dd'},
              {value:735, name: 'ee'}
          ];
          option = {
              title: {
                  left: 'center',
                  text: '标题2',
                  textStyle: {
                      fontSize: 20,
                      fontWeight:'normal',
                      color:'#dadce3',            //标题颜色
                  },
              },
              tooltip : {
                  trigger: 'item',
                  formatter: "指标<br/>{b} : {c} ({d}%)"
              },
              series : [
                  {
                      type: 'pie',
                      radius : '75%',
                      center: ['50%', '50%'],
                      selectedMode: 'single',
                      data:data9,
                      itemStyle: {
                          emphasis: {
                              shadowBlur: 10,
                              shadowOffsetX: 0,
                              shadowColor: 'rgba(0, 0, 0, 0.5)'
                          }
                      }
                  }
              ]
          };
          chart9.setOption(option);
      });
  };

