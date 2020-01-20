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

function get_folder_list($for_delete=false)
{
    $path = getcwd();
    $files = scandir($path);
    $is_dirs = [];
    if($for_delete)
    {
        $files = scandir($path .'/'. $for_delete);
    } 
    for($i=0;$i<count($files);$i++)
    {
        if((is_dir($path .'/'.$files[$i])) && ($files[$i]!== '..') && ($files[$i] !==  "."))
        {
            array_push($is_dirs,$files[$i]);
        }
    }
    return $is_dirs;
}
function remove_all_in_folder($folder)
{
    $get_list_files = get_folder_list($folder);
    var_dump($get_list_files);
   # if(count($folder)>0)
   #remove_files();
       # {
    #}
}



function remove_all($folders)
{
    var_dump(count($folders));
    for($i=0;$i<count($folders);$i++)
        remove_all_in_folder($folders[$i]);
        #move_up();
        #remove_folder($folder);
}


function delete_folders()
{
    $folders = get_folder_list(); 
    remove_all($folders);
}


function main()
{
    #create_folders();
    delete_folders();
}
main();
?>