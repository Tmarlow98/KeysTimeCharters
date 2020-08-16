<?php

    $root = $_SERVER['DOCUMENT_ROOT'];
    $path = $root .  '/Configurations/config_db.ini';   
    $configuration = parse_ini_file($path, true, INI_SCANNER_RAW);
    $db_config = $configuration['DatabaseConfig'];
    
    $user = $db_config['user'];
    $pass = $db_config['pass'];
    $db = $db_config['db'];
    $serverName = $db_config['serverName'];

    try {
        $conn = mysqli_connect($serverName, $user, $pass, $db);
        }
        
        catch (PDOException $e) {
        echo $e->getMessage();
        }

?>