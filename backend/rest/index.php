<?php
require '../../vendor/autoload.php';

Flight::route('/', function () {
    echo 'hello world!';
});
//services 
require dirname(__FILE__).'/services/UserService.php';
require dirname(__FILE__).'/services/BMIService.php';

//routes
require_once dirname(__FILE__).'/routes/UserRoutes.php';
require_once dirname(__FILE__).'/routes/BMIRoutes.php';

//register
Flight::register('userService', 'UserService');
Flight::register('bmiService', 'BMIService');

Flight::start();