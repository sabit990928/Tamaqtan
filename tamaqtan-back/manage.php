
<?php

include 'userModule.php';

$query =$connection->prepare("SELECET u.id, u.login, u.password, u.full_name 
                            FROM users u
                            WHERE u.login != "admin"

");
$query->execute();
$resultList = $query->fetchAll();


if($USER_DATA['login'] == 'admin'){
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Welcome page</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="style/style.css" />
    <script src="main.js"></script>
</head>
<body>



        
<?php
    include 'templates/navbar.php';
?>
<?php 

if(isset($_GET['error'])){

?>

    <div class="alert alert-danger" role="alert">
    Register error
    </div>
<?php  

                        }

?>


<h1>All users</h1>
<?php foreach($resultList as $users){?>

    <ul></ul>

<?php }?>

</body>
</html>
<?php
}else{

    header("Location:index.php");

}
?>