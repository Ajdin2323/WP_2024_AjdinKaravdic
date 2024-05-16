<?php
require_once dirname(__FILE__).'/BaseService.php';
require_once dirname(__FILE__).'/../dao/BMIDao.class.php';

class BMIService extends BaseService{

    public function __construct(){
        parent::__construct(new BMIDao());
    }

    public function get_bmi_for_user($user_id) {
        return $this -> dao -> get_bmi_for_user($user_id);
    }

    public function calculate_bmi($user_id, $weight, $height) {
        return $this -> dao -> calculate_bmi($user_id, $weight, $height);
    }
}
?>