function changeText(newText) {
  event.target.innerHTML = newText;
}

$(document).ready(function() {

	$('#contact_form').on('submit', function(e) {
		e.preventDefault();

		//get the name field value
		var name = $('#contact_Name').val();
		//get the name field value
		var email = $('#contact_Email').val();
		//get the comments
		var comments = $('#message').val();

		//pretend we don't need validation

		//send to formspree
		$.ajax({
			url:'https://formspree.io/maxtdegeorge@gmail.com',
			method:'POST',
			data:{
				name:name,
				_replyto:email,
				 email:email,
				comments:comments,
				_subject:'My Form Submission',
			},
			dataType:"json",
			success:function() {
				console.log('success');
				$('#formBlock').hide();
				$('#thankyouBlock').show();
			}

		});

	});

});
