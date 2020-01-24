<!DOCTYPE html>
<html lang = "en-US">
 <head>
 <meta charset = "UTF-8">
 <title><?php echo $page title;?></title>
 <link rel = "stylesheet"type = "text/css" href = "css/style.css" />
 </head>
 <body>
      <nav>
          <a href="/">Главная</a>
          <a href="/books">Книги</a>
          <a href="/info">Информация</a>
          <a href="/shop">Магазин</a>
      </nav> 
      <div>
        <?php include_once $content;?>
      </div>
    <script src="js/goods.js"></script>    
 </body>
</html>
