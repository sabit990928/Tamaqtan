<?php

include 'userModule.php';
$query = $connection->prepare("SELECT b.id, b.user_id, b.title, b.content, b.short_content, b.post_date, u.full_name
                      FROM blogs b
                      LEFT OUTER JOIN users u ON u.id = b.user_id;
                      ORDER BY b.post_date DESC
");

$query->execute();
$resultList = $query->fetchAll();


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

<h1>Cooming soon</h1>

    
</body>
</html>