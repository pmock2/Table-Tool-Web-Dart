part of application;

LoginPage loginPage = LoginPage._private();

class LoginPage extends Page {
  LoginPage._private();
  ButtonElement loginButton = ButtonElement();
  InputElement username;
  InputElement password;
  SpanElement status;

  void show() {
    clear();
    String markup = '''
    <div class="login-container">
      <div class="tab-content">
        <div class="login-child-container">
          <h1 class="login-title">Welcome Back!</h1>
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
          <p class="forgot">
            <a class="login-link">Forgot Password?</a>
          </p>
          <p>
            <div class="login-link">
              <b>Not a member?</b>
            </div>
          </p>
          <button class="login-button">Log In</button>
          <span class="status"></span>
        </div>
      </div>
    </div>
    ''';
    content.setInnerHtml(markup, treeSanitizer: NullTreeSanitizer());
    loginButton = findInContent('.login-button');
    username = findInContent('#username');
    password = findInContent('#password');
    status = findInContent('.status');

    _wireItUp();
  }

  void _wireItUp() {
    listeners.addAll([
      findInContent('.login-link b').onClick.listen((e) {
        signUpPage.show();
      }),
      loginButton.onClick.listen((e) {
        if (username.value != '' && password.value != '') {
          HttpRequest.request("${serverUrl}/session",
                  method: "POST",
                  withCredentials: true,
                  requestHeaders: {"content-type": "application/JSON"},
                  sendData: jsonEncode(
                      {"userName": username.value, "password": password.value}))
              .then((response) {
            if (response.status == 200) {
              HttpRequest.request("${serverUrl}/account",
                      method: "GET", withCredentials: true)
                  .then((response) {
                userProfile = jsonDecode(response.response);
                dashbaordPage.show();
                loggingIn.add(true);
              }).catchError((e) {
                loggingIn.add(false);
              });
            } else {
              window.alert('Not Logged in!');
            }
          }).catchError((e) {
            status.text = 'Incorrect username or password';
          });
        } else {
          status.text = 'Please fill out all fields';
        }
      }),
    ]);
  }
}
