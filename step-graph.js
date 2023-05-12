google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['test-1',  'marks1', 'marks-2','marks-3','marks-4'],
    ['1', 79,94,88,78],
    ['2', 49,54,48,80]
  ]);

  var options = {
    title: 'Performance Chart',
    vAxis: {title: 'Mathematics '},
    isStacked: true
  };

  var chart = new google.visualization.SteppedAreaChart(document.getElementById('chart_div'));

  chart.draw(data, options);
}