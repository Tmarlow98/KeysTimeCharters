<?php
// PHP code goes here

//store variables
$FName = $_POST['FirstName'];
$LName = $_POST['LastName'];
$Email = $_POST['Email'];
$Message = $_POST['Message'];


//DB credentials
$user = "test";
$pass = "test";
$db = "test";
$serverName = "test";

//create connection
try {
    $conn = mysqli_connect($serverName, $user, $pass, $db);
    }
    
    catch (PDOException $e) {
    echo $e->getMessage();
    }
    
//Insert Statement    
$sql = "INSERT into trips (FirstName, LastName, Email, Message)
values('$FName', '$LName', '$Email', '$Message')";

//Error Check
if(mysqli_query($conn, $sql)){
    echo "Trip Successfully Booked!";
} else {
    echo "Ooops! something went wrong!";
}

//Display info to screen
echo "<br>";
echo "First Name: " . $FName;
echo "<br>";
echo "Last Name: ". $LName;
echo "<br>";
echo "Email: " . $Email;
echo "<br>";
echo "Message: " . $Message;
        
?>