<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  $to = "michaelh1277@gmail.com";
  $subject = "New Contact Form Submission";
  $headers = "From: $email";

  if (mail($to, $subject, $message, $headers)) {
    header("Location: thank-you.html");
    exit();
  } else {
    echo "Error sending email. Please try again later.";
  }
}
?>
