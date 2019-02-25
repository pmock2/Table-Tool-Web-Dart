part of component;

enum ButtonType {NORMAL, BLUE, RED}

class Button {
  String _text;
  ButtonType _type;
  ButtonElement element;

  Button(this._text, {ButtonType type = ButtonType.NORMAL}) {
    if (_text == null) {
      print('Null value found for button');
      return;
    }
    _type = type;
    init();
  }

  void init() {
    element = ButtonElement()
        ..text = _text;

    switch (_type) {
      case ButtonType.NORMAL:
        break;
      case ButtonType.BLUE:
        element.classes.add('button_blue');
        break;
      case ButtonType.RED:
        element.classes.add('button_red');
        break;
    }
  }

}