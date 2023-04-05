<?php

$conn = mysqli_connect('localhost', 'root', '', 'connection');
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

$sql = "INSERT INTO 'student_registration' ('id', 'firstName', 'lastName', 'SapID', 'Email', 'Phone', 'linkedin', 'github', 'DOB', 'gender') VALUES('0', '$firstName', '$lastName', '$SapID', '$Email' , '$Phone' , '$linkedin' , '$github' , '$DOB' , '$gender')";

// insert in database 
$rs = mysqli_query($conn, $sql);

if($rs)
{
	echo "Records Inserted";
}

?>