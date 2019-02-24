part of application;

Home homePage = Home._private();

class Home extends Page{
  
  Home._private();

  void show() {
    clear();
    String innerHtml = '''
    <div class="home-page">
      <div class="intro">
        <div class="title-container">
          <div class="page-title">The Table Tool</div>
          <div class="page-sub-title">A Tool for DMs and Their Players</div>
          <button class="get-started-button" to="/join">Get Started</button>
        </div>
      </div>
      <div class="page-section">
        <div class="page-section-title">My Title</div>
        <div class="page-section-content"></div>
      </div>
      <div class="page-section">
        <div class="page-section-title">My Title</div>
        <div class="page-section-content"></div>
      </div>
    </div>
    ''';
    content.setInnerHtml(innerHtml, treeSanitizer: NullTreeSanitizer());

    _wireItUp();
  }

  void _wireItUp() {
    listeners.addAll([
      content.querySelector('.get-started-button').onClick.listen((e) {
        signUpPage.show();
      })
    ]);
  }
}