<?php
require_once("../egyeb/connect.php");
$nev = $_COOKIE['nev'];

$select = "SELECT szobabutor, lakas, egyenleg FROM `jatekosok` WHERE nev = '$nev'";
$result = mysqli_query($conn, $select);
while($row = mysqli_fetch_array($result)){
    if($row['szobabutor'] == 0 && $row['lakas'] == 1){
        $update = "UPDATE jatekosok SET szobabutor = 1 WHERE nev = '$nev'";
        mysqli_query($conn, $update);
    }
    else{
        (int)$ujegyenleg = (int)$row['egyenleg'] + 900000;
        $update = "UPDATE jatekosok SET egyenleg = $ujegyenleg WHERE nev = '$nev'";
        mysqli_query($conn, $update);
    }
}

mysqli_close($conn);
?>