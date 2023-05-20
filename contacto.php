<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $fullname = $_POST["fullname"];
  $phone = $_POST["phone"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  // Aquí puedes agregar tu lógica para procesar los datos del formulario
  // Por ejemplo, enviar un correo electrónico o guardar la información en una base de datos

  // Ejemplo de envío de correo electrónico
  $to = "eugenio.aragon@gmail.com";
  $subject = "Nuevo mensaje del formulario de contacto";
  $email_body = "Nombre: $fullname\nTeléfono: $phone\nEmail: $email\nMensaje:\n$message";
  $headers = "From: $email";
  mail($to, $subject, $email_body, $headers);

  // Redirigir al usuario a una página de éxito o mostrar un mensaje de confirmación
  header("Location: index.html");
  exit();
}
?>
