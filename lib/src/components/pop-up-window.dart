part of component;

enum WindowButtonType {OK_CANCEL, OK}

class PopUpWindow {

  //when the affirmative button is clicked
  StreamController _onAffirmativeController = StreamController.broadcast();
  Stream get onAffirmativeClicked => _onAffirmativeController.stream;

  //when the cancel/no/close button is clicked
  StreamController _onNegativeController = StreamController.broadcast();
  Stream get onNegativeClicked => _onNegativeController.stream;

  DivElement element;

  DivElement content;

  DivElement _blocker;

  String _title;

  String _width = '500px';

  String _height = '450px';

  List<StreamSubscription> listeners = List();

  bool _blockBackground = true;

  bool _hasCloseButton = true;

  String _affirmButtonText;

  WindowButtonType _type;

  PopUpWindow(this._title, {bool blockBackground = true, String width, String height, WindowButtonType type, bool hasCloseButton, String affirmButtonText = 'OK'}) {
    if (_title == null) {
      print('Found null variable in Window. Title : $_title');
      return;
    }
    if (width != null && height != null) {
      _width = width;
      _height = height;
    }

    _blockBackground = blockBackground;
    _type = type;

    if (hasCloseButton != null) {
      _hasCloseButton = hasCloseButton;
    }

    _affirmButtonText = affirmButtonText;
    init();
    _wireItUp();
  }

  void init() {
    String windowMarkup = '''
    <div class="pop_up_window_title_container">
      <div class="pop_up_window_title">$_title</div>
      <div class="${_hasCloseButton ? 'fas fa-times pop_up_window_close_button' : ''}"></div>
    </div>
    <div class="pop_up_window_main_content">
    
    </div>
    <div class="pop_up_buttons_container"></div>
    ''';

    element = DivElement()
      ..setInnerHtml(windowMarkup, treeSanitizer: NullTreeSanitizer())
      ..style.width = _width
      ..style.height = _height
      ..classes.add('pop_up_window');

    Button okButton = Button(_affirmButtonText, type: ButtonType.BLUE)
      ..element.dataset['window_ok_button'] = 'true';

    Button cancelButton;
    if (_type != WindowButtonType.OK) {
      cancelButton = Button('Cancel')
        ..element.style.marginLeft = '7px'
        ..element.dataset['window_cancel_button'] = 'true';
    }

    element.querySelector('.pop_up_buttons_container')
      ..append(okButton.element);

    if (_type != WindowButtonType.OK) {

    element.querySelector('.pop_up_buttons_container')
    ..append(cancelButton.element);
    }

    content = element.querySelector('.pop_up_window_main_content');
  }

  void _wireItUp() {
    listeners.add(element.querySelector('button[data-window_ok_button=true]').onClick.listen((e) {
      _onAffirmativeController.add(true);
    }));

    if (_type != WindowButtonType.OK) {
      listeners.add(element.querySelector('button[data-window_cancel_button=true]').onClick.listen((e) {
        _onNegativeController.add(true);
        close();
      }));
    }

    if (_hasCloseButton) {
      listeners.add(element.querySelector('.pop_up_window_close_button').onClick.listen((e) {
        _onNegativeController.add(true);
        close();
      }));
    }
  }

  void show() {
    if (_blockBackground) {
      _blocker = DivElement()
        ..classes.add('pop_up_window_background_blocker');

      _blocker.style.zIndex = (getHighestZIndex() + 1).toString();

      document.body.append(_blocker);
    }

    element.style.zIndex = (getHighestZIndex() + 1).toString();
    document.body.append(element);
  }

  void close() {
    listeners.forEach((item) {
      item.cancel();
    });

    listeners.clear();

    if (element != null) {
      element.remove();
      element = null;
    }

    if (_blockBackground && _blocker != null) {
      _blocker.remove();
      _blocker = null;
    }
  }
}