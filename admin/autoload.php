<?php
session_start();
// session_regenerate_id(true); // regenerated the session, delete the old one.
ob_start();
define('StTime', microtime(true));

date_default_timezone_set('Asia/Bangkok');
error_reporting(E_ALL ^ E_NOTICE);

define("VERSION" 	,'1.0');
define("SITENAME" 	,'Bhubejhr API');

include_once'../config/config.php';
include_once'class/database.class.php';
include_once'class/reference.class.php';
include_once'class/app.class.php';
include_once'class/user.class.php';
include_once'class/log.class.php';
include_once'class/api.class.php';
include_once'class/signature.class.php';
include_once'class/user.class.php';
include_once'class/account.class.php';

$wpdb = new Database(DB_HOST,DB_NAME,DB_USER,DB_PASS);
$user = new User;
$account = new Account;

$user->sec_session_start();
$user_online = $user->loginChecking();
?>