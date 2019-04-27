<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 

include_once 'config/database.php';
include_once 'C:\xampp\htdocs\back\api\objects\food.php';


$database = new Database();
$db = $database->getConnection();

$food = new Food($db);
$data = json_decode(file_get_contents("php://input"));

if(
    !empty($data->name) &&
    !empty($data->recept) &&
    !empty($data->time_id) &&
    !empty($data->type_id) &&
    !empty($data->user_type_id) 
){

    $food->name = $data->name;
    $food->recept = $data->recept;
    $food->time_id = $data->time_id;
    $food->type_id = $data->type_id;
    $food->user_type_id = $data->user_type_id;

    if($food->create()){

        http_response_code(201);
        echo json_encode(array("message" => "Food was added."));
        
    }else{
        http_response_code(503);
        echo json_encode(array("message" => "Unable to add food."));
       
    }
    
}else{

    http_response_code(400);
    echo json_encode(array("message" => "Unable to add food. Data is incomplete."));


}



?>