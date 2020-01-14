
<?php 
if(isset($_POST['submit'])){
 
 $countfiles = count($_FILES['file']['name']);
 var_dump($_FILES['file']);
 for($i=0;$i<$countfiles;$i++){
  $filename = $_FILES['file']['name'][$i];
  move_uploaded_file($filename,'upload/'.$filename);
 }
} 
?>
<?php
echo "Задание 1";
?>
<form method='post' action='' enctype='multipart/form-data'>
 <input type="file" name="file[]" id="file" multiple>

 <input type='submit' name='submit' value='Upload'>
</form>