<?php
require_once("../egyeb/connect.php");

$nev = $_COOKIE['nev'];
$jelenlegiEgyenleg = 0;
$buntetes = 0;

$selectBerlet = "SELECT berlet FROM `jatekosok` WHERE nev = '$nev'";
$resultBerlet = mysqli_query($conn, $selectBerlet);
while($rowBerlet = mysqli_fetch_array($resultBerlet)){
    if($rowBerlet['berlet'] == "0"){
        $buntetes = "true";
    }
    else{
        $buntetes = "false";
    }
}

if($buntetes == "true"){
    $select = "SELECT egyenleg FROM `jatekosok` WHERE nev = '$nev'";
    $result = mysqli_query($conn, $select);
    while($row = mysqli_fetch_array($result)){
        $jelenlegiEgyenleg = $row["egyenleg"];
    }
    
    $ujegyenleg = $jelenlegiEgyenleg - 6000;
    
    $update = "UPDATE jatekosok SET egyenleg = $ujegyenleg WHERE nev = '$nev'";
    mysqli_query($conn, $update);

    echo "true";
}
  
mysqli_close($conn);
?>