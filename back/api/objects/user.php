<?php
// класс для нашего юзера
class User{
 
    
    private $conn;
    private $table_name = "users";
 
    
    public $id;
    public $firstname;
    public $lastname;
    public $email;
    public $password;
    public $is_user;
 
    
    public function __construct($db){
        $this->conn = $db;
    }

 // функция для создания юзера
function create(){
 
    
    $query = "INSERT INTO " . $this->table_name . "
            SET
                firstname = :firstname,
                lastname = :lastname,
                email = :email,
                password = :password,
                is_user = 1 ";
 
    $stmt = $this->conn->prepare($query);
 
    $this->firstname=htmlspecialchars(strip_tags($this->firstname));
    $this->lastname=htmlspecialchars(strip_tags($this->lastname));
    $this->email=htmlspecialchars(strip_tags($this->email));
    $this->password=htmlspecialchars(strip_tags($this->password));

    $stmt->bindParam(':firstname', $this->firstname);
    $stmt->bindParam(':lastname', $this->lastname);
    $stmt->bindParam(':email', $this->email);
    // Криптография 
    $password_hash = password_hash($this->password, PASSWORD_BCRYPT);
    $stmt->bindParam(':password', $password_hash);
 
    
    if($stmt->execute()){
        return true;
    }
 
    return false;
}
 

//Проверка есть ли такой юзер
function emailExists(){
 

    $query = "SELECT id, firstname, lastname, password, is_user
            FROM " . $this->table_name . "
            WHERE email = ?
            LIMIT 0,1";
 
    $stmt = $this->conn->prepare( $query );
 
    $this->email=htmlspecialchars(strip_tags($this->email));
 
    $stmt->bindParam(1, $this->email);
 
    $stmt->execute();
 
    $num = $stmt->rowCount();
 
    if($num>0){
 
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
 
        $this->id = $row['id'];
        $this->firstname = $row['firstname'];
        $this->lastname = $row['lastname'];
        $this->password = $row['password'];
        $this->is_user = $row['is_user'];
 
        return true;
    }
 
    return false;
}
 
// Нужно дописать код 
// Добавьте сюда функцию апдейт
}