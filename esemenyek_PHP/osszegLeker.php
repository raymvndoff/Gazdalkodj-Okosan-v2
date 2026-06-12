<?php
require_once("../egyeb/connect.php");
$vizsgaltmezo = $_COOKIE['vizsgaltmezo'];
$osszeg_id = 0;
$osszeg = 0;

$select = "SELECT * FROM `mezok`";
$result = mysqli_query($conn, $select);
while($row = mysqli_fetch_array($result)){
    if($vizsgaltmezo == $row["id"]){
        $osszeg_id = $row["osszeg_id"];
    }
}

if($osszeg_id != null){
    $selectOsszeg = "SELECT * FROM `osszegek`";
    $resultOsszeg = mysqli_query($conn, $selectOsszeg);
    while($rowOsszeg = mysqli_fetch_array($resultOsszeg)){
        if($osszeg_id == $rowOsszeg["id"]){
            $osszeg = $rowOsszeg["osszeg"];
        }
    }
}

echo $osszeg;
?>