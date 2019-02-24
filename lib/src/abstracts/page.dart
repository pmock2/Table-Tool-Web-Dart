part of application;

abstract class Page {
  List<StreamSubscription> listeners = List();

  void clear() {
    dispose();
    content.children.clear();
  }

  void dispose() {
    listeners.forEach((listener) {
      listener.cancel();
    });

    listeners.clear();
  }

  Element findInContent(String selectors) => content.querySelector(selectors);
}