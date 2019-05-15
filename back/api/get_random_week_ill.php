<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
     
    include_once 'config/database.php';
    include_once 'objects/week.php';
    
    $database = new Database();
    $db = $database->getConnection();
    
    $food = new week($db);

    $stmt = $food->get_random_ill();
    $num = $stmt->rowCount();   
    
    if($num>0){
 
        $food_arr=array();
        $food_arr["records"]=array();
     
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
            extract($row);
     
            $food_item=array(
                "id" => $id,
                "f1_name" => $f1_name,
                "f1_id" => $f1_id,
                "f1_img" => $f1_img,
                "f2_name" => $f2_name,
                "f2_id" => $f2_id,
                "f2_img" => $f2_img,
                "f3_name" => $f3_name,
                "f3_id" => $f3_id,
                "f3_img" => $f3_img,
                "f4_name" => $f4_name,
                "f4_id" => $f4_id,
                "f4_img" => $f4_img,
                "f5_name" => $f5_name,
                "f5_id" => $f5_id,
                "f5_img" => $f5_img,
                "f6_name" => $f6_name,
                "f6_id" => $f6_id,
                "f6_img" => $f6_img,
                "f7_name" => $f7_name,
                "f7_id" => $f7_id,
                "f7_img" => $f7_img,
                "f8_name" => $f8_name,
                "f8_id" => $f8_id,
                "f8_img" => $f8_img,
                "f9_name" => $f9_name,
                "f9_id" => $f9_id,
                "f9_img" => $f9_img,
                "f10_name" => $f10_name,
                "f10_id" => $f10_id,
                "f10_img" => $f10_img,
                "f11_name" => $f11_name,
                "f11_id" => $f11_id,
                "f11_img" => $f11_img,
                "f12_name" => $f12_name,
                "f12_id" => $f12_id,
                "f12_img" => $f12_img,
                "f13_name" => $f13_name,
                "f13_id" => $f13_id,
                "f13_img" => $f13_img,
                "f14_name" => $f14_name,
                "f14_id" => $f14_id,
                "f14_img" => $f14_img,
                "f15_name" => $f15_name,
                "f15_id" => $f15_id,
                "f15_img" => $f15_img,
                "f16_name" => $f16_name,
                "f16_id" => $f16_id,
                "f16_img" => $f16_img,
                "f17_name" => $f17_name,
                "f17_id" => $f17_id,
                "f17_img" => $f17_img,
                "f18_name" => $f18_name,
                "f18_id" => $f18_id,
                "f18_img" => $f18_img,
                "f19_name" => $f19_name,
                "f19_id" => $f19_id,
                "f19_img" => $f19_img,
                "f20_name" => $f20_name,
                "f20_id" => $f20_id,
                "f20_img" => $f20_img,
                "f21_name" => $f21_name,
                "f21_id" => $f21_id,
                "f21_img" => $f21_img,
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
            array("message" => "No menu found.")
        );
    }
?>