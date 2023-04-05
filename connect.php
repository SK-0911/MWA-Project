<?php

$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$SapID = $_POST['SapID'];
$Email = $_POST['Email'];
$Phone = $_POST['Phone'];
$linkedin = $_POST['linkedin'];
$github = $_POST['github'];
$DOB = $_POST['DOB'];
$gender = $_POST['gender'];

//Database connection
$conn = new mysqli('localhost', 'root', '', 'connection');
if($conn->connect_error){
    die('Connection Failed : ' .$conn->connect_error);
}else{
    $stmt = $conn->prepare("INSERT into student_registration(firstName, lastName, SapID, Email, Phone, linkedin, github, DOB, gender) 
    values(?, ?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssisissss", $firstName, $lastName, $SapID, $Email, $Phone, $linkedin, $github, $DOB, $gender);
    $stmt->execute();
    echo "registration successful!";
    $stmt->close();
    $conn->close();
}

?>