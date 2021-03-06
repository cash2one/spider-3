<?php
header('Content-Type: text/html; charset=utf-8');
ini_set('display_errors', 1); 
error_reporting(E_ALL);
$configPath = __DIR__ . '/config/';
$codeInfos = [];
$files = scandir($configPath);
foreach ($files as $file) {
    if ($file == '.' || $file == '..' || strpos($file, '.php') === false) {
        continue;
    }

    $code = str_replace('.php', '', $file);
    $codeInfos[$code] = require $configPath . '/' . $file;
}
$str = '';
$prefixs = [
    '' => '',
    '&down=1' => '-下载',
    '&isCss=1' => '-样式表',
    '&down=1&isCss=1' => '-样式表下载',
];
foreach ($codeInfos as $code => $config) {
    foreach (['' => '', '&isMobile=1' => '-移动端'] as $codeExt => $ext) {
        $name = $config['name'] . $ext;
        foreach ($prefixs as $prefix => $title) {
            $str .= "<a href='down.php?code={$code}{$codeExt}{$prefix}' target='_blank'>{$name}{$title}</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
        }
        $str .= "<a href='asset.php?code={$code}{$codeExt}' target='_blank'>前端资源</a>";
        $str .= "\n<br />";
    }
}
echo $str;
