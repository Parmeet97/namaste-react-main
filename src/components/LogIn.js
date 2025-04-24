const LogIn = () => {
  const handleLogin = () => {
    console.log("you are logged in");
  };

  return (
    <div className="  justify-center items-center">
      <div>
        <h1>Welcome to FoodVila </h1>
      </div>
      <div>
        <h3>LogIn:</h3>
        <input type="email" placeholder="Enter Your Email"></input>
        <h3>Password:</h3>
        <input type="password" placeholder="Enter Your Password"></input>
      </div>
      <div>
        <a className="text-blue-500">Forgot Password</a>
      </div>

      <div>
        <button
          onClick={handleLogin}
          className="bg-blue-800 text-white text-bold border "
        >
          LogIn
        </button>
      </div>
    </div>
  );
};
export default LogIn;
