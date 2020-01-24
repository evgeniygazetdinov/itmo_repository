<h2>Страница с книгами</h2>
<?php foreach ($all_books as $book)?>
<div>
    <h1><?php echo $book['title']?></h1>
    <p><?php echo $book['description']?></p>
    <p>Количество страниц</p>
    <p><?php echo $book['page_count']?></p>
    <a href="/books/show/<?php $book['id']?>">Подробная Информация</a>

</div>