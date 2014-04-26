/**
 * Cassy's JS file
 */

function checkform (form) {

	if (form.login_email.value == "") {
		alert( "Please enter your email address." );
		form.login_email.focus();
		return false;
	}
	
	if (form.login_password.value == "") {
		alert( "Please enter your password." );
		form.login_password.focus();
		return false;
	}
	
	return true;
    
 }