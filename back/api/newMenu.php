<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
 

include_once 'config/database.php';
include_once 'C:\xampp\htdocs\back\api\objects\menu.php';


$database = new Database();
$db = $database->getConnection();

$menu = new Menu($db);
$data = json_decode(file_get_contents("php://input"));

if(
    
    !empty($data->for_f) &&
    !empty($data->for_s) &&
    !empty($data->for_th) &&
    !empty($data->type_id) 
){

   
    $menu->for_f = $data->for_f;
    $menu->for_s = $data->for_s;
    $menu->for_th = $data->for_th;
    $menu->type_id = $data->type_id;

    if($menu->newMenu()){

        http_response_code(201);
        echo json_encode(array("message" => "Menu was added."));
        
    }else{
        http_response_code(503);
        echo json_encode(array("message" => "Unable to add menu."));
       
    }
    
}else{

    http_response_code(400);
    echo json_encode(array("message" => "Unable to add menu. Data is incomplete."));


}



?>