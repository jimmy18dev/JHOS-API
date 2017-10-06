$(document).ready(function(){
    $('.btn-new-article').click(function(){
    	$('.choose-dialog').fadeIn(100);
    	$('#filter').fadeIn(300);

    	$('#filter').click(function(){
    		$('.choose-dialog').fadeOut(300);
    		$(this).fadeOut(100);
    	});
    });
});

function login(){
	var username 	= $('#username').val();
	var password 	= $('#password').val();
	var sign 		= $('#sign').val();

	console.log('login()',username,password,sign);

	// if(username == ''){
	// 	$('#username').focus();
	// 	return false;
	// }else if(password == ''){
	// 	alert('คุณยังไม่ได้กรอกรหัสผ่าน!');
	// 	$('#password').focus();
	// 	return false;
	// }

	$.get({
		url         :'api.user.php',
		timeout 	:10000, //10 second timeout
		cache       :false,
		dataType    :"json",
		type        :"POST",
		data:{
			calling     :'user',
			action      :'login',
			username 	:username,
			password 	:password,
			sign 		:sign,
		},
		error: function (request, status, error) {
			console.log("Request Error",request.responseText);
		}
	}).done(function(data){
		console.log(data);

		if(data.return == 1){
			$('#btn-submit').addClass('-loading');
			$('#btn-submit').html('กำลังเข้าระบบ...');
			// $progress.animate({width:'100%'},300);
			
			setTimeout(function(){
				window.location = 'index.php?login=success';
	        },1000);
		}else if(data.return == 0){
			// $progress.animate({width:'0%'},300);
			alert('เข้าระบบไม่สำเร็จ กรุณาตรวจสอบอีกครั้ง!');
		}else if(data.return == -1){
			// $progress.animate({width:'0%'},300);
			alert('คุณต้องรออีก 5 นาที เพื่อเข้าระบบใหม่!');
		}
	}).fail(function() {
		alert('ระบบทำงานผิดพลาด กรุณาลองใหม่อีกครั้ง!');
		// $progress.animate({width:'0%'},300);
		$('#password').focus();
		$('#password').val('');
	});
}

function register(){
	var email 		= $('#email').val();
	var name 		= $('#name').val();
	var password 	= $('#password').val();
	var sign 		= $('#sign').val();

	if(name == ''){
		$('#name').focus();
		return false;
	}else if(email == ''){
		alert('คุณยังไม่ได้ใส่อีเมล!');
		$('#email').focus();
		return false;
	}else if(password == ''){
		alert('คุณยังไม่ได้กรอกรหัสผ่าน!');
		$('#password').focus();
		return false;
	}

	$progress = $('#progress-bar');
	$progress.fadeIn(300);
	$progress.animate({width:'30%'},300);

	$.ajax({
		url         :'api.user.php',
		timeout 	:10000, //10 second timeout
		cache       :false,
		dataType    :"json",
		type        :"POST",
		data:{
			calling     :'user',
			action      :'register',
			email 		:email,
			name 		:name,
			password 	:password,
			sign 		:sign
		},
		error: function (request, status, error) {
			console.log("Request Error");
		}
	}).done(function(data){
		var invite_code = $('#invite_code').val();

		$progress.animate({width:'70%'},300);

		if(data.return != 0){
			$('#btn-register').addClass('-loading');
			$('#btn-register').html('กำลังลงทะเบียน...');
			$progress.animate({width:'100%'},300);

			setTimeout(function(){
				if(invite_code != ''){
					window.location = 'invite?c='+invite_code;
				}else{
					window.location = 'index.php?regsiter=success';	
				}
			},1000);
		}else{
			$progress.animate({width:'0%'},300);
			alert('อีเมลนี้มีในระบบแล้ว!');
		}
	}).fail(function() {
		alert('ระบบทำงานผิดพลาด กรุณาลองใหม่อีกครั้ง!');
		$progress.animate({width:'0%'},300);
		$('#password').focus();
		$('#password').val('');
	});
}