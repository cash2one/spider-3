<?php
ini_set('display_errors', 1); 
error_reporting(E_ALL);
$code = isset($_GET['code']) ? $_GET['code'] : '';
if (empty($code)) {
    exit('code error');
}
$isMobile = isset($_GET['isMobile']) ? $_GET['isMobile'] : false;
$code .= $isMobile ? '-m' : '';

$path = __DIR__ . '/asset/' . $code;
$cDatas = [
    '17quote' => 'quote1',
    'jmw' => 'plat',
    'toask' => 'ask',
    'toaboutus' => 'about',
];

$cssStr = $jsStr = '';
$files = scandir($path);
foreach ($files as $file) {
    if ($file == 'css' || $file == 'js') {
        $subPath = $path . '/' . $file;
        $subFiles = scandir($subPath);
        foreach ($subFiles as $subFile) {
            if ($subFile == '.' || $subFile == '..') {
                continue;
            }
            $baseName = $file == 'css' ? str_replace('.css', '', $subFile) : str_replace('.js', '', $subFile);
            $pathPre = $file == 'css' ? $cDatas[$code] . '/css/' : $cDatas[$code] . '/js/';
            if ($file == 'css') {
                $cssStr .= "        '{$baseName}' => \$baseAsseturl . '{$pathPre}{$subFile}',\n";
            } else {
                $jsStr .= "        '{$baseName}' => \$baseAsseturl . '{$pathPre}{$subFile}',\n";
            }
        }
    }
}
echo $cssStr;
echo $jsStr;
