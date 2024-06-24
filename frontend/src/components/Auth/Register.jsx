import { useState } from "react";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
  });
  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${apiUrl}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        // const { password, ...rest } = data;
        
        localStorage.setItem("user", JSON.stringify(data));
        message.success("Kayıt başarılı.");
        navigate("/");
      } else {
        message.error("Kayıt başarısız.");
      }
    } catch (error) {
      console.log("Giriş hatası:", error);
    }
  };

  return (
    <div className="account-column">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
      <div>
          <label>
            <span>
              İsim<span className="required">*</span>
            </span>
            <input
              type="text"
              onChange={handleInputChange}
              name="firstName"
              required
            />
          </label>
        </div>
        <div>
          <label>
            <span>
              Soy İsim <span className="required">*</span>
            </span>
            <input
              type="text"
              onChange={handleInputChange}
              name="lastName"
              required
            />
          </label>
        </div>
        <div>
          <label>
            <span>
              Email  <span className="required">*</span>
            </span>
            <input type="email" onChange={handleInputChange} name="email" required />
          </label>
        </div>
        <div>
          <label>
            <span>
              Telefon Numarası <span className="required">*</span>
            </span>
            <input
              type="text"
              onChange={handleInputChange}
              name="phoneNumber"
              required
            />
          </label>
        </div>
        <div>
          <label>
            <span>
              Şifre <span className="required">*</span>
            </span>
            <input
              type="password"
              onChange={handleInputChange}
              name="password"
              required
            />
          </label>
        </div>
        <div className="privacy-policy-text remember">
          <p>
          Kişisel verileriniz deneyiminizi desteklemek için kullanılacaktır. <a href="#">Gizlilik politikasına erişmek için tıklayınız.</a>
          </p>
          <button className="btn btn-sm">Kayıt Ol</button>
        </div>
      </form>
    </div>
  );
};

export default Register;