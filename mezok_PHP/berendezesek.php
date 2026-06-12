<?php
require_once("../egyeb/connect.php");

$nev = $_COOKIE['nev'];
$osszeg = $_COOKIE['osszeg'];

$mosogep = $_COOKIE['mosogep'];
$huto = $_COOKIE['huto'];
$tuzhely = $_COOKIE['tuzhely'];

$jelenlegiEgyenleg = 0;

$jelenlegiMosogep = 0;
$jelenlegiHuto = 0;
$jelenlegiTuzhely = 0;

$select = "SELECT egyenleg FROM `jatekosok` WHERE nev = '$nev'";
$result = mysqli_query($conn, $select);
while($row = mysqli_fetch_array($result)){
    $jelenlegiEgyenleg = $row['egyenleg'];
}

if($jelenlegiEgyenleg < $osszeg){
    echo "osszegfalse";
    return;
}

$selectBerendezes = "SELECT mosogep, hutoszekreny, tuzhely FROM `jatekosok` WHERE nev = '$nev'";
$resultBerendezes = mysqli_query($conn, $selectBerendezes);
while($rowBerendezes = mysqli_fetch_array($resultBerendezes)){
    $jelenlegiMosogep = $rowBerendezes["mosogep"];
    $jelenlegiHuto = $rowBerendezes["hutoszekreny"];
    $jelenlegiTuzhely = $rowBerendezes["tuzhely"];
}

if($mosogep == "true"){
    if($jelenlegiMosogep == 0){
        echo "1";

        $updatemosogep = "UPDATE jatekosok SET mosogep = 1 WHERE nev = '$nev'";
        mysqli_query($conn, $updatemosogep);
    }
    else{
        echo "0";
        return;
    }
}
if($huto == "true"){
    if($jelenlegiHuto == 0){
        echo "1";

        $updatehuto = "UPDATE jatekosok SET hutoszekreny = 1 WHERE nev = '$nev'";
        mysqli_query($conn, $updatehuto);
    }
    else{
        echo "0";
        return;
    }
}
if($tuzhely == "true"){
    if($jelenlegiTuzhely == 0){
        echo "1";

        $updatetuzhely = "UPDATE jatekosok SET tuzhely = 1 WHERE nev = '$nev'";
        mysqli_query($conn, $updatetuzhely);
    }
    else{
        echo "0";
        return;
    }
}



$ujegyenleg = (int)$jelenlegiEgyenleg - (int)$osszeg;

$updateEgyenleg = "UPDATE jatekosok SET egyenleg = $ujegyenleg WHERE nev = '$nev'";
mysqli_query($conn, $updateEgyenleg);
  
mysqli_close($conn);
?>