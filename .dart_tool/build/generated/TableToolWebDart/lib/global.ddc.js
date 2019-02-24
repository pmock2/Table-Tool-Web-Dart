define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const _root = Object.create(null);
  const global = Object.create(_root);
  const $querySelectorAll = dartx.querySelectorAll;
  const $toString = dartx.toString;
  const $zIndex = dartx.zIndex;
  const $getComputedStyle = dartx.getComputedStyle;
  const $forEach = dartx.forEach;
  let ElementToNull = () => (ElementToNull = dart.constFn(dart.fnType(core.Null, [html.Element])))();
  global.NullTreeSanitizer = class NullTreeSanitizer extends core.Object {
    sanitizeTree(node) {}
  };
  (global.NullTreeSanitizer.new = function() {
  }).prototype = global.NullTreeSanitizer.prototype;
  dart.addTypeTests(global.NullTreeSanitizer);
  global.NullTreeSanitizer[dart.implements] = () => [html.NodeTreeSanitizer];
  dart.setMethodSignature(global.NullTreeSanitizer, () => ({
    __proto__: dart.getMethods(global.NullTreeSanitizer.__proto__),
    sanitizeTree: dart.fnType(dart.void, [html.Node])
  }));
  dart.defineLazy(global, {
    /*global.loggingIn*/get loggingIn() {
      return async.StreamController.broadcast();
    },
    set loggingIn(_) {}
  });
  dart.copyProperties(global, {
    get logInEvent() {
      return global.loggingIn.stream;
    }
  });
  dart.defineLazy(global, {
    /*global.highestZIndex*/get highestZIndex() {
      return 0;
    },
    set highestZIndex(_) {},
    /*global.serverUrl*/get serverUrl() {
      return "http://localhost:3001";
    },
    set serverUrl(_) {},
    /*global.loggedIn*/get loggedIn() {
      return false;
    },
    set loggedIn(_) {},
    /*global.userProfile*/get userProfile() {
      return null;
    },
    set userProfile(_) {}
  });
  global.getHighestZIndex = function() {
    let elements = html.document[$querySelectorAll](html.Element, "*");
    elements[$forEach](dart.fn(element => {
      let zIndex = dart.toString(element[$getComputedStyle]()[$zIndex]);
      if (zIndex != null && typeof zIndex == 'string' && zIndex !== "auto") {
        let zIndexVal = core.num.parse(zIndex);
        if (dart.notNull(zIndexVal) > dart.notNull(global.highestZIndex)) {
          global.highestZIndex = zIndexVal;
        }
      }
    }, ElementToNull()));
    return global.highestZIndex;
  };
  dart.trackLibraries("packages/TableToolWebDart/global.ddc", {
    "package:TableToolWebDart/global.dart": global
  }, '{"version":3,"sourceRoot":"","sources":["global.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;iBAOoB,IAAS,GAAG;;;EAChC;;;;;;;;MAEmB,gBAAS;YAAG,iCAA0B;;;;;;YAC9B,iBAAS,OAAO;;;;MAEvC,oBAAa;YAAG;;;MAEb,gBAAS;YAAG;;;MAEd,eAAQ;YAAG;;;MAEK,kBAAW;;;;;;AAG9B,QAAc,WAAW,aAAQ,mBAAiB,eAAC;AAEnD,YAAQ,UAAQ,CAAC,QAAC,OAAO;AACvB,UAAO,uBAAS,OAAO,mBAAiB,WAAS;AACjD,UAAI,MAAM,IAAI,eAAQ,MAAM,gBAAc,MAAM,KAAI,QAAQ;AAC1D,YAAI,YAAY,QAAG,MAAM,CAAC,MAAM;AAChC,YAAc,aAAV,SAAS,iBAAG,oBAAa,GAAE;AAC7B,iCAAgB,SAAS;;;;AAK/B,UAAO,qBAAa;EACtB","file":"global.ddc.js"}');
  // Exports:
  return {
    global: global
  };
});

//# sourceMappingURL=global.ddc.js.map
