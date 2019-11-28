"use weex:vue";
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 309);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/*!*******************************************************!*\
  !*** ./node_modules/@dcloudio/uni-stat/dist/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(plus, uni) {var _package = __webpack_require__(/*! ../package.json */ 3);function _possibleConstructorReturn(self, call) {if (call && (typeof call === "object" || typeof call === "function")) {return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });if (superClass) _setPrototypeOf(subClass, superClass);}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}

var STAT_VERSION = _package.version;
var STAT_URL = 'https://tongji.dcloud.io/uni/stat';
var STAT_H5_URL = 'https://tongji.dcloud.io/uni/stat.gif';
var PAGE_PVER_TIME = 1800;
var APP_PVER_TIME = 300;
var OPERATING_TIME = 10;

var UUID_KEY = '__DC_STAT_UUID';
var UUID_VALUE = '__DC_UUID_VALUE';

function getUuid() {
  var uuid = '';
  if (getPlatformName() === 'n') {
    try {
      uuid = plus.runtime.getDCloudId();
    } catch (e) {
      uuid = '';
    }
    return uuid;
  }

  try {
    uuid = uni.getStorageSync(UUID_KEY);
  } catch (e) {
    uuid = UUID_VALUE;
  }

  if (!uuid) {
    uuid = Date.now() + '' + Math.floor(Math.random() * 1e7);
    try {
      uni.setStorageSync(UUID_KEY, uuid);
    } catch (e) {
      uni.setStorageSync(UUID_KEY, UUID_VALUE);
    }
  }
  return uuid;
}

var getSgin = function getSgin(statData) {
  var arr = Object.keys(statData);
  var sortArr = arr.sort();
  var sgin = {};
  var sginStr = '';
  for (var i in sortArr) {
    sgin[sortArr[i]] = statData[sortArr[i]];
    sginStr += sortArr[i] + '=' + statData[sortArr[i]] + '&';
  }
  // const options = sginStr.substr(0, sginStr.length - 1)
  // sginStr = sginStr.substr(0, sginStr.length - 1) + '&key=' + STAT_KEY;
  // const si = crypto.createHash('md5').update(sginStr).digest('hex');
  return {
    sign: '',
    options: sginStr.substr(0, sginStr.length - 1) };

};

var getSplicing = function getSplicing(data) {
  var str = '';
  for (var i in data) {
    str += i + '=' + data[i] + '&';
  }
  return str.substr(0, str.length - 1);
};

var getTime = function getTime() {
  return parseInt(new Date().getTime() / 1000);
};

var getPlatformName = function getPlatformName() {
  var platformList = {
    'app-plus': 'n',
    'h5': 'h5',
    'mp-weixin': 'wx',
    'mp-alipay': 'ali',
    'mp-baidu': 'bd',
    'mp-toutiao': 'tt',
    'mp-qq': 'qq' };

  return platformList["app-plus"];
};

var getPackName = function getPackName() {
  var packName = '';
  if (getPlatformName() === 'wx' || getPlatformName() === 'qq') {
    // 兼容微信小程序低版本基础库
    if (uni.canIUse('getAccountInfoSync')) {
      packName = uni.getAccountInfoSync().miniProgram.appId || '';
    }
  }
  return packName;
};

var getVersion = function getVersion() {
  return getPlatformName() === 'n' ? plus.runtime.version : '';
};

var getChannel = function getChannel() {
  var platformName = getPlatformName();
  var channel = '';
  if (platformName === 'n') {
    channel = plus.runtime.channel;
  }
  return channel;
};

var getScene = function getScene(options) {
  var platformName = getPlatformName();
  var scene = '';
  if (options) {
    return options;
  }
  if (platformName === 'wx') {
    scene = uni.getLaunchOptionsSync().scene;
  }
  return scene;
};
var First__Visit__Time__KEY = 'First__Visit__Time';
var Last__Visit__Time__KEY = 'Last__Visit__Time';

var getFirstVisitTime = function getFirstVisitTime() {
  var timeStorge = uni.getStorageSync(First__Visit__Time__KEY);
  var time = 0;
  if (timeStorge) {
    time = timeStorge;
  } else {
    time = getTime();
    uni.setStorageSync(First__Visit__Time__KEY, time);
    uni.removeStorageSync(Last__Visit__Time__KEY);
  }
  return time;
};

var getLastVisitTime = function getLastVisitTime() {
  var timeStorge = uni.getStorageSync(Last__Visit__Time__KEY);
  var time = 0;
  if (timeStorge) {
    time = timeStorge;
  } else {
    time = '';
  }
  uni.setStorageSync(Last__Visit__Time__KEY, getTime());
  return time;
};


var PAGE_RESIDENCE_TIME = '__page__residence__time';
var First_Page_residence_time = 0;
var Last_Page_residence_time = 0;


var setPageResidenceTime = function setPageResidenceTime() {
  First_Page_residence_time = getTime();
  if (getPlatformName() === 'n') {
    uni.setStorageSync(PAGE_RESIDENCE_TIME, getTime());
  }
  return First_Page_residence_time;
};

var getPageResidenceTime = function getPageResidenceTime() {
  Last_Page_residence_time = getTime();
  if (getPlatformName() === 'n') {
    First_Page_residence_time = uni.getStorageSync(PAGE_RESIDENCE_TIME);
  }
  return Last_Page_residence_time - First_Page_residence_time;
};
var TOTAL__VISIT__COUNT = 'Total__Visit__Count';
var getTotalVisitCount = function getTotalVisitCount() {
  var timeStorge = uni.getStorageSync(TOTAL__VISIT__COUNT);
  var count = 1;
  if (timeStorge) {
    count = timeStorge;
    count++;
  }
  uni.setStorageSync(TOTAL__VISIT__COUNT, count);
  return count;
};

var GetEncodeURIComponentOptions = function GetEncodeURIComponentOptions(statData) {
  var data = {};
  for (var prop in statData) {
    data[prop] = encodeURIComponent(statData[prop]);
  }
  return data;
};

var Set__First__Time = 0;
var Set__Last__Time = 0;

var getFirstTime = function getFirstTime() {
  var time = new Date().getTime();
  Set__First__Time = time;
  Set__Last__Time = 0;
  return time;
};


var getLastTime = function getLastTime() {
  var time = new Date().getTime();
  Set__Last__Time = time;
  return time;
};


var getResidenceTime = function getResidenceTime(type) {
  var residenceTime = 0;
  if (Set__First__Time !== 0) {
    residenceTime = Set__Last__Time - Set__First__Time;
  }

  residenceTime = parseInt(residenceTime / 1000);
  residenceTime = residenceTime < 1 ? 1 : residenceTime;
  if (type === 'app') {
    var overtime = residenceTime > APP_PVER_TIME ? true : false;
    return {
      residenceTime: residenceTime,
      overtime: overtime };

  }
  if (type === 'page') {
    var _overtime = residenceTime > PAGE_PVER_TIME ? true : false;
    return {
      residenceTime: residenceTime,
      overtime: _overtime };

  }

  return {
    residenceTime: residenceTime };


};

var getRoute = function getRoute() {
  var pages = getCurrentPages();
  var page = pages[pages.length - 1];
  var _self = page.$vm;

  if (getPlatformName() === 'bd') {
    return _self.$mp && _self.$mp.page.is;
  } else {
    return _self.$scope && _self.$scope.route || _self.$mp && _self.$mp.page.route;
  }
};

var getPageRoute = function getPageRoute(self) {
  var pages = getCurrentPages();
  var page = pages[pages.length - 1];
  var _self = page.$vm;
  var query = self._query;
  var str = query && JSON.stringify(query) !== '{}' ? '?' + JSON.stringify(query) : '';
  // clear
  self._query = '';
  if (getPlatformName() === 'bd') {
    return _self.$mp && _self.$mp.page.is + str;
  } else {
    return _self.$scope && _self.$scope.route + str || _self.$mp && _self.$mp.page.route + str;
  }
};

var getPageTypes = function getPageTypes(self) {
  if (self.mpType === 'page' || self.$mp && self.$mp.mpType === 'page' || self.$options.mpType === 'page') {
    return true;
  }
  return false;
};

var calibration = function calibration(eventName, options) {
  //  login 、 share 、pay_success 、pay_fail 、register 、title
  if (!eventName) {
    console.error("uni.report \u7F3A\u5C11 [eventName] \u53C2\u6570");
    return true;
  }
  if (typeof eventName !== 'string') {
    console.error("uni.report [eventName] \u53C2\u6570\u7C7B\u578B\u9519\u8BEF,\u53EA\u80FD\u4E3A String \u7C7B\u578B");
    return true;
  }
  if (eventName.length > 255) {
    console.error("uni.report [eventName] \u53C2\u6570\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E 255");
    return true;
  }

  if (typeof options !== 'string' && typeof options !== 'object') {
    console.error("uni.report [options] \u53C2\u6570\u7C7B\u578B\u9519\u8BEF,\u53EA\u80FD\u4E3A String \u6216 Object \u7C7B\u578B");
    return true;
  }

  if (typeof options === 'string' && options.length > 255) {
    console.error("uni.report [options] \u53C2\u6570\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E 255");
    return true;
  }

  if (eventName === 'title' && typeof options !== 'string') {
    console.error('uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型');
    return true;
  }
};

var PagesJson = __webpack_require__(/*! uni-pages?{"type":"style"} */ 4).default;
var statConfig = __webpack_require__(/*! uni-stat-config */ 5).default || __webpack_require__(/*! uni-stat-config */ 5);

var resultOptions = uni.getSystemInfoSync();var

Util = /*#__PURE__*/function () {
  function Util() {_classCallCheck(this, Util);
    this.self = '';
    this._retry = 0;
    this._platform = '';
    this._query = {};
    this._navigationBarTitle = {
      config: '',
      page: '',
      report: '',
      lt: '' };

    this._operatingTime = 0;
    this._reportingRequestData = {
      '1': [],
      '11': [] };

    this.__prevent_triggering = false;

    this.__licationHide = false;
    this.__licationShow = false;
    this._lastPageRoute = '';
    this.statData = {
      uuid: getUuid(),
      ut: getPlatformName(),
      mpn: getPackName(),
      ak: statConfig.appid,
      usv: STAT_VERSION,
      v: getVersion(),
      ch: getChannel(),
      cn: '',
      pn: '',
      ct: '',
      t: getTime(),
      tt: '',
      p: resultOptions.platform === 'android' ? 'a' : 'i',
      brand: resultOptions.brand || '',
      md: resultOptions.model,
      sv: resultOptions.system.replace(/(Android|iOS)\s/, ''),
      mpsdk: resultOptions.SDKVersion || '',
      mpv: resultOptions.version || '',
      lang: resultOptions.language,
      pr: resultOptions.pixelRatio,
      ww: resultOptions.windowWidth,
      wh: resultOptions.windowHeight,
      sw: resultOptions.screenWidth,
      sh: resultOptions.screenHeight };


  }_createClass(Util, [{ key: "_applicationShow", value: function _applicationShow()

    {
      if (this.__licationHide) {
        getLastTime();
        var time = getResidenceTime('app');
        if (time.overtime) {
          var options = {
            path: this._lastPageRoute,
            scene: this.statData.sc };

          this._sendReportRequest(options);
        }
        this.__licationHide = false;
      }
    } }, { key: "_applicationHide", value: function _applicationHide(

    self, type) {

      this.__licationHide = true;
      getLastTime();
      var time = getResidenceTime();
      getFirstTime();
      var route = getPageRoute(this);
      this._sendHideRequest({
        urlref: route,
        urlref_ts: time.residenceTime },
      type);
    } }, { key: "_pageShow", value: function _pageShow()

    {
      var route = getPageRoute(this);
      var routepath = getRoute();
      this._navigationBarTitle.config = PagesJson &&
      PagesJson.pages[routepath] &&
      PagesJson.pages[routepath].titleNView &&
      PagesJson.pages[routepath].titleNView.titleText ||
      PagesJson &&
      PagesJson.pages[routepath] &&
      PagesJson.pages[routepath].navigationBarTitleText || '';

      if (this.__licationShow) {
        getFirstTime();
        this.__licationShow = false;
        // console.log('这是 onLauch 之后执行的第一次 pageShow ，为下次记录时间做准备');
        this._lastPageRoute = route;
        return;
      }

      getLastTime();
      this._lastPageRoute = route;
      var time = getResidenceTime('page');
      if (time.overtime) {
        var options = {
          path: this._lastPageRoute,
          scene: this.statData.sc };

        this._sendReportRequest(options);
      }
      getFirstTime();
    } }, { key: "_pageHide", value: function _pageHide()

    {
      if (!this.__licationHide) {
        getLastTime();
        var time = getResidenceTime('page');
        this._sendPageRequest({
          url: this._lastPageRoute,
          urlref: this._lastPageRoute,
          urlref_ts: time.residenceTime });

        this._navigationBarTitle = {
          config: '',
          page: '',
          report: '',
          lt: '' };

        return;
      }
    } }, { key: "_login", value: function _login()

    {
      this._sendEventRequest({
        key: 'login' },
      0);
    } }, { key: "_share", value: function _share()

    {
      this._sendEventRequest({
        key: 'share' },
      0);
    } }, { key: "_payment", value: function _payment(
    key) {
      this._sendEventRequest({
        key: key },
      0);
    } }, { key: "_sendReportRequest", value: function _sendReportRequest(
    options) {

      this._navigationBarTitle.lt = '1';
      var query = options.query && JSON.stringify(options.query) !== '{}' ? '?' + JSON.stringify(options.query) : '';
      this.statData.lt = '1';
      this.statData.url = options.path + query || '';
      this.statData.t = getTime();
      this.statData.sc = getScene(options.scene);
      this.statData.fvts = getFirstVisitTime();
      this.statData.lvts = getLastVisitTime();
      this.statData.tvc = getTotalVisitCount();
      if (getPlatformName() === 'n') {
        this.getProperty();
      } else {
        this.getNetworkInfo();
      }
    } }, { key: "_sendPageRequest", value: function _sendPageRequest(

    opt) {var

      url =


      opt.url,urlref = opt.urlref,urlref_ts = opt.urlref_ts;
      this._navigationBarTitle.lt = '11';
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '11',
        ut: this.statData.ut,
        url: url,
        tt: this.statData.tt,
        urlref: urlref,
        urlref_ts: urlref_ts,
        ch: this.statData.ch,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }, { key: "_sendHideRequest", value: function _sendHideRequest(

    opt, type) {var

      urlref =

      opt.urlref,urlref_ts = opt.urlref_ts;
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '3',
        ut: this.statData.ut,
        urlref: urlref,
        urlref_ts: urlref_ts,
        ch: this.statData.ch,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options, type);
    } }, { key: "_sendEventRequest", value: function _sendEventRequest()



    {var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},_ref$key = _ref.key,key = _ref$key === void 0 ? '' : _ref$key,_ref$value = _ref.value,value = _ref$value === void 0 ? "" : _ref$value;
      var route = this._lastPageRoute;
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '21',
        ut: this.statData.ut,
        url: route,
        ch: this.statData.ch,
        e_n: key,
        e_v: typeof value === 'object' ? JSON.stringify(value) : value.toString(),
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }, { key: "getNetworkInfo", value: function getNetworkInfo()

    {var _this = this;
      uni.getNetworkType({
        success: function success(result) {
          _this.statData.net = result.networkType;
          _this.getLocation();
        } });

    } }, { key: "getProperty", value: function getProperty()

    {var _this2 = this;
      plus.runtime.getProperty(plus.runtime.appid, function (wgtinfo) {
        _this2.statData.v = wgtinfo.version || '';
        _this2.getNetworkInfo();
      });
    } }, { key: "getLocation", value: function getLocation()

    {var _this3 = this;
      if (statConfig.getLocation) {
        uni.getLocation({
          type: 'wgs84',
          geocode: true,
          success: function success(result) {
            if (result.address) {
              _this3.statData.cn = result.address.country;
              _this3.statData.pn = result.address.province;
              _this3.statData.ct = result.address.city;
            }

            _this3.statData.lat = result.latitude;
            _this3.statData.lng = result.longitude;
            _this3.request(_this3.statData);
          } });

      } else {
        this.statData.lat = 0;
        this.statData.lng = 0;
        this.request(this.statData);
      }
    } }, { key: "request", value: function request(

    data, type) {var _this4 = this;
      var time = getTime();
      var title = this._navigationBarTitle;
      data.ttn = title.page;
      data.ttpj = title.config;
      data.ttc = title.report;

      var requestData = this._reportingRequestData;
      if (getPlatformName() === 'n') {
        requestData = uni.getStorageSync('__UNI__STAT__DATA') || {};
      }
      if (!requestData[data.lt]) {
        requestData[data.lt] = [];
      }
      requestData[data.lt].push(data);

      if (getPlatformName() === 'n') {
        uni.setStorageSync('__UNI__STAT__DATA', requestData);
      }
      if (getPageResidenceTime() < OPERATING_TIME && !type) {
        return;
      }
      var uniStatData = this._reportingRequestData;
      if (getPlatformName() === 'n') {
        uniStatData = uni.getStorageSync('__UNI__STAT__DATA');
      }
      // 时间超过，重新获取时间戳
      setPageResidenceTime();
      var firstArr = [];
      var contentArr = [];
      var lastArr = [];var _loop = function _loop(

      i) {
        var rd = uniStatData[i];
        rd.forEach(function (elm) {
          var newData = getSplicing(elm);
          if (i === 0) {
            firstArr.push(newData);
          } else if (i === 3) {
            lastArr.push(newData);
          } else {
            contentArr.push(newData);
          }
        });};for (var i in uniStatData) {_loop(i);
      }

      firstArr.push.apply(firstArr, contentArr.concat(lastArr));
      var optionsData = {
        usv: STAT_VERSION, //统计 SDK 版本号
        t: time, //发送请求时的时间戮
        requests: JSON.stringify(firstArr) };


      this._reportingRequestData = {};
      if (getPlatformName() === 'n') {
        uni.removeStorageSync('__UNI__STAT__DATA');
      }

      if (data.ut === 'h5') {
        this.imageRequest(optionsData);
        return;
      }

      if (getPlatformName() === 'n' && this.statData.p === 'a') {
        setTimeout(function () {
          _this4._sendRequest(optionsData);
        }, 200);
        return;
      }
      this._sendRequest(optionsData);
    } }, { key: "_sendRequest", value: function _sendRequest(
    optionsData) {var _this5 = this;
      uni.request({
        url: STAT_URL,
        method: 'POST',
        // header: {
        //   'content-type': 'application/json' // 默认值
        // },
        data: optionsData,
        success: function success() {
          // if (process.env.NODE_ENV === 'development') {
          //   console.log('stat request success');
          // }
        },
        fail: function fail(e) {
          if (++_this5._retry < 3) {
            setTimeout(function () {
              _this5._sendRequest(optionsData);
            }, 1000);
          }
        } });

    }
    /**
       * h5 请求
       */ }, { key: "imageRequest", value: function imageRequest(
    data) {
      var image = new Image();
      var options = getSgin(GetEncodeURIComponentOptions(data)).options;
      image.src = STAT_H5_URL + '?' + options;
    } }, { key: "sendEvent", value: function sendEvent(

    key, value) {
      // 校验 type 参数
      if (calibration(key, value)) return;

      if (key === 'title') {
        this._navigationBarTitle.report = value;
        return;
      }
      this._sendEventRequest({
        key: key,
        value: typeof value === 'object' ? JSON.stringify(value) : value },
      1);
    } }]);return Util;}();var



Stat = /*#__PURE__*/function (_Util) {_inherits(Stat, _Util);_createClass(Stat, null, [{ key: "getInstance", value: function getInstance()
    {
      if (!this.instance) {
        this.instance = new Stat();
      }
      return this.instance;
    } }]);
  function Stat() {var _this6;_classCallCheck(this, Stat);
    _this6 = _possibleConstructorReturn(this, _getPrototypeOf(Stat).call(this));
    _this6.instance = null;
    // 注册拦截器
    if (typeof uni.addInterceptor === 'function' && "development" !== 'development') {
      _this6.addInterceptorInit();
      _this6.interceptLogin();
      _this6.interceptShare(true);
      _this6.interceptRequestPayment();
    }return _this6;
  }_createClass(Stat, [{ key: "addInterceptorInit", value: function addInterceptorInit()

    {
      var self = this;
      uni.addInterceptor('setNavigationBarTitle', {
        invoke: function invoke(args) {
          self._navigationBarTitle.page = args.title;
        } });

    } }, { key: "interceptLogin", value: function interceptLogin()

    {
      var self = this;
      uni.addInterceptor('login', {
        complete: function complete() {
          self._login();
        } });

    } }, { key: "interceptShare", value: function interceptShare(

    type) {
      var self = this;
      if (!type) {
        self._share();
        return;
      }
      uni.addInterceptor('share', {
        success: function success() {
          self._share();
        },
        fail: function fail() {
          self._share();
        } });

    } }, { key: "interceptRequestPayment", value: function interceptRequestPayment()

    {
      var self = this;
      uni.addInterceptor('requestPayment', {
        success: function success() {
          self._payment('pay_success');
        },
        fail: function fail() {
          self._payment('pay_fail');
        } });

    } }, { key: "report", value: function report(

    options, self) {
      this.self = self;
      // if (process.env.NODE_ENV === 'development') {
      //   console.log('report init');
      // }
      setPageResidenceTime();
      this.__licationShow = true;
      this._sendReportRequest(options, true);
    } }, { key: "load", value: function load(

    options, self) {
      if (!self.$scope && !self.$mp) {
        var page = getCurrentPages();
        self.$scope = page[page.length - 1];
      }
      this.self = self;
      this._query = options;
    } }, { key: "show", value: function show(

    self) {
      this.self = self;
      if (getPageTypes(self)) {
        this._pageShow(self);
      } else {
        this._applicationShow(self);
      }
    } }, { key: "ready", value: function ready(

    self) {
      // this.self = self;
      // if (getPageTypes(self)) {
      //   this._pageShow(self);
      // }
    } }, { key: "hide", value: function hide(
    self) {
      this.self = self;
      if (getPageTypes(self)) {
        this._pageHide(self);
      } else {
        this._applicationHide(self, true);
      }
    } }, { key: "error", value: function error(
    em) {
      if (this._platform === 'devtools') {
        if (true) {
          console.info('当前运行环境为开发者工具，不上报数据。');
        }
        // return;
      }
      var emVal = '';
      if (!em.message) {
        emVal = JSON.stringify(em);
      } else {
        emVal = em.stack;
      }
      var options = {
        ak: this.statData.ak,
        uuid: this.statData.uuid,
        lt: '31',
        ut: this.statData.ut,
        ch: this.statData.ch,
        mpsdk: this.statData.mpsdk,
        mpv: this.statData.mpv,
        v: this.statData.v,
        em: emVal,
        usv: this.statData.usv,
        t: getTime(),
        p: this.statData.p };

      this.request(options);
    } }]);return Stat;}(Util);


var stat = Stat.getInstance();
var isHide = false;
var lifecycle = {
  onLaunch: function onLaunch(options) {
    stat.report(options, this);
  },
  onReady: function onReady() {
    stat.ready(this);
  },
  onLoad: function onLoad(options) {
    stat.load(options, this);
    // 重写分享，获取分享上报事件
    if (this.$scope && this.$scope.onShareAppMessage) {
      var oldShareAppMessage = this.$scope.onShareAppMessage;
      this.$scope.onShareAppMessage = function (options) {
        stat.interceptShare(false);
        return oldShareAppMessage.call(this, options);
      };
    }
  },
  onShow: function onShow() {
    isHide = false;
    stat.show(this);
  },
  onHide: function onHide() {
    isHide = true;
    stat.hide(this);
  },
  onUnload: function onUnload() {
    if (isHide) {
      isHide = false;
      return;
    }
    stat.hide(this);
  },
  onError: function onError(e) {
    stat.error(e);
  } };


function main() {
  if (true) {
    uni.report = function (type, options) {};
  } else { var Vue; }
}

main();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js */ 2)["weexPlus"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 149:
/*!*****************************************************************************!*\
  !*** C:/Users/刘雯媛/web1/uniapp/hello/components/uni-section/uni-section.vue ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uni_section_vue_vue_type_template_id_5244f35f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-section.vue?vue&type=template&id=5244f35f&scoped=true& */ 150);
/* harmony import */ var _uni_section_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-section.vue?vue&type=script&lang=js& */ 152);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_section_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_section_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 16);



function injectStyles () {
  if(!this.options.style){
    this.options.style = {}
}
if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){
  Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)
}
if(Vue.prototype.__merge_style){
              Vue.prototype.__merge_style(__webpack_require__(/*! ./uni-section.vue?vue&type=style&index=0&id=5244f35f&scoped=true&lang=css& */ 154).default, this.options.style)
          }else{
              Object.assign(this.options.style,__webpack_require__(/*! ./uni-section.vue?vue&type=style&index=0&id=5244f35f&scoped=true&lang=css& */ 154).default)
          }

}

/* normalize component */

var component = Object(_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _uni_section_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _uni_section_vue_vue_type_template_id_5244f35f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _uni_section_vue_vue_type_template_id_5244f35f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5244f35f",
  "2dc980a4"
  
)

injectStyles.call(component)
component.options.__file = "web1/uniapp/hello/components/uni-section/uni-section.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 150:
/*!************************************************************************************************************************!*\
  !*** C:/Users/刘雯媛/web1/uniapp/hello/components/uni-section/uni-section.vue?vue&type=template&id=5244f35f&scoped=true& ***!
  \************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_section_vue_vue_type_template_id_5244f35f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!./uni-section.vue?vue&type=template&id=5244f35f&scoped=true& */ 151);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_section_vue_vue_type_template_id_5244f35f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_section_vue_vue_type_template_id_5244f35f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 151:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!C:/Users/刘雯媛/web1/uniapp/hello/components/uni-section/uni-section.vue?vue&type=template&id=5244f35f&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: ["uni-section"] },
    [
      _vm.type
        ? _c("view", { staticClass: ["uni-section__head"] }, [
            _c("view", {
              staticClass: ["uni-section__head-tag"],
              class: _vm.type
            })
          ])
        : _vm._e(),
      _c("view", { staticClass: ["uni-section__content"] }, [
        _c(
          "u-text",
          {
            staticClass: ["uni-section__content-title"],
            class: { distraction: !_vm.subTitle }
          },
          [_vm._v(_vm._s(_vm.title))]
        ),
        _vm.subTitle
          ? _c("u-text", { staticClass: ["uni-section__content-sub"] }, [
              _vm._v(_vm._s(_vm.subTitle))
            ])
          : _vm._e()
      ]),
      _vm._t("default")
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 152:
/*!******************************************************************************************************!*\
  !*** C:/Users/刘雯媛/web1/uniapp/hello/components/uni-section/uni-section.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_section_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!./uni-section.vue?vue&type=script&lang=js& */ 153);
/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_section_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_section_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_section_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_section_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_section_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 153:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!C:/Users/刘雯媛/web1/uniapp/hello/components/uni-section/uni-section.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//
//
//
//
//
//
//
//
//
var _default =
{
  name: 'UniTitle',
  props: {
    type: {
      type: String,
      default: '' },

    title: {
      type: String,
      default: '' },

    subTitle: {
      type: String,
      default: '' } },


  data: function data() {
    return {};
  },
  watch: {
    title: function title(newVal) {
      if (uni.report && newVal !== '') {
        uni.report('title', newVal);
      }
    } },

  methods: {
    onClick: function onClick() {
      this.$emit('click');
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 154:
/*!**************************************************************************************************************************************!*\
  !*** C:/Users/刘雯媛/web1/uniapp/hello/components/uni-section/uni-section.vue?vue&type=style&index=0&id=5244f35f&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_section_vue_vue_type_style_index_0_id_5244f35f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--9-oneOf-0-2!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!./uni-section.vue?vue&type=style&index=0&id=5244f35f&scoped=true&lang=css& */ 155);
/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_section_vue_vue_type_style_index_0_id_5244f35f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_section_vue_vue_type_style_index_0_id_5244f35f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_section_vue_vue_type_style_index_0_id_5244f35f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_section_vue_vue_type_style_index_0_id_5244f35f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_section_vue_vue_type_style_index_0_id_5244f35f_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 155:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!C:/Users/刘雯媛/web1/uniapp/hello/components/uni-section/uni-section.vue?vue&type=style&index=0&id=5244f35f&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "uni-section": {
    "marginTop": "10",
    "flexDirection": "row",
    "alignItems": "center",
    "paddingTop": 0,
    "paddingRight": "10",
    "paddingBottom": 0,
    "paddingLeft": "10",
    "height": "50",
    "backgroundColor": "#f8f8f8",
    "borderBottomColor": "#e5e5e5",
    "borderBottomStyle": "solid",
    "borderBottomWidth": "1",
    "fontWeight": "normal"
  },
  "uni-section__head": {
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center",
    "marginRight": "10"
  },
  "line": {
    "height": "15",
    "backgroundColor": "#c0c0c0",
    "borderRadius": "5",
    "width": "3"
  },
  "circle": {
    "width": "8",
    "height": "8",
    "borderTopRightRadius": "50",
    "borderTopLeftRadius": "50",
    "borderBottomLeftRadius": "50",
    "borderBottomRightRadius": "50",
    "backgroundColor": "#c0c0c0"
  },
  "uni-section__content": {
    "flex": 1,
    "color": "#333333"
  },
  "uni-section__content-title": {
    "fontSize": "28rpx",
    "color": "#333333"
  },
  "distraction": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "uni-section__content-sub": {
    "fontSize": "24rpx",
    "color": "#999999"
  }
}

/***/ }),

/***/ 16:
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 168:
/*!*************************************************************************!*\
  !*** C:/Users/刘雯媛/web1/uniapp/hello/components/uni-icons/uni-icons.vue ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uni_icons_vue_vue_type_template_id_7555df49_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-icons.vue?vue&type=template&id=7555df49&scoped=true& */ 169);
/* harmony import */ var _uni_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-icons.vue?vue&type=script&lang=js& */ 171);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 16);



function injectStyles () {
  if(!this.options.style){
    this.options.style = {}
}
if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){
  Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)
}
if(Vue.prototype.__merge_style){
              Vue.prototype.__merge_style(__webpack_require__(/*! ./uni-icons.vue?vue&type=style&index=0&id=7555df49&scoped=true&lang=css& */ 174).default, this.options.style)
          }else{
              Object.assign(this.options.style,__webpack_require__(/*! ./uni-icons.vue?vue&type=style&index=0&id=7555df49&scoped=true&lang=css& */ 174).default)
          }

}

/* normalize component */

var component = Object(_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _uni_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _uni_icons_vue_vue_type_template_id_7555df49_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _uni_icons_vue_vue_type_template_id_7555df49_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7555df49",
  "7631eb50"
  
)

injectStyles.call(component)
component.options.__file = "web1/uniapp/hello/components/uni-icons/uni-icons.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 169:
/*!********************************************************************************************************************!*\
  !*** C:/Users/刘雯媛/web1/uniapp/hello/components/uni-icons/uni-icons.vue?vue&type=template&id=7555df49&scoped=true& ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_icons_vue_vue_type_template_id_7555df49_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!./uni-icons.vue?vue&type=template&id=7555df49&scoped=true& */ 170);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_icons_vue_vue_type_template_id_7555df49_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_icons_vue_vue_type_template_id_7555df49_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 170:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!C:/Users/刘雯媛/web1/uniapp/hello/components/uni-icons/uni-icons.vue?vue&type=template&id=7555df49&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "u-text",
    {
      staticClass: ["uni-icons"],
      style: { color: _vm.color, "font-size": _vm.size + "px" },
      on: { click: _vm._onClick }
    },
    [_vm._v(_vm._s(_vm.icons[_vm.type]))]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 171:
/*!**************************************************************************************************!*\
  !*** C:/Users/刘雯媛/web1/uniapp/hello/components/uni-icons/uni-icons.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!./uni-icons.vue?vue&type=script&lang=js& */ 172);
/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 172:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!C:/Users/刘雯媛/web1/uniapp/hello/components/uni-icons/uni-icons.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;




var _icons = _interopRequireDefault(__webpack_require__(/*! ./icons.js */ 173));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
//
//
//
var domModule = weex.requireModule('dom');domModule.addRule('fontFace', { 'fontFamily': "uniicons",
  'src': "url('data:font/truetype;charset=utf-8;base64,AAEAAAAQAQAABAAARkZUTYj43ssAAHbYAAAAHEdERUYAJwBmAAB2uAAAAB5PUy8yWWlcqgAAAYgAAABgY21hcGBhbBUAAAK0AAACQmN2dCAMpf40AAAPKAAAACRmcGdtMPeelQAABPgAAAmWZ2FzcAAAABAAAHawAAAACGdseWZsfgfZAAAQEAAAYQxoZWFkFof6/wAAAQwAAAA2aGhlYQd+AyYAAAFEAAAAJGhtdHgkeBuYAAAB6AAAAMpsb2NhPEknLgAAD0wAAADCbWF4cAIjA3IAAAFoAAAAIG5hbWXWOTtUAABxHAAAAdRwb3N0TJE4igAAcvAAAAO/cHJlcKW5vmYAAA6QAAAAlQABAAAAAQAACV/OOV8PPPUAHwQAAAAAANmqW7kAAAAA2apcCQAA/yAEAAMgAAAACAACAAAAAAAAAAEAAAMg/yAAXAQAAAAAAAQAAAEAAAAAAAAAAAAAAAAAAAAFAAEAAABgAXoADAAAAAAAAgBGAFQAbAAAAQQBogAAAAAABAP/AZAABgAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAIABgMAAAAAAAAAAAABEAAAAAAAAAAAAAAAUEZFRAGAAB3mEgMs/ywAXAMgAOAAAAABAAAAAAMYAs0AAAAgAAEBdgAiAAAAAAFVAAAD6QAsBAAAYADAAMAAYADAAMAAoACAAIAAYACgAIAAgABgALMAQABAAAUAVwBeAIABAAD0AQAA9AEAAEAAVgCgAOAAwADAAFEAfgCAAGAAQABgAGAAYAA+AFEAYABAAGAAYAA0AGAAPgFAAQAAgABAAAAAJQCBAQABQAFAASwAgABgAIAAwABgAGAAwADBAQAAgACAAGAAYADBAEAARABAABcBXwATAMAAwAFAAUABQAFAAMAAwAEeAF8AVQBAAAAAAAADAAAAAwAAABwAAQAAAAABPAADAAEAAAAcAAQBIAAAAEQAQAAFAAQAAAAdAHjhAuEy4gPiM+Jk4wPjM+Ng42TkCeQR5BPkNOQ55EPkZuRo5HLlCOUw5TLlNeU35WDlY+Vl5WjlieWQ5hL//wAAAAAAHQB44QDhMOIA4jDiYOMA4zLjYONj5ADkEOQT5DTkN+RA5GDkaORw5QDlMOUy5TTlN+Vg5WLlZeVn5YDlkOYS//8AAf/k/4sfBB7XHgod3h2yHRcc6Ry9HLscIBwaHBkb+Rv3G/Eb1RvUG80bQBsZGxgbFxsWGu4a7RrsGusa1BrOGk0AAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABBgAAAQAAAAAAAAABAgAAAAIAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsAAssCBgZi2wASwgZCCwwFCwBCZasARFW1ghIyEbilggsFBQWCGwQFkbILA4UFghsDhZWSCwCkVhZLAoUFghsApFILAwUFghsDBZGyCwwFBYIGYgiophILAKUFhgGyCwIFBYIbAKYBsgsDZQWCGwNmAbYFlZWRuwACtZWSOwAFBYZVlZLbACLCBFILAEJWFkILAFQ1BYsAUjQrAGI0IbISFZsAFgLbADLCMhIyEgZLEFYkIgsAYjQrIKAAIqISCwBkMgiiCKsAArsTAFJYpRWGBQG2FSWVgjWSEgsEBTWLAAKxshsEBZI7AAUFhlWS2wBCywCCNCsAcjQrAAI0KwAEOwB0NRWLAIQyuyAAEAQ2BCsBZlHFktsAUssABDIEUgsAJFY7ABRWJgRC2wBiywAEMgRSCwACsjsQQEJWAgRYojYSBkILAgUFghsAAbsDBQWLAgG7BAWVkjsABQWGVZsAMlI2FERC2wByyxBQVFsAFhRC2wCCywAWAgILAKQ0qwAFBYILAKI0JZsAtDSrAAUlggsAsjQlktsAksILgEAGIguAQAY4ojYbAMQ2AgimAgsAwjQiMtsAosS1RYsQcBRFkksA1lI3gtsAssS1FYS1NYsQcBRFkbIVkksBNlI3gtsAwssQANQ1VYsQ0NQ7ABYUKwCStZsABDsAIlQrIAAQBDYEKxCgIlQrELAiVCsAEWIyCwAyVQWLAAQ7AEJUKKiiCKI2GwCCohI7ABYSCKI2GwCCohG7AAQ7ACJUKwAiVhsAgqIVmwCkNHsAtDR2CwgGIgsAJFY7ABRWJgsQAAEyNEsAFDsAA+sgEBAUNgQi2wDSyxAAVFVFgAsA0jQiBgsAFhtQ4OAQAMAEJCimCxDAQrsGsrGyJZLbAOLLEADSstsA8ssQENKy2wECyxAg0rLbARLLEDDSstsBIssQQNKy2wEyyxBQ0rLbAULLEGDSstsBUssQcNKy2wFiyxCA0rLbAXLLEJDSstsBgssAcrsQAFRVRYALANI0IgYLABYbUODgEADABCQopgsQwEK7BrKxsiWS2wGSyxABgrLbAaLLEBGCstsBsssQIYKy2wHCyxAxgrLbAdLLEEGCstsB4ssQUYKy2wHyyxBhgrLbAgLLEHGCstsCEssQgYKy2wIiyxCRgrLbAjLCBgsA5gIEMjsAFgQ7ACJbACJVFYIyA8sAFgI7ASZRwbISFZLbAkLLAjK7AjKi2wJSwgIEcgILACRWOwAUViYCNhOCMgilVYIEcgILACRWOwAUViYCNhOBshWS2wJiyxAAVFVFgAsAEWsCUqsAEVMBsiWS2wJyywByuxAAVFVFgAsAEWsCUqsAEVMBsiWS2wKCwgNbABYC2wKSwAsANFY7ABRWKwACuwAkVjsAFFYrAAK7AAFrQAAAAAAEQ+IzixKAEVKi2wKiwgPCBHILACRWOwAUViYLAAQ2E4LbArLC4XPC2wLCwgPCBHILACRWOwAUViYLAAQ2GwAUNjOC2wLSyxAgAWJSAuIEewACNCsAIlSYqKRyNHI2EgWGIbIVmwASNCsiwBARUUKi2wLiywABawBCWwBCVHI0cjYbAGRStlii4jICA8ijgtsC8ssAAWsAQlsAQlIC5HI0cjYSCwBCNCsAZFKyCwYFBYILBAUVizAiADIBuzAiYDGllCQiMgsAlDIIojRyNHI2EjRmCwBEOwgGJgILAAKyCKimEgsAJDYGQjsANDYWRQWLACQ2EbsANDYFmwAyWwgGJhIyAgsAQmI0ZhOBsjsAlDRrACJbAJQ0cjRyNhYCCwBEOwgGJgIyCwACsjsARDYLAAK7AFJWGwBSWwgGKwBCZhILAEJWBkI7ADJWBkUFghGyMhWSMgILAEJiNGYThZLbAwLLAAFiAgILAFJiAuRyNHI2EjPDgtsDEssAAWILAJI0IgICBGI0ewACsjYTgtsDIssAAWsAMlsAIlRyNHI2GwAFRYLiA8IyEbsAIlsAIlRyNHI2EgsAUlsAQlRyNHI2GwBiWwBSVJsAIlYbABRWMjIFhiGyFZY7ABRWJgIy4jICA8ijgjIVktsDMssAAWILAJQyAuRyNHI2EgYLAgYGawgGIjICA8ijgtsDQsIyAuRrACJUZSWCA8WS6xJAEUKy2wNSwjIC5GsAIlRlBYIDxZLrEkARQrLbA2LCMgLkawAiVGUlggPFkjIC5GsAIlRlBYIDxZLrEkARQrLbA3LLAuKyMgLkawAiVGUlggPFkusSQBFCstsDgssC8riiAgPLAEI0KKOCMgLkawAiVGUlggPFkusSQBFCuwBEMusCQrLbA5LLAAFrAEJbAEJiAuRyNHI2GwBkUrIyA8IC4jOLEkARQrLbA6LLEJBCVCsAAWsAQlsAQlIC5HI0cjYSCwBCNCsAZFKyCwYFBYILBAUVizAiADIBuzAiYDGllCQiMgR7AEQ7CAYmAgsAArIIqKYSCwAkNgZCOwA0NhZFBYsAJDYRuwA0NgWbADJbCAYmGwAiVGYTgjIDwjOBshICBGI0ewACsjYTghWbEkARQrLbA7LLAuKy6xJAEUKy2wPCywLyshIyAgPLAEI0IjOLEkARQrsARDLrAkKy2wPSywABUgR7AAI0KyAAEBFRQTLrAqKi2wPiywABUgR7AAI0KyAAEBFRQTLrAqKi2wPyyxAAEUE7ArKi2wQCywLSotsEEssAAWRSMgLiBGiiNhOLEkARQrLbBCLLAJI0KwQSstsEMssgAAOistsEQssgABOistsEUssgEAOistsEYssgEBOistsEcssgAAOystsEgssgABOystsEkssgEAOystsEossgEBOystsEsssgAANystsEwssgABNystsE0ssgEANystsE4ssgEBNystsE8ssgAAOSstsFAssgABOSstsFEssgEAOSstsFIssgEBOSstsFMssgAAPCstsFQssgABPCstsFUssgEAPCstsFYssgEBPCstsFcssgAAOCstsFgssgABOCstsFkssgEAOCstsFossgEBOCstsFsssDArLrEkARQrLbBcLLAwK7A0Ky2wXSywMCuwNSstsF4ssAAWsDArsDYrLbBfLLAxKy6xJAEUKy2wYCywMSuw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bmlFMjAwB3VuaUUyMDEHdW5pRTIwMgd1bmlFMjAzB3VuaUUyMzAHdW5pRTIzMQd1bmlFMjMyB3VuaUUyMzMHdW5pRTI2MAd1bmlFMjYxB3VuaUUyNjIHdW5pRTI2Mwd1bmlFMjY0B3VuaUUzMDAHdW5pRTMwMQd1bmlFMzAyB3VuaUUzMDMHdW5pRTMzMgd1bmlFMzMzB3VuaUUzNjAHdW5pRTM2Mwd1bmlFMzY0B3VuaUU0MDAHdW5pRTQwMQd1bmlFNDAyB3VuaUU0MDMHdW5pRTQwNAd1bmlFNDA1B3VuaUU0MDYHdW5pRTQwNwd1bmlFNDA4B3VuaUU0MDkHdW5pRTQxMAd1bmlFNDExB3VuaUU0MTMHdW5pRTQzNAd1bmlFNDM3B3VuaUU0MzgHdW5pRTQzOQd1bmlFNDQwB3VuaUU0NDEHdW5pRTQ0Mgd1bmlFNDQzB3VuaUU0NjAHdW5pRTQ2MQd1bmlFNDYyB3VuaUU0NjMHdW5pRTQ2NAd1bmlFNDY1B3VuaUU0NjYHdW5pRTQ2OAd1bmlFNDcwB3VuaUU0NzEHdW5pRTQ3Mgd1bmlFNTAwB3VuaUU1MDEHdW5pRTUwMgd1bmlFNTAzB3VuaUU1MDQHdW5pRTUwNQd1bmlFNTA2B3VuaUU1MDcHdW5pRTUwOAd1bmlFNTMwB3VuaUU1MzIHdW5pRTUzNAd1bmlFNTM1B3VuaUU1MzcHdW5pRTU2MAd1bmlFNTYyB3VuaUU1NjMHdW5pRTU2NQd1bmlFNTY3B3VuaUU1NjgHdW5pRTU4MAd1bmlFNTgxB3VuaUU1ODIHdW5pRTU4Mwd1bmlFNTg0B3VuaUU1ODUHdW5pRTU4Ngd1bmlFNTg3B3VuaUU1ODgHdW5pRTU4OQRFdXJvB3VuaUU2MTIAAAEAAf//AA8AAQAAAAwAAAAWAAAAAgABAAEAXwABAAQAAAACAAAAAAAAAAEAAAAA1aQnCAAAAADZqlu5AAAAANmqXAk=')" });var _default =


{
  name: 'UniIcons',
  props: {
    type: {
      type: String,
      default: '' },

    color: {
      type: String,
      default: '#333333' },

    size: {
      type: [Number, String],
      default: 16 } },


  data: function data() {
    return {
      icons: _icons.default };

  },
  methods: {
    _onClick: function _onClick() {
      this.$emit('click');
    } } };exports.default = _default;

/***/ }),

/***/ 173:
/*!********************************************************************!*\
  !*** C:/Users/刘雯媛/web1/uniapp/hello/components/uni-icons/icons.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  'contact': "\uE100",
  'person': "\uE101",
  'personadd': "\uE102",
  'contact-filled': "\uE130",
  'person-filled': "\uE131",
  'personadd-filled': "\uE132",
  'phone': "\uE200",
  'email': "\uE201",
  'chatbubble': "\uE202",
  'chatboxes': "\uE203",
  'phone-filled': "\uE230",
  'email-filled': "\uE231",
  'chatbubble-filled': "\uE232",
  'chatboxes-filled': "\uE233",
  'weibo': "\uE260",
  'weixin': "\uE261",
  'pengyouquan': "\uE262",
  'chat': "\uE263",
  'qq': "\uE264",
  'videocam': "\uE300",
  'camera': "\uE301",
  'mic': "\uE302",
  'location': "\uE303",
  'mic-filled': "\uE332",
  'speech': "\uE332",
  'location-filled': "\uE333",
  'micoff': "\uE360",
  'image': "\uE363",
  'map': "\uE364",
  'compose': "\uE400",
  'trash': "\uE401",
  'upload': "\uE402",
  'download': "\uE403",
  'close': "\uE404",
  'redo': "\uE405",
  'undo': "\uE406",
  'refresh': "\uE407",
  'star': "\uE408",
  'plus': "\uE409",
  'minus': "\uE410",
  'circle': "\uE411",
  'checkbox': "\uE411",
  'close-filled': "\uE434",
  'clear': "\uE434",
  'refresh-filled': "\uE437",
  'star-filled': "\uE438",
  'plus-filled': "\uE439",
  'minus-filled': "\uE440",
  'circle-filled': "\uE441",
  'checkbox-filled': "\uE442",
  'closeempty': "\uE460",
  'refreshempty': "\uE461",
  'reload': "\uE462",
  'starhalf': "\uE463",
  'spinner': "\uE464",
  'spinner-cycle': "\uE465",
  'search': "\uE466",
  'plusempty': "\uE468",
  'forward': "\uE470",
  'back': "\uE471",
  'left-nav': "\uE471",
  'checkmarkempty': "\uE472",
  'home': "\uE500",
  'navigate': "\uE501",
  'gear': "\uE502",
  'paperplane': "\uE503",
  'info': "\uE504",
  'help': "\uE505",
  'locked': "\uE506",
  'more': "\uE507",
  'flag': "\uE508",
  'home-filled': "\uE530",
  'gear-filled': "\uE532",
  'info-filled': "\uE534",
  'help-filled': "\uE535",
  'more-filled': "\uE537",
  'settings': "\uE560",
  'list': "\uE562",
  'bars': "\uE563",
  'loop': "\uE565",
  'paperclip': "\uE567",
  'eye': "\uE568",
  'arrowup': "\uE580",
  'arrowdown': "\uE581",
  'arrowleft': "\uE582",
  'arrowright': "\uE583",
  'arrowthinup': "\uE584",
  'arrowthindown': "\uE585",
  'arrowthinleft': "\uE586",
  'arrowthinright': "\uE587",
  'pulldown': "\uE588",
  'closefill': "\uE589",
  'sound': "\uE590",
  'scan': "\uE612" };exports.default = _default;

/***/ }),

/***/ 174:
/*!**********************************************************************************************************************************!*\
  !*** C:/Users/刘雯媛/web1/uniapp/hello/components/uni-icons/uni-icons.vue?vue&type=style&index=0&id=7555df49&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_icons_vue_vue_type_style_index_0_id_7555df49_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--9-oneOf-0-2!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!./uni-icons.vue?vue&type=style&index=0&id=7555df49&scoped=true&lang=css& */ 175);
/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_icons_vue_vue_type_style_index_0_id_7555df49_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_icons_vue_vue_type_style_index_0_id_7555df49_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_icons_vue_vue_type_style_index_0_id_7555df49_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_icons_vue_vue_type_style_index_0_id_7555df49_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_icons_vue_vue_type_style_index_0_id_7555df49_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 175:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!C:/Users/刘雯媛/web1/uniapp/hello/components/uni-icons/uni-icons.vue?vue&type=style&index=0&id=7555df49&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "uni-icons": {
    "fontFamily": "uniicons",
    "textDecoration": "none",
    "textAlign": "center"
  }
}

/***/ }),

/***/ 2:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.weexPlus = exports.default = void 0;function initUni() {

  var isFn = function isFn(v) {
    return typeof v === 'function';
  };

  var handlePromise = function handlePromise(promise) {
    return promise.then(function (data) {
      return [null, data];
    }).catch(function (err) {
      return [err];
    });
  };

  var REGEX = /^\$|^on|^create|Sync$|Manager$|^pause/;
  var API_NORMAL_LIST = ['os', 'getCurrentSubNVue', 'getSubNVueById', 'stopRecord', 'stopVoice',
  'stopBackgroundAudio', 'stopPullDownRefresh', 'hideKeyboard', 'hideToast', 'hideLoading',
  'showNavigationBarLoading', 'hideNavigationBarLoading', 'canIUse', 'navigateBack', 'closeSocket',
  'pageScrollTo', 'drawCanvas'];


  var shouldPromise = function shouldPromise(name) {
    if (REGEX.test(name) && name !== 'createBLEConnection') {
      return false;
    }
    if (~API_NORMAL_LIST.indexOf(name)) {
      return false;
    }
    return true;
  };

  var promisify = function promisify(api) {
    return function () {
      for (var _len = arguments.length, params = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        params[_key - 1] = arguments[_key];
      }

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
        return api.apply(undefined, [options].concat(params));
      }
      return handlePromise(new Promise(function (resolve, reject) {
        api.apply(undefined, [Object.assign({}, options, {
          success: resolve,
          fail: reject })].
        concat(params));
        /* eslint-disable no-extend-native */
        Promise.prototype.finally = function (callback) {
          var promise = this.constructor;
          return this.then(function (value) {
            return promise.resolve(callback()).then(function () {
              return value;
            });
          }, function (reason) {
            return promise.resolve(callback()).then(function () {
              throw reason;
            });
          });
        };
      }));
    };
  };

  var onMessageCallbacks = [];

  var origin = void 0;

  function onSubNVueMessage(data) {
    onMessageCallbacks.forEach(function (callback) {
      return callback({
        origin: origin,
        data: data });

    });
  }

  var webviewId = weexPlus.webview.currentWebview().id;

  var channel = new BroadcastChannel('UNI-APP-SUBNVUE');
  channel.onmessage = function (event) {
    if (event.data.to === webviewId) {
      onSubNVueMessage(event.data.data);
    }
  };

  function wrapper(webview) {
    webview.$processed = true;

    var currentWebviewId = weexPlus.webview.currentWebview().id;
    var isPopupNVue = currentWebviewId === webview.id;

    var hostNVueId = webview.__uniapp_origin_type === 'uniNView' && webview.__uniapp_origin_id;
    var popupNVueId = webview.id;

    webview.postMessage = function (data) {
      if (hostNVueId) {
        channel.postMessage({
          data: data,
          to: isPopupNVue ? hostNVueId : popupNVueId });

      } else {
        postMessage({
          type: 'UniAppSubNVue',
          data: data });

      }
    };
    webview.onMessage = function (callback) {
      onMessageCallbacks.push(callback);
    };

    if (!webview.__uniapp_mask_id) {
      return;
    }
    origin = webview.__uniapp_host;

    var maskColor = webview.__uniapp_mask;

    var maskWebview = weexPlus.webview.getWebviewById(webview.__uniapp_mask_id);
    maskWebview = maskWebview.parent() || maskWebview; //再次检测父
    var oldShow = webview.show;
    var oldHide = webview.hide;
    var oldClose = webview.close;

    var showMask = function showMask() {
      maskWebview.setStyle({
        mask: maskColor });

    };
    var closeMask = function closeMask() {
      maskWebview.setStyle({
        mask: 'none' });

    };
    webview.show = function () {
      showMask();

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return oldShow.apply(webview, args);
    };
    webview.hide = function () {
      closeMask();

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return oldHide.apply(webview, args);
    };
    webview.close = function () {
      closeMask();

      for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return oldClose.apply(webview, args);
    };
  }

  function getSubNVueById(id) {
    var webview = weexPlus.webview.getWebviewById(id);
    if (webview && !webview.$processed) {
      wrapper(webview);
    }
    return webview;
  }

  function getCurrentSubNVue() {
    return getSubNVueById(weexPlus.webview.currentWebview().id);
  }

  var plus = weex.requireModule('plus');
  var globalEvent = weex.requireModule('globalEvent');

  var id = 0;
  var callbacks = {};

  var UNIAPP_SERVICE_NVUE_ID = '__uniapp__service';

  globalEvent.addEventListener('plusMessage', function (e) {
    if (e.data.type === 'UniAppJsApi') {
      invoke(e.data.id, e.data.data);
    } else if (e.data.type === 'UniAppSubNVue') {
      onSubNVueMessage(e.data.data, e.data.options);
    } else if (e.data.type === 'onNavigationBarButtonTap') {
      if (typeof onNavigationBarButtonTapCallback === 'function') {
        onNavigationBarButtonTapCallback(e.data.data);
      }
    } else if (e.data.type === 'onNavigationBarSearchInputChanged') {
      if (typeof onNavigationBarSearchInputChangedCallback === 'function') {
        onNavigationBarSearchInputChangedCallback(e.data.data);
      }
    } else if (e.data.type === 'onNavigationBarSearchInputConfirmed') {
      if (typeof onNavigationBarSearchInputConfirmedCallback === 'function') {
        onNavigationBarSearchInputConfirmedCallback(e.data.data);
      }
    } else if (e.data.type === 'onNavigationBarSearchInputClicked') {
      if (typeof onNavigationBarSearchInputClickedCallback === 'function') {
        onNavigationBarSearchInputClickedCallback(e.data.data);
      }
    }
  });

  var createCallback = function createCallback(args, type) {
    var callback = function callback(res) {
      if (isFn(args)) {
        args(res);
      } else if (args) {
        if (~res.errMsg.indexOf(':ok')) {
          isFn(args.success) && args.success(res);
        } else if (~res.errMsg.indexOf(':fail')) {
          isFn(args.fail) && args.fail(res);
        }
        isFn(args.complete) && args.complete(res);
      }
    };
    if (isFn(args) || args && isFn(args.callback)) {
      callback.keepAlive = true;
    }
    return callback;
  };

  var invoke = function invoke(callbackId, data) {
    var callback = callbacks[callbackId];
    if (callback) {
      callback(data);
      if (!callback.keepAlive) {
        delete callbacks[callbackId];
      }
    } else {
      console.error('callback[' + callbackId + '] is undefined');
    }
  };

  var publish = function publish(_ref) {
    var id = _ref.id,
    type = _ref.type,
    params = _ref.params;

    callbacks[id] = createCallback(params, type);
    plus.postMessage({
      id: id,
      type: type,
      params: params },
    UNIAPP_SERVICE_NVUE_ID);
  };

  function postMessage(data) {
    plus.postMessage(data, UNIAPP_SERVICE_NVUE_ID);
  }

  var createPublish = function createPublish(name) {
    return function (args) {
      publish({
        id: id++,
        type: name,
        params: args });

    };
  };

  var onNavigationBarButtonTapCallback = void 0;
  var onNavigationBarSearchInputChangedCallback = void 0;
  var onNavigationBarSearchInputConfirmedCallback = void 0;
  var onNavigationBarSearchInputClickedCallback = void 0;

  function onNavigationBarButtonTap(callback) {
    onNavigationBarButtonTapCallback = callback;
  }

  function onNavigationBarSearchInputChanged(callback) {
    onNavigationBarSearchInputChangedCallback = callback;
  }

  function onNavigationBarSearchInputConfirmed(callback) {
    onNavigationBarSearchInputConfirmedCallback = callback;
  }

  function onNavigationBarSearchInputClicked(callback) {
    onNavigationBarSearchInputClickedCallback = callback;
  }

  function requireNativePlugin(pluginName) {
    return weex.requireModule(pluginName);
  }

  var dom = weex.requireModule('dom');

  function loadFontFace(_ref) {
    var family = _ref.family,
    source = _ref.source,
    desc = _ref.desc,
    success = _ref.success,
    fail = _ref.fail,
    complete = _ref.complete;

    dom.addRule('fontFace', {
      fontFamily: family,
      src: source.replace(/"/g, '\'') });

    var res = {
      errMsg: 'loadFontFace:ok',
      status: 'loaded' };

    isFn(success) && success(res);
    isFn(complete) && complete(res);
  }

  var globalEvent$1 = weex.requireModule('globalEvent');

  var callbacks$1 = [];

  globalEvent$1.addEventListener('plusMessage', function (e) {
    if (e.data.type === 'UniAppReady') {
      ready.isUniAppReady = true;
      if (callbacks$1.length) {
        callbacks$1.forEach(function (callback) {
          return callback();
        });
        callbacks$1 = [];
      }
    }
  });

  function ready(callback) {
    if (typeof callback === 'function') {
      if (this.isUniAppReady) {
        callback();
      } else {
        callbacks$1.push(callback);
      }
    }
  }

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ?
    "symbol" : typeof obj;
  };

  var stream = weex.requireModule('stream');

  // let requestTaskId = 0

  var METHOD_GET = 'GET';
  var METHOD_POST = 'POST';
  var CONTENT_TYPE_JSON = 'application/json';
  var CONTENT_TYPE_FORM = 'application/x-www-form-urlencoded';

  var serialize = function serialize(data) {
    var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : METHOD_GET;
    var contentType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : CONTENT_TYPE_FORM;

    if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object') {
      if (method.toUpperCase() === METHOD_POST && contentType.toLowerCase() === CONTENT_TYPE_JSON) {
        return JSON.stringify(data);
      } else {
        return Object.keys(data).map(function (key) {
          return encodeURIComponent(key) + '=' + encodeURIComponent(data[key]);
        }).join('&');
      }
    }
    return data;
  };

  function request(_ref) {
    var url = _ref.url,
    data = _ref.data,
    header = _ref.header,
    _ref$method = _ref.method,
    method = _ref$method === undefined ? 'GET' : _ref$method,
    _ref$dataType = _ref.dataType,
    dataType = _ref$dataType === undefined ? 'json' : _ref$dataType,
    responseType = _ref.responseType,
    success = _ref.success,
    fail = _ref.fail,
    complete = _ref.complete;

    // requestTaskId++
    var aborted = false;

    var hasContentType = false;
    var headers = {};
    if (header) {
      for (var name in header) {
        if (!hasContentType && name.toLowerCase() === 'content-type') {
          hasContentType = true;
          headers['Content-Type'] = header[name];
        } else {
          headers[name] = header[name];
        }
      }
    }
    if (method === METHOD_GET && data) {
      url = url + (~url.indexOf('?') ? url.substr(-1) === '&' || url.substr(-1) === '?' ? '' : '&' : '?') +
      serialize(data);
    }
    stream.fetch({
      url: url,
      method: method,
      headers: headers,
      type: dataType === 'json' ? 'json' : 'text',
      body: method !== METHOD_GET ? serialize(data, method, headers['Content-Type']) : '' },
    function (_ref2) {
      var status = _ref2.status,
      ok = _ref2.ok,
      statusText = _ref2.statusText,
      data = _ref2.data,
      headers = _ref2.headers;

      var ret = {};
      if (!status || status === -1 || aborted) {
        ret.errMsg = 'request:fail';
        isFn(fail) && fail(ret);
      } else {
        ret.data = data;
        ret.statusCode = status;
        ret.header = headers;
        isFn(success) && success(ret);
      }
      isFn(complete) && complete(ret);
    });
    return {
      abort: function abort() {
        aborted = true;
      } };

  }

  var storage = weex.requireModule('plusstorage');
  var UNIAPP_STORAGE_DATA_TYPE = '__TYPE';

  function getStorage(_ref) {
    var key = _ref.key,
    data = _ref.data,
    success = _ref.success,
    fail = _ref.fail,
    complete = _ref.complete;

    storage.getItem(key + UNIAPP_STORAGE_DATA_TYPE, function (ret) {
      if (ret.result === 'success') {
        var dataType = ret.data;
        storage.getItem(key, function (res) {
          if (res.result === 'success') {
            var result = res.data;
            if (dataType && result) {
              if (dataType !== 'String') {
                result = JSON.parse(result);
              }
              isFn(success) && success({
                errMsg: 'getStorage:ok',
                data: result });

            } else {
              res.errMsg = 'setStorage:fail';
              isFn(fail) && fail(res);
            }
          } else {
            res.errMsg = 'setStorage:fail';
            isFn(fail) && fail(res);
          }
          isFn(complete) && complete(res);
        });
      } else {
        ret.errMsg = 'setStorage:fail';
        isFn(fail) && fail(ret);
        isFn(complete) && complete(ret);
      }
    });
  }

  function setStorage(_ref2) {
    var key = _ref2.key,
    data = _ref2.data,
    success = _ref2.success,
    fail = _ref2.fail,
    complete = _ref2.complete;

    var dataType = 'String';
    if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object') {
      dataType = 'Object';
      data = JSON.stringify(data);
    }
    storage.setItem(key, data, function (res) {
      if (res.result === 'success') {
        storage.setItem(key + UNIAPP_STORAGE_DATA_TYPE, dataType, function (ret) {
          if (ret.result === 'success') {
            isFn(success) && success({
              errMsg: 'setStorage:ok' });

          } else {
            ret.errMsg = 'setStorage:fail';
            isFn(fail) && fail(ret);
          }
        });
      } else {
        res.errMsg = 'setStorage:fail';
        isFn(fail) && fail(res);
      }
      isFn(complete) && complete(res);
    });
  }

  function removeStorage(_ref3) {
    var key = _ref3.key,
    data = _ref3.data,
    success = _ref3.success,
    fail = _ref3.fail,
    complete = _ref3.complete;

    storage.removeItem(key, function (res) {
      if (res.result === 'success') {
        isFn(success) && success({
          errMsg: 'removeStorage:ok' });

      } else {
        res.errMsg = 'removeStorage:fail';
        isFn(fail) && fail(res);
      }
      isFn(complete) && complete(res);
    });
    storage.removeItem(key + UNIAPP_STORAGE_DATA_TYPE);
  }

  function clearStorage(_ref4) {
    var key = _ref4.key,
    data = _ref4.data,
    success = _ref4.success,
    fail = _ref4.fail,
    complete = _ref4.complete;
  }

  var clipboard = weex.requireModule('clipboard');

  function getClipboardData(_ref) {
    var success = _ref.success,
    fail = _ref.fail,
    complete = _ref.complete;

    clipboard.getString(function (_ref2) {
      var data = _ref2.data;

      var res = {
        errMsg: 'getClipboardData:ok',
        data: data };

      isFn(success) && success(res);
      isFn(complete) && complete(res);
    });
  }

  function setClipboardData(_ref3) {
    var data = _ref3.data,
    success = _ref3.success,
    fail = _ref3.fail,
    complete = _ref3.complete;

    var res = {
      errMsg: 'setClipboardData:ok' };

    clipboard.setString(data);
    isFn(success) && success(res);
    isFn(complete) && complete(res);
  }

  var getEmitter = function () {
    if (typeof getUniEmitter === 'function') {
      /* eslint-disable no-undef */
      return getUniEmitter;
    }
    var Emitter = {
      $on: function $on() {
        console.warn('uni.$on failed');
      },
      $off: function $off() {
        console.warn('uni.$off failed');
      },
      $once: function $once() {
        console.warn('uni.$once failed');
      },
      $emit: function $emit() {
        console.warn('uni.$emit failed');
      } };

    return function getUniEmitter() {
      return Emitter;
    };
  }();

  function apply(ctx, method, args) {
    return ctx[method].apply(ctx, args);
  }

  function $on() {
    return apply(getEmitter(), '$on', [].concat(Array.prototype.slice.call(arguments)));
  }

  function $off() {
    return apply(getEmitter(), '$off', [].concat(Array.prototype.slice.call(arguments)));
  }

  function $once() {
    return apply(getEmitter(), '$once', [].concat(Array.prototype.slice.call(arguments)));
  }

  function $emit() {
    return apply(getEmitter(), '$emit', [].concat(Array.prototype.slice.call(arguments)));
  }



  var api = /*#__PURE__*/Object.freeze({
    loadFontFace: loadFontFace,
    ready: ready,
    request: request,
    getStorage: getStorage,
    setStorage: setStorage,
    removeStorage: removeStorage,
    clearStorage: clearStorage,
    getClipboardData: getClipboardData,
    setClipboardData: setClipboardData,
    onSubNVueMessage: onSubNVueMessage,
    getSubNVueById: getSubNVueById,
    getCurrentSubNVue: getCurrentSubNVue,
    $on: $on,
    $off: $off,
    $once: $once,
    $emit: $emit });



  var wx = {
    uploadFile: true,
    downloadFile: true,
    chooseImage: true,
    previewImage: true,
    getImageInfo: true,
    saveImageToPhotosAlbum: true,
    chooseVideo: true,
    saveVideoToPhotosAlbum: true,
    saveFile: true,
    getSavedFileList: true,
    getSavedFileInfo: true,
    removeSavedFile: true,
    openDocument: true,
    setStorage: true,
    getStorage: true,
    getStorageInfo: true,
    removeStorage: true,
    clearStorage: true,
    getLocation: true,
    chooseLocation: true,
    openLocation: true,
    getSystemInfo: true,
    getNetworkType: true,
    makePhoneCall: true,
    scanCode: true,
    setScreenBrightness: true,
    getScreenBrightness: true,
    setKeepScreenOn: true,
    vibrateLong: true,
    vibrateShort: true,
    addPhoneContact: true,
    showToast: true,
    showLoading: true,
    hideToast: true,
    hideLoading: true,
    showModal: true,
    showActionSheet: true,
    setNavigationBarTitle: true,
    setNavigationBarColor: true,
    navigateTo: true,
    redirectTo: true,
    reLaunch: true,
    switchTab: true,
    navigateBack: true,
    getProvider: true,
    login: true,
    getUserInfo: true,
    share: true,
    requestPayment: true,
    subscribePush: true,
    unsubscribePush: true,
    onPush: true,
    offPush: true };


  var baseUni = {
    os: {
      nvue: true } };



  var uni = {};

  if (typeof Proxy !== 'undefined') {
    uni = new Proxy({}, {
      get: function get(target, name) {
        if (name === 'os') {
          return {
            nvue: true };

        }
        if (name === 'postMessage') {
          return postMessage;
        }
        if (name === 'requireNativePlugin') {
          return requireNativePlugin;
        }
        if (name === 'onNavigationBarButtonTap') {
          return onNavigationBarButtonTap;
        }
        if (name === 'onNavigationBarSearchInputChanged') {
          return onNavigationBarSearchInputChanged;
        }
        if (name === 'onNavigationBarSearchInputConfirmed') {
          return onNavigationBarSearchInputConfirmed;
        }
        if (name === 'onNavigationBarSearchInputClicked') {
          return onNavigationBarSearchInputClicked;
        }
        var method = api[name];
        if (!method) {
          method = createPublish(name);
        }
        if (shouldPromise(name)) {
          return promisify(method);
        }
        return method;
      } });

  } else {
    Object.keys(baseUni).forEach(function (key) {
      uni[key] = baseUni[key];
    });

    uni.postMessage = postMessage;

    uni.requireNativePlugin = requireNativePlugin;

    uni.onNavigationBarButtonTap = onNavigationBarButtonTap;

    uni.onNavigationBarSearchInputChanged = onNavigationBarSearchInputChanged;

    uni.onNavigationBarSearchInputConfirmed = onNavigationBarSearchInputConfirmed;

    uni.onNavigationBarSearchInputClicked = onNavigationBarSearchInputClicked;

    Object.keys(wx).forEach(function (name) {
      var method = api[name];
      if (!method) {
        method = createPublish(name);
      }
      if (shouldPromise(name)) {
        uni[name] = promisify(method);
      } else {
        uni[name] = method;
      }
    });
  }
  return uni;
}

var createUni;

if (typeof getUni === 'function') {
  createUni = getUni;
} else {
  createUni = initUni;
}
var weexPlus = new WeexPlus(weex);exports.weexPlus = weexPlus;var _default =
createUni(weex, weexPlus, BroadcastChannel);exports.default = _default;

/***/ }),

/***/ 3:
/*!******************************************************!*\
  !*** ./node_modules/@dcloudio/uni-stat/package.json ***!
  \******************************************************/
/*! exports provided: _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _shasum, _spec, _where, author, bugs, bundleDependencies, deprecated, description, devDependencies, files, gitHead, homepage, license, main, name, repository, scripts, version, default */
/***/ (function(module) {

module.exports = {"_from":"@dcloudio/uni-stat@next","_id":"@dcloudio/uni-stat@2.0.0-24220191115004","_inBundle":false,"_integrity":"sha512-UKnpiHSP7h9c5IFpJFkWkpm1KyWz9iHj1hchrQSUxPhChx+KPOmunnQcKGiQvvBz9CeSi7Se/eauJYha5ch0kw==","_location":"/@dcloudio/uni-stat","_phantomChildren":{},"_requested":{"type":"tag","registry":true,"raw":"@dcloudio/uni-stat@next","name":"@dcloudio/uni-stat","escapedName":"@dcloudio%2funi-stat","scope":"@dcloudio","rawSpec":"next","saveSpec":null,"fetchSpec":"next"},"_requiredBy":["#USER","/","/@dcloudio/vue-cli-plugin-uni"],"_resolved":"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-24220191115004.tgz","_shasum":"5848f2204f37daaf8c340fb27d9f76b16fcbfdeb","_spec":"@dcloudio/uni-stat@next","_where":"/Users/guoshengqiang/Documents/dcloud-plugins/release/uniapp-cli","author":"","bugs":{"url":"https://github.com/dcloudio/uni-app/issues"},"bundleDependencies":false,"deprecated":false,"description":"","devDependencies":{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5","eslint":"^6.1.0","rollup":"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},"files":["dist","package.json","LICENSE"],"gitHead":"bcf65737c5111d47398695d3db8ed87305df346e","homepage":"https://github.com/dcloudio/uni-app#readme","license":"Apache-2.0","main":"dist/index.js","name":"@dcloudio/uni-stat","repository":{"type":"git","url":"git+https://github.com/dcloudio/uni-app.git","directory":"packages/uni-stat"},"scripts":{"build":"NODE_ENV=production rollup -c rollup.config.js","dev":"NODE_ENV=development rollup -w -c rollup.config.js"},"version":"2.0.0-24220191115004"};

/***/ }),

/***/ 309:
/*!*************************************************************************************************!*\
  !*** C:/Users/刘雯媛/web1/uniapp/hello/main.js?{"page":"pages%2FextUI%2Fnotice-bar%2Fnotice-bar"} ***!
  \*************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dcloudio/uni-stat */ 1);
/* harmony import */ var _dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uni-app-style */ 6);
/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_extUI_notice_bar_notice_bar_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/extUI/notice-bar/notice-bar.nvue?mpType=page */ 310);

        
        
        
        _pages_extUI_notice_bar_notice_bar_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].mpType = 'page'
        _pages_extUI_notice_bar_notice_bar_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].route = 'pages/extUI/notice-bar/notice-bar'
        _pages_extUI_notice_bar_notice_bar_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].el = '#root'
        new Vue(_pages_extUI_notice_bar_notice_bar_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"])
        

/***/ }),

/***/ 310:
/*!*****************************************************************************************!*\
  !*** C:/Users/刘雯媛/web1/uniapp/hello/pages/extUI/notice-bar/notice-bar.nvue?mpType=page ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _notice_bar_nvue_vue_type_template_id_2009e7ea_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notice-bar.nvue?vue&type=template&id=2009e7ea&mpType=page */ 311);
/* harmony import */ var _notice_bar_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notice-bar.nvue?vue&type=script&lang=js&mpType=page */ 313);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _notice_bar_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _notice_bar_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 16);



function injectStyles () {
  if(!this.options.style){
    this.options.style = {}
}
if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){
  Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)
}
if(Vue.prototype.__merge_style){
              Vue.prototype.__merge_style(__webpack_require__(/*! ./notice-bar.nvue?vue&type=style&index=0&lang=css&mpType=page */ 322).default, this.options.style)
          }else{
              Object.assign(this.options.style,__webpack_require__(/*! ./notice-bar.nvue?vue&type=style&index=0&lang=css&mpType=page */ 322).default)
          }

}

/* normalize component */

var component = Object(_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _notice_bar_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _notice_bar_nvue_vue_type_template_id_2009e7ea_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _notice_bar_nvue_vue_type_template_id_2009e7ea_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  "08452f8a"
  
)

injectStyles.call(component)
component.options.__file = "web1/uniapp/hello/pages/extUI/notice-bar/notice-bar.nvue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 311:
/*!***********************************************************************************************************************!*\
  !*** C:/Users/刘雯媛/web1/uniapp/hello/pages/extUI/notice-bar/notice-bar.nvue?vue&type=template&id=2009e7ea&mpType=page ***!
  \***********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_notice_bar_nvue_vue_type_template_id_2009e7ea_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!../../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!../../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!../../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--5-0!./notice-bar.nvue?vue&type=template&id=2009e7ea&mpType=page */ 312);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_notice_bar_nvue_vue_type_template_id_2009e7ea_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_notice_bar_nvue_vue_type_template_id_2009e7ea_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 312:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--5-0!C:/Users/刘雯媛/web1/uniapp/hello/pages/extUI/notice-bar/notice-bar.nvue?vue&type=template&id=2009e7ea&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scroll-view",
    {
      staticStyle: { flexDirection: "column" },
      attrs: { scrollY: true, enableBackToTop: true, bubble: "true" }
    },
    [
      _c(
        "view",
        [
          _c("u-text", { staticClass: ["example-info"] }, [
            _vm._v(
              "通告栏组件多用于系统通知，广告通知等场景，可自定义图标，颜色，展现方式等。"
            )
          ]),
          _c("uni-section", { attrs: { title: "基本用法", type: "line" } }),
          _c(
            "view",
            { staticClass: ["example-body"] },
            [
              _c("uni-notice-bar", {
                attrs: {
                  single: true,
                  text: "[单行] uni-app 1.6发布，开发一次、7端覆盖！"
                }
              }),
              _c("uni-notice-bar", {
                attrs: {
                  text:
                    "[多行] uni-app 1.6版正式发布，开发一次，同时发布iOS、Android、H5、微信小程序、支付宝小程序、百度小程序、头条小程序等7大平台。"
                }
              })
            ],
            1
          ),
          _c("uni-section", { attrs: { title: "加图标", type: "line" } }),
          _c(
            "view",
            { staticClass: ["example-body"] },
            [
              _c("uni-notice-bar", {
                attrs: {
                  single: true,
                  showIcon: true,
                  text: "uni-app行业峰会频频亮相，开发者反响热烈!"
                }
              }),
              _c("uni-notice-bar", {
                attrs: {
                  showIcon: true,
                  text:
                    "8月12日DCloud受邀参加iWEB峰会后，9月19日DCloud CEO 王安在千人小程序峰会——见实大会，做了主题为《App和小程序，鱼与熊掌如何兼得？》的分享。"
                }
              })
            ],
            1
          ),
          _c("uni-section", { attrs: { title: "文字滚动", type: "line" } }),
          _c(
            "view",
            { staticClass: ["example-body"] },
            [
              _c("uni-notice-bar", {
                attrs: {
                  scrollable: true,
                  single: true,
                  text: "uni-app行业峰会频频亮相，开发者反响热烈!"
                }
              }),
              _c("uni-notice-bar", {
                attrs: {
                  showIcon: true,
                  scrollable: true,
                  single: true,
                  text:
                    "uni-app 1.6版正式发布，开发一次，同时发布iOS、Android、H5、微信小程序、支付宝小程序、百度小程序、头条小程序等7大平台。"
                }
              }),
              _c("uni-notice-bar", {
                attrs: {
                  scrollable: true,
                  text:
                    "8月12日DCloud受邀参加iWEB峰会后，9月19日DCloud CEO 王安在千人小程序峰会——见实大会，做了主题为《App和小程序，鱼与熊掌如何兼得？》的分享。"
                }
              })
            ],
            1
          ),
          _c("uni-section", { attrs: { title: "查看更多", type: "line" } }),
          _c(
            "view",
            { staticClass: ["example-body"] },
            [
              _c("uni-notice-bar", {
                attrs: {
                  showGetMore: true,
                  single: true,
                  text:
                    "年末大礼：uni-app1.4 新增百度、支付宝小程序。插件市场重磅上线！"
                },
                on: { getmore: _vm.getMore }
              }),
              _c("uni-notice-bar", {
                attrs: {
                  showGetMore: true,
                  showIcon: true,
                  single: true,
                  moreText: "查看更多",
                  text:
                    "年末大礼：uni-app1.4 新增百度、支付宝小程序。插件市场重磅上线！"
                },
                on: { getmore: _vm.getMore }
              })
            ],
            1
          ),
          _c("uni-section", { attrs: { title: "修改颜色", type: "line" } }),
          _c(
            "view",
            { staticClass: ["example-body"] },
            [
              _c("uni-notice-bar", {
                attrs: {
                  single: true,
                  moreText: "查看更多",
                  color: "red",
                  backgroundColor: "#eee",
                  text:
                    "uni-app 1.6版正式发布，开发一次，同时发布iOS、Android、H5、微信小程序、支付宝小程序、百度小程序、头条小程序等7大平台。"
                }
              }),
              _c("uni-notice-bar", {
                attrs: {
                  single: true,
                  showGetMore: true,
                  moreText: "查看更多",
                  moreColor: "blue",
                  color: "red",
                  backgroundColor: "#eee",
                  text:
                    "uni-app 1.6版正式发布，开发一次，同时发布iOS、Android、H5、微信小程序、支付宝小程序、百度小程序、头条小程序等7大平台。"
                },
                on: { getmore: _vm.getMore }
              }),
              _c("uni-notice-bar", {
                attrs: {
                  showIcon: true,
                  color: "blue",
                  text:
                    "uni-app 1.6版正式发布，开发一次，同时发布iOS、Android、H5、微信小程序、支付宝小程序、百度小程序、头条小程序等7大平台。"
                }
              })
            ],
            1
          ),
          _c("uni-section", { attrs: { title: "关闭按钮", type: "line" } }),
          _c(
            "view",
            { staticClass: ["example-body"] },
            [
              _c("uni-notice-bar", {
                attrs: {
                  showClose: true,
                  single: true,
                  text: "HBuilderX 1.0正式发布！uni-app实现里程碑突破！"
                }
              }),
              _c("uni-notice-bar", {
                attrs: {
                  showClose: true,
                  showIcon: true,
                  moreText: "查看更多",
                  text: "HBuilderX 1.0正式发布！uni-app实现里程碑突破！"
                }
              }),
              _c("uni-notice-bar", {
                attrs: {
                  showClose: true,
                  showIcon: true,
                  text: "uni-app 1.6发布，开发一次、7端覆盖！"
                }
              }),
              _c("uni-notice-bar", {
                attrs: {
                  showClose: true,
                  showIcon: true,
                  single: true,
                  text:
                    "uni-app 1.6版正式发布，开发一次，同时发布到iOS、Android、H5、微信小程序、支付宝小程序、百度小程序、头条小程序等7大平台。"
                }
              })
            ],
            1
          )
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 313:
/*!*****************************************************************************************************************!*\
  !*** C:/Users/刘雯媛/web1/uniapp/hello/pages/extUI/notice-bar/notice-bar.nvue?vue&type=script&lang=js&mpType=page ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_notice_bar_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--5-0!./notice-bar.nvue?vue&type=script&lang=js&mpType=page */ 314);
/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_notice_bar_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_notice_bar_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_notice_bar_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_notice_bar_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_notice_bar_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 314:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--5-0!C:/Users/刘雯媛/web1/uniapp/hello/pages/extUI/notice-bar/notice-bar.nvue?vue&type=script&lang=js&mpType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;










































var _uniNoticeBar = _interopRequireDefault(__webpack_require__(/*! @/components/uni-notice-bar/uni-notice-bar.vue */ 315));
var _uniSection = _interopRequireDefault(__webpack_require__(/*! @/components/uni-section/uni-section.vue */ 149));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default = { components: { uniNoticeBar: _uniNoticeBar.default, uniSection: _uniSection.default }, data: function data() {return {};}, created: function created() {}, methods: { getMore: function getMore() {uni.showToast({ title: '点击查看更多', icon: 'none' });} } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 315:
/*!***********************************************************************************!*\
  !*** C:/Users/刘雯媛/web1/uniapp/hello/components/uni-notice-bar/uni-notice-bar.vue ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uni_notice_bar_vue_vue_type_template_id_7f8869ed_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-notice-bar.vue?vue&type=template&id=7f8869ed&scoped=true& */ 316);
/* harmony import */ var _uni_notice_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-notice-bar.vue?vue&type=script&lang=js& */ 318);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_notice_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_notice_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 16);



function injectStyles () {
  if(!this.options.style){
    this.options.style = {}
}
if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){
  Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)
}
if(Vue.prototype.__merge_style){
              Vue.prototype.__merge_style(__webpack_require__(/*! ./uni-notice-bar.vue?vue&type=style&index=0&id=7f8869ed&scoped=true&lang=css& */ 320).default, this.options.style)
          }else{
              Object.assign(this.options.style,__webpack_require__(/*! ./uni-notice-bar.vue?vue&type=style&index=0&id=7f8869ed&scoped=true&lang=css& */ 320).default)
          }

}

/* normalize component */

var component = Object(_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _uni_notice_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _uni_notice_bar_vue_vue_type_template_id_7f8869ed_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _uni_notice_bar_vue_vue_type_template_id_7f8869ed_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7f8869ed",
  "4bf35ff6"
  
)

injectStyles.call(component)
component.options.__file = "web1/uniapp/hello/components/uni-notice-bar/uni-notice-bar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 316:
/*!******************************************************************************************************************************!*\
  !*** C:/Users/刘雯媛/web1/uniapp/hello/components/uni-notice-bar/uni-notice-bar.vue?vue&type=template&id=7f8869ed&scoped=true& ***!
  \******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_notice_bar_vue_vue_type_template_id_7f8869ed_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!./uni-notice-bar.vue?vue&type=template&id=7f8869ed&scoped=true& */ 317);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_notice_bar_vue_vue_type_template_id_7f8869ed_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_notice_bar_vue_vue_type_template_id_7f8869ed_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 317:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!C:/Users/刘雯媛/web1/uniapp/hello/components/uni-notice-bar/uni-notice-bar.vue?vue&type=template&id=7f8869ed&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.show
    ? _c(
        "view",
        {
          staticClass: ["uni-noticebar"],
          style: { backgroundColor: _vm.backgroundColor },
          on: { click: _vm.onClick }
        },
        [
          _vm.showClose === true || _vm.showClose === "true"
            ? _c("uni-icons", {
                staticClass: ["uni-noticebar-close"],
                attrs: { type: "closefill", color: _vm.color, size: "12" },
                on: { click: _vm.close }
              })
            : _vm._e(),
          _vm.showIcon === true || _vm.showIcon === "true"
            ? _c("uni-icons", {
                staticClass: ["uni-noticebar-icon"],
                attrs: { type: "sound", color: _vm.color, size: "14" }
              })
            : _vm._e(),
          _c(
            "view",
            {
              ref: "textBox",
              staticClass: ["uni-noticebar__content-wrapper"],
              class: {
                "uni-noticebar__content-wrapper--scrollable": _vm.scrollable,
                "uni-noticebar__content-wrapper--single":
                  !_vm.scrollable && (_vm.single || _vm.moreText)
              }
            },
            [
              _c(
                "view",
                {
                  staticClass: ["uni-noticebar__content"],
                  class: {
                    "uni-noticebar__content--scrollable": _vm.scrollable,
                    "uni-noticebar__content--single":
                      !_vm.scrollable && (_vm.single || _vm.moreText)
                  },
                  attrs: { id: _vm.elIdBox }
                },
                [
                  _c(
                    "u-text",
                    {
                      ref: "animationEle",
                      staticClass: ["uni-noticebar__content-text"],
                      class: {
                        "uni-noticebar__content-text--scrollable":
                          _vm.scrollable,
                        "uni-noticebar__content-text--single":
                          !_vm.scrollable && (_vm.single || _vm.moreText)
                      },
                      style: {
                        color: _vm.color,
                        width: _vm.wrapWidth + "px",
                        animationDuration: _vm.animationDuration,
                        "-webkit-animationDuration": _vm.animationDuration,
                        animationPlayState: _vm.webviewHide
                          ? "paused"
                          : _vm.animationPlayState,
                        "-webkit-animationPlayState": _vm.webviewHide
                          ? "paused"
                          : _vm.animationPlayState,
                        animationDelay: _vm.animationDelay,
                        "-webkit-animationDelay": _vm.animationDelay
                      },
                      attrs: { id: _vm.elId }
                    },
                    [_vm._v(_vm._s(_vm.text))]
                  )
                ]
              )
            ]
          ),
          _vm.showGetMore === true || _vm.showGetMore === "true"
            ? _c(
                "view",
                {
                  staticClass: ["uni-noticebar__more"],
                  on: { click: _vm.clickMore }
                },
                [
                  _vm.moreText
                    ? _c(
                        "u-text",
                        {
                          staticClass: ["uni-noticebar__more-text"],
                          style: { color: _vm.moreColor }
                        },
                        [_vm._v(_vm._s(_vm.moreText))]
                      )
                    : _vm._e(),
                  _c("uni-icons", {
                    attrs: {
                      type: "arrowright",
                      color: _vm.moreColor,
                      size: "14"
                    }
                  })
                ],
                1
              )
            : _vm._e()
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 318:
/*!************************************************************************************************************!*\
  !*** C:/Users/刘雯媛/web1/uniapp/hello/components/uni-notice-bar/uni-notice-bar.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_notice_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!./uni-notice-bar.vue?vue&type=script&lang=js& */ 319);
/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_notice_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_notice_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_notice_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_notice_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_notice_bar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 319:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!C:/Users/刘雯媛/web1/uniapp/hello/components/uni-notice-bar/uni-notice-bar.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;


























var _uniIcons = _interopRequireDefault(__webpack_require__(/*! ../uni-icons/uni-icons.vue */ 168));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var dom = weex.requireModule('dom');var animation = weex.requireModule('animation');var _default = { name: 'UniNoticeBar', components: { uniIcons: _uniIcons.default }, props: { text: { type: String, default: '' }, moreText: { type: String, default: '' }, backgroundColor: { type: String, default: '#fffbe8' }, speed: { // 默认1s滚动100px
      type: [String, Number], default: 100 },
    color: {
      type: String,
      default: '#de8c17' },

    moreColor: {
      type: String,
      default: '#999999' },

    single: {
      // 是否单行
      type: [String, Boolean],
      default: false },

    scrollable: {
      // 是否滚动，添加后控制单行效果取消
      type: [String, Boolean],
      default: false },

    showIcon: {
      // 是否显示左侧icon
      type: [String, Boolean],
      default: false },

    showGetMore: {
      // 是否显示右侧查看更多
      type: [String, Boolean],
      default: false },

    showClose: {
      // 是否显示左侧关闭按钮
      type: [String, Boolean],
      default: false } },


  data: function data() {
    var elId = "Uni_".concat(Math.ceil(Math.random() * 10e5).toString(36));
    var elIdBox = "Uni_".concat(Math.ceil(Math.random() * 10e5).toString(36));
    return {
      textWidth: 0,
      boxWidth: 0,
      wrapWidth: '',
      webviewHide: false,

      stopAnimation: false,

      elId: elId,
      elIdBox: elIdBox,
      show: true,
      animationDuration: 'none',
      animationPlayState: 'paused',
      animationDelay: '0s' };

  },
  mounted: function mounted() {var _this = this;

    var pages = getCurrentPages();
    var page = pages[pages.length - 1];
    var currentWebview = page.$getAppWebview();
    currentWebview.addEventListener('hide', function () {
      _this.webviewHide = true;
    });
    currentWebview.addEventListener('show', function () {
      _this.webviewHide = false;
    });

    this.$nextTick(function () {
      _this.initSize();
    });
  },

  beforeDestroy: function beforeDestroy() {
    this.stopAnimation = true;
  },

  methods: {
    initSize: function initSize() {var _this2 = this;
      if (this.scrollable) {



































        dom.getComponentRect(this.$refs['animationEle'], function (res) {
          var winWidth = uni.getSystemInfoSync().windowWidth;
          _this2.textWidth = res.size.width;
          animation.transition(_this2.$refs['animationEle'], {
            styles: {
              transform: "translateX(-".concat(winWidth, "px)") },

            duration: 0,
            timingFunction: 'linear',
            delay: 0 },
          function () {
            if (!_this2.stopAnimation) {
              animation.transition(_this2.$refs['animationEle'], {
                styles: {
                  transform: "translateX(-".concat(_this2.textWidth, "px)") },

                timingFunction: 'linear',
                duration: (_this2.textWidth - winWidth) / _this2.speed * 1000,
                delay: 1000 },
              function () {
                if (!_this2.stopAnimation) {
                  _this2.loopAnimation();
                }
              });
            }
          });
        });

      }

      if (!this.scrollable && (this.single || this.moreText)) {
        dom.getComponentRect(this.$refs['textBox'], function (res) {
          _this2.wrapWidth = res.size.width;
        });
      }

    },
    loopAnimation: function loopAnimation() {var _this3 = this;

      animation.transition(this.$refs['animationEle'], {
        styles: {
          transform: "translateX(0px)" },

        duration: 0 },
      function () {
        if (!_this3.stopAnimation) {
          animation.transition(_this3.$refs['animationEle'], {
            styles: {
              transform: "translateX(-".concat(_this3.textWidth, "px)") },

            duration: _this3.textWidth / _this3.speed * 1000,
            timingFunction: 'linear',
            delay: 0 },
          function () {
            if (!_this3.stopAnimation) {
              _this3.loopAnimation();
            }
          });
        }
      });

    },
    clickMore: function clickMore() {
      this.$emit('getmore');
    },
    close: function close() {
      this.show = false;
      this.$emit('close');
    },
    onClick: function onClick() {
      this.$emit('click');
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue-v8/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 320:
/*!********************************************************************************************************************************************!*\
  !*** C:/Users/刘雯媛/web1/uniapp/hello/components/uni-notice-bar/uni-notice-bar.vue?vue&type=style&index=0&id=7f8869ed&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_notice_bar_vue_vue_type_style_index_0_id_7f8869ed_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--9-oneOf-0-2!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!./uni-notice-bar.vue?vue&type=style&index=0&id=7f8869ed&scoped=true&lang=css& */ 321);
/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_notice_bar_vue_vue_type_style_index_0_id_7f8869ed_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_notice_bar_vue_vue_type_style_index_0_id_7f8869ed_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_notice_bar_vue_vue_type_style_index_0_id_7f8869ed_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_notice_bar_vue_vue_type_style_index_0_id_7f8869ed_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_notice_bar_vue_vue_type_style_index_0_id_7f8869ed_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 321:
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!C:/Users/刘雯媛/web1/uniapp/hello/components/uni-notice-bar/uni-notice-bar.vue?vue&type=style&index=0&id=7f8869ed&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "uni-noticebar": {
    "flexDirection": "row",
    "alignItems": "center",
    "paddingTop": "6",
    "paddingRight": "12",
    "paddingBottom": "6",
    "paddingLeft": "12",
    "marginBottom": "10"
  },
  "uni-noticebar-close": {
    "marginRight": "5"
  },
  "uni-noticebar-icon": {
    "marginRight": "5"
  },
  "uni-noticebar__content-wrapper": {
    "flex": 1,
    "flexDirection": "column",
    "overflow": "hidden"
  },
  "uni-noticebar__content-wrapper--single": {
    "flexDirection": "row"
  },
  "uni-noticebar__content-wrapper--scrollable": {
    "flexDirection": "row"
  },
  "uni-noticebar__content--scrollable": {
    "flex": 0
  },
  "uni-noticebar__content-text": {
    "fontSize": "14",
    "lineHeight": "18"
  },
  "uni-noticebar__content-text--single": {
    "lines": 1,
    "overflow": "hidden",
    "textOverflow": "ellipsis"
  },
  "uni-noticebar__content-text--scrollable": {
    "lines": 1,
    "paddingLeft": "750rpx"
  },
  "uni-noticebar__more": {
    "flexDirection": "row",
    "flexWrap": "nowrap",
    "alignItems": "center",
    "paddingLeft": "5"
  },
  "uni-noticebar__more-text": {
    "fontSize": "14"
  }
}

/***/ }),

/***/ 322:
/*!*************************************************************************************************************************!*\
  !*** C:/Users/刘雯媛/web1/uniapp/hello/pages/extUI/notice-bar/notice-bar.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_notice_bar_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!../../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--9-oneOf-0-2!../../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!../../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--5-0!./notice-bar.nvue?vue&type=style&index=0&lang=css&mpType=page */ 323);
/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_notice_bar_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_notice_bar_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_notice_bar_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_notice_bar_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_notice_bar_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 323:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--5-0!C:/Users/刘雯媛/web1/uniapp/hello/pages/extUI/notice-bar/notice-bar.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "example": {
    "paddingTop": 0,
    "paddingRight": "30rpx",
    "paddingBottom": 0,
    "paddingLeft": "30rpx"
  },
  "example-info": {
    "paddingTop": "30rpx",
    "paddingRight": "30rpx",
    "paddingBottom": "30rpx",
    "paddingLeft": "30rpx",
    "color": "#3b4144",
    "backgroundColor": "#ffffff",
    "fontSize": "30rpx"
  },
  "example-info-text": {
    "fontSize": "28rpx",
    "lineHeight": "36rpx"
  },
  "example-body": {
    "flexDirection": "column",
    "paddingTop": "20rpx",
    "paddingRight": 0,
    "paddingBottom": "5rpx",
    "paddingLeft": 0,
    "backgroundColor": "#ffffff"
  },
  "word-btn-white": {
    "fontSize": "18",
    "color": "#FFFFFF"
  },
  "word-btn": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center",
    "borderRadius": "6",
    "height": "48",
    "marginTop": "15",
    "marginRight": "15",
    "marginBottom": "15",
    "marginLeft": "15",
    "backgroundColor": "#007AFF"
  },
  "word-btn--hover": {
    "backgroundColor": "#4ca2ff"
  }
}

/***/ }),

/***/ 4:
/*!******************************************************************!*\
  !*** C:/Users/刘雯媛/web1/uniapp/hello/pages.json?{"type":"style"} ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"pages":{},"globalStyle":{}});

/***/ }),

/***/ 5:
/*!*****************************************************************!*\
  !*** C:/Users/刘雯媛/web1/uniapp/hello/pages.json?{"type":"stat"} ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"appid":""});

/***/ }),

/***/ 6:
/*!******************************************************************!*\
  !*** C:/Users/刘雯媛/web1/uniapp/hello/main.js?{"type":"appStyle"} ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Vue.prototype.__$appStyle__ = {}
Vue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 7).default,Vue.prototype.__$appStyle__)


/***/ }),

/***/ 7:
/*!******************************************************************************!*\
  !*** C:/Users/刘雯媛/web1/uniapp/hello/App.vue?vue&type=style&index=0&lang=css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--9-oneOf-0-2!../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 8);
/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 8:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!C:/Users/刘雯媛/web1/uniapp/hello/App.vue?vue&type=style&index=0&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbCwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdW5pLXN0YXQvZGlzdC9pbmRleC5qcz85MjFiIiwid2VicGFjazovLy9DOi9Vc2Vycy/liJjpm6/lqpsvd2ViMS91bmlhcHAvaGVsbG8vY29tcG9uZW50cy91bmktc2VjdGlvbi91bmktc2VjdGlvbi52dWU/NTc5ZSIsIndlYnBhY2s6Ly8vQzovVXNlcnMv5YiY6Zuv5aqbL3dlYjEvdW5pYXBwL2hlbGxvL2NvbXBvbmVudHMvdW5pLXNlY3Rpb24vdW5pLXNlY3Rpb24udnVlP2EwZDciLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL+WImOmbr+Wqmy93ZWIxL3VuaWFwcC9oZWxsby9jb21wb25lbnRzL3VuaS1zZWN0aW9uL3VuaS1zZWN0aW9uLnZ1ZT9kZGQ3Iiwid2VicGFjazovLy9DOi9Vc2Vycy/liJjpm6/lqpsvd2ViMS91bmlhcHAvaGVsbG8vY29tcG9uZW50cy91bmktc2VjdGlvbi91bmktc2VjdGlvbi52dWU/OWNlYyIsInVuaS1hcHA6Ly8vY29tcG9uZW50cy91bmktc2VjdGlvbi91bmktc2VjdGlvbi52dWUiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL+WImOmbr+Wqmy93ZWIxL3VuaWFwcC9oZWxsby9jb21wb25lbnRzL3VuaS1zZWN0aW9uL3VuaS1zZWN0aW9uLnZ1ZT84MmEyIiwid2VicGFjazovLy9DOi9Vc2Vycy/liJjpm6/lqpsvd2ViMS91bmlhcHAvaGVsbG8vY29tcG9uZW50cy91bmktc2VjdGlvbi91bmktc2VjdGlvbi52dWU/NmRjNSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzPzI4NzciLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL+WImOmbr+Wqmy93ZWIxL3VuaWFwcC9oZWxsby9jb21wb25lbnRzL3VuaS1pY29ucy91bmktaWNvbnMudnVlPzExYWUiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL+WImOmbr+Wqmy93ZWIxL3VuaWFwcC9oZWxsby9jb21wb25lbnRzL3VuaS1pY29ucy91bmktaWNvbnMudnVlPzAyZjciLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL+WImOmbr+Wqmy93ZWIxL3VuaWFwcC9oZWxsby9jb21wb25lbnRzL3VuaS1pY29ucy91bmktaWNvbnMudnVlPzk3MjkiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL+WImOmbr+Wqmy93ZWIxL3VuaWFwcC9oZWxsby9jb21wb25lbnRzL3VuaS1pY29ucy91bmktaWNvbnMudnVlP2M2ZWYiLCJ1bmktYXBwOi8vL2NvbXBvbmVudHMvdW5pLWljb25zL3VuaS1pY29ucy52dWUiLCJ1bmktYXBwOi8vL2NvbXBvbmVudHMvdW5pLWljb25zL2ljb25zLmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy/liJjpm6/lqpsvd2ViMS91bmlhcHAvaGVsbG8vY29tcG9uZW50cy91bmktaWNvbnMvdW5pLWljb25zLnZ1ZT9iYTRjIiwid2VicGFjazovLy9DOi9Vc2Vycy/liJjpm6/lqpsvd2ViMS91bmlhcHAvaGVsbG8vY29tcG9uZW50cy91bmktaWNvbnMvdW5pLWljb25zLnZ1ZT83MzFkIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3VuaS1hcHAtcGx1cy1udnVlLXY4L2Rpc3QvaW5kZXguanM/OTkyYSIsIndlYnBhY2s6Ly8vQzovVXNlcnMv5YiY6Zuv5aqbL3dlYjEvdW5pYXBwL2hlbGxvL21haW4uanM/ODRiZiIsIndlYnBhY2s6Ly8vQzovVXNlcnMv5YiY6Zuv5aqbL3dlYjEvdW5pYXBwL2hlbGxvL3BhZ2VzL2V4dFVJL25vdGljZS1iYXIvbm90aWNlLWJhci5udnVlP2Q1NTIiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL+WImOmbr+Wqmy93ZWIxL3VuaWFwcC9oZWxsby9wYWdlcy9leHRVSS9ub3RpY2UtYmFyL25vdGljZS1iYXIubnZ1ZT83MTY1Iiwid2VicGFjazovLy9DOi9Vc2Vycy/liJjpm6/lqpsvd2ViMS91bmlhcHAvaGVsbG8vcGFnZXMvZXh0VUkvbm90aWNlLWJhci9ub3RpY2UtYmFyLm52dWU/N2Q4MCIsIndlYnBhY2s6Ly8vQzovVXNlcnMv5YiY6Zuv5aqbL3dlYjEvdW5pYXBwL2hlbGxvL3BhZ2VzL2V4dFVJL25vdGljZS1iYXIvbm90aWNlLWJhci5udnVlPzgxMDkiLCJ1bmktYXBwOi8vL3BhZ2VzL2V4dFVJL25vdGljZS1iYXIvbm90aWNlLWJhci5udnVlIiwid2VicGFjazovLy9DOi9Vc2Vycy/liJjpm6/lqpsvd2ViMS91bmlhcHAvaGVsbG8vY29tcG9uZW50cy91bmktbm90aWNlLWJhci91bmktbm90aWNlLWJhci52dWU/Y2Y2NSIsIndlYnBhY2s6Ly8vQzovVXNlcnMv5YiY6Zuv5aqbL3dlYjEvdW5pYXBwL2hlbGxvL2NvbXBvbmVudHMvdW5pLW5vdGljZS1iYXIvdW5pLW5vdGljZS1iYXIudnVlPzNkNDciLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL+WImOmbr+Wqmy93ZWIxL3VuaWFwcC9oZWxsby9jb21wb25lbnRzL3VuaS1ub3RpY2UtYmFyL3VuaS1ub3RpY2UtYmFyLnZ1ZT9iNzI1Iiwid2VicGFjazovLy9DOi9Vc2Vycy/liJjpm6/lqpsvd2ViMS91bmlhcHAvaGVsbG8vY29tcG9uZW50cy91bmktbm90aWNlLWJhci91bmktbm90aWNlLWJhci52dWU/MWY4MiIsInVuaS1hcHA6Ly8vY29tcG9uZW50cy91bmktbm90aWNlLWJhci91bmktbm90aWNlLWJhci52dWUiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL+WImOmbr+Wqmy93ZWIxL3VuaWFwcC9oZWxsby9jb21wb25lbnRzL3VuaS1ub3RpY2UtYmFyL3VuaS1ub3RpY2UtYmFyLnZ1ZT82MzI0Iiwid2VicGFjazovLy9DOi9Vc2Vycy/liJjpm6/lqpsvd2ViMS91bmlhcHAvaGVsbG8vY29tcG9uZW50cy91bmktbm90aWNlLWJhci91bmktbm90aWNlLWJhci52dWU/MTI1NSIsIndlYnBhY2s6Ly8vQzovVXNlcnMv5YiY6Zuv5aqbL3dlYjEvdW5pYXBwL2hlbGxvL3BhZ2VzL2V4dFVJL25vdGljZS1iYXIvbm90aWNlLWJhci5udnVlPzFkNGYiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL+WImOmbr+Wqmy93ZWIxL3VuaWFwcC9oZWxsby9wYWdlcy9leHRVSS9ub3RpY2UtYmFyL25vdGljZS1iYXIubnZ1ZT82NzEyIiwid2VicGFjazovLy9DOi9Vc2Vycy/liJjpm6/lqpsvd2ViMS91bmlhcHAvaGVsbG8vcGFnZXMuanNvbj85MThhIiwid2VicGFjazovLy9DOi9Vc2Vycy/liJjpm6/lqpsvd2ViMS91bmlhcHAvaGVsbG8vcGFnZXMuanNvbj8wOTJjIiwid2VicGFjazovLy9DOi9Vc2Vycy/liJjpm6/lqpsvd2ViMS91bmlhcHAvaGVsbG8vbWFpbi5qcz9lZTcxIiwid2VicGFjazovLy9DOi9Vc2Vycy/liJjpm6/lqpsvd2ViMS91bmlhcHAvaGVsbG8vQXBwLnZ1ZT9iYTM5Iiwid2VicGFjazovLy9DOi9Vc2Vycy/liJjpm6/lqpsvd2ViMS91bmlhcHAvaGVsbG8vQXBwLnZ1ZT9kNGFjIl0sIm5hbWVzIjpbIlNUQVRfVkVSU0lPTiIsInZlcnNpb24iLCJTVEFUX1VSTCIsIlNUQVRfSDVfVVJMIiwiUEFHRV9QVkVSX1RJTUUiLCJBUFBfUFZFUl9USU1FIiwiT1BFUkFUSU5HX1RJTUUiLCJVVUlEX0tFWSIsIlVVSURfVkFMVUUiLCJnZXRVdWlkIiwidXVpZCIsImdldFBsYXRmb3JtTmFtZSIsInBsdXMiLCJydW50aW1lIiwiZ2V0RENsb3VkSWQiLCJlIiwidW5pIiwiZ2V0U3RvcmFnZVN5bmMiLCJEYXRlIiwibm93IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwic2V0U3RvcmFnZVN5bmMiLCJnZXRTZ2luIiwic3RhdERhdGEiLCJhcnIiLCJPYmplY3QiLCJrZXlzIiwic29ydEFyciIsInNvcnQiLCJzZ2luIiwic2dpblN0ciIsImkiLCJzaWduIiwib3B0aW9ucyIsInN1YnN0ciIsImxlbmd0aCIsImdldFNwbGljaW5nIiwiZGF0YSIsInN0ciIsImdldFRpbWUiLCJwYXJzZUludCIsInBsYXRmb3JtTGlzdCIsInByb2Nlc3MiLCJnZXRQYWNrTmFtZSIsInBhY2tOYW1lIiwiY2FuSVVzZSIsImdldEFjY291bnRJbmZvU3luYyIsIm1pbmlQcm9ncmFtIiwiYXBwSWQiLCJnZXRWZXJzaW9uIiwiZ2V0Q2hhbm5lbCIsInBsYXRmb3JtTmFtZSIsImNoYW5uZWwiLCJnZXRTY2VuZSIsInNjZW5lIiwiZ2V0TGF1bmNoT3B0aW9uc1N5bmMiLCJGaXJzdF9fVmlzaXRfX1RpbWVfX0tFWSIsIkxhc3RfX1Zpc2l0X19UaW1lX19LRVkiLCJnZXRGaXJzdFZpc2l0VGltZSIsInRpbWVTdG9yZ2UiLCJ0aW1lIiwicmVtb3ZlU3RvcmFnZVN5bmMiLCJnZXRMYXN0VmlzaXRUaW1lIiwiUEFHRV9SRVNJREVOQ0VfVElNRSIsIkZpcnN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUiLCJMYXN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUiLCJzZXRQYWdlUmVzaWRlbmNlVGltZSIsImdldFBhZ2VSZXNpZGVuY2VUaW1lIiwiVE9UQUxfX1ZJU0lUX19DT1VOVCIsImdldFRvdGFsVmlzaXRDb3VudCIsImNvdW50IiwiR2V0RW5jb2RlVVJJQ29tcG9uZW50T3B0aW9ucyIsInByb3AiLCJlbmNvZGVVUklDb21wb25lbnQiLCJTZXRfX0ZpcnN0X19UaW1lIiwiU2V0X19MYXN0X19UaW1lIiwiZ2V0Rmlyc3RUaW1lIiwiZ2V0TGFzdFRpbWUiLCJnZXRSZXNpZGVuY2VUaW1lIiwidHlwZSIsInJlc2lkZW5jZVRpbWUiLCJvdmVydGltZSIsImdldFJvdXRlIiwicGFnZXMiLCJnZXRDdXJyZW50UGFnZXMiLCJwYWdlIiwiX3NlbGYiLCIkdm0iLCIkbXAiLCJpcyIsIiRzY29wZSIsInJvdXRlIiwiZ2V0UGFnZVJvdXRlIiwic2VsZiIsInF1ZXJ5IiwiX3F1ZXJ5IiwiSlNPTiIsInN0cmluZ2lmeSIsImdldFBhZ2VUeXBlcyIsIm1wVHlwZSIsIiRvcHRpb25zIiwiY2FsaWJyYXRpb24iLCJldmVudE5hbWUiLCJjb25zb2xlIiwiZXJyb3IiLCJQYWdlc0pzb24iLCJyZXF1aXJlIiwiZGVmYXVsdCIsInN0YXRDb25maWciLCJyZXN1bHRPcHRpb25zIiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJVdGlsIiwiX3JldHJ5IiwiX3BsYXRmb3JtIiwiX25hdmlnYXRpb25CYXJUaXRsZSIsImNvbmZpZyIsInJlcG9ydCIsImx0IiwiX29wZXJhdGluZ1RpbWUiLCJfcmVwb3J0aW5nUmVxdWVzdERhdGEiLCJfX3ByZXZlbnRfdHJpZ2dlcmluZyIsIl9fbGljYXRpb25IaWRlIiwiX19saWNhdGlvblNob3ciLCJfbGFzdFBhZ2VSb3V0ZSIsInV0IiwibXBuIiwiYWsiLCJhcHBpZCIsInVzdiIsInYiLCJjaCIsImNuIiwicG4iLCJjdCIsInQiLCJ0dCIsInAiLCJwbGF0Zm9ybSIsImJyYW5kIiwibWQiLCJtb2RlbCIsInN2Iiwic3lzdGVtIiwicmVwbGFjZSIsIm1wc2RrIiwiU0RLVmVyc2lvbiIsIm1wdiIsImxhbmciLCJsYW5ndWFnZSIsInByIiwicGl4ZWxSYXRpbyIsInd3Iiwid2luZG93V2lkdGgiLCJ3aCIsIndpbmRvd0hlaWdodCIsInN3Iiwic2NyZWVuV2lkdGgiLCJzaCIsInNjcmVlbkhlaWdodCIsInBhdGgiLCJzYyIsIl9zZW5kUmVwb3J0UmVxdWVzdCIsIl9zZW5kSGlkZVJlcXVlc3QiLCJ1cmxyZWYiLCJ1cmxyZWZfdHMiLCJyb3V0ZXBhdGgiLCJ0aXRsZU5WaWV3IiwidGl0bGVUZXh0IiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIl9zZW5kUGFnZVJlcXVlc3QiLCJ1cmwiLCJfc2VuZEV2ZW50UmVxdWVzdCIsImtleSIsImZ2dHMiLCJsdnRzIiwidHZjIiwiZ2V0UHJvcGVydHkiLCJnZXROZXR3b3JrSW5mbyIsIm9wdCIsInJlcXVlc3QiLCJ2YWx1ZSIsImVfbiIsImVfdiIsInRvU3RyaW5nIiwiZ2V0TmV0d29ya1R5cGUiLCJzdWNjZXNzIiwicmVzdWx0IiwibmV0IiwibmV0d29ya1R5cGUiLCJnZXRMb2NhdGlvbiIsIndndGluZm8iLCJnZW9jb2RlIiwiYWRkcmVzcyIsImNvdW50cnkiLCJwcm92aW5jZSIsImNpdHkiLCJsYXQiLCJsYXRpdHVkZSIsImxuZyIsImxvbmdpdHVkZSIsInRpdGxlIiwidHRuIiwidHRwaiIsInR0YyIsInJlcXVlc3REYXRhIiwicHVzaCIsInVuaVN0YXREYXRhIiwiZmlyc3RBcnIiLCJjb250ZW50QXJyIiwibGFzdEFyciIsInJkIiwiZm9yRWFjaCIsImVsbSIsIm5ld0RhdGEiLCJvcHRpb25zRGF0YSIsInJlcXVlc3RzIiwiaW1hZ2VSZXF1ZXN0Iiwic2V0VGltZW91dCIsIl9zZW5kUmVxdWVzdCIsIm1ldGhvZCIsImZhaWwiLCJpbWFnZSIsIkltYWdlIiwic3JjIiwiU3RhdCIsImluc3RhbmNlIiwiYWRkSW50ZXJjZXB0b3IiLCJhZGRJbnRlcmNlcHRvckluaXQiLCJpbnRlcmNlcHRMb2dpbiIsImludGVyY2VwdFNoYXJlIiwiaW50ZXJjZXB0UmVxdWVzdFBheW1lbnQiLCJpbnZva2UiLCJhcmdzIiwiY29tcGxldGUiLCJfbG9naW4iLCJfc2hhcmUiLCJfcGF5bWVudCIsIl9wYWdlU2hvdyIsIl9hcHBsaWNhdGlvblNob3ciLCJfcGFnZUhpZGUiLCJfYXBwbGljYXRpb25IaWRlIiwiZW0iLCJpbmZvIiwiZW1WYWwiLCJtZXNzYWdlIiwic3RhY2siLCJzdGF0IiwiZ2V0SW5zdGFuY2UiLCJpc0hpZGUiLCJsaWZlY3ljbGUiLCJvbkxhdW5jaCIsIm9uUmVhZHkiLCJyZWFkeSIsIm9uTG9hZCIsImxvYWQiLCJvblNoYXJlQXBwTWVzc2FnZSIsIm9sZFNoYXJlQXBwTWVzc2FnZSIsImNhbGwiLCJvblNob3ciLCJzaG93Iiwib25IaWRlIiwiaGlkZSIsIm9uVW5sb2FkIiwib25FcnJvciIsIm1haW4iLCJpbml0VW5pIiwiaXNGbiIsImhhbmRsZVByb21pc2UiLCJwcm9taXNlIiwidGhlbiIsImNhdGNoIiwiZXJyIiwiUkVHRVgiLCJBUElfTk9STUFMX0xJU1QiLCJzaG91bGRQcm9taXNlIiwibmFtZSIsInRlc3QiLCJpbmRleE9mIiwicHJvbWlzaWZ5IiwiYXBpIiwiX2xlbiIsImFyZ3VtZW50cyIsInBhcmFtcyIsIkFycmF5IiwiX2tleSIsInVuZGVmaW5lZCIsImFwcGx5IiwiY29uY2F0IiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJhc3NpZ24iLCJwcm90b3R5cGUiLCJmaW5hbGx5IiwiY2FsbGJhY2siLCJjb25zdHJ1Y3RvciIsInJlYXNvbiIsIm9uTWVzc2FnZUNhbGxiYWNrcyIsIm9yaWdpbiIsIm9uU3ViTlZ1ZU1lc3NhZ2UiLCJ3ZWJ2aWV3SWQiLCJ3ZWV4UGx1cyIsIndlYnZpZXciLCJjdXJyZW50V2VidmlldyIsImlkIiwiQnJvYWRjYXN0Q2hhbm5lbCIsIm9ubWVzc2FnZSIsImV2ZW50IiwidG8iLCJ3cmFwcGVyIiwiJHByb2Nlc3NlZCIsImN1cnJlbnRXZWJ2aWV3SWQiLCJpc1BvcHVwTlZ1ZSIsImhvc3ROVnVlSWQiLCJfX3VuaWFwcF9vcmlnaW5fdHlwZSIsIl9fdW5pYXBwX29yaWdpbl9pZCIsInBvcHVwTlZ1ZUlkIiwicG9zdE1lc3NhZ2UiLCJvbk1lc3NhZ2UiLCJfX3VuaWFwcF9tYXNrX2lkIiwiX191bmlhcHBfaG9zdCIsIm1hc2tDb2xvciIsIl9fdW5pYXBwX21hc2siLCJtYXNrV2VidmlldyIsImdldFdlYnZpZXdCeUlkIiwicGFyZW50Iiwib2xkU2hvdyIsIm9sZEhpZGUiLCJvbGRDbG9zZSIsImNsb3NlIiwic2hvd01hc2siLCJzZXRTdHlsZSIsIm1hc2siLCJjbG9zZU1hc2siLCJfbGVuMiIsIl9rZXkyIiwiX2xlbjMiLCJfa2V5MyIsImdldFN1Yk5WdWVCeUlkIiwiZ2V0Q3VycmVudFN1Yk5WdWUiLCJ3ZWV4IiwicmVxdWlyZU1vZHVsZSIsImdsb2JhbEV2ZW50IiwiY2FsbGJhY2tzIiwiVU5JQVBQX1NFUlZJQ0VfTlZVRV9JRCIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbk5hdmlnYXRpb25CYXJCdXR0b25UYXBDYWxsYmFjayIsIm9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZENhbGxiYWNrIiwib25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWRDYWxsYmFjayIsIm9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZENhbGxiYWNrIiwiY3JlYXRlQ2FsbGJhY2siLCJyZXMiLCJlcnJNc2ciLCJrZWVwQWxpdmUiLCJjYWxsYmFja0lkIiwicHVibGlzaCIsIl9yZWYiLCJjcmVhdGVQdWJsaXNoIiwib25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwIiwib25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkIiwib25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWQiLCJvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWQiLCJyZXF1aXJlTmF0aXZlUGx1Z2luIiwicGx1Z2luTmFtZSIsImRvbSIsImxvYWRGb250RmFjZSIsImZhbWlseSIsInNvdXJjZSIsImRlc2MiLCJhZGRSdWxlIiwiZm9udEZhbWlseSIsInN0YXR1cyIsImdsb2JhbEV2ZW50JDEiLCJjYWxsYmFja3MkMSIsImlzVW5pQXBwUmVhZHkiLCJfdHlwZW9mIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJvYmoiLCJzdHJlYW0iLCJNRVRIT0RfR0VUIiwiTUVUSE9EX1BPU1QiLCJDT05URU5UX1RZUEVfSlNPTiIsIkNPTlRFTlRfVFlQRV9GT1JNIiwic2VyaWFsaXplIiwiY29udGVudFR5cGUiLCJ0b1VwcGVyQ2FzZSIsInRvTG93ZXJDYXNlIiwibWFwIiwiam9pbiIsImhlYWRlciIsIl9yZWYkbWV0aG9kIiwiX3JlZiRkYXRhVHlwZSIsImRhdGFUeXBlIiwicmVzcG9uc2VUeXBlIiwiYWJvcnRlZCIsImhhc0NvbnRlbnRUeXBlIiwiaGVhZGVycyIsImZldGNoIiwiYm9keSIsIl9yZWYyIiwib2siLCJzdGF0dXNUZXh0IiwicmV0Iiwic3RhdHVzQ29kZSIsImFib3J0Iiwic3RvcmFnZSIsIlVOSUFQUF9TVE9SQUdFX0RBVEFfVFlQRSIsImdldFN0b3JhZ2UiLCJnZXRJdGVtIiwicGFyc2UiLCJzZXRTdG9yYWdlIiwic2V0SXRlbSIsInJlbW92ZVN0b3JhZ2UiLCJfcmVmMyIsInJlbW92ZUl0ZW0iLCJjbGVhclN0b3JhZ2UiLCJfcmVmNCIsImNsaXBib2FyZCIsImdldENsaXBib2FyZERhdGEiLCJnZXRTdHJpbmciLCJzZXRDbGlwYm9hcmREYXRhIiwic2V0U3RyaW5nIiwiZ2V0RW1pdHRlciIsImdldFVuaUVtaXR0ZXIiLCJFbWl0dGVyIiwiJG9uIiwid2FybiIsIiRvZmYiLCIkb25jZSIsIiRlbWl0IiwiY3R4Iiwic2xpY2UiLCJmcmVlemUiLCJ3eCIsInVwbG9hZEZpbGUiLCJkb3dubG9hZEZpbGUiLCJjaG9vc2VJbWFnZSIsInByZXZpZXdJbWFnZSIsImdldEltYWdlSW5mbyIsInNhdmVJbWFnZVRvUGhvdG9zQWxidW0iLCJjaG9vc2VWaWRlbyIsInNhdmVWaWRlb1RvUGhvdG9zQWxidW0iLCJzYXZlRmlsZSIsImdldFNhdmVkRmlsZUxpc3QiLCJnZXRTYXZlZEZpbGVJbmZvIiwicmVtb3ZlU2F2ZWRGaWxlIiwib3BlbkRvY3VtZW50IiwiZ2V0U3RvcmFnZUluZm8iLCJjaG9vc2VMb2NhdGlvbiIsIm9wZW5Mb2NhdGlvbiIsImdldFN5c3RlbUluZm8iLCJtYWtlUGhvbmVDYWxsIiwic2NhbkNvZGUiLCJzZXRTY3JlZW5CcmlnaHRuZXNzIiwiZ2V0U2NyZWVuQnJpZ2h0bmVzcyIsInNldEtlZXBTY3JlZW5PbiIsInZpYnJhdGVMb25nIiwidmlicmF0ZVNob3J0IiwiYWRkUGhvbmVDb250YWN0Iiwic2hvd1RvYXN0Iiwic2hvd0xvYWRpbmciLCJoaWRlVG9hc3QiLCJoaWRlTG9hZGluZyIsInNob3dNb2RhbCIsInNob3dBY3Rpb25TaGVldCIsInNldE5hdmlnYXRpb25CYXJUaXRsZSIsInNldE5hdmlnYXRpb25CYXJDb2xvciIsIm5hdmlnYXRlVG8iLCJyZWRpcmVjdFRvIiwicmVMYXVuY2giLCJzd2l0Y2hUYWIiLCJuYXZpZ2F0ZUJhY2siLCJnZXRQcm92aWRlciIsImxvZ2luIiwiZ2V0VXNlckluZm8iLCJzaGFyZSIsInJlcXVlc3RQYXltZW50Iiwic3Vic2NyaWJlUHVzaCIsInVuc3Vic2NyaWJlUHVzaCIsIm9uUHVzaCIsIm9mZlB1c2giLCJiYXNlVW5pIiwib3MiLCJudnVlIiwiUHJveHkiLCJnZXQiLCJ0YXJnZXQiLCJjcmVhdGVVbmkiLCJnZXRVbmkiLCJXZWV4UGx1cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7aURDbEZBLDZEOztBQUVBLElBQU1BLFlBQVksR0FBR0MsZ0JBQXJCO0FBQ0EsSUFBTUMsUUFBUSxHQUFHLG1DQUFqQjtBQUNBLElBQU1DLFdBQVcsR0FBRyx1Q0FBcEI7QUFDQSxJQUFNQyxjQUFjLEdBQUcsSUFBdkI7QUFDQSxJQUFNQyxhQUFhLEdBQUcsR0FBdEI7QUFDQSxJQUFNQyxjQUFjLEdBQUcsRUFBdkI7O0FBRUEs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O0FDQTFCO0FBQWUsZ0VBQUMsVzs7Ozs7Ozs7Ozs7QUNBaEI7QUFDQSwyREFBMkQsbUJBQU8sQ0FBQyxrREFBMkM7Ozs7Ozs7Ozs7Ozs7QUNEOUc7QUFBQTtBQUFBO0FBQUE7QUFBd3ZCLENBQWdCLGd4QkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7O0FDQTV3QixtQiIsImZpbGUiOiJwYWdlcy9leHRVSS9ub3RpY2UtYmFyL25vdGljZS1iYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMzA5KTtcbiIsImltcG9ydCB7IHZlcnNpb24gfSBmcm9tICcuLi9wYWNrYWdlLmpzb24nO1xyXG5cclxuY29uc3QgU1RBVF9WRVJTSU9OID0gdmVyc2lvbjtcclxuY29uc3QgU1RBVF9VUkwgPSAnaHR0cHM6Ly90b25namkuZGNsb3VkLmlvL3VuaS9zdGF0JztcclxuY29uc3QgU1RBVF9INV9VUkwgPSAnaHR0cHM6Ly90b25namkuZGNsb3VkLmlvL3VuaS9zdGF0LmdpZic7IFxyXG5jb25zdCBQQUdFX1BWRVJfVElNRSA9IDE4MDA7XHJcbmNvbnN0IEFQUF9QVkVSX1RJTUUgPSAzMDA7XHJcbmNvbnN0IE9QRVJBVElOR19USU1FID0gMTA7XHJcblxyXG5jb25zdCBVVUlEX0tFWSA9ICdfX0RDX1NUQVRfVVVJRCc7XHJcbmNvbnN0IFVVSURfVkFMVUUgPSAnX19EQ19VVUlEX1ZBTFVFJztcclxuXHJcbmZ1bmN0aW9uIGdldFV1aWQoKSB7XHJcbiAgbGV0IHV1aWQgPSAnJztcclxuICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgdXVpZCA9IHBsdXMucnVudGltZS5nZXREQ2xvdWRJZCgpO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICB1dWlkID0gJyc7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdXVpZFxyXG4gIH1cclxuXHJcbiAgdHJ5IHtcclxuICAgIHV1aWQgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoVVVJRF9LRVkpO1xyXG4gIH0gY2F0Y2ggKGUpIHtcclxuICAgIHV1aWQgPSBVVUlEX1ZBTFVFO1xyXG4gIH1cclxuXHJcbiAgaWYgKCF1dWlkKSB7XHJcbiAgICB1dWlkID0gRGF0ZS5ub3coKSArICcnICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMWU3KTtcclxuICAgIHRyeSB7XHJcbiAgICAgIHVuaS5zZXRTdG9yYWdlU3luYyhVVUlEX0tFWSwgdXVpZCk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHVuaS5zZXRTdG9yYWdlU3luYyhVVUlEX0tFWSwgVVVJRF9WQUxVRSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiB1dWlkO1xyXG59XHJcblxyXG5jb25zdCBnZXRTZ2luID0gKHN0YXREYXRhKSA9PiB7XHJcbiAgbGV0IGFyciA9IE9iamVjdC5rZXlzKHN0YXREYXRhKTtcclxuICBsZXQgc29ydEFyciA9IGFyci5zb3J0KCk7XHJcbiAgbGV0IHNnaW4gPSB7fTtcclxuICBsZXQgc2dpblN0ciA9ICcnO1xyXG4gIGZvciAodmFyIGkgaW4gc29ydEFycikge1xyXG4gICAgc2dpbltzb3J0QXJyW2ldXSA9IHN0YXREYXRhW3NvcnRBcnJbaV1dO1xyXG4gICAgc2dpblN0ciArPSBzb3J0QXJyW2ldICsgJz0nICsgc3RhdERhdGFbc29ydEFycltpXV0gKyAnJic7XHJcbiAgfVxyXG4gIC8vIGNvbnN0IG9wdGlvbnMgPSBzZ2luU3RyLnN1YnN0cigwLCBzZ2luU3RyLmxlbmd0aCAtIDEpXHJcbiAgLy8gc2dpblN0ciA9IHNnaW5TdHIuc3Vic3RyKDAsIHNnaW5TdHIubGVuZ3RoIC0gMSkgKyAnJmtleT0nICsgU1RBVF9LRVk7XHJcbiAgLy8gY29uc3Qgc2kgPSBjcnlwdG8uY3JlYXRlSGFzaCgnbWQ1JykudXBkYXRlKHNnaW5TdHIpLmRpZ2VzdCgnaGV4Jyk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHNpZ246ICcnLFxyXG4gICAgb3B0aW9uczogc2dpblN0ci5zdWJzdHIoMCwgc2dpblN0ci5sZW5ndGggLSAxKVxyXG4gIH07XHJcbn07XHJcblxyXG5jb25zdCBnZXRTcGxpY2luZyA9IChkYXRhKSA9PiB7XHJcbiAgbGV0IHN0ciA9ICcnO1xyXG4gIGZvciAodmFyIGkgaW4gZGF0YSkge1xyXG4gICAgc3RyICs9IGkgKyAnPScgKyBkYXRhW2ldICsgJyYnO1xyXG4gIH1cclxuICByZXR1cm4gc3RyLnN1YnN0cigwLCBzdHIubGVuZ3RoIC0gMSlcclxufTtcclxuXHJcbmNvbnN0IGdldFRpbWUgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHBhcnNlSW50KG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMCk7XHJcbn07XHJcblxyXG5jb25zdCBnZXRQbGF0Zm9ybU5hbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgcGxhdGZvcm1MaXN0ID0ge1xyXG4gICAgJ2FwcC1wbHVzJzogJ24nLFxyXG4gICAgJ2g1JzogJ2g1JyxcclxuICAgICdtcC13ZWl4aW4nOiAnd3gnLFxyXG4gICAgJ21wLWFsaXBheSc6ICdhbGknLFxyXG4gICAgJ21wLWJhaWR1JzogJ2JkJyxcclxuICAgICdtcC10b3V0aWFvJzogJ3R0JyxcclxuICAgICdtcC1xcSc6ICdxcSdcclxuICB9O1xyXG4gIHJldHVybiBwbGF0Zm9ybUxpc3RbcHJvY2Vzcy5lbnYuVlVFX0FQUF9QTEFURk9STV07XHJcbn07XHJcblxyXG5jb25zdCBnZXRQYWNrTmFtZSA9ICgpID0+IHtcclxuICBsZXQgcGFja05hbWUgPSAnJztcclxuICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICd3eCcgfHwgZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICdxcScpIHtcclxuICAgIC8vIOWFvOWuueW+ruS/oeWwj+eoi+W6j+S9jueJiOacrOWfuuehgOW6k1xyXG4gICAgaWYodW5pLmNhbklVc2UoJ2dldEFjY291bnRJbmZvU3luYycpKXtcclxuICAgICAgcGFja05hbWUgPSB1bmkuZ2V0QWNjb3VudEluZm9TeW5jKCkubWluaVByb2dyYW0uYXBwSWQgfHwgJyc7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiBwYWNrTmFtZVxyXG59O1xyXG5cclxuY29uc3QgZ2V0VmVyc2lvbiA9ICgpID0+IHtcclxuICByZXR1cm4gZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJyA/IHBsdXMucnVudGltZS52ZXJzaW9uIDogJyc7XHJcbn07XHJcblxyXG5jb25zdCBnZXRDaGFubmVsID0gKCkgPT4ge1xyXG4gIGNvbnN0IHBsYXRmb3JtTmFtZSA9IGdldFBsYXRmb3JtTmFtZSgpO1xyXG4gIGxldCBjaGFubmVsID0gJyc7XHJcbiAgaWYgKHBsYXRmb3JtTmFtZSA9PT0gJ24nKSB7XHJcbiAgICBjaGFubmVsID0gcGx1cy5ydW50aW1lLmNoYW5uZWw7XHJcbiAgfVxyXG4gIHJldHVybiBjaGFubmVsO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0U2NlbmUgPSAob3B0aW9ucykgPT4ge1xyXG4gIGNvbnN0IHBsYXRmb3JtTmFtZSA9IGdldFBsYXRmb3JtTmFtZSgpO1xyXG4gIGxldCBzY2VuZSA9ICcnO1xyXG4gIGlmIChvcHRpb25zKSB7XHJcbiAgICByZXR1cm4gb3B0aW9ucztcclxuICB9XHJcbiAgaWYgKHBsYXRmb3JtTmFtZSA9PT0gJ3d4Jykge1xyXG4gICAgc2NlbmUgPSB1bmkuZ2V0TGF1bmNoT3B0aW9uc1N5bmMoKS5zY2VuZTtcclxuICB9XHJcbiAgcmV0dXJuIHNjZW5lO1xyXG59O1xyXG5jb25zdCBGaXJzdF9fVmlzaXRfX1RpbWVfX0tFWSA9ICdGaXJzdF9fVmlzaXRfX1RpbWUnO1xyXG5jb25zdCBMYXN0X19WaXNpdF9fVGltZV9fS0VZID0gJ0xhc3RfX1Zpc2l0X19UaW1lJztcclxuXHJcbmNvbnN0IGdldEZpcnN0VmlzaXRUaW1lID0gKCkgPT4ge1xyXG4gIGNvbnN0IHRpbWVTdG9yZ2UgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoRmlyc3RfX1Zpc2l0X19UaW1lX19LRVkpO1xyXG4gIGxldCB0aW1lID0gMDtcclxuICBpZiAodGltZVN0b3JnZSkge1xyXG4gICAgdGltZSA9IHRpbWVTdG9yZ2U7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRpbWUgPSBnZXRUaW1lKCk7XHJcbiAgICB1bmkuc2V0U3RvcmFnZVN5bmMoRmlyc3RfX1Zpc2l0X19UaW1lX19LRVksIHRpbWUpO1xyXG4gICAgdW5pLnJlbW92ZVN0b3JhZ2VTeW5jKExhc3RfX1Zpc2l0X19UaW1lX19LRVkpO1xyXG4gIH1cclxuICByZXR1cm4gdGltZTtcclxufTtcclxuXHJcbmNvbnN0IGdldExhc3RWaXNpdFRpbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgdGltZVN0b3JnZSA9IHVuaS5nZXRTdG9yYWdlU3luYyhMYXN0X19WaXNpdF9fVGltZV9fS0VZKTtcclxuICBsZXQgdGltZSA9IDA7XHJcbiAgaWYgKHRpbWVTdG9yZ2UpIHtcclxuICAgIHRpbWUgPSB0aW1lU3RvcmdlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0aW1lID0gJyc7XHJcbiAgfVxyXG4gIHVuaS5zZXRTdG9yYWdlU3luYyhMYXN0X19WaXNpdF9fVGltZV9fS0VZLCBnZXRUaW1lKCkpO1xyXG4gIHJldHVybiB0aW1lO1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IFBBR0VfUkVTSURFTkNFX1RJTUUgPSAnX19wYWdlX19yZXNpZGVuY2VfX3RpbWUnO1xyXG5sZXQgRmlyc3RfUGFnZV9yZXNpZGVuY2VfdGltZSA9IDA7XHJcbmxldCBMYXN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUgPSAwO1xyXG5cclxuXHJcbmNvbnN0IHNldFBhZ2VSZXNpZGVuY2VUaW1lID0gKCkgPT4ge1xyXG4gIEZpcnN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUgPSBnZXRUaW1lKCk7XHJcbiAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicpIHtcclxuICAgIHVuaS5zZXRTdG9yYWdlU3luYyhQQUdFX1JFU0lERU5DRV9USU1FLCBnZXRUaW1lKCkpO1xyXG4gIH1cclxuICByZXR1cm4gRmlyc3RfUGFnZV9yZXNpZGVuY2VfdGltZVxyXG59O1xyXG5cclxuY29uc3QgZ2V0UGFnZVJlc2lkZW5jZVRpbWUgPSAoKSA9PiB7XHJcbiAgTGFzdF9QYWdlX3Jlc2lkZW5jZV90aW1lID0gZ2V0VGltZSgpO1xyXG4gIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICBGaXJzdF9QYWdlX3Jlc2lkZW5jZV90aW1lID0gdW5pLmdldFN0b3JhZ2VTeW5jKFBBR0VfUkVTSURFTkNFX1RJTUUpO1xyXG4gIH1cclxuICByZXR1cm4gTGFzdF9QYWdlX3Jlc2lkZW5jZV90aW1lIC0gRmlyc3RfUGFnZV9yZXNpZGVuY2VfdGltZVxyXG59O1xyXG5jb25zdCBUT1RBTF9fVklTSVRfX0NPVU5UID0gJ1RvdGFsX19WaXNpdF9fQ291bnQnO1xyXG5jb25zdCBnZXRUb3RhbFZpc2l0Q291bnQgPSAoKSA9PiB7XHJcbiAgY29uc3QgdGltZVN0b3JnZSA9IHVuaS5nZXRTdG9yYWdlU3luYyhUT1RBTF9fVklTSVRfX0NPVU5UKTtcclxuICBsZXQgY291bnQgPSAxO1xyXG4gIGlmICh0aW1lU3RvcmdlKSB7XHJcbiAgICBjb3VudCA9IHRpbWVTdG9yZ2U7XHJcbiAgICBjb3VudCsrO1xyXG4gIH1cclxuICB1bmkuc2V0U3RvcmFnZVN5bmMoVE9UQUxfX1ZJU0lUX19DT1VOVCwgY291bnQpO1xyXG4gIHJldHVybiBjb3VudDtcclxufTtcclxuXHJcbmNvbnN0IEdldEVuY29kZVVSSUNvbXBvbmVudE9wdGlvbnMgPSAoc3RhdERhdGEpID0+IHtcclxuICBsZXQgZGF0YSA9IHt9O1xyXG4gIGZvciAobGV0IHByb3AgaW4gc3RhdERhdGEpIHtcclxuICAgIGRhdGFbcHJvcF0gPSBlbmNvZGVVUklDb21wb25lbnQoc3RhdERhdGFbcHJvcF0pO1xyXG4gIH1cclxuICByZXR1cm4gZGF0YTtcclxufTtcclxuXHJcbmxldCBTZXRfX0ZpcnN0X19UaW1lID0gMDtcclxubGV0IFNldF9fTGFzdF9fVGltZSA9IDA7XHJcblxyXG5jb25zdCBnZXRGaXJzdFRpbWUgPSAoKSA9PiB7XHJcbiAgbGV0IHRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICBTZXRfX0ZpcnN0X19UaW1lID0gdGltZTtcclxuICBTZXRfX0xhc3RfX1RpbWUgPSAwO1xyXG4gIHJldHVybiB0aW1lO1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IGdldExhc3RUaW1lID0gKCkgPT4ge1xyXG4gIGxldCB0aW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgU2V0X19MYXN0X19UaW1lID0gdGltZTtcclxuICByZXR1cm4gdGltZTtcclxufTtcclxuXHJcblxyXG5jb25zdCBnZXRSZXNpZGVuY2VUaW1lID0gKHR5cGUpID0+IHtcclxuICBsZXQgcmVzaWRlbmNlVGltZSA9IDA7XHJcbiAgaWYgKFNldF9fRmlyc3RfX1RpbWUgIT09IDApIHtcclxuICAgIHJlc2lkZW5jZVRpbWUgPSBTZXRfX0xhc3RfX1RpbWUgLSBTZXRfX0ZpcnN0X19UaW1lO1xyXG4gIH1cclxuXHJcbiAgcmVzaWRlbmNlVGltZSA9IHBhcnNlSW50KHJlc2lkZW5jZVRpbWUgLyAxMDAwKTtcclxuICByZXNpZGVuY2VUaW1lID0gcmVzaWRlbmNlVGltZSA8IDEgPyAxIDogcmVzaWRlbmNlVGltZTtcclxuICBpZiAodHlwZSA9PT0gJ2FwcCcpIHtcclxuICAgIGxldCBvdmVydGltZSA9IHJlc2lkZW5jZVRpbWUgPiBBUFBfUFZFUl9USU1FID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcmVzaWRlbmNlVGltZSxcclxuICAgICAgb3ZlcnRpbWVcclxuICAgIH07XHJcbiAgfVxyXG4gIGlmICh0eXBlID09PSAncGFnZScpIHtcclxuICAgIGxldCBvdmVydGltZSA9IHJlc2lkZW5jZVRpbWUgPiBQQUdFX1BWRVJfVElNRSA/IHRydWUgOiBmYWxzZTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHJlc2lkZW5jZVRpbWUsXHJcbiAgICAgIG92ZXJ0aW1lXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHJlc2lkZW5jZVRpbWVcclxuICB9O1xyXG5cclxufTtcclxuXHJcbmNvbnN0IGdldFJvdXRlID0gKCkgPT4ge1xyXG4gIHZhciBwYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpO1xyXG4gIHZhciBwYWdlID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMV07XHJcbiAgbGV0IF9zZWxmID0gcGFnZS4kdm07XHJcblxyXG4gIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ2JkJykge1xyXG4gICAgcmV0dXJuIF9zZWxmLiRtcCAmJiBfc2VsZi4kbXAucGFnZS5pcztcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIChfc2VsZi4kc2NvcGUgJiYgX3NlbGYuJHNjb3BlLnJvdXRlKSB8fCAoX3NlbGYuJG1wICYmIF9zZWxmLiRtcC5wYWdlLnJvdXRlKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBnZXRQYWdlUm91dGUgPSAoc2VsZikgPT4ge1xyXG4gIHZhciBwYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpO1xyXG4gIHZhciBwYWdlID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMV07XHJcbiAgbGV0IF9zZWxmID0gcGFnZS4kdm07XHJcbiAgbGV0IHF1ZXJ5ID0gc2VsZi5fcXVlcnk7XHJcbiAgbGV0IHN0ciA9IHF1ZXJ5ICYmIEpTT04uc3RyaW5naWZ5KHF1ZXJ5KSAhPT0gJ3t9JyA/ICc/JyArIEpTT04uc3RyaW5naWZ5KHF1ZXJ5KSA6ICcnO1xyXG4gIC8vIGNsZWFyXHJcbiAgc2VsZi5fcXVlcnkgPSAnJztcclxuICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICdiZCcpIHtcclxuICAgIHJldHVybiBfc2VsZi4kbXAgJiYgX3NlbGYuJG1wLnBhZ2UuaXMgKyBzdHI7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybiAoX3NlbGYuJHNjb3BlICYmIF9zZWxmLiRzY29wZS5yb3V0ZSArIHN0ciApfHwgKF9zZWxmLiRtcCAmJiBfc2VsZi4kbXAucGFnZS5yb3V0ZSArIHN0cik7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgZ2V0UGFnZVR5cGVzID0gKHNlbGYpID0+IHtcclxuICBpZiAoc2VsZi5tcFR5cGUgPT09ICdwYWdlJyB8fCAoc2VsZi4kbXAgJiYgc2VsZi4kbXAubXBUeXBlID09PSAncGFnZScpIHx8IHNlbGYuJG9wdGlvbnMubXBUeXBlID09PSAncGFnZScpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICByZXR1cm4gZmFsc2U7XHJcbn07XHJcblxyXG5jb25zdCBjYWxpYnJhdGlvbiA9IChldmVudE5hbWUsIG9wdGlvbnMpID0+IHtcclxuICAvLyAgbG9naW4g44CBIHNoYXJlIOOAgXBheV9zdWNjZXNzIOOAgXBheV9mYWlsIOOAgXJlZ2lzdGVyIOOAgXRpdGxlXHJcbiAgaWYoIWV2ZW50TmFtZSl7XHJcbiAgICBjb25zb2xlLmVycm9yKGB1bmkucmVwb3J0IOe8uuWwkSBbZXZlbnROYW1lXSDlj4LmlbBgKTtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG4gIGlmICh0eXBlb2YgZXZlbnROYW1lICE9PSAnc3RyaW5nJykge1xyXG4gICAgY29uc29sZS5lcnJvcihgdW5pLnJlcG9ydCBbZXZlbnROYW1lXSDlj4LmlbDnsbvlnovplJnor68s5Y+q6IO95Li6IFN0cmluZyDnsbvlnotgKTtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG4gIGlmIChldmVudE5hbWUubGVuZ3RoID4gMjU1KSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGB1bmkucmVwb3J0IFtldmVudE5hbWVdIOWPguaVsOmVv+W6puS4jeiDveWkp+S6jiAyNTVgKTtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG5cclxuICBpZiAodHlwZW9mIG9wdGlvbnMgIT09ICdzdHJpbmcnICYmIHR5cGVvZiBvcHRpb25zICE9PSAnb2JqZWN0Jykge1xyXG4gICAgY29uc29sZS5lcnJvcihgdW5pLnJlcG9ydCBbb3B0aW9uc10g5Y+C5pWw57G75Z6L6ZSZ6K+vLOWPquiDveS4uiBTdHJpbmcg5oiWIE9iamVjdCDnsbvlnotgKTtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG5cclxuICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdzdHJpbmcnICYmIG9wdGlvbnMubGVuZ3RoID4gMjU1KSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGB1bmkucmVwb3J0IFtvcHRpb25zXSDlj4LmlbDplb/luqbkuI3og73lpKfkuo4gMjU1YCk7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxuXHJcbiAgaWYgKGV2ZW50TmFtZSA9PT0gJ3RpdGxlJyAmJiB0eXBlb2Ygb3B0aW9ucyAhPT0gJ3N0cmluZycpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ3VuaS5yZXBvcnQgW2V2ZW50TmFtZV0g5Y+C5pWw5Li6IHRpdGxlIOaXtu+8jFtvcHRpb25zXSDlj4LmlbDlj6rog73kuLogU3RyaW5nIOexu+WeiycpO1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBQYWdlc0pzb24gPSByZXF1aXJlKCd1bmktcGFnZXM/e1widHlwZVwiOlwic3R5bGVcIn0nKS5kZWZhdWx0O1xyXG5jb25zdCBzdGF0Q29uZmlnID0gcmVxdWlyZSgndW5pLXN0YXQtY29uZmlnJykuZGVmYXVsdCB8fCByZXF1aXJlKCd1bmktc3RhdC1jb25maWcnKTtcclxuXHJcbmNvbnN0IHJlc3VsdE9wdGlvbnMgPSB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKTtcclxuXHJcbmNsYXNzIFV0aWwge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5zZWxmID0gJyc7XHJcbiAgICB0aGlzLl9yZXRyeSA9IDA7XHJcbiAgICB0aGlzLl9wbGF0Zm9ybSA9ICcnO1xyXG4gICAgdGhpcy5fcXVlcnkgPSB7fTtcclxuICAgIHRoaXMuX25hdmlnYXRpb25CYXJUaXRsZSA9IHtcclxuICAgICAgY29uZmlnOiAnJyxcclxuICAgICAgcGFnZTogJycsXHJcbiAgICAgIHJlcG9ydDogJycsXHJcbiAgICAgIGx0OiAnJ1xyXG4gICAgfTtcclxuICAgIHRoaXMuX29wZXJhdGluZ1RpbWUgPSAwO1xyXG4gICAgdGhpcy5fcmVwb3J0aW5nUmVxdWVzdERhdGEgPSB7XHJcbiAgICAgICcxJzogW10sXHJcbiAgICAgICcxMSc6IFtdXHJcbiAgICB9O1xyXG4gICAgdGhpcy5fX3ByZXZlbnRfdHJpZ2dlcmluZyA9IGZhbHNlO1xyXG5cclxuICAgIHRoaXMuX19saWNhdGlvbkhpZGUgPSBmYWxzZTtcclxuICAgIHRoaXMuX19saWNhdGlvblNob3cgPSBmYWxzZTtcclxuICAgIHRoaXMuX2xhc3RQYWdlUm91dGUgPSAnJztcclxuICAgIHRoaXMuc3RhdERhdGEgPSB7XHJcbiAgICAgIHV1aWQ6IGdldFV1aWQoKSxcclxuICAgICAgdXQ6IGdldFBsYXRmb3JtTmFtZSgpLFxyXG4gICAgICBtcG46IGdldFBhY2tOYW1lKCksXHJcbiAgICAgIGFrOiBzdGF0Q29uZmlnLmFwcGlkLFxyXG4gICAgICB1c3Y6IFNUQVRfVkVSU0lPTixcclxuICAgICAgdjogZ2V0VmVyc2lvbigpLFxyXG4gICAgICBjaDogZ2V0Q2hhbm5lbCgpLFxyXG4gICAgICBjbjogJycsXHJcbiAgICAgIHBuOiAnJyxcclxuICAgICAgY3Q6ICcnLFxyXG4gICAgICB0OiBnZXRUaW1lKCksXHJcbiAgICAgIHR0OiAnJyxcclxuICAgICAgcDogcmVzdWx0T3B0aW9ucy5wbGF0Zm9ybSA9PT0gJ2FuZHJvaWQnID8gJ2EnIDogJ2knLFxyXG4gICAgICBicmFuZDogcmVzdWx0T3B0aW9ucy5icmFuZCB8fCAnJyxcclxuICAgICAgbWQ6IHJlc3VsdE9wdGlvbnMubW9kZWwsXHJcbiAgICAgIHN2OiByZXN1bHRPcHRpb25zLnN5c3RlbS5yZXBsYWNlKC8oQW5kcm9pZHxpT1MpXFxzLywgJycpLFxyXG4gICAgICBtcHNkazogcmVzdWx0T3B0aW9ucy5TREtWZXJzaW9uIHx8ICcnLFxyXG4gICAgICBtcHY6IHJlc3VsdE9wdGlvbnMudmVyc2lvbiB8fCAnJyxcclxuICAgICAgbGFuZzogcmVzdWx0T3B0aW9ucy5sYW5ndWFnZSxcclxuICAgICAgcHI6IHJlc3VsdE9wdGlvbnMucGl4ZWxSYXRpbyxcclxuICAgICAgd3c6IHJlc3VsdE9wdGlvbnMud2luZG93V2lkdGgsXHJcbiAgICAgIHdoOiByZXN1bHRPcHRpb25zLndpbmRvd0hlaWdodCxcclxuICAgICAgc3c6IHJlc3VsdE9wdGlvbnMuc2NyZWVuV2lkdGgsXHJcbiAgICAgIHNoOiByZXN1bHRPcHRpb25zLnNjcmVlbkhlaWdodFxyXG4gICAgfTtcclxuXHJcbiAgfVxyXG5cclxuICBfYXBwbGljYXRpb25TaG93KCkge1xyXG4gICAgaWYgKHRoaXMuX19saWNhdGlvbkhpZGUpIHtcclxuICAgICAgZ2V0TGFzdFRpbWUoKTtcclxuICAgICAgY29uc3QgdGltZSA9IGdldFJlc2lkZW5jZVRpbWUoJ2FwcCcpO1xyXG4gICAgICBpZiAodGltZS5vdmVydGltZSkge1xyXG4gICAgICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgcGF0aDogdGhpcy5fbGFzdFBhZ2VSb3V0ZSxcclxuICAgICAgICAgIHNjZW5lOiB0aGlzLnN0YXREYXRhLnNjXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLl9zZW5kUmVwb3J0UmVxdWVzdChvcHRpb25zKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLl9fbGljYXRpb25IaWRlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfYXBwbGljYXRpb25IaWRlKHNlbGYsIHR5cGUpIHtcclxuXHJcbiAgICB0aGlzLl9fbGljYXRpb25IaWRlID0gdHJ1ZTtcclxuICAgIGdldExhc3RUaW1lKCk7XHJcbiAgICBjb25zdCB0aW1lID0gZ2V0UmVzaWRlbmNlVGltZSgpO1xyXG4gICAgZ2V0Rmlyc3RUaW1lKCk7XHJcbiAgICBjb25zdCByb3V0ZSA9IGdldFBhZ2VSb3V0ZSh0aGlzKTtcclxuICAgIHRoaXMuX3NlbmRIaWRlUmVxdWVzdCh7XHJcbiAgICAgIHVybHJlZjogcm91dGUsXHJcbiAgICAgIHVybHJlZl90czogdGltZS5yZXNpZGVuY2VUaW1lXHJcbiAgICB9LCB0eXBlKTtcclxuICB9XHJcblxyXG4gIF9wYWdlU2hvdygpIHtcclxuICAgIGNvbnN0IHJvdXRlID0gZ2V0UGFnZVJvdXRlKHRoaXMpO1xyXG4gICAgY29uc3Qgcm91dGVwYXRoID0gZ2V0Um91dGUoKTtcclxuICAgIHRoaXMuX25hdmlnYXRpb25CYXJUaXRsZS5jb25maWcgPSBQYWdlc0pzb24gJiZcclxuICAgICAgUGFnZXNKc29uLnBhZ2VzW3JvdXRlcGF0aF0gJiZcclxuICAgICAgUGFnZXNKc29uLnBhZ2VzW3JvdXRlcGF0aF0udGl0bGVOVmlldyAmJlxyXG4gICAgICBQYWdlc0pzb24ucGFnZXNbcm91dGVwYXRoXS50aXRsZU5WaWV3LnRpdGxlVGV4dCB8fFxyXG4gICAgICBQYWdlc0pzb24gJiZcclxuICAgICAgUGFnZXNKc29uLnBhZ2VzW3JvdXRlcGF0aF0gJiZcclxuICAgICAgUGFnZXNKc29uLnBhZ2VzW3JvdXRlcGF0aF0ubmF2aWdhdGlvbkJhclRpdGxlVGV4dCB8fCAnJztcclxuXHJcbiAgICBpZiAodGhpcy5fX2xpY2F0aW9uU2hvdykge1xyXG4gICAgICBnZXRGaXJzdFRpbWUoKTtcclxuICAgICAgdGhpcy5fX2xpY2F0aW9uU2hvdyA9IGZhbHNlO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZygn6L+Z5pivIG9uTGF1Y2gg5LmL5ZCO5omn6KGM55qE56ys5LiA5qyhIHBhZ2VTaG93IO+8jOS4uuS4i+asoeiusOW9leaXtumXtOWBmuWHhuWkhycpO1xyXG4gICAgICB0aGlzLl9sYXN0UGFnZVJvdXRlID0gcm91dGU7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRMYXN0VGltZSgpO1xyXG4gICAgdGhpcy5fbGFzdFBhZ2VSb3V0ZSA9IHJvdXRlO1xyXG4gICAgY29uc3QgdGltZSA9IGdldFJlc2lkZW5jZVRpbWUoJ3BhZ2UnKTtcclxuICAgIGlmICh0aW1lLm92ZXJ0aW1lKSB7XHJcbiAgICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICAgIHBhdGg6IHRoaXMuX2xhc3RQYWdlUm91dGUsXHJcbiAgICAgICAgc2NlbmU6IHRoaXMuc3RhdERhdGEuc2NcclxuICAgICAgfTtcclxuICAgICAgdGhpcy5fc2VuZFJlcG9ydFJlcXVlc3Qob3B0aW9ucyk7XHJcbiAgICB9XHJcbiAgICBnZXRGaXJzdFRpbWUoKTtcclxuICB9XHJcblxyXG4gIF9wYWdlSGlkZSgpIHtcclxuICAgIGlmICghdGhpcy5fX2xpY2F0aW9uSGlkZSkge1xyXG4gICAgICBnZXRMYXN0VGltZSgpO1xyXG4gICAgICBjb25zdCB0aW1lID0gZ2V0UmVzaWRlbmNlVGltZSgncGFnZScpO1xyXG4gICAgICB0aGlzLl9zZW5kUGFnZVJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogdGhpcy5fbGFzdFBhZ2VSb3V0ZSxcclxuICAgICAgICB1cmxyZWY6IHRoaXMuX2xhc3RQYWdlUm91dGUsXHJcbiAgICAgICAgdXJscmVmX3RzOiB0aW1lLnJlc2lkZW5jZVRpbWVcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuX25hdmlnYXRpb25CYXJUaXRsZSA9IHtcclxuICAgICAgICBjb25maWc6ICcnLFxyXG4gICAgICAgIHBhZ2U6ICcnLFxyXG4gICAgICAgIHJlcG9ydDogJycsXHJcbiAgICAgICAgbHQ6ICcnXHJcbiAgICAgIH07XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9sb2dpbigpIHtcclxuICAgIHRoaXMuX3NlbmRFdmVudFJlcXVlc3Qoe1xyXG4gICAgICBrZXk6ICdsb2dpbidcclxuICAgIH0sIDApO1xyXG4gIH1cclxuXHJcbiAgX3NoYXJlKCkge1xyXG4gICAgdGhpcy5fc2VuZEV2ZW50UmVxdWVzdCh7XHJcbiAgICAgIGtleTogJ3NoYXJlJ1xyXG4gICAgfSwgMCk7XHJcbiAgfVxyXG4gIF9wYXltZW50KGtleSkge1xyXG4gICAgdGhpcy5fc2VuZEV2ZW50UmVxdWVzdCh7XHJcbiAgICAgIGtleVxyXG4gICAgfSwgMCk7XHJcbiAgfVxyXG4gIF9zZW5kUmVwb3J0UmVxdWVzdChvcHRpb25zKSB7XHJcblxyXG4gICAgdGhpcy5fbmF2aWdhdGlvbkJhclRpdGxlLmx0ID0gJzEnO1xyXG4gICAgbGV0IHF1ZXJ5ID0gb3B0aW9ucy5xdWVyeSAmJiBKU09OLnN0cmluZ2lmeShvcHRpb25zLnF1ZXJ5KSAhPT0gJ3t9JyA/ICc/JyArIEpTT04uc3RyaW5naWZ5KG9wdGlvbnMucXVlcnkpIDogJyc7XHJcbiAgICB0aGlzLnN0YXREYXRhLmx0ID0gJzEnO1xyXG4gICAgdGhpcy5zdGF0RGF0YS51cmwgPSAob3B0aW9ucy5wYXRoICsgcXVlcnkpIHx8ICcnO1xyXG4gICAgdGhpcy5zdGF0RGF0YS50ID0gZ2V0VGltZSgpO1xyXG4gICAgdGhpcy5zdGF0RGF0YS5zYyA9IGdldFNjZW5lKG9wdGlvbnMuc2NlbmUpO1xyXG4gICAgdGhpcy5zdGF0RGF0YS5mdnRzID0gZ2V0Rmlyc3RWaXNpdFRpbWUoKTtcclxuICAgIHRoaXMuc3RhdERhdGEubHZ0cyA9IGdldExhc3RWaXNpdFRpbWUoKTtcclxuICAgIHRoaXMuc3RhdERhdGEudHZjID0gZ2V0VG90YWxWaXNpdENvdW50KCk7XHJcbiAgICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xyXG4gICAgICB0aGlzLmdldFByb3BlcnR5KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmdldE5ldHdvcmtJbmZvKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBfc2VuZFBhZ2VSZXF1ZXN0KG9wdCkge1xyXG4gICAgbGV0IHtcclxuICAgICAgdXJsLFxyXG4gICAgICB1cmxyZWYsXHJcbiAgICAgIHVybHJlZl90c1xyXG4gICAgfSA9IG9wdDtcclxuICAgIHRoaXMuX25hdmlnYXRpb25CYXJUaXRsZS5sdCA9ICcxMSc7XHJcbiAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgYWs6IHRoaXMuc3RhdERhdGEuYWssXHJcbiAgICAgIHV1aWQ6IHRoaXMuc3RhdERhdGEudXVpZCxcclxuICAgICAgbHQ6ICcxMScsXHJcbiAgICAgIHV0OiB0aGlzLnN0YXREYXRhLnV0LFxyXG4gICAgICB1cmwsXHJcbiAgICAgIHR0OiB0aGlzLnN0YXREYXRhLnR0LFxyXG4gICAgICB1cmxyZWYsXHJcbiAgICAgIHVybHJlZl90cyxcclxuICAgICAgY2g6IHRoaXMuc3RhdERhdGEuY2gsXHJcbiAgICAgIHVzdjogdGhpcy5zdGF0RGF0YS51c3YsXHJcbiAgICAgIHQ6IGdldFRpbWUoKSxcclxuICAgICAgcDogdGhpcy5zdGF0RGF0YS5wXHJcbiAgICB9O1xyXG4gICAgdGhpcy5yZXF1ZXN0KG9wdGlvbnMpO1xyXG4gIH1cclxuXHJcbiAgX3NlbmRIaWRlUmVxdWVzdChvcHQsIHR5cGUpIHtcclxuICAgIGxldCB7XHJcbiAgICAgIHVybHJlZixcclxuICAgICAgdXJscmVmX3RzXHJcbiAgICB9ID0gb3B0O1xyXG4gICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgIGFrOiB0aGlzLnN0YXREYXRhLmFrLFxyXG4gICAgICB1dWlkOiB0aGlzLnN0YXREYXRhLnV1aWQsXHJcbiAgICAgIGx0OiAnMycsXHJcbiAgICAgIHV0OiB0aGlzLnN0YXREYXRhLnV0LFxyXG4gICAgICB1cmxyZWYsXHJcbiAgICAgIHVybHJlZl90cyxcclxuICAgICAgY2g6IHRoaXMuc3RhdERhdGEuY2gsXHJcbiAgICAgIHVzdjogdGhpcy5zdGF0RGF0YS51c3YsXHJcbiAgICAgIHQ6IGdldFRpbWUoKSxcclxuICAgICAgcDogdGhpcy5zdGF0RGF0YS5wXHJcbiAgICB9O1xyXG4gICAgdGhpcy5yZXF1ZXN0KG9wdGlvbnMsIHR5cGUpO1xyXG4gIH1cclxuICBfc2VuZEV2ZW50UmVxdWVzdCh7XHJcbiAgICBrZXkgPSAnJyxcclxuICAgIHZhbHVlID0gXCJcIlxyXG4gIH0gPSB7fSkge1xyXG4gICAgY29uc3Qgcm91dGUgPSB0aGlzLl9sYXN0UGFnZVJvdXRlO1xyXG4gICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgIGFrOiB0aGlzLnN0YXREYXRhLmFrLFxyXG4gICAgICB1dWlkOiB0aGlzLnN0YXREYXRhLnV1aWQsXHJcbiAgICAgIGx0OiAnMjEnLFxyXG4gICAgICB1dDogdGhpcy5zdGF0RGF0YS51dCxcclxuICAgICAgdXJsOiByb3V0ZSxcclxuICAgICAgY2g6IHRoaXMuc3RhdERhdGEuY2gsXHJcbiAgICAgIGVfbjoga2V5LFxyXG4gICAgICBlX3Y6IHR5cGVvZih2YWx1ZSkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkodmFsdWUpIDogdmFsdWUudG9TdHJpbmcoKSxcclxuICAgICAgdXN2OiB0aGlzLnN0YXREYXRhLnVzdixcclxuICAgICAgdDogZ2V0VGltZSgpLFxyXG4gICAgICBwOiB0aGlzLnN0YXREYXRhLnBcclxuICAgIH07XHJcbiAgICB0aGlzLnJlcXVlc3Qob3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBnZXROZXR3b3JrSW5mbygpIHtcclxuICAgIHVuaS5nZXROZXR3b3JrVHlwZSh7XHJcbiAgICAgIHN1Y2Nlc3M6IChyZXN1bHQpID0+IHtcclxuICAgICAgICB0aGlzLnN0YXREYXRhLm5ldCA9IHJlc3VsdC5uZXR3b3JrVHlwZTtcclxuICAgICAgICB0aGlzLmdldExvY2F0aW9uKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0UHJvcGVydHkoKSB7XHJcbiAgICBwbHVzLnJ1bnRpbWUuZ2V0UHJvcGVydHkocGx1cy5ydW50aW1lLmFwcGlkLCAod2d0aW5mbykgPT4ge1xyXG4gICAgICB0aGlzLnN0YXREYXRhLnYgPSB3Z3RpbmZvLnZlcnNpb24gfHwgJyc7XHJcbiAgICAgIHRoaXMuZ2V0TmV0d29ya0luZm8oKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0TG9jYXRpb24oKSB7XHJcbiAgICBpZiAoc3RhdENvbmZpZy5nZXRMb2NhdGlvbikge1xyXG4gICAgICB1bmkuZ2V0TG9jYXRpb24oe1xyXG4gICAgICAgIHR5cGU6ICd3Z3M4NCcsXHJcbiAgICAgICAgZ2VvY29kZTogdHJ1ZSxcclxuICAgICAgICBzdWNjZXNzOiAocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICBpZiAocmVzdWx0LmFkZHJlc3MpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGF0RGF0YS5jbiA9IHJlc3VsdC5hZGRyZXNzLmNvdW50cnk7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhdERhdGEucG4gPSByZXN1bHQuYWRkcmVzcy5wcm92aW5jZTtcclxuICAgICAgICAgICAgdGhpcy5zdGF0RGF0YS5jdCA9IHJlc3VsdC5hZGRyZXNzLmNpdHk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdGhpcy5zdGF0RGF0YS5sYXQgPSByZXN1bHQubGF0aXR1ZGU7XHJcbiAgICAgICAgICB0aGlzLnN0YXREYXRhLmxuZyA9IHJlc3VsdC5sb25naXR1ZGU7XHJcbiAgICAgICAgICB0aGlzLnJlcXVlc3QodGhpcy5zdGF0RGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc3RhdERhdGEubGF0ID0gMDtcclxuICAgICAgdGhpcy5zdGF0RGF0YS5sbmcgPSAwO1xyXG4gICAgICB0aGlzLnJlcXVlc3QodGhpcy5zdGF0RGF0YSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXF1ZXN0KGRhdGEsIHR5cGUpIHtcclxuICAgIGxldCB0aW1lID0gZ2V0VGltZSgpO1xyXG4gICAgY29uc3QgdGl0bGUgPSB0aGlzLl9uYXZpZ2F0aW9uQmFyVGl0bGU7XHJcbiAgICBkYXRhLnR0biA9IHRpdGxlLnBhZ2U7XHJcbiAgICBkYXRhLnR0cGogPSB0aXRsZS5jb25maWc7XHJcbiAgICBkYXRhLnR0YyA9IHRpdGxlLnJlcG9ydDtcclxuXHJcbiAgICBsZXQgcmVxdWVzdERhdGEgPSB0aGlzLl9yZXBvcnRpbmdSZXF1ZXN0RGF0YTtcclxuICAgIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICAgIHJlcXVlc3REYXRhID0gdW5pLmdldFN0b3JhZ2VTeW5jKCdfX1VOSV9fU1RBVF9fREFUQScpIHx8IHt9O1xyXG4gICAgfVxyXG4gICAgaWYgKCFyZXF1ZXN0RGF0YVtkYXRhLmx0XSkge1xyXG4gICAgICByZXF1ZXN0RGF0YVtkYXRhLmx0XSA9IFtdO1xyXG4gICAgfVxyXG4gICAgcmVxdWVzdERhdGFbZGF0YS5sdF0ucHVzaChkYXRhKTtcclxuXHJcbiAgICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xyXG4gICAgICB1bmkuc2V0U3RvcmFnZVN5bmMoJ19fVU5JX19TVEFUX19EQVRBJywgcmVxdWVzdERhdGEpO1xyXG4gICAgfVxyXG4gICAgaWYgKGdldFBhZ2VSZXNpZGVuY2VUaW1lKCkgPCBPUEVSQVRJTkdfVElNRSAmJiAhdHlwZSkge1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGxldCB1bmlTdGF0RGF0YSA9IHRoaXMuX3JlcG9ydGluZ1JlcXVlc3REYXRhO1xyXG4gICAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicpIHtcclxuICAgICAgdW5pU3RhdERhdGEgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoJ19fVU5JX19TVEFUX19EQVRBJyk7XHJcbiAgICB9XHJcbiAgICAvLyDml7bpl7TotoXov4fvvIzph43mlrDojrflj5bml7bpl7TmiLNcclxuICAgIHNldFBhZ2VSZXNpZGVuY2VUaW1lKCk7XHJcbiAgICBsZXQgZmlyc3RBcnIgPSBbXTtcclxuICAgIGxldCBjb250ZW50QXJyID0gW107XHJcbiAgICBsZXQgbGFzdEFyciA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGkgaW4gdW5pU3RhdERhdGEpIHtcclxuICAgICAgY29uc3QgcmQgPSB1bmlTdGF0RGF0YVtpXTtcclxuICAgICAgcmQuZm9yRWFjaCgoZWxtKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmV3RGF0YSA9IGdldFNwbGljaW5nKGVsbSk7XHJcbiAgICAgICAgaWYgKGkgPT09IDApIHtcclxuICAgICAgICAgIGZpcnN0QXJyLnB1c2gobmV3RGF0YSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpID09PSAzKSB7XHJcbiAgICAgICAgICBsYXN0QXJyLnB1c2gobmV3RGF0YSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnRlbnRBcnIucHVzaChuZXdEYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZpcnN0QXJyLnB1c2goLi4uY29udGVudEFyciwgLi4ubGFzdEFycik7XHJcbiAgICBsZXQgb3B0aW9uc0RhdGEgPSB7XHJcbiAgICAgIHVzdjogU1RBVF9WRVJTSU9OLCAvL+e7n+iuoSBTREsg54mI5pys5Y+3XHJcbiAgICAgIHQ6IHRpbWUsIC8v5Y+R6YCB6K+35rGC5pe255qE5pe26Ze05oiuXHJcbiAgICAgIHJlcXVlc3RzOiBKU09OLnN0cmluZ2lmeShmaXJzdEFyciksXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuX3JlcG9ydGluZ1JlcXVlc3REYXRhID0ge307XHJcbiAgICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xyXG4gICAgICB1bmkucmVtb3ZlU3RvcmFnZVN5bmMoJ19fVU5JX19TVEFUX19EQVRBJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRhdGEudXQgPT09ICdoNScpIHtcclxuICAgICAgdGhpcy5pbWFnZVJlcXVlc3Qob3B0aW9uc0RhdGEpO1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJyAmJiB0aGlzLnN0YXREYXRhLnAgPT09ICdhJykge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLl9zZW5kUmVxdWVzdChvcHRpb25zRGF0YSk7XHJcbiAgICAgIH0sIDIwMCk7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgdGhpcy5fc2VuZFJlcXVlc3Qob3B0aW9uc0RhdGEpO1xyXG4gIH1cclxuICBfc2VuZFJlcXVlc3Qob3B0aW9uc0RhdGEpIHtcclxuICAgIHVuaS5yZXF1ZXN0KHtcclxuICAgICAgdXJsOiBTVEFUX1VSTCxcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIC8vIGhlYWRlcjoge1xyXG4gICAgICAvLyAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgLy8g6buY6K6k5YC8XHJcbiAgICAgIC8vIH0sXHJcbiAgICAgIGRhdGE6IG9wdGlvbnNEYXRhLFxyXG4gICAgICBzdWNjZXNzOiAoKSA9PiB7XHJcbiAgICAgICAgLy8gaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XHJcbiAgICAgICAgLy8gICBjb25zb2xlLmxvZygnc3RhdCByZXF1ZXN0IHN1Y2Nlc3MnKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWw6IChlKSA9PiB7XHJcbiAgICAgICAgaWYgKCsrdGhpcy5fcmV0cnkgPCAzKSB7XHJcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fc2VuZFJlcXVlc3Qob3B0aW9uc0RhdGEpO1xyXG4gICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogaDUg6K+35rGCXHJcbiAgICovXHJcbiAgaW1hZ2VSZXF1ZXN0KGRhdGEpIHtcclxuICAgIGxldCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgbGV0IG9wdGlvbnMgPSBnZXRTZ2luKEdldEVuY29kZVVSSUNvbXBvbmVudE9wdGlvbnMoZGF0YSkpLm9wdGlvbnM7XHJcbiAgICBpbWFnZS5zcmMgPSBTVEFUX0g1X1VSTCArICc/JyArIG9wdGlvbnM7XHJcbiAgfVxyXG5cclxuICBzZW5kRXZlbnQoa2V5LCB2YWx1ZSkge1xyXG4gICAgLy8g5qCh6aqMIHR5cGUg5Y+C5pWwXHJcbiAgICBpZiAoY2FsaWJyYXRpb24oa2V5LCB2YWx1ZSkpIHJldHVyblxyXG5cclxuICAgIGlmIChrZXkgPT09ICd0aXRsZScpIHtcclxuICAgICAgdGhpcy5fbmF2aWdhdGlvbkJhclRpdGxlLnJlcG9ydCA9IHZhbHVlO1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIHRoaXMuX3NlbmRFdmVudFJlcXVlc3Qoe1xyXG4gICAgICBrZXksXHJcbiAgICAgIHZhbHVlOiB0eXBlb2YodmFsdWUpID09PSAnb2JqZWN0JyA/IEpTT04uc3RyaW5naWZ5KHZhbHVlKSA6IHZhbHVlXHJcbiAgICB9LCAxKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5jbGFzcyBTdGF0IGV4dGVuZHMgVXRpbCB7XHJcbiAgc3RhdGljIGdldEluc3RhbmNlKCkge1xyXG4gICAgaWYgKCF0aGlzLmluc3RhbmNlKSB7XHJcbiAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgU3RhdCgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XHJcbiAgfVxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuaW5zdGFuY2UgPSBudWxsO1xyXG4gICAgLy8g5rOo5YaM5oum5oiq5ZmoXHJcbiAgICBpZiAodHlwZW9mIHVuaS5hZGRJbnRlcmNlcHRvciA9PT0gJ2Z1bmN0aW9uJyAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ2RldmVsb3BtZW50Jykge1xyXG4gICAgICB0aGlzLmFkZEludGVyY2VwdG9ySW5pdCgpO1xyXG4gICAgICB0aGlzLmludGVyY2VwdExvZ2luKCk7XHJcbiAgICAgIHRoaXMuaW50ZXJjZXB0U2hhcmUodHJ1ZSk7XHJcbiAgICAgIHRoaXMuaW50ZXJjZXB0UmVxdWVzdFBheW1lbnQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFkZEludGVyY2VwdG9ySW5pdCgpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIHVuaS5hZGRJbnRlcmNlcHRvcignc2V0TmF2aWdhdGlvbkJhclRpdGxlJywge1xyXG4gICAgICBpbnZva2UoYXJncykge1xyXG4gICAgICAgIHNlbGYuX25hdmlnYXRpb25CYXJUaXRsZS5wYWdlID0gYXJncy50aXRsZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpbnRlcmNlcHRMb2dpbigpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIHVuaS5hZGRJbnRlcmNlcHRvcignbG9naW4nLCB7XHJcbiAgICAgIGNvbXBsZXRlKCkge1xyXG4gICAgICAgIHNlbGYuX2xvZ2luKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaW50ZXJjZXB0U2hhcmUodHlwZSkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgaWYgKCF0eXBlKSB7XHJcbiAgICAgIHNlbGYuX3NoYXJlKCk7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgdW5pLmFkZEludGVyY2VwdG9yKCdzaGFyZScsIHtcclxuICAgICAgc3VjY2VzcygpIHtcclxuICAgICAgICBzZWxmLl9zaGFyZSgpO1xyXG4gICAgICB9LFxyXG4gICAgICBmYWlsKCkge1xyXG4gICAgICAgIHNlbGYuX3NoYXJlKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaW50ZXJjZXB0UmVxdWVzdFBheW1lbnQoKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICB1bmkuYWRkSW50ZXJjZXB0b3IoJ3JlcXVlc3RQYXltZW50Jywge1xyXG4gICAgICBzdWNjZXNzKCkge1xyXG4gICAgICAgIHNlbGYuX3BheW1lbnQoJ3BheV9zdWNjZXNzJyk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWwoKSB7XHJcbiAgICAgICAgc2VsZi5fcGF5bWVudCgncGF5X2ZhaWwnKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZXBvcnQob3B0aW9ucywgc2VsZikge1xyXG4gICAgdGhpcy5zZWxmID0gc2VsZjtcclxuICAgIC8vIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xyXG4gICAgLy8gICBjb25zb2xlLmxvZygncmVwb3J0IGluaXQnKTtcclxuICAgIC8vIH1cclxuICAgIHNldFBhZ2VSZXNpZGVuY2VUaW1lKCk7XHJcbiAgICB0aGlzLl9fbGljYXRpb25TaG93ID0gdHJ1ZTtcclxuICAgIHRoaXMuX3NlbmRSZXBvcnRSZXF1ZXN0KG9wdGlvbnMsIHRydWUpO1xyXG4gIH1cclxuXHJcbiAgbG9hZChvcHRpb25zLCBzZWxmKSB7XHJcbiAgICBpZiAoIXNlbGYuJHNjb3BlICYmICFzZWxmLiRtcCkge1xyXG4gICAgICBjb25zdCBwYWdlID0gZ2V0Q3VycmVudFBhZ2VzKCk7XHJcbiAgICAgIHNlbGYuJHNjb3BlID0gcGFnZVtwYWdlLmxlbmd0aCAtIDFdO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZWxmID0gc2VsZjtcclxuICAgIHRoaXMuX3F1ZXJ5ID0gb3B0aW9ucztcclxuICB9XHJcblxyXG4gIHNob3coc2VsZikge1xyXG4gICAgdGhpcy5zZWxmID0gc2VsZjtcclxuICAgIGlmIChnZXRQYWdlVHlwZXMoc2VsZikpIHtcclxuICAgICAgdGhpcy5fcGFnZVNob3coc2VsZik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9hcHBsaWNhdGlvblNob3coc2VsZik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZWFkeShzZWxmKSB7XHJcbiAgICAvLyB0aGlzLnNlbGYgPSBzZWxmO1xyXG4gICAgLy8gaWYgKGdldFBhZ2VUeXBlcyhzZWxmKSkge1xyXG4gICAgLy8gICB0aGlzLl9wYWdlU2hvdyhzZWxmKTtcclxuICAgIC8vIH1cclxuICB9XHJcbiAgaGlkZShzZWxmKSB7XHJcbiAgICB0aGlzLnNlbGYgPSBzZWxmO1xyXG4gICAgaWYgKGdldFBhZ2VUeXBlcyhzZWxmKSkge1xyXG4gICAgICB0aGlzLl9wYWdlSGlkZShzZWxmKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2FwcGxpY2F0aW9uSGlkZShzZWxmLCB0cnVlKTtcclxuICAgIH1cclxuICB9XHJcbiAgZXJyb3IoZW0pIHtcclxuICAgIGlmICh0aGlzLl9wbGF0Zm9ybSA9PT0gJ2RldnRvb2xzJykge1xyXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcclxuICAgICAgICBjb25zb2xlLmluZm8oJ+W9k+WJjei/kOihjOeOr+Wig+S4uuW8gOWPkeiAheW3peWFt++8jOS4jeS4iuaKpeaVsOaNruOAgicpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCBlbVZhbCA9ICcnO1xyXG4gICAgaWYgKCFlbS5tZXNzYWdlKSB7XHJcbiAgICAgIGVtVmFsID0gSlNPTi5zdHJpbmdpZnkoZW0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZW1WYWwgPSBlbS5zdGFjaztcclxuICAgIH1cclxuICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICBhazogdGhpcy5zdGF0RGF0YS5hayxcclxuICAgICAgdXVpZDogdGhpcy5zdGF0RGF0YS51dWlkLFxyXG4gICAgICBsdDogJzMxJyxcclxuICAgICAgdXQ6IHRoaXMuc3RhdERhdGEudXQsXHJcbiAgICAgIGNoOiB0aGlzLnN0YXREYXRhLmNoLFxyXG4gICAgICBtcHNkazogdGhpcy5zdGF0RGF0YS5tcHNkayxcclxuICAgICAgbXB2OiB0aGlzLnN0YXREYXRhLm1wdixcclxuICAgICAgdjogdGhpcy5zdGF0RGF0YS52LFxyXG4gICAgICBlbTogZW1WYWwsXHJcbiAgICAgIHVzdjogdGhpcy5zdGF0RGF0YS51c3YsXHJcbiAgICAgIHQ6IGdldFRpbWUoKSxcclxuICAgICAgcDogdGhpcy5zdGF0RGF0YS5wXHJcbiAgICB9O1xyXG4gICAgdGhpcy5yZXF1ZXN0KG9wdGlvbnMpO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3Qgc3RhdCA9IFN0YXQuZ2V0SW5zdGFuY2UoKTtcclxubGV0IGlzSGlkZSA9IGZhbHNlO1xyXG5jb25zdCBsaWZlY3ljbGUgPSB7XHJcbiAgb25MYXVuY2gob3B0aW9ucykge1xyXG4gICAgc3RhdC5yZXBvcnQob3B0aW9ucywgdGhpcyk7XHJcbiAgfSxcclxuICBvblJlYWR5KCkge1xyXG4gICAgc3RhdC5yZWFkeSh0aGlzKTtcclxuICB9LFxyXG4gIG9uTG9hZChvcHRpb25zKSB7XHJcbiAgICBzdGF0LmxvYWQob3B0aW9ucywgdGhpcyk7XHJcbiAgICAvLyDph43lhpnliIbkuqvvvIzojrflj5bliIbkuqvkuIrmiqXkuovku7ZcclxuICAgIGlmICh0aGlzLiRzY29wZSAmJiB0aGlzLiRzY29wZS5vblNoYXJlQXBwTWVzc2FnZSkge1xyXG4gICAgICBsZXQgb2xkU2hhcmVBcHBNZXNzYWdlID0gdGhpcy4kc2NvcGUub25TaGFyZUFwcE1lc3NhZ2U7XHJcbiAgICAgIHRoaXMuJHNjb3BlLm9uU2hhcmVBcHBNZXNzYWdlID0gZnVuY3Rpb24ob3B0aW9ucykge1xyXG4gICAgICAgIHN0YXQuaW50ZXJjZXB0U2hhcmUoZmFsc2UpO1xyXG4gICAgICAgIHJldHVybiBvbGRTaGFyZUFwcE1lc3NhZ2UuY2FsbCh0aGlzLCBvcHRpb25zKVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgb25TaG93KCkge1xyXG4gICAgaXNIaWRlID0gZmFsc2U7XHJcbiAgICBzdGF0LnNob3codGhpcyk7XHJcbiAgfSxcclxuICBvbkhpZGUoKSB7XHJcbiAgICBpc0hpZGUgPSB0cnVlO1xyXG4gICAgc3RhdC5oaWRlKHRoaXMpO1xyXG4gIH0sXHJcbiAgb25VbmxvYWQoKSB7XHJcbiAgICBpZiAoaXNIaWRlKSB7XHJcbiAgICAgIGlzSGlkZSA9IGZhbHNlO1xyXG4gICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIHN0YXQuaGlkZSh0aGlzKTtcclxuICB9LFxyXG4gIG9uRXJyb3IoZSkge1xyXG4gICAgc3RhdC5lcnJvcihlKTtcclxuICB9XHJcbn07XHJcblxyXG5mdW5jdGlvbiBtYWluKCkge1xyXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xyXG4gICAgdW5pLnJlcG9ydCA9IGZ1bmN0aW9uKHR5cGUsIG9wdGlvbnMpIHt9O1xyXG4gIH1lbHNle1xyXG4gICAgY29uc3QgVnVlID0gcmVxdWlyZSgndnVlJyk7XHJcbiAgICAoVnVlLmRlZmF1bHQgfHwgVnVlKS5taXhpbihsaWZlY3ljbGUpO1xyXG4gICAgdW5pLnJlcG9ydCA9IGZ1bmN0aW9uKHR5cGUsIG9wdGlvbnMpIHtcclxuICAgICAgc3RhdC5zZW5kRXZlbnQodHlwZSwgb3B0aW9ucyk7XHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxubWFpbigpO1xyXG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3VuaS1zZWN0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01MjQ0ZjM1ZiZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi91bmktc2VjdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3VuaS1zZWN0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzICgpIHtcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbn1cbmlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG59XG5pZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vdW5pLXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NTI0NGYzNWYmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMuc3R5bGUscmVxdWlyZShcIi4vdW5pLXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NTI0NGYzNWYmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpLmRlZmF1bHQpXG4gICAgICAgICAgfVxuXG59XG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNTI0NGYzNWZcIixcbiAgXCIyZGM5ODBhNFwiXG4gIFxuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIndlYjEvdW5pYXBwL2hlbGxvL2NvbXBvbmVudHMvdW5pLXNlY3Rpb24vdW5pLXNlY3Rpb24udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvd2VicGFjay11bmktbnZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvd2VicGFjay11bmktbnZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLnJlY3ljbGUuanMhLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LTAhLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvdnVlLWxvYWRlci9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUyNDRmMzVmJnNjb3BlZD10cnVlJlwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInZpZXdcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBbXCJ1bmktc2VjdGlvblwiXSB9LFxuICAgIFtcbiAgICAgIF92bS50eXBlXG4gICAgICAgID8gX2MoXCJ2aWV3XCIsIHsgc3RhdGljQ2xhc3M6IFtcInVuaS1zZWN0aW9uX19oZWFkXCJdIH0sIFtcbiAgICAgICAgICAgIF9jKFwidmlld1wiLCB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJ1bmktc2VjdGlvbl9faGVhZC10YWdcIl0sXG4gICAgICAgICAgICAgIGNsYXNzOiBfdm0udHlwZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdKVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX2MoXCJ2aWV3XCIsIHsgc3RhdGljQ2xhc3M6IFtcInVuaS1zZWN0aW9uX19jb250ZW50XCJdIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJ1LXRleHRcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogW1widW5pLXNlY3Rpb25fX2NvbnRlbnQtdGl0bGVcIl0sXG4gICAgICAgICAgICBjbGFzczogeyBkaXN0cmFjdGlvbjogIV92bS5zdWJUaXRsZSB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0udGl0bGUpKV1cbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLnN1YlRpdGxlXG4gICAgICAgICAgPyBfYyhcInUtdGV4dFwiLCB7IHN0YXRpY0NsYXNzOiBbXCJ1bmktc2VjdGlvbl9fY29udGVudC1zdWJcIl0gfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5zdWJUaXRsZSkpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgIF0pLFxuICAgICAgX3ZtLl90KFwiZGVmYXVsdFwiKVxuICAgIF0sXG4gICAgMlxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvdnVlLWxvYWRlci9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy92dWUtbG9hZGVyL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktc2VjdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCI8dGVtcGxhdGU+XHJcblx0PHZpZXcgY2xhc3M9XCJ1bmktc2VjdGlvblwiPlxyXG5cdFx0PHZpZXcgdi1pZj1cInR5cGVcIiBjbGFzcz1cInVuaS1zZWN0aW9uX19oZWFkXCI+XHJcblx0XHRcdDx2aWV3IDpjbGFzcz1cInR5cGVcIiBjbGFzcz1cInVuaS1zZWN0aW9uX19oZWFkLXRhZ1wiIC8+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8dmlldyBjbGFzcz1cInVuaS1zZWN0aW9uX19jb250ZW50XCI+XHJcblx0XHRcdDx0ZXh0IDpjbGFzcz1cInsnZGlzdHJhY3Rpb24nOiFzdWJUaXRsZX1cIiBjbGFzcz1cInVuaS1zZWN0aW9uX19jb250ZW50LXRpdGxlXCI+e3sgdGl0bGUgfX08L3RleHQ+XHJcblx0XHRcdDx0ZXh0IHYtaWY9XCJzdWJUaXRsZVwiIGNsYXNzPVwidW5pLXNlY3Rpb25fX2NvbnRlbnQtc3ViXCI+e3sgc3ViVGl0bGUgfX08L3RleHQ+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8c2xvdCAvPlxyXG5cdDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0bmFtZTogJ1VuaVRpdGxlJyxcclxuXHRcdHByb3BzOiB7XHJcblx0XHRcdHR5cGU6IHtcclxuXHRcdFx0XHR0eXBlOiBTdHJpbmcsXHJcblx0XHRcdFx0ZGVmYXVsdDogJydcclxuXHRcdFx0fSxcclxuXHRcdFx0dGl0bGU6IHtcclxuXHRcdFx0XHR0eXBlOiBTdHJpbmcsXHJcblx0XHRcdFx0ZGVmYXVsdDogJydcclxuXHRcdFx0fSxcclxuXHRcdFx0c3ViVGl0bGU6IHtcclxuXHRcdFx0XHR0eXBlOiBTdHJpbmcsXHJcblx0XHRcdFx0ZGVmYXVsdDogJydcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7fVxyXG5cdFx0fSxcclxuXHRcdHdhdGNoOiB7XHJcblx0XHRcdHRpdGxlKG5ld1ZhbCkge1xyXG5cdFx0XHRcdGlmICh1bmkucmVwb3J0ICYmIG5ld1ZhbCAhPT0gJycpIHtcclxuXHRcdFx0XHRcdHVuaS5yZXBvcnQoJ3RpdGxlJywgbmV3VmFsKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0b25DbGljaygpIHtcclxuXHRcdFx0XHR0aGlzLiRlbWl0KCdjbGljaycpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG48c3R5bGUgc2NvcGVkPlxyXG5cdC51bmktc2VjdGlvbiB7XHJcblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0LyogI2VuZGlmICovXHJcblx0XHRtYXJnaW4tdG9wOiAxMHB4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRwYWRkaW5nOiAwIDEwcHg7XHJcblx0XHRoZWlnaHQ6IDUwcHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xyXG5cdFx0Ym9yZGVyLWJvdHRvbS1jb2xvcjogI2U1ZTVlNTtcclxuXHRcdGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xyXG5cdFx0Ym9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xyXG5cdFx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuXHR9XHJcblxyXG5cdC51bmktc2VjdGlvbl9faGVhZCB7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG5cdH1cclxuXHJcblx0LmxpbmUge1xyXG5cdFx0aGVpZ2h0OiAxNXB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2MwYzBjMDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHRcdHdpZHRoOiAzcHg7XHJcblx0fVxyXG5cclxuXHQuY2lyY2xlIHtcclxuXHRcdHdpZHRoOiA4cHg7XHJcblx0XHRoZWlnaHQ6IDhweDtcclxuXHRcdGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1MHB4O1xyXG5cdFx0Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNTBweDtcclxuXHRcdGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDUwcHg7XHJcblx0XHRib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNTBweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNjMGMwYzA7XHJcblx0fVxyXG5cclxuXHQudW5pLXNlY3Rpb25fX2NvbnRlbnQge1xyXG5cdFx0ZmxleDogMTtcclxuXHRcdGNvbG9yOiAjMzMzO1xyXG5cdH1cclxuXHJcblx0LnVuaS1zZWN0aW9uX19jb250ZW50LXRpdGxlIHtcclxuXHRcdGZvbnQtc2l6ZTogMjhycHg7XHJcblx0XHRjb2xvcjogIzMzMztcclxuXHR9XHJcblxyXG5cdC5kaXN0cmFjdGlvbiB7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR9XHJcblxyXG5cdC51bmktc2VjdGlvbl9fY29udGVudC1zdWIge1xyXG5cdFx0Zm9udC1zaXplOiAyNHJweDtcclxuXHRcdGNvbG9yOiAjOTk5O1xyXG5cdH1cclxuPC9zdHlsZT4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMC0xIS4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0wLTIhLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTAtMyEuLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy92dWUtbG9hZGVyL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktc2VjdGlvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01MjQ0ZjM1ZiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy93ZWJwYWNrLXVuaS1udnVlLWxvYWRlci9saWIvc3R5bGUuanMhLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTAtMSEuLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMC0yIS4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0wLTMhLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvdnVlLWxvYWRlci9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLXNlY3Rpb24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NTI0NGYzNWYmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ1bmktc2VjdGlvblwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCIxMFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiAwLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMTBcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogMCxcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMTBcIixcbiAgICBcImhlaWdodFwiOiBcIjUwXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZjhmOGY4XCIsXG4gICAgXCJib3JkZXJCb3R0b21Db2xvclwiOiBcIiNlNWU1ZTVcIixcbiAgICBcImJvcmRlckJvdHRvbVN0eWxlXCI6IFwic29saWRcIixcbiAgICBcImJvcmRlckJvdHRvbVdpZHRoXCI6IFwiMVwiLFxuICAgIFwiZm9udFdlaWdodFwiOiBcIm5vcm1hbFwiXG4gIH0sXG4gIFwidW5pLXNlY3Rpb25fX2hlYWRcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMTBcIlxuICB9LFxuICBcImxpbmVcIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiMTVcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNjMGMwYzBcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjVcIixcbiAgICBcIndpZHRoXCI6IFwiM1wiXG4gIH0sXG4gIFwiY2lyY2xlXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiOFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiOFwiLFxuICAgIFwiYm9yZGVyVG9wUmlnaHRSYWRpdXNcIjogXCI1MFwiLFxuICAgIFwiYm9yZGVyVG9wTGVmdFJhZGl1c1wiOiBcIjUwXCIsXG4gICAgXCJib3JkZXJCb3R0b21MZWZ0UmFkaXVzXCI6IFwiNTBcIixcbiAgICBcImJvcmRlckJvdHRvbVJpZ2h0UmFkaXVzXCI6IFwiNTBcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNjMGMwYzBcIlxuICB9LFxuICBcInVuaS1zZWN0aW9uX19jb250ZW50XCI6IHtcbiAgICBcImZsZXhcIjogMSxcbiAgICBcImNvbG9yXCI6IFwiIzMzMzMzM1wiXG4gIH0sXG4gIFwidW5pLXNlY3Rpb25fX2NvbnRlbnQtdGl0bGVcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIyOHJweFwiLFxuICAgIFwiY29sb3JcIjogXCIjMzMzMzMzXCJcbiAgfSxcbiAgXCJkaXN0cmFjdGlvblwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCJ1bmktc2VjdGlvbl9fY29udGVudC1zdWJcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIyNHJweFwiLFxuICAgIFwiY29sb3JcIjogXCIjOTk5OTk5XCJcbiAgfVxufSIsIi8qIGdsb2JhbHMgX19WVUVfU1NSX0NPTlRFWFRfXyAqL1xuXG4vLyBJTVBPUlRBTlQ6IERvIE5PVCB1c2UgRVMyMDE1IGZlYXR1cmVzIGluIHRoaXMgZmlsZSAoZXhjZXB0IGZvciBtb2R1bGVzKS5cbi8vIFRoaXMgbW9kdWxlIGlzIGEgcnVudGltZSB1dGlsaXR5IGZvciBjbGVhbmVyIGNvbXBvbmVudCBtb2R1bGUgb3V0cHV0IGFuZCB3aWxsXG4vLyBiZSBpbmNsdWRlZCBpbiB0aGUgZmluYWwgd2VicGFjayB1c2VyIGJ1bmRsZS5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50IChcbiAgc2NyaXB0RXhwb3J0cyxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZ1bmN0aW9uYWxUZW1wbGF0ZSxcbiAgaW5qZWN0U3R5bGVzLFxuICBzY29wZUlkLFxuICBtb2R1bGVJZGVudGlmaWVyLCAvKiBzZXJ2ZXIgb25seSAqL1xuICBzaGFkb3dNb2RlIC8qIHZ1ZS1jbGkgb25seSAqL1xuKSB7XG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zXG4gICAgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAocmVuZGVyKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSByZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IHN0YXRpY1JlbmRlckZuc1xuICAgIG9wdGlvbnMuX2NvbXBpbGVkID0gdHJ1ZVxuICB9XG5cbiAgLy8gZnVuY3Rpb25hbCB0ZW1wbGF0ZVxuICBpZiAoZnVuY3Rpb25hbFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5mdW5jdGlvbmFsID0gdHJ1ZVxuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gJ2RhdGEtdi0nICsgc2NvcGVJZFxuICB9XG5cbiAgdmFyIGhvb2tcbiAgaWYgKG1vZHVsZUlkZW50aWZpZXIpIHsgLy8gc2VydmVyIGJ1aWxkXG4gICAgaG9vayA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAvLyAyLjMgaW5qZWN0aW9uXG4gICAgICBjb250ZXh0ID1cbiAgICAgICAgY29udGV4dCB8fCAvLyBjYWNoZWQgY2FsbFxuICAgICAgICAodGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuc3NyQ29udGV4dCkgfHwgLy8gc3RhdGVmdWxcbiAgICAgICAgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LiR2bm9kZSAmJiB0aGlzLnBhcmVudC4kdm5vZGUuc3NyQ29udGV4dCkgLy8gZnVuY3Rpb25hbFxuICAgICAgLy8gMi4yIHdpdGggcnVuSW5OZXdDb250ZXh0OiB0cnVlXG4gICAgICBpZiAoIWNvbnRleHQgJiYgdHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX18gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnRleHQgPSBfX1ZVRV9TU1JfQ09OVEVYVF9fXG4gICAgICB9XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHN0eWxlc1xuICAgICAgaWYgKGluamVjdFN0eWxlcykge1xuICAgICAgICBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCBjb250ZXh0KVxuICAgICAgfVxuICAgICAgLy8gcmVnaXN0ZXIgY29tcG9uZW50IG1vZHVsZSBpZGVudGlmaWVyIGZvciBhc3luYyBjaHVuayBpbmZlcnJlbmNlXG4gICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cykge1xuICAgICAgICBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQobW9kdWxlSWRlbnRpZmllcilcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdXNlZCBieSBzc3IgaW4gY2FzZSBjb21wb25lbnQgaXMgY2FjaGVkIGFuZCBiZWZvcmVDcmVhdGVcbiAgICAvLyBuZXZlciBnZXRzIGNhbGxlZFxuICAgIG9wdGlvbnMuX3NzclJlZ2lzdGVyID0gaG9va1xuICB9IGVsc2UgaWYgKGluamVjdFN0eWxlcykge1xuICAgIGhvb2sgPSBzaGFkb3dNb2RlXG4gICAgICA/IGZ1bmN0aW9uICgpIHsgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgdGhpcy4kcm9vdC4kb3B0aW9ucy5zaGFkb3dSb290KSB9XG4gICAgICA6IGluamVjdFN0eWxlc1xuICB9XG5cbiAgaWYgKGhvb2spIHtcbiAgICBpZiAob3B0aW9ucy5mdW5jdGlvbmFsKSB7XG4gICAgICAvLyBmb3IgdGVtcGxhdGUtb25seSBob3QtcmVsb2FkIGJlY2F1c2UgaW4gdGhhdCBjYXNlIHRoZSByZW5kZXIgZm4gZG9lc24ndFxuICAgICAgLy8gZ28gdGhyb3VnaCB0aGUgbm9ybWFsaXplclxuICAgICAgb3B0aW9ucy5faW5qZWN0U3R5bGVzID0gaG9va1xuICAgICAgLy8gcmVnaXN0ZXIgZm9yIGZ1bmN0aW9hbCBjb21wb25lbnQgaW4gdnVlIGZpbGVcbiAgICAgIHZhciBvcmlnaW5hbFJlbmRlciA9IG9wdGlvbnMucmVuZGVyXG4gICAgICBvcHRpb25zLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcldpdGhTdHlsZUluamVjdGlvbiAoaCwgY29udGV4dCkge1xuICAgICAgICBob29rLmNhbGwoY29udGV4dClcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsUmVuZGVyKGgsIGNvbnRleHQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgcmVnaXN0cmF0aW9uIGFzIGJlZm9yZUNyZWF0ZSBob29rXG4gICAgICB2YXIgZXhpc3RpbmcgPSBvcHRpb25zLmJlZm9yZUNyZWF0ZVxuICAgICAgb3B0aW9ucy5iZWZvcmVDcmVhdGUgPSBleGlzdGluZ1xuICAgICAgICA/IFtdLmNvbmNhdChleGlzdGluZywgaG9vaylcbiAgICAgICAgOiBbaG9va11cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9XG59XG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3VuaS1pY29ucy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzU1NWRmNDkmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdW5pLWljb25zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vdW5pLWljb25zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzICgpIHtcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbn1cbmlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG59XG5pZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vdW5pLWljb25zLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTc1NTVkZjQ5JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL3VuaS1pY29ucy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03NTU1ZGY0OSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIikuZGVmYXVsdClcbiAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI3NTU1ZGY0OVwiLFxuICBcIjc2MzFlYjUwXCJcbiAgXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwid2ViMS91bmlhcHAvaGVsbG8vY29tcG9uZW50cy91bmktaWNvbnMvdW5pLWljb25zLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS5yZWN5Y2xlLmpzIS4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC0wIS4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3Z1ZS1sb2FkZXIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VuaS1pY29ucy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzU1NWRmNDkmc2NvcGVkPXRydWUmXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwidS10ZXh0XCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6IFtcInVuaS1pY29uc1wiXSxcbiAgICAgIHN0eWxlOiB7IGNvbG9yOiBfdm0uY29sb3IsIFwiZm9udC1zaXplXCI6IF92bS5zaXplICsgXCJweFwiIH0sXG4gICAgICBvbjogeyBjbGljazogX3ZtLl9vbkNsaWNrIH1cbiAgICB9LFxuICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5pY29uc1tfdm0udHlwZV0pKV1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3Z1ZS1sb2FkZXIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VuaS1pY29ucy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3Z1ZS1sb2FkZXIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VuaS1pY29ucy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCI8dGVtcGxhdGU+XHJcblx0PHRleHQgOnN0eWxlPVwieyBjb2xvcjogY29sb3IsICdmb250LXNpemUnOiBzaXplICsgJ3B4JyB9XCIgY2xhc3M9XCJ1bmktaWNvbnNcIiBAY2xpY2s9XCJfb25DbGlja1wiPnt7aWNvbnNbdHlwZV19fTwvdGV4dD5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0aW1wb3J0IGljb25zIGZyb20gJy4vaWNvbnMuanMnO1xyXG5cdC8vICNpZmRlZiBBUFAtTlZVRVxyXG5cdHZhciBkb21Nb2R1bGUgPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ2RvbScpO1xyXG5cdGRvbU1vZHVsZS5hZGRSdWxlKCdmb250RmFjZScsIHtcclxuXHRcdCdmb250RmFtaWx5JzogXCJ1bmlpY29uc1wiLFxyXG5cdFx0J3NyYyc6IFwidXJsKCdkYXRhOmZvbnQvdHJ1ZXR5cGU7Y2hhcnNldD11dGYtODtiYXNlNjQsQUFFQUFBQVFBUUFBQkFBQVJrWlVUWWo0M3NzQUFIYllBQUFBSEVkRVJVWUFKd0JtQUFCMnVBQUFBQjVQVXk4eVdXbGNxZ0FBQVlnQUFBQmdZMjFoY0dCaGJCVUFBQUswQUFBQ1FtTjJkQ0FNcGY0MEFBQVBLQUFBQUNSbWNHZHRNUGVlbFFBQUJQZ0FBQW1XWjJGemNBQUFBQkFBQUhhd0FBQUFDR2RzZVdac2ZnZlpBQUFRRUFBQVlReG9aV0ZrRm9mNi93QUFBUXdBQUFBMmFHaGxZUWQrQXlZQUFBRkVBQUFBSkdodGRIZ2tlQnVZQUFBQjZBQUFBTXBzYjJOaFBFa25MZ0FBRDB3QUFBRENiV0Y0Y0FJakEzSUFBQUZvQUFBQUlHNWhiV1hXT1R0VUFBQnhIQUFBQWRSd2IzTjBUSkU0aWdBQWN2QUFBQU8vY0hKbGNLVzV2bVlBQUE2UUFBQUFsUUFCQUFBQUFRQUFDVi9PT1Y4UFBQVUFId1FBQUFBQUFObXFXN2tBQUFBQTJhcGNDUUFBL3lBRUFBTWdBQUFBQ0FBQ0FBQUFBQUFBQUFFQUFBTWcveUFBWEFRQUFBQUFBQVFBQUFFQUFBQUFBQUFBQUFBQUFBQUFBQUFGQUFFQUFBQmdBWG9BREFBQUFBQUFBZ0JHQUZRQWJBQUFBUVFCb2dBQUFBQUFCQVAvQVpBQUJnQUFBcGtDekFBQUFJOENtUUxNQUFBQjZ3QXpBUWtBQUFJQUJnTUFBQUFBQUFBQUFBQUJFQUFBQUFBQUFBQUFBQUFBVUVaRlJBR0FBQjNtRWdNcy95d0FYQU1nQU9BQUFBQUJBQUFBQUFNWUFzMEFBQUFnQUFFQmRnQWlBQUFBQUFGVkFBQUQ2UUFzQkFBQVlBREFBTUFBWUFEQUFNQUFvQUNBQUlBQVlBQ2dBSUFBZ0FCZ0FMTUFRQUJBQUFVQVZ3QmVBSUFCQUFEMEFRQUE5QUVBQUVBQVZnQ2dBT0FBd0FEQUFGRUFmZ0NBQUdBQVFBQmdBR0FBWUFBK0FGRUFZQUJBQUdBQVlBQTBBR0FBUGdGQUFRQUFnQUJBQUFBQUpRQ0JBUUFCUUFGQUFTd0FnQUJnQUlBQXdBQmdBR0FBd0FEQkFRQUFnQUNBQUdBQVlBREJBRUFBUkFCQUFCY0JYd0FUQU1BQXdBRkFBVUFCUUFGQUFNQUF3QUVlQUY4QVZRQkFBQUFBQUFBREFBQUFBd0FBQUJ3QUFRQUFBQUFCUEFBREFBRUFBQUFjQUFRQklBQUFBRVFBUUFBRkFBUUFBQUFkQUhqaEF1RXk0Z1BpTStKazR3UGpNK05nNDJUa0NlUVI1QlBrTk9RNTVFUGtadVJvNUhMbENPVXc1VExsTmVVMzVXRGxZK1ZsNVdqbGllV1E1aEwvL3dBQUFBQUFIUUI0NFFEaE1PSUE0akRpWU9NQTR6TGpZT05qNUFEa0VPUVQ1RFRrTitSQTVHRGthT1J3NVFEbE1PVXk1VFRsTitWZzVXTGxaZVZuNVlEbGtPWVMvLzhBQWYvay80c2ZCQjdYSGdvZDNoMnlIUmNjNlJ5OUhMc2NJQndhSEJrYitSdjNHL0ViMVJ2VUc4MGJRQnNaR3hnYkZ4c1dHdTRhN1Jyc0d1c2ExQnJPR2swQUFRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQkJnQUFBUUFBQUFBQUFBQUJBZ0FBQUFJQUFBQUFBQUFBQUFBQUFBQUFBQUFCQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQXdBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQXNBQXNzQ0JnWmkyd0FTd2daQ0N3d0ZDd0JDWmFzQVJGVzFnaEl5RWJpbGdnc0ZCUVdDR3dRRmtiSUxBNFVGZ2hzRGhaV1NDd0NrVmhaTEFvVUZnaHNBcEZJTEF3VUZnaHNEQlpHeUN3d0ZCWUlHWWdpb3BoSUxBS1VGaGdHeUN3SUZCWUliQUtZQnNnc0RaUVdDR3dObUFiWUZsWldSdXdBQ3RaV1NPd0FGQllaVmxaTGJBQ0xDQkZJTEFFSldGa0lMQUZRMUJZc0FValFyQUdJMEliSVNGWnNBRmdMYkFETENNaEl5RWdaTEVGWWtJZ3NBWWpRcklLQUFJcUlTQ3dCa01naWlDS3NBQXJzVEFGSllwUldHQlFHMkZTV1ZnaldTRWdzRUJUV0xBQUt4c2hzRUJaSTdBQVVGaGxXUzJ3QkN5d0NDTkNzQWNqUXJBQUkwS3dBRU93QjBOUldMQUlReXV5QUFFQVEyQkNzQlpsSEZrdHNBVXNzQUJESUVVZ3NBSkZZN0FCUldKZ1JDMndCaXl3QUVNZ1JTQ3dBQ3Nqc1FRRUpXQWdSWW9qWVNCa0lMQWdVRmdoc0FBYnNEQlFXTEFnRzdCQVdWa2pzQUJRV0dWWnNBTWxJMkZFUkMyd0J5eXhCUVZGc0FGaFJDMndDQ3l3QVdBZ0lMQUtRMHF3QUZCWUlMQUtJMEpac0F0RFNyQUFVbGdnc0FzalFsa3RzQWtzSUxnRUFHSWd1QVFBWTRvalliQU1RMkFnaW1BZ3NBd2pRaU10c0Fvc1MxUllzUWNCUkZra3NBMWxJM2d0c0Fzc1MxRllTMU5Zc1FjQlJGa2JJVmtrc0JObEkzZ3RzQXdzc1FBTlExVllzUTBOUTdBQllVS3dDU3Rac0FCRHNBSWxRcklBQVFCRFlFS3hDZ0lsUXJFTEFpVkNzQUVXSXlDd0F5VlFXTEFBUTdBRUpVS0tpaUNLSTJHd0NDb2hJN0FCWVNDS0kyR3dDQ29oRzdBQVE3QUNKVUt3QWlWaHNBZ3FJVm13Q2tOSHNBdERSMkN3Z0dJZ3NBSkZZN0FCUldKZ3NRQUFFeU5Fc0FGRHNBQStzZ0VCQVVOZ1FpMndEU3l4QUFWRlZGZ0FzQTBqUWlCZ3NBRmh0UTRPQVFBTUFFSkNpbUN4REFRcnNHc3JHeUpaTGJBT0xMRUFEU3N0c0E4c3NRRU5LeTJ3RUN5eEFnMHJMYkFSTExFRERTc3RzQklzc1FRTkt5MndFeXl4QlEwckxiQVVMTEVHRFNzdHNCVXNzUWNOS3kyd0ZpeXhDQTByTGJBWExMRUpEU3N0c0Jnc3NBY3JzUUFGUlZSWUFMQU5JMElnWUxBQlliVU9EZ0VBREFCQ1FvcGdzUXdFSzdCckt4c2lXUzJ3R1N5eEFCZ3JMYkFhTExFQkdDc3RzQnNzc1FJWUt5MndIQ3l4QXhnckxiQWRMTEVFR0NzdHNCNHNzUVVZS3kyd0h5eXhCaGdyTGJBZ0xMRUhHQ3N0c0NFc3NRZ1lLeTJ3SWl5eENSZ3JMYkFqTENCZ3NBNWdJRU1qc0FGZ1E3QUNKYkFDSlZGWUl5QThzQUZnSTdBU1pSd2JJU0ZaTGJBa0xMQWpLN0FqS2kyd0pTd2dJRWNnSUxBQ1JXT3dBVVZpWUNOaE9DTWdpbFZZSUVjZ0lMQUNSV093QVVWaVlDTmhPQnNoV1Myd0ppeXhBQVZGVkZnQXNBRVdzQ1Vxc0FFVk1Cc2lXUzJ3Snl5d0J5dXhBQVZGVkZnQXNBRVdzQ1Vxc0FFVk1Cc2lXUzJ3S0N3Z05iQUJZQzJ3S1N3QXNBTkZZN0FCUldLd0FDdXdBa1Zqc0FGRllyQUFLN0FBRnJRQUFBQUFBRVErSXppeEtBRVZLaTJ3S2l3Z1BDQkhJTEFDUldPd0FVVmlZTEFBUTJFNExiQXJMQzRYUEMyd0xDd2dQQ0JISUxBQ1JXT3dBVVZpWUxBQVEyR3dBVU5qT0Myd0xTeXhBZ0FXSlNBdUlFZXdBQ05Dc0FJbFNZcUtSeU5ISTJFZ1dHSWJJVm13QVNOQ3Npd0JBUlVVS2kyd0xpeXdBQmF3QkNXd0JDVkhJMGNqWWJBR1JTdGxpaTRqSUNBOGlqZ3RzQzhzc0FBV3NBUWxzQVFsSUM1SEkwY2pZU0N3QkNOQ3NBWkZLeUN3WUZCWUlMQkFVVml6QWlBRElCdXpBaVlER2xsQ1FpTWdzQWxESUlvalJ5TkhJMkVqUm1Dd0JFT3dnR0pnSUxBQUt5Q0tpbUVnc0FKRFlHUWpzQU5EWVdSUVdMQUNRMkVic0FORFlGbXdBeVd3Z0dKaEl5QWdzQVFtSTBaaE9Cc2pzQWxEUnJBQ0piQUpRMGNqUnlOaFlDQ3dCRU93Z0dKZ0l5Q3dBQ3Nqc0FSRFlMQUFLN0FGSldHd0JTV3dnR0t3QkNaaElMQUVKV0JrSTdBREpXQmtVRmdoR3lNaFdTTWdJTEFFSmlOR1lUaFpMYkF3TExBQUZpQWdJTEFGSmlBdVJ5TkhJMkVqUERndHNERXNzQUFXSUxBSkkwSWdJQ0JHSTBld0FDc2pZVGd0c0RJc3NBQVdzQU1sc0FJbFJ5TkhJMkd3QUZSWUxpQThJeUVic0FJbHNBSWxSeU5ISTJFZ3NBVWxzQVFsUnlOSEkyR3dCaVd3QlNWSnNBSWxZYkFCUldNaklGaGlHeUZaWTdBQlJXSmdJeTRqSUNBOGlqZ2pJVmt0c0RNc3NBQVdJTEFKUXlBdVJ5TkhJMkVnWUxBZ1lHYXdnR0lqSUNBOGlqZ3RzRFFzSXlBdVJyQUNKVVpTV0NBOFdTNnhKQUVVS3kyd05Td2pJQzVHc0FJbFJsQllJRHhaTHJFa0FSUXJMYkEyTENNZ0xrYXdBaVZHVWxnZ1BGa2pJQzVHc0FJbFJsQllJRHhaTHJFa0FSUXJMYkEzTExBdUt5TWdMa2F3QWlWR1VsZ2dQRmt1c1NRQkZDc3RzRGdzc0M4cmlpQWdQTEFFSTBLS09DTWdMa2F3QWlWR1VsZ2dQRmt1c1NRQkZDdXdCRU11c0NRckxiQTVMTEFBRnJBRUpiQUVKaUF1UnlOSEkyR3dCa1VySXlBOElDNGpPTEVrQVJRckxiQTZMTEVKQkNWQ3NBQVdzQVFsc0FRbElDNUhJMGNqWVNDd0JDTkNzQVpGS3lDd1lGQllJTEJBVVZpekFpQURJQnV6QWlZREdsbENRaU1nUjdBRVE3Q0FZbUFnc0FBcklJcUtZU0N3QWtOZ1pDT3dBME5oWkZCWXNBSkRZUnV3QTBOZ1diQURKYkNBWW1Hd0FpVkdZVGdqSUR3ak9Cc2hJQ0JHSTBld0FDc2pZVGdoV2JFa0FSUXJMYkE3TExBdUt5NnhKQUVVS3kyd1BDeXdMeXNoSXlBZ1BMQUVJMElqT0xFa0FSUXJzQVJETHJBa0t5MndQU3l3QUJVZ1I3QUFJMEt5QUFFQkZSUVRMckFxS2kyd1BpeXdBQlVnUjdBQUkwS3lBQUVCRlJRVExyQXFLaTJ3UHl5eEFBRVVFN0FyS2kyd1FDeXdMU290c0VFc3NBQVdSU01nTGlCR2lpTmhPTEVrQVJRckxiQkNMTEFKSTBLd1FTc3RzRU1zc2dBQU9pc3RzRVFzc2dBQk9pc3RzRVVzc2dFQU9pc3RzRVlzc2dFQk9pc3RzRWNzc2dBQU95c3RzRWdzc2dBQk95c3RzRWtzc2dFQU95c3RzRW9zc2dFQk95c3RzRXNzc2dBQU55c3RzRXdzc2dBQk55c3RzRTBzc2dFQU55c3RzRTRzc2dFQk55c3RzRThzc2dBQU9Tc3RzRkFzc2dBQk9Tc3RzRkVzc2dFQU9Tc3RzRklzc2dFQk9Tc3RzRk1zc2dBQVBDc3RzRlFzc2dBQlBDc3RzRlVzc2dFQVBDc3RzRllzc2dFQlBDc3RzRmNzc2dBQU9Dc3RzRmdzc2dBQk9Dc3RzRmtzc2dFQU9Dc3RzRm9zc2dFQk9Dc3RzRnNzc0RBckxyRWtBUlFyTGJCY0xMQXdLN0EwS3kyd1hTeXdNQ3V3TlNzdHNGNHNzQUFXc0RBcnNEWXJMYkJmTExBeEt5NnhKQUVVS3kyd1lDeXdNU3V3TkNzdHNHRXNzREVyc0RVckxiQmlMTEF4SzdBMkt5MndZeXl3TWlzdXNTUUJGQ3N0c0dRc3NESXJzRFFyTGJCbExMQXlLN0ExS3kyd1ppeXdNaXV3TmlzdHNHY3NzRE1yTHJFa0FSUXJMYkJvTExBeks3QTBLeTJ3YVN5d015dXdOU3N0c0dvc3NETXJzRFlyTGJCckxDdXdDR1d3QXlSUWVMQUJGVEF0QUFCTHVBRElVbGl4QVFHT1dia0lBQWdBWXlDd0FTTkVJTEFESTNDd0RrVWdJRXU0QUE1UlM3QUdVMXBZc0RRYnNDaFpZR1lnaWxWWXNBSWxZYkFCUldNallyQUNJMFN6Q2drRkJDdXpDZ3NGQkN1ekRnOEZCQ3Rac2dRb0NVVlNSTE1LRFFZRUs3RUdBVVN4SkFHSVVWaXdRSWhZc1FZRFJMRW1BWWhSV0xnRUFJaFlzUVlCUkZsWldWbTRBZitGc0FTTnNRVUFSQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBTWdBeUF4ai80UU1nL3lBREdQL2hBeUQvSUFBQUFDZ0FLQUFvQVdRQ0NnTzBCWW9HRGdhaUI0Z0lnQWpJQ1hZSjhBcDZDclFMR0F0c0RQZ04zQTUwRDF3UnloSXlFekFUbmhRYUZISVV2QlZBRmVJWEhCZDhHRW9Za0JqV0dUSVpqQm5vR21BYW9oc0NHMVFibEJ2cUhDZ2NlaHlpSE9BZERCMXFIYVFkNmg0SUhrWWVuaDdZSHpnZ21pRGtJUXdoSkNFOElWd2h2aUljSkdZa2lDVDBKWVltQUNaNEozWW50aWpFS1E0cGVpbTZLc1FzRUN3K0xMd3RTQzNlTGZZdURpNG1MajR1aUM3UUx4WXZYQzk0TDVvd0JqQ0dBQUFBQWdBaUFBQUJNZ0txQUFNQUJ3QXBRQ1lBQUFBREFnQURWd0FDQVFFQ1N3QUNBZ0ZQQkFFQkFnRkRBQUFIQmdVRUFBTUFBeEVGRHlzekVTRVJKek1SSXlJQkVPN016QUtxL1ZZaUFtWUFBQUFGQUN6LzRRTzhBeGdBRmdBd0FEb0FVZ0JlQVhkTHNCTlFXRUJLQWdFQURRNE5BQTVtQUFNT0FRNERYZ0FCQ0FnQlhCQUJDUWdLQmdsZUVRRU1CZ1FHREY0QUN3UUxhUThCQ0FBR0RBZ0dXQUFLQndVQ0JBc0tCRmtTQVE0T0RWRUFEUTBLRGtJYlM3QVhVRmhBU3dJQkFBME9EUUFPWmdBRERnRU9BMTRBQVFnSUFWd1FBUWtJQ2dnSkNtWVJBUXdHQkFZTVhnQUxCQXRwRHdFSUFBWU1DQVpZQUFvSEJRSUVDd29FV1JJQkRnNE5VUUFORFFvT1FodExzQmhRV0VCTUFnRUFEUTROQUE1bUFBTU9BUTREWGdBQkNBZ0JYQkFCQ1FnS0NBa0taaEVCREFZRUJnd0VaZ0FMQkF0cER3RUlBQVlNQ0FaWUFBb0hCUUlFQ3dvRVdSSUJEZzROVVFBTkRRb09RaHRBVGdJQkFBME9EUUFPWmdBRERnRU9Bd0ZtQUFFSURnRUlaQkFCQ1FnS0NBa0taaEVCREFZRUJnd0VaZ0FMQkF0cER3RUlBQVlNQ0FaWUFBb0hCUUlFQ3dvRVdSSUJEZzROVVFBTkRRb09RbGxaV1VBb1UxTTdPekl4RnhkVFhsTmVXMWc3VWp0U1MwTTNOVEU2TWpvWE1CY3dVUkV4R0JFb0ZVQVRGaXNCQmlzQklnNENIUUVoTlRRbU5UUXVBaXNCRlNFRkZSUVdGQTRDSXdZbUt3RW5JUWNyQVNJbklpNENQUUVYSWdZVUZqTXlOalFtRndZSERnTWVBVHNHTWpZbkxnRW5KaWNCTlRRK0Fqc0JNaFlkQVFFWkd4cFRFaVVjRWdPUUFRb1lKeDZGL2tvQ29nRVZIeU1PRGg4T0lDMytTU3dkSWhRWkdTQVRDSGNNRWhJTURSSVNqQWdHQlFzRUFnUVBEaVZEVVZCQUpCY1dDUVVKQlFVRy9xUUZEeG9WdkI4cEFoOEJEQmtuR2t3cEVCd0VEU0FiRW1HSU5CYzZPaVVYQ1FFQmdJQUJFeHNnRHFjL0VSb1JFUm9SZkJvV0V5UU9FQTBJR0JvTkl4RVRGQUYzNUFzWUV3d2RKdU1BQUFJQVlQK0FBNkFDd0FBSEFGY0FTRUJGU2tsRE9UZzJKeVljR1JjV0RBUURUdzhDQVFRQ1FBQUVBd0VEQkFGbUFBQUZBUUlEQUFKWkFBTUVBUU5OQUFNREFWRUFBUU1CUlFrSVRFc3dMUWhYQ1ZjVEVBWVFLd0FnQmhBV0lEWVFKVEllQWhVVUJ5WW5MZ0UxTkRjMU5qOERQZ0UzTmpjMk56WXZBVFVtTnpZbUp5WW5Jd1lIRGdFWEZnY1VCeFVPQVJjZUFSY1dGeFlWTUJVVUJoUVBBUlFqRGdFSEpqVTBQZ1FDclA2bzlQUUJXUFQrWUUyT1pqeFlVV2tFQWdFQkFRSUNBZ0VDQWcwRkV3Z0hDQUVFQ2dRT0V5aE5JMHdvRkE0RUNnUUJCQUVFQlE0SUJBNElBUUVDQVNsd0hGa2JNVWRUWXdMQTlQNm85UFFCV05FOFpvNU5pbW9oSHdFR0RnTURCZ01EQmdZR0F3VURIU0lXTENNVUFnRVZPUk02R2pNRkJUTWFPaE01RlFFQkFRb1RHaGtnQ1NFZUVDQUlBd1VDQVFFQkRDZ01hb3MwWTFOSE1Sc0FBQUFBQXdEQS8rQURRQUpnQUFBQVV3REFBVFpMc0F0UVdFQWNrNUtGQUFRQkM1NmFsWVI2QlFBQnFhZHpRa0EvRVFvSUNnQURRQnRMc0F4UVdFQWNrNUtGQUFRQkM1NmFsWVI2QlFBQnFhZHpRa0EvRVFvSUJ3QURRQnRBSEpPU2hRQUVBUXVlbXBXRWVnVUFBYW1uYzBKQVB4RUtDQW9BQTBCWldVdXdDMUJZUURVREFRRUxBQXNCQUdZRUFRQUtDd0FLWkFBS0J3c0tCMlFKQ0FJSEJnc0hCbVFBQWdBTEFRSUxXUXdCQmdZRlVBQUZCUXNGUWh0THNBeFFXRUF2QXdFQkN3QUxBUUJtQkFFQUJ3c0FCMlFLQ1FnREJ3WUxCd1prQUFJQUN3RUNDMWtNQVFZR0JWQUFCUVVMQlVJYlFEVURBUUVMQUFzQkFHWUVBUUFLQ3dBS1pBQUtCd3NLQjJRSkNBSUhCZ3NIQm1RQUFnQUxBUUlMV1F3QkJnWUZVQUFGQlFzRlFsbFpRQjVWVkl1S1pXUmlZVjllWFZ4VXdGWEFUazA1T0M4dUp5VWZIaE1TRFE0ckNRRXVBU2NtSnk0QlB3RTJOejRETlRjeVBnRTNQZ0UxTkM0REl6YytBVGMySmlNaURnRVZIZ0VmQVNJSEZCWVhIZ01YTXhZWEZoOERCZ2NPQVFjT0JBY0dGU0UwTGdNSElUWTNOamMrQVRjeU5qSStBVEkrQVRJM05qYzJKejBDTkNZOUF5Y3VBU2NtTHdFdUFpY21KeVkrQVRjMUppY21Oell5RnhZSERnSUhNUVlWSGdFSEJnY1VEZ0VWQnc0Q0J3NEJEd0VkQVFZZEFSUUdGUlFYSGdJWEZoY2VBUmNXRng0Q0Z3R1ZBVUlRUkFNZUNnTUJBUUVNQmdJRUJBTUJBZ1VKQXdFTEF3TURBZ0VEQWdZQkFWQkdMMFlnQVFZQ0F3c0JDd0VDQlFRRkFRSUhCd01GQndNQkFRSUZHQXNHRXhFVEVnaHBBb0FTRnlFVTR2N3RCUXdXSUFrWkVRRUZBd1FEQkFNRUF3SXBFQXdCQVFVRENnTUZCd0VCQ0FrQkJBUUNBZ2NCQ1FFQkhTQnlJQjBCQVFVREFRRUJDd01FQlFrSkFRSUVCUUVEQ2dNRkFRRU1CeHdQQndnWUVSa0pJUlVFQlFVQ0FZMyt1d1lMQVFZTUJDa1NFeE1SQlJBUkR3VUZBUXdMQnlZTEJRY0VBZ0VKQml3YU5sRW9QQ01hS2drSUV3c2tDUVlLQlFJQkxoRUhDUThGUkFzREJRb0RBUU1EQkFRREpVTVNJUlVVQ0VRSENCQUxCQVVDQVFFQkFRRUJDUlFPTWdnSkJ3UUZBZ01DQ0FjRkVnZ09LZ2NFQlFRREV4SU1DQWtEREJzd0tSMGhJUjBwRlNZTkF3VUdBaElORWhNREJBVUVCd2tXRlFRSUVBY0hDQUlEQkFrRURBWXlEZ2tPQlFFQ0JBSUZCQXNRQXdRRkF3QUFCQURBLytBRFFBSmdBQXNBREFCZkFNd0Jja3V3QzFCWVFCeWZucEVNQkFjRXFxYWhrSVlGQmdlMXMzOU9URXNkRmdnUUJnTkFHMHV3REZCWVFCeWZucEVNQkFjRXFxYWhrSVlGQmdlMXMzOU9URXNkRmdnTkJnTkFHMEFjbjU2UkRBUUhCS3Ftb1pDR0JRWUh0Yk4vVGt4TEhSWUlFQVlEUUZsWlM3QUxVRmhBUndrQkJ3UUdCQWNHWmdvQkJoQUVCaEJrQUJBTkJCQU5aQThPQWcwTUJBME1aQUFJQUJFQkNCRlpBZ0VBQlFFREJBQURWd0FCQUFRSEFRUlhFZ0VNREF0UUFBc0xDd3RDRzB1d0RGQllRRUVKQVFjRUJnUUhCbVlLQVFZTkJBWU5aQkFQRGdNTkRBUU5ER1FBQ0FBUkFRZ1JXUUlCQUFVQkF3UUFBMWNBQVFBRUJ3RUVWeElCREF3TFVBQUxDd3NMUWh0QVJ3a0JCd1FHQkFjR1pnb0JCaEFFQmhCa0FCQU5CQkFOWkE4T0FnME1CQTBNWkFBSUFCRUJDQkZaQWdFQUJRRURCQUFEVndBQkFBUUhBUVJYRWdFTURBdFFBQXNMQ3d0Q1dWbEFKR0ZnbDVaeGNHNXRhMnBwYUdETVljeGFXVVZFT3pvek1Tc3FIeDRSRVJFUkVSQVRGQ3NCSXpVakZTTVZNeFV6TlRNRkFTNEJKeVluTGdFL0FUWTNQZ00xTnpJK0FUYytBVFUwTGdNak56NEJOelltSXlJT0FSVWVBUjhCSWdjVUZoY2VBeGN6RmhjV0h3TUdCdzRCQnc0RUJ3WVZJVFF1QXdjaE5qYzJOejRCTnpJMk1qNEJNajRCTWpjMk56WW5QUUkwSmowREp5NEJKeVl2QVM0Q0p5WW5KajRCTnpVbUp5WTNOaklYRmdjT0FnY3hCaFVlQVFjR0J4UU9BUlVIRGdJSERnRVBBUjBCQmgwQkZBWVZGQmNlQWhjV0Z4NEJGeFlYSGdJWEEwQXlIREl5SERMK1ZRRkNFRVFESGdvREFRRUJEQVlDQkFRREFRSUZDUU1CQ3dNREF3SUJBd0lHQVFGUVJpOUdJQUVHQWdNTEFRc0JBZ1VFQlFFQ0J3Y0RCUWNEQVFFQ0JSZ0xCaE1SRXhJSWFRS0FFaGNoRk9MKzdRVU1GaUFKR1JFQkJRTUVBd1FEQkFNQ0tSQU1BUUVGQXdvREJRY0JBUWdKQVFRRUFnSUhBUWtCQVIwZ2NpQWRBUUVGQXdFQkFRc0RCQVVKQ1FFQ0JBVUJBd29EQlFFQkRBY2NEd2NJR0JFWkNTRVZCQVVGQWdIdU1qSWNNakpGL3JzR0N3RUdEQVFwRWhNVEVRVVFFUThGQlFFTUN3Y21Dd1VIQkFJQkNRWXNHalpSS0R3akdpb0pDQk1MSkFrR0NnVUNBUzRSQndrUEJVUUxBd1VLQXdFREF3UUVBeVZERWlFVkZBaEVCd2dRQ3dRRkFnRUJBUUVCQVFrVURqSUlDUWNFQlFJREFnZ0hCUklJRGlvSEJBVUVBeE1TREFnSkF3d2JNQ2tkSVNFZEtSVW1EUU1GQmdJU0RSSVRBd1FGQkFjSkZoVUVDQkFIQndnQ0F3UUpCQXdHTWc0SkRnVUJBZ1FDQlFRTEVBTUVCUU1BQUFJQVlQK0FBNkFDd0FBSEFFUUFNa0F2UVJzYUN3UUNBd0ZBQUFBQUF3SUFBMWtFQVFJQkFRSk5CQUVDQWdGUkFBRUNBVVVKQ0Nja0NFUUpSQk1RQlJBckFDQUdFQllnTmhBQklpWW5QZ0UzUGdFMU5DY21KeVluSmo4Qk5UWW1KeVkrQWpjMk56TVdGeDRCQndZWE1CY2VBUWNPQVFjT0JSVVVGaGNXRnc0Q0FxeitxUFQwQVZqMC9tQldtVFVjY0NnRUFnZ09CQk1KQndnQkFnUUVBZ0lHRGdvb1RDTk5LQlFPQkFvRUFRUUJCQVVQQndJR0J3Z0ZCQUlEYVZFaldtMEN3UFQrcVBUMEFWajkxMGhBRENnTUFRWU9JQkFlSVJVdEl4UUJBZ2N4RmdjWkdoOE9Nd1VGTXhvNkV6a1ZBd29UR2hrZ0NRc1lGQkFPRVFnT0JnRWZJU3M5SVFBQUFBRUF3UC9nQTBBQ1lBQlNBRGRBTkVFL1BoQUpCUVVBQVVBREFRRUNBQUlCQUdZRUFRQUZBZ0FGWkFBQ0FnVlBBQVVGQ3dWQ1RVdzROeTR0SmlRZUhSSVJCZzRySlM0Qkp5WW5MZ0UvQVRZM1BnTTFOekkrQVRjK0FUVTBMZ01qTno0Qk56WW1JeUlPQVJVZUFSOEJJZ2NVRmhjZUF4Y3pGaGNXSHdNR0J3NEJCdzRFQndZVklUUXVBd0xYRUVRREhnb0RBUUVCREFZQ0JBUURBUUlGQ1FNQkN3TURBd0lCQXdJR0FRRlFSaTlHSUFFR0FnTUxBUXNCQWdVRUJRRUNCd2NEQlFjREFRRUNCUmdMQmhNUkV4SUlhUUtBRWhjaEZFZ0dDd0VHREFRcEVoTVRFUVVRRVE4RkJRRU1Dd2NtQ3dVSEJBSUJDUVlzR2paUktEd2pHaW9KQ0JNTEpBa0dDZ1VDQVM0UkJ3a1BCVVFMQXdVS0F3RURBd1FFQXlWREVpRVZGQWdBQUFBQUFnREEvK0FEUUFKZ0FBc0FYZ0RBUUFwTlMwb2NGUVVMQmdGQVM3QUxVRmhBTGdBSUFRQUlYQWtCQndRR0FBZGVDZ0VHQ3dRR0MyUUNBUUFGQVFNRUFBTllBQUVBQkFjQkJGY0FDd3NMQzBJYlM3QU1VRmhBTFFBSUFRaG9DUUVIQkFZQUIxNEtBUVlMQkFZTFpBSUJBQVVCQXdRQUExZ0FBUUFFQndFRVZ3QUxDd3NMUWh0QUxnQUlBUWhvQ1FFSEJBWUVCd1ptQ2dFR0N3UUdDMlFDQVFBRkFRTUVBQU5ZQUFFQUJBY0JCRmNBQ3dzTEMwSlpXVUFVV1ZoRVF6bzVNakFxS1I0ZEVSRVJFUkVRREJRckFTTTFJeFVqRlRNVk16VXpBeTRCSnlZbkxnRS9BVFkzUGdNMU56SStBVGMrQVRVMExnTWpOejRCTnpZbUl5SU9BUlVlQVI4QklnY1VGaGNlQXhjekZoY1dId01HQnc0QkJ3NEVCd1lWSVRRdUF3TkFNaHd5TWh3eWFSQkVBeDRLQXdFQkFRd0dBZ1FFQXdFQ0JRa0RBUXNEQXdNQ0FRTUNCZ0VCVUVZdlJpQUJCZ0lEQ3dFTEFRSUZCQVVCQWdjSEF3VUhBd0VCQWdVWUN3WVRFUk1TQ0drQ2dCSVhJUlFCN2pJeUhESXkvbllHQ3dFR0RBUXBFaE1URVFVUUVROEZCUUVNQ3djbUN3VUhCQUlCQ1FZc0dqWlJLRHdqR2lvSkNCTUxKQWtHQ2dVQ0FTNFJCd2tQQlVRTEF3VUtBd0VEQXdRRUF5VkRFaUVWRkFnQUFBSUFvUC9BQTNjQ2dBQkpBSXdBWEVCWllnRUdCM2wzRWhBRUFBWUNRQUFEQWdjQ0F3ZG1BQVlIQUFjR0FHWUFBZ0FIQmdJSFdRQUFBQWtCQUFsWkFBRUFDQVVCQ0ZrQUJRUUVCVTBBQlFVRVVRQUVCUVJGaFlPQWZtVmpZV0JQVFVKQUxTd3FLQ1FpQ2hBckpTNEJJeUlPQVFjR0l5SW1Md0VtTHdFbUx3RXVBeThCTGdJMU5ENENOelluSmk4QkppTWlCd1lqQnc0Q0J3NEJGQjRCRng0QkZ4NEJGeDRCTXpJK0FqYzJKeVlIQmdjR0l5SW5MZ0VuTGdZMk56WTNNRGN5TlRZek1oWWZBUjRCQndZWEhnSWZBUjRCRnhZWEZoOEJGaDhCRmpNeU5qYzJNekllQWhjV0J3WURRQnRuSlFZTUNnUXdDZ1FLQ3dJbEZnUUJBZ1FHQmcwUURBRUtDQWdDQmdrSElSNFFNUUlkSmh3a0FRRUJEaGNQQkFRRUNCUVFJMGd6TERvMk5XRWtGaFlqSUJJMkt3WWRKQ1lLRlVCb05Ea3JHU2dsSVNNVEJBTUVDU0VDQVIwVERCVUxBaTRqRlNBQ0FRb0xEQUVYRlFzQkFnTUJBeFluQWh3UkRSOGZCZ29QS3lrakNoc0dCSUViT3dJRUFoOEhDZ0lmR0FNQ0F3TUdCdzBURFFFTENnd0VBd2dMRGdrc1B5RTdBeVFYQVFFSkZoZ01EUllpSkRNZFFHRTFMakFuSmlvQ0Nob1dRVGNHYVNzRUFVb21MeTBaTHpJMVB6TW1HQTRjRlFFQkVnd05BamxLSEN3WUNSTU9EZ0VaRndzQkF3SUJCQmNpQWhnUEZBUVJHQm9LR3hZUkFBQURBSUFBSUFPQUFpQUFBd0FHQUJNQVBFQTVFaEVPRFF3SkNBUUlBd0lCUUFRQkFRQUNBd0VDVndVQkF3QUFBMHNGQVFNREFFOEFBQU1BUXdjSEFBQUhFd2NUQmdVQUF3QURFUVlQS3hNUklSRUJKU0VCRVJjSEZ6Y1hOeGMzSnpjUmdBTUEvb0QrdWdLTS9Wcm1pQVNlWUdDZUJJam1BaUQrQUFJQS91ajQva0FCcksrYkJJdEpTWXNFbTYvK1ZBQUNBSUQvNEFPQUFtQUFKd0JWQUdwQVp6UXlJUU1FQUJRQkFRSktBUWdCVGhnQ0RBay9BUWNNQlVBQUJBQUNBQVFDWmdVREFnSUJBQUlCWkFzS0FnZ0JDUUVJQ1dZQUNRd0JDUXhrQUFZQUFBUUdBRmtBQVFBTUJ3RU1XUUFIQndzSFFsRlBUVXRKU0VaRlJVUStQQ2tvRVJJUklTWVFEUlFyQURJZUFSVVVCd1lqSWljaUl5Y2pKaWNpQnlNSERnRVBBVDRETlRRbkppY21KeVkxTkRZa0lnNEJGUlFYSGdJWEpqVXhGaFVVQndZV0Z6TXlQd0kyUHdFekl6WTNNaGNWTXpJVkZqTXlQZ0UwSmdHaHZxTmVZMldXVkRjQkFnRUNEdzRSRUFFRUJRc0NUd3NMQlFFTkFnRURBVFZlQVdyUXNXYzlBUU1DQVFJSEpBSUpDQVlEQkFObEFRb0pBUUVMQ3dzS0FnRTlXbWl3Wm1jQ1FFcUFTMjlNVHhNQkJBRUdBZ0VFQVNNaEpCTUZBaFlUQXdFRUFVTlBTMzlxVTQ1VVdrd0JCQVFCQXdFTERBSnlCZ3dDQVFFc0FRTUVBd0VEQVFFVVRZcW5qZ0FBQUFBREFHRC9nQU9nQXNBQUNRQVJBQmdBbnJVVUFRWUZBVUJMc0FwUVdFQTZBQUVBQ0FBQkNHWUFCZ1VGQmwwQUFnQUFBUUlBVnd3QkNBQUxCQWdMVndBRUFBTUpCQU5YQ2dFSkJRVUpTd29CQ1FrRlR3Y0JCUWtGUXh0QU9RQUJBQWdBQVFobUFBWUZCbWtBQWdBQUFRSUFWd3dCQ0FBTEJBZ0xWd0FFQUFNSkJBTlhDZ0VKQlFVSlN3b0JDUWtGVHdjQkJRa0ZRMWxBRmdvS0dCY1dGUk1TQ2hFS0VSRVJFaEVSRVJFUURSWXJFeUVWTXpVaEVUTTFJemNSSVJjek5UTVJBeU1WSnlFUklZQUNBQ0Q5d09EQTRBRkZnQnRnSUdCdS9zNENBQUtnd09EK1FDQ2cva0NBZ0FIQS9tQnRiUUdBQUFBQUFRQ2cvOEFEZHdLQUFFa0FOa0F6RWhBQ0FBTUJRQUFDQXdKb0FBTUFBMmdBQVFBRUFBRUVaZ0FBQVFRQVRRQUFBQVJSQUFRQUJFVkNRQzBzS2lna0lnVVFLeVV1QVNNaURnRUhCaU1pSmk4QkppOEJKaThCTGdNdkFTNENOVFErQWpjMkp5WXZBU1lqSWdjR0l3Y09BZ2NPQVJRZUFSY2VBUmNlQVJjZUFUTXlQZ0kzTmljbUEwQWJaeVVHREFvRU1Bb0VDZ3NDSlJZRUFRSUVCZ1lORUF3QkNnZ0lBZ1lKQnlFZUVERUNIU1ljSkFFQkFRNFhEd1FFQkFnVUVDTklNeXc2TmpWaEpCWVdJeUFTTmlzR2dSczdBZ1FDSHdjS0FoOFlBd0lEQXdZSERSTU5BUXNLREFRRENBc09DU3cvSVRzREpCY0JBUWtXR0F3TkZpSWtNeDFBWVRVdU1DY21LZ0lLR2haQk53WUFBQUFBQWdDQUFDQURnQUlnQUF3QUR3QXJRQ2dQQ3dvSEJnVUNBUWdBQVFGQUFBRUFBQUZMQUFFQkFFOENBUUFCQUVNQUFBNE5BQXdBREFNT0t5VVJCUmNISndjbkJ5YzNKUkVCSVFFRGdQNzZpQVNlWUdDZUJJaisrZ0x2L1NFQmNDQUI1TWViQkl0SlNZc0VtOGYrSEFJQS91Z0FBQUFCQUlELzRBT0FBbUFBTFFCQlFENGlEQW9EQWdBbUFRWURGd0VCQmdOQUJRUUNBZ0FEQUFJRFpnQURCZ0FEQm1RQUFBQUdBUUFHV1FBQkFRc0JRaWtuSlNNaElCNGRIUndXRkJBSER5c0FJZzRCRlJRWEhnSVhKalV4RmhVVUJ3WVdGek15UHdJMlB3RXpJelkzTWhjVk16SVZGak15UGdFMEpnSm8wTEZuUFFFREFnRUNCeVFDQ1FnR0F3UURaUUVLQ1FFQkN3c0xDZ0lCUFZwb3NHWm5BbUJUamxSYVRBRUVCQUVEQVFzTUFuSUdEQUlCQVN3QkF3UURBUU1CQVJSTmlxZU9BQUFBQUFJQVlQK0FBNkFDd0FBRkFBMEFiVXV3Q2xCWVFDa0FBUVlEQmdFRFpnQUVBd01FWFFBQUFBSUdBQUpYQndFR0FRTUdTd2NCQmdZRFR3VUJBd1lEUXh0QUtBQUJCZ01HQVFObUFBUURCR2tBQUFBQ0JnQUNWd2NCQmdFREJrc0hBUVlHQTA4RkFRTUdBME5aUUE0R0JnWU5CZzBSRVJJUkVSQUlGQ3NCSVJFek5TRUZFU0VYTXpVekVRS2cvY0RnQVdEK3dBRkZnQnRnQXNEK1FPQWcva0NBZ0FIQUFBQUFBQWNBcy8vaEF5Z0Nad0EzQUVZQVdBQm1BSEVBandDN0FRQkFJWmtCQ3drWkZCTURBQWQyQVFRQUJRRU1BMHdwQWdJTUJVQitBUVVsQVEwQ1AwdXdDMUJZUUZRQUNRZ0xDQWtMWmdBS0N3RUxDZ0ZtQUFBSEJBRUFYZzhCQkEwSEJBMWtBQTBEQncwRFpBQU1Bd0lEREFKbURnRUNBbWNBQ0FBTENnZ0xXUUFCQlFNQlRRWUJCUUFIQUFVSFdRQUJBUU5SQUFNQkEwVWJRRlVBQ1FnTENBa0xaZ0FLQ3dFTENnRm1BQUFIQkFjQUJHWVBBUVFOQndRTlpBQU5Bd2NOQTJRQURBTUNBd3dDWmc0QkFnSm5BQWdBQ3dvSUMxa0FBUVVEQVUwR0FRVUFCd0FGQjFrQUFRRURVUUFEQVFORldVQW1jM0k1T0xXMHNyR2tvNkNmbUplVWtvU0RnSDk5ZkhLUGM0OUJQemhHT1VZZUhSRVFFQTRyQVM0Q05qOEJOaWN1QVE0QkR3RU9BU0ltSnpVbVBnSTNOQzRDQmdjT0JCVU9BUjBCSGdRWEZqNENOelluSmdNR0xnSTFORFkzTmhZVkZBY0dKdzRERnhVVUhnRVhGalkzUGdFdUFRY0dKalUwTmpjMkhnSVZGQVkzQmlZbkpqWTNOaFlYRmpjeVBnRTNOVFl1QkE4QklnWVZGRE0ySGdNT0FSVVVGeFluTGdFR0lnNEJCeU1QQVFZVkZCNEJNelkzTmpJZUF4Y1dCdzRDRlJRV01qWTNNejRCTGdNQ2hRY0lBUUVCQVJnZENpQWdIUWtLQlFnR0F3RUJBUUVDQVFNTUZTVVpHVE1uSUJBWEZ3UWlMejg2SVNkWFQwSVBKRUFRNnlWRk1oNXRUVTlzUWpWWUhTZ1FDQUVCRGcwdlVob01BaEl6UGc4VUV3NElEZ2tHRlM4RkN3SURBZ1VHQ3dJRzlBUUhCUUVDQnhBVkZoSUZCZ2NLRVJBV0RnWURBUUVPQWdzSkV4RU9Ed1lGQVFFQkVnY0xCd0VWQXc0VkdSa1pDUk1MQVFFRERoVU1BUUVKQVJBWklTSUJMZ0VHQmdZQ0FqSWxEQWtIQ2dVRkFnSUJBd1FEQ0FjTUJBNFhHZzRCQ3dzckx5d2JBU2hQRkJRc1JTc2ZEZ01FRWlkQ0ttTTBEZjdtQWhVbk9TRkJYd1VFVEVGS055djdCU0FuSmcwTkJRNGdDQjRZS1JROE55SzBBaE1QRUJzQ0FRVUpEUWdRR1VFRkFRWUZFQVFGQVFZTnRBVUlCZ0llTFJrUkJBRUJBUXdKRmdZSENSWVBGQWNDRXdJQi9nTURBUU1DQVFFQkJoZ0pEZ2tCQmdFQ0N4QWVFemN5QWdZUUJ3MFBDaEFxU2pjdUh4UUFBQVlBUVAra0E4QUNtd0FPQUJrQVBBQkhBRThBY3dDSlFJWlNBUVFMWmw0Q0RRQmZPakVEQmcwRFFEazBBZ1k5Q2dFSENBc0lCd3RtRVFFTEJBZ0xCR1FRQWc4REFBRU5BUUFOWmc0QkRRWUJEUVprQUFZR1p3QU1DUUVJQnd3SVdRVUJCQUVCQkUwRkFRUUVBVkVEQVFFRUFVVlJVQkFQQVFCdGFtbG9WbFJRYzFGelRVeEpTRU5CUGowd0xpSWZIaDBXRlE4WkVCa0dCQUFPQVE0U0Rpc2xJaVkwTmpNeUhnTVZGQTRCSXlJdUFUVTBOaklXRkFZRk5DNEJKeVlyQVNJT0JoVVVGeDRCTXpJM0Z6QVhIZ0UrQVRVblBnRUFJaVkwTmpNeUhnRVZGRFl5RmhRR0lpWTBGeklYTGdFaklnNERGUlFXRndjVUJoUWVBVDhCSGdFek1Ec0NMZ0UxTkQ0QkF3NFFGeGNRQmd3S0J3UUxFZE1LRWdzWElCY1hBV3BFZFVjR0JRa2ROaklzSmg0VkN3Z1hsV0ZCT2o0QkFnVUVBeElzTXYxVUlCY1hFQXNTQ3IwaEZoWWhGdG9HQ3hHMGR6VmhUenNoUFRZWUFRVUpDbGdjT3lBREJBTUVCRkNJNFJjaEZ3UUlDUXdIQ2hJTEN4SUtFUmNYSVJjNFAydENCQUVLRWhvaEp5b3dHUjBkVDJnWktnRUJBUUVIQmtJaVhnRkVGeUFYQ2hJTEVEY1hJQmNYSUVFQlpvZ2NNMFZWTFVCdkoxa0JCQW9EQXdROUNnb1BIUTlIZUVZQUFBZ0FRUDloQThFQzRnQUhBQkFBRkFBWUFCMEFKZ0F2QURjQVprQmpNQ0FUQXdJRU5pRUNBUUkzSFF3QkJBQUJMUndDQXdBc0p4b1hCQVVEQlVBQUFRSUFBZ0VBWmdBQUF3SUFBMlFJQVFRR0FRSUJCQUpYQndFREJRVURTd2NCQXdNRlVRQUZBd1ZGSHg0VkZSRVJLaWdlSmg4bUZSZ1ZHQkVVRVJRU0ZRa1FLeVVCQmhVVUZ5RW1BU0VXRndFK0FUVTBKeVluQndFV0Z6OEJFVFkzSndNaUJ4RUJMZ01ERmpNeU5qY1JCZ2NCRGdRSEZ3RmQvdmNVR0FFUEJnSkkvdkVGQlFFSkNnbzFSSUsvL201RWdML2JmMEMvMDBwR0FSTVFIeUVpbEVCREprZ2lCUVgrcHhndUtTUWZETDZjQVFsQVJFcEdCZ0ViQlFiKzl4OUNJa3VJZ0VEQS9scC9QNzdFL29ORWdiOEJ5UmorOFFFVEJRY0ZBL3lURkF3TUFRNEZCQUl2RFNBbUtpOFp2Z0FBQUFBRkFBWC9RZ1A3QXdBQUlRQTBBRUFBVUFCZ0FNRkFEZ2dCQWdVV0FRRUNBa0FRQVFFOVM3QUxVRmhBS1FvQkFBQURCQUFEV1EwSURBWUVCQWtIQWdVQ0JBVlpDd0VDQVFFQ1RRc0JBZ0lCVVFBQkFnRkZHMHV3RmxCWVFDSU5DQXdHQkFRSkJ3SUZBZ1FGV1FzQkFnQUJBZ0ZWQUFNREFGRUtBUUFBQ2dOQ0cwQXBDZ0VBQUFNRUFBTlpEUWdNQmdRRUNRY0NCUUlFQlZrTEFRSUJBUUpOQ3dFQ0FnRlJBQUVDQVVWWldVQW1VbEZDUVNNaUFRQmJXVkZnVW1CS1NFRlFRbEE4T3pZMUxTc2lOQ00wR2hnQUlRRWhEZzRyQVNJT0FoVVVGaGNXRGdRUEFUNEVOeDRCTXpJK0FqVTBMZ0VESWk0Qk5UUStBek15SGdJVkZBNEJBaUlHRlJRZUFUSStBVFUwSlNJT0FoVVVGak15UGdJMU5DWWhJZ1lWRkI0RE16SStBVFF1QVFJRlo3MktVbWxiQVFnT0V4SVFCUVVJSFZCR1VCZ2FOeHhudW9aUGh1ZUtkTUYwSzFCb2drUlZtMjlDY0w1UFBTb1VJU2NpRlA3T0R4b1REQ29lRHhzVURDc0JzUjhwQncwU0Znd1VJUlFVSVFNQVJIU2dXR1d5UEJjdEpDRVlFUVVFQVFZVEZpUVVCUVZFZEtCWWRjaHovUFJUbTJFNmJsbERKVHBoaFVsaG1sUUJweWNmRlNNVkZTTVZIeWNLRWhzUElDME1GUndRSHljbkh3MFhFdzRJRlNNcUlCRUFBQUVBVi85dUE2a0MwUUY1QWFKQmpRRmlBSVlBZEFCeUFIRUFiZ0J0QUd3QWF3QnFBR2tBWUFBaEFCUUFFd0FTQUJFQUVBQU1BQXNBQ2dBRkFBUUFBd0FDQUFFQUFBQWJBQXNBQUFGSEFVWUJSUUFEQUFJQUN3RmdBVjBCWEFGYkFWb0JXUUZZQVVvQXFBQ25BSjBBa0FDUEFJNEFqUUNNQUJBQURRQUNBSnNBbWdDWkFKUUFrd0NTQUFZQUFRQU5BUzRCTFFFcUFMVUF0QUN6QUFZQUNRQUJBU2NCSmdFbEFTUUJJd0VpQVNFQklBRWZBUjRCSFFFY0FSc0JHZ0VaQVJnQkZnRVZBUlFCRXdFU0FSRUJFQUVQQVE0QkRRRU1BTzBBekFETEFNa0F5QURIQU1ZQXhBRERBTUlBd1FEQUFMOEF2Z0M5QUx3QUt3QUZBQWtCQ2dEb0FPY0Ewd0FFQUFNQUJRQUhBRUFCUkFDSEFBSUFDd0NjQUpFQUFnQU5BUXNBQVFBRkFBTUFQMEJGREFFTEFBSUFDd0ptQUFJTkFBSU5aQUFOQVFBTkFXUUFBUWtBQVFsa0NnRUpCUUFKQldRRUFRTUZCd1VEQjJZSUFRY0had0FBQ3dVQVN3QUFBQVZQQmdFRkFBVkRRUjRCVndGVUFVTUJRZ0ZCQVQ4QkxBRXJBU2tCS0FEOUFQb0ErQUQzQU93QTZ3RHFBT2tBMndEYUFOa0EyQUNtQUtVQW1BQ1ZBRGtBTndBT0FBNHJFeThDTlQ4Rk5UOEhOVDhpT3dFZk1SVUhGUThESFFFZkVSVVBEU3NDTHd3akR3d2ZEUlVYQngwQkJ4VVBEeU1ISXk4Tkl5Y2pKdzhKSXc4Qkt3SXZGRFUzTlRjOUFUOFBNejhCTXpVdkVTc0JOU01QQVJVUERTc0NMd2cxUHhmUkFnRUJBZ0VEQWdRRkFRRUNBZ0lDQWdNQkFnTUVBZ01EQkFRRUJRWURBd2NIQndrSkNRc0lDQWtLQ1FzTEN3c01DdzBOR1EwbkRRME9EQTBORFEwTURBd0xDd2tGQkFrSUJ3Y0dCd1VGQmdRSEJBTURBZ0lDQkFNQ0FRSUJBZ1VEQWdRREFnSUNBUUVCQVFNQ0FnTU1DUVFHQlFZR0J3UURBd01DQXdJREFRRUJBZ1FCQWdJQ0F3SURBZ1FEQWdNREJBSUNBd0lFQkFRREJBVUZBUUVDQWdJRUJRY0dCZ2NIQXdVS0FRRUZGZ2tKQ1FnRUFnTURBUUlCQVFJQ0JBTURBd1lHQndnSkJBUUtDZ3NMREFzbERnd05EUTRPRFEwT0RRY0dCQVFMREFjSUJRY0tDd2NHRUFnSURBZ0lDQW9uRmhZTEN3b0tDZ2tKQ0FnR0J3SURBZ0lDQVFJQkFRRUJBZ0VEQWdFRUF3UUNCUU1GQlFVR0JnY0hBZ0VCQkFvR0NBY0lDUVFFQkFNRkF3UURBd0lCQVFFREFRRUJCUUlFQXdVRUJRVUdCZ1VIQndFQ0FRSUNBZ0lCQVFJQkFRRUNBUU1EQXdNRUJRVUZCd2NIQmdjSUJBVUdCd3NJQVVzRkJ3UU9CZ1lIQndnSEJRVUhCd2tEQkFRQ0V3b0xEUTRIQ1FjSUNnZ0pDUVVFQ2dvSkNna0tDZ2NHQndVRkJRVUVBd1FEQWdJRUFRSUJBd01EQkFRRkJnVUhCd1lFQXdjSUJ3Z0lDQWtJQ1FnUkNRZ0pDQWNKRHcwTUNoQUNBd2dGQmdZSENBZ0lCQVlFQkFZRkNnVUdBZ0VGRVEwSUNnb0xEQTRKQ0FrSUNRZ1BFQTRUQnd3TENnUUVCQVFDQkFNQ0FRSURBUUVEQWdRR0JnVUdDZ3NCQWdNREN3OFJDUW9LQ2dVRkNnRUJBd3NGQlFjR0F3UUVCQVFFQkFRREF3TURBZ01GQlFNQ0JRTUVBd1FCQVFNQ0FnSUNBUUVDQVFJRUFnUUZCQUlDQWdFQkFRVUVCUVlEQXdZQ0FnTUJBUUlDQWdFQ0F3SUVBd1FFQlFJREFnTURBd1lEQXdNRUJBTUhCQVVFQlFJREJRSUNBd0VDQWdJQ0FRRUJBUUVDQWdnRkJ3Y0tDZ1lHQndjSENBa0pDQXNCQVFJQ0FnTUlCUVFGQmdRRkJRTUVBZ0lEQVFZRUJBVUZDd2NXRUFnSkNRZ0tDZ2tLQ1FzSkN3a0tDQWdJQkFVR0JRb0dBQUFBQkFCZUFDQURvZ0lnQUJNQUtBQXNBREVBTjBBME1UQXZMaXdyS2lrSUFnTUJRQVFCQUFBREFnQURXUUFDQVFFQ1RRQUNBZ0ZSQUFFQ0FVVUNBQ1lqR1JZTENBQVRBaE1GRGlzQklTSU9BUlVSRkJZeklUSTJOUkUwTGdNVEZBWWpJU0l1QlRVUk5EWXpCVElXRlJjVkZ4RUhFU2MxTndKZi9rWVNJUlFySEFHNkhDY0hEQkFVRlJNTy9rWUVDQWNIQlFRQ0ZnOEJ1ZzRUWHNRaWdJQUNJQkVlRXY2SUhDc3FIUUY0Q3hRUURBYitSdzhXQWdRRkJ3Y0lCQUY0RFJJQkVRMXBxMnNCZ0R6KzkwT0VRd0FBQUFZQWdBQUFBNEFDUUFBZkFFa0FVUUJaQUYwQVpRRGZTN0FvVUZoQVVnQVBDdzRIRDE0QUVBNFNEaEFTWmdBQkNRRUlBd0VJV1FBREFBY0RTd1FDRXdNQUNnRUhDd0FIV1FBTEFBNFFDdzVaQUJJQUVRMFNFVmtBRFFBTUJnME1XUUFHQlFVR1RRQUdCZ1ZTQUFVR0JVWWJRRk1BRHdzT0N3OE9aZ0FRRGhJT0VCSm1BQUVKQVFnREFRaFpBQU1BQndOTEJBSVRBd0FLQVFjTEFBZFpBQXNBRGhBTERsa0FFZ0FSRFJJUldRQU5BQXdHRFF4WkFBWUZCUVpOQUFZR0JWSUFCUVlGUmxsQUxBRUFaV1JoWUYxY1cxcFhWbE5TVDA1TFNrWkVPamczTmk4dEppTWFGeElRRHc0TkRBZ0ZBQjhCSHhRT0t3RWpKaWN1QVNzQklnWUhCZ2NqTlNNVkl5SUdGUkVVRmpNaE1qWTFFVFFtRXhRT0FTTWhJaVkxRVRRK0Fqc0JOejRCTnpZL0FUTXdPd0VlQWhjZUF4OEJNekllQVJVa0lnWVVGakkyTkFZaUpqUTJNaFlVTnpNVkl3UVVGakkyTkNZaUEwTjdBd1l3SkJDeEVDTXVDQVFiUkJzYktDa2FBb0FhSXlNREJ3NEkvWUFORmdZSkRRZUlDUVFQQXlZTkRMRUJBUUVEQlFNRkR4Z1NDZ21LQ1EwSC91ZU9aR1NPWkhGMFVWRjBVVFVpSXY4QUpUWWxKVFlCNEFNSE5TRWZOQWdGSUNBa0dmNmdHeWdvR3dGZ0dpUCtZd29QQ2hZTkFXQUdDd2NGQmdVVEJDb01DQUVDQXdNRkVSd1VDd1lIRGdnQ1pJNWtaSTdTVVhSUlVYVGdJbWsySlNVMkpRQURBUUQvWUFNQUF1QUFDd0FYQURFQVRVQktEQXNDQlFNQ0F3VUNaZ0FBQUFNRkFBTlpBQUlBQVFRQ0FWa0FCQW9CQmdjRUJsa0pBUWNJQ0FkTENRRUhCd2hQQUFnSENFTVlHQmd4R0RFdUxTd3JFUkVURXljVkZ4VVFEUmNyQUNJR0ZSRVVGakkyTlJFMEF4UUdJaVkxRVRRMk1oWVZGeFVVRGdFaklpWTlBU01WRkJZWEZTTVZJVFVqTlQ0QlBRRUNRWUpkWFlKZElFcG9Ta3BvU21BN1pqdGFnaWFMWlpJQlFvcGpod0xnWWtYK3kwVmlZa1VCTlVYK2hqaFBUemdCTlRoUFR6aVpuenhrTzRCYm41OWxrd2QrSkNSK0I1Tmxud0FBQkFEMC8yQUREQUxnQUJJQUpBQXNBRGtBUmtCREZoUVREQW9HQmdNRUFVQVlDQUlEUFFBQUFBRUNBQUZaQUFJQUJRUUNCVmtHQVFRREF3Uk5CZ0VFQkFOUkFBTUVBMFV1TFRRekxUa3VPU29wSmlVaElCQUhEeXNBSWdZVkZCOENHd0UzTmo4QlBnSTFOQWNWQmc4QkN3RW1KeTRCTlRRMk1oWVZGQ1lpQmhRV01qWTBCeUltTlRRK0FUSWVBUlFPQVFKdjNwMFRBUVAxOVFFQkFRRUdDUVF5QVFFQzF0Z0JBUWdLaXNTS3QycExTMnBMZ0NjM0dTd3lMQmtaTEFMZ20yNHpNZ01HL2ZjQ0NRSURBUU1RSVNJUmI4Z0JBUU1FL2prQnl3TUJGaTRYWVlpSVlTNjNTMnBMUzJxVE55Y1pMQmtaTERJc0dRQUNBUUQvWUFNQUF1QUFDd0FsQUVGQVBnb0pBZ01CQUFFREFHWUFBUUFBQWdFQVdRQUNDQUVFQlFJRVdRY0JCUVlHQlVzSEFRVUZCazhBQmdVR1F3d01EQ1VNSlJFUkVSRVRFeWtWRUFzWEt5UXlOalVSTkNZaUJoVVJGQ1VWRkE0Qkl5SW1QUUVqRlJRV0Z4VWpGU0UxSXpVK0FUMEJBYitDWFYyQ1hRRjhPMlk3V29JbWkyV1NBVUtLWTRkZFlrVUJOVVZpWWtYK3kwWGhuenhrTzRCYm41OWxrd2QrSkNSK0I1Tmxud0FBQUFJQTlQOWdBd3dDNEFBU0FCOEFLMEFvREFvSUJnUUJQUU1CQVFJQmFRQUFBZ0lBVFFBQUFBSlJBQUlBQWtVVUV4b1pFeDhVSHhBRUR5c0FJZ1lWRkI4Q0d3RTNOajhCUGdJMU5BVWlKalUwUGdFeUhnRVVEZ0VDYjk2ZEV3RUQ5ZlVCQVFFQkJna0UvdlFuTnhrc01pd1pHU3dDNEp0dU16SURCdjMzQWdrQ0F3RURFQ0VpRVcvRE55Y1pMQmtaTERJc0dRQUZBUUQvWUFNd0F1QUFBd0FLQUJVQUhRQTFBRjlBWEFjQkFnRWNHeFFHQkFBQ0lRRUVBQ0FCQXdRRVFBVUJBZ0VBQVFJQVpnQUJDZ0VBQkFFQVdRQUVCZ0VEQndRRFdRa0JCd2dJQjBzSkFRY0hDRThBQ0FjSVF3VUVOVFF6TWpFd0x5NHJLaVFpSHg0WUZ4QU9CQW9GQ2dzT0t3RTNBUWNsTWpjREZSUVdOeEUwSmlNaURnRUhBVFkzTlNNVkZBY1hOZ2MyTnljR0l5SXVBejBCSXhVVUZoY1ZJeFVoTlNNQkVSd0NBeHorN0NVZzQxM2ZYRUlaTHlZUEFSSUpZaUlpRkREcU1pMFRMVE1qUXpZcEZ5YUxaWklCUW9vQzBCRDhrQkQ5RVFHQjYwVmlwd0UxUldJUUhSUCtMUm9hbjU5QU5TSkRxd01YSUJZV0tUVkRJNkNmWlpNSGZpUWtBQUFEQUVEL29BUEFBcUFBQndBWEFEb0FrRUFMTVFFQkJ6b3dBZ01GQWtCTHNCaFFXRUF3QUFZQkFBRUdBR1lBQkFBRkJRUmVDQUVDQUFjQkFnZFpBQUVBQUFRQkFGa0FCUU1EQlUwQUJRVURVZ0FEQlFOR0cwQXhBQVlCQUFFR0FHWUFCQUFGQUFRRlpnZ0JBZ0FIQVFJSFdRQUJBQUFFQVFCWkFBVURBd1ZOQUFVRkExSUFBd1VEUmxsQUZBb0lOak11TENVakd4a1NEd2dYQ2hjVEVBa1FLd0F5TmpRbUlnWVVBU0VpQmhVUkZCWXpJVEkyTlJFMEpnTW1JeUlHRHdFT0JDTWlKeTRDTHdFbUl5SUhBeEUrQVRNaE1oNEJGUk1DdUZBNE9GQTRBUWo4OEJjaElSY0RFQmNoSWVVTER3Y0xCeVlDQkFVRUJRTU5DUUVEQXdGc0RSUVVEdjBDRGdvQ3pBWU1Cd0VCWURoUU9EaFFBUWdoR1AxeUdDRWhHQUtPR0NIK2RRd0dCU0FDQWdNQkFRZ0JBZ1FCZEE4UC9zOENDUW9OQmdzSC9mY0FBQUFJQUZiL1BRTzNBc2tBS1FBMkFGVUFZd0J4QUlBQWtRQ2RBTEpBcjNJQkJ3eE5BUVlIY0FFTENUZzNJQk1FQWdWTVJVUVpCQUFDS2dFQkFBWkFWVlJPQXdRTVBnQUdCd2tIQmdsbUFBVU9BZzRGQW1ZQUFnQU9BZ0JrQUFBQkRnQUJaQUFCQVdjQURBQUxCQXdMV1FBSkFBb0RDUXBaQUFRQUF3MEVBMWtTQVEwQUVBZ05FRmtSQVFjQUNBOEhDRmtBRHc0T0QwMEFEdzhPVVFBT0R3NUZnb0ZYVnBpV2s1S0tpSUdSZ3BGL2ZuZDJiV3hsWkYxY1ZtTlhZMUZRU1VoQVBqSXdJeUlkSEJjVkV3NHJBU2NQQVNjbUR3RU9BUlVSRkI0RE5qOEJGeFl6TWo4QkZoY1dNamMyTnhjV01qWTNOalVSTkFFdUFUVTBQZ0V6TWhZVkZBWTNKejRCTlRRdUFTTWlCaFVVRndjbkxnRWpCZzhCRVRjWEZqSTJQd0VYQlNJR0ZSRVVGakkyTlJFMExnRVhJZzRDSFFFVUZqSTJQUUVtTnhVVUhnRXlQZ0U5QVRRdUFTTUdBeUlPQWhVVUZqTXlQZ0kxTkM0QkJpSW1ORFl6TWg0Q0ZSUURxYmNMMjhrSEI5TUdCZ0lFQkFZR0E4M0tBd1FFQXg0dlF3VVVCV1FzVGdNR0JRSUgvdncyWENkREtEMVdYYWt6QmdVeFZESk1heVlXeVFJREFnUUR1c0hLQWdVRkF0eWkvYW9JQ3dzUEN3VUl6QVFIQlFNTER3c0R4QVVJQ2drRkJRa0ZEekFPR1JJTEtCd09HUk1MRXg4R0doTVREUWNMQ1FVQ255b0JaRlFEQTFJQ0NRYjl2QU1HQlFNQ0FRRlFWUUVDRFY1bUNBaVhiaElCQWdJR0NBSkZEdnpWVmJVcUowUW5WandxdFpvTUVSd01NVlV4YkVzcFVncFVBUUVCQVVnQ0hFeFZBUUVCWkNVMUN3ZitrQWdMQ3dnQmNBVUlCVWNEQlFjRGpRY0xDd2VORDFLNkJRa0VCQWtGdWdVSUJRUCtuUXNTR1E0Y0tBb1RHUTRTSUJKa0V4b1RCUWtNQmcwQUFBQUFBd0NnLytBRGdBS2dBQWtBRWdBakFFRkFQaDRTRVEwTUJRSUdEZ2tJQXdRQkFrQUFCUVlGYUFBR0FnWm9BQVFCQUFFRUFHWUFBZ0FCQkFJQlZ3QUFBQU5QQUFNREN3TkNFaWNZRVJFUkVBY1ZLeWtCRVNFM0lSRWhFUWNGSndFbkFSVXpBU2MzSnk0Q0l5SVBBVE1mQVRjK0FUVTBBdUQ5NEFHZ0lQNGdBbUFnL3ZzVEFWWVcvcGhBQVdrWFJoa0NCd2NFQ3dnWkFSWXFHQVFFQWdBZy9jQUJ3Q0NZRXdGWEYvNllRUUZvRjBBWkF3TUNDQmdYS2hrRUNnVU1BQUFBQmdEZy82QURJQUtnQUNBQUx3QkNBRVlBU2dCT0FMaEFDMEE1T0RBZUVBWUlDd0ZBUzdBVVVGaEFRUUFLQXd3RENsNE9BUXdOQXd3TlpBOEJEUXNERFF0a0FBc0lDQXRjQUFFQUJnQUJCbGtIQWdJQUNRVUNBd29BQTFjQUNBUUVDRTBBQ0FnRVVnQUVDQVJHRzBCREFBb0REQU1LREdZT0FRd05Bd3dOWkE4QkRRc0REUXRrQUFzSUF3c0laQUFCQUFZQUFRWlpCd0lDQUFrRkFnTUtBQU5YQUFnRUJBaE5BQWdJQkZJQUJBZ0VSbGxBR1U1TlRFdEtTVWhIUmtWRVEwSkJOQlkxR2pNUkZUTVFFQmNyQVNNMU5DWXJBU0lPQWgwQkl4VXpFeFFXTXlFeVBnYzFFek1sTkQ0Q093RXlIZ01kQVNNQkZSUUdJeUVpSmk4QkxnUTlBUU1oQnpNUkl4TWpBek1ESXhNekF5Q2dJaG1MQ3hZUUNhQXFMeU1ZQVJvRkN3a0pDQVlGQkFJdUtmNTlCUWdMQllzRkNRY0dBOFlCRGhFTS91WURCZ01FQXdRREFnRXdBYlBvSEJ5T0hSWWV6aDBWSGdJOUtCa2lDUkFXRENnZC9ic1pJZ0lEQmdZSUNBb0tCZ0pGUlFZTENBVURCZ2NKQlNqOW53RU5FUUVDQWdJRUJRVUdBd0VDUkVEK0hnSGkvaDRCNHY0ZUFBQUFBQUlBd1ArZ0EwQUM0QUFMQUJRQVAwQThGQkVRRHc0TkRBY0RQZ0FHQUFFQUJnRm1Cd1VDQXdJQkFBWURBRmNBQVFRRUFVc0FBUUVFVUFBRUFRUkVBQUFURWdBTEFBc1JFUkVSRVFnVEt3RVZNeEVoRVRNMUlSRWhFU1VuTnhjSEp4RWpFUUpBNFAzQTRQOEFBb0QrUWhlVmxSZHVJQUlBSVAzZ0FpQWcvYUFDWURRWGxaVVhiZjRhQWVZQUFnREEvNkFEUUFLZ0FBc0FGQUErUURzVUVSQVBEZzBNQndFQUFVQUFCZ01HYUFjRkFnTUNBUUFCQXdCWEFBRUVCQUZMQUFFQkJGQUFCQUVFUkFBQUV4SUFDd0FMRVJFUkVSRUlFeXNCRlRNUklSRXpOU0VSSVJFRkJ4YzNKd2NSSXhFQ1FPRDl3T0QvQUFLQS9rSVhsWlVYYmlBQ0FDRDk0QUlnSVAyZ0FtRFpGNVdWRjIwQjV2NGFBQUFEQUZIL2NRT3ZBc0FBRGdBZEFDa0FKMEFrS1NnbkppVWtJeUloSUI4ZURBRTlBQUFCQVFCTkFBQUFBVkVBQVFBQlJSa1lFZ0lQS3dFdUFTSUdCdzRCSGdJK0FpWUREZ0V1QWpZM1BnRXlGaGNXRUFNSEp3Y1hCeGMzRnpjbk53TW1QSnVlbXp4UU9UbWcxdGFnT1Rsb1NjWEZralEwU1RlUGtJODNiOVdvcUJpb3FCaW9xQmlwcVFKR1BENCtQRkRXMXFBNU9hRFcxdjRjU1RRMGtzWEZTVFk1T1Rady9zUUJYcWluRjZpb0Y2ZW9HS2lvQUFBQUFnQitBQUFEZ0FKZ0FCTUFJZ0JCUUQ0V0NnSURCQnNYRWhBSkJRQUJBa0FWQ3dJQ1BnQUFBUUJwQUFJRkFRUURBZ1JaQUFNQkFRTk5BQU1EQVZFQUFRTUJSUlFVRkNJVUloc1VGaEFHRWlzN0FUYzJOejRDTnhVSkFSVUdCd1lYTUJVd0FUVU5BVFVpQmdjbVBnV0FGU1pLVGh3clFDWUJnUDZBdDJoakFnR2dBU2orMkl5dlJRRUJEQmc0VDRNK2R5TU1Ed3dCb0FFQUFRQ2hDR2hrcFFZQllJSEJ3b0pjZHdjWlJrQk9PQ2NBQUFBQUFnQ0FBQUFEZ0FKZ0FCOEFLZ0E2UURjbERBSURCQ1FnRFFBRUFnRUNRQ1lMQWdBK0FBSUJBbWtBQUFBRUF3QUVXUUFEQVFFRFRRQURBd0ZSQUFFREFVVVVIQllVR1FVVEt5VXdOVFF1QWljdUFTYzFDUUUxSGdFWEhnRWZBVE13UFFjbkxnRWpGUzBCRlNBWEZnT0FBeEFzSXpXTFh2NkFBWUEzVENvclNpTW1GU0JGcjR6KzJBRW9BUVJaSTBBR0dpcFJVU00xTndTaC93RC9BS0FDRXhNVVRqZytCd2NJQndjSUJnZ1RkMXlDd3NHQnRFa0FBQU1BWVArQUE2QUN3QUFWQUIwQUxnQmRRRm9OQVFJSUN3RUVBUUpBREFFQkFUOEpBUVFCQUFFRUFHWUFCUUFJQWdVSVdRQUNBQUVFQWdGWkFBQUFBd2NBQTFrS0FRY0dCZ2ROQ2dFSEJ3WlJBQVlIQmtVZkhnQUFKeVllTGg4dUd4b1hGZ0FWQUJVVEZCVWlDeElyQVJRR0l5SXVBVFErQVRNVk55Y1ZJZ1lVRmpJMk5RSWdCaEFXSURZUUFTSXVBVFUwUGdJeUhnSVVEZ0lDMkg1YU8yTTZPbU03d01CcWxwYlVsbFQrcVBUMEFWajAvbUJuc0dZOFpvNmFqbVk4UEdhT0FTQmFmanBqZG1NNmIyK0FXSmJVbHBWckFhRDAvcWowOUFGWS9kZG1zR2ROam1ZOFBHYU9tbzVtUEFBQUFBSUFRUCtBQThBQ3dBQUpBQk1BTGtBckVBSUNBRDRURFF3TENna0lCd1lGQ2dJOUFRRUFBZ0lBU3dFQkFBQUNUd01CQWdBQ1F4SWFFaEFFRWlzQklRc0JJUVVESlFVREZ5Y0hOeWNoTnhjaEJ3UEEvcWxwYWY2cEFSaHRBUlVCRlc0dTFkVlYyQUVHVWxJQkJ0Z0JnZ0UrL3NMRS9zTEZ4UUUrNkppWTlaWDM5NVVBQUFNQVlQK0FBNkFDd0FBSEFCb0FKZ0JIUUVRQUFBQURCQUFEV1FrQkJRZ0JCZ2NGQmxjQUJBQUhBZ1FIVndvQkFnRUJBazBLQVFJQ0FWRUFBUUlCUlFrSUppVWtJeUloSUI4ZUhSd2JFQTRJR2drYUV4QUxFQ3NBSUFZUUZpQTJFQUVpTGdFMFBnRXpNaDRFRlJRT0FnTWpGU01WTXhVek5UTTFJd0tzL3FqMDlBRlk5UDVnWjdCbVpyQm5OR05UUnpFYlBHYU9QU0h2N3lIdzhBTEE5UDZvOVBRQldQM1hackRPc0dZYk1VZFRZelJOam1ZOEFuM3dJZS92SVFBQUFBTUFZUCtBQTZBQ3dBQUhBQmdBSEFBOFFEa0FCQU1GQXdRRlpnQUZBZ01GQW1RQUFBQURCQUFEV1FZQkFnRUJBazBHQVFJQ0FWSUFBUUlCUmdrSUhCc2FHUkVRQ0JnSkdCTVFCeEFyQUNBR0VCWWdOaEFCSWk0Qk5UUStBakllQWhRT0FnRWhGU0VDclA2bzlQUUJXUFQrWUdld1pqeG1qcHFPWmp3OFpvNytzd0lBL2dBQ3dQVCtxUFQwQVZqOTEyYXdaMDJPWmp3OFpvNmFqbVk4QVkwaUFBQUFBZ0JnLzRBRG9BTEFBQWNBR0FBcFFDWUFBQUFEQWdBRFdRUUJBZ0VCQWswRUFRSUNBVkVBQVFJQlJRa0lFUkFJR0FrWUV4QUZFQ3NBSUFZUUZpQTJFQUVpTGdFMU5ENENNaDRDRkE0Q0FxeitxUFQwQVZqMC9tQm5zR1k4Wm82YWptWThQR2FPQXNEMC9xajA5QUZZL2RkbXNHZE5qbVk4UEdhT21vNW1QQUFDQUQ3L1hnUENBdUlBRVFBckFDcEFKd1FCQUFBREFnQURXUUFDQVFFQ1RRQUNBZ0ZSQUFFQ0FVVUNBQ1lqR1JZTUNRQVJBaEVGRGlzQklTSU9BaFVSRkJZeklUSTJOUkUwSmhNVURnSWpJU0l1QlRVUk5EWXpJVEllQXhVRFcvMUtGU1ljRUR3ckFyWXJQRHdQQ0E0VEN2MDhCZ3NLQ1FjRkF4NFZBc1FJRUF3S0JRTGlFQndtRmYxS0t6dzhLd0syS3p6ODNBb1REZ2dEQlFjSkNnc0dBc1FWSGdVS0RCQUlBQUFBQWdCUi8zRURyd0xBQUE0QUdnQVpRQllhR1JnWEZoVVVFeElSRUE4TUFEMEFBQUJmRWdFUEt3RXVBU0lHQnc0QkhnSStBaVlEQnljSEp6Y25OeGMzRndjREpqeWJucHM4VURrNW9OYldvRGs1dGhpb3FCaW9xQmlvcUJpcEFrWThQajQ4VU5iV29EazVvTmJXL29JWXFLY1hxS2dYcDZnWXFBQUFBQUlBWVArQUE2QUN3QUFIQUJ3QVEwQkFEZ0VEQUJBQkJnUUNRQThCQkFFL0FBWUVCUVFHQldZQUFBQURCQUFEV1FBRUFBVUNCQVZaQUFJQkFRSk5BQUlDQVZFQUFRSUJSUklWRkJNVEV4QUhGU3NBSUFZUUZpQTJFQUFpSmpRMk16VVhCelVpRGdFVkZCWXlOalV6RkFLcy9xajA5QUZZOVA3SzFKYVdhc0RBTzJNNmY3TitLQUxBOVA2bzlQUUJXUDVVbHRTV1dJQnZienBqTzFsL2ZscHFBQUFBQVFCQS80QUR3QUxBQUFrQUdFQVZBZ0VBUGdrSUJ3WUZCUUE5QVFFQUFGOFNFQUlRS3dFaEN3RWhCUU1sQlFNRHdQNnBhV24rcVFFWWJRRVZBUlZ1QVlJQlB2N0N4UDdDeGNVQlBnQUFBQUFDQUdEL2dBT2dBc0FBQndBVEFEWkFNd2NCQlFZQ0JnVUNaZ1FCQWdNR0FnTmtBQUFBQmdVQUJsY0FBd0VCQTBzQUF3TUJVZ0FCQXdGR0VSRVJFUkVURXhBSUZpc0FJQVlRRmlBMkVBY2pGU00xSXpVek5UTVZNd0tzL3FqMDlBRlk5S0R3SXU3dUl2QUN3UFQrcVBUMEFWaSs3dTRpOFBBQUFBQUFBZ0JnLzRBRG9BTEFBQWNBQ3dBaFFCNEFBQUFEQWdBRFZ3QUNBUUVDU3dBQ0FnRlJBQUVDQVVVUkV4TVFCQklyQUNBR0VCWWdOaEFISVRVaEFxeitxUFQwQVZqMG9QNEFBZ0FDd1BUK3FQVDBBVmkrSWdBQUFBTUFOUDlUQTgwQzdBQUhBQmdBS2dBNVFEWUFBUVFBQkFFQVpnQUFCUVFBQldRQUF3WUJCQUVEQkZrQUJRSUNCVTBBQlFVQ1VnQUNCUUpHR2hraklSa3FHaW9YRlJNU0J4SXJBQlFXTWpZMEppSUZGQTRDSWk0Q05ENENNaDRDQVNJT0FoVVVIZ0V6TWo0Q05UUXVBUUV1Zks1N2U2NENJMGg4cXJ5cmUwbEplNnU4cW54SS9qUlJsR3RBYTdodFVaUnJQMnU0QVhldmUzdXZlOU5kcTN0SlNYdXJ1NnQ3U1VsN3F3RXlRR3FVVW15NGF6OXJsRkZ0dUdzQUFnQmcvNEFEb0FMQUFBY0FFZ0FuUUNRU0VSQVBEZ1VDQUFGQUFBQUNBR2dBQWdFQkFrMEFBZ0lCVWdBQkFnRkdKQk1RQXhFckFDQUdFQllnTmhBQkJpTWlKaThCTnhjM0Z3S3MvcWowOUFGWTlQNGdDUWtFQ2dSd0pGNzZJd0xBOVA2bzlQUUJXUDdCQ1FVRWNDTmUreVFBQUFBQ0FENy9YZ1BDQXVJQUZBQWNBQ3BBSnh3Ykdoa1lGZ1lCQUFGQUFnRUFBUUVBVFFJQkFBQUJVUUFCQUFGRkFnQUtCd0FVQWhRRERpc0JJU0lHRlJFVUZqTWhNalkxRVRRdUJRRW5CeWMzRndFWEExdjlTaXM4UENzQ3RpczhCUXNPRWhRWC9rUUZCY29ncndGaklBTGlQQ3Y5U2lzOFBDc0N0Z3dYRlJFT0N3WDlid1VGeWlDdkFXTWdBQUVCUUFCZ0FzQUI0QUFMQUFhekNBQUJKaXNCQnljSEZ3Y1hOeGMzSnpjQ3FLaW9HS2lvR0tpb0dLbXBBZUNwcUJlb3FCZW5xQmVwcUFBQUFBRUJBQUFnQXdBQ2VBQVVBRGxBTmdnQkJBSUJRQWNCQWdFL0JnRUJQZ0FFQWdNQ0JBTm1BQUVBQWdRQkFsa0FBd0FBQTAwQUF3TUFVUUFBQXdCRkVoVVVFeEFGRXlza0lpWTBOak0xRndjMUlnNEJGUlFXTWpZMU14UUNhdFNXbG1yQXdEdGpPbit6ZmlnZ2x0U1dXSUJ2Ynpwak8xbC9mbHBxQUFBQkFJRC9vQVFBQXFBQUpnQTRRRFViR2dvSkNBY0dCUVFKQWdFQlFBUUJBQUFCQWdBQldRQUNBd01DVFFBQ0FnTlJBQU1DQTBVQkFCOGRGeFVRRGdBbUFTWUZEaXNCTWg0QkZUY1hCeWMzRnpRdUFpTWlEZ0VVSGdFek1qNEJOeGNPQVNNaUxnRTFORDRDQWdCb3NXZHVFbzJGRW1ZNVlJUkpZYVZnWUtWaFRZdGpHQmtueUgxb3NXYzlaNDRDb0dheGFHa1NpSWdTYVVtRVlEaGdwY0tsWUQ1dVJ3ZDBrbWV4YUU2T1p6MEFBQUlBUVArQUE4QUN3QUFKQUE4QUtrQW5DZ2NDQUQ0UERnMEVBd0lCQUFnQ1BRRUJBQUlDQUVzQkFRQUFBazhBQWdBQ1F4SVNGUU1SS3lVREpRVURKU0VMQVNFbEZ5RUhGeWNCV0cwQkZRRVZiUUVZL3FscGFmNnBBY0JTQVFiWVZkVysvc0xGeFFFK3hBRSsvc0xVOXBYMWx3QUFBZ0FBL3lBRUFBTWdBQlFBS3dBOFFEa0FCUUVDQVFVQ1pnQUNCQUVDQkdRQUJBY0JBd1FEVlFBQkFRQlJCZ0VBQUFvQlFoWVZBUUFtSlNFZkZTc1dLdzhPQ2dnQUZBRVVDQTRyQVNJT0FnYytBak15RWhVVUZqSTJOVFF1QVFNeVBnTTNEZ01qSWdJMU5DWWlCaFVVSGdFQ0FHZTdpVklEQTNDK2I2ejBPRkE0aWV5TFVwdDhYellDQWtSdm1GT3M5RGhRT0luc0F5QlBocmxtZDhsMC92cTZLRGc0S0l2c2lmd0FNbDE2bVZKWm9uUkZBUWE2S0RnNEtJdnNpUUFBREFBbC8wUUQyd0w2QUE4QUhRQXVBRHdBVGdCZkFIQUFnQUNWQUtjQXRBRERBRzFBYXBXQmNBTUJBRTQ5QWdZQkxoNENCUWExQVFrS2xnRUNDUVZBQUFvRkNRVUtDV1lBQ1FJRkNRSmtDd0VBQUFFR0FBRlpDQUVHQndFRkNnWUZXUVFCQWdNREFrMEVBUUlDQTFFQUF3SURSUUVBdUxlWWx6czROREVyS0NNZ0hSd1hGaEVRQ2drQUR3RVBEQTRyQVRJZUF4MEJGQVlpSmowQk5EWVRNaFlkQVJRR0lpWTlBVFEyTXdFVUJpc0JJaTRCTlRRMk93RXlIZ0VWSVJRR0t3RWlKalUwTmpzQk1oWWxGaFFHRHdFR0ppY21OajhCUGdFZUFSY0JGZ1lQQVE0QkxnRW5KalkvQVRZV0Z3RWVBUThCRGdFbkxnRS9BVDRDRmhjQkhnRVBBUTRCSnk0Qk5qOEJQZ0VYQXo0QkhnRWZBUllHQndZbUx3RXVBVDRETndFMk1oWWZBUllHQnc0QkxnRXZBU1kyTndFK0FSOEJIZ0VPQVM4QkxnRUJQZ0V5SHdFZUFRNEJMd0V1QVRjQ0FBVUpCd1lERWhnU0Vnd01FaElZRWhJTUFkc1NESDRJRGdnU0RINElEZ2o5QkJJTWZnd1NFZ3grREJJQ3ZBUUlCMjBLR0FjR0J3cHRCZ3dLQ2dQOWFnWUdDMjBGREFzSkF3Y0hDMndMR0FZQjZBc0dCajhHR0FvTEJ3Yy9Bd2tMREFYK2dnc0dCajhHR0FzSENBRURQd2NZQ2wwR0RBc0pBejhHQmdzS0dBYy9BZ0lCQWdNR0F3Ri9CdzhPQkQ4R0Jnc0ZEQXNKQXo4SEJ3djkxQVlZQ20wTEJnd1lDMndMQndLY0JRNFBCMjBMQmd3WUMyMEtCd1lDK2dNRkNBa0ZmUTBSRVExOURSSDlCQkVOZmd3U0VneCtEUkVCSVF3UkNBMElEUkVJRFFrTUVSRU1EUkVSNFFnUERnUS9CZ1lMQ3hnR1B3TUJBd2NGL29JTEdBWS9Bd0VEQndVTEdBWS9CZ2NLQWl3R0dBdHRDd1lHQmhnTGJRVUhBd0VEL1dvR0dBdHRDd1lHQkE0UUIyMExCZ1lDbGdNQkF3Y0ZiUXNZQmdZR0MyMERDQWdIQndZQy9Xb0VDQWR0Q3hnR0F3RURCd1Z0Q3hnR0FlZ0xCZ1kvQmhnV0JnWS9CaGoralFjSUJEOEdHQllHQmo4R0dBc0FBZ0NCLzZBRGdRS2dBQThBSUFBdFFDb09BUUlEQWdGQUR3QUNBVDBBQUFBQ0F3QUNXUUFEQVFFRFRRQURBd0ZSQUFFREFVVW9HQ01tQkJJckJTYzJOVFF1QVNNaUJoUVdNekkzRndFdUFUVTBOaklXRlJRT0JDTWlBNEhqUTFLTVVuNnlzbjVyVk9MOW5pWXBuK0dnRXlNMFBVVWtjVEhpVkd0U2pWR3kvTE5FNHdFUEptUTJjYUNmY1NWRlBUUWpFd0FBQUFFQkFBQWdBd0FDSUFBTEFDVkFJZ0FFQXdFRVN3VUJBd0lCQUFFREFGY0FCQVFCVHdBQkJBRkRFUkVSRVJFUUJoUXJBU01WSXpVak5UTTFNeFV6QXdEd0l1N3VJdkFCRHU3dUl2RHdBQUFBQVFGQS8rQUN3QUpnQUFVQUJyTURBUUVtS3dFM0NRRW5BUUZBUVFFLy9zRkJBUDhDSDBIK3dQN0FRUUQvQUFBQUFRRkEvK0FDd0FKZ0FBVUFCck1EQVFFbUt3RW5DUUUzQXdMQVFmN0JBVDlCL3dJZlFmN0Evc0JCQVA4QUFBQUFBUUVzQUlRQ3l3RzlBQW9BRWtBUENna0lCd1lGQUQ0QUFBQmZJUUVQS3lVR0l5SW1Md0UzRnpjWEFjQUpDUVFLQkhBa1h2b2pqUWtGQkhBalh2c2tBQVFBZ1ArZ0E0QUNvQUFJQUJFQUd3QWZBRXhBU1IwY0d4b1lGeFlURVJBUENBRU5CQWNCUUFBQkJ3RS9HUklDQmo0QUJnQUhCQVlIVndBRUFBRURCQUZYQlFFREFBQURTd1VCQXdNQVR3SUJBQU1BUXhrV0VSRVNFUkVTQ0JZckNRRVJNeEV6RVRNUkF5TVJJUkVqRVNVRkFRYzFJeFVIRlFrQk5TVUhOVE1DQVA3QTRNRGdJS0QvQUtBQklBRWcvdURBZ0VBQmdBR0EvYUJBUUFKQS93RCtZQUVBL3dBQm9QNkFBUUQvQUFGeDV1WUJiNXBhd0RNcEFUUCt6U21BTTRZQUFBQURBR0QvZ0FPZ0FzQUFHUUFoQUNVQVBrQTdJZ0VFQUNVQkFRUUNRQUFFQUFFQUJBRm1BQUlGQVFBRUFnQlpBQUVEQXdGTkFBRUJBMUVBQXdFRFJRRUFKQ01mSGhzYUVBNEFHUUVaQmc0ckFUSWVBUmNlQVJRR0J3NEVJeUl1QVNjdUFUUStBeUFHRUJZZ05oQW5CU0VSQWdBellWY2tOam82TmhZeE5UazdIek5oVnlRMk9qcHRpL24rcVBUMEFWajA0UDVCQVA4Q254b3lKRGVMbW9zM0ZTUWJFd2thTWlRM2k1cU1iRG9oOVA2bzlQUUJXQlRBL3dBQUFBUUFnUCtnQTRBQ29BQVNBQjRBcGdFM0FXNUxzQ1pRV0VCaEFBY0FIUVVISFZrSkFRVWZHd0lhQmdVYVdRZ0JCaDRCSEFBR0hGa2hBUUFBQXdRQUExa0tJZ0lFSUFFWkVnUVpXUmdCRWhFQkN3SVNDMWtBQWdBQkZBSUJXUllCRkE4QkRSTVVEVmtBRlFBT0ZRNVZGd0VURXd4UkVBRU1EQXNNUWh0QVp3QUhBQjBGQngxWkNRRUZIeHNDR2dZRkdsa0lBUVllQVJ3QUJoeFpJUUVBQUFNRUFBTlpDaUlDQkNBQkdSSUVHVmtZQVJJUkFRc0NFZ3RaQUFJQUFSUUNBVmtXQVJRUEFRMFRGQTFaRndFVEVBRU1GUk1NV1FBVkRnNFZUUUFWRlE1UkFBNFZEa1ZaUVV3QUlRQWZBQUVBQUFFMkFUTUJJd0VpQVI0QkhBRVFBUTBCQmdFRUFQOEEvUUQ4QVBzQTd3RHNBT2NBNUFEWkFOY0Ewd0RSQU1zQXlBREJBTDhBdkFDNkFLd0FxUUNmQUp3QWtnQ1JBSTRBakFDSEFJUUFmd0I5QUhrQWR3QnFBR2NBV2dCWEFFd0FTZ0JHQUVRQVBBQTVBRFFBTWdBdEFDc0FId0NtQUNFQXBnQWFBQmtBRkFBVEFBMEFEQUFBQUJJQUFRQVNBQ01BRGlzQklnNENCd1lWRkI0QkZ4WXlOalUwSnlZQ0lpWTFORDRCTWg0QkZSUTNJeUltTlRRL0FUWTBMd0VtSXlJUEFRNENJeUltUFFFMEppc0JJZ1lkQVJRT0F5TWlKaThCSmlNaUR3RUdGQjhCRmhVVURnRXJBU0lPQWc4QkRnTWRBUlFXT3dFeUhnRVZGQTRCRHdFR0ZCOEJGak15UHdFK0FUTXlGaDBCRkJZN0FUSTJQUUUwTmpNeUh3RVdNajhCTmpRdkFTWTFORFk3QVRJMlBRSTBMZ0VYRlJRckFTSUhEZ0lWRkI0Qkh3RVdEd0VHSXlJdkFTWWpJZ1lkQVJRT0Fpc0JJaVk5QVRRbkppTWlCZzhCQmlNaUx3RW1ORDhCTmpVMEp5WXJBU0ltUFFFME5qc0JNamMyTlRRbUx3RW1ORDhCTmpNd016SWVBUjhCRmpNeVBnRTNOajBCTkRzQk1oNEJIUUVVSHdFZUJETXlQd0UrQVRJV0h3RWVBUlVVRHdFR0ZSUWVBUmNXT3dFeUZRSUNGQ1VpSUEwNERSa1NPSjl4T1RnTmhWMHFTbGRLSzY4ZUV4c1BGQTRPTFE0VkZRNFRCQXNOQmhNZEhCUThGUjBGQ0F3T0NBa1JCeE1PRlJVT0xRNE9FdzhNRlF3ZkJBa0lDQU1HQXdRREFoNFVId3dWREFNSEJSTU9EaTBORmhRUEV3WVJDaE1jSFJROUZCNGJFeFFPRXc0cURpME9EaFFQR3hNZUZCc01GZ0lQSGlBWEJ3b0dCZ3NJRXcwTkxBVUlDQVFUR0NFZkx3TUZCZ1E4QndzWEdCOFFIZ3NTQlFnSUJDMEZCUklhRnhZaEh3Y0xDd2NmSUJjV0RRd1NCUVVzQlFnREFnTURBUk1YSVFzVEVnY1lFVDBFQ0FRWUNBUUpDUW9LQmlFWUVnSUhCd2NDTFFJREJSTVpCUW9JRmlFZUR3SGdCdzhWRFRoUUdqQXNFamh3VUU4NU9QNmdYa0lyU2lzclNpdENraHNURkEwVER5a09MQTRPRWdVSEJCc1RIaFFlSGhRZkJ3NExDQVVJQnhNT0Rpd09LUThTRGhRTUZnd0NBd1FEQmdNSENBa0ZQQlVkREJZTUJ3d0tCUklQS1E0c0RnNFRCd2diRXg0VkhSMFZIaE1iRUJNT0RpME9LUThURFJRVEhCd1VIeDRPRncxUUhoQVlCeElVQ3dvVkVnY1REQXd0QlFVU0dpMGhIZ1FIQkFNS0NCNGdGeGNOREJNRkJTMEZEZ1VTR0NFZ0Z4Y0xCajBIQ3hjWElCQWVDeElGRGdVdEJBRUNBUk1aQlFvSEZ5QWZFZ1VJQlI4ZkdBWURCUVFEQVJrU0F3SUNBaTBDQmdRSEJSTVhJUXNURVFnWEVnQUFBd0RBLytBRFFBSmdBQU1BQmdBSkFBcTNDQWNHQlFNQ0F5WXJFeDhCQ1FJREV3RW53T2x6QVNUK2lBRTQ1dUwrdHFZQkxXZm1Bb0QrYndGTS9nOEI5ZjdHU1FBRUFHRC9nQU9nQXNBQUJ3QVJBQmtBS2dCUlFFNEFCd0FLQVFjS1dRQUJBQUFDQVFCWkFBSUFBd1FDQTFjTEJnSUVBQVVKQkFWWERBRUpDQWdKVFF3QkNRa0lVUUFJQ1FoRkd4b0lDQ01pR2lvYktoY1dFeElJRVFnUkVSRVJFaE1TRFJRckFCUVdNalkwSmlJVEVTTVZNeFVqRlRNMUVpQUdFQllnTmhBQklpNEJOVFErQWpJZUFoUU9BZ0hQRnlJWEZ5STZZQ0FnZ0d6K3FQVDBBVmowL21CbnNHWThabzZham1ZOFBHYU9BZGtpRnhjaUYvNkFBUUFROEJBUUFsRDAvcWowOUFGWS9kZG1zR2ROam1ZOFBHYU9tbzVtUEFBRUFHRC9nQU9nQXNBQUJ3QVlBRE1BUUFCZVFGc0FCUVlIQmdVSFpnQUhDQVlIQ0dRQUFBQURCQUFEV1FzQkJBQUdCUVFHV1F3QkNBQUpBZ2dKV1FvQkFnRUJBazBLQVFJQ0FWRUFBUUlCUlRVMEdoa0pDRGs0TkVBMVFDc3FJUjhlSFJrekdqTVJFQWdZQ1JnVEVBMFFLd0FnQmhBV0lEWVFBU0l1QVRVMFBnSXlIZ0lVRGdJRElnNEJGVE1tTXpJV0ZSUUdCdzRDQnpNK0FUYytBVFUwSmdNaUJoUVdNalkxTkM0REFxeitxUFQwQVZqMC9tQm5zR1k4Wm82YWptWThQR2FPUmlzOElDWUNZU1F5RlJJWEdRc0JKZ0VOSUJvYVJqRVBFeFFjRkFRR0NBc0N3UFQrcVBUMEFWajkxMmF3WjAyT1pqdzhabzZham1ZOEFsa2JPQ2xkTFNNV0pSRVZKaWtkS2lFZkdDNGZNanYraXhNY0ZCUU9CUXNJQmdNQUFBQUFCUURBLzRBRFFBTEFBQXNBRXdBWEFDa0FNUUJZUUZVbklBSUpDZ0ZBQUFBQUJBRUFCRmtGREFNREFRQUhDQUVIVndBSUFBc0tDQXRaQUFvQUNRWUtDVmtBQmdJQ0Jrc0FCZ1lDVHdBQ0JnSkRBQUF2TGlzcUpDTWJHaGNXRlJRVEVnOE9BQXNBQ3hFVEV3MFJLd0UxTkNZaUJoMEJJeEVoRVNVME5qSVdIUUVoQVNFUklRYzBKaUlHRlJRV0Z4VVVGakkyUFFFK0FRWWlKalEyTWhZVUF0QjZySHB3QW9EK0VHZVNaLzZnQWREOXdBSkE0Q1UySlJzVkNRNEpGUnN6R2hNVEdoTUJZSkJXZW5wV2tQNGdBZUNRU1dkblNaRCtRQUdnb0JzbEpSc1dJd1ZTQndrSkIxSUZJd29UR2hNVEdnQUFBQVlBd1FEZ0EwQUJZQUFIQUE4QUhnQW5BQzhBTndCRlFFSUtEUVlEQWdnTUJBTUFBUUlBV1FrRkFnRURBd0ZOQ1FVQ0FRRURVUXNIQWdNQkEwVWdIeEVRTlRReE1DMHNLU2drSXg4bklDY1lGaEFlRVI0VEV4TVFEaElyQURJV0ZBWWlKalEySWdZVUZqSTJOQ1V5SGdFVkZBWWpJaTRDTlRRMk55SUdGQll5TmpRbUJESVdGQVlpSmpRMklnWVVGakkyTkFIeEhoVVZIaFUvTmlVbE5pWCt3UW9RQ2hVUEJ3NEpCaFVQR3lVbE5TWW1BZFllRlJVZUZUODJKU1UySlFGRUZSNFZGUjR4SlRZbEpUWUpDaEFLRHhVR0NRNEhEeFVjSlRZbEpUWWxIQlVlRlJVZU1TVTJKU1UyQUFBQUFBSUJBUC9nQXdBQ1lBQXdBRXNCSVV1d0MxQllRQjR2RndJSkEwcytBZ29CUFFFRkNERUJCd1V0S2dJR0J3VkFHd0VIQVQ4YlM3QU1VRmhBSGk4WEFna0RTejRDQ2dJOUFRVUlNUUVIQlMwcUFnWUhCVUFiQVFjQlB4dEFIaThYQWdrRFN6NENDZ0U5QVFVSU1RRUhCUzBxQWdZSEJVQWJBUWNCUDFsWlM3QUxVRmhBTHdBQUNRRUpBQUZtQUFNQUNRQURDVmtDQVFFQUNnZ0JDbGtBQ0FBRkJ3Z0ZXUUFIQUFZRUJ3WlpBQVFFQ3dSQ0cwdXdERkJZUUM4QkFRQUpBZ2tBQW1ZQUF3QUpBQU1KV1FBQ0FBb0lBZ3BaQUFnQUJRY0lCVmtBQndBR0JBY0dXUUFFQkFzRVFodEFMd0FBQ1FFSkFBRm1BQU1BQ1FBRENWa0NBUUVBQ2dnQkNsa0FDQUFGQndnRldRQUhBQVlFQndaWkFBUUVDd1JDV1ZsQUQwcElRa0FrTERRakZpa3hFaEFMRnlzQklnNEVJeUl1QVM4QkppY3VBaU1pRGdFUEFSa0JNeEUrQVRNeUhnRVhGak15UGdNM1BnRTNFVFVHQXdZaklpY3VBaU1pRGdFSEVUNEJNeklYSGdRek1qY0M0QUlTQ0JFTUR3Y09HaDRKR3hJSEhDRXpGaXBBRWdVSElBMHpLQk1xTlE1YU1RZ1JFZ3NVQXdvUEJ3d1VOeFl1VncwM0xSVVlLaHNMRFRNb0xWTUdKeElnSEE0WE9BSkFBd0VCQVFFQ0JRSUdCQUVHQndZTENBTUYvcmYrNUFFZkJRZ0lEd01UQVFJQkFnRUJBZ0VCT2lFQy9zTUhFZ01QQ1FRRkF3RVRCUWdTQVFrREJnSUhBQUFDQUlEL29BT0FBcUFBQ0FBU0FEVkFNaElSRHc0TkNnZ0JBQWtCQXdGQUVBa0NBejRBQVFNQUF3RUFaZ0FEQVFBRFN3QURBd0JQQWdFQUF3QkRGQkVSRWdRU0t3a0JFVE1STXhFekVRRUhOU01WQnhVSkFUVUNBUDdBNE1EZy9zREFnRUFCZ0FHQUFrRC9BUDVnQVFEL0FBR2dBV0NhV3NBektRRXovczBwQUFJQWdQK2dBNEFDb0FDQkFJNEFwTGFJaHdJSEFBRkFTN0FtVUZoQU1RQURBQThBQXc5WkJoQUNBQTBCQnc0QUIxa0VBUUlMQVFrSUFnbFpBQTRBQ2c0S1ZRVUJBUUVJVVF3QkNBZ0xDRUliUURjQUF3QVBBQU1QV1FZUUFnQU5BUWNPQUFkWkFBNEpDZzVOQkFFQ0N3RUpDQUlKV1FVQkFRd0JDQW9CQ0ZrQURnNEtVUUFLRGdwRldVQW1BZ0NNaTRXRWUzaHJhbWRsWDF4WFZWRlBSVUk4T1N3cUpTTWJHQk1SRFF3QWdRS0JFUTRyQVNNaUpqVTBQd0UyTkM4QkppSVBBUTRCSXlJbVBRRTBKaXNCSWc0QkhRRVVEZ0lqSWk0Qkx3RW1JeUlQQVFZVUh3RWVBeFVVQmlzQklnNEJIUUVVRmpzQk1oWVZGQThCQmhRZkFSWXpNajhCUGdFek1oWWRBUlFXT3dFeU5qMEJORDRCTXpJZkFSWXlQd0UrQVRRbUx3RW1OVFErQVRzQk1qWTlBalltQnhRR0lpWTFNVFErQVRJZUFRTlJIaE1iRHhRT0RpME9LZzRUQnhFS0V4d2RGRDBORmcwSURSRUpCd3dLQlJNT0ZSVU9MUTRPRXdRRkJBSWJFaDhORnc0ZUZCOFNHdzhURGc0dERSWVVEeE1HRWdrVEhCMFVQUlFkRFJVTkV3OFREaWtQTEFjSUNBY1REd3dWREI4VUdnRWJ3MTZGWFNwS1Ywb3JBVzhjRXhNT0V3NHBEeXdPRGhNSENCc1NIeFFlRGhjTkh3a1FEUWNEQndVVERnNHNEaWtQRWdRSUNBa0ZFeHdORmc0OEZSd2NFeFFPRWc4cERpd09EaE1IQ0JzVEhoUWVIUlVlREJVTkVCSU9EaXdIRXhJVEJ4TU5GQTBWRFJ3VUh4NFZIRTlDWGw1Q0swb3JLMG9BQUFNQVlQK0FBNkFDd0FBSEFCRUFHd0EzUURRQUFBQUNBd0FDV1FBREFBY0dBd2RYQUFZSUFRVUVCZ1ZYQUFRQkFRUkxBQVFFQVZFQUFRUUJSUkVSRVJFVUZCTVRFQWtYS3dBZ0JoQVdJRFlRSkRJV0ZSUUdJaVkxTkJNak5UTTFJelV6RVRNQ3JQNm85UFFCV1BUK1JpSVhGeUlYY1lBZ0lHQWdBc0QwL3FqMDlBRllKQmNSRUJnWUVCSCtoeER3RVA4QUFBQURBR0QvZ0FPZ0FzQUFCd0FVQUM0QVNFQkZBQVVIQmdjRkJtWUFCZ1FIQmdSa0FBQUFCd1VBQjFrQUJBQURBZ1FEV2dnQkFnRUJBazBJQVFJQ0FWSUFBUUlCUmdrSUtpZ25KaVVqR1JnTkRBZ1VDUlFURUFrUUt3QWdCaEFXSURZUUFTSW1ORFl5RmhVVURnTTNEZ0VISXpRK0FqYytBVFUwSmlNaUZ5TTJNeklXRlJRR0FxeitxUFQwQVZqMC9ta1BFeE1kRkFRR0NBcytJQTBCSmdjT0ZoRVNGVElrWVFJbUFZWXpSaG9Dd1BUK3FQVDBBVmorZUJRY0V4TU9CZ29JQndQbklDRXFGaUVmR3hBUkpoVWpMVjE4T3pJZUx3QURBTUVBNEFOQUFXQUFCd0FRQUJnQUswQW9CQVlDQXdBQkFRQk5CQVlDQXdBQUFWRUZBd0lCQUFGRkNRZ1dGUklSRFF3SUVBa1FFeEFIRUNzQUlnWVVGakkyTkNVaUJoUVdNalkwSmlBaUJoUVdNalkwQWhzMkpTVTJKZjdCR3lVbE5TWW1BZ0EySlNVMkpRRmdKVFlsSlRZbEpUWWxKVFlsSlRZbEpUWUFBQXdBUVAvUUE4QUNjQUFIQUE4QUZ3QWZBQ2NBTHdBMUFEc0FRd0JMQUZNQVd3RUVTN0FoVUZoQVlnQUNBQUpvQUFNQkNnRURDbVlBQ2dnQkNnaGtBQXNKQmdrTEJtWUFCZ1FKQmdSa0FBY0ZCMmtZRndJVUZnRVZBUlFWVndBQUFBRURBQUZaRHdFTURnRU5DUXdOV0FBSUFBa0xDQWxaRXdFUUVnRVJCUkFSV0FBRUJBVlJBQVVGQ3dWQ0cwQm5BQUlBQW1nQUF3RUtBUU1LWmdBS0NBRUtDR1FBQ3drR0NRc0daZ0FHQkFrR0JHUUFCd1VIYVJnWEFoUVdBUlVCRkJWWEFBQUFBUU1BQVZrUEFRd09BUTBKREExWUFBZ0FDUXNJQ1ZrQUJCQUZCRTBUQVJBU0FSRUZFQkZZQUFRRUJWRUFCUVFGUlZsQUxWUlVWRnRVVzFwWlQwNU5URXBKU0VjL1BqMDhPem81T0RNeU1UQXRMQ2tvSlNRVEV4TVRFeE1URXhBWkZ5c0FNaFlVQmlJbU5EWWlCaFFXTWpZMEFqSVdGQVlpSmpRMklnWVVGakkyTkFBeUZoUUdJaVkwTmlJR0ZCWXlOalFYSVJVaE5qUWlGQmNqTlRNQk14VWpOalUwSmdjVUZoVWhOU0VHRXpNVkl6WTFOQ1luQmhVVUZoVWhOUUt6R2hNVEdoTTZOQ1ltTkNaTkdoTVRHaE02TkNZbU5DYitNeG9URXhvVE9qUW1KalFtSHdJaC9kOEJ3QUdob1FJK29hRUJBYjhCL2Q4Q0lRRy9vYUVCQWI0QkFmM2ZBbEFUR2hNVEdqTW1OQ1ltTlAzbUV4b1RFeG96SmpRbUpqUUJGaE1hRXhNYU15WTBKaVkwQ2lBSUVCQUlJUDd3SUFnSUJBZ01CQWdFSUFnQ0tDQUlDQVFJQkFnSUJBZ0VJQUFKQUVRQUlBTzhBc3NBRlFBbkFETUFSQUJRQUYwQWNRQitBSXdCRWt1d0NsQllRRjRYQVF3TEF3b01YZ0FOQWdvTERWNEFCd0FJQVFjSVdRQUJFZ0VBQ1FFQVdRQUpGUUVHQ3drR1dRQURFd0VDRFFNQ1dRQUxGZ0VLRHdzS1dRQVBHUUVRQlE4UVdRQUZGQUVFRVFVRVdRQVJEZzRSVFFBUkVRNVJHQUVPRVE1RkcwQmdGd0VNQ3dNTERBTm1BQTBDQ2dJTkNtWUFCd0FJQVFjSVdRQUJFZ0VBQ1FFQVdRQUpGUUVHQ3drR1dRQURFd0VDRFFNQ1dRQUxGZ0VLRHdzS1dRQVBHUUVRQlE4UVdRQUZGQUVFRVFVRVdRQVJEZzRSVFFBUkVRNVJHQUVPRVE1RldVQkdnSDl6Y2w5ZVVsRTFOQ29vR0JZQ0FJU0RmNHlBakhsNGNuNXpmbWxuWG5GZmNWaFhVVjFTWFV4TFJrVTlPelJFTlVRd0xTZ3pLak1oSGhZbkdDY09Dd0FWQWhVYURpc0JJU0l1QlRVME5qTWhNaDRERlJRR0J5RWlMZ0kxTkRZeklUSWVBaFVVQmdjaElpWTBOak1oTWhZVUJnRWlKalUwUGdJek1oNEJGUlFPQWlZaURnRVVIZ0V5UGdFMEpnTWlKalUwUGdFeUhnRVVEZ0VuSWc0QkZSUWVBek15UGdFMU5DNERBeUltTlRRK0FUSWVBUlFPQVNjaUJoUVdNalkxTkM0RUE1cjkzUVFIQndZRkF3SVVEZ0lqQlFzSUJnUVVEdjNkQmcwSkJoUU9BaU1IREFrR0ZBNzkzUTRVRkE0Q0l3NFVGUDBES3p3Ukd5WVZHekFiRUJ3bUN4TVBDUWtQRXhBSkNSa3JQQnd2TnpBYkd6QWJDZzhKQXdZSkNnWUpFQWtFQmdnTEJTczhIQzgzTUJzYk1Cc09GQlFjRkFNRUJnZ0pBa0lDQXdVR0J3Y0VEaFFEQmdrS0JnNFU3d1lKREFjT0ZBVUpEUWNPRk84VUhSUVVIUlFCbWp3cUZTWWJFUnd2SEJVbEhCQ0lDUThURUFrSkVCTVAvcEk4S2h3dkhCd3ZOekFiaUFrUENnVUxDQVlFQ1JBSkJnb0pCZ1AraVR3cUhDOGNIQzgzTUJ1SkZCMFVGQTRGQ1FjSEJBTUFBd0JBLytFRHZ3Sm5BQU1BQndBTEFDWkFJd0FDQUFNQUFnTlhBQUFBQVFRQUFWY0FCQVFGVHdBRkJRc0ZRaEVSRVJFUkVBWVVLeE1oRlNFUklSVWhFU0VWSVVBRGYveUJBMy84Z1FOLy9JRUJQREFCV3pEOTJTOEFBQUFFQUJmL2lBUHBBcmdBQlFBaUFEa0FQd0E5UURvL1BqMDhPem81TFN3aklpRWZIaFFUQmdVRUF3SUJBQmNDQVFGQUFBQUFBUUlBQVZrQUFnTURBazBBQWdJRFVRQURBZ05GTHg0WExRUVNLd0VISndjWE55Y3dQUUV1QXlNaURnSUhGejRCTWg0QkZ4VVVCZ2NYTmpVeEJ3NEJJaTRCTlRRMk55Y0dIUU1lQWpNeU5qY0JCeGMzRnpjRDAxTlZGV3BwVVFGQmJaZFNOMmxjVFJzY01yRE1yR1VCQVFFZ0FsQXlzTXl0WlFFQklBSUNiN3B0YnNBMi9SeHBGbE5URmdFZ1UxTVdhbWtZQVFKVGxXeEFIVFpOTUJCWloyU3NaZzRHRGdjRUZSYTRXV2RrcldZS0ZBb0VGUllDQkFOc3VHdHdZQUZJYVJkVFV4Y0FBQUFCQVYvL253S2dBcUFBU1FCTFFFZzZBUUFGUng4S0F3SURBa0FBQlFBRmFBY0JBQU1BYUFBREFnTm9BQUlBQkFFQ0JGa0FBUVlHQVUwQUFRRUdVZ0FHQVFaR0FRQkRRVGMyTFNzbEl4MGJDQWNBU1FGSkNBNHJBU0lPQVJVUkZBWWlKamN3RVRRMk56WVhIZ0VWRVJRT0FnY0dJeUltTlRBUk5DWWpJZzRCRlFNVUZqTVdOejRDTlJNMEp5WWlCd1lITUIwREJoWXpGamMyTlJFMkpnS0pCZ3NHUlZ0RkFSSVFJeU1RRVFJQ0JBSUdDQWtORFFrSENnWUJLUndkRkFZSkJBRTRHejhhT0FFQllFQkRMaThCRFFIcUJnc0cvbm85UVVNOUFkWVhJd2tWRlFvakYvNC9CZ29JQ0FNSEZoTUJXZ29OQmdzRy9xY3FMd0VaQ0JRWERRSEJTeUlRRHlGTGVJMTlWRkZlQVM4d1R3R0ZDZzRBQXdBVC8vWUQ3UUpKQUJjQUl3QXhBSnBMc0E5UVdFQWlCd0VFQWdVQ0JGNEFCUU1EQlZ3QUFRWUJBZ1FCQWxrQUF3TUFVZ0FBQUFzQVFodExzQmhRV0VBa0J3RUVBZ1VDQkFWbUFBVURBZ1VEWkFBQkJnRUNCQUVDV1FBREF3QlNBQUFBQ3dCQ0cwQXBCd0VFQWdVQ0JBVm1BQVVEQWdVRFpBQUJCZ0VDQkFFQ1dRQURBQUFEVFFBREF3QlNBQUFEQUVaWldVQVVKU1FaR0NzcUpERWxNU0FmR0NNWkl5a21DQkFyQVJRT0JDTWlMZ00wUGdNek1oY1dGeFlsSWc0Q0ZSUVdNalkwSmdjaURnRVZGQll5TmpVMExnSUQ3U0U4V21xR1JsR2RkVnN2TDF0Mm5GSEluV01kQ1A0VE1GaEFKWXZGaTR0aktVWW9XSDVZR0NnNEFTQVlQa00vTXg4clJGQk5QRTFRUkNwd1Iwc1c0aVpDV2pGbGpvN0tqbGdwU0NwQVcxdEFJRGtxR0FBQUFRREFBR0FEUUFIZ0FBVUFCck1DQUFFbUt5VTNDUUVYQVFNWkovN0Evc0FuQVJsZ0tRRlgvcWtwQVMwQUFBQUFBUURBQUdBRFFBSGdBQVVBQnJNQ0FBRW1Ld0VYQ1FFM0FRTVpKLzdBL3NBbkFSa0I0Q24rcVFGWEtmN1RBQUFBQVFGQS8rQUN3QUpnQUFVQUJyTURBUUVtS3dFbkNRRTNBUUxBS2Y2cEFWY3AvdE1DT1NmK3dQN0FKd0VaQUFBQUFRRkEvK0FDd0FKZ0FBVUFCck1EQVFFbUt3RTNDUUVuQVFGQUtRRlgvcWtwQVMwQ09TZit3UDdBSndFWkFBQUFBUUZBLytBQ3dBSmdBQ0VBSlVBaUdSZ1RDd1FGQUFJQlFBQUFBZ0VDQUFGbUFBSUNBVkVBQVFFTEFVSXNGUkVERVNzQkJpSXZBUkVVQmlJbU5SRUhCaWNtTkRjMk56WXpNaFlmQVI0Qkh3RWVBUlVVQXJzRURRV1ZDUTRKbFF3S0JRV3VBZ1lGQXdVQkFnRllMQ3NEQWdHa0JBU0YvY2NIQ1FrSEFqbUVDd29GRGdTZkFRVUNBUUlCVUNnbkFnWURCd0FBQUFFQlFQL2dBc0FDWUFBZ0FDUkFJUmdUQ3dRRUFnQUJRQUFBQVFJQkFBSm1BQUVCQWxFQUFnSUxBa0lzRlJFREVTc2xKaUlQQVJFMEppSUdGUkVuSmdjR0ZCY1dGeFl6TWpZM1BnRS9BVDRCTlRRQ3V3UU5CWlVKRGdtVkRBb0ZCYTRDQmdVRUJnRUJXQ3dyQXdLY0JBU0ZBamtIQ1FrSC9jZUVDd29GRGdTZkFRVURBZ0ZRS0NjQ0JnTUhBQUFBQUFFQXdBQmdBMEFCNEFBZEFDcEFKeFlTQWdBQkFVQUFBZ0VDYUFBREFBTnBBQUVBQUFGTkFBRUJBRklBQUFFQVJod1VJeU1FRWlzbE5pOEJJVEkyTkNZaklUYzJKeVlpQndZSEJoVVVGeDRCSHdFV016WUJmQW9LaFFJNUJ3a0pCLzNIaEFzS0JRNEVud0VGQlFGUUtDY0VCd2RsQ2d5VkNRNEpsUXdLQlFXdUFnWUZCd1FCV0N3ckJRRUFBUURBQUdBRFFBSGhBQjRBSlVBaUZ4TUNBQUVCUUFBQ0FBSnBBQUVBQUFGTkFBRUJBRkVBQUFFQVJSMGNJeU1ERUNzbEpqOEJJU0ltTkRZeklTY21OejRCRmhjV0Z4WVZGQWNPQVE4QkJpTW1Bb1FLQ29YOXh3Y0pDUWNDT1lRTENnTUpDQU9mQVFVRkFWQW9Kd1FIQjJVS0RKVUpEZ21WREFvREF3SUVyZ0lHQlFjRUFWZ3NLd1VCQUFBQkFSNy9wd0xhQW44QUJnQVdRQk1BQVFBOUFBRUFBV2dDQVFBQVh4RVJFUU1SS3dVVEl4RWpFU01CL042Um01QlpBU2dCc1A1UUFBRUFYLzk3QTZFQ3ZRQUxBQUFKQWdjSkFSY0pBVGNKQVFOdC9wTCtsRFFCYmY2VE5BRnNBVzQwL3BFQmJ3SzkvcElCYkRQK2xQNlVNd0ZzL3BJekFXNEJiUUFBQkFCVi8zRURxZ0xJQUJNQUp3QStBRVFBQUFVR0xnRTBOejRCTkNZbkpqUStBUmNlQVJRR0p3NEJKalEzUGdFMEppY21ORFlXRng0QkZBWURKeU1pSmljUlBnRTNNemMrQVI0QkZSRVVEZ0VtSnpjUkJ5TVJNd013Q0JnUUNUSTJOVElKRUJnSk9qNC9yQWdZRVFnWUdSZ1hDQkVZQ0I4Z0l1SElweGNoQVFFaEY2ZkZEaDhlRUJBYkh3NGYxTHE0RkFrQkVoZ0pOSWFYaFRRSkdCSUJDVHljc0p4U0NBRVNGd2taUGtVK0dRa1hFUUVJSVZOY1UvN2dnaUVZQWJrWElRR1RDZ01QR3hEOUhCQWFEd0VJTUFMa24vNUhBQUFBQlFCQS8zd0R3QUs4QUFzQUh3QXpBRWdBWFFBQUpTRWlKalEyTXlFeUZoUUdBeU1pSmpRMk93RXlOajBCTkRZeUZoMEJEZ0VGSXk0Qkp6VTBOaklXSFFFVUZqc0JNaFlVQmdNaUpqMEJQZ0UzTXpJV0ZBWXJBU0lHSFFFVUJpRWlKajBCTkNZckFTSW1ORFk3QVI0QkZ4VVVCZ09nL01BT0VoSU9BMEFPRWhKdXdBNFNFZzdBRGhJU0hCSUJOdjMzb0NrMkFSSWNFaElPb0E0U0V1NE9FZ0UyS2FBT0VoSU9vQTRTRWdMeURoSVNEc0FPRWhJT3dDazJBUkw4RWh3U0Vod1Mvb0FTSEJJU0RxQU9FaElPb0NrMkFRRTJLYUFPRWhJT29BNFNFaHdTQWlBU0RxQXBOZ0VTSEJJU0RxQU9FaElPb0E0U0Vod1NBVFlwb0E0U0FBQUFEQUNXQUFFQUFBQUFBQUVBQ0FBU0FBRUFBQUFBQUFJQUFBQWhBQUVBQUFBQUFBTUFGZ0JVQUFFQUFBQUFBQVFBQ1FDREFBRUFBQUFBQUFVQU1BRHZBQUVBQUFBQUFBWUFDUUUwQUFNQUFRUUpBQUVBRUFBQUFBTUFBUVFKQUFJQUJBQWJBQU1BQVFRSkFBTUFNQUFpQUFNQUFRUUpBQVFBRmdCckFBTUFBUVFKQUFVQVlBQ05BQU1BQVFRSkFBWUFFZ0VnQUhVQWJnQnBBR2tBWXdCdkFHNEFjd0FBZFc1cGFXTnZibk1BWGppSnhBQUFBQUIxQUc0QWFRQnBBR01BYndCdUFITUFJRjQ0aWNRQU9nQldBR1VBY2dCekFHa0Fid0J1QUNBQU1RQXVBREFBTUFBQWRXNXBhV052Ym5NZ09sWmxjbk5wYjI0Z01TNHdNQUFBZFFCdUFHa0FhUUJqQUc4QWJnQnpBQ0JlT0luRUFBQjFibWxwWTI5dWN5QUFBRllBWlFCeUFITUFhUUJ2QUc0QUlBQXhBQzRBTUFBd0FDQUFVd0JsQUhBQWRBQmxBRzBBWWdCbEFISUFJQUF5QURBQUxBQWdBRElBTUFBeEFEa0FMQUFnQUdrQWJnQnBBSFFBYVFCaEFHd0FJQUJ5QUdVQWJBQmxBR0VBY3dCbEFBQldaWEp6YVc5dUlERXVNREFnVTJWd2RHVnRZbVZ5SURJd0xDQXlNREU1TENCcGJtbDBhV0ZzSUhKbGJHVmhjMlVBQUhVQWJnQnBBR2tBWXdCdkFHNEFjd0F0QUFCMWJtbHBZMjl1Y3kwQUFBSUFBQUFBQUFEL0h3QXlBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBWUFBQUFBRUFBZ0JiQVFJQkF3RUVBUVVCQmdFSEFRZ0JDUUVLQVFzQkRBRU5BUTRCRHdFUUFSRUJFZ0VUQVJRQkZRRVdBUmNCR0FFWkFSb0JHd0VjQVIwQkhnRWZBU0FCSVFFaUFTTUJKQUVsQVNZQkp3RW9BU2tCS2dFckFTd0JMUUV1QVM4Qk1BRXhBVElCTXdFMEFUVUJOZ0UzQVRnQk9RRTZBVHNCUEFFOUFUNEJQd0ZBQVVFQlFnRkRBVVFCUlFGR0FVY0JTQUZKQVVvQlN3Rk1BVTBCVGdGUEFWQUJVUUZTQVZNQlZBRlZBVllCVndGWUFWa0JXZ0ZiQVZ3QlhRZDFibWxGTVRBd0IzVnVhVVV4TURFSGRXNXBSVEV3TWdkMWJtbEZNVE13QjNWdWFVVXhNekVIZFc1cFJURXpNZ2QxYm1sRk1qQXdCM1Z1YVVVeU1ERUhkVzVwUlRJd01nZDFibWxGTWpBekIzVnVhVVV5TXpBSGRXNXBSVEl6TVFkMWJtbEZNak15QjNWdWFVVXlNek1IZFc1cFJUSTJNQWQxYm1sRk1qWXhCM1Z1YVVVeU5qSUhkVzVwUlRJMk13ZDFibWxGTWpZMEIzVnVhVVV6TURBSGRXNXBSVE13TVFkMWJtbEZNekF5QjNWdWFVVXpNRE1IZFc1cFJUTXpNZ2QxYm1sRk16TXpCM1Z1YVVVek5qQUhkVzVwUlRNMk13ZDFibWxGTXpZMEIzVnVhVVUwTURBSGRXNXBSVFF3TVFkMWJtbEZOREF5QjNWdWFVVTBNRE1IZFc1cFJUUXdOQWQxYm1sRk5EQTFCM1Z1YVVVME1EWUhkVzVwUlRRd053ZDFibWxGTkRBNEIzVnVhVVUwTURrSGRXNXBSVFF4TUFkMWJtbEZOREV4QjNWdWFVVTBNVE1IZFc1cFJUUXpOQWQxYm1sRk5ETTNCM1Z1YVVVME16Z0hkVzVwUlRRek9RZDFibWxGTkRRd0IzVnVhVVUwTkRFSGRXNXBSVFEwTWdkMWJtbEZORFF6QjNWdWFVVTBOakFIZFc1cFJUUTJNUWQxYm1sRk5EWXlCM1Z1YVVVME5qTUhkVzVwUlRRMk5BZDFibWxGTkRZMUIzVnVhVVUwTmpZSGRXNXBSVFEyT0FkMWJtbEZORGN3QjNWdWFVVTBOekVIZFc1cFJUUTNNZ2QxYm1sRk5UQXdCM1Z1YVVVMU1ERUhkVzVwUlRVd01nZDFibWxGTlRBekIzVnVhVVUxTURRSGRXNXBSVFV3TlFkMWJtbEZOVEEyQjNWdWFVVTFNRGNIZFc1cFJUVXdPQWQxYm1sRk5UTXdCM1Z1YVVVMU16SUhkVzVwUlRVek5BZDFibWxGTlRNMUIzVnVhVVUxTXpjSGRXNXBSVFUyTUFkMWJtbEZOVFl5QjNWdWFVVTFOak1IZFc1cFJUVTJOUWQxYm1sRk5UWTNCM1Z1YVVVMU5qZ0hkVzVwUlRVNE1BZDFibWxGTlRneEIzVnVhVVUxT0RJSGRXNXBSVFU0TXdkMWJtbEZOVGcwQjNWdWFVVTFPRFVIZFc1cFJUVTROZ2QxYm1sRk5UZzNCM1Z1YVVVMU9EZ0hkVzVwUlRVNE9RUkZkWEp2QjNWdWFVVTJNVElBQUFFQUFmLy9BQThBQVFBQUFBd0FBQUFXQUFBQUFnQUJBQUVBWHdBQkFBUUFBQUFDQUFBQUFBQUFBQUVBQUFBQTFhUW5DQUFBQUFEWnFsdTVBQUFBQU5tcVhBaz0nKVwiXHJcblx0fSk7XHJcblx0Ly8gI2VuZGlmXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0bmFtZTogJ1VuaUljb25zJyxcclxuXHRcdHByb3BzOiB7XHJcblx0XHRcdHR5cGU6IHtcclxuXHRcdFx0XHR0eXBlOiBTdHJpbmcsXHJcblx0XHRcdFx0ZGVmYXVsdDogJydcclxuXHRcdFx0fSxcclxuXHRcdFx0Y29sb3I6IHtcclxuXHRcdFx0XHR0eXBlOiBTdHJpbmcsXHJcblx0XHRcdFx0ZGVmYXVsdDogJyMzMzMzMzMnXHJcblx0XHRcdH0sXHJcblx0XHRcdHNpemU6IHtcclxuXHRcdFx0XHR0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IDE2XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGljb25zOiBpY29uc1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRfb25DbGljaygpIHtcclxuXHRcdFx0XHR0aGlzLiRlbWl0KCdjbGljaycpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXHJcblx0QGZvbnQtZmFjZSB7XHJcblx0XHRmb250LWZhbWlseTogdW5paWNvbnM7XHJcblx0XHRzcmM6IHVybCgnZGF0YTpmb250L3RydWV0eXBlO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LEFBRUFBQUFRQVFBQUJBQUFSa1pVVFlqNDNzc0FBSGJZQUFBQUhFZEVSVVlBSndCbUFBQjJ1QUFBQUI1UFV5OHlXV2xjcWdBQUFZZ0FBQUJnWTIxaGNHQmhiQlVBQUFLMEFBQUNRbU4yZENBTXBmNDBBQUFQS0FBQUFDUm1jR2R0TVBlZWxRQUFCUGdBQUFtV1oyRnpjQUFBQUJBQUFIYXdBQUFBQ0dkc2VXWnNmZ2ZaQUFBUUVBQUFZUXhvWldGa0ZvZjYvd0FBQVF3QUFBQTJhR2hsWVFkK0F5WUFBQUZFQUFBQUpHaHRkSGdrZUJ1WUFBQUI2QUFBQU1wc2IyTmhQRWtuTGdBQUQwd0FBQURDYldGNGNBSWpBM0lBQUFGb0FBQUFJRzVoYldYV09UdFVBQUJ4SEFBQUFkUndiM04wVEpFNGlnQUFjdkFBQUFPL2NISmxjS1c1dm1ZQUFBNlFBQUFBbFFBQkFBQUFBUUFBQ1YvT09WOFBQUFVBSHdRQUFBQUFBTm1xVzdrQUFBQUEyYXBjQ1FBQS95QUVBQU1nQUFBQUNBQUNBQUFBQUFBQUFBRUFBQU1nL3lBQVhBUUFBQUFBQUFRQUFBRUFBQUFBQUFBQUFBQUFBQUFBQUFBRkFBRUFBQUJnQVhvQURBQUFBQUFBQWdCR0FGUUFiQUFBQVFRQm9nQUFBQUFBQkFQL0FaQUFCZ0FBQXBrQ3pBQUFBSThDbVFMTUFBQUI2d0F6QVFrQUFBSUFCZ01BQUFBQUFBQUFBQUFCRUFBQUFBQUFBQUFBQUFBQVVFWkZSQUdBQUIzbUVnTXMveXdBWEFNZ0FPQUFBQUFCQUFBQUFBTVlBczBBQUFBZ0FBRUJkZ0FpQUFBQUFBRlZBQUFENlFBc0JBQUFZQURBQU1BQVlBREFBTUFBb0FDQUFJQUFZQUNnQUlBQWdBQmdBTE1BUUFCQUFBVUFWd0JlQUlBQkFBRDBBUUFBOUFFQUFFQUFWZ0NnQU9BQXdBREFBRkVBZmdDQUFHQUFRQUJnQUdBQVlBQStBRkVBWUFCQUFHQUFZQUEwQUdBQVBnRkFBUUFBZ0FCQUFBQUFKUUNCQVFBQlFBRkFBU3dBZ0FCZ0FJQUF3QUJnQUdBQXdBREJBUUFBZ0FDQUFHQUFZQURCQUVBQVJBQkFBQmNCWHdBVEFNQUF3QUZBQVVBQlFBRkFBTUFBd0FFZUFGOEFWUUJBQUFBQUFBQURBQUFBQXdBQUFCd0FBUUFBQUFBQlBBQURBQUVBQUFBY0FBUUJJQUFBQUVRQVFBQUZBQVFBQUFBZEFIamhBdUV5NGdQaU0rSms0d1BqTStOZzQyVGtDZVFSNUJQa05PUTU1RVBrWnVSbzVITGxDT1V3NVRMbE5lVTM1V0RsWStWbDVXamxpZVdRNWhMLy93QUFBQUFBSFFCNDRRRGhNT0lBNGpEaVlPTUE0ekxqWU9OajVBRGtFT1FUNURUa04rUkE1R0RrYU9SdzVRRGxNT1V5NVRUbE4rVmc1V0xsWmVWbjVZRGxrT1lTLy84QUFmL2svNHNmQkI3WEhnb2QzaDJ5SFJjYzZSeTlITHNjSUJ3YUhCa2IrUnYzRy9FYjFSdlVHODBiUUJzWkd4Z2JGeHNXR3U0YTdScnNHdXNhMUJyT0drMEFBUUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUJCZ0FBQVFBQUFBQUFBQUFCQWdBQUFBSUFBQUFBQUFBQUFBQUFBQUFBQUFBQkFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUF3QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFzQUFzc0NCZ1ppMndBU3dnWkNDd3dGQ3dCQ1phc0FSRlcxZ2hJeUViaWxnZ3NGQlFXQ0d3UUZrYklMQTRVRmdoc0RoWldTQ3dDa1ZoWkxBb1VGZ2hzQXBGSUxBd1VGZ2hzREJaR3lDd3dGQllJR1lnaW9waElMQUtVRmhnR3lDd0lGQllJYkFLWUJzZ3NEWlFXQ0d3Tm1BYllGbFpXUnV3QUN0WldTT3dBRkJZWlZsWkxiQUNMQ0JGSUxBRUpXRmtJTEFGUTFCWXNBVWpRckFHSTBJYklTRlpzQUZnTGJBRExDTWhJeUVnWkxFRllrSWdzQVlqUXJJS0FBSXFJU0N3QmtNZ2lpQ0tzQUFyc1RBRkpZcFJXR0JRRzJGU1dWZ2pXU0Vnc0VCVFdMQUFLeHNoc0VCWkk3QUFVRmhsV1Myd0JDeXdDQ05Dc0FjalFyQUFJMEt3QUVPd0IwTlJXTEFJUXl1eUFBRUFRMkJDc0JabEhGa3RzQVVzc0FCRElFVWdzQUpGWTdBQlJXSmdSQzJ3Qml5d0FFTWdSU0N3QUNzanNRUUVKV0FnUllvallTQmtJTEFnVUZnaHNBQWJzREJRV0xBZ0c3QkFXVmtqc0FCUVdHVlpzQU1sSTJGRVJDMndCeXl4QlFWRnNBRmhSQzJ3Q0N5d0FXQWdJTEFLUTBxd0FGQllJTEFLSTBKWnNBdERTckFBVWxnZ3NBc2pRbGt0c0Frc0lMZ0VBR0lndUFRQVk0b2pZYkFNUTJBZ2ltQWdzQXdqUWlNdHNBb3NTMVJZc1FjQlJGa2tzQTFsSTNndHNBc3NTMUZZUzFOWXNRY0JSRmtiSVZra3NCTmxJM2d0c0F3c3NRQU5RMVZZc1EwTlE3QUJZVUt3Q1N0WnNBQkRzQUlsUXJJQUFRQkRZRUt4Q2dJbFFyRUxBaVZDc0FFV0l5Q3dBeVZRV0xBQVE3QUVKVUtLaWlDS0kyR3dDQ29oSTdBQllTQ0tJMkd3Q0NvaEc3QUFRN0FDSlVLd0FpVmhzQWdxSVZtd0NrTkhzQXREUjJDd2dHSWdzQUpGWTdBQlJXSmdzUUFBRXlORXNBRkRzQUErc2dFQkFVTmdRaTJ3RFN5eEFBVkZWRmdBc0EwalFpQmdzQUZodFE0T0FRQU1BRUpDaW1DeERBUXJzR3NyR3lKWkxiQU9MTEVBRFNzdHNBOHNzUUVOS3kyd0VDeXhBZzByTGJBUkxMRUREU3N0c0JJc3NRUU5LeTJ3RXl5eEJRMHJMYkFVTExFR0RTc3RzQlVzc1FjTkt5MndGaXl4Q0EwckxiQVhMTEVKRFNzdHNCZ3NzQWNyc1FBRlJWUllBTEFOSTBJZ1lMQUJZYlVPRGdFQURBQkNRb3Bnc1F3RUs3QnJLeHNpV1Myd0dTeXhBQmdyTGJBYUxMRUJHQ3N0c0Jzc3NRSVlLeTJ3SEN5eEF4Z3JMYkFkTExFRUdDc3RzQjRzc1FVWUt5MndIeXl4QmhnckxiQWdMTEVIR0NzdHNDRXNzUWdZS3kyd0lpeXhDUmdyTGJBakxDQmdzQTVnSUVNanNBRmdRN0FDSmJBQ0pWRllJeUE4c0FGZ0k3QVNaUndiSVNGWkxiQWtMTEFqSzdBaktpMndKU3dnSUVjZ0lMQUNSV093QVVWaVlDTmhPQ01naWxWWUlFY2dJTEFDUldPd0FVVmlZQ05oT0JzaFdTMndKaXl4QUFWRlZGZ0FzQUVXc0NVcXNBRVZNQnNpV1Myd0p5eXdCeXV4QUFWRlZGZ0FzQUVXc0NVcXNBRVZNQnNpV1Myd0tDd2dOYkFCWUMyd0tTd0FzQU5GWTdBQlJXS3dBQ3V3QWtWanNBRkZZckFBSzdBQUZyUUFBQUFBQUVRK0l6aXhLQUVWS2kyd0tpd2dQQ0JISUxBQ1JXT3dBVVZpWUxBQVEyRTRMYkFyTEM0WFBDMndMQ3dnUENCSElMQUNSV093QVVWaVlMQUFRMkd3QVVOak9DMndMU3l4QWdBV0pTQXVJRWV3QUNOQ3NBSWxTWXFLUnlOSEkyRWdXR0liSVZtd0FTTkNzaXdCQVJVVUtpMndMaXl3QUJhd0JDV3dCQ1ZISTBjalliQUdSU3RsaWk0aklDQThpamd0c0M4c3NBQVdzQVFsc0FRbElDNUhJMGNqWVNDd0JDTkNzQVpGS3lDd1lGQllJTEJBVVZpekFpQURJQnV6QWlZREdsbENRaU1nc0FsRElJb2pSeU5ISTJFalJtQ3dCRU93Z0dKZ0lMQUFLeUNLaW1FZ3NBSkRZR1Fqc0FORFlXUlFXTEFDUTJFYnNBTkRZRm13QXlXd2dHSmhJeUFnc0FRbUkwWmhPQnNqc0FsRFJyQUNKYkFKUTBjalJ5TmhZQ0N3QkVPd2dHSmdJeUN3QUNzanNBUkRZTEFBSzdBRkpXR3dCU1d3Z0dLd0JDWmhJTEFFSldCa0k3QURKV0JrVUZnaEd5TWhXU01nSUxBRUppTkdZVGhaTGJBd0xMQUFGaUFnSUxBRkppQXVSeU5ISTJFalBEZ3RzREVzc0FBV0lMQUpJMElnSUNCR0kwZXdBQ3NqWVRndHNESXNzQUFXc0FNbHNBSWxSeU5ISTJHd0FGUllMaUE4SXlFYnNBSWxzQUlsUnlOSEkyRWdzQVVsc0FRbFJ5TkhJMkd3QmlXd0JTVkpzQUlsWWJBQlJXTWpJRmhpR3lGWlk3QUJSV0pnSXk0aklDQThpamdqSVZrdHNETXNzQUFXSUxBSlF5QXVSeU5ISTJFZ1lMQWdZR2F3Z0dJaklDQThpamd0c0RRc0l5QXVSckFDSlVaU1dDQThXUzZ4SkFFVUt5MndOU3dqSUM1R3NBSWxSbEJZSUR4WkxyRWtBUlFyTGJBMkxDTWdMa2F3QWlWR1VsZ2dQRmtqSUM1R3NBSWxSbEJZSUR4WkxyRWtBUlFyTGJBM0xMQXVLeU1nTGthd0FpVkdVbGdnUEZrdXNTUUJGQ3N0c0Rnc3NDOHJpaUFnUExBRUkwS0tPQ01nTGthd0FpVkdVbGdnUEZrdXNTUUJGQ3V3QkVNdXNDUXJMYkE1TExBQUZyQUVKYkFFSmlBdVJ5TkhJMkd3QmtVckl5QThJQzRqT0xFa0FSUXJMYkE2TExFSkJDVkNzQUFXc0FRbHNBUWxJQzVISTBjallTQ3dCQ05Dc0FaRkt5Q3dZRkJZSUxCQVVWaXpBaUFESUJ1ekFpWURHbGxDUWlNZ1I3QUVRN0NBWW1BZ3NBQXJJSXFLWVNDd0FrTmdaQ093QTBOaFpGQllzQUpEWVJ1d0EwTmdXYkFESmJDQVltR3dBaVZHWVRnaklEd2pPQnNoSUNCR0kwZXdBQ3NqWVRnaFdiRWtBUlFyTGJBN0xMQXVLeTZ4SkFFVUt5MndQQ3l3THlzaEl5QWdQTEFFSTBJak9MRWtBUlFyc0FSRExyQWtLeTJ3UFN5d0FCVWdSN0FBSTBLeUFBRUJGUlFUTHJBcUtpMndQaXl3QUJVZ1I3QUFJMEt5QUFFQkZSUVRMckFxS2kyd1B5eXhBQUVVRTdBcktpMndRQ3l3TFNvdHNFRXNzQUFXUlNNZ0xpQkdpaU5oT0xFa0FSUXJMYkJDTExBSkkwS3dRU3N0c0VNc3NnQUFPaXN0c0VRc3NnQUJPaXN0c0VVc3NnRUFPaXN0c0VZc3NnRUJPaXN0c0Vjc3NnQUFPeXN0c0Vnc3NnQUJPeXN0c0Vrc3NnRUFPeXN0c0Vvc3NnRUJPeXN0c0Vzc3NnQUFOeXN0c0V3c3NnQUJOeXN0c0Uwc3NnRUFOeXN0c0U0c3NnRUJOeXN0c0U4c3NnQUFPU3N0c0ZBc3NnQUJPU3N0c0ZFc3NnRUFPU3N0c0ZJc3NnRUJPU3N0c0ZNc3NnQUFQQ3N0c0ZRc3NnQUJQQ3N0c0ZVc3NnRUFQQ3N0c0ZZc3NnRUJQQ3N0c0Zjc3NnQUFPQ3N0c0Znc3NnQUJPQ3N0c0Zrc3NnRUFPQ3N0c0Zvc3NnRUJPQ3N0c0Zzc3NEQXJMckVrQVJRckxiQmNMTEF3SzdBMEt5MndYU3l3TUN1d05Tc3RzRjRzc0FBV3NEQXJzRFlyTGJCZkxMQXhLeTZ4SkFFVUt5MndZQ3l3TVN1d05Dc3RzR0Vzc0RFcnNEVXJMYkJpTExBeEs3QTJLeTJ3WXl5d01pc3VzU1FCRkNzdHNHUXNzRElyc0RRckxiQmxMTEF5SzdBMUt5MndaaXl3TWl1d05pc3RzR2Nzc0RNckxyRWtBUlFyTGJCb0xMQXpLN0EwS3kyd2FTeXdNeXV3TlNzdHNHb3NzRE1yc0RZckxiQnJMQ3V3Q0dXd0F5UlFlTEFCRlRBdEFBQkx1QURJVWxpeEFRR09XYmtJQUFnQVl5Q3dBU05FSUxBREkzQ3dEa1VnSUV1NEFBNVJTN0FHVTFwWXNEUWJzQ2haWUdZZ2lsVllzQUlsWWJBQlJXTWpZckFDSTBTekNna0ZCQ3V6Q2dzRkJDdXpEZzhGQkN0WnNnUW9DVVZTUkxNS0RRWUVLN0VHQVVTeEpBR0lVVml3UUloWXNRWURSTEVtQVloUldMZ0VBSWhZc1FZQlJGbFpXVm00QWYrRnNBU05zUVVBUkFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU1nQXlBeGovNFFNZy95QURHUC9oQXlEL0lBQUFBQ2dBS0FBb0FXUUNDZ08wQllvR0RnYWlCNGdJZ0FqSUNYWUo4QXA2Q3JRTEdBdHNEUGdOM0E1MEQxd1J5aEl5RXpBVG5oUWFGSElVdkJWQUZlSVhIQmQ4R0VvWWtCaldHVElaakJub0dtQWFvaHNDRzFRYmxCdnFIQ2djZWh5aUhPQWREQjFxSGFRZDZoNElIa1llbmg3WUh6Z2dtaURrSVF3aEpDRThJVndodmlJY0pHWWtpQ1QwSllZbUFDWjRKM1ludGlqRUtRNHBlaW02S3NRc0VDdytMTHd0U0MzZUxmWXVEaTRtTGo0dWlDN1FMeFl2WEM5NEw1b3dCakNHQUFBQUFnQWlBQUFCTWdLcUFBTUFCd0FwUUNZQUFBQURBZ0FEVndBQ0FRRUNTd0FDQWdGUEJBRUJBZ0ZEQUFBSEJnVUVBQU1BQXhFRkR5c3pFU0VSSnpNUkl5SUJFTzdNekFLcS9WWWlBbVlBQUFBRkFDei80UU84QXhnQUZnQXdBRG9BVWdCZUFYZExzQk5RV0VCS0FnRUFEUTROQUE1bUFBTU9BUTREWGdBQkNBZ0JYQkFCQ1FnS0JnbGVFUUVNQmdRR0RGNEFDd1FMYVE4QkNBQUdEQWdHV0FBS0J3VUNCQXNLQkZrU0FRNE9EVkVBRFEwS0RrSWJTN0FYVUZoQVN3SUJBQTBPRFFBT1pnQUREZ0VPQTE0QUFRZ0lBVndRQVFrSUNnZ0pDbVlSQVF3R0JBWU1YZ0FMQkF0cER3RUlBQVlNQ0FaWUFBb0hCUUlFQ3dvRVdSSUJEZzROVVFBTkRRb09RaHRMc0JoUVdFQk1BZ0VBRFE0TkFBNW1BQU1PQVE0RFhnQUJDQWdCWEJBQkNRZ0tDQWtLWmhFQkRBWUVCZ3dFWmdBTEJBdHBEd0VJQUFZTUNBWllBQW9IQlFJRUN3b0VXUklCRGc0TlVRQU5EUW9PUWh0QVRnSUJBQTBPRFFBT1pnQUREZ0VPQXdGbUFBRUlEZ0VJWkJBQkNRZ0tDQWtLWmhFQkRBWUVCZ3dFWmdBTEJBdHBEd0VJQUFZTUNBWllBQW9IQlFJRUN3b0VXUklCRGc0TlVRQU5EUW9PUWxsWldVQW9VMU03T3pJeEZ4ZFRYbE5lVzFnN1VqdFNTME0zTlRFNk1qb1hNQmN3VVJFeEdCRW9GVUFURmlzQkJpc0JJZzRDSFFFaE5UUW1OVFF1QWlzQkZTRUZGUlFXRkE0Q0l3WW1Ld0VuSVFjckFTSW5JaTRDUFFFWElnWVVGak15TmpRbUZ3WUhEZ01lQVRzR01qWW5MZ0VuSmljQk5UUStBanNCTWhZZEFRRVpHeHBURWlVY0VnT1FBUW9ZSng2Ri9rb0NvZ0VWSHlNT0RoOE9JQzMrU1N3ZEloUVpHU0FUQ0hjTUVoSU1EUklTakFnR0JRc0VBZ1FQRGlWRFVWQkFKQmNXQ1FVSkJRVUcvcVFGRHhvVnZCOHBBaDhCREJrbkdrd3BFQndFRFNBYkVtR0lOQmM2T2lVWENRRUJnSUFCRXhzZ0RxYy9FUm9SRVJvUmZCb1dFeVFPRUEwSUdCb05JeEVURkFGMzVBc1lFd3dkSnVNQUFBSUFZUCtBQTZBQ3dBQUhBRmNBU0VCRlNrbERPVGcySnlZY0dSY1dEQVFEVHc4Q0FRUUNRQUFFQXdFREJBRm1BQUFGQVFJREFBSlpBQU1FQVFOTkFBTURBVkVBQVFNQlJRa0lURXN3TFFoWENWY1RFQVlRS3dBZ0JoQVdJRFlRSlRJZUFoVVVCeVluTGdFMU5EYzFOajhEUGdFM05qYzJOell2QVRVbU56WW1KeVluSXdZSERnRVhGZ2NVQnhVT0FSY2VBUmNXRnhZVk1CVVVCaFFQQVJRakRnRUhKalUwUGdRQ3JQNm85UFFCV1BUK1lFMk9aanhZVVdrRUFnRUJBUUlDQWdFQ0FnMEZFd2dIQ0FFRUNnUU9FeWhOSTB3b0ZBNEVDZ1FCQkFFRUJRNElCQTRJQVFFQ0FTbHdIRmtiTVVkVFl3TEE5UDZvOVBRQldORThabzVOaW1vaEh3RUdEZ01EQmdNREJnWUdBd1VESFNJV0xDTVVBZ0VWT1JNNkdqTUZCVE1hT2hNNUZRRUJBUW9UR2hrZ0NTRWVFQ0FJQXdVQ0FRRUJEQ2dNYW9zMFkxTkhNUnNBQUFBQUF3REEvK0FEUUFKZ0FBQUFVd0RBQVRaTHNBdFFXRUFjazVLRkFBUUJDNTZhbFlSNkJRQUJxYWR6UWtBL0VRb0lDZ0FEUUJ0THNBeFFXRUFjazVLRkFBUUJDNTZhbFlSNkJRQUJxYWR6UWtBL0VRb0lCd0FEUUJ0QUhKT1NoUUFFQVF1ZW1wV0VlZ1VBQWFtbmMwSkFQeEVLQ0FvQUEwQlpXVXV3QzFCWVFEVURBUUVMQUFzQkFHWUVBUUFLQ3dBS1pBQUtCd3NLQjJRSkNBSUhCZ3NIQm1RQUFnQUxBUUlMV1F3QkJnWUZVQUFGQlFzRlFodExzQXhRV0VBdkF3RUJDd0FMQVFCbUJBRUFCd3NBQjJRS0NRZ0RCd1lMQndaa0FBSUFDd0VDQzFrTUFRWUdCVkFBQlFVTEJVSWJRRFVEQVFFTEFBc0JBR1lFQVFBS0N3QUtaQUFLQndzS0IyUUpDQUlIQmdzSEJtUUFBZ0FMQVFJTFdRd0JCZ1lGVUFBRkJRc0ZRbGxaUUI1VlZJdUtaV1JpWVY5ZVhWeFV3RlhBVGswNU9DOHVKeVVmSGhNU0RRNHJDUUV1QVNjbUp5NEJQd0UyTno0RE5UY3lQZ0UzUGdFMU5DNERJemMrQVRjMkppTWlEZ0VWSGdFZkFTSUhGQllYSGdNWE14WVhGaDhEQmdjT0FRY09CQWNHRlNFMExnTUhJVFkzTmpjK0FUY3lOakkrQVRJK0FUSTNOamMySnowQ05DWTlBeWN1QVNjbUx3RXVBaWNtSnlZK0FUYzFKaWNtTnpZeUZ4WUhEZ0lITVFZVkhnRUhCZ2NVRGdFVkJ3NENCdzRCRHdFZEFRWWRBUlFHRlJRWEhnSVhGaGNlQVJjV0Z4NENGd0dWQVVJUVJBTWVDZ01CQVFFTUJnSUVCQU1CQWdVSkF3RUxBd01EQWdFREFnWUJBVkJHTDBZZ0FRWUNBd3NCQ3dFQ0JRUUZBUUlIQndNRkJ3TUJBUUlGR0FzR0V4RVRFZ2hwQW9BU0Z5RVU0djd0QlF3V0lBa1pFUUVGQXdRREJBTUVBd0lwRUF3QkFRVURDZ01GQndFQkNBa0JCQVFDQWdjQkNRRUJIU0J5SUIwQkFRVURBUUVCQ3dNRUJRa0pBUUlFQlFFRENnTUZBUUVNQnh3UEJ3Z1lFUmtKSVJVRUJRVUNBWTMrdXdZTEFRWU1CQ2tTRXhNUkJSQVJEd1VGQVF3TEJ5WUxCUWNFQWdFSkJpd2FObEVvUENNYUtna0lFd3NrQ1FZS0JRSUJMaEVIQ1E4RlJBc0RCUW9EQVFNREJBUURKVU1TSVJVVUNFUUhDQkFMQkFVQ0FRRUJBUUVCQ1JRT01nZ0pCd1FGQWdNQ0NBY0ZFZ2dPS2djRUJRUURFeElNQ0FrRERCc3dLUjBoSVIwcEZTWU5Bd1VHQWhJTkVoTURCQVVFQndrV0ZRUUlFQWNIQ0FJREJBa0VEQVl5RGdrT0JRRUNCQUlGQkFzUUF3UUZBd0FBQkFEQS8rQURRQUpnQUFzQURBQmZBTXdCY2t1d0MxQllRQnlmbnBFTUJBY0VxcWFoa0lZRkJnZTFzMzlPVEVzZEZnZ1FCZ05BRzB1d0RGQllRQnlmbnBFTUJBY0VxcWFoa0lZRkJnZTFzMzlPVEVzZEZnZ05CZ05BRzBBY241NlJEQVFIQktxbW9aQ0dCUVlIdGJOL1RreExIUllJRUFZRFFGbFpTN0FMVUZoQVJ3a0JCd1FHQkFjR1pnb0JCaEFFQmhCa0FCQU5CQkFOWkE4T0FnME1CQTBNWkFBSUFCRUJDQkZaQWdFQUJRRURCQUFEVndBQkFBUUhBUVJYRWdFTURBdFFBQXNMQ3d0Q0cwdXdERkJZUUVFSkFRY0VCZ1FIQm1ZS0FRWU5CQVlOWkJBUERnTU5EQVFOREdRQUNBQVJBUWdSV1FJQkFBVUJBd1FBQTFjQUFRQUVCd0VFVnhJQkRBd0xVQUFMQ3dzTFFodEFSd2tCQndRR0JBY0daZ29CQmhBRUJoQmtBQkFOQkJBTlpBOE9BZzBNQkEwTVpBQUlBQkVCQ0JGWkFnRUFCUUVEQkFBRFZ3QUJBQVFIQVFSWEVnRU1EQXRRQUFzTEN3dENXVmxBSkdGZ2w1WnhjRzV0YTJwcGFHRE1ZY3hhV1VWRU96b3pNU3NxSHg0UkVSRVJFUkFURkNzQkl6VWpGU01WTXhVek5UTUZBUzRCSnlZbkxnRS9BVFkzUGdNMU56SStBVGMrQVRVMExnTWpOejRCTnpZbUl5SU9BUlVlQVI4QklnY1VGaGNlQXhjekZoY1dId01HQnc0QkJ3NEVCd1lWSVRRdUF3Y2hOamMyTno0Qk56STJNajRCTWo0Qk1qYzJOelluUFFJMEpqMERKeTRCSnlZdkFTNENKeVluSmo0Qk56VW1KeVkzTmpJWEZnY09BZ2N4QmhVZUFRY0dCeFFPQVJVSERnSUhEZ0VQQVIwQkJoMEJGQVlWRkJjZUFoY1dGeDRCRnhZWEhnSVhBMEF5SERJeUhETCtWUUZDRUVRREhnb0RBUUVCREFZQ0JBUURBUUlGQ1FNQkN3TURBd0lCQXdJR0FRRlFSaTlHSUFFR0FnTUxBUXNCQWdVRUJRRUNCd2NEQlFjREFRRUNCUmdMQmhNUkV4SUlhUUtBRWhjaEZPTCs3UVVNRmlBSkdSRUJCUU1FQXdRREJBTUNLUkFNQVFFRkF3b0RCUWNCQVFnSkFRUUVBZ0lIQVFrQkFSMGdjaUFkQVFFRkF3RUJBUXNEQkFVSkNRRUNCQVVCQXdvREJRRUJEQWNjRHdjSUdCRVpDU0VWQkFVRkFnSHVNakljTWpKRi9yc0dDd0VHREFRcEVoTVRFUVVRRVE4RkJRRU1Dd2NtQ3dVSEJBSUJDUVlzR2paUktEd2pHaW9KQ0JNTEpBa0dDZ1VDQVM0UkJ3a1BCVVFMQXdVS0F3RURBd1FFQXlWREVpRVZGQWhFQndnUUN3UUZBZ0VCQVFFQkFRa1VEaklJQ1FjRUJRSURBZ2dIQlJJSURpb0hCQVVFQXhNU0RBZ0pBd3diTUNrZElTRWRLUlVtRFFNRkJnSVNEUklUQXdRRkJBY0pGaFVFQ0JBSEJ3Z0NBd1FKQkF3R01nNEpEZ1VCQWdRQ0JRUUxFQU1FQlFNQUFBSUFZUCtBQTZBQ3dBQUhBRVFBTWtBdlFSc2FDd1FDQXdGQUFBQUFBd0lBQTFrRUFRSUJBUUpOQkFFQ0FnRlJBQUVDQVVVSkNDY2tDRVFKUkJNUUJSQXJBQ0FHRUJZZ05oQUJJaVluUGdFM1BnRTFOQ2NtSnlZbkpqOEJOVFltSnlZK0FqYzJOek1XRng0QkJ3WVhNQmNlQVFjT0FRY09CUlVVRmhjV0Z3NENBcXorcVBUMEFWajAvbUJXbVRVY2NDZ0VBZ2dPQkJNSkJ3Z0JBZ1FFQWdJR0Rnb29UQ05OS0JRT0JBb0VBUVFCQkFVUEJ3SUdCd2dGQkFJRGFWRWpXbTBDd1BUK3FQVDBBVmo5MTBoQURDZ01BUVlPSUJBZUlSVXRJeFFCQWdjeEZnY1pHaDhPTXdVRk14bzZFemtWQXdvVEdoa2dDUXNZRkJBT0VRZ09CZ0VmSVNzOUlRQUFBQUVBd1AvZ0EwQUNZQUJTQURkQU5FRS9QaEFKQlFVQUFVQURBUUVDQUFJQkFHWUVBUUFGQWdBRlpBQUNBZ1ZQQUFVRkN3VkNUVXc0Tnk0dEppUWVIUklSQmc0ckpTNEJKeVluTGdFL0FUWTNQZ00xTnpJK0FUYytBVFUwTGdNak56NEJOelltSXlJT0FSVWVBUjhCSWdjVUZoY2VBeGN6RmhjV0h3TUdCdzRCQnc0RUJ3WVZJVFF1QXdMWEVFUURIZ29EQVFFQkRBWUNCQVFEQVFJRkNRTUJDd01EQXdJQkF3SUdBUUZRUmk5R0lBRUdBZ01MQVFzQkFnVUVCUUVDQndjREJRY0RBUUVDQlJnTEJoTVJFeElJYVFLQUVoY2hGRWdHQ3dFR0RBUXBFaE1URVFVUUVROEZCUUVNQ3djbUN3VUhCQUlCQ1FZc0dqWlJLRHdqR2lvSkNCTUxKQWtHQ2dVQ0FTNFJCd2tQQlVRTEF3VUtBd0VEQXdRRUF5VkRFaUVWRkFnQUFBQUFBZ0RBLytBRFFBSmdBQXNBWGdEQVFBcE5TMG9jRlFVTEJnRkFTN0FMVUZoQUxnQUlBUUFJWEFrQkJ3UUdBQWRlQ2dFR0N3UUdDMlFDQVFBRkFRTUVBQU5ZQUFFQUJBY0JCRmNBQ3dzTEMwSWJTN0FNVUZoQUxRQUlBUWhvQ1FFSEJBWUFCMTRLQVFZTEJBWUxaQUlCQUFVQkF3UUFBMWdBQVFBRUJ3RUVWd0FMQ3dzTFFodEFMZ0FJQVFob0NRRUhCQVlFQndabUNnRUdDd1FHQzJRQ0FRQUZBUU1FQUFOWUFBRUFCQWNCQkZjQUN3c0xDMEpaV1VBVVdWaEVRem81TWpBcUtSNGRFUkVSRVJFUURCUXJBU00xSXhVakZUTVZNelV6QXk0Qkp5WW5MZ0UvQVRZM1BnTTFOekkrQVRjK0FUVTBMZ01qTno0Qk56WW1JeUlPQVJVZUFSOEJJZ2NVRmhjZUF4Y3pGaGNXSHdNR0J3NEJCdzRFQndZVklUUXVBd05BTWh3eU1od3lhUkJFQXg0S0F3RUJBUXdHQWdRRUF3RUNCUWtEQVFzREF3TUNBUU1DQmdFQlVFWXZSaUFCQmdJREN3RUxBUUlGQkFVQkFnY0hBd1VIQXdFQkFnVVlDd1lURVJNU0NHa0NnQklYSVJRQjdqSXlIREl5L25ZR0N3RUdEQVFwRWhNVEVRVVFFUThGQlFFTUN3Y21Dd1VIQkFJQkNRWXNHalpSS0R3akdpb0pDQk1MSkFrR0NnVUNBUzRSQndrUEJVUUxBd1VLQXdFREF3UUVBeVZERWlFVkZBZ0FBQUlBb1AvQUEzY0NnQUJKQUl3QVhFQlpZZ0VHQjNsM0VoQUVBQVlDUUFBREFnY0NBd2RtQUFZSEFBY0dBR1lBQWdBSEJnSUhXUUFBQUFrQkFBbFpBQUVBQ0FVQkNGa0FCUVFFQlUwQUJRVUVVUUFFQlFSRmhZT0FmbVZqWVdCUFRVSkFMU3dxS0NRaUNoQXJKUzRCSXlJT0FRY0dJeUltTHdFbUx3RW1Md0V1QXk4QkxnSTFORDRDTnpZbkppOEJKaU1pQndZakJ3NENCdzRCRkI0QkZ4NEJGeDRCRng0Qk16SStBamMySnlZSEJnY0dJeUluTGdFbkxnWTJOelkzTURjeU5UWXpNaFlmQVI0QkJ3WVhIZ0lmQVI0QkZ4WVhGaDhCRmg4QkZqTXlOamMyTXpJZUFoY1dCd1lEUUJ0bkpRWU1DZ1F3Q2dRS0N3SWxGZ1FCQWdRR0JnMFFEQUVLQ0FnQ0Jna0hJUjRRTVFJZEpod2tBUUVCRGhjUEJBUUVDQlFRSTBnekxEbzJOV0VrRmhZaklCSTJLd1lkSkNZS0ZVQm9ORGtyR1NnbElTTVRCQU1FQ1NFQ0FSMFREQlVMQWk0akZTQUNBUW9MREFFWEZRc0JBZ01CQXhZbkFod1JEUjhmQmdvUEt5a2pDaHNHQklFYk93SUVBaDhIQ2dJZkdBTUNBd01HQncwVERRRUxDZ3dFQXdnTERna3NQeUU3QXlRWEFRRUpGaGdNRFJZaUpETWRRR0UxTGpBbkppb0NDaG9XUVRjR2FTc0VBVW9tTHkwWkx6STFQek1tR0E0Y0ZRRUJFZ3dOQWpsS0hDd1lDUk1PRGdFWkZ3c0JBd0lCQkJjaUFoZ1BGQVFSR0JvS0d4WVJBQUFEQUlBQUlBT0FBaUFBQXdBR0FCTUFQRUE1RWhFT0RRd0pDQVFJQXdJQlFBUUJBUUFDQXdFQ1Z3VUJBd0FBQTBzRkFRTURBRThBQUFNQVF3Y0hBQUFIRXdjVEJnVUFBd0FERVFZUEt4TVJJUkVCSlNFQkVSY0hGemNYTnhjM0p6Y1JnQU1BL29EK3VnS00vVnJtaUFTZVlHQ2VCSWptQWlEK0FBSUEvdWo0L2tBQnJLK2JCSXRKU1lzRW02LytWQUFDQUlELzRBT0FBbUFBSndCVkFHcEFaelF5SVFNRUFCUUJBUUpLQVFnQlRoZ0NEQWsvQVFjTUJVQUFCQUFDQUFRQ1pnVURBZ0lCQUFJQlpBc0tBZ2dCQ1FFSUNXWUFDUXdCQ1F4a0FBWUFBQVFHQUZrQUFRQU1Cd0VNV1FBSEJ3c0hRbEZQVFV0SlNFWkZSVVErUENrb0VSSVJJU1lRRFJRckFESWVBUlVVQndZaklpY2lJeWNqSmljaUJ5TUhEZ0VQQVQ0RE5UUW5KaWNtSnlZMU5EWWtJZzRCRlJRWEhnSVhKalV4RmhVVUJ3WVdGek15UHdJMlB3RXpJelkzTWhjVk16SVZGak15UGdFMEpnR2h2cU5lWTJXV1ZEY0JBZ0VDRHc0UkVBRUVCUXNDVHdzTEJRRU5BZ0VEQVRWZUFXclFzV2M5QVFNQ0FRSUhKQUlKQ0FZREJBTmxBUW9KQVFFTEN3c0tBZ0U5V21pd1ptY0NRRXFBUzI5TVR4TUJCQUVHQWdFRUFTTWhKQk1GQWhZVEF3RUVBVU5QUzM5cVU0NVVXa3dCQkFRQkF3RUxEQUp5Qmd3Q0FRRXNBUU1FQXdFREFRRVVUWXFuamdBQUFBQURBR0QvZ0FPZ0FzQUFDUUFSQUJnQW5yVVVBUVlGQVVCTHNBcFFXRUE2QUFFQUNBQUJDR1lBQmdVRkJsMEFBZ0FBQVFJQVZ3d0JDQUFMQkFnTFZ3QUVBQU1KQkFOWENnRUpCUVVKU3dvQkNRa0ZUd2NCQlFrRlF4dEFPUUFCQUFnQUFRaG1BQVlGQm1rQUFnQUFBUUlBVnd3QkNBQUxCQWdMVndBRUFBTUpCQU5YQ2dFSkJRVUpTd29CQ1FrRlR3Y0JCUWtGUTFsQUZnb0tHQmNXRlJNU0NoRUtFUkVSRWhFUkVSRVFEUllyRXlFVk16VWhFVE0xSXpjUklSY3pOVE1SQXlNVkp5RVJJWUFDQUNEOXdPREE0QUZGZ0J0Z0lHQnUvczRDQUFLZ3dPRCtRQ0NnL2tDQWdBSEEvbUJ0YlFHQUFBQUFBUUNnLzhBRGR3S0FBRWtBTmtBekVoQUNBQU1CUUFBQ0F3Sm9BQU1BQTJnQUFRQUVBQUVFWmdBQUFRUUFUUUFBQUFSUkFBUUFCRVZDUUMwc0tpZ2tJZ1VRS3lVdUFTTWlEZ0VIQmlNaUppOEJKaThCSmk4QkxnTXZBUzRDTlRRK0FqYzJKeVl2QVNZaklnY0dJd2NPQWdjT0FSUWVBUmNlQVJjZUFSY2VBVE15UGdJM05pY21BMEFiWnlVR0RBb0VNQW9FQ2dzQ0pSWUVBUUlFQmdZTkVBd0JDZ2dJQWdZSkJ5RWVFREVDSFNZY0pBRUJBUTRYRHdRRUJBZ1VFQ05JTXl3Nk5qVmhKQllXSXlBU05pc0dnUnM3QWdRQ0h3Y0tBaDhZQXdJREF3WUhEUk1OQVFzS0RBUURDQXNPQ1N3L0lUc0RKQmNCQVFrV0dBd05GaUlrTXgxQVlUVXVNQ2NtS2dJS0doWkJOd1lBQUFBQUFnQ0FBQ0FEZ0FJZ0FBd0FEd0FyUUNnUEN3b0hCZ1VDQVFnQUFRRkFBQUVBQUFGTEFBRUJBRThDQVFBQkFFTUFBQTROQUF3QURBTU9LeVVSQlJjSEp3Y25CeWMzSlJFQklRRURnUDc2aUFTZVlHQ2VCSWorK2dMdi9TRUJjQ0FCNU1lYkJJdEpTWXNFbThmK0hBSUEvdWdBQUFBQkFJRC80QU9BQW1BQUxRQkJRRDRpREFvREFnQW1BUVlERndFQkJnTkFCUVFDQWdBREFBSURaZ0FEQmdBREJtUUFBQUFHQVFBR1dRQUJBUXNCUWlrbkpTTWhJQjRkSFJ3V0ZCQUhEeXNBSWc0QkZSUVhIZ0lYSmpVeEZoVVVCd1lXRnpNeVB3STJQd0V6SXpZM01oY1ZNeklWRmpNeVBnRTBKZ0pvMExGblBRRURBZ0VDQnlRQ0NRZ0dBd1FEWlFFS0NRRUJDd3NMQ2dJQlBWcG9zR1puQW1CVGpsUmFUQUVFQkFFREFRc01BbklHREFJQkFTd0JBd1FEQVFNQkFSUk5pcWVPQUFBQUFBSUFZUCtBQTZBQ3dBQUZBQTBBYlV1d0NsQllRQ2tBQVFZREJnRURaZ0FFQXdNRVhRQUFBQUlHQUFKWEJ3RUdBUU1HU3djQkJnWURUd1VCQXdZRFF4dEFLQUFCQmdNR0FRTm1BQVFEQkdrQUFBQUNCZ0FDVndjQkJnRURCa3NIQVFZR0EwOEZBUU1HQTBOWlFBNEdCZ1lOQmcwUkVSSVJFUkFJRkNzQklSRXpOU0VGRVNFWE16VXpFUUtnL2NEZ0FXRCt3QUZGZ0J0Z0FzRCtRT0FnL2tDQWdBSEFBQUFBQUFjQXMvL2hBeWdDWndBM0FFWUFXQUJtQUhFQWp3QzdBUUJBSVprQkN3a1pGQk1EQUFkMkFRUUFCUUVNQTB3cEFnSU1CVUIrQVFVbEFRMENQMHV3QzFCWVFGUUFDUWdMQ0FrTFpnQUtDd0VMQ2dGbUFBQUhCQUVBWGc4QkJBMEhCQTFrQUEwREJ3MERaQUFNQXdJRERBSm1EZ0VDQW1jQUNBQUxDZ2dMV1FBQkJRTUJUUVlCQlFBSEFBVUhXUUFCQVFOUkFBTUJBMFViUUZVQUNRZ0xDQWtMWmdBS0N3RUxDZ0ZtQUFBSEJBY0FCR1lQQVFRTkJ3UU5aQUFOQXdjTkEyUUFEQU1DQXd3Q1pnNEJBZ0puQUFnQUN3b0lDMWtBQVFVREFVMEdBUVVBQndBRkIxa0FBUUVEVVFBREFRTkZXVUFtYzNJNU9MVzBzckdrbzZDZm1KZVVrb1NEZ0g5OWZIS1BjNDlCUHpoR09VWWVIUkVRRUE0ckFTNENOajhCTmljdUFRNEJEd0VPQVNJbUp6VW1QZ0kzTkM0Q0JnY09CQlVPQVIwQkhnUVhGajRDTnpZbkpnTUdMZ0kxTkRZM05oWVZGQWNHSnc0REZ4VVVIZ0VYRmpZM1BnRXVBUWNHSmpVME5qYzJIZ0lWRkFZM0JpWW5KalkzTmhZWEZqY3lQZ0UzTlRZdUJBOEJJZ1lWRkRNMkhnTU9BUlVVRnhZbkxnRUdJZzRCQnlNUEFRWVZGQjRCTXpZM05qSWVBeGNXQnc0Q0ZSUVdNalkzTXo0QkxnTUNoUWNJQVFFQkFSZ2RDaUFnSFFrS0JRZ0dBd0VCQVFFQ0FRTU1GU1VaR1RNbklCQVhGd1FpTHo4NklTZFhUMElQSkVBUTZ5VkZNaDV0VFU5c1FqVllIU2dRQ0FFQkRnMHZVaG9NQWhJelBnOFVFdzRJRGdrR0ZTOEZDd0lEQWdVR0N3SUc5QVFIQlFFQ0J4QVZGaElGQmdjS0VSQVdEZ1lEQVFFT0Fnc0pFeEVPRHdZRkFRRUJFZ2NMQndFVkF3NFZHUmtaQ1JNTEFRRUREaFVNQVFFSkFSQVpJU0lCTGdFR0JnWUNBaklsREFrSENnVUZBZ0lCQXdRRENBY01CQTRYR2c0QkN3c3JMeXdiQVNoUEZCUXNSU3NmRGdNRUVpZENLbU0wRGY3bUFoVW5PU0ZCWHdVRVRFRktOeXY3QlNBbkpnME5CUTRnQ0I0WUtSUThOeUswQWhNUEVCc0NBUVVKRFFnUUdVRUZBUVlGRUFRRkFRWU50QVVJQmdJZUxSa1JCQUVCQVF3SkZnWUhDUllQRkFjQ0V3SUIvZ01EQVFNQ0FRRUJCaGdKRGdrQkJnRUNDeEFlRXpjeUFnWVFCdzBQQ2hBcVNqY3VIeFFBQUFZQVFQK2tBOEFDbXdBT0FCa0FQQUJIQUU4QWN3Q0pRSVpTQVFRTFpsNENEUUJmT2pFREJnMERRRGswQWdZOUNnRUhDQXNJQnd0bUVRRUxCQWdMQkdRUUFnOERBQUVOQVFBTlpnNEJEUVlCRFFaa0FBWUdad0FNQ1FFSUJ3d0lXUVVCQkFFQkJFMEZBUVFFQVZFREFRRUVBVVZSVUJBUEFRQnRhbWxvVmxSUWMxRnpUVXhKU0VOQlBqMHdMaUlmSGgwV0ZROFpFQmtHQkFBT0FRNFNEaXNsSWlZME5qTXlIZ01WRkE0Qkl5SXVBVFUwTmpJV0ZBWUZOQzRCSnlZckFTSU9CaFVVRng0Qk16STNGekFYSGdFK0FUVW5QZ0VBSWlZME5qTXlIZ0VWRkRZeUZoUUdJaVkwRnpJWExnRWpJZzRERlJRV0Z3Y1VCaFFlQVQ4QkhnRXpNRHNDTGdFMU5ENEJBdzRRRnhjUUJnd0tCd1FMRWRNS0Vnc1hJQmNYQVdwRWRVY0dCUWtkTmpJc0poNFZDd2dYbFdGQk9qNEJBZ1VFQXhJc012MVVJQmNYRUFzU0NyMGhGaFloRnRvR0N4RzBkelZoVHpzaFBUWVlBUVVKQ2xnY095QURCQU1FQkZDSTRSY2hGd1FJQ1F3SENoSUxDeElLRVJjWElSYzRQMnRDQkFFS0Vob2hKeW93R1IwZFQyZ1pLZ0VCQVFFSEJrSWlYZ0ZFRnlBWENoSUxFRGNYSUJjWElFRUJab2djTTBWVkxVQnZKMWtCQkFvREF3UTlDZ29QSFE5SGVFWUFBQWdBUVA5aEE4RUM0Z0FIQUJBQUZBQVlBQjBBSmdBdkFEY0Faa0JqTUNBVEF3SUVOaUVDQVFJM0hRd0JCQUFCTFJ3Q0F3QXNKeG9YQkFVREJVQUFBUUlBQWdFQVpnQUFBd0lBQTJRSUFRUUdBUUlCQkFKWEJ3RURCUVVEU3djQkF3TUZVUUFGQXdWRkh4NFZGUkVSS2lnZUpoOG1GUmdWR0JFVUVSUVNGUWtRS3lVQkJoVVVGeUVtQVNFV0Z3RStBVFUwSnlZbkJ3RVdGejhCRVRZM0p3TWlCeEVCTGdNREZqTXlOamNSQmdjQkRnUUhGd0ZkL3ZjVUdBRVBCZ0pJL3ZFRkJRRUpDZ28xUklLLy9tNUVnTC9iZjBDLzAwcEdBUk1RSHlFaWxFQkRKa2dpQlFYK3B4Z3VLU1FmREw2Y0FRbEFSRXBHQmdFYkJRYis5eDlDSWt1SWdFREEvbHAvUDc3RS9vTkVnYjhCeVJqKzhRRVRCUWNGQS95VEZBd01BUTRGQkFJdkRTQW1LaThadmdBQUFBQUZBQVgvUWdQN0F3QUFJUUEwQUVBQVVBQmdBTUZBRGdnQkFnVVdBUUVDQWtBUUFRRTlTN0FMVUZoQUtRb0JBQUFEQkFBRFdRMElEQVlFQkFrSEFnVUNCQVZaQ3dFQ0FRRUNUUXNCQWdJQlVRQUJBZ0ZGRzB1d0ZsQllRQ0lOQ0F3R0JBUUpCd0lGQWdRRldRc0JBZ0FCQWdGVkFBTURBRkVLQVFBQUNnTkNHMEFwQ2dFQUFBTUVBQU5aRFFnTUJnUUVDUWNDQlFJRUJWa0xBUUlCQVFKTkN3RUNBZ0ZSQUFFQ0FVVlpXVUFtVWxGQ1FTTWlBUUJiV1ZGZ1VtQktTRUZRUWxBOE96WTFMU3NpTkNNMEdoZ0FJUUVoRGc0ckFTSU9BaFVVRmhjV0RnUVBBVDRFTng0Qk16SStBalUwTGdFRElpNEJOVFErQXpNeUhnSVZGQTRCQWlJR0ZSUWVBVEkrQVRVMEpTSU9BaFVVRmpNeVBnSTFOQ1loSWdZVkZCNERNekkrQVRRdUFRSUZaNzJLVW1sYkFRZ09FeElRQlFVSUhWQkdVQmdhTnh4bnVvWlBodWVLZE1GMEsxQm9na1JWbTI5Q2NMNVBQU29VSVNjaUZQN09EeG9URENvZUR4c1VEQ3NCc1I4cEJ3MFNGZ3dVSVJRVUlRTUFSSFNnV0dXeVBCY3RKQ0VZRVFVRUFRWVRGaVFVQlFWRWRLQllkY2h6L1BSVG0yRTZibGxESlRwaGhVbGhtbFFCcHljZkZTTVZGU01WSHljS0Voc1BJQzBNRlJ3UUh5Y25IdzBYRXc0SUZTTXFJQkVBQUFFQVYvOXVBNmtDMFFGNUFhSkJqUUZpQUlZQWRBQnlBSEVBYmdCdEFHd0Fhd0JxQUdrQVlBQWhBQlFBRXdBU0FCRUFFQUFNQUFzQUNnQUZBQVFBQXdBQ0FBRUFBQUFiQUFzQUFBRkhBVVlCUlFBREFBSUFDd0ZnQVYwQlhBRmJBVm9CV1FGWUFVb0FxQUNuQUowQWtBQ1BBSTRBalFDTUFCQUFEUUFDQUpzQW1nQ1pBSlFBa3dDU0FBWUFBUUFOQVM0QkxRRXFBTFVBdEFDekFBWUFDUUFCQVNjQkpnRWxBU1FCSXdFaUFTRUJJQUVmQVI0QkhRRWNBUnNCR2dFWkFSZ0JGZ0VWQVJRQkV3RVNBUkVCRUFFUEFRNEJEUUVNQU8wQXpBRExBTWtBeUFESEFNWUF4QUREQU1JQXdRREFBTDhBdmdDOUFMd0FLd0FGQUFrQkNnRG9BT2NBMHdBRUFBTUFCUUFIQUVBQlJBQ0hBQUlBQ3dDY0FKRUFBZ0FOQVFzQUFRQUZBQU1BUDBCRkRBRUxBQUlBQ3dKbUFBSU5BQUlOWkFBTkFRQU5BV1FBQVFrQUFRbGtDZ0VKQlFBSkJXUUVBUU1GQndVREIyWUlBUWNIWndBQUN3VUFTd0FBQUFWUEJnRUZBQVZEUVI0QlZ3RlVBVU1CUWdGQkFUOEJMQUVyQVNrQktBRDlBUG9BK0FEM0FPd0E2d0RxQU9rQTJ3RGFBTmtBMkFDbUFLVUFtQUNWQURrQU53QU9BQTRyRXk4Q05UOEZOVDhITlQ4aU93RWZNUlVIRlE4REhRRWZFUlVQRFNzQ0x3d2pEd3dmRFJVWEJ4MEJCeFVQRHlNSEl5OE5JeWNqSnc4Skl3OEJLd0l2RkRVM05UYzlBVDhQTXo4Qk16VXZFU3NCTlNNUEFSVVBEU3NDTHdnMVB4ZlJBZ0VCQWdFREFnUUZBUUVDQWdJQ0FnTUJBZ01FQWdNREJBUUVCUVlEQXdjSEJ3a0pDUXNJQ0FrS0NRc0xDd3NNQ3cwTkdRMG5EUTBPREEwTkRRME1EQXdMQ3drRkJBa0lCd2NHQndVRkJnUUhCQU1EQWdJQ0JBTUNBUUlCQWdVREFnUURBZ0lDQVFFQkFRTUNBZ01NQ1FRR0JRWUdCd1FEQXdNQ0F3SURBUUVCQWdRQkFnSUNBd0lEQWdRREFnTURCQUlDQXdJRUJBUURCQVVGQVFFQ0FnSUVCUWNHQmdjSEF3VUtBUUVGRmdrSkNRZ0VBZ01EQVFJQkFRSUNCQU1EQXdZR0J3Z0pCQVFLQ2dzTERBc2xEZ3dORFE0T0RRME9EUWNHQkFRTERBY0lCUWNLQ3djR0VBZ0lEQWdJQ0FvbkZoWUxDd29LQ2drSkNBZ0dCd0lEQWdJQ0FRSUJBUUVCQWdFREFnRUVBd1FDQlFNRkJRVUdCZ2NIQWdFQkJBb0dDQWNJQ1FRRUJBTUZBd1FEQXdJQkFRRURBUUVCQlFJRUF3VUVCUVVHQmdVSEJ3RUNBUUlDQWdJQkFRSUJBUUVDQVFNREF3TUVCUVVGQndjSEJnY0lCQVVHQndzSUFVc0ZCd1FPQmdZSEJ3Z0hCUVVIQndrREJBUUNFd29MRFE0SENRY0lDZ2dKQ1FVRUNnb0pDZ2tLQ2djR0J3VUZCUVVFQXdRREFnSUVBUUlCQXdNREJBUUZCZ1VIQndZRUF3Y0lCd2dJQ0FrSUNRZ1JDUWdKQ0FjSkR3ME1DaEFDQXdnRkJnWUhDQWdJQkFZRUJBWUZDZ1VHQWdFRkVRMElDZ29MREE0SkNBa0lDUWdQRUE0VEJ3d0xDZ1FFQkFRQ0JBTUNBUUlEQVFFREFnUUdCZ1VHQ2dzQkFnTURDdzhSQ1FvS0NnVUZDZ0VCQXdzRkJRY0dBd1FFQkFRRUJBUURBd01EQWdNRkJRTUNCUU1FQXdRQkFRTUNBZ0lDQVFFQ0FRSUVBZ1FGQkFJQ0FnRUJBUVVFQlFZREF3WUNBZ01CQVFJQ0FnRUNBd0lFQXdRRUJRSURBZ01EQXdZREF3TUVCQU1IQkFVRUJRSURCUUlDQXdFQ0FnSUNBUUVCQVFFQ0FnZ0ZCd2NLQ2dZR0J3Y0hDQWtKQ0FzQkFRSUNBZ01JQlFRRkJnUUZCUU1FQWdJREFRWUVCQVVGQ3djV0VBZ0pDUWdLQ2drS0NRc0pDd2tLQ0FnSUJBVUdCUW9HQUFBQUJBQmVBQ0FEb2dJZ0FCTUFLQUFzQURFQU4wQTBNVEF2TGl3cktpa0lBZ01CUUFRQkFBQURBZ0FEV1FBQ0FRRUNUUUFDQWdGUkFBRUNBVVVDQUNZakdSWUxDQUFUQWhNRkRpc0JJU0lPQVJVUkZCWXpJVEkyTlJFMExnTVRGQVlqSVNJdUJUVVJORFl6QlRJV0ZSY1ZGeEVIRVNjMU53SmYva1lTSVJRckhBRzZIQ2NIREJBVUZSTU8va1lFQ0FjSEJRUUNGZzhCdWc0VFhzUWlnSUFDSUJFZUV2NklIQ3NxSFFGNEN4UVFEQWIrUnc4V0FnUUZCd2NJQkFGNERSSUJFUTFwcTJzQmdEeis5ME9FUXdBQUFBWUFnQUFBQTRBQ1FBQWZBRWtBVVFCWkFGMEFaUURmUzdBb1VGaEFVZ0FQQ3c0SEQxNEFFQTRTRGhBU1pnQUJDUUVJQXdFSVdRQURBQWNEU3dRQ0V3TUFDZ0VIQ3dBSFdRQUxBQTRRQ3c1WkFCSUFFUTBTRVZrQURRQU1CZzBNV1FBR0JRVUdUUUFHQmdWU0FBVUdCVVliUUZNQUR3c09DdzhPWmdBUURoSU9FQkptQUFFSkFRZ0RBUWhaQUFNQUJ3TkxCQUlUQXdBS0FRY0xBQWRaQUFzQURoQUxEbGtBRWdBUkRSSVJXUUFOQUF3R0RReFpBQVlGQlFaTkFBWUdCVklBQlFZRlJsbEFMQUVBWldSaFlGMWNXMXBYVmxOU1QwNUxTa1pFT2pnM05pOHRKaU1hRnhJUUR3NE5EQWdGQUI4Qkh4UU9Ld0VqSmljdUFTc0JJZ1lIQmdjak5TTVZJeUlHRlJFVUZqTWhNalkxRVRRbUV4UU9BU01oSWlZMUVUUStBanNCTno0Qk56WS9BVE13T3dFZUFoY2VBeDhCTXpJZUFSVWtJZ1lVRmpJMk5BWWlKalEyTWhZVU56TVZJd1FVRmpJMk5DWWlBME43QXdZd0pCQ3hFQ011Q0FRYlJCc2JLQ2thQW9BYUl5TURCdzRJL1lBTkZnWUpEUWVJQ1FRUEF5WU5ETEVCQVFFREJRTUZEeGdTQ2dtS0NRMEgvdWVPWkdTT1pIRjBVVkYwVVRVaUl2OEFKVFlsSlRZQjRBTUhOU0VmTkFnRklDQWtHZjZnR3lnb0d3RmdHaVArWXdvUENoWU5BV0FHQ3djRkJnVVRCQ29NQ0FFQ0F3TUZFUndVQ3dZSERnZ0NaSTVrWkk3U1VYUlJVWFRnSW1rMkpTVTJKUUFEQVFEL1lBTUFBdUFBQ3dBWEFERUFUVUJLREFzQ0JRTUNBd1VDWmdBQUFBTUZBQU5aQUFJQUFRUUNBVmtBQkFvQkJnY0VCbGtKQVFjSUNBZExDUUVIQndoUEFBZ0hDRU1ZR0JneEdERXVMU3dyRVJFVEV5Y1ZGeFVRRFJjckFDSUdGUkVVRmpJMk5SRTBBeFFHSWlZMUVUUTJNaFlWRnhVVURnRWpJaVk5QVNNVkZCWVhGU01WSVRVak5UNEJQUUVDUVlKZFhZSmRJRXBvU2twb1NtQTdaanRhZ2lhTFpaSUJRb3BqaHdMZ1lrWCt5MFZpWWtVQk5VWCtoamhQVHpnQk5UaFBUemlabnp4a080QmJuNTlsa3dkK0pDUitCNU5sbndBQUJBRDAvMkFEREFMZ0FCSUFKQUFzQURrQVJrQkRGaFFUREFvR0JnTUVBVUFZQ0FJRFBRQUFBQUVDQUFGWkFBSUFCUVFDQlZrR0FRUURBd1JOQmdFRUJBTlJBQU1FQTBVdUxUUXpMVGt1T1NvcEppVWhJQkFIRHlzQUlnWVZGQjhDR3dFM05qOEJQZ0kxTkFjVkJnOEJDd0VtSnk0Qk5UUTJNaFlWRkNZaUJoUVdNalkwQnlJbU5UUStBVEllQVJRT0FRSnYzcDBUQVFQMTlRRUJBUUVHQ1FReUFRRUMxdGdCQVFnS2lzU0t0MnBMUzJwTGdDYzNHU3d5TEJrWkxBTGdtMjR6TWdNRy9mY0NDUUlEQVFNUUlTSVJiOGdCQVFNRS9qa0J5d01CRmk0WFlZaUlZUzYzUzJwTFMycVROeWNaTEJrWkxESXNHUUFDQVFEL1lBTUFBdUFBQ3dBbEFFRkFQZ29KQWdNQkFBRURBR1lBQVFBQUFnRUFXUUFDQ0FFRUJRSUVXUWNCQlFZR0JVc0hBUVVGQms4QUJnVUdRd3dNRENVTUpSRVJFUkVURXlrVkVBc1hLeVF5TmpVUk5DWWlCaFVSRkNVVkZBNEJJeUltUFFFakZSUVdGeFVqRlNFMUl6VStBVDBCQWIrQ1hWMkNYUUY4TzJZN1dvSW1pMldTQVVLS1k0ZGRZa1VCTlVWaVlrWCt5MFhobnp4a080QmJuNTlsa3dkK0pDUitCNU5sbndBQUFBSUE5UDlnQXd3QzRBQVNBQjhBSzBBb0RBb0lCZ1FCUFFNQkFRSUJhUUFBQWdJQVRRQUFBQUpSQUFJQUFrVVVFeG9aRXg4VUh4QUVEeXNBSWdZVkZCOENHd0UzTmo4QlBnSTFOQVVpSmpVMFBnRXlIZ0VVRGdFQ2I5NmRFd0VEOWZVQkFRRUJCZ2tFL3ZRbk54a3NNaXdaR1N3QzRKdHVNeklEQnYzM0Fna0NBd0VERUNFaUVXL0ROeWNaTEJrWkxESXNHUUFGQVFEL1lBTXdBdUFBQXdBS0FCVUFIUUExQUY5QVhBY0JBZ0VjR3hRR0JBQUNJUUVFQUNBQkF3UUVRQVVCQWdFQUFRSUFaZ0FCQ2dFQUJBRUFXUUFFQmdFREJ3UURXUWtCQndnSUIwc0pBUWNIQ0U4QUNBY0lRd1VFTlRRek1qRXdMeTRyS2lRaUh4NFlGeEFPQkFvRkNnc09Ld0UzQVFjbE1qY0RGUlFXTnhFMEppTWlEZ0VIQVRZM05TTVZGQWNYTmdjMk55Y0dJeUl1QXowQkl4VVVGaGNWSXhVaE5TTUJFUndDQXh6KzdDVWc0MTNmWEVJWkx5WVBBUklKWWlJaUZERHFNaTBUTFRNalF6WXBGeWFMWlpJQlFvb0MwQkQ4a0JEOUVRR0I2MFZpcHdFMVJXSVFIUlArTFJvYW41OUFOU0pEcXdNWElCWVdLVFZESTZDZlpaTUhmaVFrQUFBREFFRC9vQVBBQXFBQUJ3QVhBRG9Ba0VBTE1RRUJCem93QWdNRkFrQkxzQmhRV0VBd0FBWUJBQUVHQUdZQUJBQUZCUVJlQ0FFQ0FBY0JBZ2RaQUFFQUFBUUJBRmtBQlFNREJVMEFCUVVEVWdBREJRTkdHMEF4QUFZQkFBRUdBR1lBQkFBRkFBUUZaZ2dCQWdBSEFRSUhXUUFCQUFBRUFRQlpBQVVEQXdWTkFBVUZBMUlBQXdVRFJsbEFGQW9JTmpNdUxDVWpHeGtTRHdnWENoY1RFQWtRS3dBeU5qUW1JZ1lVQVNFaUJoVVJGQll6SVRJMk5SRTBKZ01tSXlJR0R3RU9CQ01pSnk0Q0x3RW1JeUlIQXhFK0FUTWhNaDRCRlJNQ3VGQTRPRkE0QVFqODhCY2hJUmNERUJjaEllVUxEd2NMQnlZQ0JBVUVCUU1OQ1FFREF3RnNEUlFVRHYwQ0Rnb0N6QVlNQndFQllEaFFPRGhRQVFnaEdQMXlHQ0VoR0FLT0dDSCtkUXdHQlNBQ0FnTUJBUWdCQWdRQmRBOFAvczhDQ1FvTkJnc0gvZmNBQUFBSUFGYi9QUU8zQXNrQUtRQTJBRlVBWXdCeEFJQUFrUUNkQUxKQXIzSUJCd3hOQVFZSGNBRUxDVGczSUJNRUFnVk1SVVFaQkFBQ0tnRUJBQVpBVlZST0F3UU1QZ0FHQndrSEJnbG1BQVVPQWc0RkFtWUFBZ0FPQWdCa0FBQUJEZ0FCWkFBQkFXY0FEQUFMQkF3TFdRQUpBQW9EQ1FwWkFBUUFBdzBFQTFrU0FRMEFFQWdORUZrUkFRY0FDQThIQ0ZrQUR3NE9EMDBBRHc4T1VRQU9EdzVGZ29GWFZwaVdrNUtLaUlHUmdwRi9mbmQyYld4bFpGMWNWbU5YWTFGUVNVaEFQakl3SXlJZEhCY1ZFdzRyQVNjUEFTY21Ed0VPQVJVUkZCNEROajhCRnhZek1qOEJGaGNXTWpjMk54Y1dNalkzTmpVUk5BRXVBVFUwUGdFek1oWVZGQVkzSno0Qk5UUXVBU01pQmhVVUZ3Y25MZ0VqQmc4QkVUY1hGakkyUHdFWEJTSUdGUkVVRmpJMk5SRTBMZ0VYSWc0Q0hRRVVGakkyUFFFbU54VVVIZ0V5UGdFOUFUUXVBU01HQXlJT0FoVVVGak15UGdJMU5DNEJCaUltTkRZek1oNENGUlFEcWJjTDI4a0hCOU1HQmdJRUJBWUdBODNLQXdRRUF4NHZRd1VVQldRc1RnTUdCUUlIL3Z3MlhDZERLRDFXWGFrekJnVXhWREpNYXlZV3lRSURBZ1FEdXNIS0FnVUZBdHlpL2FvSUN3c1BDd1VJekFRSEJRTUxEd3NEeEFVSUNna0ZCUWtGRHpBT0dSSUxLQndPR1JNTEV4OEdHaE1URFFjTENRVUNueW9CWkZRREExSUNDUWI5dkFNR0JRTUNBUUZRVlFFQ0RWNW1DQWlYYmhJQkFnSUdDQUpGRHZ6VlZiVXFKMFFuVmp3cXRab01FUndNTVZVeGJFc3BVZ3BVQVFFQkFVZ0NIRXhWQVFFQlpDVTFDd2Yra0FnTEN3Z0JjQVVJQlVjREJRY0RqUWNMQ3dlTkQxSzZCUWtFQkFrRnVnVUlCUVArblFzU0dRNGNLQW9UR1E0U0lCSmtFeG9UQlFrTUJnMEFBQUFBQXdDZy8rQURnQUtnQUFrQUVnQWpBRUZBUGg0U0VRME1CUUlHRGdrSUF3UUJBa0FBQlFZRmFBQUdBZ1pvQUFRQkFBRUVBR1lBQWdBQkJBSUJWd0FBQUFOUEFBTURDd05DRWljWUVSRVJFQWNWS3lrQkVTRTNJUkVoRVFjRkp3RW5BUlV6QVNjM0p5NENJeUlQQVRNZkFUYytBVFUwQXVEOTRBR2dJUDRnQW1BZy92c1RBVllXL3BoQUFXa1hSaGtDQndjRUN3Z1pBUllxR0FRRUFnQWcvY0FCd0NDWUV3RlhGLzZZUVFGb0YwQVpBd01DQ0JnWEtoa0VDZ1VNQUFBQUJnRGcvNkFESUFLZ0FDQUFMd0JDQUVZQVNnQk9BTGhBQzBBNU9EQWVFQVlJQ3dGQVM3QVVVRmhBUVFBS0F3d0RDbDRPQVF3TkF3d05aQThCRFFzRERRdGtBQXNJQ0F0Y0FBRUFCZ0FCQmxrSEFnSUFDUVVDQXdvQUExY0FDQVFFQ0UwQUNBZ0VVZ0FFQ0FSR0cwQkRBQW9EREFNS0RHWU9BUXdOQXd3TlpBOEJEUXNERFF0a0FBc0lBd3NJWkFBQkFBWUFBUVpaQndJQ0FBa0ZBZ01LQUFOWEFBZ0VCQWhOQUFnSUJGSUFCQWdFUmxsQUdVNU5URXRLU1VoSFJrVkVRMEpCTkJZMUdqTVJGVE1RRUJjckFTTTFOQ1lyQVNJT0FoMEJJeFV6RXhRV015RXlQZ2MxRXpNbE5ENENPd0V5SGdNZEFTTUJGUlFHSXlFaUppOEJMZ1E5QVFNaEJ6TVJJeE1qQXpNREl4TXpBeUNnSWhtTEN4WVFDYUFxTHlNWUFSb0ZDd2tKQ0FZRkJBSXVLZjU5QlFnTEJZc0ZDUWNHQThZQkRoRU0vdVlEQmdNRUF3UURBZ0V3QWJQb0hCeU9IUlllemgwVkhnSTlLQmtpQ1JBV0RDZ2QvYnNaSWdJREJnWUlDQW9LQmdKRlJRWUxDQVVEQmdjSkJTajlud0VORVFFQ0FnSUVCUVVHQXdFQ1JFRCtIZ0hpL2g0QjR2NGVBQUFBQUFJQXdQK2dBMEFDNEFBTEFCUUFQMEE4RkJFUUR3NE5EQWNEUGdBR0FBRUFCZ0ZtQndVQ0F3SUJBQVlEQUZjQUFRUUVBVXNBQVFFRVVBQUVBUVJFQUFBVEVnQUxBQXNSRVJFUkVRZ1RLd0VWTXhFaEVUTTFJUkVoRVNVbk54Y0hKeEVqRVFKQTRQM0E0UDhBQW9EK1FoZVZsUmR1SUFJQUlQM2dBaUFnL2FBQ1lEUVhsWlVYYmY0YUFlWUFBZ0RBLzZBRFFBS2dBQXNBRkFBK1FEc1VFUkFQRGcwTUJ3RUFBVUFBQmdNR2FBY0ZBZ01DQVFBQkF3QlhBQUVFQkFGTEFBRUJCRkFBQkFFRVJBQUFFeElBQ3dBTEVSRVJFUkVJRXlzQkZUTVJJUkV6TlNFUklSRUZCeGMzSndjUkl4RUNRT0Q5d09EL0FBS0Eva0lYbFpVWGJpQUNBQ0Q5NEFJZ0lQMmdBbURaRjVXVkYyMEI1djRhQUFBREFGSC9jUU92QXNBQURnQWRBQ2tBSjBBa0tTZ25KaVVrSXlJaElCOGVEQUU5QUFBQkFRQk5BQUFBQVZFQUFRQUJSUmtZRWdJUEt3RXVBU0lHQnc0QkhnSStBaVlERGdFdUFqWTNQZ0V5RmhjV0VBTUhKd2NYQnhjM0Z6Y25Od01tUEp1ZW16eFFPVG1nMXRhZ09UbG9TY1hGa2pRMFNUZVBrSTgzYjlXb3FCaW9xQmlvcUJpcHFRSkdQRDQrUEZEVzFxQTVPYURXMXY0Y1NUUTBrc1hGU1RZNU9UWncvc1FCWHFpbkY2aW9GNmVvR0tpb0FBQUFBZ0IrQUFBRGdBSmdBQk1BSWdCQlFENFdDZ0lEQkJzWEVoQUpCUUFCQWtBVkN3SUNQZ0FBQVFCcEFBSUZBUVFEQWdSWkFBTUJBUU5OQUFNREFWRUFBUU1CUlJRVUZDSVVJaHNVRmhBR0VpczdBVGMyTno0Q054VUpBUlVHQndZWE1CVXdBVFVOQVRVaUJnY21QZ1dBRlNaS1Rod3JRQ1lCZ1A2QXQyaGpBZ0dnQVNqKzJJeXZSUUVCREJnNFQ0TStkeU1NRHd3Qm9BRUFBUUNoQ0doa3BRWUJZSUhCd29KY2R3Y1pSa0JPT0NjQUFBQUFBZ0NBQUFBRGdBSmdBQjhBS2dBNlFEY2xEQUlEQkNRZ0RRQUVBZ0VDUUNZTEFnQStBQUlCQW1rQUFBQUVBd0FFV1FBREFRRURUUUFEQXdGUkFBRURBVVVVSEJZVUdRVVRLeVV3TlRRdUFpY3VBU2MxQ1FFMUhnRVhIZ0VmQVRNd1BRY25MZ0VqRlMwQkZTQVhGZ09BQXhBc0l6V0xYdjZBQVlBM1RDb3JTaU1tRlNCRnI0eisyQUVvQVFSWkkwQUdHaXBSVVNNMU53U2gvd0QvQUtBQ0V4TVVUamcrQndjSUJ3Y0lCZ2dUZDF5Q3dzR0J0RWtBQUFNQVlQK0FBNkFDd0FBVkFCMEFMZ0JkUUZvTkFRSUlDd0VFQVFKQURBRUJBVDhKQVFRQkFBRUVBR1lBQlFBSUFnVUlXUUFDQUFFRUFnRlpBQUFBQXdjQUExa0tBUWNHQmdkTkNnRUhCd1pSQUFZSEJrVWZIZ0FBSnlZZUxoOHVHeG9YRmdBVkFCVVRGQlVpQ3hJckFSUUdJeUl1QVRRK0FUTVZOeWNWSWdZVUZqSTJOUUlnQmhBV0lEWVFBU0l1QVRVMFBnSXlIZ0lVRGdJQzJINWFPMk02T21NN3dNQnFscGJVbGxUK3FQVDBBVmowL21CbnNHWThabzZham1ZOFBHYU9BU0JhZmpwamRtTTZiMitBV0piVWxwVnJBYUQwL3FqMDlBRlkvZGRtc0dkTmptWThQR2FPbW81bVBBQUFBQUlBUVArQUE4QUN3QUFKQUJNQUxrQXJFQUlDQUQ0VERRd0xDZ2tJQndZRkNnSTlBUUVBQWdJQVN3RUJBQUFDVHdNQkFnQUNReElhRWhBRUVpc0JJUXNCSVFVREpRVURGeWNITnljaE54Y2hCd1BBL3FscGFmNnBBUmh0QVJVQkZXNHUxZFZWMkFFR1VsSUJCdGdCZ2dFKy9zTEUvc0xGeFFFKzZKaVk5WlgzOTVVQUFBTUFZUCtBQTZBQ3dBQUhBQm9BSmdCSFFFUUFBQUFEQkFBRFdRa0JCUWdCQmdjRkJsY0FCQUFIQWdRSFZ3b0JBZ0VCQWswS0FRSUNBVkVBQVFJQlJRa0lKaVVrSXlJaElCOGVIUndiRUE0SUdna2FFeEFMRUNzQUlBWVFGaUEyRUFFaUxnRTBQZ0V6TWg0RUZSUU9BZ01qRlNNVk14VXpOVE0xSXdLcy9xajA5QUZZOVA1Z1o3Qm1ackJuTkdOVFJ6RWJQR2FPUFNIdjd5SHc4QUxBOVA2bzlQUUJXUDNYWnJET3NHWWJNVWRUWXpSTmptWThBbjN3SWUvdklRQUFBQU1BWVArQUE2QUN3QUFIQUJnQUhBQThRRGtBQkFNRkF3UUZaZ0FGQWdNRkFtUUFBQUFEQkFBRFdRWUJBZ0VCQWswR0FRSUNBVklBQVFJQlJna0lIQnNhR1JFUUNCZ0pHQk1RQnhBckFDQUdFQllnTmhBQklpNEJOVFErQWpJZUFoUU9BZ0VoRlNFQ3JQNm85UFFCV1BUK1lHZXdaanhtanBxT1pqdzhabzcrc3dJQS9nQUN3UFQrcVBUMEFWajkxMmF3WjAyT1pqdzhabzZham1ZOEFZMGlBQUFBQWdCZy80QURvQUxBQUFjQUdBQXBRQ1lBQUFBREFnQURXUVFCQWdFQkFrMEVBUUlDQVZFQUFRSUJSUWtJRVJBSUdBa1lFeEFGRUNzQUlBWVFGaUEyRUFFaUxnRTFORDRDTWg0Q0ZBNENBcXorcVBUMEFWajAvbUJuc0dZOFpvNmFqbVk4UEdhT0FzRDAvcWowOUFGWS9kZG1zR2ROam1ZOFBHYU9tbzVtUEFBQ0FENy9YZ1BDQXVJQUVRQXJBQ3BBSndRQkFBQURBZ0FEV1FBQ0FRRUNUUUFDQWdGUkFBRUNBVVVDQUNZakdSWU1DUUFSQWhFRkRpc0JJU0lPQWhVUkZCWXpJVEkyTlJFMEpoTVVEZ0lqSVNJdUJUVVJORFl6SVRJZUF4VURXLzFLRlNZY0VEd3JBcllyUER3UENBNFRDdjA4QmdzS0NRY0ZBeDRWQXNRSUVBd0tCUUxpRUJ3bUZmMUtLenc4S3dLMkt6ejgzQW9URGdnREJRY0pDZ3NHQXNRVkhnVUtEQkFJQUFBQUFnQlIvM0VEcndMQUFBNEFHZ0FaUUJZYUdSZ1hGaFVVRXhJUkVBOE1BRDBBQUFCZkVnRVBLd0V1QVNJR0J3NEJIZ0krQWlZREJ5Y0hKemNuTnhjM0Z3Y0RKanlibnBzOFVEazVvTmJXb0RrNXRoaW9xQmlvcUJpb3FCaXBBa1k4UGo0OFVOYldvRGs1b05iVy9vSVlxS2NYcUtnWHA2Z1lxQUFBQUFJQVlQK0FBNkFDd0FBSEFCd0FRMEJBRGdFREFCQUJCZ1FDUUE4QkJBRS9BQVlFQlFRR0JXWUFBQUFEQkFBRFdRQUVBQVVDQkFWWkFBSUJBUUpOQUFJQ0FWRUFBUUlCUlJJVkZCTVRFeEFIRlNzQUlBWVFGaUEyRUFBaUpqUTJNelVYQnpVaURnRVZGQll5TmpVekZBS3MvcWowOUFGWTlQN0sxSmFXYXNEQU8yTTZmN04rS0FMQTlQNm85UFFCV1A1VWx0U1dXSUJ2Ynpwak8xbC9mbHBxQUFBQUFRQkEvNEFEd0FMQUFBa0FHRUFWQWdFQVBna0lCd1lGQlFBOUFRRUFBRjhTRUFJUUt3RWhDd0VoQlFNbEJRTUR3UDZwYVduK3FRRVliUUVWQVJWdUFZSUJQdjdDeFA3Q3hjVUJQZ0FBQUFBQ0FHRC9nQU9nQXNBQUJ3QVRBRFpBTXdjQkJRWUNCZ1VDWmdRQkFnTUdBZ05rQUFBQUJnVUFCbGNBQXdFQkEwc0FBd01CVWdBQkF3RkdFUkVSRVJFVEV4QUlGaXNBSUFZUUZpQTJFQWNqRlNNMUl6VXpOVE1WTXdLcy9xajA5QUZZOUtEd0l1N3VJdkFDd1BUK3FQVDBBVmkrN3U0aThQQUFBQUFBQWdCZy80QURvQUxBQUFjQUN3QWhRQjRBQUFBREFnQURWd0FDQVFFQ1N3QUNBZ0ZSQUFFQ0FVVVJFeE1RQkJJckFDQUdFQllnTmhBSElUVWhBcXorcVBUMEFWajBvUDRBQWdBQ3dQVCtxUFQwQVZpK0lnQUFBQU1BTlA5VEE4MEM3QUFIQUJnQUtnQTVRRFlBQVFRQUJBRUFaZ0FBQlFRQUJXUUFBd1lCQkFFREJGa0FCUUlDQlUwQUJRVUNVZ0FDQlFKR0doa2pJUmtxR2lvWEZSTVNCeElyQUJRV01qWTBKaUlGRkE0Q0lpNENORDRDTWg0Q0FTSU9BaFVVSGdFek1qNENOVFF1QVFFdWZLNTdlNjRDSTBoOHFyeXJlMGxKZTZ1OHFueEkvalJSbEd0QWE3aHRVWlJyUDJ1NEFYZXZlM3V2ZTlOZHEzdEpTWHVydTZ0N1NVbDdxd0V5UUdxVVVteTRhejlybEZGdHVHc0FBZ0JnLzRBRG9BTEFBQWNBRWdBblFDUVNFUkFQRGdVQ0FBRkFBQUFDQUdnQUFnRUJBazBBQWdJQlVnQUJBZ0ZHSkJNUUF4RXJBQ0FHRUJZZ05oQUJCaU1pSmk4Qk54YzNGd0tzL3FqMDlBRlk5UDRnQ1FrRUNnUndKRjc2SXdMQTlQNm85UFFCV1A3QkNRVUVjQ05lK3lRQUFBQUNBRDcvWGdQQ0F1SUFGQUFjQUNwQUp4d2JHaGtZRmdZQkFBRkFBZ0VBQVFFQVRRSUJBQUFCVVFBQkFBRkZBZ0FLQndBVUFoUUREaXNCSVNJR0ZSRVVGak1oTWpZMUVUUXVCUUVuQnljM0Z3RVhBMXY5U2lzOFBDc0N0aXM4QlFzT0VoUVgva1FGQmNvZ3J3RmpJQUxpUEN2OVNpczhQQ3NDdGd3WEZSRU9Dd1g5YndVRnlpQ3ZBV01nQUFFQlFBQmdBc0FCNEFBTEFBYXpDQUFCSmlzQkJ5Y0hGd2NYTnhjM0p6Y0NxS2lvR0tpb0dLaW9HS21wQWVDcHFCZW9xQmVucUJlcHFBQUFBQUVCQUFBZ0F3QUNlQUFVQURsQU5nZ0JCQUlCUUFjQkFnRS9CZ0VCUGdBRUFnTUNCQU5tQUFFQUFnUUJBbGtBQXdBQUEwMEFBd01BVVFBQUF3QkZFaFVVRXhBRkV5c2tJaVkwTmpNMUZ3YzFJZzRCRlJRV01qWTFNeFFDYXRTV2xtckF3RHRqT24remZpZ2dsdFNXV0lCdmJ6cGpPMWwvZmxwcUFBQUJBSUQvb0FRQUFxQUFKZ0E0UURVYkdnb0pDQWNHQlFRSkFnRUJRQVFCQUFBQkFnQUJXUUFDQXdNQ1RRQUNBZ05SQUFNQ0EwVUJBQjhkRnhVUURnQW1BU1lGRGlzQk1oNEJGVGNYQnljM0Z6UXVBaU1pRGdFVUhnRXpNajRCTnhjT0FTTWlMZ0UxTkQ0Q0FnQm9zV2R1RW8yRkVtWTVZSVJKWWFWZ1lLVmhUWXRqR0JrbnlIMW9zV2M5WjQ0Q29HYXhhR2tTaUlnU2FVbUVZRGhncGNLbFlENXVSd2Qwa21leGFFNk9aejBBQUFJQVFQK0FBOEFDd0FBSkFBOEFLa0FuQ2djQ0FENFBEZzBFQXdJQkFBZ0NQUUVCQUFJQ0FFc0JBUUFBQWs4QUFnQUNReElTRlFNUkt5VURKUVVESlNFTEFTRWxGeUVIRnljQldHMEJGUUVWYlFFWS9xbHBhZjZwQWNCU0FRYllWZFcrL3NMRnhRRSt4QUUrL3NMVTlwWDFsd0FBQWdBQS95QUVBQU1nQUJRQUt3QThRRGtBQlFFQ0FRVUNaZ0FDQkFFQ0JHUUFCQWNCQXdRRFZRQUJBUUJSQmdFQUFBb0JRaFlWQVFBbUpTRWZGU3NXS3c4T0NnZ0FGQUVVQ0E0ckFTSU9BZ2MrQWpNeUVoVVVGakkyTlRRdUFRTXlQZ00zRGdNaklnSTFOQ1lpQmhVVUhnRUNBR2U3aVZJREEzQytiNnowT0ZBNGlleUxVcHQ4WHpZQ0FrUnZtRk9zOURoUU9JbnNBeUJQaHJsbWQ4bDAvdnE2S0RnNEtJdnNpZndBTWwxNm1WSlpvblJGQVFhNktEZzRLSXZzaVFBQURBQWwvMFFEMndMNkFBOEFIUUF1QUR3QVRnQmZBSEFBZ0FDVkFLY0F0QUREQUcxQWFwV0JjQU1CQUU0OUFnWUJMaDRDQlFhMUFRa0tsZ0VDQ1FWQUFBb0ZDUVVLQ1dZQUNRSUZDUUprQ3dFQUFBRUdBQUZaQ0FFR0J3RUZDZ1lGV1FRQkFnTURBazBFQVFJQ0ExRUFBd0lEUlFFQXVMZVlsenM0TkRFcktDTWdIUndYRmhFUUNna0FEd0VQREE0ckFUSWVBeDBCRkFZaUpqMEJORFlUTWhZZEFSUUdJaVk5QVRRMk13RVVCaXNCSWk0Qk5UUTJPd0V5SGdFVklSUUdLd0VpSmpVME5qc0JNaFlsRmhRR0R3RUdKaWNtTmo4QlBnRWVBUmNCRmdZUEFRNEJMZ0VuSmpZL0FUWVdGd0VlQVE4QkRnRW5MZ0UvQVQ0Q0ZoY0JIZ0VQQVE0Qkp5NEJOajhCUGdFWEF6NEJIZ0VmQVJZR0J3WW1Md0V1QVQ0RE53RTJNaFlmQVJZR0J3NEJMZ0V2QVNZMk53RStBUjhCSGdFT0FTOEJMZ0VCUGdFeUh3RWVBUTRCTHdFdUFUY0NBQVVKQndZREVoZ1NFZ3dNRWhJWUVoSU1BZHNTREg0SURnZ1NESDRJRGdqOUJCSU1mZ3dTRWd4K0RCSUN2QVFJQjIwS0dBY0dCd3B0Qmd3S0NnUDlhZ1lHQzIwRkRBc0pBd2NIQzJ3TEdBWUI2QXNHQmo4R0dBb0xCd2MvQXdrTERBWCtnZ3NHQmo4R0dBc0hDQUVEUHdjWUNsMEdEQXNKQXo4R0Jnc0tHQWMvQWdJQkFnTUdBd0YvQnc4T0JEOEdCZ3NGREFzSkF6OEhCd3Y5MUFZWUNtMExCZ3dZQzJ3TEJ3S2NCUTRQQjIwTEJnd1lDMjBLQndZQytnTUZDQWtGZlEwUkVRMTlEUkg5QkJFTmZnd1NFZ3grRFJFQklRd1JDQTBJRFJFSURRa01FUkVNRFJFUjRRZ1BEZ1EvQmdZTEN4Z0dQd01CQXdjRi9vSUxHQVkvQXdFREJ3VUxHQVkvQmdjS0Fpd0dHQXR0Q3dZR0JoZ0xiUVVIQXdFRC9Xb0dHQXR0Q3dZR0JBNFFCMjBMQmdZQ2xnTUJBd2NGYlFzWUJnWUdDMjBEQ0FnSEJ3WUMvV29FQ0FkdEN4Z0dBd0VEQndWdEN4Z0dBZWdMQmdZL0JoZ1dCZ1kvQmhqK2pRY0lCRDhHR0JZR0JqOEdHQXNBQWdDQi82QURnUUtnQUE4QUlBQXRRQ29PQVFJREFnRkFEd0FDQVQwQUFBQUNBd0FDV1FBREFRRURUUUFEQXdGUkFBRURBVVVvR0NNbUJCSXJCU2MyTlRRdUFTTWlCaFFXTXpJM0Z3RXVBVFUwTmpJV0ZSUU9CQ01pQTRIalExS01VbjZ5c241clZPTDluaVlwbitHZ0V5TTBQVVVrY1RIaVZHdFNqVkd5L0xORTR3RVBKbVEyY2FDZmNTVkZQVFFqRXdBQUFBRUJBQUFnQXdBQ0lBQUxBQ1ZBSWdBRUF3RUVTd1VCQXdJQkFBRURBRmNBQkFRQlR3QUJCQUZERVJFUkVSRVFCaFFyQVNNVkl6VWpOVE0xTXhVekF3RHdJdTd1SXZBQkR1N3VJdkR3QUFBQUFRRkEvK0FDd0FKZ0FBVUFCck1EQVFFbUt3RTNDUUVuQVFGQVFRRS8vc0ZCQVA4Q0gwSCt3UDdBUVFEL0FBQUFBUUZBLytBQ3dBSmdBQVVBQnJNREFRRW1Ld0VuQ1FFM0F3TEFRZjdCQVQ5Qi93SWZRZjdBL3NCQkFQOEFBQUFBQVFFc0FJUUN5d0c5QUFvQUVrQVBDZ2tJQndZRkFENEFBQUJmSVFFUEt5VUdJeUltTHdFM0Z6Y1hBY0FKQ1FRS0JIQWtYdm9qalFrRkJIQWpYdnNrQUFRQWdQK2dBNEFDb0FBSUFCRUFHd0FmQUV4QVNSMGNHeG9ZRnhZVEVSQVBDQUVOQkFjQlFBQUJCd0UvR1JJQ0JqNEFCZ0FIQkFZSFZ3QUVBQUVEQkFGWEJRRURBQUFEU3dVQkF3TUFUd0lCQUFNQVF4a1dFUkVTRVJFU0NCWXJDUUVSTXhFekVUTVJBeU1SSVJFakVTVUZBUWMxSXhVSEZRa0JOU1VITlRNQ0FQN0E0TURnSUtEL0FLQUJJQUVnL3VEQWdFQUJnQUdBL2FCQVFBSkEvd0QrWUFFQS93QUJvUDZBQVFEL0FBRng1dVlCYjVwYXdETXBBVFArelNtQU00WUFBQUFEQUdEL2dBT2dBc0FBR1FBaEFDVUFQa0E3SWdFRUFDVUJBUVFDUUFBRUFBRUFCQUZtQUFJRkFRQUVBZ0JaQUFFREF3Rk5BQUVCQTFFQUF3RURSUUVBSkNNZkhoc2FFQTRBR1FFWkJnNHJBVEllQVJjZUFSUUdCdzRFSXlJdUFTY3VBVFErQXlBR0VCWWdOaEFuQlNFUkFnQXpZVmNrTmpvNk5oWXhOVGs3SHpOaFZ5UTJPanB0aS9uK3FQVDBBVmowNFA1QkFQOENueG95SkRlTG1vczNGU1FiRXdrYU1pUTNpNXFNYkRvaDlQNm85UFFCV0JUQS93QUFBQVFBZ1ArZ0E0QUNvQUFTQUI0QXBnRTNBVzVMc0NaUVdFQmhBQWNBSFFVSEhWa0pBUVVmR3dJYUJnVWFXUWdCQmg0QkhBQUdIRmtoQVFBQUF3UUFBMWtLSWdJRUlBRVpFZ1FaV1JnQkVoRUJDd0lTQzFrQUFnQUJGQUlCV1JZQkZBOEJEUk1VRFZrQUZRQU9GUTVWRndFVEV3eFJFQUVNREFzTVFodEFad0FIQUIwRkJ4MVpDUUVGSHhzQ0dnWUZHbGtJQVFZZUFSd0FCaHhaSVFFQUFBTUVBQU5aQ2lJQ0JDQUJHUklFR1ZrWUFSSVJBUXNDRWd0WkFBSUFBUlFDQVZrV0FSUVBBUTBURkExWkZ3RVRFQUVNRlJNTVdRQVZEZzRWVFFBVkZRNVJBQTRWRGtWWlFVd0FJUUFmQUFFQUFBRTJBVE1CSXdFaUFSNEJIQUVRQVEwQkJnRUVBUDhBL1FEOEFQc0E3d0RzQU9jQTVBRFpBTmNBMHdEUkFNc0F5QURCQUw4QXZBQzZBS3dBcVFDZkFKd0FrZ0NSQUk0QWpBQ0hBSVFBZndCOUFIa0Fkd0JxQUdjQVdnQlhBRXdBU2dCR0FFUUFQQUE1QURRQU1nQXRBQ3NBSHdDbUFDRUFwZ0FhQUJrQUZBQVRBQTBBREFBQUFCSUFBUUFTQUNNQURpc0JJZzRDQndZVkZCNEJGeFl5TmpVMEp5WUNJaVkxTkQ0Qk1oNEJGUlEzSXlJbU5UUS9BVFkwTHdFbUl5SVBBUTRDSXlJbVBRRTBKaXNCSWdZZEFSUU9BeU1pSmk4QkppTWlEd0VHRkI4QkZoVVVEZ0VyQVNJT0FnOEJEZ01kQVJRV093RXlIZ0VWRkE0QkR3RUdGQjhCRmpNeVB3RStBVE15RmgwQkZCWTdBVEkyUFFFME5qTXlId0VXTWo4Qk5qUXZBU1kxTkRZN0FUSTJQUUkwTGdFWEZSUXJBU0lIRGdJVkZCNEJId0VXRHdFR0l5SXZBU1lqSWdZZEFSUU9BaXNCSWlZOUFUUW5KaU1pQmc4QkJpTWlMd0VtTkQ4Qk5qVTBKeVlyQVNJbVBRRTBOanNCTWpjMk5UUW1Md0VtTkQ4Qk5qTXdNekllQVI4QkZqTXlQZ0UzTmowQk5Ec0JNaDRCSFFFVUh3RWVCRE15UHdFK0FUSVdId0VlQVJVVUR3RUdGUlFlQVJjV093RXlGUUlDRkNVaUlBMDREUmtTT0o5eE9UZ05oVjBxU2xkS0s2OGVFeHNQRkE0T0xRNFZGUTRUQkFzTkJoTWRIQlE4RlIwRkNBd09DQWtSQnhNT0ZSVU9MUTRPRXc4TUZRd2ZCQWtJQ0FNR0F3UURBaDRVSHd3VkRBTUhCUk1PRGkwTkZoUVBFd1lSQ2hNY0hSUTlGQjRiRXhRT0V3NHFEaTBPRGhRUEd4TWVGQnNNRmdJUEhpQVhCd29HQmdzSUV3ME5MQVVJQ0FRVEdDRWZMd01GQmdROEJ3c1hHQjhRSGdzU0JRZ0lCQzBGQlJJYUZ4WWhId2NMQ3djZklCY1dEUXdTQlFVc0JRZ0RBZ01EQVJNWElRc1RFZ2NZRVQwRUNBUVlDQVFKQ1FvS0JpRVlFZ0lIQndjQ0xRSURCUk1aQlFvSUZpRWVEd0hnQnc4VkRUaFFHakFzRWpod1VFODVPUDZnWGtJclNpc3JTaXRDa2hzVEZBMFREeWtPTEE0T0VnVUhCQnNUSGhRZUhoUWZCdzRMQ0FVSUJ4TU9EaXdPS1E4U0RoUU1GZ3dDQXdRREJnTUhDQWtGUEJVZERCWU1Cd3dLQlJJUEtRNHNEZzRUQndnYkV4NFZIUjBWSGhNYkVCTU9EaTBPS1E4VERSUVRIQndVSHg0T0Z3MVFIaEFZQnhJVUN3b1ZFZ2NUREF3dEJRVVNHaTBoSGdRSEJBTUtDQjRnRnhjTkRCTUZCUzBGRGdVU0dDRWdGeGNMQmowSEN4Y1hJQkFlQ3hJRkRnVXRCQUVDQVJNWkJRb0hGeUFmRWdVSUJSOGZHQVlEQlFRREFSa1NBd0lDQWkwQ0JnUUhCUk1YSVFzVEVRZ1hFZ0FBQXdEQS8rQURRQUpnQUFNQUJnQUpBQXEzQ0FjR0JRTUNBeVlyRXg4QkNRSURFd0Vud09sekFTVCtpQUU0NXVMK3RxWUJMV2ZtQW9EK2J3Rk0vZzhCOWY3R1NRQUVBR0QvZ0FPZ0FzQUFCd0FSQUJrQUtnQlJRRTRBQndBS0FRY0tXUUFCQUFBQ0FRQlpBQUlBQXdRQ0ExY0xCZ0lFQUFVSkJBVlhEQUVKQ0FnSlRRd0JDUWtJVVFBSUNRaEZHeG9JQ0NNaUdpb2JLaGNXRXhJSUVRZ1JFUkVSRWhNU0RSUXJBQlFXTWpZMEppSVRFU01WTXhVakZUTTFFaUFHRUJZZ05oQUJJaTRCTlRRK0FqSWVBaFFPQWdIUEZ5SVhGeUk2WUNBZ2dHeitxUFQwQVZqMC9tQm5zR1k4Wm82YWptWThQR2FPQWRraUZ4Y2lGLzZBQVFBUThCQVFBbEQwL3FqMDlBRlkvZGRtc0dkTmptWThQR2FPbW81bVBBQUVBR0QvZ0FPZ0FzQUFCd0FZQURNQVFBQmVRRnNBQlFZSEJnVUhaZ0FIQ0FZSENHUUFBQUFEQkFBRFdRc0JCQUFHQlFRR1dRd0JDQUFKQWdnSldRb0JBZ0VCQWswS0FRSUNBVkVBQVFJQlJUVTBHaGtKQ0RrNE5FQTFRQ3NxSVI4ZUhSa3pHak1SRUFnWUNSZ1RFQTBRS3dBZ0JoQVdJRFlRQVNJdUFUVTBQZ0l5SGdJVURnSURJZzRCRlRNbU16SVdGUlFHQnc0Q0J6TStBVGMrQVRVMEpnTWlCaFFXTWpZMU5DNERBcXorcVBUMEFWajAvbUJuc0dZOFpvNmFqbVk4UEdhT1JpczhJQ1lDWVNReUZSSVhHUXNCSmdFTklCb2FSakVQRXhRY0ZBUUdDQXNDd1BUK3FQVDBBVmo5MTJhd1owMk9aanc4Wm82YWptWThBbGtiT0NsZExTTVdKUkVWSmlrZEtpRWZHQzRmTWp2K2l4TWNGQlFPQlFzSUJnTUFBQUFBQlFEQS80QURRQUxBQUFzQUV3QVhBQ2tBTVFCWVFGVW5JQUlKQ2dGQUFBQUFCQUVBQkZrRkRBTURBUUFIQ0FFSFZ3QUlBQXNLQ0F0WkFBb0FDUVlLQ1ZrQUJnSUNCa3NBQmdZQ1R3QUNCZ0pEQUFBdkxpc3FKQ01iR2hjV0ZSUVRFZzhPQUFzQUN4RVRFdzBSS3dFMU5DWWlCaDBCSXhFaEVTVTBOaklXSFFFaEFTRVJJUWMwSmlJR0ZSUVdGeFVVRmpJMlBRRStBUVlpSmpRMk1oWVVBdEI2ckhwd0FvRCtFR2VTWi82Z0FkRDl3QUpBNENVMkpSc1ZDUTRKRlJzekdoTVRHaE1CWUpCV2VucFdrUDRnQWVDUVNXZG5TWkQrUUFHZ29Cc2xKUnNXSXdWU0J3a0pCMUlGSXdvVEdoTVRHZ0FBQUFZQXdRRGdBMEFCWUFBSEFBOEFIZ0FuQUM4QU53QkZRRUlLRFFZREFnZ01CQU1BQVFJQVdRa0ZBZ0VEQXdGTkNRVUNBUUVEVVFzSEFnTUJBMFVnSHhFUU5UUXhNQzBzS1Nna0l4OG5JQ2NZRmhBZUVSNFRFeE1RRGhJckFESVdGQVlpSmpRMklnWVVGakkyTkNVeUhnRVZGQVlqSWk0Q05UUTJOeUlHRkJZeU5qUW1CRElXRkFZaUpqUTJJZ1lVRmpJMk5BSHhIaFVWSGhVL05pVWxOaVgrd1FvUUNoVVBCdzRKQmhVUEd5VWxOU1ltQWRZZUZSVWVGVDgySlNVMkpRRkVGUjRWRlI0eEpUWWxKVFlKQ2hBS0R4VUdDUTRIRHhVY0pUWWxKVFlsSEJVZUZSVWVNU1UySlNVMkFBQUFBQUlCQVAvZ0F3QUNZQUF3QUVzQklVdXdDMUJZUUI0dkZ3SUpBMHMrQWdvQlBRRUZDREVCQndVdEtnSUdCd1ZBR3dFSEFUOGJTN0FNVUZoQUhpOFhBZ2tEU3o0Q0NnSTlBUVVJTVFFSEJTMHFBZ1lIQlVBYkFRY0JQeHRBSGk4WEFna0RTejRDQ2dFOUFRVUlNUUVIQlMwcUFnWUhCVUFiQVFjQlAxbFpTN0FMVUZoQUx3QUFDUUVKQUFGbUFBTUFDUUFEQ1ZrQ0FRRUFDZ2dCQ2xrQUNBQUZCd2dGV1FBSEFBWUVCd1paQUFRRUN3UkNHMHV3REZCWVFDOEJBUUFKQWdrQUFtWUFBd0FKQUFNSldRQUNBQW9JQWdwWkFBZ0FCUWNJQlZrQUJ3QUdCQWNHV1FBRUJBc0VRaHRBTHdBQUNRRUpBQUZtQUFNQUNRQURDVmtDQVFFQUNnZ0JDbGtBQ0FBRkJ3Z0ZXUUFIQUFZRUJ3WlpBQVFFQ3dSQ1dWbEFEMHBJUWtBa0xEUWpGaWt4RWhBTEZ5c0JJZzRFSXlJdUFTOEJKaWN1QWlNaURnRVBBUmtCTXhFK0FUTXlIZ0VYRmpNeVBnTTNQZ0UzRVRVR0F3WWpJaWN1QWlNaURnRUhFVDRCTXpJWEhnUXpNamNDNEFJU0NCRU1Ed2NPR2g0Skd4SUhIQ0V6RmlwQUVnVUhJQTB6S0JNcU5RNWFNUWdSRWdzVUF3b1BCd3dVTnhZdVZ3MDNMUlVZS2hzTERUTW9MVk1HSnhJZ0hBNFhPQUpBQXdFQkFRRUNCUUlHQkFFR0J3WUxDQU1GL3JmKzVBRWZCUWdJRHdNVEFRSUJBZ0VCQWdFQk9pRUMvc01IRWdNUENRUUZBd0VUQlFnU0FRa0RCZ0lIQUFBQ0FJRC9vQU9BQXFBQUNBQVNBRFZBTWhJUkR3NE5DZ2dCQUFrQkF3RkFFQWtDQXo0QUFRTUFBd0VBWmdBREFRQURTd0FEQXdCUEFnRUFBd0JERkJFUkVnUVNLd2tCRVRNUk14RXpFUUVITlNNVkJ4VUpBVFVDQVA3QTRNRGcvc0RBZ0VBQmdBR0FBa0QvQVA1Z0FRRC9BQUdnQVdDYVdzQXpLUUV6L3MwcEFBSUFnUCtnQTRBQ29BQ0JBSTRBcExhSWh3SUhBQUZBUzdBbVVGaEFNUUFEQUE4QUF3OVpCaEFDQUEwQkJ3NEFCMWtFQVFJTEFRa0lBZ2xaQUE0QUNnNEtWUVVCQVFFSVVRd0JDQWdMQ0VJYlFEY0FBd0FQQUFNUFdRWVFBZ0FOQVFjT0FBZFpBQTRKQ2c1TkJBRUNDd0VKQ0FJSldRVUJBUXdCQ0FvQkNGa0FEZzRLVVFBS0RncEZXVUFtQWdDTWk0V0VlM2hyYW1kbFgxeFhWVkZQUlVJOE9Td3FKU01iR0JNUkRRd0FnUUtCRVE0ckFTTWlKalUwUHdFMk5DOEJKaUlQQVE0Qkl5SW1QUUUwSmlzQklnNEJIUUVVRGdJaklpNEJMd0VtSXlJUEFRWVVId0VlQXhVVUJpc0JJZzRCSFFFVUZqc0JNaFlWRkE4QkJoUWZBUll6TWo4QlBnRXpNaFlkQVJRV093RXlOajBCTkQ0Qk16SWZBUll5UHdFK0FUUW1Md0VtTlRRK0FUc0JNalk5QWpZbUJ4UUdJaVkxTVRRK0FUSWVBUU5SSGhNYkR4UU9EaTBPS2c0VEJ4RUtFeHdkRkQwTkZnMElEUkVKQnd3S0JSTU9GUlVPTFE0T0V3UUZCQUliRWg4TkZ3NGVGQjhTR3c4VERnNHREUllVRHhNR0Vna1RIQjBVUFJRZERSVU5FdzhURGlrUExBY0lDQWNURHd3VkRCOFVHZ0VidzE2RlhTcEtWMG9yQVc4Y0V4TU9FdzRwRHl3T0RoTUhDQnNTSHhRZURoY05Id2tRRFFjREJ3VVREZzRzRGlrUEVnUUlDQWtGRXh3TkZnNDhGUndjRXhRT0VnOHBEaXdPRGhNSENCc1RIaFFlSFJVZURCVU5FQklPRGl3SEV4SVRCeE1ORkEwVkRSd1VIeDRWSEU5Q1hsNUNLMG9ySzBvQUFBTUFZUCtBQTZBQ3dBQUhBQkVBR3dBM1FEUUFBQUFDQXdBQ1dRQURBQWNHQXdkWEFBWUlBUVVFQmdWWEFBUUJBUVJMQUFRRUFWRUFBUVFCUlJFUkVSRVVGQk1URUFrWEt3QWdCaEFXSURZUUpESVdGUlFHSWlZMU5CTWpOVE0xSXpVekVUTUNyUDZvOVBRQldQVCtSaUlYRnlJWGNZQWdJR0FnQXNEMC9xajA5QUZZSkJjUkVCZ1lFQkgraHhEd0VQOEFBQUFEQUdEL2dBT2dBc0FBQndBVUFDNEFTRUJGQUFVSEJnY0ZCbVlBQmdRSEJnUmtBQUFBQndVQUIxa0FCQUFEQWdRRFdnZ0JBZ0VCQWswSUFRSUNBVklBQVFJQlJna0lLaWduSmlVakdSZ05EQWdVQ1JRVEVBa1FLd0FnQmhBV0lEWVFBU0ltTkRZeUZoVVVEZ00zRGdFSEl6UStBamMrQVRVMEppTWlGeU0yTXpJV0ZSUUdBcXorcVBUMEFWajAvbWtQRXhNZEZBUUdDQXMrSUEwQkpnY09GaEVTRlRJa1lRSW1BWVl6UmhvQ3dQVCtxUFQwQVZqK2VCUWNFeE1PQmdvSUJ3UG5JQ0VxRmlFZkd4QVJKaFVqTFYxOE96SWVMd0FEQU1FQTRBTkFBV0FBQndBUUFCZ0FLMEFvQkFZQ0F3QUJBUUJOQkFZQ0F3QUFBVkVGQXdJQkFBRkZDUWdXRlJJUkRRd0lFQWtRRXhBSEVDc0FJZ1lVRmpJMk5DVWlCaFFXTWpZMEppQWlCaFFXTWpZMEFoczJKU1UySmY3Qkd5VWxOU1ltQWdBMkpTVTJKUUZnSlRZbEpUWWxKVFlsSlRZbEpUWWxKVFlBQUF3QVFQL1FBOEFDY0FBSEFBOEFGd0FmQUNjQUx3QTFBRHNBUXdCTEFGTUFXd0VFUzdBaFVGaEFZZ0FDQUFKb0FBTUJDZ0VEQ21ZQUNnZ0JDZ2hrQUFzSkJna0xCbVlBQmdRSkJnUmtBQWNGQjJrWUZ3SVVGZ0VWQVJRVlZ3QUFBQUVEQUFGWkR3RU1EZ0VOQ1F3TldBQUlBQWtMQ0FsWkV3RVFFZ0VSQlJBUldBQUVCQVZSQUFVRkN3VkNHMEJuQUFJQUFtZ0FBd0VLQVFNS1pnQUtDQUVLQ0dRQUN3a0dDUXNHWmdBR0JBa0dCR1FBQndVSGFSZ1hBaFFXQVJVQkZCVlhBQUFBQVFNQUFWa1BBUXdPQVEwSkRBMVlBQWdBQ1FzSUNWa0FCQkFGQkUwVEFSQVNBUkVGRUJGWUFBUUVCVkVBQlFRRlJWbEFMVlJVVkZ0VVcxcFpUMDVOVEVwSlNFYy9QajA4T3pvNU9ETXlNVEF0TENrb0pTUVRFeE1URXhNVEV4QVpGeXNBTWhZVUJpSW1ORFlpQmhRV01qWTBBaklXRkFZaUpqUTJJZ1lVRmpJMk5BQXlGaFFHSWlZME5pSUdGQll5TmpRWElSVWhOalFpRkJjak5UTUJNeFVqTmpVMEpnY1VGaFVoTlNFR0V6TVZJelkxTkNZbkJoVVVGaFVoTlFLekdoTVRHaE02TkNZbU5DWk5HaE1UR2hNNk5DWW1OQ2IrTXhvVEV4b1RPalFtSmpRbUh3SWgvZDhCd0FHaG9RSStvYUVCQWI4Qi9kOENJUUcvb2FFQkFiNEJBZjNmQWxBVEdoTVRHak1tTkNZbU5QM21FeG9URXhvekpqUW1KalFCRmhNYUV4TWFNeVkwSmlZMENpQUlFQkFJSVA3d0lBZ0lCQWdNQkFnRUlBZ0NLQ0FJQ0FRSUJBZ0lCQWdFSUFBSkFFUUFJQU84QXNzQUZRQW5BRE1BUkFCUUFGMEFjUUIrQUl3QkVrdXdDbEJZUUY0WEFRd0xBd29NWGdBTkFnb0xEVjRBQndBSUFRY0lXUUFCRWdFQUNRRUFXUUFKRlFFR0N3a0dXUUFERXdFQ0RRTUNXUUFMRmdFS0R3c0tXUUFQR1FFUUJROFFXUUFGRkFFRUVRVUVXUUFSRGc0UlRRQVJFUTVSR0FFT0VRNUZHMEJnRndFTUN3TUxEQU5tQUEwQ0NnSU5DbVlBQndBSUFRY0lXUUFCRWdFQUNRRUFXUUFKRlFFR0N3a0dXUUFERXdFQ0RRTUNXUUFMRmdFS0R3c0tXUUFQR1FFUUJROFFXUUFGRkFFRUVRVUVXUUFSRGc0UlRRQVJFUTVSR0FFT0VRNUZXVUJHZ0g5emNsOWVVbEUxTkNvb0dCWUNBSVNEZjR5QWpIbDRjbjV6Zm1sblhuRmZjVmhYVVYxU1hVeExSa1U5T3pSRU5VUXdMU2d6S2pNaEhoWW5HQ2NPQ3dBVkFoVWFEaXNCSVNJdUJUVTBOak1oTWg0REZSUUdCeUVpTGdJMU5EWXpJVEllQWhVVUJnY2hJaVkwTmpNaE1oWVVCZ0VpSmpVMFBnSXpNaDRCRlJRT0FpWWlEZ0VVSGdFeVBnRTBKZ01pSmpVMFBnRXlIZ0VVRGdFbklnNEJGUlFlQXpNeVBnRTFOQzREQXlJbU5UUStBVEllQVJRT0FTY2lCaFFXTWpZMU5DNEVBNXI5M1FRSEJ3WUZBd0lVRGdJakJRc0lCZ1FVRHYzZEJnMEpCaFFPQWlNSERBa0dGQTc5M1E0VUZBNENJdzRVRlAwREt6d1JHeVlWR3pBYkVCd21DeE1QQ1FrUEV4QUpDUmtyUEJ3dk56QWJHekFiQ2c4SkF3WUpDZ1lKRUFrRUJnZ0xCU3M4SEM4M01Cc2JNQnNPRkJRY0ZBTUVCZ2dKQWtJQ0F3VUdCd2NFRGhRREJna0tCZzRVN3dZSkRBY09GQVVKRFFjT0ZPOFVIUlFVSFJRQm1qd3FGU1liRVJ3dkhCVWxIQkNJQ1E4VEVBa0pFQk1QL3BJOEtod3ZIQnd2TnpBYmlBa1BDZ1VMQ0FZRUNSQUpCZ29KQmdQK2lUd3FIQzhjSEM4M01CdUpGQjBVRkE0RkNRY0hCQU1BQXdCQS8rRUR2d0puQUFNQUJ3QUxBQ1pBSXdBQ0FBTUFBZ05YQUFBQUFRUUFBVmNBQkFRRlR3QUZCUXNGUWhFUkVSRVJFQVlVS3hNaEZTRVJJUlVoRVNFVklVQURmL3lCQTMvOGdRTi8vSUVCUERBQld6RDkyUzhBQUFBRUFCZi9pQVBwQXJnQUJRQWlBRGtBUHdBOVFEby9QajA4T3pvNUxTd2pJaUVmSGhRVEJnVUVBd0lCQUJjQ0FRRkFBQUFBQVFJQUFWa0FBZ01EQWswQUFnSURVUUFEQWdORkx4NFhMUVFTS3dFSEp3Y1hOeWN3UFFFdUF5TWlEZ0lIRno0Qk1oNEJGeFVVQmdjWE5qVXhCdzRCSWk0Qk5UUTJOeWNHSFFNZUFqTXlOamNCQnhjM0Z6Y0QwMU5WRldwcFVRRkJiWmRTTjJsY1RSc2NNckRNckdVQkFRRWdBbEF5c015dFpRRUJJQUlDYjdwdGJzQTIvUnhwRmxOVEZnRWdVMU1XYW1rWUFRSlRsV3hBSFRaTk1CQlpaMlNzWmc0R0RnY0VGUmE0V1dka3JXWUtGQW9FRlJZQ0JBTnN1R3R3WUFGSWFSZFRVeGNBQUFBQkFWLy9ud0tnQXFBQVNRQkxRRWc2QVFBRlJ4OEtBd0lEQWtBQUJRQUZhQWNCQUFNQWFBQURBZ05vQUFJQUJBRUNCRmtBQVFZR0FVMEFBUUVHVWdBR0FRWkdBUUJEUVRjMkxTc2xJeDBiQ0FjQVNRRkpDQTRyQVNJT0FSVVJGQVlpSmpjd0VUUTJOellYSGdFVkVSUU9BZ2NHSXlJbU5UQVJOQ1lqSWc0QkZRTVVGak1XTno0Q05STTBKeVlpQndZSE1CMERCaFl6RmpjMk5SRTJKZ0tKQmdzR1JWdEZBUklRSXlNUUVRSUNCQUlHQ0FrTkRRa0hDZ1lCS1J3ZEZBWUpCQUU0R3o4YU9BRUJZRUJETGk4QkRRSHFCZ3NHL25vOVFVTTlBZFlYSXdrVkZRb2pGLzQvQmdvSUNBTUhGaE1CV2dvTkJnc0cvcWNxTHdFWkNCUVhEUUhCU3lJUUR5RkxlSTE5VkZGZUFTOHdUd0dGQ2c0QUF3QVQvL1lEN1FKSkFCY0FJd0F4QUpwTHNBOVFXRUFpQndFRUFnVUNCRjRBQlFNREJWd0FBUVlCQWdRQkFsa0FBd01BVWdBQUFBc0FRaHRMc0JoUVdFQWtCd0VFQWdVQ0JBVm1BQVVEQWdVRFpBQUJCZ0VDQkFFQ1dRQURBd0JTQUFBQUN3QkNHMEFwQndFRUFnVUNCQVZtQUFVREFnVURaQUFCQmdFQ0JBRUNXUUFEQUFBRFRRQURBd0JTQUFBREFFWlpXVUFVSlNRWkdDc3FKREVsTVNBZkdDTVpJeWttQ0JBckFSUU9CQ01pTGdNMFBnTXpNaGNXRnhZbElnNENGUlFXTWpZMEpnY2lEZ0VWRkJZeU5qVTBMZ0lEN1NFOFdtcUdSbEdkZFZzdkwxdDJuRkhJbldNZENQNFRNRmhBSll2Rmk0dGpLVVlvV0g1WUdDZzRBU0FZUGtNL014OHJSRkJOUEUxUVJDcHdSMHNXNGlaQ1dqRmxqbzdLamxncFNDcEFXMXRBSURrcUdBQUFBUURBQUdBRFFBSGdBQVVBQnJNQ0FBRW1LeVUzQ1FFWEFRTVpKLzdBL3NBbkFSbGdLUUZYL3FrcEFTMEFBQUFBQVFEQUFHQURRQUhnQUFVQUJyTUNBQUVtS3dFWENRRTNBUU1aSi83QS9zQW5BUmtCNENuK3FRRlhLZjdUQUFBQUFRRkEvK0FDd0FKZ0FBVUFCck1EQVFFbUt3RW5DUUUzQVFMQUtmNnBBVmNwL3RNQ09TZit3UDdBSndFWkFBQUFBUUZBLytBQ3dBSmdBQVVBQnJNREFRRW1Ld0UzQ1FFbkFRRkFLUUZYL3FrcEFTMENPU2Yrd1A3QUp3RVpBQUFBQVFGQS8rQUN3QUpnQUNFQUpVQWlHUmdUQ3dRRkFBSUJRQUFBQWdFQ0FBRm1BQUlDQVZFQUFRRUxBVUlzRlJFREVTc0JCaUl2QVJFVUJpSW1OUkVIQmljbU5EYzJOell6TWhZZkFSNEJId0VlQVJVVUFyc0VEUVdWQ1E0SmxRd0tCUVd1QWdZRkF3VUJBZ0ZZTENzREFnR2tCQVNGL2NjSENRa0hBam1FQ3dvRkRnU2ZBUVVDQVFJQlVDZ25BZ1lEQndBQUFBRUJRUC9nQXNBQ1lBQWdBQ1JBSVJnVEN3UUVBZ0FCUUFBQUFRSUJBQUptQUFFQkFsRUFBZ0lMQWtJc0ZSRURFU3NsSmlJUEFSRTBKaUlHRlJFbkpnY0dGQmNXRnhZek1qWTNQZ0UvQVQ0Qk5UUUN1d1FOQlpVSkRnbVZEQW9GQmE0Q0JnVUVCZ0VCV0N3ckF3S2NCQVNGQWprSENRa0gvY2VFQ3dvRkRnU2ZBUVVEQWdGUUtDY0NCZ01IQUFBQUFBRUF3QUJnQTBBQjRBQWRBQ3BBSnhZU0FnQUJBVUFBQWdFQ2FBQURBQU5wQUFFQUFBRk5BQUVCQUZJQUFBRUFSaHdVSXlNRUVpc2xOaThCSVRJMk5DWWpJVGMySnlZaUJ3WUhCaFVVRng0Qkh3RVdNellCZkFvS2hRSTVCd2tKQi8zSGhBc0tCUTRFbndFRkJRRlFLQ2NFQndkbENneVZDUTRKbFF3S0JRV3VBZ1lGQndRQldDd3JCUUVBQVFEQUFHQURRQUhoQUI0QUpVQWlGeE1DQUFFQlFBQUNBQUpwQUFFQUFBRk5BQUVCQUZFQUFBRUFSUjBjSXlNREVDc2xKajhCSVNJbU5EWXpJU2NtTno0QkZoY1dGeFlWRkFjT0FROEJCaU1tQW9RS0NvWDl4d2NKQ1FjQ09ZUUxDZ01KQ0FPZkFRVUZBVkFvSndRSEIyVUtESlVKRGdtVkRBb0RBd0lFcmdJR0JRY0VBVmdzS3dVQkFBQUJBUjcvcHdMYUFuOEFCZ0FXUUJNQUFRQTlBQUVBQVdnQ0FRQUFYeEVSRVFNUkt3VVRJeEVqRVNNQi9ONlJtNUJaQVNnQnNQNVFBQUVBWC85N0E2RUN2UUFMQUFBSkFnY0pBUmNKQVRjSkFRTnQvcEwrbERRQmJmNlROQUZzQVc0MC9wRUJid0s5L3BJQmJEUCtsUDZVTXdGcy9wSXpBVzRCYlFBQUJBQlYvM0VEcWdMSUFCTUFKd0ErQUVRQUFBVUdMZ0UwTno0Qk5DWW5KalErQVJjZUFSUUdKdzRCSmpRM1BnRTBKaWNtTkRZV0Z4NEJGQVlESnlNaUppY1JQZ0UzTXpjK0FSNEJGUkVVRGdFbUp6Y1JCeU1STXdNd0NCZ1FDVEkyTlRJSkVCZ0pPajQvckFnWUVRZ1lHUmdYQ0JFWUNCOGdJdUhJcHhjaEFRRWhGNmZGRGg4ZUVCQWJIdzRmMUxxNEZBa0JFaGdKTklhWGhUUUpHQklCQ1R5Y3NKeFNDQUVTRndrWlBrVStHUWtYRVFFSUlWTmNVLzdnZ2lFWUFia1hJUUdUQ2dNUEd4RDlIQkFhRHdFSU1BTGtuLzVIQUFBQUJRQkEvM3dEd0FLOEFBc0FId0F6QUVnQVhRQUFKU0VpSmpRMk15RXlGaFFHQXlNaUpqUTJPd0V5TmowQk5EWXlGaDBCRGdFRkl5NEJKelUwTmpJV0hRRVVGanNCTWhZVUJnTWlKajBCUGdFM016SVdGQVlyQVNJR0hRRVVCaUVpSmowQk5DWXJBU0ltTkRZN0FSNEJGeFVVQmdPZy9NQU9FaElPQTBBT0VoSnV3QTRTRWc3QURoSVNIQklCTnYzM29DazJBUkljRWhJT29BNFNFdTRPRWdFMkthQU9FaElPb0E0U0VnTHlEaElTRHNBT0VoSU93Q2syQVJMOEVod1NFaHdTL29BU0hCSVNEcUFPRWhJT29DazJBUUUyS2FBT0VoSU9vQTRTRWh3U0FpQVNEcUFwTmdFU0hCSVNEcUFPRWhJT29BNFNFaHdTQVRZcG9BNFNBQUFBREFDV0FBRUFBQUFBQUFFQUNBQVNBQUVBQUFBQUFBSUFBQUFoQUFFQUFBQUFBQU1BRmdCVUFBRUFBQUFBQUFRQUNRQ0RBQUVBQUFBQUFBVUFNQUR2QUFFQUFBQUFBQVlBQ1FFMEFBTUFBUVFKQUFFQUVBQUFBQU1BQVFRSkFBSUFCQUFiQUFNQUFRUUpBQU1BTUFBaUFBTUFBUVFKQUFRQUZnQnJBQU1BQVFRSkFBVUFZQUNOQUFNQUFRUUpBQVlBRWdFZ0FIVUFiZ0JwQUdrQVl3QnZBRzRBY3dBQWRXNXBhV052Ym5NQVhqaUp4QUFBQUFCMUFHNEFhUUJwQUdNQWJ3QnVBSE1BSUY0NGljUUFPZ0JXQUdVQWNnQnpBR2tBYndCdUFDQUFNUUF1QURBQU1BQUFkVzVwYVdOdmJuTWdPbFpsY25OcGIyNGdNUzR3TUFBQWRRQnVBR2tBYVFCakFHOEFiZ0J6QUNCZU9JbkVBQUIxYm1scFkyOXVjeUFBQUZZQVpRQnlBSE1BYVFCdkFHNEFJQUF4QUM0QU1BQXdBQ0FBVXdCbEFIQUFkQUJsQUcwQVlnQmxBSElBSUFBeUFEQUFMQUFnQURJQU1BQXhBRGtBTEFBZ0FHa0FiZ0JwQUhRQWFRQmhBR3dBSUFCeUFHVUFiQUJsQUdFQWN3QmxBQUJXWlhKemFXOXVJREV1TURBZ1UyVndkR1Z0WW1WeUlESXdMQ0F5TURFNUxDQnBibWwwYVdGc0lISmxiR1ZoYzJVQUFIVUFiZ0JwQUdrQVl3QnZBRzRBY3dBdEFBQjFibWxwWTI5dWN5MEFBQUlBQUFBQUFBRC9Id0F5QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQVlBQUFBQUVBQWdCYkFRSUJBd0VFQVFVQkJnRUhBUWdCQ1FFS0FRc0JEQUVOQVE0QkR3RVFBUkVCRWdFVEFSUUJGUUVXQVJjQkdBRVpBUm9CR3dFY0FSMEJIZ0VmQVNBQklRRWlBU01CSkFFbEFTWUJKd0VvQVNrQktnRXJBU3dCTFFFdUFTOEJNQUV4QVRJQk13RTBBVFVCTmdFM0FUZ0JPUUU2QVRzQlBBRTlBVDRCUHdGQUFVRUJRZ0ZEQVVRQlJRRkdBVWNCU0FGSkFVb0JTd0ZNQVUwQlRnRlBBVkFCVVFGU0FWTUJWQUZWQVZZQlZ3RllBVmtCV2dGYkFWd0JYUWQxYm1sRk1UQXdCM1Z1YVVVeE1ERUhkVzVwUlRFd01nZDFibWxGTVRNd0IzVnVhVVV4TXpFSGRXNXBSVEV6TWdkMWJtbEZNakF3QjNWdWFVVXlNREVIZFc1cFJUSXdNZ2QxYm1sRk1qQXpCM1Z1YVVVeU16QUhkVzVwUlRJek1RZDFibWxGTWpNeUIzVnVhVVV5TXpNSGRXNXBSVEkyTUFkMWJtbEZNall4QjNWdWFVVXlOaklIZFc1cFJUSTJNd2QxYm1sRk1qWTBCM1Z1YVVVek1EQUhkVzVwUlRNd01RZDFibWxGTXpBeUIzVnVhVVV6TURNSGRXNXBSVE16TWdkMWJtbEZNek16QjNWdWFVVXpOakFIZFc1cFJUTTJNd2QxYm1sRk16WTBCM1Z1YVVVME1EQUhkVzVwUlRRd01RZDFibWxGTkRBeUIzVnVhVVUwTURNSGRXNXBSVFF3TkFkMWJtbEZOREExQjNWdWFVVTBNRFlIZFc1cFJUUXdOd2QxYm1sRk5EQTRCM1Z1YVVVME1Ea0hkVzVwUlRReE1BZDFibWxGTkRFeEIzVnVhVVUwTVRNSGRXNXBSVFF6TkFkMWJtbEZORE0zQjNWdWFVVTBNemdIZFc1cFJUUXpPUWQxYm1sRk5EUXdCM1Z1YVVVME5ERUhkVzVwUlRRME1nZDFibWxGTkRRekIzVnVhVVUwTmpBSGRXNXBSVFEyTVFkMWJtbEZORFl5QjNWdWFVVTBOak1IZFc1cFJUUTJOQWQxYm1sRk5EWTFCM1Z1YVVVME5qWUhkVzVwUlRRMk9BZDFibWxGTkRjd0IzVnVhVVUwTnpFSGRXNXBSVFEzTWdkMWJtbEZOVEF3QjNWdWFVVTFNREVIZFc1cFJUVXdNZ2QxYm1sRk5UQXpCM1Z1YVVVMU1EUUhkVzVwUlRVd05RZDFibWxGTlRBMkIzVnVhVVUxTURjSGRXNXBSVFV3T0FkMWJtbEZOVE13QjNWdWFVVTFNeklIZFc1cFJUVXpOQWQxYm1sRk5UTTFCM1Z1YVVVMU16Y0hkVzVwUlRVMk1BZDFibWxGTlRZeUIzVnVhVVUxTmpNSGRXNXBSVFUyTlFkMWJtbEZOVFkzQjNWdWFVVTFOamdIZFc1cFJUVTRNQWQxYm1sRk5UZ3hCM1Z1YVVVMU9ESUhkVzVwUlRVNE13ZDFibWxGTlRnMEIzVnVhVVUxT0RVSGRXNXBSVFU0TmdkMWJtbEZOVGczQjNWdWFVVTFPRGdIZFc1cFJUVTRPUVJGZFhKdkIzVnVhVVUyTVRJQUFBRUFBZi8vQUE4QUFRQUFBQXdBQUFBV0FBQUFBZ0FCQUFFQVh3QUJBQVFBQUFBQ0FBQUFBQUFBQUFFQUFBQUExYVFuQ0FBQUFBRFpxbHU1QUFBQUFObXFYQWs9JykgZm9ybWF0KCd0cnVldHlwZScpO1xyXG5cdH1cclxuXHJcblx0LyogI2VuZGlmICovXHJcblxyXG5cdC51bmktaWNvbnMge1xyXG5cdFx0Zm9udC1mYW1pbHk6IHVuaWljb25zO1xyXG5cdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdH1cclxuPC9zdHlsZT4iLCJleHBvcnQgZGVmYXVsdCB7XHJcblx0J2NvbnRhY3QnOiAnXFx1ZTEwMCcsXHJcblx0J3BlcnNvbic6ICdcXHVlMTAxJyxcclxuXHQncGVyc29uYWRkJzogJ1xcdWUxMDInLFxyXG5cdCdjb250YWN0LWZpbGxlZCc6ICdcXHVlMTMwJyxcclxuXHQncGVyc29uLWZpbGxlZCc6ICdcXHVlMTMxJyxcclxuXHQncGVyc29uYWRkLWZpbGxlZCc6ICdcXHVlMTMyJyxcclxuXHQncGhvbmUnOiAnXFx1ZTIwMCcsXHJcblx0J2VtYWlsJzogJ1xcdWUyMDEnLFxyXG5cdCdjaGF0YnViYmxlJzogJ1xcdWUyMDInLFxyXG5cdCdjaGF0Ym94ZXMnOiAnXFx1ZTIwMycsXHJcblx0J3Bob25lLWZpbGxlZCc6ICdcXHVlMjMwJyxcclxuXHQnZW1haWwtZmlsbGVkJzogJ1xcdWUyMzEnLFxyXG5cdCdjaGF0YnViYmxlLWZpbGxlZCc6ICdcXHVlMjMyJyxcclxuXHQnY2hhdGJveGVzLWZpbGxlZCc6ICdcXHVlMjMzJyxcclxuXHQnd2VpYm8nOiAnXFx1ZTI2MCcsXHJcblx0J3dlaXhpbic6ICdcXHVlMjYxJyxcclxuXHQncGVuZ3lvdXF1YW4nOiAnXFx1ZTI2MicsXHJcblx0J2NoYXQnOiAnXFx1ZTI2MycsXHJcblx0J3FxJzogJ1xcdWUyNjQnLFxyXG5cdCd2aWRlb2NhbSc6ICdcXHVlMzAwJyxcclxuXHQnY2FtZXJhJzogJ1xcdWUzMDEnLFxyXG5cdCdtaWMnOiAnXFx1ZTMwMicsXHJcblx0J2xvY2F0aW9uJzogJ1xcdWUzMDMnLFxyXG5cdCdtaWMtZmlsbGVkJzogJ1xcdWUzMzInLFxyXG5cdCdzcGVlY2gnOiAnXFx1ZTMzMicsXHJcblx0J2xvY2F0aW9uLWZpbGxlZCc6ICdcXHVlMzMzJyxcclxuXHQnbWljb2ZmJzogJ1xcdWUzNjAnLFxyXG5cdCdpbWFnZSc6ICdcXHVlMzYzJyxcclxuXHQnbWFwJzogJ1xcdWUzNjQnLFxyXG5cdCdjb21wb3NlJzogJ1xcdWU0MDAnLFxyXG5cdCd0cmFzaCc6ICdcXHVlNDAxJyxcclxuXHQndXBsb2FkJzogJ1xcdWU0MDInLFxyXG5cdCdkb3dubG9hZCc6ICdcXHVlNDAzJyxcclxuXHQnY2xvc2UnOiAnXFx1ZTQwNCcsXHJcblx0J3JlZG8nOiAnXFx1ZTQwNScsXHJcblx0J3VuZG8nOiAnXFx1ZTQwNicsXHJcblx0J3JlZnJlc2gnOiAnXFx1ZTQwNycsXHJcblx0J3N0YXInOiAnXFx1ZTQwOCcsXHJcblx0J3BsdXMnOiAnXFx1ZTQwOScsXHJcblx0J21pbnVzJzogJ1xcdWU0MTAnLFxyXG5cdCdjaXJjbGUnOiAnXFx1ZTQxMScsXHJcblx0J2NoZWNrYm94JzogJ1xcdWU0MTEnLFxyXG5cdCdjbG9zZS1maWxsZWQnOiAnXFx1ZTQzNCcsXHJcblx0J2NsZWFyJzogJ1xcdWU0MzQnLFxyXG5cdCdyZWZyZXNoLWZpbGxlZCc6ICdcXHVlNDM3JyxcclxuXHQnc3Rhci1maWxsZWQnOiAnXFx1ZTQzOCcsXHJcblx0J3BsdXMtZmlsbGVkJzogJ1xcdWU0MzknLFxyXG5cdCdtaW51cy1maWxsZWQnOiAnXFx1ZTQ0MCcsXHJcblx0J2NpcmNsZS1maWxsZWQnOiAnXFx1ZTQ0MScsXHJcblx0J2NoZWNrYm94LWZpbGxlZCc6ICdcXHVlNDQyJyxcclxuXHQnY2xvc2VlbXB0eSc6ICdcXHVlNDYwJyxcclxuXHQncmVmcmVzaGVtcHR5JzogJ1xcdWU0NjEnLFxyXG5cdCdyZWxvYWQnOiAnXFx1ZTQ2MicsXHJcblx0J3N0YXJoYWxmJzogJ1xcdWU0NjMnLFxyXG5cdCdzcGlubmVyJzogJ1xcdWU0NjQnLFxyXG5cdCdzcGlubmVyLWN5Y2xlJzogJ1xcdWU0NjUnLFxyXG5cdCdzZWFyY2gnOiAnXFx1ZTQ2NicsXHJcblx0J3BsdXNlbXB0eSc6ICdcXHVlNDY4JyxcclxuXHQnZm9yd2FyZCc6ICdcXHVlNDcwJyxcclxuXHQnYmFjayc6ICdcXHVlNDcxJyxcclxuXHQnbGVmdC1uYXYnOiAnXFx1ZTQ3MScsXHJcblx0J2NoZWNrbWFya2VtcHR5JzogJ1xcdWU0NzInLFxyXG5cdCdob21lJzogJ1xcdWU1MDAnLFxyXG5cdCduYXZpZ2F0ZSc6ICdcXHVlNTAxJyxcclxuXHQnZ2Vhcic6ICdcXHVlNTAyJyxcclxuXHQncGFwZXJwbGFuZSc6ICdcXHVlNTAzJyxcclxuXHQnaW5mbyc6ICdcXHVlNTA0JyxcclxuXHQnaGVscCc6ICdcXHVlNTA1JyxcclxuXHQnbG9ja2VkJzogJ1xcdWU1MDYnLFxyXG5cdCdtb3JlJzogJ1xcdWU1MDcnLFxyXG5cdCdmbGFnJzogJ1xcdWU1MDgnLFxyXG5cdCdob21lLWZpbGxlZCc6ICdcXHVlNTMwJyxcclxuXHQnZ2Vhci1maWxsZWQnOiAnXFx1ZTUzMicsXHJcblx0J2luZm8tZmlsbGVkJzogJ1xcdWU1MzQnLFxyXG5cdCdoZWxwLWZpbGxlZCc6ICdcXHVlNTM1JyxcclxuXHQnbW9yZS1maWxsZWQnOiAnXFx1ZTUzNycsXHJcblx0J3NldHRpbmdzJzogJ1xcdWU1NjAnLFxyXG5cdCdsaXN0JzogJ1xcdWU1NjInLFxyXG5cdCdiYXJzJzogJ1xcdWU1NjMnLFxyXG5cdCdsb29wJzogJ1xcdWU1NjUnLFxyXG5cdCdwYXBlcmNsaXAnOiAnXFx1ZTU2NycsXHJcblx0J2V5ZSc6ICdcXHVlNTY4JyxcclxuXHQnYXJyb3d1cCc6ICdcXHVlNTgwJyxcclxuXHQnYXJyb3dkb3duJzogJ1xcdWU1ODEnLFxyXG5cdCdhcnJvd2xlZnQnOiAnXFx1ZTU4MicsXHJcblx0J2Fycm93cmlnaHQnOiAnXFx1ZTU4MycsXHJcblx0J2Fycm93dGhpbnVwJzogJ1xcdWU1ODQnLFxyXG5cdCdhcnJvd3RoaW5kb3duJzogJ1xcdWU1ODUnLFxyXG5cdCdhcnJvd3RoaW5sZWZ0JzogJ1xcdWU1ODYnLFxyXG5cdCdhcnJvd3RoaW5yaWdodCc6ICdcXHVlNTg3JyxcclxuXHQncHVsbGRvd24nOiAnXFx1ZTU4OCcsXHJcblx0J2Nsb3NlZmlsbCc6ICdcXHVlNTg5JyxcclxuXHQnc291bmQnOiAnXFx1ZTU5MCcsXHJcblx0J3NjYW4nOiAnXFx1ZTYxMidcclxufVxyXG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMC0xIS4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0wLTIhLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTAtMyEuLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy92dWUtbG9hZGVyL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktaWNvbnMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzU1NWRmNDkmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvd2VicGFjay11bmktbnZ1ZS1sb2FkZXIvbGliL3N0eWxlLmpzIS4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0wLTEhLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTAtMiEuLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMC0zIS4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3Z1ZS1sb2FkZXIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VuaS1pY29ucy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03NTU1ZGY0OSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInVuaS1pY29uc1wiOiB7XG4gICAgXCJmb250RmFtaWx5XCI6IFwidW5paWNvbnNcIixcbiAgICBcInRleHREZWNvcmF0aW9uXCI6IFwibm9uZVwiLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCJcbiAgfVxufSIsImZ1bmN0aW9uIGluaXRVbmkoKSB7XHJcblxyXG4gICAgdmFyIGlzRm4gPSBmdW5jdGlvbiBpc0ZuKHYpIHtcclxuICAgICAgICByZXR1cm4gdHlwZW9mIHYgPT09ICdmdW5jdGlvbic7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBoYW5kbGVQcm9taXNlID0gZnVuY3Rpb24gaGFuZGxlUHJvbWlzZShwcm9taXNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHByb21pc2UudGhlbihmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbbnVsbCwgZGF0YV07XHJcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbZXJyXTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIFJFR0VYID0gL15cXCR8Xm9ufF5jcmVhdGV8U3luYyR8TWFuYWdlciR8XnBhdXNlLztcclxuICAgIHZhciBBUElfTk9STUFMX0xJU1QgPSBbJ29zJywgJ2dldEN1cnJlbnRTdWJOVnVlJywgJ2dldFN1Yk5WdWVCeUlkJywgJ3N0b3BSZWNvcmQnLCAnc3RvcFZvaWNlJyxcclxuICAgICAgICAnc3RvcEJhY2tncm91bmRBdWRpbycsICdzdG9wUHVsbERvd25SZWZyZXNoJywgJ2hpZGVLZXlib2FyZCcsICdoaWRlVG9hc3QnLCAnaGlkZUxvYWRpbmcnLFxyXG4gICAgICAgICdzaG93TmF2aWdhdGlvbkJhckxvYWRpbmcnLCAnaGlkZU5hdmlnYXRpb25CYXJMb2FkaW5nJywgJ2NhbklVc2UnLCAnbmF2aWdhdGVCYWNrJywgJ2Nsb3NlU29ja2V0JyxcclxuICAgICAgICAncGFnZVNjcm9sbFRvJywgJ2RyYXdDYW52YXMnXHJcbiAgICBdO1xyXG5cclxuICAgIHZhciBzaG91bGRQcm9taXNlID0gZnVuY3Rpb24gc2hvdWxkUHJvbWlzZShuYW1lKSB7XHJcbiAgICAgICAgaWYgKFJFR0VYLnRlc3QobmFtZSkgJiYgbmFtZSAhPT0gJ2NyZWF0ZUJMRUNvbm5lY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKH5BUElfTk9STUFMX0xJU1QuaW5kZXhPZihuYW1lKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgcHJvbWlzaWZ5ID0gZnVuY3Rpb24gcHJvbWlzaWZ5KGFwaSkge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHBhcmFtcyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcclxuICAgICAgICAgICAgICAgIHBhcmFtc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpc0ZuKG9wdGlvbnMuc3VjY2VzcykgfHwgaXNGbihvcHRpb25zLmZhaWwpIHx8IGlzRm4ob3B0aW9ucy5jb21wbGV0ZSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhcGkuYXBwbHkodW5kZWZpbmVkLCBbb3B0aW9uc10uY29uY2F0KHBhcmFtcykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBoYW5kbGVQcm9taXNlKG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICAgICAgYXBpLmFwcGx5KHVuZGVmaW5lZCwgW09iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXNvbHZlLFxyXG4gICAgICAgICAgICAgICAgICAgIGZhaWw6IHJlamVjdFxyXG4gICAgICAgICAgICAgICAgfSldLmNvbmNhdChwYXJhbXMpKTtcclxuICAgICAgICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWV4dGVuZC1uYXRpdmUgKi9cclxuICAgICAgICAgICAgICAgIFByb21pc2UucHJvdG90eXBlLmZpbmFsbHkgPSBmdW5jdGlvbihjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwcm9taXNlID0gdGhpcy5jb25zdHJ1Y3RvcjtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbihmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24ocmVhc29uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbihmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHJlYXNvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIG9uTWVzc2FnZUNhbGxiYWNrcyA9IFtdO1xyXG5cclxuICAgIHZhciBvcmlnaW4gPSB2b2lkIDA7XHJcblxyXG4gICAgZnVuY3Rpb24gb25TdWJOVnVlTWVzc2FnZShkYXRhKSB7XHJcbiAgICAgICAgb25NZXNzYWdlQ2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKHtcclxuICAgICAgICAgICAgICAgIG9yaWdpbjogb3JpZ2luLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogZGF0YVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgd2Vidmlld0lkID0gd2VleFBsdXMud2Vidmlldy5jdXJyZW50V2VidmlldygpLmlkO1xyXG5cclxuICAgIHZhciBjaGFubmVsID0gbmV3IEJyb2FkY2FzdENoYW5uZWwoJ1VOSS1BUFAtU1VCTlZVRScpO1xyXG4gICAgY2hhbm5lbC5vbm1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgIGlmIChldmVudC5kYXRhLnRvID09PSB3ZWJ2aWV3SWQpIHtcclxuICAgICAgICAgICAgb25TdWJOVnVlTWVzc2FnZShldmVudC5kYXRhLmRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gd3JhcHBlcih3ZWJ2aWV3KSB7XHJcbiAgICAgICAgd2Vidmlldy4kcHJvY2Vzc2VkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdmFyIGN1cnJlbnRXZWJ2aWV3SWQgPSB3ZWV4UGx1cy53ZWJ2aWV3LmN1cnJlbnRXZWJ2aWV3KCkuaWQ7XHJcbiAgICAgICAgdmFyIGlzUG9wdXBOVnVlID0gY3VycmVudFdlYnZpZXdJZCA9PT0gd2Vidmlldy5pZDtcclxuXHJcbiAgICAgICAgdmFyIGhvc3ROVnVlSWQgPSB3ZWJ2aWV3Ll9fdW5pYXBwX29yaWdpbl90eXBlID09PSAndW5pTlZpZXcnICYmIHdlYnZpZXcuX191bmlhcHBfb3JpZ2luX2lkO1xyXG4gICAgICAgIHZhciBwb3B1cE5WdWVJZCA9IHdlYnZpZXcuaWQ7XHJcblxyXG4gICAgICAgIHdlYnZpZXcucG9zdE1lc3NhZ2UgPSBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgIGlmIChob3N0TlZ1ZUlkKSB7XHJcbiAgICAgICAgICAgICAgICBjaGFubmVsLnBvc3RNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvOiBpc1BvcHVwTlZ1ZSA/IGhvc3ROVnVlSWQgOiBwb3B1cE5WdWVJZFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwb3N0TWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1VuaUFwcFN1Yk5WdWUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB3ZWJ2aWV3Lm9uTWVzc2FnZSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIG9uTWVzc2FnZUNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAoIXdlYnZpZXcuX191bmlhcHBfbWFza19pZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9yaWdpbiA9IHdlYnZpZXcuX191bmlhcHBfaG9zdDtcclxuXHJcbiAgICAgICAgdmFyIG1hc2tDb2xvciA9IHdlYnZpZXcuX191bmlhcHBfbWFzaztcclxuXHJcbiAgICAgICAgdmFyIG1hc2tXZWJ2aWV3ID0gd2VleFBsdXMud2Vidmlldy5nZXRXZWJ2aWV3QnlJZCh3ZWJ2aWV3Ll9fdW5pYXBwX21hc2tfaWQpO1xyXG4gICAgICAgIG1hc2tXZWJ2aWV3ID0gbWFza1dlYnZpZXcucGFyZW50KCkgfHwgbWFza1dlYnZpZXc7Ly/lho3mrKHmo4DmtYvniLZcclxuICAgICAgICB2YXIgb2xkU2hvdyA9IHdlYnZpZXcuc2hvdztcclxuICAgICAgICB2YXIgb2xkSGlkZSA9IHdlYnZpZXcuaGlkZTtcclxuICAgICAgICB2YXIgb2xkQ2xvc2UgPSB3ZWJ2aWV3LmNsb3NlO1xyXG5cclxuICAgICAgICB2YXIgc2hvd01hc2sgPSBmdW5jdGlvbiBzaG93TWFzaygpIHtcclxuICAgICAgICAgICAgbWFza1dlYnZpZXcuc2V0U3R5bGUoe1xyXG4gICAgICAgICAgICAgICAgbWFzazogbWFza0NvbG9yXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIGNsb3NlTWFzayA9IGZ1bmN0aW9uIGNsb3NlTWFzaygpIHtcclxuICAgICAgICAgICAgbWFza1dlYnZpZXcuc2V0U3R5bGUoe1xyXG4gICAgICAgICAgICAgICAgbWFzazogJ25vbmUnXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgd2Vidmlldy5zaG93ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHNob3dNYXNrKCk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xyXG4gICAgICAgICAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG9sZFNob3cuYXBwbHkod2VidmlldywgYXJncyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB3ZWJ2aWV3LmhpZGUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY2xvc2VNYXNrKCk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xyXG4gICAgICAgICAgICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gb2xkSGlkZS5hcHBseSh3ZWJ2aWV3LCBhcmdzKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHdlYnZpZXcuY2xvc2UgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY2xvc2VNYXNrKCk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBfbGVuMyA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMyksIF9rZXkzID0gMDsgX2tleTMgPCBfbGVuMzsgX2tleTMrKykge1xyXG4gICAgICAgICAgICAgICAgYXJnc1tfa2V5M10gPSBhcmd1bWVudHNbX2tleTNdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gb2xkQ2xvc2UuYXBwbHkod2VidmlldywgYXJncyk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRTdWJOVnVlQnlJZChpZCkge1xyXG4gICAgICAgIHZhciB3ZWJ2aWV3ID0gd2VleFBsdXMud2Vidmlldy5nZXRXZWJ2aWV3QnlJZChpZCk7XHJcbiAgICAgICAgaWYgKHdlYnZpZXcgJiYgIXdlYnZpZXcuJHByb2Nlc3NlZCkge1xyXG4gICAgICAgICAgICB3cmFwcGVyKHdlYnZpZXcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gd2VidmlldztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRDdXJyZW50U3ViTlZ1ZSgpIHtcclxuICAgICAgICByZXR1cm4gZ2V0U3ViTlZ1ZUJ5SWQod2VleFBsdXMud2Vidmlldy5jdXJyZW50V2VidmlldygpLmlkKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgcGx1cyA9IHdlZXgucmVxdWlyZU1vZHVsZSgncGx1cycpO1xyXG4gICAgdmFyIGdsb2JhbEV2ZW50ID0gd2VleC5yZXF1aXJlTW9kdWxlKCdnbG9iYWxFdmVudCcpO1xyXG5cclxuICAgIHZhciBpZCA9IDA7XHJcbiAgICB2YXIgY2FsbGJhY2tzID0ge307XHJcblxyXG4gICAgdmFyIFVOSUFQUF9TRVJWSUNFX05WVUVfSUQgPSAnX191bmlhcHBfX3NlcnZpY2UnO1xyXG5cclxuICAgIGdsb2JhbEV2ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3BsdXNNZXNzYWdlJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGlmIChlLmRhdGEudHlwZSA9PT0gJ1VuaUFwcEpzQXBpJykge1xyXG4gICAgICAgICAgICBpbnZva2UoZS5kYXRhLmlkLCBlLmRhdGEuZGF0YSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChlLmRhdGEudHlwZSA9PT0gJ1VuaUFwcFN1Yk5WdWUnKSB7XHJcbiAgICAgICAgICAgIG9uU3ViTlZ1ZU1lc3NhZ2UoZS5kYXRhLmRhdGEsIGUuZGF0YS5vcHRpb25zKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGUuZGF0YS50eXBlID09PSAnb25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwJykge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9uTmF2aWdhdGlvbkJhckJ1dHRvblRhcENhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICBvbk5hdmlnYXRpb25CYXJCdXR0b25UYXBDYWxsYmFjayhlLmRhdGEuZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGUuZGF0YS50eXBlID09PSAnb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkJykge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZENhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWRDYWxsYmFjayhlLmRhdGEuZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGUuZGF0YS50eXBlID09PSAnb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWQnKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWRDYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWRDYWxsYmFjayhlLmRhdGEuZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGUuZGF0YS50eXBlID09PSAnb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkJykge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZENhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWRDYWxsYmFjayhlLmRhdGEuZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB2YXIgY3JlYXRlQ2FsbGJhY2sgPSBmdW5jdGlvbiBjcmVhdGVDYWxsYmFjayhhcmdzLCB0eXBlKSB7XHJcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gZnVuY3Rpb24gY2FsbGJhY2socmVzKSB7XHJcbiAgICAgICAgICAgIGlmIChpc0ZuKGFyZ3MpKSB7XHJcbiAgICAgICAgICAgICAgICBhcmdzKHJlcyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYXJncykge1xyXG4gICAgICAgICAgICAgICAgaWYgKH5yZXMuZXJyTXNnLmluZGV4T2YoJzpvaycpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNGbihhcmdzLnN1Y2Nlc3MpICYmIGFyZ3Muc3VjY2VzcyhyZXMpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh+cmVzLmVyck1zZy5pbmRleE9mKCc6ZmFpbCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNGbihhcmdzLmZhaWwpICYmIGFyZ3MuZmFpbChyZXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaXNGbihhcmdzLmNvbXBsZXRlKSAmJiBhcmdzLmNvbXBsZXRlKHJlcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChpc0ZuKGFyZ3MpIHx8IGFyZ3MgJiYgaXNGbihhcmdzLmNhbGxiYWNrKSkge1xyXG4gICAgICAgICAgICBjYWxsYmFjay5rZWVwQWxpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY2FsbGJhY2s7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBpbnZva2UgPSBmdW5jdGlvbiBpbnZva2UoY2FsbGJhY2tJZCwgZGF0YSkge1xyXG4gICAgICAgIHZhciBjYWxsYmFjayA9IGNhbGxiYWNrc1tjYWxsYmFja0lkXTtcclxuICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgY2FsbGJhY2soZGF0YSk7XHJcbiAgICAgICAgICAgIGlmICghY2FsbGJhY2sua2VlcEFsaXZlKSB7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgY2FsbGJhY2tzW2NhbGxiYWNrSWRdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignY2FsbGJhY2tbJyArIGNhbGxiYWNrSWQgKyAnXSBpcyB1bmRlZmluZWQnKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBwdWJsaXNoID0gZnVuY3Rpb24gcHVibGlzaChfcmVmKSB7XHJcbiAgICAgICAgdmFyIGlkID0gX3JlZi5pZCxcclxuICAgICAgICAgICAgdHlwZSA9IF9yZWYudHlwZSxcclxuICAgICAgICAgICAgcGFyYW1zID0gX3JlZi5wYXJhbXM7XHJcblxyXG4gICAgICAgIGNhbGxiYWNrc1tpZF0gPSBjcmVhdGVDYWxsYmFjayhwYXJhbXMsIHR5cGUpO1xyXG4gICAgICAgIHBsdXMucG9zdE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgICAgIHR5cGU6IHR5cGUsXHJcbiAgICAgICAgICAgIHBhcmFtczogcGFyYW1zXHJcbiAgICAgICAgfSwgVU5JQVBQX1NFUlZJQ0VfTlZVRV9JRCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIHBvc3RNZXNzYWdlKGRhdGEpIHtcclxuICAgICAgICBwbHVzLnBvc3RNZXNzYWdlKGRhdGEsIFVOSUFQUF9TRVJWSUNFX05WVUVfSUQpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBjcmVhdGVQdWJsaXNoID0gZnVuY3Rpb24gY3JlYXRlUHVibGlzaChuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGFyZ3MpIHtcclxuICAgICAgICAgICAgcHVibGlzaCh7XHJcbiAgICAgICAgICAgICAgICBpZDogaWQrKyxcclxuICAgICAgICAgICAgICAgIHR5cGU6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICBwYXJhbXM6IGFyZ3NcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIG9uTmF2aWdhdGlvbkJhckJ1dHRvblRhcENhbGxiYWNrID0gdm9pZCAwO1xyXG4gICAgdmFyIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZENhbGxiYWNrID0gdm9pZCAwO1xyXG4gICAgdmFyIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkQ2FsbGJhY2sgPSB2b2lkIDA7XHJcbiAgICB2YXIgb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkQ2FsbGJhY2sgPSB2b2lkIDA7XHJcblxyXG4gICAgZnVuY3Rpb24gb25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgb25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwQ2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWQoY2FsbGJhY2spIHtcclxuICAgICAgICBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWRDYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWRDYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZChjYWxsYmFjaykge1xyXG4gICAgICAgIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZENhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVxdWlyZU5hdGl2ZVBsdWdpbihwbHVnaW5OYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHdlZXgucmVxdWlyZU1vZHVsZShwbHVnaW5OYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgZG9tID0gd2VleC5yZXF1aXJlTW9kdWxlKCdkb20nKTtcclxuXHJcbiAgICBmdW5jdGlvbiBsb2FkRm9udEZhY2UoX3JlZikge1xyXG4gICAgICAgIHZhciBmYW1pbHkgPSBfcmVmLmZhbWlseSxcclxuICAgICAgICAgICAgc291cmNlID0gX3JlZi5zb3VyY2UsXHJcbiAgICAgICAgICAgIGRlc2MgPSBfcmVmLmRlc2MsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSBfcmVmLnN1Y2Nlc3MsXHJcbiAgICAgICAgICAgIGZhaWwgPSBfcmVmLmZhaWwsXHJcbiAgICAgICAgICAgIGNvbXBsZXRlID0gX3JlZi5jb21wbGV0ZTtcclxuXHJcbiAgICAgICAgZG9tLmFkZFJ1bGUoJ2ZvbnRGYWNlJywge1xyXG4gICAgICAgICAgICBmb250RmFtaWx5OiBmYW1pbHksXHJcbiAgICAgICAgICAgIHNyYzogc291cmNlLnJlcGxhY2UoL1wiL2csICdcXCcnKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZhciByZXMgPSB7XHJcbiAgICAgICAgICAgIGVyck1zZzogJ2xvYWRGb250RmFjZTpvaycsXHJcbiAgICAgICAgICAgIHN0YXR1czogJ2xvYWRlZCdcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlzRm4oc3VjY2VzcykgJiYgc3VjY2VzcyhyZXMpO1xyXG4gICAgICAgIGlzRm4oY29tcGxldGUpICYmIGNvbXBsZXRlKHJlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGdsb2JhbEV2ZW50JDEgPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ2dsb2JhbEV2ZW50Jyk7XHJcblxyXG4gICAgdmFyIGNhbGxiYWNrcyQxID0gW107XHJcblxyXG4gICAgZ2xvYmFsRXZlbnQkMS5hZGRFdmVudExpc3RlbmVyKCdwbHVzTWVzc2FnZScsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBpZiAoZS5kYXRhLnR5cGUgPT09ICdVbmlBcHBSZWFkeScpIHtcclxuICAgICAgICAgICAgcmVhZHkuaXNVbmlBcHBSZWFkeSA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmIChjYWxsYmFja3MkMS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrcyQxLmZvckVhY2goZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2tzJDEgPSBbXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIHJlYWR5KGNhbGxiYWNrKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1VuaUFwcFJlYWR5KSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2tzJDEucHVzaChjYWxsYmFjayk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uKG9iaikge1xyXG4gICAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xyXG4gICAgfSA6IGZ1bmN0aW9uKG9iaikge1xyXG4gICAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/XHJcbiAgICAgICAgICAgIFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgc3RyZWFtID0gd2VleC5yZXF1aXJlTW9kdWxlKCdzdHJlYW0nKTtcclxuXHJcbiAgICAvLyBsZXQgcmVxdWVzdFRhc2tJZCA9IDBcclxuXHJcbiAgICB2YXIgTUVUSE9EX0dFVCA9ICdHRVQnO1xyXG4gICAgdmFyIE1FVEhPRF9QT1NUID0gJ1BPU1QnO1xyXG4gICAgdmFyIENPTlRFTlRfVFlQRV9KU09OID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xyXG4gICAgdmFyIENPTlRFTlRfVFlQRV9GT1JNID0gJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCc7XHJcblxyXG4gICAgdmFyIHNlcmlhbGl6ZSA9IGZ1bmN0aW9uIHNlcmlhbGl6ZShkYXRhKSB7XHJcbiAgICAgICAgdmFyIG1ldGhvZCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogTUVUSE9EX0dFVDtcclxuICAgICAgICB2YXIgY29udGVudFR5cGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IENPTlRFTlRfVFlQRV9GT1JNO1xyXG5cclxuICAgICAgICBpZiAoKHR5cGVvZiBkYXRhID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihkYXRhKSkgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIGlmIChtZXRob2QudG9VcHBlckNhc2UoKSA9PT0gTUVUSE9EX1BPU1QgJiYgY29udGVudFR5cGUudG9Mb3dlckNhc2UoKSA9PT0gQ09OVEVOVF9UWVBFX0pTT04pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShkYXRhKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhkYXRhKS5tYXAoZnVuY3Rpb24oa2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChrZXkpICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGRhdGFba2V5XSk7XHJcbiAgICAgICAgICAgICAgICB9KS5qb2luKCcmJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIHJlcXVlc3QoX3JlZikge1xyXG4gICAgICAgIHZhciB1cmwgPSBfcmVmLnVybCxcclxuICAgICAgICAgICAgZGF0YSA9IF9yZWYuZGF0YSxcclxuICAgICAgICAgICAgaGVhZGVyID0gX3JlZi5oZWFkZXIsXHJcbiAgICAgICAgICAgIF9yZWYkbWV0aG9kID0gX3JlZi5tZXRob2QsXHJcbiAgICAgICAgICAgIG1ldGhvZCA9IF9yZWYkbWV0aG9kID09PSB1bmRlZmluZWQgPyAnR0VUJyA6IF9yZWYkbWV0aG9kLFxyXG4gICAgICAgICAgICBfcmVmJGRhdGFUeXBlID0gX3JlZi5kYXRhVHlwZSxcclxuICAgICAgICAgICAgZGF0YVR5cGUgPSBfcmVmJGRhdGFUeXBlID09PSB1bmRlZmluZWQgPyAnanNvbicgOiBfcmVmJGRhdGFUeXBlLFxyXG4gICAgICAgICAgICByZXNwb25zZVR5cGUgPSBfcmVmLnJlc3BvbnNlVHlwZSxcclxuICAgICAgICAgICAgc3VjY2VzcyA9IF9yZWYuc3VjY2VzcyxcclxuICAgICAgICAgICAgZmFpbCA9IF9yZWYuZmFpbCxcclxuICAgICAgICAgICAgY29tcGxldGUgPSBfcmVmLmNvbXBsZXRlO1xyXG5cclxuICAgICAgICAvLyByZXF1ZXN0VGFza0lkKytcclxuICAgICAgICB2YXIgYWJvcnRlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICB2YXIgaGFzQ29udGVudFR5cGUgPSBmYWxzZTtcclxuICAgICAgICB2YXIgaGVhZGVycyA9IHt9O1xyXG4gICAgICAgIGlmIChoZWFkZXIpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgbmFtZSBpbiBoZWFkZXIpIHtcclxuICAgICAgICAgICAgICAgIGlmICghaGFzQ29udGVudFR5cGUgJiYgbmFtZS50b0xvd2VyQ2FzZSgpID09PSAnY29udGVudC10eXBlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGhhc0NvbnRlbnRUeXBlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSA9IGhlYWRlcltuYW1lXTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyc1tuYW1lXSA9IGhlYWRlcltuYW1lXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobWV0aG9kID09PSBNRVRIT0RfR0VUICYmIGRhdGEpIHtcclxuICAgICAgICAgICAgdXJsID0gdXJsICsgKH51cmwuaW5kZXhPZignPycpID8gdXJsLnN1YnN0cigtMSkgPT09ICcmJyB8fCB1cmwuc3Vic3RyKC0xKSA9PT0gJz8nID8gJycgOiAnJicgOiAnPycpICtcclxuICAgICAgICAgICAgICAgIHNlcmlhbGl6ZShkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3RyZWFtLmZldGNoKHtcclxuICAgICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgICAgIG1ldGhvZDogbWV0aG9kLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxyXG4gICAgICAgICAgICB0eXBlOiBkYXRhVHlwZSA9PT0gJ2pzb24nID8gJ2pzb24nIDogJ3RleHQnLFxyXG4gICAgICAgICAgICBib2R5OiBtZXRob2QgIT09IE1FVEhPRF9HRVQgPyBzZXJpYWxpemUoZGF0YSwgbWV0aG9kLCBoZWFkZXJzWydDb250ZW50LVR5cGUnXSkgOiAnJ1xyXG4gICAgICAgIH0sIGZ1bmN0aW9uKF9yZWYyKSB7XHJcbiAgICAgICAgICAgIHZhciBzdGF0dXMgPSBfcmVmMi5zdGF0dXMsXHJcbiAgICAgICAgICAgICAgICBvayA9IF9yZWYyLm9rLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzVGV4dCA9IF9yZWYyLnN0YXR1c1RleHQsXHJcbiAgICAgICAgICAgICAgICBkYXRhID0gX3JlZjIuZGF0YSxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnMgPSBfcmVmMi5oZWFkZXJzO1xyXG5cclxuICAgICAgICAgICAgdmFyIHJldCA9IHt9O1xyXG4gICAgICAgICAgICBpZiAoIXN0YXR1cyB8fCBzdGF0dXMgPT09IC0xIHx8IGFib3J0ZWQpIHtcclxuICAgICAgICAgICAgICAgIHJldC5lcnJNc2cgPSAncmVxdWVzdDpmYWlsJztcclxuICAgICAgICAgICAgICAgIGlzRm4oZmFpbCkgJiYgZmFpbChyZXQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0LmRhdGEgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgcmV0LnN0YXR1c0NvZGUgPSBzdGF0dXM7XHJcbiAgICAgICAgICAgICAgICByZXQuaGVhZGVyID0gaGVhZGVycztcclxuICAgICAgICAgICAgICAgIGlzRm4oc3VjY2VzcykgJiYgc3VjY2VzcyhyZXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlzRm4oY29tcGxldGUpICYmIGNvbXBsZXRlKHJldCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgYWJvcnQ6IGZ1bmN0aW9uIGFib3J0KCkge1xyXG4gICAgICAgICAgICAgICAgYWJvcnRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBzdG9yYWdlID0gd2VleC5yZXF1aXJlTW9kdWxlKCdwbHVzc3RvcmFnZScpO1xyXG4gICAgdmFyIFVOSUFQUF9TVE9SQUdFX0RBVEFfVFlQRSA9ICdfX1RZUEUnO1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldFN0b3JhZ2UoX3JlZikge1xyXG4gICAgICAgIHZhciBrZXkgPSBfcmVmLmtleSxcclxuICAgICAgICAgICAgZGF0YSA9IF9yZWYuZGF0YSxcclxuICAgICAgICAgICAgc3VjY2VzcyA9IF9yZWYuc3VjY2VzcyxcclxuICAgICAgICAgICAgZmFpbCA9IF9yZWYuZmFpbCxcclxuICAgICAgICAgICAgY29tcGxldGUgPSBfcmVmLmNvbXBsZXRlO1xyXG5cclxuICAgICAgICBzdG9yYWdlLmdldEl0ZW0oa2V5ICsgVU5JQVBQX1NUT1JBR0VfREFUQV9UWVBFLCBmdW5jdGlvbihyZXQpIHtcclxuICAgICAgICAgICAgaWYgKHJldC5yZXN1bHQgPT09ICdzdWNjZXNzJykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGFUeXBlID0gcmV0LmRhdGE7XHJcbiAgICAgICAgICAgICAgICBzdG9yYWdlLmdldEl0ZW0oa2V5LCBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzLnJlc3VsdCA9PT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFUeXBlICYmIHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFUeXBlICE9PSAnU3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IEpTT04ucGFyc2UocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRm4oc3VjY2VzcykgJiYgc3VjY2Vzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyTXNnOiAnZ2V0U3RvcmFnZTpvaycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogcmVzdWx0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5lcnJNc2cgPSAnc2V0U3RvcmFnZTpmYWlsJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRm4oZmFpbCkgJiYgZmFpbChyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmVyck1zZyA9ICdzZXRTdG9yYWdlOmZhaWwnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0ZuKGZhaWwpICYmIGZhaWwocmVzKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaXNGbihjb21wbGV0ZSkgJiYgY29tcGxldGUocmVzKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0LmVyck1zZyA9ICdzZXRTdG9yYWdlOmZhaWwnO1xyXG4gICAgICAgICAgICAgICAgaXNGbihmYWlsKSAmJiBmYWlsKHJldCk7XHJcbiAgICAgICAgICAgICAgICBpc0ZuKGNvbXBsZXRlKSAmJiBjb21wbGV0ZShyZXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0U3RvcmFnZShfcmVmMikge1xyXG4gICAgICAgIHZhciBrZXkgPSBfcmVmMi5rZXksXHJcbiAgICAgICAgICAgIGRhdGEgPSBfcmVmMi5kYXRhLFxyXG4gICAgICAgICAgICBzdWNjZXNzID0gX3JlZjIuc3VjY2VzcyxcclxuICAgICAgICAgICAgZmFpbCA9IF9yZWYyLmZhaWwsXHJcbiAgICAgICAgICAgIGNvbXBsZXRlID0gX3JlZjIuY29tcGxldGU7XHJcblxyXG4gICAgICAgIHZhciBkYXRhVHlwZSA9ICdTdHJpbmcnO1xyXG4gICAgICAgIGlmICgodHlwZW9mIGRhdGEgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGRhdGEpKSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgZGF0YVR5cGUgPSAnT2JqZWN0JztcclxuICAgICAgICAgICAgZGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdG9yYWdlLnNldEl0ZW0oa2V5LCBkYXRhLCBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgaWYgKHJlcy5yZXN1bHQgPT09ICdzdWNjZXNzJykge1xyXG4gICAgICAgICAgICAgICAgc3RvcmFnZS5zZXRJdGVtKGtleSArIFVOSUFQUF9TVE9SQUdFX0RBVEFfVFlQRSwgZGF0YVR5cGUsIGZ1bmN0aW9uKHJldCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXQucmVzdWx0ID09PSAnc3VjY2VzcycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNGbihzdWNjZXNzKSAmJiBzdWNjZXNzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVyck1zZzogJ3NldFN0b3JhZ2U6b2snXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldC5lcnJNc2cgPSAnc2V0U3RvcmFnZTpmYWlsJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNGbihmYWlsKSAmJiBmYWlsKHJldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXMuZXJyTXNnID0gJ3NldFN0b3JhZ2U6ZmFpbCc7XHJcbiAgICAgICAgICAgICAgICBpc0ZuKGZhaWwpICYmIGZhaWwocmVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpc0ZuKGNvbXBsZXRlKSAmJiBjb21wbGV0ZShyZXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbW92ZVN0b3JhZ2UoX3JlZjMpIHtcclxuICAgICAgICB2YXIga2V5ID0gX3JlZjMua2V5LFxyXG4gICAgICAgICAgICBkYXRhID0gX3JlZjMuZGF0YSxcclxuICAgICAgICAgICAgc3VjY2VzcyA9IF9yZWYzLnN1Y2Nlc3MsXHJcbiAgICAgICAgICAgIGZhaWwgPSBfcmVmMy5mYWlsLFxyXG4gICAgICAgICAgICBjb21wbGV0ZSA9IF9yZWYzLmNvbXBsZXRlO1xyXG5cclxuICAgICAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oa2V5LCBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgaWYgKHJlcy5yZXN1bHQgPT09ICdzdWNjZXNzJykge1xyXG4gICAgICAgICAgICAgICAgaXNGbihzdWNjZXNzKSAmJiBzdWNjZXNzKHtcclxuICAgICAgICAgICAgICAgICAgICBlcnJNc2c6ICdyZW1vdmVTdG9yYWdlOm9rJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXMuZXJyTXNnID0gJ3JlbW92ZVN0b3JhZ2U6ZmFpbCc7XHJcbiAgICAgICAgICAgICAgICBpc0ZuKGZhaWwpICYmIGZhaWwocmVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpc0ZuKGNvbXBsZXRlKSAmJiBjb21wbGV0ZShyZXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHN0b3JhZ2UucmVtb3ZlSXRlbShrZXkgKyBVTklBUFBfU1RPUkFHRV9EQVRBX1RZUEUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNsZWFyU3RvcmFnZShfcmVmNCkge1xyXG4gICAgICAgIHZhciBrZXkgPSBfcmVmNC5rZXksXHJcbiAgICAgICAgICAgIGRhdGEgPSBfcmVmNC5kYXRhLFxyXG4gICAgICAgICAgICBzdWNjZXNzID0gX3JlZjQuc3VjY2VzcyxcclxuICAgICAgICAgICAgZmFpbCA9IF9yZWY0LmZhaWwsXHJcbiAgICAgICAgICAgIGNvbXBsZXRlID0gX3JlZjQuY29tcGxldGU7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGNsaXBib2FyZCA9IHdlZXgucmVxdWlyZU1vZHVsZSgnY2xpcGJvYXJkJyk7XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0Q2xpcGJvYXJkRGF0YShfcmVmKSB7XHJcbiAgICAgICAgdmFyIHN1Y2Nlc3MgPSBfcmVmLnN1Y2Nlc3MsXHJcbiAgICAgICAgICAgIGZhaWwgPSBfcmVmLmZhaWwsXHJcbiAgICAgICAgICAgIGNvbXBsZXRlID0gX3JlZi5jb21wbGV0ZTtcclxuXHJcbiAgICAgICAgY2xpcGJvYXJkLmdldFN0cmluZyhmdW5jdGlvbihfcmVmMikge1xyXG4gICAgICAgICAgICB2YXIgZGF0YSA9IF9yZWYyLmRhdGE7XHJcblxyXG4gICAgICAgICAgICB2YXIgcmVzID0ge1xyXG4gICAgICAgICAgICAgICAgZXJyTXNnOiAnZ2V0Q2xpcGJvYXJkRGF0YTpvaycsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGlzRm4oc3VjY2VzcykgJiYgc3VjY2VzcyhyZXMpO1xyXG4gICAgICAgICAgICBpc0ZuKGNvbXBsZXRlKSAmJiBjb21wbGV0ZShyZXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldENsaXBib2FyZERhdGEoX3JlZjMpIHtcclxuICAgICAgICB2YXIgZGF0YSA9IF9yZWYzLmRhdGEsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSBfcmVmMy5zdWNjZXNzLFxyXG4gICAgICAgICAgICBmYWlsID0gX3JlZjMuZmFpbCxcclxuICAgICAgICAgICAgY29tcGxldGUgPSBfcmVmMy5jb21wbGV0ZTtcclxuXHJcbiAgICAgICAgdmFyIHJlcyA9IHtcclxuICAgICAgICAgICAgZXJyTXNnOiAnc2V0Q2xpcGJvYXJkRGF0YTpvaydcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNsaXBib2FyZC5zZXRTdHJpbmcoZGF0YSk7XHJcbiAgICAgICAgaXNGbihzdWNjZXNzKSAmJiBzdWNjZXNzKHJlcyk7XHJcbiAgICAgICAgaXNGbihjb21wbGV0ZSkgJiYgY29tcGxldGUocmVzKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgZ2V0RW1pdHRlciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgZ2V0VW5pRW1pdHRlciA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xyXG4gICAgICAgICAgICByZXR1cm4gZ2V0VW5pRW1pdHRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIEVtaXR0ZXIgPSB7XHJcbiAgICAgICAgICAgICRvbjogZnVuY3Rpb24gJG9uKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCd1bmkuJG9uIGZhaWxlZCcpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAkb2ZmOiBmdW5jdGlvbiAkb2ZmKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCd1bmkuJG9mZiBmYWlsZWQnKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJG9uY2U6IGZ1bmN0aW9uICRvbmNlKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCd1bmkuJG9uY2UgZmFpbGVkJyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICRlbWl0OiBmdW5jdGlvbiAkZW1pdCgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybigndW5pLiRlbWl0IGZhaWxlZCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gZ2V0VW5pRW1pdHRlcigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIEVtaXR0ZXI7XHJcbiAgICAgICAgfTtcclxuICAgIH0oKTtcclxuXHJcbiAgICBmdW5jdGlvbiBhcHBseShjdHgsIG1ldGhvZCwgYXJncykge1xyXG4gICAgICAgIHJldHVybiBjdHhbbWV0aG9kXS5hcHBseShjdHgsIGFyZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uICRvbigpIHtcclxuICAgICAgICByZXR1cm4gYXBwbHkoZ2V0RW1pdHRlcigpLCAnJG9uJywgW10uY29uY2F0KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiAkb2ZmKCkge1xyXG4gICAgICAgIHJldHVybiBhcHBseShnZXRFbWl0dGVyKCksICckb2ZmJywgW10uY29uY2F0KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiAkb25jZSgpIHtcclxuICAgICAgICByZXR1cm4gYXBwbHkoZ2V0RW1pdHRlcigpLCAnJG9uY2UnLCBbXS5jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uICRlbWl0KCkge1xyXG4gICAgICAgIHJldHVybiBhcHBseShnZXRFbWl0dGVyKCksICckZW1pdCcsIFtdLmNvbmNhdChBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKSk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICB2YXIgYXBpID0gLyojX19QVVJFX18qLyBPYmplY3QuZnJlZXplKHtcclxuICAgICAgICBsb2FkRm9udEZhY2U6IGxvYWRGb250RmFjZSxcclxuICAgICAgICByZWFkeTogcmVhZHksXHJcbiAgICAgICAgcmVxdWVzdDogcmVxdWVzdCxcclxuICAgICAgICBnZXRTdG9yYWdlOiBnZXRTdG9yYWdlLFxyXG4gICAgICAgIHNldFN0b3JhZ2U6IHNldFN0b3JhZ2UsXHJcbiAgICAgICAgcmVtb3ZlU3RvcmFnZTogcmVtb3ZlU3RvcmFnZSxcclxuICAgICAgICBjbGVhclN0b3JhZ2U6IGNsZWFyU3RvcmFnZSxcclxuICAgICAgICBnZXRDbGlwYm9hcmREYXRhOiBnZXRDbGlwYm9hcmREYXRhLFxyXG4gICAgICAgIHNldENsaXBib2FyZERhdGE6IHNldENsaXBib2FyZERhdGEsXHJcbiAgICAgICAgb25TdWJOVnVlTWVzc2FnZTogb25TdWJOVnVlTWVzc2FnZSxcclxuICAgICAgICBnZXRTdWJOVnVlQnlJZDogZ2V0U3ViTlZ1ZUJ5SWQsXHJcbiAgICAgICAgZ2V0Q3VycmVudFN1Yk5WdWU6IGdldEN1cnJlbnRTdWJOVnVlLFxyXG4gICAgICAgICRvbjogJG9uLFxyXG4gICAgICAgICRvZmY6ICRvZmYsXHJcbiAgICAgICAgJG9uY2U6ICRvbmNlLFxyXG4gICAgICAgICRlbWl0OiAkZW1pdFxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIHZhciB3eCA9IHtcclxuICAgICAgICB1cGxvYWRGaWxlOiB0cnVlLFxyXG4gICAgICAgIGRvd25sb2FkRmlsZTogdHJ1ZSxcclxuICAgICAgICBjaG9vc2VJbWFnZTogdHJ1ZSxcclxuICAgICAgICBwcmV2aWV3SW1hZ2U6IHRydWUsXHJcbiAgICAgICAgZ2V0SW1hZ2VJbmZvOiB0cnVlLFxyXG4gICAgICAgIHNhdmVJbWFnZVRvUGhvdG9zQWxidW06IHRydWUsXHJcbiAgICAgICAgY2hvb3NlVmlkZW86IHRydWUsXHJcbiAgICAgICAgc2F2ZVZpZGVvVG9QaG90b3NBbGJ1bTogdHJ1ZSxcclxuICAgICAgICBzYXZlRmlsZTogdHJ1ZSxcclxuICAgICAgICBnZXRTYXZlZEZpbGVMaXN0OiB0cnVlLFxyXG4gICAgICAgIGdldFNhdmVkRmlsZUluZm86IHRydWUsXHJcbiAgICAgICAgcmVtb3ZlU2F2ZWRGaWxlOiB0cnVlLFxyXG4gICAgICAgIG9wZW5Eb2N1bWVudDogdHJ1ZSxcclxuICAgICAgICBzZXRTdG9yYWdlOiB0cnVlLFxyXG4gICAgICAgIGdldFN0b3JhZ2U6IHRydWUsXHJcbiAgICAgICAgZ2V0U3RvcmFnZUluZm86IHRydWUsXHJcbiAgICAgICAgcmVtb3ZlU3RvcmFnZTogdHJ1ZSxcclxuICAgICAgICBjbGVhclN0b3JhZ2U6IHRydWUsXHJcbiAgICAgICAgZ2V0TG9jYXRpb246IHRydWUsXHJcbiAgICAgICAgY2hvb3NlTG9jYXRpb246IHRydWUsXHJcbiAgICAgICAgb3BlbkxvY2F0aW9uOiB0cnVlLFxyXG4gICAgICAgIGdldFN5c3RlbUluZm86IHRydWUsXHJcbiAgICAgICAgZ2V0TmV0d29ya1R5cGU6IHRydWUsXHJcbiAgICAgICAgbWFrZVBob25lQ2FsbDogdHJ1ZSxcclxuICAgICAgICBzY2FuQ29kZTogdHJ1ZSxcclxuICAgICAgICBzZXRTY3JlZW5CcmlnaHRuZXNzOiB0cnVlLFxyXG4gICAgICAgIGdldFNjcmVlbkJyaWdodG5lc3M6IHRydWUsXHJcbiAgICAgICAgc2V0S2VlcFNjcmVlbk9uOiB0cnVlLFxyXG4gICAgICAgIHZpYnJhdGVMb25nOiB0cnVlLFxyXG4gICAgICAgIHZpYnJhdGVTaG9ydDogdHJ1ZSxcclxuICAgICAgICBhZGRQaG9uZUNvbnRhY3Q6IHRydWUsXHJcbiAgICAgICAgc2hvd1RvYXN0OiB0cnVlLFxyXG4gICAgICAgIHNob3dMb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgIGhpZGVUb2FzdDogdHJ1ZSxcclxuICAgICAgICBoaWRlTG9hZGluZzogdHJ1ZSxcclxuICAgICAgICBzaG93TW9kYWw6IHRydWUsXHJcbiAgICAgICAgc2hvd0FjdGlvblNoZWV0OiB0cnVlLFxyXG4gICAgICAgIHNldE5hdmlnYXRpb25CYXJUaXRsZTogdHJ1ZSxcclxuICAgICAgICBzZXROYXZpZ2F0aW9uQmFyQ29sb3I6IHRydWUsXHJcbiAgICAgICAgbmF2aWdhdGVUbzogdHJ1ZSxcclxuICAgICAgICByZWRpcmVjdFRvOiB0cnVlLFxyXG4gICAgICAgIHJlTGF1bmNoOiB0cnVlLFxyXG4gICAgICAgIHN3aXRjaFRhYjogdHJ1ZSxcclxuICAgICAgICBuYXZpZ2F0ZUJhY2s6IHRydWUsXHJcbiAgICAgICAgZ2V0UHJvdmlkZXI6IHRydWUsXHJcbiAgICAgICAgbG9naW46IHRydWUsXHJcbiAgICAgICAgZ2V0VXNlckluZm86IHRydWUsXHJcbiAgICAgICAgc2hhcmU6IHRydWUsXHJcbiAgICAgICAgcmVxdWVzdFBheW1lbnQ6IHRydWUsXHJcbiAgICAgICAgc3Vic2NyaWJlUHVzaDogdHJ1ZSxcclxuICAgICAgICB1bnN1YnNjcmliZVB1c2g6IHRydWUsXHJcbiAgICAgICAgb25QdXNoOiB0cnVlLFxyXG4gICAgICAgIG9mZlB1c2g6IHRydWVcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGJhc2VVbmkgPSB7XHJcbiAgICAgICAgb3M6IHtcclxuICAgICAgICAgICAgbnZ1ZTogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdmFyIHVuaSA9IHt9O1xyXG5cclxuICAgIGlmICh0eXBlb2YgUHJveHkgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgdW5pID0gbmV3IFByb3h5KHt9LCB7XHJcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KHRhcmdldCwgbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdvcycpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBudnVlOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChuYW1lID09PSAncG9zdE1lc3NhZ2UnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBvc3RNZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdyZXF1aXJlTmF0aXZlUGx1Z2luJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXF1aXJlTmF0aXZlUGx1Z2luO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdvbk5hdmlnYXRpb25CYXJCdXR0b25UYXAnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9uTmF2aWdhdGlvbkJhckJ1dHRvblRhcDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChuYW1lID09PSAnb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gJ29uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChuYW1lID09PSAnb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgbWV0aG9kID0gYXBpW25hbWVdO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFtZXRob2QpIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2QgPSBjcmVhdGVQdWJsaXNoKG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHNob3VsZFByb21pc2UobmFtZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzaWZ5KG1ldGhvZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbWV0aG9kO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIE9iamVjdC5rZXlzKGJhc2VVbmkpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XHJcbiAgICAgICAgICAgIHVuaVtrZXldID0gYmFzZVVuaVtrZXldO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB1bmkucG9zdE1lc3NhZ2UgPSBwb3N0TWVzc2FnZTtcclxuXHJcbiAgICAgICAgdW5pLnJlcXVpcmVOYXRpdmVQbHVnaW4gPSByZXF1aXJlTmF0aXZlUGx1Z2luO1xyXG5cclxuICAgICAgICB1bmkub25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwID0gb25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwO1xyXG5cclxuICAgICAgICB1bmkub25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkID0gb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkO1xyXG5cclxuICAgICAgICB1bmkub25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWQgPSBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZDtcclxuXHJcbiAgICAgICAgdW5pLm9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZCA9IG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZDtcclxuXHJcbiAgICAgICAgT2JqZWN0LmtleXMod3gpLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xyXG4gICAgICAgICAgICB2YXIgbWV0aG9kID0gYXBpW25hbWVdO1xyXG4gICAgICAgICAgICBpZiAoIW1ldGhvZCkge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kID0gY3JlYXRlUHVibGlzaChuYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc2hvdWxkUHJvbWlzZShuYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgdW5pW25hbWVdID0gcHJvbWlzaWZ5KG1ldGhvZCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB1bmlbbmFtZV0gPSBtZXRob2Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiB1bmk7XHJcbn1cclxuXHJcbnZhciBjcmVhdGVVbmk7XHJcblxyXG5pZiAodHlwZW9mIGdldFVuaSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgY3JlYXRlVW5pID0gZ2V0VW5pO1xyXG59IGVsc2Uge1xyXG4gICAgY3JlYXRlVW5pID0gaW5pdFVuaTtcclxufVxyXG52YXIgd2VleFBsdXMgPSBuZXcgV2VleFBsdXMod2VleCk7XHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVVuaSh3ZWV4LCB3ZWV4UGx1cywgQnJvYWRjYXN0Q2hhbm5lbCk7XHJcbmV4cG9ydCB7XHJcbiAgICB3ZWV4UGx1c1xyXG59O1xyXG4iLCJcbiAgICAgICAgaW1wb3J0ICdAZGNsb3VkaW8vdW5pLXN0YXQnO1xuICAgICAgICBpbXBvcnQgJ3VuaS1hcHAtc3R5bGUnXG4gICAgICAgIGltcG9ydCBBcHAgZnJvbSAnLi9wYWdlcy9leHRVSS9ub3RpY2UtYmFyL25vdGljZS1iYXIubnZ1ZT9tcFR5cGU9cGFnZSdcbiAgICAgICAgQXBwLm1wVHlwZSA9ICdwYWdlJ1xuICAgICAgICBBcHAucm91dGUgPSAncGFnZXMvZXh0VUkvbm90aWNlLWJhci9ub3RpY2UtYmFyJ1xuICAgICAgICBBcHAuZWwgPSAnI3Jvb3QnXG4gICAgICAgIG5ldyBWdWUoQXBwKVxuICAgICAgICAiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL25vdGljZS1iYXIubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yMDA5ZTdlYSZtcFR5cGU9cGFnZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL25vdGljZS1iYXIubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi9ub3RpY2UtYmFyLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzICgpIHtcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbn1cbmlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG59XG5pZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vbm90aWNlLWJhci5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdCwgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi9ub3RpY2UtYmFyLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiKS5kZWZhdWx0KVxuICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBcIjA4NDUyZjhhXCJcbiAgXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwid2ViMS91bmlhcHAvaGVsbG8vcGFnZXMvZXh0VUkvbm90aWNlLWJhci9ub3RpY2UtYmFyLm52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy93ZWJwYWNrLXVuaS1udnVlLWxvYWRlci9saWIvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy93ZWJwYWNrLXVuaS1udnVlLWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi4vLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LTAhLi4vLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvdnVlLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTAhLi9ub3RpY2UtYmFyLm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjAwOWU3ZWEmbXBUeXBlPXBhZ2VcIiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJzY3JvbGwtdmlld1wiLFxuICAgIHtcbiAgICAgIHN0YXRpY1N0eWxlOiB7IGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIgfSxcbiAgICAgIGF0dHJzOiB7IHNjcm9sbFk6IHRydWUsIGVuYWJsZUJhY2tUb1RvcDogdHJ1ZSwgYnViYmxlOiBcInRydWVcIiB9XG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInUtdGV4dFwiLCB7IHN0YXRpY0NsYXNzOiBbXCJleGFtcGxlLWluZm9cIl0gfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICBcIumAmuWRiuagj+e7hOS7tuWkmueUqOS6juezu+e7n+mAmuefpe+8jOW5v+WRiumAmuefpeetieWcuuaZr++8jOWPr+iHquWumuS5ieWbvuagh++8jOminOiJsu+8jOWxleeOsOaWueW8j+etieOAglwiXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2MoXCJ1bmktc2VjdGlvblwiLCB7IGF0dHJzOiB7IHRpdGxlOiBcIuWfuuacrOeUqOazlVwiLCB0eXBlOiBcImxpbmVcIiB9IH0pLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBbXCJleGFtcGxlLWJvZHlcIl0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJ1bmktbm90aWNlLWJhclwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHNpbmdsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIHRleHQ6IFwiW+WNleihjF0gdW5pLWFwcCAxLjblj5HluIPvvIzlvIDlj5HkuIDmrKHjgIE356uv6KaG55uW77yBXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcInVuaS1ub3RpY2UtYmFyXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgdGV4dDpcbiAgICAgICAgICAgICAgICAgICAgXCJb5aSa6KGMXSB1bmktYXBwIDEuNueJiOato+W8j+WPkeW4g++8jOW8gOWPkeS4gOasoe+8jOWQjOaXtuWPkeW4g2lPU+OAgUFuZHJvaWTjgIFINeOAgeW+ruS/oeWwj+eoi+W6j+OAgeaUr+S7mOWuneWwj+eoi+W6j+OAgeeZvuW6puWwj+eoi+W6j+OAgeWktOadoeWwj+eoi+W6j+etiTflpKflubPlj7DjgIJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcInVuaS1zZWN0aW9uXCIsIHsgYXR0cnM6IHsgdGl0bGU6IFwi5Yqg5Zu+5qCHXCIsIHR5cGU6IFwibGluZVwiIH0gfSksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInZpZXdcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcImV4YW1wbGUtYm9keVwiXSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInVuaS1ub3RpY2UtYmFyXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgc2luZ2xlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgc2hvd0ljb246IHRydWUsXG4gICAgICAgICAgICAgICAgICB0ZXh0OiBcInVuaS1hcHDooYzkuJrls7DkvJrpopHpopHkuq7nm7jvvIzlvIDlj5HogIXlj43lk43ng63ng4ghXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcInVuaS1ub3RpY2UtYmFyXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgc2hvd0ljb246IHRydWUsXG4gICAgICAgICAgICAgICAgICB0ZXh0OlxuICAgICAgICAgICAgICAgICAgICBcIjjmnIgxMuaXpURDbG91ZOWPl+mCgOWPguWKoGlXRULls7DkvJrlkI7vvIw55pyIMTnml6VEQ2xvdWQgQ0VPIOeOi+WuieWcqOWNg+S6uuWwj+eoi+W6j+WzsOS8muKAlOKAlOingeWunuWkp+S8mu+8jOWBmuS6huS4u+mimOS4uuOAikFwcOWSjOWwj+eoi+W6j++8jOmxvOS4jueGiuaOjOWmguS9leWFvOW+l++8n+OAi+eahOWIhuS6q+OAglwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFwidW5pLXNlY3Rpb25cIiwgeyBhdHRyczogeyB0aXRsZTogXCLmloflrZfmu5rliqhcIiwgdHlwZTogXCJsaW5lXCIgfSB9KSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogW1wiZXhhbXBsZS1ib2R5XCJdIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwidW5pLW5vdGljZS1iYXJcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBzY3JvbGxhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgc2luZ2xlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgdGV4dDogXCJ1bmktYXBw6KGM5Lia5bOw5Lya6aKR6aKR5Lqu55u477yM5byA5Y+R6ICF5Y+N5ZON54Ot54OIIVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJ1bmktbm90aWNlLWJhclwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHNob3dJY29uOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgc2Nyb2xsYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIHNpbmdsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIHRleHQ6XG4gICAgICAgICAgICAgICAgICAgIFwidW5pLWFwcCAxLjbniYjmraPlvI/lj5HluIPvvIzlvIDlj5HkuIDmrKHvvIzlkIzml7blj5HluINpT1PjgIFBbmRyb2lk44CBSDXjgIHlvq7kv6HlsI/nqIvluo/jgIHmlK/ku5jlrp3lsI/nqIvluo/jgIHnmb7luqblsI/nqIvluo/jgIHlpLTmnaHlsI/nqIvluo/nrYk35aSn5bmz5Y+w44CCXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcInVuaS1ub3RpY2UtYmFyXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgc2Nyb2xsYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIHRleHQ6XG4gICAgICAgICAgICAgICAgICAgIFwiOOaciDEy5pelRENsb3Vk5Y+X6YKA5Y+C5YqgaVdFQuWzsOS8muWQju+8jDnmnIgxOeaXpURDbG91ZCBDRU8g546L5a6J5Zyo5Y2D5Lq65bCP56iL5bqP5bOw5Lya4oCU4oCU6KeB5a6e5aSn5Lya77yM5YGa5LqG5Li76aKY5Li644CKQXBw5ZKM5bCP56iL5bqP77yM6bG85LiO54aK5o6M5aaC5L2V5YW85b6X77yf44CL55qE5YiG5Lqr44CCXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXCJ1bmktc2VjdGlvblwiLCB7IGF0dHJzOiB7IHRpdGxlOiBcIuafpeeci+abtOWkmlwiLCB0eXBlOiBcImxpbmVcIiB9IH0pLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBbXCJleGFtcGxlLWJvZHlcIl0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJ1bmktbm90aWNlLWJhclwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHNob3dHZXRNb3JlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgc2luZ2xlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgdGV4dDpcbiAgICAgICAgICAgICAgICAgICAgXCLlubTmnKvlpKfnpLzvvJp1bmktYXBwMS40IOaWsOWinueZvuW6puOAgeaUr+S7mOWuneWwj+eoi+W6j+OAguaPkuS7tuW4guWcuumHjeejheS4iue6v++8gVwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjogeyBnZXRtb3JlOiBfdm0uZ2V0TW9yZSB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcInVuaS1ub3RpY2UtYmFyXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgc2hvd0dldE1vcmU6IHRydWUsXG4gICAgICAgICAgICAgICAgICBzaG93SWNvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIHNpbmdsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIG1vcmVUZXh0OiBcIuafpeeci+abtOWkmlwiLFxuICAgICAgICAgICAgICAgICAgdGV4dDpcbiAgICAgICAgICAgICAgICAgICAgXCLlubTmnKvlpKfnpLzvvJp1bmktYXBwMS40IOaWsOWinueZvuW6puOAgeaUr+S7mOWuneWwj+eoi+W6j+OAguaPkuS7tuW4guWcuumHjeejheS4iue6v++8gVwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjogeyBnZXRtb3JlOiBfdm0uZ2V0TW9yZSB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXCJ1bmktc2VjdGlvblwiLCB7IGF0dHJzOiB7IHRpdGxlOiBcIuS/ruaUueminOiJslwiLCB0eXBlOiBcImxpbmVcIiB9IH0pLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBbXCJleGFtcGxlLWJvZHlcIl0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJ1bmktbm90aWNlLWJhclwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHNpbmdsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIG1vcmVUZXh0OiBcIuafpeeci+abtOWkmlwiLFxuICAgICAgICAgICAgICAgICAgY29sb3I6IFwicmVkXCIsXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2VlZVwiLFxuICAgICAgICAgICAgICAgICAgdGV4dDpcbiAgICAgICAgICAgICAgICAgICAgXCJ1bmktYXBwIDEuNueJiOato+W8j+WPkeW4g++8jOW8gOWPkeS4gOasoe+8jOWQjOaXtuWPkeW4g2lPU+OAgUFuZHJvaWTjgIFINeOAgeW+ruS/oeWwj+eoi+W6j+OAgeaUr+S7mOWuneWwj+eoi+W6j+OAgeeZvuW6puWwj+eoi+W6j+OAgeWktOadoeWwj+eoi+W6j+etiTflpKflubPlj7DjgIJcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwidW5pLW5vdGljZS1iYXJcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBzaW5nbGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICBzaG93R2V0TW9yZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIG1vcmVUZXh0OiBcIuafpeeci+abtOWkmlwiLFxuICAgICAgICAgICAgICAgICAgbW9yZUNvbG9yOiBcImJsdWVcIixcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInJlZFwiLFxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNlZWVcIixcbiAgICAgICAgICAgICAgICAgIHRleHQ6XG4gICAgICAgICAgICAgICAgICAgIFwidW5pLWFwcCAxLjbniYjmraPlvI/lj5HluIPvvIzlvIDlj5HkuIDmrKHvvIzlkIzml7blj5HluINpT1PjgIFBbmRyb2lk44CBSDXjgIHlvq7kv6HlsI/nqIvluo/jgIHmlK/ku5jlrp3lsI/nqIvluo/jgIHnmb7luqblsI/nqIvluo/jgIHlpLTmnaHlsI/nqIvluo/nrYk35aSn5bmz5Y+w44CCXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uOiB7IGdldG1vcmU6IF92bS5nZXRNb3JlIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwidW5pLW5vdGljZS1iYXJcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBzaG93SWNvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcImJsdWVcIixcbiAgICAgICAgICAgICAgICAgIHRleHQ6XG4gICAgICAgICAgICAgICAgICAgIFwidW5pLWFwcCAxLjbniYjmraPlvI/lj5HluIPvvIzlvIDlj5HkuIDmrKHvvIzlkIzml7blj5HluINpT1PjgIFBbmRyb2lk44CBSDXjgIHlvq7kv6HlsI/nqIvluo/jgIHmlK/ku5jlrp3lsI/nqIvluo/jgIHnmb7luqblsI/nqIvluo/jgIHlpLTmnaHlsI/nqIvluo/nrYk35aSn5bmz5Y+w44CCXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXCJ1bmktc2VjdGlvblwiLCB7IGF0dHJzOiB7IHRpdGxlOiBcIuWFs+mXreaMiemSrlwiLCB0eXBlOiBcImxpbmVcIiB9IH0pLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBbXCJleGFtcGxlLWJvZHlcIl0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJ1bmktbm90aWNlLWJhclwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHNob3dDbG9zZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIHNpbmdsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIHRleHQ6IFwiSEJ1aWxkZXJYIDEuMOato+W8j+WPkeW4g++8gXVuaS1hcHDlrp7njrDph4znqIvnopHnqoHnoLTvvIFcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwidW5pLW5vdGljZS1iYXJcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBzaG93Q2xvc2U6IHRydWUsXG4gICAgICAgICAgICAgICAgICBzaG93SWNvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIG1vcmVUZXh0OiBcIuafpeeci+abtOWkmlwiLFxuICAgICAgICAgICAgICAgICAgdGV4dDogXCJIQnVpbGRlclggMS4w5q2j5byP5Y+R5biD77yBdW5pLWFwcOWunueOsOmHjOeoi+eikeeqgeegtO+8gVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX2MoXCJ1bmktbm90aWNlLWJhclwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHNob3dDbG9zZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIHNob3dJY29uOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgdGV4dDogXCJ1bmktYXBwIDEuNuWPkeW4g++8jOW8gOWPkeS4gOasoeOAgTfnq6/opobnm5bvvIFcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwidW5pLW5vdGljZS1iYXJcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBzaG93Q2xvc2U6IHRydWUsXG4gICAgICAgICAgICAgICAgICBzaG93SWNvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIHNpbmdsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIHRleHQ6XG4gICAgICAgICAgICAgICAgICAgIFwidW5pLWFwcCAxLjbniYjmraPlvI/lj5HluIPvvIzlvIDlj5HkuIDmrKHvvIzlkIzml7blj5HluIPliLBpT1PjgIFBbmRyb2lk44CBSDXjgIHlvq7kv6HlsI/nqIvluo/jgIHmlK/ku5jlrp3lsI/nqIvluo/jgIHnmb7luqblsI/nqIvluo/jgIHlpLTmnaHlsI/nqIvluo/nrYk35aSn5bmz5Y+w44CCXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3Z1ZS1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0wIS4vbm90aWNlLWJhci5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3Z1ZS1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0wIS4vbm90aWNlLWJhci5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiLCI8dGVtcGxhdGU+XHJcblx0PHZpZXc+XHJcblx0XHQ8dGV4dCBjbGFzcz1cImV4YW1wbGUtaW5mb1wiPumAmuWRiuagj+e7hOS7tuWkmueUqOS6juezu+e7n+mAmuefpe+8jOW5v+WRiumAmuefpeetieWcuuaZr++8jOWPr+iHquWumuS5ieWbvuagh++8jOminOiJsu+8jOWxleeOsOaWueW8j+etieOAgjwvdGV4dD5cclxuXHRcdDx1bmktc2VjdGlvbiB0aXRsZT1cIuWfuuacrOeUqOazlVwiIHR5cGU9XCJsaW5lXCI+PC91bmktc2VjdGlvbj5cclxuXHRcdDx2aWV3IGNsYXNzPVwiZXhhbXBsZS1ib2R5XCI+XHJcblx0XHRcdDx1bmktbm90aWNlLWJhciA6c2luZ2xlPVwidHJ1ZVwiIHRleHQ9XCJb5Y2V6KGMXSB1bmktYXBwIDEuNuWPkeW4g++8jOW8gOWPkeS4gOasoeOAgTfnq6/opobnm5bvvIFcIiAvPlxyXG5cdFx0XHQ8dW5pLW5vdGljZS1iYXIgdGV4dD1cIlvlpJrooYxdIHVuaS1hcHAgMS4254mI5q2j5byP5Y+R5biD77yM5byA5Y+R5LiA5qyh77yM5ZCM5pe25Y+R5biDaU9T44CBQW5kcm9pZOOAgUg144CB5b6u5L+h5bCP56iL5bqP44CB5pSv5LuY5a6d5bCP56iL5bqP44CB55m+5bqm5bCP56iL5bqP44CB5aS05p2h5bCP56iL5bqP562JN+Wkp+W5s+WPsOOAglwiIC8+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8dW5pLXNlY3Rpb24gdGl0bGU9XCLliqDlm77moIdcIiB0eXBlPVwibGluZVwiPjwvdW5pLXNlY3Rpb24+XHJcblx0XHQ8dmlldyBjbGFzcz1cImV4YW1wbGUtYm9keVwiPlxyXG5cdFx0XHQ8dW5pLW5vdGljZS1iYXIgOnNpbmdsZT1cInRydWVcIiA6c2hvdy1pY29uPVwidHJ1ZVwiIHRleHQ9XCJ1bmktYXBw6KGM5Lia5bOw5Lya6aKR6aKR5Lqu55u477yM5byA5Y+R6ICF5Y+N5ZON54Ot54OIIVwiIC8+XHJcblx0XHRcdDx1bmktbm90aWNlLWJhciA6c2hvdy1pY29uPVwidHJ1ZVwiIHRleHQ9XCI45pyIMTLml6VEQ2xvdWTlj5fpgoDlj4LliqBpV0VC5bOw5Lya5ZCO77yMOeaciDE55pelRENsb3VkIENFTyDnjovlronlnKjljYPkurrlsI/nqIvluo/ls7DkvJrigJTigJTop4Hlrp7lpKfkvJrvvIzlgZrkuobkuLvpopjkuLrjgIpBcHDlkozlsI/nqIvluo/vvIzpsbzkuI7nhormjozlpoLkvZXlhbzlvpfvvJ/jgIvnmoTliIbkuqvjgIJcIiAvPlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PCEtLSAjaWZuZGVmIE1QLUJBSURVIC0tPlxyXG5cdFx0PHVuaS1zZWN0aW9uIHRpdGxlPVwi5paH5a2X5rua5YqoXCIgdHlwZT1cImxpbmVcIj48L3VuaS1zZWN0aW9uPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJleGFtcGxlLWJvZHlcIj5cclxuXHRcdFx0PHVuaS1ub3RpY2UtYmFyIDpzY3JvbGxhYmxlPVwidHJ1ZVwiIDpzaW5nbGU9XCJ0cnVlXCIgdGV4dD1cInVuaS1hcHDooYzkuJrls7DkvJrpopHpopHkuq7nm7jvvIzlvIDlj5HogIXlj43lk43ng63ng4ghXCIgLz5cclxuXHRcdFx0PHVuaS1ub3RpY2UtYmFyIDpzaG93LWljb249XCJ0cnVlXCIgOnNjcm9sbGFibGU9XCJ0cnVlXCIgOnNpbmdsZT1cInRydWVcIiB0ZXh0PVwidW5pLWFwcCAxLjbniYjmraPlvI/lj5HluIPvvIzlvIDlj5HkuIDmrKHvvIzlkIzml7blj5HluINpT1PjgIFBbmRyb2lk44CBSDXjgIHlvq7kv6HlsI/nqIvluo/jgIHmlK/ku5jlrp3lsI/nqIvluo/jgIHnmb7luqblsI/nqIvluo/jgIHlpLTmnaHlsI/nqIvluo/nrYk35aSn5bmz5Y+w44CCXCIgLz5cclxuXHRcdFx0PHVuaS1ub3RpY2UtYmFyIDpzY3JvbGxhYmxlPVwidHJ1ZVwiIHRleHQ9XCI45pyIMTLml6VEQ2xvdWTlj5fpgoDlj4LliqBpV0VC5bOw5Lya5ZCO77yMOeaciDE55pelRENsb3VkIENFTyDnjovlronlnKjljYPkurrlsI/nqIvluo/ls7DkvJrigJTigJTop4Hlrp7lpKfkvJrvvIzlgZrkuobkuLvpopjkuLrjgIpBcHDlkozlsI/nqIvluo/vvIzpsbzkuI7nhormjozlpoLkvZXlhbzlvpfvvJ/jgIvnmoTliIbkuqvjgIJcIiAvPlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PCEtLSAjZW5kaWYgLS0+XHJcblx0XHQ8dW5pLXNlY3Rpb24gdGl0bGU9XCLmn6XnnIvmm7TlpJpcIiB0eXBlPVwibGluZVwiPjwvdW5pLXNlY3Rpb24+XHJcblx0XHQ8dmlldyBjbGFzcz1cImV4YW1wbGUtYm9keVwiPlxyXG5cdFx0XHQ8dW5pLW5vdGljZS1iYXIgOnNob3ctZ2V0LW1vcmU9XCJ0cnVlXCIgOnNpbmdsZT1cInRydWVcIiB0ZXh0PVwi5bm05pyr5aSn56S877yadW5pLWFwcDEuNCDmlrDlop7nmb7luqbjgIHmlK/ku5jlrp3lsI/nqIvluo/jgILmj5Lku7bluILlnLrph43no4XkuIrnur/vvIFcIiBAZ2V0bW9yZT1cImdldE1vcmVcIiAvPlxyXG5cdFx0XHQ8dW5pLW5vdGljZS1iYXIgOnNob3ctZ2V0LW1vcmU9XCJ0cnVlXCIgOnNob3ctaWNvbj1cInRydWVcIiA6c2luZ2xlPVwidHJ1ZVwiIG1vcmUtdGV4dD1cIuafpeeci+abtOWkmlwiIHRleHQ9XCLlubTmnKvlpKfnpLzvvJp1bmktYXBwMS40IOaWsOWinueZvuW6puOAgeaUr+S7mOWuneWwj+eoi+W6j+OAguaPkuS7tuW4guWcuumHjeejheS4iue6v++8gVwiIEBnZXRtb3JlPVwiZ2V0TW9yZVwiIC8+XHJcblx0XHQ8L3ZpZXc+XHJcblx0XHQ8dW5pLXNlY3Rpb24gdGl0bGU9XCLkv67mlLnpopzoibJcIiB0eXBlPVwibGluZVwiPjwvdW5pLXNlY3Rpb24+XHJcblx0XHQ8dmlldyBjbGFzcz1cImV4YW1wbGUtYm9keVwiPlxyXG5cdFx0XHQ8dW5pLW5vdGljZS1iYXIgOnNpbmdsZT1cInRydWVcIiBtb3JlLXRleHQ9XCLmn6XnnIvmm7TlpJpcIiBjb2xvcj1cInJlZFwiIGJhY2tncm91bmQtY29sb3I9XCIjZWVlXCIgdGV4dD1cInVuaS1hcHAgMS4254mI5q2j5byP5Y+R5biD77yM5byA5Y+R5LiA5qyh77yM5ZCM5pe25Y+R5biDaU9T44CBQW5kcm9pZOOAgUg144CB5b6u5L+h5bCP56iL5bqP44CB5pSv5LuY5a6d5bCP56iL5bqP44CB55m+5bqm5bCP56iL5bqP44CB5aS05p2h5bCP56iL5bqP562JN+Wkp+W5s+WPsOOAglwiIC8+XHJcblx0XHRcdDx1bmktbm90aWNlLWJhciA6c2luZ2xlPVwidHJ1ZVwiIDpzaG93LWdldC1tb3JlPVwidHJ1ZVwiIG1vcmUtdGV4dD1cIuafpeeci+abtOWkmlwiIG1vcmUtY29sb3I9XCJibHVlXCIgY29sb3I9XCJyZWRcIiBiYWNrZ3JvdW5kLWNvbG9yPVwiI2VlZVwiIHRleHQ9XCJ1bmktYXBwIDEuNueJiOato+W8j+WPkeW4g++8jOW8gOWPkeS4gOasoe+8jOWQjOaXtuWPkeW4g2lPU+OAgUFuZHJvaWTjgIFINeOAgeW+ruS/oeWwj+eoi+W6j+OAgeaUr+S7mOWuneWwj+eoi+W6j+OAgeeZvuW6puWwj+eoi+W6j+OAgeWktOadoeWwj+eoi+W6j+etiTflpKflubPlj7DjgIJcIiBAZ2V0bW9yZT1cImdldE1vcmVcIiAvPlxyXG5cdFx0XHQ8dW5pLW5vdGljZS1iYXIgOnNob3ctaWNvbj1cInRydWVcIiBjb2xvcj1cImJsdWVcIiB0ZXh0PVwidW5pLWFwcCAxLjbniYjmraPlvI/lj5HluIPvvIzlvIDlj5HkuIDmrKHvvIzlkIzml7blj5HluINpT1PjgIFBbmRyb2lk44CBSDXjgIHlvq7kv6HlsI/nqIvluo/jgIHmlK/ku5jlrp3lsI/nqIvluo/jgIHnmb7luqblsI/nqIvluo/jgIHlpLTmnaHlsI/nqIvluo/nrYk35aSn5bmz5Y+w44CCXCIgLz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDx1bmktc2VjdGlvbiB0aXRsZT1cIuWFs+mXreaMiemSrlwiIHR5cGU9XCJsaW5lXCI+PC91bmktc2VjdGlvbj5cclxuXHRcdDx2aWV3IGNsYXNzPVwiZXhhbXBsZS1ib2R5XCI+XHJcblx0XHRcdDx1bmktbm90aWNlLWJhciA6c2hvdy1jbG9zZT1cInRydWVcIiA6c2luZ2xlPVwidHJ1ZVwiIHRleHQ9XCJIQnVpbGRlclggMS4w5q2j5byP5Y+R5biD77yBdW5pLWFwcOWunueOsOmHjOeoi+eikeeqgeegtO+8gVwiIC8+XHJcblx0XHRcdDx1bmktbm90aWNlLWJhciA6c2hvdy1jbG9zZT1cInRydWVcIiA6c2hvdy1pY29uPVwidHJ1ZVwiIG1vcmUtdGV4dD1cIuafpeeci+abtOWkmlwiIHRleHQ9XCJIQnVpbGRlclggMS4w5q2j5byP5Y+R5biD77yBdW5pLWFwcOWunueOsOmHjOeoi+eikeeqgeegtO+8gVwiIC8+XHJcblx0XHRcdDx1bmktbm90aWNlLWJhciA6c2hvdy1jbG9zZT1cInRydWVcIiA6c2hvdy1pY29uPVwidHJ1ZVwiIHRleHQ9XCJ1bmktYXBwIDEuNuWPkeW4g++8jOW8gOWPkeS4gOasoeOAgTfnq6/opobnm5bvvIFcIiAvPlxyXG5cdFx0XHQ8dW5pLW5vdGljZS1iYXIgOnNob3ctY2xvc2U9XCJ0cnVlXCIgOnNob3ctaWNvbj1cInRydWVcIiA6c2luZ2xlPVwidHJ1ZVwiIHRleHQ9XCJ1bmktYXBwIDEuNueJiOato+W8j+WPkeW4g++8jOW8gOWPkeS4gOasoe+8jOWQjOaXtuWPkeW4g+WIsGlPU+OAgUFuZHJvaWTjgIFINeOAgeW+ruS/oeWwj+eoi+W6j+OAgeaUr+S7mOWuneWwj+eoi+W6j+OAgeeZvuW6puWwj+eoi+W6j+OAgeWktOadoeWwj+eoi+W6j+etiTflpKflubPlj7DjgIJcIiAvPlxyXG5cdFx0PC92aWV3PlxyXG5cdDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0aW1wb3J0IHVuaU5vdGljZUJhciBmcm9tICdAL2NvbXBvbmVudHMvdW5pLW5vdGljZS1iYXIvdW5pLW5vdGljZS1iYXIudnVlJ1xyXG5cdGltcG9ydCB1bmlTZWN0aW9uIGZyb20gJ0AvY29tcG9uZW50cy91bmktc2VjdGlvbi91bmktc2VjdGlvbi52dWUnXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0Y29tcG9uZW50czoge1xyXG5cdFx0XHR1bmlOb3RpY2VCYXIsXHJcblx0XHRcdHVuaVNlY3Rpb25cclxuXHRcdH0sXHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge31cclxuXHRcdH0sXHJcblx0XHRjcmVhdGVkKCkge30sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdGdldE1vcmUoKSB7XHJcblx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XHJcblx0XHRcdFx0XHR0aXRsZTogJ+eCueWHu+afpeeci+abtOWkmicsXHJcblx0XHRcdFx0XHRpY29uOiAnbm9uZSdcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuXHQvKiDlpLTmnaHlsI/nqIvluo/nu4Tku7blhoXkuI3og73lvJXlhaXlrZfkvZMgKi9cclxuXHQvKiAjaWZkZWYgTVAtVE9VVElBTyAqL1xyXG5cdEBmb250LWZhY2Uge1xyXG5cdFx0Zm9udC1mYW1pbHk6IHVuaWljb25zO1xyXG5cdFx0Zm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuXHRcdGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuXHRcdHNyYzogdXJsKCd+QC9zdGF0aWMvdW5pLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxuXHR9XHJcblxyXG5cdC8qICNlbmRpZiAqL1xyXG5cclxuXHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXHJcblx0cGFnZSB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmY0O1xyXG5cdFx0bWluLWhlaWdodDogMTAwJTtcclxuXHRcdGhlaWdodDogYXV0bztcclxuXHR9XHJcblxyXG5cdHZpZXcge1xyXG5cdFx0Zm9udC1zaXplOiAyOHJweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG5cdH1cclxuXHJcblx0LmV4YW1wbGUge1xyXG5cdFx0cGFkZGluZzogMCAzMHJweCAzMHJweDtcclxuXHR9XHJcblxyXG5cdC5leGFtcGxlLWluZm8ge1xyXG5cdFx0cGFkZGluZzogMzBycHg7XHJcblx0XHRjb2xvcjogIzNiNDE0NDtcclxuXHRcdGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcblx0fVxyXG5cclxuXHQuZXhhbXBsZS1ib2R5IHtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRmbGV4LXdyYXA6IHdyYXA7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdHBhZGRpbmc6IDA7XHJcblx0XHRmb250LXNpemU6IDE0cnB4O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuXHR9XHJcblxyXG5cdC8qICNlbmRpZiAqL1xyXG5cdC5leGFtcGxlIHtcclxuXHRcdHBhZGRpbmc6IDAgMzBycHg7XHJcblx0fVxyXG5cclxuXHQuZXhhbXBsZS1pbmZvIHtcclxuXHRcdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0LyogI2VuZGlmICovXHJcblx0XHRwYWRkaW5nOiAzMHJweDtcclxuXHRcdGNvbG9yOiAjM2I0MTQ0O1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuXHRcdGZvbnQtc2l6ZTogMzBycHg7XHJcblx0fVxyXG5cclxuXHQuZXhhbXBsZS1pbmZvLXRleHQge1xyXG5cdFx0Zm9udC1zaXplOiAyOHJweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAzNnJweDtcclxuXHR9XHJcblxyXG5cclxuXHQuZXhhbXBsZS1ib2R5IHtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRwYWRkaW5nOiAzMHJweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcblx0fVxyXG5cclxuXHQud29yZC1idG4td2hpdGUge1xyXG5cdFx0Zm9udC1zaXplOiAxOHB4O1xyXG5cdFx0Y29sb3I6ICNGRkZGRkY7XHJcblx0fVxyXG5cclxuXHQud29yZC1idG4ge1xyXG5cdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDZweDtcclxuXHRcdGhlaWdodDogNDhweDtcclxuXHRcdG1hcmdpbjogMTVweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICMwMDdBRkY7XHJcblx0fVxyXG5cclxuXHQud29yZC1idG4tLWhvdmVyIHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICM0Y2EyZmY7XHJcblx0fVxyXG5cclxuXHJcblx0LmV4YW1wbGUtYm9keSB7XHJcblx0XHRwYWRkaW5nOiA1cnB4IDA7XHJcblx0XHRwYWRkaW5nLXRvcDogMjBycHg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xyXG5cdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHQvKiAjZW5kaWYgKi9cclxuXHR9XHJcbjwvc3R5bGU+IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi91bmktbm90aWNlLWJhci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2Y4ODY5ZWQmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdW5pLW5vdGljZS1iYXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi91bmktbm90aWNlLWJhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoKSB7XG4gIGlmKCF0aGlzLm9wdGlvbnMuc3R5bGUpe1xuICAgIHRoaXMub3B0aW9ucy5zdHlsZSA9IHt9XG59XG5pZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUgJiYgVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKXtcbiAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXywgdGhpcy5vcHRpb25zLnN0eWxlKVxufVxuaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKXtcbiAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL3VuaS1ub3RpY2UtYmFyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTdmODg2OWVkJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL3VuaS1ub3RpY2UtYmFyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTdmODg2OWVkJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiKS5kZWZhdWx0KVxuICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjdmODg2OWVkXCIsXG4gIFwiNGJmMzVmZjZcIlxuICBcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ3ZWIxL3VuaWFwcC9oZWxsby9jb21wb25lbnRzL3VuaS1ub3RpY2UtYmFyL3VuaS1ub3RpY2UtYmFyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS5yZWN5Y2xlLmpzIS4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC0wIS4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3Z1ZS1sb2FkZXIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VuaS1ub3RpY2UtYmFyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03Zjg4NjllZCZzY29wZWQ9dHJ1ZSZcIiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX3ZtLnNob3dcbiAgICA/IF9jKFxuICAgICAgICBcInZpZXdcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJ1bmktbm90aWNlYmFyXCJdLFxuICAgICAgICAgIHN0eWxlOiB7IGJhY2tncm91bmRDb2xvcjogX3ZtLmJhY2tncm91bmRDb2xvciB9LFxuICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0ub25DbGljayB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfdm0uc2hvd0Nsb3NlID09PSB0cnVlIHx8IF92bS5zaG93Q2xvc2UgPT09IFwidHJ1ZVwiXG4gICAgICAgICAgICA/IF9jKFwidW5pLWljb25zXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1widW5pLW5vdGljZWJhci1jbG9zZVwiXSxcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImNsb3NlZmlsbFwiLCBjb2xvcjogX3ZtLmNvbG9yLCBzaXplOiBcIjEyXCIgfSxcbiAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmNsb3NlIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLnNob3dJY29uID09PSB0cnVlIHx8IF92bS5zaG93SWNvbiA9PT0gXCJ0cnVlXCJcbiAgICAgICAgICAgID8gX2MoXCJ1bmktaWNvbnNcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJ1bmktbm90aWNlYmFyLWljb25cIl0sXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJzb3VuZFwiLCBjb2xvcjogX3ZtLmNvbG9yLCBzaXplOiBcIjE0XCIgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICByZWY6IFwidGV4dEJveFwiLFxuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1widW5pLW5vdGljZWJhcl9fY29udGVudC13cmFwcGVyXCJdLFxuICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgIFwidW5pLW5vdGljZWJhcl9fY29udGVudC13cmFwcGVyLS1zY3JvbGxhYmxlXCI6IF92bS5zY3JvbGxhYmxlLFxuICAgICAgICAgICAgICAgIFwidW5pLW5vdGljZWJhcl9fY29udGVudC13cmFwcGVyLS1zaW5nbGVcIjpcbiAgICAgICAgICAgICAgICAgICFfdm0uc2Nyb2xsYWJsZSAmJiAoX3ZtLnNpbmdsZSB8fCBfdm0ubW9yZVRleHQpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJ1bmktbm90aWNlYmFyX19jb250ZW50XCJdLFxuICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ1bmktbm90aWNlYmFyX19jb250ZW50LS1zY3JvbGxhYmxlXCI6IF92bS5zY3JvbGxhYmxlLFxuICAgICAgICAgICAgICAgICAgICBcInVuaS1ub3RpY2ViYXJfX2NvbnRlbnQtLXNpbmdsZVwiOlxuICAgICAgICAgICAgICAgICAgICAgICFfdm0uc2Nyb2xsYWJsZSAmJiAoX3ZtLnNpbmdsZSB8fCBfdm0ubW9yZVRleHQpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IF92bS5lbElkQm94IH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInUtdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgcmVmOiBcImFuaW1hdGlvbkVsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJ1bmktbm90aWNlYmFyX19jb250ZW50LXRleHRcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidW5pLW5vdGljZWJhcl9fY29udGVudC10ZXh0LS1zY3JvbGxhYmxlXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zY3JvbGxhYmxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ1bmktbm90aWNlYmFyX19jb250ZW50LXRleHQtLXNpbmdsZVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAhX3ZtLnNjcm9sbGFibGUgJiYgKF92bS5zaW5nbGUgfHwgX3ZtLm1vcmVUZXh0KVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBfdm0uY29sb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogX3ZtLndyYXBXaWR0aCArIFwicHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiBfdm0uYW5pbWF0aW9uRHVyYXRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBcIi13ZWJraXQtYW5pbWF0aW9uRHVyYXRpb25cIjogX3ZtLmFuaW1hdGlvbkR1cmF0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uUGxheVN0YXRlOiBfdm0ud2Vidmlld0hpZGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInBhdXNlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLmFuaW1hdGlvblBsYXlTdGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiLXdlYmtpdC1hbmltYXRpb25QbGF5U3RhdGVcIjogX3ZtLndlYnZpZXdIaWRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJwYXVzZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5hbmltYXRpb25QbGF5U3RhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25EZWxheTogX3ZtLmFuaW1hdGlvbkRlbGF5LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCItd2Via2l0LWFuaW1hdGlvbkRlbGF5XCI6IF92bS5hbmltYXRpb25EZWxheVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IF92bS5lbElkIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLnRleHQpKV1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5zaG93R2V0TW9yZSA9PT0gdHJ1ZSB8fCBfdm0uc2hvd0dldE1vcmUgPT09IFwidHJ1ZVwiXG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJ1bmktbm90aWNlYmFyX19tb3JlXCJdLFxuICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5jbGlja01vcmUgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX3ZtLm1vcmVUZXh0XG4gICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInUtdGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1widW5pLW5vdGljZWJhcl9fbW9yZS10ZXh0XCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogeyBjb2xvcjogX3ZtLm1vcmVDb2xvciB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLm1vcmVUZXh0KSldXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ1bmktaWNvbnNcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiYXJyb3dyaWdodFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBfdm0ubW9yZUNvbG9yLFxuICAgICAgICAgICAgICAgICAgICAgIHNpemU6IFwiMTRcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICA6IF92bS5fZSgpXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvdnVlLWxvYWRlci9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLW5vdGljZS1iYXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy92dWUtbG9hZGVyL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktbm90aWNlLWJhci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCI8dGVtcGxhdGU+XHJcblx0PHZpZXcgdi1pZj1cInNob3dcIiBjbGFzcz1cInVuaS1ub3RpY2ViYXJcIiA6c3R5bGU9XCJ7IGJhY2tncm91bmRDb2xvcjogYmFja2dyb3VuZENvbG9yIH1cIiBAY2xpY2s9XCJvbkNsaWNrXCI+XHJcblx0XHQ8IS0tICNpZmRlZiBNUC1BTElQQVkgLS0+XHJcblx0XHQ8dmlldyB2LWlmPVwic2hvd0Nsb3NlID09PSB0cnVlIHx8IHNob3dDbG9zZSA9PT0gJ3RydWUnXCIgY2xhc3M9XCJ1bmktbm90aWNlYmFyLWNsb3NlXCIgQGNsaWNrPVwiY2xvc2VcIj5cclxuXHRcdFx0PHVuaS1pY29ucyB0eXBlPVwiY2xvc2VmaWxsXCIgOmNvbG9yPVwiY29sb3JcIiBzaXplPVwiMTJcIiAvPlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PHZpZXcgdi1pZj1cInNob3dJY29uID09PSB0cnVlIHx8IHNob3dJY29uID09PSAndHJ1ZSdcIiBjbGFzcz1cInVuaS1ub3RpY2ViYXItaWNvblwiPlxyXG5cdFx0XHQ8dW5pLWljb25zIHR5cGU9XCJzb3VuZFwiIDpjb2xvcj1cImNvbG9yXCIgc2l6ZT1cIjE0XCIgLz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDwhLS0gI2VuZGlmIC0tPlxyXG5cdFx0PCEtLSAjaWZuZGVmIE1QLUFMSVBBWSAtLT5cclxuXHRcdDx1bmktaWNvbnMgdi1pZj1cInNob3dDbG9zZSA9PT0gdHJ1ZSB8fCBzaG93Q2xvc2UgPT09ICd0cnVlJ1wiIGNsYXNzPVwidW5pLW5vdGljZWJhci1jbG9zZVwiIHR5cGU9XCJjbG9zZWZpbGxcIiA6Y29sb3I9XCJjb2xvclwiIHNpemU9XCIxMlwiIEBjbGljaz1cImNsb3NlXCIgLz5cclxuXHRcdDx1bmktaWNvbnMgdi1pZj1cInNob3dJY29uID09PSB0cnVlIHx8IHNob3dJY29uID09PSAndHJ1ZSdcIiBjbGFzcz1cInVuaS1ub3RpY2ViYXItaWNvblwiIHR5cGU9XCJzb3VuZFwiIDpjb2xvcj1cImNvbG9yXCIgc2l6ZT1cIjE0XCIgLz5cclxuXHRcdDwhLS0gI2VuZGlmIC0tPlxyXG5cdFx0PHZpZXcgcmVmPVwidGV4dEJveFwiIGNsYXNzPVwidW5pLW5vdGljZWJhcl9fY29udGVudC13cmFwcGVyXCIgOmNsYXNzPVwieyd1bmktbm90aWNlYmFyX19jb250ZW50LXdyYXBwZXItLXNjcm9sbGFibGUnOnNjcm9sbGFibGUsICd1bmktbm90aWNlYmFyX19jb250ZW50LXdyYXBwZXItLXNpbmdsZSc6IXNjcm9sbGFibGUgJiYgKHNpbmdsZSB8fCBtb3JlVGV4dCl9XCI+XHJcblx0XHRcdDx2aWV3IDppZD1cImVsSWRCb3hcIiBjbGFzcz1cInVuaS1ub3RpY2ViYXJfX2NvbnRlbnRcIiA6Y2xhc3M9XCJ7J3VuaS1ub3RpY2ViYXJfX2NvbnRlbnQtLXNjcm9sbGFibGUnOnNjcm9sbGFibGUsICd1bmktbm90aWNlYmFyX19jb250ZW50LS1zaW5nbGUnOiFzY3JvbGxhYmxlICYmIChzaW5nbGUgfHwgbW9yZVRleHQpfVwiPlxyXG5cdFx0XHRcdDx0ZXh0IDppZD1cImVsSWRcIiByZWY9XCJhbmltYXRpb25FbGVcIiBjbGFzcz1cInVuaS1ub3RpY2ViYXJfX2NvbnRlbnQtdGV4dFwiIDpjbGFzcz1cInsndW5pLW5vdGljZWJhcl9fY29udGVudC10ZXh0LS1zY3JvbGxhYmxlJzpzY3JvbGxhYmxlLCd1bmktbm90aWNlYmFyX19jb250ZW50LXRleHQtLXNpbmdsZSc6IXNjcm9sbGFibGUgJiYgKHNpbmdsZSB8fCBtb3JlVGV4dCl9XCIgOnN0eWxlPVwie2NvbG9yOmNvbG9yLCB3aWR0aDp3cmFwV2lkdGgrJ3B4JywgJ2FuaW1hdGlvbkR1cmF0aW9uJzogYW5pbWF0aW9uRHVyYXRpb24sICctd2Via2l0LWFuaW1hdGlvbkR1cmF0aW9uJzogYW5pbWF0aW9uRHVyYXRpb24gLGFuaW1hdGlvblBsYXlTdGF0ZTogd2Vidmlld0hpZGU/J3BhdXNlZCc6YW5pbWF0aW9uUGxheVN0YXRlLCctd2Via2l0LWFuaW1hdGlvblBsYXlTdGF0ZSc6d2Vidmlld0hpZGU/J3BhdXNlZCc6YW5pbWF0aW9uUGxheVN0YXRlLCBhbmltYXRpb25EZWxheTogYW5pbWF0aW9uRGVsYXksICctd2Via2l0LWFuaW1hdGlvbkRlbGF5JzphbmltYXRpb25EZWxheX1cIj57e3RleHR9fTwvdGV4dD5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PHZpZXcgdi1pZj1cInNob3dHZXRNb3JlID09PSB0cnVlIHx8IHNob3dHZXRNb3JlID09PSAndHJ1ZSdcIiBjbGFzcz1cInVuaS1ub3RpY2ViYXJfX21vcmVcIiBAY2xpY2s9XCJjbGlja01vcmVcIj5cclxuXHRcdFx0PHRleHQgdi1pZj1cIm1vcmVUZXh0XCIgOnN0eWxlPVwieyBjb2xvcjogbW9yZUNvbG9yIH1cIiBjbGFzcz1cInVuaS1ub3RpY2ViYXJfX21vcmUtdGV4dFwiPnt7IG1vcmVUZXh0IH19PC90ZXh0PlxyXG5cdFx0XHQ8dW5pLWljb25zIHR5cGU9XCJhcnJvd3JpZ2h0XCIgOmNvbG9yPVwibW9yZUNvbG9yXCIgc2l6ZT1cIjE0XCIgLz5cclxuXHRcdDwvdmlldz5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCB1bmlJY29ucyBmcm9tICcuLi91bmktaWNvbnMvdW5pLWljb25zLnZ1ZSdcclxuXHQvLyAjaWZkZWYgQVBQLU5WVUVcclxuXHRjb25zdCBkb20gPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ2RvbScpO1xyXG5cdGNvbnN0IGFuaW1hdGlvbiA9IHdlZXgucmVxdWlyZU1vZHVsZSgnYW5pbWF0aW9uJyk7XHJcblx0Ly8gI2VuZGlmXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0bmFtZTogJ1VuaU5vdGljZUJhcicsXHJcblx0XHRjb21wb25lbnRzOiB7XHJcblx0XHRcdHVuaUljb25zXHJcblx0XHR9LFxyXG5cdFx0cHJvcHM6IHtcclxuXHRcdFx0dGV4dDoge1xyXG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0XHRkZWZhdWx0OiAnJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRtb3JlVGV4dDoge1xyXG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcclxuXHRcdFx0XHRkZWZhdWx0OiAnJ1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IHtcclxuXHRcdFx0XHR0eXBlOiBTdHJpbmcsXHJcblx0XHRcdFx0ZGVmYXVsdDogJyNmZmZiZTgnXHJcblx0XHRcdH0sXHJcblx0XHRcdHNwZWVkOiB7XHJcblx0XHRcdFx0Ly8g6buY6K6kMXPmu5rliqgxMDBweFxyXG5cdFx0XHRcdHR5cGU6IFtTdHJpbmcsIE51bWJlcl0sXHJcblx0XHRcdFx0ZGVmYXVsdDogMTAwXHJcblx0XHRcdH0sXHJcblx0XHRcdGNvbG9yOiB7XHJcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0XHRcdGRlZmF1bHQ6ICcjZGU4YzE3J1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRtb3JlQ29sb3I6IHtcclxuXHRcdFx0XHR0eXBlOiBTdHJpbmcsXHJcblx0XHRcdFx0ZGVmYXVsdDogJyM5OTk5OTknXHJcblx0XHRcdH0sXHJcblx0XHRcdHNpbmdsZToge1xyXG5cdFx0XHRcdC8vIOaYr+WQpuWNleihjFxyXG5cdFx0XHRcdHR5cGU6IFtTdHJpbmcsIEJvb2xlYW5dLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IGZhbHNlXHJcblx0XHRcdH0sXHJcblx0XHRcdHNjcm9sbGFibGU6IHtcclxuXHRcdFx0XHQvLyDmmK/lkKbmu5rliqjvvIzmt7vliqDlkI7mjqfliLbljZXooYzmlYjmnpzlj5bmtohcclxuXHRcdFx0XHR0eXBlOiBbU3RyaW5nLCBCb29sZWFuXSxcclxuXHRcdFx0XHRkZWZhdWx0OiBmYWxzZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzaG93SWNvbjoge1xyXG5cdFx0XHRcdC8vIOaYr+WQpuaYvuekuuW3puS+p2ljb25cclxuXHRcdFx0XHR0eXBlOiBbU3RyaW5nLCBCb29sZWFuXSxcclxuXHRcdFx0XHRkZWZhdWx0OiBmYWxzZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzaG93R2V0TW9yZToge1xyXG5cdFx0XHRcdC8vIOaYr+WQpuaYvuekuuWPs+S+p+afpeeci+abtOWkmlxyXG5cdFx0XHRcdHR5cGU6IFtTdHJpbmcsIEJvb2xlYW5dLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IGZhbHNlXHJcblx0XHRcdH0sXHJcblx0XHRcdHNob3dDbG9zZToge1xyXG5cdFx0XHRcdC8vIOaYr+WQpuaYvuekuuW3puS+p+WFs+mXreaMiemSrlxyXG5cdFx0XHRcdHR5cGU6IFtTdHJpbmcsIEJvb2xlYW5dLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IGZhbHNlXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRjb25zdCBlbElkID0gYFVuaV8ke01hdGguY2VpbChNYXRoLnJhbmRvbSgpICogMTBlNSkudG9TdHJpbmcoMzYpfWBcclxuXHRcdFx0Y29uc3QgZWxJZEJveCA9IGBVbmlfJHtNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDEwZTUpLnRvU3RyaW5nKDM2KX1gXHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0dGV4dFdpZHRoOiAwLFxyXG5cdFx0XHRcdGJveFdpZHRoOiAwLFxyXG5cdFx0XHRcdHdyYXBXaWR0aDogJycsXHJcblx0XHRcdFx0d2Vidmlld0hpZGU6IGZhbHNlLFxyXG5cdFx0XHRcdC8vICNpZmRlZiBBUFAtTlZVRVxyXG5cdFx0XHRcdHN0b3BBbmltYXRpb246IGZhbHNlLFxyXG5cdFx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHRcdGVsSWQ6IGVsSWQsXHJcblx0XHRcdFx0ZWxJZEJveDogZWxJZEJveCxcclxuXHRcdFx0XHRzaG93OiB0cnVlLFxyXG5cdFx0XHRcdGFuaW1hdGlvbkR1cmF0aW9uOiAnbm9uZScsXHJcblx0XHRcdFx0YW5pbWF0aW9uUGxheVN0YXRlOiAncGF1c2VkJyxcclxuXHRcdFx0XHRhbmltYXRpb25EZWxheTogJzBzJ1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0bW91bnRlZCgpIHtcclxuXHRcdFx0Ly8gI2lmZGVmIEFQUC1QTFVTXHJcblx0XHRcdHZhciBwYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpO1xyXG5cdFx0XHR2YXIgcGFnZSA9IHBhZ2VzW3BhZ2VzLmxlbmd0aCAtIDFdO1xyXG5cdFx0XHR2YXIgY3VycmVudFdlYnZpZXcgPSBwYWdlLiRnZXRBcHBXZWJ2aWV3KCk7XHJcblx0XHRcdGN1cnJlbnRXZWJ2aWV3LmFkZEV2ZW50TGlzdGVuZXIoJ2hpZGUnLCAoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy53ZWJ2aWV3SGlkZSA9IHRydWVcclxuXHRcdFx0fSlcclxuXHRcdFx0Y3VycmVudFdlYnZpZXcuYWRkRXZlbnRMaXN0ZW5lcignc2hvdycsICgpID0+IHtcclxuXHRcdFx0XHR0aGlzLndlYnZpZXdIaWRlID0gZmFsc2VcclxuXHRcdFx0fSlcclxuXHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdHRoaXMuJG5leHRUaWNrKCgpID0+IHtcclxuXHRcdFx0XHR0aGlzLmluaXRTaXplKClcclxuXHRcdFx0fSlcclxuXHRcdH0sXHJcblx0XHQvLyAjaWZkZWYgQVBQLU5WVUVcclxuXHRcdGJlZm9yZURlc3Ryb3koKSB7XHJcblx0XHRcdHRoaXMuc3RvcEFuaW1hdGlvbiA9IHRydWVcclxuXHRcdH0sXHJcblx0XHQvLyAjZW5kaWZcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0aW5pdFNpemUoKSB7XHJcblx0XHRcdFx0aWYgKHRoaXMuc2Nyb2xsYWJsZSkge1xyXG5cdFx0XHRcdFx0Ly8gI2lmbmRlZiBBUFAtTlZVRVxyXG5cdFx0XHRcdFx0bGV0IHF1ZXJ5ID0gW10sXHJcblx0XHRcdFx0XHRcdGJveFdpZHRoID0gMCxcclxuXHRcdFx0XHRcdFx0dGV4dFdpZHRoID0gMDtcclxuXHRcdFx0XHRcdGxldCB0ZXh0UXVlcnkgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRcdFx0XHRcdHVuaS5jcmVhdGVTZWxlY3RvclF1ZXJ5KClcclxuXHRcdFx0XHRcdFx0XHQuaW4odGhpcylcclxuXHRcdFx0XHRcdFx0XHQuc2VsZWN0KGAjJHt0aGlzLmVsSWR9YClcclxuXHRcdFx0XHRcdFx0XHQuYm91bmRpbmdDbGllbnRSZWN0KClcclxuXHRcdFx0XHRcdFx0XHQuZXhlYyhyZXQgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy50ZXh0V2lkdGggPSByZXRbMF0ud2lkdGhcclxuXHRcdFx0XHRcdFx0XHRcdHJlc29sdmUoKVxyXG5cdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0bGV0IGJveFF1ZXJ5ID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHRcdFx0XHR1bmkuY3JlYXRlU2VsZWN0b3JRdWVyeSgpXHJcblx0XHRcdFx0XHRcdFx0LmluKHRoaXMpXHJcblx0XHRcdFx0XHRcdFx0LnNlbGVjdChgIyR7dGhpcy5lbElkQm94fWApXHJcblx0XHRcdFx0XHRcdFx0LmJvdW5kaW5nQ2xpZW50UmVjdCgpXHJcblx0XHRcdFx0XHRcdFx0LmV4ZWMocmV0ID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuYm94V2lkdGggPSByZXRbMF0ud2lkdGhcclxuXHRcdFx0XHRcdFx0XHRcdHJlc29sdmUoKVxyXG5cdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0cXVlcnkucHVzaCh0ZXh0UXVlcnkpXHJcblx0XHRcdFx0XHRxdWVyeS5wdXNoKGJveFF1ZXJ5KVxyXG5cdFx0XHRcdFx0UHJvbWlzZS5hbGwocXVlcnkpLnRoZW4oKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmFuaW1hdGlvbkR1cmF0aW9uID0gYCR7dGhpcy50ZXh0V2lkdGggLyB0aGlzLnNwZWVkfXNgXHJcblx0XHRcdFx0XHRcdHRoaXMuYW5pbWF0aW9uRGVsYXkgPSBgLSR7dGhpcy5ib3hXaWR0aCAvIHRoaXMuc3BlZWR9c2BcclxuXHRcdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5hbmltYXRpb25QbGF5U3RhdGUgPSAncnVubmluZydcclxuXHRcdFx0XHRcdFx0fSwgMTAwMClcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0XHRcdC8vICNpZmRlZiBBUFAtTlZVRVxyXG5cdFx0XHRcdFx0ZG9tLmdldENvbXBvbmVudFJlY3QodGhpcy4kcmVmc1snYW5pbWF0aW9uRWxlJ10sIChyZXMpID0+IHtcclxuXHRcdFx0XHRcdFx0bGV0IHdpbldpZHRoID0gdW5pLmdldFN5c3RlbUluZm9TeW5jKCkud2luZG93V2lkdGhcclxuXHRcdFx0XHRcdFx0dGhpcy50ZXh0V2lkdGggPSByZXMuc2l6ZS53aWR0aFxyXG5cdFx0XHRcdFx0XHRhbmltYXRpb24udHJhbnNpdGlvbih0aGlzLiRyZWZzWydhbmltYXRpb25FbGUnXSwge1xyXG5cdFx0XHRcdFx0XHRcdHN0eWxlczoge1xyXG5cdFx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgtJHt3aW5XaWR0aH1weClgXHJcblx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogMCxcclxuXHRcdFx0XHRcdFx0XHR0aW1pbmdGdW5jdGlvbjogJ2xpbmVhcicsXHJcblx0XHRcdFx0XHRcdFx0ZGVsYXk6IDBcclxuXHRcdFx0XHRcdFx0fSwgKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGlmICghdGhpcy5zdG9wQW5pbWF0aW9uKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRhbmltYXRpb24udHJhbnNpdGlvbih0aGlzLiRyZWZzWydhbmltYXRpb25FbGUnXSwge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdHlsZXM6IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKC0ke3RoaXMudGV4dFdpZHRofXB4KWBcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGltaW5nRnVuY3Rpb246ICdsaW5lYXInLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogKHRoaXMudGV4dFdpZHRoIC0gd2luV2lkdGgpIC8gdGhpcy5zcGVlZCAqIDEwMDAsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGRlbGF5OiAxMDAwXHJcblx0XHRcdFx0XHRcdFx0XHR9LCAoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGlmICghdGhpcy5zdG9wQW5pbWF0aW9uKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5sb29wQW5pbWF0aW9uKClcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Ly8gI2lmZGVmIEFQUC1OVlVFXHJcblx0XHRcdFx0aWYgKCF0aGlzLnNjcm9sbGFibGUgJiYgKHRoaXMuc2luZ2xlIHx8IHRoaXMubW9yZVRleHQpKSB7XHJcblx0XHRcdFx0XHRkb20uZ2V0Q29tcG9uZW50UmVjdCh0aGlzLiRyZWZzWyd0ZXh0Qm94J10sIChyZXMpID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy53cmFwV2lkdGggPSByZXMuc2l6ZS53aWR0aFxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdH0sXHJcblx0XHRcdGxvb3BBbmltYXRpb24oKSB7XHJcblx0XHRcdFx0Ly8gI2lmZGVmIEFQUC1OVlVFXHJcblx0XHRcdFx0YW5pbWF0aW9uLnRyYW5zaXRpb24odGhpcy4kcmVmc1snYW5pbWF0aW9uRWxlJ10sIHtcclxuXHRcdFx0XHRcdHN0eWxlczoge1xyXG5cdFx0XHRcdFx0XHR0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKDBweClgXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0ZHVyYXRpb246IDBcclxuXHRcdFx0XHR9LCAoKSA9PiB7XHJcblx0XHRcdFx0XHRpZiAoIXRoaXMuc3RvcEFuaW1hdGlvbikge1xyXG5cdFx0XHRcdFx0XHRhbmltYXRpb24udHJhbnNpdGlvbih0aGlzLiRyZWZzWydhbmltYXRpb25FbGUnXSwge1xyXG5cdFx0XHRcdFx0XHRcdHN0eWxlczoge1xyXG5cdFx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgtJHt0aGlzLnRleHRXaWR0aH1weClgXHJcblx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogdGhpcy50ZXh0V2lkdGggLyB0aGlzLnNwZWVkICogMTAwMCxcclxuXHRcdFx0XHRcdFx0XHR0aW1pbmdGdW5jdGlvbjogJ2xpbmVhcicsXHJcblx0XHRcdFx0XHRcdFx0ZGVsYXk6IDBcclxuXHRcdFx0XHRcdFx0fSwgKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGlmICghdGhpcy5zdG9wQW5pbWF0aW9uKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLmxvb3BBbmltYXRpb24oKVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdH0sXHJcblx0XHRcdGNsaWNrTW9yZSgpIHtcclxuXHRcdFx0XHR0aGlzLiRlbWl0KCdnZXRtb3JlJylcclxuXHRcdFx0fSxcclxuXHRcdFx0Y2xvc2UoKSB7XHJcblx0XHRcdFx0dGhpcy5zaG93ID0gZmFsc2U7XHJcblx0XHRcdFx0dGhpcy4kZW1pdCgnY2xvc2UnKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRvbkNsaWNrKCkge1xyXG5cdFx0XHRcdHRoaXMuJGVtaXQoJ2NsaWNrJylcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG5cdC51bmktbm90aWNlYmFyIHtcclxuXHRcdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0XHQvKiAjZW5kaWYgKi9cclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0cGFkZGluZzogNnB4IDEycHg7XHJcblx0XHRtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cdH1cclxuXHJcblx0LnVuaS1ub3RpY2ViYXItY2xvc2Uge1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiA1cHg7XHJcblx0fVxyXG5cclxuXHQudW5pLW5vdGljZWJhci1pY29uIHtcclxuXHRcdG1hcmdpbi1yaWdodDogNXB4O1xyXG5cdH1cclxuXHJcblx0LnVuaS1ub3RpY2ViYXJfX2NvbnRlbnQtd3JhcHBlciB7XHJcblx0XHRmbGV4OiAxO1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0fVxyXG5cclxuXHQudW5pLW5vdGljZWJhcl9fY29udGVudC13cmFwcGVyLS1zaW5nbGUge1xyXG5cdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xyXG5cdFx0bGluZS1oZWlnaHQ6IDE4cHg7XHJcblx0XHQvKiAjZW5kaWYgKi9cclxuXHR9XHJcblxyXG5cdC51bmktbm90aWNlYmFyX19jb250ZW50LXdyYXBwZXItLXNpbmdsZSxcclxuXHQudW5pLW5vdGljZWJhcl9fY29udGVudC13cmFwcGVyLS1zY3JvbGxhYmxlIHtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0fVxyXG5cclxuXHQudW5pLW5vdGljZWJhcl9fY29udGVudC0tc2Nyb2xsYWJsZSB7XHJcblx0XHQvKiAjaWZkZWYgQVBQLU5WVUUgKi9cclxuXHRcdGZsZXg6IDA7XHJcblx0XHQvKiAjZW5kaWYgKi9cclxuXHRcdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cclxuXHRcdGZsZXg6IDE7XHJcblx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0XHQvKiAjZW5kaWYgKi9cclxuXHR9XHJcblxyXG5cdC51bmktbm90aWNlYmFyX19jb250ZW50LS1zaW5nbGUge1xyXG5cdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZsZXg6IG5vbmU7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0LyogI2VuZGlmICovXHJcblx0fVxyXG5cclxuXHQudW5pLW5vdGljZWJhcl9fY29udGVudC10ZXh0IHtcclxuXHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG5cdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xyXG5cdFx0d29yZC1icmVhazogYnJlYWstYWxsO1xyXG5cdFx0LyogI2VuZGlmICovXHJcblx0fVxyXG5cclxuXHQudW5pLW5vdGljZWJhcl9fY29udGVudC10ZXh0LS1zaW5nbGUge1xyXG5cdFx0LyogI2lmZGVmIEFQUC1OVlVFICovXHJcblx0XHRsaW5lczogMTtcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xyXG5cdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHR3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG5cdFx0LyogI2VuZGlmICovXHJcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcblx0fVxyXG5cclxuXHQudW5pLW5vdGljZWJhcl9fY29udGVudC10ZXh0LS1zY3JvbGxhYmxlIHtcclxuXHRcdC8qICNpZmRlZiBBUFAtTlZVRSAqL1xyXG5cdFx0bGluZXM6IDE7XHJcblx0XHRwYWRkaW5nLWxlZnQ6IDc1MHJweDtcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xyXG5cdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdFx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuXHRcdHBhZGRpbmctbGVmdDogMTAwJTtcclxuXHRcdGFuaW1hdGlvbjogbm90aWNlIDEwcyAwcyBsaW5lYXIgaW5maW5pdGUgYm90aDtcclxuXHRcdGFuaW1hdGlvbi1wbGF5LXN0YXRlOiBwYXVzZWQ7XHJcblx0XHQvKiAjZW5kaWYgKi9cclxuXHR9XHJcblxyXG5cdC51bmktbm90aWNlYmFyX19tb3JlIHtcclxuXHRcdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cclxuXHRcdGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG5cdFx0LyogI2VuZGlmICovXHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0ZmxleC13cmFwOiBub3dyYXA7XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0cGFkZGluZy1sZWZ0OiA1cHg7XHJcblx0fVxyXG5cclxuXHQudW5pLW5vdGljZWJhcl9fbW9yZS10ZXh0IHtcclxuXHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHR9XHJcblxyXG5cdEBrZXlmcmFtZXMgbm90aWNlIHtcclxuXHRcdDEwMCUge1xyXG5cdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcclxuXHRcdH1cclxuXHR9XHJcbjwvc3R5bGU+IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy93ZWJwYWNrLXVuaS1udnVlLWxvYWRlci9saWIvc3R5bGUuanMhLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTAtMSEuLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMC0yIS4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0wLTMhLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvdnVlLWxvYWRlci9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLW5vdGljZS1iYXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9N2Y4ODY5ZWQmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvd2VicGFjay11bmktbnZ1ZS1sb2FkZXIvbGliL3N0eWxlLmpzIS4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0wLTEhLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTAtMiEuLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMC0zIS4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3Z1ZS1sb2FkZXIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VuaS1ub3RpY2UtYmFyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTdmODg2OWVkJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidW5pLW5vdGljZWJhclwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiNlwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMTJcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCI2XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjEyXCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIxMFwiXG4gIH0sXG4gIFwidW5pLW5vdGljZWJhci1jbG9zZVwiOiB7XG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIlxuICB9LFxuICBcInVuaS1ub3RpY2ViYXItaWNvblwiOiB7XG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVcIlxuICB9LFxuICBcInVuaS1ub3RpY2ViYXJfX2NvbnRlbnQtd3JhcHBlclwiOiB7XG4gICAgXCJmbGV4XCI6IDEsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJvdmVyZmxvd1wiOiBcImhpZGRlblwiXG4gIH0sXG4gIFwidW5pLW5vdGljZWJhcl9fY29udGVudC13cmFwcGVyLS1zaW5nbGVcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiXG4gIH0sXG4gIFwidW5pLW5vdGljZWJhcl9fY29udGVudC13cmFwcGVyLS1zY3JvbGxhYmxlXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIlxuICB9LFxuICBcInVuaS1ub3RpY2ViYXJfX2NvbnRlbnQtLXNjcm9sbGFibGVcIjoge1xuICAgIFwiZmxleFwiOiAwXG4gIH0sXG4gIFwidW5pLW5vdGljZWJhcl9fY29udGVudC10ZXh0XCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMTRcIixcbiAgICBcImxpbmVIZWlnaHRcIjogXCIxOFwiXG4gIH0sXG4gIFwidW5pLW5vdGljZWJhcl9fY29udGVudC10ZXh0LS1zaW5nbGVcIjoge1xuICAgIFwibGluZXNcIjogMSxcbiAgICBcIm92ZXJmbG93XCI6IFwiaGlkZGVuXCIsXG4gICAgXCJ0ZXh0T3ZlcmZsb3dcIjogXCJlbGxpcHNpc1wiXG4gIH0sXG4gIFwidW5pLW5vdGljZWJhcl9fY29udGVudC10ZXh0LS1zY3JvbGxhYmxlXCI6IHtcbiAgICBcImxpbmVzXCI6IDEsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjc1MHJweFwiXG4gIH0sXG4gIFwidW5pLW5vdGljZWJhcl9fbW9yZVwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJmbGV4V3JhcFwiOiBcIm5vd3JhcFwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCI1XCJcbiAgfSxcbiAgXCJ1bmktbm90aWNlYmFyX19tb3JlLXRleHRcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIxNFwiXG4gIH1cbn0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLi8uLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMC0xIS4uLy4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0wLTIhLi4vLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTAtMyEuLi8uLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy92dWUtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMCEuL25vdGljZS1iYXIubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvd2VicGFjay11bmktbnZ1ZS1sb2FkZXIvbGliL3N0eWxlLmpzIS4uLy4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0wLTEhLi4vLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTAtMiEuLi8uLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMC0zIS4uLy4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3Z1ZS1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0wIS4vbm90aWNlLWJhci5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcImV4YW1wbGVcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiAwLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMzBycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogMCxcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMzBycHhcIlxuICB9LFxuICBcImV4YW1wbGUtaW5mb1wiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMzBycHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjMwcnB4XCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMzBycHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMzBycHhcIixcbiAgICBcImNvbG9yXCI6IFwiIzNiNDE0NFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwiZm9udFNpemVcIjogXCIzMHJweFwiXG4gIH0sXG4gIFwiZXhhbXBsZS1pbmZvLXRleHRcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIyOHJweFwiLFxuICAgIFwibGluZUhlaWdodFwiOiBcIjM2cnB4XCJcbiAgfSxcbiAgXCJleGFtcGxlLWJvZHlcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjIwcnB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogMCxcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCI1cnB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiAwLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gIH0sXG4gIFwid29yZC1idG4td2hpdGVcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIxOFwiLFxuICAgIFwiY29sb3JcIjogXCIjRkZGRkZGXCJcbiAgfSxcbiAgXCJ3b3JkLWJ0blwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiNlwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNDhcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjE1XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjE1XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIxNVwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjE1XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjMDA3QUZGXCJcbiAgfSxcbiAgXCJ3b3JkLWJ0bi0taG92ZXJcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiIzRjYTJmZlwiXG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCB7XCJwYWdlc1wiOnt9LFwiZ2xvYmFsU3R5bGVcIjp7fX0iLCJleHBvcnQgZGVmYXVsdCB7XCJhcHBpZFwiOlwiXCJ9IiwiVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fID0ge31cblZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCIpLmRlZmF1bHQsVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKVxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy93ZWJwYWNrLXVuaS1udnVlLWxvYWRlci9saWIvc3R5bGUuanMhLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTAtMSEuLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMC0yIS4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0wLTMhLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvdnVlLWxvYWRlci9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvd2VicGFjay11bmktbnZ1ZS1sb2FkZXIvbGliL3N0eWxlLmpzIS4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0wLTEhLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTAtMiEuLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMC0zIS4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3Z1ZS1sb2FkZXIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiIiwibW9kdWxlLmV4cG9ydHMgPSB7fSJdLCJzb3VyY2VSb290IjoiIn0=