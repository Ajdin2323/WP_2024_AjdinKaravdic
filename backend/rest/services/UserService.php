<?php
require_once dirname(__FILE__).'/BaseService.php';
require_once dirname(__FILE__).'/../dao/UserDao.class.php';

class UserService extends BaseService{

    public function __construct(){
        parent::__construct(new UserDao());
    }

    public function get_user_by_username($userName) {
        return $this -> dao -> get_user_by_username($userName);
    }

    public function addUser($user)
    {
        return $this-> dao ->addUser($user);
    }
    public function get_users(){
        return $this->dao->get_users();
    }

    private static function generateRandomString($length = 32) {
        return bin2hex(random_bytes($length / 2));
    }

    public static function JWT_SECRET() {
        return self::generateRandomString();
    }
}
?>