

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
  if ((filter_var($url, FILTER_VALIDATE_URL) === false) || $url === '') 
  {
    $string = 'Not a valid URL';
    return false;
  }
  echo $url;
  echo '<br>';
  echo $string;
  return true;
}

echo '<br>';
function short_links()
{
    $get = $_GET;
    $url = $get['url'];
    $short_link = check_link($url);
    $res = "";
    if ($short_link)
    {
      $r = parse_url($url);
      $res = $r["scheme"] . $r["host"];
    }

    else
    {
      $res = uniqid($url);
    }
      $file_for_write = fopen("$url.txt","a");
      fwrite($file_for_write,$res); 
      return $res;
}




