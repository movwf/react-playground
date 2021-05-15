import { Fragment } from 'react';
import Layout from '../../components/Layout';
import store from '../../stores/redux';
import { Provider } from 'react-redux';
import Redux from '../../components/StateManagers/Redux';
import Main from '../../components/StateManagers/Main';

function index() {
  return (
    <Fragment>
      <Layout>
        <Provider store={store}>
          <div className="border h-full w-full ml-2 flex flex-col">
            <div className="row h-1/4 border-2 my-1 mx-2 rounded-xl bg-white flex flex-col">
              <div className="row text-xl ml-3 mt-2">Value Peek</div>
              <Main />
            </div>
            <div className="row h-1/3 mb-1 mx-1 flex flex-row">
              <div className="col text-xl ml-3 mt-2 mx-2 border-2 rounded-xl bg-white w-1/2 flex flex-col">
                <span className="row mt-2 ml-2">Redux</span>
                <div className="row h-full flex flex-col justify-center items-center">
                  <Redux />
                </div>
              </div>
              <div className="col text-xl ml-3 mt-2 mx-2 border-2 rounded-xl bg-white w-1/2">
                <span className="row mt-2 ml-2">SimpleR</span>
              </div>
            </div>
            <div className="row h-1/3 mx-1 flex flex-row">
              <div className="col text-xl ml-3 mt-2 mx-2 border-2 rounded-xl bg-white w-1/2">
                Redux
              </div>
              <div className="col text-xl ml-3 mt-2 mx-2 border-2 rounded-xl bg-white w-1/2">
                Simpler
              </div>
            </div>
          </div>
        </Provider>
      </Layout>
    </Fragment>
  );
}

export default index;
