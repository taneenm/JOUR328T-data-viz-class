var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'scatter',
          data: {
            datasets: [{
                data: [
                  {x: 71.5, y: 3678},
                ],
                label: 'China',
                borderColor: 'rgba(205, 7, 30)',
                backgroundColor: 'rgba(205, 7, 30, 0.1)',
                borderWidth:2.5,

              }, {
                data: [
                  {x: 61.1, y: 2548},
                ],
                label: 'India',
                borderColor: 'rgba(255, 119, 34)',
                backgroundColor: 'rgba(255, 119, 34, 0.1)',
                borderWidth:2.5,

              }, {
                data: [
                {x: 77.1, y: 45986},
                ],
                label: 'United States',
                borderColor: 'rgba(10, 49, 97)',
                backgroundColor:'rgba(10, 49, 97, 0.1)',
                borderWidth:2.5,

              }, {
                data: [
                {x: 68.3, y: 5878},
                ],
                label: 'Indonesia',
                borderColor: 'rgba(255, 127, 127)',
                backgroundColor:'rgba(255, 127, 127, 0.1)',
                borderWidth:2.5,

              }, {
                data: [
                {x: 71.9, y: 11461},
                ],
                label: 'Brazil',
                borderColor: 'rgba(0, 156, 59)',
                backgroundColor:'rgba(0, 156, 59, 0.1)',
                borderWidth:2.5,

              }, {
                data: [
                {x: 65.4, y: 13173},
                ],
                label: 'Russia',
                borderColor: 'rgba(42, 154, 246)',
                backgroundColor:'rgba(42, 154, 246, 0.1)',
                borderWidth:2.5,

              }, {
                data: [
                {x: 62.6, y: 3366},
                ],
                label: 'Pakistan',
                borderColor: 'rgba(1, 65, 28)',
                backgroundColor:'rgba(1, 65, 28, 0.1)',
                borderWidth:2.5,

              }, {
                data: [
                {x: 65.8, y: 1632},
                ],
                label: 'Bangladesh',
                borderColor: 'rgba(89, 125, 53)',
                backgroundColor:'rgba(89, 125, 53, 0.1)',
                borderWidth:2.5,

              }, {
                data: [
                {x: 81.1, y: 32193},
                ],
                label: 'Japan',
                borderColor: 'rgba(129, 19, 49)',
                backgroundColor:'rgba(129, 19, 49, 0.1)',
                borderWidth:2.5,

              }
            ]
          },
          options: {
          responsive: true,
          plugins: {
              title: {
                  display: true,
                  text: 'Life expectancy compared to GDP in countries with the highest populations',
                  font: {
                      size: 18
                  }
              },
              subtitle: {
                  display: true,
                  text: 'The United States has the highet GDP, among the top ten countries with the largest populations. Japan has the highest life expectancy, but comes in second in average GDP.'
              }
          },
            scales: {
              y: {
                title: {
                  display: true,
                  text: 'GDP per capita'
                }
              },
              x: {
                  title: {
                      display: true,
                      text: 'Life expectancy'
                  }
              }
            }
          }
        });
