<?php
include'autoload.php';

// Unset all session values
$_SESSION = array();

// Destroy session
unset($_COOKIE['user_id']);
unset($_SESSION['user_id']);
setcookie('user_id','');
setcookie('space_id','');

unset($_COOKIE['login_string']);
unset($_SESSION['login_string']);
unset($_SESSION['space_id']);
setcookie('login_string','');

session_destroy();

?>
<!doctype html>
<html lang="en-US" itemscope itemtype="http://schema.org/Blog" prefix="og: http://ogp.me/ns#">
<head>

<!--[if lt IE 9]>
<script src="http://ie7-js.googlecode.com/svn/version/2.1(beta4)/IE9.js"></script>
<![endif]-->

<!-- Meta Tag -->
<meta charset="utf-8">

<!-- Viewport (Responsive) -->
<meta name="viewport" content="width=device-width">
<meta name="viewport" content="user-scalable=no">
<meta name="viewport" content="initial-scale=1,maximum-scale=1">

<?php // include'favicon.php';?>
<title>Logout...</title>

<!-- CSS -->
<link rel="stylesheet" href="css/style.css" type="text/css"/>

</head>
<body>
<div class="progressbar" id="progressbar"></div>
<div class="logout">System Logout...</div>
</body>

<script type="text/javascript" src="js/lib/jquery-3.2.1.min.js"></script>
<script type="text/javascript">
$(document).ready(function(){
	$progressbar = $('#progressbar');
	$progressbar.fadeIn(300);
	$progressbar.animate({width:'100%'},700);

	setTimeout(function(){window.location = 'login.php';},1500);
});
</script>
</html>
