<?php

    define("SERVER", "localhost");
    define("USER", "root");
    define("PASSWORD", "");
    define("DB", "api_db");
    
    $mysql = new mysqli(SERVER, USER, PASSWORD, DB);
    $respone = array();

    if($mysql->connect_error){

        $respone["MESSAGE"] = "ERROR IN SERVER";
        $respone["STATUS"] = 500;

    }else{
        if(is_uploaded_file($_FILES["user_image"]["tmp_name"]) && @$_POST["user_name"]){

            $tmp_file = $_FILES["user_image"]["tmp_name"];
            $img_name = $_FILES["user_image"]["name"];
            $upload_dir = "./images/".$img_name;

            $sql = "INSERT INTO tbl_users(user_name, user_profile) VALUES('{$_POST['user_name']}','{$img_name}')";

            if(move_uploaded_file($tmp_file, $upload_dir) && $mysql->query($sql)){

                $respone["MESSAGE"] = "UPLOAD SUCCED";
                $respone["STATUS"] = 200;

            }else{
                $respone["MESSAGE"] = "UPLOAD FAILED";
                $respone["STATUS"] = 404;
            }
            }else{
                $respone["MESSAGE"] = "INVALID REQUEST";
                $respone["STATUS"] = 400;
        }
    }

    echo json_encode($respone);

?>