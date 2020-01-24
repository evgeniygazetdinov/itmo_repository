

<?php

echo('<br>');
echo 'Задание 1';
?>
<form name="form" action="" method="get">
  <input type="url" name="url" id="subject" value="">
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


function check_link()
{
  if ((filter_var($url, FILTER_VALIDATE_URL) === FALSE ) && $url !== '') {
    return echo ('Not a valid URL');
  }
  return echo 'url is valid !'; 
}

function short_links()
{
    $get = $_GET;
    $url = $get['url'];
    check_link($url);
}




