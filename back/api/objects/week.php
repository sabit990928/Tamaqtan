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
        public $user_type_id, $type_name;
        public $f1_name, $f1_id, $f1_img;
        public $f2_name, $f2_id, $f2_img;
        public $f3_name, $f3_id, $f3_img;
        public $f4_name, $f4_id, $f4_img;
        public $f5_name, $f5_id, $f5_img;    
        public $f6_name, $f6_id, $f6_img;
        public $f7_name, $f7_id, $f7_img;
        public $f8_name, $f8_id, $f8_img;
        public $f9_name, $f9_id, $f9_img;
        public $f10_name, $f10_id, $f10_img;
        public $f11_name, $f11_id, $f11_img;
        public $f12_name, $f12_id, $f12_img;
        public $f13_name, $f13_id, $f13_img;
        public $f14_name, $f14_id, $f14_img;
        public $f15_name, $f15_id, $f15_img;
        public $f16_name, $f16_id, $f16_img;
        public $f17_name, $f17_id, $f17_img;
        public $f18_name, $f18_id, $f18_img;
        public $f19_name, $f19_id, $f19_img;
        public $f20_name, $f20_id, $f20_img;
        public $f21_name, $f21_id, $f21_img;


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

            $query = "SELECT f.id, ty.name as type_name, f1.name as f1_name ,f1.id as f1_id, f1.img_address as f1_img,  f2.name as f2_name , f2.id as f2_id, f2.img_address as f2_img,  f3.name as f3_name,f3.id as f3_id,f3.img_address as f3_img, f4.name as f4_name ,f4.id as f4_id,f4.img_address as f4_img, f5.name as f5_name, f5.id as f5_id,f5.img_address as f5_img, f6.name as f6_name,f6.id as f6_id, f6.img_address as f6_img, f7.name as f7_name, f7.id as f7_id,f7.img_address as f7_img, f8.name as f8_name, f8.id as f8_id,f8.img_address as f8_img, f9.name as f9_name,f9.id as f9_id,f9.img_address as f9mg, f10.name as f10_name,f10.id as f10_id, f10.img_address as f10_img, f11.name as f11_name,f11.id as f11_id,f11.img_address as f11_img, f12.name as f12_name, f12.id as f12_id,f12.img_address as f12_img, f13.id as f13_id, f13.name as f13_name,f13.img_address as f13_img,  f14.name as f14_name,f14.id as f14_id,f14.img_address as f14_img, f15.name as f15_name, f15.id as f15_id,f15.img_address as f15_img, f16.name as f16_name,f16.id as f16_id,f16.img_address as f16_img, f17.name as f17_name, f17.id as f17_id,f17.img_address as f17_img, f18.name as f18_name, f18.id as f18_id,f18.img_address as f18_img , f19.name as f19_name, f19.id as f19_id,f19.img_address as f19_img, f20.name as f20_name, f20.id as f20_id,f20.img_address as f20_img, f21.name as f21_name, f21.id as f21_id, f21.img_address as f21_img
                      FROM week f
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
                    WHERE ty.id = 1
                    ORDER BY RAND()
                    LIMIT 1";
                      $stmt = $this->conn->prepare($query);
            
                      $stmt->execute();
                      
                       return $stmt;
        }

        // вывод меню для спортсменов на одну неделю
        public function get_random_diet(){

            $query = "SELECT f.id, ty.name as type_name, f1.name as f1_name ,f1.id as f1_id, f1.img_address as f1_img,  f2.name as f2_name , f2.id as f2_id, f2.img_address as f2_img,  f3.name as f3_name,f3.id as f3_id,f3.img_address as f3_img, f4.name as f4_name ,f4.id as f4_id,f4.img_address as f4_img, f5.name as f5_name, f5.id as f5_id,f5.img_address as f5_img, f6.name as f6_name,f6.id as f6_id, f6.img_address as f6_img, f7.name as f7_name, f7.id as f7_id,f7.img_address as f7_img, f8.name as f8_name, f8.id as f8_id,f8.img_address as f8_img, f9.name as f9_name,f9.id as f9_id,f9.img_address as f9mg, f10.name as f10_name,f10.id as f10_id, f10.img_address as f10_img, f11.name as f11_name,f11.id as f11_id,f11.img_address as f11_img, f12.name as f12_name, f12.id as f12_id,f12.img_address as f12_img, f13.id as f13_id, f13.name as f13_name,f13.img_address as f13_img,  f14.name as f14_name,f14.id as f14_id,f14.img_address as f14_img, f15.name as f15_name, f15.id as f15_id,f15.img_address as f15_img, f16.name as f16_name,f16.id as f16_id,f16.img_address as f16_img, f17.name as f17_name, f17.id as f17_id,f17.img_address as f17_img, f18.name as f18_name, f18.id as f18_id,f18.img_address as f18_img , f19.name as f19_name, f19.id as f19_id,f19.img_address as f19_img, f20.name as f20_name, f20.id as f20_id,f20.img_address as f20_img, f21.name as f21_name, f21.id as f21_id, f21.img_address as f21_img
                      FROM week f
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
                    WHERE ty.id = 2
                    ORDER BY RAND()
                    LIMIT 1";
                      $stmt = $this->conn->prepare($query);
            
                      $stmt->execute();
                      
                       return $stmt;
        }
        

        public function get_random_berem(){
            $query = "SELECT f.id, ty.name as type_name, f1.name as f1_name ,f1.id as f1_id, f1.img_address as f1_img,  f2.name as f2_name , f2.id as f2_id, f2.img_address as f2_img,  f3.name as f3_name,f3.id as f3_id,f3.img_address as f3_img, f4.name as f4_name ,f4.id as f4_id,f4.img_address as f4_img, f5.name as f5_name, f5.id as f5_id,f5.img_address as f5_img, f6.name as f6_name,f6.id as f6_id, f6.img_address as f6_img, f7.name as f7_name, f7.id as f7_id,f7.img_address as f7_img, f8.name as f8_name, f8.id as f8_id,f8.img_address as f8_img, f9.name as f9_name,f9.id as f9_id,f9.img_address as f9mg, f10.name as f10_name,f10.id as f10_id, f10.img_address as f10_img, f11.name as f11_name,f11.id as f11_id,f11.img_address as f11_img, f12.name as f12_name, f12.id as f12_id,f12.img_address as f12_img, f13.id as f13_id, f13.name as f13_name,f13.img_address as f13_img,  f14.name as f14_name,f14.id as f14_id,f14.img_address as f14_img, f15.name as f15_name, f15.id as f15_id,f15.img_address as f15_img, f16.name as f16_name,f16.id as f16_id,f16.img_address as f16_img, f17.name as f17_name, f17.id as f17_id,f17.img_address as f17_img, f18.name as f18_name, f18.id as f18_id,f18.img_address as f18_img , f19.name as f19_name, f19.id as f19_id,f19.img_address as f19_img, f20.name as f20_name, f20.id as f20_id,f20.img_address as f20_img, f21.name as f21_name, f21.id as f21_id, f21.img_address as f21_img
                      FROM week f
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
                        WHERE ty.id = 3
                    ORDER BY RAND()
                    LIMIT 1";
                      $stmt = $this->conn->prepare($query);
            
                      $stmt->execute();
                      
                       return $stmt;
        }
        


        public function get_random_ill(){

            $query = "SELECT f.id, ty.name as type_name, f1.name as f1_name ,f1.id as f1_id, f1.img_address as f1_img,  f2.name as f2_name , f2.id as f2_id, f2.img_address as f2_img,  f3.name as f3_name,f3.id as f3_id,f3.img_address as f3_img, f4.name as f4_name ,f4.id as f4_id,f4.img_address as f4_img, f5.name as f5_name, f5.id as f5_id,f5.img_address as f5_img, f6.name as f6_name,f6.id as f6_id, f6.img_address as f6_img, f7.name as f7_name, f7.id as f7_id,f7.img_address as f7_img, f8.name as f8_name, f8.id as f8_id,f8.img_address as f8_img, f9.name as f9_name,f9.id as f9_id,f9.img_address as f9mg, f10.name as f10_name,f10.id as f10_id, f10.img_address as f10_img, f11.name as f11_name,f11.id as f11_id,f11.img_address as f11_img, f12.name as f12_name, f12.id as f12_id,f12.img_address as f12_img, f13.id as f13_id, f13.name as f13_name,f13.img_address as f13_img,  f14.name as f14_name,f14.id as f14_id,f14.img_address as f14_img, f15.name as f15_name, f15.id as f15_id,f15.img_address as f15_img, f16.name as f16_name,f16.id as f16_id,f16.img_address as f16_img, f17.name as f17_name, f17.id as f17_id,f17.img_address as f17_img, f18.name as f18_name, f18.id as f18_id,f18.img_address as f18_img , f19.name as f19_name, f19.id as f19_id,f19.img_address as f19_img, f20.name as f20_name, f20.id as f20_id,f20.img_address as f20_img, f21.name as f21_name, f21.id as f21_id, f21.img_address as f21_img
            FROM week f
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
                        WHERE ty.id = 4
                    ORDER BY RAND()
                    LIMIT 1";
                      $stmt = $this->conn->prepare($query);
            
                      $stmt->execute();
                      
                      return $stmt;
        }
        
