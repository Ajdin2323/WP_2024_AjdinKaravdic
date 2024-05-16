<?php
require_once dirname(__FILE__).'/BaseDao.class.php';

class UserDao extends BaseDao {
    public function __construct(){
        parent::__construct("users");
    }

    public function get_user_by_username($userName) {
        $query = $this -> connection -> prepare("SELECT * FROM users WHERE userName = :userName");
        $query -> bindParam(":userName", $userName); 
        $query -> execute();
        return $query -> fetch(PDO::FETCH_ASSOC);
    }
    public function addUser($user)
    {
        return $this->insert('users', $user);
    }

    public function get_users(){
      
        $query = "SELECT * FROM users";
        return $this->query_without_param($query);
    
}

    
}
?>