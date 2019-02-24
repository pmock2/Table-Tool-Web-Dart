define(['dart_sdk', 'packages/TableToolWebDart/global'], function(dart_sdk, global) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const convert = dart_sdk.convert;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const global$ = global.global;
  const _root = Object.create(null);
  const src__components__component = Object.create(_root);
  const table$45tool$45web = Object.create(_root);
  const $classes = dartx.classes;
  const $text = dartx.text;
  const $append = dartx.append;
  const $forEach = dartx.forEach;
  const $_set = dartx._set;
  const $dataset = dartx.dataset;
  const $replaceAll = dartx.replaceAll;
  const $toLowerCase = dartx.toLowerCase;
  const $toString = dartx.toString;
  const $setInnerHtml = dartx.setInnerHtml;
  const $onClick = dartx.onClick;
  const $attributes = dartx.attributes;
  const $target = dartx.target;
  const $_get = dartx._get;
  const $querySelectorAll = dartx.querySelectorAll;
  const $display = dartx.display;
  const $add = dartx.add;
  const $onKeyDown = dartx.onKeyDown;
  const $zIndex = dartx.zIndex;
  const $opacity = dartx.opacity;
  const $clear = dartx.clear;
  const $remove = dartx.remove;
  const $response = dartx.response;
  const $addAll = dartx.addAll;
  const $children = dartx.children;
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let dynamicAnddynamicToNull = () => (dynamicAnddynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, dart.dynamic])))();
  let MouseEventTodynamic = () => (MouseEventTodynamic = dart.constFn(dart.fnType(dart.dynamic, [html.MouseEvent])))();
  let MouseEventToNull = () => (MouseEventToNull = dart.constFn(dart.fnType(core.Null, [html.MouseEvent])))();
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  let dynamic__Tovoid = () => (dynamic__Tovoid = dart.constFn(dart.fnType(dart.void, [dart.dynamic], [html.Element])))();
  let ElementToNull = () => (ElementToNull = dart.constFn(dart.fnType(core.Null, [html.Element])))();
  let JSArrayOfStreamSubscription = () => (JSArrayOfStreamSubscription = dart.constFn(_interceptors.JSArray$(async.StreamSubscription)))();
  let KeyboardEventToNull = () => (KeyboardEventToNull = dart.constFn(dart.fnType(core.Null, [html.KeyboardEvent])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let StreamSubscriptionToNull = () => (StreamSubscriptionToNull = dart.constFn(dart.fnType(core.Null, [async.StreamSubscription])))();
  let ListOfStreamSubscription = () => (ListOfStreamSubscription = dart.constFn(core.List$(async.StreamSubscription)))();
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  let HttpRequestToNull = () => (HttpRequestToNull = dart.constFn(dart.fnType(core.Null, [html.HttpRequest])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  src__components__component.ItemType = class ItemType extends core.Object {
    toString() {
      return {
        0: "ItemType.CAMPAIGN",
        1: "ItemType.CHARACTER",
        2: "ItemType.GROUP"
      }[this.index];
    }
  };
  (src__components__component.ItemType.new = function(x) {
    this.index = x;
  }).prototype = src__components__component.ItemType.prototype;
  dart.addTypeTests(src__components__component.ItemType);
  dart.setFieldSignature(src__components__component.ItemType, () => ({
    __proto__: dart.getFields(src__components__component.ItemType.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__components__component.ItemType, ['toString']);
  src__components__component.ItemType.CAMPAIGN = dart.const(new src__components__component.ItemType.new(0));
  src__components__component.ItemType.CHARACTER = dart.const(new src__components__component.ItemType.new(1));
  src__components__component.ItemType.GROUP = dart.const(new src__components__component.ItemType.new(2));
  src__components__component.ItemType.values = dart.constList([src__components__component.ItemType.CAMPAIGN, src__components__component.ItemType.CHARACTER, src__components__component.ItemType.GROUP], src__components__component.ItemType);
  const _createDomTrees = Symbol('_createDomTrees');
  const _wireDropsDowns = Symbol('_wireDropsDowns');
  const _addHeaderSubOptions = Symbol('_addHeaderSubOptions');
  src__components__component.Header = class Header extends core.Object {
    get element() {
      return this[element];
    }
    set element(value) {
      this[element] = value;
    }
    get configuration() {
      return this[configuration$];
    }
    set configuration(value) {
      this[configuration$] = value;
    }
    get headerTitle() {
      return this[headerTitle$];
    }
    set headerTitle(value) {
      this[headerTitle$] = value;
    }
    init() {
      this.element[$classes].add("header-container");
      let title = html.DivElement.new();
      title[$text] = this.headerTitle;
      title[$classes].addAll(JSArrayOfString().of(["header-section", "header-title"]));
      this.element[$append](title);
      this[_createDomTrees]();
      this[_wireDropsDowns]();
    }
    [_createDomTrees]() {
      this.configuration[$forEach](dart.fn((k, v) => {
        let headerOption = html.DivElement.new();
        headerOption[$classes].add("header_option");
        headerOption[$text] = core.String._check(k);
        this.element[$append](headerOption);
        this[_addHeaderSubOptions](headerOption, v);
      }, dynamicAnddynamicToNull()));
    }
    [_addHeaderSubOptions](headerOption, options) {
      let list = html.UListElement.new();
      list[$classes].add("dropdown_list");
      const buildOptionsTree = (function(items, parentLI) {
        if (parentLI === void 0) parentLI = null;
        let newParent = html.UListElement.new();
        newParent[$classes].add("submenu");
        newParent[$dataset][$_set]("submenu_is_open", "false");
        if (core.Map.is(items)) {
          items[$forEach](dart.fn((k, v) => {
            let item = html.LIElement.new();
            item.id = "header_option_" + dart.toString(k)[$toLowerCase]()[$replaceAll](" ", "_");
            item[$classes].add("menu_option");
            if (core.List.is(v) || core.Map.is(v)) {
              item[$dataset][$_set]("has_children", "true");
              let optionTitle = html.DivElement.new();
              optionTitle[$setInnerHtml](core.String._check(k), {treeSanitizer: new global$.NullTreeSanitizer.new()});
              optionTitle[$classes].add("option_title");
              let rightArrow = html.DivElement.new();
              rightArrow[$classes].addAll(JSArrayOfString().of(["fas", "fa-caret-right", "submenu_right_caret"]));
              item[$append](optionTitle);
              optionTitle[$append](rightArrow);
              buildOptionsTree(v, item);
            } else if (core.Function.is(v)) {
              item[$setInnerHtml](core.String._check(k), {treeSanitizer: new global$.NullTreeSanitizer.new()});
              item[$onClick].listen(dart.fn(_ => dart.dcall(v, []), MouseEventTodynamic()));
            } else if (dart.equals(v, "")) {
              item[$text] = core.String._check(k);
              item[$onClick].listen(dart.fn(e => {
                this.element.querySelector(".header_option[data-is_open=true")[$dataset][$_set]("is_open", "false");
                let message = "              <div>You just clicked the <b>[" + dart.str(k) + "]</b> option.</div>\n              ";
                new src__components__component.DialogWindow.new(dart.str(k) + " Menu Opened", message, "header_option_clicked", {level: src__components__component.Level.GOOD, type: src__components__component.DialogType.OK});
              }, MouseEventToNull()));
            } else {
              core.print("Encountered a problem when building header option tree. K : " + dart.str(k) + " V : " + dart.str(v));
            }
            if (parentLI != null) {
              newParent[$append](item);
              parentLI[$append](newParent);
            } else {
              list[$append](item);
            }
          }, dynamicAnddynamicToNull()));
        } else if (core.List.is(items)) {
          items[$forEach](dart.fn(listItem => {
            let item = html.LIElement.new();
            item[$text] = core.String._check(listItem);
            item.id = "header_option_" + dart.toString(listItem)[$toLowerCase]()[$replaceAll](" ", "_");
            item[$classes].add("menu_option");
            newParent[$append](item);
            if (parentLI != null) {
              parentLI[$append](newParent);
            } else {
              core.print("Tried to create LIs from List with no parent element");
            }
          }, dynamicToNull()));
        } else if (core.Function.is(items)) {
          headerOption[$dataset][$_set]("hasFunction", "true");
          headerOption[$onClick].listen(dart.fn(e => {
            dart.dcall(items, []);
            e.stopPropagation();
          }, MouseEventToNull()));
        } else if (typeof items == 'string') {
          let link = html.Element.tag("a");
          link[$classes].add("header-link");
          link[$attributes][$_set]("href", items);
          headerOption[$append](link);
        } else {
          core.print("Something bad happened");
        }
      }).bind(this);
      dart.fn(buildOptionsTree, dynamic__Tovoid());
      buildOptionsTree(options);
      headerOption[$append](list);
    }
    [_wireDropsDowns]() {
      this.element[$querySelectorAll](html.Element, ".header_option").forEach(dart.fn(option => {
        option[$dataset][$_set]("is_open", "false");
        option[$onClick].listen(dart.fn(e => {
          let target = html.Element.as(e[$target]);
          if (dart.test(target[$classes].contains("header_option")) && target[$dataset][$_get]("hasFunction") !== "true") {
            this.element[$querySelectorAll](html.Element, ".header_option").forEach(dart.fn(item => {
              if (item[$text] != option[$text] && item[$dataset][$_get]("is_open") === "true") {
                item[$dataset][$_set]("is_open", "false");
              }
            }, ElementToNull()));
            if (target[$dataset][$_get]("is_open") === "false") {
              target[$dataset][$_set]("is_open", "true");
            } else {
              target[$dataset][$_set]("is_open", "false");
            }
          }
        }, MouseEventToNull()));
      }, ElementToNull()));
    }
    close() {
      this.element[$querySelectorAll](html.Element, "[data-is_open=true]").forEach(dart.fn(element => {
        element[$dataset][$_set]("is_open", "false");
      }, ElementToNull()));
    }
  };
  (src__components__component.Header.new = function(configuration, headerTitle) {
    this[element] = html.DivElement.new();
    this[configuration$] = new _js_helper.LinkedMap.new();
    this[configuration$] = configuration;
    this[headerTitle$] = headerTitle;
    this.init();
  }).prototype = src__components__component.Header.prototype;
  dart.addTypeTests(src__components__component.Header);
  const element = Symbol("Header.element");
  const configuration$ = Symbol("Header.configuration");
  const headerTitle$ = Symbol("Header.headerTitle");
  dart.setMethodSignature(src__components__component.Header, () => ({
    __proto__: dart.getMethods(src__components__component.Header.__proto__),
    init: dart.fnType(dart.void, []),
    [_createDomTrees]: dart.fnType(dart.void, []),
    [_addHeaderSubOptions]: dart.fnType(dart.void, [html.Element, dart.dynamic]),
    [_wireDropsDowns]: dart.fnType(dart.void, []),
    close: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__components__component.Header, () => ({
    __proto__: dart.getFields(src__components__component.Header.__proto__),
    element: dart.fieldType(html.DivElement),
    configuration: dart.fieldType(core.Map),
    headerTitle: dart.fieldType(core.String)
  }));
  src__components__component.DialogType = class DialogType extends core.Object {
    toString() {
      return {
        0: "DialogType.OK_CANCEL",
        1: "DialogType.OK",
        2: "DialogType.RESTART",
        3: "DialogType.YES_NO"
      }[this.index];
    }
  };
  (src__components__component.DialogType.new = function(x) {
    this.index = x;
  }).prototype = src__components__component.DialogType.prototype;
  dart.addTypeTests(src__components__component.DialogType);
  dart.setFieldSignature(src__components__component.DialogType, () => ({
    __proto__: dart.getFields(src__components__component.DialogType.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__components__component.DialogType, ['toString']);
  src__components__component.DialogType.OK_CANCEL = dart.const(new src__components__component.DialogType.new(0));
  src__components__component.DialogType.OK = dart.const(new src__components__component.DialogType.new(1));
  src__components__component.DialogType.RESTART = dart.const(new src__components__component.DialogType.new(2));
  src__components__component.DialogType.YES_NO = dart.const(new src__components__component.DialogType.new(3));
  src__components__component.DialogType.values = dart.constList([src__components__component.DialogType.OK_CANCEL, src__components__component.DialogType.OK, src__components__component.DialogType.RESTART, src__components__component.DialogType.YES_NO], src__components__component.DialogType);
  src__components__component.Level = class Level extends core.Object {
    toString() {
      return {
        0: "Level.INFORMATION",
        1: "Level.WARNING",
        2: "Level.ERROR",
        3: "Level.GOOD"
      }[this.index];
    }
  };
  (src__components__component.Level.new = function(x) {
    this.index = x;
  }).prototype = src__components__component.Level.prototype;
  dart.addTypeTests(src__components__component.Level);
  dart.setFieldSignature(src__components__component.Level, () => ({
    __proto__: dart.getFields(src__components__component.Level.__proto__),
    index: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__components__component.Level, ['toString']);
  src__components__component.Level.INFORMATION = dart.const(new src__components__component.Level.new(0));
  src__components__component.Level.WARNING = dart.const(new src__components__component.Level.new(1));
  src__components__component.Level.ERROR = dart.const(new src__components__component.Level.new(2));
  src__components__component.Level.GOOD = dart.const(new src__components__component.Level.new(3));
  src__components__component.Level.values = dart.constList([src__components__component.Level.INFORMATION, src__components__component.Level.WARNING, src__components__component.Level.ERROR, src__components__component.Level.GOOD], src__components__component.Level);
  const _title = Symbol('_title');
  const _innerHtml = Symbol('_innerHtml');
  const _id = Symbol('_id');
  const _onAffirmativeController = Symbol('_onAffirmativeController');
  const _onNegativeController = Symbol('_onNegativeController');
  const _level = Symbol('_level');
  const _backgroundBlocker = Symbol('_backgroundBlocker');
  const _type = Symbol('_type');
  const _affirmativeButton = Symbol('_affirmativeButton');
  const _negativeButton = Symbol('_negativeButton');
  const _blockBackground = Symbol('_blockBackground');
  const _wireItUp = Symbol('_wireItUp');
  let const$;
  let const$0;
  src__components__component.DialogWindow = class DialogWindow extends core.Object {
    get onAffirmativeClicked() {
      return this[_onAffirmativeController].stream;
    }
    get onNegativeClicked() {
      return this[_onNegativeController].stream;
    }
    get element() {
      return this[element$];
    }
    set element(value) {
      this[element$] = value;
    }
    get listeners() {
      return this[listeners];
    }
    set listeners(value) {
      this[listeners] = value;
    }
    init() {
      let dialogMarkup = "    <div class=\"dialog_side_container fas\"></div>\n    <div class=\"dialog_inner_container\">\n      <div class=\"dialog_title\">" + dart.str(this[_title]) + "</div>\n      <i class=\"fas fa-times dialog_close\" id=\"" + dart.str(this[_id]) + "_dialog_close\"></i>\n      <hr class=\"dialog_hr\" />\n      <div class=\"dialog_message\">\n        " + dart.str(this[_innerHtml]) + "\n      </div>\n      <div class=\"dialog_button_container\">\n      <button class=\"dialog_button affirmative\" id=\"" + dart.str(this[_id]) + "_dialog_affirmative\"></button>\n      <button class=\"dialog_button negative\" id=\"" + dart.str(this[_id]) + "_dialog_negative\"></button>\n      </div>\n    </div>\n    ";
      let _ = html.DivElement.new();
      _[$setInnerHtml](dialogMarkup, {treeSanitizer: new global$.NullTreeSanitizer.new()});
      _[$classes].add("dialog_window");
      _.id = this[_id];
      this.element = _;
      this[_affirmativeButton] = this.element.querySelector("#" + dart.str(this[_id]) + "_dialog_affirmative");
      this[_negativeButton] = this.element.querySelector("#" + dart.str(this[_id]) + "_dialog_negative");
      switch (this[_type]) {
        case src__components__component.DialogType.OK:
        {
          this[_affirmativeButton][$text] = "Ok";
          this[_affirmativeButton][$dataset][$_set]("text", "ok");
          this[_negativeButton].style[$display] = "none";
          break;
        }
        case src__components__component.DialogType.OK_CANCEL:
        {
          this[_affirmativeButton][$text] = "Ok";
          this[_affirmativeButton][$dataset][$_set]("text", "ok");
          this[_negativeButton][$text] = "Cancel";
          break;
        }
        case src__components__component.DialogType.RESTART:
        {
          this[_affirmativeButton][$text] = "Restart";
          this[_affirmativeButton][$dataset][$_set]("text", "restart");
          this[_negativeButton][$text] = "Cancel";
          break;
        }
        case src__components__component.DialogType.YES_NO:
        {
          this[_affirmativeButton][$text] = "Yes";
          this[_affirmativeButton][$dataset][$_set]("text", "yes");
          this[_negativeButton][$text] = "No";
          break;
        }
      }
      let sideBar = html.DivElement._check(this.element.querySelector(".dialog_side_container"));
      switch (this[_level]) {
        case src__components__component.Level.INFORMATION:
        {
          sideBar[$dataset][$_set]("info", "true");
          break;
        }
        case src__components__component.Level.ERROR:
        {
          sideBar[$dataset][$_set]("error", "true");
          break;
        }
        case src__components__component.Level.WARNING:
        {
          sideBar[$dataset][$_set]("warning", "true");
          break;
        }
        case src__components__component.Level.GOOD:
        {
          sideBar[$dataset][$_set]("good", "true");
          break;
        }
      }
    }
    [_wireItUp]() {
      this.listeners[$add](this.element.querySelector("#" + dart.str(this[_id]) + "_dialog_close")[$onClick].listen(dart.fn(e => {
        this[_onNegativeController].add(true);
        this.close();
      }, MouseEventToNull())));
      this.listeners[$add](this.element.querySelector("#" + dart.str(this[_id]) + "_dialog_negative")[$onClick].listen(dart.fn(e => {
        this[_onNegativeController].add(true);
        this.close();
      }, MouseEventToNull())));
      this.listeners[$add](this.element.querySelector("#" + dart.str(this[_id]) + "_dialog_affirmative")[$onClick].listen(dart.fn(e => {
        this[_onAffirmativeController].add(true);
      }, MouseEventToNull())));
      this.listeners[$add](html.window[$onKeyDown].listen(dart.fn(e => {
        if (e.keyCode === 13) {
          this[_onAffirmativeController].add(true);
        } else if (e.keyCode === 27) {
          this[_onNegativeController].add(true);
          this.close();
        }
      }, KeyboardEventToNull())));
    }
    show() {
      if (dart.test(this[_blockBackground])) {
        let _ = html.DivElement.new();
        _[$classes].add("dialog_background_blocker");
        this[_backgroundBlocker] = _;
        this[_backgroundBlocker].style[$zIndex] = (dart.notNull(global$.getHighestZIndex()) + 1)[$toString]();
        html.document.body[$append](this[_backgroundBlocker]);
      }
      this.element.style[$zIndex] = (dart.notNull(global$.getHighestZIndex()) + 1)[$toString]();
      this.element.style[$opacity] = "0";
      html.document.body[$append](this.element);
      async.Timer.new(const$ || (const$ = dart.const(new core.Duration.new({milliseconds: 25}))), dart.fn(() => {
        this.element.style.removeProperty("opacity");
      }, VoidToNull()));
    }
    close() {
      this.listeners[$forEach](dart.fn(listener => {
        listener.cancel();
      }, StreamSubscriptionToNull()));
      this.listeners[$clear]();
      this.element.style[$opacity] = "0";
      this[_backgroundBlocker].style[$opacity] = "0";
      async.Timer.new(const$0 || (const$0 = dart.const(new core.Duration.new({milliseconds: 200}))), dart.fn(() => {
        this.element[$remove]();
        this.element = null;
        if (dart.test(this[_blockBackground])) {
          this[_backgroundBlocker][$remove]();
          this[_backgroundBlocker] = null;
        }
      }, VoidToNull()));
    }
  };
  (src__components__component.DialogWindow.new = function(title, innerHtml, id, opts) {
    let type = opts && 'type' in opts ? opts.type : src__components__component.DialogType.OK;
    let level = opts && 'level' in opts ? opts.level : src__components__component.Level.WARNING;
    let blockBackground = opts && 'blockBackground' in opts ? opts.blockBackground : true;
    this[_onAffirmativeController] = async.StreamController.broadcast();
    this[_onNegativeController] = async.StreamController.broadcast();
    this[_level] = null;
    this[element$] = null;
    this[_backgroundBlocker] = null;
    this[_type] = null;
    this[listeners] = JSArrayOfStreamSubscription().of([]);
    this[_affirmativeButton] = null;
    this[_negativeButton] = null;
    this[_blockBackground] = null;
    this[_title] = title;
    this[_innerHtml] = innerHtml;
    this[_id] = id;
    if (this[_title] == null || this[_innerHtml] == null || this[_id] == null) {
      core.print("Dialog Box Recieved a null value. title : " + dart.str(this[_title]) + " message : " + dart.str(this[_innerHtml]) + " id : " + dart.str(this[_id]));
      return;
    }
    this[_type] = type;
    this[_level] = level;
    this[_blockBackground] = blockBackground;
    this.init();
    this[_wireItUp]();
  }).prototype = src__components__component.DialogWindow.prototype;
  dart.addTypeTests(src__components__component.DialogWindow);
  const element$ = Symbol("DialogWindow.element");
  const listeners = Symbol("DialogWindow.listeners");
  dart.setMethodSignature(src__components__component.DialogWindow, () => ({
    __proto__: dart.getMethods(src__components__component.DialogWindow.__proto__),
    init: dart.fnType(dart.void, []),
    [_wireItUp]: dart.fnType(dart.void, []),
    show: dart.fnType(dart.void, []),
    close: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__components__component.DialogWindow, () => ({
    __proto__: dart.getGetters(src__components__component.DialogWindow.__proto__),
    onAffirmativeClicked: async.Stream,
    onNegativeClicked: async.Stream
  }));
  dart.setFieldSignature(src__components__component.DialogWindow, () => ({
    __proto__: dart.getFields(src__components__component.DialogWindow.__proto__),
    [_onAffirmativeController]: dart.fieldType(async.StreamController),
    [_onNegativeController]: dart.fieldType(async.StreamController),
    [_innerHtml]: dart.fieldType(core.String),
    [_level]: dart.fieldType(src__components__component.Level),
    [_id]: dart.fieldType(core.String),
    [_title]: dart.fieldType(core.String),
    element: dart.fieldType(html.DivElement),
    [_backgroundBlocker]: dart.fieldType(html.DivElement),
    [_type]: dart.fieldType(src__components__component.DialogType),
    listeners: dart.fieldType(ListOfStreamSubscription()),
    [_affirmativeButton]: dart.fieldType(html.Element),
    [_negativeButton]: dart.fieldType(html.Element),
    [_blockBackground]: dart.fieldType(core.bool)
  }));
  const _init = Symbol('_init');
  src__components__component.DashboardItem = class DashboardItem extends core.Object {
    get element() {
      return this[element$0];
    }
    set element(value) {
      this[element$0] = value;
    }
    get type() {
      return this[type$];
    }
    set type(value) {
      this[type$] = value;
    }
    get title() {
      return this[title$];
    }
    set title(value) {
      this[title$] = value;
    }
    [_init]() {
      let innerHtml = "    <div class=\"fas item-icon fa-dungeon\"></div>\n    <div class=\"item-title\">" + dart.str(this.title) + "</div>\n    <div class=\"fas fa-ellipsis-v item-dots\"></div>\n    ";
      this.element[$setInnerHtml](innerHtml, {treeSanitizer: new global$.NullTreeSanitizer.new()});
      this[_wireItUp]();
    }
    [_wireItUp]() {}
  };
  (src__components__component.DashboardItem.new = function(type, title) {
    let _ = html.DivElement.new();
    _[$classes].add("dashboard-item");
    this[element$0] = _;
    this[type$] = type;
    this[title$] = title;
    this[_init]();
  }).prototype = src__components__component.DashboardItem.prototype;
  dart.addTypeTests(src__components__component.DashboardItem);
  const element$0 = Symbol("DashboardItem.element");
  const type$ = Symbol("DashboardItem.type");
  const title$ = Symbol("DashboardItem.title");
  dart.setMethodSignature(src__components__component.DashboardItem, () => ({
    __proto__: dart.getMethods(src__components__component.DashboardItem.__proto__),
    [_init]: dart.fnType(dart.void, []),
    [_wireItUp]: dart.fnType(dart.dynamic, [])
  }));
  dart.setFieldSignature(src__components__component.DashboardItem, () => ({
    __proto__: dart.getFields(src__components__component.DashboardItem.__proto__),
    element: dart.fieldType(html.DivElement),
    type: dart.fieldType(src__components__component.ItemType),
    title: dart.fieldType(core.String)
  }));
  dart.defineLazy(table$45tool$45web, {
    /*table$45tool$45web.content*/get content() {
      return null;
    },
    set content(_) {}
  });
  const _init$ = Symbol('_init');
  const _addListeners = Symbol('_addListeners');
  table$45tool$45web.Application = class Application extends core.Object {
    get shell() {
      return this[shell];
    }
    set shell(value) {
      this[shell] = value;
    }
    get header() {
      return this[header];
    }
    set header(value) {
      this[header] = value;
    }
    [_init$]() {
      table$45tool$45web.content = (() => {
        let _ = html.DivElement.new();
        _.id = "content";
        return _;
      })();
      this.shell[$append](table$45tool$45web.content);
      this[_addListeners]();
      html.HttpRequest.request(dart.str(global$.serverUrl) + "/account", {method: "GET", withCredentials: true}).then(core.Null, dart.fn(response => {
        global$.userProfile = MapOfString$dynamic()._check(convert.jsonDecode(core.String._check(response[$response])));
        global$.loggingIn.add(true);
        table$45tool$45web.dashbaordPage.show();
      }, HttpRequestToNull())).catchError(dart.fn(e => {
        global$.loggingIn.add(false);
        table$45tool$45web.homePage.show();
      }, dynamicToNull()));
      let configuration = new _js_helper.LinkedMap.from(["", "/index.html"]);
      this.header = new src__components__component.Header.new(configuration, "Table Tool");
      this.shell[$append](this.header.element);
    }
    [_addListeners]() {
      global$.logInEvent.listen(dart.fn(val => {
        let configuration = null;
        global$.loggedIn = core.bool._check(val);
        if (dart.test(global$.loggedIn)) {
          configuration = new _js_helper.LinkedMap.from(["Dashboard", dart.fn(() => table$45tool$45web.dashbaordPage.show(), VoidTovoid()), "Log out", dart.fn(() => {
              html.HttpRequest.request(dart.str(global$.serverUrl) + "/session", {method: "DELETE", withCredentials: true}).then(core.Null, dart.fn(response => {
                if (response.status === 200) {
                  global$.loggingIn.add(false);
                }
                table$45tool$45web.loginPage.show();
              }, HttpRequestToNull())).catchError(dart.fn(e => {
                html.window.alert("Error");
                table$45tool$45web.homePage.show();
              }, dynamicToNull()));
            }, VoidToNull())]);
          this.header.element[$remove]();
          this.header = null;
          this.header = new src__components__component.Header.new(configuration, "Table Tool");
          let userMarkup = "          <div class=\"fas fa-user user-icon\"></div>\n          <div class=\"user-name\">" + dart.str(global$.userProfile[$_get]("userName")) + "</div>\n        ";
          let userContainer = html.DivElement.new();
          userContainer[$classes].add("user-container");
          userContainer[$setInnerHtml](userMarkup, {treeSanitizer: new global$.NullTreeSanitizer.new()});
          this.header.element[$append](userContainer);
          this.shell[$append](this.header.element);
        } else {
          configuration = new _js_helper.LinkedMap.from(["Home", dart.fn(() => table$45tool$45web.homePage.show(), VoidTovoid()), "Log In", dart.fn(() => table$45tool$45web.loginPage.show(), VoidTovoid())]);
          this.header.element[$remove]();
          this.header = null;
          this.header = new src__components__component.Header.new(configuration, "Table Tool");
          this.shell[$append](this.header.element);
        }
      }, dynamicToNull()));
    }
  };
  (table$45tool$45web.Application.new = function() {
    this[shell] = html.DivElement._check(html.document.querySelector("#shell"));
    this[header] = null;
    this.shell.querySelector(".lds-roller")[$remove]();
    this[_init$]();
  }).prototype = table$45tool$45web.Application.prototype;
  dart.addTypeTests(table$45tool$45web.Application);
  const shell = Symbol("Application.shell");
  const header = Symbol("Application.header");
  dart.setMethodSignature(table$45tool$45web.Application, () => ({
    __proto__: dart.getMethods(table$45tool$45web.Application.__proto__),
    [_init$]: dart.fnType(dart.void, []),
    [_addListeners]: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(table$45tool$45web.Application, () => ({
    __proto__: dart.getFields(table$45tool$45web.Application.__proto__),
    shell: dart.fieldType(html.DivElement),
    header: dart.fieldType(src__components__component.Header)
  }));
  dart.defineLazy(table$45tool$45web, {
    /*table$45tool$45web.homePage*/get homePage() {
      return new table$45tool$45web.Home._private();
    },
    set homePage(_) {}
  });
  const _wireItUp$ = Symbol('_wireItUp');
  table$45tool$45web.Page = class Page extends core.Object {
    get listeners() {
      return this[listeners$];
    }
    set listeners(value) {
      this[listeners$] = value;
    }
    clear() {
      this.dispose();
      table$45tool$45web.content[$children][$clear]();
    }
    dispose() {
      this.listeners[$forEach](dart.fn(listener => {
        listener.cancel();
      }, StreamSubscriptionToNull()));
      this.listeners[$clear]();
    }
    findInContent(selectors) {
      return table$45tool$45web.content.querySelector(selectors);
    }
  };
  (table$45tool$45web.Page.new = function() {
    this[listeners$] = JSArrayOfStreamSubscription().of([]);
  }).prototype = table$45tool$45web.Page.prototype;
  dart.addTypeTests(table$45tool$45web.Page);
  const listeners$ = Symbol("Page.listeners");
  dart.setMethodSignature(table$45tool$45web.Page, () => ({
    __proto__: dart.getMethods(table$45tool$45web.Page.__proto__),
    clear: dart.fnType(dart.void, []),
    dispose: dart.fnType(dart.void, []),
    findInContent: dart.fnType(html.Element, [core.String])
  }));
  dart.setFieldSignature(table$45tool$45web.Page, () => ({
    __proto__: dart.getFields(table$45tool$45web.Page.__proto__),
    listeners: dart.fieldType(ListOfStreamSubscription())
  }));
  table$45tool$45web.Home = class Home extends table$45tool$45web.Page {
    show() {
      this.clear();
      let innerHtml = "    <div class=\"home-page\">\n      <div class=\"intro\">\n        <div class=\"title-container\">\n          <div class=\"page-title\">The Table Tool</div>\n          <div class=\"page-sub-title\">A Tool for DMs and Their Players</div>\n          <button class=\"get-started-button\" to=\"/join\">Get Started</button>\n        </div>\n      </div>\n      <div class=\"page-section\">\n        <div class=\"page-section-title\">My Title</div>\n        <div class=\"page-section-content\"></div>\n      </div>\n      <div class=\"page-section\">\n        <div class=\"page-section-title\">My Title</div>\n        <div class=\"page-section-content\"></div>\n      </div>\n    </div>\n    ";
      table$45tool$45web.content[$setInnerHtml](innerHtml, {treeSanitizer: new global$.NullTreeSanitizer.new()});
      this[_wireItUp$]();
    }
    [_wireItUp$]() {
      this.listeners[$addAll](JSArrayOfStreamSubscription().of([table$45tool$45web.content.querySelector(".get-started-button")[$onClick].listen(dart.fn(e => {
          table$45tool$45web.signUpPage.show();
        }, MouseEventToNull()))]));
    }
  };
  (table$45tool$45web.Home._private = function() {
    table$45tool$45web.Home.__proto__.new.call(this);
  }).prototype = table$45tool$45web.Home.prototype;
  dart.addTypeTests(table$45tool$45web.Home);
  dart.setMethodSignature(table$45tool$45web.Home, () => ({
    __proto__: dart.getMethods(table$45tool$45web.Home.__proto__),
    show: dart.fnType(dart.void, []),
    [_wireItUp$]: dart.fnType(dart.void, [])
  }));
  dart.defineLazy(table$45tool$45web, {
    /*table$45tool$45web.loginPage*/get loginPage() {
      return new table$45tool$45web.LoginPage._private();
    },
    set loginPage(_) {}
  });
  table$45tool$45web.LoginPage = class LoginPage extends table$45tool$45web.Page {
    get loginButton() {
      return this[loginButton];
    }
    set loginButton(value) {
      this[loginButton] = value;
    }
    get username() {
      return this[username];
    }
    set username(value) {
      this[username] = value;
    }
    get password() {
      return this[password];
    }
    set password(value) {
      this[password] = value;
    }
    get status() {
      return this[status];
    }
    set status(value) {
      this[status] = value;
    }
    show() {
      this.clear();
      let markup = "    <div class=\"login-container\">\n      <div class=\"tab-content\">\n        <div class=\"login-child-container\">\n          <h1 class=\"login-title\">Welcome Back!</h1>\n          <div class=\"login-input-field\">\n            <input\n              placeholder=\" \"\n              type=\"text\"\n              maxlength=\"88\"\n              autocomplete=\"off\"\n              class=\"login-input\"\n              id=\"username\"\n            >\n            <label class=\"login-label\">Username</label>\n          </div>\n          <div class=\"login-input-field\">\n            <input\n              placeholder=\" \"\n              type=\"password\"\n              maxlength=\"100000\"\n              autocomplete=\"off\"\n              class=\"login-input\"\n              id=\"password\"\n            >\n            <label class=\"login-label\">Password</label>\n          </div>\n          <p class=\"forgot\">\n            <a class=\"login-link\">Forgot Password?</a>\n          </p>\n          <p>\n            <div class=\"login-link\">\n              <b>Not a member?</b>\n            </div>\n          </p>\n          <button class=\"login-button\">Log In</button>\n          <span class=\"status\"></span>\n        </div>\n      </div>\n    </div>\n    ";
      table$45tool$45web.content[$setInnerHtml](markup, {treeSanitizer: new global$.NullTreeSanitizer.new()});
      this.loginButton = html.ButtonElement._check(this.findInContent(".login-button"));
      this.username = html.InputElement._check(this.findInContent("#username"));
      this.password = html.InputElement._check(this.findInContent("#password"));
      this.status = html.SpanElement._check(this.findInContent(".status"));
      this[_wireItUp$]();
    }
    [_wireItUp$]() {
      this.listeners[$addAll](JSArrayOfStreamSubscription().of([this.findInContent(".login-link b")[$onClick].listen(dart.fn(e => {
          table$45tool$45web.signUpPage.show();
        }, MouseEventToNull())), this.loginButton[$onClick].listen(dart.fn(e => {
          if (this.username.value !== "" && this.password.value !== "") {
            html.HttpRequest.request(dart.str(global$.serverUrl) + "/session", {method: "POST", withCredentials: true, requestHeaders: new (IdentityMapOfString$String()).from(["content-type", "application/JSON"]), sendData: convert.jsonEncode(new (IdentityMapOfString$String()).from(["userName", this.username.value, "password", this.password.value]))}).then(core.Null, dart.fn(response => {
              if (response.status === 200) {
                html.HttpRequest.request(dart.str(global$.serverUrl) + "/account", {method: "GET", withCredentials: true}).then(core.Null, dart.fn(response => {
                  global$.userProfile = MapOfString$dynamic()._check(convert.jsonDecode(core.String._check(response[$response])));
                  table$45tool$45web.dashbaordPage.show();
                  global$.loggingIn.add(true);
                }, HttpRequestToNull())).catchError(dart.fn(e => {
                  global$.loggingIn.add(false);
                }, dynamicToNull()));
              } else {
                html.window.alert("Not Logged in!");
              }
            }, HttpRequestToNull())).catchError(dart.fn(e => {
              this.status[$text] = "Incorrect username or password";
            }, dynamicToNull()));
          } else {
            this.status[$text] = "Please fill out all fields";
          }
        }, MouseEventToNull()))]));
    }
  };
  (table$45tool$45web.LoginPage._private = function() {
    this[loginButton] = html.ButtonElement.new();
    this[username] = null;
    this[password] = null;
    this[status] = null;
    table$45tool$45web.LoginPage.__proto__.new.call(this);
  }).prototype = table$45tool$45web.LoginPage.prototype;
  dart.addTypeTests(table$45tool$45web.LoginPage);
  const loginButton = Symbol("LoginPage.loginButton");
  const username = Symbol("LoginPage.username");
  const password = Symbol("LoginPage.password");
  const status = Symbol("LoginPage.status");
  dart.setMethodSignature(table$45tool$45web.LoginPage, () => ({
    __proto__: dart.getMethods(table$45tool$45web.LoginPage.__proto__),
    show: dart.fnType(dart.void, []),
    [_wireItUp$]: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(table$45tool$45web.LoginPage, () => ({
    __proto__: dart.getFields(table$45tool$45web.LoginPage.__proto__),
    loginButton: dart.fieldType(html.ButtonElement),
    username: dart.fieldType(html.InputElement),
    password: dart.fieldType(html.InputElement),
    status: dart.fieldType(html.SpanElement)
  }));
  dart.defineLazy(table$45tool$45web, {
    /*table$45tool$45web.signUpPage*/get signUpPage() {
      return new table$45tool$45web.SignUpPage._private();
    },
    set signUpPage(_) {}
  });
  table$45tool$45web.SignUpPage = class SignUpPage extends table$45tool$45web.Page {
    get email() {
      return this[email];
    }
    set email(value) {
      this[email] = value;
    }
    get username() {
      return this[username$];
    }
    set username(value) {
      this[username$] = value;
    }
    get password() {
      return this[password$];
    }
    set password(value) {
      this[password$] = value;
    }
    get confirmPassword() {
      return this[confirmPassword];
    }
    set confirmPassword(value) {
      this[confirmPassword] = value;
    }
    get signUpButton() {
      return this[signUpButton];
    }
    set signUpButton(value) {
      this[signUpButton] = value;
    }
    get status() {
      return this[status$];
    }
    set status(value) {
      this[status$] = value;
    }
    show() {
      this.clear();
      let markup = "      <div class=\"login-container\">\n        <div class=\"tab-content\">\n          <div class=\"login-child-container\">\n            <h1 class=\"login-title\">Sign Up For Table Tool</h1>\n            <div class=\"login-input-field\">\n              <input\n                placeholder=\" \"\n                type=\"text\"\n                maxlength=\"88\"\n                autocomplete=\"off\"\n                class=\"login-input\"\n                id=\"email\"\n              >\n              <label class=\"login-label\">Email</label>\n            </div>\n            <div class=\"login-input-field\">\n              <input\n                placeholder=\" \"\n                type=\"text\"\n                maxlength=\"88\"\n                autocomplete=\"off\"\n                class=\"login-input\"\n                id=\"username\"\n              >\n              <label class=\"login-label\">Username</label>\n            </div>\n            <div class=\"login-input-field\">\n              <input\n                placeholder=\" \"\n                type=\"password\"\n                maxlength=\"100000\"\n                autocomplete=\"off\"\n                class=\"login-input\"\n                id=\"password\"\n              >\n              <label class=\"login-label\">Password</label>\n            </div>\n            <div class=\"login-input-field\">\n              <input\n                placeholder=\" \"\n                type=\"password\"\n                maxlength=\"100000\"\n                autocomplete=\"off\"\n                class=\"login-input\"\n                id=\"confirm-password\"\n              >\n              <label class=\"login-label\">Confirm Password</label>\n            </div>\n            <p>\n              <div class=\"login-link\">\n                <b>Already a member?</b>\n              <div>\n            </p>\n            <button class=\"login-button\">SIGN UP NOW</button>\n            <span class=\"status\"></span>\n          </div>\n        </div>\n      </div>\n    ";
      table$45tool$45web.content[$setInnerHtml](markup, {treeSanitizer: new global$.NullTreeSanitizer.new()});
      table$45tool$45web.content[$setInnerHtml](markup, {treeSanitizer: new global$.NullTreeSanitizer.new()});
      this.signUpButton = html.ButtonElement._check(this.findInContent(".login-button"));
      this.username = html.InputElement._check(this.findInContent("#username"));
      this.password = html.InputElement._check(this.findInContent("#password"));
      this.status = html.SpanElement._check(this.findInContent(".status"));
      this.email = html.InputElement._check(this.findInContent("#email"));
      this.confirmPassword = html.InputElement._check(this.findInContent("#confirm-password"));
      this[_wireItUp$]();
    }
    [_wireItUp$]() {
      this.listeners[$addAll](JSArrayOfStreamSubscription().of([this.findInContent(".login-link")[$onClick].listen(dart.fn(e => {
          table$45tool$45web.loginPage.show();
        }, MouseEventToNull())), this.signUpButton[$onClick].listen(dart.fn(e => {
          if (this.username.value !== "" && this.password.value !== "" && this.email.value !== "" && this.confirmPassword.value !== "" && this.confirmPassword.value == this.password.value) {
            html.HttpRequest.request(dart.str(global$.serverUrl) + "/account", {method: "POST", withCredentials: true, requestHeaders: new (IdentityMapOfString$String()).from(["content-type", "application/JSON"]), sendData: convert.jsonEncode(new (IdentityMapOfString$String()).from(["userName", this.username.value, "password", this.password.value, "email", this.email.value]))}).then(core.Null, dart.fn(response => {
              if (response.status === 200) {
                table$45tool$45web.dashbaordPage.show();
              }
            }, HttpRequestToNull())).catchError(dart.fn(e => {
              this.status[$text] = "Did not sign up";
            }, dynamicToNull()));
          } else {
            this.status[$text] = "Please fill out all fields";
          }
        }, MouseEventToNull()))]));
    }
  };
  (table$45tool$45web.SignUpPage._private = function() {
    this[email] = null;
    this[username$] = null;
    this[password$] = null;
    this[confirmPassword] = null;
    this[signUpButton] = null;
    this[status$] = null;
    table$45tool$45web.SignUpPage.__proto__.new.call(this);
  }).prototype = table$45tool$45web.SignUpPage.prototype;
  dart.addTypeTests(table$45tool$45web.SignUpPage);
  const email = Symbol("SignUpPage.email");
  const username$ = Symbol("SignUpPage.username");
  const password$ = Symbol("SignUpPage.password");
  const confirmPassword = Symbol("SignUpPage.confirmPassword");
  const signUpButton = Symbol("SignUpPage.signUpButton");
  const status$ = Symbol("SignUpPage.status");
  dart.setMethodSignature(table$45tool$45web.SignUpPage, () => ({
    __proto__: dart.getMethods(table$45tool$45web.SignUpPage.__proto__),
    show: dart.fnType(dart.void, []),
    [_wireItUp$]: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(table$45tool$45web.SignUpPage, () => ({
    __proto__: dart.getFields(table$45tool$45web.SignUpPage.__proto__),
    email: dart.fieldType(html.InputElement),
    username: dart.fieldType(html.InputElement),
    password: dart.fieldType(html.InputElement),
    confirmPassword: dart.fieldType(html.InputElement),
    signUpButton: dart.fieldType(html.ButtonElement),
    status: dart.fieldType(html.SpanElement)
  }));
  dart.defineLazy(table$45tool$45web, {
    /*table$45tool$45web.dashbaordPage*/get dashbaordPage() {
      return new table$45tool$45web.DashboardPage._private();
    },
    set dashbaordPage(_) {}
  });
  const _getCampaigns = Symbol('_getCampaigns');
  table$45tool$45web.DashboardPage = class DashboardPage extends table$45tool$45web.Page {
    get cardSection() {
      return this[cardSection];
    }
    set cardSection(value) {
      this[cardSection] = value;
    }
    show() {
      this.clear();
      let markup = "      <div class=\"dashboard-page\">\n        <div class=\"page-header\">\n          <div class=\"dashboard-title\">Dashboard</div>\n          <div class=\"dashboard-description\">\n            Welcome to your dashboard! This page will display all content that is relevent to you. Each campaign, group, and character you are associated with\n            will appear on this page.\n          </div>\n        </div>\n        <div class=\"options-bar\">\n          <button class=\"create-campaign-button\" flat>Create Campaign</button>\n          <div class=\"filter-bar\">\n            <input type=\"text\" placeholder=\"search\" class=\"search-bar\">\n          </div>\n        </div>\n        <div class=\"card-section-container\">\n          <div class=\"card-section\">\n\n          </div>\n        </div>\n      </div>\n    ";
      table$45tool$45web.content[$setInnerHtml](markup, {treeSanitizer: new global$.NullTreeSanitizer.new()});
      this.cardSection = html.DivElement._check(this.findInContent(".card-section"));
      this[_getCampaigns]();
      this[_wireItUp$]();
    }
    [_wireItUp$]() {}
    [_getCampaigns]() {
      html.HttpRequest.request(dart.str(global$.serverUrl) + "/campaign", {withCredentials: true, method: "GET"}).then(core.Null, dart.fn(response => {
        let data = convert.jsonDecode(core.String._check(response[$response]));
        if (core.List.is(data)) {
          data[$forEach](dart.fn(campaignItem => {
            if (core.Map.is(campaignItem)) {
              let item = new src__components__component.DashboardItem.new(src__components__component.ItemType.CAMPAIGN, core.String._check(campaignItem[$_get]("name")));
              this.cardSection[$append](item.element);
            }
          }, dynamicToNull()));
        }
      }, HttpRequestToNull())).catchError(dart.fn(e => {
        html.window.alert(dart.toString(e));
      }, dynamicToNull()));
    }
  };
  (table$45tool$45web.DashboardPage._private = function() {
    this[cardSection] = html.DivElement.new();
    table$45tool$45web.DashboardPage.__proto__.new.call(this);
  }).prototype = table$45tool$45web.DashboardPage.prototype;
  dart.addTypeTests(table$45tool$45web.DashboardPage);
  const cardSection = Symbol("DashboardPage.cardSection");
  dart.setMethodSignature(table$45tool$45web.DashboardPage, () => ({
    __proto__: dart.getMethods(table$45tool$45web.DashboardPage.__proto__),
    show: dart.fnType(dart.void, []),
    [_wireItUp$]: dart.fnType(dart.void, []),
    [_getCampaigns]: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(table$45tool$45web.DashboardPage, () => ({
    __proto__: dart.getFields(table$45tool$45web.DashboardPage.__proto__),
    cardSection: dart.fieldType(html.DivElement)
  }));
  dart.trackLibraries("packages/TableToolWebDart/table-tool-web.ddc", {
    "package:TableToolWebDart/src/components/component.dart": src__components__component,
    "package:TableToolWebDart/table-tool-web.dart": table$45tool$45web
  }, '{"version":3,"sourceRoot":"","sources":["src/components/header.dart","src/components/dialog.dart","src/components/dashboard-item.dart","table-tool-web.dart","src/pages/home.dart","src/abstracts/page.dart","src/pages/login.dart","src/pages/signup.dart","src/pages/dashboard.dart"],"names":[],"mappings":"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","file":"table-tool-web.ddc.js"}');
  // Exports:
  return {
    src__components__component: src__components__component,
    table$45tool$45web: table$45tool$45web
  };
});

//# sourceMappingURL=table-tool-web.ddc.js.map
