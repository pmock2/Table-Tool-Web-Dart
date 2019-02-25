part of component;

enum DropDownType {DROP_DOWN, COMBO_BOX}

class DropDown {
  StreamController _onOptionPicked = StreamController.broadcast();
  Stream get onOptionPicked => _onOptionPicked.stream;

  List<String> _options = List();
  String _primaryOption;

  String _selectedOption;
  String get selectedOption => _selectedOption;
  set selectedOption(String val) => _selectedOption = val;

  String _label;
  String _id;
  DropDownType _type;
  DivElement element;
  Element _comboBoxButton;
  Element _arrowElement;
  Element _optionsList;
  String _optionsContainerHeight;
  List<StreamSubscription> listeners = List();

  DropDown(this._options, this._type, this._id, {String primaryOption = '', String label = '', String optionsContainerHeight = '200px'}) {
    if (_options == null || _type == null || _id == null) {
      print('Received null value for drop_down. options : $_options tpye : $_type id : $_id');
      return;
    }

    _primaryOption = primaryOption;
    _label = label;
    _optionsContainerHeight = optionsContainerHeight;

    if (!_options.contains(_primaryOption)) {
      _primaryOption = label;
    }

    init();
    _wireItUp();
  }

  void init() {
    _id = _id.replaceAll(' ', '_');
    String interactionElementMarkup = '''
    ${_type == DropDownType.DROP_DOWN ? '''
        <button class="drop_down_button" id="${_id}_drop_down_main">$_label</button>
      '''
      : '''
        <div class="combo_box_button" id="${_id}_drop_down_main">
          <div class="combo_box_button_text">$_primaryOption</div>
          <div class="fas fa-angle-down combo_box_button_drop_arrow"></div>
        </div>
      '''}
    ''';

    String dropDownMarkup = '''
    ${interactionElementMarkup}
    ''';

    if (_options.contains(_primaryOption)) {
      _selectedOption = _primaryOption;
    }
    else {
      _selectedOption = '';
    }

    element = DivElement()
      ..setInnerHtml(dropDownMarkup, treeSanitizer: NullTreeSanitizer())
      ..id = _id
      ..classes.add('drop_down');

    _optionsList = _createChildren();

    _optionsList.style.maxHeight = _optionsContainerHeight;

    element.append(_optionsList);

    if (_type == DropDownType.COMBO_BOX) {
      _comboBoxButton = element.querySelector('.combo_box_button');
      _arrowElement = element.querySelector('.combo_box_button_drop_arrow');
    }
  }

  Element _createChildren() {
    DivElement childList = DivElement()
      ..classes.add('drop_down_options');
    _options.forEach((option) {
      int count = 0;
      DivElement child = DivElement()
        ..id = '${option}_${count}'
        ..text = option
        ..classes.add('drop_down_option');

      listeners.add(child.onClick.listen((e) {

        if (_type == DropDownType.COMBO_BOX) {
          Element filterBox = element.querySelector('.combo_box_button_text');
          filterBox.text = option;
          _comboBoxButton.style.removeProperty('border-color');
        }

        Element current = element.querySelector('.drop_down_option[data-drop_down_option_selected=true');
        if (current != null) {
          current.dataset['drop_down_option_selected'] = 'false';
        }

        _selectedOption = option;
        _onOptionPicked.add(_selectedOption);

        if (child.dataset['drop_down_option_selected'] == 'true') {
          child.dataset['drop_down_option_selected'] = 'false';
        }
        else {
          child.dataset['drop_down_option_selected'] = 'true';
        }
        close();
      }));

      childList.append(child);
      count++;
    });
    return childList;
  }

  void _wireItUp() {
    listeners.add(window.onClick.listen((e) {
      Element target = e.target;
      if (target.classes.toList().isEmpty || element.querySelector('.${target.classes.toList()[0].toString()}') == null) {
        close();
      }
    }));

    if (_arrowElement == null) {
      listeners.add(element.querySelector('#${_id}_drop_down_main').onClick.listen((e) {
        if (isOpened()) {
          close();
        }
        else {
          open();
        }
      }));
    }

    if (_arrowElement != null) {
      listeners.add(_arrowElement.onClick.listen((e) {
        if (isOpened()) {
          close();
        }
        else {
          open();
        }
      }));

      listeners.add(element.querySelector('.combo_box_button_text').onClick.listen((e) {
        Element target = e.target as Element;
        target.parent.dataset['editing'] = 'true';
        target.contentEditable = 'true';
        open();
      }));

      listeners.add(element.querySelector('.combo_box_button_text').onKeyPress.listen((KeyboardEvent e) {
        Element filterBox = element.querySelector('.combo_box_button_text');
        if (e.keyCode == 13) {
          e.preventDefault();
        }
        else if (isOpened()) {
          String filter = filterBox.text.toLowerCase();
          bool foundMatch = false;

          _optionsList.children.forEach((child) {
            if (child.innerHtml.toLowerCase().contains(filter)) {
              child.style.display = 'block';
              foundMatch = true;
            }
            else {
              child.style.display = 'none';
            }
          });
          if (!foundMatch || filterBox.text.isEmpty || filterBox.text == null) {
            _comboBoxButton.style.borderColor = '#e94838';
          }
          else {
            _comboBoxButton.style.removeProperty('border-color');
          }
          _selectedOption = '';
          _onOptionPicked.add(_selectedOption);
        }
      }));

      listeners.add(element.querySelector('.combo_box_button_text').onKeyUp.listen((KeyboardEvent e) {
        Element filterBox = element.querySelector('.combo_box_button_text');
        if (e.keyCode == 13) {
          e.preventDefault();
        }
        else if (isOpened()) {
          String filter = filterBox.text.toLowerCase();
          bool foundMatch = false;

          _optionsList.children.forEach((child) {
            if (child.innerHtml.toLowerCase().contains(filter)) {
              child.style.display = 'block';
              foundMatch = true;
            }
            else {
              child.style.display = 'none';
            }
          });
          if (!foundMatch || filterBox.text.isEmpty || filterBox.text == null) {
            _comboBoxButton.style.borderColor = '#e94838';
          }
          else {
            _comboBoxButton.style.removeProperty('border-color');
          }
          _selectedOption = '';
          _onOptionPicked.add(_selectedOption);
        }
      }));
    }

  }

  void close() {
    element.dataset['opened'] = 'false';
  }

  void open() {
    element.dataset['opened'] = 'true';
  }

  void disable() {
    element.dataset['disabled'] = 'true';
  }

  void enable() {
    element.dataset['disabled'] = 'false';
  }

  bool isOpened() => element.dataset['opened'] == 'true';

  void dispose() {
    listeners.forEach((listener) {
      listener.cancel();
    });

    listeners.clear();
    _options.clear();
    element.remove();
  }
}