// Bar Chart (Active Cases by Category)
const barChartCtx = document.getElementById('barChart').getContext('2d');
const barChart = new Chart(barChartCtx, {
  type: 'bar',
  data: {
    labels: ['Critical', 'Moderate', 'Stable'],
    datasets: [{
      label: 'Active Cases',
      data: [5, 10, 3], // Data for the active cases
      backgroundColor: ['#ff6f61', '#f39c12', '#27ae60'],
      borderColor: ['#d35400', '#f39c12', '#2ecc71'],
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

// Line Chart (Treatment Progress Over Time)
const lineChartCtx = document.getElementById('lineChart').getContext('2d');
const lineChart = new Chart(lineChartCtx, {
  type: 'line',
  data: {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [{
      label: 'Treatment Progress',
      data: [10, 20, 30, 40], // Progress of treatments
      fill: false,
      borderColor: '#3498db',
      tension: 0.1
    }]
  },
  options: {
    responsive: true
  }
});

// Pie Chart (Case Treatment Status)
const pieChartCtx = document.getElementById('pieChart').getContext('2d');
const pieChart = new Chart(pieChartCtx, {
  type: 'pie',
  data: {
    labels: ['Pending', 'Completed', 'In Progress'],
    datasets: [{
      data: [10, 5, 3], // Data for case treatment status
      backgroundColor: ['#ff6f61', '#2ecc71', '#f39c12'],
      borderColor: ['#d35400', '#27ae60', '#f39c12'],
      borderWidth: 1
    }]
  }
});
