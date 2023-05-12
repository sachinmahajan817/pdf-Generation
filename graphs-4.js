google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['test', 'marks'],
    [ 1,      78],
    [ 2,      45],
    [ 3,     90],
    [ 4,      85],
    [ 5,      93.5],
    [ 6,    70]
  ]);

  var options = {
    title: 'Test vs marks',
    legend: 'none',
    crosshair: { trigger: 'both', orientation: 'both' },
    trendlines: {
      0: {
        type: 'polynomial',
        degree: 3,
        visibleInLegend: true,
      }
    }
  };

  var chart = new google.visualization.ScatterChart(document.getElementById('polynomial2_div'));
  chart.draw(data, options);
}