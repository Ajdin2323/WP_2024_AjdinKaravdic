<?php

Flight::route('GET /users', function(){
    Flight::json(Flight::userService()->get());
});

Flight::route('POST /register', function(){
    $data = Flight::request()->data->getData();
    $user = [
        'userName' => $data['userName'],
        'name' => $data['name'],
        'password' => $data['password']
    ];
  
    Flight::userService()->add($user);
  
    Flight::json(['message' => 'Registration successful']);
  });

// Flight::route('GET /user/@id', function($id){
//     Flight::json(Flight::userService()->get_by_id($id));
// });

// Flight::route('PUT /user/@id', function($id){
//     $data = Flight::request()->data->getData();
//     Flight::userService()->update($data, $id);
//     Flight::json(array("message" => "User updated successfully"));
// });

// Flight::route('DELETE /user/@id', function($id){
//     Flight::userService()->delete($id);
//     Flight::json(["message" => "User deleted successfully"]);
// });
?>