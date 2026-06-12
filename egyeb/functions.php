<?php
session_start();

function htmlKiir($html){
    echo file_get_contents($html);
}