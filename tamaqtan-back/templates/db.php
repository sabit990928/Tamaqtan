<?php

try {
    //code...
    $connection = new PDO("mysql:host=localhost;dbname=tamaqtan", "root", "");
} catch (PDOException $e) {
    //throw $th;
    echo "Connection failed: " . $e->getMessage();
}

?>