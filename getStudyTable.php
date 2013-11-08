<?php
$command     = urlencode('');
$year = urlencode('2556');
$semester  = urlencode('2');
$watch  = urlencode('ดูตารางเรียน');


$str= "command=".$command."&year=".$year."&semester=".$semester."&watch=".$watch;

//print $str;

 $ch=curl_init();
 curl_setopt($ch,CURLOPT_URL,'http://localhost:82/remote_form.php');
 curl_setopt ($ch, CURLOPT_POST, 1);
 curl_setopt ($ch, CURLOPT_POSTFIELDS, $str);

 echo curl_exec($ch);
 curl_close($ch);
 echo curl_error($ch);
?>