<?php
//header('Content-Type: text/html; charset=utf-8');
ini_set('display_errors', 1); 
error_reporting(E_ALL);
$code = isset($_GET['code']) ? $_GET['code'] : '';
$configFile = __DIR__ . '/config/' . $code . '.php';
if (!file_exists($configFile)) {
    exit('error code');
}
$configs = require($configFile);
$configs['down'] = isset($_GET['down']) ? $_GET['down'] : false;
$configs['isCss'] = isset($_GET['isCss']) ? $_GET['isCss'] : false;
$isMobile = isset($_GET['isMobile']) ? $_GET['isMobile'] : false;
$configs['code'] = $isMobile ? $code . '-m' : $code;
$configs['rootPath'] = __DIR__;

require_once __DIR__ . '/models/Spider.php';
$model = new models\Spider($configs);
$model->downFiles();
