<?php
require_once("../egyeb/connect.php");

$nev = $_COOKIE['nev'];

$elet = $_COOKIE['elet'];
$lakas = $_COOKIE['lakas'];
$auto = $_COOKIE['auto'];

$jelenlegiEgyenleg = 0;

$jelenlegiEletBizt = 0;
$jelenlegiLakasBizt = 0;
$jelenlegiAutoBizt = 0;
$vaneLakas = 0;
$vaneAuto = 0;

$select = "SELECT nev, egyenleg FROM `jatekosok`";
$result = mysqli_query($conn, $select);
while($row = mysqli_fetch_array($result)){
    if($row["nev"] == $nev){
        $jelenlegiEgyenleg = $row["egyenleg"];
    }
}

$selectBiztositas = "SELECT lakasbiztositas, eletbiztositas, autobiztositas, auto, lakas FROM `jatekosok` WHERE nev = '$nev'";
$resultBiztositas = mysqli_query($conn, $selectBiztositas);
while($rowBiztositas = mysqli_fetch_array($resultBiztositas)){
    $jelenlegiEletBizt = $rowBiztositas["eletbiztositas"];
    $jelenlegiLakasBizt = $rowBiztositas["lakasbiztositas"];
    $jelenlegiAutoBizt = $rowBiztositas["autobiztositas"];

    $vaneAuto = $rowBiztositas["auto"];
    $vaneLakas = $rowBiztositas["lakas"];
}

if($elet == "true"){
    if($jelenlegiEletBizt == 0){
        echo "elet";
    }
    else{
        echo "0";
    }
}

if($lakas == "true"){
    if($jelenlegiLakasBizt == 0 && $vaneLakas == 1){
        echo "lakas";
    }
    else{
        echo "0";
    }
}

if($auto == "true"){
    if($jelenlegiAutoBizt == 0 && $vaneAuto == 1){
        echo "auto";
    }
    else{
        echo "0";
    }
}
  
mysqli_close($conn);
?>