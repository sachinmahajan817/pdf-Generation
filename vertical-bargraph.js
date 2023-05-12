
  google.charts.load('current', {'packages':['bar']});
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    var data = google.visualization.arrayToDataTable([
    ['Test1', 'marks1', 'marks2', 'marks3', 'marks4'],
      ['1', 79,94,88,78],
      ['2', 99,94,88,70]
    ]);

    var options = {
      chart: {
        title: 'Performance chart',
        subtitle: '2020-2021',
      },
      bars: 'horizontal' // Required for Material Bar Charts.
    };

    var chart = new google.charts.Bar(document.getElementById('barchart_material'));

    chart.draw(data, google.charts.Bar.convertOptions(options));
  }