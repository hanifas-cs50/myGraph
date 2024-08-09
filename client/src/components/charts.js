import { CategoryScale, Chart, Legend, Title, Tooltip, Colors } from "chart.js";
import { Line, Pie, Bar } from "react-chartjs-2";
import 'chart.js/auto';

Chart.register(
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  Colors
)

export const LineGraph = ({ chartData }) => {
  const counts = {}
  chartData.map((d) => d.color).forEach(function (x) { counts[x] = (counts[x] || 0) + 1; })

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true
      },
      colors: {
        forceOverride: true
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
  const data = {
    labels: Object.keys(counts),
    datasets: [
      {
        label: "colors",
        data: Object.values(counts),
        borderColor: "black",
        borderWidth: 2
      }
    ]
  }

  return (
    <Line options={options} data={data} />
  )
}

export const PieGraph = ({ chartData }) => {  
  const counts = {}
  chartData.map((d) => d.flavour).forEach(function (x) { counts[x] = (counts[x] || 0) + 1; })

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true
      },
      colors: {
        forceOverride: true
      }
    }
  }

  const data = {
    labels: Object.keys(counts),
    datasets: [
      {
        data: Object.values(counts),
        borderColor: "black",
        borderWidth: 2,
        hoverOffset: 4
      }
    ]
  }

  return (
    <Pie options={options} data={data} />
  )
}

export const BarGraph = ({ chartData }) => {  
  const counts = {}
  chartData.map((d) => d.eatVeggie).forEach(function (x) { counts[x] = (counts[x] || 0) + 1; })

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true
      },
      colors: {
        forceOverride: true
      }
    }
  }

  const data = {
    labels: Object.keys(counts),
    datasets: [
      {
        label: "Vegetable Eater",
        data: Object.values(counts),
        borderColor: "black",
        borderWidth: 2
      }
    ]
  }

  return (
    <Bar options={options} data={data} />
  )
}