// вывод меню для повседневки на одну неделю
public function get_random_usuall(){

    $query = "SELECT f.id, ty.name as type_name, f1.name as f1_name ,f1.id as f1_id, f1.img_address as f1_img,  f2.name as f2_name , f2.id as f2_id, f2.img_address as f2_img,  f3.name as f3_name,f3.id as f3_id,f3.img_address as f3_img, f4.name as f4_name ,f4.id as f4_id,f4.img_address as f4_img, f5.name as f5_name, f5.id as f5_id,f5.img_address as f5_img, f6.name as f6_name,f6.id as f6_id, f6.img_address as f6_img, f7.name as f7_name, f7.id as f7_id,f7.img_address as f7_img, f8.name as f8_name, f8.id as f8_id,f8.img_address as f8_img, f9.name as f9_name,f9.id as f9_id,f9.img_address as f9mg, f10.name as f10_name,f10.id as f10_id, f10.img_address as f10_img, f11.name as f11_name,f11.id as f11_id,f11.img_address as f11_img, f12.name as f12_name, f12.id as f12_id,f12.img_address as f12_img, f13.id as f13_id, f13.name as f13_name,f13.img_address as f13_img,  f14.name as f14_name,f14.id as f14_id,f14.img_address as f14_img, f15.name as f15_name, f15.id as f15_id,f15.img_address as f15_img, f16.name as f16_name,f16.id as f16_id,f16.img_address as f16_img, f17.name as f17_name, f17.id as f17_id,f17.img_address as f17_img, f18.name as f18_name, f18.id as f18_id,f18.img_address as f18_img , f19.name as f19_name, f19.id as f19_id,f19.img_address as f19_img, f20.name as f20_name, f20.id as f20_id,f20.img_address as f20_img, f21.name as f21_name, f21.id as f21_id, f21.img_address as f21_img
    FROM week f
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
                WHERE ty.id = 4
            ORDER BY RAND()
            LIMIT 1";
              $stmt = $this->conn->prepare($query);
    
              $stmt->execute();
              
               return $stmt;
}



    }

?>