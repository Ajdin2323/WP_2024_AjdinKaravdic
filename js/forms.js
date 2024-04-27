var users = [];

$("#tutorial-form").validate({
  rules: {
    first_name: {
      required: true,
      minlength: 3,
    },
    last_name: {
      required: true,
      minlength: 3,
    },
    password: {
      required: true,
      minlength: 5,
    },
    confirm_password: {
         equalTo: "#password",
    },
  },
  messages: {
    first_name: {
      required: "You have to fill it in!",
      minlength: "Too short !",
    },
    confirm_password: {
        equalTo: "The password and confirm password fields should be the same",
    },
  },
  submitHandler: function (form, event) {
    
  event.preventDefault();
  blockUi("#tutorial-form");
  let data = serializeForm(form);
  console.log(JSON.stringify(users));

  users.push(data);
 

  console.log(users);

   $("#tutorial-form")[0].reset();

  unblockUi("#tutorial-form");

   

  }
});


blockUi = (element) => {
  $(element).block({
    message: '<div class="spinner-border text-primary" role="status"></div>',
    css: {
      backgroundColor: "transparent",
      border: "0",
    },
    overlayCSS: {
      backgroundColor: "#000",
      opacity: 0.25,
    },
  });
};

unblockUi = (element) => {
  $(element).unblock({});
};

serializeForm = (form) => {
  let jsonResult = {};
  $.each($(form).serializeArray(), function () {
    jsonResult[this.name] = this.value;
  });
  return jsonResult;
};