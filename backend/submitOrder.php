<?php
include 'config.php';

$data = json_decode(file_get_contents("php://input"));

$name = $data->name;
$address = $data->address;
$city = $data->city;
$state = $data->state;
$zip = $data->zip;
$country = $data->country;
// Iterate over the items array and extract the name
$items = json_encode($data->items);

$total_price = $data->total_price;

$stmt = $conn->prepare("INSERT INTO orders (name, address, city, state, zip, country, items, total_price) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
$stmt->bind_param("sssssssd", $name, $address, $city, $state, $zip, $country, $items, $total_price);

if ($stmt->execute()) {
    echo json_encode(["success" => true, "message" => "Order submitted successfully"]);
} else {
    echo json_encode(["success" => false, "message" => "Order submission failed"]);
}

$stmt->close();
$conn->close();
?>
