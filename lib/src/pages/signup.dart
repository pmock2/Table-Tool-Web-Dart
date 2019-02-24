part of application;

SignUpPage signUpPage = SignUpPage._private();

class SignUpPage extends Page {
  SignUpPage._private();
  InputElement email;
  InputElement username;
  InputElement password;
  InputElement confirmPassword;
  ButtonElement signUpButton;
  SpanElement status;

  void show() {
    clear();
    String markup = '''
      <div class="login-container">
        <div class="tab-content">
          <div class="login-child-container">
            <h1 class="login-title">Sign Up For Table Tool</h1>
            <div class="login-input-field">
              <input
                placeholder=" "
                type="text"
                maxlength="88"
                autocomplete="off"
                class="login-input"
                id="email"
              >
              <label class="login-label">Email</label>
            </div>
            <div class="login-input-field">
              <input
                placeholder=" "
                type="text"
                maxlength="88"
                autocomplete="off"
                class="login-input"
                id="username"
              >
              <label class="login-label">Username</label>
            </div>
            <div class="login-input-field">
              <input
                placeholder=" "
                type="password"
                maxlength="100000"
                autocomplete="off"
                class="login-input"
                id="password"
              >
              <label class="login-label">Password</label>
            </div>
            <div class="login-input-field">
              <input
                placeholder=" "
                type="password"
                maxlength="100000"
                autocomplete="off"
                class="login-input"
                id="confirm-password"
              >
              <label class="login-label">Confirm Password</label>
            </div>
            <p>
              <div class="login-link">
                <b>Already a member?</b>
              <div>
            </p>
            <button class="login-button">SIGN UP NOW</button>
            <span class="status"></span>
          </div>
        </div>
      </div>
    ''';
    content.setInnerHtml(markup, treeSanitizer: NullTreeSanitizer());
    content.setInnerHtml(markup, treeSanitizer: NullTreeSanitizer());
    signUpButton = findInContent('.login-button');
    username = findInContent('#username');
    password = findInContent('#password');
    status = findInContent('.status');
    email =findInContent('#email');
    confirmPassword =findInContent('#confirm-password');
    _wireItUp();
  }

  void _wireItUp() {
    listeners.addAll([
      findInContent('.login-link').onClick.listen((e) {
        loginPage.show();
      }),
      signUpButton.onClick.listen((e) {
        if (username.value != '' &&
            password.value != '' &&
            email.value != '' &&
            confirmPassword.value != '' &&
            confirmPassword.value == password.value) {
          HttpRequest.request("${serverUrl}/account",
              method: "POST",
              withCredentials: true,
              requestHeaders: {"content-type": "application/JSON"},
              sendData: jsonEncode({
                "userName": username.value,
                "password": password.value,
                "email": email.value
              })).then((response) {
            if (response.status == 200) {
              dashbaordPage.show();
            }
          }).catchError((e) {
            status.text = 'Did not sign up';
          });
        } else {
          status.text = 'Please fill out all fields';
        }
      }),
    ]);
  }
}
