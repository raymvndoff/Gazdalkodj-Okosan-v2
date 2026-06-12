<?php
require_once("../egyeb/connect.php");

$vizsgaltmezo = $_COOKIE['vizsgaltmezo'];

$select = "SELECT leiras FROM `mezok` WHERE id = $vizsgaltmezo";
$result = mysqli_query($conn, $select);
while($row = mysqli_fetch_array($result)){
    echo $row["leiras"];
}

mysqli_close($conn);
?>