import dynamic from 'next/dynamic';
const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

function BarChart() {
  const values = {
    options: {
      chart: {
        id: 'basic-bar'
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '25%',
          endingShape: 'rounded'
        }
      },
      dataLabels: {
        enabled: false
      },
      colors: ['#bfdbfe', '#2563eb', '#9C27B0']
    },
    series: [
      {
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      },
      {
        name: 'series-2',
        data: [10, 20, 35, 40, 79, 80, 90, 125]
      }
    ]
  };
  return (
    <Chart
      className="row"
      type="bar"
      height="250"
      options={values.options}
      series={values.series}
    />
  );
}

export default BarChart;
