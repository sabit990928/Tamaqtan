<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Credentials: true");
header('Content-Type: application/json');

include_once 'config/database.php';
include_once 'objects/food.php';

$database = new Database();
$db = $database->getConnection();

$food = new Food($db);

$food->id = isset($_GET['id']) ? $_GET['id'] : die();
$food->readOne();

if($food->name!=null){

    $food_arr = array(

        "id" => $food->$id,
        "name" => $food->$name,
        "recept" => $food->$recept,
        "img_address" => $food->$img_address,
        "time_name" => $food->$time_name,
        "type_name" => $food->$type_name,
        "user_type_name" => $food->$user_type_name

    );
    http_response_code(200);
    echo json_encode($food_arr);

}else{
    http_response_code(404);
    echo json_encode(array("message" => "Food does not exist."));
    
}


?>