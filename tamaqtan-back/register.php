
<?php

include 'userModule.php';
if($USER_DATA == null){
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
<form action="to_register.php" method="POST">
<br><br>
    Login:           <br><input type="text" name="login"><br>
    Password:        <br><input type="text" name="password"><br>
    Confirm passord: <br><input type="text" name="re_password"><br>
    Full name        <br><input type="text" name="full_name"><br>
    <br>
    <input type="submit" value="register"><br>
    
</form>
    
</body>
</html>
<?php
}else{

    header("Location:index.php");

}
?>