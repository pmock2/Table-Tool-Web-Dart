library global;

import 'dart:html';
import 'dart:async';

class NullTreeSanitizer implements NodeTreeSanitizer {
  @override
  void sanitizeTree(Node node) {}
}

  StreamController loggingIn = StreamController.broadcast();
  Stream get logInEvent => loggingIn.stream;

num highestZIndex = 0;

String serverUrl = 'http://localhost:3001';

bool loggedIn = false;

Map<String, dynamic> userProfile;

num getHighestZIndex() {
  List<Element> elements = document.querySelectorAll('*');

  elements.forEach((element) {
    String zIndex = element.getComputedStyle().zIndex.toString();
    if (zIndex != null && zIndex is String && zIndex != 'auto') {
      num zIndexVal = num.parse(zIndex);
      if (zIndexVal > highestZIndex) {
        highestZIndex = zIndexVal;
      }
    }
  });

  return highestZIndex;
}