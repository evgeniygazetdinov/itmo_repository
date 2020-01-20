<?php


function makeRandomString($len) {
    $str = substr(str_shuffle("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"), 0, $len);
    return $str;
}

function generateRandomName(){
    $quan_words = rand(5,12);
    $name = makeRandomString($quan_words);
    return $name;
}
function content_for_folder($path_for_create)
{   $text_for_file = makeRandomString(rand(1000,10000));
    $filename = generateRandomName();
    $name_for_save = $path_for_create . '/'.$filename .'.txt'; 
    $myfile = fopen($name_for_save, "a") or die("Unable to open file!");
    fwrite($myfile, "\n". $text_for_file);
    fclose($myfile);
}
function create_folder($path)
{
    $name_folder = generateRandomName();
    $create_path = $path . "/".$name_folder;
    mkdir($create_path);
    return  $create_path;
}


function create_folder_with_content()
{   
    $quan_files = rand(5,20);
    $path = getcwd();
    $folder_for_fill = create_folder($path);
    for($i=0;$i<$quan_files;$i++)
    {
        $fill_forlder = content_for_folder($folder_for_fill);
    }
}

function create_folders()
{
    $quant_dir = rand(5,12); 
    for($i=0;$i<$quant_dir;$i++)
    {
        create_folder_with_content();
    }
}

function get_folder_list()
{
    $path = getcwd();
    $files = scandir($path);
    $is_dirs = [];
    for($i=0;$i<count($files);$i++)
    {
        if((is_dir($path .'/'.$files[$i])) && ($files[$i]!== '..') && ($files[$i] !==  "."))
        {
            array_push($is_dirs,$files[$i]);
        }
    }
    return $is_dirs;
}


function delete_handler()
{
    $folders = get_folder_list();
    $path_for_delete = getcwd() . "/" . end($folders);
    system("rm -rf ".escapeshellarg($path_for_delete));
    
    echo "dir $path_for_delete deleted";
    echo "<br>";
    if (count($folders)>1)
    {
    
        delete_handler();
    }
}



function delete_folders()
{
    $folders = get_folder_list();
    var_dump($folders);
    if(count($folders)>0)
    {
        delete_handler();
    }
}


function main()
{
    create_folders();
    delete_folders();
}
main();
?>