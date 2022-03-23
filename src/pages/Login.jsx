import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const InputField = ({ label, type, setState }) => {
  return (
    <div className="w-full h-20 flex flex-col px-10 mb-6">
      <label htmlFor="username" className="font-bold text-lg mb-2 text-zinc-800 cursor-pointer">
        {label}
      </label>
      <input
        type={type}
        id={label}
        onChange={(e) => setState(e.target.value)}
        className="border-2 border-zinc-600 h-12 rounded-md pl-2 focus:border-4 focus:border-cyan-900 focus:outline-none cursor-pointer"
      />
    </div>
  );
};

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const userGlobal = useSelector((state) => state.user);

  useEffect(() => {
    if (userGlobal.username) {
      navigate('/', { replace: true });
    }
  }, []);

  return (
    <div className="w-screen h-screen flex justify-center bg-gradient-to-b from-white to-gray-400">
      <div className="w-1/3 h-full bg-white flex flex-col items-center pt-20">
        <div className="w-full h-12 flex justify-center items-center mb-8">
          <span className="text-[2rem] font-bold">Login</span>
        </div>
        <InputField label="Username" type="text" setState={setUsername} />
        <InputField label="Password" type="password" setState={setPassword} />
        <button
          onClick={() => {
            dispatch({
              type: 'USER_LOGIN',
              payload: username,
            });
            navigate('/', { replace: true });
          }}
          className="h-10 w-5/6 bg-slate-800 font-semibold text-white rounded transition active:scale-95"
        >
          Login
        </button>
        <span
          className="font-bold text-slate-800 mt-4 hover:text-slate-500 transition cursor-pointer"
          onClick={() => {
            navigate('/');
          }}
        >
          Back to Home
        </span>
      </div>
    </div>
  );
};

export default Login;
