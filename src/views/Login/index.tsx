import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {updateUser} from "../../store/user"
function LoginPage() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const navigate = useNavigate()

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5005/api/auth/login', {
        email,
        password,
      });

      const user = response.data.data;

      // Lưu thông tin người dùng vào localStorage
      localStorage.setItem('user', JSON.stringify(user));

      // luu len store
      dispatch(updateUser(user))

      navigate('/');
      // Gọi callback khi đăng nhập thành công
      // onLoginSuccess(user);

    } catch (error: any) {
      console.log(error.response.data.error);
      setError(error.response.data.error)
    }
  };


  return (
    <div className="login-page">
      <div className="login-form">
        <h3>Đăng nhập</h3>
        <div className="form">
          <div className="input-field">
            <label className="label">Email</label>
            <input type="text" className="input" placeholder="" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className="input-field">
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="" value={password}  onChange={(e) => setPassword(e.target.value)}/>
          </div>

          <div className="button" onClick={handleLogin}>
            Đăng nhập
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}

          <div className="text-mini">
            <p>Bạn có tài khoản chưa? 
              <Link to={"/register"}> Đăng ký ngay</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
