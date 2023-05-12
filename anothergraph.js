google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['test', 'Marks'],
    ['1',  89],
    ['2',  60],
    ['3',  86],
    ['4',  94]
  ]);
//   var data = google.visualization.arrayToDataTable([
//     ['test', 'Marks'],
//     ['1',  89],
//     ['2',  78],
//     ['3',  70],
//     ['4',  94]
//   ]);

  var options = {
    title: 'Company Performance',
    curveType: 'function',
    legend: { position: 'bottom' }
  };

  var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

  chart.draw(data, options);
}