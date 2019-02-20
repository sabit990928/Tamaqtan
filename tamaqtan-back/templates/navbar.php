

<?php 
        
        if($USER_DATA!=null){
			if($USER_DATA['login'] == 'admin'){
      ?>
	  
	    <ul>
			  <li><a class="active" href="index.php">Home</a></li>
			  <li><a href="logout.php">Sign out</a></li>
			  <li><a href="newfood.php">new food</a></li>
			  <li><a href="manage.php">manage</a></li>
			</ul>
			
		<?php }else{?>
<ul>
  <li><a class="active" href="index.php">Home</a></li>
  <li><a href="logout.php">Sign out</a></li>
  <li><a href="newmenu.php">New menu</a></li>
  <li><a href="#about">About</a></li>

</ul>
       <?php
        
		}          
			}else{
           ?>      
		   
		   
<ul>
  <li><a class="active" href="index.php">Home</a></li>
  <li><a href="signin.php">Sign in</a></li>
  <li><a href="register.php">Register</a></li>
  <li><a href="#about">About</a></li>
</ul>

<?php
           }
          ?>
		  
		 