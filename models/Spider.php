<?php

namespace models;

class Spider
{
    protected $configs;
    public function __construct($configs)
    {
        $this->configs = $configs;
    }

    public function downFiles()
    {
        $datas = $this->getDatas();
        $i = $j = 1;
        $existStr = $noStr = '';
        foreach ($datas as $file) {
            $file = str_replace('"', '', $file); $file = trim(str_replace("'", '', $file));
            $url = strpos($file, 'ttp:') || strpos($file, '//') !== false ? $file : $this->configs['urlpre'] . str_replace('..', '', $file);
            if (strpos($url, 'tugao.com')) {
                continue;
            }
            $basefile = basename($file);
            $basefile = strpos($basefile, '?') !== false ? substr($basefile, 0, strpos($basefile, '?')) : $basefile;
            $info = $this->downFile($url, $basefile);
            $remoteStr = "<a href='{$url}' target='_blank'>{$url}</a>";
            $localPre = 'http://60.205.145.0/common/spider/asset/' . $this->configs['code'];
            $localPre .= $this->configs['isCss'] ? '/images/' : '/img/';
            $localStr = "<a href='{$localPre}{$basefile}' target='_blank'>{$info['file']}</a>";
            if ($info['exist']) {
                $existStr .= $i . 'yes-' . $basefile . '-' .  $remoteStr . '===to===' . $localStr . '<br />';
                $i++;
            } else {
                $noStr .= $j . 'no-' . $basefile . '-' .  $remoteStr . '===to===' . $localStr . '<br />';
                $j++;
            }
        }
        echo '<h1>no file</h1>';
        echo $noStr;
        echo '<h1>file exist</h1>';
        echo $existStr;
    }

    protected function getDatas()
    {
        $content = $this->getAllFiles();
        $patterns = $this->getPatterns();
        $datas = []; 
        foreach ($patterns as $pattern) {
            preg_match_all($pattern, $content, $url);
            if (is_array($url)) {
                $datas = array_merge($datas, $url['url']);
            }
        }
        $datas = array_unique($datas);
        return $datas;
    }

    function downFile($url, $basefile,  $isForce = false)
    {
        $url = strpos($url, '//') === 0 ? 'http:' . $url : $url;
        $cssPrefix = $this->configs['isCss'] ? '/images/' : '/img/';
        $path = $this->configs['rootPath'] . '/asset/' . $this->configs['code'] . $cssPrefix;
        if (!is_dir($path)) {
            mkdir($path, '0755', true);
        }
        $localFile = $this->configs['rootPath'] . '/asset/' . $this->configs['code'] . $cssPrefix . $basefile;
        $url = str_replace('com//', 'com/', $url);
        $data['file'] = $localFile;
        $data['exist'] = $exist = file_exists($localFile);
        if (!$this->configs['down'] || $exist || empty($url)) {
            return $data;
        }
        //echo "wget -O {$localFile} {$url}\n<br />";
        //return ;
        
        //$fileInfos = pathinfo($url);
        $remoteContent = file_get_contents($url);
        $remoteContent && file_put_contents($localFile, $remoteContent);
        return true;
    }
    
    function getAllFiles($path = null)
    {   
        static $content;
        if (is_null($path)) {
            $path = $this->configs['isCss'] ? "/asset/{$this->configs['code']}/css/" : "/source/{$this->configs['code']}/";
            $path = dirname(dirname(__FILE__)) . $path;
        }
        
        if(is_dir($path)){
            $dp = dir($path);
            while ($file = $dp ->read()){
                if($file !='.' && $file !='..'){
                    $this->getAllFiles($path . '/' . $file);
                }
            }
            $dp ->close();
        } else if (is_file($path)) {
            $content .= file_get_contents($path);
        }
        return $content;
    }

    protected function getPatterns()
    {
        $patterns = [ 
            '@data-original="(?P<url>.*)"@Us',
            '@data-source="(?P<url>.*)".*@Us',
            '@src= *"(?P<url>.*)".*@Us',
            "@src= *'(?P<url>.*)'.*@Us",
            '@<link.*type="text/css".*href="(?P<url>.*)".*>@Us',
            "@url\( *'(?P<url>.*)'.*\)@Us",
            '@url\( *"(?P<url>.*)".*\)@Us',
            '@url\((?P<url>.*)\)@Us',
            "@<link.*href='(?P<url>.*\.css)'.*>@Us",
            '@<link.*href="(?P<url>.*)".*>@Us',
        ];

        return $patterns;
    }
}
