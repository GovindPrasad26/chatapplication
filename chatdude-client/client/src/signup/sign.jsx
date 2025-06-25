// import { useState } from "react";
import "./sign.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const Navigatef = useNavigate();
  const [error, setError] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    gender: "",
    email: "",
    password: "",
    phone: "",
    image: "", // added image field
  });

  const Validate = () => {
    const error = {};
    if (!user.fname.trim()) error.fname = "FIRST NAME REQUIRED";
    if (!user.lname.trim()) error.lname = "LAST NAME REQUIRED";
    if (!user.gender.trim()) error.gender = "GENDER REQUIRED";
    if (!user.email.trim()) {
      error.email = "EMAIL REQUIRED";
    } else if (!/\S+@\S+\.\S+/.test(user.email)) {
      error.email = "INVALID EMAIL FORMAT";
    }
    if (!user.password.trim()) {
      error.password = "PASSWORD REQUIRED";
    } else if (user.password.length < 6) {
      error.password = "Password must be at least 6 characters";
    }
    if (!user.phone.trim()) {
      error.phone = "PHONE NUMBER REQUIRED";
    } else if (!/^\d{10}$/.test(user.phone)) {
      error.phone = "Phone number must be 10 digits";
    }
    return error;
  };

  const getNewUser = () => {
    const errors = Validate();
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    // Set default image if not provided
    const finalUser = {
      ...user,
      image: user.image.trim()
        ? user.image
        : "https://cdn-icons-png.flaticon.com/512/149/149071.png", // default user icon
    };

    axios
      .post("https://cha-rsyf.onrender.com/users/signup", finalUser)
      .then((res) => {
        if (res.data.ok) {
          Navigatef("/login");
        }
        console.log(res);
        setUser({
          fname: "",
          lname: "",
          gender: "",
          email: "",
          password: "",
          phone: "",
          image: "",
        });
        setValidationErrors({});
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      });
  };

  return (
    <div className="main-signup-container">
      <div className="signup-container">
        <h2>Signup Page</h2>
        <form>
          <div>
            <input
              type="text"
              placeholder="First Name"
              value={user.fname}
              onChange={(e) => setUser({ ...user, fname: e.target.value })}
            />
            {validationErrors.fname && <p className="error-text">{validationErrors.fname}</p>}
          </div>

          <div>
            <input
              type="text"
              placeholder="Last Name"
              value={user.lname}
              onChange={(e) => setUser({ ...user, lname: e.target.value })}
            />
            {validationErrors.lname && <p className="error-text">{validationErrors.lname}</p>}
          </div>

          <div style={{ display: "flex", marginLeft: "60px" }}>
            <div>
              <input
                type="radio"
                name="gender"
                value="male"
                checked={user.gender === "male"}
                onChange={(e) => setUser({ ...user, gender: e.target.value })}
              />
              <label>Male</label>
            </div>
            <div>
              <input
                type="radio"
                name="gender"
                value="female"
                checked={user.gender === "female"}
                onChange={(e) => setUser({ ...user, gender: e.target.value })}
              />
              <label>Female</label>
            </div>
            <div>
              <input
                type="radio"
                name="gender"
                value="other"
                checked={user.gender === "other"}
                onChange={(e) => setUser({ ...user, gender: e.target.value })}
              />
              <label>Other</label>
            </div>
          </div>
          {validationErrors.gender && <p className="error-text">{validationErrors.gender}</p>}

          <div>
            <input
              type="email"
              placeholder="Email Id"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            {validationErrors.email && <p className="error-text">{validationErrors.email}</p>}
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            {validationErrors.password && <p className="error-text">{validationErrors.password}</p>}
          </div>

          <div>
            <input
              type="text"
              placeholder="Mobile Number"
              value={user.phone}
              onChange={(e) => setUser({ ...user, phone: e.target.value })}
            />
            {validationErrors.phone && <p className="error-text">{validationErrors.phone}</p>}
          </div>

          <div>
            <input
              type="text"
              placeholder="Image URL"
              value={user.image}
              onChange={(e) => setUser({ ...user, image: e.target.value })}
            />
          </div>

          {user.image && (
            <div style={{ marginTop: "10px" }}>
              <img
                src={user.image}
                alt="Preview"
                style={{ width: "100px", height: "100px", borderRadius: "50%" }}
              />
            </div>
          )}

          <div>
            <input type="button" value="Signup" onClick={getNewUser} />
          </div>
        </form>
      </div>

      {error && (
        <div style={{ textAlign: "center" }}>
          <h2 style={{ color: "red", fontSize: "28px" }}>Failed to Create Account</h2>
        </div>
      )}
    </div>
  );
}

export default SignUp;
