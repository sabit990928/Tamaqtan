<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
     
    include_once 'config/database.php';
    include_once 'objects/menu.php';
    
    $database = new Database();
    $db = $database->getConnection();
    
    $food = new Menu($db);

    $stmt = $food->read_all_diet();
    $num = $stmt->rowCount();
    
    if($num>0){
 
        $food_arr=array();
        $food_arr["records"]=array();
     
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
            extract($row);
     
            $food_item=array(
                "id" => $id,
                "f1_name" => $f1_name,
                "f1_id" => $for_f,
                "f2_name" => $f2_name,
                "f2_id" => $for_s,
                "f3_name" => $f3_name,
                "f3_id" => $for_th,
                "type_name" => $type_name

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