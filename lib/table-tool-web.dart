library application;

import 'dart:html';
import 'dart:async';
import 'dart:convert';
import 'package:TableToolWebDart/global.dart';
import 'package:TableToolWebDart/src/components/component.dart';

part 'src/pages/home.dart';
part 'src/abstracts/page.dart';
part 'src/pages/login.dart';
part 'src/pages/signup.dart';
part 'src/pages/dashboard.dart';

DivElement content;

class Application {
  DivElement shell = document.querySelector('#shell');
  Header header;

  Application() {
    shell.querySelector('.lds-roller').remove();
    _init();
  }

  void _init() {
    content = DivElement()..id = "content";
    shell.append(content);
    _addListeners();

    HttpRequest.request("${serverUrl}/account",
            method: "GET", withCredentials: true)
        .then((response) {
      userProfile = jsonDecode(response.response);
      loggingIn.add(true);
      dashbaordPage.show();
    }).catchError((e) {
      loggingIn.add(false);
      homePage.show();
    });

    Map configuration = {
      '': '/index.html',
    };
    header = Header(configuration, 'Table Tool');
    shell.append(header.element);
  }

  void _addListeners() {
    logInEvent.listen((val) {
      Map configuration;
      loggedIn = val;
      if (loggedIn) {
        configuration = {
          'Dashboard': () => dashbaordPage.show(),
          'Log out': () {
            HttpRequest.request("${serverUrl}/session",
                    method: "DELETE", withCredentials: true)
                .then((response) {
              if (response.status == 200) {
                loggingIn.add(false);
              }
              loginPage.show();
            }).catchError((e) {
              window.alert('Error');
              homePage.show();
            });
          }
        };
        header.element.remove();
        header = null;
        header = Header(configuration, 'Table Tool');

        String userMarkup = '''
          <div class="fas fa-user user-icon"></div>
          <div class="user-name">${userProfile['userName']}</div>
        ''';
        DivElement userContainer = DivElement()
          ..classes.add('user-container')
          ..setInnerHtml(userMarkup, treeSanitizer: NullTreeSanitizer());
        header.element.append(userContainer);
        shell.append(header.element);
      } else {
        configuration = {
          'Home': () => homePage.show(),
          'Log In': () => loginPage.show()
        };
        header.element.remove();
        header = null;
        header = Header(configuration, 'Table Tool');
        shell.append(header.element);
      }
    });
  }
}
