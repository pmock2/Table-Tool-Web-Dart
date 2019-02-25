part of component;

final Toaster Toast = new Toaster._private();

class Toaster {

  Element toaster;
  String _alignment = 'top';
  String get alignment => _alignment;

  bool pinned = false;

  set alignment(String value) {
    _alignment = value;
    if(toaster != null) {
      toaster.dataset['align'] = value;
    }
  }

  Toaster._private(){
    if(toaster == null) {
      toaster = new DivElement()..classes.add('toaster');
      document.body.children.add(toaster);
    }
  }


  void show(content, {int ms = 5000, Severity severity = Severity.INFORMATION}) {

    Element cardholder = new DivElement()..classes.add('crust');

    Element card = new DivElement()..classes.add('toast');
    Element cardback = new DivElement()..classes.add('toast-back');
    card.dataset['sev'] = severity.toString().split('.')[1].toLowerCase();
    Element cardtop = new DivElement()..classes.add('toast-top');
    Element cardclose = new DivElement()..classes.add('toast-x');
    cardtop.children.add(cardclose);

    Element cardcontent = new DivElement()..classes.add('toast-content');
    cardcontent.children.add(content is Element ? content : new DivElement()..classes.add('toast-text')..setInnerHtml(content.toString(), treeSanitizer: NodeTreeSanitizer.trusted));

    card.children.addAll([cardback, cardtop, cardcontent]);
    cardholder.children.add(card);
    toaster.children.add(cardholder);


    int spacing = 10;
    cardholder.style.height = '${cardcontent.borderEdge.height + spacing + 30}px';
    cardholder.dataset['open'] = 'true';
    //print('holder height: ${cardholder.style.height}');

    bool hovered = false;

    void pin(bool val) {
      pinned = val;
      card.dataset['pinned'] = '$val';
    }

    // Examine the conditions for closing to see if you can actually do
    // the close. If it's not hovered and not pinned or it is forced then kill it
    void close([bool force = false]) {

      // Do the closing
      void kill() {
        cardholder.dataset['open'] = 'false';
        cardholder.style.height = '0px';
        new Timer(new Duration(milliseconds: 2000), () => cardholder.remove());
      }

      if(force) {
        kill();
        return;
      }

      if(!pinned) {
        if(!hovered && cardholder.parent != null) {
          kill();
        }
        else if (hovered) {
          hovered = false;
          card.onMouseOut.listen((e) => close());
        }
      }
    }

    if (ms > 0) {
      new Timer(new Duration(milliseconds: ms), close);
    }
    card.onMouseOver.listen((e) => hovered = true);
    card.onMouseOut.listen((e) => hovered = false);

    cardclose.onClick.listen((e) {
      e.stopPropagation();
      e.preventDefault();
      hovered = false;
      pin(false);
      close(true);
    });

    card.onClick.listen((e){
      if (pinned) {
        pin(false);
        close(true);
      }
      else {
        pin(true);
        cardholder.dataset['open'] = 'true';
        cardholder.style.height = '${card.clientHeight + spacing}px';
      }
    });

  }
}

enum Severity {ERROR, WARNING, INFORMATION}