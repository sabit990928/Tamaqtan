<?php

    class menu{

        private $conn;
        private $table_name = "food";

        public $id;
        public $day;
        public $time;
        public $user_id; 


        public function __construct($db){
            $this->conn = $db;
        }


        
    }

?>