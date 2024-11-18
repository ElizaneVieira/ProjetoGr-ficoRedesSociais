document.addEventListener("DOMContentLoaded", function() {
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Facebook', 'YouTube', 'WhatsApp', 'Instagram', 'TikTok', 'WeChat'],
            datasets: [{
                label: 'Usuários em Bilhões',
                data: [3000, 2500, 2000, 2000, 1200, 1000],
                backgroundColor: [
                    '#ffffff',
                    '#ffffff',
                    '#ffffff',
                    '#ffffff',
                    '#ffffff',
                ],
                borderColor: [
                    '#ffffff',
                    '#ffffff',
                    '#ffffff',
                    '#ffffff',
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});

window.addEventListener('load', () => {
    window.dispatchEvent(new Event('resize'));
});