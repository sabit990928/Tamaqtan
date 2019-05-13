<?php

    class food{

        private $conn;
        private $table_name = "food";

        public $id;
        public $name;
        public $recept;
        public $type_id;
        public $type_name;
        public $time_id;
        public $time_name;
        public $user_type_name;
        public $user_type_id;
        public $img_address;

        public function __construct($db){
            $this->conn = $db;
        }
// вывод бсех блюд 
        function read(){
            $query = "SELECT
                 f.id, f.name, f.recept, f.img_address, t.name as time_name, ty.name as type_name, u.name as user_type_name, f.time_id, f.type_id, f.user_type_id
                 FROM
                " . $this->table_name . " f
                LEFT JOIN time t ON f.time_id = t.id
                LEFT JOIN type ty ON f.type_id = ty.id
                LEFT JOIN user_type u ON f.user_type_id = u.id
                ";
                
            $stmt = $this->conn->prepare($query);
        
            $stmt->execute();
 
             return $stmt;

        }
// вывод бсех блюд для спортсменов
        function read_sport(){
            $query = "SELECT
                 f.id, f.name, f.recept, f.img_address, t.name as time_name, ty.name as type_name, u.name as user_type_name, f.time_id, f.type_id, f.user_type_id
                 FROM
                " . $this->table_name . " f
                LEFT JOIN time t ON f.time_id = t.id
                LEFT JOIN type ty ON f.type_id = ty.id
                LEFT JOIN user_type u ON f.user_type_id = u.id
                WHERE u.id = 1
                ";
                
            $stmt = $this->conn->prepare($query);
        
            $stmt->execute();
 
             return $stmt;

        }
// вывод бсех блюд для диеты
        function read_diet(){
            $query = "SELECT
                 f.id, f.name, f.recept, f.img_address, t.name as time_name, ty.name as type_name, u.name as user_type_name, f.time_id, f.type_id, f.user_type_id
                 FROM
                " . $this->table_name . " f
                LEFT JOIN time t ON f.time_id = t.id
                LEFT JOIN type ty ON f.type_id = ty.id
                LEFT JOIN user_type u ON f.user_type_id = u.id
                WHERE u.id = 2
                ";
                
            $stmt = $this->conn->prepare($query);
        
            $stmt->execute();
 
             return $stmt;

        }
// вывод бсех блюд для беременных
        function read_berem(){
            $query = "SELECT
                 f.id, f.name, f.recept, f.img_address, t.name as time_name, ty.name as type_name, u.name as user_type_name, f.time_id, f.type_id, f.user_type_id
                 FROM
                " . $this->table_name . " f
                LEFT JOIN time t ON f.time_id = t.id
                LEFT JOIN type ty ON f.type_id = ty.id
                LEFT JOIN user_type u ON f.user_type_id = u.id
                WHERE u.id = 3
                ";
                
            $stmt = $this->conn->prepare($query);
        
            $stmt->execute();
 
             return $stmt;

        }
// вывод бсех блюд для больных
        function read_ill(){
            $query = "SELECT
                 f.id, f.name, f.recept, f.img_address, t.name as time_name, ty.name as type_name, u.name as user_type_name, f.time_id, f.type_id, f.user_type_id
                 FROM
                " . $this->table_name . " f
                LEFT JOIN time t ON f.time_id = t.id
                LEFT JOIN type ty ON f.type_id = ty.id
                LEFT JOIN user_type u ON f.user_type_id = u.id
                WHERE u.id = 4
                ";
                
            $stmt = $this->conn->prepare($query);
        
            $stmt->execute();
 
             return $stmt;

        }
// вывод бсех блюд для ежедневного
        function read_usuall(){
            $query = "SELECT
                 f.id, f.name, f.recept, f.img_address, t.name as time_name, ty.name as type_name, u.name as user_type_name, f.time_id, f.type_id, f.user_type_id
                 FROM
                " . $this->table_name . " f
                LEFT JOIN time t ON f.time_id = t.id
                LEFT JOIN type ty ON f.type_id = ty.id
                LEFT JOIN user_type u ON f.user_type_id = u.id
                WHERE u.id = 5
                ";
                
            $stmt = $this->conn->prepare($query);
        
            $stmt->execute();
 
             return $stmt;

        }

        function create(){

            $query = "INSERT INTO 
                    " . $this->table_name . "
                    SET
                        name=:name, recept=:recept, img_address=:img_address, time_id=:time_id, type_id=:type_id, user_type_id=:user_type_id";
            $stmt = $this->conn->prepare($query);
            
            $this->name=htmlspecialchars(strip_tags($this->name));
            $this->recept=htmlspecialchars(strip_tags($this->recept));
            $this->img_address=htmlspecialchars(strip_tags($this->img_address));
            $this->time_id=htmlspecialchars(strip_tags($this->time_id));
            $this->type_id=htmlspecialchars(strip_tags($this->type_id));
            $this->user_type_id=htmlspecialchars(strip_tags($this->user_type_id));

            $stmt->bindParam(":name", $this->name);
            $stmt->bindParam(":recept", $this->recept);
            $stmt->bindParam(":img_address", $this->img_address);
            $stmt->bindParam(":time_id", $this->time_id);
            $stmt->bindParam(":type_id", $this->type_id);
            $stmt->bindParam(":user_type_id", $this->user_type_id);

            if($stmt->execute()){
                return true;
            }
            return false;
        }
// вывод блюда по ID
        function readOne(){

            $query = "SELECT f.id as id, f.name as name, f.recept as recept, f.img_address as img_address,  t.name as time_name, ty.name as type_name, u.name as user_type_name, f.time_id as time_id, f.type_id as type_id, f.user_type_id as user_type_id  
                      FROM " . $this->table_name . "  f
                      LEFT JOIN time t ON f.time_id = t.id
                      LEFT JOIN type ty ON f.type_id = ty.id
                      LEFT JOIN user_type u ON f.user_type_id = u.id
                      WHERE
                          f.id = ?
                      LIMIT
                          0,1";

            $stmt = $this->conn->prepare($query);

            $stmt->bindParam(1, $this->id);
            
            $stmt->execute();

           // $row = $stmt->fetch(PDO::FETCH_ASSOC);
            
            // $this->name = $row['name'];
            // $this->recept = $row['recept'];
            // $this->img_address = $row['img_address'];
            // $this->time_name = $row['time_name'];
            // $this->time_id = $row['time_id'];
            // $this->type_name = $row['type_name'];
            // $this->type_id = $row['type_id'];
            // $this->user_type_name = $row['user_type_name'];
            // $this->user_type_id = $row['user_type_id'];
            return $stmt;
        }
        // для случайной еды
        function get_random(){

            $query = "SELECT f.id, f.name, f.recept, f.img_address,  t.name as time_name, ty.name as type_name, u.name as user_type_name, f.time_id, f.type_id, f.user_type_id   
                      FROM " . $this->table_name . " f
                      LEFT JOIN time t ON f.time_id = t.id
                      LEFT JOIN type ty ON f.type_id = ty.id
                      LEFT JOIN user_type u ON f.user_type_id = u.id
                      WHERE u.id = 1
                      ORDER BY RAND()
                      LIMIT 1";
                
            $stmt = $this->conn->prepare($query);
        
            $stmt->execute();
 
             return $stmt;

        }
    
// nado dobit'
        function search($keywords){
            $query = "SELECT  f.id, f.name, f.recept, t.name as time_name, ty.name as type_name, u.name as user_type_name, f.time_id, f.type_id, f.user_type_id   
            FROM " . $this->table_name . " f
            LEFT JOIN time t ON f.time_id = t.id
            LEFT JOIN type ty ON f.type_id = ty.id
            LEFT JOIN user_type u ON f.user_type_id = u.id
            WHERE f.name LIKE ?";

            $stmt = $this->conn->prepare($query);
            $keywords = htmlspecialchars(strip_tags($keywords));
            $keywords = "%{$keywords}%";

            $stmt->bindParam(1, $keywords);
            $stmt->bindParam(2, $keywords);
            $stmt->bindParam(3, $keywords);
            
            $stmt->execute();

            return $stmt;
        }


    }
?>