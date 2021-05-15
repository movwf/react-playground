import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

function PieChart() {
  const values = {
    series: [400, 300, 200],
    chart: {
      type: 'donut'
    },
    options: {
      dataLabels: {
        enabled: false
      },
      labels: ['Desktop', 'Mobile', 'Tablet'],
      colors: ['#bfdbfe', '#2563eb', '#9C27B0'],
      legend: {
        position: 'bottom'
      }
    }
  };

  return (
    <Chart
      className="row mt-3"
      type="donut"
      height="250"
      options={values.options}
      series={values.series}
    />
  );
}

export default PieChart;
