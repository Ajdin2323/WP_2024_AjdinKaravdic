<?php

use Firebase\JWT\JWT;

header('Access-Control-Allow-Origin: *');

Flight::route('GET /users', function(){
    Flight::json(Flight::userService()->get());
});

Flight::route('POST /register', function(){
    $data = Flight::request()->data->getData();
    $user = [
        'name' => $data['name'],
        'userName' => $data['userName'],
        'password' => $data['password']
    ];

    
  
    Flight::userService()->add($user);
  
    Flight::json(['message' => 'Registration successful']);
});

Flight::route('POST /login', function () {
    $data = Flight::request()->data->getData();
    $user = Flight::userService()->get_user_by_username($data['userName']);

    // if (!$user || !password_verify($data['password'], $user['password'])) {
    //     Flight::halt(401, 'Invalid username or password');
    // }

    $payload = [
        'idUsers' => $user['idUsers'],
        'userName' => $user['userName'],
        'created_at' => date('Y-m-d H:i:s')
    ];

    $token = JWT::encode($payload, UserService::JWT_SECRET(), 'HS256'); 

    Flight::json(['token' => $token]);
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