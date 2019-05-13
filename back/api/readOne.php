<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
     
    include_once 'config/database.php';
    include_once 'objects/food.php';
    
    $database = new Database();
    $db = $database->getConnection();
    
    $food = new Food($db);

    $food->id = isset($_GET['id']) ? $_GET['id'] : die();
    $stmt = $food->readOne();
   // $stmt = $food->get_random();
    $num = $stmt->rowCount();
    
    if($num>0){
 
        $food_arr=array();
        $food_arr["records"]=array();
     
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
            extract($row);
     
            $food_item=array(
                "id" => $id,
                "name" => $name,
                "recept" => html_entity_decode($recept),
                "img_address" => html_entity_decode($img_address),
                "time_name" => $time_name,
                "type_name" => $type_name,
                "user_type_name" => $user_type_name
            );
     
            array_push($food_arr["records"], $food_item);
        }
     
        http_response_code(200);
     
        echo json_encode($food_arr);
    }
    else{
 
        http_response_code(404);
     
        echo json_encode(
            array("message" => "No food found.")
        );
    }
?>