const baseURL = `http://localhost:3000`

$(document).ready(function() {
  if (!localStorage.getItem('jwtToken')) {
    $('.login').show()
    $('.homepage').hide()
  } else {
    $('.login').hide()
    $('.homepage').show()
    showTodoList()
  }
})

function register(event) {
  event.preventDefault()
  $('.login-form').show()
  $.ajax({
    url: `${baseURL}/user/register`,
    method: "POST",
    data : {
      email : $('#email-register').val(),
      password : $('#password-register').val()
    }
  })
  .done(user => {
  console.log(`Register success`, user);
  $('.register-form').hide()
  $('#email-register').val('')
  $('#password-register').val('')
  $('.login-form').show()
  })
  .fail(err => {
    console.log(`Register failed. Proceed resubmission or try proceed login`, err);
  })
  .always(() => {
    console.log(`complete`);
  })
}


function login(event) {
  event.preventDefault()
  $.ajax({
    url: `${baseURL}/user/login`,
    method: "POST",
    data : {
      email : $('#email-login').val(),
      password : $('#password-login').val()
    }
  })
  .done(token => {
    localStorage.setItem('jwtToken', token.token)
    showTodoList()
    $('.login').hide()
    $('.homepage').show()
    $('#email-login').val('')
    $('#password-login').val('')
  })
  .fail(err => {
    console.log(err);
    
    console.log(`Login failed`);
  })
  .always(() => {
    console.log(`complete`);
    
  })
}


function onSignIn(googleUser) {
  let id_token = googleUser.getAuthResponse().id_token

  $.ajax({
    url: `http://localhost:3000/user/google-signin`,
    method: `POST`,
    data : {
      idToken : id_token
    }
  })
  .done(result => {
    // console.log(result);
    localStorage.setItem('jwtToken', result.token)
    $('.homepage').show()
    $('.login').hide()


  })
}

  function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });    
      localStorage.removeItem('jwtToken')
      $('.login').show()
      $('.homepage').hide()
      $('.alltodos').empty()
  }