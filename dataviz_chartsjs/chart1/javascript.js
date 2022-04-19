var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Dance pop', 'Pop', 'Dallas-Fort Worth Rap', 'Modern Rock', 'Canadian Pop', 'Electropop', 'Canadian Contemporary', 'Melodic Rap', 'Rap'],
        datasets: [{
            label: 'Genre Count',
            data: [28, 11, 7, 6, 6, 4, 4, 3, 2],
            backgroundColor: [
                '#1DB954'
            ]
        },
    ]
    },
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: '10 Most common genres of Spotify\'s top 100 songs',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: ['Dance pop is the most common genre in the top 100 songs, with 28 songs. It is over two times more prevalent than the next genre, pop.','After pop, the frequency of the genres decrease and stay within a range of two to seven songs per genre.']
            }
        },
        scales: {
            y: {
                beginAtZero: true
            },
            x: [{
                ticks: {
                    maxRotation: 90,
                    minRotation: 90
                }
            }]
        },
    },
});
