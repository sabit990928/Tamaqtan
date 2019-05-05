<?php
class Database{
 
    
    private $host = "localhost";
    private $db_name = "api_db";
    private $username = "root";
    private $password = "";
    private $db_char = "utf8";
    public $conn;
   
    
    public function getConnection(){
 
        $this->conn = null;
 
        try{
            $this->conn = new PDO(
                'mysql:
            host=localhost;
            dbname=api_db;
            charset=utf8;',
            'root',
            '');
        }catch(PDOException $exception){
            echo "Connection error: " . $exception->getMessage();
        }
 
        return $this->conn;
    }
}
?>