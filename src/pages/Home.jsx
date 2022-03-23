import Layout from '../components/Layout';
import TodoItem from '../components/TodoItem';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Layout>
        <div className="h-screen w-screen bg-gradient-to-br from-gray-400 to-gray-600 pt-16 pb-7">
          <div className="w-full h-40 flex justify-center items-center text-zinc-50 cursor-default mb-6">
            <div className="flex flex-col items-end h-full pt-8">
              <span className="font-semibold text-3xl">You</span>
              <span className="font-semibold text-5xl">Have</span>
            </div>
            <div className="h-full flex justify-center items-center px-6">
              <span className="text-9xl">12</span>
            </div>
            <div className="h-full flex flex-col pt-10">
              <span className="font-semibold text-3xl mb-1">Todo('s)</span>
              <span className="font-semibold text-2xl">Remaining</span>
            </div>
          </div>
          <div className="w-full flex flex-col items-center">
            <div className="w-[60vw] flex items-center px-3 border-b-2 border-gray-300 mb-4">
              <span className="text-lg font-semibold text-gray-100 mr-auto">What You're About Todo:</span>
              <button className="py-2 px-4 mb-2 rounded-md bg-zinc-700 text-gray-200 font-bold hover:bg-opacity-70 active:scale-95 transition">
                Add New Todo
              </button>
            </div>
            <div className="w-[60vw] h-56 p-3 flex flex-col bg-zinc-400 bg-opacity-80 rounded-md">
              <TodoItem />
            </div>
            <button
              onClick={() => {
                navigate('login');
              }}
            >
              Login
            </button>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Home;
