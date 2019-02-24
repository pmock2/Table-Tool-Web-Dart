part of application;

DashboardPage dashbaordPage = DashboardPage._private();

class DashboardPage extends Page {
  DashboardPage._private();
  DivElement cardSection =DivElement();

  void show() {
    clear();
    String markup = '''
      <div class="dashboard-page">
        <div class="page-header">
          <div class="dashboard-title">Dashboard</div>
          <div class="dashboard-description">
            Welcome to your dashboard! This page will display all content that is relevent to you. Each campaign, group, and character you are associated with
            will appear on this page.
          </div>
        </div>
        <div class="options-bar">
          <button class="create-campaign-button" flat>Create Campaign</button>
          <div class="filter-bar">
            <input type="text" placeholder="search" class="search-bar">
          </div>
        </div>
        <div class="card-section-container">
          <div class="card-section">

          </div>
        </div>
      </div>
    ''';
    content.setInnerHtml(markup, treeSanitizer: NullTreeSanitizer());
    cardSection =findInContent('.card-section');

    _getCampaigns();
    _wireItUp();
  }

  void _wireItUp() {
    // listeners.addAll([

    //   })
    // ]);
  }

  void _getCampaigns() {
    HttpRequest.request("${serverUrl}/campaign", withCredentials: true, method: 'GET').then((response) {
      var data = jsonDecode(response.response);
      if (data is List) {
        data.forEach((campaignItem) {
          if (campaignItem is Map) {
            DashboardItem item = DashboardItem(ItemType.CAMPAIGN, campaignItem['name']);
            cardSection.append(item.element);
          }
        });
      }
    }).catchError((e) {
      window.alert(e.toString());
    });
  }
}
