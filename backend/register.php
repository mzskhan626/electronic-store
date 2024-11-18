<?php
include 'config.php';

if ($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
    error_log("Received OPTIONS request");
    echo 200;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    error_log("Received POST request");
    // error_log($_POST[0]);
    // Convert post array to string
    $data = json_decode(file_get_contents("php://input"), true);
    $name = $data["name"];
    $email = $data["email"];
    $password = password_hash($data["password"], PASSWORD_BCRYPT);

    $sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sss", $name, $email, $password);

    if ($stmt->execute()) {
        echo json_encode(["message" => "User registered successfully"]);
    } else {
        echo json_encode(["error" => "Failed to register user"]);
    }
}
?>
