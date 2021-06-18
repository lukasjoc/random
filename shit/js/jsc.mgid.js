!(function (e) {
  var t = {};
  function n(i) {
    if (t[i]) return t[i].exports;
    var o = (t[i] = { i: i, l: !1, exports: {} });
    return e[i].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, i) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var i = Object.create(null);
      if (
        (n.r(i),
        Object.defineProperty(i, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          n.d(
            i,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return i;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 0));
})([
  function (e, t, n) {
    e.exports = n(1);
  },
  function (e, t, n) {
    n(2), n(3);
  },
  function (e, t, n) {
    function o(e) {
      return (o =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    window.MarketGidBaseBlockC762628 = function (e, t, n, r, a, s) {
      var c = this;
      if (
        ((this.context = t),
        (this.root = this.context.document.getElementById(e)),
        (this.containerId = r),
        (this.uniqId = a),
        (this.fallbackMode = n),
        (this.page = 1),
        (this.iteration = 1),
        (this.adlink = ""),
        (this.template = ""),
        (this.id = 762628),
        (this.originalId = 762628),
        (this.pvid = 0),
        (this.muid = ""),
        (this.botRadarMetrics = -1),
        (this.cookieStorage = {}),
        (this.sharedCookieStorage = {}),
        (this.afterPreRenderNewsHooks = []),
        (this.beforeLoadNewsHooks = []),
        (this.afterLoadNewsHooks = []),
        (this.afterInjectScriptHooks = []),
        (this.afterPrepareCappingDataHooks = []),
        (this.afterSendCappingHooks = []),
        (this.prerenderStatus = !0),
        (this.afterInitHooks = []),
        (this.blocksAddress = ""),
        (this.tickerPrefix = ""),
        (this.countLoadBlocks = 0),
        (this.preTemplate = ""),
        (this.postTemplate = ""),
        (this.banners = {}),
        (this.useTimeTracking = !1),
        (this.loadedDefault = !1),
        (this.teaserHashes = {}),
        (this.teaserData = {}),
        (this.json = []),
        (this.servicerData = {}),
        (this.childWidgetsData = JSON.parse("[]")),
        (this.versionWidget = s),
        (this.sspPerformance = 10 >= Math.ceil(100 * Math.random())),
        (this.doubleClickType = ""),
        (this.doubleClickCheckId = 0),
        (this.doubleClickEnabled = !1),
        (this.widgetConstructorData = JSON.parse(
          '{"cols":"1","font":"roboto","kind":"wages","rows":"1","type":"sidebar-widget","media":{"opacity":80,"duration":1,"minWidth":250,"position":"bottom","minHeight":150,"videoOverlay":1},"mgbox":{"styles":{"maxWidth":1220}},"theme":"#2b397b","width":0,"button":1,"mcdesc":{"styles":{"font":"opensans","color":"#666666","display":"none","fontSize":12,"fontStyle":"normal","textAlign":"center","fontWeight":"normal","textDecoration":"none"}},"mgline":{"styles":{"borderColor":"#ffffff","borderStyle":"solid","borderWidth":0}},"imgType":"super","mcimage":{"size":200,"styles":{"padding":0,"borderColor":"#ffffff","borderStyle":"solid","borderWidth":0},"size-width":492,"size-height":328},"mcprice":{"show":"false","styles":{"font":"opensans","color":"#2a3a7b","fontSize":14,"fontStyle":"normal","textAlign":"left","fontWeight":"bold","textDecoration":"none"}},"mctable":{"styles":{"borderColor":"","borderWidth":0,"backgroundColor":""}},"mctitle":{"styles":{"color":"#868585","fontSize":"18","fontStyle":"normal","textAlign":"left","fontWeight":"bold","textDecoration":"none"}},"subType":"sidebar-widget-cards","mcdomain":{"styles":{"font":"roboto","color":"#868585","display":"block","fontSize":"13","fontStyle":"normal","textAlign":"left","fontWeight":"normal","textDecoration":"none"}},"isToaster":1,"colsMobile":1,"isDragDown":1,"imageFormat":19,"imageShadow":"","textPosition":"bottom","autoplacement":"off","formatChanged":true,"isInterstitial":0,"popupFrequency":15,"is_int_exchange":"0","imageScaleOnHover":"","interstitialAfter":3,"sidebarWidthCorrect":0,"widgetTitleSettings":{"styles":{"font":"roboto","color":"#2b397b","fontSize":14,"text-transform":"uppercase"}},"frequencyCappingShow":3,"frequencyCappingTime":2,"sidebarScrollPercent":"0","widgetTypeDescription":1}'
        )),
        void 0 !== c.widgetConstructorData.mctitle &&
        void 0 !== c.widgetConstructorData.mctitle.styles &&
        void 0 !== c.widgetConstructorData.mctitle.styles.fontSize
          ? (this.autoSizeTitle =
              c.widgetConstructorData.mctitle.styles.fontSize)
          : (this.autoSizeTitle = 0),
        (this.globalSettings = JSON.parse(
          '{"capping_observer_threshold":"0.5","current_language":"en","timer_toaster_inactivity":"8","widget_lazy_load_margin":"1000","accidental_clicks_delay":"10"}'
        )),
        (this.preRenderImageSizes = {}),
        (this.preRenderTeaserSizes = {}),
        (this.customBanners = JSON.parse("[]")),
        (c.clickHandlers = []),
        (c.observerWidgetHooks = []),
        (c.observerTeasersHooks = []),
        (this.sspDoubleClickHash = []),
        (this.fakeMode = 0),
        (this.requestParams = {}),
        (c.webProtocol = "https:"),
        (this.clickHandlerList = {
          onSiteNotificationClick: {
            handler: "onSiteNotificationHandler",
            priority: 8,
          },
          onSmartDoubleClick: {
            handler: "onSmartDoubleClickHandler",
            priority: 10,
          },
          onAntifraudStatisticsClick: {
            handler: "onAntifraudStatisticsClickHandler",
            priority: 15,
          },
          sspDoubleClick: { handler: "sspDoubleClickHandler", priority: 20 },
          activateDelayLink: {
            handler: "activateDelayLinkHandler",
            priority: 30,
          },
          accidentalClicks: {
            handler: "accidentalClicksHandler",
            priority: 50,
          },
          externalCountersLink: {
            handler: "externalCountersLinkHandler",
            priority: 100,
          },
          returnedRefreshClick: {
            handler: "returnedRefreshClickHandler",
            priority: 120,
          },
          internalExchangeLogger: {
            handler: "internalExchangeLoggerHandler",
            priority: 150,
          },
          showDesktopDoubleClick: {
            handler: "showDesktopDoubleClickButton",
            priority: 150,
          },
          showMobileDoubleClick: {
            handler: "showDoubleClickButton",
            priority: 150,
          },
          hangNiceLinkListener: {
            handler: "hangNiceLinkListener",
            priority: 200,
          },
          clickHeatMapElement: {
            handler: "clickHeatMapElement",
            priority: 400,
          },
          closeWidgetClick: { handler: "closeWidget", priority: 600 },
        }),
        c.context.self !== c.context.top)
      ) {
        var l = c.context.document.referrer.split("/");
        c.intExchangeProtocol = 0 == l[0].indexOf("http") ? l[0] : "https:";
      } else {
        var d = c.context.document.location.protocol;
        c.intExchangeProtocol = 0 == d.indexOf("http") ? d : "https:";
      }
      (c.sourceName = ""),
        (this.templates = JSON.parse("[]")),
        (this.templateId = 0),
        (c.setStyles = function (e) {
          c.styles = e.replace(/\((\'|\")?\/\//g, "($1" + c.webProtocol + "//");
        }),
        (c.setTemplate = function (e) {
          (e = (e = (e = e.replace(/^\s*[\r\n]|\s{2,}/gm, "")).replace(
            /\((\'|\")?\/\//g,
            "($1" + c.webProtocol + "//"
          )).replace('src="//', 'src="' + c.webProtocol + "//")),
            (c.templateText = e.replace(
              'href="//',
              'href="' + c.webProtocol + "//"
            ));
        }),
        (this.servicerDomain = "servicer.mgid.com"),
        c.setTemplate(
          '\n<div class="mgbox">\n\x3c!--advertPrefix--\x3e\n{foreach}\n    {if this.iteration != 1}</div>{/if}<div class="mgline">\n    {if $banner}{$banner}{/if}\n    {if $teaser}\n                <div class="image-with-text">\n                        <div class="mcimg">\n                <a {$target} {$href} >\n                    <div class="image-container">\n                        <img class="mcimg" {$src} />\n                                                    \x3c!--intExchangeWagesImagePlace--\x3e\n                                            </div>\n                </a>\n            </div>\n                            <div class="text-elements">\n    <div class="text_on_hover">\n        <div class="mctitle"><a {$target} {$href}>{$title}</a></div>\n                <div class="fake">\n                            <div class="mcdomain"><a {$target} {$href}>{$source}</a></div>\n                                </div>\n        <div class="mgtobottom">\n                            <div class="mcdomain"><a {$target} {$href}>\x3c!--intExhangeWagesSourcePlace--\x3e{$source}</a></div>\n                                </div>\n    </div>\n</div>\n                    </div>\n    {/if}\n    {/foreach}\n    </div>\n</div>\n'.replace(
            /[\r\n]/g,
            ""
          )
        ),
        c.setStyles(
          "@font-face { font-family: \\'Roboto\\'; font-style: normal; font-weight: 400; src: local(\\'Roboto\\'), local(\\'Roboto-Regular\\'), url(https://fonts.gstatic.com/s/roboto/v15/mUdRVCMHGKUBOACHGTH1g-vvDin1pK8aKteLpeZ5c0A.woff) format(\\'woff\\'); } /* cyrillic-ext */ @font-face { font-family: \\'Open Sans\\'; font-style: normal; font-weight: 400; src: local(\\'Open Sans\\'), local(\\'OpenSans\\'), url(https://fonts.gstatic.com/s/opensans/v10/K88pR3goAWT7BTt32Z01m1tXRa8TVwTICgirnJhmVJw.woff2) format(\\'woff2\\'); unicode-range: U+0460-052F, U+20B4, U+2DE0-2DFF, U+A640-A69F; } /* cyrillic */ @font-face { font-family: \\'Open Sans\\'; font-style: normal; font-weight: 400; src: local(\\'Open Sans\\'), local(\\'OpenSans\\'), url(https://fonts.gstatic.com/s/opensans/v10/RjgO7rYTmqiVp7vzi-Q5UVtXRa8TVwTICgirnJhmVJw.woff2) format(\\'woff2\\'); unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116; } /* latin-ext */ @font-face { font-family: \\'Open Sans\\'; font-style: normal; font-weight: 400; src: local(\\'Open Sans\\'), local(\\'OpenSans\\'), url(https://fonts.gstatic.com/s/opensans/v10/u-WUoqrET9fUeobQW7jkRVtXRa8TVwTICgirnJhmVJw.woff2) format(\\'woff2\\'); unicode-range: U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF; } /* latin */ @font-face { font-family: \\'Open Sans\\'; font-style: normal; font-weight: 400; src: local(\\'Open Sans\\'), local(\\'OpenSans\\'), url(https://fonts.gstatic.com/s/opensans/v10/cJZKeOuBrn4kERxqtaUH3VtXRa8TVwTICgirnJhmVJw.woff2) format(\\'woff2\\'); unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215, U+E0FF, U+EFFD, U+F000; } /* cyrillic-ext */ @font-face { font-family: \\'Open Sans\\'; font-style: normal; font-weight: 700; src: local(\\'Open Sans Bold\\'), local(\\'OpenSans-Bold\\'), url(https://fonts.gstatic.com/s/opensans/v10/k3k702ZOKiLJc3WVjuplzCUUniRZcd_wq8DYmIfsw2A.woff2) format(\\'woff2\\'); unicode-range: U+0460-052F, U+20B4, U+2DE0-2DFF, U+A640-A69F; } /* cyrillic */ @font-face { font-family: \\'Open Sans\\'; font-style: normal; font-weight: 700; src: local(\\'Open Sans Bold\\'), local(\\'OpenSans-Bold\\'), url(https://fonts.gstatic.com/s/opensans/v10/k3k702ZOKiLJc3WVjuplzOXREeHhJi4GEUJI9ob_ak4.woff2) format(\\'woff2\\'); unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116; } /* latin-ext */ @font-face { font-family: \\'Open Sans\\'; font-style: normal; font-weight: 700; src: local(\\'Open Sans Bold\\'), local(\\'OpenSans-Bold\\'), url(https://fonts.gstatic.com/s/opensans/v10/k3k702ZOKiLJc3WVjuplzBUOjZSKWg4xBWp_C_qQx0o.woff2) format(\\'woff2\\'); unicode-range: U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF; } /* latin */ @font-face { font-family: \\'Open Sans\\'; font-style: normal; font-weight: 700; src: local(\\'Open Sans Bold\\'), local(\\'OpenSans-Bold\\'), url(https://fonts.gstatic.com/s/opensans/v10/k3k702ZOKiLJc3WVjuplzOgdm0LZdjqr5-oayXSOefg.woff2) format(\\'woff2\\'); unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215, U+E0FF, U+EFFD, U+F000; } .mgresponsive { display: inherit; } .mgbox { padding: 0 !important; position: relative !important; text-align: center; vertical-align: top !important; margin: 0 auto; border-style: solid; border-width: 0px; border-color: ; background-color: ; display: -ms-flexbox; display: -webkit-flex; display: flex; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; line-height: 100% !important; transition: none !important; box-sizing: border-box; } .image-with-text { position: relative; } .mgbox { width: 100%; max-width: 100%; } div.mcimg { padding: 0px; text-align: center; } img.mcimg { border-style: solid; border-color: #ffffff; border-width: 0px; width: 100% !important; height: auto !important; max-width: 492px; max-height: 328px; box-sizing: border-box; display: block; } .mctitle { margin-top: 10px; text-align: left; } .mctitle a { font-weight: bold; font-size: 18px; line-height: 18px; font-style: normal; text-decoration: none; color: #868585; font-family: Roboto; } .mcdesc { display: none; text-align: center; } .mcdesc a { font-weight: normal; font-size: 12px; line-height: 12px; font-style: normal; text-decoration: none; color: #666666; font-family: \\'Open Sans\\', sans-serif; } .mcdomain { display: block; text-align: left; } .mcdomain a { font-weight: normal; font-size: 13px; line-height: 13px; font-style: normal; text-decoration: none; color: #868585; font-family: Roboto; padding: 4px; display: block; overflow: hidden; text-transform: capitalize; } .mcdomain a img.mcimgsrc { vertical-align: bottom; margin-bottom: -3px; height: 20px; width: 20px; display: inline-block; } .mgline { background: none repeat scroll 0 0; background-color: ; cursor: pointer; display: inline-block; overflow: hidden; zoom: 1; display: inline; padding: 0 !important; border-style: solid; border-color: #ffffff; border-width: 0px; width: 99%; max-width: 99%; box-sizing: border-box; margin: 10px 0.5%; display: -ms-flexbox; display: -webkit-flex; display: flex; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; word-wrap: break-word; } .mgline .image-container { position: relative; } .mgline .image-container .mcimgad { position: absolute; right: 0; bottom: 0; width: 20px; height: 20px; } .mgline { vertical-align: top; } .mgline, .mgbox { min-width: 90px; } .mgline[max-width~=\"120px\"] .mcdesc { display: none !important; } @supports not (flex-wrap: wrap) { .mgbox { display: block !important; } .mgline { display: inline-block !important; } } .text-elements a { text-decoration: none; } div.mcprice { text-align: left; } div.mcprice span { font-weight: bold; font-size: 14px; line-height: 14px; font-style: normal; text-decoration: none; color: #2a3a7b; font-family: \\'Open Sans\\', sans-serif; } div.mgbuybox, div.mgarrowbox { display: false; } div.mgbuybox, div.mgarrowbox, div.mcprice { display: none; } span.mcpriceold { text-decoration: line-through !important; } @media (max-width: 480px) { .mgline { width: 48% !important; margin: 1% !important; max-width: 48% !important; } } @media (max-width: 480px) { .mgline { width: 98% !important; margin: 1% !important; max-width: 98% !important; } } img.mcimg { margin: 0; opacity: 1 !important; } .mgline { position: relative; } .mgline .fake { visibility: hidden; position: relative; padding-top: 4px; } .mgline:hover .mctitle a { color: #2b397b; text-decoration: underline !important; } .mgbuybox { text-align: right; font-weight: 700; font-size: 12px; color: #666666; } .mctitle { margin-top: 2px; line-height: 1 !important; } .mctitle a { line-height: 110% !important; } .mcdesc { margin-top: 0; margin-bottom: 2px; } .mcdesc a { line-height: 1.5 !important; } .mcprice-wrap { position: absolute; display: block; top: 0px; left: 0px; text-decoration: none; } .mcdiscount { color: #fff; border: none; font-size: 1.21em; } .mgarrowbox { position: relative; background: #fff; padding-right: 12px; } .mgarrowbox:before { content: \\'\\'; position: absolute; top: 0; right: -10px; border-top: 21px solid transparent; border-bottom: 21px solid transparent; border-left: 10px solid #fff; } div.mcprice-cover { display: -ms-flexbox; display: -webkit-flex; display: flex; -webkit-flex-wrap: nowrap; -ms-flex-wrap: nowrap; flex-wrap: nowrap; -webkit-align-items: stretch; -moz-box-align: stretch; -ms-flex-align: stretch; align-items: stretch; -webkit-justify-content: flex-start; justify-content: flex-start; -webkit-flex-direction: row; -ms-flex-direction: row; flex-direction: row; height: 42px; font-size: 14px; } div.mcprice-cover .mcprice { font-size: 1.29em; color: #fff; } div.mcprice-cover.mcprice-cover_old .mcprice-inner { padding-top: 4px; width: auto; } div.mcprice-cover.mcprice-cover_old .mcprice-val { padding-right: 0; } div.mcprice-cover.mcprice-cover_old .mcprice { margin-bottom: 4px; color: #2a3a7b; font-size: 1em; } div.mcprice-cover.mcprice-cover_old + .mcprice-cover { display: none !important; } .mcprice-val, .mcprice-inner { display: -ms-flexbox; display: -webkit-flex; display: flex; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; -webkit-align-items: center; -moz-box-align: center; -ms-flex-align: center; align-items: center; -webkit-justify-content: flex-start; justify-content: flex-start; white-space: nowrap; } .mcprice-inner { background: #ed181d; position: relative; padding: 0 2px 0 8px; text-align: center; color: #fff; width: 100%; } .mcprice-inner:before { content: \\'\\'; position: absolute; top: 0; right: -10px; border-top: 21px solid transparent; border-bottom: 21px solid transparent; border-left: 10px solid #ed181d; } .mcprice-val { padding: 2px 10px 0 14px; -webkit-flex-direction: column; -ms-flex-direction: column; flex-direction: column; -webkit-flex-wrap: wrap; -ms-flex-wrap: wrap; flex-wrap: wrap; -webkit-justify-content: center; justify-content: center; -webkit-align-items: flex-start; -moz-box-align: start; -ms-flex-align: start; align-items: flex-start; font-weight: bold; font-style: normal; text-align: left; } .mcpriceold { display: block !important; position: relative; width: 100%; font-size: 0.78em; font-weight: inherit; color: #ed181d; } .mcpriceold span { position: relative; } .mcpriceold span:before { content: \\'\\'; height: 1px; background: #ed181d; left: 0; right: 0; top: 50%; position: absolute; } div.mgbuybox, div.mgarrowbox { display: none; } .fake, .mgtobottom { display: table; bottom: 0; width: 100%; text-align: left; } .fake > *, .mgtobottom > * { display: table-cell; } .mgtobottom__buy { padding-right: 20px; } .mgtobottom { position: absolute; } .mgline .image-with-text, .mgline .mgtobottom { width: 100% !important; margin: 0 auto; } .mgline .image-with-text, .mgline .mgtobottom { max-width: 492px; } .mghead { font-family: Roboto !important; color: #2b397b; font-size: 14px !important; text-transform: uppercase !important; } .mcdomain { display: block; overflow: hidden; padding: 4px; } .mcdomain a { display: block; padding: 0 0 2px; padding-top: 3.5px; overflow: hidden; } div.mcprice, div.mcriceold { font-weight: bold; font-size: 14px; line-height: 14px; font-style: normal; text-decoration: none; color: #2a3a7b; font-family: \\'Open Sans\\', sans-serif; } .mgline[max-width~=\"120px\"] .mgarrowbox, .mgline[max-width~=\"120px\"] .mgbuybox { display: none !important; } .image-with-text { min-height: 1px; } @media (max-width: 480px) { .mgline { width: 98% !important; margin: 1% !important; max-width: 98% !important; } } .mgline { box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.25); border-radius: 5px; overflow: hidden; background: #fff; } .mgline .image-container { display: inline-block !important; } .mgline .mgtobottom { left: 0; right: 0; } .mgline .mctitle { margin-top: 5px; min-height: 35px; overflow: hidden; padding: 0 7px; } .mgline .mcdesc { padding: 0 20px; } .mgline .mcdomain { padding-top: 4px; padding-bottom: 4px; } .mcdomain a { line-height: 14px; margin-top: 0; margin-bottom: 5px; } .fake > *, .mgtobottom > * { padding-left: 7px; padding-right: 7px; } .mcdomain a img.mcimgsrc { margin-right: 5px; } .mg-slider-overlay { overflow: hidden; position: relative; } .mg-slider-overlay .mg-slider-wrap { min-height: 200px; position: relative; width: 100%; -webkit-transform: translate3D(0, 0, 0); -moz-transform: translate3D(0, 0, 0); -ms-transform: translate3D(0, 0, 0); -o-transform: translate3D(0, 0, 0); transform: translate3D(0, 0, 0); -webkit-transition-duration: 200ms; -moz-transition-duration: 200ms; -ms-transition-duration: 200ms; -o-transition-duration: 200ms; transition-duration: 200ms; } .mg-slider-overlay .mg-slider-wrap .mg-slider-box { left: 0; top: 0; position: absolute; width: 100%; } .mg-pagination { text-align: center; } .mg-pagination .mg-pagination-list { display: inline-block; } .mg-pagination .mg-pagination-item { cursor: pointer; display: inline-block; *display: inline; *zoom: 1; width: 8px; height: 8px; margin: 0 2px; background: #ddd; border-radius: 50%; } .mg-pagination .mg-pagination-item-prev, .mg-pagination .mg-pagination-item-next { background: #f7f7f7; border: 1px solid #cecece; border-radius: 2px; cursor: pointer; display: inline-block; height: 11px; margin: 0 10px; padding: 5px 0; text-align: center; vertical-align: middle; width: 29px; } .mg-pagination .mg-pagination-item-prev:after, .mg-pagination .mg-pagination-item-next:after { background: url(https://images.dable.io/static/i/prevnext2.png?3) no-repeat 0 0; background-size: 17px 11px; content: \"\"; display: inline-block; height: 13px; width: 9px; } .mg-pagination .mg-pagination-item-next:after { background-position: -10px 0; width: 8px; } .mg-pagination .mg-pagination-item-current { background: #508eef; } ".replace(
            /\\'/g,
            "'"
          )
        ),
        (c.adBlockStyles = ""),
        (c.adBlockStyles = c.adBlockStyles.replace(
          /\((\'|\")?\/\//g,
          "($1" + c.webProtocol + "//"
        )),
        (c.clickTracking = ""),
        (c.loadedType = ""),
        (c.funcBlocks = {}),
        (c.teaserData = {}),
        (c.browserId = -1),
        (c.deviceType = "desktop"),
        (c.hrefAttr = "href"),
        (c.enabledCooperationTypes = JSON.parse('["wages"]')),
        (c.consentData = ""),
        (c.cmpEnabled = !1),
        (c.uspString = ""),
        (c.uspEnabled = !1),
        (c.tcfv2Data = ""),
        (c.tcfv2Enabled = !1),
        (c.ampConsentData = ""),
        (c.cookieMatchingDomain = "cm.steepto.com"),
        (c.context._mgIntExchangeNews = c.context._mgIntExchangeNews || {}),
        (c.iframePlacementType = 0),
        (c.networkInformationType = "unknown"),
        (c.networkInformationEffectiveType = "unknown"),
        (c.networkInformationSaveData = 0),
        (c.pageUrl = ""),
        (c.refererUrl = ""),
        (c.processHooks = function (e, t) {
          for (var n = 0; n < c[e].length; n++) {
            var i = c[e][n];
            try {
              c.log("".concat(e, " hook ").concat(i, " start")),
                c[i].apply(c, t);
            } catch (t) {
              c.log(
                "".concat(e, " hook ").concat(i, " error: ").concat(t.message)
              );
            }
          }
        }),
        (this.MarketCutStr = function (e, t, n) {
          if (e.length <= t) return e;
          var o,
            r = (o = e.split(" "))[0] + " ";
          for (i = 1; i < o.length; i++) {
            if ((r + o[i]).length > t)
              return r + (void 0 === n || n ? "..." : "");
            r += o[i] + " ";
          }
          return e;
        }),
        (this.MarketParseStr = function (e, t) {
          var n,
            i = [],
            o = "";
          for (i = e.split(" "), n = 0; n < i.length; n++)
            i[n].length > t && i[n].search(/&\w+;/) < 0
              ? (o += i[n].substr(0, t) + " " + i[n].substr(t) + " ")
              : (o += i[n] + " ");
          return o;
        }),
        (this.prepareTitle = function (e) {
          return (e = this.MarketCutStr(e, 75, 1));
        }),
        (this.prepareDesc = function (e) {
          return (e = this.MarketCutStr(e, 75));
        }),
        (this.isArray = function (e) {
          return "[object Array]" === Object.prototype.toString.call(e);
        }),
        (this.hidePreloadDiv = function () {
          c.fallbackMode
            ? c.fallbackMode &&
              0 == this.countLoadBlocks &&
              ((c.root.innerHTML = ""),
              c.context.document.getElementById("M505244PreloadC762628") &&
                (c.context.document.getElementById(
                  "M505244PreloadC762628"
                ).style.display = "none"))
            : c.context.document.getElementById(
                "MarketGidPreloadC" + this.containerId
              )
            ? (c.context.document.getElementById(
                "MarketGidPreloadC" + this.containerId
              ).style.display = "none")
            : c.context.document.getElementById(
                "M505244PreloadC" + this.containerId
              )
            ? (c.context.document.getElementById(
                "M505244PreloadC" + this.containerId
              ).style.display = "none")
            : c.context.document.getElementById(
                "MarketGidPreloadN" + this.containerId
              )
            ? (this.context.document.getElementById(
                "MarketGidPreloadN" + this.containerId
              ).style.display = "none")
            : c.context.document.getElementById(
                "M505244PreloadN" + this.containerId
              ) &&
              (c.context.document.getElementById(
                "M505244PreloadN" + this.containerId
              ).style.display = "none");
        }),
        (this.MarketGidPrerenderNews = function (e) {
          var t = c.templateFunc(c, e, !0);
          this.root &&
            t &&
            (this.fallbackMode &&
              0 === this.countLoadBlocks &&
              (this.root.innerHTML = ""),
            "function" == typeof c.parseAdvertLink &&
              (c.refreshAdvertLink(), (t = c.parseAdvertLink(t))),
            this.addPreRenderTemplate(t)),
            1 === c.fakeMode &&
              c.prerenderStatus &&
              c.processHooks("afterPreRenderNewsHooks");
        }),
        (this.MarketGidLoadNews = function (e, t) {
          if ((this.hidePreloadDiv(), (c.iteration = 1), void 0 !== t)) {
            if (
              ((c.servicerData = t),
              void 0 !== t.dt && (c.deviceType = t.dt),
              void 0 !== t.brid && (c.browserId = t.brid),
              (c.servicerData.templateId =
                c.servicerData.hasOwnProperty("config") &&
                c.servicerData.config.hasOwnProperty("templateId")
                  ? c.servicerData.config.templateId
                  : 0),
              void 0 !== c.servicerData &&
                void 0 !== c.servicerData.css &&
                ((c.styles = c.servicerData.css),
                c.addStyle("split_style", c.servicerData.css),
                c.removeStyle("main")),
              void 0 !== c.servicerData &&
                void 0 !== c.servicerData.t &&
                "" !== c.servicerData.t)
            ) {
              var n = c.servicerData.t.replace(/\r?\n/g, "");
              c.setTemplate(n);
            }
            if (
              c.servicerData.hasOwnProperty("templateId") &&
              c.templates[c.servicerData.templateId] &&
              (void 0 === c.isElastic || 0 == c.countLoadBlocks)
            ) {
              var i = this.context.document.createElement("script");
              (i.type = "text/javascript"),
                (i.charset = "utf-8"),
                (i.src =
                  c.webProtocol +
                  "//" +
                  c.templates[c.servicerData.templateId]);
              this.root.parentNode.appendChild(i);
              var o = 5,
                r = setInterval(function () {
                  var t = (function () {
                    var e,
                      t = c.context._mgtemplates;
                    for (e in t)
                      if (
                        (t[e].widgetId === c.id ||
                          t[e].widgetId === c.originalId) &&
                        t[e].templateId === c.servicerData.templateId
                      )
                        return t[e];
                    return null;
                  })();
                  if (null === t) {
                    if (--o >= 0) return;
                    new Image(0, 0).src =
                      c.webProtocol +
                      "//c.mgid.com/widget-template-timeout?id=" +
                      c.id;
                  } else (c.templateId = t.templateId), c.removeStyle("main"), c.addStyle("main", t.styles), c.setTemplate(t.template);
                  clearInterval(r), c.MarketGidLoadNews(e);
                }, c.servicerData.tsi || 15);
              return;
            }
          }
          if (
            (0 === c.fakeMode && c.processHooks("beforeLoadNewsHooks"),
            this.isArray(e))
          ) {
            c.json = e;
            var a = c.templateFunc(c, e);
            this.root &&
              a &&
              ("function" == typeof c.parseAdvertLink &&
                e.length > 0 &&
                (a = c.parseAdvertLink(a)),
              this.fallbackMode &&
                0 == this.countLoadBlocks &&
                (this.root.innerHTML = ""),
              this.addTemplate(a),
              this.renderBanners(!0));
          } else if (this.root && 0 == this.countLoadBlocks)
            return void (this.root.innerHTML = "");
          if (
            c.servicerData &&
            c.servicerData.muidn &&
            c.servicerData.pvid &&
            0 != c.pvid &&
            c.servicerData.pvid == c.pvid
          )
            try {
              c.context.localStorage &&
                c.context.localStorage.setItem("mgMuidn", c.servicerData.muidn);
            } catch (e) {}
          (this.cookieStorage.page = this.page),
            (this.cookieStorage.time = new Date().getTime()),
            this.setCookie();
          for (
            var s = this.root.getElementsByTagName("a"), l = 0;
            l < s.length;
            l++
          )
            s[l].rel = "nofollow noopener";
          this.countLoadBlocks++,
            0 === c.fakeMode
              ? c.processHooks("afterLoadNewsHooks")
              : "function" == typeof c.responsiveInit && c.responsiveInit();
        }),
        (this.addTemplate = this.addPreRenderTemplate = function (e) {
          this.root.insertAdjacentHTML(
            "beforeend",
            this.preTemplate + e + this.postTemplate
          );
        }),
        (this.getViewportHeight = function () {
          var e = this.context.document,
            t = this.context,
            n = "documentElement",
            i = "clientHeight",
            o = "clientWidth",
            r = "scrollTop";
          return c.isAmp()
            ? void 0 !== t["intersectionRect762628_" + c.uniqId]
              ? {
                  c: t["intersectionRect762628_" + c.uniqId].height,
                  s: t["intersectionRect762628_" + c.uniqId].y,
                }
              : {
                  c: t.intersectionRect762628.height,
                  s: t.intersectionRect762628.y,
                }
            : t.innerWidth
            ? { c: t.innerHeight, s: t.pageYOffset }
            : e[n] && e[n][o]
            ? { c: e[n][i], s: e[n][r] }
            : e.body[o]
            ? { c: e.body[i], s: e.body[r] }
            : 0;
        }),
        (this.renderItem = function (e, t, n, i) {
          var o = [];
          void 0 === c.customBanners[c.iteration] ||
            i ||
            (e = { html: c.customBanners[c.iteration], useSecureIframe: !0 });
          var r,
            a = "",
            s = "mgBanner_762628_" + this.page + "_" + this.iteration;
          if ("html" in e && !i) {
            e.h &&
              (c.teaserData[e.h] = {
                type: "banner",
                coopType: "w",
                imp: void 0 !== e.imp ? e.imp : [],
                page: c.page,
                iteration: c.iteration,
              });
            var l = "100%";
            void 0 !== e.width
              ? (l = e.width + "px")
              : void 0 !== c.preRenderTeaserSizes[this.iteration - 1] &&
                (l = c.preRenderTeaserSizes[this.iteration - 1].width + "px");
            var d = "100%";
            void 0 !== e.height
              ? (d = e.height + "px")
              : void 0 !== c.preRenderTeaserSizes[this.iteration - 1] &&
                (d = c.preRenderTeaserSizes[this.iteration - 1].height + "px"),
              (a =
                '<iframe id="' +
                s +
                '" scrolling="no" style="' +
                ("width: " +
                  l +
                  "; height: " +
                  d +
                  "; border: 0px; margin: auto; overflow: hidden; position: relative;z-index: 1;") +
                '"></iframe>'),
              o.push("mgline-banner"),
              c.addStyle(
                "mgline-banner",
                ".mgline-banner {  display: inline-flex;\n  background: initial;\n  }"
              ),
              void 0 === e.rs && (e.rs = !1),
              (e.iteration = c.iteration),
              (this.banners[s] = e),
              (e = ["", this.iteration]);
          }
          if (c.isArray(e)) {
            var u = c.prepareTeaserData(e);
            void 0 !== u.hash &&
              void 0 !== u.id &&
              (c.teaserHashes[u.id] = u.hash),
              o.push("teaser-" + u.id),
              "l" in u.other &&
                null != u.other.l.match(/[\?|&]u=/) &&
                o.push("dsp"),
              "type" in u.other &&
                (o.push("type-" + u.other.type),
                "v" == u.other.type && o.push("vrline"));
            var h = u.price.replace(new RegExp("[^0-9.]"), ""),
              f = u.priceold.replace(new RegExp("[^0-9.]"), ""),
              p = u.hash;
            "" !== a &&
              this.banners[s] &&
              this.banners[s].h &&
              (p = this.banners[s].h);
            var m =
              "v" !== u.other.type
                ? c.hrefAttr +
                  '="' +
                  c.prepareNiceHref(u.hash) +
                  '" data-hash="' +
                  u.hash +
                  '"'
                : "";
            void 0 === u.hash && (m = 'onclick="return false"');
            for (
              var g = [
                  [/\{\*.*?\*\}/, ""],
                  [/\{\$href\}/g, m],
                  [/\{\$pmc_item\}/, c.id],
                  [/\{\$hash\}/g, u.hash],
                  [
                    /\{\$target\}/g,
                    (void 0 !== u.other.type && "i" == u.other.type) ||
                    (void 0 !== c.servicerData.ats && c.servicerData.ats)
                      ? 'target="_top"'
                      : 'target="_blank"',
                  ],
                  [
                    /(class\=\".*?)(mgline)([^\"]*\")/,
                    "$1$2 " + o.join(" ") + '$3 data-i="' + p + '"',
                  ],
                  [/\{\$source\}/g, u.source],
                  [
                    /\{\$src\}/g,
                    'width="492" height="328" data-i="' +
                      u.id +
                      '" src="' +
                      ((r = u.other.i),
                      (r && 0 === r.indexOf("//") ? c.webProtocol + r : r) +
                        '" nopin="nopin"'),
                  ],
                  [/\{\$title\}/g, c.htmlEntities(u.title)],
                  [/\{\$desc\}/g, c.htmlEntities(u.desc)],
                  [/\{\$iteration\}/g, c.iteration],
                  [/\$iteration/g, c.iteration],
                  [/this\.iteration/g, c.iteration],
                  [/\{\$price\}/g, u.price],
                  [/\{\$priceold\}/g, u.priceold],
                  [/\{\$discount\}/g, u.discount],
                  [/\{if \$price\}/g, "{if '' != " + h + "}"],
                  [/\{if !\$price\}/g, "{if '' == " + h + "}"],
                  [/\{if \$priceold\}/g, "{if '' != " + f + "}"],
                  [
                    /\{if \$price != " "\}/g,
                    "{if " + u.price.trim().length + " != 0}",
                  ],
                  [
                    /\{if \$price == " "\}/g,
                    "{if " + u.price.trim().length + " == 0}",
                  ],
                  [/\$priceold/g, u.priceold],
                  [/\$price/g, u.price],
                  [/\{if \$rep\}/g, "{if p.isReplic}"],
                  [/\{\$banner\}/g, a],
                  [/\{if \$teaser\}/g, "{if '' == '" + a + "'}"],
                  [/\{if \$banner\}/g, "{if '' != '" + a + "'}"],
                  [/\{\$category\}/g, u.other.category || ""],
                  [/\{\$cta\}/g, void 0 !== u.other.cta ? u.other.cta : ""],
                  [
                    /\{if \$cta\}/g,
                    void 0 !== u.other.cta
                      ? "{if '' != " + u.other.cta + "}"
                      : "",
                  ],
                  [
                    /\{if !\$cta\}/g,
                    void 0 !== u.other.cta
                      ? "{if '' == " + u.other.cta + "}"
                      : "",
                  ],
                  [/\{\$sourceName\}/g, c.sourceName],
                  [
                    /\{\$vd\}/g,
                    void 0 !== u.other.vd ? c.getTimeBySeconds(u.other.vd) : "",
                  ],
                  [/\{\$vv\}/g, void 0 !== u.other.vv ? u.other.vv : ""],
                  [/\{\$vr\}/g, void 0 !== u.other.vr ? u.other.vr : ""],
                  [
                    /\{if \$vd\}/g,
                    "{if '" +
                      (void 0 !== u.other.vd ? u.other.vd : "") +
                      "' != ''}",
                  ],
                  [
                    /\{if \$vv\}/g,
                    "{if '" +
                      (void 0 !== u.other.vv ? u.other.vv : "") +
                      "' != ''}",
                  ],
                  [
                    /\{if \$vr\}/g,
                    "{if '" +
                      (void 0 !== u.other.vr ? u.other.vr : "") +
                      "' != ''}",
                  ],
                ],
                v = 0;
              v < g.length;
              v++
            )
              t = t.replace(g[v][0], g[v][1]);
            for (t = t.replace(/\r?\n/g, ""); ; ) {
              if (
                t ==
                (t = t.replace(
                  /\{if ([^\}]*?)\}(((?!\{(?:\/)?if).)*)\{\/if\}/g,
                  function (e, t, n) {
                    return c.expressionParser(t) ? n : "";
                  }
                ))
              )
                break;
            }
            if (void 0 !== u.other.i && u.other.i.match(/\.mp4/)) {
              var y = /<img class="mcimg" width="(\d+)" height="(\d+)"/.exec(t),
                w = y ? y[1] + "px;" : "100%;",
                b = y ? y[2] + "px;" : "100%;";
              (t = t.replace(
                /<img( class="mcimg"[^>]+)/,
                '<video autoplay loop muted class="mcvideo" $1'
              )),
                c.addStyle(
                  "video",
                  "video.mcvideo { border-style: solid;\n  border-color: #ffffff;\n  border-width: 0;\n  width: 100% !important;\n  height: auto !important;\n  max-width: " +
                    w +
                    "\n  max-height: " +
                    b +
                    "\n  box-sizing: border-box;\n  display: block; }"
                );
            }
            if (1 === u.other.extimg && c.preRenderImageSizes[n]) {
              var x = c.preRenderImageSizes[n].width,
                k = c.preRenderImageSizes[n].height;
              if (0 == k || 0 == x)
                t = t.replace(
                  /<img( class="mcimg")/,
                  '<img class="mcimg mg-wrong-image"'
                );
              else {
                var C = {
                    width: x + "px !important",
                    height: k + "px !important",
                    "object-fit": "cover",
                    "-o-object-fit": "cover",
                    "object-position": "top",
                    "-o-object-position": "top",
                  },
                  E = "";
                Object.keys(C).forEach(function (e) {
                  E += e + ":" + C[e] + ";";
                }),
                  (t = t.replace(
                    /<img( class="mcimg")/,
                    '<img class="mcimg" style="' + E + '"'
                  ));
              }
            }
            return this.iteration++, t;
          }
        }),
        (this.renderBanners = function (e, t) {
          for (var n in c.banners) {
            if (c.banners[n].rs != e)
              if (
                "continue" ===
                (function () {
                  if (!e) {
                    if (c.banners[n].iteration != t) return "continue";
                    c.banners[n].rs = !1;
                  }
                  if (!0 === c.banners[n].isRendered) return "continue";
                  var i = c.root.querySelector("#" + n),
                    o = c.banners[n].html,
                    r = !1;
                  if (
                    c.banners[n].clickUrl &&
                    -1 !== o.indexOf("${CLICK_PIXEL}")
                  ) {
                    var a = c.allowReturnParams;
                    (c.allowReturnParams = !0),
                      (o = o.replace(
                        /\${CLICK_PIXEL}/g,
                        c.banners[n].clickUrl +
                          c.getAntifraudQueryParameter(c.banners[n].clickUrl)
                      )),
                      (r = !0),
                      (c.allowReturnParams = a);
                  }
                  -1 !== o.indexOf("{page_url}") &&
                    (o = o.replace(/{page_url}/g, c.pageUrl)),
                    -1 !== o.indexOf("{referrer_url}") &&
                      (o = o.replace(/{referrer_url}/g, c.refererUrl));
                  var s =
                    '<!DOCTYPE html><html><body style="margin: 0;">' +
                    o +
                    "</body></html>";
                  c.banners[n].useSecureIframe
                    ? c.renderInSafeIframe(i, "banner_".concat(n), s)
                    : (i.contentWindow.document.open(),
                      i.contentWindow.document.write(s),
                      i.contentWindow.document.close()),
                    (c.banners[n].isRendered = !0),
                    r ||
                      (function (e) {
                        i.contentWindow.document.body.addEventListener(
                          "click",
                          function (t) {
                            for (var n = t.target, i = !1; n.parentElement; ) {
                              if ("A" === n.tagName) {
                                i = !0;
                                break;
                              }
                              n = n.parentElement;
                            }
                            i &&
                              (new Image().src =
                                c.banners[e].clickUrl +
                                c.getAntifraudQueryParameter(
                                  c.banners[e].clickUrl
                                ));
                          },
                          !0
                        );
                      })(n);
                })()
              )
                continue;
          }
        }),
        (c.renderLazyBanners = function (e) {
          "banner" == c.teaserData[e].type &&
            c.renderBanners(!1, c.teaserData[e].iteration);
        }),
        (c.renderInSafeIframe = function (e, t, n) {
          (e.sandbox = "allow-scripts allow-popups"),
            "srcdoc" in e
              ? (e.srcdoc = n)
              : ((e.src =
                  c.webProtocol +
                  "//cdn.steepto.com" +
                  "/widgets/framehost.html#".concat(t)),
                c.context.addEventListener(
                  "message",
                  function (i) {
                    i.origin === c.webProtocol + "//cdn.steepto.com" &&
                      i.data === "loaded #".concat(t) &&
                      e.contentWindow.postMessage(n, "*");
                  },
                  !1
                ));
        }),
        (c.sendJsTrackers = function (e) {
          if (Array.isArray(c.teaserData[e].other.jst))
            for (var t = 0; t < c.teaserData[e].other.jst.length; t++) {
              var n =
                "<script>window.onerror = function() { return true; };</script>";
              n += c.teaserData[e].other.jst[t];
              var i = c.context.document.createElement("iframe");
              (i.style.display = "none"),
                c.renderInSafeIframe(i, "".concat(e, "_").concat(t), n),
                c.root.appendChild(i);
            }
        }),
        (this.expressionMap = {
          "||": function (e) {
            for (var t in e) if (c.expressionParser(e[t])) return !0;
            return !1;
          },
          "&&": function (e) {
            for (var t in e) if (!c.expressionParser(e[t])) return !1;
            return !0;
          },
          "==": function (e) {
            return c.expressionParser(e[0]) == c.expressionParser(e[1]);
          },
          "!=": function (e) {
            return c.expressionParser(e[0]) != c.expressionParser(e[1]);
          },
          "+": function (e) {
            return c.expressionParser(e[0]) + c.expressionParser(e[1]);
          },
          "-": function (e) {
            return c.expressionParser(e[0]) - c.expressionParser(e[1]);
          },
          "*": function (e) {
            return c.expressionParser(e[0]) * c.expressionParser(e[1]);
          },
          "/": function (e) {
            return c.expressionParser(e[0]) / c.expressionParser(e[1]);
          },
          "%": function (e) {
            return c.expressionParser(e[0]) % c.expressionParser(e[1]);
          },
        }),
        (this.expressionParser = function (e) {
          for (var t in c.expressionMap)
            if (-1 !== e.indexOf(t)) return c.expressionMap[t](e.split(t));
          return (e || "").replace(/^([\'|\s]+)|([\'|\s]+)$/g, "");
        }),
        (this.generateTemplate = function (e) {
          return (
            (c.templateText = e),
            (c.templateFunc = function (e, t, n) {
              var i = /(.*)?\{foreach\}(.*)?\{\/foreach\}(.*)?/.exec(
                c.templateText
              );
              if (i) {
                for (
                  var o = void 0 !== i[1] ? i[1] : "", r = 0;
                  r < t.length;
                  r++
                )
                  o += e.renderItem(t[r], i[2], r, n);
                return (o += void 0 !== i[3] ? i[3] : "");
              }
            }),
            !0
          );
        }),
        (this.getPageCount = function () {
          var e = parseInt(0),
            t = parseInt(20);
          return e && t ? Math.min(e, t) : e || t;
        }),
        (this.init = function () {
          "object" !== ("undefined" == typeof JSON ? "undefined" : o(JSON)) &&
            (this.hidePreloadDiv(), console.log("Unsupported browser"));
          c.root.parentNode;
          if (this.root) {
            this.getCookie();
            var e = parseInt(this.cookieStorage.page),
              t = this.context.MarketGidPageOffset
                ? parseInt(this.context.MarketGidPageOffset)
                : 0;
            c.addClickHandler(
              c.clickHandlerList.hangNiceLinkListener.handler,
              c.clickHandlerList.hangNiceLinkListener.priority
            ),
              c.addEvent(c.root, "mouseup", c.eventsHangNiceLinkListener),
              c.addEvent(c.root, "contextmenu", c.eventsHangNiceLinkListener),
              c.addEvent(c.root, "touchstart", c.eventsHangNiceLinkListener);
            var n = c.getPageCount();
            if (
              (null != e && e < n && e > 0
                ? (this.page = e + 1)
                : (e > n - 1 || e < 1) && (this.page = 1 + t),
              new Date().getTime() -
                (void 0 !== this.cookieStorage.time
                  ? this.cookieStorage.time
                  : 0) >=
                6e5 && (this.page = 1 + t),
              this.page || (this.page = 1),
              (this.pageUnlim = this.page - 1),
              (this.cookieStorage.page = this.page),
              this.setCookie(),
              !this.context.document.cookie)
            ) {
              var i = new Date();
              this.page = (i.getSeconds() % n) + 1;
            }
            if (
              ((this.blocksAddress =
                c.webProtocol + "//" + this.servicerDomain + "/"),
              (c.clickTracking =
                void 0 !== c.context.MGClickTracking
                  ? c.context.MGClickTracking
                  : ""),
              (c.adBlockStatement = !1),
              c.adBlockStatement && c.setTemplate("".replace(/[\r\n]/g, "")),
              !c.generateTemplate(c.templateText))
            )
              return;
            (c.context.onClickExcludes = c.context.onClickExcludes || []),
              c.context.onClickExcludes.push(c.root),
              c.adBlockStatement
                ? c.addStyle("adBlockMain", c.adBlockStyles)
                : c.addStyle("main", c.styles),
              c.addEvent(c.root, "click", c.widgetClickHandler),
              c.addEvent(c.root, "auxclick", c.widgetClickHandler),
              c.afterPrepareCappingDataHooks.push("renderLazyBanners"),
              c.afterPrepareCappingDataHooks.push("sendJsTrackers"),
              c.processHooks("afterInitHooks");
          }
        }),
        (this.resetPage = function () {
          this.page = 1;
        }),
        (this.getMostTopWindow = function () {
          for (var e = c.context; e != e.parent; )
            try {
              e.parent.document.body;
              e = e.parent;
            } catch (e) {
              break;
            }
          return e;
        }),
        (c.getDevicePixelRatio = function () {
          var e = 1;
          return (
            void 0 !== c.context.devicePixelRatio
              ? (e = c.context.devicePixelRatio)
              : void 0 !== c.context.screen.systemXDPI &&
                void 0 !== c.context.screen.logicalXDPI &&
                c.context.screen.systemXDPI > c.context.screen.logicalXDPI &&
                (e =
                  c.context.screen.systemXDPI / c.context.screen.logicalXDPI),
            e % 1 == 0 || (e = e.toFixed(3)),
            e
          );
        }),
        (this.getCbusterParameter = function () {
          return (
            "cbuster=" +
            (this.context.MG_CacheBuster ||
              new Date().getTime() + "" + Math.floor(1e9 * Math.random() + 1))
          );
        }),
        (this.injectScript = function (e, t) {
          void 0 === c.updatePrecalcRect
            ? c.injectionScriptMethod(e, t)
            : c.updatePrecalcRect(function () {
                c.injectionScriptMethod(e, t);
              });
        }),
        (this.injectionScriptMethod = function (e, t) {
          c.adBlockStatement &&
            ((c.requestParams.limitads = "limitads=3"),
            (c.requestParams.adb = "adb=1"));
          var n = c.context.document.createElement("script");
          (n.type = "text/javascript"),
            (n.charset = "utf-8"),
            (n.referrerPolicy = "strict-origin-when-cross-origin");
          var i = e ? "fs/" : "",
            o = c.blocksAddress + i;
          if (
            ((o += "762628/" + c.page),
            t &&
              ((c.requestParams.rsh = "rsh=" + t),
              (c.requestParams.initial_composite =
                "initial_composite=" + c.id)),
            void 0 !== c.context.MGi &&
              ((c.requestParams.iso = "iso=" + c.context.MGi),
              (c.requestParams.token =
                "token=c65b7d33c75086f492ee47d1f980c1db")),
            (c.requestParams.pv = "pv=5"),
            void 0 !== c.context["ampOptions762628_" + c.uniqId])
          ) {
            try {
              JSON.parse(c.context["ampOptions762628_" + c.uniqId]);
            } catch (e) {}
            c.requestParams.src_id =
              "src_id=" +
              ("undefined" != typeof options && void 0 !== options.src_id
                ? options.src_id
                : c.sourceName);
          }
          c.requestParams.cbuster = c.getCbusterParameter();
          if (JSON.parse('["wages"]').indexOf("int_exchange") >= 0) {
            var r = c.context.document.querySelector(
              'meta[property="og:title"]'
            );
            if (c.context !== c.context.top)
              try {
                r = c.context.parent.document.querySelector(
                  'meta[property="og:title"]'
                );
              } catch (e) {}
            r &&
              (c.requestParams.ogtitle =
                "ogtitle=" + encodeURIComponent(r.getAttribute("content")));
          }
          "" != c.uniqId && (c.requestParams.uniqId = "uniqId=" + c.uniqId),
            c.getActiveChilds().length &&
              (c.requestParams.childs =
                "childs=" + c.getActiveChilds().join(",")),
            void 0 !== c.context.MG_setRequestNonPersonalizedAds &&
              1 == c.context.MG_setRequestNonPersonalizedAds &&
              (c.requestParams.npa = "npa=1"),
            0 != c.getInternalIds().length &&
              (c.requestParams.viewedInternalIds =
                "exclude_int_exchange=" + c.getInternalIds().join(","));
          var a = c.getConsentData();
          if (
            (a &&
              ((c.requestParams.consentData = "consentData=" + a.consentData),
              (c.requestParams.gdprApplies = "gdprApplies=" + a.gdprApplies)),
            c.uspEnabled)
          ) {
            var s = "";
            if ("" != c.uspString) s = c.uspString;
            else if (c.context.localStorage)
              try {
                var l = c.context.localStorage.getItem("MG_uspString");
                null != l && "" != l && (s = l);
              } catch (e) {}
            c.requestParams.uspString = "uspString=" + s;
          }
          try {
            var d =
              navigator.connection ||
              navigator.mozConnection ||
              navigator.webkitConnection;
            void 0 !== d.type &&
              ((c.networkInformationType = d.type),
              (c.requestParams.nit = "nit=" + c.networkInformationType)),
              void 0 !== d.effectiveType &&
                ((c.networkInformationEffectiveType = d.effectiveType),
                (c.requestParams.niet =
                  "niet=" + c.networkInformationEffectiveType)),
              void 0 !== d.saveData &&
                ((c.networkInformationSaveData = d.saveData ? 1 : 0),
                (c.requestParams.nisd = "nisd=" + d.saveData));
          } catch (e) {}
          -1 == o.indexOf("?") ? (o += "?") : (o += "&");
          var u = [];
          for (var h in c.requestParams) u.push(c.requestParams[h]);
          var f = c.context.self !== c.context.top,
            p = !0,
            m = !1,
            g = c.context,
            v = c.context;
          if (f)
            for (;;) {
              try {
                g.frameElement && "" != g.frameElement.src && (p = !1),
                  g.document.body;
              } catch (e) {
                (g = v), (m = !0), (p = !1);
                break;
              }
              if (g == g.parent) break;
              (v = g), (g = g.parent);
            }
          var y = "";
          try {
            c.isAmp()
              ? ((c.iframePlacementType = 3),
                (c.pageUrl =
                  void 0 !== c.context.context.sourceUrl
                    ? c.context.context.sourceUrl
                    : ""),
                (c.refererUrl =
                  void 0 !== c.context.context.referrer
                    ? c.context.context.referrer
                    : ""),
                (y = "" != c.pageUrl ? c.pageUrl : c.refererUrl))
              : ((c.pageUrl = g.document.location.href),
                (c.refererUrl = g.document.referrer || ""),
                (y = c.refererUrl),
                f &&
                  !p &&
                  (m
                    ? (c.iframePlacementType = 2)
                    : ((y = c.pageUrl), (c.iframePlacementType = 1))));
          } catch (e) {
            c.iframePlacementType = 2;
          }
          0 != c.iframePlacementType &&
            u.push("iframe=" + c.iframePlacementType),
            u.push("ref=" + encodeURIComponent(y)),
            "function" == typeof c.contextUriParse &&
              u.push("cxurl=" + encodeURIComponent(c.contextUriParse()));
          try {
            if (
              !sessionStorage.MG_Session_lastUpdate ||
              Number(sessionStorage.MG_Session_lastUpdate) + 18e5 < Date.now()
            ) {
              var w = c.refererUrl.match(/:\/\/([^\/:]+)/i);
              (sessionStorage.MG_Session_pr = w && w[1] ? w[1] : ""),
                (sessionStorage.MG_Session_lu = c.pageUrl);
            }
            (sessionStorage.MG_Session_lastUpdate = Date.now()),
              sessionStorage &&
                sessionStorage.MG_Session_pr &&
                u.push(
                  "pr=" + encodeURIComponent(sessionStorage.MG_Session_pr)
                ),
              sessionStorage &&
                sessionStorage.MG_Session_lu &&
                u.push(
                  "lu=" + encodeURIComponent(sessionStorage.MG_Session_lu)
                );
          } catch (e) {}
          var b = c.getMostTopWindow();
          void 0 === b._mgPageView505244
            ? ((b._mgPageView505244 = !0), u.push("pageView=1"))
            : u.push("pageView=0"),
            (c.pvid =
              new Date().getTime().toString(16) +
              (Math.round(1e9 * Math.random()) + 2147483648).toString(16)),
            u.push("pvid=" + c.pvid),
            c.context.isFBIA762628
              ? u.push("implVersion=14")
              : c.isAmp()
              ? u.push("implVersion=12")
              : c.isTurbo()
              ? u.push("implVersion=13")
              : "" != c.versionWidget &&
                u.push("implVersion=" + c.versionWidget),
            u.push("dpr=" + c.getDevicePixelRatio());
          try {
            if (c.context.localStorage) {
              var x = c.context.localStorage.getItem("mgMuidn");
              x && (u.push("muid=" + x), (c.muid = x));
            }
          } catch (e) {}
          (o += u.join("&")),
            (n.src = o),
            c.sspPerformance &&
              (n.onload = function () {
                c.context.performance.getEntries().map(function (e) {
                  if (e.name === o) {
                    var t = Math.ceil(e.responseEnd - e.startTime);
                    new Image(0, 0).src =
                      c.webProtocol +
                      "//c.mgid.com/widget-ssp-performance?time=" +
                      t;
                  }
                });
              }),
            c.context.document.head.appendChild(n),
            (n.onerror = function () {
              c.isAdblock = !0;
            }),
            0 === c.fakeMode && c.processHooks("afterInjectScriptHooks");
        }),
        (this.getActiveChilds = function () {
          return JSON.parse("[]");
        }),
        (this.addClickHandler = function (e, t) {
          c.clickHandlers.push({ handler: e, priority: t }),
            c.clickHandlers.sort(function (e, t) {
              return e.priority < t.priority ? -1 : 1;
            });
        }),
        (this.widgetClickHandler = function (e) {
          e || (e = c.context.event), e.target || (e.target = e.srcElement);
          var t = e.target;
          if (
            ("A" == t.tagName || null !== (t = c.getParentLink(t))) &&
            (t.hasAttribute("data-hash") || t.matches(".mg-close-action"))
          )
            for (var n = 0; n < c.clickHandlers.length; n++)
              try {
                if (!c[c.clickHandlers[n].handler](t, e)) return;
              } catch (e) {}
        }),
        (this.start = function () {
          if (c.root && 0 == c.countLoadBlocks) {
            !(function (e) {
              if (c.isAmp())
                try {
                  (c.ampConsentData = c.context.context.initialConsentValue),
                    e();
                } catch (t) {
                  e();
                }
              else e();
            })(function () {
              !(function (e) {
                if ("function" == typeof c.context.__tcfapi) {
                  c.tcfv2Enabled = !0;
                  try {
                    c.context.__tcfapi("getTCData", 2, function (e, t) {
                      t &&
                        ((c.tcfv2Data = e),
                        c.context.localStorage &&
                          c.context.localStorage.setItem(
                            "MG_tcfv2Data",
                            JSON.stringify(e)
                          ));
                    }),
                      setTimeout(function () {
                        e();
                      }, 50);
                  } catch (t) {
                    e();
                  }
                } else e();
              })(function () {
                !(function (e) {
                  if ("function" == typeof c.context.__cmp) {
                    c.cmpEnabled = !0;
                    try {
                      c.context.__cmp("getConsentData", null, function (e) {
                        (c.consentData = e),
                          c.context.localStorage &&
                            c.context.localStorage.setItem(
                              "MG_ConsentData",
                              JSON.stringify(e)
                            );
                      }),
                        setTimeout(function () {
                          e();
                        }, 50);
                    } catch (t) {
                      e();
                    }
                  } else e();
                })(function () {
                  !(function (e) {
                    if ("function" == typeof c.context.__uspapi) {
                      c.uspEnabled = !0;
                      try {
                        c.context.__uspapi("getUSPData", 1, function (e, t) {
                          t &&
                            ((c.uspString = e.uspString || ""),
                            c.context.localStorage &&
                              "" != c.uspString &&
                              c.context.localStorage.setItem(
                                "MG_uspString",
                                c.uspString
                              ));
                        }),
                          setTimeout(function () {
                            e();
                          }, 50);
                      } catch (t) {
                        e();
                      }
                    } else e();
                  })(function () {
                    c.injectScript();
                  });
                });
              });
            });
          }
        }),
        (this.addEvent = function (e, t, n) {
          e.addEventListener
            ? ("touchstart" !== t && "touchmove" !== t) ||
              !c.isPassiveSupported()
              ? e.addEventListener(t, n, !1)
              : e.addEventListener(t, n, { passive: !0 })
            : e.attachEvent("on" + t, n);
        }),
        (this.removeEvent = function (e, t, n) {
          e.removeEventListener
            ? e.removeEventListener(t, n, !1)
            : e.detachEvent("on" + t, n);
        }),
        (this.getMainCssSelector = function () {
          return "#" + (this.realRoot ? this.realRoot.id : this.root.id);
        }),
        (this.doubleClickHandler = function (e, t) {
          t = parseInt(0 | t);
          var n = [],
            i = new Image(0, 0),
            o = e.getAttribute("data-hash");
          n.push("url=" + encodeURIComponent(e)),
            n.push("uuid=" + c.servicerData.rid),
            n.push("hash=" + o),
            n.push("cid=762628"),
            n.push("gb_uid=57105166"),
            n.push("h2=" + c.servicerData.h2),
            n.push("type=" + c.doubleClickType),
            n.push("checkId=" + c.doubleClickCheckId),
            t && n.push("isOut=" + t),
            (i.src = c.webProtocol + "//c.mgid.com/doubleclick?" + n.join("&"));
        }),
        (this.adBlockDetect = function () {
          var e = 0,
            t = 1,
            n = function (e) {
              return !e.offsetHeight;
            };
          return (function (e) {
            var t,
              i,
              o,
              r,
              a = e.length;
            for (t = 0; t < a; t++) {
              (o = e[t]),
                (r = void 0),
                ((r = c.context.document.createElement("div")).className = o),
                (r.style.visibility = "hidden"),
                (r.style.position = "absolute"),
                (r.innerHTML = "."),
                (r.style.padding = "1px"),
                c.context.document.body.appendChild(r);
              var s = n((i = r));
              if ((c.context.document.body.removeChild(i), s)) return !0;
            }
            return !1;
          })(["banner_ad", "sponsored_ad"])
            ? t
            : e;
        }),
        (this.getConsentData = function () {
          if (c.cmpEnabled || c.tcfv2Enabled || c.isAmp()) {
            var e = { consentData: "", gdprApplies: !1 };
            if (c.isAmp() && 1 === c.context.context.initialConsentState)
              e = {
                consentData: c.ampConsentData,
                gdprApplies: c.context.context.initialConsentState,
              };
            else if (
              "" !== c.tcfv2Data &&
              void 0 !== c.tcfv2Data.gdprApplies &&
              void 0 !== c.tcfv2Data.tcString
            )
              e = {
                consentData: c.tcfv2Data.tcString,
                gdprApplies: c.tcfv2Data.gdprApplies,
              };
            else if (
              "" !== c.consentData &&
              void 0 !== c.consentData.gdprApplies &&
              void 0 !== c.consentData.consentData
            )
              e = c.consentData;
            else if (c.context.localStorage) {
              try {
                var t = JSON.parse(
                  c.context.localStorage.getItem("MG_ConsentData")
                );
                null != t &&
                  void 0 !== t.gdprApplies &&
                  void 0 !== t.consentData &&
                  (e = t);
              } catch (e) {}
              try {
                var n = JSON.parse(
                  c.context.localStorage.getItem("MG_tcfv2Data")
                );
                null != n &&
                  void 0 !== n.gdprApplies &&
                  void 0 !== n.tcString &&
                  (e = { consentData: n.tcString, gdprApplies: n.gdprApplies });
              } catch (e) {}
            }
            return e;
          }
          return null;
        });
    };
  },
  function (e, t, n) {
    (window["mgCanLoad".concat(762628)] = !1),
      (window["mgFallback".concat(762628)] = !1),
      (window["mgShortWidget".concat(762628)] = !1),
      (window["mgUseConvertedCode".concat(762628)] = !1),
      document.getElementById("MG_ID")
        ? ((window["rootId".concat(762628)] = document.getElementById(
            "MG_ID"
          ).innerHTML),
          (window[
            "mgRootId".concat(762628)
          ] = parent.window.document.getElementById(
            "MarketGidScriptRootC" + window["rootId".concat(762628)]
          )
            ? "MarketGidScriptRootC" + window["rootId".concat(762628)]
            : "M505244ScriptRootC" + window["rootId".concat(762628)]),
          parent.window.document.getElementById(
            window["mgRootId".concat(762628)]
          ) && (window["mgCanLoad".concat(762628)] = !0))
        : ((window["mgRootId".concat(762628)] =
            document.getElementById("MarketGidScriptRootC762628") ||
            document.getElementById("MarketGidScriptRootC762628")
              ? "MarketGidScriptRootC762628"
              : (document.getElementById("M505244ScriptRootC762628"),
                "M505244ScriptRootC762628")),
          document.getElementById(window["mgRootId".concat(762628)]) &&
            ((window["mgCanLoad".concat(762628)] = !0),
            (window["mgFallback".concat(762628)] = !0),
            (window["mgShortWidget".concat(762628)] = !0))),
      (document.getElementById("MarketGidComposite762628") ||
        document.getElementById("M505244Composite762628")) &&
        ((window["mgCanLoad".concat(762628)] = !0),
        (window["mgFallback".concat(762628)] = !0));
    var i =
      void 0 !== window.uniqId
        ? window.uniqId
        : ("00000" + Math.round(1e5 * Math.random()).toString(16)).slice(-5);
    if (
      (window["mgCanLoad".concat(762628)] ||
        (document.getElementById("MG_ID")
          ? ((window["rootId".concat(762628)] = document.getElementById(
              "MG_ID"
            ).innerHTML),
            (window[
              "mgRootId".concat(762628)
            ] = parent.window.document.getElementById(
              "MarketGidScriptRootG" + window["rootId".concat(762628)]
            )
              ? "MarketGidScriptRootG" + window["rootId".concat(762628)]
              : "M505244ScriptRootG" + window["rootId".concat(762628)]),
            parent.window.document.getElementById(
              window["mgRootId".concat(762628)]
            ) && (window["mgCanLoad".concat(762628)] = !0))
          : ((window["mgRootId".concat(762628)] = document.getElementById(
              "MarketGidScriptRootG23303"
            )
              ? "MarketGidScriptRootG23303"
              : "M505244ScriptRootG23303"),
            document.getElementById(window["mgRootId".concat(762628)]) &&
              ((window["mgCanLoad".concat(762628)] = !0),
              (window["mgFallback".concat(762628)] = !0),
              (window["mgShortWidget".concat(762628)] = !0))),
        (document.getElementById("MarketGid0") ||
          document.getElementById("M505244Widget0")) &&
          ((window["mgCanLoad".concat(762628)] = !0),
          (window["mgFallback".concat(762628)] = !0)),
        (window["mgUseConvertedCode".concat(762628)] = !0)),
      window["mgCanLoad".concat(762628)])
    ) {
      if (window["mgUseConvertedCode".concat(762628)])
        if (window["mgFallback".concat(762628)])
          if (window["mgShortWidget".concat(762628)])
            (window["div".concat(762628)] = document.createElement("div")),
              (window["div".concat(762628)].id = "MarketGid0"),
              document
                .getElementById(window["mgRootId".concat(762628)])
                .appendChild(window["div".concat(762628)]),
              (window.MarketGidInfC762628 = new window.MarketGidBaseBlockC762628(
                window["div".concat(762628)].id,
                window,
                !1,
                23303,
                i,
                11
              ));
          else {
            window["mgRootId".concat(762628)] = document.getElementById(
              "MarketGid0"
            )
              ? "MarketGid0"
              : "M505244Widget0";
            var o = document.getElementById("MarketGid0") ? "1" : "2";
            (document.getElementById(
              window["mgRootId".concat(762628)]
            ).innerHTML = ""),
              (window.MarketGidInfC762628 = new window.MarketGidBaseBlockC762628(
                window["mgRootId".concat(762628)],
                window,
                !0,
                0,
                i,
                o
              ));
          }
        else {
          (window["rootId".concat(762628)] = document.getElementById(
            "MG_ID"
          ).innerHTML),
            (window[
              "div".concat(762628)
            ] = parent.window.document.createElement("div")),
            (window["div".concat(762628)].id = "MarketGid0"),
            (window[
              "mgRootId".concat(762628)
            ] = parent.window.document.getElementById(
              "MarketGidScriptRootG" + window["rootId".concat(762628)]
            )
              ? "MarketGidScriptRootG" + window["rootId".concat(762628)]
              : "M505244ScriptRootG" + window["rootId".concat(762628)]);
          var r = parent.window.document.getElementById(
            "MarketGidScriptRootG" + window["rootId".concat(762628)]
          )
            ? 6
            : 8;
          parent.window.document
            .getElementById(window["mgRootId".concat(762628)])
            .appendChild(window["div".concat(762628)]),
            (window.MarketGidInfC762628 = new window.MarketGidBaseBlockC762628(
              window["div".concat(762628)].id,
              parent.window,
              !1,
              window["rootId".concat(762628)],
              i,
              r
            ));
        }
      else if (window["mgFallback".concat(762628)])
        if (window["mgShortWidget".concat(762628)]) {
          var a = "" != i ? "_" + i : "",
            s =
              (document.getElementById("M505244ScriptRootC762628") ||
                document.getElementById("M505244ScriptRootC762628") ||
                document.getElementById("MarketGidScriptRootC762628"),
              762628);
          (window.document.getElementById("MarketGidComposite" + s) &&
            window.document.getElementById("M505244Composite" + s)) ||
            ((window["div".concat(762628)] = window.document.createElement(
              "div"
            )),
            (window["div".concat(762628)].id = "MarketGidComposite" + s + a),
            (window["rootDiv".concat(762628)] = window.document.getElementById(
              "MarketGidScriptRootC" + s
            )
              ? "MarketGidScriptRootC" + s
              : "M505244ScriptRootC" + s),
            window.document
              .getElementById(window["rootDiv".concat(762628)])
              .appendChild(window["div".concat(762628)]),
            (window.document.getElementById(
              window["rootDiv".concat(762628)]
            ).id = window["rootDiv".concat(762628)] + a)),
            (window[
              "mgPreloadId".concat(762628)
            ] = window.document.getElementById("MarketGidPreloadC" + s)
              ? "MarketGidPreloadC" + s
              : "M505244PreloadC" + s),
            window.document.getElementById(
              window["mgPreloadId".concat(762628)]
            ) &&
              (window.document.getElementById(
                window["mgPreloadId".concat(762628)]
              ).id = window["mgPreloadId".concat(762628)] + a),
            (window["mgRootId".concat(762628)] = document.getElementById(
              "MarketGidComposite" + s + a
            )
              ? "MarketGidComposite" + s + a
              : "M505244Composite" + s + a),
            (window.MarketGidInfC762628 = new window.MarketGidBaseBlockC762628(
              window["mgRootId".concat(762628)],
              window,
              !1,
              s + a,
              i,
              11
            ));
        } else {
          window["mgRootId".concat(762628)] = document.getElementById(
            "MarketGidComposite762628"
          )
            ? "MarketGidComposite762628"
            : "M505244Composite762628";
          var c = document.getElementById("MarketGidComposite762628")
            ? "3"
            : "4";
          (document.getElementById(
            window["mgRootId".concat(762628)]
          ).innerHTML = ""),
            (window.MarketGidInfC762628 = new window.MarketGidBaseBlockC762628(
              window["mgRootId".concat(762628)],
              window,
              !1,
              0,
              i,
              c
            ));
        }
      else {
        var l = "_" + i;
        (window["rootId".concat(762628)] = document.getElementById(
          "MG_ID"
        ).innerHTML),
          (window["div".concat(762628)] = parent.window.document.createElement(
            "div"
          )),
          (window["div".concat(762628)].id = "MarketGidComposite762628" + l),
          (window[
            "mgRootId".concat(762628)
          ] = parent.window.document.getElementById(
            "MarketGidScriptRootC" + window["rootId".concat(762628)]
          )
            ? "MarketGidScriptRootC" + window["rootId".concat(762628)]
            : "M505244ScriptRootC" + window["rootId".concat(762628)]);
        var d = parent.window.document.getElementById(
          "MarketGidScriptRootC" + window["rootId".concat(762628)]
        )
          ? "9"
          : "10";
        (parent.window.document.getElementById(
          window["mgRootId".concat(762628)]
        ).id = window["mgRootId".concat(762628)] + l),
          (window[
            "mgPreloadId".concat(762628)
          ] = parent.window.document.getElementById(
            "MarketGidPreloadC" + window["rootId".concat(762628)]
          )
            ? "MarketGidPreloadC" + window["rootId".concat(762628)]
            : "M505244PreloadC" + window["rootId".concat(762628)]),
          parent.window.document.getElementById(
            window["mgPreloadId".concat(762628)]
          ) &&
            (parent.window.document.getElementById(
              window["mgPreloadId".concat(762628)]
            ).id = window["mgPreloadId".concat(762628)] + l),
          (window["mgRootId".concat(762628)] =
            window["mgRootId".concat(762628)] + l),
          parent.window.document
            .getElementById(window["mgRootId".concat(762628)])
            .appendChild(window["div".concat(762628)]),
          (window.MarketGidInfC762628 = new window.MarketGidBaseBlockC762628(
            window["div".concat(762628)].id,
            parent.window,
            !1,
            window["rootId".concat(762628)] + l,
            i,
            d
          ));
      }
      n(4),
        window[
          "".concat("MarketGid").concat("C", "ContextBlock").concat(762628)
        ].call(window.MarketGidInfC762628, window.MarketGidInfC762628),
        (window.MarketGidInfC762628.funcBlocks.Context = ""
          .concat("MarketGid")
          .concat("C", "ContextBlock")
          .concat(762628)),
        n(5),
        window[
          "".concat("MarketGid").concat("C", "MainBlock").concat(762628)
        ].call(window.MarketGidInfC762628, window.MarketGidInfC762628),
        (window.MarketGidInfC762628.funcBlocks.Main = ""
          .concat("MarketGid")
          .concat("C", "MainBlock")
          .concat(762628)),
        n(6),
        window[
          "".concat("MarketGid").concat("C", "SubnetsBlock").concat(762628)
        ].call(window.MarketGidInfC762628, window.MarketGidInfC762628),
        (window.MarketGidInfC762628.funcBlocks.Subnets = ""
          .concat("MarketGid")
          .concat("C", "SubnetsBlock")
          .concat(762628)),
        n(7),
        window[
          "".concat("MarketGid").concat("C", "AdvertLinkBlock").concat(762628)
        ].call(window.MarketGidInfC762628, window.MarketGidInfC762628),
        (window.MarketGidInfC762628.funcBlocks.AdvertLink = ""
          .concat("MarketGid")
          .concat("C", "AdvertLinkBlock")
          .concat(762628)),
        n(8).call(window.MarketGidInfC762628, window.MarketGidInfC762628),
        n(9),
        window[
          ""
            .concat("MarketGid")
            .concat("C", "InternalExchangeBlock")
            .concat(762628)
        ].call(window.MarketGidInfC762628, window.MarketGidInfC762628),
        (window.MarketGidInfC762628.funcBlocks.InternalExchange = ""
          .concat("MarketGid")
          .concat("C", "InternalExchangeBlock")
          .concat(762628)),
        n(10),
        window[
          "".concat("MarketGid").concat("C", "ColorBlock").concat(762628)
        ].call(window.MarketGidInfC762628, window.MarketGidInfC762628),
        (window.MarketGidInfC762628.funcBlocks.Color = ""
          .concat("MarketGid")
          .concat("C", "ColorBlock")
          .concat(762628)),
        n(11),
        window[
          "".concat("MarketGid").concat("C", "UtilsBlock").concat(762628)
        ].call(window.MarketGidInfC762628, window.MarketGidInfC762628),
        (window.MarketGidInfC762628.funcBlocks.Utils = ""
          .concat("MarketGid")
          .concat("C", "UtilsBlock")
          .concat(762628)),
        n(12),
        window[
          "".concat("MarketGid").concat("C", "MonitorBlock").concat(762628)
        ].call(window.MarketGidInfC762628, window.MarketGidInfC762628),
        (window.MarketGidInfC762628.funcBlocks.Monitor = ""
          .concat("MarketGid")
          .concat("C", "MonitorBlock")
          .concat(762628)),
        n(14),
        window[
          "".concat("MarketGid").concat("C", "RejectBlock").concat(762628)
        ].call(window.MarketGidInfC762628, window.MarketGidInfC762628),
        (window.MarketGidInfC762628.funcBlocks.Reject = ""
          .concat("MarketGid")
          .concat("C", "RejectBlock")
          .concat(762628)),
        n(15),
        window[
          "".concat("MarketGid").concat("C", "CriteoBlock").concat(762628)
        ].call(window.MarketGidInfC762628, window.MarketGidInfC762628),
        (window.MarketGidInfC762628.funcBlocks.Criteo = ""
          .concat("MarketGid")
          .concat("C", "CriteoBlock")
          .concat(762628)),
        n(16),
        window[
          "".concat("MarketGid").concat("C", "AmpRenderBlock").concat(762628)
        ].call(window.MarketGidInfC762628, window.MarketGidInfC762628),
        (window.MarketGidInfC762628.funcBlocks.AmpRender = ""
          .concat("MarketGid")
          .concat("C", "AmpRenderBlock")
          .concat(762628)),
        n(17),
        window[
          ""
            .concat("MarketGid")
            .concat("C", "InternalExchangeLoggerBlock")
            .concat(762628)
        ].call(window.MarketGidInfC762628, window.MarketGidInfC762628),
        (window.MarketGidInfC762628.funcBlocks.InternalExchangeLogger = ""
          .concat("MarketGid")
          .concat("C", "InternalExchangeLoggerBlock")
          .concat(762628)),
        n(18),
        window[
          "".concat("MarketGid").concat("C", "MgqBlock").concat(762628)
        ].call(window.MarketGidInfC762628, window.MarketGidInfC762628),
        (window.MarketGidInfC762628.funcBlocks.Mgq = ""
          .concat("MarketGid")
          .concat("C", "MgqBlock")
          .concat(762628)),
        n(19),
        window[
          "".concat("MarketGid").concat("C", "StylesheetsBlock").concat(762628)
        ].call(window.MarketGidInfC762628, window.MarketGidInfC762628),
        (window.MarketGidInfC762628.funcBlocks.Stylesheets = ""
          .concat("MarketGid")
          .concat("C", "StylesheetsBlock")
          .concat(762628)),
        n(20),
        window[
          "".concat("MarketGid").concat("C", "CookieBlock").concat(762628)
        ].call(window.MarketGidInfC762628, window.MarketGidInfC762628),
        (window.MarketGidInfC762628.funcBlocks.Cookie = ""
          .concat("MarketGid")
          .concat("C", "CookieBlock")
          .concat(762628)),
        n(21),
        window[
          "".concat("MarketGid").concat("C", "ObserverBlock").concat(762628)
        ].call(window.MarketGidInfC762628, window.MarketGidInfC762628),
        (window.MarketGidInfC762628.funcBlocks.Observer = ""
          .concat("MarketGid")
          .concat("C", "ObserverBlock")
          .concat(762628)),
        n(22),
        window[
          ""
            .concat("MarketGid")
            .concat("C", "SspDoubleClickBlock")
            .concat(762628)
        ].call(window.MarketGidInfC762628, window.MarketGidInfC762628),
        (window.MarketGidInfC762628.funcBlocks.SspDoubleClick = ""
          .concat("MarketGid")
          .concat("C", "SspDoubleClickBlock")
          .concat(762628)),
        n(23),
        window[
          ""
            .concat("MarketGid")
            .concat("C", "SendDimensionsBlock")
            .concat(762628)
        ].call(window.MarketGidInfC762628, window.MarketGidInfC762628),
        (window.MarketGidInfC762628.funcBlocks.SendDimensions = ""
          .concat("MarketGid")
          .concat("C", "SendDimensionsBlock")
          .concat(762628)),
        n(24),
        window[
          "".concat("MarketGid").concat("C", "AntifraudBlock").concat(762628)
        ].call(window.MarketGidInfC762628, window.MarketGidInfC762628),
        (window.MarketGidInfC762628.funcBlocks.Antifraud = ""
          .concat("MarketGid")
          .concat("C", "AntifraudBlock")
          .concat(762628)),
        n(26),
        window[
          ""
            .concat("MarketGid")
            .concat("C", "AntifraudStatisticsBlock")
            .concat(762628)
        ].call(window.MarketGidInfC762628, window.MarketGidInfC762628),
        (window.MarketGidInfC762628.funcBlocks.AntifraudStatistics = ""
          .concat("MarketGid")
          .concat("C", "AntifraudStatisticsBlock")
          .concat(762628)),
        n(28),
        window[
          "".concat("MarketGid").concat("C", "RtbBlock").concat(762628)
        ].call(window.MarketGidInfC762628, window.MarketGidInfC762628),
        (window.MarketGidInfC762628.funcBlocks.Rtb = ""
          .concat("MarketGid")
          .concat("C", "RtbBlock")
          .concat(762628)),
        n(29),
        window[
          ""
            .concat("MarketGid")
            .concat("C", "ActivateDelayBlock")
            .concat(762628)
        ].call(window.MarketGidInfC762628, window.MarketGidInfC762628),
        (window.MarketGidInfC762628.funcBlocks.ActivateDelay = ""
          .concat("MarketGid")
          .concat("C", "ActivateDelayBlock")
          .concat(762628)),
        n(30),
        window[
          ""
            .concat("MarketGid")
            .concat("C", "IframeSizeChangerBlock")
            .concat(762628)
        ].call(window.MarketGidInfC762628, window.MarketGidInfC762628),
        (window.MarketGidInfC762628.funcBlocks.IframeSizeChanger = ""
          .concat("MarketGid")
          .concat("C", "IframeSizeChangerBlock")
          .concat(762628)),
        "wages".length > 0 &&
          (n(31),
          window[
            ""
              .concat("MarketGid")
              .concat("C", "AccidentalClicksBlock")
              .concat(762628)
          ].call(window.MarketGidInfC762628, window.MarketGidInfC762628),
          (window.MarketGidInfC762628.funcBlocks.AccidentalClicks = ""
            .concat("MarketGid")
            .concat("C", "AccidentalClicksBlock")
            .concat(762628))),
        n(32),
        window[
          ""
            .concat("MarketGid")
            .concat("C", "ExternalCountersBlock")
            .concat(762628)
        ].call(window.MarketGidInfC762628, window.MarketGidInfC762628),
        (window.MarketGidInfC762628.funcBlocks.ExternalCounters = ""
          .concat("MarketGid")
          .concat("C", "ExternalCountersBlock")
          .concat(762628)),
        n(33),
        window[
          "".concat("MarketGid").concat("C", "YandexTurboBlock").concat(762628)
        ].call(window.MarketGidInfC762628, window.MarketGidInfC762628),
        (window.MarketGidInfC762628.funcBlocks.YandexTurbo = ""
          .concat("MarketGid")
          .concat("C", "YandexTurboBlock")
          .concat(762628)),
        n(34),
        window[
          ""
            .concat("MarketGid")
            .concat("C", "ContentPreviewBlock")
            .concat(762628)
        ].call(window.MarketGidInfC762628, window.MarketGidInfC762628),
        (window.MarketGidInfC762628.funcBlocks.ContentPreview = ""
          .concat("MarketGid")
          .concat("C", "ContentPreviewBlock")
          .concat(762628)),
        n(35),
        window[
          "".concat("MarketGid").concat("C", "CountersBlock").concat(762628)
        ].call(window.MarketGidInfC762628, window.MarketGidInfC762628),
        (window.MarketGidInfC762628.funcBlocks.Counters = ""
          .concat("MarketGid")
          .concat("C", "CountersBlock")
          .concat(762628)),
        (window.constructorData762628 = JSON.parse(
          '{"cols":"1","font":"roboto","kind":"wages","rows":"1","type":"sidebar-widget","media":{"opacity":80,"duration":1,"minWidth":250,"position":"bottom","minHeight":150,"videoOverlay":1},"mgbox":{"styles":{"maxWidth":1220}},"theme":"#2b397b","width":0,"button":1,"mcdesc":{"styles":{"font":"opensans","color":"#666666","display":"none","fontSize":12,"fontStyle":"normal","textAlign":"center","fontWeight":"normal","textDecoration":"none"}},"mgline":{"styles":{"borderColor":"#ffffff","borderStyle":"solid","borderWidth":0}},"imgType":"super","mcimage":{"size":200,"styles":{"padding":0,"borderColor":"#ffffff","borderStyle":"solid","borderWidth":0},"size-width":492,"size-height":328},"mcprice":{"show":"false","styles":{"font":"opensans","color":"#2a3a7b","fontSize":14,"fontStyle":"normal","textAlign":"left","fontWeight":"bold","textDecoration":"none"}},"mctable":{"styles":{"borderColor":"","borderWidth":0,"backgroundColor":""}},"mctitle":{"styles":{"color":"#868585","fontSize":"18","fontStyle":"normal","textAlign":"left","fontWeight":"bold","textDecoration":"none"}},"subType":"sidebar-widget-cards","mcdomain":{"styles":{"font":"roboto","color":"#868585","display":"block","fontSize":"13","fontStyle":"normal","textAlign":"left","fontWeight":"normal","textDecoration":"none"}},"isToaster":1,"colsMobile":1,"isDragDown":1,"imageFormat":19,"imageShadow":"","textPosition":"bottom","autoplacement":"off","formatChanged":true,"isInterstitial":0,"popupFrequency":15,"is_int_exchange":"0","imageScaleOnHover":"","interstitialAfter":3,"sidebarWidthCorrect":0,"widgetTitleSettings":{"styles":{"font":"roboto","color":"#2b397b","fontSize":14,"text-transform":"uppercase"}},"frequencyCappingShow":3,"frequencyCappingTime":2,"sidebarScrollPercent":"0","widgetTypeDescription":1}'
        )),
        (("in-article" === window.constructorData762628.type &&
          "off" !==
            (window.constructorData762628.autoplacement
              ? window.constructorData762628.autoplacement
              : "off")) ||
          ("in-article" === window.constructorData762628.type &&
            window.constructorData762628.autoplacement &&
            window.constructorData762628.autoplacement,
          0)) &&
          (n(36),
          window[
            ""
              .concat("MarketGid")
              .concat("C", "InArticleWidgetBlock")
              .concat(762628)
          ].call(window.MarketGidInfC762628, window.MarketGidInfC762628),
          (window.MarketGidInfC762628.funcBlocks.InArticleWidget = ""
            .concat("MarketGid")
            .concat("C", "InArticleWidgetBlock")
            .concat(762628)));
      -1 !==
        ["header-widget-carousel", "in-article-carousel"].indexOf(
          "sidebar-widget-cards"
        ) &&
        (n(38),
        window[
          ""
            .concat("MarketGid")
            .concat("C", "CarouselWidgetBlock")
            .concat(762628)
        ].call(window.MarketGidInfC762628, window.MarketGidInfC762628),
        (window.MarketGidInfC762628.funcBlocks.CarouselWidget = ""
          .concat("MarketGid")
          .concat("C", "CarouselWidgetBlock")
          .concat(762628))),
        n(40),
        window[
          "".concat("MarketGid").concat("C", "GradientBlock").concat(762628)
        ].call(window.MarketGidInfC762628, window.MarketGidInfC762628),
        (window.MarketGidInfC762628.funcBlocks.Gradient = ""
          .concat("MarketGid")
          .concat("C", "GradientBlock")
          .concat(762628)),
        n(41),
        window[
          "".concat("MarketGid").concat("C", "ResponsiveBlock").concat(762628)
        ].call(window.MarketGidInfC762628, window.MarketGidInfC762628),
        (window.MarketGidInfC762628.funcBlocks.Responsive = ""
          .concat("MarketGid")
          .concat("C", "ResponsiveBlock")
          .concat(762628));
      var u = !0,
        h = "mg_loaded_".concat(505244, "_").concat(762628);
      window[h],
        0,
        u &&
          (window.MarketGidInfC762628.init(),
          void 0 ===
            window.MarketGidInfC762628.context[
              "".concat("MarketGid").concat("C").concat(762628, "DisableStart")
            ] && ((window[h] = !0), window.MarketGidInfC762628.start()));
    }
  },
  function (e, t) {
    function n(e, t) {
      var n;
      if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
        if (
          Array.isArray(e) ||
          (n = (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return i(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return i(e, t);
          })(e)) ||
          (t && e && "number" == typeof e.length)
        ) {
          n && (e = n);
          var o = 0,
            r = function () {};
          return {
            s: r,
            n: function () {
              return o >= e.length ? { done: !0 } : { done: !1, value: e[o++] };
            },
            e: function (e) {
              throw e;
            },
            f: r,
          };
        }
        throw new TypeError(
          "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      var a,
        s = !0,
        c = !1;
      return {
        s: function () {
          n = e[Symbol.iterator]();
        },
        n: function () {
          var e = n.next();
          return (s = e.done), e;
        },
        e: function (e) {
          (c = !0), (a = e);
        },
        f: function () {
          try {
            s || null == n.return || n.return();
          } finally {
            if (c) throw a;
          }
        },
      };
    }
    function i(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
      return i;
    }
    window.MarketGidCContextBlock762628 = function (e) {
      var t,
        i = function (e) {
          var t = document.createElement("A");
          t.href = e;
          var i,
            o = [],
            r = n(t.search.replace(/^\?/, "").split("&"));
          try {
            for (r.s(); !(i = r.n()).done; ) {
              var a = i.value;
              if ("" !== a) {
                var s = a.split("=");
                o.push({ key: s[0], value: void 0 !== s[1] ? s[1] : "" });
              }
            }
          } catch (e) {
            r.e(e);
          } finally {
            r.f();
          }
          return {
            protocol: t.protocol,
            host: t.host,
            pathname: t.pathname,
            search: t.search,
            hash: t.hash,
            parsedParams: o,
          };
        };
      (e.stripAmpParts = function (e) {
        var t = e,
          o = i(e);
        if (
          o.host.indexOf("cdn.ampproject.org") > 0 &&
          o.host.indexOf("cdn.ampproject.org") ===
            o.host.length - "cdn.ampproject.org".length
        ) {
          var r = o.pathname.split("/");
          if (
            void 0 === r[1] ||
            ("c" !== r[1] && "v" !== r[1] && "wp" !== r[1])
          )
            (void 0 !== r[1] && "" !== r[1]) ||
              (t = t.replace(".cdn.ampproject.org", "").replace("-", "."));
          else {
            var a = !1;
            void 0 !== r[2] && "s" === r[2] && (a = !0),
              (t = (a ? "https" : "http") + "://");
            var s,
              c = 0,
              l = n(r);
            try {
              for (l.s(); !(s = l.n()).done; ) {
                var d = s.value;
                "" !== d &&
                  "c" !== d &&
                  "v" !== d &&
                  "wp" !== d &&
                  "s" !== d &&
                  (t += (0 != c++ ? "/" : "") + d);
              }
            } catch (e) {
              l.e(e);
            } finally {
              l.f();
            }
            t += o.search + o.hash;
          }
        }
        return t;
      }),
        (e.contextUriSanitize = function (t) {
          if (t) {
            t = e.stripAmpParts(t);
            var n = i(t);
            e.context._mgCanonicalUri =
              (o = n).protocol + "//" + o.host + o.pathname + o.search + o.hash;
          }
          var o;
          return e.context._mgCanonicalUri;
        }),
        (e.contextUriParse = function () {
          if (void 0 === e.context._mgCanonicalUri) {
            e.context._mgCanonicalUri = "";
            try {
              var n = (function () {
                  if (void 0 === t)
                    try {
                      for (
                        var n = e.context;
                        n.document && ((t = n), n != n.top);
                        n = n.parent
                      );
                    } catch (e) {}
                  return t;
                })(),
                i = "",
                o = n.document.querySelector('meta[property="og:url"]');
              if (o && o.getAttribute("content")) i = o.getAttribute("content");
              else {
                var r = n.document.querySelector("link[rel='canonical']");
                r && r.getAttribute("href") && (i = r.getAttribute("href"));
              }
              if ("" === i) {
                switch (e.iframePlacementType) {
                  case 0:
                  case 1:
                    i = e.pageUrl;
                    break;
                  case 2:
                    i = e.refererUrl;
                    break;
                  case 3:
                    try {
                      i = e.context.context.canonicalUrl;
                    } catch (e) {}
                    i || (i = "" !== e.pageUrl ? e.pageUrl : e.refererUrl);
                }
                e.contextUriSanitize(i);
              } else e.context._mgCanonicalUri = i;
            } catch (e) {}
          }
          return e.context._mgCanonicalUri;
        });
    };
  },
  function (e, t, n) {
    window.MarketGidCMainBlock762628 = function (e) {
      e.afterPrepareCappingDataHooks.push("setCappingRealShowTime"),
        e.observerWidgetHooks.push("setWidgetRealShowTime"),
        e.afterLoadNewsHooks.push("fixWrongExternalImages"),
        (e.cappingRealShowTime = 0),
        (e.widgetRealShowTime = 0),
        e.addEvent(e.root, "mousemove", function (t) {
          (e.root.mouseX = t.pageX - e.root.offsetLeft),
            (e.root.mouseY = t.pageY - e.root.offsetTop);
        }),
        (e.prepareHref = function (t, n, i) {
          var o = "",
            r = e.teaserData[t];
          if (
            i &&
            void 0 !== e.context._mgExternalLinkChanger &&
            1 === e.context._mgExternalLinkChanger
          ) {
            o = i.protocol + "//" + i.hostname + i.pathname;
            var a = i.search;
            if ("" != a)
              for (
                var s = (a = a.replace("?", "")).split("&"), c = 0;
                c < s.length;
                c++
              ) {
                var l = s[c].split("=");
                "k" != l[0] &&
                  "dc" != l[0] &&
                  (o += (0 == c ? "?" : "&") + s[c]);
              }
          } else
            (o = e.clickTracking + e.webProtocol),
              r
                ? r.link &&
                  (o = /^http[s]?:/.test(r.link)
                    ? e.clickTracking + r.link
                    : "i" == r.coopType
                    ? e.clickTracking + e.intExchangeProtocol + r.link
                    : e.clickTracking + e.webProtocol + r.link)
                : (o = "#");
          var d = "";
          void 0 !== e.clickableDelay &&
            e.clickableDelay &&
            "function" == typeof e.isWagesLink &&
            e.isWagesLink(i) &&
            (d = "dc=1");
          var u = e.getQueryParameterByName("dc");
          if (
            (u && (d = "dc=" + parseInt(u)),
            "" !== e.getClickZone() &&
              "" == d &&
              (d = "dc=" + e.getClickZone()),
            "" !== d && (o += (o.indexOf("?") >= 0 ? "&" : "?") + d),
            void 0 !== e.transitParamsInit)
          ) {
            var h = e.getQueryParameterByName("extclckid");
            h &&
              !1 === /[\&\?]extclckid\=/.test(o) &&
              (o += (o.indexOf("?") >= 0 ? "&" : "?") + "extclckid=" + h);
          }
          if (
            ("function" == typeof e.getAntifraudParams &&
              r &&
              "i" != r.coopType &&
              (o += e.getAntifraudQueryParameter(o, n, i)),
            e.cappingRealShowTime &&
              !1 === /[\&\?]crst\=/.test(o) &&
              (o +=
                (o.indexOf("?") >= 0 ? "&" : "?") +
                "crst=" +
                e.cappingRealShowTime),
            e.widgetRealShowTime &&
              !1 === /[\&\?]wrst\=/.test(o) &&
              (o +=
                (o.indexOf("?") >= 0 ? "&" : "?") +
                "wrst=" +
                e.widgetRealShowTime),
            e.clickTracking &&
              -1 !== o.indexOf(e.clickTracking) &&
              (o =
                e.clickTracking +
                encodeURIComponent(o.replace(e.clickTracking, ""))),
            e.templateId &&
              (o += (o.indexOf("?") >= 0 ? "&" : "?") + "tpl=" + e.templateId),
            -1 !== e.botRadarMetrics &&
              (o +=
                (o.indexOf("?") >= 0 ? "&" : "?") + "brm=" + e.botRadarMetrics),
            i &&
              !1 === /[\&\?]wct\=/.test(o) &&
              (wct = e.getParameterFromLink(i, "wct")) &&
              (o += (-1 === o.indexOf("?") ? "?" : "&") + wct),
            void 0 !== n && "click" === n.type)
          ) {
            var f = "." + e.extractClass(n.target),
              p = n.target.tagName;
            "A" === p &&
              ((p = n.target.parentNode.tagName),
              (f = "." + e.extractClass(n.target.parentNode))),
              (r && "i" === r.coopType) ||
                (o += (o.indexOf("?") >= 0 ? "&" : "?") + "ce=" + p + f);
          }
          if (r && "i" != r.coopType)
            try {
              if (e.context.localStorage) {
                var m = e.context.localStorage.getItem("mgMuidn");
                "string" == typeof m &&
                  m.length > 0 &&
                  o.indexOf("muid") < 0 &&
                  (o += (o.indexOf("?") >= 0 ? "&" : "?") + "muid=" + m);
              }
            } catch (e) {}
          return o;
        }),
        (e.getParameterFromLink = function (e, t) {
          var n = e.search;
          if ("" === n) return null;
          for (var i = n.replace("?", "").split("&"), o = 0; o < i.length; o++)
            if (i[o].split("=")[0] === t) return i[o];
          return null;
        }),
        (e.getClickZone = function () {
          var t = JSON.parse("[]");
          if (0 == t.length) return "";
          if (
            void 0 === t.top ||
            void 0 === t.left ||
            void 0 === t.right ||
            void 0 === t.bottom
          )
            return "";
          var n = e.root.offsetHeight,
            i = e.root.offsetWidth,
            o = [];
          (o.top = parseInt((n / 100) * t.top)),
            (o.left = parseInt((i / 100) * t.left)),
            (o.right = i - parseInt((i / 100) * t.right)),
            (o.bottom = n - parseInt((n / 100) * t.bottom));
          var r = e.root.mouseX,
            a = e.root.mouseY;
          return [
            [2, 3, 4],
            [5, "", 6],
            [7, 8, 9],
          ][a <= o.top ? 0 : a >= o.bottom ? 2 : 1][
            r <= o.left ? 0 : r >= o.right ? 2 : 1
          ];
        }),
        (e.getAntifraudQueryParameter = function (t, n, i) {
          var o = e.getAntifraudParams(n, i);
          if (o) {
            var r = "";
            return (
              (r = e.id), (t.indexOf("?") >= 0 ? "&" : "?") + "k=" + r + "f" + o
            );
          }
          return "";
        }),
        (e.prepareNiceHref = function (t, n, i) {
          var o,
            r = e.teaserData[t];
          if (1 == r.other.sdl && "i" != r.coopType) {
            if (
              ((o = e.clickTracking), void 0 !== r.other.dl && "" != r.other.dl)
            )
              o += r.other.dl;
            else {
              var a = decodeURIComponent(
                  r[0].replace(/[`|',:\/?;$%&\(\)^*!@\s]/g, "")
                ).toLowerCase(),
                s = decodeURIComponent(
                  r[3].replace(/[`|',:\/?;$%&\(\)^*!@]/g, "")
                ).replace(/\s/g, "_");
              o += e.webProtocol + "//" + (a ? a + "/" : "") + s;
            }
            e.clickTracking &&
              -1 !== o.indexOf(e.clickTracking) &&
              (o =
                e.clickTracking +
                encodeURIComponent(o.replace(e.clickTracking, "")));
          } else o = e.prepareHref(t, n, i);
          return o;
        }),
        (e.transliterate = function (e) {
          var t = {
            "Ð": "YO",
            "Ð™": "I",
            "Ð¦": "TS",
            "Ð£": "U",
            Ðš: "K",
            "Ð•": "E",
            "Ð": "N",
            "Ð“": "G",
            "Ð¨": "SH",
            "Ð©": "SCH",
            "Ð—": "Z",
            "Ð¥": "H",
            Ðª: "",
            "Ñ‘": "yo",
            "Ð¹": "i",
            "Ñ†": "ts",
            Ñƒ: "u",
            Ðº: "k",
            Ðµ: "e",
            "Ð½": "n",
            "Ð³": "g",
            Ñˆ: "sh",
            "Ñ‰": "sch",
            "Ð·": "z",
            "Ñ…": "h",
            ÑŠ: "'",
            "Ð¤": "F",
            "Ð«": "I",
            "Ð’": "V",
            "Ð": "a",
            ÐŸ: "P",
            "Ð ": "R",
            Ðž: "O",
            "Ð›": "L",
            "Ð”": "D",
            "Ð–": "ZH",
            "Ð­": "E",
            "Ñ„": "f",
            "Ñ‹": "i",
            "Ð²": "v",
            "Ð°": "a",
            "Ð¿": "p",
            "Ñ€": "r",
            "Ð¾": "o",
            "Ð»": "l",
            "Ð´": "d",
            "Ð¶": "zh",
            "Ñ": "e",
            "Ð¯": "Ya",
            "Ð§": "CH",
            "Ð¡": "S",
            Ðœ: "M",
            "Ð˜": "I",
            "Ð¢": "T",
            "Ð¬": "",
            "Ð‘": "B",
            "Ð®": "YU",
            "Ñ": "ya",
            "Ñ‡": "ch",
            "Ñ": "s",
            "Ð¼": "m",
            "Ð¸": "i",
            "Ñ‚": "t",
            ÑŒ: "",
            "Ð±": "b",
            ÑŽ: "yu",
            " ": "_",
            "Ñ–": "i",
            "Ð†": "I",
            "Ñ—": "i",
            "Ð‡": "I",
          };
          return e
            .split("")
            .map(function (e) {
              return e.match(/[a-z0-9_\-]/i) ? e : t[e] || "";
            })
            .join("");
        }),
        (e.getQueryParameterByName = function (t) {
          t = t.replace(/[\[\]]/g, "\\$&");
          var n = new RegExp("[?&]" + t + "(=([^&#]*)|&|#|$)").exec(
            e.context.location.href
          );
          return n
            ? n[2]
              ? decodeURIComponent(n[2].replace(/\+/g, " "))
              : ""
            : null;
        }),
        (e.getParentLink = function (e) {
          for (; e && "BODY" !== e.tagName; ) {
            if ("A" == e.tagName) return e;
            e = e.parentNode;
          }
          return null;
        }),
        (e.extractClass = function (e) {
          if (e && void 0 !== e.className) {
            var t = e.className.replace(/\s/g, ".").split(".")[0];
            if (t) return t.replace(762628, "");
          }
          return "";
        }),
        (e.findClosest = function (e, t) {
          for (var n; e.parentNode; ) {
            n = e.parentNode.querySelectorAll(t);
            for (var i = 0; i < n.length; i++)
              if (e.isEqualNode(n[i])) return n[i];
            e = e.parentNode;
          }
          return null;
        }),
        (e.prepareTeaserData = function (t) {
          var n = {};
          (n.source = e.htmlEntities(t[0])),
            (n.id = e.htmlEntities(t[1])),
            (n.title = void 0 !== t[3] ? e.prepareTitle(t[3]) : ""),
            (n.desc = void 0 !== t[4] ? e.prepareDesc(t[4]) : ""),
            (n.mirror = e.subnetMirrors[e.currentSubnet]),
            (n.key = t[6]),
            (n.price =
              void 0 !== t[7] ? e.htmlEntities(t[7]).replace(".00", "") : ""),
            (n.priceold =
              void 0 !== t[8] ? e.htmlEntities(t[8]).replace(".00", "") : "");
          var i = 100 * (1 - parseFloat(n.price) / parseFloat(n.priceold));
          i <= 1 || i > 100
            ? ((n.priceold = ""), (n.discount = ""))
            : (n.discount = Math.floor(i) + "%"),
            (n.hash = t[9]),
            (n.other = void 0 !== t[10] ? t[10] : {}),
            void 0 !== n.other.i
              ? (n.other.i = e.htmlEntities(n.other.i))
              : (n.other.i =
                  "data:image/gif;base64,R0lGODlh7AFIAfAAAAAAAAAAACH5BAEAAAAALAAAAADsAUgBAAL+hI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1qt9yu9wsOi8fksvmMTqvX7Lb7DY/L5/S6/Y7P6/f8vv8PGCg4SFhoeIiYqLjI2Oj4CBkpOUlZaXmJmam5ydnp+QkaKjpKWmp6ipqqusra6voKGys7S1tre4ubq7vL2+v7CxwsPExcbHyMnKy8zNzs/AwdLT1NXW19jZ2tvc3d7f0NHi4+Tl5ufo6err7O3u7+Dh8vP09fb3+Pn6+/z9/v/w8woMCBBAsaPIgwocKFDBs6fAgxosSJFCtavIgxo8b+jRw7evwIMqTIkSRLmjyJMqXKlSxbunwJM6bMmTRr2ryJM6fOnTx7+vwJNKjQoUSLGj2KNKnSpUybOn0KNarUqVSrWr2KNavWrVy7ev0KNqzYsWTLmj2LNq3atWzbun0LN67cuXTr2r2LN6/evXz7+v0LOLDgwYQLGz6MOLHixYwbO34MObLkyZQrW76MObPmzZw7e/4MOrTo0aRLmz6NOrXq1axbu34NO7bs2bRr276NO7fu3bx7+/4NPLjw4cSLGz+OPLny5cybO38OPbr06dSrW7+OPbv27dy7e/8OPrz48eTLmz+PPr369ezbu38PP778+fTr27+PP7/+/fxR+/v/D2CAAg5IYIEGHohgggouyGCDDj4IYYQSTkhhhRZeiGGGGm7IYYcefghiiCKOSGKJJp6IYooqrshiiy6+CGOMMs5IY4023ohjjjruCFYBADs=");
          var o = n.title.toLowerCase(),
            r = n.desc.toLowerCase(),
            a = [
              "ÐºÐ¾Ð¿Ð¸Ñ",
              "Ð¿Ð¾Ð´Ð´ÐµÐ»ÐºÐ°",
              "Ñ€ÐµÐ¿Ð»Ð¸ÐºÐ°",
              "ÐºÐ°Ðº Ð¾Ñ€Ð¸Ð³Ð¸Ð½Ð°Ð»",
            ];
          if ("1" == t[5]) {
            n.isReplic = !0;
            for (var s = 0; s < a.length; s++)
              if (
                e.prepareTitle(o).indexOf(a[s]) > -1 ||
                e.prepareDesc(r).indexOf(a[s]) > -1
              ) {
                n.isReplic = !1;
                break;
              }
            0;
          } else n.isReplic = !1;
          return (
            "desktop" != e.deviceType && (n.other.sdl = 0),
            (t.other = n.other),
            (e.teaserData[n.hash] = t),
            (e.teaserData[n.hash].type = "teaser"),
            (e.teaserData[n.hash].id = n.id),
            (e.teaserData[n.hash].source = n.source),
            (e.teaserData[n.hash].img = n.other.i),
            (e.teaserData[n.hash].link = void 0 !== n.other.l ? n.other.l : ""),
            (e.teaserData[n.hash].mirror = n.mirror),
            (e.teaserData[n.hash].coopType =
              void 0 !== n.other.type ? n.other.type : null),
            (e.teaserData[n.hash].clicktrackers =
              void 0 !== n.other.clicktrackers ? n.other.clicktrackers : []),
            (e.teaserData[n.hash].cdomain = n.other.cdomain || null),
            (e.teaserData[n.hash].ccid = n.other.ccid || null),
            (e.teaserData[n.hash].ch = n.other.ch || null),
            (e.teaserData[n.hash].imp =
              void 0 !== n.other.imp ? n.other.imp : []),
            (e.teaserData[n.hash].iteration = e.iteration),
            (e.teaserData[n.hash].page = e.page),
            "i" == e.teaserData[n.hash].coopType &&
              (e.context._mgIntExchangeNews[n.id] = 1),
            n
          );
        }),
        (e.getInternalIds = function () {
          return Object.keys(e.context._mgIntExchangeNews);
        }),
        (e.tox64String = function (e, t) {
          t = void 0 !== t && t;
          for (
            var n,
              i,
              o,
              r,
              a,
              s,
              c,
              l =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
              d = "",
              u = 0;
            u < e.length;

          )
            (n = e.charCodeAt(u++)),
              (i = e.charCodeAt(u++)),
              (o = e.charCodeAt(u++)),
              (r = n >> 2),
              (a = ((3 & n) << 4) | (i >> 4)),
              (s = isNaN(i) ? 64 : ((15 & i) << 2) | (o >> 6)),
              (c = isNaN(o) ? 64 : 63 & o),
              (d += l.charAt(r) + l.charAt(a) + l.charAt(s) + l.charAt(c));
          return (
            !0 === t &&
              (d = d.replace("+", "-").replace("/", "_").replace("=", "*")),
            d
          );
        }),
        (e.hangNiceLinkListener = function (t, n) {
          if (!e.loadedDefault) {
            var i = t.getAttribute("data-hash");
            return (
              void 0 !== e.teaserData[i] &&
                void 0 !== e.teaserData[i].other &&
                void 0 !== e.teaserData[i].other.sdl &&
                (e.teaserData[i].other.sdl = 0),
              (t[e.hrefAttr] = e.prepareHref(i, n, t)),
              !0
            );
          }
        }),
        (e.eventsHangNiceLinkListener = function (t) {
          t || (t = e.context.event), t.target || (t.target = t.srcElement);
          var n = t.target;
          ("A" != n.tagName && null === (n = e.getParentLink(n))) ||
            (n.hasAttribute("data-hash") && e.hangNiceLinkListener(n, t));
        }),
        (e.htmlToElement = function (e) {
          var t = document.createElement("div");
          return (t.innerHTML = e), t.firstChild;
        }),
        (e.htmlToElements = function (t) {
          var n = e.context.document.createElement("div");
          return (n.innerHTML = t), Array.prototype.slice.call(n.childNodes);
        }),
        (e.isHiddenElement = function (e) {
          for (; "BODY" !== e.tagName; ) {
            if ("fixed" != e.style.position && null == e.offsetParent)
              return !0;
            if ("hidden" == e.style.visibility) return !0;
            if ("none" == e.style.display) return !0;
            e = e.parentNode;
          }
          return !1;
        }),
        (e.getTimeBySeconds = function (e) {
          var t = "",
            n = new Date(1e3 * e).toISOString().substr(11, 8);
          if (1 === e.indexOf(":") || 2 === e.indexOf(":")) n = e;
          else {
            if (Number.isNaN(parseInt(e))) return "00:00";
            t = n.split(":");
          }
          return "00" === t[0] && (n = t[1] + ":" + t[2]), n;
        }),
        (e.htmlEntities = function (e) {
          return String(void 0 !== e ? e : "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;");
        }),
        (e.random = function (e, t) {
          return Math.floor(e + Math.random() * (t - e + 1));
        }),
        (e.getCurrentTimestamp = function () {
          return Math.floor(Date.now() / 1e3);
        }),
        (e.setCappingRealShowTime = function () {
          e.cappingRealShowTime = e.getCurrentTimestamp();
        }),
        (e.setWidgetRealShowTime = function (t, n) {
          t && n >= 0.01 && (e.widgetRealShowTime = e.getCurrentTimestamp());
        }),
        (e.isMobile = function () {
          var e,
            t = !1;
          return (
            (e = navigator.userAgent || navigator.vendor || w.opera),
            (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
              e
            ) ||
              /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
                e.substr(0, 4)
              )) &&
              (t = !0),
            t
          );
        }),
        (e.isPassiveSupported = function () {
          if (void 0 !== e.passiveIsSupported) return e.passiveIsSupported;
          e.passiveIsSupported = !1;
          try {
            window.addEventListener(
              "test",
              null,
              Object.defineProperty({}, "passive", {
                get: function () {
                  e.passiveIsSupported = !0;
                },
              })
            );
          } catch (e) {}
          return e.passiveIsSupported;
        }),
        (e.fixWrongExternalImages = function () {
          var t = e.root.getElementsByClassName("mg-wrong-image");
          for (var n = 0; n < t.length; n++) {
            var i = t[n].src;
            (t[n].src = e.blankImage),
              (function (t, n, i) {
                setTimeout(function () {
                  var o = t.getBoundingClientRect();
                  t.classList.add("mg-wrongImage" + i),
                    e.addStyle(
                      "wrongImage" + i,
                      ".mg-wrongImage" +
                        i +
                        " { width: " +
                        o.width +
                        "px !important;\nheight: " +
                        o.height +
                        "px !important;\nobject-fit: cover;\n-o-object-fit: cover;\nobject-position: top;\n-o-object-position: top;\n }"
                    ),
                    (t.src = n);
                }, 50);
              })(t[n], i, n);
          }
        }),
        (e.getWidgetValue = function (t, n) {
          var i = JSON.parse("[]");
          return e.originalId !== e.id &&
            void 0 !== i[e.id] &&
            void 0 !== i[e.id][t]
            ? i[e.id][t]
            : n;
        });
    };
  },
  function (e, t) {
    window.MarketGidCSubnetsBlock762628 = function (e) {
      e.afterInitHooks.push("subnetsLoad"),
        (e.currentSubnet = ""),
        (e.subnetMirrors = {}),
        (e.subnetMirrorServicers = {}),
        (e.subnetMirrorsImages = {}),
        (e.subnetMirrorsAdvert = {}),
        (e.subnetMirrorsAdLinkBlocks = {}),
        (e.subnetMirrorsUtm = {}),
        (e.subnetDashboardDomains = {}),
        (e.subnetMirrorNames = {});
      var t = JSON.parse(
        '{"0":{"id":0,"informer_prefix":"MarketGid","mirror":"steepto.com","mirrorName":"steepto","imageDomain":"mgid.com","adLinkBlock":"<div class=\\"mgheader\\" data-advert-url=\\"\\/\\/cdn.steepto.com\\/advert\\/steepto\\/main.html\\"><span class=\\"mghead\\">%WIDGET_TITLE%<\\/span><div class=\\"mg_addad%id\\"><a href=\\"http:\\/\\/steepto.com\\/\\" target=\\"_blank\\"><img style=\\"display: inline-block;width: auto!important;\\" src=\\"\\/\\/cdn.steepto.com\\/images\\/steepto\\/steepto_logo_mini_45.png\\" alt=\\"Steepto\\" title=\\"Steepto\\"><\\/a><\\/div><\\/div><style>.mghead{font-weight:700;font-size:14px;text-transform:uppercase;text-align:left;font-family: \\"Open Sans\\", sans-serif;color:#4555a7;display:block;margin:0 0 0px 5px;float:left;}.mgheader{  display: table !Important; width: 100% !important;}div.mg_addad%id{text-align: right; margin-right: 10px;display: inline-block;float: right;} div.mg_addad%id:hover{opacity: 1} div.mg_addad%id a{color: #000000; font:normal 10px Myriad Pro; text-decoration: none;} div.mg_addad%id img{margin: 0px -5px 0px 0px; border:0px;float: none;padding:0px;}<\\/style>","dashboardDomain":"dashboard.mgid.com","utm":"?utm_source=widget_inf&utm_medium=text&utm_campaign=add&utm_content=","servicer":"servicer.mgid.com"},"1":{"id":1,"informer_prefix":"MarketGid","mirror":"fem.mgid.com","mirrorName":"lady","imageDomain":"mgid.com","adLinkBlock":"<div class=\\"mgheader\\"><span class=\\"mghead\\">%WIDGET_TITLE%<\\/span><div class=\\"mg_addad%id\\"><a href=\\"http:\\/\\/mgid.com\\/advertisers%utm%id\\" target=\\"_blank\\"> by <img style=\\"display: inherit!important;width: auto!important;\\" src=\\"\\/\\/cdn.mgid.com\\/images\\/mgid_logo_mini_43x20.png\\" alt=\\"Mgid\\" title=\\"Mgid\\"><\\/a><\\/div><\\/div><style>.mghead{font-weight:700;font-size:14px;text-transform:uppercase;text-align:left;font-family: \\"Open Sans\\", sans-serif;color:#4555a7;display:block;margin:0 0 0px 5px;float:left;}.mgheader{  display: table !Important; width: 100% !important;}div.mg_addad%id{text-align: right; opacity: 0.5;margin-right: 10px} div.mg_addad%id:hover{opacity: 1} div.mg_addad%id a{color: #000000; font:normal 10px Myriad Pro; text-decoration: none;} div.mg_addad%id img{margin-bottom: -5px; border:0px}<\\/style>","dashboardDomain":"dashboard.mgid.com","utm":"?utm_source=widget_fem&utm_medium=text&utm_campaign=add&utm_content=","servicer":"servicer.mgid.com"},"2":{"id":2,"informer_prefix":"Adskeeper","mirror":"adskeeper.co.uk","mirrorName":"adskeeper","imageDomain":"adskeeper.co.uk","adLinkBlock":"<div class=\\"mgheader\\"><span class=\\"mghead\\">%WIDGET_TITLE%<\\/span><div class=\\"mg_addad%id\\"><a href=\\"\\/\\/widgets.adskeeper.com\\/%utm%id\\" target=\\"_blank\\"><img src=\\"\\/\\/cdn.adskeeper.co.uk\\/images\\/adskeeper_logo_mini_71x16.png\\" alt=\\"Adskeeper\\" title=\\"Adskeeper\\"><\\/a><\\/div><\\/div><style>.mghead{line-height:20px;vertical-align:middle;font-weight:700;font-size:14px;text-transform:uppercase;text-align:left;font-family: \\"Open Sans\\", sans-serif;color:#4555a7;display:block;margin:0 0 0px 5px;float:left;}.mgheader{  display: table !Important; width: 100% !important;}div.mg_addad%id{text-align: right; opacity: 0.5;margin-right: 10px;display: inline-block;float: right;} div.mg_addad%id:hover{opacity: 1} div.mg_addad%id a{color: #000000; font:normal 10px Myriad Pro; text-decoration: none;} div.mg_addad%id img{margin: 0px -5px 0px 0px; border:0px;float: none;padding:0px;}<\\/style>","dashboardDomain":"dashboard.adskeeper.co.uk","utm":"?utm_source=widget_adskeeper&utm_medium=text&utm_campaign=add&utm_content=","servicer":"servicer.adskeeper.co.uk"},"3":{"id":3,"informer_prefix":"LentaInform","mirror":"lentainform.com","mirrorName":"lentainform","imageDomain":"lentainform.com","adLinkBlock":"<div class=\\"mgheader\\"><span class=\\"mghead\\">%WIDGET_TITLE%<\\/span><div class=\\"mg_addad%id widgets_logo\\"><a href=\\"http:\\/\\/partner.lentainform.com\\" target=\\"_blank\\"><\\/a><\\/div><\\/div><style>.widgets_logo{position:relative}.widgets_logo a{background:url(https:\\/\\/cdn.lentainform.com\\/images\\/lentainform\\/widgets_lentainform.png) no-repeat;width:88px;height:10px;position:absolute;display:block;bottom:-10px;right:7px}.mgbox{margin-bottom:15px!important;}.widgets_logo:hover a{background:url(https:\\/\\/cdn.lentainform.com\\/images\\/lentainform\\/widgets_lentainform_hover.png) no-repeat}<\\/style>","dashboardDomain":"dashboard.lentainform.com","utm":"?utm_source=informer&utm_medium=text&utm_campaign=add&utm_content=","servicer":"servicer.lentainform.com"},"5":{"id":5,"informer_prefix":"IdealMedia","mirror":"idealmedia.com","mirrorName":"idealmedia.com","imageDomain":"idealmedia.com","adLinkBlock":"<div class=\\"mgheader\\"><span class=\\"mghead\\">%WIDGET_TITLE%<\\/span><div class=\\"mg_addad%id\\"><a href=\\"http:\\/\\/idealmedia.com\\/\\" target=\\"_blank\\"><img style=\\"display: inline-block;width: 43px;\\" src=\\"\\/\\/cdn.mirs.com\\/images\\/im_logo_mini_43x20.svg\\" alt=\\"IdealMedia\\" title=\\"IdealMedia\\"><\\/a><\\/div><\\/div><style>.mghead{font-weight:700;font-size:14px;text-transform:uppercase;text-align:left;font-family: \\"Open Sans\\", sans-serif;color:#4555a7;display:block;margin:0 0 0px 5px;float:left;}.mgheader{ \\u00a0display: table !Important; width: 100% !important; margin-bottom:-7px;}div.mg_addad%id{text-align: right; margin-right: 10px;display: inline-block;float: right;} div.mg_addad%id:hover{opacity: 1} div.mg_addad%id a{color: #000000; font:normal 10px Myriad Pro; text-decoration: none;} div.mg_addad%id img{margin: 0px -5px 0px 0px; border:0px;float: none;padding:0px;}<\\/style>","dashboardDomain":"dashboard.idealmedia.com","utm":"?utm_source=widget&utm_medium=text&utm_campaign=add&utm_content=","servicer":"servicer.idealmedia.com"}}'
      );
      for (var n in t)
        if (t.hasOwnProperty(n)) {
          var i = t[n];
          (e.subnetMirrors[i.id] = i.mirror),
            (e.subnetMirrorServicers[i.id] = i.servicer),
            (e.subnetMirrorNames[i.mirrorName] = i.id),
            (e.subnetMirrorsImages[i.id] = i.imageDomain),
            (e.subnetMirrorsAdLinkBlocks[i.id] = i.adLinkBlock),
            (e.subnetMirrorsUtm[i.id] = i.utm),
            "steepto" === i.mirrorName &&
              (e.subnetDashboardDomains[i.id] =
                e.webProtocol + "//" + i.dashboardDomain);
        }
      var o = [];
      o.push({ id: 762628 });
      var r = JSON.parse("[]"),
        a = JSON.parse("[]");
      for (var s in r) r.hasOwnProperty(s) && o.push({ id: r[s].childId });
      (this.subnetsLoad = function () {
        for (var n = 0; n < o.length; n++) {
          var i = o[n].id;
          for (var s in t)
            t.hasOwnProperty(s) &&
              (function () {
                var n = t[s];
                1 !== n.id &&
                  (function (t) {
                    (e.context[
                      n.informer_prefix +
                        "LoadGoods" +
                        t +
                        ("" !== e.uniqId ? "_" + e.uniqId : "")
                    ] = function (i, o) {
                      if (
                        ((e.originalId = e.id),
                        (e.id = t),
                        (e.loadedType = "goods"),
                        (e.currentSubnet = n.id),
                        (e.currentSubnetDomain = n.mirror),
                        e.originalId !== e.id)
                      ) {
                        if (void 0 !== a[e.id]) {
                          var s = a[e.id];
                          e.executeFuncBlock(s);
                        }
                        if (
                          void 0 !== r[e.id] &&
                          void 0 !== r[e.id].customFuncBlocks
                        ) {
                          var c = r[e.id].customFuncBlocks;
                          e.executeFuncBlock(c);
                        }
                      }
                      e.MarketGidLoadNews(i, o);
                    }),
                      (e.context[n.informer_prefix + "CReject" + t] =
                        e.MarketGidReject);
                  })(i);
              })();
        }
      }),
        (e.executeFuncBlock = function (e) {
          for (var t in e)
            if (e.hasOwnProperty(t)) {
              var n = e[t];
              window[
                "".concat("MarketGidC").concat(n, "Block").concat(762628)
              ].call(
                window["".concat("MarketGidInfC762628")],
                window["".concat("MarketGidInfC762628")]
              ),
                (window["".concat("MarketGidInfC762628")].funcBlocks[
                  "".concat(n)
                ] = "".concat("MarketGidC").concat(n, "Block").concat(762628));
            }
        }),
        (e.getSubnetByMirror = function (t) {
          var n = 0;
          return (
            void 0 !== e.subnetMirrorNames[t] && (n = e.subnetMirrorNames[t]), n
          );
        });
    };
  },
  function (e, t, n) {
    function i(e) {
      return (i =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    window.MarketGidCAdvertLinkBlock762628 = function (e) {
      e.beforeLoadNewsHooks.push("refreshAdvertLink"),
        e.afterLoadNewsHooks.push("initAdvertPopup"),
        (e.getAdvertLinkValue = function () {
          return parseInt(1);
        }),
        (e.removeElements = function (e) {
          for (var t = 0; t < e.length; t++) e[t].parentNode.removeChild(e[t]);
        }),
        (e.refreshAdvertLink = function () {
          var t = e.getAdvertLinkValue();
          if (t)
            try {
              var n = e.subnetMirrorsAdLinkBlocks[e.currentSubnet].replace(
                  /%id/g,
                  e.id
                ),
                i = "";
              i = "Promoted Content";
              var o = navigator.language.substr(0, 2),
                r = -1 !== ["es", "vi", "hi", "ru", "uk"].indexOf(o) ? o : "";
              0,
                (n = (n = (n = (n = (n = n.replace(
                  "%WIDGET_TITLE%",
                  i
                )).replace("%lang/", "" === r ? "" : r + "/")).replace(
                  /\((\'|\")?\/\//g,
                  "($1" + e.webProtocol + "//"
                )).replace('src="//', 'src="' + e.webProtocol + "//")).replace(
                  'href="//',
                  'href="' + e.webProtocol + "//"
                ));
              var a = "";
              if ("" === a) {
                a = e.subnetMirrorsUtm[e.currentSubnet];
                var s = e.context.document.location.hostname;
                if (e.context !== e.context.top) {
                  var c = e.context.document.referrer.match(/:\/\/(.[^/]+)/);
                  null !== c && (s = c[1]);
                }
                a = a.replace("{domain}", s);
              }
              e.tickerPrefix = n.replace(/%utm/, a);
              var l = document.createElement("div");
              if (1 === t) return;
              (l.innerHTML = e.tickerPrefix),
                2 === t &&
                  e.removeElements(l.getElementsByClassName("mg_addad" + e.id)),
                3 === t && e.removeElements(l.getElementsByClassName("mghead")),
                (e.tickerPrefix = l.innerHTML);
            } catch (e) {}
          else e.tickerPrefix = "";
        }),
        (e.parseAdvertLink = function (t) {
          var n = "\x3c!--advertPrefix--\x3e",
            i = t.indexOf(n) > t.length / 2;
          return (
            i &&
              e.removeElements(
                e.root.getElementsByClassName("mg_addad" + e.id)
              ),
            (i || 0 === e.countLoadBlocks) &&
              (t =
                t.indexOf(n) >= 0
                  ? t.replace(n, this.tickerPrefix)
                  : e.tickerPrefix + t),
            t
          );
        }),
        (e.initAdvertPopup = function () {
          if (
            e.context.top === e.context.self &&
            "banner" !== e.widgetConstructorData.type &&
            "exit-pop-up" !== e.widgetConstructorData.type &&
            -1 !== ["tablet", "desktop"].indexOf(e.deviceType) &&
            void 0 === e.context._mgDisableAdvertPopup &&
            i("MarketGidC") + "ConstructorBlock762628" != "function"
          ) {
            var t = e.root.querySelector(".mg_addad" + e.id);
            t && t.addEventListener("click", e.showAdvertPopup);
          }
        }),
        (e.showAdvertPopup = function (t) {
          var n = e.findClosest(t.target, "[data-advert-url]");
          if (!n) return null;
          t.preventDefault();
          var i = (void 0 !== e.realRoot ? e.realRoot : e.root).parentNode,
            o = i.querySelector("._mgAdvertPopupC762628"),
            r = i.querySelector("._mgPopupInner"),
            a = function e(t, n, i) {
              if (!(i <= 0)) {
                var o = ((n - t.scrollTop) / i) * 10;
                setTimeout(function () {
                  (t.scrollTop = t.scrollTop + o),
                    t.scrollTop !== n && e(t, n, i - 10);
                }, 10);
              }
            };
          if (!o) {
            for (
              var s = e.htmlToElements(
                  '<style>\n    ._mgAdvertPopupC762628 {\n        position: fixed;\n        width: 100%;\n        height: 100%;\n        top: 0px;\n        left: 0px;\n        font-family: "PTSans", Arial, sans-serif;\n        font-size: 16px;\n        color: #696969;\n        line-height: 1.3;\n        z-index: 999;\n\n        -webkit-box-sizing: border-box;\n        -moz-box-sizing: border-box;\n        box-sizing: border-box;\n    }\n    ._mgAdvertPopupC762628 iframe {\n        width: 100%;\n        height: 377px;\n    }\n    ._mgAdvertPopupC762628 ._mgPopupShadow {\n        position: absolute;\n        top: 0px;\n        left: 0px;\n        width: 100%;\n        height: 100%;\n        background-color: #000;\n        opacity: 0.4;\n        -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=40)";\n        z-index: 1;\n    }\n    ._mgAdvertPopupC762628 ._mgPopupInner {\n        position: relative;\n        top: 50%;\n        margin-left: -375px;\n        left: 50%;\n        padding: 36px;\n        width: 750px;\n        background-color: #f8f8f8;\n        z-index: 2;\n\n        -webkit-box-sizing: border-box;\n        -moz-box-sizing: border-box;\n        box-sizing: border-box;\n    }\n    ._mgAdvertPopupC762628 ._mgPopupInner.fixPop {\n        position: absolute!important;\n        top: 30px!important;\n        margin-top: 0!important;\n    }\n    ._mgAdvertPopupC762628 ._mgClosePopup {\n        position: absolute;\n        overflow: hidden;\n        top: 5px;\n        right: 5px;\n        height: 21px;\n        width: 21px;\n        text-indent: -9999px;\n        background: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALAgMAAADUwp+1AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACVBMVEVmZmZmZmb///+E1CFqAAAAAXRSTlMAQObYZgAAAAFiS0dEAmYLfGQAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAAlSURBVAjXY3BgYGEQAEIWBgcGRkYGBgYXIBaA0CA+SBwkD1QHACp2Ae2BHO8IAAAAAElFTkSuQmCC\') no-repeat center center;\n        background-color: transparent;\n    }\n    ._mgAdvertPopupC762628 ._mgClosePopup:hover {\n        background-color: #dfdfdf;\n    }\n</style>\n\n<div class="_mgAdvertPopupC762628">\n    <div class="_mgPopupShadow"></div>\n    <div class="_mgPopupInner">\n        <a href="#" class="_mgClosePopup" title="Close"></a>\n        <iframe frameborder="0"></iframe>\n    </div>\n</div>'
                ),
                c = 0;
              c < s.length;
              c++
            )
              i.appendChild(s[c]);
            if (!(o = i.querySelector("._mgAdvertPopupC762628"))) return !1;
            r = o.querySelector("._mgPopupInner");
            var l = o.querySelector("._mgPopupShadow");
            (r.style.marginTop = -r.clientHeight / 2 + "px"),
              l.addEventListener("click", function (t) {
                null == e.findClosest(t.target, "._mgPopupInner") &&
                  o.setAttribute("style", "display: none");
              });
            var d = o.querySelector("._mgClosePopup");
            d &&
              d.addEventListener("click", function (e) {
                e.preventDefault(), o.setAttribute("style", "display: none");
              });
            var u = o.querySelector("iframe");
            u.setAttribute("src", n.getAttribute("data-advert-url"));
            var h = e.context.addEventListener
              ? "addEventListener"
              : "attachEvent";
            (0, e.context[h])(
              "attachEvent" == h ? "onmessage" : "message",
              function (t) {
                var n = t.message ? "message" : "data",
                  i = JSON.parse(t[n]);
                if (void 0 === i.target || "correct-popup-height" !== i.target)
                  return !0;
                (u.style.height = i.height + "px"),
                  i.safariIPad &&
                    (i.keyboard
                      ? (a(e.context.document.body, 0, 500),
                        r.classList.add("fixPop"))
                      : r.classList.remove("fixPop")),
                  (r.style.marginTop = -r.clientHeight / 2 + "px");
              },
              !1
            );
          }
          o.setAttribute("style", "display: block"),
            r.className.indexOf("fixPop") >= 0 &&
              a(e.context.document.body, 0, 500);
        });
    };
  },
  function (e, t) {
    e.exports = function (e) {
      var t = null;
      e.log = function (n) {
        null === t && "1" == e.getQueryParameterByName("mgwdebug") && (t = !0),
          t && console.log("WIDGET_".concat(762628, "_").concat(e.uniqId), n);
      };
    };
  },
  function (e, t, n) {
    window.MarketGidCInternalExchangeBlock762628 = function (e) {
      e.afterLoadNewsHooks.push("initIntExchangeLabels"),
        (e.initIntExchangeLabels = function () {
          if (
            -1 !== e.enabledCooperationTypes.indexOf("int_exchange") ||
            -1 !== [3, 2].indexOf(e.currentSubnet)
          )
            for (
              var t = (function (e) {
                  for (var t = [], n = [e]; n.length > 0; )
                    for (var i = n.pop(), o = 0; o < i.childNodes.length; o++) {
                      var r = i.childNodes[o];
                      r.nodeType === Node.COMMENT_NODE ? t.push(r) : n.push(r);
                    }
                  return t;
                })(e.root),
                n = 0;
              n < t.length;
              n++
            ) {
              var i = t[n],
                o = e.findClosest(i, ".mgline");
              if (o && -1 !== o.className.indexOf("type-w")) {
                var r = e.context.document.createElement("IMG");
                r.setAttribute("height", 20),
                  "intExchangeWagesImagePlace" === i.data &&
                    ((r.className = "mcimgad"),
                    (r.src =
                      e.webProtocol +
                      "//cdn.steepto.com/images/mgid/int_exchange_wages_ad.svg"));
                var a = o.querySelector("a"),
                  s = a["data-hash"] || a.getAttribute("data-hash");
                s &&
                  e.teaserData[s] &&
                  e.teaserData[s].source &&
                  "intExhangeWagesSourcePlace" === i.data &&
                  ((r.className = "mcimgsrc"),
                  (r.src =
                    e.webProtocol +
                    "//cdn.steepto.com/images/mgid/int_exchange_wages_src.svg")),
                  r.src && i.parentNode.replaceChild(r, i);
              }
            }
        });
    };
  },
  function (e, t) {
    window.MarketGidCColorBlock762628 = function (e) {
      e.colorAverage = function (e) {
        var i = { r: 0, g: 0, b: 0 };
        return fetch(e, { mode: "cors" })
          .then(function (e) {
            return e.arrayBuffer();
          })
          .then(function (e) {
            e =
              "data:image/png;base64," +
              (e = btoa(
                new Uint8Array(e).reduce(function (e, t) {
                  return e + String.fromCharCode(t);
                }, "")
              ));
            return new Promise(function (o) {
              var r = new Image();
              (r.src = e),
                (r.onload = function () {
                  var e = document.createElement("canvas");
                  (e.width = 32), (e.height = 32);
                  var a = e.getContext("2d");
                  a.drawImage(r, 0, 0, 32, 32);
                  for (
                    var s = a.getImageData(0, 0, 32, 32), c = -4, l = 0;
                    (c += 4) < s.data.length;

                  )
                    ++l,
                      (i.r += s.data[c]),
                      (i.g += s.data[c + 1]),
                      (i.b += s.data[c + 2]);
                  (i.r = Math.floor(i.r / l)),
                    (i.g = Math.floor(i.g / l)),
                    (i.b = Math.floor(i.b / l));
                  var d = t(i.r, i.g, i.b);
                  d.l > 0.8 && (i = n(d.h, d.s, 0.8)), o(i);
                });
            });
          });
      };
      var t = function (e, t, n) {
          (e /= 255), (t /= 255), (n /= 255);
          var i,
            o,
            r = Math.max(e, t, n),
            a = Math.min(e, t, n),
            s = (r + a) / 2;
          if (r == a) i = o = 0;
          else {
            var c = r - a;
            switch (((o = s > 0.5 ? c / (2 - r - a) : c / (r + a)), r)) {
              case e:
                i = (t - n) / c + (t < n ? 6 : 0);
                break;
              case t:
                i = (n - e) / c + 2;
                break;
              case n:
                i = (e - t) / c + 4;
            }
            i /= 6;
          }
          return { h: i, s: o, l: s };
        },
        n = function (e, t, n) {
          var i, o, r;
          if (0 == t) i = o = r = n;
          else {
            var a = function (e, t, n) {
                return (
                  n < 0 && (n += 1),
                  n > 1 && (n -= 1),
                  n < 1 / 6
                    ? e + 6 * (t - e) * n
                    : n < 0.5
                    ? t
                    : n < 2 / 3
                    ? e + (t - e) * (2 / 3 - n) * 6
                    : e
                );
              },
              s = n < 0.5 ? n * (1 + t) : n + t - n * t,
              c = 2 * n - s;
            (i = a(c, s, e + 1 / 3)),
              (o = a(c, s, e)),
              (r = a(c, s, e - 1 / 3));
          }
          return {
            r: Math.floor(255 * i),
            g: Math.floor(255 * o),
            b: Math.floor(255 * r),
          };
        };
    };
  },
  function (e, t) {
    window.MarketGidCUtilsBlock762628 = function (e) {
      (e.utils = {}),
        (e.utils.getScroll = function () {
          var t = e.utils.getWindow();
          return {
            top:
              t.document.body.scrollTop ||
              t.document.documentElement.scrollTop ||
              0,
            left:
              t.document.body.scrollLeft ||
              t.document.documentElement.scrollLeft ||
              0,
          };
        }),
        (e.utils.getRect = function (t, n) {
          var i = t.getBoundingClientRect(),
            o = {
              top: i.top,
              bottom: i.bottom,
              left: i.left,
              right: i.right,
              height: i.height ? i.height : i.bottom - i.top,
              width: i.width ? i.width : i.right - i.left,
            };
          if (e.context.self !== e.context.top) {
            var r = e.utils.getFrame();
            if (r) {
              var a = r.getBoundingClientRect();
              (o.top += a.top),
                (o.bottom += a.top),
                (o.left += a.left),
                (o.right += a.left);
            }
          }
          if (n) {
            var s = e.utils.getScroll();
            (o.top += s.top),
              (o.bottom += s.top),
              (o.left += s.left),
              (o.right += s.left);
          }
          return o;
        }),
        (e.utils.getViewportSize = function () {
          var t = e.utils.getWindow();
          return {
            width: t.innerWidth || t.document.documentElement.clientWidth,
            height: t.innerHeight || t.document.documentElement.clientHeight,
          };
        });
      var t = void 0;
      e.utils.getWindow = function () {
        if (void 0 === t) {
          var n = e.context;
          if (e.context.parent != e.context.self)
            try {
              void 0 !== e.context.top.document && (n = e.context.top);
            } catch (e) {}
          t = n;
        }
        return t;
      };
      var n = void 0;
      e.utils.getFrame = function () {
        if (void 0 === n)
          try {
            var t = e.context;
            for (t.frameElement; t.frameElement; t = t.parent) t.frameElement;
            n = frame;
          } catch (e) {
            n = null;
          }
        return n;
      };
    };
  },
  function (e, t, n) {
    window.MarketGidCMonitorBlock762628 = function (e) {
      this.afterLoadNewsHooks.push("monitorInit"),
        (this.shownBlocks = {}),
        (this.monitorTimeout = null),
        (this.isFirstByType = {}),
        (this.isFirstByCid = {}),
        (this.monitorInit = function () {
          if ("function" != typeof e.VisData) {
            var t = !0,
              n = e.context.self;
            try {
              e.context.self !== e.context.top &&
                e.context.top.location.href &&
                (n = e.context.top);
            } catch (e) {
              t = !1;
            }
            e.VisData = (function () {
              try {
                if (!t)
                  return function (e) {
                    return !e || { extTf: !1 };
                  };
                var i,
                  o,
                  r = {
                    hidden: "visibilitychange",
                    webkitHidden: "webkitvisibilitychange",
                    mozHidden: "mozvisibilitychange",
                    msHidden: "msvisibilitychange",
                  };
                for (i in r)
                  if (i in document) {
                    o = r[i];
                    break;
                  }
                var a,
                  s,
                  c,
                  l,
                  d,
                  u = -1,
                  h = -1,
                  f = -1,
                  p = 1,
                  m = !1,
                  g =
                    "function" == typeof document.hasFocus
                      ? function () {
                          var e = n.document.hasFocus();
                          e != p && (a = new Date().getTime()),
                            (m |= e),
                            (p = e);
                        }
                      : function () {
                          p = 1;
                        };
                setInterval(g, 100),
                  e.addEvent(n.document, o, function () {
                    n.document[i]
                      ? (u = 0)
                      : setTimeout(function () {
                          u = 1;
                        }, 100),
                      (d = new Date().getTime());
                  }),
                  e.addEvent(n.document, "mouseleave", function () {
                    (f = 0), (s = new Date().getTime());
                  }),
                  e.addEvent(n.document, "mouseenter", function () {
                    (f = 1), (s = new Date().getTime());
                  }),
                  e.addEvent(n.document, "touchmove", function () {
                    (f = 2), (s = new Date().getTime());
                  });
                var v = 0;
                e.addEvent(n.document, "keydown", function () {
                  (v = 1), (c = new Date().getTime());
                });
                var y = 0,
                  w = 0;
                e.addEvent(n.document, "click", function (e) {
                  (w = 1), (y = new Date().getTime());
                  for (var t = e.target; t.parentElement; ) {
                    if ("A" === t.tagName) {
                      w = 2;
                      break;
                    }
                    t = t.parentElement;
                  }
                }),
                  e.addEvent(n, "blur", function () {
                    (h = "IFRAME" == n.document.activeElement.tagName ? 2 : 0),
                      (l = new Date().getTime());
                  }),
                  e.addEvent(n, "focus", function () {
                    (h = 1), (l = new Date().getTime());
                  });
                var b = 0,
                  x = null,
                  k = function () {
                    (x = new Date().getTime()), (b = 1);
                  };
                n.document.addEventListener
                  ? (n.document.addEventListener("mousewheel", k, !1),
                    n.document.addEventListener("DOMMouseScroll", k, !1))
                  : n.document.attachEvent("onmousewheel", k);
                var C = 0;
                try {
                  var E = new Image();
                  E.__defineGetter__("id", function () {
                    C = 1;
                  }),
                    console.debug(E);
                } catch (e) {
                  C = -1;
                }
                return function (e) {
                  g();
                  var t = p && (0 !== u || 0 !== h || -1 !== f || b);
                  if (e) {
                    var n = {
                        extVs: t,
                        extTv: u,
                        extWv: h,
                        extMa: f,
                        extHf: p,
                        extCl: w,
                        extKp: v,
                        extMw: b,
                        extDg: C,
                        extFt: m,
                      },
                      i = new Date().getTime();
                    return (
                      y && (n.extClt = i - y),
                      x && (n.extMwt = i - x),
                      l && (n.extWvt = i - l),
                      s && (n.extMat = i - s),
                      d && (n.extTvt = i - d),
                      a && (n.extHft = i - a),
                      c && (n.extKpt = i - c),
                      n
                    );
                  }
                  return t;
                };
              } catch (e) {
                return function (e) {
                  return !e || {};
                };
              }
            })();
          }
          var i = /([A-Za-z0-9\-_\*]{64})/,
            o = parseFloat(
              '{"capping_observer_threshold":"0.5","current_language":"en","timer_toaster_inactivity":"8","widget_lazy_load_margin":"1000","accidental_clicks_delay":"10"}'
                .capping_observer_threshold
            );
          if (
            ((!o || o <= 0 || o > 1 || Number(o) != o) && (o = 0.9),
            "function" == typeof IntersectionObserver &&
              3 === e.servicerData.cv)
          ) {
            var r = 0,
              a = 0,
              s = [],
              c = null,
              l = function () {
                for (var t = 0, n = 0; n < s.length; n++)
                  if (s[n])
                    if (s[n].dataset.shown) t++;
                    else if (s[n].dataset.observeStart > 0) {
                      var i =
                        parseFloat(s[n].dataset.observeTime) +
                        (new Date().getTime() - s[n].dataset.observeStart);
                      i > 1e3 &&
                        (e.intersectionObserver.unobserve(s[n]),
                        e.intersectionObserver.observe(s[n]));
                    }
                t < r && setTimeout(arguments.callee, 100);
              };
            if (!e.intersectionObserver) {
              e.intersectionObserver = new IntersectionObserver(
                function (t) {
                  for (
                    var n = {},
                      i = 0,
                      r = function (r) {
                        var a,
                          s = t[r];
                        if (!s.target.dataset.i || s.target.dataset.shown)
                          return "continue";
                        if (s.target.width + s.target.height == 0)
                          return (
                            e.intersectionObserver.unobserve(s.target),
                            (a = s.target),
                            setTimeout(function () {
                              e.intersectionObserver.observe(a);
                            }, 100),
                            "continue"
                          );
                        if (s.intersectionRatio >= o)
                          if (0 == s.target.dataset.observeStart)
                            s.target.dataset.observeStart = new Date().getTime();
                          else {
                            var c =
                              new Date().getTime() -
                              s.target.dataset.observeStart;
                            s.target.dataset.observeTime =
                              parseFloat(s.target.dataset.observeTime) + c;
                          }
                        else
                          (s.target.dataset.observeTime = 0),
                            (s.target.dataset.observeStart = 0);
                        s.target.dataset.observeTime >= 1e3 &&
                          ((s.target.dataset.shown = 1),
                          e.intersectionObserver.unobserve(s.target),
                          (n[s.target.dataset.i] = e.getTeaserCappingData(
                            s.target
                          )),
                          i++);
                      },
                      a = 0;
                    a < t.length;
                    a++
                  )
                    r(a);
                  i && e.prepareCappingData(n, e.servicerData.cv);
                },
                { threshold: [0, o, 1] }
              );
            }
            var d = [],
              u = null,
              h = function () {
                c || (c = setTimeout(l, 100)), (u = null);
                for (var t = d.pop(); t; t = d.pop())
                  e.intersectionObserver.observe(t);
              },
              f = function (e) {
                d.push(e),
                  s.push(e),
                  r++,
                  u && clearTimeout(u),
                  r < a ? (u = setTimeout(h, 100)) : h();
              };
            !(function () {
              var t = e.root.getElementsByClassName("mgline");
              if (t.length)
                for (var n = 0; n < t.length; n++)
                  if (!t[n].dataset.observing) {
                    var o = i.exec(t[n].dataset.i);
                    o && o[1]
                      ? (function () {
                          (t[n].dataset.observeTime = 0),
                            (t[n].dataset.observeStart = 0),
                            (t[n].dataset.observing = "yes");
                          var i,
                            o,
                            r = t[n].querySelectorAll("img.mcimg");
                          r.length > 0
                            ? ((i = t[n]),
                              (o = new Image()),
                              e.addEvent(o, "load", function () {
                                f(i);
                              }),
                              e.addEvent(o, "error", function () {
                                f(i);
                              }),
                              (o.src = r[0].src))
                            : f(t[n]),
                            a++;
                        })()
                      : (t[n].dataset.observing = "no");
                  }
            })();
          } else
            this.monitorTimeout ||
              (function () {
                for (
                  var t,
                    n = {},
                    r = e.root.getElementsByClassName("mgline"),
                    a = [],
                    s = 0;
                  s < r.length;
                  s++
                ) {
                  var c = i.exec(r[s].dataset.i);
                  c &&
                    c[1] &&
                    !e.shownBlocks[r[s].dataset.i] &&
                    (r[s].dataset.observing
                      ? a.push(r[s])
                      : ((t = void 0),
                        (t = r[s].querySelectorAll("img.mcimg")).length > 0
                          ? (function (n) {
                              var i = new Image();
                              e.addEvent(i, "load", function () {
                                n.dataset.observing = "yes";
                              }),
                                e.addEvent(i, "error", function () {
                                  n.dataset.observing = "yes";
                                }),
                                (i.src = t[0].src);
                            })(r[s])
                          : (r[s].dataset.observing = "yes")));
                }
                for (var l = 0; l < a.length; l++) {
                  var d = a[l];
                  e.elementViewportIntersection(d) >= o &&
                    (n[d.dataset.i] = e.getTeaserCappingData(d));
                }
                e.prepareCappingData(n, "2"),
                  (e.monitorTimeout = setTimeout(arguments.callee, 1e3));
              })();
        }),
        (this.getTeaserImageDims = function (t) {
          if (t) {
            var n = t.querySelectorAll("img.mcimg");
            if (n.length > 0) return e.utils.getRect(n[0], !1);
          }
          return { width: 0, height: 0 };
        }),
        (this.getTeaserCappingData = function (t) {
          var n = e.utils.getRect(t, !0),
            i = e.getTeaserImageDims(t);
          return {
            width: Math.round(i.width),
            height: Math.round(i.height),
            atf: n.top < e.utils.getViewportSize().height,
            align: e.getTeaserAlign(n),
            desc: e.isTeaserElementVisible(t, "mcdesc"),
            price: e.isTeaserElementVisible(t, "mcprice"),
            domain: e.isTeaserElementVisible(t, "mcdomain"),
          };
        }),
        (this.prepareCappingData = function (t, n) {
          var i = [],
            o = [],
            r = [],
            a = [];
          for (var s in t) {
            var c = s;
            if (!e.shownBlocks[c]) {
              var l =
                t[s].width +
                "|" +
                t[s].height +
                "|" +
                ((t[s].desc ? 1 : 0) +
                  (t[s].price ? 2 : 0) +
                  (t[s].domain ? 4 : 0) +
                  (t[s].atf ? 8 : 0) +
                  ("right" == t[s].align ? 16 : 0) +
                  ("left" == t[s].align ? 32 : 0)) +
                "|";
              if (c && e.teaserData[c]) {
                e.shownBlocks[c] = 1;
                var d = e.teaserData[c].coopType;
                e.teaserData[c].ch &&
                  e.teaserData[c].ccid &&
                  e.teaserData[c].cdomain &&
                  (a = (r = e.prepareMultiCappingData(r, c, l, d, n)).counter)[
                    d
                  ][e.teaserData[c].cdomain] > 20 &&
                  (e.multiSendCappingData(r[d]), (r[d] = []), (a = [])),
                  (o = (i = e.prepareSingleCappingData(i, c, l, d, n)).counter)[
                    d
                  ] > 20 && (e.sendCappingData(i[d]), (i[d] = ""), (o[d] = 0));
                var u = e.teaserData[c].imp;
                for (var h in u) e.sendCustomCounter(u[h]);
                "w" === d && e.sspDoubleClickHash.push(c),
                  e.processHooks("afterPrepareCappingDataHooks", [c]);
              }
            }
          }
          for (var f in o) o[f] > 0 && e.sendCappingData(i[f]);
          for (var p = 0, m = Object.keys(a); p < m.length; p++) {
            var g = a[m[p]];
            Object.keys(a[g]).length > 0 && e.multiSendCappingData(r[g]);
          }
        }),
        (this.sensorsToJsFlags = function () {
          var t = 0;
          try {
            var n = e.VisData(!0);
            if (n) {
              if (!1 === n.extTf) return 3;
              1 === n.extVs && (t = 1),
                n.extHf && (t += 2),
                n.extWv < 0 ? (t += 12) : n.extWv < 3 && (t += n.extWv << 2),
                n.extTv < 0 ? (t += 48) : n.extTv < 3 && (t += n.extTv << 4),
                n.extMa < 0 ? (t += 192) : n.extMa < 3 && (t += n.extMa << 6),
                n.extCl > 0 && n.extCl < 3 && (t += n.extCl << 8),
                1 == n.extMw && (t += 1024),
                1 == n.extKp && (t += 2048),
                0 != n.extDg && (t += 4096),
                2 != n.extMa && 1 == n.extMw && n.extMwt < 1500 && (t += 8192),
                Number(n.extHft) === n.extHft &&
                  n.extHft >= 0 &&
                  n.extHft < 1500 &&
                  (!n.extWvt || n.extWvt < 1500) &&
                  (!n.extTvt || n.extTvt < 1500) &&
                  (t += 16384),
                n.extFt && (t += 32768),
                (t <<= 1);
            }
          } catch (e) {
            t = 1;
          }
          return t;
        }),
        (this.prepareMultiCappingData = function (t, n, i, o, r) {
          var a = e.teaserData[n].cdomain,
            s = e.teaserData[n].ch,
            c = e.teaserData[n].ccid,
            l = "pv=" + r;
          return (
            -1 == l.indexOf("extjs") &&
              (l += "&extjs=" + this.sensorsToJsFlags()),
            void 0 === t[o] &&
              ((t[o] = []),
              void 0 === t.counter && (t.counter = []),
              void 0 === t.counter[o] && (t.counter[o] = [])),
            void 0 === t[o][a] && ((t[o][a] = []), (t.counter[o][a] = 0)),
            void 0 === t[o][a][c] && (t[o][a][c] = ""),
            (l += "&v=" + i + s),
            (("0" == r || e.isFirstByType[o + c]) && e.isFirstByCid[o + c]) ||
              ((l += "&f" + o + "=1"),
              (e.isFirstByType[o + c] = 1),
              (e.isFirstByCid[o + c] = 1)),
            (t[o][a][c] += l),
            t.counter[o][a]++,
            t
          );
        }),
        (this.prepareSingleCappingData = function (t, n, i, o, r) {
          return (
            void 0 === t[o] &&
              ((t[o] = "pv=" + r), void 0 === t.counter && (t.counter = [])),
            void 0 === t.counter[o] && (t.counter[o] = 0),
            (t[o] += "&v=" + i + n),
            "0" == r ||
              e.isFirstByType[o] ||
              ((t[o] += "&f" + o + "=1"), (e.isFirstByType[o] = 1)),
            -1 == t[o].indexOf("extjs") &&
              (t[o] += "&extjs=" + this.sensorsToJsFlags()),
            t.counter[o]++,
            t
          );
        }),
        (this.multiSendCappingData = function (t) {
          for (var n in t)
            if (t.hasOwnProperty(n))
              for (var i in t[n])
                if (t[n].hasOwnProperty(i)) {
                  var o = t[n][i] + "&cid=" + i;
                  e.sendCappingData(o, n);
                }
        }),
        (this.sendCappingData = function (t, n) {
          var i = document.createElement("IMG"),
            o = t.search("&cid="),
            r = t.search("pv=0&") >= 0;
          if (((t += "&imgdim=1"), -1 != o)) t.substr(o + 5).split("&")[0];
          r
            ? "undefined" == typeof cid && (t += "&cid=" + e.id.toString())
            : ((void 0 === e.context._mgwcapping ||
                -1 == e.context._mgwcapping.indexOf(e.id.toString()) ||
                ("undefined" != typeof cid &&
                  -1 == e.context._mgwcapping.indexOf(cid.toString()))) &&
                (t = "f=1&" + t),
              (e.context._mgwcapping = e.context._mgwcapping || []),
              "undefined" == typeof cid
                ? ((t += "&cid=" + e.id.toString()),
                  e.context._mgwcapping.push(e.id.toString()))
                : e.context._mgwcapping.push(cid)),
            e.servicerData &&
              (e.servicerData.h2 && (t += "&h2=" + e.servicerData.h2),
              e.servicerData.rid && (t += "&rid=" + e.servicerData.rid),
              e.servicerData.tt && (t += "&tt=" + e.servicerData.tt),
              e.servicerData.ts && (t += "&ts=" + e.servicerData.ts),
              e.servicerData.psid && (t += "&psid=" + e.servicerData.psid));
          var a = e.getMostTopWindow();
          void 0 === a._mgPageImp505244
            ? ((a._mgPageImp505244 = !0), (t += "&pageImp=1"))
            : (t += "&pageImp=0");
          try {
            if (e.context.localStorage) {
              var s = e.context.localStorage.getItem("mgMuidn");
              "string" == typeof s && s.length > 0 && (t += "&muid=" + s);
            }
          } catch (e) {}
          var c = e.webProtocol + "//";
          (c += void 0 !== n ? n : "c.mgid.com"),
            (t += "&" + e.getCbusterParameter()),
            (t += "&tpl=" + e.templateId),
            (i.src = c + "/c?" + t),
            e.processHooks("afterSendCappingHooks");
        }),
        (this.elementViewportIntersection = function (t) {
          var n = e.utils.getRect(t, !0);
          for (var i in n) n.hasOwnProperty(i) && (n[i] = Math.floor(n[i]));
          var o = e.utils.getViewportSize(),
            r = e.utils.getScroll();
          (o.top = r.top),
            (o.bottom = r.top + o.height),
            (o.left = r.left),
            (o.right = r.left + o.width);
          var a = n.width * n.height;
          return a
            ? (Math.max(
                0,
                Math.min(n.right, o.right) - Math.max(n.left, o.left)
              ) *
                Math.max(
                  0,
                  Math.min(n.bottom, o.bottom) - Math.max(n.top, o.top)
                )) /
                a
            : 0;
        }),
        (this.getParentTeaserBlock = function (t) {
          for (var n = t; n != e.root && n != e.context; ) {
            if (n.className.indexOf("mgline") >= 0) return n;
            n = n.parentNode;
          }
          return null;
        }),
        (this.isTeaserElementVisible = function (e, t) {
          var n = e.getElementsByClassName(t);
          if (n.length > 0) {
            var i = n[0].getBoundingClientRect();
            return i.right - i != 0 && i.bottom - i.top != 0;
          }
          return !1;
        }),
        (this.getTeaserAlign = function (t) {
          var n = e.context.document.body.scrollWidth;
          return t.right < 0.3 * n
            ? "left"
            : t.left >= 0.7 * n
            ? "right"
            : "center";
        }),
        (this.sendCustomCounter = function (e) {
          document.createElement("img").src = e;
        });
    };
  },
  function (e, t) {
    window.MarketGidCSmartDoubleClickBlock762628 = function (e) {
      e.isDisabledDoubleClick = !1;
      var t = JSON.parse(e.getWidgetValue("doubleclickParameters", "null"));
      if (t) {
        var n = { undefined: -1, desktop: 1, mobile: 2, tablet: 3, smarttv: 4 },
          i = 0,
          o = e.getCurrentTimestamp(),
          r = [
            function (t) {
              return s(t, "device", n[e.deviceType] || "");
            },
            function (t) {
              return s(t, "browser", e.browserId);
            },
            function (t) {
              return s(t, "click_time", e.getCurrentTimestamp() - o);
            },
            function (t) {
              return s(t, "width", e.root.offsetWidth);
            },
            function (t) {
              return s(t, "height", e.root.offsetHeight);
            },
            function (t) {
              return s(t, "click_y", e.root.mouseY);
            },
            function (t) {
              return s(t, "click_x", e.root.mouseX);
            },
            function (t) {
              return s(t, "hw_ratio", e.root.offsetHeight / e.root.offsetWidth);
            },
            function (e, t) {
              return s(e, "borderTop", t.offsetY);
            },
            function (e, t) {
              return s(e, "borderLeft", t.offsetX);
            },
            function (e, t, n) {
              return s(e, "borderRight", n.width - t.offsetX);
            },
            function (e, t, n) {
              return s(e, "borderBottom", n.height - t.offsetY);
            },
            function (e) {
              return s(e, "research", 1);
            },
          ],
          a = function (e, t, n) {
            var i = 0,
              o = t.getBoundingClientRect();
            for (var a in r)
              if (r[a]) {
                var s = r[a](e, n, o);
                if (!1 === s) return !1;
                i += s;
              }
            return i / Object.keys(e).length;
          },
          s = function (e, t, n) {
            return e.hasOwnProperty(t)
              ? ((e[t].hasOwnProperty("value") && n === e[t].value) ||
                  !!(
                    e[t].hasOwnProperty("min") &&
                    n >= e[t].min &&
                    n <= e[t].max
                  )) &&
                  e[t].percent
              : 0;
          };
        (e.onSmartDoubleClickHandler = function (n, o) {
          var r = e.random(1, 100),
            s = (function (e, n) {
              for (var o in t)
                if (t[o]) {
                  var r = a(t[o], e, n);
                  if (!1 !== r) return (i = o), r;
                }
              return (i = 0), 0;
            })(n, o);
          return (
            (e.isDisabledDoubleClick = s < r),
            (e.doubleClickCheckId = e.isDisabledDoubleClick ? 0 : i),
            !0
          );
        }),
          (e.smartDoubleClickHook = function () {
            e.addClickHandler(
              e.clickHandlerList.onSmartDoubleClick.handler,
              e.clickHandlerList.onSmartDoubleClick.priority
            );
          }),
          e.afterInjectScriptHooks.push("smartDoubleClickHook");
      }
    };
  },
  function (e, t) {
    window.MarketGidCRejectBlock762628 = function (e) {
      (e.isInsertedRejectStyles = !1),
        (e.MarketGidReject = function () {
          for (
            var t = e.subnetDashboardDomains[e.getSubnetByMirror(20)],
              n = e.root.getElementsByClassName("mgline"),
              i = 0;
            i < n.length;
            i++
          )
            !(function (n) {
              if (!(n.className.indexOf("dsp") >= 0)) {
                for (
                  var i = n.getElementsByClassName("mcimg"), o = !1, r = 0;
                  r < i.length;
                  r++
                )
                  if ("DIV" == i[r].tagName) {
                    o = i[r];
                    break;
                  }
                if (o) {
                  var a = o.getElementsByClassName("close-informer"),
                    s = n.className.match(/teaser-([0-9]+)/);
                  if (null != s) {
                    var c = n.className.match(/type-(w|e|i)/);
                    if (null != c && "i" != c[1] && 0 == a.length) {
                      var l = t;
                      l += "/publisher/blocked";
                      var d = e.context.document.createElement("a"),
                        u = e.context.getComputedStyle(o);
                      (d.className = "close-informer"),
                        (d.href =
                          l +
                          "/teaser/" +
                          s[1] +
                          "/widget/" +
                          ("w" == c[1]
                            ? "57105166/type/goods"
                            : "0/type/news")),
                        (d.target = "_blank"),
                        (d.rel = "nofollow"),
                        (d.style.top = parseInt(u.borderTopWidth) + 3 + "px"),
                        (d.style.right =
                          parseInt(u.borderRightWidth) + 3 + "px"),
                        (o.style.position = "relative"),
                        o.appendChild(d);
                    }
                  }
                }
              }
            })(n[i]);
        }),
        (e.initRejectStyles = function () {
          if (!e.isInsertedRejectStyles) {
            e.addStyle(
              "reject",
              '\ndiv.mcimg a.close-informer {\nwidth: 14px;\nheight: 14px;\nbackground-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5NzI0ODBDMzY3ODcxMUU1OEM4RUU2RUJCOUREODIyQiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5NzI0ODBDNDY3ODcxMUU1OEM4RUU2RUJCOUREODIyQiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjk3MjQ4MEMxNjc4NzExRTU4QzhFRTZFQkI5REQ4MjJCIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjk3MjQ4MEMyNjc4NzExRTU4QzhFRTZFQkI5REQ4MjJCIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+uNcpEQAAAHxJREFUeNqckgEKwCAIRe3fYjfKc2zX6hydaLRbbDnGkLDIPggl/5lKIcbIRJRqbDSnUmOHE6LPm+CEfhj6lnN+o5WVh1VOm6xColCXc/cgLWYev9gaejnQojCab5RDzyDt6RantqoBaz5zq54ZywJ3CXjIwQGd8skfAQYALdQqftYulocAAAAASUVORK5CYIJ0ZW50Ij4NCiA8ZGl2IGNsYXNzPSJjb250ZW50LWNvbnRhaW5lciI+PGZpZWxkc2V0Pg0KICA8aDI+NTAyIC0gV2ViIHNlcnZlciByZWNlaXZlZCBhbiBpbnZhbGlkIHJlc3BvbnNlIHdoaWxlIGFjdGluZyBhcyBhIGdhdGV3YXkgb3IgcHJveHkgc2VydmVyLjwvaDI+DQogIDxoMz5UaGVyZSBpcyBhIHByb2JsZW0gd2l0aCB0aGUgcGFnZSB5b3UgYXJlIGxvb2tpbmcgZm9yLCBhbmQgaXQgY2Fubm90IGJlIGRpc3BsYXllZC4gV2hlbiB0aGUgV2ViIHNlcnZlciAod2hpbGUgYWN0aW5nIGFzIGEgZ2F0ZXdheSBvciBwcm94eSkgY29udGFjdGVkIHRoZSB1cHN0cmVhbSBjb250ZW50IHNlcnZlciwgaXQgcmVjZWl2ZWQgYW4gaW52YWxpZCByZXNwb25zZSBmcm9tIHRoZSBjb250ZW50IHNlcnZlci48L2gzPg0KIDwvZmllbGRzZXQ+PC9kaXY+DQo8L2Rpdj4NCjwvYm9keT4NCjwvaHRtbD4NCg==");\ndisplay: block;\nopacity: 0;\nposition: absolute;\nright: 3px;\ntop: 3px;\nz-index: 1;\ncursor: pointer;\n}\ndiv.mgline:hover a.close-informer {\nopacity: 0.7;\n-moz-transition: all 0.3s ease-out;\n-o-transition: all 0.3s ease-out;\n-webkit-transition: all 0.3s ease-out;\n-ms-transition: all 0.3s ease-out;\ntransition: all 0.3s ease-out;\n}\ndiv.mgline a.close-informer:hover {\nopacity: 1;\n-moz-transition: all 0.3s ease-out;\n-o-transition: all 0.3s ease-out;\n-webkit-transition: all 0.3s ease-out;\n-ms-transition: all 0.3s ease-out;\ntransition: all 0.3s ease-out;\n}\ndiv.mcimg {\nposition: relative;\ndisplay: inline-block;\n}\ndiv.image-with-price {\nposition: relative;\n}\n.mgline .image-container {\nwidth: auto;\nmargin: 0 auto;\nposition: relative;\n}'
            ),
              (e.isInsertedRejectStyles = !0);
          }
        }),
        e.beforeLoadNewsHooks.push("initRejectStyles");
    };
  },
  function (e, t, n) {
    window.MarketGidCCriteoBlock762628 = function (e) {
      e.afterLoadNewsHooks.push("initCriteoHandlers"),
        (e.initCriteoHandlers = function () {
          var t = "LoadCriteoAllPlaces" + e.id;
          "" !== e.uniqId && (t += "_" + e.uniqId),
            (e.context[t] = e.LoadCriteoAllPlaces);
        }),
        (e.LoadCriteoAllPlaces = function (t) {
          e.criteoNurl = t.l;
          var n = e.context.document.createElement("script");
          (e.criteoParams = t.pos),
            (n.type = "text/javascript"),
            (n.async = "async"),
            (n.src = "https://static.criteo.net/js/ld/publishertag.js");
          var i = e.context.document.getElementsByTagName("script")[0];
          i.parentNode.insertBefore(n, i),
            (e.context.Criteo = e.context.Criteo || {}),
            (e.context.Criteo.events = e.context.Criteo.events || []),
            e.context.Criteo.events.push(function () {
              var n = {
                placements: [
                  {
                    slotid: e.root.id,
                    zoneid: t.z,
                    publishersubid: 57105166,
                    nativeCallback: function (t) {
                      e.ProcessCriteo(t);
                    },
                  },
                ],
              };
              e.context.Criteo.Passback.RequestBids(n, 1500);
            }),
            e.context.Criteo.events.push(function () {
              e.context.Criteo.Passback.RenderAd({
                adUnit: e.root.id,
                passback: function (e) {},
              });
            });
        }),
        (e.ProcessCriteo = function (t) {
          var n;
          (e.countLoadBlocks = 0),
            (e.root.innerHTML = ""),
            e.addStyle("criteo", e.styles),
            (e.iteration = 1);
          var i = [],
            o = e.json,
            r = "";
          "advertiser" in t &&
            "domain" in t.advertiser &&
            (r = t.advertiser.domain);
          var a = t.products.length;
          for (n = 0; n < a; n++)
            (e.criteoPlacement = n),
              void 0 !== o[n] &&
                ((o[e.criteoPlacement][0] = r),
                (o[e.criteoPlacement][1] = n + 1),
                (o[e.criteoPlacement][3] = t.products[n].title),
                (o[e.criteoPlacement][4] = t.products[n].description),
                (o[e.criteoPlacement][7] = t.products[n].price),
                (o[e.criteoPlacement][8] = ""),
                (o[e.criteoPlacement][10].i =
                  e.webProtocol +
                  "//imggprx.mgid.com/i/resize?img=" +
                  encodeURIComponent(t.products[n].image.url) +
                  "&size=19"),
                (o[e.criteoPlacement][10].l =
                  e.criteoParams[n] +
                  "&u=" +
                  e.tox64String(t.products[n].click_url, !0)),
                (o[e.criteoPlacement][10].adc = []),
                i.push(e.teaserHashes[o[n].id]));
          for (e.MarketGidLoadNews(o), n = 0; n < a; n++)
            if (
              ((e.criteoPlacement = n),
              void 0 !== o[n] &&
                t.hasOwnProperty("privacy") &&
                t.privacy.hasOwnProperty("optout_click_url") &&
                t.privacy.hasOwnProperty("optout_image_url"))
            ) {
              var s = e.root
                  .getElementsByClassName("mgline")
                  [e.criteoPlacement].getElementsByClassName("mcimg")[0],
                c = e.context.document.createElement("DIV");
              (c.style.position = "absolute"),
                (c.style.zIndex = "100"),
                (c.style.left = "90%"),
                (c.style.top = "0");
              var l = e.context.document.createElement("A");
              l.setAttribute("href", t.privacy.optout_click_url),
                l.setAttribute("target", "_blank");
              var d = e.context.document.createElement("IMG");
              if (
                (d.setAttribute("src", t.privacy.optout_image_url),
                l.appendChild(d),
                c.appendChild(l),
                s.appendChild(c),
                t.hasOwnProperty("impression_pixels"))
              )
                for (var u in t.impression_pixels)
                  if (t.impression_pixels[u].hasOwnProperty("url")) {
                    var h = e.context.document.createElement("IMG");
                    (h.src = t.impression_pixels[u].url),
                      e.context.document.body.appendChild(h);
                  }
            }
          var f = e.context.document.createElement("IMG");
          (f.src = e.criteoNurl + "&ads=" + i.join(",")),
            e.context.document.body.appendChild(f);
        });
    };
  },
  function (e, t) {
    window.MarketGidCAmpRenderBlock762628 = function (e) {
      (e.ampResized = []),
        (e.ampRenderStart = function () {
          e.context.context.renderStart({
            width: e.precalcRect.width,
            height: e.precalcRect.height,
          });
        }),
        (e.ampResize = function () {
          setTimeout(function () {
            var t = e.root.getBoundingClientRect();
            e.context.context.requestResize(t.width, t.height).then(
              function () {
                (e.ampResizeDenied = !1),
                  e.updateSizeStatement(t.width, t.height);
              },
              function () {
                e.ampResizeDenied = !0;
              }
            );
          }, 100),
            void 0 === e.ampResizeInterval &&
              (e.ampResizeInterval = setInterval(function () {
                var t = e.root.getBoundingClientRect();
                void 0 !== e.ampResizeDenied && e.ampResizeDenied
                  ? e.context.context.requestResize(t.width, t.height)
                  : (Math.floor(t.width) === e.ampResized.width &&
                      Math.floor(t.height) === e.ampResized.height) ||
                    e.context.context.requestResize(t.width, t.height);
              }, 100));
        }),
        (e.isAmp = function () {
          return (
            (void 0 !== e.context.context &&
              void 0 !== e.context.context.data &&
              void 0 !== e.context.context.data.widget) ||
            (void 0 !== e.context.boundingClientRect762628 &&
              void 0 !== e.context.intersectionRect762628)
          );
        }),
        (e.updateSizeStatement = function (t, n) {
          (e.ampResized.width = t), (e.ampResized.height = n);
        }),
        e.isAmp() &&
          (e.afterInitHooks.push("ampRenderStart"),
          e.afterLoadNewsHooks.push("ampResize"));
    };
  },
  function (e, t) {
    window.MarketGidCInternalExchangeLoggerBlock762628 = function (e) {
      e.afterLoadNewsHooks.push("iExchangeLoggerInit"),
        (e.internalExchangeLoggerHandler = function (t) {
          var n = t.getAttribute("data-hash");
          if (e.teaserData[n] && "i" == e.teaserData[n].coopType) {
            var i = document.createElement("IMG"),
              o = "cid=" + e.id + "&tid=" + e.teaserData[n].id + "&h=" + n;
            void 0 !== e.servicerData.isBot &&
              (o += "&bot=" + e.servicerData.isBot),
              void 0 !== e.servicerData.tt && (o += "&tt=" + e.servicerData.tt),
              void 0 !== e.servicerData.ts && (o += "&ts=" + e.servicerData.ts),
              void 0 !== e.servicerData.psid &&
                (o += "&psid=" + e.servicerData.psid),
              void 0 !== e.servicerData.dt && (o += "&dt=" + e.servicerData.dt);
            var r =
              "//c.mgid.com/clie?" +
              (o +=
                "&ce=" +
                t.parentNode.tagName +
                ("." + e.extractClass(t.parentNode)));
            (i.src = e.webProtocol + r), (i.onerror = function () {});
          }
          return !0;
        }),
        (e.iExchangeLoggerInit = function () {
          e.addClickHandler(
            e.clickHandlerList.internalExchangeLogger.handler,
            e.clickHandlerList.internalExchangeLogger.priority
          );
        });
    };
  },
  function (e, t, n) {
    window.MarketGidCMgqBlock762628 = function (e) {
      (this.isLongCheck = !1),
        this.afterInitHooks.push("mgqInit"),
        (this.mgqWorker = function () {
          for (
            var t = e.context._mgq.length,
              n = e.context._mgq.slice(0),
              i = 0,
              o = 0;
            o < t;
            o++
          ) {
            var r = n[o];
            if ("function" == typeof e.context[r[0]]) {
              try {
                e.context[r[0]].apply(e.context, r.slice(1));
              } catch (t) {
                e.log("mgq error: ".concat(t.message));
              }
              e.context._mgq.splice(o - i, 1), i++;
            }
          }
          e.context._mgqi ||
            (e.context._mgqi = e.context.setInterval(function () {
              e.mgqWorker();
            }, 5)),
            e.isLongCheck ||
              (new Date().getTime() - e.context._mgqt > 1e4 &&
                ((e.isLongCheck = !0),
                e.context.clearInterval(e.context._mgqi),
                (e.context._mgqi = e.context.setInterval(function () {
                  e.mgqWorker();
                }, 100))));
        }),
        (this.mgqInit = function () {
          (e.context._mgq = e.context._mgq || []),
            void 0 === e.context._mgqp &&
              ((e.context._mgqp = e.mgqWorker),
              (e.context._mgqt = new Date().getTime()),
              e.mgqWorker());
        });
    };
  },
  function (e, t) {
    window.MarketGidCStylesheetsBlock762628 = function (e) {
      (e.stylesDom = {}),
        (e.isIE = "undefined" == typeof Proxy),
        (e.addStyle = function (t, n, i) {
          (t += "_" + e.uniqId),
            (!e.isIE && void 0 === i && t in e.stylesDom) ||
              ("" !==
                (n = (n = (n = (n = n.replace(
                  /((@media|@supports not) \([^(]*\) {)/g,
                  "$1}"
                )).replace(
                  /((?:^|}|,|;)\W*)((?:\w+)?\.(?:mc|mg|row)[\-\w]+)/g,
                  "$1" + e.getMainCssSelector() + " $2"
                )).replace(
                  /(((@media|@supports not) \([^(]*\) \{)\})/g,
                  "$2"
                )).replace(
                  /video-cdn\.(.+)\/mgPlayer/g,
                  e.currentSubnetDomain
                )) &&
                (e.isIE
                  ? e.injectStyle(n, t, i)
                  : (e.stylesDom[t] = { style: n, container: i })));
        }),
        (e.removeStyle = function (t) {
          (t += "_" + e.uniqId),
            !e.isIE && t in e.stylesDom
              ? delete e.stylesDom[t]
              : e.clearStyle(t);
        }),
        e.isIE ||
          (e.stylesDom = new Proxy(e.stylesDom, {
            set: function (t, n, i) {
              var o = i.container,
                r = i.style;
              return e.injectStyle(r, n, o), (t[n] = i), !0;
            },
            has: function (t, n) {
              return (
                (null !== e.root.querySelector("style#" + n) ||
                  void 0 === t[n]) &&
                void 0 !== t[n]
              );
            },
            deleteProperty: function (t, n) {
              return e.clearStyle(n), delete t[n], !0;
            },
          })),
        (e.injectStyle = function (t, n, i) {
          if (i) {
            var o = i;
            if (((o.className = "MarketGidC762628"), o.styleSheet))
              o.styleSheet.cssText = t;
            else {
              for (; o.firstChild; ) o.removeChild(o.firstChild);
              o.appendChild(e.context.document.createTextNode(t));
            }
          } else {
            var r = e.context.document.createElement("style");
            r.setAttribute("id", n),
              (r.className = "MarketGidC762628"),
              (r.type = "text/css"),
              (void 0 !== e.realRoot ? e.realRoot : e.root).appendChild(r),
              r.styleSheet
                ? (r.styleSheet.cssText = t)
                : r.appendChild(e.context.document.createTextNode(t));
          }
        }),
        (e.clearStyle = function (t) {
          var n = e.root.querySelector("#" + t);
          null !== n && n.parentNode.removeChild(n);
        });
    };
  },
  function (e, t, n) {
    window.MarketGidCCookieBlock762628 = function (e) {
      (this.storageName =
        "MarketGidStorage" +
        (this.context.MarketGidPageOffset
          ? this.context.MarketGidPageOffset
          : "")),
        (this.getCookieValue = function () {
          var e = this.context.document.cookie.match(
              new RegExp("(?:^|; )" + this.storageName + "=([^;]*)")
            ),
            t = {};
          if (e)
            try {
              t = JSON.parse(decodeURIComponent(e[1]));
            } catch (e) {}
          return t;
        }),
        (this.getCookie = function () {
          var e = this.getCookieValue();
          void 0 !== e.C762628
            ? (this.cookieStorage = e.C762628)
            : (this.cookieStorage = {}),
            void 0 !== e[0]
              ? (this.sharedCookieStorage = e[0])
              : (this.sharedCookieStorage = {});
        }),
        (this.setCookie = function () {
          var e = this.getCookieValue();
          (e.C762628 = this.cookieStorage), (e[0] = this.sharedCookieStorage);
          var t = encodeURIComponent(JSON.stringify(e));
          this.context.document.cookie = this.storageName + "=" + t + ";path=/";
        });
    };
  },
  function (e, t) {
    function n(e, t) {
      var n;
      if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
        if (
          Array.isArray(e) ||
          (n = (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return i(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return i(e, t);
          })(e)) ||
          (t && e && "number" == typeof e.length)
        ) {
          n && (e = n);
          var o = 0,
            r = function () {};
          return {
            s: r,
            n: function () {
              return o >= e.length ? { done: !0 } : { done: !1, value: e[o++] };
            },
            e: function (e) {
              throw e;
            },
            f: r,
          };
        }
        throw new TypeError(
          "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      var a,
        s = !0,
        c = !1;
      return {
        s: function () {
          n = e[Symbol.iterator]();
        },
        n: function () {
          var e = n.next();
          return (s = e.done), e;
        },
        e: function (e) {
          (c = !0), (a = e);
        },
        f: function () {
          try {
            s || null == n.return || n.return();
          } finally {
            if (c) throw a;
          }
        },
      };
    }
    function i(e, t) {
      (null == t || t > e.length) && (t = e.length);
      for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
      return i;
    }
    window.MarketGidCObserverBlock762628 = function (e) {
      e.context.IntersectionObserver &&
        (e.afterLoadNewsHooks.push("initWidgetObserver"),
        (e.initWidgetObserver = function () {
          (e.widgetObserver = new IntersectionObserver(
            function (t) {
              t.forEach(function (t) {
                var n = t.isIntersecting ? "shown" : "hidden";
                if (t.target == e.root)
                  e.log(
                    "Observer. Widget "
                      .concat(n, ". Ratio: ")
                      .concat(t.intersectionRatio)
                  ),
                    e.processHooks("observerWidgetHooks", [
                      t.isIntersecting,
                      t.intersectionRatio,
                    ]);
                else
                  for (var i = 0; i < e.observerTeasersHooks.length; i++) {
                    var o = 1,
                      r = 1;
                    try {
                      (o = e.teaserData[t.target.dataset.i].iteration),
                        (r = e.teaserData[t.target.dataset.i].page);
                    } catch (e) {}
                    e.log(
                      "Observer. Teaser["
                        .concat(r, ", ")
                        .concat(o, "] ")
                        .concat(n, ". Ratio: ")
                        .concat(t.intersectionRatio)
                    ),
                      e.processHooks("observerTeasersHooks", [
                        t.target,
                        t.isIntersecting,
                        t.intersectionRatio,
                        o,
                        r,
                      ]);
                  }
              });
            },
            { threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] }
          )),
            e.widgetObserver.observe(e.root);
          var t,
            i = n(e.root.getElementsByClassName("mgline"));
          try {
            for (i.s(); !(t = i.n()).done; ) {
              var o = t.value;
              e.widgetObserver.observe(o);
            }
          } catch (e) {
            i.e(e);
          } finally {
            i.f();
          }
        }));
    };
  },
  function (e, t, n) {
    window.MarketGidCSspDoubleClickBlock762628 = function (e) {
      e.afterSendCappingHooks.push("doubleClickCappingEvent"),
        e.afterInjectScriptHooks.push("servicerDoubleClick"),
        (e.doubleClickType = "ssp");
      (e.doubleclickStyles =
        ".MarketGidDButton762628{display:       inline-block;"),
        (e.doubleclickStyles +=
          'width:         80px;height:        80px;background-color: RGBA(0,0,0,0.4);border:        2px solid white;border-radius:        999px;color:         white !important;font:          normal 500 24px/80px "Sans", sans-serif;transform: scale3d(0.0001,0.0001,0.0001);'),
        (e.doubleclickStyles +=
          "text-align:    center;text-shadow:   none;position: absolute;text-decoration: none !important;transition:all 1s;}.MarketGidDLayout762628{height: 100%;width: 100% !important;position: absolute !important;top: 0px;left: 0px;background-color: rgba(0, 0, 0, 0.5);z-index: 99999;}#MarketGidComposite762628 .mgline {position:relative}"),
        e.addStyle("ssp_doubleclick", e.doubleclickStyles),
        (e.hashTimer = []),
        (e.servicerDoubleClickStatus = !1),
        (e.sspDoubleClickHook = function () {
          e.addClickHandler(
            e.clickHandlerList.sspDoubleClick.handler,
            e.clickHandlerList.sspDoubleClick.priority
          );
        }),
        (e.renderDoubleClick = function (t) {
          var n = e.context.document.createElement("div");
          n.classList.add("MarketGidDLayout762628");
          var i = t.closest(".mgline");
          null !== i && i.appendChild(n);
          var o = e.context.document.createElement("a");
          o.classList.add("MarketGidDButton762628");
          var r = t.getAttribute("href");
          ("string" == typeof r || r instanceof String) &&
            (r =
              r +
              (r.indexOf("?") >= 0 ? "&" : "?") +
              "wct=" +
              e.doubleClickType),
            (o.href = r),
            o.setAttribute("data-hash", t.getAttribute("data-hash"));
          var a = ((1 - 80 / i.offsetHeight) / 2) * 100,
            s = (i.offsetWidth / 80) * 0.98;
          (o.style.backgroundImage =
            "url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMzggMzgiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwb2x5Z29uIHBvaW50cz0iMTIsMjkuMSAyMi4yLDE5IDEyLjEsOC45IDE0LDcgMjYsMTkgMTQsMzEiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utb3BhY2l0eT0iMSI+PC9wb2x5Z29uPjwvc3ZnPg==)"),
            (o.style.backgroundPosition = "center"),
            (o.style.top = a + "%");
          var c = s > 1 ? ((1 - 80 / i.offsetWidth) / 2) * 100 : 0;
          (o.style.left = c + "%"),
            s < 1 &&
              ((o.style.transform = "scale3d(" + s + "," + s + "," + s + ")"),
              (o.style.webkitTransform =
                "scale3d(" + s + "," + s + "," + s + ")"),
              (o.style.transformOrigin = "left"),
              (o.style.webkitTransformOrigin = "left")),
            (o.target = "_blank"),
            n.appendChild(o),
            setTimeout(function () {
              (s = s < 1 ? s : 1),
                (o.style.transform = "scale3d(" + s + "," + s + "," + s + ")");
            }, 10),
            setTimeout(function () {
              n.parentNode.removeChild(n);
            }, 1e4);
        }),
        (e.doubleClickCappingEvent = function () {
          if (void 0 !== e.sspDoubleClickHash)
            for (var t = 0; t < e.sspDoubleClickHash.length; t++)
              void 0 === e.hashTimer[e.sspDoubleClickHash[t]] &&
                (e.hashTimer[e.sspDoubleClickHash[t]] = new Date().getTime());
        }),
        (e.sspDoubleClickHandler = function (t, n) {
          var i = t.getAttribute("data-hash"),
            o = new Date().getTime();
          return (i in e.hashTimer && o - e.hashTimer[i] > e.servicerData.dc) ||
            "w" !== e.teaserData[i].coopType ||
            "MarketGidDButton762628" === t.className
            ? (e.doubleClickHandler(t, !0), !0)
            : (e.doubleClickHandler(t),
              n.preventDefault(),
              e.renderDoubleClick(t),
              !1);
        }),
        (e.servicerDoubleClick = function () {
          e.addStyle("ssp_doubleclick", e.doubleclickStyles);
          var t = setInterval(function () {
            !0 !== e.servicerDoubleClickStatus
              ? void 0 !== e.servicerData.dc &&
                e.root.querySelectorAll("a[data-hash]").length > 0 &&
                (e.sspDoubleClickHook(), (e.servicerDoubleClickStatus = !0))
              : clearInterval(t);
          }, 100);
        });
    };
  },
  function (e, t, n) {
    window.MarketGidCSendDimensionsBlock762628 = function (e) {
      e.afterPreRenderNewsHooks.push("calcPreRenderingBlock"),
        (e.blankImage =
          "data:image/gif;base64,R0lGODlh7AFIAfAAAAAAAAAAACH5BAEAAAAALAAAAADsAUgBAAL+hI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1qt9yu9wsOi8fksvmMTqvX7Lb7DY/L5/S6/Y7P6/f8vv8PGCg4SFhoeIiYqLjI2Oj4CBkpOUlZaXmJmam5ydnp+QkaKjpKWmp6ipqqusra6voKGys7S1tre4ubq7vL2+v7CxwsPExcbHyMnKy8zNzs/AwdLT1NXW19jZ2tvc3d7f0NHi4+Tl5ufo6err7O3u7+Dh8vP09fb3+Pn6+/z9/v/w8woMCBBAsaPIgwocKFDBs6fAgxosSJFCtavIgxo8b+jRw7evwIMqTIkSRLmjyJMqXKlSxbunwJM6bMmTRr2ryJM6fOnTx7+vwJNKjQoUSLGj2KNKnSpUybOn0KNarUqVSrWr2KNavWrVy7ev0KNqzYsWTLmj2LNq3atWzbun0LN67cuXTr2r2LN6/evXz7+v0LOLDgwYQLGz6MOLHixYwbO34MObLkyZQrW76MObPmzZw7e/4MOrTo0aRLmz6NOrXq1axbu34NO7bs2bRr276NO7fu3bx7+/4NPLjw4cSLGz+OPLny5cybO38OPbr06dSrW7+OPbv27dy7e/8OPrz48eTLmz+PPr369ezbu38PP778+fTr27+PP7/+/fxR+/v/D2CAAg5IYIEGHohgggouyGCDDj4IYYQSTkhhhRZeiGGGGm7IYYcefghiiCKOSGKJJp6IYooqrshiiy6+CGOMMs5IY4023ohjjjruCFYBADs="),
        (e.precalcRect = {}),
        (e.calcPreRenderingBlock = function () {
          setTimeout(function () {
            "function" == typeof e.initIframeSizeChange &&
              e.initIframeSizeChange();
            var t = e.root.getBoundingClientRect();
            e.root.getElementsByClassName("mgbox")[0] &&
              (t = e.root
                .getElementsByClassName("mgbox")[0]
                .getBoundingClientRect()),
              (e.precalcRect.width = parseInt(
                t.width ? t.width : t.right - t.left
              )),
              (e.precalcRect.height = parseInt(
                t.height ? t.height : t.bottom - t.top
              )),
              (e.precalcRect.top = t.top),
              (e.precalcRect.bottom = t.bottom),
              (e.requestParams.w = "w=" + e.precalcRect.width),
              (e.requestParams.h = "h=" + e.precalcRect.height);
            var n = 0,
              o = e.root.getElementsByClassName("mgline"),
              r = "".split(",").map(Number) || [];
            for (i = 0; i < o.length; i++) {
              var a = i + 1,
                s = o[i].getBoundingClientRect(),
                c = o[i].getElementsByClassName("mcimg")[0];
              if (void 0 !== c) {
                var l = c.getBoundingClientRect();
                if (0 === l.height || 0 === l.width) {
                  var d = "#preRenderingBlock762628_" + e.uniqId;
                  null !== e.realRoot.querySelector(d) &&
                    ((e.realRoot.querySelector(d).style.clear = "both"),
                    (l = c.getBoundingClientRect()));
                }
                (0 !== l.height && 0 !== l.width) ||
                  (e.requestParams.wrongImageSize = "wrongImageSize=1"),
                  (e.preRenderImageSizes[a - 1] = {
                    height: l.height,
                    width: l.width,
                  });
              }
              if (-1 !== r.indexOf(a)) {
                var u = parseInt(s.height ? s.height : s.bottom - s.top),
                  h = parseInt(s.width ? s.width : s.right - s.left);
                (e.requestParams["p" + a + "_w"] = "p" + a + "_w=" + h),
                  (e.requestParams["p" + a + "_h"] = "p" + a + "_h=" + u),
                  (e.preRenderTeaserSizes[a - 1] = { height: u, width: h });
              }
              void 0 !== f && f < s.top && 0 === n && (n = i);
              var f = s.top;
            }
            0 == n && (n = o.length),
              (e.requestParams.cols = "cols=" + n),
              (e.fakeMode = 0),
              (e.root = e.realRoot),
              null !==
                e.root.querySelector("#preRenderingBlock762628_" + e.uniqId) &&
                e.root.removeChild(
                  e.root.querySelector("#preRenderingBlock762628_" + e.uniqId)
                ),
              (e.root.style.overflow = "visible"),
              (e.root.style.visibility = "visible"),
              (e.loadedType = ""),
              (e.currentSubnet = ""),
              (e.countLoadBlocks = e.countLoadBlocksContainer),
              (e.template = ""),
              (e.iteration = 1),
              "function" == typeof e.widgetPreloadCallback &&
                e.widgetPreloadCallback();
          }, 50);
        }),
        (e.updatePrecalcRect = function (t) {
          (e.loadedType = "goods"),
            (e.currentSubnet = "0"),
            (e.fakeMode = 1),
            (e.realRoot = e.root),
            (e.countLoadBlocksContainer = e.countLoadBlocks);
          var n = e.context.document.createElement("div");
          (n.id = "preRenderingBlock762628_" + e.uniqId),
            (n.style.visibility = "hidden");
          var i = e.context.document.createElement("div");
          (i.id = e.root.id),
            n.appendChild(i),
            e.root.appendChild(n),
            (e.root = i);
          var o = "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet",
            r = [];
          for (var a = 1; a <= 1; a++)
            r.push(["", a, "", o, o, "", "", "", "", "", { i: e.blankImage }]);
          e.MarketGidPrerenderNews(r),
            "function" == typeof t && (e.widgetPreloadCallback = t);
        });
    };
  },
  function (e, t, n) {
    var i = n(25),
      o = i.Config,
      r = i.AntiFraud;
    window.MarketGidCAntifraudBlock762628 = function (e) {
      e.afterLoadNewsHooks.push("hangAFListener"),
        e.afterInitHooks.push("initAntiFraud"),
        (e.allowReturnParams = !1);
      var t = new o({
        loggerEnabled: !1,
        logger: "MarketGidInfC762628",
        afShortEnabled: !0,
        modulePrefix: "MarketGidC",
        informerPrefix: "MarketGid",
        typePrefix: "C",
        disableCookies: !1,
        id: e.id,
        context: e.context,
        root: e.root,
        iframePlacementType: e.iframePlacementType,
        propertiesDom:
          '{"props":{"3":"window.close","13":"window.navigator.taintEnabled","16":"window.EventTarget.toString","18":"window.navigator.appName","20":"window.ApplicationCacheErrorEvent","22":"window.clearImmediate","23":"window.CryptoKey","25":"window.external.AddSearchProvider","32":"window.chrome.search","33":"window.clientInformation.vendor","40":"window.TouchEvent","43":"window.DeviceMotionEvent","46":"window.navigator.webkitGetGamepads","49":"window.Notification","56":"window.BeforeLoadEvent","57":"window.Entity","72":"window.AnalyserNode","74":"window.ArrayBufferView","76":"window.HTMLBaseFontElement","86":"window.self.SharedWorker","87":"window.Touch","91":"window.DOMException.ABORT_ERR","92":"window.Set","98":"window.document.createTouch","138":"window.NaN","139":"window.document.prepend","163":"window.SiteBoundCredential","165":"window.CanvasCaptureMediaStreamTrack"},"rules":{"contains":{"3":["({command:\\"window.close.self\\"})"],"18":["MicrosoftInternetExplorer"],"33":["GoogleInc."]},"not_empty":[13,16,18,20,22,23,25,32,40,43,46,49,56,57,76,86,87,91,92,98,138,139,163,165],"undefined":[25,46,72,74,87]}}',
        useFingerprint: !0,
      });
      (e.antifraud = new r(t)),
        (e.initAntiFraud = function () {
          e.antifraud.initialize();
        }),
        (e.getAntifraudParams = function (t, n) {
          return !1 === e.allowReturnParams
            ? ""
            : ((n = n || e.context.document.createElement("A")),
              (t = t || e.context.document.createEvent("MouseEvent")),
              e.antifraud.generateHash(t, n));
        }),
        (e.getFrPt = function () {
          return e.antifraud.getFnPt();
        }),
        (e.reWriteHref = function (t, n) {
          t || (t = e.context.event), t.target || (t.target = t.srcElement);
          var i = n["data-hash"] || n.getAttribute("data-hash");
          void 0 !== i &&
            "A" == n.tagName &&
            (n[e.hrefAttr] = e.prepareNiceHref(i, t, n));
        }),
        (e.linkMouseDown = function (t) {
          t || (t = e.context.event),
            t.target || (t.target = t.srcElement),
            (e.allowReturnParams = !0);
          var n = t.target;
          if (
            ("A" == n.tagName || null != (n = e.getParentLink(n))) &&
            n.hasAttribute("data-hash")
          ) {
            var i = 0;
            parseInt(n["data-rel"]) && (i = parseInt(n["data-rel"])),
              (i >> 1) & 8 || (n["data-rel"] = i + 16),
              e.reWriteHref(t, n);
          }
        }),
        (e.linkClick = function (t) {
          t || (t = e.context.event),
            t.target || (t.target = t.srcElement),
            (e.allowReturnParams = !0);
          var n = t.target;
          ("A" != n.tagName && null == (n = e.getParentLink(n))) ||
            (n.hasAttribute("data-hash") &&
              (e.reWriteHref(t, n),
              e.context.setTimeout(function () {
                (e.allowReturnParams = !1), e.reWriteHref(t, n);
              }, 100)));
        }),
        (e.linkMouseOver = function (t) {
          t || (t = e.context.event),
            t.target || (t.target = t.srcElement),
            (e.allowReturnParams = !0);
          var n = t.target;
          if (
            ("A" == n.tagName || null != (n = e.getParentLink(n))) &&
            n.hasAttribute("data-hash")
          ) {
            var i = 0;
            parseInt(n["data-rel"]) && (i = parseInt(n["data-rel"])),
              i % 2 != 1 && (n["data-rel"] = i + 1),
              e.reWriteHref(t, n);
          }
        }),
        (e.linkMouseMove = function (t) {
          t || (t = e.context.event),
            t.target || (t.target = t.srcElement),
            (e.allowReturnParams = !0);
          var n = t.target;
          if (
            ("A" == n.tagName || null != (n = e.getParentLink(n))) &&
            n.hasAttribute("data-hash")
          ) {
            var i = 0;
            parseInt(n["data-rel"]) && (i = parseInt(n["data-rel"])),
              (i >> 1) % 2 != 1 && (n["data-rel"] = i + 2),
              e.reWriteHref(t, n);
          }
        }),
        (e.linkTouchStart = function (t) {
          e.allowReturnParams = !0;
          var n = t.target;
          if (
            ("A" == n.tagName || null != (n = e.getParentLink(n))) &&
            n.hasAttribute("data-hash")
          ) {
            var i = 0;
            parseInt(n["data-rel"]) && (i = parseInt(n["data-rel"])),
              (i >> 1) & 2 || (n["data-rel"] = i + 4),
              e.reWriteHref(t, n);
          }
        }),
        (e.linkTouchEnd = function (t) {
          t || (t = e.context.event),
            t.target || (t.target = t.srcElement),
            (e.allowReturnParams = !0);
          var n = t.target;
          if (
            ("A" == n.tagName || null != (n = e.getParentLink(n))) &&
            n.hasAttribute("data-hash")
          ) {
            var i = 0;
            parseInt(n["data-rel"]) && (i = parseInt(n["data-rel"])),
              (i >> 1) & 4 || (n["data-rel"] = i + 8),
              e.reWriteHref(t, n);
          }
        }),
        (e.fixTimeImageLoaded = function () {
          e.afImgLoaded || (e.afImgLoaded = new Date().getTime());
        }),
        (e.getQueryParam = function (e, t) {
          for (
            var n = "", i = e.search.substring(1).split("&"), o = 0;
            o < i.length;
            o++
          ) {
            var r = i[o].split("=");
            if (r[0] === t) {
              n = decodeURIComponent(r[1]);
              break;
            }
          }
          return n;
        }),
        (e.hangAFListener = function (t) {
          void 0 === t && (t = e.root),
            e.addEvent(t, "mousedown", e.linkMouseDown),
            e.addEvent(t, "mouseup", e.linkClick),
            e.addEvent(t, "mouseover", e.linkMouseOver),
            e.addEvent(t, "mousemove", e.linkMouseMove),
            e.addEvent(t, "touchstart", e.linkTouchStart),
            e.addEvent(t, "touchend", e.linkTouchEnd),
            e.antifraud.setWidgetEvents();
        });
    };
  },
  function (module, exports) {
    module.exports = (function (e) {
      function t(i) {
        if (n[i]) return n[i].exports;
        var o = (n[i] = { i: i, l: !1, exports: {} });
        return e[i].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
      }
      var n = {};
      return (
        (t.m = e),
        (t.c = n),
        (t.d = function (e, n, i) {
          t.o(e, n) || Object.defineProperty(e, n, { enumerable: !0, get: i });
        }),
        (t.r = function (e) {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (t.t = function (e, n) {
          if ((1 & n && (e = t(e)), 8 & n)) return e;
          if (4 & n && "object" == typeof e && e && e.__esModule) return e;
          var i = Object.create(null);
          if (
            (t.r(i),
            Object.defineProperty(i, "default", { enumerable: !0, value: e }),
            2 & n && "string" != typeof e)
          )
            for (var o in e)
              t.d(
                i,
                o,
                function (t) {
                  return e[t];
                }.bind(null, o)
              );
          return i;
        }),
        (t.n = function (e) {
          var n =
            e && e.__esModule
              ? function () {
                  return e.default;
                }
              : function () {
                  return e;
                };
          return t.d(n, "a", n), n;
        }),
        (t.o = function (e, t) {
          return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (t.p = ""),
        t((t.s = 4))
      );
    })([
      function (e, t, n) {
        "use strict";
        function i(e) {
          if (null == e || isNaN(e)) return "";
          for (
            var t = parseInt(e, 10).toString(8),
              n = Math.ceil(t.length / 2),
              i = "",
              o = 0;
            o < n;
            o++
          )
            i += a(t.substr(2 * o, 2));
          return i;
        }
        function o(e) {
          (e = e.toString()), (e = unescape(encodeURIComponent(e)));
          for (
            var t,
              n,
              i,
              o,
              r,
              a,
              s,
              c =
                "ABCDEFGHIJKLMNOPQR$TUVWXYZabcde*ghijklmnopqrstuvwxyz0123456789+/=",
              l = "",
              d = 0;
            d < e.length;

          )
            64,
              (o = (t = e.charCodeAt(d++)) >> 2),
              (r = ((3 & t) << 4) | ((n = e.charCodeAt(d++)) >> 4)),
              (i = e.charCodeAt(d++)),
              (a = isNaN(n) ? 64 : ((15 & n) << 2) | (i >> 6)),
              (s = isNaN(i) ? 64 : 63 & i),
              (l += c.charAt(o) + c.charAt(r) + c.charAt(a) + c.charAt(s));
          return l;
        }
        function r(e) {
          return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcde.ghijklmnopqrstuv0123456789wxyz-_".substr(
            e,
            1
          );
        }
        function a(e) {
          return {
            "00": "A",
            "01": "B",
            "02": "C",
            "03": "D",
            "04": "E",
            "05": "F",
            "06": "G",
            "07": "H",
            10: "I",
            11: "J",
            12: "K",
            13: "L",
            14: "M",
            15: "N",
            16: "O",
            17: "P",
            20: "Q",
            21: "R",
            22: "S",
            23: "T",
            24: "U",
            25: "V",
            26: "W",
            27: "X",
            30: "Y",
            31: "Z",
            32: "a",
            33: "b",
            34: "c",
            35: "d",
            36: "e",
            37: ".",
            40: "g",
            41: "h",
            42: "i",
            43: "j",
            44: "k",
            45: "l",
            46: "m",
            47: "n",
            50: "o",
            51: "p",
            52: "q",
            53: "r",
            54: "s",
            55: "t",
            56: "u",
            57: "v",
            60: "0",
            61: "1",
            62: "2",
            63: "3",
            64: "4",
            65: "5",
            66: "6",
            67: "7",
            70: "8",
            71: "9",
            72: "w",
            73: "x",
            74: "y",
            75: "z",
            76: "-",
            77: "_",
            0: "!",
            1: "*",
            2: ";",
            3: ":",
            4: "=",
            5: "+",
            6: "$",
            7: "~",
          }[e];
        }
        function s(e, t) {
          var n =
              !!(2 < arguments.length && void 0 !== arguments[2]) &&
              arguments[2],
            i = e.length;
          if (i <= t) return e;
          var o = n ? i - t : 0;
          return e.substr(o, t);
        }
        function c(e, t, n) {
          e.addEventListener
            ? e.addEventListener(t, n, !1)
            : e.attachEvent("on" + t, n);
        }
        function l(e, t, n) {
          e.removeEventListener
            ? e.removeEventListener(t, n, !1)
            : e.detachEvent("on" + t, n);
        }
        n.d(t, "b", function () {
          return i;
        }),
          n.d(t, "c", function () {
            return r;
          }),
          n.d(t, "f", function () {
            return o;
          }),
          n.d(t, "e", function () {
            return s;
          }),
          n.d(t, "a", function () {
            return c;
          }),
          n.d(t, "d", function () {
            return l;
          });
      },
      function (e, t, n) {
        var i, o;
        !(function (r, a, s) {
          "use strict";
          "undefined" != typeof window && n(3)
            ? void 0 ===
                (o = "function" == typeof (i = s) ? i.call(t, n, t, e) : i) ||
              (e.exports = o)
            : e.exports
            ? (e.exports = s())
            : a.exports
            ? (a.exports = s())
            : (a.FrPt = s());
        })(0, this, function () {
          "use strict";
          void 0 === Array.isArray &&
            (Array.isArray = function (e) {
              return "[object Array]" === Object.prototype.toString.call(e);
            });
          var e = function (e, t) {
              (e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]]),
                (t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]]);
              var n = [0, 0, 0, 0];
              return (
                (n[3] += e[3] + t[3]),
                (n[2] += n[3] >>> 16),
                (n[3] &= 65535),
                (n[2] += e[2] + t[2]),
                (n[1] += n[2] >>> 16),
                (n[2] &= 65535),
                (n[1] += e[1] + t[1]),
                (n[0] += n[1] >>> 16),
                (n[1] &= 65535),
                (n[0] += e[0] + t[0]),
                (n[0] &= 65535),
                [(n[0] << 16) | n[1], (n[2] << 16) | n[3]]
              );
            },
            t = function (e, t) {
              (e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]]),
                (t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]]);
              var n = [0, 0, 0, 0];
              return (
                (n[3] += e[3] * t[3]),
                (n[2] += n[3] >>> 16),
                (n[3] &= 65535),
                (n[2] += e[2] * t[3]),
                (n[1] += n[2] >>> 16),
                (n[2] &= 65535),
                (n[2] += e[3] * t[2]),
                (n[1] += n[2] >>> 16),
                (n[2] &= 65535),
                (n[1] += e[1] * t[3]),
                (n[0] += n[1] >>> 16),
                (n[1] &= 65535),
                (n[1] += e[2] * t[2]),
                (n[0] += n[1] >>> 16),
                (n[1] &= 65535),
                (n[1] += e[3] * t[1]),
                (n[0] += n[1] >>> 16),
                (n[1] &= 65535),
                (n[0] += e[0] * t[3] + e[1] * t[2] + e[2] * t[1] + e[3] * t[0]),
                (n[0] &= 65535),
                [(n[0] << 16) | n[1], (n[2] << 16) | n[3]]
              );
            },
            n = function (e, t) {
              return 32 == (t %= 64)
                ? [e[1], e[0]]
                : 32 > t
                ? [
                    (e[0] << t) | (e[1] >>> (32 - t)),
                    (e[1] << t) | (e[0] >>> (32 - t)),
                  ]
                : ((t -= 32),
                  [
                    (e[1] << t) | (e[0] >>> (32 - t)),
                    (e[0] << t) | (e[1] >>> (32 - t)),
                  ]);
            },
            i = function (e, t) {
              return 0 == (t %= 64)
                ? e
                : 32 > t
                ? [(e[0] << t) | (e[1] >>> (32 - t)), e[1] << t]
                : [e[1] << (t - 32), 0];
            },
            o = function (e, t) {
              return [e[0] ^ t[0], e[1] ^ t[1]];
            },
            r = function (e) {
              return (
                (e = o(e, [0, e[0] >>> 1])),
                (e = t(e, [4283543511, 3981806797])),
                (e = o(e, [0, e[0] >>> 1])),
                (e = t(e, [3301882366, 444984403])),
                o(e, [0, e[0] >>> 1])
              );
            },
            a = function (a, s) {
              s = s || 0;
              for (
                var c = (a = a || "").length % 16,
                  l = a.length - c,
                  d = [0, s],
                  u = [0, s],
                  h = [0, 0],
                  f = [0, 0],
                  p = [2277735313, 289559509],
                  m = [1291169091, 658871167],
                  g = 0;
                g < l;
                g += 16
              )
                (h = [
                  (255 & a.charCodeAt(g + 4)) |
                    ((255 & a.charCodeAt(g + 5)) << 8) |
                    ((255 & a.charCodeAt(g + 6)) << 16) |
                    ((255 & a.charCodeAt(g + 7)) << 24),
                  (255 & a.charCodeAt(g)) |
                    ((255 & a.charCodeAt(g + 1)) << 8) |
                    ((255 & a.charCodeAt(g + 2)) << 16) |
                    ((255 & a.charCodeAt(g + 3)) << 24),
                ]),
                  (f = [
                    (255 & a.charCodeAt(g + 12)) |
                      ((255 & a.charCodeAt(g + 13)) << 8) |
                      ((255 & a.charCodeAt(g + 14)) << 16) |
                      ((255 & a.charCodeAt(g + 15)) << 24),
                    (255 & a.charCodeAt(g + 8)) |
                      ((255 & a.charCodeAt(g + 9)) << 8) |
                      ((255 & a.charCodeAt(g + 10)) << 16) |
                      ((255 & a.charCodeAt(g + 11)) << 24),
                  ]),
                  (h = t(h, p)),
                  (h = n(h, 31)),
                  (h = t(h, m)),
                  (d = o(d, h)),
                  (d = n(d, 27)),
                  (d = e(d, u)),
                  (d = e(t(d, [0, 5]), [0, 1390208809])),
                  (f = t(f, m)),
                  (f = n(f, 33)),
                  (f = t(f, p)),
                  (u = o(u, f)),
                  (u = n(u, 31)),
                  (u = e(u, d)),
                  (u = e(t(u, [0, 5]), [0, 944331445]));
              switch (((h = [0, 0]), (f = [0, 0]), c)) {
                case 15:
                  f = o(f, i([0, a.charCodeAt(g + 14)], 48));
                case 14:
                  f = o(f, i([0, a.charCodeAt(g + 13)], 40));
                case 13:
                  f = o(f, i([0, a.charCodeAt(g + 12)], 32));
                case 12:
                  f = o(f, i([0, a.charCodeAt(g + 11)], 24));
                case 11:
                  f = o(f, i([0, a.charCodeAt(g + 10)], 16));
                case 10:
                  f = o(f, i([0, a.charCodeAt(g + 9)], 8));
                case 9:
                  (f = o(f, [0, a.charCodeAt(g + 8)])),
                    (f = t(f, m)),
                    (f = n(f, 33)),
                    (f = t(f, p)),
                    (u = o(u, f));
                case 8:
                  h = o(h, i([0, a.charCodeAt(g + 7)], 56));
                case 7:
                  h = o(h, i([0, a.charCodeAt(g + 6)], 48));
                case 6:
                  h = o(h, i([0, a.charCodeAt(g + 5)], 40));
                case 5:
                  h = o(h, i([0, a.charCodeAt(g + 4)], 32));
                case 4:
                  h = o(h, i([0, a.charCodeAt(g + 3)], 24));
                case 3:
                  h = o(h, i([0, a.charCodeAt(g + 2)], 16));
                case 2:
                  h = o(h, i([0, a.charCodeAt(g + 1)], 8));
                case 1:
                  (h = o(h, [0, a.charCodeAt(g)])),
                    (h = t(h, p)),
                    (h = n(h, 31)),
                    (h = t(h, m)),
                    (d = o(d, h));
              }
              return (
                (d = o(d, [0, a.length])),
                (u = o(u, [0, a.length])),
                (d = e(d, u)),
                (u = e(u, d)),
                (d = r(d)),
                (u = r(u)),
                (d = e(d, u)),
                (u = e(u, d)),
                ("00000000" + (d[0] >>> 0).toString(16)).slice(-8) +
                  ("00000000" + (d[1] >>> 0).toString(16)).slice(-8) +
                  ("00000000" + (u[0] >>> 0).toString(16)).slice(-8) +
                  ("00000000" + (u[1] >>> 0).toString(16)).slice(-8)
              );
            },
            s = {
              preprocessor: null,
              audio: { timeout: 1e3, excludeIOS11: !0 },
              fonts: {
                swfContainerId: "fingerprintjs2",
                swfPath: "flash/compiled/FontList.swf",
                userDefinedFonts: [],
                extendedJsFonts: !1,
              },
              screen: { detectScreenOrientation: !0 },
              plugins: { sortPluginsFor: [/palemoon/i], excludeIE: !1 },
              extraComponents: [],
              excludes: {
                enumerateDevices: !0,
                pixelRatio: !0,
                doNotTrack: !0,
                fontsFlash: !0,
              },
              NOT_AVAILABLE: "not available",
              ERROR: "error",
              EXCLUDED: "excluded",
            },
            c = function (e, t) {
              if (
                Array.prototype.forEach &&
                e.forEach === Array.prototype.forEach
              )
                e.forEach(t);
              else if (e.length === +e.length)
                for (var n = 0, i = e.length; n < i; n++) t(e[n], n, e);
              else for (var o in e) e.hasOwnProperty(o) && t(e[o], o, e);
            },
            l = function (e, t) {
              var n = [];
              return null == e
                ? n
                : Array.prototype.map && e.map === Array.prototype.map
                ? e.map(t)
                : (c(e, function (e, i, o) {
                    n.push(t(e, i, o));
                  }),
                  n);
            },
            d = function (e) {
              if (null == navigator.plugins) return e.NOT_AVAILABLE;
              for (var t = [], n = 0, i = navigator.plugins.length; n < i; n++)
                navigator.plugins[n] && t.push(navigator.plugins[n]);
              return (
                u(e) &&
                  (t = t.sort(function (e, t) {
                    return e.name > t.name ? 1 : e.name < t.name ? -1 : 0;
                  })),
                l(t, function (e) {
                  var t = l(e, function (e) {
                    return [e.type, e.suffixes];
                  });
                  return [e.name, e.description, t];
                })
              );
            },
            u = function (e) {
              for (
                var t, n = !1, i = 0, o = e.plugins.sortPluginsFor.length;
                i < o;
                i++
              )
                if (
                  ((t = e.plugins.sortPluginsFor[i]),
                  navigator.userAgent.match(t))
                ) {
                  n = !0;
                  break;
                }
              return n;
            },
            h = function () {
              var e = document.createElement("canvas");
              return !(!e.getContext || !e.getContext("2d"));
            },
            f = function () {
              var e = document.createElement("canvas"),
                t = null;
              try {
                t = e.getContext("webgl") || e.getContext("experimental-webgl");
              } catch (t) {}
              return t || (t = null), t;
            },
            p = function (e) {
              var t = e.getExtension("WEBGL_lose_context");
              null != t && t.loseContext();
            },
            m = [
              {
                key: "userAgent",
                getData: function (e) {
                  e(navigator.userAgent);
                },
              },
              {
                key: "webdriver",
                getData: function (e, t) {
                  e(
                    null == navigator.webdriver
                      ? t.NOT_AVAILABLE
                      : navigator.webdriver
                  );
                },
              },
              {
                key: "language",
                getData: function (e, t) {
                  e(
                    navigator.language ||
                      navigator.userLanguage ||
                      navigator.browserLanguage ||
                      navigator.systemLanguage ||
                      t.NOT_AVAILABLE
                  );
                },
              },
              {
                key: "colorDepth",
                getData: function (e, t) {
                  e(window.screen.colorDepth || t.NOT_AVAILABLE);
                },
              },
              {
                key: "deviceMemory",
                getData: function (e, t) {
                  e(navigator.deviceMemory || t.NOT_AVAILABLE);
                },
              },
              {
                key: "pixelRatio",
                getData: function (e, t) {
                  e(window.devicePixelRatio || t.NOT_AVAILABLE);
                },
              },
              {
                key: "hardwareConcurrency",
                getData: function (e, t) {
                  e(
                    (function (e) {
                      return navigator.hardwareConcurrency
                        ? navigator.hardwareConcurrency
                        : e.NOT_AVAILABLE;
                    })(t)
                  );
                },
              },
              {
                key: "screenResolution",
                getData: function (e, t) {
                  e(
                    (function (e) {
                      var t = [window.screen.width, window.screen.height];
                      return (
                        e.screen.detectScreenOrientation && t.sort().reverse(),
                        t
                      );
                    })(t)
                  );
                },
              },
              {
                key: "availableScreenResolution",
                getData: function (e, t) {
                  e(
                    (function (e) {
                      if (
                        window.screen.availWidth &&
                        window.screen.availHeight
                      ) {
                        var t = [
                          window.screen.availHeight,
                          window.screen.availWidth,
                        ];
                        return (
                          e.screen.detectScreenOrientation &&
                            t.sort().reverse(),
                          t
                        );
                      }
                      return e.NOT_AVAILABLE;
                    })(t)
                  );
                },
              },
              {
                key: "timezoneOffset",
                getData: function (e) {
                  e(new Date().getTimezoneOffset());
                },
              },
              {
                key: "timezone",
                getData: function (e, t) {
                  return window.Intl && window.Intl.DateTimeFormat
                    ? void e(
                        new window.Intl.DateTimeFormat().resolvedOptions()
                          .timeZone
                      )
                    : void e(t.NOT_AVAILABLE);
                },
              },
              {
                key: "sessionStorage",
                getData: function (e, t) {
                  e(
                    (function (e) {
                      try {
                        return !!window.sessionStorage;
                      } catch (t) {
                        return e.ERROR;
                      }
                    })(t)
                  );
                },
              },
              {
                key: "localStorage",
                getData: function (e, t) {
                  e(
                    (function (e) {
                      try {
                        return !!window.localStorage;
                      } catch (t) {
                        return e.ERROR;
                      }
                    })(t)
                  );
                },
              },
              {
                key: "indexedDb",
                getData: function (e, t) {
                  e(
                    (function (e) {
                      try {
                        return !!window.indexedDB;
                      } catch (t) {
                        return e.ERROR;
                      }
                    })(t)
                  );
                },
              },
              {
                key: "addBehavior",
                getData: function (e) {
                  e(!(!document.body || !document.body.addBehavior));
                },
              },
              {
                key: "openDatabase",
                getData: function (e) {
                  e(!!window.openDatabase);
                },
              },
              {
                key: "cpuClass",
                getData: function (e, t) {
                  e(
                    (function (e) {
                      return navigator.cpuClass || e.NOT_AVAILABLE;
                    })(t)
                  );
                },
              },
              {
                key: "platform",
                getData: function (e, t) {
                  e(
                    (function (e) {
                      return navigator.platform
                        ? navigator.platform
                        : e.NOT_AVAILABLE;
                    })(t)
                  );
                },
              },
              {
                key: "doNotTrack",
                getData: function (e, t) {
                  e(
                    (function (e) {
                      return navigator.doNotTrack
                        ? navigator.doNotTrack
                        : navigator.msDoNotTrack
                        ? navigator.msDoNotTrack
                        : window.doNotTrack
                        ? window.doNotTrack
                        : e.NOT_AVAILABLE;
                    })(t)
                  );
                },
              },
              {
                key: "plugins",
                getData: function (e, t) {
                  "Microsoft Internet Explorer" === navigator.appName ||
                  ("Netscape" === navigator.appName &&
                    /Trident/.test(navigator.userAgent))
                    ? t.plugins.excludeIE
                      ? e(t.EXCLUDED)
                      : e(
                          (function (e) {
                            var t = [];
                            return (
                              (Object.getOwnPropertyDescriptor &&
                                Object.getOwnPropertyDescriptor(
                                  window,
                                  "ActiveXObject"
                                )) ||
                              "ActiveXObject" in window
                                ? (t = l(
                                    [
                                      "AcroPDF.PDF",
                                      "Adodb.Stream",
                                      "AgControl.AgControl",
                                      "DevalVRXCtrl.DevalVRXCtrl.1",
                                      "MacromediaFlashPaper.MacromediaFlashPaper",
                                      "Msxml2.DOMDocument",
                                      "Msxml2.XMLHTTP",
                                      "PDF.PdfCtrl",
                                      "QuickTime.QuickTime",
                                      "QuickTimeCheckObject.QuickTimeCheck.1",
                                      "RealPlayer",
                                      "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)",
                                      "RealVideo.RealVideo(tm) ActiveX Control (32-bit)",
                                      "Scripting.Dictionary",
                                      "SWCtl.SWCtl",
                                      "Shell.UIHelper",
                                      "ShockwaveFlash.ShockwaveFlash",
                                      "Skype.Detection",
                                      "TDCCtl.TDCCtl",
                                      "WMPlayer.OCX",
                                      "rmocx.RealPlayer G2 Control",
                                      "rmocx.RealPlayer G2 Control.1",
                                    ],
                                    function (t) {
                                      try {
                                        return new window.ActiveXObject(t), t;
                                      } catch (t) {
                                        return e.ERROR;
                                      }
                                    }
                                  ))
                                : t.push(e.NOT_AVAILABLE),
                              navigator.plugins && (t = t.concat(d(e))),
                              t
                            );
                          })(t)
                        )
                    : e(d(t));
                },
              },
              {
                key: "canvas",
                getData: function (e, t) {
                  return h()
                    ? void e(
                        (function (e) {
                          var t = Math.PI,
                            n = [],
                            i = document.createElement("canvas");
                          (i.width = 2e3),
                            (i.height = 200),
                            (i.style.display = "inline");
                          var o = i.getContext("2d");
                          return (
                            o.rect(0, 0, 10, 10),
                            o.rect(2, 2, 6, 6),
                            n.push(
                              "canvas winding:" +
                                (!1 === o.isPointInPath(5, 5, "evenodd")
                                  ? "yes"
                                  : "no")
                            ),
                            (o.textBaseline = "alphabetic"),
                            (o.fillStyle = "#f60"),
                            o.fillRect(125, 1, 62, 20),
                            (o.fillStyle = "#069"),
                            (o.font = e.dontUseFakeFontInCanvas
                              ? "11pt Arial"
                              : "11pt no-real-font-123"),
                            o.fillText(
                              "Cwm fjordbank glyphs vext quiz, ðŸ˜ƒ",
                              2,
                              15
                            ),
                            (o.fillStyle = "rgba(102, 204, 0, 0.2)"),
                            (o.font = "18pt Arial"),
                            o.fillText(
                              "Cwm fjordbank glyphs vext quiz, ðŸ˜ƒ",
                              4,
                              45
                            ),
                            (o.globalCompositeOperation = "multiply"),
                            (o.fillStyle = "rgb(255,0,255)"),
                            o.beginPath(),
                            o.arc(50, 50, 50, 0, 2 * t, !0),
                            o.closePath(),
                            o.fill(),
                            (o.fillStyle = "rgb(0,255,255)"),
                            o.beginPath(),
                            o.arc(100, 50, 50, 0, 2 * t, !0),
                            o.closePath(),
                            o.fill(),
                            (o.fillStyle = "rgb(255,255,0)"),
                            o.beginPath(),
                            o.arc(75, 100, 50, 0, 2 * t, !0),
                            o.closePath(),
                            o.fill(),
                            (o.fillStyle = "rgb(255,0,255)"),
                            o.arc(75, 75, 75, 0, 2 * t, !0),
                            o.arc(75, 75, 25, 0, 2 * t, !0),
                            o.fill("evenodd"),
                            i.toDataURL && n.push("canvas fp:" + i.toDataURL()),
                            n
                          );
                        })(t)
                      )
                    : void e(t.NOT_AVAILABLE);
                },
              },
              {
                key: "webglVendorAndRenderer",
                getData: function (e) {
                  return (function () {
                    if (!h()) return !1;
                    var e = f(),
                      t = !!window.WebGLRenderingContext && !!e;
                    return p(e), t;
                  })()
                    ? void e(
                        (function () {
                          try {
                            var e = f(),
                              t = e.getExtension("WEBGL_debug_renderer_info"),
                              n =
                                e.getParameter(t.UNMASKED_VENDOR_WEBGL) +
                                "~" +
                                e.getParameter(t.UNMASKED_RENDERER_WEBGL);
                            return p(e), n;
                          } catch (t) {
                            return null;
                          }
                        })()
                      )
                    : void e();
                },
              },
              {
                key: "adBlock",
                getData: function (e) {
                  e(
                    (function () {
                      var e = document.createElement("div");
                      (e.innerHTML = "&nbsp;"), (e.className = "adsbox");
                      var t = !1;
                      try {
                        document.body.appendChild(e),
                          (t =
                            0 ===
                            document.getElementsByClassName("adsbox")[0]
                              .offsetHeight),
                          document.body.removeChild(e);
                      } catch (e) {
                        t = !1;
                      }
                      return t;
                    })()
                  );
                },
              },
              {
                key: "hasLiedLanguages",
                getData: function (e) {
                  e(
                    (function () {
                      if (void 0 !== navigator.languages)
                        try {
                          if (
                            navigator.languages[0].substr(0, 2) !==
                            navigator.language.substr(0, 2)
                          )
                            return !0;
                        } catch (e) {
                          return !0;
                        }
                      return !1;
                    })()
                  );
                },
              },
              {
                key: "hasLiedResolution",
                getData: function (e) {
                  e(
                    window.screen.width < window.screen.availWidth ||
                      window.screen.height < window.screen.availHeight
                  );
                },
              },
              {
                key: "hasLiedOs",
                getData: function (e) {
                  e(
                    (function () {
                      var e,
                        t = navigator.userAgent.toLowerCase(),
                        n = navigator.oscpu,
                        i = navigator.platform.toLowerCase();
                      if (
                        ((e =
                          0 <= t.indexOf("windows phone")
                            ? "Windows Phone"
                            : 0 <= t.indexOf("windows") ||
                              0 <= t.indexOf("win16") ||
                              0 <= t.indexOf("win32") ||
                              0 <= t.indexOf("win64") ||
                              0 <= t.indexOf("win95") ||
                              0 <= t.indexOf("win98") ||
                              0 <= t.indexOf("winnt") ||
                              0 <= t.indexOf("wow64")
                            ? "Windows"
                            : 0 <= t.indexOf("android")
                            ? "Android"
                            : 0 <= t.indexOf("linux") ||
                              0 <= t.indexOf("cros") ||
                              0 <= t.indexOf("x11")
                            ? "Linux"
                            : 0 <= t.indexOf("iphone") ||
                              0 <= t.indexOf("ipad") ||
                              0 <= t.indexOf("ipod") ||
                              0 <= t.indexOf("crios") ||
                              0 <= t.indexOf("fxios")
                            ? "iOS"
                            : 0 <= t.indexOf("macintosh") ||
                              0 <= t.indexOf("mac_powerpc)")
                            ? "Mac"
                            : "Other"),
                        ("ontouchstart" in window ||
                          0 < navigator.maxTouchPoints ||
                          0 < navigator.msMaxTouchPoints) &&
                          "Windows" !== e &&
                          "Windows Phone" !== e &&
                          "Android" !== e &&
                          "iOS" !== e &&
                          "Other" !== e &&
                          -1 === t.indexOf("cros"))
                      )
                        return !0;
                      if (void 0 !== n) {
                        if (
                          0 <= (n = n.toLowerCase()).indexOf("win") &&
                          "Windows" !== e &&
                          "Windows Phone" !== e
                        )
                          return !0;
                        if (
                          0 <= n.indexOf("linux") &&
                          "Linux" !== e &&
                          "Android" !== e
                        )
                          return !0;
                        if (0 <= n.indexOf("mac") && "Mac" !== e && "iOS" !== e)
                          return !0;
                        if (
                          (-1 === n.indexOf("win") &&
                            -1 === n.indexOf("linux") &&
                            -1 === n.indexOf("mac")) !=
                          ("Other" === e)
                        )
                          return !0;
                      }
                      return (
                        (0 <= i.indexOf("win") &&
                          "Windows" !== e &&
                          "Windows Phone" !== e) ||
                        ((0 <= i.indexOf("linux") ||
                          0 <= i.indexOf("android") ||
                          0 <= i.indexOf("pike")) &&
                          "Linux" !== e &&
                          "Android" !== e) ||
                        ((0 <= i.indexOf("mac") ||
                          0 <= i.indexOf("ipad") ||
                          0 <= i.indexOf("ipod") ||
                          0 <= i.indexOf("iphone")) &&
                          "Mac" !== e &&
                          "iOS" !== e) ||
                        (!(0 <= i.indexOf("arm") && "Windows Phone" === e) &&
                          !(
                            0 <= i.indexOf("pike") &&
                            0 <= t.indexOf("opera mini")
                          ) &&
                          ((0 > i.indexOf("win") &&
                            0 > i.indexOf("linux") &&
                            0 > i.indexOf("mac") &&
                            0 > i.indexOf("iphone") &&
                            0 > i.indexOf("ipad") &&
                            0 > i.indexOf("ipod")) !=
                            ("Other" === e) ||
                            (void 0 === navigator.plugins &&
                              "Windows" !== e &&
                              "Windows Phone" !== e)))
                      );
                    })()
                  );
                },
              },
              {
                key: "hasLiedBrowser",
                getData: function (e) {
                  e(
                    (function () {
                      var e,
                        t = navigator.userAgent.toLowerCase(),
                        n = navigator.productSub;
                      if (
                        0 <= t.indexOf("edge/") ||
                        0 <= t.indexOf("iemobile/")
                      )
                        return !1;
                      if (0 <= t.indexOf("opera mini")) return !1;
                      if (
                        ("Chrome" ==
                          (e =
                            0 <= t.indexOf("firefox/")
                              ? "Firefox"
                              : 0 <= t.indexOf("opera/") ||
                                0 <= t.indexOf(" opr/")
                              ? "Opera"
                              : 0 <= t.indexOf("chrome/")
                              ? "Chrome"
                              : 0 <= t.indexOf("safari/")
                              ? 0 <= t.indexOf("android 1.") ||
                                0 <= t.indexOf("android 2.") ||
                                0 <= t.indexOf("android 3.") ||
                                0 <= t.indexOf("android 4.")
                                ? "AOSP"
                                : "Safari"
                              : 0 <= t.indexOf("trident/")
                              ? "Internet Explorer"
                              : "Other") ||
                          "Safari" === e ||
                          "Opera" === e) &&
                        "20030107" !== n
                      )
                        return !0;
                      var i,
                        o = eval.toString().length;
                      if (
                        37 === o &&
                        "Safari" !== e &&
                        "Firefox" !== e &&
                        "Other" !== e
                      )
                        return !0;
                      if (
                        39 === o &&
                        "Internet Explorer" !== e &&
                        "Other" !== e
                      )
                        return !0;
                      if (
                        33 === o &&
                        "Chrome" !== e &&
                        "AOSP" !== e &&
                        "Opera" !== e &&
                        "Other" !== e
                      )
                        return !0;
                      try {
                        throw "a";
                      } catch (e) {
                        try {
                          e.toSource(), (i = !0);
                        } catch (e) {
                          i = !1;
                        }
                      }
                      return i && "Firefox" !== e && "Other" !== e;
                    })()
                  );
                },
              },
              {
                key: "touchSupport",
                getData: function (e) {
                  e(
                    (function () {
                      var e,
                        t = 0;
                      void 0 === navigator.maxTouchPoints
                        ? void 0 !== navigator.msMaxTouchPoints &&
                          (t = navigator.msMaxTouchPoints)
                        : (t = navigator.maxTouchPoints);
                      try {
                        document.createEvent("TouchEvent"), (e = !0);
                      } catch (t) {
                        e = !1;
                      }
                      return [t, e, "ontouchstart" in window];
                    })()
                  );
                },
              },
              {
                key: "fontsFlash",
                getData: function (e, t) {
                  return void 0 !== window.swfobject
                    ? window.swfobject.hasFlashPlayerVersion("9.0.0")
                      ? t.fonts.swfPath
                        ? void (function (e, t) {
                            var n = "___fp_swf_loaded";
                            window[n] = function (t) {
                              e(t);
                            };
                            var i = t.fonts.swfContainerId;
                            !(function (e) {
                              var t = document.createElement("div");
                              t.setAttribute(
                                "id",
                                (void 0).fonts.swfContainerId
                              ),
                                document.body.appendChild(t);
                            })(),
                              window.swfobject.embedSWF(
                                t.fonts.swfPath,
                                i,
                                "1",
                                "1",
                                "9.0.0",
                                !1,
                                { onReady: n },
                                { allowScriptAccess: "always", menu: "false" },
                                {}
                              );
                          })(function (t) {
                            e(t);
                          }, t)
                        : e("missing options.fonts.swfPath")
                      : e("flash not installed")
                    : e("swf object not loaded");
                },
                pauseBefore: !0,
              },
              {
                key: "audio",
                getData: function (e, t) {
                  var n = t.audio;
                  if (
                    n.excludeIOS11 &&
                    navigator.userAgent.match(/OS 11.+Version\/11.+Safari/)
                  )
                    return e(t.EXCLUDED);
                  var i =
                    window.OfflineAudioContext ||
                    window.webkitOfflineAudioContext;
                  if (null == i) return e(t.NOT_AVAILABLE);
                  var o = new i(1, 44100, 44100),
                    r = o.createOscillator();
                  (r.type = "triangle"),
                    r.frequency.setValueAtTime(1e4, o.currentTime);
                  var a = o.createDynamicsCompressor();
                  c(
                    [
                      ["threshold", -50],
                      ["knee", 40],
                      ["ratio", 12],
                      ["reduction", -20],
                      ["attack", 0],
                      ["release", 0.25],
                    ],
                    function (e) {
                      void 0 !== a[e[0]] &&
                        "function" == typeof a[e[0]].setValueAtTime &&
                        a[e[0]].setValueAtTime(e[1], o.currentTime);
                    }
                  ),
                    r.connect(a),
                    a.connect(o.destination),
                    r.start(0),
                    o.startRendering();
                  var s = setTimeout(function () {
                    return (
                      (o.oncomplete = function () {}),
                      (o = null),
                      e("audioTimeout")
                    );
                  }, n.timeout);
                  o.oncomplete = function (t) {
                    var n;
                    try {
                      clearTimeout(s),
                        (n = t.renderedBuffer
                          .getChannelData(0)
                          .slice(4500, 5e3)
                          .reduce(function (e, t) {
                            return e + Math.abs(t);
                          }, 0)
                          .toString()),
                        r.disconnect(),
                        a.disconnect();
                    } catch (t) {
                      return void e(t);
                    }
                    e(n);
                  };
                },
              },
              {
                key: "enumerateDevices",
                getData: function (e, t) {
                  return navigator.mediaDevices &&
                    navigator.mediaDevices.enumerateDevices
                    ? void navigator.mediaDevices
                        .enumerateDevices()
                        .then(function (t) {
                          e(
                            t.map(function (e) {
                              return (
                                "id=" +
                                e.deviceId +
                                ";gid=" +
                                e.groupId +
                                ";" +
                                e.kind +
                                ";" +
                                e.label
                              );
                            })
                          );
                        })
                        .catch(function (t) {
                          e(t);
                        })
                    : e(t.NOT_AVAILABLE);
                },
              },
            ],
            g = function () {
              throw new Error("'new FrPt()' is deprecated");
            };
          return (
            (g.get = function (e, t) {
              t ? !e && (e = {}) : ((t = e), (e = {})),
                (function (e, t) {
                  if (null == t) return e;
                  var n, i;
                  for (i in t)
                    null == (n = t[i]) ||
                      Object.prototype.hasOwnProperty.call(e, i) ||
                      (e[i] = n);
                })(e, s),
                (e.components = e.extraComponents.concat(m));
              var n = {
                  data: [],
                  addPreprocessedComponent: function (t, i) {
                    "function" == typeof e.preprocessor &&
                      (i = e.preprocessor(t, i)),
                      n.data.push({ key: t, value: i });
                  },
                },
                i = -1;
              !(function o(r) {
                if ((i += 1) >= e.components.length) t(n.data);
                else {
                  var a = e.components[i];
                  if (e.excludes[a.key]) o(!1);
                  else {
                    if (!r && a.pauseBefore)
                      return (
                        (i -= 1),
                        void setTimeout(function () {
                          o(!0);
                        }, 1)
                      );
                    try {
                      a.getData(function (e) {
                        n.addPreprocessedComponent(a.key, e), o(!1);
                      }, e);
                    } catch (e) {
                      n.addPreprocessedComponent(a.key, e + ""), o(!1);
                    }
                  }
                }
              })(!1);
            }),
            (g.getPromise = function (e) {
              return new Promise(function (t) {
                g.get(e, t);
              });
            }),
            (g.getV18 = function (e, t) {
              return (
                null == t && ((t = e), (e = {})),
                g.get(e, function (n) {
                  for (var i, o = [], r = 0; r < n.length; r++)
                    if (
                      (i = n[r]).value === (e.NOT_AVAILABLE || "not available")
                    )
                      o.push({ key: i.key, value: "unknown" });
                    else if ("plugins" === i.key)
                      o.push({
                        key: "plugins",
                        value: l(i.value, function (e) {
                          var t = l(e[2], function (e) {
                            return e.join ? e.join("~") : e;
                          }).join(",");
                          return [e[0], e[1], t].join("::");
                        }),
                      });
                    else if (
                      -1 !== ["canvas", "webgl"].indexOf(i.key) &&
                      Array.isArray(i.value)
                    )
                      o.push({ key: i.key, value: i.value.join("~") });
                    else if (
                      -1 ===
                      [
                        "sessionStorage",
                        "localStorage",
                        "indexedDb",
                        "addBehavior",
                        "openDatabase",
                      ].indexOf(i.key)
                    )
                      i.value
                        ? o.push(
                            i.value.join
                              ? { key: i.key, value: i.value.join(";") }
                              : i
                          )
                        : o.push({ key: i.key, value: i.value });
                    else {
                      if (!i.value) continue;
                      o.push({ key: i.key, value: 1 });
                    }
                  var s = a(
                    l(o, function (e) {
                      return e.value;
                    }).join("~~~"),
                    31
                  );
                  t(s, o);
                })
              );
            }),
            (g.x64hash128 = a),
            (g.VERSION = "2.1.0"),
            g
          );
        });
      },
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        function _typeof(e) {
          return (_typeof =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        function _classCallCheck(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        function _defineProperties(e, t) {
          for (var n, i = 0; i < t.length; i++)
            ((n = t[i]).enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
        }
        function _createClass(e, t, n) {
          return (
            t && _defineProperties(e.prototype, t),
            n && _defineProperties(e, n),
            e
          );
        }
        var _Mathabs = Math.abs;
        __webpack_require__.d(__webpack_exports__, "a", function () {
          return DomExtractor;
        });
        var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0),
          DomExtractor = (function () {
            function DomExtractor(e) {
              _classCallCheck(this, DomExtractor),
                (this.config = e),
                (this.context = e.context);
            }
            return (
              _createClass(DomExtractor, [
                {
                  key: "isSessionStorageEnabled",
                  value: function () {
                    var e = null;
                    if ("sessionStorage" in this.context)
                      try {
                        this.context.sessionStorage.setItem("svs", 1),
                          (e = this.context.sessionStorage.getItem("svs"));
                      } catch (e) {}
                    return e ? 1 : 0;
                  },
                },
                {
                  key: "getBrowserFlag",
                  value: function () {
                    var e = 0;
                    return (
                      (this.context.opera || void 0 !== this.context.opr) &&
                        (e += 1),
                      ((this.context.opera && this.context.opera.buildNumber) ||
                        void 0 !== this.context.opr) &&
                        (e += 2),
                      (this.context.document.all || this.context.MSStream) &&
                        (e += 4),
                      (!this.context.btoa ||
                        this.context.navigator.msPointerEnabled ||
                        void 0 !== this.context.clearImmediate) &&
                        (e += 8),
                      this.context.chrome && (e += 16),
                      void 0 !== this.context.mozInnerScreenX && (e += 32),
                      this.context.external || (e += 64),
                      e
                    );
                  },
                },
                {
                  key: "isJavaEnabled",
                  value: function () {
                    return this.context.navigator.javaEnabled() ? 1 : 0;
                  },
                },
                {
                  key: "isFlashEnabled",
                  value: function () {
                    var e = 0;
                    if (
                      void 0 !== this.context.navigator.plugins &&
                      "object" ===
                        _typeof(
                          this.context.navigator.plugins["Shockwave Flash"]
                        )
                    )
                      e = 1;
                    else if (void 0 !== this.context.ActiveXObject)
                      try {
                        new ActiveXObject("ShockwaveFlash.ShockwaveFlash") &&
                          (e = 1);
                      } catch (e) {}
                    return e;
                  },
                },
                {
                  key: "isCookieEnabled",
                  value: function () {
                    return this.context.navigator.cookieEnabled ? 1 : 0;
                  },
                },
                {
                  key: "isLocalStorageEnabled",
                  value: function () {
                    var e = null;
                    if ("localStorage" in this.context)
                      try {
                        this.context.localStorage.setItem("svs", 1),
                          (e = this.context.localStorage.getItem("svs"));
                      } catch (e) {}
                    return e ? 1 : 0;
                  },
                },
                {
                  key: "groupBitParams",
                  value: function () {
                    var e = 0;
                    return (
                      this.isJavaEnabled() && (e += 1),
                      this.isFlashEnabled() && (e += 2),
                      this.isCookieEnabled() && (e += 4),
                      this.isLocalStorageEnabled() && (e += 8),
                      this.isSessionStorageEnabled() && (e += 16),
                      this.isTouchStart() && (e += 32),
                      e
                    );
                  },
                },
                {
                  key: "isTouchStart",
                  value: function () {
                    return void 0 !== this.context.ontouchstart;
                  },
                },
                {
                  key: "getSnapshotProperties",
                  value: function (propertiesDom) {
                    propertiesDom = propertiesDom || {
                      props: {
                        3: "this.context['close']",
                        13: "this.context['navigator']['taintEnabled']",
                        16: "this.context['EventTarget']['toString']",
                        18: "this.context['navigator']['appName']",
                        20: "this.context['ApplicationCacheErrorEvent']",
                        22: "this.context['clearImmediate']",
                        23: "this.context['CryptoKey']",
                        25: "this.context['external']['AddSearchProvider']",
                        32: "this.context['chrome']['search']",
                        33: "this.context['clientInformation']['vendor']",
                        40: "this.context['TouchEvent']",
                        43: "this.context['DeviceMotionEvent']",
                        46: "this.context['navigator']['webkitGetGamepads']",
                        49: "this.context['Notification']",
                        56: "this.context['BeforeLoadEvent']",
                        57: "this.context['Entity']",
                        72: "this.context['AnalyserNode']",
                        74: "this.context['ArrayBufferView']",
                        76: "this.context['HTMLBaseFontElement']",
                        86: "this.context['self']['SharedWorker']",
                        87: "this.context['Touch']",
                        91: "this.context['DOMException']['ABORT_ERR']",
                        92: "this.context['Set']",
                        98: "this.context['document']['createTouch']",
                        138: "this.context['NaN']",
                        139: "this.context['document']['prepend']",
                        163: "this.context['SiteBoundCredential']",
                        165: "this.context['CanvasCaptureMediaStreamTrack']",
                      },
                      rules: {
                        contains: {
                          3: ['({command:"this.context.close.self"})'],
                          18: ["MicrosoftInternetExplorer"],
                          33: ["GoogleInc."],
                        },
                        not_empty: [
                          13,
                          16,
                          18,
                          20,
                          22,
                          23,
                          25,
                          32,
                          40,
                          43,
                          46,
                          49,
                          56,
                          57,
                          76,
                          86,
                          87,
                          91,
                          92,
                          98,
                          138,
                          139,
                          163,
                          165,
                        ],
                        undefined: [25, 46, 72, 74, 87],
                      },
                    };
                    var snapshotProperties = "";
                    for (var i in propertiesDom.props) {
                      i = parseInt(i, 10);
                      var node = this.context,
                        value = "";
                      try {
                        node = eval(propertiesDom.props[i]);
                      } catch (e) {
                        (node = "undefined"),
                          this.config.loggerEnabled &&
                            this.context[
                              this.config.logger + "Logger"
                            ].sendData(
                              "Antifraud Error. Property: " +
                                i +
                                ". " +
                                e.message +
                                ". " +
                                e.stack
                            );
                      }
                      if (
                        ((value = (node + "").replace(/\s/g, "")),
                        propertiesDom.rules.contains &&
                          i in propertiesDom.rules.contains)
                      )
                        for (var j in propertiesDom.rules.contains[i])
                          snapshotProperties +=
                            -1 ===
                            value.indexOf(propertiesDom.rules.contains[i][j])
                              ? "0"
                              : "1";
                      propertiesDom.rules.empty &&
                        -1 !== propertiesDom.rules.empty.indexOf(i) &&
                        (snapshotProperties += "" === value ? "1" : "0"),
                        propertiesDom.rules.not_empty &&
                          -1 !== propertiesDom.rules.not_empty.indexOf(i) &&
                          (snapshotProperties +=
                            "undefined" !== value && "" !== value ? "1" : "0"),
                        propertiesDom.rules.undefined &&
                          -1 !== propertiesDom.rules.undefined.indexOf(i) &&
                          (snapshotProperties +=
                            "undefined" === value ? "1" : "0");
                    }
                    for (
                      var sizeChar = 6,
                        n = Math.ceil(snapshotProperties.length / sizeChar),
                        chars = "",
                        _i = 0;
                      _i < n;
                      _i++
                    ) {
                      var part = snapshotProperties.substr(
                          _i * sizeChar,
                          sizeChar
                        ),
                        dec = parseInt(part, 2);
                      chars += _utils__WEBPACK_IMPORTED_MODULE_0__.c(dec);
                    }
                    return chars;
                  },
                },
                {
                  key: "getRectOfElement",
                  value: function (e) {
                    try {
                      var t = e.getBoundingClientRect();
                    } catch (n) {
                      t = {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: 0,
                        width: 0,
                      };
                    }
                    var n = {
                      top: t.top,
                      bottom: t.bottom,
                      left: t.left,
                      right: t.right,
                      height: t.height ? t.height : t.bottom - t.top,
                      width: t.width ? t.width : t.right - t.left,
                    };
                    if (this.context.self !== this.context.top) {
                      var i = this.getFrameElement();
                      if (i) {
                        var o = i.getBoundingClientRect();
                        (n.top += o.top),
                          (n.bottom += o.top),
                          (n.left += o.left),
                          (n.right += o.left);
                      }
                    }
                    return n;
                  },
                },
                {
                  key: "getFrameElement",
                  value: function () {
                    if (void 0 === this.topIFrame)
                      try {
                        var e, t;
                        for (
                          t = (e = this.context).frameElement;
                          e.frameElement;
                          e = e.parent
                        )
                          t = e.frameElement;
                        this.topIFrame = t;
                      } catch (e) {
                        this.topIFrame = null;
                      }
                    return this.topIFrame;
                  },
                },
                {
                  key: "getCoordinatesClickOfWindow",
                  value: function (e) {
                    var t = 0,
                      n = 0;
                    return (
                      e.clientX || e.clientY
                        ? ((t = e.clientX), (n = e.clientY))
                        : e.touches &&
                          e.touches[0] &&
                          ((t = e.touches[0].clientX),
                          (n = e.touches[0].clientY)),
                      { x: t, y: n }
                    );
                  },
                },
                {
                  key: "getCoordinatesClickOfPage",
                  value: function (e) {
                    var t = 0,
                      n = 0;
                    return (
                      e || (e = this.context.event),
                      e.pageX || e.pageY
                        ? ((t = e.pageX), (n = e.pageY))
                        : e.touches && e.touches[0]
                        ? ((t = e.touches[0].pageX), (n = e.touches[0].pageY))
                        : (e.clientX || e.clientY) &&
                          ((t =
                            e.clientX +
                            (this.context.document.documentElement.scrollLeft ||
                              this.context.document.body.scrollLeft) -
                            this.context.document.documentElement.clientLeft),
                          (n =
                            e.clientY +
                            (this.context.document.documentElement.scrollTop ||
                              this.context.document.body.scrollTop) -
                            this.context.document.documentElement.clientTop)),
                      { x: t, y: n }
                    );
                  },
                },
                {
                  key: "getCoordsElementOfPage",
                  value: function (e) {
                    var t = 0,
                      n = 0;
                    do {
                      (t += e.offsetLeft), (n += e.offsetTop);
                    } while ((e = e.offsetParent));
                    return { x: t, y: n };
                  },
                },
                {
                  key: "getCoordsClickOfWindow",
                  value: function (e) {
                    var t = 0,
                      n = 0;
                    return (
                      e.clientX || e.clientY
                        ? ((t = e.clientX), (n = e.clientY))
                        : e.touches &&
                          e.touches[0] &&
                          ((t = e.touches[0].clientX),
                          (n = e.touches[0].clientY)),
                      { x: t, y: n }
                    );
                  },
                },
                {
                  key: "getMaxTouchPoints",
                  value: function () {
                    return void 0 === this.context.navigator.maxTouchPoints
                      ? 99
                      : this.context.navigator.maxTouchPoints;
                  },
                },
                {
                  key: "getDeviceOrientation",
                  value: function (e) {
                    if (this.context.DeviceOrientationEvent) {
                      var t = !0,
                        n = 0;
                      _utils__WEBPACK_IMPORTED_MODULE_0__.a(
                        this.context,
                        "deviceorientation",
                        function (i) {
                          var o = Math.round,
                            r = o(i.gamma),
                            a = o(i.beta),
                            s = o(i.alpha);
                          t &&
                            (n++,
                            (t = !1),
                            setTimeout(function () {
                              t = !0;
                            }, 1e3)),
                            e(
                              parseInt(r) +
                                "|" +
                                parseInt(a) +
                                "|" +
                                parseInt(s) +
                                "|" +
                                parseInt(n)
                            );
                        }
                      );
                    } else e("0|0|0|0");
                  },
                },
                {
                  key: "getCoordsClickOfPage",
                  value: function (e) {
                    var t = 0,
                      n = 0;
                    return (
                      e || (e = this.context.event),
                      e.pageX || e.pageY
                        ? ((t = e.pageX), (n = e.pageY))
                        : e.touches && e.touches[0]
                        ? ((t = e.touches[0].pageX), (n = e.touches[0].pageY))
                        : (e.clientX || e.clientY) &&
                          ((t =
                            e.clientX +
                            (this.context.document.documentElement.scrollLeft ||
                              this.context.document.body.scrollLeft) -
                            this.context.document.documentElement.clientLeft),
                          (n =
                            e.clientY +
                            (this.context.document.documentElement.scrollTop ||
                              this.context.document.body.scrollTop) -
                            this.context.document.documentElement.clientTop)),
                      { x: t, y: n }
                    );
                  },
                },
                {
                  key: "isTransparent",
                  value: function (e) {
                    for (; e.firstChild && 1 === e.firstChild.nodeType; )
                      e = e.firstChild;
                    for (; e.parentNode; ) {
                      if (
                        0.2 >=
                        this.context
                          .getComputedStyle(e)
                          .getPropertyValue("opacity")
                      )
                        return 1;
                      if (e === this.context.document.body) break;
                      e = e.parentNode;
                    }
                    return 0;
                  },
                },
                {
                  key: "getCountMimeTypes",
                  value: function () {
                    var e = 0;
                    return (
                      void 0 !== this.context.navigator.mimeTypes &&
                        (e = this.context.navigator.mimeTypes.length),
                      e
                    );
                  },
                },
                {
                  key: "isOnLine",
                  value: function () {
                    var e = 1;
                    return (
                      void 0 !== this.context.navigator.onLine &&
                        (e = this.context.navigator.onLine ? 1 : 0),
                      e
                    );
                  },
                },
                {
                  key: "generateBatteryInfo",
                  value: function (e) {
                    this.context.navigator.getBattery &&
                      this.context.navigator.getBattery().then(function (t) {
                        e(+t.charging, 100 * t.level);
                      });
                  },
                },
                {
                  key: "generateCurrentGeoPosition",
                  value: function (e) {
                    var t = this;
                    try {
                      this.context.navigator.permissions
                        .query({ name: "geolocation" })
                        .then(function (n) {
                          "granted" === n.state &&
                            t.context.navigator.geolocation.getCurrentPosition(
                              function (t) {
                                e(t.coords);
                              }
                            );
                        });
                    } catch (e) {}
                  },
                },
                {
                  key: "getSupportedImageMimeTypes",
                  value: function () {
                    var e = 0;
                    try {
                      var t = this.context.document.createElement("canvas");
                      if (t.getContext && t.getContext("2d")) {
                        var n = {
                          1: "image/webp",
                          2: "image/jpeg",
                          4: "image/jxr",
                          8: "image/jp2",
                          16: "image/gif",
                        };
                        for (var i in n)
                          0 === t.toDataURL(n[i]).indexOf("data:" + n[i]) &&
                            (e |= i);
                      }
                    } catch (e) {}
                    return e;
                  },
                },
                {
                  key: "isSupportHtml5",
                  value: function () {
                    var e = this.context.document.createElement("canvas");
                    return e.getContext && e.getContext("2d") ? 1 : 0;
                  },
                },
                {
                  key: "getScreenX",
                  value: function () {
                    var e = 0;
                    return (
                      void 0 !== this.context.screenX &&
                        (e = _Mathabs(this.context.screenX)),
                      e
                    );
                  },
                },
                {
                  key: "getScreenY",
                  value: function () {
                    var e = 0;
                    return (
                      void 0 !== this.context.screenY &&
                        (e = _Mathabs(this.context.screenY)),
                      e
                    );
                  },
                },
                {
                  key: "isAnyImageLoaded",
                  value: function (e) {
                    for (
                      var t = /\/\/img.*\/[\d]+\/([\d]+).*\.(jpg|gif)/,
                        n = /\/\/s-img.*\/([\d]+)\/.*\.(jpg|gif)/,
                        i = this.config.root.getElementsByTagName("IMG"),
                        o = this.config.root.getElementsByTagName("VIDEO"),
                        r = [],
                        a = 0;
                      a < i.length;
                      a++
                    )
                      r.push(i[a]);
                    for (var s = 0; s < o.length; s++) r.push(o[s]);
                    for (var c = 0; c < r.length; c++)
                      t.exec(r[c].src) || n.exec(r[c].src),
                        _utils__WEBPACK_IMPORTED_MODULE_0__.a(r[c], "load", e);
                  },
                },
                {
                  key: "getHardwareConcurrency",
                  value: function () {
                    var e = 0;
                    return (
                      void 0 !== this.context.navigator.hardwareConcurrency &&
                        (e = this.context.navigator.hardwareConcurrency),
                      e
                    );
                  },
                },
                {
                  key: "getPlugins",
                  value: function () {
                    var e = "";
                    if (void 0 !== this.context.navigator.plugins) {
                      for (
                        var t = this.context.navigator.plugins, n = [], i = 0;
                        i < t.length;
                        i++
                      )
                        n.push(t[i].name);
                      e = _utils__WEBPACK_IMPORTED_MODULE_0__.e(
                        n.join("|").replace(/\s/g, ""),
                        300
                      );
                    }
                    return e;
                  },
                },
                {
                  key: "getNetwrokInformation",
                  value: function () {
                    var e = {
                      networkInformationType: "unknown",
                      networkInformationEffectiveType: "unknown",
                      networkInformationSaveData: 0,
                    };
                    try {
                      var t =
                        navigator.connection ||
                        navigator.mozConnection ||
                        navigator.webkitConnection;
                      void 0 !== t.type && (e.networkInformationType = t.type),
                        void 0 !== t.effectiveType &&
                          (e.networkInformationEffectiveType = t.effectiveType),
                        void 0 !== t.saveData &&
                          (e.networkInformationSaveData = t.saveData ? 1 : 0);
                    } catch (t) {}
                    return e;
                  },
                },
              ]),
              DomExtractor
            );
          })();
      },
      function (e) {
        (function (t) {
          e.exports = t;
        }.call(this, {}));
      },
      function (e, t, n) {
        "use strict";
        function i(e, t) {
          for (var n, i = 0; i < t.length; i++)
            ((n = t[i]).enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
        }
        function o(e, t) {
          for (var n, i = 0; i < t.length; i++)
            ((n = t[i]).enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
        }
        function r(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        function a(e, t) {
          for (var n, i = 0; i < t.length; i++)
            ((n = t[i]).enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
        }
        n.r(t),
          n.d(t, "Application", function () {
            return p;
          }),
          n.d(t, "AntiFraud", function () {
            return h;
          }),
          n.d(t, "Config", function () {
            return f;
          }),
          n.d(t, "addEvent", function () {
            return s.a;
          }),
          n.d(t, "removeEvent", function () {
            return s.d;
          });
        var s = n(0),
          c = n(2),
          l = (function () {
            function e(t) {
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
                (this.cookieStorage = {}),
                (this.sharedCookieStorage = {}),
                (this.config = t),
                (this.context = t.context),
                (this.storageName =
                  t.informerPrefix +
                  "Storage" +
                  (this.context[t.informerPrefix + "PageOffset"]
                    ? this.context[t.informerPrefix + "PageOffset"]
                    : ""));
            }
            return (
              (function (e, t, n) {
                t && i(e.prototype, t);
              })(e, [
                {
                  key: "initialize",
                  value: function () {
                    var e = this.getCookieValue();
                    (this.cookieStorage =
                      void 0 === e[this.config.typePrefix + this.config.id]
                        ? {}
                        : e[this.config.typePrefix + this.config.id]),
                      (this.sharedCookieStorage = void 0 === e[0] ? {} : e[0]);
                  },
                },
                {
                  key: "setCookie",
                  value: function () {
                    if (!this.config.disableCookies) {
                      var e = this.getCookieValue();
                      (e[
                        this.config.typePrefix + this.config.id
                      ] = this.cookieStorage),
                        (e[0] = this.sharedCookieStorage);
                      var t = encodeURIComponent(JSON.stringify(e));
                      this.context.document.cookie =
                        this.storageName + "=" + t + ";path=/";
                    }
                  },
                },
                {
                  key: "getCookieValue",
                  value: function () {
                    if (!this.config.disableCookies) {
                      var e = this.context.document.cookie.match(
                          new RegExp("(?:^|; )" + this.storageName + "=([^;]*)")
                        ),
                        t = {};
                      if (e)
                        try {
                          t = JSON.parse(decodeURIComponent(e[1]));
                        } catch (t) {}
                      return t;
                    }
                    return {};
                  },
                },
              ]),
              e
            );
          })(),
          d = n(1),
          u = n.n(d),
          h = (function () {
            function e(t) {
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, e),
                (this.domExtractor = new c.a(t)),
                (this.cookieManager = new l(t)),
                (this.config = t),
                (this.miliSecondsFromScroll = null),
                (this.afCookieData = ""),
                (this.afPrimaryReferrer = ""),
                (this.afReferrer = ""),
                (this.afHref = ""),
                (this.afDeepSession = ""),
                (this.afMgLoaded = s.b(new Date().getTime())),
                (this.afImgLoaded = 0),
                (this.afSnapshotProperties = ""),
                (this.afCoords = ""),
                (this.afDeviceOrientation = ""),
                (this.afCoordsClickAndLinkOfPage = ""),
                (this.afBrowserFlag = 0),
                (this.afPlugins = ""),
                (this.afCountMimeTypes = 0),
                (this.afFocus = 1),
                (this.afBrowserHookMask = 0),
                (this.afCharging = -1),
                (this.afLevel = -1),
                (this.afImageMimeTypes = 0),
                (this.afGeoPosition = "0|0"),
                (this.timerFromScroll = null),
                (this.networkInformation = "unknown|unknown|0"),
                (this.frPrHash = "");
            }
            return (
              (function (e, t, n) {
                t && o(e.prototype, t);
              })(e, [
                {
                  key: "initialize",
                  value: function () {
                    var e = new Date();
                    this.cookieManager.initialize(),
                      this.setReferrers(),
                      this.setDeepSession(),
                      this.setCookieData(e),
                      this.setNetworkInformation(),
                      (this.afMgLoaded = s.b(e.getTime())),
                      (this.afSnapshotProperties = this.domExtractor.getSnapshotProperties(
                        this.config.propertiesDom
                      )),
                      (this.afBrowserFlag = this.domExtractor.getBrowserFlag()),
                      (this.afBrowserHookMask = this.domExtractor.getBrowserFlag()),
                      (this.afPlugins = s.f(this.domExtractor.getPlugins())),
                      (this.afImageMimeTypes = this.domExtractor.getSupportedImageMimeTypes()),
                      (this.afCountMimeTypes = this.domExtractor.getCountMimeTypes()),
                      this.setEvents();
                  },
                },
                {
                  key: "generateHash",
                  value: function (e, t) {
                    var n = new Date(),
                      i = this.domExtractor.getCoordsClickOfWindow(e),
                      o = this.domExtractor.getRectOfElement(t),
                      r = this.domExtractor.isTransparent(t);
                    this.setCoords(t), this.setCoordsClickAndLinkOfPage(e, t);
                    for (
                      var a = "", c = 1;
                      c <= 48 * Math.ceil((this.afBrowserFlag + 1) / 68);
                      c++
                    )
                      if (
                        0 != c % 26 &&
                        (6 != c % 26 || 0 != ((c % 26) + 5) % 11)
                      ) {
                        a += 1 === c ? String.fromCharCode(98 + (c % 26)) : "f";
                        var l = "";
                        if (48 < c) break;
                        1 === c
                          ? (l = this.afCookieData)
                          : 3 === c
                          ? (l = this.afMgLoaded)
                          : 4 === c
                          ? (l = s.b(n.getTime()))
                          : 7 === c
                          ? (l = s.f(i.x + "|" + i.y))
                          : 8 === c
                          ? (l = s.b(
                              this.getParameterFromLink(t, "wct") ? 1 : 0
                            ))
                          : 9 === c
                          ? (l = s.b(o.left))
                          : 10 === c
                          ? (l = s.b(this.miliSecondsFromScroll))
                          : 11 === c
                          ? (l = s.b(o.top))
                          : 12 === c
                          ? (l = s.f(this.getFnPt()))
                          : 13 === c
                          ? (l = s.f(o.width + "|" + o.height))
                          : 15 === c
                          ? (l = this.afSnapshotProperties)
                          : 17 === c
                          ? (l = s.b(this.afBrowserFlag))
                          : 18 === c
                          ? (l = s.b(t["data-rel"]))
                          : 19 === c
                          ? (l = this.afHref)
                          : 20 === c
                          ? (l = this.afReferrer)
                          : 21 === c
                          ? (l = this.afPrimaryReferrer)
                          : 22 === c
                          ? (l = s.b(this.afDeepSession))
                          : 23 === c
                          ? (l = s.f(this.afCoordsClickAndLinkOfPage))
                          : 24 === c
                          ? (l = s.f(this.afDeviceOrientation))
                          : 25 === c
                          ? (l = s.f(this.afGeoPosition))
                          : 27 === c
                          ? (l = s.b(this.config.iframePlacementType))
                          : 28 === c
                          ? (l = s.c(this.groupBitParams()))
                          : 29 === c
                          ? (l = s.f(this.afCoords))
                          : 30 === c
                          ? (l = s.b(this.domExtractor.context.screen.width))
                          : 31 === c
                          ? (l = s.b(this.domExtractor.context.screen.height))
                          : 33 === c
                          ? (l = s.b(this.afImgLoaded))
                          : 34 === c
                          ? (l = s.b(r))
                          : 35 === c
                          ? (l = s.f(
                              this.domExtractor.context.navigator.userAgent
                            ))
                          : 36 === c
                          ? (l = this.afPlugins)
                          : 37 === c
                          ? (l = s.f(
                              parseInt(this.afCountMimeTypes) +
                                "|" +
                                parseInt(this.afImageMimeTypes)
                            ))
                          : 38 === c
                          ? (l = s.f(
                              this.domExtractor.context.navigator.platform
                            ))
                          : 39 === c
                          ? (l = s.f(-n.getTimezoneOffset()))
                          : 40 === c
                          ? (l = s.f(this.afCharging + "|" + this.afLevel))
                          : 41 === c
                          ? (l = s.f(
                              this.domExtractor.context.screen.availWidth +
                                "|" +
                                this.domExtractor.context.screen.availHeight
                            ))
                          : 42 === c
                          ? (l = s.f(this.networkInformation))
                          : 43 === c
                          ? (l = s.b(this.domExtractor.getScreenX()))
                          : 44 === c
                          ? (l = s.b(this.domExtractor.getScreenY()))
                          : 45 === c
                          ? (l = s.b(this.afBrowserHookMask))
                          : 46 === c
                          ? (l = s.b(this.domExtractor.getMaxTouchPoints()))
                          : 47 === c
                          ? (l = s.b(this.domExtractor.isSupportHtml5()))
                          : 48 === c && (l = s.b(this.domExtractor.isOnLine())),
                          (a += l);
                      }
                    return encodeURIComponent(a);
                  },
                },
                {
                  key: "getFnPt",
                  value: function () {
                    return this.frPrHash;
                  },
                },
                {
                  key: "setWidgetEvents",
                  value: function () {
                    var e = this;
                    this.domExtractor.isAnyImageLoaded(function () {
                      e.afImgLoaded || (e.afImgLoaded = new Date().getTime());
                    });
                  },
                },
                {
                  key: "packReferrers",
                  value: function (e, t, n) {
                    for (
                      var i = [
                          this.afPrimaryReferrer,
                          this.afReferrer,
                          this.afHref,
                        ],
                        o = [e, t, n],
                        r = 0,
                        a = 0,
                        s = 0;
                      s < o.length;
                      s++
                    )
                      (r += o[s]), (a += i[s].length);
                    if (a <= r) return i;
                    for (var c, l = [0, 0, 0], d = [], u = 0; u < i.length; u++)
                      (c = -1),
                        8 <= i[u].length && (c = i[u].indexOf("/", 8)),
                        -1 == c
                          ? ((d[u] = i[u]), (i[u] = ""))
                          : ((d[u] = i[u].substr(0, c)),
                            (i[u] = i[u].substr(c))),
                        (o[u] -= d[u].length);
                    var h = d.slice(),
                      f = [];
                    for (
                      h[0] == h[1]
                        ? (f[0] = "++")
                        : h[0] == h[2] && (f[0] = "::"),
                        h[1] == h[2] && (f[1] = ";;");
                      ;

                    ) {
                      for (var p = 0, m = 0; m < i.length; m++)
                        if (l[m] || i[m].length)
                          l[m] ||
                            ((p = 1),
                            (d[m] += i[m][0]),
                            (i[m] = 1 == i[m].length ? "" : i[m].substr(1)),
                            o[m]--,
                            o[m] || (l[m] = 1));
                        else {
                          l[m] = 1;
                          for (var g = 0; g < l.length; g++)
                            if (!l[g]) {
                              (o[g] += o[m]), (o[m] = 0);
                              break;
                            }
                        }
                      if (!p)
                        for (var v = 0; v < i.length; v++)
                          if (i[v].length) {
                            for (var y = 0; y < o.length; y++)
                              if (o[y]) {
                                (l[v] = 0), (o[v] = o[y]), (o[y] = 0), (p = 1);
                                break;
                              }
                            if (p) break;
                          }
                      if (!p) break;
                    }
                    for (var w in f) d[w] = d[w].split(h[w]).join(f[w]);
                    return d;
                  },
                },
                {
                  key: "groupBitParams",
                  value: function () {
                    var e = 0;
                    return (
                      this.domExtractor.isJavaEnabled() && (e += 1),
                      this.domExtractor.isFlashEnabled() && (e += 2),
                      this.domExtractor.isCookieEnabled() && (e += 4),
                      this.domExtractor.isLocalStorageEnabled() && (e += 8),
                      this.domExtractor.isSessionStorageEnabled() && (e += 16),
                      e
                    );
                  },
                },
                {
                  key: "setNetworkInformation",
                  value: function () {
                    var e = this.domExtractor.getNetwrokInformation();
                    this.networkInformation =
                      e.networkInformationType +
                      "|" +
                      e.networkInformationEffectiveType +
                      "|" +
                      e.networkInformationSaveData;
                  },
                },
                {
                  key: "setCookieData",
                  value: function (e) {
                    var t = Math.floor;
                    (this.afCookieData =
                      e.getTime() +
                      "" +
                      this.config.id +
                      t(100 * Math.random()) +
                      2 * t(4 * Math.random())),
                      (this.afCookieData += 1),
                      (this.afCookieData = s.b(s.e(this.afCookieData, 16, 1))),
                      void 0 ===
                        this.cookieManager.sharedCookieStorage[
                          this.config.cookieDataKey
                        ] &&
                        ((this.cookieManager.sharedCookieStorage[
                          this.config.cookieDataKey
                        ] = this.afCookieData),
                        this.cookieManager.setCookie());
                  },
                },
                {
                  key: "setCoordsClickAndLinkOfPage",
                  value: function (e, t) {
                    var n = this.domExtractor.getCoordsClickOfPage(e),
                      i = this.domExtractor.getCoordsElementOfPage(t);
                    this.afCoordsClickAndLinkOfPage =
                      parseInt(n.x) +
                      "|" +
                      parseInt(n.y) +
                      "|" +
                      parseInt(i.x) +
                      "|" +
                      parseInt(i.y);
                  },
                },
                {
                  key: "setCoords",
                  value: function (e) {
                    var t = e.getBoundingClientRect();
                    this.afCoords =
                      parseInt(t.height) +
                      "|" +
                      parseInt(t.width) +
                      "|" +
                      parseInt(t.x) +
                      "|" +
                      parseInt(t.y);
                  },
                },
                {
                  key: "setEvents",
                  value: function () {
                    var e = this;
                    if (
                      (s.a(
                        this.domExtractor.context.document,
                        "focus",
                        function () {
                          e.afFocus = 1;
                        }
                      ),
                      s.a(
                        this.domExtractor.context.document,
                        "blur",
                        function () {
                          e.afFocus = 0;
                        }
                      ),
                      s.a(
                        this.domExtractor.context.document,
                        "scroll",
                        function (t) {
                          t || (t = e.domExtractor.context.event),
                            t.target || (t.target = t.srcElement),
                            (e.miliSecondsFromScroll = 0),
                            e.domExtractor.context.clearInterval(
                              e.timerFromScroll
                            ),
                            (e.timerFromScroll = e.domExtractor.context.setInterval(
                              function () {
                                e.miliSecondsFromScroll++;
                              },
                              100
                            ));
                        }
                      ),
                      this.domExtractor.getDeviceOrientation(function (t) {
                        e.afDeviceOrientation = t;
                      }),
                      this.domExtractor.generateBatteryInfo(function (t, n) {
                        (e.afCharging = t), (e.afLevel = n);
                      }),
                      this.domExtractor.generateCurrentGeoPosition(function (
                        t
                      ) {
                        e.afGeoPosition = t.latitude + "|" + t.longitude;
                      }),
                      this.config.useFingerprint)
                    )
                      try {
                        u.a.get(function (t) {
                          e.frPrHash = u.a.x64hash128(
                            t
                              .map(function (e) {
                                return e.value;
                              })
                              .join(),
                            31
                          );
                        });
                      } catch (e) {
                        this.config.loggerEnabled &&
                          this.domExtractor.context[
                            this.config.logger + "Logger"
                          ].sendData(
                            "Antifraud Error fingerprint. Property: " +
                              e.message +
                              ". " +
                              e.stack
                          );
                      }
                  },
                },
                {
                  key: "setReferrers",
                  value: function () {
                    void 0 === this.cookieManager.sharedCookieStorage.svspr
                      ? ((this.afPrimaryReferrer = s.e(
                          this.domExtractor.context.document.referrer,
                          500
                        )),
                        (this.cookieManager.sharedCookieStorage.svspr = this.afPrimaryReferrer),
                        this.cookieManager.setCookie())
                      : (this.afPrimaryReferrer = this.cookieManager.sharedCookieStorage.svspr),
                      (this.afReferrer = this.domExtractor.context.hasOwnProperty(
                        "referer"
                      )
                        ? this.domExtractor.context.referer
                        : this.domExtractor.context.document.referrer),
                      (this.afHref = this.domExtractor.context.document.location.href);
                    var e = this.config.afShortEnabled
                      ? this.packReferrers(70, 50, 50)
                      : this.packReferrers(300, 300, 300);
                    (this.afPrimaryReferrer = s.f(s.e(e[0], 256))),
                      (this.afReferrer = s.f(s.e(e[1], 256))),
                      (this.afHref = s.f(s.e(e[2], 256)));
                  },
                },
                {
                  key: "setDeepSession",
                  value: function () {
                    if (
                      void 0 !== this.cookieManager.sharedCookieStorage.svsds
                    ) {
                      this.afDeepSession = this.cookieManager.sharedCookieStorage.svsds;
                      var e = this.config.modulePrefix + "SvsdsFlag";
                      void 0 === this.domExtractor.context[e] &&
                        (this.afDeepSession++,
                        (this.domExtractor.context[e] = !0));
                    } else this.afDeepSession = 1;
                    (this.cookieManager.sharedCookieStorage.svsds = this.afDeepSession),
                      this.cookieManager.setCookie();
                  },
                },
                {
                  key: "getParameterFromLink",
                  value: function (e, t) {
                    var n = e.search;
                    if ("" === n) return null;
                    for (
                      var i = n.replace("?", "").split("&"), o = 0;
                      o < i.length;
                      o++
                    )
                      if (i[o].split("=")[0] === t) return i[o];
                    return null;
                  },
                },
              ]),
              e
            );
          })(),
          f = function e(t) {
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, e),
              (this.loggerEnabled = t.loggerEnabled),
              (this.logger = t.logger),
              (this.afShortEnabled = t.afShortEnabled),
              (this.modulePrefix = t.modulePrefix),
              (this.id = t.id),
              (this.informerPrefix = t.informerPrefix || "MarketGid"),
              (this.typePrefix = t.typePrefix || ""),
              (this.disableCookies = t.disableCookies || !1),
              (this.context = t.context || window),
              (this.root = t.root || this.context.document),
              (this.iframePlacementType = t.iframePlacementType || 0),
              (this.cookieDataKey = t.cookieDataKey || "TejndEEDj"),
              (this.propertiesDom = t.propertiesDom),
              (this.useFingerprint = t.useFingerprint || !1);
          },
          p = (function () {
            function e() {
              var t =
                0 < arguments.length && void 0 !== arguments[0]
                  ? arguments[0]
                  : {};
              r(this, e);
              var n = new f({
                loggerEnabled: !1,
                modulePrefix: "Transit",
                id: 206,
                cookieDataKey: "TejndE37EDj206",
              });
              (this.app = new h(n)),
                (this.afRealHref = ""),
                (this.linksCount = 0),
                (this.forceEvents = t.forceEvents || !1);
            }
            return (
              (function (e, t, n) {
                t && a(e.prototype, t);
              })(e, [
                {
                  key: "run",
                  value: function () {
                    this.app.initialize(), this.initAntiFraud();
                  },
                },
                {
                  key: "initAntiFraud",
                  value: function () {
                    var e = this,
                      t = document.getElementsByTagName("a");
                    (t.length !== this.linksCount || !0 === this.forceEvents) &&
                      this.bindEvents(t),
                      setTimeout(function () {
                        return e.initAntiFraud();
                      }, 750);
                  },
                },
                {
                  key: "bindEvents",
                  value: function (e) {
                    var t = this;
                    (this.linksCount = e.length), (this.forceEvents = !1);
                    for (var n, i = 0; i < e.length; i++)
                      (n = e[i]),
                        /\/(ghits|[rt]+news|nr)\//i.test(n.href) &&
                          (Object(s.a)(n, "mousedown", function (e) {
                            t.linkMouseDown(e, this);
                          }),
                          Object(s.a)(n, "mouseup", function (e) {
                            t.linkClick(e, this);
                          }),
                          Object(s.a)(n, "mouseover", function (e) {
                            t.linkMouseOver(e, this);
                          }),
                          Object(s.a)(n, "mousemove", function (e) {
                            t.linkMouseMove(e, this);
                          }),
                          Object(s.a)(n, "touchstart", function (e) {
                            t.linkTouchStart(e, this);
                          }),
                          Object(s.a)(n, "touchend", function (e) {
                            t.linkTouchEnd(e, this);
                          }));
                    this.app.setWidgetEvents();
                  },
                },
                {
                  key: "bindAntiFraudParams",
                  value: function (e, t) {
                    var n = t.href.indexOf("?k=f"),
                      i = t.href.indexOf("&k=f"),
                      o = t.href.indexOf("?");
                    -1 === n
                      ? -1 !== i && (t.href = t.href.substr(0, i))
                      : (t.href = t.href.substr(0, n)),
                      (this.afRealHref = t.href),
                      (this.afActiveEl = t),
                      (t.href += -1 === n && -1 !== o ? "&k=f" : "?k=f"),
                      (t.href += this.app.generateHash(e, t)),
                      this.dispatchKEvent(t, "generated");
                  },
                },
                {
                  key: "dispatchKEvent",
                  value: function (e, t) {
                    var n = document.createEvent("Events");
                    n.initEvent(t, !0, !1),
                      (n.timeG = Date.now()),
                      e.dispatchEvent(n);
                  },
                },
                {
                  key: "linkClick",
                  value: function (e, t) {
                    var n = this;
                    this.bindAntiFraudParams(e, t),
                      setTimeout(function () {
                        return n.reWriteHref();
                      }, 100);
                  },
                },
                {
                  key: "linkMouseOver",
                  value: function (e, t) {
                    this.bindAntiFraudParams(e, t);
                    var n = parseInt(t["data-rel"])
                      ? parseInt(t["data-rel"])
                      : 0;
                    1 != n % 2 && (t["data-rel"] = n + 1);
                  },
                },
                {
                  key: "linkMouseMove",
                  value: function (e, t) {
                    var n = parseInt(t["data-rel"])
                      ? parseInt(t["data-rel"])
                      : 0;
                    1 != (n >> 1) % 2 && (t["data-rel"] = n + 2);
                  },
                },
                {
                  key: "linkTouchStart",
                  value: function (e, t) {
                    this.bindAntiFraudParams(e, t);
                    var n = parseInt(t["data-rel"])
                      ? parseInt(t["data-rel"])
                      : 0;
                    2 & (n >> 1) || (t["data-rel"] = n + 4);
                  },
                },
                {
                  key: "linkTouchEnd",
                  value: function (e, t) {
                    var n = parseInt(t["data-rel"])
                      ? parseInt(t["data-rel"])
                      : 0;
                    4 & (n >> 1) || (t["data-rel"] = n + 8);
                  },
                },
                {
                  key: "linkMouseDown",
                  value: function (e, t) {
                    var n = parseInt(t["data-rel"])
                      ? parseInt(t["data-rel"])
                      : 0;
                    8 & (n >> 1) || (t["data-rel"] = n + 16);
                  },
                },
                {
                  key: "reWriteHref",
                  value: function () {
                    this.afRealHref &&
                      this.afActiveEl &&
                      (this.afActiveEl.href = this.afRealHref);
                  },
                },
              ]),
              e
            );
          })();
      },
    ]);
  },
  function (e, t, n) {
    function i(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function o(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        (i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          "value" in i && (i.writable = !0),
          Object.defineProperty(e, i.key, i);
      }
    }
    function r(e, t, n) {
      return t && o(e.prototype, t), n && o(e, n), e;
    }
    window.MarketGidCAntifraudStatisticsBlock762628 = function (e) {
      var t = n(27),
        o = (function () {
          function t() {
            i(this, t);
          }
          return (
            r(t, null, [
              {
                key: "getClosestDistanceInSquare",
                value: function (e, t) {
                  var n = e.x - t.x,
                    i = e.y - t.y,
                    o = t.width - n,
                    r = t.height - i;
                  return Math.min(n, i, o, r);
                },
              },
              {
                key: "getInnerElementPercent",
                value: function (e, t) {
                  var n = e.getBoundingClientRect(),
                    i = Math.abs(n.width * n.height),
                    o = n.width,
                    r = n.height;
                  n.top < 0 && (r += n.top), n.left < 0 && (o += n.left);
                  var a = n.top + n.height;
                  t.height < a && (r -= a - t.height);
                  var s = n.left + n.width;
                  return (
                    t.width < s && (o -= s - t.width),
                    (100 * ((o = o > 0 ? o : 0) * (r = r > 0 ? r : 0))) / i
                  );
                },
              },
              {
                key: "findTeaserElement",
                value: function (t) {
                  return e.findClosest(t, "div[data-i]");
                },
              },
              {
                key: "findImageElementOfTeaser",
                value: function (e) {
                  return e.querySelector("img.mcimg");
                },
              },
              {
                key: "getViewportSize",
                value: function () {
                  return {
                    width: Math.max(
                      document.documentElement.clientWidth || 0,
                      window.innerWidth || 0
                    ),
                    height: Math.max(
                      document.documentElement.clientHeight || 0,
                      window.innerHeight || 0
                    ),
                  };
                },
              },
            ]),
            t
          );
        })(),
        a = (function () {
          function t(e) {
            i(this, t),
              (this.parameters = e),
              (this.initialWidgetCoordinates = { x: 0, y: 0 });
          }
          return (
            r(t, [
              {
                key: "onWidgetLoadEvent",
                value: function () {
                  var t = e.root.getBoundingClientRect();
                  this.initialWidgetCoordinates = {
                    x: t.x + window.scrollX,
                    y: t.y + window.scrollY,
                  };
                },
              },
              {
                key: "onContextFocusEvent",
                value: function () {
                  this.parameters.isTabActive = !0;
                },
              },
              {
                key: "onContextBlurEvent",
                value: function () {
                  this.parameters.isTabActive = !1;
                },
              },
              {
                key: "onWidgetClickEvent",
                value: function (t, n) {
                  this.setWidgetCoordinates(),
                    this.setClickCoordinates(n),
                    (this.parameters.action = "click"),
                    (this.parameters.clickTime = e.getCurrentTimestamp()),
                    (this.parameters.widgetOnLoadDisposition = this.getWidgetDisposition());
                  var i = o.findTeaserElement(t);
                  if (i) {
                    var r = i.getBoundingClientRect();
                    (this.parameters.isHidden = !i.offsetParent),
                      (this.parameters.teaserCoordinateX = r.x),
                      (this.parameters.teaserCoordinateY = r.y),
                      (this.parameters.teaserWidth = r.width),
                      (this.parameters.teaserHeight = r.height),
                      (this.parameters.clickToBorderDistance = o.getClosestDistanceInSquare(
                        { x: n.clientX, y: n.clientY },
                        r
                      )),
                      (this.parameters.teaserViewportPercent = o.getInnerElementPercent(
                        i,
                        o.getViewportSize()
                      ));
                    var a = o.findImageElementOfTeaser(i);
                    a && this.setImageProperties(a);
                  }
                },
              },
              {
                key: "onContextScrollEvent",
                value: function () {
                  this.parameters.lastScrollTime = e.getCurrentTimestamp();
                },
              },
              {
                key: "onContextResizeEvent",
                value: function () {
                  this.parameters.lastPageResizeTime = e.getCurrentTimestamp();
                },
              },
              {
                key: "onRootResizeEvent",
                value: function () {
                  this.parameters.lastWidgetResizeTime = e.getCurrentTimestamp();
                },
              },
              {
                key: "onRootTouchEndEvent",
                value: function (e) {
                  var t = e.changedTouches.item(0);
                  t &&
                    ((this.parameters.tapRadiusX = t.radiusX),
                    (this.parameters.tapRadiusY = t.radiusY));
                },
              },
              {
                key: "setWidgetCoordinates",
                value: function () {
                  var t = e.root.getBoundingClientRect();
                  (this.parameters.widgetCoordinateX = t.x),
                    (this.parameters.widgetCoordinateY = t.y);
                },
              },
              {
                key: "setImageProperties",
                value: function (e) {
                  var t = e.getBoundingClientRect();
                  (this.parameters.imageWidth = t.width),
                    (this.parameters.imageHeight = t.height);
                },
              },
              {
                key: "getWidgetDisposition",
                value: function () {
                  return (
                    this.parameters.widgetCoordinateX + window.scrollX !==
                      this.initialWidgetCoordinates.x ||
                    this.parameters.widgetCoordinateY + window.scrollY !==
                      this.initialWidgetCoordinates.y
                  );
                },
              },
              {
                key: "setClickCoordinates",
                value: function (e) {
                  e.clientX || e.clientY
                    ? ((this.parameters.clickCoordinateX = e.clientX),
                      (this.parameters.clickCoordinateY = e.clientY))
                    : e.touches &&
                      e.touches[0] &&
                      ((this.parameters.clickCoordinateX =
                        e.touches[0].clientX),
                      (this.parameters.clickCoordinateY =
                        e.touches[0].clientY));
                },
              },
            ]),
            t
          );
        })(),
        s = (function () {
          function n(e) {
            i(this, n), (this.parameters = e);
          }
          return (
            r(n, [
              {
                key: "send",
                value: function (t, n) {
                  var i = new XMLHttpRequest();
                  i.open("POST", e.webProtocol + "//c.mgid.com/aws", !0),
                    i.setRequestHeader("Content-Type", "application/json"),
                    i.send(
                      btoa(
                        JSON.stringify({
                          rid: n,
                          showHash: t,
                          parameters: this.getEncodedParameters(t, n),
                        })
                      )
                    );
                },
              },
              {
                key: "getEncodedParameters",
                value: function (e, n) {
                  var i = {
                    stringify: function (e) {
                      var t = { ct: btoa(e.ciphertext.toString()) };
                      return (
                        e.iv && (t.iv = e.iv.toString()),
                        e.salt &&
                          (t.s =
                            btoa(e.salt.toString()) +
                            Math.random().toString(36).slice(-2)),
                        JSON.stringify(t).replace(/\s/g, "")
                      );
                    },
                  };
                  return btoa(
                    t
                      .encrypt(JSON.stringify(this.parameters), e + n, {
                        format: i,
                      })
                      .toString()
                  );
                },
              },
            ]),
            n
          );
        })(),
        c = new (function e() {
          i(this, e),
            (this.action = "undefined"),
            (this.isTabActive = !0),
            (this.clickTime = 0),
            (this.lastScrollTime = 0),
            (this.lastPageResizeTime = 0),
            (this.lastWidgetResizeTime = 0),
            (this.widgetCoordinateX = 0),
            (this.widgetCoordinateY = 0),
            (this.tapRadiusX = 0),
            (this.tapRadiusY = 0),
            (this.isHidden = !1),
            (this.clickToBorderDistance = 0),
            (this.teaserCoordinateX = 0),
            (this.teaserCoordinateY = 0),
            (this.teaserWidth = 0),
            (this.teaserHeight = 0),
            (this.imageWidth = 0),
            (this.imageHeight = 0),
            (this.teaserViewportPercent = 0),
            (this.widgetOnLoadDisposition = !1),
            (this.clickCoordinateX = 0),
            (this.clickCoordinateY = 0);
        })(),
        l = new s(c),
        d = new a(c);
      (e.initAntifraudStatistics = function () {
        d.onWidgetLoadEvent(),
          e.addEvent(e.context, "focus", function () {
            return d.onContextFocusEvent();
          }),
          e.addEvent(e.context, "blur", function () {
            return d.onContextBlurEvent();
          }),
          e.addEvent(e.context, "scroll", function () {
            return d.onContextScrollEvent();
          }),
          e.addEvent(e.context, "resize", function () {
            return d.onContextResizeEvent();
          }),
          e.addEvent(e.root, "resize", function () {
            return d.onRootResizeEvent();
          }),
          e.addEvent(e.root, "touchend", function (e) {
            return d.onRootTouchEndEvent(e);
          }),
          e.addClickHandler(
            e.clickHandlerList.onAntifraudStatisticsClick.handler,
            e.clickHandlerList.onAntifraudStatisticsClick.priority
          );
      }),
        (e.onAntifraudStatisticsClickHandler = function (t, n) {
          return (
            d.onWidgetClickEvent(t, n),
            l.send(t.getAttribute("data-hash"), e.servicerData.rid),
            !0
          );
        }),
        e.afterLoadNewsHooks.push("initAntifraudStatistics");
    };
  },
  function (e, t) {
    var n,
      i,
      o = (function (e, t) {
        var n = {},
          i = (n.lib = {}),
          o = function () {},
          r = (i.Base = {
            extend: function (e) {
              o.prototype = this;
              var t = new o();
              return (
                e && t.mixIn(e),
                t.hasOwnProperty("init") ||
                  (t.init = function () {
                    t.$super.init.apply(this, arguments);
                  }),
                (t.init.prototype = t),
                (t.$super = this),
                t
              );
            },
            create: function () {
              var e = this.extend();
              return e.init.apply(e, arguments), e;
            },
            init: function () {},
            mixIn: function (e) {
              for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
              e.hasOwnProperty("toString") && (this.toString = e.toString);
            },
            clone: function () {
              return this.init.prototype.extend(this);
            },
          }),
          a = (i.WordArray = r.extend({
            init: function (e, t) {
              (e = this.words = e || []),
                (this.sigBytes = null != t ? t : 4 * e.length);
            },
            toString: function (e) {
              return (e || c).stringify(this);
            },
            concat: function (e) {
              var t = this.words,
                n = e.words,
                i = this.sigBytes;
              if (((e = e.sigBytes), this.clamp(), i % 4))
                for (var o = 0; o < e; o++)
                  t[(i + o) >>> 2] |=
                    ((n[o >>> 2] >>> (24 - (o % 4) * 8)) & 255) <<
                    (24 - ((i + o) % 4) * 8);
              else if (65535 < n.length)
                for (o = 0; o < e; o += 4) t[(i + o) >>> 2] = n[o >>> 2];
              else t.push.apply(t, n);
              return (this.sigBytes += e), this;
            },
            clamp: function () {
              var t = this.words,
                n = this.sigBytes;
              (t[n >>> 2] &= 4294967295 << (32 - (n % 4) * 8)),
                (t.length = e.ceil(n / 4));
            },
            clone: function () {
              var e = r.clone.call(this);
              return (e.words = this.words.slice(0)), e;
            },
            random: function (t) {
              for (var n = [], i = 0; i < t; i += 4)
                n.push((4294967296 * e.random()) | 0);
              return new a.init(n, t);
            },
          })),
          s = (n.enc = {}),
          c = (s.Hex = {
            stringify: function (e) {
              var t = e.words;
              e = e.sigBytes;
              for (var n = [], i = 0; i < e; i++) {
                var o = (t[i >>> 2] >>> (24 - (i % 4) * 8)) & 255;
                n.push((o >>> 4).toString(16)), n.push((15 & o).toString(16));
              }
              return n.join("");
            },
            parse: function (e) {
              for (var t = e.length, n = [], i = 0; i < t; i += 2)
                n[i >>> 3] |=
                  parseInt(e.substr(i, 2), 16) << (24 - (i % 8) * 4);
              return new a.init(n, t / 2);
            },
          }),
          l = (s.Latin1 = {
            stringify: function (e) {
              var t = e.words;
              e = e.sigBytes;
              for (var n = [], i = 0; i < e; i++)
                n.push(
                  String.fromCharCode((t[i >>> 2] >>> (24 - (i % 4) * 8)) & 255)
                );
              return n.join("");
            },
            parse: function (e) {
              for (var t = e.length, n = [], i = 0; i < t; i++)
                n[i >>> 2] |= (255 & e.charCodeAt(i)) << (24 - (i % 4) * 8);
              return new a.init(n, t);
            },
          }),
          d = (s.Utf8 = {
            stringify: function (e) {
              try {
                return decodeURIComponent(escape(l.stringify(e)));
              } catch (e) {
                throw Error("Malformed UTF-8 data");
              }
            },
            parse: function (e) {
              return l.parse(unescape(encodeURIComponent(e)));
            },
          }),
          u = (i.BufferedBlockAlgorithm = r.extend({
            reset: function () {
              (this._data = new a.init()), (this._nDataBytes = 0);
            },
            _append: function (e) {
              "string" == typeof e && (e = d.parse(e)),
                this._data.concat(e),
                (this._nDataBytes += e.sigBytes);
            },
            _process: function (t) {
              var n = this._data,
                i = n.words,
                o = n.sigBytes,
                r = this.blockSize,
                s = o / (4 * r);
              if (
                ((t =
                  (s = t
                    ? e.ceil(s)
                    : e.max((0 | s) - this._minBufferSize, 0)) * r),
                (o = e.min(4 * t, o)),
                t)
              ) {
                for (var c = 0; c < t; c += r) this._doProcessBlock(i, c);
                (c = i.splice(0, t)), (n.sigBytes -= o);
              }
              return new a.init(c, o);
            },
            clone: function () {
              var e = r.clone.call(this);
              return (e._data = this._data.clone()), e;
            },
            _minBufferSize: 0,
          }));
        i.Hasher = u.extend({
          cfg: r.extend(),
          init: function (e) {
            (this.cfg = this.cfg.extend(e)), this.reset();
          },
          reset: function () {
            u.reset.call(this), this._doReset();
          },
          update: function (e) {
            return this._append(e), this._process(), this;
          },
          finalize: function (e) {
            return e && this._append(e), this._doFinalize();
          },
          blockSize: 16,
          _createHelper: function (e) {
            return function (t, n) {
              return new e.init(n).finalize(t);
            };
          },
          _createHmacHelper: function (e) {
            return function (t, n) {
              return new h.HMAC.init(e, n).finalize(t);
            };
          },
        });
        var h = (n.algo = {});
        return n;
      })(Math);
    (i = (n = o).lib.WordArray),
      (n.enc.Base64 = {
        stringify: function (e) {
          var t = e.words,
            n = e.sigBytes,
            i = this._map;
          e.clamp(), (e = []);
          for (var o = 0; o < n; o += 3)
            for (
              var r =
                  (((t[o >>> 2] >>> (24 - (o % 4) * 8)) & 255) << 16) |
                  (((t[(o + 1) >>> 2] >>> (24 - ((o + 1) % 4) * 8)) & 255) <<
                    8) |
                  ((t[(o + 2) >>> 2] >>> (24 - ((o + 2) % 4) * 8)) & 255),
                a = 0;
              4 > a && o + 0.75 * a < n;
              a++
            )
              e.push(i.charAt((r >>> (6 * (3 - a))) & 63));
          if ((t = i.charAt(64))) for (; e.length % 4; ) e.push(t);
          return e.join("");
        },
        parse: function (e) {
          var t = e.length,
            n = this._map;
          (o = n.charAt(64)) && -1 != (o = e.indexOf(o)) && (t = o);
          for (var o = [], r = 0, a = 0; a < t; a++)
            if (a % 4) {
              var s = n.indexOf(e.charAt(a - 1)) << ((a % 4) * 2),
                c = n.indexOf(e.charAt(a)) >>> (6 - (a % 4) * 2);
              (o[r >>> 2] |= (s | c) << (24 - (r % 4) * 8)), r++;
            }
          return i.create(o, r);
        },
        _map:
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
      }),
      (function (e) {
        function t(e, t, n, i, o, r, a) {
          return (
            (((e = e + ((t & n) | (~t & i)) + o + a) << r) | (e >>> (32 - r))) +
            t
          );
        }
        function n(e, t, n, i, o, r, a) {
          return (
            (((e = e + ((t & i) | (n & ~i)) + o + a) << r) | (e >>> (32 - r))) +
            t
          );
        }
        function i(e, t, n, i, o, r, a) {
          return (((e = e + (t ^ n ^ i) + o + a) << r) | (e >>> (32 - r))) + t;
        }
        function r(e, t, n, i, o, r, a) {
          return (
            (((e = e + (n ^ (t | ~i)) + o + a) << r) | (e >>> (32 - r))) + t
          );
        }
        for (
          var a = o,
            s = (l = a.lib).WordArray,
            c = l.Hasher,
            l = a.algo,
            d = [],
            u = 0;
          64 > u;
          u++
        )
          d[u] = (4294967296 * e.abs(e.sin(u + 1))) | 0;
        (l = l.MD5 = c.extend({
          _doReset: function () {
            this._hash = new s.init([
              1732584193,
              4023233417,
              2562383102,
              271733878,
            ]);
          },
          _doProcessBlock: function (e, o) {
            for (var a = 0; 16 > a; a++) {
              var s = e[(c = o + a)];
              e[c] =
                (16711935 & ((s << 8) | (s >>> 24))) |
                (4278255360 & ((s << 24) | (s >>> 8)));
            }
            a = this._hash.words;
            var c = e[o + 0],
              l = ((s = e[o + 1]), e[o + 2]),
              u = e[o + 3],
              h = e[o + 4],
              f = e[o + 5],
              p = e[o + 6],
              m = e[o + 7],
              g = e[o + 8],
              v = e[o + 9],
              y = e[o + 10],
              w = e[o + 11],
              b = e[o + 12],
              x = e[o + 13],
              k = e[o + 14],
              C = e[o + 15],
              E = t((E = a[0]), (_ = a[1]), (I = a[2]), (S = a[3]), c, 7, d[0]),
              S = t(S, E, _, I, s, 12, d[1]),
              I = t(I, S, E, _, l, 17, d[2]),
              _ = t(_, I, S, E, u, 22, d[3]);
            (E = t(E, _, I, S, h, 7, d[4])),
              (S = t(S, E, _, I, f, 12, d[5])),
              (I = t(I, S, E, _, p, 17, d[6])),
              (_ = t(_, I, S, E, m, 22, d[7])),
              (E = t(E, _, I, S, g, 7, d[8])),
              (S = t(S, E, _, I, v, 12, d[9])),
              (I = t(I, S, E, _, y, 17, d[10])),
              (_ = t(_, I, S, E, w, 22, d[11])),
              (E = t(E, _, I, S, b, 7, d[12])),
              (S = t(S, E, _, I, x, 12, d[13])),
              (I = t(I, S, E, _, k, 17, d[14])),
              (E = n(E, (_ = t(_, I, S, E, C, 22, d[15])), I, S, s, 5, d[16])),
              (S = n(S, E, _, I, p, 9, d[17])),
              (I = n(I, S, E, _, w, 14, d[18])),
              (_ = n(_, I, S, E, c, 20, d[19])),
              (E = n(E, _, I, S, f, 5, d[20])),
              (S = n(S, E, _, I, y, 9, d[21])),
              (I = n(I, S, E, _, C, 14, d[22])),
              (_ = n(_, I, S, E, h, 20, d[23])),
              (E = n(E, _, I, S, v, 5, d[24])),
              (S = n(S, E, _, I, k, 9, d[25])),
              (I = n(I, S, E, _, u, 14, d[26])),
              (_ = n(_, I, S, E, g, 20, d[27])),
              (E = n(E, _, I, S, x, 5, d[28])),
              (S = n(S, E, _, I, l, 9, d[29])),
              (I = n(I, S, E, _, m, 14, d[30])),
              (E = i(E, (_ = n(_, I, S, E, b, 20, d[31])), I, S, f, 4, d[32])),
              (S = i(S, E, _, I, g, 11, d[33])),
              (I = i(I, S, E, _, w, 16, d[34])),
              (_ = i(_, I, S, E, k, 23, d[35])),
              (E = i(E, _, I, S, s, 4, d[36])),
              (S = i(S, E, _, I, h, 11, d[37])),
              (I = i(I, S, E, _, m, 16, d[38])),
              (_ = i(_, I, S, E, y, 23, d[39])),
              (E = i(E, _, I, S, x, 4, d[40])),
              (S = i(S, E, _, I, c, 11, d[41])),
              (I = i(I, S, E, _, u, 16, d[42])),
              (_ = i(_, I, S, E, p, 23, d[43])),
              (E = i(E, _, I, S, v, 4, d[44])),
              (S = i(S, E, _, I, b, 11, d[45])),
              (I = i(I, S, E, _, C, 16, d[46])),
              (E = r(E, (_ = i(_, I, S, E, l, 23, d[47])), I, S, c, 6, d[48])),
              (S = r(S, E, _, I, m, 10, d[49])),
              (I = r(I, S, E, _, k, 15, d[50])),
              (_ = r(_, I, S, E, f, 21, d[51])),
              (E = r(E, _, I, S, b, 6, d[52])),
              (S = r(S, E, _, I, u, 10, d[53])),
              (I = r(I, S, E, _, y, 15, d[54])),
              (_ = r(_, I, S, E, s, 21, d[55])),
              (E = r(E, _, I, S, g, 6, d[56])),
              (S = r(S, E, _, I, C, 10, d[57])),
              (I = r(I, S, E, _, p, 15, d[58])),
              (_ = r(_, I, S, E, x, 21, d[59])),
              (E = r(E, _, I, S, h, 6, d[60])),
              (S = r(S, E, _, I, w, 10, d[61])),
              (I = r(I, S, E, _, l, 15, d[62])),
              (_ = r(_, I, S, E, v, 21, d[63]));
            (a[0] = (a[0] + E) | 0),
              (a[1] = (a[1] + _) | 0),
              (a[2] = (a[2] + I) | 0),
              (a[3] = (a[3] + S) | 0);
          },
          _doFinalize: function () {
            var t = this._data,
              n = t.words,
              i = 8 * this._nDataBytes,
              o = 8 * t.sigBytes;
            n[o >>> 5] |= 128 << (24 - (o % 32));
            var r = e.floor(i / 4294967296);
            for (
              n[15 + (((o + 64) >>> 9) << 4)] =
                (16711935 & ((r << 8) | (r >>> 24))) |
                (4278255360 & ((r << 24) | (r >>> 8))),
                n[14 + (((o + 64) >>> 9) << 4)] =
                  (16711935 & ((i << 8) | (i >>> 24))) |
                  (4278255360 & ((i << 24) | (i >>> 8))),
                t.sigBytes = 4 * (n.length + 1),
                this._process(),
                n = (t = this._hash).words,
                i = 0;
              4 > i;
              i++
            )
              (o = n[i]),
                (n[i] =
                  (16711935 & ((o << 8) | (o >>> 24))) |
                  (4278255360 & ((o << 24) | (o >>> 8))));
            return t;
          },
          clone: function () {
            var e = c.clone.call(this);
            return (e._hash = this._hash.clone()), e;
          },
        })),
          (a.MD5 = c._createHelper(l)),
          (a.HmacMD5 = c._createHmacHelper(l));
      })(Math),
      (function () {
        var e,
          t = o,
          n = (e = t.lib).Base,
          i = e.WordArray,
          r = ((e = t.algo).EvpKDF = n.extend({
            cfg: n.extend({ keySize: 4, hasher: e.MD5, iterations: 1 }),
            init: function (e) {
              this.cfg = this.cfg.extend(e);
            },
            compute: function (e, t) {
              for (
                var n = (s = this.cfg).hasher.create(),
                  o = i.create(),
                  r = o.words,
                  a = s.keySize,
                  s = s.iterations;
                r.length < a;

              ) {
                c && n.update(c);
                var c = n.update(e).finalize(t);
                n.reset();
                for (var l = 1; l < s; l++) (c = n.finalize(c)), n.reset();
                o.concat(c);
              }
              return (o.sigBytes = 4 * a), o;
            },
          }));
        t.EvpKDF = function (e, t, n) {
          return r.create(n).compute(e, t);
        };
      })(),
      o.lib.Cipher ||
        (function (e) {
          var t = (p = o).lib,
            n = t.Base,
            i = t.WordArray,
            r = t.BufferedBlockAlgorithm,
            a = p.enc.Base64,
            s = p.algo.EvpKDF,
            c = (t.Cipher = r.extend({
              cfg: n.extend(),
              createEncryptor: function (e, t) {
                return this.create(this._ENC_XFORM_MODE, e, t);
              },
              createDecryptor: function (e, t) {
                return this.create(this._DEC_XFORM_MODE, e, t);
              },
              init: function (e, t, n) {
                (this.cfg = this.cfg.extend(n)),
                  (this._xformMode = e),
                  (this._key = t),
                  this.reset();
              },
              reset: function () {
                r.reset.call(this), this._doReset();
              },
              process: function (e) {
                return this._append(e), this._process();
              },
              finalize: function (e) {
                return e && this._append(e), this._doFinalize();
              },
              keySize: 4,
              ivSize: 4,
              _ENC_XFORM_MODE: 1,
              _DEC_XFORM_MODE: 2,
              _createHelper: function (e) {
                return {
                  encrypt: function (t, n, i) {
                    return ("string" == typeof n ? m : f).encrypt(e, t, n, i);
                  },
                  decrypt: function (t, n, i) {
                    return ("string" == typeof n ? m : f).decrypt(e, t, n, i);
                  },
                };
              },
            }));
          t.StreamCipher = c.extend({
            _doFinalize: function () {
              return this._process(!0);
            },
            blockSize: 1,
          });
          var l = (p.mode = {}),
            d = function (e, t, n) {
              var i = this._iv;
              i ? (this._iv = void 0) : (i = this._prevBlock);
              for (var o = 0; o < n; o++) e[t + o] ^= i[o];
            },
            u = (t.BlockCipherMode = n.extend({
              createEncryptor: function (e, t) {
                return this.Encryptor.create(e, t);
              },
              createDecryptor: function (e, t) {
                return this.Decryptor.create(e, t);
              },
              init: function (e, t) {
                (this._cipher = e), (this._iv = t);
              },
            })).extend();
          (u.Encryptor = u.extend({
            processBlock: function (e, t) {
              var n = this._cipher,
                i = n.blockSize;
              d.call(this, e, t, i),
                n.encryptBlock(e, t),
                (this._prevBlock = e.slice(t, t + i));
            },
          })),
            (u.Decryptor = u.extend({
              processBlock: function (e, t) {
                var n = this._cipher,
                  i = n.blockSize,
                  o = e.slice(t, t + i);
                n.decryptBlock(e, t),
                  d.call(this, e, t, i),
                  (this._prevBlock = o);
              },
            })),
            (l = l.CBC = u),
            (u = (p.pad = {}).Pkcs7 = {
              pad: function (e, t) {
                for (
                  var n,
                    o =
                      ((n = (n = 4 * t) - (e.sigBytes % n)) << 24) |
                      (n << 16) |
                      (n << 8) |
                      n,
                    r = [],
                    a = 0;
                  a < n;
                  a += 4
                )
                  r.push(o);
                (n = i.create(r, n)), e.concat(n);
              },
              unpad: function (e) {
                e.sigBytes -= 255 & e.words[(e.sigBytes - 1) >>> 2];
              },
            }),
            (t.BlockCipher = c.extend({
              cfg: c.cfg.extend({ mode: l, padding: u }),
              reset: function () {
                c.reset.call(this);
                var e = (t = this.cfg).iv,
                  t = t.mode;
                if (this._xformMode == this._ENC_XFORM_MODE)
                  var n = t.createEncryptor;
                else (n = t.createDecryptor), (this._minBufferSize = 1);
                this._mode = n.call(t, this, e && e.words);
              },
              _doProcessBlock: function (e, t) {
                this._mode.processBlock(e, t);
              },
              _doFinalize: function () {
                var e = this.cfg.padding;
                if (this._xformMode == this._ENC_XFORM_MODE) {
                  e.pad(this._data, this.blockSize);
                  var t = this._process(!0);
                } else (t = this._process(!0)), e.unpad(t);
                return t;
              },
              blockSize: 4,
            }));
          var h = (t.CipherParams = n.extend({
              init: function (e) {
                this.mixIn(e);
              },
              toString: function (e) {
                return (e || this.formatter).stringify(this);
              },
            })),
            f =
              ((l = (p.format = {}).OpenSSL = {
                stringify: function (e) {
                  var t = e.ciphertext;
                  return ((e = e.salt)
                    ? i.create([1398893684, 1701076831]).concat(e).concat(t)
                    : t
                  ).toString(a);
                },
                parse: function (e) {
                  var t = (e = a.parse(e)).words;
                  if (1398893684 == t[0] && 1701076831 == t[1]) {
                    var n = i.create(t.slice(2, 4));
                    t.splice(0, 4), (e.sigBytes -= 16);
                  }
                  return h.create({ ciphertext: e, salt: n });
                },
              }),
              (t.SerializableCipher = n.extend({
                cfg: n.extend({ format: l }),
                encrypt: function (e, t, n, i) {
                  i = this.cfg.extend(i);
                  var o = e.createEncryptor(n, i);
                  return (
                    (t = o.finalize(t)),
                    (o = o.cfg),
                    h.create({
                      ciphertext: t,
                      key: n,
                      iv: o.iv,
                      algorithm: e,
                      mode: o.mode,
                      padding: o.padding,
                      blockSize: e.blockSize,
                      formatter: i.format,
                    })
                  );
                },
                decrypt: function (e, t, n, i) {
                  return (
                    (i = this.cfg.extend(i)),
                    (t = this._parse(t, i.format)),
                    e.createDecryptor(n, i).finalize(t.ciphertext)
                  );
                },
                _parse: function (e, t) {
                  return "string" == typeof e ? t.parse(e, this) : e;
                },
              }))),
            p = ((p.kdf = {}).OpenSSL = {
              execute: function (e, t, n, o) {
                return (
                  o || (o = i.random(8)),
                  (e = s.create({ keySize: t + n }).compute(e, o)),
                  (n = i.create(e.words.slice(t), 4 * n)),
                  (e.sigBytes = 4 * t),
                  h.create({ key: e, iv: n, salt: o })
                );
              },
            }),
            m = (t.PasswordBasedCipher = f.extend({
              cfg: f.cfg.extend({ kdf: p }),
              encrypt: function (e, t, n, i) {
                return (
                  (n = (i = this.cfg.extend(i)).kdf.execute(
                    n,
                    e.keySize,
                    e.ivSize
                  )),
                  (i.iv = n.iv),
                  (e = f.encrypt.call(this, e, t, n.key, i)).mixIn(n),
                  e
                );
              },
              decrypt: function (e, t, n, i) {
                return (
                  (i = this.cfg.extend(i)),
                  (t = this._parse(t, i.format)),
                  (n = i.kdf.execute(n, e.keySize, e.ivSize, t.salt)),
                  (i.iv = n.iv),
                  f.decrypt.call(this, e, t, n.key, i)
                );
              },
            }));
        })(),
      (function () {
        for (
          var e = o,
            t = e.lib.BlockCipher,
            n = e.algo,
            i = [],
            r = [],
            a = [],
            s = [],
            c = [],
            l = [],
            d = [],
            u = [],
            h = [],
            f = [],
            p = [],
            m = 0;
          256 > m;
          m++
        )
          p[m] = 128 > m ? m << 1 : (m << 1) ^ 283;
        var g = 0,
          v = 0;
        for (m = 0; 256 > m; m++) {
          var y =
            ((y = v ^ (v << 1) ^ (v << 2) ^ (v << 3) ^ (v << 4)) >>> 8) ^
            (255 & y) ^
            99;
          (i[g] = y), (r[y] = g);
          var w = p[g],
            b = p[w],
            x = p[b],
            k = (257 * p[y]) ^ (16843008 * y);
          (a[g] = (k << 24) | (k >>> 8)),
            (s[g] = (k << 16) | (k >>> 16)),
            (c[g] = (k << 8) | (k >>> 24)),
            (l[g] = k),
            (k = (16843009 * x) ^ (65537 * b) ^ (257 * w) ^ (16843008 * g)),
            (d[y] = (k << 24) | (k >>> 8)),
            (u[y] = (k << 16) | (k >>> 16)),
            (h[y] = (k << 8) | (k >>> 24)),
            (f[y] = k),
            g ? ((g = w ^ p[p[p[x ^ w]]]), (v ^= p[p[v]])) : (g = v = 1);
        }
        var C = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
        n = n.AES = t.extend({
          _doReset: function () {
            for (
              var e = (n = this._key).words,
                t = n.sigBytes / 4,
                n = 4 * ((this._nRounds = t + 6) + 1),
                o = (this._keySchedule = []),
                r = 0;
              r < n;
              r++
            )
              if (r < t) o[r] = e[r];
              else {
                var a = o[r - 1];
                r % t
                  ? 6 < t &&
                    4 == r % t &&
                    (a =
                      (i[a >>> 24] << 24) |
                      (i[(a >>> 16) & 255] << 16) |
                      (i[(a >>> 8) & 255] << 8) |
                      i[255 & a])
                  : ((a =
                      (i[(a = (a << 8) | (a >>> 24)) >>> 24] << 24) |
                      (i[(a >>> 16) & 255] << 16) |
                      (i[(a >>> 8) & 255] << 8) |
                      i[255 & a]),
                    (a ^= C[(r / t) | 0] << 24)),
                  (o[r] = o[r - t] ^ a);
              }
            for (e = this._invKeySchedule = [], t = 0; t < n; t++)
              (r = n - t),
                (a = t % 4 ? o[r] : o[r - 4]),
                (e[t] =
                  4 > t || 4 >= r
                    ? a
                    : d[i[a >>> 24]] ^
                      u[i[(a >>> 16) & 255]] ^
                      h[i[(a >>> 8) & 255]] ^
                      f[i[255 & a]]);
          },
          encryptBlock: function (e, t) {
            this._doCryptBlock(e, t, this._keySchedule, a, s, c, l, i);
          },
          decryptBlock: function (e, t) {
            var n = e[t + 1];
            (e[t + 1] = e[t + 3]),
              (e[t + 3] = n),
              this._doCryptBlock(e, t, this._invKeySchedule, d, u, h, f, r),
              (n = e[t + 1]),
              (e[t + 1] = e[t + 3]),
              (e[t + 3] = n);
          },
          _doCryptBlock: function (e, t, n, i, o, r, a, s) {
            for (
              var c = this._nRounds,
                l = e[t] ^ n[0],
                d = e[t + 1] ^ n[1],
                u = e[t + 2] ^ n[2],
                h = e[t + 3] ^ n[3],
                f = 4,
                p = 1;
              p < c;
              p++
            ) {
              var m =
                  i[l >>> 24] ^
                  o[(d >>> 16) & 255] ^
                  r[(u >>> 8) & 255] ^
                  a[255 & h] ^
                  n[f++],
                g =
                  i[d >>> 24] ^
                  o[(u >>> 16) & 255] ^
                  r[(h >>> 8) & 255] ^
                  a[255 & l] ^
                  n[f++],
                v =
                  i[u >>> 24] ^
                  o[(h >>> 16) & 255] ^
                  r[(l >>> 8) & 255] ^
                  a[255 & d] ^
                  n[f++];
              (h =
                i[h >>> 24] ^
                o[(l >>> 16) & 255] ^
                r[(d >>> 8) & 255] ^
                a[255 & u] ^
                n[f++]),
                (l = m),
                (d = g),
                (u = v);
            }
            (m =
              ((s[l >>> 24] << 24) |
                (s[(d >>> 16) & 255] << 16) |
                (s[(u >>> 8) & 255] << 8) |
                s[255 & h]) ^
              n[f++]),
              (g =
                ((s[d >>> 24] << 24) |
                  (s[(u >>> 16) & 255] << 16) |
                  (s[(h >>> 8) & 255] << 8) |
                  s[255 & l]) ^
                n[f++]),
              (v =
                ((s[u >>> 24] << 24) |
                  (s[(h >>> 16) & 255] << 16) |
                  (s[(l >>> 8) & 255] << 8) |
                  s[255 & d]) ^
                n[f++]),
              (h =
                ((s[h >>> 24] << 24) |
                  (s[(l >>> 16) & 255] << 16) |
                  (s[(d >>> 8) & 255] << 8) |
                  s[255 & u]) ^
                n[f++]),
              (e[t] = m),
              (e[t + 1] = g),
              (e[t + 2] = v),
              (e[t + 3] = h);
          },
          keySize: 8,
        });
        e.AES = t._createHelper(n);
      })(),
      (e.exports = o.AES);
  },
  function (e, t, n) {
    window.MarketGidCRtbBlock762628 = function (e) {
      this.afterLoadNewsHooks.push("cmPixelLoad"),
        (this.cmPixelLoad = function (t) {
          if (!e.context["i.js.loaded"] && e.cookieMatchingDomain) {
            e.context["i.js.loaded"] = !0;
            var n = window.MarketGidInfC762628.context.document.createElement(
              "script"
            );
            n.charset = "utf-8";
            var i = e.webProtocol + "//" + e.cookieMatchingDomain + "/i.js?",
              o = {};
            0;
            var r = e.getConsentData();
            r &&
              ((o.consentData = r.consentData),
              (o.gdprApplies = +r.gdprApplies)),
              (i += Object.keys(o)
                .map(function (e) {
                  return e + "=" + encodeURIComponent(o[e]);
                })
                .join("&")),
              (i += "&" + e.getCbusterParameter()),
              "string" == typeof t && "" != t && (i += t),
              (n.src = i),
              (n.type = "text/javascript"),
              (n.async = !0),
              (n.onerror = function () {
                e.context["i.js.loaded"] = !1;
              }),
              (void 0 !== window.MarketGidInfC762628.realRoot
                ? window.MarketGidInfC762628.realRoot
                : window.MarketGidInfC762628.root
              ).parentNode.appendChild(n);
          }
          if (!e.context["i-noref.js.loaded"] && e.cookieMatchingDomain) {
            e.context["i-noref.js.loaded"] = !0;
            var a = document.createElement("IFRAME");
            (a.src = "about:blank"),
              (a.frameBorder = 0),
              (a.style.position = "absolute"),
              (a.style.top = "0px"),
              (a.style.left = "-1px"),
              (a.style.width = "0px"),
              (a.style.height = "0px"),
              (a.style.display = "none"),
              (a.onload = function () {
                var t = this.contentDocument.createElement("script");
                t.charset = "utf-8";
                var n =
                  e.webProtocol +
                  "//" +
                  e.cookieMatchingDomain +
                  "/i-noref.js?" +
                  e.getCbusterParameter();
                (t.src = n),
                  (t.type = "text/javascript"),
                  (t.async = !0),
                  (t.onerror = function () {
                    e.context["i-noref.js.loaded"] = !1;
                  }),
                  this.contentDocument.body.appendChild(t);
              }),
              document.body.appendChild(a);
          }
        });
    };
  },
  function (e, t, n) {
    window.MarketGidCActivateDelayBlock762628 = function (e) {
      var t;
      e.clickableDelay = !1;
      var n = !1;
      e.afterLoadNewsHooks.push("initActivateDelay"),
        (e.isWagesLink = function (t) {
          var n = t.getAttribute("data-hash");
          return e.teaserData[n] && "w" === e.teaserData[n].coopType;
        }),
        (e.isCloseLink = function (e) {
          return e.classList.contains("mg-close-button-div-inner");
        }),
        (e.activateDelayLinkHandler = function (t, i) {
          return (
            !!n ||
            !!((e.clickableDelay && e.isWagesLink(t)) || e.isCloseLink(t)) ||
            void 0 !== e.servicerData.dc ||
            ((e.doubleClickType = "delay"),
            e.doubleClickHandler(t),
            (e.linksBlocked = !0),
            i.preventDefault(),
            !1)
          );
        }),
        (e.initActivateDelay = function (i, o, r) {
          if (!t) {
            t = !0;
            var a = parseInt(2e3);
            0,
              e.addClickHandler(
                e.clickHandlerList.activateDelayLink.handler,
                e.clickHandlerList.activateDelayLink.priority
              ),
              e.context.setTimeout(function () {
                (n = !0), (e.linksBlocked = !1), (e.clickableDelay = !1);
              }, a);
          }
        });
    };
  },
  function (e, t, n) {
    window.MarketGidCIframeSizeChangerBlock762628 = function (e) {
      e.afterLoadNewsHooks.push("initIframeSizeChange"),
        (e.initIframeSizeChange = function () {
          var t = null;
          try {
            if (
              ((void 0 !== t && null != t) ||
                (t = e.context.parent.document.getElementById(e.context.name)),
              void 0 !== t)
            )
              try {
                var n = e.context.parent.document.getElementById(
                  t.name + "__container__"
                ).parentNode;
                (n.style.width = "initial"), (n.style.height = "initial");
              } catch (e) {}
          } catch (t) {
            return (
              e.log("SafeFrame. Checking for support..."),
              void (e.isSafeFrameSupported() && e.isSafeFrameAllowedPush()
                ? (e.log("SafeFrame. Supported"),
                  e.safeFrameRegister(),
                  e.safeFrameExpand())
                : e.log("SafeFrame. Unsupported!"))
            );
          }
          if (null != t) {
            var i = "0".split("*");
            void 0 !== i[0] && (t.width = i[0] + "px"),
              void 0 !== i[1] && (t.height = i[1] + "px");
          }
        }),
        (e.isSafeFrameSupported = function () {
          return void 0 !== e.context.$sf;
        }),
        (e.isSafeFrameAllowedPush = function () {
          return e.context.$sf.ext.supports()["exp-push"];
        }),
        (e.safeFrameExpand = function () {
          e.log("SafeFrame. Expanding...");
          var t = e.context.$sf.ext.geom().exp,
            n = { push: !0, t: t.t, l: t.l, r: t.r, b: t.b };
          e.context.$sf.ext.expand(n);
        }),
        (e.safeFrameRegister = function () {
          e.log("SafeFrame. Register..."),
            e.context.$sf.ext.register(300, 250, function (t, n) {
              e.log("SafeFrame. " + t + "; " + JSON.stringify(n));
            });
        });
    };
  },
  function (e, t) {
    window.MarketGidCAccidentalClicksBlock762628 = function (e) {
      e.afterInitHooks.push("accidentalClicksLoad"),
        (e.accidentalClicksDelay =
          1e3 * (parseInt(e.globalSettings.accidental_clicks_delay) || 5)),
        (e.accidentalClicksDisableTypes = "wages".split(",")),
        (e.teasersClickTimes = {}),
        (e.accidentalClicksHandler = function (t, n) {
          if (2 === n.button) return !0;
          var i = t.getAttribute("data-hash"),
            o = new Date().getTime();
          if (e.doubleClickEnabled && void 0 === e.servicerData.dc) return !0;
          if (
            void 0 !== e.servicerData.dc &&
            i in e.hashTimer &&
            o - e.hashTimer[i] < e.servicerData.dc
          )
            return !0;
          switch (e.teaserData[i].coopType) {
            case "w":
              if (-1 == e.accidentalClicksDisableTypes.indexOf("wages"))
                return !0;
              break;
            case "e":
              if (-1 == e.accidentalClicksDisableTypes.indexOf("exchange"))
                return !0;
              break;
            case "i":
              if (-1 == e.accidentalClicksDisableTypes.indexOf("int_exchange"))
                return !0;
              break;
            default:
              return !0;
          }
          return e.teasersClickTimes.hasOwnProperty(i) &&
            new Date().getTime() - e.teasersClickTimes[i] <=
              e.accidentalClicksDelay
            ? (n.preventDefault(),
              (e.doubleClickType = "accidental"),
              e.doubleClickHandler(t),
              !1)
            : ((e.teasersClickTimes[i] = new Date().getTime()), !0);
        }),
        (e.accidentalClicksLoad = function () {
          e.addClickHandler(
            e.clickHandlerList.accidentalClicks.handler,
            e.clickHandlerList.accidentalClicks.priority
          );
        });
    };
  },
  function (e, t) {
    window.MarketGidCExternalCountersBlock762628 = function (e) {
      e.afterLoadNewsHooks.push("handleExternalCountersListener"),
        (e.externalCountersLinkHandler = function (t, n) {
          var i = t.getAttribute("data-hash");
          if (Array.isArray(e.teaserData[i].clicktrackers)) {
            var o = e.teaserData[i].clicktrackers;
            if (o.length)
              for (var r = 0; r < o.length; r++) {
                e.context.document.createElement("IMG").src = o[r];
              }
          }
          return !0;
        }),
        (e.handleExternalCountersListener = function () {
          e.addClickHandler(
            e.clickHandlerList.externalCountersLink.handler,
            e.clickHandlerList.externalCountersLink.priority
          );
        });
    };
  },
  function (e, t) {
    window.MarketGidCYandexTurboBlock762628 = function (e) {
      (e.isTurbo = function () {
        return (
          null != e.root.parentNode &&
          void 0 !== e.root.parentNode.dataset &&
          void 0 !== e.root.parentNode.dataset.widget
        );
      }),
        (e.executeTurboCallback = function () {
          var t = e.root.getBoundingClientRect();
          setInterval(function () {
            (t = e.root.getBoundingClientRect()),
              e.context.parent.postMessage(
                {
                  message: "loading-succeed",
                  height: t.height,
                  width: t.width,
                },
                "*"
              );
          }, 100);
        }),
        e.isTurbo() && e.afterLoadNewsHooks.push("executeTurboCallback");
    };
  },
  function (e, t) {
    window.MarketGidCContentPreviewBlock762628 = function (e) {
      e.afterLoadNewsHooks.push("addPreviewEvent"),
        (e.preloadAnimationStyles =
          ".image-container {\noverflow: hidden;}\n.preload {\n  background: #2a397b;\n  left: -100%;\n  position: absolute;\n  top: 0;\n  height: 4px;\n  width: 100%;\n  z-index: 2;\n  -webkit-animation: preloadAnimation linear .8s;\n  -moz-animation: preloadAnimation linear .8s;\n  -ms-animation: preloadAnimation linear .8s;\n  -o-animation: preloadAnimation linear .8s;\n  animation: preloadAnimation linear .8s;\n  -webkit-animation-iteration-count: 1;\n  -moz-animation-iteration-count: 1;\n  -ms-animation-iteration-count: 1;\n  -o-animation-iteration-count: 1;\n  animation-iteration-count: 1;\n}\n@keyframes preloadAnimation {\n  0% {\n    transform: translateX(0)\n  }\n  90% {\n    transform: translateX(100%)\n  }\n  100% {\n    transform: translateY(-2px)\n  }\n}\n@-moz-keyframes preloadAnimation {\n  0% {\n    -moz-transform: translateX(0)\n  }\n  90% {\n    -moz-transform: translateX(100%)\n  }\n  100% {\n    -moz-transform: translateY(-2px)\n  }\n}\n@-ms-keyframes preloadAnimation {\n  0% {\n    -ms-transform: translateX(0)\n  }\n  90% {\n    -ms-transform: translateX(100%)\n  }\n  100% {\n    -ms-transform: translateY(-2px)\n  }\n}"),
        (e.addPreviewEvent = function () {
          e.addEvent(e.root, "mouseover", function (t) {
            e.injectPreview(t);
          }),
            e.addEvent(e.root, "touchstart", function (t) {
              e.injectPreview(t);
            }),
            e.addEvent(e.root, "mouseout", function (t) {
              e.removePreview(t);
            }),
            e.addEvent(e.root, "touchend", function (t) {
              e.removePreview(t);
            }),
            e.addStyle("contentPreview", e.preloadAnimationStyles);
        }),
        (e.injectPreview = function (t) {
          if ("mcimg" === t.target.className) {
            var n = t.target.parentNode.parentNode.dataset.hash;
            if (
              void 0 !== e.teaserData[n] &&
              void 0 !== e.teaserData[n].other.vp
            ) {
              var i = e.context.document.createElement("div");
              i.setAttribute("class", "preload"),
                e.addEvent(i, "animationend", function (e) {
                  e.target.parentNode.removeChild(e.target);
                }),
                t.target.parentNode.appendChild(i),
                setTimeout(function () {
                  var i = e.context.document.createElement("video");
                  (i.src = e.teaserData[n].other.vp),
                    i.classList.add("previewContent"),
                    (i.loop = "loop"),
                    (i.autoplay = !0),
                    i.setAttribute("playsinline", ""),
                    (i.muted = "muted"),
                    (i.style.position = "absolute"),
                    (i.style.top = 0),
                    (i.style.left = 0),
                    (i.style.width = "100%"),
                    t.target.parentNode.appendChild(i);
                }, 100);
            }
          }
        }),
        (e.removePreview = function (t) {
          var n = t.target;
          "mouseout" === t.type && (n = t.relatedTarget);
          for (
            var i = e.root.querySelectorAll("video.previewContent"), o = 0;
            o < i.length;
            o++
          )
            null == n ||
              null == n.parentNode ||
              void 0 === n.parentNode.classList ||
              (n.parentNode.classList.contains("image-container") &&
                i[o] === n.parentNode.querySelector("video.previewContent")) ||
              ((i[o].parentNode.querySelector("img.mcimg").style.display =
                "block"),
              i[o].parentNode.removeChild(i[o]));
        });
    };
  },
  function (e, t, n) {
    window.MarketGidCCountersBlock762628 = function (e) {
      this.afterLoadNewsHooks.push("countersLoad"),
        (this.countersLoad = function () {
          if (parseInt(e.id) !== parseInt(762628)) {
            var t = e.childWidgetsData[e.id];
            t && t.hasNewsWidget ? t.newsWidgetIdPartner : null;
          }
        });
    };
  },
  function (e, t, n) {
    function i(e) {
      return (i =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            })(e);
    }
    var o = n(37);
    window.MarketGidCInArticleWidgetBlock762628 = function (e) {
      e.beforeLoadNewsHooks.push("hideInArticleWidgetBlock"),
        e.afterLoadNewsHooks.push("initInArticleWidget");
      e.context.document;
      var t = 0,
        n = 0;
      function r(e, t, n) {
        function r(e) {
          return !isNaN(parseFloat(e)) && isFinite(e);
        }
        (r(t) && r(n)) ||
          console.error(
            "SmartInformerCreator.constructor: Provided percentages must be numeric only. _percentageFrom: " +
              t +
              " _percentageTo: " +
              n +
              " given"
          ),
          t ||
            console.warn(
              "SmartInformerCreator.constructor: Percentage from was excepted but it was not given. Default value (30% will be used)"
            ),
          n ||
            console.warn(
              "SmartInformerCreator.constructor: Percentage to was excepted but it was not given. Default value (60% will be used)"
            ),
          (t < 0 || t > 100) &&
            console.error(
              "SmartInformerCreator.constructor: _percentageFrom param must be between 0-100 and lower than _percentageTo. " +
                t +
                " given"
            ),
          (n < 0 || n > 100) &&
            console.error(
              "SmartInformerCreator.constructor: _percentageFrom param must be between 0-100 and lower than _percentageTo. " +
                t +
                " given"
            ),
          t > n &&
            console.error(
              "SmartInformerCreator.constructor: _percentageFrom > _percentageTo. This must be _percentageFrom < _percentageTo"
            );
        var a = this,
          s = e;
        s.parentNode && s.parentNode.removeChild(s);
        var c,
          l,
          d,
          u,
          h,
          f = null == t ? 30 : t,
          p = null == n ? 60 : n,
          m = 0,
          g = 0,
          v = 0,
          y = !1,
          w = {};
        function b(e) {
          if (e.id) {
            var t = parent.document.getElementById(e.id);
            return t ? t.parentNode : null;
          }
          if (e.classList && e.classList.length) {
            var n = [];
            [].forEach.call(e.classList, function (e) {
              n.push(e);
            });
            var i = parent.document.getElementsByClassName(n.join(" "));
            return i.length && void 0 !== i[0] ? i[0].parentNode : null;
          }
          return e.parentNode ? x(e.parentNode) : null;
        }
        function x(e, t, n) {
          var i = t || !1,
            o = n || 0;
          if (e[0] && i && 1 === o) {
            var r = e[0];
            if (r.id) return parent.document.getElementById(r.id);
            if (r.classList && r.classList.length) {
              var a = [];
              return (
                [].forEach.call(r.classList, function (e) {
                  a.push(e);
                }),
                parent.document.querySelector(r.tagName + "." + a.join("."))
                  .parentNode
              );
            }
            return null;
          }
          var s = null;
          return (
            Array.isHTMLCollection(e) && e.length
              ? [].forEach.call(e, function (e) {
                  s = b(e);
                })
              : (s = b(e)),
            s
          );
        }
        function k(e) {
          return (
            !(0 !== g || !a.articleAcceptedWidth) ||
            (e <= g && a.articleAcceptedWidth <= e)
          );
        }
        function C(e) {
          if (!e || !e.parentNode) return e;
          if (k(A(e.parentNode))) {
            var t = (function (e) {
              if (!e.children)
                return (
                  console.warn(
                    "SmartInformerCreator._getChildWithSuitableWidth: Children were waited but, " +
                      i(e.children) +
                      "given"
                  ),
                  null
                );
              var t = null;
              if (e.children)
                return (
                  [].forEach.call(e.children, function (e) {
                    !t && (t = k(A(e)) ? e : null);
                  }),
                  t
                );
              return k(A(e.children[0])) ? e.children[0] : null;
            })(e.parentNode);
            return t || e.parentNode;
          }
          return C(e.parentNode);
        }
        function E(e, t) {
          if (m <= 300)
            return (
              console.warn(
                "SmartInformerCreator._insert: Article is too small to render informer block"
              ),
              void (y = !0)
            );
          var n = t || !1,
            i = (function e(t) {
              var n = Array.prototype.indexOf.call(t.parentNode.children, t),
                i = t.parentNode.children[n + 1];
              return i && !i.clientHeight ? e(i) : i;
            })(e);
          if (_(e, ["FIGURE", "IMG", "TABLE", "IFRAME", "TIME", "CODE"]))
            return (
              e.parentNode.insertBefore(d, e.nextSibling),
              (d = parent.document.getElementById(d.id)),
              void (s.parentNode || (d.appendChild(s), (y = !0)))
            );
          if (
            (function (e, t) {
              if (!t || !t.length)
                return (
                  console.warn(
                    "SmartInformerCreator._hasChildWithClass: tags MUST NOT be empty array"
                  ),
                  !1
                );
              if (void 0 === e) return !1;
              if (!e.children || 0 === e.children.length) return !1;
              var n = !1;
              return (
                [].forEach.call(e.children, function (e) {
                  e.children &&
                    e.children.length > 0 &&
                    [].forEach.call(e.children, function (e) {
                      n || (n = _(e, t));
                    }),
                    n ||
                      t.forEach(function (t) {
                        n || (n = e.classList.contains(t));
                      });
                }),
                n
              );
            })(i, [
              "SC_TBlock",
              "fb_iframe_widget",
              "twitter-tweet-button",
              "adsbygoogle",
            ])
          )
            E(i, !1);
          else {
            if (
              ("IMG" !== e.tagName && !k(e.clientWidth)) ||
              (-1 != e.className.indexOf("size-full") && !k(e.clientWidth))
            ) {
              var o = C(e);
              return (
                o.parentNode
                  ? o.parentNode.insertBefore(d, o)
                  : e.parentNode.insertBefore(d, n ? e : e.nextSibling),
                void S(s)
              );
            }
            -1 != ["H1", "H2", "H3", "H4", "H5", "H6"].indexOf(e.tagName) ||
            I(i, ["UL", "OL"]) ||
            I(i, ["FIGURE", "IMG", "TABLE", "IFRAME", "TIME", "CODE"])
              ? void 0 !== i.nextSibling
                ? e.parentNode.insertBefore(d, i.nextSibling)
                : console.error(
                    "SmartInformerCreator._insert: Cant insert informer block after image - it does not exist"
                  )
              : _(e, ["INS"])
              ? e.parentNode.insertBefore(d, i)
              : e.parentNode.insertBefore(d, n ? e : e.nextSibling),
              S(s);
          }
        }
        function S(e) {
          d.id != d.id &&
            (d = parent.document.getElementById(d.id)).appendChild(e),
            (y = !0);
        }
        function I(e, t) {
          return (void 0 !== e && -1 != t.indexOf(e.tagName)) || _(e, t);
        }
        function _(e, t) {
          if (!t || !t.length)
            return (
              console.warn(
                "SmartInformerCreator._hasChildTags: tags MUST NOT be empty array"
              ),
              !1
            );
          if (void 0 === e) return !1;
          if (!e.children || 0 === e.children.length) return !1;
          var n = !1;
          return (
            [].forEach.call(e.children, function (e) {
              e.children &&
                e.children.length > 0 &&
                [].forEach.call(e.children, function (e) {
                  n || (n = _(e, t));
                }),
                n || (-1 != t.indexOf(e.tagName) && (n = !0));
            }),
            n
          );
        }
        function A(e) {
          if (e && !O(e)) {
            var t = e.clientWidth;
            return (
              t ||
              (e.children && 0 === e.children.length && 0 === t
                ? t
                : e.children
                ? ([].forEach.call(e.children, function (e) {
                    t = e.children
                      ? A(e)
                      : e.clientWidth + A(e) + M(e, "right");
                  }),
                  t)
                : t)
            );
          }
        }
        function T(e) {
          var t = 0;
          if (parent.document.createRange) {
            var n = parent.document.createRange();
            if ((n.selectNodeContents(e), n.getBoundingClientRect)) {
              var i = n.getBoundingClientRect();
              i && (t = i.bottom - i.top);
            }
          }
          return t;
        }
        function M(e, t) {
          try {
            var n = (e.currentStyle || window.parent.getComputedStyle(e))[
              "margin" +
                ((i = t.toLowerCase()), i.charAt(0).toUpperCase() + i.slice(1))
            ].replace("px", "");
            return r(n) ? parseInt(n) : 0;
          } catch (t) {
            return "#text" === e.nodeName ? T(e) : 0;
          }
          var i;
        }
        function D(e) {
          if (!y && e && !O(e) && void 0 !== e.clientHeight) {
            var t = 0;
            if (
              0 !==
                (t = L(e)
                  ? T(e)
                  : (function e(t) {
                      if (t) {
                        var n = 0;
                        return (n = L(t) ? T(t) : t.clientHeight)
                          ? n + M(t, "bottom") + M(t, "top")
                          : ((t.children &&
                              0 === t.children.length &&
                              0 === n) ||
                              [].forEach.call(t.children, function (t) {
                                n = t.children
                                  ? e(t)
                                  : t.clientHeight +
                                    M(t, "bottom") +
                                    M(t, "top");
                              }),
                            n);
                      }
                    })(e)) &&
              ((v += t), !w.beforeGoal)
            ) {
              if (w.neededGoal) {
                if (_(e, ["P", "BLOCKQUOTE", "PRE"]))
                  return (
                    (v -= t),
                    void [].forEach.call(e.children, function (e) {
                      D(e);
                    })
                  );
                if (
                  -1 !=
                  ["TR", "TD", "THEAD", "TBODY", "TFOOTER", "TABLE"].indexOf(
                    e.tagName
                  )
                ) {
                  return void E(
                    (function e(t) {
                      return "TABLE" === t.tagName
                        ? t
                        : t.parentNode && "TABLE" !== t.parentNode.tagName
                        ? e(t.parentNode)
                        : t.parentNode;
                    })(e)
                  );
                }
                return -1 != ["LI", "INS", "IMG", "TABLE"].indexOf(e.tagName)
                  ? "LI" === e.tagName && f <= 10
                    ? void E(e, !0)
                    : void E(e.parentNode)
                  : void E(e);
              }
              if (w.afterGoal) {
                if (
                  (v -= t) + t < m &&
                  -1 !=
                    ["IFRAME", "IMG", "FIGURE", "TIME", "CODE"].indexOf(
                      e.tagName
                    )
                )
                  return void E(e);
                if ((t >= m || v + t >= m) && e.children && e.children.length)
                  return void N(e);
                if (-1 != ["P", "BLOCKQUOTE", "PRE", "SPAN"].indexOf(e.tagName))
                  return -1 != ["BLOCKQUOTE", "PRE"].indexOf(e.tagName)
                    ? e.children
                      ? void [].forEach.call(e.children, function (e) {
                          D(e);
                        })
                      : void E(e)
                    : _(e, ["IMG", "FIGURE", "IFRAME"])
                    ? void E(
                        (function e(t, n) {
                          if (!n)
                            return (
                              console.warn(
                                "SmartInformerCreator._getFirstChildByTag: - tag MUST NOT be empty array"
                              ),
                              !1
                            );
                          if (void 0 === t)
                            return (
                              console.warn(
                                "SmartInformerCreator._getFirstChildByTag: - Node MUST NOT be empty "
                              ),
                              !1
                            );
                          if (!t.children || 0 === t.children.length) return !1;
                          var i = null;
                          return (
                            [].forEach.call(t.children, function (t) {
                              t.children &&
                                t.children.length > 0 &&
                                [].forEach.call(t.children, function (t) {
                                  i || (i = e(t, n));
                                }),
                                i || (-1 != n.indexOf(t.tagName) && (i = t));
                            }),
                            i
                          );
                        })(e, ["IMG", "FIGURE", "IFRAME"])
                      )
                    : f >= 70 && v + t <= m
                    ? void E(e)
                    : void E(e, !0);
                N(e);
              }
            }
          }
        }
        function N(e) {
          e &&
            (e.children && e.children.length
              ? [].forEach.call(e.children, function (e) {
                  D(e);
                })
              : (function e(t) {
                  t.parentNode.children.length > 1
                    ? D(t.nextSibling)
                    : e(t.parentNode.nextSibling);
                })(e));
        }
        Object.defineProperties(this, {
          articleAcceptedWidth: {
            get: function () {
              return g - (20 * g) / 100;
            },
          },
        }),
          Object.defineProperties(w, {
            beforeGoal: {
              get: function () {
                return 0 === v || v <= u;
              },
            },
            neededGoal: {
              get: function () {
                return v >= u && v <= h;
              },
            },
            afterGoal: {
              get: function () {
                return v >= h || v <= m;
              },
            },
          });
        var P = [
            "native_ad",
            "adds",
            "td-post-next-prev",
            "adsb30",
            "sadserver",
            "adsbygoogle",
            "fb-share-button",
            "fb_iframe_widget",
            "fb-comments",
            "td_block_related_posts",
            "td-post-sharing",
            "td-post-sharing-top",
            "sharing",
            "shareaholic-ui",
            "comments",
            "related",
            "share",
            "at-share-btn-elements",
            "post-footer",
          ],
          B = [
            "ad-space",
            "fb_comments_div",
            "ad-space",
            "div-gpt-ad",
            "MarketGidScript",
            "MarketGidScriptRoot",
            "disqus_comments_div",
            "ScriptRoot",
            "Preload",
            "MarketGidComposite",
            "SC_TBlock",
            e.id,
          ];
        function O(e) {
          var t = !1;
          return (
            B.forEach(function (n) {
              !t && e.id && (t = e.id.includes(n));
            }),
            !!t ||
              (P.forEach(function (n) {
                !t &&
                  e.className &&
                  "svg" !== e.tagName &&
                  (t = -1 != e.className.indexOf(n));
              }),
              e.children &&
                e.children[2] &&
                "INS" === e.children[2].tagName &&
                e.children[2].classList &&
                e.children[2].classList.contains("adsbygoogle") &&
                (t = !0),
              t)
          );
        }
        function L(e) {
          return e.nodeType === Node.TEXT_NODE;
        }
        function R(e) {
          if (e && "FOOTER" !== e.tagName && !O(e)) {
            if (
              ("Microsoft Internet Explorer" == navigator.appName ||
                navigator.userAgent.match(/Trident/) ||
                navigator.userAgent.match(/rv:11/)) &&
              "[object Text]" === Object.prototype.toString.call(e) &&
              "" === e.nodeValue.trim()
            )
              return 0;
            var t = 0;
            if (
              (L(e)
                ? (t += T(e))
                : "BR" === e.tagName &&
                  e.nextSibling &&
                  "BR" === e.nextSibling.tagName
                ? (t += (function (e) {
                    var t = e.parentNode,
                      n = e.currentStyle || window.parent.getComputedStyle(t),
                      i = n.fontSize.replace("px", ""),
                      o = n.lineHeight.replace("px", "");
                    return (
                      (i = r(i) ? parseInt(i) : 0) +
                      (o = r(o) ? parseInt(o) : 0)
                    );
                  })(e))
                : (t += e.clientHeight + M(e, "bottom") + M(e, "top")),
              t)
            )
              (!(e.childNodes && 0 === e.childNodes.length) &&
                !(function e(t) {
                  if (!t.children || 0 === t.children) return !0;
                  var n = !0;
                  return (
                    [].forEach.call(t.children, function (t) {
                      n &&
                        (0 === t.clientHeight
                          ? !n && t.children && t.children.length && (n = e(t))
                          : (n = !1));
                    }),
                    n
                  );
                })(e)) ||
              0 === t
                ? [].forEach.call(e.childNodes, function (e) {
                    R(e);
                  })
                : (m += t);
          }
        }
        function G(e) {
          if (e) {
            var t = e.clientWidth + M(e, "left") + M(e, "right");
            t &&
              (((e.children && 0 === e.children.length) ||
                (function e(t) {
                  if (!t.children || 0 === t.children)
                    return 0 === t.clientWidth;
                  var n = !1;
                  return (
                    [].forEach.call(t.children, function (t) {
                      n ||
                        (0 === t.clientWidth
                          ? (n = !0)
                          : t.children && t.children.length && (n = e(t)));
                    }),
                    n
                  );
                })(e)) &&
              0 !== t &&
              -1 !=
                [
                  "P",
                  "PRE",
                  "BLOCKQUOTE",
                  "H1",
                  "H2",
                  "H3",
                  "H4",
                  "H5",
                  "H6",
                ].indexOf(e.tagName)
                ? g <= t && (g = t)
                : e.children &&
                  [].forEach.call(e.children, function (e) {
                    G(e);
                  }));
          }
        }
        function H() {
          l && (R(l), G(l), (u = (m * f) / 100), (h = (m * p) / 100));
        }
        return (
          (function (e) {
            (d = e).classList.add("yui3-cssreset");
            var t = {
              animation: "none",
              "animation-delay": "0",
              "animation-direction": "normal",
              "animation-duration": "0",
              "animation-fill-mode": "none",
              "animation-iteration-count": "1",
              "animation-name": "none",
              "animation-play-state": "running",
              "animation-timing-function": "ease",
              "backface-visibility": "visible",
              background: "0",
              "background-attachment": "scroll",
              "background-clip": "borderBox",
              "background-color": "transparent",
              "background-image": "none",
              "background-origin": "paddingBox",
              "background-position": "0 0",
              "background-position-x": "0",
              "background-position-y": "0",
              "background-repeat": "repeat",
              "background-size": "auto auto",
              border: "0",
              "border-style": "none",
              "border-width": "medium",
              "border-color": "inherit",
              "border-bottom": "0",
              "border-bottom-color": "inherit",
              "border-bottom-left-radius": "0",
              "border-bottom-right-radius": "0",
              "border-bottom-style": "none",
              "border-bottom-width": "medium",
              "border-collapse": "separate",
              "border-image": "none",
              "border-left": "0",
              "border-left-color": "inherit",
              "border-left-style": "none",
              "border-left-width": "medium",
              "border-radius": "0",
              "border-right": "0",
              "border-right-color": "inherit",
              "border-right-style": "none",
              "border-right-width": "medium",
              "border-spacing": "0",
              "border-top": "0",
              "border-top-color": "inherit",
              "border-top-left-radius": "0",
              "border-top-right-radius": "0",
              "border-top-style": "none",
              "border-top-width": "medium",
              bottom: "auto",
              "box-shadow": "none",
              "box-sizing": "contentBox",
              "caption-side": "top",
              clear: "none",
              clip: "auto",
              color: "inherit",
              columns: "auto",
              "column-count": "auto",
              "column-fill": "balance",
              "column-gap": "normal",
              "column-rule": "medium none currentColor",
              "column-rule-color": "currentColor",
              "column-rule-style": "none",
              "column-rule-width": "none",
              "column-span": "1",
              "column-width": "auto",
              content: "normal",
              "counter-increment": "none",
              "counter-reset": "none",
              cursor: "auto",
              direction: "ltr",
              display: "inline",
              "empty-cells": "show",
              font: "normal",
              "font-family": "inherit",
              "font-size": "medium",
              "font-style": "normal",
              "font-variant": "normal",
              "font-weight": "normal",
              height: "auto",
              hyphens: "none",
              left: "auto",
              "letter-spacing": "normal",
              "line-height": "normal",
              "list-style": "none",
              "list-style-image": "none",
              "list-style-position": "outside",
              "list-style-type": "disc",
              margin: "0",
              "margin-bottom": "0",
              "margin-left": "0",
              "margin-right": "0",
              "margin-top": "10px",
              "max-height": "none",
              "max-width": "none",
              "min-height": "0",
              "min-width": "0",
              opacity: "1",
              orphans: "0",
              outline: "0",
              "outline-color": "invert",
              "outline-style": "none",
              "outline-width": "medium",
              overflow: "visible",
              "overflow-x": "visible",
              "overflow-y": "visible",
              padding: "0",
              "padding-bottom": "0",
              "padding-left": "0",
              "padding-right": "0",
              "padding-top": "0",
              "page-break-after": "auto",
              "page-break-before": "auto",
              "page-break-inside": "auto",
              perspective: "none",
              "perspective-origin": "50% 50%",
              position: "static",
              quotes: "'\\201C' '\\201D' '\\2018' '\\2019'",
              right: "auto",
              tabSize: "8",
              "table-layout": "auto",
              "text-align": "inherit",
              "text-alignLast": "auto",
              "text-decoration": "none",
              "text-decoration-color": "inherit",
              "text-decoration-line": "none",
              "text-decoration-style": "solid",
              "text-indent": "0",
              "text-shadow": "none",
              "text-transform": "none",
              top: "auto",
              transform: "none",
              "transform-style": "flat",
              transition: "none",
              "transition-delay": "0s",
              "transition-duration": "0s",
              "transition-property": "none",
              "transition-timing-fFunction": "ease",
              "unicode-bidi": "normal",
              "vertical-align": "baseline",
              visibility: "visible",
              "white-space": "normal",
              widows: "0",
              width: "100%",
              "word-spacing": "normal",
              "z-index": "auto",
            };
            Object.keys(t).forEach(function (e) {
              d.style.setProperty(e, t[e], "important");
            });
          })(e),
          (function () {
            var e = parent.document.location;
            if (
              ((c = new o(
                {
                  spec: e.href,
                  host: e.host,
                  prePath: e.protocol + "//" + e.host,
                  scheme: e.protocol.substr(0, e.protocol.indexOf(":")),
                  pathBase:
                    e.protocol +
                    "//" +
                    e.host +
                    e.pathname.substr(0, e.pathname.lastIndexOf("/") + 1),
                },
                parent.document.cloneNode(!0)
              ).parse()),
              !(l = x(c.rootElements, !0, c.rootElements.length)) && c.selector)
            )
              try {
                l = document.querySelector(c.selector);
              } catch (e) {
                console.error(e);
              }
            !(function () {
              if (
                l &&
                l.parentNode &&
                l.parentNode.children[0] &&
                "HEADER" === l.parentNode.children[0].tagName
              )
                return void (l = l.parentNode);
              if (l && "wrap" === l.id && "content" === l.children[0].id)
                return void (l = l.children[0]);
              var e = parent.document.querySelector("a.logo.custom-logo-18");
              if (e)
                return void (l = parent.document.getElementsByClassName(
                  "content_text"
                )[0]);
              if (
                (e = parent.document.querySelector(
                  "div#page-wrap > center>img"
                ))
              )
                return void (l = parent.document.getElementsByClassName(
                  "detail-left-side"
                )[0]);
              if (l) {
                var t = null,
                  n = !1;
                if (
                  ([
                    "div.td-pb-row > div.td-pb-span8.td-main-content > div.td-ss-main-content > article",
                    "div.entry-content",
                  ].forEach(function (e) {
                    n || ((t = l.querySelector(e)) && ((l = t), (n = !0)));
                  }),
                  n)
                )
                  return;
              }
              if (
                l &&
                l.classList.contains("post-body") &&
                l.classList.contains("entry-content")
              )
                return void (l = l.parentNode);
              null === l &&
                c.rootElements &&
                Array.isHTMLCollection(c.rootElements) &&
                [].forEach.call(c.rootElements, function (e) {
                  "ARTICLE" === e.tagName
                    ? (l = parent.document.querySelector(e.tagName))
                    : "articleBody" === e.getAttribute("itemprop")
                    ? (l = parent.document.querySelector(
                        'div[itemprop="articleBody"]'
                      ))
                    : "main" === e.getAttribute("role")
                    ? (l = parent.document.querySelector('main[role="main"]'))
                    : "" !== e.getAttribute("data-io-article-url")
                    ? (l = parent.document.querySelector(
                        'div[class="media m-t"]'
                      ))
                    : console.info(
                        "SmartInformerCreator._parseArticle: Cant parse article. You should add this new condition to the code"
                      );
                });
              if (l) return;
              console.error(
                "SmartInformerCreator._parseArticle: Article In DOM not recognized"
              );
            })();
          })(),
          H(),
          {
            create: function () {
              var e;
              l
                ? (l.children ||
                    l.length ||
                    console.error(
                      "SmartInformerCreator._initiateCreating: Article cant be without any children"
                    ),
                  0 === m && H(),
                  l.length
                    ? [].forEach.call(l, function (e) {
                        [].forEach.call(e.children, function (e) {
                          D(e);
                        });
                      })
                    : ([].forEach.call(l.children, function (t) {
                        (e = t), D(t);
                      }),
                      y || E(e)))
                : console.error(
                    "SmartInformerCreator._initiateCreating: Article was not found"
                  );
            },
          }
        );
      }
      "top" === e.widgetConstructorData.autoplacement
        ? ((t = 10), (n = 20))
        : "middle" === e.widgetConstructorData.autoplacement
        ? ((t = 45), (n = 55))
        : "bottom" === e.widgetConstructorData.autoplacement &&
          ((t = 90), (n = 99)),
        (e.hideInArticleWidgetBlock = function () {
          (void 0 !== e.realRoot ? e.realRoot : e.root).style.display = "none";
        }),
        (e.initInArticleWidget = function () {
          try {
            new r(void 0 !== e.realRoot ? e.realRoot : e.root, t, n).create();
          } catch (t) {
            return (
              ((void 0 !== e.realRoot ? e.realRoot : e.root).style.display =
                "block"),
              console.log("error:", t),
              !1
            );
          }
          (void 0 !== e.realRoot ? e.realRoot : e.root).style.display = "block";
        }),
        "document" in e &&
          (("classList" in parent.document.createElement("_") &&
            (!parent.document.createElementNS ||
              "classList" in
                parent.document.createElementNS(
                  "http://www.w3.org/2000/svg",
                  "g"
                ))) ||
            (function (e) {
              "use strict";
              if ("Element" in e) {
                var t = "classList",
                  n = "prototype",
                  i = e.Element[n],
                  o = Object,
                  r =
                    String[n].trim ||
                    function () {
                      return this.replace(/^\s+|\s+$/g, "");
                    },
                  a =
                    Array[n].indexOf ||
                    function (e) {
                      for (var t = 0, n = this.length; n > t; t++)
                        if (t in this && this[t] === e) return t;
                      return -1;
                    },
                  s = function (e, t) {
                    (this.name = e),
                      (this.code = DOMException[e]),
                      (this.message = t);
                  },
                  c = function (e, t) {
                    if ("" === t)
                      throw new s(
                        "SYNTAX_ERR",
                        "An invalid or illegal string was specified"
                      );
                    if (/\s/.test(t))
                      throw new s(
                        "INVALID_CHARACTER_ERR",
                        "String contains an invalid character"
                      );
                    return a.call(e, t);
                  },
                  l = function (e) {
                    for (
                      var t = r.call(e.getAttribute("class") || ""),
                        n = t ? t.split(/\s+/) : [],
                        i = 0,
                        o = n.length;
                      o > i;
                      i++
                    )
                      this.push(n[i]);
                    this._updateClassName = function () {
                      e.setAttribute("class", "" + this);
                    };
                  },
                  d = (l[n] = []),
                  u = function () {
                    return new l(this);
                  };
                if (
                  ((s[n] = Error[n]),
                  (d.item = function (e) {
                    return this[e] || null;
                  }),
                  (d.contains = function (e) {
                    return -1 !== c(this, (e += ""));
                  }),
                  (d.add = function () {
                    var e,
                      t = arguments,
                      n = 0,
                      i = t.length,
                      o = !1;
                    do {
                      (e = t[n] + ""),
                        -1 === c(this, e) && (this.push(e), (o = !0));
                    } while (++n < i);
                    o && this._updateClassName();
                  }),
                  (d.remove = function () {
                    var e,
                      t,
                      n = arguments,
                      i = 0,
                      o = n.length,
                      r = !1;
                    do {
                      for (e = n[i] + "", t = c(this, e); -1 !== t; )
                        this.splice(t, 1), (r = !0), (t = c(this, e));
                    } while (++i < o);
                    r && this._updateClassName();
                  }),
                  (d.toggle = function (e, t) {
                    e += "";
                    var n = this.contains(e),
                      i = n ? !0 !== t && "remove" : !1 !== t && "add";
                    return i && this[i](e), !0 === t || !1 === t ? t : !n;
                  }),
                  (d.toString = function () {
                    return this.join(" ");
                  }),
                  o.defineProperty)
                ) {
                  var h = { get: u, enumerable: !0, configurable: !0 };
                  try {
                    o.defineProperty(i, t, h);
                  } catch (e) {
                    (void 0 === e.number || -2146823252 === e.number) &&
                      ((h.enumerable = !1), o.defineProperty(i, t, h));
                  }
                } else o[n].__defineGetter__ && i.__defineGetter__(t, u);
              }
            })(e),
          (function () {
            "use strict";
            var e = parent.document.createElement("_");
            if ((e.classList.add("c1", "c2"), !e.classList.contains("c2"))) {
              var t = function (e) {
                var t = DOMTokenList.prototype[e];
                DOMTokenList.prototype[e] = function (e) {
                  var n,
                    i = arguments.length;
                  for (n = 0; i > n; n++) (e = arguments[n]), t.call(this, e);
                };
              };
              t("add"), t("remove");
            }
            if ((e.classList.toggle("c3", !1), e.classList.contains("c3"))) {
              var n = DOMTokenList.prototype.toggle;
              DOMTokenList.prototype.toggle = function (e, t) {
                return 1 in arguments && !this.contains(e) == !t
                  ? t
                  : n.call(this, e);
              };
            }
            e = null;
          })()),
        Array.isHTMLCollection ||
          (Array.isHTMLCollection = function (e) {
            return (
              "[object HTMLCollection]" === Object.prototype.toString.call(e)
            );
          }),
        [].includes ||
          (Array.prototype.includes = function (e) {
            "use strict";
            var t = Object(this),
              n = parseInt(t.length) || 0;
            if (0 === n) return !1;
            var i,
              o = parseInt(arguments[1]) || 0;
            for (o >= 0 ? (i = o) : (i = n + o) < 0 && (i = 0); i < n; ) {
              var r = t[i];
              if (e === r || (e != e && r != r)) return !0;
              i++;
            }
            return !1;
          }),
        function () {
          var e =
            [].indexOf ||
            function (e) {
              for (var t = 0, n = this.length; t < n; t++)
                if (t in this && this[t] === e) return t;
              return -1;
            };
          (function () {
            function t(e) {
              null == e && (e = {}),
                (this.options = {}),
                this.setOptions(this.default_options),
                this.setOptions(e);
            }
            return (
              (t.prototype.default_options = {
                selectors: ["id", "class", "tag", "nthchild"],
              }),
              (t.prototype.setOptions = function (e) {
                var t, n, i;
                for (t in (null == e && (e = {}), (n = []), e))
                  (i = e[t]),
                    this.default_options.hasOwnProperty(t)
                      ? n.push((this.options[t] = i))
                      : n.push(void 0);
                return n;
              }),
              (t.prototype.isElement = function (e) {
                return !(1 !== (null != e ? e.nodeType : void 0));
              }),
              (t.prototype.getParents = function (e) {
                var t, n;
                if (((n = []), this.isElement(e)))
                  for (t = e; this.isElement(t); )
                    n.push(t), (t = t.parentNode);
                return n;
              }),
              (t.prototype.getTagSelector = function (e) {
                return this.sanitizeItem(e.tagName.toLowerCase());
              }),
              (t.prototype.sanitizeItem = function (e) {
                return e
                  .split("")
                  .map(function (e) {
                    return ":" === e
                      ? "\\" +
                          ":".charCodeAt(0).toString(16).toUpperCase() +
                          " "
                      : /[ !"#$%&'()*+,.\/;<=>?@\[\\\]^`{|}~]/.test(e)
                      ? "\\" + e
                      : escape(e).replace(/\%/g, "\\");
                  })
                  .join("");
              }),
              (t.prototype.getIdSelector = function (e) {
                var t, n;
                return null == (t = e.getAttribute("id")) ||
                  "" === t ||
                  /\s/.exec(t) ||
                  /^\d/.exec(t) ||
                  ((n = "#" + this.sanitizeItem(t)),
                  1 !== e.ownerDocument.querySelectorAll(n).length)
                  ? null
                  : n;
              }),
              (t.prototype.getClassSelectors = function (e) {
                var t, n, i;
                return (
                  (i = []),
                  null != (t = e.getAttribute("class")) &&
                    "" !==
                      (t = (t = t.replace(/\s+/g, " ")).replace(
                        /^\s|\s$/g,
                        ""
                      )) &&
                    (i = function () {
                      var e, i, o, r;
                      for (
                        r = [], e = 0, i = (o = t.split(/\s+/)).length;
                        e < i;
                        e++
                      )
                        (n = o[e]), r.push("." + this.sanitizeItem(n));
                      return r;
                    }.call(this)),
                  i
                );
              }),
              (t.prototype.getAttributeSelectors = function (t) {
                var n, i, o, r, a, s, c;
                for (
                  c = [],
                    i = ["id", "class"],
                    o = 0,
                    r = (a = t.attributes).length;
                  o < r;
                  o++
                )
                  (s = (n = a[o]).nodeName),
                    e.call(i, s) < 0 &&
                      c.push("[" + n.nodeName + "=" + n.nodeValue + "]");
                return c;
              }),
              (t.prototype.getNthChildSelector = function (e) {
                var t, n, i, o, r, a;
                if (null != (o = e.parentNode))
                  for (t = 0, n = 0, i = (a = o.childNodes).length; n < i; n++)
                    if (((r = a[n]), this.isElement(r) && (t++, r === e)))
                      return ":nth-child(" + t + ")";
                return null;
              }),
              (t.prototype.testSelector = function (e, t) {
                var n, i;
                return (
                  (n = !1),
                  null != t &&
                    "" !== t &&
                    1 === (i = e.ownerDocument.querySelectorAll(t)).length &&
                    i[0] === e &&
                    (n = !0),
                  n
                );
              }),
              (t.prototype.getAllSelectors = function (t) {
                var n;
                return (
                  (n = { t: null, i: null, c: null, a: null, n: null }),
                  e.call(this.options.selectors, "tag") >= 0 &&
                    (n.t = this.getTagSelector(t)),
                  e.call(this.options.selectors, "id") >= 0 &&
                    (n.i = this.getIdSelector(t)),
                  e.call(this.options.selectors, "class") >= 0 &&
                    (n.c = this.getClassSelectors(t)),
                  e.call(this.options.selectors, "attribute") >= 0 &&
                    (n.a = this.getAttributeSelectors(t)),
                  e.call(this.options.selectors, "nthchild") >= 0 &&
                    (n.n = this.getNthChildSelector(t)),
                  n
                );
              }),
              (t.prototype.testUniqueness = function (e, t) {
                var n;
                return (
                  1 === (n = e.parentNode.querySelectorAll(t)).length &&
                  n[0] === e
                );
              }),
              (t.prototype.testCombinations = function (e, t, n) {
                var i, o, r, a, s, c, l;
                for (
                  o = 0, a = (c = this.getCombinations(t)).length;
                  o < a;
                  o++
                )
                  if (((i = c[o]), this.testUniqueness(e, i))) return i;
                if (null != n)
                  for (
                    r = 0,
                      s = (l = t.map(function (e) {
                        return n + e;
                      })).length;
                    r < s;
                    r++
                  )
                    if (((i = l[r]), this.testUniqueness(e, i))) return i;
                return null;
              }),
              (t.prototype.getUniqueSelector = function (e) {
                var t, n, i, o, r;
                for (
                  r = this.getAllSelectors(e),
                    n = 0,
                    i = (o = this.options.selectors).length;
                  n < i;
                  n++
                )
                  switch (o[n]) {
                    case "id":
                      if (null != r.i) return r.i;
                      break;
                    case "tag":
                      if (null != r.t && this.testUniqueness(e, r.t))
                        return r.t;
                      break;
                    case "class":
                      if (
                        null != r.c &&
                        0 !== r.c.length &&
                        (t = this.testCombinations(e, r.c, r.t))
                      )
                        return t;
                      break;
                    case "attribute":
                      if (
                        null != r.a &&
                        0 !== r.a.length &&
                        (t = this.testCombinations(e, r.a, r.t))
                      )
                        return t;
                      break;
                    case "nthchild":
                      if (null != r.n) return r.n;
                  }
                return "*";
              }),
              (t.prototype.getSelector = function (e) {
                var t, n, i, o, r, a, s, c, l, d;
                for (
                  t = [], i = 0, r = (s = this.getParents(e)).length;
                  i < r;
                  i++
                )
                  (n = s[i]),
                    null != (l = this.getUniqueSelector(n)) && t.push(l);
                for (d = [], o = 0, a = t.length; o < a; o++)
                  if (
                    ((n = t[o]),
                    d.unshift(n),
                    (c = d.join(" > ")),
                    this.testSelector(e, c))
                  )
                    return c;
                return null;
              }),
              (t.prototype.getCombinations = function (e) {
                var t, n, i, o, r, a, s;
                for (
                  null == e && (e = []), s = [[]], t = i = 0, r = e.length - 1;
                  0 <= r ? i <= r : i >= r;
                  t = 0 <= r ? ++i : --i
                )
                  for (
                    n = o = 0, a = s.length - 1;
                    0 <= a ? o <= a : o >= a;
                    n = 0 <= a ? ++o : --o
                  )
                    s.push(s[n].concat(e[t]));
                return (
                  s.shift(),
                  (s = (s = s.sort(function (e, t) {
                    return e.length - t.length;
                  })).map(function (e) {
                    return e.join("");
                  }))
                );
              }),
              t
            );
          })();
        }.call(e.context);
    };
  },
  function (e, t, n) {
    function i(e, t) {
      if (t && t.documentElement) (e = t), (t = arguments[2]);
      else if (!e || !e.documentElement)
        throw new Error(
          "First argument to Readability constructor should be a document object."
        );
      var n;
      (t = t || {}),
        (this._doc = e),
        (this._docJSDOMParser = this._doc.firstChild.__JSDOMParser__),
        (this._articleTitle = null),
        (this._articleByline = null),
        (this._articleDir = null),
        (this._articleSiteName = null),
        (this._attempts = []),
        (this._debug = !!t.debug),
        (this._maxElemsToParse =
          t.maxElemsToParse || this.DEFAULT_MAX_ELEMS_TO_PARSE),
        (this._nbTopCandidates =
          t.nbTopCandidates || this.DEFAULT_N_TOP_CANDIDATES),
        (this._charThreshold = t.charThreshold || this.DEFAULT_CHAR_THRESHOLD),
        (this._classesToPreserve = this.CLASSES_TO_PRESERVE.concat(
          t.classesToPreserve || []
        )),
        (this._keepClasses = !!t.keepClasses),
        (this._flags =
          this.FLAG_STRIP_UNLIKELYS |
          this.FLAG_WEIGHT_CLASSES |
          this.FLAG_CLEAN_CONDITIONALLY),
        this._debug
          ? ((n = function (e) {
              var t = e.nodeName + " ";
              if (e.nodeType == e.TEXT_NODE)
                return t + '("' + e.textContent + '")';
              var n = e.className && "." + e.className.replace(/ /g, "."),
                i = "";
              return (
                e.id ? (i = "(#" + e.id + n + ")") : n && (i = "(" + n + ")"),
                t + i
              );
            }),
            (this.log = function () {
              if ("undefined" != typeof dump) {
                var e = Array.prototype.map
                  .call(arguments, function (e) {
                    return e && e.nodeName ? n(e) : e;
                  })
                  .join(" ");
                dump("Reader: (Readability) " + e + "\n");
              } else if ("undefined" != typeof console) {
                var t = ["Reader: (Readability) "].concat(arguments);
                console.log.apply(console, t);
              }
            }))
          : (this.log = function () {});
    }
    (i.prototype = {
      FLAG_STRIP_UNLIKELYS: 1,
      FLAG_WEIGHT_CLASSES: 2,
      FLAG_CLEAN_CONDITIONALLY: 4,
      ELEMENT_NODE: 1,
      TEXT_NODE: 3,
      DEFAULT_MAX_ELEMS_TO_PARSE: 0,
      DEFAULT_N_TOP_CANDIDATES: 5,
      DEFAULT_TAGS_TO_SCORE: "section,h2,h3,h4,h5,h6,p,td,pre"
        .toUpperCase()
        .split(","),
      DEFAULT_CHAR_THRESHOLD: 500,
      REGEXPS: {
        unlikelyCandidates: /-ad-|ai2html|banner|breadcrumbs|combx|comment|community|cover-wrap|disqus|extra|footer|gdpr|header|legends|menu|related|remark|replies|rss|shoutbox|sidebar|skyscraper|social|sponsor|supplemental|ad-break|agegate|pagination|pager|popup|yom-remote/i,
        okMaybeItsACandidate: /and|article|body|column|content|main|shadow/i,
        positive: /article|body|content|entry|hentry|h-entry|main|page|pagination|post|text|blog|story/i,
        negative: /hidden|^hid$| hid$| hid |^hid |banner|combx|comment|com-|contact|foot|footer|footnote|gdpr|masthead|meta|outbrain|promo|related|scroll|share|shoutbox|sidebar|skyscraper|sponsor|shopping|tags|tool|widget/i,
        extraneous: /print|archive|comment|discuss|e[\-]?mail|share|reply|all|login|sign|single|utility/i,
        byline: /byline|author|dateline|writtenby|p-author/i,
        replaceFonts: /<(\/?)font[^>]*>/gi,
        normalize: /\s{2,}/g,
        videos: /\/\/(www\.)?((dailymotion|youtube|youtube-nocookie|player\.vimeo|v\.qq)\.com|(archive|upload\.wikimedia)\.org|player\.twitch\.tv)/i,
        shareElements: /(\b|_)(share|sharedaddy)(\b|_)/i,
        nextLink: /(next|weiter|continue|>([^\|]|$)|Â»([^\|]|$))/i,
        prevLink: /(prev|earl|old|new|<|Â«)/i,
        whitespace: /^\s*$/,
        hasContent: /\S$/,
        srcsetUrl: /(\S+)(\s+[\d.]+[xw])?(\s*(?:,|$))/g,
        b64DataUrl: /^data:\s*([^\s;,]+)\s*;\s*base64\s*,/i,
      },
      DIV_TO_P_ELEMS: [
        "A",
        "BLOCKQUOTE",
        "DL",
        "DIV",
        "IMG",
        "OL",
        "P",
        "PRE",
        "TABLE",
        "UL",
        "SELECT",
      ],
      ALTER_TO_DIV_EXCEPTIONS: ["DIV", "ARTICLE", "SECTION", "P"],
      PRESENTATIONAL_ATTRIBUTES: [
        "align",
        "background",
        "bgcolor",
        "border",
        "cellpadding",
        "cellspacing",
        "frame",
        "hspace",
        "rules",
        "style",
        "valign",
        "vspace",
      ],
      DEPRECATED_SIZE_ATTRIBUTE_ELEMS: ["TABLE", "TH", "TD", "HR", "PRE"],
      PHRASING_ELEMS: [
        "ABBR",
        "AUDIO",
        "B",
        "BDO",
        "BR",
        "BUTTON",
        "CITE",
        "CODE",
        "DATA",
        "DATALIST",
        "DFN",
        "EM",
        "EMBED",
        "I",
        "IMG",
        "INPUT",
        "KBD",
        "LABEL",
        "MARK",
        "MATH",
        "METER",
        "NOSCRIPT",
        "OBJECT",
        "OUTPUT",
        "PROGRESS",
        "Q",
        "RUBY",
        "SAMP",
        "SCRIPT",
        "SELECT",
        "SMALL",
        "SPAN",
        "STRONG",
        "SUB",
        "SUP",
        "TEXTAREA",
        "TIME",
        "VAR",
        "WBR",
      ],
      CLASSES_TO_PRESERVE: ["page"],
      HTML_ESCAPE_MAP: { lt: "<", gt: ">", amp: "&", quot: '"', apos: "'" },
      _postProcessContent: function (e) {
        this._fixRelativeUris(e), this._keepClasses || this._cleanClasses(e);
      },
      _removeNodes: function (e, t) {
        if (this._docJSDOMParser && e._isLiveNodeList)
          throw new Error("Do not pass live node lists to _removeNodes");
        for (var n = e.length - 1; n >= 0; n--) {
          var i = e[n],
            o = i.parentNode;
          o && ((t && !t.call(this, i, n, e)) || o.removeChild(i));
        }
      },
      _replaceNodeTags: function (e, t) {
        if (this._docJSDOMParser && e._isLiveNodeList)
          throw new Error("Do not pass live node lists to _replaceNodeTags");
        for (var n = e.length - 1; n >= 0; n--) {
          var i = e[n];
          this._setNodeTag(i, t);
        }
      },
      _forEachNode: function (e, t) {
        Array.prototype.forEach.call(e, t, this);
      },
      _someNode: function (e, t) {
        return Array.prototype.some.call(e, t, this);
      },
      _everyNode: function (e, t) {
        return Array.prototype.every.call(e, t, this);
      },
      _concatNodeLists: function () {
        var e = Array.prototype.slice,
          t = e.call(arguments),
          n = t.map(function (t) {
            return e.call(t);
          });
        return Array.prototype.concat.apply([], n);
      },
      _getAllNodesWithTag: function (e, t) {
        return e.querySelectorAll
          ? e.querySelectorAll(t.join(","))
          : [].concat.apply(
              [],
              t.map(function (t) {
                var n = e.getElementsByTagName(t);
                return Array.isArray(n) ? n : Array.from(n);
              })
            );
      },
      _cleanClasses: function (e) {
        var t = this._classesToPreserve,
          n = (e.getAttribute("class") || "")
            .split(/\s+/)
            .filter(function (e) {
              return -1 != t.indexOf(e);
            })
            .join(" ");
        for (
          n ? e.setAttribute("class", n) : e.removeAttribute("class"),
            e = e.firstElementChild;
          e;
          e = e.nextElementSibling
        )
          this._cleanClasses(e);
      },
      _fixRelativeUris: function (e) {
        var t = this._doc.baseURI,
          n = this._doc.documentURI;
        function i(e) {
          if (t == n && "#" == e.charAt(0)) return e;
          try {
            return new URL(e, t).href;
          } catch (e) {}
          return e;
        }
        var o = this._getAllNodesWithTag(e, ["a"]);
        this._forEachNode(o, function (e) {
          var t = e.getAttribute("href");
          if (t)
            if (0 === t.indexOf("javascript:"))
              if (
                1 === e.childNodes.length &&
                e.childNodes[0].nodeType === this.TEXT_NODE
              ) {
                var n = this._doc.createTextNode(e.textContent);
                e.parentNode.replaceChild(n, e);
              } else {
                for (
                  var o = this._doc.createElement("span");
                  e.childNodes.length > 0;

                )
                  o.appendChild(e.childNodes[0]);
                e.parentNode.replaceChild(o, e);
              }
            else e.setAttribute("href", i(t));
        });
        var r = this._getAllNodesWithTag(e, [
          "img",
          "picture",
          "figure",
          "video",
          "audio",
          "source",
        ]);
        this._forEachNode(r, function (e) {
          var t = e.getAttribute("src"),
            n = e.getAttribute("poster"),
            o = e.getAttribute("srcset");
          if (
            (t && e.setAttribute("src", i(t)),
            n && e.setAttribute("poster", i(n)),
            o)
          ) {
            var r = o.replace(this.REGEXPS.srcsetUrl, function (e, t, n, o) {
              return i(t) + (n || "") + o;
            });
            e.setAttribute("srcset", r);
          }
        });
      },
      _getArticleTitle: function () {
        var e = this._doc,
          t = "",
          n = "";
        try {
          "string" != typeof (t = n = e.title.trim()) &&
            (t = n = this._getInnerText(e.getElementsByTagName("title")[0]));
        } catch (e) {}
        var i = !1;
        function o(e) {
          return e.split(/\s+/).length;
        }
        if (/ [\|\-\\\/>Â»] /.test(t))
          (i = / [\\\/>Â»] /.test(t)),
            o((t = n.replace(/(.*)[\|\-\\\/>Â»] .*/gi, "$1"))) < 3 &&
              (t = n.replace(/[^\|\-\\\/>Â»]*[\|\-\\\/>Â»](.*)/gi, "$1"));
        else if (-1 !== t.indexOf(": ")) {
          var r = this._concatNodeLists(
              e.getElementsByTagName("h1"),
              e.getElementsByTagName("h2")
            ),
            a = t.trim();
          this._someNode(r, function (e) {
            return e.textContent.trim() === a;
          }) ||
            (o((t = n.substring(n.lastIndexOf(":") + 1))) < 3
              ? (t = n.substring(n.indexOf(":") + 1))
              : o(n.substr(0, n.indexOf(":"))) > 5 && (t = n));
        } else if (t.length > 150 || t.length < 15) {
          var s = e.getElementsByTagName("h1");
          1 === s.length && (t = this._getInnerText(s[0]));
        }
        var c = o((t = t.trim().replace(this.REGEXPS.normalize, " ")));
        return (
          c <= 4 &&
            (!i || c != o(n.replace(/[\|\-\\\/>Â»]+/g, "")) - 1) &&
            (t = n),
          t
        );
      },
      _prepDocument: function () {
        var e = this._doc;
        this._removeNodes(this._getAllNodesWithTag(e, ["style"])),
          e.body && this._replaceBrs(e.body),
          this._replaceNodeTags(this._getAllNodesWithTag(e, ["font"]), "SPAN");
      },
      _nextElement: function (e) {
        for (
          var t = e;
          t &&
          t.nodeType != this.ELEMENT_NODE &&
          this.REGEXPS.whitespace.test(t.textContent);

        )
          t = t.nextSibling;
        return t;
      },
      _replaceBrs: function (e) {
        this._forEachNode(this._getAllNodesWithTag(e, ["br"]), function (e) {
          for (
            var t = e.nextSibling, n = !1;
            (t = this._nextElement(t)) && "BR" == t.tagName;

          ) {
            n = !0;
            var i = t.nextSibling;
            t.parentNode.removeChild(t), (t = i);
          }
          if (n) {
            var o = this._doc.createElement("p");
            for (e.parentNode.replaceChild(o, e), t = o.nextSibling; t; ) {
              if ("BR" == t.tagName) {
                var r = this._nextElement(t.nextSibling);
                if (r && "BR" == r.tagName) break;
              }
              if (!this._isPhrasingContent(t)) break;
              var a = t.nextSibling;
              o.appendChild(t), (t = a);
            }
            for (; o.lastChild && this._isWhitespace(o.lastChild); )
              o.removeChild(o.lastChild);
            "P" === o.parentNode.tagName &&
              this._setNodeTag(o.parentNode, "DIV");
          }
        });
      },
      _setNodeTag: function (e, t) {
        if ((this.log("_setNodeTag", e, t), this._docJSDOMParser))
          return (
            (e.localName = t.toLowerCase()), (e.tagName = t.toUpperCase()), e
          );
        for (var n = e.ownerDocument.createElement(t); e.firstChild; )
          n.appendChild(e.firstChild);
        e.parentNode.replaceChild(n, e),
          e.readability && (n.readability = e.readability);
        for (var i = 0; i < e.attributes.length; i++)
          try {
            n.setAttribute(e.attributes[i].name, e.attributes[i].value);
          } catch (e) {}
        return n;
      },
      _prepArticle: function (e) {
        this._cleanStyles(e),
          this._markDataTables(e),
          this._fixLazyImages(e),
          this._cleanConditionally(e, "form"),
          this._cleanConditionally(e, "fieldset"),
          this._clean(e, "object"),
          this._clean(e, "embed"),
          this._clean(e, "h1"),
          this._clean(e, "footer"),
          this._clean(e, "link"),
          this._clean(e, "aside");
        var t = this.DEFAULT_CHAR_THRESHOLD;
        this._forEachNode(e.children, function (e) {
          this._cleanMatchedNodes(e, function (e, n) {
            return (
              this.REGEXPS.shareElements.test(n) && e.textContent.length < t
            );
          });
        });
        var n = e.getElementsByTagName("h2");
        if (1 === n.length) {
          var i =
            (n[0].textContent.length - this._articleTitle.length) /
            this._articleTitle.length;
          if (Math.abs(i) < 0.5) {
            (i > 0
              ? n[0].textContent.includes(this._articleTitle)
              : this._articleTitle.includes(n[0].textContent)) &&
              this._clean(e, "h2");
          }
        }
        this._clean(e, "iframe"),
          this._clean(e, "input"),
          this._clean(e, "textarea"),
          this._clean(e, "select"),
          this._clean(e, "button"),
          this._cleanHeaders(e),
          this._cleanConditionally(e, "table"),
          this._cleanConditionally(e, "ul"),
          this._cleanConditionally(e, "div"),
          this._removeNodes(this._getAllNodesWithTag(e, ["p"]), function (e) {
            return (
              0 ===
                e.getElementsByTagName("img").length +
                  e.getElementsByTagName("embed").length +
                  e.getElementsByTagName("object").length +
                  e.getElementsByTagName("iframe").length &&
              !this._getInnerText(e, !1)
            );
          }),
          this._forEachNode(this._getAllNodesWithTag(e, ["br"]), function (e) {
            var t = this._nextElement(e.nextSibling);
            t && "P" == t.tagName && e.parentNode.removeChild(e);
          }),
          this._forEachNode(this._getAllNodesWithTag(e, ["table"]), function (
            e
          ) {
            var t = this._hasSingleTagInsideElement(e, "TBODY")
              ? e.firstElementChild
              : e;
            if (this._hasSingleTagInsideElement(t, "TR")) {
              var n = t.firstElementChild;
              if (this._hasSingleTagInsideElement(n, "TD")) {
                var i = n.firstElementChild;
                (i = this._setNodeTag(
                  i,
                  this._everyNode(i.childNodes, this._isPhrasingContent)
                    ? "P"
                    : "DIV"
                )),
                  e.parentNode.replaceChild(i, e);
              }
            }
          });
      },
      _initializeNode: function (e) {
        switch (((e.readability = { contentScore: 0 }), e.tagName)) {
          case "DIV":
            e.readability.contentScore += 5;
            break;
          case "PRE":
          case "TD":
          case "BLOCKQUOTE":
            e.readability.contentScore += 3;
            break;
          case "ADDRESS":
          case "OL":
          case "UL":
          case "DL":
          case "DD":
          case "DT":
          case "LI":
          case "FORM":
            e.readability.contentScore -= 3;
            break;
          case "H1":
          case "H2":
          case "H3":
          case "H4":
          case "H5":
          case "H6":
          case "TH":
            e.readability.contentScore -= 5;
        }
        e.readability.contentScore += this._getClassWeight(e);
      },
      _removeAndGetNext: function (e) {
        var t = this._getNextNode(e, !0);
        return e.parentNode.removeChild(e), t;
      },
      _getNextNode: function (e, t) {
        if (!t && e.firstElementChild) return e.firstElementChild;
        if (e.nextElementSibling) return e.nextElementSibling;
        do {
          e = e.parentNode;
        } while (e && !e.nextElementSibling);
        return e && e.nextElementSibling;
      },
      _checkByline: function (e, t) {
        if (this._articleByline) return !1;
        if (void 0 !== e.getAttribute)
          var n = e.getAttribute("rel"),
            i = e.getAttribute("itemprop");
        return (
          !(
            !(
              "author" === n ||
              (i && -1 !== i.indexOf("author")) ||
              this.REGEXPS.byline.test(t)
            ) || !this._isValidByline(e.textContent)
          ) && ((this._articleByline = e.textContent.trim()), !0)
        );
      },
      _getNodeAncestors: function (e, t) {
        t = t || 0;
        for (
          var n = 0, i = [];
          e.parentNode && (i.push(e.parentNode), !t || ++n !== t);

        )
          e = e.parentNode;
        return i;
      },
      _grabArticle: function (e) {
        this.log("**** grabArticle ****");
        var t = this._doc,
          n = null !== e;
        if (!(e = e || this._doc.body))
          return this.log("No body found in document. Abort."), null;
        for (var i = e.innerHTML; ; ) {
          for (
            var o = this._flagIsActive(this.FLAG_STRIP_UNLIKELYS),
              r = [],
              a = this._doc.documentElement;
            a;

          ) {
            var s = a.className + " " + a.id;
            if (this._isProbablyVisible(a))
              if (this._checkByline(a, s)) a = this._removeAndGetNext(a);
              else {
                if (o) {
                  if (
                    this.REGEXPS.unlikelyCandidates.test(s) &&
                    !this.REGEXPS.okMaybeItsACandidate.test(s) &&
                    !this._hasAncestorTag(a, "table") &&
                    "BODY" !== a.tagName &&
                    "A" !== a.tagName
                  ) {
                    this.log("Removing unlikely candidate - " + s),
                      (a = this._removeAndGetNext(a));
                    continue;
                  }
                  if ("complementary" == a.getAttribute("role")) {
                    this.log("Removing complementary content - " + s),
                      (a = this._removeAndGetNext(a));
                    continue;
                  }
                }
                if (
                  ("DIV" !== a.tagName &&
                    "SECTION" !== a.tagName &&
                    "HEADER" !== a.tagName &&
                    "H1" !== a.tagName &&
                    "H2" !== a.tagName &&
                    "H3" !== a.tagName &&
                    "H4" !== a.tagName &&
                    "H5" !== a.tagName &&
                    "H6" !== a.tagName) ||
                  !this._isElementWithoutContent(a)
                ) {
                  if (
                    (-1 !== this.DEFAULT_TAGS_TO_SCORE.indexOf(a.tagName) &&
                      r.push(a),
                    "DIV" === a.tagName)
                  ) {
                    for (var c = null, l = a.firstChild; l; ) {
                      var d = l.nextSibling;
                      if (this._isPhrasingContent(l))
                        null !== c
                          ? c.appendChild(l)
                          : this._isWhitespace(l) ||
                            ((c = t.createElement("p")),
                            a.replaceChild(c, l),
                            c.appendChild(l));
                      else if (null !== c) {
                        for (; c.lastChild && this._isWhitespace(c.lastChild); )
                          c.removeChild(c.lastChild);
                        c = null;
                      }
                      l = d;
                    }
                    if (
                      this._hasSingleTagInsideElement(a, "P") &&
                      this._getLinkDensity(a) < 0.25
                    ) {
                      var u = a.children[0];
                      a.parentNode.replaceChild(u, a), (a = u), r.push(a);
                    } else
                      this._hasChildBlockElement(a) ||
                        ((a = this._setNodeTag(a, "P")), r.push(a));
                  }
                  a = this._getNextNode(a);
                } else a = this._removeAndGetNext(a);
              }
            else
              this.log("Removing hidden node - " + s),
                (a = this._removeAndGetNext(a));
          }
          var h = [];
          this._forEachNode(r, function (e) {
            if (e.parentNode && void 0 !== e.parentNode.tagName) {
              var t = this._getInnerText(e);
              if (!(t.length < 25)) {
                var n = this._getNodeAncestors(e, 3);
                if (0 !== n.length) {
                  var i = 0;
                  (i += 1),
                    (i += t.split(",").length),
                    (i += Math.min(Math.floor(t.length / 100), 3)),
                    this._forEachNode(n, function (e, t) {
                      if (
                        e.tagName &&
                        e.parentNode &&
                        void 0 !== e.parentNode.tagName
                      ) {
                        if (
                          (void 0 === e.readability &&
                            (this._initializeNode(e), h.push(e)),
                          0 === t)
                        )
                          var n = 1;
                        else n = 1 === t ? 2 : 3 * t;
                        e.readability.contentScore += i / n;
                      }
                    });
                }
              }
            }
          });
          for (var f = [], p = 0, m = h.length; p < m; p += 1) {
            var g = h[p],
              v = g.readability.contentScore * (1 - this._getLinkDensity(g));
            (g.readability.contentScore = v),
              this.log("Candidate:", g, "with score " + v);
            for (var y = 0; y < this._nbTopCandidates; y++) {
              var w = f[y];
              if (!w || v > w.readability.contentScore) {
                f.splice(y, 0, g), f.length > this._nbTopCandidates && f.pop();
                break;
              }
            }
          }
          var b,
            x = f[0] || null,
            k = !1;
          if (null === x || "BODY" === x.tagName) {
            (x = t.createElement("DIV")), (k = !0);
            for (var C = e.childNodes; C.length; )
              this.log("Moving child out:", C[0]), x.appendChild(C[0]);
            e.appendChild(x), this._initializeNode(x);
          } else if (x) {
            for (var E = [], S = 1; S < f.length; S++)
              f[S].readability.contentScore / x.readability.contentScore >=
                0.75 && E.push(this._getNodeAncestors(f[S]));
            if (E.length >= 3)
              for (b = x.parentNode; "BODY" !== b.tagName; ) {
                for (var I = 0, _ = 0; _ < E.length && I < 3; _++)
                  I += Number(E[_].includes(b));
                if (I >= 3) {
                  x = b;
                  break;
                }
                b = b.parentNode;
              }
            x.readability || this._initializeNode(x), (b = x.parentNode);
            for (
              var A = x.readability.contentScore, T = A / 3;
              "BODY" !== b.tagName;

            )
              if (b.readability) {
                var M = b.readability.contentScore;
                if (M < T) break;
                if (M > A) {
                  x = b;
                  break;
                }
                (A = b.readability.contentScore), (b = b.parentNode);
              } else b = b.parentNode;
            for (
              b = x.parentNode;
              "BODY" != b.tagName && 1 == b.children.length;

            )
              b = (x = b).parentNode;
            x.readability || this._initializeNode(x);
          }
          var D = t.createElement("DIV");
          n && (D.id = "readability-content");
          for (
            var N = Math.max(10, 0.2 * x.readability.contentScore),
              P = (b = x.parentNode).children,
              B = 0,
              O = P.length;
            B < O;
            B++
          ) {
            var L = P[B],
              R = !1;
            if (
              (this.log(
                "Looking at sibling node:",
                L,
                L.readability ? "with score " + L.readability.contentScore : ""
              ),
              this.log(
                "Sibling has score",
                L.readability ? L.readability.contentScore : "Unknown"
              ),
              L === x)
            )
              R = !0;
            else {
              var G = 0;
              if (
                (L.className === x.className &&
                  "" !== x.className &&
                  (G += 0.2 * x.readability.contentScore),
                L.readability && L.readability.contentScore + G >= N)
              )
                R = !0;
              else if ("P" === L.nodeName) {
                var H = this._getLinkDensity(L),
                  z = this._getInnerText(L),
                  W = z.length;
                ((W > 80 && H < 0.25) ||
                  (W < 80 && W > 0 && 0 === H && -1 !== z.search(/\.( |$)/))) &&
                  (R = !0);
              }
            }
            R &&
              (this.log("Appending node:", L),
              -1 === this.ALTER_TO_DIV_EXCEPTIONS.indexOf(L.nodeName) &&
                (this.log("Altering sibling:", L, "to div."),
                (L = this._setNodeTag(L, "DIV"))),
              D.appendChild(L),
              (B -= 1),
              (O -= 1));
          }
          if (
            (this._debug &&
              this.log("Article content pre-prep: " + D.innerHTML),
            this._prepArticle(D),
            this._debug &&
              this.log("Article content post-prep: " + D.innerHTML),
            k)
          )
            (x.id = "readability-page-1"), (x.className = "page");
          else {
            var F = t.createElement("DIV");
            (F.id = "readability-page-1"), (F.className = "page");
            for (var j = D.childNodes; j.length; ) F.appendChild(j[0]);
            D.appendChild(F);
          }
          this._debug &&
            this.log("Article content after paging: " + D.innerHTML);
          var U = !0,
            V = this._getInnerText(D, !0).length;
          if (V < this._charThreshold)
            if (
              ((U = !1),
              (e.innerHTML = i),
              this._flagIsActive(this.FLAG_STRIP_UNLIKELYS))
            )
              this._removeFlag(this.FLAG_STRIP_UNLIKELYS),
                this._attempts.push({ articleContent: D, textLength: V });
            else if (this._flagIsActive(this.FLAG_WEIGHT_CLASSES))
              this._removeFlag(this.FLAG_WEIGHT_CLASSES),
                this._attempts.push({ articleContent: D, textLength: V });
            else if (this._flagIsActive(this.FLAG_CLEAN_CONDITIONALLY))
              this._removeFlag(this.FLAG_CLEAN_CONDITIONALLY),
                this._attempts.push({ articleContent: D, textLength: V });
            else {
              if (
                (this._attempts.push({ articleContent: D, textLength: V }),
                this._attempts.sort(function (e, t) {
                  return t.textLength - e.textLength;
                }),
                !this._attempts[0].textLength)
              )
                return null;
              (D = this._attempts[0].articleContent), (U = !0);
            }
          if (U) {
            var q = [b, x].concat(this._getNodeAncestors(b));
            return (
              this._someNode(q, function (e) {
                if (!e.tagName) return !1;
                var t = e.getAttribute("dir");
                return !!t && ((this._articleDir = t), !0);
              }),
              D
            );
          }
        }
      },
      _isValidByline: function (e) {
        return (
          ("string" == typeof e || e instanceof String) &&
          (e = e.trim()).length > 0 &&
          e.length < 100
        );
      },
      _unescapeHtmlEntities: function (e) {
        if (!e) return e;
        var t = this.HTML_ESCAPE_MAP;
        return e
          .replace(/&(quot|amp|apos|lt|gt);/g, function (e, n) {
            return t[n];
          })
          .replace(/&#(?:x([0-9a-z]{1,4})|([0-9]{1,4}));/gi, function (
            e,
            t,
            n
          ) {
            var i = parseInt(t || n, t ? 16 : 10);
            return String.fromCharCode(i);
          });
      },
      _getArticleMetadata: function () {
        var e = {},
          t = {},
          n = this._doc.getElementsByTagName("meta"),
          i = /\s*(dc|dcterm|og|twitter)\s*:\s*(author|creator|description|title|site_name)\s*/gi,
          o = /^\s*(?:(dc|dcterm|og|twitter|weibo:(article|webpage))\s*[\.:]\s*)?(author|creator|description|title|site_name)\s*$/i;
        return (
          this._forEachNode(n, function (e) {
            var n = e.getAttribute("name"),
              r = e.getAttribute("property"),
              a = e.getAttribute("content");
            if (a) {
              var s = null,
                c = null;
              if (r && (s = r.match(i)))
                for (var l = s.length - 1; l >= 0; l--)
                  (c = s[l].toLowerCase().replace(/\s/g, "")),
                    (t[c] = a.trim());
              !s &&
                n &&
                o.test(n) &&
                ((c = n),
                a &&
                  ((c = c.toLowerCase().replace(/\s/g, "").replace(/\./g, ":")),
                  (t[c] = a.trim())));
            }
          }),
          (e.title =
            t["dc:title"] ||
            t["dcterm:title"] ||
            t["og:title"] ||
            t["weibo:article:title"] ||
            t["weibo:webpage:title"] ||
            t.title ||
            t["twitter:title"]),
          e.title || (e.title = this._getArticleTitle()),
          (e.byline = t["dc:creator"] || t["dcterm:creator"] || t.author),
          (e.excerpt =
            t["dc:description"] ||
            t["dcterm:description"] ||
            t["og:description"] ||
            t["weibo:article:description"] ||
            t["weibo:webpage:description"] ||
            t.description ||
            t["twitter:description"]),
          (e.siteName = t["og:site_name"]),
          (e.title = this._unescapeHtmlEntities(e.title)),
          (e.byline = this._unescapeHtmlEntities(e.byline)),
          (e.excerpt = this._unescapeHtmlEntities(e.excerpt)),
          (e.siteName = this._unescapeHtmlEntities(e.siteName)),
          e
        );
      },
      _isSingleImage: function (e) {
        return (
          "IMG" === e.tagName ||
          (1 === e.children.length &&
            "" === e.textContent.trim() &&
            this._isSingleImage(e.children[0]))
        );
      },
      _unwrapNoscriptImages: function (e) {
        var t = Array.from(e.getElementsByTagName("img"));
        this._forEachNode(t, function (e) {
          for (var t = 0; t < e.attributes.length; t++) {
            var n = e.attributes[t];
            switch (n.name) {
              case "src":
              case "srcset":
              case "data-src":
              case "data-srcset":
                return;
            }
            if (/\.(jpg|jpeg|png|webp)/i.test(n.value)) return;
          }
          e.parentNode.removeChild(e);
        });
        var n = Array.from(e.getElementsByTagName("noscript"));
        this._forEachNode(n, function (t) {
          var n = e.createElement("div");
          if (((n.innerHTML = t.innerHTML), this._isSingleImage(n))) {
            var i = t.previousElementSibling;
            if (i && this._isSingleImage(i)) {
              var o = i;
              "IMG" !== o.tagName && (o = i.getElementsByTagName("img")[0]);
              for (
                var r = n.getElementsByTagName("img")[0], a = 0;
                a < o.attributes.length;
                a++
              ) {
                var s = o.attributes[a];
                if (
                  "" !== s.value &&
                  ("src" === s.name ||
                    "srcset" === s.name ||
                    /\.(jpg|jpeg|png|webp)/i.test(s.value))
                ) {
                  if (r.getAttribute(s.name) === s.value) continue;
                  var c = s.name;
                  r.hasAttribute(c) && (c = "data-old-" + c),
                    r.setAttribute(c, s.value);
                }
              }
              t.parentNode.replaceChild(n.firstElementChild, i);
            }
          }
        });
      },
      _removeScripts: function (e) {
        this._removeNodes(this._getAllNodesWithTag(e, ["script"]), function (
          e
        ) {
          return (e.nodeValue = ""), e.removeAttribute("src"), !0;
        }),
          this._removeNodes(this._getAllNodesWithTag(e, ["noscript"]));
      },
      _hasSingleTagInsideElement: function (e, t) {
        return (
          1 == e.children.length &&
          e.children[0].tagName === t &&
          !this._someNode(e.childNodes, function (e) {
            return (
              e.nodeType === this.TEXT_NODE &&
              this.REGEXPS.hasContent.test(e.textContent)
            );
          })
        );
      },
      _isElementWithoutContent: function (e) {
        return (
          e.nodeType === this.ELEMENT_NODE &&
          0 == e.textContent.trim().length &&
          (0 == e.children.length ||
            e.children.length ==
              e.getElementsByTagName("br").length +
                e.getElementsByTagName("hr").length)
        );
      },
      _hasChildBlockElement: function (e) {
        return this._someNode(e.childNodes, function (e) {
          return (
            -1 !== this.DIV_TO_P_ELEMS.indexOf(e.tagName) ||
            this._hasChildBlockElement(e)
          );
        });
      },
      _isPhrasingContent: function (e) {
        return (
          e.nodeType === this.TEXT_NODE ||
          -1 !== this.PHRASING_ELEMS.indexOf(e.tagName) ||
          (("A" === e.tagName || "DEL" === e.tagName || "INS" === e.tagName) &&
            this._everyNode(e.childNodes, this._isPhrasingContent))
        );
      },
      _isWhitespace: function (e) {
        return (
          (e.nodeType === this.TEXT_NODE &&
            0 === e.textContent.trim().length) ||
          (e.nodeType === this.ELEMENT_NODE && "BR" === e.tagName)
        );
      },
      _getInnerText: function (e, t) {
        t = void 0 === t || t;
        var n = e.textContent.trim();
        return t ? n.replace(this.REGEXPS.normalize, " ") : n;
      },
      _getCharCount: function (e, t) {
        return (t = t || ","), this._getInnerText(e).split(t).length - 1;
      },
      _cleanStyles: function (e) {
        if (e && "svg" !== e.tagName.toLowerCase()) {
          for (var t = 0; t < this.PRESENTATIONAL_ATTRIBUTES.length; t++)
            e.removeAttribute(this.PRESENTATIONAL_ATTRIBUTES[t]);
          -1 !== this.DEPRECATED_SIZE_ATTRIBUTE_ELEMS.indexOf(e.tagName) &&
            (e.removeAttribute("width"), e.removeAttribute("height"));
          for (var n = e.firstElementChild; null !== n; )
            this._cleanStyles(n), (n = n.nextElementSibling);
        }
      },
      _getLinkDensity: function (e) {
        var t = this._getInnerText(e).length;
        if (0 === t) return 0;
        var n = 0;
        return (
          this._forEachNode(e.getElementsByTagName("a"), function (e) {
            n += this._getInnerText(e).length;
          }),
          n / t
        );
      },
      _getClassWeight: function (e) {
        if (!this._flagIsActive(this.FLAG_WEIGHT_CLASSES)) return 0;
        var t = 0;
        return (
          "string" == typeof e.className &&
            "" !== e.className &&
            (this.REGEXPS.negative.test(e.className) && (t -= 25),
            this.REGEXPS.positive.test(e.className) && (t += 25)),
          "string" == typeof e.id &&
            "" !== e.id &&
            (this.REGEXPS.negative.test(e.id) && (t -= 25),
            this.REGEXPS.positive.test(e.id) && (t += 25)),
          t
        );
      },
      _clean: function (e, t) {
        var n = -1 !== ["object", "embed", "iframe"].indexOf(t);
        this._removeNodes(this._getAllNodesWithTag(e, [t]), function (e) {
          if (n) {
            for (var t = 0; t < e.attributes.length; t++)
              if (this.REGEXPS.videos.test(e.attributes[t].value)) return !1;
            if ("object" === e.tagName && this.REGEXPS.videos.test(e.innerHTML))
              return !1;
          }
          return !0;
        });
      },
      _hasAncestorTag: function (e, t, n, i) {
        (n = n || 3), (t = t.toUpperCase());
        for (var o = 0; e.parentNode; ) {
          if (n > 0 && o > n) return !1;
          if (e.parentNode.tagName === t && (!i || i(e.parentNode))) return !0;
          (e = e.parentNode), o++;
        }
        return !1;
      },
      _getRowAndColumnCount: function (e) {
        for (
          var t = 0, n = 0, i = e.getElementsByTagName("tr"), o = 0;
          o < i.length;
          o++
        ) {
          var r = i[o].getAttribute("rowspan") || 0;
          r && (r = parseInt(r, 10)), (t += r || 1);
          for (
            var a = 0, s = i[o].getElementsByTagName("td"), c = 0;
            c < s.length;
            c++
          ) {
            var l = s[c].getAttribute("colspan") || 0;
            l && (l = parseInt(l, 10)), (a += l || 1);
          }
          n = Math.max(n, a);
        }
        return { rows: t, columns: n };
      },
      _markDataTables: function (e) {
        for (
          var t = e.getElementsByTagName("table"), n = 0;
          n < t.length;
          n++
        ) {
          var i = t[n];
          if ("presentation" != i.getAttribute("role"))
            if ("0" != i.getAttribute("datatable"))
              if (i.getAttribute("summary")) i._readabilityDataTable = !0;
              else {
                var o = i.getElementsByTagName("caption")[0];
                if (o && o.childNodes.length > 0) i._readabilityDataTable = !0;
                else {
                  if (
                    ["col", "colgroup", "tfoot", "thead", "th"].some(function (
                      e
                    ) {
                      return !!i.getElementsByTagName(e)[0];
                    })
                  )
                    this.log("Data table because found data-y descendant"),
                      (i._readabilityDataTable = !0);
                  else if (i.getElementsByTagName("table")[0])
                    i._readabilityDataTable = !1;
                  else {
                    var r = this._getRowAndColumnCount(i);
                    r.rows >= 10 || r.columns > 4
                      ? (i._readabilityDataTable = !0)
                      : (i._readabilityDataTable = r.rows * r.columns > 10);
                  }
                }
              }
            else i._readabilityDataTable = !1;
          else i._readabilityDataTable = !1;
        }
      },
      _fixLazyImages: function (e) {
        this._forEachNode(
          this._getAllNodesWithTag(e, ["img", "picture", "figure"]),
          function (e) {
            if (e.src && this.REGEXPS.b64DataUrl.test(e.src)) {
              if ("image/svg+xml" === this.REGEXPS.b64DataUrl.exec(e.src)[1])
                return;
              for (var t = !1, n = 0; n < e.attributes.length; n++) {
                var i = e.attributes[n];
                if (
                  "src" !== i.name &&
                  /\.(jpg|jpeg|png|webp)/i.test(i.value)
                ) {
                  t = !0;
                  break;
                }
              }
              if (t) {
                var o = e.src.search(/base64\s*/i) + 7;
                e.src.length - o < 133 && e.removeAttribute("src");
              }
            }
            if (
              !(e.src || (e.srcset && "null" != e.srcset)) ||
              -1 !== e.className.toLowerCase().indexOf("lazy")
            )
              for (var r = 0; r < e.attributes.length; r++)
                if (
                  "src" !== (i = e.attributes[r]).name &&
                  "srcset" !== i.name
                ) {
                  var a = null;
                  if (
                    (/\.(jpg|jpeg|png|webp)\s+\d/.test(i.value)
                      ? (a = "srcset")
                      : /^\s*\S+\.(jpg|jpeg|png|webp)\S*\s*$/.test(i.value) &&
                        (a = "src"),
                    a)
                  )
                    if ("IMG" === e.tagName || "PICTURE" === e.tagName)
                      e.setAttribute(a, i.value);
                    else if (
                      "FIGURE" === e.tagName &&
                      !this._getAllNodesWithTag(e, ["img", "picture"]).length
                    ) {
                      var s = this._doc.createElement("img");
                      s.setAttribute(a, i.value), e.appendChild(s);
                    }
                }
          }
        );
      },
      _cleanConditionally: function (e, t) {
        if (this._flagIsActive(this.FLAG_CLEAN_CONDITIONALLY)) {
          var n = "ul" === t || "ol" === t;
          this._removeNodes(this._getAllNodesWithTag(e, [t]), function (e) {
            var i = function (e) {
              return e._readabilityDataTable;
            };
            if ("table" === t && i(e)) return !1;
            if (this._hasAncestorTag(e, "table", -1, i)) return !1;
            var o = this._getClassWeight(e);
            if ((this.log("Cleaning Conditionally", e), o + 0 < 0)) return !0;
            if (this._getCharCount(e, ",") < 10) {
              for (
                var r = e.getElementsByTagName("p").length,
                  a = e.getElementsByTagName("img").length,
                  s = e.getElementsByTagName("li").length - 100,
                  c = e.getElementsByTagName("input").length,
                  l = 0,
                  d = this._getAllNodesWithTag(e, [
                    "object",
                    "embed",
                    "iframe",
                  ]),
                  u = 0;
                u < d.length;
                u++
              ) {
                for (var h = 0; h < d[u].attributes.length; h++)
                  if (this.REGEXPS.videos.test(d[u].attributes[h].value))
                    return !1;
                if (
                  "object" === d[u].tagName &&
                  this.REGEXPS.videos.test(d[u].innerHTML)
                )
                  return !1;
                l++;
              }
              var f = this._getLinkDensity(e),
                p = this._getInnerText(e).length;
              return (
                (a > 1 && r / a < 0.5 && !this._hasAncestorTag(e, "figure")) ||
                (!n && s > r) ||
                c > Math.floor(r / 3) ||
                (!n &&
                  p < 25 &&
                  (0 === a || a > 2) &&
                  !this._hasAncestorTag(e, "figure")) ||
                (!n && o < 25 && f > 0.2) ||
                (o >= 25 && f > 0.5) ||
                (1 === l && p < 75) ||
                l > 1
              );
            }
            return !1;
          });
        }
      },
      _cleanMatchedNodes: function (e, t) {
        for (
          var n = this._getNextNode(e, !0), i = this._getNextNode(e);
          i && i != n;

        )
          i = t.call(this, i, i.className + " " + i.id)
            ? this._removeAndGetNext(i)
            : this._getNextNode(i);
      },
      _cleanHeaders: function (e) {
        this._removeNodes(this._getAllNodesWithTag(e, ["h1", "h2"]), function (
          e
        ) {
          return this._getClassWeight(e) < 0;
        });
      },
      _flagIsActive: function (e) {
        return (this._flags & e) > 0;
      },
      _removeFlag: function (e) {
        this._flags = this._flags & ~e;
      },
      _isProbablyVisible: function (e) {
        return (
          (!e.style || "none" != e.style.display) &&
          !e.hasAttribute("hidden") &&
          (!e.hasAttribute("aria-hidden") ||
            "true" != e.getAttribute("aria-hidden") ||
            (e.className &&
              e.className.indexOf &&
              -1 !== e.className.indexOf("fallback-image")))
        );
      },
      parse: function () {
        if (this._maxElemsToParse > 0) {
          var e = this._doc.getElementsByTagName("*").length;
          if (e > this._maxElemsToParse)
            throw new Error(
              "Aborting parsing document; " + e + " elements found"
            );
        }
        this._unwrapNoscriptImages(this._doc),
          this._removeScripts(this._doc),
          this._prepDocument();
        var t = this._getArticleMetadata();
        this._articleTitle = t.title;
        var n = this._grabArticle();
        if (!n) return null;
        if (
          (this.log("Grabbed: " + n.innerHTML),
          this._postProcessContent(n),
          !t.excerpt)
        ) {
          var i = n.getElementsByTagName("p");
          i.length > 0 && (t.excerpt = i[0].textContent.trim());
        }
        var o = n.textContent;
        return {
          title: this._articleTitle,
          byline: t.byline || this._articleByline,
          dir: this._articleDir,
          content: n.innerHTML,
          textContent: o,
          length: o.length,
          excerpt: t.excerpt,
          rootElements: n.children[0].children,
          siteName: t.siteName || this._articleSiteName,
        };
      },
    }),
      (e.exports = i);
  },
  function (e, t, n) {
    window.MarketGidCCarouselWidgetBlock762628 = function (e) {
      e.afterLoadNewsHooks.push("carouselInit"),
        (e.isInsertedCarouselStyles = !1);
      var t = e.context;
      t.Hammer = n(39);
      var i = t.document;
      (e.carouselInit = function () {
        var n = void 0 !== e.realRoot ? e.realRoot : e.root,
          i = new o("cdn.steepto.com", n);
        (n.style.display = "block"),
          i.init(),
          (n.style.display = "block"),
          i.calculateHeight(),
          i.decorateSlider(),
          e.addEvent(t, "scroll", function () {
            (n.style.display = "block"),
              (i.mgboxWidth = n.clientWidth - 2),
              i.calculateHeight(),
              (i.movingSide = "none"),
              (i.currentCarouselShift = 0),
              (i.transitionalMoving = !0),
              (i.mgsliderEl.style.left = i.currentCarouselShift + "px"),
              i.decorateSlider();
          });
      }),
        (t.Element.prototype.isVisible = function () {
          "use strict";
          function e(e, n) {
            return t.getComputedStyle
              ? i.defaultView.getComputedStyle(e, null)[n]
              : e.currentStyle
              ? e.currentStyle[n]
              : void 0;
          }
          return (function t(n, o, r, a, s, c, l) {
            var d = n.parentNode;
            return (
              !!(function (e) {
                for (; (e = e.parentNode); ) if (e == i) return !0;
                return !1;
              })(n) &&
              (9 === d.nodeType ||
                ("0" !== e(n, "opacity") &&
                  "none" !== e(n, "display") &&
                  "hidden" !== e(n, "visibility") &&
                  ((void 0 !== o &&
                    void 0 !== r &&
                    void 0 !== a &&
                    void 0 !== s &&
                    void 0 !== c &&
                    void 0 !== l) ||
                    ((o = n.offsetTop),
                    (s = n.offsetLeft),
                    (a = o + n.offsetHeight),
                    (r = s + n.offsetWidth),
                    (c = n.offsetWidth),
                    (l = n.offsetHeight)),
                  !d ||
                    ("hidden" === e(d, "overflow") ||
                    "scroll" === e(d, "overflow")
                      ? !(
                          s + 2 > d.offsetWidth + d.scrollLeft ||
                          s + c - 2 < d.scrollLeft ||
                          o + 2 > d.offsetHeight + d.scrollTop ||
                          o + l - 2 < d.scrollTop
                        )
                      : (n.offsetParent === d &&
                          ((s += d.offsetLeft), (o += d.offsetTop)),
                        t(d, o, r, a, s, c, l))))))
            );
          })(this);
        }),
        t.Array.prototype.findIndex ||
          Object.defineProperty(t.Array.prototype, "findIndex", {
            value: function (e) {
              if (null == this)
                throw new TypeError('"this" is null or not defined');
              var t = Object(this),
                n = t.length >>> 0;
              if ("function" != typeof e)
                throw new TypeError("predicate must be a function");
              for (var i = arguments[1], o = 0; o < n; ) {
                var r = t[o];
                if (e.call(i, r, o, t)) return o;
                o++;
              }
              return -1;
            },
          });
      var o = function (n, o) {
        (this.root = o),
          (this.mgboxWidth = 0),
          (this.currentFirstVisibleIndex = 0),
          (this.currentLastVisibleIndex = 0),
          (this.currentCarouselShift = 0),
          (this.lastSlidePartialVisible = !0),
          (this.firstSlidePartialVisible = !1),
          (this.slides = []),
          (this.mgsliderEl = null),
          (this.mgsliderPrev = null),
          (this.mgsliderNext = null),
          (this.cdnDomain = n),
          (this.transitionalMoving = !1),
          (this.movingSide = "none"),
          (this.mouseXCoord = 0),
          Object.defineProperties(this, {
            lastVisibleSlide: {
              get: function () {
                return this.slides[this.currentLastVisibleIndex];
              },
            },
            firstVisibleSlide: {
              get: function () {
                return this.slides[this.currentFirstVisibleIndex];
              },
            },
          }),
          (this.init = function () {
            var n = o.querySelector(".mgbox"),
              r = i.createElement("div");
            (r.className = "mgslider-box"),
              (this.mgsliderEl = i.createElement("div")),
              (this.slides = o.querySelectorAll(".mgline")),
              (this.mgsliderEl.className = "mgslider"),
              (this.mgsliderPrev = i.createElement("div")),
              (this.mgsliderPrev.className = "mgslider-prev"),
              (this.mgsliderPrev.style.display = "none"),
              (this.mgsliderPrev.innerHTML =
                '<img src="' +
                e.webProtocol +
                "//" +
                this.cdnDomain +
                '/test/carousel/img/scroll-arrow-to-left.svg">'),
              (this.mgsliderNext = i.createElement("div")),
              (this.mgsliderNext.className = "mgslider-next"),
              (this.mgsliderNext.style.display = "block"),
              (this.mgsliderNext.innerHTML =
                '<img src="' +
                e.webProtocol +
                "//" +
                this.cdnDomain +
                '/test/carousel/img/scroll-arrow-to-right.svg">'),
              n.appendChild(r),
              r.appendChild(this.mgsliderEl),
              r.appendChild(this.mgsliderPrev),
              r.appendChild(this.mgsliderNext);
            var a = this;
            [].forEach.call(this.slides, function (e) {
              a.mgsliderEl.appendChild(e);
            }),
              0 === this.slides.length
                ? (r.style.display = "none")
                : 0 !== this.slides.length &&
                  "none" === r.style.display &&
                  (r.style.display = "block"),
              this.mgsliderPrev.addEventListener("click", function () {
                a.move("right");
              }),
              this.mgsliderNext.addEventListener("click", function () {
                a.move("left");
              }),
              this.mgsliderNext.addEventListener("mouseover", function () {
                a.lastVisibleSlide &&
                  a.lastVisibleSlide.getAttribute("data-opacity") < 1 &&
                  (a.lastVisibleSlide.style.opacity = "0.6");
              }),
              this.mgsliderPrev.addEventListener("mouseover", function () {
                a.firstVisibleSlide &&
                  a.firstVisibleSlide.getAttribute("data-opacity") < 1 &&
                  (a.firstVisibleSlide.style.opacity = "0.6");
              }),
              this.mgsliderNext.addEventListener("mouseout", function () {
                a.lastVisibleSlide && (a.lastVisibleSlide.style.opacity = "1");
              }),
              this.mgsliderPrev.addEventListener("mouseout", function () {
                a.firstVisibleSlide &&
                  (a.firstVisibleSlide.style.opacity = "1");
              });
            var s = new t.Hammer(this.mgsliderEl);
            s.set({ touchAction: "auto" }),
              s.on("swipeleft", function () {
                a.move("left");
              }),
              s.on("swiperight", function () {
                a.move("right");
              }),
              [
                "webkitTransitionEnd",
                "oTransitionEnd",
                "transitionend",
                "msTransitionEnd",
              ].forEach(function (e) {
                a.mgsliderEl.addEventListener(
                  e,
                  function () {
                    a.decorateSlider();
                  },
                  !1
                );
              });
            for (var c = 0; c < this.slides.length; c++)
              !(function (e) {
                a.slides[e].addEventListener("click", function () {
                  a.slides[e].getAttribute("data-opacity") < 1 &&
                    a.move(
                      a.slides[e].offsetLeft + a.currentCarouselShift < 10
                        ? "right"
                        : "left"
                    );
                }),
                  a.slides[e].addEventListener("mouseover", function (t) {
                    a.slides[e].getAttribute("data-opacity") < 1 &&
                      !a.transitionalMoving &&
                      (a.slides[e].style.opacity = "0.6");
                  }),
                  a.slides[e].addEventListener("mousemove", function (e) {
                    a.mouseXCoord = e.clientX;
                  }),
                  a.slides[e].addEventListener("mouseout", function () {
                    a.slides[e].style.opacity = "1";
                  });
              })(c);
            [].forEach.call(i.querySelectorAll(".mgline a"), function (e) {
              ["click", "dblclick", "auxclick"].forEach(function (t) {
                return e.addEventListener(t, function (t) {
                  var n = (function (e, t) {
                    var n, o;
                    for (
                      [
                        "matches",
                        "webkitMatchesSelector",
                        "mozMatchesSelector",
                        "msMatchesSelector",
                        "oMatchesSelector",
                      ].some(function (e) {
                        return "function" == typeof i.body[e] && ((n = e), !0);
                      });
                      e;

                    ) {
                      if ((o = e.parentElement) && o[n](t)) return o;
                      e = o;
                    }
                    return null;
                  })(e, ".mgline");
                  if (
                    !1 === n.getAttribute("data-clickable") ||
                    !1 === n.getAttribute("data-href")
                  )
                    return t.preventDefault(), !1;
                });
              });
            });
          }),
          (this.calculateHeight = function () {
            var e = this.root.clientWidth,
              t = 300,
              n = 1,
              i = parseInt(!1);
            if (e < 480 && !i) t = e / (n + 0.6) - 12;
            else for (; t > 230; ) (t = e / (n + 0.6) - 12), (n += 1);
            [].forEach.call(this.slides, function (e) {
              e.style.width = t + "px";
            });
          }),
          (this.decorateSlider = function () {
            (this.mgboxWidth = this.root.clientWidth - 2),
              (this.currentFirstVisibleIndex = null),
              (this.currentLastVisibleIndex = 0);
            for (var t = 0; t < this.slides.length; t++)
              this.slides[t].setAttribute("data-opacity", "1"),
                this.slides[t].setAttribute("data-href", 1),
                (this.slides[t].style.opacity = "1"),
                this.slides[t].isVisible()
                  ? (this.slides[t].setAttribute("data-clickable", 1),
                    null === this.currentFirstVisibleIndex &&
                      (this.currentFirstVisibleIndex = t),
                    (this.currentLastVisibleIndex = t))
                  : this.slides[t].setAttribute("data-clickable", 0);
            if (this.firstVisibleSlide) {
              var n =
                this.lastVisibleSlide.offsetLeft +
                this.lastVisibleSlide.clientWidth +
                this.currentCarouselShift;
              if (
                ((this.lastSlidePartialVisible = n > this.mgboxWidth),
                (this.firstSlidePartialVisible =
                  this.firstVisibleSlide.offsetLeft +
                    this.currentCarouselShift <
                  0),
                !this.firstSlidePartialVisible &&
                  this.currentFirstVisibleIndex < 1)
              ) {
                if (
                  ((this.mgsliderPrev.style.display = "none"), this.wasMoved)
                ) {
                  this.firstVisibleSlide.setAttribute("data-href", 0);
                  var i = this;
                  setTimeout(function () {
                    i.firstVisibleSlide.setAttribute("data-href", 1);
                  }, 1e3);
                }
              } else {
                this.firstVisibleSlide.setAttribute("data-opacity", "0.6"),
                  this.firstVisibleSlide.setAttribute("data-href", 0),
                  (this.mgsliderPrev.style.display = "block");
                var o =
                  this.mouseXCoord -
                  this.firstVisibleSlide.offsetLeft -
                  this.currentCarouselShift;
                "right" === this.movingSide &&
                  !e.isMobile() &&
                  o > 0 &&
                  (this.firstVisibleSlide.style.opacity = "0.6"),
                  e.isMobile() &&
                    (this.firstVisibleSlide.style.opacity = "0.6");
              }
              if (
                !this.lastSlidePartialVisible &&
                this.currentLastVisibleIndex > this.slides.length - 2
              ) {
                (this.mgsliderNext.style.display = "none"),
                  this.lastVisibleSlide.setAttribute("data-href", 0);
                var r = this;
                setTimeout(function () {
                  r.lastVisibleSlide.setAttribute("data-href", 1);
                }, 1e3);
              } else {
                this.lastVisibleSlide.setAttribute("data-opacity", "0.6"),
                  this.lastVisibleSlide.setAttribute("data-href", 0),
                  (this.mgsliderNext.style.display = "block");
                var a =
                  this.mouseXCoord -
                  this.lastVisibleSlide.offsetLeft -
                  this.currentCarouselShift;
                "left" === this.movingSide &&
                  !ismobile() &&
                  a < this.lastVisibleSlide.clientWidth &&
                  (this.lastVisibleSlide.style.opacity = "0.6"),
                  e.isMobile() && (this.lastVisibleSlide.style.opacity = "0.6");
              }
              this.transitionalMoving = !1;
            }
          }),
          (this.move = function (e) {
            if (!this.transitionalMoving) {
              if (((this.wasMoved = !0), "left" === e)) {
                if (
                  !this.lastSlidePartialVisible &&
                  this.currentLastVisibleIndex > this.slides.length - 2
                )
                  return;
                var t =
                  this.mgboxWidth -
                  this.slides[this.slides.length - 1].offsetLeft -
                  this.slides[this.slides.length - 1].clientWidth -
                  6;
                !this.firstSlidePartialVisible &&
                this.currentFirstVisibleIndex < 1
                  ? (this.currentCarouselShift -=
                      0.7 *
                      (this.slides[this.currentLastVisibleIndex].clientWidth +
                        2 +
                        10))
                  : this.currentLastVisibleIndex > this.slides.length - 2
                  ? (this.currentCarouselShift = t)
                  : (this.currentCarouselShift -=
                      this.slides[this.currentLastVisibleIndex - 1]
                        .clientWidth +
                      2 +
                      10),
                  this.currentCarouselShift < t &&
                    (this.currentCarouselShift = t),
                  (this.movingSide = "left");
              } else if ("right" === e) {
                if (
                  !this.firstSlidePartialVisible &&
                  this.currentFirstVisibleIndex < 1
                )
                  return;
                this.firstSlidePartialVisible &&
                this.currentFirstVisibleIndex < 1
                  ? (this.currentCarouselShift = 0)
                  : !this.lastSlidePartialVisible &&
                    this.currentLastVisibleIndex > this.slides.length - 2
                  ? (this.currentCarouselShift +=
                      0.7 *
                      (this.slides[this.currentLastVisibleIndex - 1]
                        .clientWidth +
                        2 +
                        10))
                  : (this.currentCarouselShift +=
                      this.slides[this.currentLastVisibleIndex - 1]
                        .clientWidth +
                      2 +
                      10),
                  (this.movingSide = "right");
              }
              (this.transitionalMoving = !0),
                (this.mgsliderEl.style.left = this.currentCarouselShift + "px"),
                [].forEach.call(this.slides, function (e) {
                  (e.style.opacity = "1"), e.setAttribute("data-opacity", "1");
                });
            }
          });
      };
    };
  },
  function (e, t, n) {
    /*! Hammer.JS - v2.0.7 - 2016-04-22
     * http://hammerjs.github.io/
     *
     * Copyright (c) 2016 Jorik Tangelder;
     * Licensed under the MIT license */ !(function (t, n, i, o) {
      "use strict";
      var r,
        a = ["", "webkit", "Moz", "MS", "ms", "o"],
        s = n.createElement("div"),
        c = Math.round,
        l = Math.abs,
        d = Date.now;
      function u(e, t, n) {
        return setTimeout(y(e, n), t);
      }
      function h(e, t, n) {
        return !!Array.isArray(e) && (f(e, n[t], n), !0);
      }
      function f(e, t, n) {
        var i;
        if (e)
          if (e.forEach) e.forEach(t, n);
          else if (void 0 !== e.length)
            for (i = 0; i < e.length; ) t.call(n, e[i], i, e), i++;
          else for (i in e) e.hasOwnProperty(i) && t.call(n, e[i], i, e);
      }
      function p(e, n, i) {
        var o = "DEPRECATED METHOD: " + n + "\n" + i + " AT \n";
        return function () {
          var n = new Error("get-stack-trace"),
            i =
              n && n.stack
                ? n.stack
                    .replace(/^[^\(]+?[\n$]/gm, "")
                    .replace(/^\s+at\s+/gm, "")
                    .replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@")
                : "Unknown Stack Trace",
            r = t.console && (t.console.warn || t.console.log);
          return r && r.call(t.console, o, i), e.apply(this, arguments);
        };
      }
      r =
        "function" != typeof Object.assign
          ? function (e) {
              if (null == e)
                throw new TypeError(
                  "Cannot convert undefined or null to object"
                );
              for (var t = Object(e), n = 1; n < arguments.length; n++) {
                var i = arguments[n];
                if (null != i)
                  for (var o in i) i.hasOwnProperty(o) && (t[o] = i[o]);
              }
              return t;
            }
          : Object.assign;
      var m = p(
          function (e, t, n) {
            for (var i = Object.keys(t), o = 0; o < i.length; )
              (!n || (n && void 0 === e[i[o]])) && (e[i[o]] = t[i[o]]), o++;
            return e;
          },
          "extend",
          "Use `assign`."
        ),
        g = p(
          function (e, t) {
            return m(e, t, !0);
          },
          "merge",
          "Use `assign`."
        );
      function v(e, t, n) {
        var i,
          o = t.prototype;
        ((i = e.prototype = Object.create(o)).constructor = e),
          (i._super = o),
          n && r(i, n);
      }
      function y(e, t) {
        return function () {
          return e.apply(t, arguments);
        };
      }
      function w(e, t) {
        return "function" == typeof e ? e.apply((t && t[0]) || void 0, t) : e;
      }
      function b(e, t) {
        return void 0 === e ? t : e;
      }
      function x(e, t, n) {
        f(S(t), function (t) {
          e.addEventListener(t, n, !1);
        });
      }
      function k(e, t, n) {
        f(S(t), function (t) {
          e.removeEventListener(t, n, !1);
        });
      }
      function C(e, t) {
        for (; e; ) {
          if (e == t) return !0;
          e = e.parentNode;
        }
        return !1;
      }
      function E(e, t) {
        return e.indexOf(t) > -1;
      }
      function S(e) {
        return e.trim().split(/\s+/g);
      }
      function I(e, t, n) {
        if (e.indexOf && !n) return e.indexOf(t);
        for (var i = 0; i < e.length; ) {
          if ((n && e[i][n] == t) || (!n && e[i] === t)) return i;
          i++;
        }
        return -1;
      }
      function _(e) {
        return Array.prototype.slice.call(e, 0);
      }
      function A(e, t, n) {
        for (var i = [], o = [], r = 0; r < e.length; ) {
          var a = t ? e[r][t] : e[r];
          I(o, a) < 0 && i.push(e[r]), (o[r] = a), r++;
        }
        return (
          n &&
            (i = t
              ? i.sort(function (e, n) {
                  return e[t] > n[t];
                })
              : i.sort()),
          i
        );
      }
      function T(e, t) {
        for (
          var n, i, o = t[0].toUpperCase() + t.slice(1), r = 0;
          r < a.length;

        ) {
          if ((i = (n = a[r]) ? n + o : t) in e) return i;
          r++;
        }
      }
      var M = 1;
      function D(e) {
        var n = e.ownerDocument || e;
        return n.defaultView || n.parentWindow || t;
      }
      var N = "ontouchstart" in t,
        P = void 0 !== T(t, "PointerEvent"),
        B =
          N &&
          /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),
        O = ["x", "y"],
        L = ["clientX", "clientY"];
      function R(e, t) {
        var n = this;
        (this.manager = e),
          (this.callback = t),
          (this.element = e.element),
          (this.target = e.options.inputTarget),
          (this.domHandler = function (t) {
            w(e.options.enable, [e]) && n.handler(t);
          }),
          this.init();
      }
      function G(e, t, n) {
        var i = n.pointers.length,
          o = n.changedPointers.length,
          r = 1 & t && i - o == 0,
          a = 12 & t && i - o == 0;
        (n.isFirst = !!r),
          (n.isFinal = !!a),
          r && (e.session = {}),
          (n.eventType = t),
          (function (e, t) {
            var n = e.session,
              i = t.pointers,
              o = i.length;
            n.firstInput || (n.firstInput = H(t));
            o > 1 && !n.firstMultiple
              ? (n.firstMultiple = H(t))
              : 1 === o && (n.firstMultiple = !1);
            var r = n.firstInput,
              a = n.firstMultiple,
              s = a ? a.center : r.center,
              c = (t.center = z(i));
            (t.timeStamp = d()),
              (t.deltaTime = t.timeStamp - r.timeStamp),
              (t.angle = U(s, c)),
              (t.distance = j(s, c)),
              (function (e, t) {
                var n = t.center,
                  i = e.offsetDelta || {},
                  o = e.prevDelta || {},
                  r = e.prevInput || {};
                (1 !== t.eventType && 4 !== r.eventType) ||
                  ((o = e.prevDelta = { x: r.deltaX || 0, y: r.deltaY || 0 }),
                  (i = e.offsetDelta = { x: n.x, y: n.y }));
                (t.deltaX = o.x + (n.x - i.x)), (t.deltaY = o.y + (n.y - i.y));
              })(n, t),
              (t.offsetDirection = F(t.deltaX, t.deltaY));
            var u = W(t.deltaTime, t.deltaX, t.deltaY);
            (t.overallVelocityX = u.x),
              (t.overallVelocityY = u.y),
              (t.overallVelocity = l(u.x) > l(u.y) ? u.x : u.y),
              (t.scale = a
                ? ((h = a.pointers),
                  (f = i),
                  j(f[0], f[1], L) / j(h[0], h[1], L))
                : 1),
              (t.rotation = a
                ? (function (e, t) {
                    return U(t[1], t[0], L) + U(e[1], e[0], L);
                  })(a.pointers, i)
                : 0),
              (t.maxPointers = n.prevInput
                ? t.pointers.length > n.prevInput.maxPointers
                  ? t.pointers.length
                  : n.prevInput.maxPointers
                : t.pointers.length),
              (function (e, t) {
                var n,
                  i,
                  o,
                  r,
                  a = e.lastInterval || t,
                  s = t.timeStamp - a.timeStamp;
                if (8 != t.eventType && (s > 25 || void 0 === a.velocity)) {
                  var c = t.deltaX - a.deltaX,
                    d = t.deltaY - a.deltaY,
                    u = W(s, c, d);
                  (i = u.x),
                    (o = u.y),
                    (n = l(u.x) > l(u.y) ? u.x : u.y),
                    (r = F(c, d)),
                    (e.lastInterval = t);
                } else
                  (n = a.velocity),
                    (i = a.velocityX),
                    (o = a.velocityY),
                    (r = a.direction);
                (t.velocity = n),
                  (t.velocityX = i),
                  (t.velocityY = o),
                  (t.direction = r);
              })(n, t);
            var h, f;
            var p = e.element;
            C(t.srcEvent.target, p) && (p = t.srcEvent.target);
            t.target = p;
          })(e, n),
          e.emit("hammer.input", n),
          e.recognize(n),
          (e.session.prevInput = n);
      }
      function H(e) {
        for (var t = [], n = 0; n < e.pointers.length; )
          (t[n] = {
            clientX: c(e.pointers[n].clientX),
            clientY: c(e.pointers[n].clientY),
          }),
            n++;
        return {
          timeStamp: d(),
          pointers: t,
          center: z(t),
          deltaX: e.deltaX,
          deltaY: e.deltaY,
        };
      }
      function z(e) {
        var t = e.length;
        if (1 === t) return { x: c(e[0].clientX), y: c(e[0].clientY) };
        for (var n = 0, i = 0, o = 0; o < t; )
          (n += e[o].clientX), (i += e[o].clientY), o++;
        return { x: c(n / t), y: c(i / t) };
      }
      function W(e, t, n) {
        return { x: t / e || 0, y: n / e || 0 };
      }
      function F(e, t) {
        return e === t ? 1 : l(e) >= l(t) ? (e < 0 ? 2 : 4) : t < 0 ? 8 : 16;
      }
      function j(e, t, n) {
        n || (n = O);
        var i = t[n[0]] - e[n[0]],
          o = t[n[1]] - e[n[1]];
        return Math.sqrt(i * i + o * o);
      }
      function U(e, t, n) {
        n || (n = O);
        var i = t[n[0]] - e[n[0]],
          o = t[n[1]] - e[n[1]];
        return (180 * Math.atan2(o, i)) / Math.PI;
      }
      R.prototype = {
        handler: function () {},
        init: function () {
          this.evEl && x(this.element, this.evEl, this.domHandler),
            this.evTarget && x(this.target, this.evTarget, this.domHandler),
            this.evWin && x(D(this.element), this.evWin, this.domHandler);
        },
        destroy: function () {
          this.evEl && k(this.element, this.evEl, this.domHandler),
            this.evTarget && k(this.target, this.evTarget, this.domHandler),
            this.evWin && k(D(this.element), this.evWin, this.domHandler);
        },
      };
      var V = { mousedown: 1, mousemove: 2, mouseup: 4 };
      function q() {
        (this.evEl = "mousedown"),
          (this.evWin = "mousemove mouseup"),
          (this.pressed = !1),
          R.apply(this, arguments);
      }
      v(q, R, {
        handler: function (e) {
          var t = V[e.type];
          1 & t && 0 === e.button && (this.pressed = !0),
            2 & t && 1 !== e.which && (t = 4),
            this.pressed &&
              (4 & t && (this.pressed = !1),
              this.callback(this.manager, t, {
                pointers: [e],
                changedPointers: [e],
                pointerType: "mouse",
                srcEvent: e,
              }));
        },
      });
      var X = {
          pointerdown: 1,
          pointermove: 2,
          pointerup: 4,
          pointercancel: 8,
          pointerout: 8,
        },
        Y = { 2: "touch", 3: "pen", 4: "mouse", 5: "kinect" },
        J = "pointerdown",
        Z = "pointermove pointerup pointercancel";
      function $() {
        (this.evEl = J),
          (this.evWin = Z),
          R.apply(this, arguments),
          (this.store = this.manager.session.pointerEvents = []);
      }
      t.MSPointerEvent &&
        !t.PointerEvent &&
        ((J = "MSPointerDown"),
        (Z = "MSPointerMove MSPointerUp MSPointerCancel")),
        v($, R, {
          handler: function (e) {
            var t = this.store,
              n = !1,
              i = e.type.toLowerCase().replace("ms", ""),
              o = X[i],
              r = Y[e.pointerType] || e.pointerType,
              a = "touch" == r,
              s = I(t, e.pointerId, "pointerId");
            1 & o && (0 === e.button || a)
              ? s < 0 && (t.push(e), (s = t.length - 1))
              : 12 & o && (n = !0),
              s < 0 ||
                ((t[s] = e),
                this.callback(this.manager, o, {
                  pointers: t,
                  changedPointers: [e],
                  pointerType: r,
                  srcEvent: e,
                }),
                n && t.splice(s, 1));
          },
        });
      var K = { touchstart: 1, touchmove: 2, touchend: 4, touchcancel: 8 };
      function Q() {
        (this.evTarget = "touchstart"),
          (this.evWin = "touchstart touchmove touchend touchcancel"),
          (this.started = !1),
          R.apply(this, arguments);
      }
      function ee(e, t) {
        var n = _(e.touches),
          i = _(e.changedTouches);
        return 12 & t && (n = A(n.concat(i), "identifier", !0)), [n, i];
      }
      v(Q, R, {
        handler: function (e) {
          var t = K[e.type];
          if ((1 === t && (this.started = !0), this.started)) {
            var n = ee.call(this, e, t);
            12 & t && n[0].length - n[1].length == 0 && (this.started = !1),
              this.callback(this.manager, t, {
                pointers: n[0],
                changedPointers: n[1],
                pointerType: "touch",
                srcEvent: e,
              });
          }
        },
      });
      var te = { touchstart: 1, touchmove: 2, touchend: 4, touchcancel: 8 };
      function ne() {
        (this.evTarget = "touchstart touchmove touchend touchcancel"),
          (this.targetIds = {}),
          R.apply(this, arguments);
      }
      function ie(e, t) {
        var n = _(e.touches),
          i = this.targetIds;
        if (3 & t && 1 === n.length) return (i[n[0].identifier] = !0), [n, n];
        var o,
          r,
          a = _(e.changedTouches),
          s = [],
          c = this.target;
        if (
          ((r = n.filter(function (e) {
            return C(e.target, c);
          })),
          1 === t)
        )
          for (o = 0; o < r.length; ) (i[r[o].identifier] = !0), o++;
        for (o = 0; o < a.length; )
          i[a[o].identifier] && s.push(a[o]),
            12 & t && delete i[a[o].identifier],
            o++;
        return s.length ? [A(r.concat(s), "identifier", !0), s] : void 0;
      }
      v(ne, R, {
        handler: function (e) {
          var t = te[e.type],
            n = ie.call(this, e, t);
          n &&
            this.callback(this.manager, t, {
              pointers: n[0],
              changedPointers: n[1],
              pointerType: "touch",
              srcEvent: e,
            });
        },
      });
      function oe() {
        R.apply(this, arguments);
        var e = y(this.handler, this);
        (this.touch = new ne(this.manager, e)),
          (this.mouse = new q(this.manager, e)),
          (this.primaryTouch = null),
          (this.lastTouches = []);
      }
      function re(e, t) {
        1 & e
          ? ((this.primaryTouch = t.changedPointers[0].identifier),
            ae.call(this, t))
          : 12 & e && ae.call(this, t);
      }
      function ae(e) {
        var t = e.changedPointers[0];
        if (t.identifier === this.primaryTouch) {
          var n = { x: t.clientX, y: t.clientY };
          this.lastTouches.push(n);
          var i = this.lastTouches;
          setTimeout(function () {
            var e = i.indexOf(n);
            e > -1 && i.splice(e, 1);
          }, 2500);
        }
      }
      function se(e) {
        for (
          var t = e.srcEvent.clientX, n = e.srcEvent.clientY, i = 0;
          i < this.lastTouches.length;
          i++
        ) {
          var o = this.lastTouches[i],
            r = Math.abs(t - o.x),
            a = Math.abs(n - o.y);
          if (r <= 25 && a <= 25) return !0;
        }
        return !1;
      }
      v(oe, R, {
        handler: function (e, t, n) {
          var i = "touch" == n.pointerType,
            o = "mouse" == n.pointerType;
          if (
            !(
              o &&
              n.sourceCapabilities &&
              n.sourceCapabilities.firesTouchEvents
            )
          ) {
            if (i) re.call(this, t, n);
            else if (o && se.call(this, n)) return;
            this.callback(e, t, n);
          }
        },
        destroy: function () {
          this.touch.destroy(), this.mouse.destroy();
        },
      });
      var ce = T(s.style, "touchAction"),
        le = void 0 !== ce,
        de = (function () {
          if (!le) return !1;
          var e = {},
            n = t.CSS && t.CSS.supports;
          return (
            [
              "auto",
              "manipulation",
              "pan-y",
              "pan-x",
              "pan-x pan-y",
              "none",
            ].forEach(function (i) {
              e[i] = !n || t.CSS.supports("touch-action", i);
            }),
            e
          );
        })();
      function ue(e, t) {
        (this.manager = e), this.set(t);
      }
      ue.prototype = {
        set: function (e) {
          "compute" == e && (e = this.compute()),
            le &&
              this.manager.element.style &&
              de[e] &&
              (this.manager.element.style[ce] = e),
            (this.actions = e.toLowerCase().trim());
        },
        update: function () {
          this.set(this.manager.options.touchAction);
        },
        compute: function () {
          var e = [];
          return (
            f(this.manager.recognizers, function (t) {
              w(t.options.enable, [t]) && (e = e.concat(t.getTouchAction()));
            }),
            (function (e) {
              if (E(e, "none")) return "none";
              var t = E(e, "pan-x"),
                n = E(e, "pan-y");
              if (t && n) return "none";
              if (t || n) return t ? "pan-x" : "pan-y";
              if (E(e, "manipulation")) return "manipulation";
              return "auto";
            })(e.join(" "))
          );
        },
        preventDefaults: function (e) {
          var t = e.srcEvent,
            n = e.offsetDirection;
          if (this.manager.session.prevented) t.preventDefault();
          else {
            var i = this.actions,
              o = E(i, "none") && !de.none,
              r = E(i, "pan-y") && !de["pan-y"],
              a = E(i, "pan-x") && !de["pan-x"];
            if (o) {
              var s = 1 === e.pointers.length,
                c = e.distance < 2,
                l = e.deltaTime < 250;
              if (s && c && l) return;
            }
            if (!a || !r)
              return o || (r && 6 & n) || (a && 24 & n)
                ? this.preventSrc(t)
                : void 0;
          }
        },
        preventSrc: function (e) {
          (this.manager.session.prevented = !0), e.preventDefault();
        },
      };
      function he(e) {
        (this.options = r({}, this.defaults, e || {})),
          (this.id = M++),
          (this.manager = null),
          (this.options.enable = b(this.options.enable, !0)),
          (this.state = 1),
          (this.simultaneous = {}),
          (this.requireFail = []);
      }
      function fe(e) {
        return 16 & e
          ? "cancel"
          : 8 & e
          ? "end"
          : 4 & e
          ? "move"
          : 2 & e
          ? "start"
          : "";
      }
      function pe(e) {
        return 16 == e
          ? "down"
          : 8 == e
          ? "up"
          : 2 == e
          ? "left"
          : 4 == e
          ? "right"
          : "";
      }
      function me(e, t) {
        var n = t.manager;
        return n ? n.get(e) : e;
      }
      function ge() {
        he.apply(this, arguments);
      }
      function ve() {
        ge.apply(this, arguments), (this.pX = null), (this.pY = null);
      }
      function ye() {
        ge.apply(this, arguments);
      }
      function we() {
        he.apply(this, arguments), (this._timer = null), (this._input = null);
      }
      function be() {
        ge.apply(this, arguments);
      }
      function xe() {
        ge.apply(this, arguments);
      }
      function ke() {
        he.apply(this, arguments),
          (this.pTime = !1),
          (this.pCenter = !1),
          (this._timer = null),
          (this._input = null),
          (this.count = 0);
      }
      function Ce(e, t) {
        return (
          ((t = t || {}).recognizers = b(t.recognizers, Ce.defaults.preset)),
          new Ee(e, t)
        );
      }
      (he.prototype = {
        defaults: {},
        set: function (e) {
          return (
            r(this.options, e),
            this.manager && this.manager.touchAction.update(),
            this
          );
        },
        recognizeWith: function (e) {
          if (h(e, "recognizeWith", this)) return this;
          var t = this.simultaneous;
          return (
            t[(e = me(e, this)).id] || ((t[e.id] = e), e.recognizeWith(this)),
            this
          );
        },
        dropRecognizeWith: function (e) {
          return (
            h(e, "dropRecognizeWith", this) ||
              ((e = me(e, this)), delete this.simultaneous[e.id]),
            this
          );
        },
        requireFailure: function (e) {
          if (h(e, "requireFailure", this)) return this;
          var t = this.requireFail;
          return (
            -1 === I(t, (e = me(e, this))) &&
              (t.push(e), e.requireFailure(this)),
            this
          );
        },
        dropRequireFailure: function (e) {
          if (h(e, "dropRequireFailure", this)) return this;
          e = me(e, this);
          var t = I(this.requireFail, e);
          return t > -1 && this.requireFail.splice(t, 1), this;
        },
        hasRequireFailures: function () {
          return this.requireFail.length > 0;
        },
        canRecognizeWith: function (e) {
          return !!this.simultaneous[e.id];
        },
        emit: function (e) {
          var t = this,
            n = this.state;
          function i(n) {
            t.manager.emit(n, e);
          }
          n < 8 && i(t.options.event + fe(n)),
            i(t.options.event),
            e.additionalEvent && i(e.additionalEvent),
            n >= 8 && i(t.options.event + fe(n));
        },
        tryEmit: function (e) {
          if (this.canEmit()) return this.emit(e);
          this.state = 32;
        },
        canEmit: function () {
          for (var e = 0; e < this.requireFail.length; ) {
            if (!(33 & this.requireFail[e].state)) return !1;
            e++;
          }
          return !0;
        },
        recognize: function (e) {
          var t = r({}, e);
          if (!w(this.options.enable, [this, t]))
            return this.reset(), void (this.state = 32);
          56 & this.state && (this.state = 1),
            (this.state = this.process(t)),
            30 & this.state && this.tryEmit(t);
        },
        process: function (e) {},
        getTouchAction: function () {},
        reset: function () {},
      }),
        v(ge, he, {
          defaults: { pointers: 1 },
          attrTest: function (e) {
            var t = this.options.pointers;
            return 0 === t || e.pointers.length === t;
          },
          process: function (e) {
            var t = this.state,
              n = e.eventType,
              i = 6 & t,
              o = this.attrTest(e);
            return i && (8 & n || !o)
              ? 16 | t
              : i || o
              ? 4 & n
                ? 8 | t
                : 2 & t
                ? 4 | t
                : 2
              : 32;
          },
        }),
        v(ve, ge, {
          defaults: { event: "pan", threshold: 10, pointers: 1, direction: 30 },
          getTouchAction: function () {
            var e = this.options.direction,
              t = [];
            return 6 & e && t.push("pan-y"), 24 & e && t.push("pan-x"), t;
          },
          directionTest: function (e) {
            var t = this.options,
              n = !0,
              i = e.distance,
              o = e.direction,
              r = e.deltaX,
              a = e.deltaY;
            return (
              o & t.direction ||
                (6 & t.direction
                  ? ((o = 0 === r ? 1 : r < 0 ? 2 : 4),
                    (n = r != this.pX),
                    (i = Math.abs(e.deltaX)))
                  : ((o = 0 === a ? 1 : a < 0 ? 8 : 16),
                    (n = a != this.pY),
                    (i = Math.abs(e.deltaY)))),
              (e.direction = o),
              n && i > t.threshold && o & t.direction
            );
          },
          attrTest: function (e) {
            return (
              ge.prototype.attrTest.call(this, e) &&
              (2 & this.state || (!(2 & this.state) && this.directionTest(e)))
            );
          },
          emit: function (e) {
            (this.pX = e.deltaX), (this.pY = e.deltaY);
            var t = pe(e.direction);
            t && (e.additionalEvent = this.options.event + t),
              this._super.emit.call(this, e);
          },
        }),
        v(ye, ge, {
          defaults: { event: "pinch", threshold: 0, pointers: 2 },
          getTouchAction: function () {
            return ["none"];
          },
          attrTest: function (e) {
            return (
              this._super.attrTest.call(this, e) &&
              (Math.abs(e.scale - 1) > this.options.threshold || 2 & this.state)
            );
          },
          emit: function (e) {
            if (1 !== e.scale) {
              var t = e.scale < 1 ? "in" : "out";
              e.additionalEvent = this.options.event + t;
            }
            this._super.emit.call(this, e);
          },
        }),
        v(we, he, {
          defaults: { event: "press", pointers: 1, time: 251, threshold: 9 },
          getTouchAction: function () {
            return ["auto"];
          },
          process: function (e) {
            var t = this.options,
              n = e.pointers.length === t.pointers,
              i = e.distance < t.threshold,
              o = e.deltaTime > t.time;
            if (((this._input = e), !i || !n || (12 & e.eventType && !o)))
              this.reset();
            else if (1 & e.eventType)
              this.reset(),
                (this._timer = u(
                  function () {
                    (this.state = 8), this.tryEmit();
                  },
                  t.time,
                  this
                ));
            else if (4 & e.eventType) return 8;
            return 32;
          },
          reset: function () {
            clearTimeout(this._timer);
          },
          emit: function (e) {
            8 === this.state &&
              (e && 4 & e.eventType
                ? this.manager.emit(this.options.event + "up", e)
                : ((this._input.timeStamp = d()),
                  this.manager.emit(this.options.event, this._input)));
          },
        }),
        v(be, ge, {
          defaults: { event: "rotate", threshold: 0, pointers: 2 },
          getTouchAction: function () {
            return ["none"];
          },
          attrTest: function (e) {
            return (
              this._super.attrTest.call(this, e) &&
              (Math.abs(e.rotation) > this.options.threshold || 2 & this.state)
            );
          },
        }),
        v(xe, ge, {
          defaults: {
            event: "swipe",
            threshold: 10,
            velocity: 0.3,
            direction: 30,
            pointers: 1,
          },
          getTouchAction: function () {
            return ve.prototype.getTouchAction.call(this);
          },
          attrTest: function (e) {
            var t,
              n = this.options.direction;
            return (
              30 & n
                ? (t = e.overallVelocity)
                : 6 & n
                ? (t = e.overallVelocityX)
                : 24 & n && (t = e.overallVelocityY),
              this._super.attrTest.call(this, e) &&
                n & e.offsetDirection &&
                e.distance > this.options.threshold &&
                e.maxPointers == this.options.pointers &&
                l(t) > this.options.velocity &&
                4 & e.eventType
            );
          },
          emit: function (e) {
            var t = pe(e.offsetDirection);
            t && this.manager.emit(this.options.event + t, e),
              this.manager.emit(this.options.event, e);
          },
        }),
        v(ke, he, {
          defaults: {
            event: "tap",
            pointers: 1,
            taps: 1,
            interval: 300,
            time: 250,
            threshold: 9,
            posThreshold: 10,
          },
          getTouchAction: function () {
            return ["manipulation"];
          },
          process: function (e) {
            var t = this.options,
              n = e.pointers.length === t.pointers,
              i = e.distance < t.threshold,
              o = e.deltaTime < t.time;
            if ((this.reset(), 1 & e.eventType && 0 === this.count))
              return this.failTimeout();
            if (i && o && n) {
              if (4 != e.eventType) return this.failTimeout();
              var r = !this.pTime || e.timeStamp - this.pTime < t.interval,
                a = !this.pCenter || j(this.pCenter, e.center) < t.posThreshold;
              if (
                ((this.pTime = e.timeStamp),
                (this.pCenter = e.center),
                a && r ? (this.count += 1) : (this.count = 1),
                (this._input = e),
                0 === this.count % t.taps)
              )
                return this.hasRequireFailures()
                  ? ((this._timer = u(
                      function () {
                        (this.state = 8), this.tryEmit();
                      },
                      t.interval,
                      this
                    )),
                    2)
                  : 8;
            }
            return 32;
          },
          failTimeout: function () {
            return (
              (this._timer = u(
                function () {
                  this.state = 32;
                },
                this.options.interval,
                this
              )),
              32
            );
          },
          reset: function () {
            clearTimeout(this._timer);
          },
          emit: function () {
            8 == this.state &&
              ((this._input.tapCount = this.count),
              this.manager.emit(this.options.event, this._input));
          },
        }),
        (Ce.VERSION = "2.0.7"),
        (Ce.defaults = {
          domEvents: !1,
          touchAction: "compute",
          enable: !0,
          inputTarget: null,
          inputClass: null,
          preset: [
            [be, { enable: !1 }],
            [ye, { enable: !1 }, ["rotate"]],
            [xe, { direction: 6 }],
            [ve, { direction: 6 }, ["swipe"]],
            [ke],
            [ke, { event: "doubletap", taps: 2 }, ["tap"]],
            [we],
          ],
          cssProps: {
            userSelect: "none",
            touchSelect: "none",
            touchCallout: "none",
            contentZooming: "none",
            userDrag: "none",
            tapHighlightColor: "rgba(0,0,0,0)",
          },
        });
      function Ee(e, t) {
        var n;
        (this.options = r({}, Ce.defaults, t || {})),
          (this.options.inputTarget = this.options.inputTarget || e),
          (this.handlers = {}),
          (this.session = {}),
          (this.recognizers = []),
          (this.oldCssProps = {}),
          (this.element = e),
          (this.input = new ((n = this).options.inputClass ||
            (P ? $ : B ? ne : N ? oe : q))(n, G)),
          (this.touchAction = new ue(this, this.options.touchAction)),
          Se(this, !0),
          f(
            this.options.recognizers,
            function (e) {
              var t = this.add(new e[0](e[1]));
              e[2] && t.recognizeWith(e[2]), e[3] && t.requireFailure(e[3]);
            },
            this
          );
      }
      function Se(e, t) {
        var n,
          i = e.element;
        i.style &&
          (f(e.options.cssProps, function (o, r) {
            (n = T(i.style, r)),
              t
                ? ((e.oldCssProps[n] = i.style[n]), (i.style[n] = o))
                : (i.style[n] = e.oldCssProps[n] || "");
          }),
          t || (e.oldCssProps = {}));
      }
      (Ee.prototype = {
        set: function (e) {
          return (
            r(this.options, e),
            e.touchAction && this.touchAction.update(),
            e.inputTarget &&
              (this.input.destroy(),
              (this.input.target = e.inputTarget),
              this.input.init()),
            this
          );
        },
        stop: function (e) {
          this.session.stopped = e ? 2 : 1;
        },
        recognize: function (e) {
          var t = this.session;
          if (!t.stopped) {
            var n;
            this.touchAction.preventDefaults(e);
            var i = this.recognizers,
              o = t.curRecognizer;
            (!o || (o && 8 & o.state)) && (o = t.curRecognizer = null);
            for (var r = 0; r < i.length; )
              (n = i[r]),
                2 === t.stopped || (o && n != o && !n.canRecognizeWith(o))
                  ? n.reset()
                  : n.recognize(e),
                !o && 14 & n.state && (o = t.curRecognizer = n),
                r++;
          }
        },
        get: function (e) {
          if (e instanceof he) return e;
          for (var t = this.recognizers, n = 0; n < t.length; n++)
            if (t[n].options.event == e) return t[n];
          return null;
        },
        add: function (e) {
          if (h(e, "add", this)) return this;
          var t = this.get(e.options.event);
          return (
            t && this.remove(t),
            this.recognizers.push(e),
            (e.manager = this),
            this.touchAction.update(),
            e
          );
        },
        remove: function (e) {
          if (h(e, "remove", this)) return this;
          if ((e = this.get(e))) {
            var t = this.recognizers,
              n = I(t, e);
            -1 !== n && (t.splice(n, 1), this.touchAction.update());
          }
          return this;
        },
        on: function (e, t) {
          if (void 0 !== e && void 0 !== t) {
            var n = this.handlers;
            return (
              f(S(e), function (e) {
                (n[e] = n[e] || []), n[e].push(t);
              }),
              this
            );
          }
        },
        off: function (e, t) {
          if (void 0 !== e) {
            var n = this.handlers;
            return (
              f(S(e), function (e) {
                t ? n[e] && n[e].splice(I(n[e], t), 1) : delete n[e];
              }),
              this
            );
          }
        },
        emit: function (e, t) {
          this.options.domEvents &&
            (function (e, t) {
              var i = n.createEvent("Event");
              i.initEvent(e, !0, !0),
                (i.gesture = t),
                t.target.dispatchEvent(i);
            })(e, t);
          var i = this.handlers[e] && this.handlers[e].slice();
          if (i && i.length) {
            (t.type = e),
              (t.preventDefault = function () {
                t.srcEvent.preventDefault();
              });
            for (var o = 0; o < i.length; ) i[o](t), o++;
          }
        },
        destroy: function () {
          this.element && Se(this, !1),
            (this.handlers = {}),
            (this.session = {}),
            this.input.destroy(),
            (this.element = null);
        },
      }),
        r(Ce, {
          INPUT_START: 1,
          INPUT_MOVE: 2,
          INPUT_END: 4,
          INPUT_CANCEL: 8,
          STATE_POSSIBLE: 1,
          STATE_BEGAN: 2,
          STATE_CHANGED: 4,
          STATE_ENDED: 8,
          STATE_RECOGNIZED: 8,
          STATE_CANCELLED: 16,
          STATE_FAILED: 32,
          DIRECTION_NONE: 1,
          DIRECTION_LEFT: 2,
          DIRECTION_RIGHT: 4,
          DIRECTION_UP: 8,
          DIRECTION_DOWN: 16,
          DIRECTION_HORIZONTAL: 6,
          DIRECTION_VERTICAL: 24,
          DIRECTION_ALL: 30,
          Manager: Ee,
          Input: R,
          TouchAction: ue,
          TouchInput: ne,
          MouseInput: q,
          PointerEventInput: $,
          TouchMouseInput: oe,
          SingleTouchInput: Q,
          Recognizer: he,
          AttrRecognizer: ge,
          Tap: ke,
          Pan: ve,
          Swipe: xe,
          Pinch: ye,
          Rotate: be,
          Press: we,
          on: x,
          off: k,
          each: f,
          merge: g,
          extend: m,
          assign: r,
          inherit: v,
          bindFn: y,
          prefixed: T,
        }),
        ((void 0 !== t
          ? t
          : "undefined" != typeof self
          ? self
          : {}
        ).Hammer = Ce),
        "function" == typeof define && define.amd
          ? define(function () {
              return Ce;
            })
          : e.exports
          ? (e.exports = Ce)
          : (t.Hammer = Ce);
    })(window, document);
  },
  function (e, t) {
    window.MarketGidCGradientBlock762628 = function (e) {
      e.afterLoadNewsHooks.push("gradientRendering"),
        (e.gradientRendering = function () {
          var t = e.root.querySelectorAll("[class*=mgline-blur]");
          if (0 !== t.length)
            for (
              var n = function (n) {
                  var i = "",
                    o = "",
                    r = "",
                    a = /\bmgline-[^\s]*\b/.exec(t[n].classList.value),
                    s = /\bmgline-[^\s]*\b-mob/.exec(t[n].classList.value);
                  a &&
                    (i =
                      "to " +
                      (r =
                        "blur" === (r = a[0].split("-").pop()) ? "bottom" : r) +
                      ","),
                    s && (o = "to " + (r = s[0].split("-")[2]) + ",");
                  var c = t[n],
                    l = t[n].getElementsByClassName("text-elements")[0];
                  if (!t[n].getElementsByClassName("mctitle")[0])
                    return "continue";
                  var d,
                    u = t[n]
                      .getElementsByClassName("mctitle")[0]
                      .getElementsByTagName("a")[0],
                    h = t[n].getElementsByClassName("mcdomain"),
                    f = t[n].querySelector("img.mcimg").getAttribute("src"),
                    p = "";
                  "" !== p &&
                    ((d = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(p)),
                    (p = d
                      ? parseInt(d[1], 16) +
                        "," +
                        parseInt(d[2], 16) +
                        "," +
                        parseInt(d[3], 16)
                      : ""));
                  "function" == typeof fetch && "" === p
                    ? (function (t, n, i, o, r, a) {
                        e.colorAverage(f).then(function (s) {
                          (e.context.matchMedia("(max-width: 480px)").matches ||
                            "mobile" === e.deviceType) &&
                            (r = a);
                          var c =
                              0.299 * s.r + 0.587 * s.g + 0.114 * s.b > 186
                                ? "#000"
                                : "#fff",
                            l =
                              "linear-gradient(" +
                              r +
                              "transparent, rgba(" +
                              s.r +
                              "," +
                              s.g +
                              "," +
                              s.b +
                              ", 0.25) 15%,rgba(" +
                              s.r +
                              "," +
                              s.g +
                              "," +
                              s.b +
                              ", 0.85) 30%,rgb(" +
                              s.r +
                              "," +
                              s.g +
                              "," +
                              s.b +
                              ") 45%)";
                          (t.style.background =
                            "rgb(" + s.r + "," + s.g + "," + s.b + ")"),
                            (n.style.background = l),
                            (i.style.color = c),
                            Object.keys(o).forEach(function (e) {
                              o[e].firstElementChild.style.color = "#fff";
                            });
                        });
                      })(c, l, u, h, i, o)
                    : (function (t, n, i, o, r) {
                        (e.context.matchMedia("(max-width: 480px)").matches ||
                          "mobile" === e.deviceType) &&
                          (o = r);
                        var a = "";
                        (a =
                          "" === p
                            ? "linear-gradient(" +
                              o +
                              "transparent,rgba(0,0,0, 0.25) 15%,rgba(0,0,0, 0.85) 30%,rgb(0,0,0) 45%)"
                            : "linear-gradient(" +
                              o +
                              "transparent,rgba(" +
                              p +
                              ", 0.25) 15%,rgba(" +
                              p +
                              ", 0.85) 30%,rgb(" +
                              p +
                              ") 45%)"),
                          (t.style.background = a),
                          (n.style.color = "#fff"),
                          Object.keys(i).forEach(function (e) {
                            i[e].firstElementChild.style.color = "#fff";
                          });
                      })(l, u, h, i, o);
                  var m =
                    e.autoSizeTitle -
                    Math.round(u.clientHeight / e.autoSizeTitle);
                  (u.style.fontSize = m + "px"),
                    (u.style.lineHeight = m + "px");
                },
                i = 0;
              i < t.length;
              i++
            )
              n(i);
        });
    };
  },
  function (e, t) {
    window.MarketGidCResponsiveBlock762628 = function (e) {
      e.afterLoadNewsHooks.push("responsiveInit"),
        (e.responsiveInit = function () {
          e.ElementQueries.init(),
            0 === e.fakeMode &&
              (e.fixPrices(),
              setTimeout(function () {
                e.fixFlexbox();
              }, 100));
        }),
        (e.fixElementPrice = function (e) {
          for (
            var t = e.getElementsByClassName("mcpriceouter"), n = 0;
            n < t.length;
            n++
          ) {
            var i = t[n].parentNode,
              o = i.getElementsByClassName("mcpriceold");
            if (
              t[n].getBoundingClientRect().bottom >=
              i.getBoundingClientRect().bottom
            )
              for (var r = 0; r < o.length; r++) o[r].style.display = "none";
            else
              for (var a = 0; a < o.length; a++)
                (o[a].style.display = "inline-block"),
                  t[n].getBoundingClientRect().bottom >=
                    i.getBoundingClientRect().bottom &&
                    (o[a].style.display = "none");
          }
        }),
        (e.fixPrices = function () {
          for (
            var t = e.root.getElementsByClassName("mgline"), n = 0;
            n < t.length;
            n++
          )
            !(function (t) {
              e.fixElementPrice(t),
                (t.resizeSensor = new e.ResizeSensor(t, function () {
                  e.fixElementPrice(t);
                }));
            })(t[n]);
        }),
        (e.fixFlexbox = function () {
          var t = e.context.document.body || e.context.document.documentElement;
          if (
            "" == (t = t.style).webkitFlexWrap ||
            "" == t.msFlexWrap ||
            "" == t.flexWrap
          )
            return !0;
          for (
            var n = e.root.getElementsByClassName("mgline"), i = 0;
            i < n.length;
            i++
          )
            n[i].style.height = "auto";
          setTimeout(function () {
            for (var t = 0, i = 0; i < n.length; i++) {
              var o = n[i].getBoundingClientRect(),
                r = o.bottom - o.top;
              r > t && (t = r);
            }
            if (0 != elH)
              for (var a = 0; a < n.length; a++) n[a].style.height = t + "px";
            e.fixImages();
          }, 0);
        }),
        (e.fixImages = function () {
          setTimeout(function () {
            for (
              var t = !1, n = e.root.getElementsByClassName("mcimg"), i = 0;
              i < n.length;
              i++
            )
              if ("DIV" == n[i].tagName) {
                var o = n[i].getBoundingClientRect();
                o.bottom - o.top <= 25 &&
                  ((t = !0),
                  (n[i].style.display = "none"),
                  (function (e) {
                    setTimeout(function () {
                      e.style.display = "block";
                    }, 0);
                  })(n[i]));
              }
            t && e.fixFlexbox();
          }, 200);
        }),
        (e.ElementQueries = function () {
          function t(e) {
            var t, n;
            (this.element = e), (this.options = {});
            var i,
              o,
              r,
              a,
              s,
              c = 0,
              l = 0;
            this.addOption = function (e) {
              var t = [e.mode, e.property, e.value].join(",");
              this.options[t] = e;
            };
            var d = ["min-width", "min-height", "max-width", "max-height"];
            this.call = function () {
              for (t in ((c = this.element.offsetWidth),
              (l = this.element.offsetHeight),
              (r = {}),
              this.options))
                this.options.hasOwnProperty(t) &&
                  ((n = this.options[t]),
                  (i = parseFloat(n.value)),
                  (o = "width" == n.property ? c : l),
                  (s = n.mode + "-" + n.property),
                  (a = ""),
                  "min" == n.mode && o >= i && (a += n.value),
                  "max" == n.mode && o <= i && (a += n.value),
                  r[s] || (r[s] = ""),
                  a &&
                    -1 === (" " + r[s] + " ").indexOf(" " + a + " ") &&
                    (r[s] += " " + a));
              for (var e in d)
                r[d[e]]
                  ? this.element.setAttribute(d[e], r[d[e]].substr(1))
                  : this.element.removeAttribute(d[e]);
            };
          }
          function n(n, i, o) {
            n.elementQueriesSetupInformation
              ? n.elementQueriesSetupInformation.addOption(i)
              : ((n.elementQueriesSetupInformation = new t(n)),
                n.elementQueriesSetupInformation.addOption(i),
                (n.elementQueriesSensor = new e.ResizeSensor(
                  n,
                  function () {
                    n.elementQueriesSetupInformation.call();
                  },
                  o
                ))),
              n.elementQueriesSetupInformation.call();
          }
          function i(t, i, o, r) {
            var a,
              s = (function (e) {
                var t,
                  n,
                  i = 0;
                if (0 == e.length) return i;
                for (t = 0, n = e.length; t < n; t++)
                  (i = (i << 5) - i + e.charCodeAt(t)), (i |= 0);
                return i;
              })(t + i + o + r);
            if (
              (e.root.querySelectorAll &&
                e.root.querySelectorAll.bind &&
                (a = e.root.querySelectorAll.bind(e.root)),
              a)
            )
              for (var c = a(t), l = 0, d = c.length; l < d; l++)
                n(c[l], { mode: i, property: o, value: r }, s);
          }
          var o = /,?([^,\n]*)\[[\s\t]*(min|max)-(width|height)[\s\t]*[~$\^]?=[\s\t]*"([^"]*)"[\s\t]*]([^\n\s\{]*)/gim;
          function r(e) {
            var t;
            for (
              e = e.replace(/'/g, '"').replace(/(\[.*?\])([A-z\.-]*)/g, "$2$1");
              null !== (t = o.exec(e));

            )
              5 < t.length && i(t[1] || t[5], t[2], t[3], t[4]);
          }
          function a(e) {
            var t = "";
            if (e)
              if ("string" == typeof e)
                (-1 === (e = e.toLowerCase()).indexOf("min-width") &&
                  -1 === e.indexOf("max-width")) ||
                  r(e);
              else
                for (var n = 0, i = e.length; n < i; n++)
                  1 === e[n].type
                    ? -1 !==
                        (t = e[n].selectorText || e[n].cssText).indexOf(
                          "min-height"
                        ) || -1 !== t.indexOf("max-height")
                      ? r(t)
                      : (-1 === t.indexOf("min-width") &&
                          -1 === t.indexOf("max-width")) ||
                        r(t)
                    : 4 === e[n].type && a(e[n].cssRules || e[n].rules);
          }
          (this.init = function () {
            for (
              var t = e.context.document.styleSheets, n = 0, i = t.length;
              n < i;
              n++
            )
              try {
                t[n].ownerNode &&
                  "MarketGid762628" == t[n].ownerNode.className &&
                  a(t[n].cssRules || t[n].cssText || t[n].rules);
              } catch (e) {
                continue;
              }
          }),
            (this.update = function () {
              this.init();
            });
        }),
        (e.ElementQueries.update = function () {
          e.ElementQueries.instance.update();
        }),
        (e.ElementQueries.init = function () {
          e.ElementQueries.instance ||
            (e.ElementQueries.instance = new e.ElementQueries()),
            e.ElementQueries.instance.init();
        }),
        (e.initElementQueries = function () {
          e.addEvent(e.context, "load", function () {
            e.ElementQueries.init();
          });
        }),
        (e.ResizeSensor = function (t, n, i) {
          function o() {
            var e, t;
            (this.q = []),
              (this.add = function (e) {
                this.q.push(e);
              }),
              (this.call = function () {
                for (e = 0, t = this.q.length; e < t; e++) this.q[e].call();
              });
          }
          function r(t, n, i) {
            if (t.resizedAttached) {
              if (t.resizedAttached) return void t.resizedAttached.add(n);
            } else (t.resizedAttached = new o()), t.resizedAttached.add(n);
            if (e.context.document.querySelector) {
              var r = e.context.document.querySelector(
                ".resize-sensor.hash_" + i
              );
              if (null == r || !i) {
                (t.resizeSensor = e.context.document.createElement("div")),
                  (t.resizeSensor.className = i
                    ? "resize-sensor hash_" + i
                    : "resize-sensor");
                var a =
                    "position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: scroll; z-index: -1; visibility: hidden;",
                  s = "position: absolute; left: 0; top: 0;";
                (t.resizeSensor.style.cssText = a),
                  (t.resizeSensor.innerHTML =
                    '<div class="resize-sensor-expand" style="' +
                    a +
                    '"><div style="' +
                    s +
                    '"></div></div><div class="resize-sensor-shrink" style="' +
                    a +
                    '"><div style="' +
                    s +
                    ' width: 200%; height: 200%"></div></div>'),
                  t.appendChild(t.resizeSensor),
                  (r = t.resizeSensor);
              }
              ({ fixed: 1, absolute: 1 }[
                (function (t, n) {
                  return t.currentStyle
                    ? t.currentStyle[n]
                    : e.context.getComputedStyle
                    ? e.context.getComputedStyle(t, null).getPropertyValue(n)
                    : t.style[n];
                })(t, "position")
              ] || (t.style.position = "relative"));
              var c,
                l,
                d = r.childNodes[0],
                u = d.childNodes[0],
                h = r.childNodes[1],
                f = function () {
                  (u.style.width = d.offsetWidth + 10 + "px"),
                    (u.style.height = d.offsetHeight + 10 + "px"),
                    (d.scrollLeft = d.scrollWidth),
                    (d.scrollTop = d.scrollHeight),
                    (h.scrollLeft = h.scrollWidth),
                    (h.scrollTop = h.scrollHeight),
                    (c = t.offsetWidth),
                    (l = t.offsetHeight);
                };
              f();
              var p = function () {
                t.resizedAttached && t.resizedAttached.call();
              };
              e.addEvent(d, "scroll", function () {
                (t.offsetWidth > c || t.offsetHeight > l) && p(), f();
              }),
                e.addEvent(h, "scroll", function () {
                  (t.offsetWidth < c || t.offsetHeight < l) && p(), f();
                });
            }
          }
          if (
            "[object Array]" === Object.prototype.toString.call(t) ||
            ("undefined" != typeof jQuery && t instanceof jQuery) ||
            ("undefined" != typeof Elements && t instanceof Elements)
          )
            for (var a = 0, s = t.length; a < s; a++) r(t[a], n, i);
          else r(t, n, i);
        });
    };
  },
]);
