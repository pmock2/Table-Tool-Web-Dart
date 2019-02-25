part of component;

class RadioButton {
  String _radioGroup;
  DivElement element;
  MutationObserver _checkedChange;

  bool _checked = false;
  bool get checked => _checked;

  RadioButton(this._radioGroup, {bool checked = false}) {
    if (_radioGroup == null) {
      print('Null value found for radio button');
      return;
    }

    _checked = checked;
    init();
    _wireItUp();
  }

  void init() {
    element = DivElement()
      ..classes.add('radio_button')
      ..dataset['radio-group'] = _radioGroup.trim().replaceAll(' ', '_');
  }

  void _wireItUp() {
    element.onClick.listen((e) {
      element.dataset['checked'] = 'true';
      _checked = true;
      document.querySelectorAll('[data-radio-group=$_radioGroup').forEach((radio) {
        if (radio != element) {
          radio.dataset['checked'] = 'false';
        }
      });
    });

    _checkedChange = MutationObserver((List<dynamic> mutations, MutationObserver observer) {
      if (element.dataset['checked'] == 'false') {
        _checked = false;
      }
    });

    _checkedChange.observe(element, attributes: true);
  }

  void disable() {
    element.dataset['disabled'] = 'true';
  }

  void enable() {
    element.dataset['disabled'] = 'false';
  }
}