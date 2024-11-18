<?php
include 'config.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $input = json_decode(file_get_contents("php://input"), true);
    $email = $input["email"];
    $password = $input["password"];

    $sql = "SELECT * FROM users WHERE email = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();
    $user = $result->fetch_assoc();

    if ($user && password_verify($password, $user["password"])) {
        echo json_encode(["message" => "Login successful", "name" => $user["name"]]);
    } else {
        echo json_encode(["error" => "Invalid email or password"]);
    }
}
?>

