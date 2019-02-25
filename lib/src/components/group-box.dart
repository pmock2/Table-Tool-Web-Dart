part of component;

class GroupBox {
  DivElement element;
  String _title;

  GroupBox(this._title) {
    if (_title == null) {
      print('Null value found for group box');
      return;
    }
    init();
  }

  void init() {
    DivElement titleDiv = DivElement()
      ..text = _title
      ..classes.add('group_box_title');

    element = DivElement()
      ..classes.add('group_box')
      ..append(titleDiv);
  }
}