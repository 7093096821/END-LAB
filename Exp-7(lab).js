<!DOCTYPE html>
<html>
<head>
    <title>Login & Signup</title>

    <style>
        body {
            font-family: Arial;
            text-align: center;
            margin-top: 80px;
        }

        input {
            padding: 10px;
            margin: 5px;
            width: 220px;
        }

        button {
            padding: 10px 20px;
            margin: 10px;
            cursor: pointer;
        }

        #loginBox {
            display: none;
        }
    </style>
</head>

<body>

    <h2>Signup</h2>

    <input type="text" id="signupUsername" placeholder="Enter Username">
    <br>

    <input type="password" id="signupPassword" placeholder="Enter Password">
    <br>

    <button onclick="signup()">Signup</button>

    <p id="signupMessage"></p>

    <hr>

    <h2>Login</h2>

    <input type="text" id="loginUsername" placeholder="Enter Username">
    <br>

    <input type="password" id="loginPassword" placeholder="Enter Password">
    <br>

    <button onclick="login()">Login</button>

    <p id="loginMessage"></p>


    <script>

        // Signup function
        function signup() {

            let username = document.getElementById("signupUsername").value;
            let password = document.getElementById("signupPassword").value;

            if (username === "" || password === "") {
                document.getElementById("signupMessage").innerHTML =
                    "Please enter username and password";
                return;
            }

            localStorage.setItem("username", username);
            localStorage.setItem("password", password);

            document.getElementById("signupMessage").innerHTML =
                "Signup Successful!";

            console.log("Signup successfully");
        }


        // Login function
        function login() {

            let username = document.getElementById("loginUsername").value;
            let password = document.getElementById("loginPassword").value;

            let storedUsername = localStorage.getItem("username");
            let storedPassword = localStorage.getItem("password");

            if (username === storedUsername && password === storedPassword) {

                document.getElementById("loginMessage").innerHTML =
                    "Login Successful! Welcome " + username;

                console.log("Login successfully");

            } else {

                document.getElementById("loginMessage").innerHTML =
                    "Invalid Username or Password";

                console.log("Invalid login");
            }
        }

    </script>

</body>
</html>
