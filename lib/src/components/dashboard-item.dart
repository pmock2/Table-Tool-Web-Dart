part of component;

class DashboardItem {
  DivElement element = DivElement()..classes.add('dashboard-item');

  ItemType type;
  String title;

  DashboardItem(this.type, this.title) {
    _init();
  }
  void _init() {
    String innerHtml = '''
    <div class="fas item-icon fa-dungeon"></div>
    <div class="item-title">${title}</div>
    <div class="fas fa-ellipsis-v item-dots"></div>
    ''';
    element.setInnerHtml(innerHtml, treeSanitizer: NullTreeSanitizer());

    _wireItUp();
  }

  _wireItUp() {}
}
