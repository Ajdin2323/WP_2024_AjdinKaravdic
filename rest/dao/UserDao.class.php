<?php
require_once dirname(__FILE__).'/BaseDao.class.php';

class UserDao extends BaseDao {
    public function __construct(){
        parent::__construct("users");
    }

    public function get_user_by_username($username) {
        $query = $this -> connection -> prepare("SELECT * FROM users WHERE userName = :username");
        $query -> bindParam(":userName", $username); 
        $query -> execute();
        return $query -> fetch(PDO::FETCH_ASSOC);
    }
}
?>