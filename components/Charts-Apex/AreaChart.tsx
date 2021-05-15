import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

function AreaChart() {
  const values = {
    series: [
      {
        name: 'Predicted',
        data: [
          48.84, 53.51, 52.93, 49.08, 50.27, 48.37, 44.84, 40.71, 39.68, 41.02,
          35.66, 38.53, 40.69, 38.79, 42.98, 43.55, 40.65, 36.5, 33.79, 29.68,
          29.57, 33.13
        ]
      },
      {
        name: 'Anual',
        data: [
          20.21, 17.49, 16.54, 39.68, 41.02, 35.66, 38.53, 40.69, 38.79, 42.98,
          48.84, 53.51, 52.93, 49.08, 50.27, 48.37, 44.84, 36.5, 33.79, 29.68,
          29.57, 33.13
        ]
      }
    ],
    options: {
      chart: {
        type: 'area',
        stacked: false,
        toolbar: {
          show: false
        }
      },
      grid: { show: false },
      legend: { show: false },
      colors: ['#008FFB', '#00E396', '#CED4DC'],
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      fill: {
        type: 'gradient',
        gradient: {
          opacityFrom: 0.6,
          opacityTo: 0.8
        }
      },
      xaxis: { labels: { show: false } },
      yaxis: { labels: { show: false } }
    }
  };
  return (
    <Chart
      className="row"
      height="225"
      type="area"
      options={values.options}
      series={values.series}
    />
  );
}

export default AreaChart;
