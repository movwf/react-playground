import { useSelector } from 'react-redux';
import { RootState } from '../../stores/redux';

function Main() {
  const count = useSelector((state: RootState) => state.counter.value);
  return (
    <div className="row h-full flex flex-row">
      <div className="col w-1/4 m-4 border rounded-xl bg-gray-100 flex flex-col items-center">
        <span className="text-2xl font-bold mt-2">Redux</span>
        <span className="row mt-1">Count : {count}</span>
      </div>
      <div className="col w-1/4 m-4 border rounded-xl bg-gray-100 flex flex-col items-center">
        <span className="text-2xl font-bold mt-2">SimpleR</span>
        <span className="row mt-1">Count : {count}</span>
      </div>
      <div className="col w-1/4 m-4 border rounded-xl bg-gray-100 flex flex-col items-center">
        <span className="text-2xl font-bold mt-2">Context</span>
        <span className="row mt-1">Count : {count}</span>
      </div>
    </div>
  );
}

export default Main;
