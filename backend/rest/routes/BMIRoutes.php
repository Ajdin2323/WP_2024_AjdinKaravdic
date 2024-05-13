<?php

Flight::route('GET /bmi/@user_id', function($user_id){
    Flight::json(Flight::bmiService()->get_bmi_for_user($user_id));
});

Flight::route('POST /calculate_bmi/@user_id/@weight/@height', function($user_id, $weight, $height){
    Flight::json(Flight::bmiService()->calculate_bmi($user_id, $weight, $height));
});


?>