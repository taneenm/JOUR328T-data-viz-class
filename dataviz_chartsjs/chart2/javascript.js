var ctx = document.getElementById('myChart').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'scatter',
          data: {
            datasets: [{
                data: [
                  {x: 171, y: 6},
                ],
                label: 'Blinding Lights',
                borderColor: 'rgba(205, 7, 30)',
                backgroundColor: 'rgba(205, 7, 30, 0.1)',
                borderWidth:2.5,

              }, {
                data: [
                  {x: 95, y: 5},
                ],
                label: 'Watermelon Sugar',
                borderColor: 'rgba(255, 119, 34)',
                backgroundColor: 'rgba(255, 119, 34, 0.1)',
                borderWidth:2.5,

              }, {
                data: [
                {x: 91, y: 4},
                ],
                label: 'Mood',
                borderColor: 'rgba(10, 49, 97)',
                backgroundColor:'rgba(10, 49, 97, 0.1)',
                borderWidth:2.5,

              }, {
                data: [
                {x: 110, y: 3},
                ],
                label: 'Someone You Loved',
                borderColor: 'rgba(255, 127, 127)',
                backgroundColor:'rgba(255, 127, 127, 0.1)',
                borderWidth:2.5,

              }, {
                data: [
                {x: 95, y: 2},
                ],
                label: 'Perfect',
                borderColor: 'rgba(0, 156, 59)',
                backgroundColor:'rgba(0, 156, 59, 0.1)',
                borderWidth:2.5,

              }, {
                data: [
                {x: 125, y: 13},
                ],
                label: 'Believer',
                borderColor: 'rgba(42, 154, 246)',
                backgroundColor:'rgba(42, 154, 246, 0.1)',
                borderWidth:2.5,

              }, {
                data: [
                {x: 115, y: 3},
                ],
                label: 'lovely',
                borderColor: 'rgba(1, 65, 28)',
                backgroundColor:'rgba(1, 65, 28, 0.1)',
                borderWidth:2.5,

              }, {
                data: [
                {x: 120, y: 4},
                ],
                label: 'Circles',
                borderColor: 'rgba(89, 125, 53)',
                backgroundColor:'rgba(89, 125, 53, 0.1)',
                borderWidth:2.5,

              }, {
                data: [
                {x: 96, y: 8},
                ],
                label: 'Shape of You',
                borderColor: 'rgba(129, 19, 49)',
                backgroundColor:'rgba(129, 19, 49, 0.1)',
                borderWidth:2.5,

              }, {
                data: [
                {x: 91, y: 6},
                ],
                label: 'Memories',
                borderColor: 'rgba(169, 154, 181)',
                backgroundColor:'rgba(169, 154, 181, 0.1)',
                borderWidth:2.5,

              }, {
                data: [
                {x: 95, y: 3},
                ],
                label: 'Closer',
                borderColor: 'rgba(171, 162, 109)',
                backgroundColor:'rgba(171, 162, 109, 0.1)',
                borderWidth:2.5,

              }, {
                data: [
                {x: 135, y: 38},
                ],
                label: 'bad guy',
                borderColor: 'rgba(74, 38, 53)',
                backgroundColor:'rgba(74, 38, 53, 0.1)',
                borderWidth:2.5,

              }, {
                data: [
                {x: 85, y: 6},
                ],
                label: 'Say You Won\'t Let Go',
                borderColor: 'rgba(3, 252, 144)',
                backgroundColor:'rgba(3, 252, 144, 0.1)',
                borderWidth:2.5,

              }, {
                data: [
                {x: 84, y: 20},
                ],
                label: 'Lucid Dreams',
                borderColor: 'rgba(252, 94, 3)',
                backgroundColor:'rgba(252, 94, 3, 0.1)',
                borderWidth:2.5,

              },  {
                data: [
                {x: 120, y: 3},
                ],
                label: 'All of Me',
                borderColor: 'rgba(210, 252, 3)',
                backgroundColor:'rgba(210, 252, 3, 0.1)',
                borderWidth:2.5,

              }, {
                data: [
                {x: 140, y: 33},
                ],
                label: '7 rings',
                borderColor: 'rgba(252, 3, 227)',
                backgroundColor:'rgba(252, 3, 227, 0.1)',
                borderWidth:2.5,

              },  {
                data: [
                {x: 134, y: 24},
                ],
                label: 'Jocelyn Flores',
                borderColor: 'rgba(136, 3, 252)',
                backgroundColor:'rgba(136, 3, 252, 0.1)',
                borderWidth:2.5,

              }, {
                data: [
                {x: 130, y: 5},
                ],
                label: 'goosebumps',
                borderColor: 'rgba(235, 52, 113)',
                backgroundColor:'rgba(235, 52, 113, 0.1)',
                borderWidth:2.5,

              }, {
                data: [
                {x: 124, y: 5},
                ],
                label: 'Wake Me Up',
                borderColor: 'rgba(252, 186, 3)',
                backgroundColor:'rgba(252, 186, 3, 0.1)',
                borderWidth:2.5,

              }, {
                data: [
                {x: 90, y: 16},
                ],
                label: 'ROCKSTAR',
                borderColor: 'rgba(129, 168, 50)',
                backgroundColor:'rgba(129, 168, 50, 0.1)',
                borderWidth:2.5,

              },

            ]
          },
          options: {
          responsive: true,
          plugins: {
              title: {
                  display: true,
                  text: 'Danceability and speechiness of the top 20 Spotify songs',
                  font: {
                      size: 20
                  }
              },
              subtitle: {
                  display: true,
                  text: ['Over half of the songs have a speechiness rating of below 10. Additionally, most of the songs have a danceability between 85 and 130.', 'The song with the highest danceability is Blinding Lights, with a rating of 171. The song with the highest speechiness is bad guy, with a rating of 38.'],
                  font: {
                      size: 15
                  }
              },
          },
            scales: {
              y: {
                title: {
                  display: true,
                  text: 'Speechiness',
                  beginAtZero: true
                }
              },
              x: {
                  title: {
                      display: true,
                      text: 'Danceability'
                  }
              }
            }
          }
        });
