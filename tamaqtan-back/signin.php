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
        Auth error
        </div>
    <?php  
    
                            }
    
    ?>
    <br>

<form action="auth.php" method="post">

<div class="form-group row">
    <label class="col-sm-3 col-form-label">Login</label>
    <div class="col-sm-9">
    <input type="text"  class="form-control" name="login">
    </div>
</div>

<div class="form-group row">
    <label class="col-sm-3 col-form-label">Password</label>
    <div class="col-sm-9">
    <input type="password" class="form-control" name="password">
    </div>
</div>



<div class="form-group row">
   
    <div class="col-sm-10">
    <input type="submit" readonly class="btn btn-primary mb-2" value="Sign UP">
    </div>
</div>
</form>

    
</body>
</html>
<?php
}else{

    header("Location:index.php");

}
?>