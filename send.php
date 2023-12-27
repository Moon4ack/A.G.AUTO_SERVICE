<?php
// Replace these with your token and chat ID
$telegramToken = "6709983010:AAGrsmQGeWahXxtAIAblDtQEcEVPKi_2C0w";
$chatID = "1033082924";
$chatID_1 = "5568857304";

// Collect data from the form
$fullName = $_POST['fullName'];
$phone = $_POST['phone'];
$service = $_POST['service'];

// Create a message
$message = "Новий запит:\n\nName: $fullName\nPhone: $phone\nService: $service";

// Send the message to Telegram
sendMessage($chatID, $message, $telegramToken);
sendMessage($chatID_1, $message, $telegramToken);

function sendMessage($chatID, $message, $token) {
    $url = "https://api.telegram.org/bot$token/sendMessage?chat_id=$chatID&text=" . urlencode($message);
    file_get_contents($url);
}
?>