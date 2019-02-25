part of component;

enum InputType {TEXT, PASSWORD, NUMBER}

class Input {
  Element element;
  InputElement val_box;
  String lastvalue;

  String get value => val_box.value;
  set value(String value) {
    val_box.value = _validate(value);
  }

  List<StreamSubscription> _listeners = [];

  StreamController _onValueChangedController = new StreamController();
  Stream get onValueChanged => _onValueChangedController.stream;


  bool prevent_blank = true;

  InputType _type;
  String _validate(String val) {
    String newVal = val;
    if(prevent_blank && newVal.isEmpty) {
      newVal = lastvalue;
    }

    return newVal;
  }


  Input({InputType type = InputType.TEXT, val = ''}) {
    _type = type;
    _initialize();
    this.value = "$val";
    lastvalue = value;
  }


  void _initialize() {

    String type = 'text';
    switch (_type) {
      case InputType.TEXT:
        type = 'text';
        break;
      case InputType.NUMBER:
        type = 'number';
        break;
      case InputType.PASSWORD:
        type = 'password';
        break;
    }

    element = new DivElement()
      ..classes.add('text-box')
      ..setInnerHtml('''<input type="${type}" spellcheck="false" class="text-input" />''', treeSanitizer: NodeTreeSanitizer.trusted);

    val_box = element.querySelector('.text-input');

    _wire_handlers();
  }

  void _wire_handlers() {

    List _handlers = [];
    void done() {
      if(lastvalue != this.value) {
        this.value = val_box.value;
        lastvalue = this.value;
        _onValueChangedController.add(this);
      }
    }

    _listeners.addAll([
      element.onMouseDown.listen((evt) {
        _handlers.addAll([
          val_box.onKeyPress.listen((k) {
            switch(k.keyCode) {
              case KeyCode.ENTER:
              //done();
                val_box.blur();
                break;
              case KeyCode.ESC:
                this.value = lastvalue;
                val_box.blur();
                break;
            }
          }),
          val_box.onBlur.listen((e) => done()),
        ]);

      }),

    ]);
  }
}