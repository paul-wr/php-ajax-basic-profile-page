<?php
$ok = move_uploaded_file($_FILES['file']['tmp_name'], './img/' . $_FILES['file']['name']);
// this message will be passed to the browser
echo $_FILES['file']['name']; echo $ok ? " uploaded successfully!" : " upload failed!";

// set the image element to AJAX file
file_put_contents('img.txt', '<img src="./img/' . $_FILES['file']['name'] . ' " class="img-responsive"/>');

// redirect page to profile page after success message displays
$url='http://localhost:8879/profile/profile-img-set.html';
   echo '<META HTTP-EQUIV=REFRESH CONTENT="1; '.$url.'">';

?>