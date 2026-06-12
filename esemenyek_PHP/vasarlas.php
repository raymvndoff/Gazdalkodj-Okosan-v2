<?php
require_once("../egyeb/connect.php");

$nev = $_COOKIE['nev'];
$termek = $_COOKIE['termek'];
$osszeg = $_COOKIE['osszeg'];

$jelenlegiEgyenleg = 0;
$vizsgaltTermek = 0;
$vanelakas = 0;

$select = "SELECT $termek, egyenleg, lakas FROM `jatekosok` WHERE nev = '$nev'";
$result = mysqli_query($conn, $select);
while($row = mysqli_fetch_array($result)){
    (int)$vizsgaltTermek = $row["$termek"];
    (int)$jelenlegiEgyenleg = $row["egyenleg"];
    (int)$vanelakas = $row['lakas'];
}

if($termek == "konyhabutor" || $termek == "szobabutor"){
    if($vizsgaltTermek == 1 || $vanelakas == 0){
        echo "termekfalse";
        return;
    }
}

if($vizsgaltTermek == 1){
    echo "termekfalse";
    return;
}
if($jelenlegiEgyenleg < $osszeg){
    echo "osszegfalse";
    return;
}

$ujEgyenleg = $jelenlegiEgyenleg - $osszeg;
$update = "UPDATE jatekosok SET $termek = 1, egyenleg = $ujEgyenleg WHERE nev = '$nev'";
mysqli_query($conn, $update);
  
mysqli_close($conn);
?>