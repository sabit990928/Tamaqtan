<?php

 header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 

include_once 'config/database.php';
include_once 'C:\xampp\htdocs\back\api\objects\week.php';


$database = new Database();
$db = $database->getConnection();

$food = new Week($db);
$data = json_decode(file_get_contents("php://input"));

if(
    !empty($data->mon) &&
    !empty($data->tw) &&
    !empty($data->wen) &&
    !empty($data->th) &&
    !empty($data->fr) &&
    !empty($data->sun) &&
    !empty($data->std) &&
    !empty($data->user_type_id) 
){

    $food->mon = $data->mon;
    $food->tw = $data->tw;
    $food->wen = $data->wen;
    $food->th = $data->th;
    $food->fr = $data->fr;
    $food->sun = $data->sun;
    $food->std = $data->std;
    $food->user_type_id = $data->user_type_id;

    if($food->create()){

        http_response_code(201);
        echo json_encode(array("message" => "Week was added."));
        
    }else{
        http_response_code(503);
        echo json_encode(array("message" => "Unable to add week."));
       
    }
    
}else{

    http_response_code(400);
    echo json_encode(array("message" => "Unable to add week. Data is incomplete."));


}



?>