function loginUser(userName, password) {
    if (userName === "" || password === "") {
      alert("Please fill in all fields");
      return;
    }
  
    $.ajax({
      url: "backend/rest/login",
      method: "POST",
      data: {
        userName: userName,
        password: password,
      },
      success: function (response) {
        var token = response.token;
  
        localStorage.setItem("token", token);
  
        $.ajaxSetup({
          headers: {
            Authorization: "Bearer " + token,
          },
        });
  
        alert("Login successful!");
        window.location.href = "#homepage";
        location.reload();
      },
      error: function (error) {
        alert("Login failed. Please try again.", error);
      },
    });
  }
  
  $(document).ready(function () {
    $("#login").submit(function (e) {
      e.preventDefault();
  
      var userName = $("#username").val();
      var password = $("#password").val();
  
      loginUser(userName, password);
    });
  });