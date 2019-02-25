part of component;

class Checkbox {
  DivElement element;
  bool _checked = false;
  bool get checked => _checked;

  Checkbox() {
    init();
    _wireItUp();
  }

  void init({bool checked = false}) {
    _checked = checked;
    element = DivElement()
    ..classes.add('checkbox');
  }

  void _wireItUp() {
    element.onClick.listen((e) {
      if (element.dataset['checked'] == 'true') {
        element.dataset['checked'] = 'false';
        _checked = false;
      }
      else {
        element.dataset['checked'] = 'true';
        _checked = true;
      }
    });
  }

  void enable() {
    element.dataset['disabled'] = 'true';
  }

  void disable() {
    element.dataset['disabled'] = 'false';
  }

  void check() {
    _checked = true;
    element.dataset['checked'] = 'true';
  }

  void uncheck() {
    _checked = false;
    element.dataset['checked'] = 'false';
  }
}