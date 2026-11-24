function signup()
{
    let username = "admin";
    let password = "admin";
    localStorage.setItem("username", username);
    localStorage.setItem("password",password);
    console.log("Signup successful");
}
  function login(username, password)

  {
    let storedUsername = localStorage.getItem("username");
    let storedpassword = localStorage.getItem("password");
    if (username == storedUsername && password === storedpassword)
    {
        console.log("Login Success");
    }
    else
    {
        console.log("Invalid credentials");
    }
  }
  signup();
  login("admin", "admin");