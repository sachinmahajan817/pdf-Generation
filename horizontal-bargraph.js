google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Test1', 'marks1', 'marks2', 'marks3', 'marks4'],
          ['1', 79,94,88,78],
          ['2', 72,97,80,70]
        ]);

        var options = {
          chart: {
            title: 'Subject Performance',
            subtitle: 'Class Test-2020',
          }
        };

        var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }