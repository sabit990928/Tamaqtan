
<?php

include 'userModule.php';
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
<form action="to_add_food.php" method="POST">
<br><br>
    <div class="form-group row">
                <label class="col-sm-3 col-form-label">Title</label>
                <div class="col-sm-9">
                <input type="text"  class="form-control" name="title">
                </div>
            </div>

            <div class="form-group row">
                <label class="col-sm-3 col-form-label">Recept</label>
                <div class="col-sm-9">
                <textarea rows="5" type="text"  class="form-control" name="short_content"></textarea>
                </div>
            </div>

            <div class="form-group row">
                <label class="col-sm-3 col-form-label">Products</label>
                <div class="col-sm-9">
                <textarea rows="15" type="text"  class="form-control" name="content"></textarea>
                </div>
            </div>

            <div class="form-group row">
               
                <div class="col-sm-10">
                <input type="submit" readonly class="btn btn-primary mb-2" value="Add food">
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