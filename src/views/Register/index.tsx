import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function RegisterPage() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  // const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:5005/api/users', {
        email,
        password,
        fullName,
      });
      setSuccess('Đăng ký thành công!');
      setError('');
      // Có thể thực hiện các hành động khác sau khi đăng ký thành công
    } catch (error) {
      setError('Đăng ký thất bại. Vui lòng thử lại.');
      setSuccess('');
    }
  };

  return (
    <div className="login-page">
      <div className="login-form">
        <h3>Đăng ký</h3>
        <div className="form">
          <div className="input-field">
            <label className="label">Email</label>
            <input
              type="text"
              className="input"
              placeholder=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-field">
            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              placeholder=""
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-field">
            <label className="label">Tên đầy đủ</label>
            <input
              type="text"
              className="input"
              placeholder=""
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          {/* <div className="input-field">
            <label className="label">Số điện thoại</label>
            <input
              type="text"
              className="input"
              placeholder=""
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div> */}

          <div className="button" onClick={handleRegister}>
            Đăng ký
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {success && <p style={{ color: 'green' }}>{success}</p>}

          <div className="text-mini">
            <p>
              <Link to={"/login"}> Về trang đăng nhập</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
