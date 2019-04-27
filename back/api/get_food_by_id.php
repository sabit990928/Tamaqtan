<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: access");
    header("Access-Control-Allow-Methods: GET");
    header("Access-Control-Allow-Credentials: true");
    header('Content-Type: application/json');

    include_once 'C:\xampp\htdocs\back\api\config\database.php';
    include_once 'C:\xampp\htdocs\back\api\objects\food.php';


    $database = new Database();
    $db = $database->getConnection();

    $food = new Food($db);

    $food->id = isset($_GET['id']) ? $_GET['id'] : die();

    $food->readOne();

    if($food->name!=null){

        $food_arr = array(
            "id" => $food->id,
            "name"=> $food->name,
            "recept"=> $food->recept,
            "time_id"=> $food->time_id,
            "type_id"=> $food->type_id,
            "user_type_id"=> $food->user_type_id
        );

        http_response_code(200);

        echo json_encode($food_arr);

    }else{

        http_response_code(404);
        echo json_encode(array("message" => "Food does not exist"));

    }




?>