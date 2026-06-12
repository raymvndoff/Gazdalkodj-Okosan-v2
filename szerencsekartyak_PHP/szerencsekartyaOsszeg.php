<?php
require_once("../egyeb/connect.php");

$id = $_COOKIE['id'];

$select = "SELECT osszeg FROM szerencse_kartyak WHERE id = $id";
$result = mysqli_query($conn, $select);
while($row = mysqli_fetch_array($result)){
    if($row['osszeg'] == null){
        echo "null";
        return;
    }
    echo $row['osszeg'];
}

mysqli_close($conn);
?>