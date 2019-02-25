part of component;

class RockerSwitch {
  DivElement element;
  bool _checked = false;

  //indicates when the rocker is clicked
  StreamController _onClickedController = StreamController.broadcast();
  Stream get onClicked => _onClickedController.stream;

  RockerSwitch({bool checked}) {
    if (checked != null) {
      _checked = checked;
    }
    _init();
    _wireItUp();
  }

  void _init() {
    String innerHtml = '''
      <div class="rocker"></div>
    ''';

    element = DivElement()
      ..classes.add('rocker_switch')
      ..dataset['checked'] = _checked.toString()
      ..setInnerHtml(innerHtml, treeSanitizer: NullTreeSanitizer());
  }

  void _wireItUp() {
    element.onClick.listen((e) {
      if (element.dataset['checked'] == "false") {
        element.dataset["checked"] = 'true';
        _checked = true;
      }
      else {
        element.dataset['checked'] = 'false';
        _checked = false;
      }

      _onClickedController.add(_checked);
    });
  }

}