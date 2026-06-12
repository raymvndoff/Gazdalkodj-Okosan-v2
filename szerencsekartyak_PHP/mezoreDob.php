<?php
require_once("../egyeb/connect.php");

$nev = $_COOKIE['nev_mezo'];
$ujmezo = $_COOKIE['ujmezo'];

$jelenlegiMezo = 0;
$jelenlegiEletBizt = 0;
$kapottemar = 0;
$jelenlegiEgyenleg = 0;

$select = "SELECT mezo, eletbiztositas, bonusz1m, egyenleg FROM `jatekosok` WHERE nev = '$nev'";
$result = mysqli_query($conn, $select);
while($row = mysqli_fetch_array($result)){
    $jelenlegiMezo = $row['mezo'];
    $jelenlegiEletBizt = $row['eletbiztositas'];
    $kapottemar = $row['bonusz1m'];
    $jelenlegiEgyenleg = $row['egyenleg'];
}

if($jelenlegiEletBizt == 1 && $ujmezo == 9 && $kapottemar == 0){
    (int)$ujegyenleg = (int)$jelenlegiEgyenleg + 1500000;
    $updateEgyenleg = "UPDATE jatekosok SET egyenleg = $ujegyenleg, bonusz1m = 1 WHERE nev = '$nev'";
    mysqli_query($conn, $updateEgyenleg);
}

if($jelenlegiMezo > $ujmezo){
    (int)$ujegyenleg = (int)$jelenlegiEgyenleg + 500000;
    $updateEgyenleg = "UPDATE jatekosok SET egyenleg = $ujegyenleg WHERE nev = '$nev'";
    mysqli_query($conn, $updateEgyenleg);
    if($ujmezo >= 8){
        (int)$ujegyenleg2 = (int)$ujegyenleg * 1.07;
        $updateEgyenleg = "UPDATE jatekosok SET egyenleg = $ujegyenleg2 WHERE nev = '$nev'";
        mysqli_query($conn, $updateEgyenleg);
    }
}

if($ujmezo >= 8 && $ujmezo > $jelenlegiMezo && $jelenlegiMezo < 8){
    (int)$ujegyenleg = (int)$jelenlegiEgyenleg * 1.07;
    $updateEgyenleg = "UPDATE jatekosok SET egyenleg = $ujegyenleg WHERE nev = '$nev'";
    mysqli_query($conn, $updateEgyenleg);
}

if($ujmezo == 42){
    (int)$ujegyenleg = (int)$jelenlegiEgyenleg + 1000000;
    $updateEgyenleg = "UPDATE jatekosok SET egyenleg = $ujegyenleg WHERE nev = '$nev'";
    mysqli_query($conn, $updateEgyenleg);
}

$update = "UPDATE jatekosok SET mezo = $ujmezo WHERE nev = '$nev'";
mysqli_query($conn, $update);
  
mysqli_close($conn);
?>