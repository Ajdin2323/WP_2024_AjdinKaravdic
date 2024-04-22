<?php
require_once dirname(__FILE__).'/BaseService.php';
require_once dirname(__FILE__).'/../dao/UserDao.class.php';

class UserService extends BaseService{

    public function __construct(){
        parent::__construct(new UserDao());
    }

    public function get_user_by_username($username) {
        return $this -> dao -> get_user_by_username($username);
    }
}
?>