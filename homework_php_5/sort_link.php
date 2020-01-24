

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



function check_link($url_for_check)
{
  $string = 'url is valid !';
  $url = trim($url_for_check);
  if ((filter_var($url, FILTER_VALIDATE_URL) === false) || (empty($url_for_check))) {
    $string = 'Not a valid URL';
  }
  echo $url;
  echo '<br>';
  echo $string;
}
echo '<br>';
function short_links()
{
    $get = $_GET;
    $url = $get['url'];
    check_link($url);
}




