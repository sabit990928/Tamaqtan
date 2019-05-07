<?php


    class week{
        
        private $conn;
        private $table_name = "week";
        
        public $id;
        public $mon;
        public $tw;
        public $wen;
        public $th;
        public $fr;
        public $sun;
        public $std;
        public $user_type_id;

        public function __construct($db){
            $this->conn = $db;
        }

        public function create(){

            $query = "INSERT INTO 
            " . $this->table_name . "
            SET
                 mon=:mon, tw=:tw, wen=:wen, th=:th, fr=:fr, sun=:sun, std=:std, user_type_id=:user_type_id ";

            $stmt = $this->conn->prepare($query);

            $this->mon=htmlspecialchars(strip_tags($this->mon));
            $this->tw=htmlspecialchars(strip_tags($this->tw));
            $this->wen=htmlspecialchars(strip_tags($this->wen));
            $this->th=htmlspecialchars(strip_tags($this->th));
            $this->fr=htmlspecialchars(strip_tags($this->fr));
            $this->sun=htmlspecialchars(strip_tags($this->sun));
            $this->std=htmlspecialchars(strip_tags($this->std));
            $this->user_type_id=htmlspecialchars(strip_tags($this->user_type_id));

            $stmt->bindParam(":mon", $this->mon);
            $stmt->bindParam(":tw", $this->tw);
            $stmt->bindParam(":wen", $this->wen);
            $stmt->bindParam(":th", $this->th);
            $stmt->bindParam(":fr", $this->fr);
            $stmt->bindParam(":sun", $this->sun);
            $stmt->bindParam(":std", $this->std);
            $stmt->bindParam(":user_type_id", $this->user_type_id);

            if($stmt->execute()){
                return true;
            }
            return false;

        }
// вывод меню для спортсменов на одну неделю
        public function get_random_sport(){

            $query = "SELECT f.id,  f.mon, f.tw, f.wen, f.th, f.fr, f.sun, f.std, ty.name as type_name, 
                             m1.name as mon, m2.name as tw, m3.name as wen, m4.name as th, m5.name as fr, m6.name as sun, m7.name as std,  
                             m1.for_f, m1.for_s, m1.for_th, 
                             m2.for_f, m2.for_s, m2.for_th,
                             m3.for_f, m3.for_s, m3.for_th,
                             m4.for_f, m4.for_s, m4.for_th,
                             m5.for_f, m5.for_s, m5.for_th,
                             m6.for_f, m6.for_s, m6.for_th,
                             m7.for_f, m7.for_s, m7.for_th,
                             f1.name as f1_name, f2.name as f2_name, f3.name as f3_name   
                      FROM " . $this->table_name . " f
                      LEFT JOIN user_type ty ON f.user_type_id = ty.id
                      LEFT JOIN menu AS m1 ON m1.id = f.mon
                      LEFT JOIN menu AS m2 ON m2.id = f.tw
                      LEFT JOIN menu AS m3 ON m3.id = f.wen
                      LEFT JOIN menu AS m4 ON m4.id = f.th
                      LEFT JOIN menu AS m5 ON m5.id = f.fr
                      LEFT JOIN menu AS m6 ON m6.id = f.sun
                      LEFT JOIN menu AS m7 ON m7.id = f.std
                      LEFT JOIN food AS f1 ON m1.for_f = f1.id
                      LEFT JOIN food AS f2 ON m1.for_s = f2.id
                      LEFT JOIN food AS f3 ON m1.for_th = f3.id
                      LEFT JOIN food AS f4 ON m2.for_f = f4.id
                      LEFT JOIN food AS f5 ON m2.for_s = f5.id
                      LEFT JOIN food AS f6 ON m2.for_th = f6.id
                      LEFT JOIN food AS f7 ON m3.for_f = f7.id
                      LEFT JOIN food AS f8 ON m3.for_s = f8.id
                      LEFT JOIN food AS f9 ON m3.for_th = f9.id
                      LEFT JOIN food AS f10 ON m4.for_th = f10.id
                      LEFT JOIN food AS f11 ON m4.for_f = f11.id
                      LEFT JOIN food AS f12 ON m4.for_s = f12.id
                      LEFT JOIN food AS f13 ON m5.for_th = f13.id
                      LEFT JOIN food AS f14 ON m5.for_f = f14.id
                      LEFT JOIN food AS f15 ON m5.for_s = f15.id
                      LEFT JOIN food AS f16 ON m6.for_th = f16.id
                      LEFT JOIN food AS f17 ON m6.for_f = f17.id
                      LEFT JOIN food AS f18 ON m6.for_s = f18.id
                      LEFT JOIN food AS f19 ON m7.for_th = f19.id
                      LEFT JOIN food AS f20 ON m7.for_f = f20.id
                      LEFT JOIN food AS f21 ON m7.for_s = f21.id
                     
                      ORDER BY RAND()
                      LIMIT 1";
                      $stmt = $this->conn->prepare($query);
            
                      $stmt->execute();
                      
                       return $stmt;
        }
        

    }

?>