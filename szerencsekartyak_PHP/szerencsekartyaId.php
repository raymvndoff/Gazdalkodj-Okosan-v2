<?php
require_once("../egyeb/connect.php");

$id = 0;

$selectVane = "SELECT COUNT(id) as elerhetoek FROM `szerencse_kartyak` WHERE elerheto = 1";
$resultVane = mysqli_query($conn, $selectVane);
while($rowVane = mysqli_fetch_array($resultVane)){
    if($rowVane['elerhetoek'] == 0){
        $updateElerhetoMind = "UPDATE szerencse_kartyak SET elerheto = 1";
        mysqli_query($conn, $updateElerhetoMind);
    }
}

$select = "SELECT id FROM szerencse_kartyak WHERE elerheto = 1 ORDER BY RAND() LIMIT 1";
$result = mysqli_query($conn, $select);
while($row = mysqli_fetch_array($result)){
    $id = $row['id'];
}

echo $id;

$update = "UPDATE szerencse_kartyak SET elerheto = 0 WHERE id = $id";
mysqli_query($conn, $update);

mysqli_close($conn);
?>