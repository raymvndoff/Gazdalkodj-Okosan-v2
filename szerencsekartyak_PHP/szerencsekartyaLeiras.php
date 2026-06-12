<?php
require_once("../egyeb/connect.php");

$id = $_COOKIE['id'];

$select = "SELECT leiras FROM szerencse_kartyak WHERE id = $id";
$result = mysqli_query($conn, $select);
while($row = mysqli_fetch_array($result)){
    echo $row['leiras'];
}

mysqli_close($conn);
?>