import { message } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    phone: ""
  });
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${apiUrl}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        
        const data = await response.json();
        console.log(data)
        localStorage.setItem("user", JSON.stringify(data));
        message.success("Giriş başarılı.");
        if(data.role === "admin"){
          window.location.href = "/admin";
        }else{
          navigate("/");
        }
       
      } else {
        message.error("Giriş başarısız.");
      }
      console.log(response);
    } catch (error) {
      console.log("Giriş hatası", error);
    }
  };
  return (
    <div className="account-column">
      <h2>Üye Girişi</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>
            <span>
              E-mail <span className="required">*</span>
            </span>
            <input type="text" name="email" onChange={handleInputChange} />
          </label>
        </div>
        <div>
          <label>
            <span>
             Şifre <span className="required">*</span>
            </span>
            <input
              type="password"
              name="password"
              onChange={handleInputChange}
            />
          </label>
        </div>
        <p className="remember">
          <label>
            <input type="checkbox" />
            <span>Beni Hatırla</span>
          </label>
          <button className="btn btn-secondary btn-lg btn-block">Login</button>
        </p>
        <a href="#" className="form-link">
          Şifremi unuttum
        </a>
      </form>
    </div>
  );
};

export default Login;
