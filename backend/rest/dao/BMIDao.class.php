
<?php
require_once dirname(__FILE__).'/BaseDao.class.php';

class BMIDao extends BaseDao {
    public function __construct(){
        parent::__construct("user_bmi");
    }

    public function get_bmi_for_user($user_id) {
        $query = $this -> connection -> prepare(
            "SELECT u.name, ub.value
            FROM users u
            JOIN user_bmi ub ON u.idUsers = ub.user_id
            WHERE u.idUsers = :user_id
            ORDER BY ub.id DESC
            LIMIT 1;"
        );
        $query -> bindParam(":user_id", $user_id);
        $query -> execute();
        return $query -> fetchAll(PDO::FETCH_ASSOC);
    }

    public function calculate_bmi($user_id, $weight, $height) {
        $height_in_m = $height / 100;
        $bmi = round($weight / ($height_in_m * $height_in_m), 1);

        $query = $this -> connection -> prepare(
            "INSERT INTO user_bmi (user_id, value)
            VALUES (:user_id, :value);"
        );

        $query -> bindParam(":user_id", $user_id);
        $query -> bindParam(":value", $bmi);
        $query -> execute();
        return $bmi;
    }
}
?>