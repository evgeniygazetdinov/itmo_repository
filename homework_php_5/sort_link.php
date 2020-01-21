

<?php

echo('<br>');
echo 'Задание 1';
?>
<form name="form" action="" method="get">
  <input type="url" name="to_short" id="subject" value="">
  <input type="submit" value="to create short_link">
</form>
<p>
result:
</p>
<?php
if($_GET){
    echo short_links(); 
};
echo'<br>';

function short_links()
{
    
}




