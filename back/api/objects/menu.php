<?php

    class menu{

        private $conn;
        private $table_name = "menu";

        public $id;
        
        public $day_id;
        public $day_name;
        
        public $food_id;
        public $food_name;

        public $user_id;

        public $type_id;
        public $type_name;

        public $time_id;
        public $time_name;

        public $user_type_name;
        public $user_type_id;

        public $for_f;
        public $for_s;
        public $for_th;
        
    


        public function __construct($db){
            $this->conn = $db;
        }

        function newMenu(){

            $query = "INSERT INTO 
            " . $this->table_name . "
            SET
                 for_f=:for_f, for_s=:for_s, for_th=:for_th, type_id=:type_id";
   
            $stmt = $this->conn->prepare($query);

            $this->for_f=htmlspecialchars(strip_tags($this->for_f));
            $this->for_s=htmlspecialchars(strip_tags($this->for_s));
            $this->for_th=htmlspecialchars(strip_tags($this->for_th));
            $this->type_id=htmlspecialchars(strip_tags($this->type_id));

            $stmt->bindParam(":for_f", $this->for_f);
            $stmt->bindParam(":for_s", $this->for_s);
            $stmt->bindParam(":for_th", $this->for_th);
            $stmt->bindParam(":type_id", $this->type_id);

            if($stmt->execute()){
                return true;
            }
            return false;

        }
// любое случаеное меню на один день
        function get_random(){

            $query = "SELECT f.id,  f.for_f, f.for_s, f.for_th, ty.name as type_name, f1.name as f1_name, f2.name as f2_name, f3.name as f3_name   
                      FROM " . $this->table_name . " f
                      LEFT JOIN user_type ty ON f.type_id = ty.id
                      LEFT JOIN food AS f1 ON f.for_f = f1.id
                      LEFT JOIN food AS f2 ON f.for_s = f2.id
                      LEFT JOIN food AS f3 ON f.for_th = f3.id
                      
                      ORDER BY RAND()
                      LIMIT 1";
                                          
            $stmt = $this->conn->prepare($query);
            
            $stmt->execute();
            
             return $stmt;

        }
// меню на один день для спорт
        function get_sport(){

            $query = "SELECT f.id,  f.for_f, f.for_s, f.for_th, ty.name as type_name, f1.name as f1_name, f2.name as f2_name, f3.name as f3_name   
                      FROM " . $this->table_name . " f
                      LEFT JOIN user_type ty ON f.type_id = ty.id
                      LEFT JOIN food AS f1 ON f.for_f = f1.id
                      LEFT JOIN food AS f2 ON f.for_s = f2.id
                      LEFT JOIN food AS f3 ON f.for_th = f3.id
                      WHERE f.type_id = 1
                      ORDER BY RAND()
                      LIMIT 1";
                                          
            $stmt = $this->conn->prepare($query);
            
            $stmt->execute();
            
             return $stmt;

        }
// меню на один день для беременных
        function get_berem(){

            $query = "SELECT f.id,  f.for_f, f.for_s, f.for_th, ty.name as type_name, f1.name as f1_name, f2.name as f2_name, f3.name as f3_name   
                      FROM " . $this->table_name . " f
                      LEFT JOIN user_type ty ON f.type_id = ty.id
                      LEFT JOIN food AS f1 ON f.for_f = f1.id
                      LEFT JOIN food AS f2 ON f.for_s = f2.id
                      LEFT JOIN food AS f3 ON f.for_th = f3.id
                      WHERE f.type_id = 3
                      ORDER BY RAND()
                      LIMIT 1";
                                          
            $stmt = $this->conn->prepare($query);
            
            $stmt->execute();
            
             return $stmt;

        }
// меню на один день для больных
        function get_ill(){

            $query = "SELECT f.id,  f.for_f, f.for_s, f.for_th, ty.name as type_name, f1.name as f1_name, f2.name as f2_name, f3.name as f3_name   
                      FROM " . $this->table_name . " f
                      LEFT JOIN user_type ty ON f.type_id = ty.id
                      LEFT JOIN food AS f1 ON f.for_f = f1.id
                      LEFT JOIN food AS f2 ON f.for_s = f2.id
                      LEFT JOIN food AS f3 ON f.for_th = f3.id
                      WHERE f.type_id = 4
                      ORDER BY RAND()
                      LIMIT 1";
                                          
            $stmt = $this->conn->prepare($query);
            
            $stmt->execute();
            
             return $stmt;

        }
// меню на один день для диеты
        function get_diet(){

            $query = "SELECT f.id,  f.for_f, f.for_s, f.for_th, ty.name as type_name, f1.name as f1_name, f2.name as f2_name, f3.name as f3_name   
                      FROM " . $this->table_name . " f
                      LEFT JOIN user_type ty ON f.type_id = ty.id
                      LEFT JOIN food AS f1 ON f.for_f = f1.id
                      LEFT JOIN food AS f2 ON f.for_s = f2.id
                      LEFT JOIN food AS f3 ON f.for_th = f3.id
                      WHERE f.type_id = 2
                      ORDER BY RAND()
                      LIMIT 1";
                                          
            $stmt = $this->conn->prepare($query);
            
            $stmt->execute();
            
            return $stmt;

        }
// меню на один день для ежедневного
        function get_usuall(){

            $query = "SELECT f.id,  f.for_f, f.for_s, f.for_th, ty.name as type_name, f1.name as f1_name, f2.name as f2_name, f3.name as f3_name   
                      FROM " . $this->table_name . " f
                      LEFT JOIN user_type ty ON f.type_id = ty.id
                      LEFT JOIN food AS f1 ON f.for_f = f1.id
                      LEFT JOIN food AS f2 ON f.for_s = f2.id
                      LEFT JOIN food AS f3 ON f.for_th = f3.id
                      WHERE f.type_id = 5
                      ORDER BY RAND()
                      LIMIT 1";
                                          
            $stmt = $this->conn->prepare($query);
            
            $stmt->execute();
            
             return $stmt;

        }
//вывод всех видов меню в спорте
        function read_all_sport(){
            $query = "SELECT f.id,  f.for_f, f.for_s, f.for_th, ty.name as type_name, f1.name as f1_name, f2.name as f2_name, f3.name as f3_name  
                      FROM " . $this->table_name . " f
                      LEFT JOIN user_type ty ON f.type_id = ty.id
                      LEFT JOIN food AS f1 ON f.for_f = f1.id
                      LEFT JOIN food AS f2 ON f.for_s = f2.id
                      LEFT JOIN food AS f3 ON f.for_th = f3.id
                      WHERE ty.id = 1
                ";
                
            $stmt = $this->conn->prepare($query);
        
            $stmt->execute();
 
             return $stmt;

        }

        //вывод всех видов меню в diete
        function read_all_diet(){
            $query = "SELECT f.id,  f.for_f, f.for_s, f.for_s, ty.name as type_name, f1.name as f1_name, f2.name as f2_name, f3.name as f3_name, f1.id as f1_id, f2.id as f2_id, f3.id as f3_id  
                      FROM " . $this->table_name . " f
                      LEFT JOIN user_type ty ON f.type_id = ty.id
                      LEFT JOIN food AS f1 ON f.for_f = f1.id
                      LEFT JOIN food AS f2 ON f.for_s = f2.id
                      LEFT JOIN food AS f3 ON f.for_th = f3.id
                      WHERE ty.id = 2
                ";
                
            $stmt = $this->conn->prepare($query);
        
            $stmt->execute();
 
             return $stmt;

        }

        //вывод всех видов меню в berem
        function read_all_berem(){
            $query = "SELECT f.id,  f.for_f, f.for_s, f.for_s, ty.name as type_name, f1.name as f1_name, f2.name as f2_name, f3.name as f3_name, f1.id as f1_id, f2.id as f2_id, f3.id as f3_id  
                      FROM " . $this->table_name . " f
                      LEFT JOIN user_type ty ON f.type_id = ty.id
                      LEFT JOIN food AS f1 ON f.for_f = f1.id
                      LEFT JOIN food AS f2 ON f.for_s = f2.id
                      LEFT JOIN food AS f3 ON f.for_th = f3.id
                      WHERE ty.id = 3
                ";
                
            $stmt = $this->conn->prepare($query);
        
            $stmt->execute();
 
             return $stmt;

        }
        //вывод всех видов меню в ill
        function read_all_ill(){
            $query = "SELECT f.id,  f.for_f, f.for_s, f.for_s, ty.name as type_name, f1.name as f1_name, f2.name as f2_name, f3.name as f3_name, f1.id as f1_id, f2.id as f2_id, f3.id as f3_id  
                      FROM " . $this->table_name . " f
                      LEFT JOIN user_type ty ON f.type_id = ty.id
                      LEFT JOIN food AS f1 ON f.for_f = f1.id
                      LEFT JOIN food AS f2 ON f.for_s = f2.id
                      LEFT JOIN food AS f3 ON f.for_th = f3.id
                      WHERE ty.id = 4
                ";
                
            $stmt = $this->conn->prepare($query);
        
            $stmt->execute();
 
             return $stmt;

        }

        //вывод всех видов меню в usuall
        function read_all_usuall(){
            $query = "SELECT f.id,  f.for_f, f.for_s, f.for_s, ty.name as type_name, f1.name as f1_name, f2.name as f2_name, f3.name as f3_name, f1.id as f1_id, f2.id as f2_id, f3.id as f3_id  
                      FROM " . $this->table_name . " f
                      LEFT JOIN user_type ty ON f.type_id = ty.id
                      LEFT JOIN food AS f1 ON f.for_f = f1.id
                      LEFT JOIN food AS f2 ON f.for_s = f2.id
                      LEFT JOIN food AS f3 ON f.for_th = f3.id
                      WHERE ty.id = 5
                ";
                
            $stmt = $this->conn->prepare($query);
        
            $stmt->execute();
 
             return $stmt;

        }




        
    }

?>