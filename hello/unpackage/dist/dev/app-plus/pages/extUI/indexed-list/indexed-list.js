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
/******/ 	return __webpack_require__(__webpack_require__.s = 231);
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
  'src': "url('data:font/truetype;charset=utf-8;base64,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PDgtsDEssAAWILAJI0IgICBGI0ewACsjYTgtsDIssAAWsAMlsAIlRyNHI2GwAFRYLiA8IyEbsAIlsAIlRyNHI2EgsAUlsAQlRyNHI2GwBiWwBSVJsAIlYbABRWMjIFhiGyFZY7ABRWJgIy4jICA8ijgjIVktsDMssAAWILAJQyAuRyNHI2EgYLAgYGawgGIjICA8ijgtsDQsIyAuRrACJUZSWCA8WS6xJAEUKy2wNSwjIC5GsAIlRlBYIDxZLrEkARQrLbA2LCMgLkawAiVGUlggPFkjIC5GsAIlRlBYIDxZLrEkARQrLbA3LLAuKyMgLkawAiVGUlggPFkusSQBFCstsDgssC8riiAgPLAEI0KKOCMgLkawAiVGUlggPFkusSQBFCuwBEMusCQrLbA5LLAAFrAEJbAEJiAuRyNHI2GwBkUrIyA8IC4jOLEkARQrLbA6LLEJBCVCsAAWsAQlsAQlIC5HI0cjYSCwBCNCsAZFKyCwYFBYILBAUVizAiADIBuzAiYDGllCQiMgR7AEQ7CAYmAgsAArIIqKYSCwAkNgZCOwA0NhZFBYsAJDYRuwA0NgWbADJbCAYmGwAiVGYTgjIDwjOBshICBGI0ewACsjYTghWbEkARQrLbA7LLAuKy6xJAEUKy2wPCywLyshIyAgPLAEI0IjOLEkARQrsARDLrAkKy2wPSywABUgR7AAI0KyAAEBFRQTLrAqKi2wPiywABUgR7AAI0KyAAEBFRQTLrAqKi2wPyyxAAEUE7ArKi2wQCywLSotsEEssAAWRSMgLiBGiiNhOLEkARQrLbBCLLAJI0KwQSstsEMssgAAOistsEQssgABOistsEUssgEAOistsEYssgEBOistsEcssgAAOystsEgssgABOystsEkssgEAOystsEossgEBOystsEsssgAANystsEwssgABNystsE0ssgEANystsE4ssgEBNystsE8ssgAAOSstsFAssgABOSstsFEssgEAOSstsFIssgEBOSstsFMssgAAPCstsFQssgABPCstsFUssgEAPCstsFYssgEBPCstsFcssgAAOCstsFgssgABOCstsFkssgEAOCstsFossgEBOCstsFsssDArLrEkARQrLbBcLLAwK7A0Ky2wXSywMCuwNSstsF4ssAAWsDArsDYrLbBfLLAxKy6xJAEUKy2wYCywMSuw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bmlFMjAwB3VuaUUyMDEHdW5pRTIwMgd1bmlFMjAzB3VuaUUyMzAHdW5pRTIzMQd1bmlFMjMyB3VuaUUyMzMHdW5pRTI2MAd1bmlFMjYxB3VuaUUyNjIHdW5pRTI2Mwd1bmlFMjY0B3VuaUUzMDAHdW5pRTMwMQd1bmlFMzAyB3VuaUUzMDMHdW5pRTMzMgd1bmlFMzMzB3VuaUUzNjAHdW5pRTM2Mwd1bmlFMzY0B3VuaUU0MDAHdW5pRTQwMQd1bmlFNDAyB3VuaUU0MDMHdW5pRTQwNAd1bmlFNDA1B3VuaUU0MDYHdW5pRTQwNwd1bmlFNDA4B3VuaUU0MDkHdW5pRTQxMAd1bmlFNDExB3VuaUU0MTMHdW5pRTQzNAd1bmlFNDM3B3VuaUU0MzgHdW5pRTQzOQd1bmlFNDQwB3VuaUU0NDEHdW5pRTQ0Mgd1bmlFNDQzB3VuaUU0NjAHdW5pRTQ2MQd1bmlFNDYyB3VuaUU0NjMHdW5pRTQ2NAd1bmlFNDY1B3VuaUU0NjYHdW5pRTQ2OAd1bmlFNDcwB3VuaUU0NzEHdW5pRTQ3Mgd1bmlFNTAwB3VuaUU1MDEHdW5pRTUwMgd1bmlFNTAzB3VuaUU1MDQHdW5pRTUwNQd1bmlFNTA2B3VuaUU1MDcHdW5pRTUwOAd1bmlFNTMwB3VuaUU1MzIHdW5pRTUzNAd1bmlFNTM1B3VuaUU1MzcHdW5pRTU2MAd1bmlFNTYyB3VuaUU1NjMHdW5pRTU2NQd1bmlFNTY3B3VuaUU1NjgHdW5pRTU4MAd1bmlFNTgxB3VuaUU1ODIHdW5pRTU4Mwd1bmlFNTg0B3VuaUU1ODUHdW5pRTU4Ngd1bmlFNTg3B3VuaUU1ODgHdW5pRTU4OQRFdXJvB3VuaUU2MTIAAAEAAf//AA8AAQAAAAwAAAAWAAAAAgABAAEAXwABAAQAAAACAAAAAAAAAAEAAAAA1aQnCAAAAADZqlu5AAAAANmqXAk=')" });var _default =


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

/***/ 23:
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = formatLog;function typof(v) {
  var s = Object.prototype.toString.call(v);
  return s.substring(8, s.length - 1);
}

function formatLog() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v);

    if (type.toLowerCase() === '[object object]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v) + '---END:JSON---';
      } catch (e) {
        v = '[object object]';
      }
    } else {
      if (v === null) {
        v = '---NULL---';
      } else if (v === undefined) {
        v = '---UNDEFINED---';
      } else {
        var vType = typof(v).toUpperCase();

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---';
        } else {
          v = String(v);
        }
      }
    }

    return v;
  });
  var msg = '';

  if (msgs.length > 1) {
    var lastMsg = msgs.pop();
    msg = msgs.join('---COMMA---');

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg;
    } else {
      msg += '---COMMA---' + lastMsg;
    }
  } else {
    msg = msgs[0];
  }

  return msg;
}

/***/ }),

/***/ 231:
/*!*****************************************************************************************************!*\
  !*** C:/Users/刘雯媛/web1/uniapp/hello/main.js?{"page":"pages%2FextUI%2Findexed-list%2Findexed-list"} ***!
  \*****************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @dcloudio/uni-stat */ 1);
/* harmony import */ var _dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dcloudio_uni_stat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uni-app-style */ 6);
/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_extUI_indexed_list_indexed_list_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/extUI/indexed-list/indexed-list.nvue?mpType=page */ 232);

        
        
        
        _pages_extUI_indexed_list_indexed_list_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].mpType = 'page'
        _pages_extUI_indexed_list_indexed_list_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].route = 'pages/extUI/indexed-list/indexed-list'
        _pages_extUI_indexed_list_indexed_list_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"].el = '#root'
        new Vue(_pages_extUI_indexed_list_indexed_list_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_2__["default"])
        

/***/ }),

/***/ 232:
/*!*********************************************************************************************!*\
  !*** C:/Users/刘雯媛/web1/uniapp/hello/pages/extUI/indexed-list/indexed-list.nvue?mpType=page ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _indexed_list_nvue_vue_type_template_id_db12c66a_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./indexed-list.nvue?vue&type=template&id=db12c66a&mpType=page */ 233);
/* harmony import */ var _indexed_list_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./indexed-list.nvue?vue&type=script&lang=js&mpType=page */ 235);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _indexed_list_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _indexed_list_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 16);



function injectStyles () {
  if(!this.options.style){
    this.options.style = {}
}
if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){
  Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)
}

}

/* normalize component */

var component = Object(_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _indexed_list_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _indexed_list_nvue_vue_type_template_id_db12c66a_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _indexed_list_nvue_vue_type_template_id_db12c66a_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  "1e4e51bb"
  
)

injectStyles.call(component)
component.options.__file = "web1/uniapp/hello/pages/extUI/indexed-list/indexed-list.nvue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 233:
/*!***************************************************************************************************************************!*\
  !*** C:/Users/刘雯媛/web1/uniapp/hello/pages/extUI/indexed-list/indexed-list.nvue?vue&type=template&id=db12c66a&mpType=page ***!
  \***************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_indexed_list_nvue_vue_type_template_id_db12c66a_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!../../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!../../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!../../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--5-0!./indexed-list.nvue?vue&type=template&id=db12c66a&mpType=page */ 234);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_indexed_list_nvue_vue_type_template_id_db12c66a_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_indexed_list_nvue_vue_type_template_id_db12c66a_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 234:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--5-0!C:/Users/刘雯媛/web1/uniapp/hello/pages/extUI/indexed-list/indexed-list.nvue?vue&type=template&id=db12c66a&mpType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      _c("uni-indexed-list", {
        attrs: { options: _vm.list, showSelect: true },
        on: { click: _vm.bindClick }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 235:
/*!*********************************************************************************************************************!*\
  !*** C:/Users/刘雯媛/web1/uniapp/hello/pages/extUI/indexed-list/indexed-list.nvue?vue&type=script&lang=js&mpType=page ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_indexed_list_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--5-0!./indexed-list.nvue?vue&type=script&lang=js&mpType=page */ 236);
/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_indexed_list_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_indexed_list_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_indexed_list_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_indexed_list_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_ref_5_0_indexed_list_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 236:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??ref--5-0!C:/Users/刘雯媛/web1/uniapp/hello/pages/extUI/indexed-list/indexed-list.nvue?vue&type=script&lang=js&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;




var _airport = _interopRequireDefault(__webpack_require__(/*! @/common/airport.js */ 237));
var _uniIndexedList = _interopRequireDefault(__webpack_require__(/*! @/components/uni-indexed-list/uni-indexed-list.vue */ 238));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
//
//
//
var _default = { components: { uniIndexedList: _uniIndexedList.default },
  data: function data() {
    return {
      list: _airport.default.list };

  },
  methods: {
    bindClick: function bindClick(e) {
      console.log(__f__('点击item，返回数据' + JSON.stringify(e), " at pages\\extUI\\indexed-list\\indexed-list.nvue:19"));
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 23)["default"]))

/***/ }),

/***/ 237:
/*!********************************************************!*\
  !*** C:/Users/刘雯媛/web1/uniapp/hello/common/airport.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
module.exports = {
  "list": [{
    "letter": "A",
    "data": [
    "阿克苏机场",
    "阿拉山口机场",
    "阿勒泰机场",
    "阿里昆莎机场",
    "安庆天柱山机场",
    "澳门国际机场"] },

  {
    "letter": "B",
    "data": [
    "保山机场",
    "包头机场",
    "北海福成机场",
    "北京南苑机场",
    "北京首都国际机场"] },

  {
    "letter": "C",
    "data": [
    "长白山机场",
    "长春龙嘉国际机场",
    "常德桃花源机场",
    "昌都邦达机场",
    "长沙黄花国际机场",
    "长治王村机场",
    "常州奔牛机场",
    "成都双流国际机场",
    "赤峰机场"] },

  {
    "letter": "D",
    "data": [
    "大理机场",
    "大连周水子国际机场",
    "大庆萨尔图机场",
    "大同东王庄机场",
    "达州河市机场",
    "丹东浪头机场",
    "德宏芒市机场",
    "迪庆香格里拉机场",
    "东营机场",
    "敦煌机场"] },

  {
    "letter": "E",
    "data": [
    "鄂尔多斯机场",
    "恩施许家坪机场",
    "二连浩特赛乌苏国际机场"] },

  {
    "letter": "F",
    "data": [
    "阜阳西关机场",
    "福州长乐国际机场"] },

  {
    "letter": "G",
    "data": [
    "赣州黄金机场",
    "格尔木机场",
    "固原六盘山机场",
    "广元盘龙机场",
    "广州白云国际机场",
    "桂林两江国际机场",
    "贵阳龙洞堡国际机场"] },

  {
    "letter": "H",
    "data": [
    "哈尔滨太平国际机场",
    "哈密机场",
    "海口美兰国际机场",
    "海拉尔东山国际机场",
    "邯郸机场",
    "汉中机场",
    "杭州萧山国际机场",
    "合肥骆岗国际机场",
    "和田机场",
    "黑河机场",
    "呼和浩特白塔国际机场",
    "淮安涟水机场",
    "黄山屯溪国际机场"] },

  {
    "letter": "I",
    "data": [] },
  {
    "letter": "J",
    "data": [
    "济南遥墙国际机场",
    "济宁曲阜机场",
    "鸡西兴凯湖机场",
    "佳木斯东郊机场",
    "嘉峪关机场",
    "锦州小岭子机场",
    "景德镇机场",
    "井冈山机场",
    "九江庐山机场",
    "九寨黄龙机场"] },

  {
    "letter": "K",
    "data": [
    "喀什机场",
    "克拉玛依机场",
    "库车龟兹机场",
    "库尔勒机场",
    "昆明巫家坝国际机场"] },

  {
    "letter": "L",
    "data": [
    "拉萨贡嘎机场",
    "兰州中川机场",
    "丽江三义机场",
    "黎平机场",
    "连云港白塔埠机场",
    "临沧机场",
    "临沂机场",
    "林芝米林机场",
    "柳州白莲机场",
    "龙岩冠豸山机场",
    "泸州蓝田机场",
    "洛阳北郊机场"] },

  {
    "letter": "M",
    "data": [
    "满洲里西郊机场",
    "绵阳南郊机场",
    "漠河古莲机场",
    "牡丹江海浪机场"] },

  {
    "letter": "N",
    "data": [
    "南昌昌北国际机场",
    "南充高坪机场",
    "南京禄口国际机场",
    "南宁吴圩机场",
    "南通兴东机场",
    "南阳姜营机场",
    "宁波栎社国际机场"] },

  {
    "letter": "O",
    "data": [] },
  {
    "letter": "P",
    "data": [
    "普洱思茅机场"] },

  {
    "letter": "Q",
    "data": [
    "齐齐哈尔三家子机场",
    "秦皇岛山海关机场",
    "青岛流亭国际机场",
    "衢州机场",
    "泉州晋江机场"] },

  {
    "letter": "R",
    "data": [
    "日喀则和平机场"] },

  {
    "letter": "S",
    "data": [
    "三亚凤凰国际机场",
    "汕头外砂机场",
    "上海虹桥国际机场",
    "上海浦东国际机场",
    "深圳宝安国际机场",
    "沈阳桃仙国际机场",
    "石家庄正定国际机场",
    "苏南硕放国际机场"] },

  {
    "letter": "T",
    "data": [
    "塔城机场",
    "太原武宿国际机场",
    "台州路桥机场 (黄岩机场)",
    "唐山三女河机场",
    "腾冲驼峰机场",
    "天津滨海国际机场",
    "通辽机场",
    "铜仁凤凰机场"] },

  {
    "letter": "U",
    "data": [] },
  {
    "letter": "V",
    "data": [] },
  {
    "letter": "W",
    "data": [
    "万州五桥机场",
    "潍坊机场",
    "威海大水泊机场",
    "文山普者黑机场",
    "温州永强国际机场",
    "乌海机场",
    "武汉天河国际机场",
    "乌兰浩特机场",
    "乌鲁木齐地窝堡国际机场",
    "武夷山机场",
    "梧州长洲岛机场"] },

  {
    "letter": "X",
    "data": [
    "西安咸阳国际机场",
    "西昌青山机场",
    "锡林浩特机场",
    "西宁曹家堡机场",
    "西双版纳嘎洒机场",
    "厦门高崎国际机场",
    "香港国际机场",
    "襄阳刘集机场",
    "兴义机场",
    "徐州观音机场"] },

  {
    "letter": "Y",
    "data": [
    "延安二十里堡机场",
    "盐城机场",
    "延吉朝阳川机场",
    "烟台莱山国际机场",
    "宜宾菜坝机场",
    "宜昌三峡机场",
    "伊春林都机场",
    "伊宁机场",
    "义乌机场",
    "银川河东机场",
    "永州零陵机场",
    "榆林榆阳机场",
    "玉树巴塘机场",
    "运城张孝机场"] },

  {
    "letter": "Z",
    "data": [
    "湛江机场",
    "昭通机场",
    "郑州新郑国际机场",
    "芷江机场",
    "重庆江北国际机场",
    "中卫香山机场",
    "舟山朱家尖机场",
    "珠海三灶机场"] }] };

/***/ }),

/***/ 238:
/*!***************************************************************************************!*\
  !*** C:/Users/刘雯媛/web1/uniapp/hello/components/uni-indexed-list/uni-indexed-list.vue ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uni_indexed_list_vue_vue_type_template_id_0bb37526_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-indexed-list.vue?vue&type=template&id=0bb37526&scoped=true& */ 239);
/* harmony import */ var _uni_indexed_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-indexed-list.vue?vue&type=script&lang=js& */ 241);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_indexed_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_indexed_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 16);



function injectStyles () {
  if(!this.options.style){
    this.options.style = {}
}
if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){
  Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)
}
if(Vue.prototype.__merge_style){
              Vue.prototype.__merge_style(__webpack_require__(/*! ./uni-indexed-list.vue?vue&type=style&index=0&id=0bb37526&scoped=true&lang=css& */ 250).default, this.options.style)
          }else{
              Object.assign(this.options.style,__webpack_require__(/*! ./uni-indexed-list.vue?vue&type=style&index=0&id=0bb37526&scoped=true&lang=css& */ 250).default)
          }

}

/* normalize component */

var component = Object(_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _uni_indexed_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _uni_indexed_list_vue_vue_type_template_id_0bb37526_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _uni_indexed_list_vue_vue_type_template_id_0bb37526_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0bb37526",
  "38d04636"
  
)

injectStyles.call(component)
component.options.__file = "web1/uniapp/hello/components/uni-indexed-list/uni-indexed-list.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 239:
/*!**********************************************************************************************************************************!*\
  !*** C:/Users/刘雯媛/web1/uniapp/hello/components/uni-indexed-list/uni-indexed-list.vue?vue&type=template&id=0bb37526&scoped=true& ***!
  \**********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_indexed_list_vue_vue_type_template_id_0bb37526_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!./uni-indexed-list.vue?vue&type=template&id=0bb37526&scoped=true& */ 240);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_indexed_list_vue_vue_type_template_id_0bb37526_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_indexed_list_vue_vue_type_template_id_0bb37526_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 240:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!C:/Users/刘雯媛/web1/uniapp/hello/components/uni-indexed-list/uni-indexed-list.vue?vue&type=template&id=0bb37526&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    { ref: "list", staticClass: ["uni-indexed-list"], attrs: { id: "list" } },
    [
      _c(
        "list",
        {
          staticClass: ["uni-indexed-list__scroll"],
          attrs: { scrollable: "true", showScrollbar: "false" }
        },
        _vm._l(_vm.lists, function(list, idx) {
          return _c(
            "cell",
            {
              key: idx,
              ref: "uni-indexed-list-" + list.key,
              refInFor: true,
              appendAsTree: true,
              attrs: { append: "tree" }
            },
            [
              _c("uni-indexed-list-item", {
                attrs: {
                  list: list,
                  loaded: _vm.loaded,
                  idx: idx,
                  showSelect: _vm.showSelect
                },
                on: { itemClick: _vm.onClick }
              })
            ],
            1
          )
        }),
        0
      ),
      _c(
        "view",
        {
          staticClass: ["uni-indexed-list__menu"],
          class: _vm.touchmove ? "uni-indexed-list__menu--active" : "",
          on: {
            touchstart: _vm.touchStart,
            touchmove: _vm.touchMove,
            touchend: _vm.touchEnd
          }
        },
        _vm._l(_vm.lists, function(list, key) {
          return _c(
            "view",
            { key: key, staticClass: ["uni-indexed-list__menu-item"] },
            [
              _c(
                "u-text",
                {
                  staticClass: ["uni-indexed-list__menu-text"],
                  class:
                    _vm.touchmoveIndex == key
                      ? "uni-indexed-list__menu-text--active"
                      : ""
                },
                [_vm._v(_vm._s(list.key))]
              )
            ]
          )
        }),
        0
      ),
      _vm.touchmove
        ? _c("view", { staticClass: ["uni-indexed-list__alert-wrapper"] }, [
            _c("u-text", { staticClass: ["uni-indexed-list__alert"] }, [
              _vm._v(_vm._s(_vm.lists[_vm.touchmoveIndex].key))
            ])
          ])
        : _vm._e()
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 241:
/*!****************************************************************************************************************!*\
  !*** C:/Users/刘雯媛/web1/uniapp/hello/components/uni-indexed-list/uni-indexed-list.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_indexed_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!./uni-indexed-list.vue?vue&type=script&lang=js& */ 242);
/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_indexed_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_indexed_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_indexed_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_indexed_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_indexed_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 242:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!C:/Users/刘雯媛/web1/uniapp/hello/components/uni-indexed-list/uni-indexed-list.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;





























var _uniIcons = _interopRequireDefault(__webpack_require__(/*! ../uni-icons/uni-icons.vue */ 168));
var _uniIndexedListItem = _interopRequireDefault(__webpack_require__(/*! ./uni-indexed-list-item.vue */ 243));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
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
var dom = weex.requireModule('dom');function throttle(func, delay) {var prev = Date.now();return function () {var context = this;var args = arguments;var now = Date.now();if (now - prev >= delay) {func.apply(context, args);prev = Date.now();}};}function touchMove(e) {var pageY = e.touches[0].pageY;var index = Math.floor(pageY / this.itemHeight);if (this.touchmoveIndex === index) {return false;}var item = this.lists[index];if (item) {

    dom.scrollToElement(this.$refs['uni-indexed-list-' + item.key][0], {
      animated: false });

    this.touchmoveIndex = index;

  }
}
var throttleTouchMove = throttle(touchMove, 40);var _default2 =

{
  name: 'UniIndexedList',
  components: {
    uniIcons: _uniIcons.default,
    uniIndexedListItem: _uniIndexedListItem.default },

  props: {
    options: {
      type: Array,
      default: function _default() {
        return [];
      } },

    showSelect: {
      type: Boolean,
      default: false } },


  data: function data() {
    return {
      lists: [],
      winHeight: 0,
      itemHeight: 0,
      touchmove: false,
      touchmoveIndex: -1,
      scrollViewId: '',
      touchmoveTimeout: '',
      loaded: false };

  },
  watch: {
    options: {
      handler: function handler() {
        this.setList();
      },
      deep: true } },


  mounted: function mounted() {var _this = this;
    setTimeout(function () {
      _this.setList();
    }, 50);
    setTimeout(function () {
      _this.loaded = true;
    }, 300);
  },
  methods: {
    setList: function setList() {var _this2 = this;
      var index = 0;
      this.lists = [];
      this.options.forEach(function (value, index) {
        if (value.data.length === 0) {
          return;
        }
        // console.log(value)
        var indexBefore = index;
        var items = value.data.map(function (item) {
          var obj = {};
          // for (let key in item) {
          obj['key'] = value.letter;
          obj['name'] = item;
          obj['itemIndex'] = index;
          index++;
          // }
          obj.checked = item.checked ? item.checked : false;
          return obj;
        });
        _this2.lists.push({
          title: value.letter,
          key: value.letter,
          items: items,
          itemIndex: indexBefore });

      });
      // console.log(this.lists)











      dom.getComponentRect(this.$refs['list'], function (res) {
        _this2.winHeight = res.size.height;
        _this2.itemHeight = _this2.winHeight / _this2.lists.length;
      });

    },
    touchStart: function touchStart(e) {
      this.touchmove = true;
      var pageY = e.touches[0].pageY;
      var index = Math.floor(pageY / this.itemHeight);
      var item = this.lists[index];
      if (item) {
        this.scrollViewId = 'uni-indexed-list-' + item.key;
        this.touchmoveIndex = index;
      }
    },
    touchMove: function touchMove(e) {













      throttleTouchMove.call(this, e);

    },
    touchEnd: function touchEnd() {
      this.touchmove = false;
      this.touchmoveIndex = -1;
    },
    onClick: function onClick(e) {var _this3 = this;var

      idx =

      e.idx,index = e.index;
      var obj = {};
      for (var key in this.lists[idx].items[index]) {
        obj[key] = this.lists[idx].items[index][key];
      }
      var select = [];
      if (this.showSelect) {
        this.lists[idx].items[index].checked = !this.lists[idx].items[index].checked;
        this.lists.forEach(function (value, idx) {
          value.items.forEach(function (item, index) {
            if (item.checked) {
              var _obj = {};
              for (var _key in _this3.lists[idx].items[index]) {
                _obj[_key] = _this3.lists[idx].items[index][_key];
              }
              select.push(_obj);
            }
          });
        });
      }
      this.$emit('click', {
        item: obj,
        select: select });

    } } };exports.default = _default2;

/***/ }),

/***/ 243:
/*!********************************************************************************************!*\
  !*** C:/Users/刘雯媛/web1/uniapp/hello/components/uni-indexed-list/uni-indexed-list-item.vue ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uni_indexed_list_item_vue_vue_type_template_id_470c4cba_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-indexed-list-item.vue?vue&type=template&id=470c4cba&scoped=true& */ 244);
/* harmony import */ var _uni_indexed_list_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-indexed-list-item.vue?vue&type=script&lang=js& */ 246);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_indexed_list_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_indexed_list_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 16);



function injectStyles () {
  if(!this.options.style){
    this.options.style = {}
}
if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){
  Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)
}
if(Vue.prototype.__merge_style){
              Vue.prototype.__merge_style(__webpack_require__(/*! ./uni-indexed-list-item.vue?vue&type=style&index=0&id=470c4cba&scoped=true&lang=css& */ 248).default, this.options.style)
          }else{
              Object.assign(this.options.style,__webpack_require__(/*! ./uni-indexed-list-item.vue?vue&type=style&index=0&id=470c4cba&scoped=true&lang=css& */ 248).default)
          }

}

/* normalize component */

var component = Object(_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _uni_indexed_list_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _uni_indexed_list_item_vue_vue_type_template_id_470c4cba_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _uni_indexed_list_item_vue_vue_type_template_id_470c4cba_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "470c4cba",
  "e1e4230c"
  
)

injectStyles.call(component)
component.options.__file = "web1/uniapp/hello/components/uni-indexed-list/uni-indexed-list-item.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 244:
/*!***************************************************************************************************************************************!*\
  !*** C:/Users/刘雯媛/web1/uniapp/hello/components/uni-indexed-list/uni-indexed-list-item.vue?vue&type=template&id=470c4cba&scoped=true& ***!
  \***************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_indexed_list_item_vue_vue_type_template_id_470c4cba_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!./uni-indexed-list-item.vue?vue&type=template&id=470c4cba&scoped=true& */ 245);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_indexed_list_item_vue_vue_type_template_id_470c4cba_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_indexed_list_item_vue_vue_type_template_id_470c4cba_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 245:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-0!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!C:/Users/刘雯媛/web1/uniapp/hello/components/uni-indexed-list/uni-indexed-list-item.vue?vue&type=template&id=470c4cba&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("view", [
    _vm.loaded || _vm.list.itemIndex < 15
      ? _c("view", { staticClass: ["uni-indexed-list__title-wrapper"] }, [
          _vm.list.items && _vm.list.items.length > 0
            ? _c("u-text", { staticClass: ["uni-indexed-list__title"] }, [
                _vm._v(_vm._s(_vm.list.key))
              ])
            : _vm._e()
        ])
      : _vm._e(),
    (_vm.loaded || _vm.list.itemIndex < 15) &&
    _vm.list.items &&
    _vm.list.items.length > 0
      ? _c(
          "view",
          { staticClass: ["uni-indexed-list__list"] },
          _vm._l(_vm.list.items, function(item, index) {
            return _c(
              "view",
              {
                key: index,
                staticClass: ["uni-indexed-list__item"],
                attrs: { hoverClass: "uni-indexed-list__item--hover" }
              },
              [
                _c(
                  "view",
                  {
                    staticClass: ["uni-indexed-list__item-container"],
                    on: {
                      click: function($event) {
                        _vm.onClick(_vm.idx, index)
                      }
                    }
                  },
                  [
                    _c(
                      "view",
                      {
                        staticClass: ["uni-indexed-list__item-border"],
                        class: {
                          "uni-indexed-list__item-border--last":
                            index === _vm.list.items.length - 1
                        }
                      },
                      [
                        _vm.showSelect
                          ? _c(
                              "view",
                              { staticStyle: { marginRight: "20rpx" } },
                              [
                                _c("uni-icons", {
                                  attrs: {
                                    type: item.checked
                                      ? "checkbox-filled"
                                      : "circle",
                                    color: item.checked ? "#007aff" : "#aaa",
                                    size: "24"
                                  }
                                })
                              ],
                              1
                            )
                          : _vm._e(),
                        _c(
                          "u-text",
                          { staticClass: ["uni-indexed-list__item-content"] },
                          [_vm._v(_vm._s(item.name))]
                        )
                      ]
                    )
                  ]
                )
              ]
            )
          }),
          0
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 246:
/*!*********************************************************************************************************************!*\
  !*** C:/Users/刘雯媛/web1/uniapp/hello/components/uni-indexed-list/uni-indexed-list-item.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_indexed_list_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!./uni-indexed-list-item.vue?vue&type=script&lang=js& */ 247);
/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_indexed_list_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_indexed_list_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_indexed_list_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_indexed_list_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_indexed_list_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 247:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!C:/Users/刘雯媛/web1/uniapp/hello/components/uni-indexed-list/uni-indexed-list-item.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;




















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
var _default2 = { name: 'UniIndexedList', components: { uniIcons: _uniIcons.default }, props: { loaded: { type: Boolean, default: false }, idx: { type: Number, default: 0 }, list: { type: Object, default: function _default() {return {};} },
    showSelect: {
      type: Boolean,
      default: false } },


  methods: {
    onClick: function onClick(idx, index) {
      this.$emit("itemClick", {
        idx: idx,
        index: index });

    } } };exports.default = _default2;

/***/ }),

/***/ 248:
/*!*****************************************************************************************************************************************************!*\
  !*** C:/Users/刘雯媛/web1/uniapp/hello/components/uni-indexed-list/uni-indexed-list-item.vue?vue&type=style&index=0&id=470c4cba&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_indexed_list_item_vue_vue_type_style_index_0_id_470c4cba_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--9-oneOf-0-2!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!./uni-indexed-list-item.vue?vue&type=style&index=0&id=470c4cba&scoped=true&lang=css& */ 249);
/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_indexed_list_item_vue_vue_type_style_index_0_id_470c4cba_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_indexed_list_item_vue_vue_type_style_index_0_id_470c4cba_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_indexed_list_item_vue_vue_type_style_index_0_id_470c4cba_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_indexed_list_item_vue_vue_type_style_index_0_id_470c4cba_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_indexed_list_item_vue_vue_type_style_index_0_id_470c4cba_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 249:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!C:/Users/刘雯媛/web1/uniapp/hello/components/uni-indexed-list/uni-indexed-list-item.vue?vue&type=style&index=0&id=470c4cba&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "uni-indexed-list__list": {
    "backgroundColor": "#ffffff",
    "flexDirection": "column",
    "borderTopStyle": "solid",
    "borderTopWidth": "1",
    "borderTopColor": "#e5e5e5"
  },
  "uni-indexed-list__item": {
    "fontSize": "32rpx",
    "flex": 1,
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center"
  },
  "uni-indexed-list__item-container": {
    "paddingLeft": "30rpx",
    "flex": 1,
    "position": "relative",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center"
  },
  "uni-indexed-list__item-border": {
    "flex": 1,
    "position": "relative",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center",
    "height": "50",
    "paddingTop": "30rpx",
    "paddingRight": "30rpx",
    "paddingBottom": "30rpx",
    "paddingLeft": 0,
    "borderBottomStyle": "solid",
    "borderBottomWidth": "1",
    "borderBottomColor": "#e5e5e5"
  },
  "uni-indexed-list__item-border--last": {
    "borderBottomWidth": "0"
  },
  "uni-indexed-list__item-content": {
    "flex": 1,
    "fontSize": "14"
  },
  "uni-indexed-list": {
    "flexDirection": "row"
  },
  "uni-indexed-list__title-wrapper": {
    "backgroundColor": "#f7f7f7"
  },
  "uni-indexed-list__title": {
    "paddingTop": "6",
    "paddingRight": "12",
    "paddingBottom": "6",
    "paddingLeft": "12",
    "lineHeight": "24",
    "fontSize": "24rpx"
  }
}

/***/ }),

/***/ 250:
/*!************************************************************************************************************************************************!*\
  !*** C:/Users/刘雯媛/web1/uniapp/hello/components/uni-indexed-list/uni-indexed-list.vue?vue&type=style&index=0&id=0bb37526&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_indexed_list_vue_vue_type_style_index_0_id_0bb37526_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--9-oneOf-0-2!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!../../../../../Downloads/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!./uni-indexed-list.vue?vue&type=style&index=0&id=0bb37526&scoped=true&lang=css& */ 251);
/* harmony import */ var _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_indexed_list_vue_vue_type_style_index_0_id_0bb37526_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_indexed_list_vue_vue_type_style_index_0_id_0bb37526_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_indexed_list_vue_vue_type_style_index_0_id_0bb37526_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_indexed_list_vue_vue_type_style_index_0_id_0bb37526_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_3_Downloads_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_vue_loader_index_js_vue_loader_options_uni_indexed_list_vue_vue_type_style_index_0_id_0bb37526_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 251:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/vue-loader??vue-loader-options!C:/Users/刘雯媛/web1/uniapp/hello/components/uni-indexed-list/uni-indexed-list.vue?vue&type=style&index=0&id=0bb37526&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "uni-indexed-list": {
    "position": "absolute",
    "left": 0,
    "top": 0,
    "right": 0,
    "bottom": 0,
    "flexDirection": "row"
  },
  "uni-indexed-list__scroll": {
    "flex": 1
  },
  "uni-indexed-list__menu": {
    "width": "24",
    "backgroundColor": "#D3D3D3",
    "flexDirection": "column"
  },
  "uni-indexed-list__menu-item": {
    "flex": 1,
    "alignItems": "center",
    "justifyContent": "center"
  },
  "uni-indexed-list__menu-text": {
    "lineHeight": "20",
    "fontSize": "12",
    "textAlign": "center",
    "color": "#aaaaaa"
  },
  "uni-indexed-list__menu--active": {
    "backgroundColor": "rgb(200,200,200)"
  },
  "uni-indexed-list__menu-text--active": {
    "color": "#007aff"
  },
  "uni-indexed-list__alert-wrapper": {
    "position": "absolute",
    "left": 0,
    "top": 0,
    "right": 0,
    "bottom": 0,
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "uni-indexed-list__alert": {
    "width": "80",
    "height": "80",
    "borderRadius": "80",
    "textAlign": "center",
    "lineHeight": "80",
    "fontSize": "35",
    "color": "#ffffff",
    "backgroundColor": "rgba(0,0,0,0.5)"
  }
}

/***/ }),

/***/ 3:
/*!******************************************************!*\
  !*** ./node_modules/@dcloudio/uni-stat/package.json ***!
  \******************************************************/
/*! exports provided: _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _shasum, _spec, _where, author, bugs, bundleDependencies, deprecated, description, devDependencies, files, gitHead, homepage, license, main, name, repository, scripts, version, default */
/***/ (function(module) {

module.exports = {"_from":"@dcloudio/uni-stat@next","_id":"@dcloudio/uni-stat@2.0.0-24220191115004","_inBundle":false,"_integrity":"sha512-UKnpiHSP7h9c5IFpJFkWkpm1KyWz9iHj1hchrQSUxPhChx+KPOmunnQcKGiQvvBz9CeSi7Se/eauJYha5ch0kw==","_location":"/@dcloudio/uni-stat","_phantomChildren":{},"_requested":{"type":"tag","registry":true,"raw":"@dcloudio/uni-stat@next","name":"@dcloudio/uni-stat","escapedName":"@dcloudio%2funi-stat","scope":"@dcloudio","rawSpec":"next","saveSpec":null,"fetchSpec":"next"},"_requiredBy":["#USER","/","/@dcloudio/vue-cli-plugin-uni"],"_resolved":"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-24220191115004.tgz","_shasum":"5848f2204f37daaf8c340fb27d9f76b16fcbfdeb","_spec":"@dcloudio/uni-stat@next","_where":"/Users/guoshengqiang/Documents/dcloud-plugins/release/uniapp-cli","author":"","bugs":{"url":"https://github.com/dcloudio/uni-app/issues"},"bundleDependencies":false,"deprecated":false,"description":"","devDependencies":{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5","eslint":"^6.1.0","rollup":"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},"files":["dist","package.json","LICENSE"],"gitHead":"bcf65737c5111d47398695d3db8ed87305df346e","homepage":"https://github.com/dcloudio/uni-app#readme","license":"Apache-2.0","main":"dist/index.js","name":"@dcloudio/uni-stat","repository":{"type":"git","url":"git+https://github.com/dcloudio/uni-app.git","directory":"packages/uni-stat"},"scripts":{"build":"NODE_ENV=production rollup -c rollup.config.js","dev":"NODE_ENV=development rollup -w -c rollup.config.js"},"version":"2.0.0-24220191115004"};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbCwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdW5pLXN0YXQvZGlzdC9pbmRleC5qcz85MjFiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanM/Mjg3NyIsIndlYnBhY2s6Ly8vQzovVXNlcnMv5YiY6Zuv5aqbL3dlYjEvdW5pYXBwL2hlbGxvL2NvbXBvbmVudHMvdW5pLWljb25zL3VuaS1pY29ucy52dWU/MTFhZSIsIndlYnBhY2s6Ly8vQzovVXNlcnMv5YiY6Zuv5aqbL3dlYjEvdW5pYXBwL2hlbGxvL2NvbXBvbmVudHMvdW5pLWljb25zL3VuaS1pY29ucy52dWU/MDJmNyIsIndlYnBhY2s6Ly8vQzovVXNlcnMv5YiY6Zuv5aqbL3dlYjEvdW5pYXBwL2hlbGxvL2NvbXBvbmVudHMvdW5pLWljb25zL3VuaS1pY29ucy52dWU/OTcyOSIsIndlYnBhY2s6Ly8vQzovVXNlcnMv5YiY6Zuv5aqbL3dlYjEvdW5pYXBwL2hlbGxvL2NvbXBvbmVudHMvdW5pLWljb25zL3VuaS1pY29ucy52dWU/YzZlZiIsInVuaS1hcHA6Ly8vY29tcG9uZW50cy91bmktaWNvbnMvdW5pLWljb25zLnZ1ZSIsInVuaS1hcHA6Ly8vY29tcG9uZW50cy91bmktaWNvbnMvaWNvbnMuanMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL+WImOmbr+Wqmy93ZWIxL3VuaWFwcC9oZWxsby9jb21wb25lbnRzL3VuaS1pY29ucy91bmktaWNvbnMudnVlP2JhNGMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL+WImOmbr+Wqmy93ZWIxL3VuaWFwcC9oZWxsby9jb21wb25lbnRzL3VuaS1pY29ucy91bmktaWNvbnMudnVlPzczMWQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvdW5pLWFwcC1wbHVzLW52dWUtdjgvZGlzdC9pbmRleC5qcz85OTJhIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL2xpYi9mb3JtYXQtbG9nLmpzPzBkZTkiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL+WImOmbr+Wqmy93ZWIxL3VuaWFwcC9oZWxsby9tYWluLmpzP2ExMDciLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL+WImOmbr+Wqmy93ZWIxL3VuaWFwcC9oZWxsby9wYWdlcy9leHRVSS9pbmRleGVkLWxpc3QvaW5kZXhlZC1saXN0Lm52dWU/ZDY4YSIsIndlYnBhY2s6Ly8vQzovVXNlcnMv5YiY6Zuv5aqbL3dlYjEvdW5pYXBwL2hlbGxvL3BhZ2VzL2V4dFVJL2luZGV4ZWQtbGlzdC9pbmRleGVkLWxpc3QubnZ1ZT9jMTQ1Iiwid2VicGFjazovLy9DOi9Vc2Vycy/liJjpm6/lqpsvd2ViMS91bmlhcHAvaGVsbG8vcGFnZXMvZXh0VUkvaW5kZXhlZC1saXN0L2luZGV4ZWQtbGlzdC5udnVlP2Y4MjYiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL+WImOmbr+Wqmy93ZWIxL3VuaWFwcC9oZWxsby9wYWdlcy9leHRVSS9pbmRleGVkLWxpc3QvaW5kZXhlZC1saXN0Lm52dWU/MDBhYyIsInVuaS1hcHA6Ly8vcGFnZXMvZXh0VUkvaW5kZXhlZC1saXN0L2luZGV4ZWQtbGlzdC5udnVlIiwidW5pLWFwcDovLy9jb21tb24vYWlycG9ydC5qcyIsIndlYnBhY2s6Ly8vQzovVXNlcnMv5YiY6Zuv5aqbL3dlYjEvdW5pYXBwL2hlbGxvL2NvbXBvbmVudHMvdW5pLWluZGV4ZWQtbGlzdC91bmktaW5kZXhlZC1saXN0LnZ1ZT84MjBjIiwid2VicGFjazovLy9DOi9Vc2Vycy/liJjpm6/lqpsvd2ViMS91bmlhcHAvaGVsbG8vY29tcG9uZW50cy91bmktaW5kZXhlZC1saXN0L3VuaS1pbmRleGVkLWxpc3QudnVlP2YzNTEiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL+WImOmbr+Wqmy93ZWIxL3VuaWFwcC9oZWxsby9jb21wb25lbnRzL3VuaS1pbmRleGVkLWxpc3QvdW5pLWluZGV4ZWQtbGlzdC52dWU/MDAwMiIsIndlYnBhY2s6Ly8vQzovVXNlcnMv5YiY6Zuv5aqbL3dlYjEvdW5pYXBwL2hlbGxvL2NvbXBvbmVudHMvdW5pLWluZGV4ZWQtbGlzdC91bmktaW5kZXhlZC1saXN0LnZ1ZT8yMTgyIiwidW5pLWFwcDovLy9jb21wb25lbnRzL3VuaS1pbmRleGVkLWxpc3QvdW5pLWluZGV4ZWQtbGlzdC52dWUiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL+WImOmbr+Wqmy93ZWIxL3VuaWFwcC9oZWxsby9jb21wb25lbnRzL3VuaS1pbmRleGVkLWxpc3QvdW5pLWluZGV4ZWQtbGlzdC1pdGVtLnZ1ZT9jNjI2Iiwid2VicGFjazovLy9DOi9Vc2Vycy/liJjpm6/lqpsvd2ViMS91bmlhcHAvaGVsbG8vY29tcG9uZW50cy91bmktaW5kZXhlZC1saXN0L3VuaS1pbmRleGVkLWxpc3QtaXRlbS52dWU/MmNmOSIsIndlYnBhY2s6Ly8vQzovVXNlcnMv5YiY6Zuv5aqbL3dlYjEvdW5pYXBwL2hlbGxvL2NvbXBvbmVudHMvdW5pLWluZGV4ZWQtbGlzdC91bmktaW5kZXhlZC1saXN0LWl0ZW0udnVlPzlkM2YiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL+WImOmbr+Wqmy93ZWIxL3VuaWFwcC9oZWxsby9jb21wb25lbnRzL3VuaS1pbmRleGVkLWxpc3QvdW5pLWluZGV4ZWQtbGlzdC1pdGVtLnZ1ZT9mZGZiIiwidW5pLWFwcDovLy9jb21wb25lbnRzL3VuaS1pbmRleGVkLWxpc3QvdW5pLWluZGV4ZWQtbGlzdC1pdGVtLnZ1ZSIsIndlYnBhY2s6Ly8vQzovVXNlcnMv5YiY6Zuv5aqbL3dlYjEvdW5pYXBwL2hlbGxvL2NvbXBvbmVudHMvdW5pLWluZGV4ZWQtbGlzdC91bmktaW5kZXhlZC1saXN0LWl0ZW0udnVlPzliZDIiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL+WImOmbr+Wqmy93ZWIxL3VuaWFwcC9oZWxsby9jb21wb25lbnRzL3VuaS1pbmRleGVkLWxpc3QvdW5pLWluZGV4ZWQtbGlzdC1pdGVtLnZ1ZT82MTQ3Iiwid2VicGFjazovLy9DOi9Vc2Vycy/liJjpm6/lqpsvd2ViMS91bmlhcHAvaGVsbG8vY29tcG9uZW50cy91bmktaW5kZXhlZC1saXN0L3VuaS1pbmRleGVkLWxpc3QudnVlP2Y3NGUiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL+WImOmbr+Wqmy93ZWIxL3VuaWFwcC9oZWxsby9jb21wb25lbnRzL3VuaS1pbmRleGVkLWxpc3QvdW5pLWluZGV4ZWQtbGlzdC52dWU/MjVhMyIsIndlYnBhY2s6Ly8vQzovVXNlcnMv5YiY6Zuv5aqbL3dlYjEvdW5pYXBwL2hlbGxvL3BhZ2VzLmpzb24/OTE4YSIsIndlYnBhY2s6Ly8vQzovVXNlcnMv5YiY6Zuv5aqbL3dlYjEvdW5pYXBwL2hlbGxvL3BhZ2VzLmpzb24/MDkyYyIsIndlYnBhY2s6Ly8vQzovVXNlcnMv5YiY6Zuv5aqbL3dlYjEvdW5pYXBwL2hlbGxvL21haW4uanM/ZWU3MSIsIndlYnBhY2s6Ly8vQzovVXNlcnMv5YiY6Zuv5aqbL3dlYjEvdW5pYXBwL2hlbGxvL0FwcC52dWU/YmEzOSIsIndlYnBhY2s6Ly8vQzovVXNlcnMv5YiY6Zuv5aqbL3dlYjEvdW5pYXBwL2hlbGxvL0FwcC52dWU/ZDRhYyJdLCJuYW1lcyI6WyJTVEFUX1ZFUlNJT04iLCJ2ZXJzaW9uIiwiU1RBVF9VUkwiLCJTVEFUX0g1X1VSTCIsIlBBR0VfUFZFUl9USU1FIiwiQVBQX1BWRVJfVElNRSIsIk9QRVJBVElOR19USU1FIiwiVVVJRF9LRVkiLCJVVUlEX1ZBTFVFIiwiZ2V0VXVpZCIsInV1aWQiLCJnZXRQbGF0Zm9ybU5hbWUiLCJwbHVzIiwicnVudGltZSIsImdldERDbG91ZElkIiwiZSIsInVuaSIsImdldFN0b3JhZ2VTeW5jIiwiRGF0ZSIsIm5vdyIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInNldFN0b3JhZ2VTeW5jIiwiZ2V0U2dpbiIsInN0YXREYXRhIiwiYXJyIiwiT2JqZWN0Iiwia2V5cyIsInNvcnRBcnIiLCJzb3J0Iiwic2dpbiIsInNnaW5TdHIiLCJpIiwic2lnbiIsIm9wdGlvbnMiLCJzdWJzdHIiLCJsZW5ndGgiLCJnZXRTcGxpY2luZyIsImRhdGEiLCJzdHIiLCJnZXRUaW1lIiwicGFyc2VJbnQiLCJwbGF0Zm9ybUxpc3QiLCJwcm9jZXNzIiwiZ2V0UGFja05hbWUiLCJwYWNrTmFtZSIsImNhbklVc2UiLCJnZXRBY2NvdW50SW5mb1N5bmMiLCJtaW5pUHJvZ3JhbSIsImFwcElkIiwiZ2V0VmVyc2lvbiIsImdldENoYW5uZWwiLCJwbGF0Zm9ybU5hbWUiLCJjaGFubmVsIiwiZ2V0U2NlbmUiLCJzY2VuZSIsImdldExhdW5jaE9wdGlvbnNTeW5jIiwiRmlyc3RfX1Zpc2l0X19UaW1lX19LRVkiLCJMYXN0X19WaXNpdF9fVGltZV9fS0VZIiwiZ2V0Rmlyc3RWaXNpdFRpbWUiLCJ0aW1lU3RvcmdlIiwidGltZSIsInJlbW92ZVN0b3JhZ2VTeW5jIiwiZ2V0TGFzdFZpc2l0VGltZSIsIlBBR0VfUkVTSURFTkNFX1RJTUUiLCJGaXJzdF9QYWdlX3Jlc2lkZW5jZV90aW1lIiwiTGFzdF9QYWdlX3Jlc2lkZW5jZV90aW1lIiwic2V0UGFnZVJlc2lkZW5jZVRpbWUiLCJnZXRQYWdlUmVzaWRlbmNlVGltZSIsIlRPVEFMX19WSVNJVF9fQ09VTlQiLCJnZXRUb3RhbFZpc2l0Q291bnQiLCJjb3VudCIsIkdldEVuY29kZVVSSUNvbXBvbmVudE9wdGlvbnMiLCJwcm9wIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiU2V0X19GaXJzdF9fVGltZSIsIlNldF9fTGFzdF9fVGltZSIsImdldEZpcnN0VGltZSIsImdldExhc3RUaW1lIiwiZ2V0UmVzaWRlbmNlVGltZSIsInR5cGUiLCJyZXNpZGVuY2VUaW1lIiwib3ZlcnRpbWUiLCJnZXRSb3V0ZSIsInBhZ2VzIiwiZ2V0Q3VycmVudFBhZ2VzIiwicGFnZSIsIl9zZWxmIiwiJHZtIiwiJG1wIiwiaXMiLCIkc2NvcGUiLCJyb3V0ZSIsImdldFBhZ2VSb3V0ZSIsInNlbGYiLCJxdWVyeSIsIl9xdWVyeSIsIkpTT04iLCJzdHJpbmdpZnkiLCJnZXRQYWdlVHlwZXMiLCJtcFR5cGUiLCIkb3B0aW9ucyIsImNhbGlicmF0aW9uIiwiZXZlbnROYW1lIiwiY29uc29sZSIsImVycm9yIiwiUGFnZXNKc29uIiwicmVxdWlyZSIsImRlZmF1bHQiLCJzdGF0Q29uZmlnIiwicmVzdWx0T3B0aW9ucyIsImdldFN5c3RlbUluZm9TeW5jIiwiVXRpbCIsIl9yZXRyeSIsIl9wbGF0Zm9ybSIsIl9uYXZpZ2F0aW9uQmFyVGl0bGUiLCJjb25maWciLCJyZXBvcnQiLCJsdCIsIl9vcGVyYXRpbmdUaW1lIiwiX3JlcG9ydGluZ1JlcXVlc3REYXRhIiwiX19wcmV2ZW50X3RyaWdnZXJpbmciLCJfX2xpY2F0aW9uSGlkZSIsIl9fbGljYXRpb25TaG93IiwiX2xhc3RQYWdlUm91dGUiLCJ1dCIsIm1wbiIsImFrIiwiYXBwaWQiLCJ1c3YiLCJ2IiwiY2giLCJjbiIsInBuIiwiY3QiLCJ0IiwidHQiLCJwIiwicGxhdGZvcm0iLCJicmFuZCIsIm1kIiwibW9kZWwiLCJzdiIsInN5c3RlbSIsInJlcGxhY2UiLCJtcHNkayIsIlNES1ZlcnNpb24iLCJtcHYiLCJsYW5nIiwibGFuZ3VhZ2UiLCJwciIsInBpeGVsUmF0aW8iLCJ3dyIsIndpbmRvd1dpZHRoIiwid2giLCJ3aW5kb3dIZWlnaHQiLCJzdyIsInNjcmVlbldpZHRoIiwic2giLCJzY3JlZW5IZWlnaHQiLCJwYXRoIiwic2MiLCJfc2VuZFJlcG9ydFJlcXVlc3QiLCJfc2VuZEhpZGVSZXF1ZXN0IiwidXJscmVmIiwidXJscmVmX3RzIiwicm91dGVwYXRoIiwidGl0bGVOVmlldyIsInRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJfc2VuZFBhZ2VSZXF1ZXN0IiwidXJsIiwiX3NlbmRFdmVudFJlcXVlc3QiLCJrZXkiLCJmdnRzIiwibHZ0cyIsInR2YyIsImdldFByb3BlcnR5IiwiZ2V0TmV0d29ya0luZm8iLCJvcHQiLCJyZXF1ZXN0IiwidmFsdWUiLCJlX24iLCJlX3YiLCJ0b1N0cmluZyIsImdldE5ldHdvcmtUeXBlIiwic3VjY2VzcyIsInJlc3VsdCIsIm5ldCIsIm5ldHdvcmtUeXBlIiwiZ2V0TG9jYXRpb24iLCJ3Z3RpbmZvIiwiZ2VvY29kZSIsImFkZHJlc3MiLCJjb3VudHJ5IiwicHJvdmluY2UiLCJjaXR5IiwibGF0IiwibGF0aXR1ZGUiLCJsbmciLCJsb25naXR1ZGUiLCJ0aXRsZSIsInR0biIsInR0cGoiLCJ0dGMiLCJyZXF1ZXN0RGF0YSIsInB1c2giLCJ1bmlTdGF0RGF0YSIsImZpcnN0QXJyIiwiY29udGVudEFyciIsImxhc3RBcnIiLCJyZCIsImZvckVhY2giLCJlbG0iLCJuZXdEYXRhIiwib3B0aW9uc0RhdGEiLCJyZXF1ZXN0cyIsImltYWdlUmVxdWVzdCIsInNldFRpbWVvdXQiLCJfc2VuZFJlcXVlc3QiLCJtZXRob2QiLCJmYWlsIiwiaW1hZ2UiLCJJbWFnZSIsInNyYyIsIlN0YXQiLCJpbnN0YW5jZSIsImFkZEludGVyY2VwdG9yIiwiYWRkSW50ZXJjZXB0b3JJbml0IiwiaW50ZXJjZXB0TG9naW4iLCJpbnRlcmNlcHRTaGFyZSIsImludGVyY2VwdFJlcXVlc3RQYXltZW50IiwiaW52b2tlIiwiYXJncyIsImNvbXBsZXRlIiwiX2xvZ2luIiwiX3NoYXJlIiwiX3BheW1lbnQiLCJfcGFnZVNob3ciLCJfYXBwbGljYXRpb25TaG93IiwiX3BhZ2VIaWRlIiwiX2FwcGxpY2F0aW9uSGlkZSIsImVtIiwiaW5mbyIsImVtVmFsIiwibWVzc2FnZSIsInN0YWNrIiwic3RhdCIsImdldEluc3RhbmNlIiwiaXNIaWRlIiwibGlmZWN5Y2xlIiwib25MYXVuY2giLCJvblJlYWR5IiwicmVhZHkiLCJvbkxvYWQiLCJsb2FkIiwib25TaGFyZUFwcE1lc3NhZ2UiLCJvbGRTaGFyZUFwcE1lc3NhZ2UiLCJjYWxsIiwib25TaG93Iiwic2hvdyIsIm9uSGlkZSIsImhpZGUiLCJvblVubG9hZCIsIm9uRXJyb3IiLCJtYWluIiwiaW5pdFVuaSIsImlzRm4iLCJoYW5kbGVQcm9taXNlIiwicHJvbWlzZSIsInRoZW4iLCJjYXRjaCIsImVyciIsIlJFR0VYIiwiQVBJX05PUk1BTF9MSVNUIiwic2hvdWxkUHJvbWlzZSIsIm5hbWUiLCJ0ZXN0IiwiaW5kZXhPZiIsInByb21pc2lmeSIsImFwaSIsIl9sZW4iLCJhcmd1bWVudHMiLCJwYXJhbXMiLCJBcnJheSIsIl9rZXkiLCJ1bmRlZmluZWQiLCJhcHBseSIsImNvbmNhdCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiYXNzaWduIiwicHJvdG90eXBlIiwiZmluYWxseSIsImNhbGxiYWNrIiwiY29uc3RydWN0b3IiLCJyZWFzb24iLCJvbk1lc3NhZ2VDYWxsYmFja3MiLCJvcmlnaW4iLCJvblN1Yk5WdWVNZXNzYWdlIiwid2Vidmlld0lkIiwid2VleFBsdXMiLCJ3ZWJ2aWV3IiwiY3VycmVudFdlYnZpZXciLCJpZCIsIkJyb2FkY2FzdENoYW5uZWwiLCJvbm1lc3NhZ2UiLCJldmVudCIsInRvIiwid3JhcHBlciIsIiRwcm9jZXNzZWQiLCJjdXJyZW50V2Vidmlld0lkIiwiaXNQb3B1cE5WdWUiLCJob3N0TlZ1ZUlkIiwiX191bmlhcHBfb3JpZ2luX3R5cGUiLCJfX3VuaWFwcF9vcmlnaW5faWQiLCJwb3B1cE5WdWVJZCIsInBvc3RNZXNzYWdlIiwib25NZXNzYWdlIiwiX191bmlhcHBfbWFza19pZCIsIl9fdW5pYXBwX2hvc3QiLCJtYXNrQ29sb3IiLCJfX3VuaWFwcF9tYXNrIiwibWFza1dlYnZpZXciLCJnZXRXZWJ2aWV3QnlJZCIsInBhcmVudCIsIm9sZFNob3ciLCJvbGRIaWRlIiwib2xkQ2xvc2UiLCJjbG9zZSIsInNob3dNYXNrIiwic2V0U3R5bGUiLCJtYXNrIiwiY2xvc2VNYXNrIiwiX2xlbjIiLCJfa2V5MiIsIl9sZW4zIiwiX2tleTMiLCJnZXRTdWJOVnVlQnlJZCIsImdldEN1cnJlbnRTdWJOVnVlIiwid2VleCIsInJlcXVpcmVNb2R1bGUiLCJnbG9iYWxFdmVudCIsImNhbGxiYWNrcyIsIlVOSUFQUF9TRVJWSUNFX05WVUVfSUQiLCJhZGRFdmVudExpc3RlbmVyIiwib25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwQ2FsbGJhY2siLCJvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWRDYWxsYmFjayIsIm9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkQ2FsbGJhY2siLCJvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWRDYWxsYmFjayIsImNyZWF0ZUNhbGxiYWNrIiwicmVzIiwiZXJyTXNnIiwia2VlcEFsaXZlIiwiY2FsbGJhY2tJZCIsInB1Ymxpc2giLCJfcmVmIiwiY3JlYXRlUHVibGlzaCIsIm9uTmF2aWdhdGlvbkJhckJ1dHRvblRhcCIsIm9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZCIsIm9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkIiwib25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkIiwicmVxdWlyZU5hdGl2ZVBsdWdpbiIsInBsdWdpbk5hbWUiLCJkb20iLCJsb2FkRm9udEZhY2UiLCJmYW1pbHkiLCJzb3VyY2UiLCJkZXNjIiwiYWRkUnVsZSIsImZvbnRGYW1pbHkiLCJzdGF0dXMiLCJnbG9iYWxFdmVudCQxIiwiY2FsbGJhY2tzJDEiLCJpc1VuaUFwcFJlYWR5IiwiX3R5cGVvZiIsIlN5bWJvbCIsIml0ZXJhdG9yIiwib2JqIiwic3RyZWFtIiwiTUVUSE9EX0dFVCIsIk1FVEhPRF9QT1NUIiwiQ09OVEVOVF9UWVBFX0pTT04iLCJDT05URU5UX1RZUEVfRk9STSIsInNlcmlhbGl6ZSIsImNvbnRlbnRUeXBlIiwidG9VcHBlckNhc2UiLCJ0b0xvd2VyQ2FzZSIsIm1hcCIsImpvaW4iLCJoZWFkZXIiLCJfcmVmJG1ldGhvZCIsIl9yZWYkZGF0YVR5cGUiLCJkYXRhVHlwZSIsInJlc3BvbnNlVHlwZSIsImFib3J0ZWQiLCJoYXNDb250ZW50VHlwZSIsImhlYWRlcnMiLCJmZXRjaCIsImJvZHkiLCJfcmVmMiIsIm9rIiwic3RhdHVzVGV4dCIsInJldCIsInN0YXR1c0NvZGUiLCJhYm9ydCIsInN0b3JhZ2UiLCJVTklBUFBfU1RPUkFHRV9EQVRBX1RZUEUiLCJnZXRTdG9yYWdlIiwiZ2V0SXRlbSIsInBhcnNlIiwic2V0U3RvcmFnZSIsInNldEl0ZW0iLCJyZW1vdmVTdG9yYWdlIiwiX3JlZjMiLCJyZW1vdmVJdGVtIiwiY2xlYXJTdG9yYWdlIiwiX3JlZjQiLCJjbGlwYm9hcmQiLCJnZXRDbGlwYm9hcmREYXRhIiwiZ2V0U3RyaW5nIiwic2V0Q2xpcGJvYXJkRGF0YSIsInNldFN0cmluZyIsImdldEVtaXR0ZXIiLCJnZXRVbmlFbWl0dGVyIiwiRW1pdHRlciIsIiRvbiIsIndhcm4iLCIkb2ZmIiwiJG9uY2UiLCIkZW1pdCIsImN0eCIsInNsaWNlIiwiZnJlZXplIiwid3giLCJ1cGxvYWRGaWxlIiwiZG93bmxvYWRGaWxlIiwiY2hvb3NlSW1hZ2UiLCJwcmV2aWV3SW1hZ2UiLCJnZXRJbWFnZUluZm8iLCJzYXZlSW1hZ2VUb1Bob3Rvc0FsYnVtIiwiY2hvb3NlVmlkZW8iLCJzYXZlVmlkZW9Ub1Bob3Rvc0FsYnVtIiwic2F2ZUZpbGUiLCJnZXRTYXZlZEZpbGVMaXN0IiwiZ2V0U2F2ZWRGaWxlSW5mbyIsInJlbW92ZVNhdmVkRmlsZSIsIm9wZW5Eb2N1bWVudCIsImdldFN0b3JhZ2VJbmZvIiwiY2hvb3NlTG9jYXRpb24iLCJvcGVuTG9jYXRpb24iLCJnZXRTeXN0ZW1JbmZvIiwibWFrZVBob25lQ2FsbCIsInNjYW5Db2RlIiwic2V0U2NyZWVuQnJpZ2h0bmVzcyIsImdldFNjcmVlbkJyaWdodG5lc3MiLCJzZXRLZWVwU2NyZWVuT24iLCJ2aWJyYXRlTG9uZyIsInZpYnJhdGVTaG9ydCIsImFkZFBob25lQ29udGFjdCIsInNob3dUb2FzdCIsInNob3dMb2FkaW5nIiwiaGlkZVRvYXN0IiwiaGlkZUxvYWRpbmciLCJzaG93TW9kYWwiLCJzaG93QWN0aW9uU2hlZXQiLCJzZXROYXZpZ2F0aW9uQmFyVGl0bGUiLCJzZXROYXZpZ2F0aW9uQmFyQ29sb3IiLCJuYXZpZ2F0ZVRvIiwicmVkaXJlY3RUbyIsInJlTGF1bmNoIiwic3dpdGNoVGFiIiwibmF2aWdhdGVCYWNrIiwiZ2V0UHJvdmlkZXIiLCJsb2dpbiIsImdldFVzZXJJbmZvIiwic2hhcmUiLCJyZXF1ZXN0UGF5bWVudCIsInN1YnNjcmliZVB1c2giLCJ1bnN1YnNjcmliZVB1c2giLCJvblB1c2giLCJvZmZQdXNoIiwiYmFzZVVuaSIsIm9zIiwibnZ1ZSIsIlByb3h5IiwiZ2V0IiwidGFyZ2V0IiwiY3JlYXRlVW5pIiwiZ2V0VW5pIiwiV2VleFBsdXMiLCJ0eXBvZiIsInMiLCJzdWJzdHJpbmciLCJmb3JtYXRMb2ciLCJtc2dzIiwidlR5cGUiLCJTdHJpbmciLCJtc2ciLCJsYXN0TXNnIiwicG9wIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7aURDbEZB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QUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3REQTtBQUFlLGdFQUFDLFVBQVUsa0I7Ozs7Ozs7Ozs7OztBQ0ExQjtBQUFlLGdFQUFDLFc7Ozs7Ozs7Ozs7O0FDQWhCO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsa0RBQTJDOzs7Ozs7Ozs7Ozs7O0FDRDlHO0FBQUE7QUFBQTtBQUFBO0FBQXd2QixDQUFnQixneEJBQUcsRUFBQyxDOzs7Ozs7Ozs7OztBQ0E1d0IsbUIiLCJmaWxlIjoicGFnZXMvZXh0VUkvaW5kZXhlZC1saXN0L2luZGV4ZWQtbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyMzEpO1xuIiwiaW1wb3J0IHsgdmVyc2lvbiB9IGZyb20gJy4uL3BhY2thZ2UuanNvbic7XHJcblxyXG5jb25zdCBTVEFUX1ZFUlNJT04gPSB2ZXJzaW9uO1xyXG5jb25zdCBTVEFUX1VSTCA9ICdodHRwczovL3RvbmdqaS5kY2xvdWQuaW8vdW5pL3N0YXQnO1xyXG5jb25zdCBTVEFUX0g1X1VSTCA9ICdodHRwczovL3RvbmdqaS5kY2xvdWQuaW8vdW5pL3N0YXQuZ2lmJzsgXHJcbmNvbnN0IFBBR0VfUFZFUl9USU1FID0gMTgwMDtcclxuY29uc3QgQVBQX1BWRVJfVElNRSA9IDMwMDtcclxuY29uc3QgT1BFUkFUSU5HX1RJTUUgPSAxMDtcclxuXHJcbmNvbnN0IFVVSURfS0VZID0gJ19fRENfU1RBVF9VVUlEJztcclxuY29uc3QgVVVJRF9WQUxVRSA9ICdfX0RDX1VVSURfVkFMVUUnO1xyXG5cclxuZnVuY3Rpb24gZ2V0VXVpZCgpIHtcclxuICBsZXQgdXVpZCA9ICcnO1xyXG4gIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICB1dWlkID0gcGx1cy5ydW50aW1lLmdldERDbG91ZElkKCk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIHV1aWQgPSAnJztcclxuICAgIH1cclxuICAgIHJldHVybiB1dWlkXHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgdXVpZCA9IHVuaS5nZXRTdG9yYWdlU3luYyhVVUlEX0tFWSk7XHJcbiAgfSBjYXRjaCAoZSkge1xyXG4gICAgdXVpZCA9IFVVSURfVkFMVUU7XHJcbiAgfVxyXG5cclxuICBpZiAoIXV1aWQpIHtcclxuICAgIHV1aWQgPSBEYXRlLm5vdygpICsgJycgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxZTcpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgdW5pLnNldFN0b3JhZ2VTeW5jKFVVSURfS0VZLCB1dWlkKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgdW5pLnNldFN0b3JhZ2VTeW5jKFVVSURfS0VZLCBVVUlEX1ZBTFVFKTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHV1aWQ7XHJcbn1cclxuXHJcbmNvbnN0IGdldFNnaW4gPSAoc3RhdERhdGEpID0+IHtcclxuICBsZXQgYXJyID0gT2JqZWN0LmtleXMoc3RhdERhdGEpO1xyXG4gIGxldCBzb3J0QXJyID0gYXJyLnNvcnQoKTtcclxuICBsZXQgc2dpbiA9IHt9O1xyXG4gIGxldCBzZ2luU3RyID0gJyc7XHJcbiAgZm9yICh2YXIgaSBpbiBzb3J0QXJyKSB7XHJcbiAgICBzZ2luW3NvcnRBcnJbaV1dID0gc3RhdERhdGFbc29ydEFycltpXV07XHJcbiAgICBzZ2luU3RyICs9IHNvcnRBcnJbaV0gKyAnPScgKyBzdGF0RGF0YVtzb3J0QXJyW2ldXSArICcmJztcclxuICB9XHJcbiAgLy8gY29uc3Qgb3B0aW9ucyA9IHNnaW5TdHIuc3Vic3RyKDAsIHNnaW5TdHIubGVuZ3RoIC0gMSlcclxuICAvLyBzZ2luU3RyID0gc2dpblN0ci5zdWJzdHIoMCwgc2dpblN0ci5sZW5ndGggLSAxKSArICcma2V5PScgKyBTVEFUX0tFWTtcclxuICAvLyBjb25zdCBzaSA9IGNyeXB0by5jcmVhdGVIYXNoKCdtZDUnKS51cGRhdGUoc2dpblN0cikuZGlnZXN0KCdoZXgnKTtcclxuICByZXR1cm4ge1xyXG4gICAgc2lnbjogJycsXHJcbiAgICBvcHRpb25zOiBzZ2luU3RyLnN1YnN0cigwLCBzZ2luU3RyLmxlbmd0aCAtIDEpXHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IGdldFNwbGljaW5nID0gKGRhdGEpID0+IHtcclxuICBsZXQgc3RyID0gJyc7XHJcbiAgZm9yICh2YXIgaSBpbiBkYXRhKSB7XHJcbiAgICBzdHIgKz0gaSArICc9JyArIGRhdGFbaV0gKyAnJic7XHJcbiAgfVxyXG4gIHJldHVybiBzdHIuc3Vic3RyKDAsIHN0ci5sZW5ndGggLSAxKVxyXG59O1xyXG5cclxuY29uc3QgZ2V0VGltZSA9ICgpID0+IHtcclxuICByZXR1cm4gcGFyc2VJbnQobmV3IERhdGUoKS5nZXRUaW1lKCkgLyAxMDAwKTtcclxufTtcclxuXHJcbmNvbnN0IGdldFBsYXRmb3JtTmFtZSA9ICgpID0+IHtcclxuICBjb25zdCBwbGF0Zm9ybUxpc3QgPSB7XHJcbiAgICAnYXBwLXBsdXMnOiAnbicsXHJcbiAgICAnaDUnOiAnaDUnLFxyXG4gICAgJ21wLXdlaXhpbic6ICd3eCcsXHJcbiAgICAnbXAtYWxpcGF5JzogJ2FsaScsXHJcbiAgICAnbXAtYmFpZHUnOiAnYmQnLFxyXG4gICAgJ21wLXRvdXRpYW8nOiAndHQnLFxyXG4gICAgJ21wLXFxJzogJ3FxJ1xyXG4gIH07XHJcbiAgcmV0dXJuIHBsYXRmb3JtTGlzdFtwcm9jZXNzLmVudi5WVUVfQVBQX1BMQVRGT1JNXTtcclxufTtcclxuXHJcbmNvbnN0IGdldFBhY2tOYW1lID0gKCkgPT4ge1xyXG4gIGxldCBwYWNrTmFtZSA9ICcnO1xyXG4gIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ3d4JyB8fCBnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ3FxJykge1xyXG4gICAgLy8g5YW85a655b6u5L+h5bCP56iL5bqP5L2O54mI5pys5Z+656GA5bqTXHJcbiAgICBpZih1bmkuY2FuSVVzZSgnZ2V0QWNjb3VudEluZm9TeW5jJykpe1xyXG4gICAgICBwYWNrTmFtZSA9IHVuaS5nZXRBY2NvdW50SW5mb1N5bmMoKS5taW5pUHJvZ3JhbS5hcHBJZCB8fCAnJztcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHBhY2tOYW1lXHJcbn07XHJcblxyXG5jb25zdCBnZXRWZXJzaW9uID0gKCkgPT4ge1xyXG4gIHJldHVybiBnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nID8gcGx1cy5ydW50aW1lLnZlcnNpb24gOiAnJztcclxufTtcclxuXHJcbmNvbnN0IGdldENoYW5uZWwgPSAoKSA9PiB7XHJcbiAgY29uc3QgcGxhdGZvcm1OYW1lID0gZ2V0UGxhdGZvcm1OYW1lKCk7XHJcbiAgbGV0IGNoYW5uZWwgPSAnJztcclxuICBpZiAocGxhdGZvcm1OYW1lID09PSAnbicpIHtcclxuICAgIGNoYW5uZWwgPSBwbHVzLnJ1bnRpbWUuY2hhbm5lbDtcclxuICB9XHJcbiAgcmV0dXJuIGNoYW5uZWw7XHJcbn07XHJcblxyXG5jb25zdCBnZXRTY2VuZSA9IChvcHRpb25zKSA9PiB7XHJcbiAgY29uc3QgcGxhdGZvcm1OYW1lID0gZ2V0UGxhdGZvcm1OYW1lKCk7XHJcbiAgbGV0IHNjZW5lID0gJyc7XHJcbiAgaWYgKG9wdGlvbnMpIHtcclxuICAgIHJldHVybiBvcHRpb25zO1xyXG4gIH1cclxuICBpZiAocGxhdGZvcm1OYW1lID09PSAnd3gnKSB7XHJcbiAgICBzY2VuZSA9IHVuaS5nZXRMYXVuY2hPcHRpb25zU3luYygpLnNjZW5lO1xyXG4gIH1cclxuICByZXR1cm4gc2NlbmU7XHJcbn07XHJcbmNvbnN0IEZpcnN0X19WaXNpdF9fVGltZV9fS0VZID0gJ0ZpcnN0X19WaXNpdF9fVGltZSc7XHJcbmNvbnN0IExhc3RfX1Zpc2l0X19UaW1lX19LRVkgPSAnTGFzdF9fVmlzaXRfX1RpbWUnO1xyXG5cclxuY29uc3QgZ2V0Rmlyc3RWaXNpdFRpbWUgPSAoKSA9PiB7XHJcbiAgY29uc3QgdGltZVN0b3JnZSA9IHVuaS5nZXRTdG9yYWdlU3luYyhGaXJzdF9fVmlzaXRfX1RpbWVfX0tFWSk7XHJcbiAgbGV0IHRpbWUgPSAwO1xyXG4gIGlmICh0aW1lU3RvcmdlKSB7XHJcbiAgICB0aW1lID0gdGltZVN0b3JnZTtcclxuICB9IGVsc2Uge1xyXG4gICAgdGltZSA9IGdldFRpbWUoKTtcclxuICAgIHVuaS5zZXRTdG9yYWdlU3luYyhGaXJzdF9fVmlzaXRfX1RpbWVfX0tFWSwgdGltZSk7XHJcbiAgICB1bmkucmVtb3ZlU3RvcmFnZVN5bmMoTGFzdF9fVmlzaXRfX1RpbWVfX0tFWSk7XHJcbiAgfVxyXG4gIHJldHVybiB0aW1lO1xyXG59O1xyXG5cclxuY29uc3QgZ2V0TGFzdFZpc2l0VGltZSA9ICgpID0+IHtcclxuICBjb25zdCB0aW1lU3RvcmdlID0gdW5pLmdldFN0b3JhZ2VTeW5jKExhc3RfX1Zpc2l0X19UaW1lX19LRVkpO1xyXG4gIGxldCB0aW1lID0gMDtcclxuICBpZiAodGltZVN0b3JnZSkge1xyXG4gICAgdGltZSA9IHRpbWVTdG9yZ2U7XHJcbiAgfSBlbHNlIHtcclxuICAgIHRpbWUgPSAnJztcclxuICB9XHJcbiAgdW5pLnNldFN0b3JhZ2VTeW5jKExhc3RfX1Zpc2l0X19UaW1lX19LRVksIGdldFRpbWUoKSk7XHJcbiAgcmV0dXJuIHRpbWU7XHJcbn07XHJcblxyXG5cclxuY29uc3QgUEFHRV9SRVNJREVOQ0VfVElNRSA9ICdfX3BhZ2VfX3Jlc2lkZW5jZV9fdGltZSc7XHJcbmxldCBGaXJzdF9QYWdlX3Jlc2lkZW5jZV90aW1lID0gMDtcclxubGV0IExhc3RfUGFnZV9yZXNpZGVuY2VfdGltZSA9IDA7XHJcblxyXG5cclxuY29uc3Qgc2V0UGFnZVJlc2lkZW5jZVRpbWUgPSAoKSA9PiB7XHJcbiAgRmlyc3RfUGFnZV9yZXNpZGVuY2VfdGltZSA9IGdldFRpbWUoKTtcclxuICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xyXG4gICAgdW5pLnNldFN0b3JhZ2VTeW5jKFBBR0VfUkVTSURFTkNFX1RJTUUsIGdldFRpbWUoKSk7XHJcbiAgfVxyXG4gIHJldHVybiBGaXJzdF9QYWdlX3Jlc2lkZW5jZV90aW1lXHJcbn07XHJcblxyXG5jb25zdCBnZXRQYWdlUmVzaWRlbmNlVGltZSA9ICgpID0+IHtcclxuICBMYXN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUgPSBnZXRUaW1lKCk7XHJcbiAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicpIHtcclxuICAgIEZpcnN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoUEFHRV9SRVNJREVOQ0VfVElNRSk7XHJcbiAgfVxyXG4gIHJldHVybiBMYXN0X1BhZ2VfcmVzaWRlbmNlX3RpbWUgLSBGaXJzdF9QYWdlX3Jlc2lkZW5jZV90aW1lXHJcbn07XHJcbmNvbnN0IFRPVEFMX19WSVNJVF9fQ09VTlQgPSAnVG90YWxfX1Zpc2l0X19Db3VudCc7XHJcbmNvbnN0IGdldFRvdGFsVmlzaXRDb3VudCA9ICgpID0+IHtcclxuICBjb25zdCB0aW1lU3RvcmdlID0gdW5pLmdldFN0b3JhZ2VTeW5jKFRPVEFMX19WSVNJVF9fQ09VTlQpO1xyXG4gIGxldCBjb3VudCA9IDE7XHJcbiAgaWYgKHRpbWVTdG9yZ2UpIHtcclxuICAgIGNvdW50ID0gdGltZVN0b3JnZTtcclxuICAgIGNvdW50Kys7XHJcbiAgfVxyXG4gIHVuaS5zZXRTdG9yYWdlU3luYyhUT1RBTF9fVklTSVRfX0NPVU5ULCBjb3VudCk7XHJcbiAgcmV0dXJuIGNvdW50O1xyXG59O1xyXG5cclxuY29uc3QgR2V0RW5jb2RlVVJJQ29tcG9uZW50T3B0aW9ucyA9IChzdGF0RGF0YSkgPT4ge1xyXG4gIGxldCBkYXRhID0ge307XHJcbiAgZm9yIChsZXQgcHJvcCBpbiBzdGF0RGF0YSkge1xyXG4gICAgZGF0YVtwcm9wXSA9IGVuY29kZVVSSUNvbXBvbmVudChzdGF0RGF0YVtwcm9wXSk7XHJcbiAgfVxyXG4gIHJldHVybiBkYXRhO1xyXG59O1xyXG5cclxubGV0IFNldF9fRmlyc3RfX1RpbWUgPSAwO1xyXG5sZXQgU2V0X19MYXN0X19UaW1lID0gMDtcclxuXHJcbmNvbnN0IGdldEZpcnN0VGltZSA9ICgpID0+IHtcclxuICBsZXQgdGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gIFNldF9fRmlyc3RfX1RpbWUgPSB0aW1lO1xyXG4gIFNldF9fTGFzdF9fVGltZSA9IDA7XHJcbiAgcmV0dXJuIHRpbWU7XHJcbn07XHJcblxyXG5cclxuY29uc3QgZ2V0TGFzdFRpbWUgPSAoKSA9PiB7XHJcbiAgbGV0IHRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICBTZXRfX0xhc3RfX1RpbWUgPSB0aW1lO1xyXG4gIHJldHVybiB0aW1lO1xyXG59O1xyXG5cclxuXHJcbmNvbnN0IGdldFJlc2lkZW5jZVRpbWUgPSAodHlwZSkgPT4ge1xyXG4gIGxldCByZXNpZGVuY2VUaW1lID0gMDtcclxuICBpZiAoU2V0X19GaXJzdF9fVGltZSAhPT0gMCkge1xyXG4gICAgcmVzaWRlbmNlVGltZSA9IFNldF9fTGFzdF9fVGltZSAtIFNldF9fRmlyc3RfX1RpbWU7XHJcbiAgfVxyXG5cclxuICByZXNpZGVuY2VUaW1lID0gcGFyc2VJbnQocmVzaWRlbmNlVGltZSAvIDEwMDApO1xyXG4gIHJlc2lkZW5jZVRpbWUgPSByZXNpZGVuY2VUaW1lIDwgMSA/IDEgOiByZXNpZGVuY2VUaW1lO1xyXG4gIGlmICh0eXBlID09PSAnYXBwJykge1xyXG4gICAgbGV0IG92ZXJ0aW1lID0gcmVzaWRlbmNlVGltZSA+IEFQUF9QVkVSX1RJTUUgPyB0cnVlIDogZmFsc2U7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZXNpZGVuY2VUaW1lLFxyXG4gICAgICBvdmVydGltZVxyXG4gICAgfTtcclxuICB9XHJcbiAgaWYgKHR5cGUgPT09ICdwYWdlJykge1xyXG4gICAgbGV0IG92ZXJ0aW1lID0gcmVzaWRlbmNlVGltZSA+IFBBR0VfUFZFUl9USU1FID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcmVzaWRlbmNlVGltZSxcclxuICAgICAgb3ZlcnRpbWVcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcmVzaWRlbmNlVGltZVxyXG4gIH07XHJcblxyXG59O1xyXG5cclxuY29uc3QgZ2V0Um91dGUgPSAoKSA9PiB7XHJcbiAgdmFyIHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XHJcbiAgdmFyIHBhZ2UgPSBwYWdlc1twYWdlcy5sZW5ndGggLSAxXTtcclxuICBsZXQgX3NlbGYgPSBwYWdlLiR2bTtcclxuXHJcbiAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnYmQnKSB7XHJcbiAgICByZXR1cm4gX3NlbGYuJG1wICYmIF9zZWxmLiRtcC5wYWdlLmlzO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gKF9zZWxmLiRzY29wZSAmJiBfc2VsZi4kc2NvcGUucm91dGUpIHx8IChfc2VsZi4kbXAgJiYgX3NlbGYuJG1wLnBhZ2Uucm91dGUpO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGdldFBhZ2VSb3V0ZSA9IChzZWxmKSA9PiB7XHJcbiAgdmFyIHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XHJcbiAgdmFyIHBhZ2UgPSBwYWdlc1twYWdlcy5sZW5ndGggLSAxXTtcclxuICBsZXQgX3NlbGYgPSBwYWdlLiR2bTtcclxuICBsZXQgcXVlcnkgPSBzZWxmLl9xdWVyeTtcclxuICBsZXQgc3RyID0gcXVlcnkgJiYgSlNPTi5zdHJpbmdpZnkocXVlcnkpICE9PSAne30nID8gJz8nICsgSlNPTi5zdHJpbmdpZnkocXVlcnkpIDogJyc7XHJcbiAgLy8gY2xlYXJcclxuICBzZWxmLl9xdWVyeSA9ICcnO1xyXG4gIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ2JkJykge1xyXG4gICAgcmV0dXJuIF9zZWxmLiRtcCAmJiBfc2VsZi4kbXAucGFnZS5pcyArIHN0cjtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIChfc2VsZi4kc2NvcGUgJiYgX3NlbGYuJHNjb3BlLnJvdXRlICsgc3RyICl8fCAoX3NlbGYuJG1wICYmIF9zZWxmLiRtcC5wYWdlLnJvdXRlICsgc3RyKTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBnZXRQYWdlVHlwZXMgPSAoc2VsZikgPT4ge1xyXG4gIGlmIChzZWxmLm1wVHlwZSA9PT0gJ3BhZ2UnIHx8IChzZWxmLiRtcCAmJiBzZWxmLiRtcC5tcFR5cGUgPT09ICdwYWdlJykgfHwgc2VsZi4kb3B0aW9ucy5tcFR5cGUgPT09ICdwYWdlJykge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG4gIHJldHVybiBmYWxzZTtcclxufTtcclxuXHJcbmNvbnN0IGNhbGlicmF0aW9uID0gKGV2ZW50TmFtZSwgb3B0aW9ucykgPT4ge1xyXG4gIC8vICBsb2dpbiDjgIEgc2hhcmUg44CBcGF5X3N1Y2Nlc3Mg44CBcGF5X2ZhaWwg44CBcmVnaXN0ZXIg44CBdGl0bGVcclxuICBpZighZXZlbnROYW1lKXtcclxuICAgIGNvbnNvbGUuZXJyb3IoYHVuaS5yZXBvcnQg57y65bCRIFtldmVudE5hbWVdIOWPguaVsGApO1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcbiAgaWYgKHR5cGVvZiBldmVudE5hbWUgIT09ICdzdHJpbmcnKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGB1bmkucmVwb3J0IFtldmVudE5hbWVdIOWPguaVsOexu+Wei+mUmeivryzlj6rog73kuLogU3RyaW5nIOexu+Wei2ApO1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcbiAgaWYgKGV2ZW50TmFtZS5sZW5ndGggPiAyNTUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoYHVuaS5yZXBvcnQgW2V2ZW50TmFtZV0g5Y+C5pWw6ZW/5bqm5LiN6IO95aSn5LqOIDI1NWApO1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcblxyXG4gIGlmICh0eXBlb2Ygb3B0aW9ucyAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIG9wdGlvbnMgIT09ICdvYmplY3QnKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKGB1bmkucmVwb3J0IFtvcHRpb25zXSDlj4LmlbDnsbvlnovplJnor68s5Y+q6IO95Li6IFN0cmluZyDmiJYgT2JqZWN0IOexu+Wei2ApO1xyXG4gICAgcmV0dXJuIHRydWVcclxuICB9XHJcblxyXG4gIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3N0cmluZycgJiYgb3B0aW9ucy5sZW5ndGggPiAyNTUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoYHVuaS5yZXBvcnQgW29wdGlvbnNdIOWPguaVsOmVv+W6puS4jeiDveWkp+S6jiAyNTVgKTtcclxuICAgIHJldHVybiB0cnVlXHJcbiAgfVxyXG5cclxuICBpZiAoZXZlbnROYW1lID09PSAndGl0bGUnICYmIHR5cGVvZiBvcHRpb25zICE9PSAnc3RyaW5nJykge1xyXG4gICAgY29uc29sZS5lcnJvcigndW5pLnJlcG9ydCBbZXZlbnROYW1lXSDlj4LmlbDkuLogdGl0bGUg5pe277yMW29wdGlvbnNdIOWPguaVsOWPquiDveS4uiBTdHJpbmcg57G75Z6LJyk7XHJcbiAgICByZXR1cm4gdHJ1ZVxyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IFBhZ2VzSnNvbiA9IHJlcXVpcmUoJ3VuaS1wYWdlcz97XCJ0eXBlXCI6XCJzdHlsZVwifScpLmRlZmF1bHQ7XHJcbmNvbnN0IHN0YXRDb25maWcgPSByZXF1aXJlKCd1bmktc3RhdC1jb25maWcnKS5kZWZhdWx0IHx8IHJlcXVpcmUoJ3VuaS1zdGF0LWNvbmZpZycpO1xyXG5cclxuY29uc3QgcmVzdWx0T3B0aW9ucyA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpO1xyXG5cclxuY2xhc3MgVXRpbCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnNlbGYgPSAnJztcclxuICAgIHRoaXMuX3JldHJ5ID0gMDtcclxuICAgIHRoaXMuX3BsYXRmb3JtID0gJyc7XHJcbiAgICB0aGlzLl9xdWVyeSA9IHt9O1xyXG4gICAgdGhpcy5fbmF2aWdhdGlvbkJhclRpdGxlID0ge1xyXG4gICAgICBjb25maWc6ICcnLFxyXG4gICAgICBwYWdlOiAnJyxcclxuICAgICAgcmVwb3J0OiAnJyxcclxuICAgICAgbHQ6ICcnXHJcbiAgICB9O1xyXG4gICAgdGhpcy5fb3BlcmF0aW5nVGltZSA9IDA7XHJcbiAgICB0aGlzLl9yZXBvcnRpbmdSZXF1ZXN0RGF0YSA9IHtcclxuICAgICAgJzEnOiBbXSxcclxuICAgICAgJzExJzogW11cclxuICAgIH07XHJcbiAgICB0aGlzLl9fcHJldmVudF90cmlnZ2VyaW5nID0gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5fX2xpY2F0aW9uSGlkZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5fX2xpY2F0aW9uU2hvdyA9IGZhbHNlO1xyXG4gICAgdGhpcy5fbGFzdFBhZ2VSb3V0ZSA9ICcnO1xyXG4gICAgdGhpcy5zdGF0RGF0YSA9IHtcclxuICAgICAgdXVpZDogZ2V0VXVpZCgpLFxyXG4gICAgICB1dDogZ2V0UGxhdGZvcm1OYW1lKCksXHJcbiAgICAgIG1wbjogZ2V0UGFja05hbWUoKSxcclxuICAgICAgYWs6IHN0YXRDb25maWcuYXBwaWQsXHJcbiAgICAgIHVzdjogU1RBVF9WRVJTSU9OLFxyXG4gICAgICB2OiBnZXRWZXJzaW9uKCksXHJcbiAgICAgIGNoOiBnZXRDaGFubmVsKCksXHJcbiAgICAgIGNuOiAnJyxcclxuICAgICAgcG46ICcnLFxyXG4gICAgICBjdDogJycsXHJcbiAgICAgIHQ6IGdldFRpbWUoKSxcclxuICAgICAgdHQ6ICcnLFxyXG4gICAgICBwOiByZXN1bHRPcHRpb25zLnBsYXRmb3JtID09PSAnYW5kcm9pZCcgPyAnYScgOiAnaScsXHJcbiAgICAgIGJyYW5kOiByZXN1bHRPcHRpb25zLmJyYW5kIHx8ICcnLFxyXG4gICAgICBtZDogcmVzdWx0T3B0aW9ucy5tb2RlbCxcclxuICAgICAgc3Y6IHJlc3VsdE9wdGlvbnMuc3lzdGVtLnJlcGxhY2UoLyhBbmRyb2lkfGlPUylcXHMvLCAnJyksXHJcbiAgICAgIG1wc2RrOiByZXN1bHRPcHRpb25zLlNES1ZlcnNpb24gfHwgJycsXHJcbiAgICAgIG1wdjogcmVzdWx0T3B0aW9ucy52ZXJzaW9uIHx8ICcnLFxyXG4gICAgICBsYW5nOiByZXN1bHRPcHRpb25zLmxhbmd1YWdlLFxyXG4gICAgICBwcjogcmVzdWx0T3B0aW9ucy5waXhlbFJhdGlvLFxyXG4gICAgICB3dzogcmVzdWx0T3B0aW9ucy53aW5kb3dXaWR0aCxcclxuICAgICAgd2g6IHJlc3VsdE9wdGlvbnMud2luZG93SGVpZ2h0LFxyXG4gICAgICBzdzogcmVzdWx0T3B0aW9ucy5zY3JlZW5XaWR0aCxcclxuICAgICAgc2g6IHJlc3VsdE9wdGlvbnMuc2NyZWVuSGVpZ2h0XHJcbiAgICB9O1xyXG5cclxuICB9XHJcblxyXG4gIF9hcHBsaWNhdGlvblNob3coKSB7XHJcbiAgICBpZiAodGhpcy5fX2xpY2F0aW9uSGlkZSkge1xyXG4gICAgICBnZXRMYXN0VGltZSgpO1xyXG4gICAgICBjb25zdCB0aW1lID0gZ2V0UmVzaWRlbmNlVGltZSgnYXBwJyk7XHJcbiAgICAgIGlmICh0aW1lLm92ZXJ0aW1lKSB7XHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICBwYXRoOiB0aGlzLl9sYXN0UGFnZVJvdXRlLFxyXG4gICAgICAgICAgc2NlbmU6IHRoaXMuc3RhdERhdGEuc2NcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuX3NlbmRSZXBvcnRSZXF1ZXN0KG9wdGlvbnMpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuX19saWNhdGlvbkhpZGUgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9hcHBsaWNhdGlvbkhpZGUoc2VsZiwgdHlwZSkge1xyXG5cclxuICAgIHRoaXMuX19saWNhdGlvbkhpZGUgPSB0cnVlO1xyXG4gICAgZ2V0TGFzdFRpbWUoKTtcclxuICAgIGNvbnN0IHRpbWUgPSBnZXRSZXNpZGVuY2VUaW1lKCk7XHJcbiAgICBnZXRGaXJzdFRpbWUoKTtcclxuICAgIGNvbnN0IHJvdXRlID0gZ2V0UGFnZVJvdXRlKHRoaXMpO1xyXG4gICAgdGhpcy5fc2VuZEhpZGVSZXF1ZXN0KHtcclxuICAgICAgdXJscmVmOiByb3V0ZSxcclxuICAgICAgdXJscmVmX3RzOiB0aW1lLnJlc2lkZW5jZVRpbWVcclxuICAgIH0sIHR5cGUpO1xyXG4gIH1cclxuXHJcbiAgX3BhZ2VTaG93KCkge1xyXG4gICAgY29uc3Qgcm91dGUgPSBnZXRQYWdlUm91dGUodGhpcyk7XHJcbiAgICBjb25zdCByb3V0ZXBhdGggPSBnZXRSb3V0ZSgpO1xyXG4gICAgdGhpcy5fbmF2aWdhdGlvbkJhclRpdGxlLmNvbmZpZyA9IFBhZ2VzSnNvbiAmJlxyXG4gICAgICBQYWdlc0pzb24ucGFnZXNbcm91dGVwYXRoXSAmJlxyXG4gICAgICBQYWdlc0pzb24ucGFnZXNbcm91dGVwYXRoXS50aXRsZU5WaWV3ICYmXHJcbiAgICAgIFBhZ2VzSnNvbi5wYWdlc1tyb3V0ZXBhdGhdLnRpdGxlTlZpZXcudGl0bGVUZXh0IHx8XHJcbiAgICAgIFBhZ2VzSnNvbiAmJlxyXG4gICAgICBQYWdlc0pzb24ucGFnZXNbcm91dGVwYXRoXSAmJlxyXG4gICAgICBQYWdlc0pzb24ucGFnZXNbcm91dGVwYXRoXS5uYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IHx8ICcnO1xyXG5cclxuICAgIGlmICh0aGlzLl9fbGljYXRpb25TaG93KSB7XHJcbiAgICAgIGdldEZpcnN0VGltZSgpO1xyXG4gICAgICB0aGlzLl9fbGljYXRpb25TaG93ID0gZmFsc2U7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKCfov5nmmK8gb25MYXVjaCDkuYvlkI7miafooYznmoTnrKzkuIDmrKEgcGFnZVNob3cg77yM5Li65LiL5qyh6K6w5b2V5pe26Ze05YGa5YeG5aSHJyk7XHJcbiAgICAgIHRoaXMuX2xhc3RQYWdlUm91dGUgPSByb3V0ZTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGdldExhc3RUaW1lKCk7XHJcbiAgICB0aGlzLl9sYXN0UGFnZVJvdXRlID0gcm91dGU7XHJcbiAgICBjb25zdCB0aW1lID0gZ2V0UmVzaWRlbmNlVGltZSgncGFnZScpO1xyXG4gICAgaWYgKHRpbWUub3ZlcnRpbWUpIHtcclxuICAgICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgcGF0aDogdGhpcy5fbGFzdFBhZ2VSb3V0ZSxcclxuICAgICAgICBzY2VuZTogdGhpcy5zdGF0RGF0YS5zY1xyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLl9zZW5kUmVwb3J0UmVxdWVzdChvcHRpb25zKTtcclxuICAgIH1cclxuICAgIGdldEZpcnN0VGltZSgpO1xyXG4gIH1cclxuXHJcbiAgX3BhZ2VIaWRlKCkge1xyXG4gICAgaWYgKCF0aGlzLl9fbGljYXRpb25IaWRlKSB7XHJcbiAgICAgIGdldExhc3RUaW1lKCk7XHJcbiAgICAgIGNvbnN0IHRpbWUgPSBnZXRSZXNpZGVuY2VUaW1lKCdwYWdlJyk7XHJcbiAgICAgIHRoaXMuX3NlbmRQYWdlUmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiB0aGlzLl9sYXN0UGFnZVJvdXRlLFxyXG4gICAgICAgIHVybHJlZjogdGhpcy5fbGFzdFBhZ2VSb3V0ZSxcclxuICAgICAgICB1cmxyZWZfdHM6IHRpbWUucmVzaWRlbmNlVGltZVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5fbmF2aWdhdGlvbkJhclRpdGxlID0ge1xyXG4gICAgICAgIGNvbmZpZzogJycsXHJcbiAgICAgICAgcGFnZTogJycsXHJcbiAgICAgICAgcmVwb3J0OiAnJyxcclxuICAgICAgICBsdDogJydcclxuICAgICAgfTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX2xvZ2luKCkge1xyXG4gICAgdGhpcy5fc2VuZEV2ZW50UmVxdWVzdCh7XHJcbiAgICAgIGtleTogJ2xvZ2luJ1xyXG4gICAgfSwgMCk7XHJcbiAgfVxyXG5cclxuICBfc2hhcmUoKSB7XHJcbiAgICB0aGlzLl9zZW5kRXZlbnRSZXF1ZXN0KHtcclxuICAgICAga2V5OiAnc2hhcmUnXHJcbiAgICB9LCAwKTtcclxuICB9XHJcbiAgX3BheW1lbnQoa2V5KSB7XHJcbiAgICB0aGlzLl9zZW5kRXZlbnRSZXF1ZXN0KHtcclxuICAgICAga2V5XHJcbiAgICB9LCAwKTtcclxuICB9XHJcbiAgX3NlbmRSZXBvcnRSZXF1ZXN0KG9wdGlvbnMpIHtcclxuXHJcbiAgICB0aGlzLl9uYXZpZ2F0aW9uQmFyVGl0bGUubHQgPSAnMSc7XHJcbiAgICBsZXQgcXVlcnkgPSBvcHRpb25zLnF1ZXJ5ICYmIEpTT04uc3RyaW5naWZ5KG9wdGlvbnMucXVlcnkpICE9PSAne30nID8gJz8nICsgSlNPTi5zdHJpbmdpZnkob3B0aW9ucy5xdWVyeSkgOiAnJztcclxuICAgIHRoaXMuc3RhdERhdGEubHQgPSAnMSc7XHJcbiAgICB0aGlzLnN0YXREYXRhLnVybCA9IChvcHRpb25zLnBhdGggKyBxdWVyeSkgfHwgJyc7XHJcbiAgICB0aGlzLnN0YXREYXRhLnQgPSBnZXRUaW1lKCk7XHJcbiAgICB0aGlzLnN0YXREYXRhLnNjID0gZ2V0U2NlbmUob3B0aW9ucy5zY2VuZSk7XHJcbiAgICB0aGlzLnN0YXREYXRhLmZ2dHMgPSBnZXRGaXJzdFZpc2l0VGltZSgpO1xyXG4gICAgdGhpcy5zdGF0RGF0YS5sdnRzID0gZ2V0TGFzdFZpc2l0VGltZSgpO1xyXG4gICAgdGhpcy5zdGF0RGF0YS50dmMgPSBnZXRUb3RhbFZpc2l0Q291bnQoKTtcclxuICAgIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICAgIHRoaXMuZ2V0UHJvcGVydHkoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZ2V0TmV0d29ya0luZm8oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIF9zZW5kUGFnZVJlcXVlc3Qob3B0KSB7XHJcbiAgICBsZXQge1xyXG4gICAgICB1cmwsXHJcbiAgICAgIHVybHJlZixcclxuICAgICAgdXJscmVmX3RzXHJcbiAgICB9ID0gb3B0O1xyXG4gICAgdGhpcy5fbmF2aWdhdGlvbkJhclRpdGxlLmx0ID0gJzExJztcclxuICAgIGxldCBvcHRpb25zID0ge1xyXG4gICAgICBhazogdGhpcy5zdGF0RGF0YS5hayxcclxuICAgICAgdXVpZDogdGhpcy5zdGF0RGF0YS51dWlkLFxyXG4gICAgICBsdDogJzExJyxcclxuICAgICAgdXQ6IHRoaXMuc3RhdERhdGEudXQsXHJcbiAgICAgIHVybCxcclxuICAgICAgdHQ6IHRoaXMuc3RhdERhdGEudHQsXHJcbiAgICAgIHVybHJlZixcclxuICAgICAgdXJscmVmX3RzLFxyXG4gICAgICBjaDogdGhpcy5zdGF0RGF0YS5jaCxcclxuICAgICAgdXN2OiB0aGlzLnN0YXREYXRhLnVzdixcclxuICAgICAgdDogZ2V0VGltZSgpLFxyXG4gICAgICBwOiB0aGlzLnN0YXREYXRhLnBcclxuICAgIH07XHJcbiAgICB0aGlzLnJlcXVlc3Qob3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBfc2VuZEhpZGVSZXF1ZXN0KG9wdCwgdHlwZSkge1xyXG4gICAgbGV0IHtcclxuICAgICAgdXJscmVmLFxyXG4gICAgICB1cmxyZWZfdHNcclxuICAgIH0gPSBvcHQ7XHJcbiAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgYWs6IHRoaXMuc3RhdERhdGEuYWssXHJcbiAgICAgIHV1aWQ6IHRoaXMuc3RhdERhdGEudXVpZCxcclxuICAgICAgbHQ6ICczJyxcclxuICAgICAgdXQ6IHRoaXMuc3RhdERhdGEudXQsXHJcbiAgICAgIHVybHJlZixcclxuICAgICAgdXJscmVmX3RzLFxyXG4gICAgICBjaDogdGhpcy5zdGF0RGF0YS5jaCxcclxuICAgICAgdXN2OiB0aGlzLnN0YXREYXRhLnVzdixcclxuICAgICAgdDogZ2V0VGltZSgpLFxyXG4gICAgICBwOiB0aGlzLnN0YXREYXRhLnBcclxuICAgIH07XHJcbiAgICB0aGlzLnJlcXVlc3Qob3B0aW9ucywgdHlwZSk7XHJcbiAgfVxyXG4gIF9zZW5kRXZlbnRSZXF1ZXN0KHtcclxuICAgIGtleSA9ICcnLFxyXG4gICAgdmFsdWUgPSBcIlwiXHJcbiAgfSA9IHt9KSB7XHJcbiAgICBjb25zdCByb3V0ZSA9IHRoaXMuX2xhc3RQYWdlUm91dGU7XHJcbiAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgYWs6IHRoaXMuc3RhdERhdGEuYWssXHJcbiAgICAgIHV1aWQ6IHRoaXMuc3RhdERhdGEudXVpZCxcclxuICAgICAgbHQ6ICcyMScsXHJcbiAgICAgIHV0OiB0aGlzLnN0YXREYXRhLnV0LFxyXG4gICAgICB1cmw6IHJvdXRlLFxyXG4gICAgICBjaDogdGhpcy5zdGF0RGF0YS5jaCxcclxuICAgICAgZV9uOiBrZXksXHJcbiAgICAgIGVfdjogdHlwZW9mKHZhbHVlKSA9PT0gJ29iamVjdCcgPyBKU09OLnN0cmluZ2lmeSh2YWx1ZSkgOiB2YWx1ZS50b1N0cmluZygpLFxyXG4gICAgICB1c3Y6IHRoaXMuc3RhdERhdGEudXN2LFxyXG4gICAgICB0OiBnZXRUaW1lKCksXHJcbiAgICAgIHA6IHRoaXMuc3RhdERhdGEucFxyXG4gICAgfTtcclxuICAgIHRoaXMucmVxdWVzdChvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIGdldE5ldHdvcmtJbmZvKCkge1xyXG4gICAgdW5pLmdldE5ldHdvcmtUeXBlKHtcclxuICAgICAgc3VjY2VzczogKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc3RhdERhdGEubmV0ID0gcmVzdWx0Lm5ldHdvcmtUeXBlO1xyXG4gICAgICAgIHRoaXMuZ2V0TG9jYXRpb24oKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRQcm9wZXJ0eSgpIHtcclxuICAgIHBsdXMucnVudGltZS5nZXRQcm9wZXJ0eShwbHVzLnJ1bnRpbWUuYXBwaWQsICh3Z3RpbmZvKSA9PiB7XHJcbiAgICAgIHRoaXMuc3RhdERhdGEudiA9IHdndGluZm8udmVyc2lvbiB8fCAnJztcclxuICAgICAgdGhpcy5nZXROZXR3b3JrSW5mbygpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRMb2NhdGlvbigpIHtcclxuICAgIGlmIChzdGF0Q29uZmlnLmdldExvY2F0aW9uKSB7XHJcbiAgICAgIHVuaS5nZXRMb2NhdGlvbih7XHJcbiAgICAgICAgdHlwZTogJ3dnczg0JyxcclxuICAgICAgICBnZW9jb2RlOiB0cnVlLFxyXG4gICAgICAgIHN1Y2Nlc3M6IChyZXN1bHQpID0+IHtcclxuICAgICAgICAgIGlmIChyZXN1bHQuYWRkcmVzcykge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXREYXRhLmNuID0gcmVzdWx0LmFkZHJlc3MuY291bnRyeTtcclxuICAgICAgICAgICAgdGhpcy5zdGF0RGF0YS5wbiA9IHJlc3VsdC5hZGRyZXNzLnByb3ZpbmNlO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXREYXRhLmN0ID0gcmVzdWx0LmFkZHJlc3MuY2l0eTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB0aGlzLnN0YXREYXRhLmxhdCA9IHJlc3VsdC5sYXRpdHVkZTtcclxuICAgICAgICAgIHRoaXMuc3RhdERhdGEubG5nID0gcmVzdWx0LmxvbmdpdHVkZTtcclxuICAgICAgICAgIHRoaXMucmVxdWVzdCh0aGlzLnN0YXREYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zdGF0RGF0YS5sYXQgPSAwO1xyXG4gICAgICB0aGlzLnN0YXREYXRhLmxuZyA9IDA7XHJcbiAgICAgIHRoaXMucmVxdWVzdCh0aGlzLnN0YXREYXRhKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlcXVlc3QoZGF0YSwgdHlwZSkge1xyXG4gICAgbGV0IHRpbWUgPSBnZXRUaW1lKCk7XHJcbiAgICBjb25zdCB0aXRsZSA9IHRoaXMuX25hdmlnYXRpb25CYXJUaXRsZTtcclxuICAgIGRhdGEudHRuID0gdGl0bGUucGFnZTtcclxuICAgIGRhdGEudHRwaiA9IHRpdGxlLmNvbmZpZztcclxuICAgIGRhdGEudHRjID0gdGl0bGUucmVwb3J0O1xyXG5cclxuICAgIGxldCByZXF1ZXN0RGF0YSA9IHRoaXMuX3JlcG9ydGluZ1JlcXVlc3REYXRhO1xyXG4gICAgaWYgKGdldFBsYXRmb3JtTmFtZSgpID09PSAnbicpIHtcclxuICAgICAgcmVxdWVzdERhdGEgPSB1bmkuZ2V0U3RvcmFnZVN5bmMoJ19fVU5JX19TVEFUX19EQVRBJykgfHwge307XHJcbiAgICB9XHJcbiAgICBpZiAoIXJlcXVlc3REYXRhW2RhdGEubHRdKSB7XHJcbiAgICAgIHJlcXVlc3REYXRhW2RhdGEubHRdID0gW107XHJcbiAgICB9XHJcbiAgICByZXF1ZXN0RGF0YVtkYXRhLmx0XS5wdXNoKGRhdGEpO1xyXG5cclxuICAgIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICAgIHVuaS5zZXRTdG9yYWdlU3luYygnX19VTklfX1NUQVRfX0RBVEEnLCByZXF1ZXN0RGF0YSk7XHJcbiAgICB9XHJcbiAgICBpZiAoZ2V0UGFnZVJlc2lkZW5jZVRpbWUoKSA8IE9QRVJBVElOR19USU1FICYmICF0eXBlKSB7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgbGV0IHVuaVN0YXREYXRhID0gdGhpcy5fcmVwb3J0aW5nUmVxdWVzdERhdGE7XHJcbiAgICBpZiAoZ2V0UGxhdGZvcm1OYW1lKCkgPT09ICduJykge1xyXG4gICAgICB1bmlTdGF0RGF0YSA9IHVuaS5nZXRTdG9yYWdlU3luYygnX19VTklfX1NUQVRfX0RBVEEnKTtcclxuICAgIH1cclxuICAgIC8vIOaXtumXtOi2hei/h++8jOmHjeaWsOiOt+WPluaXtumXtOaIs1xyXG4gICAgc2V0UGFnZVJlc2lkZW5jZVRpbWUoKTtcclxuICAgIGxldCBmaXJzdEFyciA9IFtdO1xyXG4gICAgbGV0IGNvbnRlbnRBcnIgPSBbXTtcclxuICAgIGxldCBsYXN0QXJyID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgaSBpbiB1bmlTdGF0RGF0YSkge1xyXG4gICAgICBjb25zdCByZCA9IHVuaVN0YXREYXRhW2ldO1xyXG4gICAgICByZC5mb3JFYWNoKChlbG0pID0+IHtcclxuICAgICAgICBjb25zdCBuZXdEYXRhID0gZ2V0U3BsaWNpbmcoZWxtKTtcclxuICAgICAgICBpZiAoaSA9PT0gMCkge1xyXG4gICAgICAgICAgZmlyc3RBcnIucHVzaChuZXdEYXRhKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGkgPT09IDMpIHtcclxuICAgICAgICAgIGxhc3RBcnIucHVzaChuZXdEYXRhKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29udGVudEFyci5wdXNoKG5ld0RhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZmlyc3RBcnIucHVzaCguLi5jb250ZW50QXJyLCAuLi5sYXN0QXJyKTtcclxuICAgIGxldCBvcHRpb25zRGF0YSA9IHtcclxuICAgICAgdXN2OiBTVEFUX1ZFUlNJT04sIC8v57uf6K6hIFNESyDniYjmnKzlj7dcclxuICAgICAgdDogdGltZSwgLy/lj5HpgIHor7fmsYLml7bnmoTml7bpl7TmiK5cclxuICAgICAgcmVxdWVzdHM6IEpTT04uc3RyaW5naWZ5KGZpcnN0QXJyKSxcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5fcmVwb3J0aW5nUmVxdWVzdERhdGEgPSB7fTtcclxuICAgIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nKSB7XHJcbiAgICAgIHVuaS5yZW1vdmVTdG9yYWdlU3luYygnX19VTklfX1NUQVRfX0RBVEEnKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGF0YS51dCA9PT0gJ2g1Jykge1xyXG4gICAgICB0aGlzLmltYWdlUmVxdWVzdChvcHRpb25zRGF0YSk7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIGlmIChnZXRQbGF0Zm9ybU5hbWUoKSA9PT0gJ24nICYmIHRoaXMuc3RhdERhdGEucCA9PT0gJ2EnKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuX3NlbmRSZXF1ZXN0KG9wdGlvbnNEYXRhKTtcclxuICAgICAgfSwgMjAwKTtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICB0aGlzLl9zZW5kUmVxdWVzdChvcHRpb25zRGF0YSk7XHJcbiAgfVxyXG4gIF9zZW5kUmVxdWVzdChvcHRpb25zRGF0YSkge1xyXG4gICAgdW5pLnJlcXVlc3Qoe1xyXG4gICAgICB1cmw6IFNUQVRfVVJMLFxyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgLy8gaGVhZGVyOiB7XHJcbiAgICAgIC8vICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyAvLyDpu5jorqTlgLxcclxuICAgICAgLy8gfSxcclxuICAgICAgZGF0YTogb3B0aW9uc0RhdGEsXHJcbiAgICAgIHN1Y2Nlc3M6ICgpID0+IHtcclxuICAgICAgICAvLyBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcclxuICAgICAgICAvLyAgIGNvbnNvbGUubG9nKCdzdGF0IHJlcXVlc3Qgc3VjY2VzcycpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgfSxcclxuICAgICAgZmFpbDogKGUpID0+IHtcclxuICAgICAgICBpZiAoKyt0aGlzLl9yZXRyeSA8IDMpIHtcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9zZW5kUmVxdWVzdChvcHRpb25zRGF0YSk7XHJcbiAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBoNSDor7fmsYJcclxuICAgKi9cclxuICBpbWFnZVJlcXVlc3QoZGF0YSkge1xyXG4gICAgbGV0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICBsZXQgb3B0aW9ucyA9IGdldFNnaW4oR2V0RW5jb2RlVVJJQ29tcG9uZW50T3B0aW9ucyhkYXRhKSkub3B0aW9ucztcclxuICAgIGltYWdlLnNyYyA9IFNUQVRfSDVfVVJMICsgJz8nICsgb3B0aW9ucztcclxuICB9XHJcblxyXG4gIHNlbmRFdmVudChrZXksIHZhbHVlKSB7XHJcbiAgICAvLyDmoKHpqowgdHlwZSDlj4LmlbBcclxuICAgIGlmIChjYWxpYnJhdGlvbihrZXksIHZhbHVlKSkgcmV0dXJuXHJcblxyXG4gICAgaWYgKGtleSA9PT0gJ3RpdGxlJykge1xyXG4gICAgICB0aGlzLl9uYXZpZ2F0aW9uQmFyVGl0bGUucmVwb3J0ID0gdmFsdWU7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgdGhpcy5fc2VuZEV2ZW50UmVxdWVzdCh7XHJcbiAgICAgIGtleSxcclxuICAgICAgdmFsdWU6IHR5cGVvZih2YWx1ZSkgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkodmFsdWUpIDogdmFsdWVcclxuICAgIH0sIDEpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbmNsYXNzIFN0YXQgZXh0ZW5kcyBVdGlsIHtcclxuICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XHJcbiAgICBpZiAoIXRoaXMuaW5zdGFuY2UpIHtcclxuICAgICAgdGhpcy5pbnN0YW5jZSA9IG5ldyBTdGF0KCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcclxuICB9XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5pbnN0YW5jZSA9IG51bGw7XHJcbiAgICAvLyDms6jlhozmi6bmiKrlmahcclxuICAgIGlmICh0eXBlb2YgdW5pLmFkZEludGVyY2VwdG9yID09PSAnZnVuY3Rpb24nICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAnZGV2ZWxvcG1lbnQnKSB7XHJcbiAgICAgIHRoaXMuYWRkSW50ZXJjZXB0b3JJbml0KCk7XHJcbiAgICAgIHRoaXMuaW50ZXJjZXB0TG9naW4oKTtcclxuICAgICAgdGhpcy5pbnRlcmNlcHRTaGFyZSh0cnVlKTtcclxuICAgICAgdGhpcy5pbnRlcmNlcHRSZXF1ZXN0UGF5bWVudCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYWRkSW50ZXJjZXB0b3JJbml0KCkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgdW5pLmFkZEludGVyY2VwdG9yKCdzZXROYXZpZ2F0aW9uQmFyVGl0bGUnLCB7XHJcbiAgICAgIGludm9rZShhcmdzKSB7XHJcbiAgICAgICAgc2VsZi5fbmF2aWdhdGlvbkJhclRpdGxlLnBhZ2UgPSBhcmdzLnRpdGxlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGludGVyY2VwdExvZ2luKCkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgdW5pLmFkZEludGVyY2VwdG9yKCdsb2dpbicsIHtcclxuICAgICAgY29tcGxldGUoKSB7XHJcbiAgICAgICAgc2VsZi5fbG9naW4oKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpbnRlcmNlcHRTaGFyZSh0eXBlKSB7XHJcbiAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICBpZiAoIXR5cGUpIHtcclxuICAgICAgc2VsZi5fc2hhcmUoKTtcclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICB1bmkuYWRkSW50ZXJjZXB0b3IoJ3NoYXJlJywge1xyXG4gICAgICBzdWNjZXNzKCkge1xyXG4gICAgICAgIHNlbGYuX3NoYXJlKCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWwoKSB7XHJcbiAgICAgICAgc2VsZi5fc2hhcmUoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpbnRlcmNlcHRSZXF1ZXN0UGF5bWVudCgpIHtcclxuICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgIHVuaS5hZGRJbnRlcmNlcHRvcigncmVxdWVzdFBheW1lbnQnLCB7XHJcbiAgICAgIHN1Y2Nlc3MoKSB7XHJcbiAgICAgICAgc2VsZi5fcGF5bWVudCgncGF5X3N1Y2Nlc3MnKTtcclxuICAgICAgfSxcclxuICAgICAgZmFpbCgpIHtcclxuICAgICAgICBzZWxmLl9wYXltZW50KCdwYXlfZmFpbCcpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlcG9ydChvcHRpb25zLCBzZWxmKSB7XHJcbiAgICB0aGlzLnNlbGYgPSBzZWxmO1xyXG4gICAgLy8gaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKCdyZXBvcnQgaW5pdCcpO1xyXG4gICAgLy8gfVxyXG4gICAgc2V0UGFnZVJlc2lkZW5jZVRpbWUoKTtcclxuICAgIHRoaXMuX19saWNhdGlvblNob3cgPSB0cnVlO1xyXG4gICAgdGhpcy5fc2VuZFJlcG9ydFJlcXVlc3Qob3B0aW9ucywgdHJ1ZSk7XHJcbiAgfVxyXG5cclxuICBsb2FkKG9wdGlvbnMsIHNlbGYpIHtcclxuICAgIGlmICghc2VsZi4kc2NvcGUgJiYgIXNlbGYuJG1wKSB7XHJcbiAgICAgIGNvbnN0IHBhZ2UgPSBnZXRDdXJyZW50UGFnZXMoKTtcclxuICAgICAgc2VsZi4kc2NvcGUgPSBwYWdlW3BhZ2UubGVuZ3RoIC0gMV07XHJcbiAgICB9XHJcbiAgICB0aGlzLnNlbGYgPSBzZWxmO1xyXG4gICAgdGhpcy5fcXVlcnkgPSBvcHRpb25zO1xyXG4gIH1cclxuXHJcbiAgc2hvdyhzZWxmKSB7XHJcbiAgICB0aGlzLnNlbGYgPSBzZWxmO1xyXG4gICAgaWYgKGdldFBhZ2VUeXBlcyhzZWxmKSkge1xyXG4gICAgICB0aGlzLl9wYWdlU2hvdyhzZWxmKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2FwcGxpY2F0aW9uU2hvdyhzZWxmKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlYWR5KHNlbGYpIHtcclxuICAgIC8vIHRoaXMuc2VsZiA9IHNlbGY7XHJcbiAgICAvLyBpZiAoZ2V0UGFnZVR5cGVzKHNlbGYpKSB7XHJcbiAgICAvLyAgIHRoaXMuX3BhZ2VTaG93KHNlbGYpO1xyXG4gICAgLy8gfVxyXG4gIH1cclxuICBoaWRlKHNlbGYpIHtcclxuICAgIHRoaXMuc2VsZiA9IHNlbGY7XHJcbiAgICBpZiAoZ2V0UGFnZVR5cGVzKHNlbGYpKSB7XHJcbiAgICAgIHRoaXMuX3BhZ2VIaWRlKHNlbGYpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fYXBwbGljYXRpb25IaWRlKHNlbGYsIHRydWUpO1xyXG4gICAgfVxyXG4gIH1cclxuICBlcnJvcihlbSkge1xyXG4gICAgaWYgKHRoaXMuX3BsYXRmb3JtID09PSAnZGV2dG9vbHMnKSB7XHJcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xyXG4gICAgICAgIGNvbnNvbGUuaW5mbygn5b2T5YmN6L+Q6KGM546v5aKD5Li65byA5Y+R6ICF5bel5YW377yM5LiN5LiK5oql5pWw5o2u44CCJyk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IGVtVmFsID0gJyc7XHJcbiAgICBpZiAoIWVtLm1lc3NhZ2UpIHtcclxuICAgICAgZW1WYWwgPSBKU09OLnN0cmluZ2lmeShlbSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBlbVZhbCA9IGVtLnN0YWNrO1xyXG4gICAgfVxyXG4gICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgIGFrOiB0aGlzLnN0YXREYXRhLmFrLFxyXG4gICAgICB1dWlkOiB0aGlzLnN0YXREYXRhLnV1aWQsXHJcbiAgICAgIGx0OiAnMzEnLFxyXG4gICAgICB1dDogdGhpcy5zdGF0RGF0YS51dCxcclxuICAgICAgY2g6IHRoaXMuc3RhdERhdGEuY2gsXHJcbiAgICAgIG1wc2RrOiB0aGlzLnN0YXREYXRhLm1wc2RrLFxyXG4gICAgICBtcHY6IHRoaXMuc3RhdERhdGEubXB2LFxyXG4gICAgICB2OiB0aGlzLnN0YXREYXRhLnYsXHJcbiAgICAgIGVtOiBlbVZhbCxcclxuICAgICAgdXN2OiB0aGlzLnN0YXREYXRhLnVzdixcclxuICAgICAgdDogZ2V0VGltZSgpLFxyXG4gICAgICBwOiB0aGlzLnN0YXREYXRhLnBcclxuICAgIH07XHJcbiAgICB0aGlzLnJlcXVlc3Qob3B0aW9ucyk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBzdGF0ID0gU3RhdC5nZXRJbnN0YW5jZSgpO1xyXG5sZXQgaXNIaWRlID0gZmFsc2U7XHJcbmNvbnN0IGxpZmVjeWNsZSA9IHtcclxuICBvbkxhdW5jaChvcHRpb25zKSB7XHJcbiAgICBzdGF0LnJlcG9ydChvcHRpb25zLCB0aGlzKTtcclxuICB9LFxyXG4gIG9uUmVhZHkoKSB7XHJcbiAgICBzdGF0LnJlYWR5KHRoaXMpO1xyXG4gIH0sXHJcbiAgb25Mb2FkKG9wdGlvbnMpIHtcclxuICAgIHN0YXQubG9hZChvcHRpb25zLCB0aGlzKTtcclxuICAgIC8vIOmHjeWGmeWIhuS6q++8jOiOt+WPluWIhuS6q+S4iuaKpeS6i+S7tlxyXG4gICAgaWYgKHRoaXMuJHNjb3BlICYmIHRoaXMuJHNjb3BlLm9uU2hhcmVBcHBNZXNzYWdlKSB7XHJcbiAgICAgIGxldCBvbGRTaGFyZUFwcE1lc3NhZ2UgPSB0aGlzLiRzY29wZS5vblNoYXJlQXBwTWVzc2FnZTtcclxuICAgICAgdGhpcy4kc2NvcGUub25TaGFyZUFwcE1lc3NhZ2UgPSBmdW5jdGlvbihvcHRpb25zKSB7XHJcbiAgICAgICAgc3RhdC5pbnRlcmNlcHRTaGFyZShmYWxzZSk7XHJcbiAgICAgICAgcmV0dXJuIG9sZFNoYXJlQXBwTWVzc2FnZS5jYWxsKHRoaXMsIG9wdGlvbnMpXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfSxcclxuICBvblNob3coKSB7XHJcbiAgICBpc0hpZGUgPSBmYWxzZTtcclxuICAgIHN0YXQuc2hvdyh0aGlzKTtcclxuICB9LFxyXG4gIG9uSGlkZSgpIHtcclxuICAgIGlzSGlkZSA9IHRydWU7XHJcbiAgICBzdGF0LmhpZGUodGhpcyk7XHJcbiAgfSxcclxuICBvblVubG9hZCgpIHtcclxuICAgIGlmIChpc0hpZGUpIHtcclxuICAgICAgaXNIaWRlID0gZmFsc2U7XHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgc3RhdC5oaWRlKHRoaXMpO1xyXG4gIH0sXHJcbiAgb25FcnJvcihlKSB7XHJcbiAgICBzdGF0LmVycm9yKGUpO1xyXG4gIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIG1haW4oKSB7XHJcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XHJcbiAgICB1bmkucmVwb3J0ID0gZnVuY3Rpb24odHlwZSwgb3B0aW9ucykge307XHJcbiAgfWVsc2V7XHJcbiAgICBjb25zdCBWdWUgPSByZXF1aXJlKCd2dWUnKTtcclxuICAgIChWdWUuZGVmYXVsdCB8fCBWdWUpLm1peGluKGxpZmVjeWNsZSk7XHJcbiAgICB1bmkucmVwb3J0ID0gZnVuY3Rpb24odHlwZSwgb3B0aW9ucykge1xyXG4gICAgICBzdGF0LnNlbmRFdmVudCh0eXBlLCBvcHRpb25zKTtcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5tYWluKCk7XHJcbiIsIi8qIGdsb2JhbHMgX19WVUVfU1NSX0NPTlRFWFRfXyAqL1xuXG4vLyBJTVBPUlRBTlQ6IERvIE5PVCB1c2UgRVMyMDE1IGZlYXR1cmVzIGluIHRoaXMgZmlsZSAoZXhjZXB0IGZvciBtb2R1bGVzKS5cbi8vIFRoaXMgbW9kdWxlIGlzIGEgcnVudGltZSB1dGlsaXR5IGZvciBjbGVhbmVyIGNvbXBvbmVudCBtb2R1bGUgb3V0cHV0IGFuZCB3aWxsXG4vLyBiZSBpbmNsdWRlZCBpbiB0aGUgZmluYWwgd2VicGFjayB1c2VyIGJ1bmRsZS5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50IChcbiAgc2NyaXB0RXhwb3J0cyxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZ1bmN0aW9uYWxUZW1wbGF0ZSxcbiAgaW5qZWN0U3R5bGVzLFxuICBzY29wZUlkLFxuICBtb2R1bGVJZGVudGlmaWVyLCAvKiBzZXJ2ZXIgb25seSAqL1xuICBzaGFkb3dNb2RlIC8qIHZ1ZS1jbGkgb25seSAqL1xuKSB7XG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zXG4gICAgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAocmVuZGVyKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSByZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IHN0YXRpY1JlbmRlckZuc1xuICAgIG9wdGlvbnMuX2NvbXBpbGVkID0gdHJ1ZVxuICB9XG5cbiAgLy8gZnVuY3Rpb25hbCB0ZW1wbGF0ZVxuICBpZiAoZnVuY3Rpb25hbFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5mdW5jdGlvbmFsID0gdHJ1ZVxuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gJ2RhdGEtdi0nICsgc2NvcGVJZFxuICB9XG5cbiAgdmFyIGhvb2tcbiAgaWYgKG1vZHVsZUlkZW50aWZpZXIpIHsgLy8gc2VydmVyIGJ1aWxkXG4gICAgaG9vayA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAvLyAyLjMgaW5qZWN0aW9uXG4gICAgICBjb250ZXh0ID1cbiAgICAgICAgY29udGV4dCB8fCAvLyBjYWNoZWQgY2FsbFxuICAgICAgICAodGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuc3NyQ29udGV4dCkgfHwgLy8gc3RhdGVmdWxcbiAgICAgICAgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LiR2bm9kZSAmJiB0aGlzLnBhcmVudC4kdm5vZGUuc3NyQ29udGV4dCkgLy8gZnVuY3Rpb25hbFxuICAgICAgLy8gMi4yIHdpdGggcnVuSW5OZXdDb250ZXh0OiB0cnVlXG4gICAgICBpZiAoIWNvbnRleHQgJiYgdHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX18gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnRleHQgPSBfX1ZVRV9TU1JfQ09OVEVYVF9fXG4gICAgICB9XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHN0eWxlc1xuICAgICAgaWYgKGluamVjdFN0eWxlcykge1xuICAgICAgICBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCBjb250ZXh0KVxuICAgICAgfVxuICAgICAgLy8gcmVnaXN0ZXIgY29tcG9uZW50IG1vZHVsZSBpZGVudGlmaWVyIGZvciBhc3luYyBjaHVuayBpbmZlcnJlbmNlXG4gICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cykge1xuICAgICAgICBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQobW9kdWxlSWRlbnRpZmllcilcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdXNlZCBieSBzc3IgaW4gY2FzZSBjb21wb25lbnQgaXMgY2FjaGVkIGFuZCBiZWZvcmVDcmVhdGVcbiAgICAvLyBuZXZlciBnZXRzIGNhbGxlZFxuICAgIG9wdGlvbnMuX3NzclJlZ2lzdGVyID0gaG9va1xuICB9IGVsc2UgaWYgKGluamVjdFN0eWxlcykge1xuICAgIGhvb2sgPSBzaGFkb3dNb2RlXG4gICAgICA/IGZ1bmN0aW9uICgpIHsgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgdGhpcy4kcm9vdC4kb3B0aW9ucy5zaGFkb3dSb290KSB9XG4gICAgICA6IGluamVjdFN0eWxlc1xuICB9XG5cbiAgaWYgKGhvb2spIHtcbiAgICBpZiAob3B0aW9ucy5mdW5jdGlvbmFsKSB7XG4gICAgICAvLyBmb3IgdGVtcGxhdGUtb25seSBob3QtcmVsb2FkIGJlY2F1c2UgaW4gdGhhdCBjYXNlIHRoZSByZW5kZXIgZm4gZG9lc24ndFxuICAgICAgLy8gZ28gdGhyb3VnaCB0aGUgbm9ybWFsaXplclxuICAgICAgb3B0aW9ucy5faW5qZWN0U3R5bGVzID0gaG9va1xuICAgICAgLy8gcmVnaXN0ZXIgZm9yIGZ1bmN0aW9hbCBjb21wb25lbnQgaW4gdnVlIGZpbGVcbiAgICAgIHZhciBvcmlnaW5hbFJlbmRlciA9IG9wdGlvbnMucmVuZGVyXG4gICAgICBvcHRpb25zLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcldpdGhTdHlsZUluamVjdGlvbiAoaCwgY29udGV4dCkge1xuICAgICAgICBob29rLmNhbGwoY29udGV4dClcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsUmVuZGVyKGgsIGNvbnRleHQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgcmVnaXN0cmF0aW9uIGFzIGJlZm9yZUNyZWF0ZSBob29rXG4gICAgICB2YXIgZXhpc3RpbmcgPSBvcHRpb25zLmJlZm9yZUNyZWF0ZVxuICAgICAgb3B0aW9ucy5iZWZvcmVDcmVhdGUgPSBleGlzdGluZ1xuICAgICAgICA/IFtdLmNvbmNhdChleGlzdGluZywgaG9vaylcbiAgICAgICAgOiBbaG9va11cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9XG59XG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3VuaS1pY29ucy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzU1NWRmNDkmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdW5pLWljb25zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vdW5pLWljb25zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzICgpIHtcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbn1cbmlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG59XG5pZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vdW5pLWljb25zLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTc1NTVkZjQ5JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL3VuaS1pY29ucy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03NTU1ZGY0OSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIikuZGVmYXVsdClcbiAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI3NTU1ZGY0OVwiLFxuICBcIjc2MzFlYjUwXCJcbiAgXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwid2ViMS91bmlhcHAvaGVsbG8vY29tcG9uZW50cy91bmktaWNvbnMvdW5pLWljb25zLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS5yZWN5Y2xlLmpzIS4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC0wIS4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3Z1ZS1sb2FkZXIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VuaS1pY29ucy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzU1NWRmNDkmc2NvcGVkPXRydWUmXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwidS10ZXh0XCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6IFtcInVuaS1pY29uc1wiXSxcbiAgICAgIHN0eWxlOiB7IGNvbG9yOiBfdm0uY29sb3IsIFwiZm9udC1zaXplXCI6IF92bS5zaXplICsgXCJweFwiIH0sXG4gICAgICBvbjogeyBjbGljazogX3ZtLl9vbkNsaWNrIH1cbiAgICB9LFxuICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5pY29uc1tfdm0udHlwZV0pKV1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3Z1ZS1sb2FkZXIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VuaS1pY29ucy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3Z1ZS1sb2FkZXIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VuaS1pY29ucy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCI8dGVtcGxhdGU+XHJcblx0PHRleHQgOnN0eWxlPVwieyBjb2xvcjogY29sb3IsICdmb250LXNpemUnOiBzaXplICsgJ3B4JyB9XCIgY2xhc3M9XCJ1bmktaWNvbnNcIiBAY2xpY2s9XCJfb25DbGlja1wiPnt7aWNvbnNbdHlwZV19fTwvdGV4dD5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0aW1wb3J0IGljb25zIGZyb20gJy4vaWNvbnMuanMnO1xyXG5cdC8vICNpZmRlZiBBUFAtTlZVRVxyXG5cdHZhciBkb21Nb2R1bGUgPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ2RvbScpO1xyXG5cdGRvbU1vZHVsZS5hZGRSdWxlKCdmb250RmFjZScsIHtcclxuXHRcdCdmb250RmFtaWx5JzogXCJ1bmlpY29uc1wiLFxyXG5cdFx0J3NyYyc6IFwidXJsKCdkYXRhOmZvbnQvdHJ1ZXR5cGU7Y2hhcnNldD11dGYtODtiYXNlNjQsQUFFQUFBQVFBUUFBQkFBQVJrWlVUWWo0M3NzQUFIYllBQUFBSEVkRVJVWUFKd0JtQUFCMnVBQUFBQjVQVXk4eVdXbGNxZ0FBQVlnQUFBQmdZMjFoY0dCaGJCVUFBQUswQUFBQ1FtTjJkQ0FNcGY0MEFBQVBLQUFBQUNSbWNHZHRNUGVlbFFBQUJQZ0FBQW1XWjJGemNBQUFBQkFBQUhhd0FBQUFDR2RzZVdac2ZnZlpBQUFRRUFBQVlReG9aV0ZrRm9mNi93QUFBUXdBQUFBMmFHaGxZUWQrQXlZQUFBRkVBQUFBSkdodGRIZ2tlQnVZQUFBQjZBQUFBTXBzYjJOaFBFa25MZ0FBRDB3QUFBRENiV0Y0Y0FJakEzSUFBQUZvQUFBQUlHNWhiV1hXT1R0VUFBQnhIQUFBQWRSd2IzTjBUSkU0aWdBQWN2QUFBQU8vY0hKbGNLVzV2bVlBQUE2UUFBQUFsUUFCQUFBQUFRQUFDVi9PT1Y4UFBQVUFId1FBQUFBQUFObXFXN2tBQUFBQTJhcGNDUUFBL3lBRUFBTWdBQUFBQ0FBQ0FBQUFBQUFBQUFFQUFBTWcveUFBWEFRQUFBQUFBQVFBQUFFQUFBQUFBQUFBQUFBQUFBQUFBQUFGQUFFQUFBQmdBWG9BREFBQUFBQUFBZ0JHQUZRQWJBQUFBUVFCb2dBQUFBQUFCQVAvQVpBQUJnQUFBcGtDekFBQUFJOENtUUxNQUFBQjZ3QXpBUWtBQUFJQUJnTUFBQUFBQUFBQUFBQUJFQUFBQUFBQUFBQUFBQUFBVUVaRlJBR0FBQjNtRWdNcy95d0FYQU1nQU9BQUFBQUJBQUFBQUFNWUFzMEFBQUFnQUFFQmRnQWlBQUFBQUFGVkFBQUQ2UUFzQkFBQVlBREFBTUFBWUFEQUFNQUFvQUNBQUlBQVlBQ2dBSUFBZ0FCZ0FMTUFRQUJBQUFVQVZ3QmVBSUFCQUFEMEFRQUE5QUVBQUVBQVZnQ2dBT0FBd0FEQUFGRUFmZ0NBQUdBQVFBQmdBR0FBWUFBK0FGRUFZQUJBQUdBQVlBQTBBR0FBUGdGQUFRQUFnQUJBQUFBQUpRQ0JBUUFCUUFGQUFTd0FnQUJnQUlBQXdBQmdBR0FBd0FEQkFRQUFnQUNBQUdBQVlBREJBRUFBUkFCQUFCY0JYd0FUQU1BQXdBRkFBVUFCUUFGQUFNQUF3QUVlQUY4QVZRQkFBQUFBQUFBREFBQUFBd0FBQUJ3QUFRQUFBQUFCUEFBREFBRUFBQUFjQUFRQklBQUFBRVFBUUFBRkFBUUFBQUFkQUhqaEF1RXk0Z1BpTStKazR3UGpNK05nNDJUa0NlUVI1QlBrTk9RNTVFUGtadVJvNUhMbENPVXc1VExsTmVVMzVXRGxZK1ZsNVdqbGllV1E1aEwvL3dBQUFBQUFIUUI0NFFEaE1PSUE0akRpWU9NQTR6TGpZT05qNUFEa0VPUVQ1RFRrTitSQTVHRGthT1J3NVFEbE1PVXk1VFRsTitWZzVXTGxaZVZuNVlEbGtPWVMvLzhBQWYvay80c2ZCQjdYSGdvZDNoMnlIUmNjNlJ5OUhMc2NJQndhSEJrYitSdjNHL0ViMVJ2VUc4MGJRQnNaR3hnYkZ4c1dHdTRhN1Jyc0d1c2ExQnJPR2swQUFRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQkJnQUFBUUFBQUFBQUFBQUJBZ0FBQUFJQUFBQUFBQUFBQUFBQUFBQUFBQUFCQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQXdBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQXNBQXNzQ0JnWmkyd0FTd2daQ0N3d0ZDd0JDWmFzQVJGVzFnaEl5RWJpbGdnc0ZCUVdDR3dRRmtiSUxBNFVGZ2hzRGhaV1NDd0NrVmhaTEFvVUZnaHNBcEZJTEF3VUZnaHNEQlpHeUN3d0ZCWUlHWWdpb3BoSUxBS1VGaGdHeUN3SUZCWUliQUtZQnNnc0RaUVdDR3dObUFiWUZsWldSdXdBQ3RaV1NPd0FGQllaVmxaTGJBQ0xDQkZJTEFFSldGa0lMQUZRMUJZc0FValFyQUdJMEliSVNGWnNBRmdMYkFETENNaEl5RWdaTEVGWWtJZ3NBWWpRcklLQUFJcUlTQ3dCa01naWlDS3NBQXJzVEFGSllwUldHQlFHMkZTV1ZnaldTRWdzRUJUV0xBQUt4c2hzRUJaSTdBQVVGaGxXUzJ3QkN5d0NDTkNzQWNqUXJBQUkwS3dBRU93QjBOUldMQUlReXV5QUFFQVEyQkNzQlpsSEZrdHNBVXNzQUJESUVVZ3NBSkZZN0FCUldKZ1JDMndCaXl3QUVNZ1JTQ3dBQ3Nqc1FRRUpXQWdSWW9qWVNCa0lMQWdVRmdoc0FBYnNEQlFXTEFnRzdCQVdWa2pzQUJRV0dWWnNBTWxJMkZFUkMyd0J5eXhCUVZGc0FGaFJDMndDQ3l3QVdBZ0lMQUtRMHF3QUZCWUlMQUtJMEpac0F0RFNyQUFVbGdnc0FzalFsa3RzQWtzSUxnRUFHSWd1QVFBWTRvalliQU1RMkFnaW1BZ3NBd2pRaU10c0Fvc1MxUllzUWNCUkZra3NBMWxJM2d0c0Fzc1MxRllTMU5Zc1FjQlJGa2JJVmtrc0JObEkzZ3RzQXdzc1FBTlExVllzUTBOUTdBQllVS3dDU3Rac0FCRHNBSWxRcklBQVFCRFlFS3hDZ0lsUXJFTEFpVkNzQUVXSXlDd0F5VlFXTEFBUTdBRUpVS0tpaUNLSTJHd0NDb2hJN0FCWVNDS0kyR3dDQ29oRzdBQVE3QUNKVUt3QWlWaHNBZ3FJVm13Q2tOSHNBdERSMkN3Z0dJZ3NBSkZZN0FCUldKZ3NRQUFFeU5Fc0FGRHNBQStzZ0VCQVVOZ1FpMndEU3l4QUFWRlZGZ0FzQTBqUWlCZ3NBRmh0UTRPQVFBTUFFSkNpbUN4REFRcnNHc3JHeUpaTGJBT0xMRUFEU3N0c0E4c3NRRU5LeTJ3RUN5eEFnMHJMYkFSTExFRERTc3RzQklzc1FRTkt5MndFeXl4QlEwckxiQVVMTEVHRFNzdHNCVXNzUWNOS3kyd0ZpeXhDQTByTGJBWExMRUpEU3N0c0Jnc3NBY3JzUUFGUlZSWUFMQU5JMElnWUxBQlliVU9EZ0VBREFCQ1FvcGdzUXdFSzdCckt4c2lXUzJ3R1N5eEFCZ3JMYkFhTExFQkdDc3RzQnNzc1FJWUt5MndIQ3l4QXhnckxiQWRMTEVFR0NzdHNCNHNzUVVZS3kyd0h5eXhCaGdyTGJBZ0xMRUhHQ3N0c0NFc3NRZ1lLeTJ3SWl5eENSZ3JMYkFqTENCZ3NBNWdJRU1qc0FGZ1E3QUNKYkFDSlZGWUl5QThzQUZnSTdBU1pSd2JJU0ZaTGJBa0xMQWpLN0FqS2kyd0pTd2dJRWNnSUxBQ1JXT3dBVVZpWUNOaE9DTWdpbFZZSUVjZ0lMQUNSV093QVVWaVlDTmhPQnNoV1Myd0ppeXhBQVZGVkZnQXNBRVdzQ1Vxc0FFVk1Cc2lXUzJ3Snl5d0J5dXhBQVZGVkZnQXNBRVdzQ1Vxc0FFVk1Cc2lXUzJ3S0N3Z05iQUJZQzJ3S1N3QXNBTkZZN0FCUldLd0FDdXdBa1Zqc0FGRllyQUFLN0FBRnJRQUFBQUFBRVErSXppeEtBRVZLaTJ3S2l3Z1BDQkhJTEFDUldPd0FVVmlZTEFBUTJFNExiQXJMQzRYUEMyd0xDd2dQQ0JISUxBQ1JXT3dBVVZpWUxBQVEyR3dBVU5qT0Myd0xTeXhBZ0FXSlNBdUlFZXdBQ05Dc0FJbFNZcUtSeU5ISTJFZ1dHSWJJVm13QVNOQ3Npd0JBUlVVS2kyd0xpeXdBQmF3QkNXd0JDVkhJMGNqWWJBR1JTdGxpaTRqSUNBOGlqZ3RzQzhzc0FBV3NBUWxzQVFsSUM1SEkwY2pZU0N3QkNOQ3NBWkZLeUN3WUZCWUlMQkFVVml6QWlBRElCdXpBaVlER2xsQ1FpTWdzQWxESUlvalJ5TkhJMkVqUm1Dd0JFT3dnR0pnSUxBQUt5Q0tpbUVnc0FKRFlHUWpzQU5EWVdSUVdMQUNRMkVic0FORFlGbXdBeVd3Z0dKaEl5QWdzQVFtSTBaaE9Cc2pzQWxEUnJBQ0piQUpRMGNqUnlOaFlDQ3dCRU93Z0dKZ0l5Q3dBQ3Nqc0FSRFlMQUFLN0FGSldHd0JTV3dnR0t3QkNaaElMQUVKV0JrSTdBREpXQmtVRmdoR3lNaFdTTWdJTEFFSmlOR1lUaFpMYkF3TExBQUZpQWdJTEFGSmlBdVJ5TkhJMkVqUERndHNERXNzQUFXSUxBSkkwSWdJQ0JHSTBld0FDc2pZVGd0c0RJc3NBQVdzQU1sc0FJbFJ5TkhJMkd3QUZSWUxpQThJeUVic0FJbHNBSWxSeU5ISTJFZ3NBVWxzQVFsUnlOSEkyR3dCaVd3QlNWSnNBSWxZYkFCUldNaklGaGlHeUZaWTdBQlJXSmdJeTRqSUNBOGlqZ2pJVmt0c0RNc3NBQVdJTEFKUXlBdVJ5TkhJMkVnWUxBZ1lHYXdnR0lqSUNBOGlqZ3RzRFFzSXlBdVJyQUNKVVpTV0NBOFdTNnhKQUVVS3kyd05Td2pJQzVHc0FJbFJsQllJRHhaTHJFa0FSUXJMYkEyTENNZ0xrYXdBaVZHVWxnZ1BGa2pJQzVHc0FJbFJsQllJRHhaTHJFa0FSUXJMYkEzTExBdUt5TWdMa2F3QWlWR1VsZ2dQRmt1c1NRQkZDc3RzRGdzc0M4cmlpQWdQTEFFSTBLS09DTWdMa2F3QWlWR1VsZ2dQRmt1c1NRQkZDdXdCRU11c0NRckxiQTVMTEFBRnJBRUpiQUVKaUF1UnlOSEkyR3dCa1VySXlBOElDNGpPTEVrQVJRckxiQTZMTEVKQkNWQ3NBQVdzQVFsc0FRbElDNUhJMGNqWVNDd0JDTkNzQVpGS3lDd1lGQllJTEJBVVZpekFpQURJQnV6QWlZREdsbENRaU1nUjdBRVE3Q0FZbUFnc0FBcklJcUtZU0N3QWtOZ1pDT3dBME5oWkZCWXNBSkRZUnV3QTBOZ1diQURKYkNBWW1Hd0FpVkdZVGdqSUR3ak9Cc2hJQ0JHSTBld0FDc2pZVGdoV2JFa0FSUXJMYkE3TExBdUt5NnhKQUVVS3kyd1BDeXdMeXNoSXlBZ1BMQUVJMElqT0xFa0FSUXJzQVJETHJBa0t5MndQU3l3QUJVZ1I3QUFJMEt5QUFFQkZSUVRMckFxS2kyd1BpeXdBQlVnUjdBQUkwS3lBQUVCRlJRVExyQXFLaTJ3UHl5eEFBRVVFN0FyS2kyd1FDeXdMU290c0VFc3NBQVdSU01nTGlCR2lpTmhPTEVrQVJRckxiQkNMTEFKSTBLd1FTc3RzRU1zc2dBQU9pc3RzRVFzc2dBQk9pc3RzRVVzc2dFQU9pc3RzRVlzc2dFQk9pc3RzRWNzc2dBQU95c3RzRWdzc2dBQk95c3RzRWtzc2dFQU95c3RzRW9zc2dFQk95c3RzRXNzc2dBQU55c3RzRXdzc2dBQk55c3RzRTBzc2dFQU55c3RzRTRzc2dFQk55c3RzRThzc2dBQU9Tc3RzRkFzc2dBQk9Tc3RzRkVzc2dFQU9Tc3RzRklzc2dFQk9Tc3RzRk1zc2dBQVBDc3RzRlFzc2dBQlBDc3RzRlVzc2dFQVBDc3RzRllzc2dFQlBDc3RzRmNzc2dBQU9Dc3RzRmdzc2dBQk9Dc3RzRmtzc2dFQU9Dc3RzRm9zc2dFQk9Dc3RzRnNzc0RBckxyRWtBUlFyTGJCY0xMQXdLN0EwS3kyd1hTeXdNQ3V3TlNzdHNGNHNzQUFXc0RBcnNEWXJMYkJmTExBeEt5NnhKQUVVS3kyd1lDeXdNU3V3TkNzdHNHRXNzREVyc0RVckxiQmlMTEF4SzdBMkt5MndZeXl3TWlzdXNTUUJGQ3N0c0dRc3NESXJzRFFyTGJCbExMQXlLN0ExS3kyd1ppeXdNaXV3TmlzdHNHY3NzRE1yTHJFa0FSUXJMYkJvTExBeks3QTBLeTJ3YVN5d015dXdOU3N0c0dvc3NETXJzRFlyTGJCckxDdXdDR1d3QXlSUWVMQUJGVEF0QUFCTHVBRElVbGl4QVFHT1dia0lBQWdBWXlDd0FTTkVJTEFESTNDd0RrVWdJRXU0QUE1UlM3QUdVMXBZc0RRYnNDaFpZR1lnaWxWWXNBSWxZYkFCUldNallyQUNJMFN6Q2drRkJDdXpDZ3NGQkN1ekRnOEZCQ3Rac2dRb0NVVlNSTE1LRFFZRUs3RUdBVVN4SkFHSVVWaXdRSWhZc1FZRFJMRW1BWWhSV0xnRUFJaFlzUVlCUkZsWldWbTRBZitGc0FTTnNRVUFSQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBTWdBeUF4ai80UU1nL3lBREdQL2hBeUQvSUFBQUFDZ0FLQUFvQVdRQ0NnTzBCWW9HRGdhaUI0Z0lnQWpJQ1hZSjhBcDZDclFMR0F0c0RQZ04zQTUwRDF3UnloSXlFekFUbmhRYUZISVV2QlZBRmVJWEhCZDhHRW9Za0JqV0dUSVpqQm5vR21BYW9oc0NHMVFibEJ2cUhDZ2NlaHlpSE9BZERCMXFIYVFkNmg0SUhrWWVuaDdZSHpnZ21pRGtJUXdoSkNFOElWd2h2aUljSkdZa2lDVDBKWVltQUNaNEozWW50aWpFS1E0cGVpbTZLc1FzRUN3K0xMd3RTQzNlTGZZdURpNG1MajR1aUM3UUx4WXZYQzk0TDVvd0JqQ0dBQUFBQWdBaUFBQUJNZ0txQUFNQUJ3QXBRQ1lBQUFBREFnQURWd0FDQVFFQ1N3QUNBZ0ZQQkFFQkFnRkRBQUFIQmdVRUFBTUFBeEVGRHlzekVTRVJKek1SSXlJQkVPN016QUtxL1ZZaUFtWUFBQUFGQUN6LzRRTzhBeGdBRmdBd0FEb0FVZ0JlQVhkTHNCTlFXRUJLQWdFQURRNE5BQTVtQUFNT0FRNERYZ0FCQ0FnQlhCQUJDUWdLQmdsZUVRRU1CZ1FHREY0QUN3UUxhUThCQ0FBR0RBZ0dXQUFLQndVQ0JBc0tCRmtTQVE0T0RWRUFEUTBLRGtJYlM3QVhVRmhBU3dJQkFBME9EUUFPWmdBRERnRU9BMTRBQVFnSUFWd1FBUWtJQ2dnSkNtWVJBUXdHQkFZTVhnQUxCQXRwRHdFSUFBWU1DQVpZQUFvSEJRSUVDd29FV1JJQkRnNE5VUUFORFFvT1FodExzQmhRV0VCTUFnRUFEUTROQUE1bUFBTU9BUTREWGdBQkNBZ0JYQkFCQ1FnS0NBa0taaEVCREFZRUJnd0VaZ0FMQkF0cER3RUlBQVlNQ0FaWUFBb0hCUUlFQ3dvRVdSSUJEZzROVVFBTkRRb09RaHRBVGdJQkFBME9EUUFPWmdBRERnRU9Bd0ZtQUFFSURnRUlaQkFCQ1FnS0NBa0taaEVCREFZRUJnd0VaZ0FMQkF0cER3RUlBQVlNQ0FaWUFBb0hCUUlFQ3dvRVdSSUJEZzROVVFBTkRRb09RbGxaV1VBb1UxTTdPekl4RnhkVFhsTmVXMWc3VWp0U1MwTTNOVEU2TWpvWE1CY3dVUkV4R0JFb0ZVQVRGaXNCQmlzQklnNENIUUVoTlRRbU5UUXVBaXNCRlNFRkZSUVdGQTRDSXdZbUt3RW5JUWNyQVNJbklpNENQUUVYSWdZVUZqTXlOalFtRndZSERnTWVBVHNHTWpZbkxnRW5KaWNCTlRRK0Fqc0JNaFlkQVFFWkd4cFRFaVVjRWdPUUFRb1lKeDZGL2tvQ29nRVZIeU1PRGg4T0lDMytTU3dkSWhRWkdTQVRDSGNNRWhJTURSSVNqQWdHQlFzRUFnUVBEaVZEVVZCQUpCY1dDUVVKQlFVRy9xUUZEeG9WdkI4cEFoOEJEQmtuR2t3cEVCd0VEU0FiRW1HSU5CYzZPaVVYQ1FFQmdJQUJFeHNnRHFjL0VSb1JFUm9SZkJvV0V5UU9FQTBJR0JvTkl4RVRGQUYzNUFzWUV3d2RKdU1BQUFJQVlQK0FBNkFDd0FBSEFGY0FTRUJGU2tsRE9UZzJKeVljR1JjV0RBUURUdzhDQVFRQ1FBQUVBd0VEQkFGbUFBQUZBUUlEQUFKWkFBTUVBUU5OQUFNREFWRUFBUU1CUlFrSVRFc3dMUWhYQ1ZjVEVBWVFLd0FnQmhBV0lEWVFKVEllQWhVVUJ5WW5MZ0UxTkRjMU5qOERQZ0UzTmpjMk56WXZBVFVtTnpZbUp5WW5Jd1lIRGdFWEZnY1VCeFVPQVJjZUFSY1dGeFlWTUJVVUJoUVBBUlFqRGdFSEpqVTBQZ1FDclA2bzlQUUJXUFQrWUUyT1pqeFlVV2tFQWdFQkFRSUNBZ0VDQWcwRkV3Z0hDQUVFQ2dRT0V5aE5JMHdvRkE0RUNnUUJCQUVFQlE0SUJBNElBUUVDQVNsd0hGa2JNVWRUWXdMQTlQNm85UFFCV05FOFpvNU5pbW9oSHdFR0RnTURCZ01EQmdZR0F3VURIU0lXTENNVUFnRVZPUk02R2pNRkJUTWFPaE01RlFFQkFRb1RHaGtnQ1NFZUVDQUlBd1VDQVFFQkRDZ01hb3MwWTFOSE1Sc0FBQUFBQXdEQS8rQURRQUpnQUFBQVV3REFBVFpMc0F0UVdFQWNrNUtGQUFRQkM1NmFsWVI2QlFBQnFhZHpRa0EvRVFvSUNnQURRQnRMc0F4UVdFQWNrNUtGQUFRQkM1NmFsWVI2QlFBQnFhZHpRa0EvRVFvSUJ3QURRQnRBSEpPU2hRQUVBUXVlbXBXRWVnVUFBYW1uYzBKQVB4RUtDQW9BQTBCWldVdXdDMUJZUURVREFRRUxBQXNCQUdZRUFRQUtDd0FLWkFBS0J3c0tCMlFKQ0FJSEJnc0hCbVFBQWdBTEFRSUxXUXdCQmdZRlVBQUZCUXNGUWh0THNBeFFXRUF2QXdFQkN3QUxBUUJtQkFFQUJ3c0FCMlFLQ1FnREJ3WUxCd1prQUFJQUN3RUNDMWtNQVFZR0JWQUFCUVVMQlVJYlFEVURBUUVMQUFzQkFHWUVBUUFLQ3dBS1pBQUtCd3NLQjJRSkNBSUhCZ3NIQm1RQUFnQUxBUUlMV1F3QkJnWUZVQUFGQlFzRlFsbFpRQjVWVkl1S1pXUmlZVjllWFZ4VXdGWEFUazA1T0M4dUp5VWZIaE1TRFE0ckNRRXVBU2NtSnk0QlB3RTJOejRETlRjeVBnRTNQZ0UxTkM0REl6YytBVGMySmlNaURnRVZIZ0VmQVNJSEZCWVhIZ01YTXhZWEZoOERCZ2NPQVFjT0JBY0dGU0UwTGdNSElUWTNOamMrQVRjeU5qSStBVEkrQVRJM05qYzJKejBDTkNZOUF5Y3VBU2NtTHdFdUFpY21KeVkrQVRjMUppY21Oell5RnhZSERnSUhNUVlWSGdFSEJnY1VEZ0VWQnc0Q0J3NEJEd0VkQVFZZEFSUUdGUlFYSGdJWEZoY2VBUmNXRng0Q0Z3R1ZBVUlRUkFNZUNnTUJBUUVNQmdJRUJBTUJBZ1VKQXdFTEF3TURBZ0VEQWdZQkFWQkdMMFlnQVFZQ0F3c0JDd0VDQlFRRkFRSUhCd01GQndNQkFRSUZHQXNHRXhFVEVnaHBBb0FTRnlFVTR2N3RCUXdXSUFrWkVRRUZBd1FEQkFNRUF3SXBFQXdCQVFVRENnTUZCd0VCQ0FrQkJBUUNBZ2NCQ1FFQkhTQnlJQjBCQVFVREFRRUJDd01FQlFrSkFRSUVCUUVEQ2dNRkFRRU1CeHdQQndnWUVSa0pJUlVFQlFVQ0FZMyt1d1lMQVFZTUJDa1NFeE1SQlJBUkR3VUZBUXdMQnlZTEJRY0VBZ0VKQml3YU5sRW9QQ01hS2drSUV3c2tDUVlLQlFJQkxoRUhDUThGUkFzREJRb0RBUU1EQkFRREpVTVNJUlVVQ0VRSENCQUxCQVVDQVFFQkFRRUJDUlFPTWdnSkJ3UUZBZ01DQ0FjRkVnZ09LZ2NFQlFRREV4SU1DQWtEREJzd0tSMGhJUjBwRlNZTkF3VUdBaElORWhNREJBVUVCd2tXRlFRSUVBY0hDQUlEQkFrRURBWXlEZ2tPQlFFQ0JBSUZCQXNRQXdRRkF3QUFCQURBLytBRFFBSmdBQXNBREFCZkFNd0Jja3V3QzFCWVFCeWZucEVNQkFjRXFxYWhrSVlGQmdlMXMzOU9URXNkRmdnUUJnTkFHMHV3REZCWVFCeWZucEVNQkFjRXFxYWhrSVlGQmdlMXMzOU9URXNkRmdnTkJnTkFHMEFjbjU2UkRBUUhCS3Ftb1pDR0JRWUh0Yk4vVGt4TEhSWUlFQVlEUUZsWlM3QUxVRmhBUndrQkJ3UUdCQWNHWmdvQkJoQUVCaEJrQUJBTkJCQU5aQThPQWcwTUJBME1aQUFJQUJFQkNCRlpBZ0VBQlFFREJBQURWd0FCQUFRSEFRUlhFZ0VNREF0UUFBc0xDd3RDRzB1d0RGQllRRUVKQVFjRUJnUUhCbVlLQVFZTkJBWU5aQkFQRGdNTkRBUU5ER1FBQ0FBUkFRZ1JXUUlCQUFVQkF3UUFBMWNBQVFBRUJ3RUVWeElCREF3TFVBQUxDd3NMUWh0QVJ3a0JCd1FHQkFjR1pnb0JCaEFFQmhCa0FCQU5CQkFOWkE4T0FnME1CQTBNWkFBSUFCRUJDQkZaQWdFQUJRRURCQUFEVndBQkFBUUhBUVJYRWdFTURBdFFBQXNMQ3d0Q1dWbEFKR0ZnbDVaeGNHNXRhMnBwYUdETVljeGFXVVZFT3pvek1Tc3FIeDRSRVJFUkVSQVRGQ3NCSXpVakZTTVZNeFV6TlRNRkFTNEJKeVluTGdFL0FUWTNQZ00xTnpJK0FUYytBVFUwTGdNak56NEJOelltSXlJT0FSVWVBUjhCSWdjVUZoY2VBeGN6RmhjV0h3TUdCdzRCQnc0RUJ3WVZJVFF1QXdjaE5qYzJOejRCTnpJMk1qNEJNajRCTWpjMk56WW5QUUkwSmowREp5NEJKeVl2QVM0Q0p5WW5KajRCTnpVbUp5WTNOaklYRmdjT0FnY3hCaFVlQVFjR0J4UU9BUlVIRGdJSERnRVBBUjBCQmgwQkZBWVZGQmNlQWhjV0Z4NEJGeFlYSGdJWEEwQXlIREl5SERMK1ZRRkNFRVFESGdvREFRRUJEQVlDQkFRREFRSUZDUU1CQ3dNREF3SUJBd0lHQVFGUVJpOUdJQUVHQWdNTEFRc0JBZ1VFQlFFQ0J3Y0RCUWNEQVFFQ0JSZ0xCaE1SRXhJSWFRS0FFaGNoRk9MKzdRVU1GaUFKR1JFQkJRTUVBd1FEQkFNQ0tSQU1BUUVGQXdvREJRY0JBUWdKQVFRRUFnSUhBUWtCQVIwZ2NpQWRBUUVGQXdFQkFRc0RCQVVKQ1FFQ0JBVUJBd29EQlFFQkRBY2NEd2NJR0JFWkNTRVZCQVVGQWdIdU1qSWNNakpGL3JzR0N3RUdEQVFwRWhNVEVRVVFFUThGQlFFTUN3Y21Dd1VIQkFJQkNRWXNHalpSS0R3akdpb0pDQk1MSkFrR0NnVUNBUzRSQndrUEJVUUxBd1VLQXdFREF3UUVBeVZERWlFVkZBaEVCd2dRQ3dRRkFnRUJBUUVCQVFrVURqSUlDUWNFQlFJREFnZ0hCUklJRGlvSEJBVUVBeE1TREFnSkF3d2JNQ2tkSVNFZEtSVW1EUU1GQmdJU0RSSVRBd1FGQkFjSkZoVUVDQkFIQndnQ0F3UUpCQXdHTWc0SkRnVUJBZ1FDQlFRTEVBTUVCUU1BQUFJQVlQK0FBNkFDd0FBSEFFUUFNa0F2UVJzYUN3UUNBd0ZBQUFBQUF3SUFBMWtFQVFJQkFRSk5CQUVDQWdGUkFBRUNBVVVKQ0Nja0NFUUpSQk1RQlJBckFDQUdFQllnTmhBQklpWW5QZ0UzUGdFMU5DY21KeVluSmo4Qk5UWW1KeVkrQWpjMk56TVdGeDRCQndZWE1CY2VBUWNPQVFjT0JSVVVGaGNXRnc0Q0FxeitxUFQwQVZqMC9tQldtVFVjY0NnRUFnZ09CQk1KQndnQkFnUUVBZ0lHRGdvb1RDTk5LQlFPQkFvRUFRUUJCQVVQQndJR0J3Z0ZCQUlEYVZFaldtMEN3UFQrcVBUMEFWajkxMGhBRENnTUFRWU9JQkFlSVJVdEl4UUJBZ2N4RmdjWkdoOE9Nd1VGTXhvNkV6a1ZBd29UR2hrZ0NRc1lGQkFPRVFnT0JnRWZJU3M5SVFBQUFBRUF3UC9nQTBBQ1lBQlNBRGRBTkVFL1BoQUpCUVVBQVVBREFRRUNBQUlCQUdZRUFRQUZBZ0FGWkFBQ0FnVlBBQVVGQ3dWQ1RVdzROeTR0SmlRZUhSSVJCZzRySlM0Qkp5WW5MZ0UvQVRZM1BnTTFOekkrQVRjK0FUVTBMZ01qTno0Qk56WW1JeUlPQVJVZUFSOEJJZ2NVRmhjZUF4Y3pGaGNXSHdNR0J3NEJCdzRFQndZVklUUXVBd0xYRUVRREhnb0RBUUVCREFZQ0JBUURBUUlGQ1FNQkN3TURBd0lCQXdJR0FRRlFSaTlHSUFFR0FnTUxBUXNCQWdVRUJRRUNCd2NEQlFjREFRRUNCUmdMQmhNUkV4SUlhUUtBRWhjaEZFZ0dDd0VHREFRcEVoTVRFUVVRRVE4RkJRRU1Dd2NtQ3dVSEJBSUJDUVlzR2paUktEd2pHaW9KQ0JNTEpBa0dDZ1VDQVM0UkJ3a1BCVVFMQXdVS0F3RURBd1FFQXlWREVpRVZGQWdBQUFBQUFnREEvK0FEUUFKZ0FBc0FYZ0RBUUFwTlMwb2NGUVVMQmdGQVM3QUxVRmhBTGdBSUFRQUlYQWtCQndRR0FBZGVDZ0VHQ3dRR0MyUUNBUUFGQVFNRUFBTllBQUVBQkFjQkJGY0FDd3NMQzBJYlM3QU1VRmhBTFFBSUFRaG9DUUVIQkFZQUIxNEtBUVlMQkFZTFpBSUJBQVVCQXdRQUExZ0FBUUFFQndFRVZ3QUxDd3NMUWh0QUxnQUlBUWhvQ1FFSEJBWUVCd1ptQ2dFR0N3UUdDMlFDQVFBRkFRTUVBQU5ZQUFFQUJBY0JCRmNBQ3dzTEMwSlpXVUFVV1ZoRVF6bzVNakFxS1I0ZEVSRVJFUkVRREJRckFTTTFJeFVqRlRNVk16VXpBeTRCSnlZbkxnRS9BVFkzUGdNMU56SStBVGMrQVRVMExnTWpOejRCTnpZbUl5SU9BUlVlQVI4QklnY1VGaGNlQXhjekZoY1dId01HQnc0QkJ3NEVCd1lWSVRRdUF3TkFNaHd5TWh3eWFSQkVBeDRLQXdFQkFRd0dBZ1FFQXdFQ0JRa0RBUXNEQXdNQ0FRTUNCZ0VCVUVZdlJpQUJCZ0lEQ3dFTEFRSUZCQVVCQWdjSEF3VUhBd0VCQWdVWUN3WVRFUk1TQ0drQ2dCSVhJUlFCN2pJeUhESXkvbllHQ3dFR0RBUXBFaE1URVFVUUVROEZCUUVNQ3djbUN3VUhCQUlCQ1FZc0dqWlJLRHdqR2lvSkNCTUxKQWtHQ2dVQ0FTNFJCd2tQQlVRTEF3VUtBd0VEQXdRRUF5VkRFaUVWRkFnQUFBSUFvUC9BQTNjQ2dBQkpBSXdBWEVCWllnRUdCM2wzRWhBRUFBWUNRQUFEQWdjQ0F3ZG1BQVlIQUFjR0FHWUFBZ0FIQmdJSFdRQUFBQWtCQUFsWkFBRUFDQVVCQ0ZrQUJRUUVCVTBBQlFVRVVRQUVCUVJGaFlPQWZtVmpZV0JQVFVKQUxTd3FLQ1FpQ2hBckpTNEJJeUlPQVFjR0l5SW1Md0VtTHdFbUx3RXVBeThCTGdJMU5ENENOelluSmk4QkppTWlCd1lqQnc0Q0J3NEJGQjRCRng0QkZ4NEJGeDRCTXpJK0FqYzJKeVlIQmdjR0l5SW5MZ0VuTGdZMk56WTNNRGN5TlRZek1oWWZBUjRCQndZWEhnSWZBUjRCRnhZWEZoOEJGaDhCRmpNeU5qYzJNekllQWhjV0J3WURRQnRuSlFZTUNnUXdDZ1FLQ3dJbEZnUUJBZ1FHQmcwUURBRUtDQWdDQmdrSElSNFFNUUlkSmh3a0FRRUJEaGNQQkFRRUNCUVFJMGd6TERvMk5XRWtGaFlqSUJJMkt3WWRKQ1lLRlVCb05Ea3JHU2dsSVNNVEJBTUVDU0VDQVIwVERCVUxBaTRqRlNBQ0FRb0xEQUVYRlFzQkFnTUJBeFluQWh3UkRSOGZCZ29QS3lrakNoc0dCSUViT3dJRUFoOEhDZ0lmR0FNQ0F3TUdCdzBURFFFTENnd0VBd2dMRGdrc1B5RTdBeVFYQVFFSkZoZ01EUllpSkRNZFFHRTFMakFuSmlvQ0Nob1dRVGNHYVNzRUFVb21MeTBaTHpJMVB6TW1HQTRjRlFFQkVnd05BamxLSEN3WUNSTU9EZ0VaRndzQkF3SUJCQmNpQWhnUEZBUVJHQm9LR3hZUkFBQURBSUFBSUFPQUFpQUFBd0FHQUJNQVBFQTVFaEVPRFF3SkNBUUlBd0lCUUFRQkFRQUNBd0VDVndVQkF3QUFBMHNGQVFNREFFOEFBQU1BUXdjSEFBQUhFd2NUQmdVQUF3QURFUVlQS3hNUklSRUJKU0VCRVJjSEZ6Y1hOeGMzSnpjUmdBTUEvb0QrdWdLTS9Wcm1pQVNlWUdDZUJJam1BaUQrQUFJQS91ajQva0FCcksrYkJJdEpTWXNFbTYvK1ZBQUNBSUQvNEFPQUFtQUFKd0JWQUdwQVp6UXlJUU1FQUJRQkFRSktBUWdCVGhnQ0RBay9BUWNNQlVBQUJBQUNBQVFDWmdVREFnSUJBQUlCWkFzS0FnZ0JDUUVJQ1dZQUNRd0JDUXhrQUFZQUFBUUdBRmtBQVFBTUJ3RU1XUUFIQndzSFFsRlBUVXRKU0VaRlJVUStQQ2tvRVJJUklTWVFEUlFyQURJZUFSVVVCd1lqSWljaUl5Y2pKaWNpQnlNSERnRVBBVDRETlRRbkppY21KeVkxTkRZa0lnNEJGUlFYSGdJWEpqVXhGaFVVQndZV0Z6TXlQd0kyUHdFekl6WTNNaGNWTXpJVkZqTXlQZ0UwSmdHaHZxTmVZMldXVkRjQkFnRUNEdzRSRUFFRUJRc0NUd3NMQlFFTkFnRURBVFZlQVdyUXNXYzlBUU1DQVFJSEpBSUpDQVlEQkFObEFRb0pBUUVMQ3dzS0FnRTlXbWl3Wm1jQ1FFcUFTMjlNVHhNQkJBRUdBZ0VFQVNNaEpCTUZBaFlUQXdFRUFVTlBTMzlxVTQ1VVdrd0JCQVFCQXdFTERBSnlCZ3dDQVFFc0FRTUVBd0VEQVFFVVRZcW5qZ0FBQUFBREFHRC9nQU9nQXNBQUNRQVJBQmdBbnJVVUFRWUZBVUJMc0FwUVdFQTZBQUVBQ0FBQkNHWUFCZ1VGQmwwQUFnQUFBUUlBVnd3QkNBQUxCQWdMVndBRUFBTUpCQU5YQ2dFSkJRVUpTd29CQ1FrRlR3Y0JCUWtGUXh0QU9RQUJBQWdBQVFobUFBWUZCbWtBQWdBQUFRSUFWd3dCQ0FBTEJBZ0xWd0FFQUFNSkJBTlhDZ0VKQlFVSlN3b0JDUWtGVHdjQkJRa0ZRMWxBRmdvS0dCY1dGUk1TQ2hFS0VSRVJFaEVSRVJFUURSWXJFeUVWTXpVaEVUTTFJemNSSVJjek5UTVJBeU1WSnlFUklZQUNBQ0Q5d09EQTRBRkZnQnRnSUdCdS9zNENBQUtnd09EK1FDQ2cva0NBZ0FIQS9tQnRiUUdBQUFBQUFRQ2cvOEFEZHdLQUFFa0FOa0F6RWhBQ0FBTUJRQUFDQXdKb0FBTUFBMmdBQVFBRUFBRUVaZ0FBQVFRQVRRQUFBQVJSQUFRQUJFVkNRQzBzS2lna0lnVVFLeVV1QVNNaURnRUhCaU1pSmk4QkppOEJKaThCTGdNdkFTNENOVFErQWpjMkp5WXZBU1lqSWdjR0l3Y09BZ2NPQVJRZUFSY2VBUmNlQVJjZUFUTXlQZ0kzTmljbUEwQWJaeVVHREFvRU1Bb0VDZ3NDSlJZRUFRSUVCZ1lORUF3QkNnZ0lBZ1lKQnlFZUVERUNIU1ljSkFFQkFRNFhEd1FFQkFnVUVDTklNeXc2TmpWaEpCWVdJeUFTTmlzR2dSczdBZ1FDSHdjS0FoOFlBd0lEQXdZSERSTU5BUXNLREFRRENBc09DU3cvSVRzREpCY0JBUWtXR0F3TkZpSWtNeDFBWVRVdU1DY21LZ0lLR2haQk53WUFBQUFBQWdDQUFDQURnQUlnQUF3QUR3QXJRQ2dQQ3dvSEJnVUNBUWdBQVFGQUFBRUFBQUZMQUFFQkFFOENBUUFCQUVNQUFBNE5BQXdBREFNT0t5VVJCUmNISndjbkJ5YzNKUkVCSVFFRGdQNzZpQVNlWUdDZUJJaisrZ0x2L1NFQmNDQUI1TWViQkl0SlNZc0VtOGYrSEFJQS91Z0FBQUFCQUlELzRBT0FBbUFBTFFCQlFENGlEQW9EQWdBbUFRWURGd0VCQmdOQUJRUUNBZ0FEQUFJRFpnQURCZ0FEQm1RQUFBQUdBUUFHV1FBQkFRc0JRaWtuSlNNaElCNGRIUndXRkJBSER5c0FJZzRCRlJRWEhnSVhKalV4RmhVVUJ3WVdGek15UHdJMlB3RXpJelkzTWhjVk16SVZGak15UGdFMEpnSm8wTEZuUFFFREFnRUNCeVFDQ1FnR0F3UURaUUVLQ1FFQkN3c0xDZ0lCUFZwb3NHWm5BbUJUamxSYVRBRUVCQUVEQVFzTUFuSUdEQUlCQVN3QkF3UURBUU1CQVJSTmlxZU9BQUFBQUFJQVlQK0FBNkFDd0FBRkFBMEFiVXV3Q2xCWVFDa0FBUVlEQmdFRFpnQUVBd01FWFFBQUFBSUdBQUpYQndFR0FRTUdTd2NCQmdZRFR3VUJBd1lEUXh0QUtBQUJCZ01HQVFObUFBUURCR2tBQUFBQ0JnQUNWd2NCQmdFREJrc0hBUVlHQTA4RkFRTUdBME5aUUE0R0JnWU5CZzBSRVJJUkVSQUlGQ3NCSVJFek5TRUZFU0VYTXpVekVRS2cvY0RnQVdEK3dBRkZnQnRnQXNEK1FPQWcva0NBZ0FIQUFBQUFBQWNBcy8vaEF5Z0Nad0EzQUVZQVdBQm1BSEVBandDN0FRQkFJWmtCQ3drWkZCTURBQWQyQVFRQUJRRU1BMHdwQWdJTUJVQitBUVVsQVEwQ1AwdXdDMUJZUUZRQUNRZ0xDQWtMWmdBS0N3RUxDZ0ZtQUFBSEJBRUFYZzhCQkEwSEJBMWtBQTBEQncwRFpBQU1Bd0lEREFKbURnRUNBbWNBQ0FBTENnZ0xXUUFCQlFNQlRRWUJCUUFIQUFVSFdRQUJBUU5SQUFNQkEwVWJRRlVBQ1FnTENBa0xaZ0FLQ3dFTENnRm1BQUFIQkFjQUJHWVBBUVFOQndRTlpBQU5Bd2NOQTJRQURBTUNBd3dDWmc0QkFnSm5BQWdBQ3dvSUMxa0FBUVVEQVUwR0FRVUFCd0FGQjFrQUFRRURVUUFEQVFORldVQW1jM0k1T0xXMHNyR2tvNkNmbUplVWtvU0RnSDk5ZkhLUGM0OUJQemhHT1VZZUhSRVFFQTRyQVM0Q05qOEJOaWN1QVE0QkR3RU9BU0ltSnpVbVBnSTNOQzRDQmdjT0JCVU9BUjBCSGdRWEZqNENOelluSmdNR0xnSTFORFkzTmhZVkZBY0dKdzRERnhVVUhnRVhGalkzUGdFdUFRY0dKalUwTmpjMkhnSVZGQVkzQmlZbkpqWTNOaFlYRmpjeVBnRTNOVFl1QkE4QklnWVZGRE0ySGdNT0FSVVVGeFluTGdFR0lnNEJCeU1QQVFZVkZCNEJNelkzTmpJZUF4Y1dCdzRDRlJRV01qWTNNejRCTGdNQ2hRY0lBUUVCQVJnZENpQWdIUWtLQlFnR0F3RUJBUUVDQVFNTUZTVVpHVE1uSUJBWEZ3UWlMejg2SVNkWFQwSVBKRUFRNnlWRk1oNXRUVTlzUWpWWUhTZ1FDQUVCRGcwdlVob01BaEl6UGc4VUV3NElEZ2tHRlM4RkN3SURBZ1VHQ3dJRzlBUUhCUUVDQnhBVkZoSUZCZ2NLRVJBV0RnWURBUUVPQWdzSkV4RU9Ed1lGQVFFQkVnY0xCd0VWQXc0VkdSa1pDUk1MQVFFRERoVU1BUUVKQVJBWklTSUJMZ0VHQmdZQ0FqSWxEQWtIQ2dVRkFnSUJBd1FEQ0FjTUJBNFhHZzRCQ3dzckx5d2JBU2hQRkJRc1JTc2ZEZ01FRWlkQ0ttTTBEZjdtQWhVbk9TRkJYd1VFVEVGS055djdCU0FuSmcwTkJRNGdDQjRZS1JROE55SzBBaE1QRUJzQ0FRVUpEUWdRR1VFRkFRWUZFQVFGQVFZTnRBVUlCZ0llTFJrUkJBRUJBUXdKRmdZSENSWVBGQWNDRXdJQi9nTURBUU1DQVFFQkJoZ0pEZ2tCQmdFQ0N4QWVFemN5QWdZUUJ3MFBDaEFxU2pjdUh4UUFBQVlBUVAra0E4QUNtd0FPQUJrQVBBQkhBRThBY3dDSlFJWlNBUVFMWmw0Q0RRQmZPakVEQmcwRFFEazBBZ1k5Q2dFSENBc0lCd3RtRVFFTEJBZ0xCR1FRQWc4REFBRU5BUUFOWmc0QkRRWUJEUVprQUFZR1p3QU1DUUVJQnd3SVdRVUJCQUVCQkUwRkFRUUVBVkVEQVFFRUFVVlJVQkFQQVFCdGFtbG9WbFJRYzFGelRVeEpTRU5CUGowd0xpSWZIaDBXRlE4WkVCa0dCQUFPQVE0U0Rpc2xJaVkwTmpNeUhnTVZGQTRCSXlJdUFUVTBOaklXRkFZRk5DNEJKeVlyQVNJT0JoVVVGeDRCTXpJM0Z6QVhIZ0UrQVRVblBnRUFJaVkwTmpNeUhnRVZGRFl5RmhRR0lpWTBGeklYTGdFaklnNERGUlFXRndjVUJoUWVBVDhCSGdFek1Ec0NMZ0UxTkQ0QkF3NFFGeGNRQmd3S0J3UUxFZE1LRWdzWElCY1hBV3BFZFVjR0JRa2ROaklzSmg0VkN3Z1hsV0ZCT2o0QkFnVUVBeElzTXYxVUlCY1hFQXNTQ3IwaEZoWWhGdG9HQ3hHMGR6VmhUenNoUFRZWUFRVUpDbGdjT3lBREJBTUVCRkNJNFJjaEZ3UUlDUXdIQ2hJTEN4SUtFUmNYSVJjNFAydENCQUVLRWhvaEp5b3dHUjBkVDJnWktnRUJBUUVIQmtJaVhnRkVGeUFYQ2hJTEVEY1hJQmNYSUVFQlpvZ2NNMFZWTFVCdkoxa0JCQW9EQXdROUNnb1BIUTlIZUVZQUFBZ0FRUDloQThFQzRnQUhBQkFBRkFBWUFCMEFKZ0F2QURjQVprQmpNQ0FUQXdJRU5pRUNBUUkzSFF3QkJBQUJMUndDQXdBc0p4b1hCQVVEQlVBQUFRSUFBZ0VBWmdBQUF3SUFBMlFJQVFRR0FRSUJCQUpYQndFREJRVURTd2NCQXdNRlVRQUZBd1ZGSHg0VkZSRVJLaWdlSmg4bUZSZ1ZHQkVVRVJRU0ZRa1FLeVVCQmhVVUZ5RW1BU0VXRndFK0FUVTBKeVluQndFV0Z6OEJFVFkzSndNaUJ4RUJMZ01ERmpNeU5qY1JCZ2NCRGdRSEZ3RmQvdmNVR0FFUEJnSkkvdkVGQlFFSkNnbzFSSUsvL201RWdML2JmMEMvMDBwR0FSTVFIeUVpbEVCREprZ2lCUVgrcHhndUtTUWZETDZjQVFsQVJFcEdCZ0ViQlFiKzl4OUNJa3VJZ0VEQS9scC9QNzdFL29ORWdiOEJ5UmorOFFFVEJRY0ZBL3lURkF3TUFRNEZCQUl2RFNBbUtpOFp2Z0FBQUFBRkFBWC9RZ1A3QXdBQUlRQTBBRUFBVUFCZ0FNRkFEZ2dCQWdVV0FRRUNBa0FRQVFFOVM3QUxVRmhBS1FvQkFBQURCQUFEV1EwSURBWUVCQWtIQWdVQ0JBVlpDd0VDQVFFQ1RRc0JBZ0lCVVFBQkFnRkZHMHV3RmxCWVFDSU5DQXdHQkFRSkJ3SUZBZ1FGV1FzQkFnQUJBZ0ZWQUFNREFGRUtBUUFBQ2dOQ0cwQXBDZ0VBQUFNRUFBTlpEUWdNQmdRRUNRY0NCUUlFQlZrTEFRSUJBUUpOQ3dFQ0FnRlJBQUVDQVVWWldVQW1VbEZDUVNNaUFRQmJXVkZnVW1CS1NFRlFRbEE4T3pZMUxTc2lOQ00wR2hnQUlRRWhEZzRyQVNJT0FoVVVGaGNXRGdRUEFUNEVOeDRCTXpJK0FqVTBMZ0VESWk0Qk5UUStBek15SGdJVkZBNEJBaUlHRlJRZUFUSStBVFUwSlNJT0FoVVVGak15UGdJMU5DWWhJZ1lWRkI0RE16SStBVFF1QVFJRlo3MktVbWxiQVFnT0V4SVFCUVVJSFZCR1VCZ2FOeHhudW9aUGh1ZUtkTUYwSzFCb2drUlZtMjlDY0w1UFBTb1VJU2NpRlA3T0R4b1REQ29lRHhzVURDc0JzUjhwQncwU0Znd1VJUlFVSVFNQVJIU2dXR1d5UEJjdEpDRVlFUVVFQVFZVEZpUVVCUVZFZEtCWWRjaHovUFJUbTJFNmJsbERKVHBoaFVsaG1sUUJweWNmRlNNVkZTTVZIeWNLRWhzUElDME1GUndRSHljbkh3MFhFdzRJRlNNcUlCRUFBQUVBVi85dUE2a0MwUUY1QWFKQmpRRmlBSVlBZEFCeUFIRUFiZ0J0QUd3QWF3QnFBR2tBWUFBaEFCUUFFd0FTQUJFQUVBQU1BQXNBQ2dBRkFBUUFBd0FDQUFFQUFBQWJBQXNBQUFGSEFVWUJSUUFEQUFJQUN3RmdBVjBCWEFGYkFWb0JXUUZZQVVvQXFBQ25BSjBBa0FDUEFJNEFqUUNNQUJBQURRQUNBSnNBbWdDWkFKUUFrd0NTQUFZQUFRQU5BUzRCTFFFcUFMVUF0QUN6QUFZQUNRQUJBU2NCSmdFbEFTUUJJd0VpQVNFQklBRWZBUjRCSFFFY0FSc0JHZ0VaQVJnQkZnRVZBUlFCRXdFU0FSRUJFQUVQQVE0QkRRRU1BTzBBekFETEFNa0F5QURIQU1ZQXhBRERBTUlBd1FEQUFMOEF2Z0M5QUx3QUt3QUZBQWtCQ2dEb0FPY0Ewd0FFQUFNQUJRQUhBRUFCUkFDSEFBSUFDd0NjQUpFQUFnQU5BUXNBQVFBRkFBTUFQMEJGREFFTEFBSUFDd0ptQUFJTkFBSU5aQUFOQVFBTkFXUUFBUWtBQVFsa0NnRUpCUUFKQldRRUFRTUZCd1VEQjJZSUFRY0had0FBQ3dVQVN3QUFBQVZQQmdFRkFBVkRRUjRCVndGVUFVTUJRZ0ZCQVQ4QkxBRXJBU2tCS0FEOUFQb0ErQUQzQU93QTZ3RHFBT2tBMndEYUFOa0EyQUNtQUtVQW1BQ1ZBRGtBTndBT0FBNHJFeThDTlQ4Rk5UOEhOVDhpT3dFZk1SVUhGUThESFFFZkVSVVBEU3NDTHd3akR3d2ZEUlVYQngwQkJ4VVBEeU1ISXk4Tkl5Y2pKdzhKSXc4Qkt3SXZGRFUzTlRjOUFUOFBNejhCTXpVdkVTc0JOU01QQVJVUERTc0NMd2cxUHhmUkFnRUJBZ0VEQWdRRkFRRUNBZ0lDQWdNQkFnTUVBZ01EQkFRRUJRWURBd2NIQndrSkNRc0lDQWtLQ1FzTEN3c01DdzBOR1EwbkRRME9EQTBORFEwTURBd0xDd2tGQkFrSUJ3Y0dCd1VGQmdRSEJBTURBZ0lDQkFNQ0FRSUJBZ1VEQWdRREFnSUNBUUVCQVFNQ0FnTU1DUVFHQlFZR0J3UURBd01DQXdJREFRRUJBZ1FCQWdJQ0F3SURBZ1FEQWdNREJBSUNBd0lFQkFRREJBVUZBUUVDQWdJRUJRY0dCZ2NIQXdVS0FRRUZGZ2tKQ1FnRUFnTURBUUlCQVFJQ0JBTURBd1lHQndnSkJBUUtDZ3NMREFzbERnd05EUTRPRFEwT0RRY0dCQVFMREFjSUJRY0tDd2NHRUFnSURBZ0lDQW9uRmhZTEN3b0tDZ2tKQ0FnR0J3SURBZ0lDQVFJQkFRRUJBZ0VEQWdFRUF3UUNCUU1GQlFVR0JnY0hBZ0VCQkFvR0NBY0lDUVFFQkFNRkF3UURBd0lCQVFFREFRRUJCUUlFQXdVRUJRVUdCZ1VIQndFQ0FRSUNBZ0lCQVFJQkFRRUNBUU1EQXdNRUJRVUZCd2NIQmdjSUJBVUdCd3NJQVVzRkJ3UU9CZ1lIQndnSEJRVUhCd2tEQkFRQ0V3b0xEUTRIQ1FjSUNnZ0pDUVVFQ2dvSkNna0tDZ2NHQndVRkJRVUVBd1FEQWdJRUFRSUJBd01EQkFRRkJnVUhCd1lFQXdjSUJ3Z0lDQWtJQ1FnUkNRZ0pDQWNKRHcwTUNoQUNBd2dGQmdZSENBZ0lCQVlFQkFZRkNnVUdBZ0VGRVEwSUNnb0xEQTRKQ0FrSUNRZ1BFQTRUQnd3TENnUUVCQVFDQkFNQ0FRSURBUUVEQWdRR0JnVUdDZ3NCQWdNREN3OFJDUW9LQ2dVRkNnRUJBd3NGQlFjR0F3UUVCQVFFQkFRREF3TURBZ01GQlFNQ0JRTUVBd1FCQVFNQ0FnSUNBUUVDQVFJRUFnUUZCQUlDQWdFQkFRVUVCUVlEQXdZQ0FnTUJBUUlDQWdFQ0F3SUVBd1FFQlFJREFnTURBd1lEQXdNRUJBTUhCQVVFQlFJREJRSUNBd0VDQWdJQ0FRRUJBUUVDQWdnRkJ3Y0tDZ1lHQndjSENBa0pDQXNCQVFJQ0FnTUlCUVFGQmdRRkJRTUVBZ0lEQVFZRUJBVUZDd2NXRUFnSkNRZ0tDZ2tLQ1FzSkN3a0tDQWdJQkFVR0JRb0dBQUFBQkFCZUFDQURvZ0lnQUJNQUtBQXNBREVBTjBBME1UQXZMaXdyS2lrSUFnTUJRQVFCQUFBREFnQURXUUFDQVFFQ1RRQUNBZ0ZSQUFFQ0FVVUNBQ1lqR1JZTENBQVRBaE1GRGlzQklTSU9BUlVSRkJZeklUSTJOUkUwTGdNVEZBWWpJU0l1QlRVUk5EWXpCVElXRlJjVkZ4RUhFU2MxTndKZi9rWVNJUlFySEFHNkhDY0hEQkFVRlJNTy9rWUVDQWNIQlFRQ0ZnOEJ1ZzRUWHNRaWdJQUNJQkVlRXY2SUhDc3FIUUY0Q3hRUURBYitSdzhXQWdRRkJ3Y0lCQUY0RFJJQkVRMXBxMnNCZ0R6KzkwT0VRd0FBQUFZQWdBQUFBNEFDUUFBZkFFa0FVUUJaQUYwQVpRRGZTN0FvVUZoQVVnQVBDdzRIRDE0QUVBNFNEaEFTWmdBQkNRRUlBd0VJV1FBREFBY0RTd1FDRXdNQUNnRUhDd0FIV1FBTEFBNFFDdzVaQUJJQUVRMFNFVmtBRFFBTUJnME1XUUFHQlFVR1RRQUdCZ1ZTQUFVR0JVWWJRRk1BRHdzT0N3OE9aZ0FRRGhJT0VCSm1BQUVKQVFnREFRaFpBQU1BQndOTEJBSVRBd0FLQVFjTEFBZFpBQXNBRGhBTERsa0FFZ0FSRFJJUldRQU5BQXdHRFF4WkFBWUZCUVpOQUFZR0JWSUFCUVlGUmxsQUxBRUFaV1JoWUYxY1cxcFhWbE5TVDA1TFNrWkVPamczTmk4dEppTWFGeElRRHc0TkRBZ0ZBQjhCSHhRT0t3RWpKaWN1QVNzQklnWUhCZ2NqTlNNVkl5SUdGUkVVRmpNaE1qWTFFVFFtRXhRT0FTTWhJaVkxRVRRK0Fqc0JOejRCTnpZL0FUTXdPd0VlQWhjZUF4OEJNekllQVJVa0lnWVVGakkyTkFZaUpqUTJNaFlVTnpNVkl3UVVGakkyTkNZaUEwTjdBd1l3SkJDeEVDTXVDQVFiUkJzYktDa2FBb0FhSXlNREJ3NEkvWUFORmdZSkRRZUlDUVFQQXlZTkRMRUJBUUVEQlFNRkR4Z1NDZ21LQ1EwSC91ZU9aR1NPWkhGMFVWRjBVVFVpSXY4QUpUWWxKVFlCNEFNSE5TRWZOQWdGSUNBa0dmNmdHeWdvR3dGZ0dpUCtZd29QQ2hZTkFXQUdDd2NGQmdVVEJDb01DQUVDQXdNRkVSd1VDd1lIRGdnQ1pJNWtaSTdTVVhSUlVYVGdJbWsySlNVMkpRQURBUUQvWUFNQUF1QUFDd0FYQURFQVRVQktEQXNDQlFNQ0F3VUNaZ0FBQUFNRkFBTlpBQUlBQVFRQ0FWa0FCQW9CQmdjRUJsa0pBUWNJQ0FkTENRRUhCd2hQQUFnSENFTVlHQmd4R0RFdUxTd3JFUkVURXljVkZ4VVFEUmNyQUNJR0ZSRVVGakkyTlJFMEF4UUdJaVkxRVRRMk1oWVZGeFVVRGdFaklpWTlBU01WRkJZWEZTTVZJVFVqTlQ0QlBRRUNRWUpkWFlKZElFcG9Ta3BvU21BN1pqdGFnaWFMWlpJQlFvcGpod0xnWWtYK3kwVmlZa1VCTlVYK2hqaFBUemdCTlRoUFR6aVpuenhrTzRCYm41OWxrd2QrSkNSK0I1Tmxud0FBQkFEMC8yQUREQUxnQUJJQUpBQXNBRGtBUmtCREZoUVREQW9HQmdNRUFVQVlDQUlEUFFBQUFBRUNBQUZaQUFJQUJRUUNCVmtHQVFRREF3Uk5CZ0VFQkFOUkFBTUVBMFV1TFRRekxUa3VPU29wSmlVaElCQUhEeXNBSWdZVkZCOENHd0UzTmo4QlBnSTFOQWNWQmc4QkN3RW1KeTRCTlRRMk1oWVZGQ1lpQmhRV01qWTBCeUltTlRRK0FUSWVBUlFPQVFKdjNwMFRBUVAxOVFFQkFRRUdDUVF5QVFFQzF0Z0JBUWdLaXNTS3QycExTMnBMZ0NjM0dTd3lMQmtaTEFMZ20yNHpNZ01HL2ZjQ0NRSURBUU1RSVNJUmI4Z0JBUU1FL2prQnl3TUJGaTRYWVlpSVlTNjNTMnBMUzJxVE55Y1pMQmtaTERJc0dRQUNBUUQvWUFNQUF1QUFDd0FsQUVGQVBnb0pBZ01CQUFFREFHWUFBUUFBQWdFQVdRQUNDQUVFQlFJRVdRY0JCUVlHQlVzSEFRVUZCazhBQmdVR1F3d01EQ1VNSlJFUkVSRVRFeWtWRUFzWEt5UXlOalVSTkNZaUJoVVJGQ1VWRkE0Qkl5SW1QUUVqRlJRV0Z4VWpGU0UxSXpVK0FUMEJBYitDWFYyQ1hRRjhPMlk3V29JbWkyV1NBVUtLWTRkZFlrVUJOVVZpWWtYK3kwWGhuenhrTzRCYm41OWxrd2QrSkNSK0I1Tmxud0FBQUFJQTlQOWdBd3dDNEFBU0FCOEFLMEFvREFvSUJnUUJQUU1CQVFJQmFRQUFBZ0lBVFFBQUFBSlJBQUlBQWtVVUV4b1pFeDhVSHhBRUR5c0FJZ1lWRkI4Q0d3RTNOajhCUGdJMU5BVWlKalUwUGdFeUhnRVVEZ0VDYjk2ZEV3RUQ5ZlVCQVFFQkJna0UvdlFuTnhrc01pd1pHU3dDNEp0dU16SURCdjMzQWdrQ0F3RURFQ0VpRVcvRE55Y1pMQmtaTERJc0dRQUZBUUQvWUFNd0F1QUFBd0FLQUJVQUhRQTFBRjlBWEFjQkFnRWNHeFFHQkFBQ0lRRUVBQ0FCQXdRRVFBVUJBZ0VBQVFJQVpnQUJDZ0VBQkFFQVdRQUVCZ0VEQndRRFdRa0JCd2dJQjBzSkFRY0hDRThBQ0FjSVF3VUVOVFF6TWpFd0x5NHJLaVFpSHg0WUZ4QU9CQW9GQ2dzT0t3RTNBUWNsTWpjREZSUVdOeEUwSmlNaURnRUhBVFkzTlNNVkZBY1hOZ2MyTnljR0l5SXVBejBCSXhVVUZoY1ZJeFVoTlNNQkVSd0NBeHorN0NVZzQxM2ZYRUlaTHlZUEFSSUpZaUlpRkREcU1pMFRMVE1qUXpZcEZ5YUxaWklCUW9vQzBCRDhrQkQ5RVFHQjYwVmlwd0UxUldJUUhSUCtMUm9hbjU5QU5TSkRxd01YSUJZV0tUVkRJNkNmWlpNSGZpUWtBQUFEQUVEL29BUEFBcUFBQndBWEFEb0FrRUFMTVFFQkJ6b3dBZ01GQWtCTHNCaFFXRUF3QUFZQkFBRUdBR1lBQkFBRkJRUmVDQUVDQUFjQkFnZFpBQUVBQUFRQkFGa0FCUU1EQlUwQUJRVURVZ0FEQlFOR0cwQXhBQVlCQUFFR0FHWUFCQUFGQUFRRlpnZ0JBZ0FIQVFJSFdRQUJBQUFFQVFCWkFBVURBd1ZOQUFVRkExSUFBd1VEUmxsQUZBb0lOak11TENVakd4a1NEd2dYQ2hjVEVBa1FLd0F5TmpRbUlnWVVBU0VpQmhVUkZCWXpJVEkyTlJFMEpnTW1JeUlHRHdFT0JDTWlKeTRDTHdFbUl5SUhBeEUrQVRNaE1oNEJGUk1DdUZBNE9GQTRBUWo4OEJjaElSY0RFQmNoSWVVTER3Y0xCeVlDQkFVRUJRTU5DUUVEQXdGc0RSUVVEdjBDRGdvQ3pBWU1Cd0VCWURoUU9EaFFBUWdoR1AxeUdDRWhHQUtPR0NIK2RRd0dCU0FDQWdNQkFRZ0JBZ1FCZEE4UC9zOENDUW9OQmdzSC9mY0FBQUFJQUZiL1BRTzNBc2tBS1FBMkFGVUFZd0J4QUlBQWtRQ2RBTEpBcjNJQkJ3eE5BUVlIY0FFTENUZzNJQk1FQWdWTVJVUVpCQUFDS2dFQkFBWkFWVlJPQXdRTVBnQUdCd2tIQmdsbUFBVU9BZzRGQW1ZQUFnQU9BZ0JrQUFBQkRnQUJaQUFCQVdjQURBQUxCQXdMV1FBSkFBb0RDUXBaQUFRQUF3MEVBMWtTQVEwQUVBZ05FRmtSQVFjQUNBOEhDRmtBRHc0T0QwMEFEdzhPVVFBT0R3NUZnb0ZYVnBpV2s1S0tpSUdSZ3BGL2ZuZDJiV3hsWkYxY1ZtTlhZMUZRU1VoQVBqSXdJeUlkSEJjVkV3NHJBU2NQQVNjbUR3RU9BUlVSRkI0RE5qOEJGeFl6TWo4QkZoY1dNamMyTnhjV01qWTNOalVSTkFFdUFUVTBQZ0V6TWhZVkZBWTNKejRCTlRRdUFTTWlCaFVVRndjbkxnRWpCZzhCRVRjWEZqSTJQd0VYQlNJR0ZSRVVGakkyTlJFMExnRVhJZzRDSFFFVUZqSTJQUUVtTnhVVUhnRXlQZ0U5QVRRdUFTTUdBeUlPQWhVVUZqTXlQZ0kxTkM0QkJpSW1ORFl6TWg0Q0ZSUURxYmNMMjhrSEI5TUdCZ0lFQkFZR0E4M0tBd1FFQXg0dlF3VVVCV1FzVGdNR0JRSUgvdncyWENkREtEMVdYYWt6QmdVeFZESk1heVlXeVFJREFnUUR1c0hLQWdVRkF0eWkvYW9JQ3dzUEN3VUl6QVFIQlFNTER3c0R4QVVJQ2drRkJRa0ZEekFPR1JJTEtCd09HUk1MRXg4R0doTVREUWNMQ1FVQ255b0JaRlFEQTFJQ0NRYjl2QU1HQlFNQ0FRRlFWUUVDRFY1bUNBaVhiaElCQWdJR0NBSkZEdnpWVmJVcUowUW5WandxdFpvTUVSd01NVlV4YkVzcFVncFVBUUVCQVVnQ0hFeFZBUUVCWkNVMUN3ZitrQWdMQ3dnQmNBVUlCVWNEQlFjRGpRY0xDd2VORDFLNkJRa0VCQWtGdWdVSUJRUCtuUXNTR1E0Y0tBb1RHUTRTSUJKa0V4b1RCUWtNQmcwQUFBQUFBd0NnLytBRGdBS2dBQWtBRWdBakFFRkFQaDRTRVEwTUJRSUdEZ2tJQXdRQkFrQUFCUVlGYUFBR0FnWm9BQVFCQUFFRUFHWUFBZ0FCQkFJQlZ3QUFBQU5QQUFNREN3TkNFaWNZRVJFUkVBY1ZLeWtCRVNFM0lSRWhFUWNGSndFbkFSVXpBU2MzSnk0Q0l5SVBBVE1mQVRjK0FUVTBBdUQ5NEFHZ0lQNGdBbUFnL3ZzVEFWWVcvcGhBQVdrWFJoa0NCd2NFQ3dnWkFSWXFHQVFFQWdBZy9jQUJ3Q0NZRXdGWEYvNllRUUZvRjBBWkF3TUNDQmdYS2hrRUNnVU1BQUFBQmdEZy82QURJQUtnQUNBQUx3QkNBRVlBU2dCT0FMaEFDMEE1T0RBZUVBWUlDd0ZBUzdBVVVGaEFRUUFLQXd3RENsNE9BUXdOQXd3TlpBOEJEUXNERFF0a0FBc0lDQXRjQUFFQUJnQUJCbGtIQWdJQUNRVUNBd29BQTFjQUNBUUVDRTBBQ0FnRVVnQUVDQVJHRzBCREFBb0REQU1LREdZT0FRd05Bd3dOWkE4QkRRc0REUXRrQUFzSUF3c0laQUFCQUFZQUFRWlpCd0lDQUFrRkFnTUtBQU5YQUFnRUJBaE5BQWdJQkZJQUJBZ0VSbGxBR1U1TlRFdEtTVWhIUmtWRVEwSkJOQlkxR2pNUkZUTVFFQmNyQVNNMU5DWXJBU0lPQWgwQkl4VXpFeFFXTXlFeVBnYzFFek1sTkQ0Q093RXlIZ01kQVNNQkZSUUdJeUVpSmk4QkxnUTlBUU1oQnpNUkl4TWpBek1ESXhNekF5Q2dJaG1MQ3hZUUNhQXFMeU1ZQVJvRkN3a0pDQVlGQkFJdUtmNTlCUWdMQllzRkNRY0dBOFlCRGhFTS91WURCZ01FQXdRREFnRXdBYlBvSEJ5T0hSWWV6aDBWSGdJOUtCa2lDUkFXRENnZC9ic1pJZ0lEQmdZSUNBb0tCZ0pGUlFZTENBVURCZ2NKQlNqOW53RU5FUUVDQWdJRUJRVUdBd0VDUkVEK0hnSGkvaDRCNHY0ZUFBQUFBQUlBd1ArZ0EwQUM0QUFMQUJRQVAwQThGQkVRRHc0TkRBY0RQZ0FHQUFFQUJnRm1Cd1VDQXdJQkFBWURBRmNBQVFRRUFVc0FBUUVFVUFBRUFRUkVBQUFURWdBTEFBc1JFUkVSRVFnVEt3RVZNeEVoRVRNMUlSRWhFU1VuTnhjSEp4RWpFUUpBNFAzQTRQOEFBb0QrUWhlVmxSZHVJQUlBSVAzZ0FpQWcvYUFDWURRWGxaVVhiZjRhQWVZQUFnREEvNkFEUUFLZ0FBc0FGQUErUURzVUVSQVBEZzBNQndFQUFVQUFCZ01HYUFjRkFnTUNBUUFCQXdCWEFBRUVCQUZMQUFFQkJGQUFCQUVFUkFBQUV4SUFDd0FMRVJFUkVSRUlFeXNCRlRNUklSRXpOU0VSSVJFRkJ4YzNKd2NSSXhFQ1FPRDl3T0QvQUFLQS9rSVhsWlVYYmlBQ0FDRDk0QUlnSVAyZ0FtRFpGNVdWRjIwQjV2NGFBQUFEQUZIL2NRT3ZBc0FBRGdBZEFDa0FKMEFrS1NnbkppVWtJeUloSUI4ZURBRTlBQUFCQVFCTkFBQUFBVkVBQVFBQlJSa1lFZ0lQS3dFdUFTSUdCdzRCSGdJK0FpWUREZ0V1QWpZM1BnRXlGaGNXRUFNSEp3Y1hCeGMzRnpjbk53TW1QSnVlbXp4UU9UbWcxdGFnT1Rsb1NjWEZralEwU1RlUGtJODNiOVdvcUJpb3FCaW9xQmlwcVFKR1BENCtQRkRXMXFBNU9hRFcxdjRjU1RRMGtzWEZTVFk1T1Rady9zUUJYcWluRjZpb0Y2ZW9HS2lvQUFBQUFnQitBQUFEZ0FKZ0FCTUFJZ0JCUUQ0V0NnSURCQnNYRWhBSkJRQUJBa0FWQ3dJQ1BnQUFBUUJwQUFJRkFRUURBZ1JaQUFNQkFRTk5BQU1EQVZFQUFRTUJSUlFVRkNJVUloc1VGaEFHRWlzN0FUYzJOejRDTnhVSkFSVUdCd1lYTUJVd0FUVU5BVFVpQmdjbVBnV0FGU1pLVGh3clFDWUJnUDZBdDJoakFnR2dBU2orMkl5dlJRRUJEQmc0VDRNK2R5TU1Ed3dCb0FFQUFRQ2hDR2hrcFFZQllJSEJ3b0pjZHdjWlJrQk9PQ2NBQUFBQUFnQ0FBQUFEZ0FKZ0FCOEFLZ0E2UURjbERBSURCQ1FnRFFBRUFnRUNRQ1lMQWdBK0FBSUJBbWtBQUFBRUF3QUVXUUFEQVFFRFRRQURBd0ZSQUFFREFVVVVIQllVR1FVVEt5VXdOVFF1QWljdUFTYzFDUUUxSGdFWEhnRWZBVE13UFFjbkxnRWpGUzBCRlNBWEZnT0FBeEFzSXpXTFh2NkFBWUEzVENvclNpTW1GU0JGcjR6KzJBRW9BUVJaSTBBR0dpcFJVU00xTndTaC93RC9BS0FDRXhNVVRqZytCd2NJQndjSUJnZ1RkMXlDd3NHQnRFa0FBQU1BWVArQUE2QUN3QUFWQUIwQUxnQmRRRm9OQVFJSUN3RUVBUUpBREFFQkFUOEpBUVFCQUFFRUFHWUFCUUFJQWdVSVdRQUNBQUVFQWdGWkFBQUFBd2NBQTFrS0FRY0dCZ2ROQ2dFSEJ3WlJBQVlIQmtVZkhnQUFKeVllTGg4dUd4b1hGZ0FWQUJVVEZCVWlDeElyQVJRR0l5SXVBVFErQVRNVk55Y1ZJZ1lVRmpJMk5RSWdCaEFXSURZUUFTSXVBVFUwUGdJeUhnSVVEZ0lDMkg1YU8yTTZPbU03d01CcWxwYlVsbFQrcVBUMEFWajAvbUJuc0dZOFpvNmFqbVk4UEdhT0FTQmFmanBqZG1NNmIyK0FXSmJVbHBWckFhRDAvcWowOUFGWS9kZG1zR2ROam1ZOFBHYU9tbzVtUEFBQUFBSUFRUCtBQThBQ3dBQUpBQk1BTGtBckVBSUNBRDRURFF3TENna0lCd1lGQ2dJOUFRRUFBZ0lBU3dFQkFBQUNUd01CQWdBQ1F4SWFFaEFFRWlzQklRc0JJUVVESlFVREZ5Y0hOeWNoTnhjaEJ3UEEvcWxwYWY2cEFSaHRBUlVCRlc0dTFkVlYyQUVHVWxJQkJ0Z0JnZ0UrL3NMRS9zTEZ4UUUrNkppWTlaWDM5NVVBQUFNQVlQK0FBNkFDd0FBSEFCb0FKZ0JIUUVRQUFBQURCQUFEV1FrQkJRZ0JCZ2NGQmxjQUJBQUhBZ1FIVndvQkFnRUJBazBLQVFJQ0FWRUFBUUlCUlFrSUppVWtJeUloSUI4ZUhSd2JFQTRJR2drYUV4QUxFQ3NBSUFZUUZpQTJFQUVpTGdFMFBnRXpNaDRFRlJRT0FnTWpGU01WTXhVek5UTTFJd0tzL3FqMDlBRlk5UDVnWjdCbVpyQm5OR05UUnpFYlBHYU9QU0h2N3lIdzhBTEE5UDZvOVBRQldQM1hackRPc0dZYk1VZFRZelJOam1ZOEFuM3dJZS92SVFBQUFBTUFZUCtBQTZBQ3dBQUhBQmdBSEFBOFFEa0FCQU1GQXdRRlpnQUZBZ01GQW1RQUFBQURCQUFEV1FZQkFnRUJBazBHQVFJQ0FWSUFBUUlCUmdrSUhCc2FHUkVRQ0JnSkdCTVFCeEFyQUNBR0VCWWdOaEFCSWk0Qk5UUStBakllQWhRT0FnRWhGU0VDclA2bzlQUUJXUFQrWUdld1pqeG1qcHFPWmp3OFpvNytzd0lBL2dBQ3dQVCtxUFQwQVZqOTEyYXdaMDJPWmp3OFpvNmFqbVk4QVkwaUFBQUFBZ0JnLzRBRG9BTEFBQWNBR0FBcFFDWUFBQUFEQWdBRFdRUUJBZ0VCQWswRUFRSUNBVkVBQVFJQlJRa0lFUkFJR0FrWUV4QUZFQ3NBSUFZUUZpQTJFQUVpTGdFMU5ENENNaDRDRkE0Q0FxeitxUFQwQVZqMC9tQm5zR1k4Wm82YWptWThQR2FPQXNEMC9xajA5QUZZL2RkbXNHZE5qbVk4UEdhT21vNW1QQUFDQUQ3L1hnUENBdUlBRVFBckFDcEFKd1FCQUFBREFnQURXUUFDQVFFQ1RRQUNBZ0ZSQUFFQ0FVVUNBQ1lqR1JZTUNRQVJBaEVGRGlzQklTSU9BaFVSRkJZeklUSTJOUkUwSmhNVURnSWpJU0l1QlRVUk5EWXpJVEllQXhVRFcvMUtGU1ljRUR3ckFyWXJQRHdQQ0E0VEN2MDhCZ3NLQ1FjRkF4NFZBc1FJRUF3S0JRTGlFQndtRmYxS0t6dzhLd0syS3p6ODNBb1REZ2dEQlFjSkNnc0dBc1FWSGdVS0RCQUlBQUFBQWdCUi8zRURyd0xBQUE0QUdnQVpRQllhR1JnWEZoVVVFeElSRUE4TUFEMEFBQUJmRWdFUEt3RXVBU0lHQnc0QkhnSStBaVlEQnljSEp6Y25OeGMzRndjREpqeWJucHM4VURrNW9OYldvRGs1dGhpb3FCaW9xQmlvcUJpcEFrWThQajQ4VU5iV29EazVvTmJXL29JWXFLY1hxS2dYcDZnWXFBQUFBQUlBWVArQUE2QUN3QUFIQUJ3QVEwQkFEZ0VEQUJBQkJnUUNRQThCQkFFL0FBWUVCUVFHQldZQUFBQURCQUFEV1FBRUFBVUNCQVZaQUFJQkFRSk5BQUlDQVZFQUFRSUJSUklWRkJNVEV4QUhGU3NBSUFZUUZpQTJFQUFpSmpRMk16VVhCelVpRGdFVkZCWXlOalV6RkFLcy9xajA5QUZZOVA3SzFKYVdhc0RBTzJNNmY3TitLQUxBOVA2bzlQUUJXUDVVbHRTV1dJQnZienBqTzFsL2ZscHFBQUFBQVFCQS80QUR3QUxBQUFrQUdFQVZBZ0VBUGdrSUJ3WUZCUUE5QVFFQUFGOFNFQUlRS3dFaEN3RWhCUU1sQlFNRHdQNnBhV24rcVFFWWJRRVZBUlZ1QVlJQlB2N0N4UDdDeGNVQlBnQUFBQUFDQUdEL2dBT2dBc0FBQndBVEFEWkFNd2NCQlFZQ0JnVUNaZ1FCQWdNR0FnTmtBQUFBQmdVQUJsY0FBd0VCQTBzQUF3TUJVZ0FCQXdGR0VSRVJFUkVURXhBSUZpc0FJQVlRRmlBMkVBY2pGU00xSXpVek5UTVZNd0tzL3FqMDlBRlk5S0R3SXU3dUl2QUN3UFQrcVBUMEFWaSs3dTRpOFBBQUFBQUFBZ0JnLzRBRG9BTEFBQWNBQ3dBaFFCNEFBQUFEQWdBRFZ3QUNBUUVDU3dBQ0FnRlJBQUVDQVVVUkV4TVFCQklyQUNBR0VCWWdOaEFISVRVaEFxeitxUFQwQVZqMG9QNEFBZ0FDd1BUK3FQVDBBVmkrSWdBQUFBTUFOUDlUQTgwQzdBQUhBQmdBS2dBNVFEWUFBUVFBQkFFQVpnQUFCUVFBQldRQUF3WUJCQUVEQkZrQUJRSUNCVTBBQlFVQ1VnQUNCUUpHR2hraklSa3FHaW9YRlJNU0J4SXJBQlFXTWpZMEppSUZGQTRDSWk0Q05ENENNaDRDQVNJT0FoVVVIZ0V6TWo0Q05UUXVBUUV1Zks1N2U2NENJMGg4cXJ5cmUwbEplNnU4cW54SS9qUlJsR3RBYTdodFVaUnJQMnU0QVhldmUzdXZlOU5kcTN0SlNYdXJ1NnQ3U1VsN3F3RXlRR3FVVW15NGF6OXJsRkZ0dUdzQUFnQmcvNEFEb0FMQUFBY0FFZ0FuUUNRU0VSQVBEZ1VDQUFGQUFBQUNBR2dBQWdFQkFrMEFBZ0lCVWdBQkFnRkdKQk1RQXhFckFDQUdFQllnTmhBQkJpTWlKaThCTnhjM0Z3S3MvcWowOUFGWTlQNGdDUWtFQ2dSd0pGNzZJd0xBOVA2bzlQUUJXUDdCQ1FVRWNDTmUreVFBQUFBQ0FENy9YZ1BDQXVJQUZBQWNBQ3BBSnh3Ykdoa1lGZ1lCQUFGQUFnRUFBUUVBVFFJQkFBQUJVUUFCQUFGRkFnQUtCd0FVQWhRRERpc0JJU0lHRlJFVUZqTWhNalkxRVRRdUJRRW5CeWMzRndFWEExdjlTaXM4UENzQ3RpczhCUXNPRWhRWC9rUUZCY29ncndGaklBTGlQQ3Y5U2lzOFBDc0N0Z3dYRlJFT0N3WDlid1VGeWlDdkFXTWdBQUVCUUFCZ0FzQUI0QUFMQUFhekNBQUJKaXNCQnljSEZ3Y1hOeGMzSnpjQ3FLaW9HS2lvR0tpb0dLbXBBZUNwcUJlb3FCZW5xQmVwcUFBQUFBRUJBQUFnQXdBQ2VBQVVBRGxBTmdnQkJBSUJRQWNCQWdFL0JnRUJQZ0FFQWdNQ0JBTm1BQUVBQWdRQkFsa0FBd0FBQTAwQUF3TUFVUUFBQXdCRkVoVVVFeEFGRXlza0lpWTBOak0xRndjMUlnNEJGUlFXTWpZMU14UUNhdFNXbG1yQXdEdGpPbit6ZmlnZ2x0U1dXSUJ2Ynpwak8xbC9mbHBxQUFBQkFJRC9vQVFBQXFBQUpnQTRRRFViR2dvSkNBY0dCUVFKQWdFQlFBUUJBQUFCQWdBQldRQUNBd01DVFFBQ0FnTlJBQU1DQTBVQkFCOGRGeFVRRGdBbUFTWUZEaXNCTWg0QkZUY1hCeWMzRnpRdUFpTWlEZ0VVSGdFek1qNEJOeGNPQVNNaUxnRTFORDRDQWdCb3NXZHVFbzJGRW1ZNVlJUkpZYVZnWUtWaFRZdGpHQmtueUgxb3NXYzlaNDRDb0dheGFHa1NpSWdTYVVtRVlEaGdwY0tsWUQ1dVJ3ZDBrbWV4YUU2T1p6MEFBQUlBUVArQUE4QUN3QUFKQUE4QUtrQW5DZ2NDQUQ0UERnMEVBd0lCQUFnQ1BRRUJBQUlDQUVzQkFRQUFBazhBQWdBQ1F4SVNGUU1SS3lVREpRVURKU0VMQVNFbEZ5RUhGeWNCV0cwQkZRRVZiUUVZL3FscGFmNnBBY0JTQVFiWVZkVysvc0xGeFFFK3hBRSsvc0xVOXBYMWx3QUFBZ0FBL3lBRUFBTWdBQlFBS3dBOFFEa0FCUUVDQVFVQ1pnQUNCQUVDQkdRQUJBY0JBd1FEVlFBQkFRQlJCZ0VBQUFvQlFoWVZBUUFtSlNFZkZTc1dLdzhPQ2dnQUZBRVVDQTRyQVNJT0FnYytBak15RWhVVUZqSTJOVFF1QVFNeVBnTTNEZ01qSWdJMU5DWWlCaFVVSGdFQ0FHZTdpVklEQTNDK2I2ejBPRkE0aWV5TFVwdDhYellDQWtSdm1GT3M5RGhRT0luc0F5QlBocmxtZDhsMC92cTZLRGc0S0l2c2lmd0FNbDE2bVZKWm9uUkZBUWE2S0RnNEtJdnNpUUFBREFBbC8wUUQyd0w2QUE4QUhRQXVBRHdBVGdCZkFIQUFnQUNWQUtjQXRBRERBRzFBYXBXQmNBTUJBRTQ5QWdZQkxoNENCUWExQVFrS2xnRUNDUVZBQUFvRkNRVUtDV1lBQ1FJRkNRSmtDd0VBQUFFR0FBRlpDQUVHQndFRkNnWUZXUVFCQWdNREFrMEVBUUlDQTFFQUF3SURSUUVBdUxlWWx6czROREVyS0NNZ0hSd1hGaEVRQ2drQUR3RVBEQTRyQVRJZUF4MEJGQVlpSmowQk5EWVRNaFlkQVJRR0lpWTlBVFEyTXdFVUJpc0JJaTRCTlRRMk93RXlIZ0VWSVJRR0t3RWlKalUwTmpzQk1oWWxGaFFHRHdFR0ppY21OajhCUGdFZUFSY0JGZ1lQQVE0QkxnRW5KalkvQVRZV0Z3RWVBUThCRGdFbkxnRS9BVDRDRmhjQkhnRVBBUTRCSnk0Qk5qOEJQZ0VYQXo0QkhnRWZBUllHQndZbUx3RXVBVDRETndFMk1oWWZBUllHQnc0QkxnRXZBU1kyTndFK0FSOEJIZ0VPQVM4QkxnRUJQZ0V5SHdFZUFRNEJMd0V1QVRjQ0FBVUpCd1lERWhnU0Vnd01FaElZRWhJTUFkc1NESDRJRGdnU0RINElEZ2o5QkJJTWZnd1NFZ3grREJJQ3ZBUUlCMjBLR0FjR0J3cHRCZ3dLQ2dQOWFnWUdDMjBGREFzSkF3Y0hDMndMR0FZQjZBc0dCajhHR0FvTEJ3Yy9Bd2tMREFYK2dnc0dCajhHR0FzSENBRURQd2NZQ2wwR0RBc0pBejhHQmdzS0dBYy9BZ0lCQWdNR0F3Ri9CdzhPQkQ4R0Jnc0ZEQXNKQXo4SEJ3djkxQVlZQ20wTEJnd1lDMndMQndLY0JRNFBCMjBMQmd3WUMyMEtCd1lDK2dNRkNBa0ZmUTBSRVExOURSSDlCQkVOZmd3U0VneCtEUkVCSVF3UkNBMElEUkVJRFFrTUVSRU1EUkVSNFFnUERnUS9CZ1lMQ3hnR1B3TUJBd2NGL29JTEdBWS9Bd0VEQndVTEdBWS9CZ2NLQWl3R0dBdHRDd1lHQmhnTGJRVUhBd0VEL1dvR0dBdHRDd1lHQkE0UUIyMExCZ1lDbGdNQkF3Y0ZiUXNZQmdZR0MyMERDQWdIQndZQy9Xb0VDQWR0Q3hnR0F3RURCd1Z0Q3hnR0FlZ0xCZ1kvQmhnV0JnWS9CaGoralFjSUJEOEdHQllHQmo4R0dBc0FBZ0NCLzZBRGdRS2dBQThBSUFBdFFDb09BUUlEQWdGQUR3QUNBVDBBQUFBQ0F3QUNXUUFEQVFFRFRRQURBd0ZSQUFFREFVVW9HQ01tQkJJckJTYzJOVFF1QVNNaUJoUVdNekkzRndFdUFUVTBOaklXRlJRT0JDTWlBNEhqUTFLTVVuNnlzbjVyVk9MOW5pWXBuK0dnRXlNMFBVVWtjVEhpVkd0U2pWR3kvTE5FNHdFUEptUTJjYUNmY1NWRlBUUWpFd0FBQUFFQkFBQWdBd0FDSUFBTEFDVkFJZ0FFQXdFRVN3VUJBd0lCQUFFREFGY0FCQVFCVHdBQkJBRkRFUkVSRVJFUUJoUXJBU01WSXpVak5UTTFNeFV6QXdEd0l1N3VJdkFCRHU3dUl2RHdBQUFBQVFGQS8rQUN3QUpnQUFVQUJyTURBUUVtS3dFM0NRRW5BUUZBUVFFLy9zRkJBUDhDSDBIK3dQN0FRUUQvQUFBQUFRRkEvK0FDd0FKZ0FBVUFCck1EQVFFbUt3RW5DUUUzQXdMQVFmN0JBVDlCL3dJZlFmN0Evc0JCQVA4QUFBQUFBUUVzQUlRQ3l3RzlBQW9BRWtBUENna0lCd1lGQUQ0QUFBQmZJUUVQS3lVR0l5SW1Md0UzRnpjWEFjQUpDUVFLQkhBa1h2b2pqUWtGQkhBalh2c2tBQVFBZ1ArZ0E0QUNvQUFJQUJFQUd3QWZBRXhBU1IwY0d4b1lGeFlURVJBUENBRU5CQWNCUUFBQkJ3RS9HUklDQmo0QUJnQUhCQVlIVndBRUFBRURCQUZYQlFFREFBQURTd1VCQXdNQVR3SUJBQU1BUXhrV0VSRVNFUkVTQ0JZckNRRVJNeEV6RVRNUkF5TVJJUkVqRVNVRkFRYzFJeFVIRlFrQk5TVUhOVE1DQVA3QTRNRGdJS0QvQUtBQklBRWcvdURBZ0VBQmdBR0EvYUJBUUFKQS93RCtZQUVBL3dBQm9QNkFBUUQvQUFGeDV1WUJiNXBhd0RNcEFUUCt6U21BTTRZQUFBQURBR0QvZ0FPZ0FzQUFHUUFoQUNVQVBrQTdJZ0VFQUNVQkFRUUNRQUFFQUFFQUJBRm1BQUlGQVFBRUFnQlpBQUVEQXdGTkFBRUJBMUVBQXdFRFJRRUFKQ01mSGhzYUVBNEFHUUVaQmc0ckFUSWVBUmNlQVJRR0J3NEVJeUl1QVNjdUFUUStBeUFHRUJZZ05oQW5CU0VSQWdBellWY2tOam82TmhZeE5UazdIek5oVnlRMk9qcHRpL24rcVBUMEFWajA0UDVCQVA4Q254b3lKRGVMbW9zM0ZTUWJFd2thTWlRM2k1cU1iRG9oOVA2bzlQUUJXQlRBL3dBQUFBUUFnUCtnQTRBQ29BQVNBQjRBcGdFM0FXNUxzQ1pRV0VCaEFBY0FIUVVISFZrSkFRVWZHd0lhQmdVYVdRZ0JCaDRCSEFBR0hGa2hBUUFBQXdRQUExa0tJZ0lFSUFFWkVnUVpXUmdCRWhFQkN3SVNDMWtBQWdBQkZBSUJXUllCRkE4QkRSTVVEVmtBRlFBT0ZRNVZGd0VURXd4UkVBRU1EQXNNUWh0QVp3QUhBQjBGQngxWkNRRUZIeHNDR2dZRkdsa0lBUVllQVJ3QUJoeFpJUUVBQUFNRUFBTlpDaUlDQkNBQkdSSUVHVmtZQVJJUkFRc0NFZ3RaQUFJQUFSUUNBVmtXQVJRUEFRMFRGQTFaRndFVEVBRU1GUk1NV1FBVkRnNFZUUUFWRlE1UkFBNFZEa1ZaUVV3QUlRQWZBQUVBQUFFMkFUTUJJd0VpQVI0QkhBRVFBUTBCQmdFRUFQOEEvUUQ4QVBzQTd3RHNBT2NBNUFEWkFOY0Ewd0RSQU1zQXlBREJBTDhBdkFDNkFLd0FxUUNmQUp3QWtnQ1JBSTRBakFDSEFJUUFmd0I5QUhrQWR3QnFBR2NBV2dCWEFFd0FTZ0JHQUVRQVBBQTVBRFFBTWdBdEFDc0FId0NtQUNFQXBnQWFBQmtBRkFBVEFBMEFEQUFBQUJJQUFRQVNBQ01BRGlzQklnNENCd1lWRkI0QkZ4WXlOalUwSnlZQ0lpWTFORDRCTWg0QkZSUTNJeUltTlRRL0FUWTBMd0VtSXlJUEFRNENJeUltUFFFMEppc0JJZ1lkQVJRT0F5TWlKaThCSmlNaUR3RUdGQjhCRmhVVURnRXJBU0lPQWc4QkRnTWRBUlFXT3dFeUhnRVZGQTRCRHdFR0ZCOEJGak15UHdFK0FUTXlGaDBCRkJZN0FUSTJQUUUwTmpNeUh3RVdNajhCTmpRdkFTWTFORFk3QVRJMlBRSTBMZ0VYRlJRckFTSUhEZ0lWRkI0Qkh3RVdEd0VHSXlJdkFTWWpJZ1lkQVJRT0Fpc0JJaVk5QVRRbkppTWlCZzhCQmlNaUx3RW1ORDhCTmpVMEp5WXJBU0ltUFFFME5qc0JNamMyTlRRbUx3RW1ORDhCTmpNd016SWVBUjhCRmpNeVBnRTNOajBCTkRzQk1oNEJIUUVVSHdFZUJETXlQd0UrQVRJV0h3RWVBUlVVRHdFR0ZSUWVBUmNXT3dFeUZRSUNGQ1VpSUEwNERSa1NPSjl4T1RnTmhWMHFTbGRLSzY4ZUV4c1BGQTRPTFE0VkZRNFRCQXNOQmhNZEhCUThGUjBGQ0F3T0NBa1JCeE1PRlJVT0xRNE9FdzhNRlF3ZkJBa0lDQU1HQXdRREFoNFVId3dWREFNSEJSTU9EaTBORmhRUEV3WVJDaE1jSFJROUZCNGJFeFFPRXc0cURpME9EaFFQR3hNZUZCc01GZ0lQSGlBWEJ3b0dCZ3NJRXcwTkxBVUlDQVFUR0NFZkx3TUZCZ1E4QndzWEdCOFFIZ3NTQlFnSUJDMEZCUklhRnhZaEh3Y0xDd2NmSUJjV0RRd1NCUVVzQlFnREFnTURBUk1YSVFzVEVnY1lFVDBFQ0FRWUNBUUpDUW9LQmlFWUVnSUhCd2NDTFFJREJSTVpCUW9JRmlFZUR3SGdCdzhWRFRoUUdqQXNFamh3VUU4NU9QNmdYa0lyU2lzclNpdENraHNURkEwVER5a09MQTRPRWdVSEJCc1RIaFFlSGhRZkJ3NExDQVVJQnhNT0Rpd09LUThTRGhRTUZnd0NBd1FEQmdNSENBa0ZQQlVkREJZTUJ3d0tCUklQS1E0c0RnNFRCd2diRXg0VkhSMFZIaE1iRUJNT0RpME9LUThURFJRVEhCd1VIeDRPRncxUUhoQVlCeElVQ3dvVkVnY1REQXd0QlFVU0dpMGhIZ1FIQkFNS0NCNGdGeGNOREJNRkJTMEZEZ1VTR0NFZ0Z4Y0xCajBIQ3hjWElCQWVDeElGRGdVdEJBRUNBUk1aQlFvSEZ5QWZFZ1VJQlI4ZkdBWURCUVFEQVJrU0F3SUNBaTBDQmdRSEJSTVhJUXNURVFnWEVnQUFBd0RBLytBRFFBSmdBQU1BQmdBSkFBcTNDQWNHQlFNQ0F5WXJFeDhCQ1FJREV3RW53T2x6QVNUK2lBRTQ1dUwrdHFZQkxXZm1Bb0QrYndGTS9nOEI5ZjdHU1FBRUFHRC9nQU9nQXNBQUJ3QVJBQmtBS2dCUlFFNEFCd0FLQVFjS1dRQUJBQUFDQVFCWkFBSUFBd1FDQTFjTEJnSUVBQVVKQkFWWERBRUpDQWdKVFF3QkNRa0lVUUFJQ1FoRkd4b0lDQ01pR2lvYktoY1dFeElJRVFnUkVSRVJFaE1TRFJRckFCUVdNalkwSmlJVEVTTVZNeFVqRlRNMUVpQUdFQllnTmhBQklpNEJOVFErQWpJZUFoUU9BZ0hQRnlJWEZ5STZZQ0FnZ0d6K3FQVDBBVmowL21CbnNHWThabzZham1ZOFBHYU9BZGtpRnhjaUYvNkFBUUFROEJBUUFsRDAvcWowOUFGWS9kZG1zR2ROam1ZOFBHYU9tbzVtUEFBRUFHRC9nQU9nQXNBQUJ3QVlBRE1BUUFCZVFGc0FCUVlIQmdVSFpnQUhDQVlIQ0dRQUFBQURCQUFEV1FzQkJBQUdCUVFHV1F3QkNBQUpBZ2dKV1FvQkFnRUJBazBLQVFJQ0FWRUFBUUlCUlRVMEdoa0pDRGs0TkVBMVFDc3FJUjhlSFJrekdqTVJFQWdZQ1JnVEVBMFFLd0FnQmhBV0lEWVFBU0l1QVRVMFBnSXlIZ0lVRGdJRElnNEJGVE1tTXpJV0ZSUUdCdzRDQnpNK0FUYytBVFUwSmdNaUJoUVdNalkxTkM0REFxeitxUFQwQVZqMC9tQm5zR1k4Wm82YWptWThQR2FPUmlzOElDWUNZU1F5RlJJWEdRc0JKZ0VOSUJvYVJqRVBFeFFjRkFRR0NBc0N3UFQrcVBUMEFWajkxMmF3WjAyT1pqdzhabzZham1ZOEFsa2JPQ2xkTFNNV0pSRVZKaWtkS2lFZkdDNGZNanYraXhNY0ZCUU9CUXNJQmdNQUFBQUFCUURBLzRBRFFBTEFBQXNBRXdBWEFDa0FNUUJZUUZVbklBSUpDZ0ZBQUFBQUJBRUFCRmtGREFNREFRQUhDQUVIVndBSUFBc0tDQXRaQUFvQUNRWUtDVmtBQmdJQ0Jrc0FCZ1lDVHdBQ0JnSkRBQUF2TGlzcUpDTWJHaGNXRlJRVEVnOE9BQXNBQ3hFVEV3MFJLd0UxTkNZaUJoMEJJeEVoRVNVME5qSVdIUUVoQVNFUklRYzBKaUlHRlJRV0Z4VVVGakkyUFFFK0FRWWlKalEyTWhZVUF0QjZySHB3QW9EK0VHZVNaLzZnQWREOXdBSkE0Q1UySlJzVkNRNEpGUnN6R2hNVEdoTUJZSkJXZW5wV2tQNGdBZUNRU1dkblNaRCtRQUdnb0JzbEpSc1dJd1ZTQndrSkIxSUZJd29UR2hNVEdnQUFBQVlBd1FEZ0EwQUJZQUFIQUE4QUhnQW5BQzhBTndCRlFFSUtEUVlEQWdnTUJBTUFBUUlBV1FrRkFnRURBd0ZOQ1FVQ0FRRURVUXNIQWdNQkEwVWdIeEVRTlRReE1DMHNLU2drSXg4bklDY1lGaEFlRVI0VEV4TVFEaElyQURJV0ZBWWlKalEySWdZVUZqSTJOQ1V5SGdFVkZBWWpJaTRDTlRRMk55SUdGQll5TmpRbUJESVdGQVlpSmpRMklnWVVGakkyTkFIeEhoVVZIaFUvTmlVbE5pWCt3UW9RQ2hVUEJ3NEpCaFVQR3lVbE5TWW1BZFllRlJVZUZUODJKU1UySlFGRUZSNFZGUjR4SlRZbEpUWUpDaEFLRHhVR0NRNEhEeFVjSlRZbEpUWWxIQlVlRlJVZU1TVTJKU1UyQUFBQUFBSUJBUC9nQXdBQ1lBQXdBRXNCSVV1d0MxQllRQjR2RndJSkEwcytBZ29CUFFFRkNERUJCd1V0S2dJR0J3VkFHd0VIQVQ4YlM3QU1VRmhBSGk4WEFna0RTejRDQ2dJOUFRVUlNUUVIQlMwcUFnWUhCVUFiQVFjQlB4dEFIaThYQWdrRFN6NENDZ0U5QVFVSU1RRUhCUzBxQWdZSEJVQWJBUWNCUDFsWlM3QUxVRmhBTHdBQUNRRUpBQUZtQUFNQUNRQURDVmtDQVFFQUNnZ0JDbGtBQ0FBRkJ3Z0ZXUUFIQUFZRUJ3WlpBQVFFQ3dSQ0cwdXdERkJZUUM4QkFRQUpBZ2tBQW1ZQUF3QUpBQU1KV1FBQ0FBb0lBZ3BaQUFnQUJRY0lCVmtBQndBR0JBY0dXUUFFQkFzRVFodEFMd0FBQ1FFSkFBRm1BQU1BQ1FBRENWa0NBUUVBQ2dnQkNsa0FDQUFGQndnRldRQUhBQVlFQndaWkFBUUVDd1JDV1ZsQUQwcElRa0FrTERRakZpa3hFaEFMRnlzQklnNEVJeUl1QVM4QkppY3VBaU1pRGdFUEFSa0JNeEUrQVRNeUhnRVhGak15UGdNM1BnRTNFVFVHQXdZaklpY3VBaU1pRGdFSEVUNEJNeklYSGdRek1qY0M0QUlTQ0JFTUR3Y09HaDRKR3hJSEhDRXpGaXBBRWdVSElBMHpLQk1xTlE1YU1RZ1JFZ3NVQXdvUEJ3d1VOeFl1VncwM0xSVVlLaHNMRFRNb0xWTUdKeElnSEE0WE9BSkFBd0VCQVFFQ0JRSUdCQUVHQndZTENBTUYvcmYrNUFFZkJRZ0lEd01UQVFJQkFnRUJBZ0VCT2lFQy9zTUhFZ01QQ1FRRkF3RVRCUWdTQVFrREJnSUhBQUFDQUlEL29BT0FBcUFBQ0FBU0FEVkFNaElSRHc0TkNnZ0JBQWtCQXdGQUVBa0NBejRBQVFNQUF3RUFaZ0FEQVFBRFN3QURBd0JQQWdFQUF3QkRGQkVSRWdRU0t3a0JFVE1STXhFekVRRUhOU01WQnhVSkFUVUNBUDdBNE1EZy9zREFnRUFCZ0FHQUFrRC9BUDVnQVFEL0FBR2dBV0NhV3NBektRRXovczBwQUFJQWdQK2dBNEFDb0FDQkFJNEFwTGFJaHdJSEFBRkFTN0FtVUZoQU1RQURBQThBQXc5WkJoQUNBQTBCQnc0QUIxa0VBUUlMQVFrSUFnbFpBQTRBQ2c0S1ZRVUJBUUVJVVF3QkNBZ0xDRUliUURjQUF3QVBBQU1QV1FZUUFnQU5BUWNPQUFkWkFBNEpDZzVOQkFFQ0N3RUpDQUlKV1FVQkFRd0JDQW9CQ0ZrQURnNEtVUUFLRGdwRldVQW1BZ0NNaTRXRWUzaHJhbWRsWDF4WFZWRlBSVUk4T1N3cUpTTWJHQk1SRFF3QWdRS0JFUTRyQVNNaUpqVTBQd0UyTkM4QkppSVBBUTRCSXlJbVBRRTBKaXNCSWc0QkhRRVVEZ0lqSWk0Qkx3RW1JeUlQQVFZVUh3RWVBeFVVQmlzQklnNEJIUUVVRmpzQk1oWVZGQThCQmhRZkFSWXpNajhCUGdFek1oWWRBUlFXT3dFeU5qMEJORDRCTXpJZkFSWXlQd0UrQVRRbUx3RW1OVFErQVRzQk1qWTlBalltQnhRR0lpWTFNVFErQVRJZUFRTlJIaE1iRHhRT0RpME9LZzRUQnhFS0V4d2RGRDBORmcwSURSRUpCd3dLQlJNT0ZSVU9MUTRPRXdRRkJBSWJFaDhORnc0ZUZCOFNHdzhURGc0dERSWVVEeE1HRWdrVEhCMFVQUlFkRFJVTkV3OFREaWtQTEFjSUNBY1REd3dWREI4VUdnRWJ3MTZGWFNwS1Ywb3JBVzhjRXhNT0V3NHBEeXdPRGhNSENCc1NIeFFlRGhjTkh3a1FEUWNEQndVVERnNHNEaWtQRWdRSUNBa0ZFeHdORmc0OEZSd2NFeFFPRWc4cERpd09EaE1IQ0JzVEhoUWVIUlVlREJVTkVCSU9EaXdIRXhJVEJ4TU5GQTBWRFJ3VUh4NFZIRTlDWGw1Q0swb3JLMG9BQUFNQVlQK0FBNkFDd0FBSEFCRUFHd0EzUURRQUFBQUNBd0FDV1FBREFBY0dBd2RYQUFZSUFRVUVCZ1ZYQUFRQkFRUkxBQVFFQVZFQUFRUUJSUkVSRVJFVUZCTVRFQWtYS3dBZ0JoQVdJRFlRSkRJV0ZSUUdJaVkxTkJNak5UTTFJelV6RVRNQ3JQNm85UFFCV1BUK1JpSVhGeUlYY1lBZ0lHQWdBc0QwL3FqMDlBRllKQmNSRUJnWUVCSCtoeER3RVA4QUFBQURBR0QvZ0FPZ0FzQUFCd0FVQUM0QVNFQkZBQVVIQmdjRkJtWUFCZ1FIQmdSa0FBQUFCd1VBQjFrQUJBQURBZ1FEV2dnQkFnRUJBazBJQVFJQ0FWSUFBUUlCUmdrSUtpZ25KaVVqR1JnTkRBZ1VDUlFURUFrUUt3QWdCaEFXSURZUUFTSW1ORFl5RmhVVURnTTNEZ0VISXpRK0FqYytBVFUwSmlNaUZ5TTJNeklXRlJRR0FxeitxUFQwQVZqMC9ta1BFeE1kRkFRR0NBcytJQTBCSmdjT0ZoRVNGVElrWVFJbUFZWXpSaG9Dd1BUK3FQVDBBVmorZUJRY0V4TU9CZ29JQndQbklDRXFGaUVmR3hBUkpoVWpMVjE4T3pJZUx3QURBTUVBNEFOQUFXQUFCd0FRQUJnQUswQW9CQVlDQXdBQkFRQk5CQVlDQXdBQUFWRUZBd0lCQUFGRkNRZ1dGUklSRFF3SUVBa1FFeEFIRUNzQUlnWVVGakkyTkNVaUJoUVdNalkwSmlBaUJoUVdNalkwQWhzMkpTVTJKZjdCR3lVbE5TWW1BZ0EySlNVMkpRRmdKVFlsSlRZbEpUWWxKVFlsSlRZbEpUWUFBQXdBUVAvUUE4QUNjQUFIQUE4QUZ3QWZBQ2NBTHdBMUFEc0FRd0JMQUZNQVd3RUVTN0FoVUZoQVlnQUNBQUpvQUFNQkNnRURDbVlBQ2dnQkNnaGtBQXNKQmdrTEJtWUFCZ1FKQmdSa0FBY0ZCMmtZRndJVUZnRVZBUlFWVndBQUFBRURBQUZaRHdFTURnRU5DUXdOV0FBSUFBa0xDQWxaRXdFUUVnRVJCUkFSV0FBRUJBVlJBQVVGQ3dWQ0cwQm5BQUlBQW1nQUF3RUtBUU1LWmdBS0NBRUtDR1FBQ3drR0NRc0daZ0FHQkFrR0JHUUFCd1VIYVJnWEFoUVdBUlVCRkJWWEFBQUFBUU1BQVZrUEFRd09BUTBKREExWUFBZ0FDUXNJQ1ZrQUJCQUZCRTBUQVJBU0FSRUZFQkZZQUFRRUJWRUFCUVFGUlZsQUxWUlVWRnRVVzFwWlQwNU5URXBKU0VjL1BqMDhPem81T0RNeU1UQXRMQ2tvSlNRVEV4TVRFeE1URXhBWkZ5c0FNaFlVQmlJbU5EWWlCaFFXTWpZMEFqSVdGQVlpSmpRMklnWVVGakkyTkFBeUZoUUdJaVkwTmlJR0ZCWXlOalFYSVJVaE5qUWlGQmNqTlRNQk14VWpOalUwSmdjVUZoVWhOU0VHRXpNVkl6WTFOQ1luQmhVVUZoVWhOUUt6R2hNVEdoTTZOQ1ltTkNaTkdoTVRHaE02TkNZbU5DYitNeG9URXhvVE9qUW1KalFtSHdJaC9kOEJ3QUdob1FJK29hRUJBYjhCL2Q4Q0lRRy9vYUVCQWI0QkFmM2ZBbEFUR2hNVEdqTW1OQ1ltTlAzbUV4b1RFeG96SmpRbUpqUUJGaE1hRXhNYU15WTBKaVkwQ2lBSUVCQUlJUDd3SUFnSUJBZ01CQWdFSUFnQ0tDQUlDQVFJQkFnSUJBZ0VJQUFKQUVRQUlBTzhBc3NBRlFBbkFETUFSQUJRQUYwQWNRQitBSXdCRWt1d0NsQllRRjRYQVF3TEF3b01YZ0FOQWdvTERWNEFCd0FJQVFjSVdRQUJFZ0VBQ1FFQVdRQUpGUUVHQ3drR1dRQURFd0VDRFFNQ1dRQUxGZ0VLRHdzS1dRQVBHUUVRQlE4UVdRQUZGQUVFRVFVRVdRQVJEZzRSVFFBUkVRNVJHQUVPRVE1RkcwQmdGd0VNQ3dNTERBTm1BQTBDQ2dJTkNtWUFCd0FJQVFjSVdRQUJFZ0VBQ1FFQVdRQUpGUUVHQ3drR1dRQURFd0VDRFFNQ1dRQUxGZ0VLRHdzS1dRQVBHUUVRQlE4UVdRQUZGQUVFRVFVRVdRQVJEZzRSVFFBUkVRNVJHQUVPRVE1RldVQkdnSDl6Y2w5ZVVsRTFOQ29vR0JZQ0FJU0RmNHlBakhsNGNuNXpmbWxuWG5GZmNWaFhVVjFTWFV4TFJrVTlPelJFTlVRd0xTZ3pLak1oSGhZbkdDY09Dd0FWQWhVYURpc0JJU0l1QlRVME5qTWhNaDRERlJRR0J5RWlMZ0kxTkRZeklUSWVBaFVVQmdjaElpWTBOak1oTWhZVUJnRWlKalUwUGdJek1oNEJGUlFPQWlZaURnRVVIZ0V5UGdFMEpnTWlKalUwUGdFeUhnRVVEZ0VuSWc0QkZSUWVBek15UGdFMU5DNERBeUltTlRRK0FUSWVBUlFPQVNjaUJoUVdNalkxTkM0RUE1cjkzUVFIQndZRkF3SVVEZ0lqQlFzSUJnUVVEdjNkQmcwSkJoUU9BaU1IREFrR0ZBNzkzUTRVRkE0Q0l3NFVGUDBES3p3Ukd5WVZHekFiRUJ3bUN4TVBDUWtQRXhBSkNSa3JQQnd2TnpBYkd6QWJDZzhKQXdZSkNnWUpFQWtFQmdnTEJTczhIQzgzTUJzYk1Cc09GQlFjRkFNRUJnZ0pBa0lDQXdVR0J3Y0VEaFFEQmdrS0JnNFU3d1lKREFjT0ZBVUpEUWNPRk84VUhSUVVIUlFCbWp3cUZTWWJFUnd2SEJVbEhCQ0lDUThURUFrSkVCTVAvcEk4S2h3dkhCd3ZOekFiaUFrUENnVUxDQVlFQ1JBSkJnb0pCZ1AraVR3cUhDOGNIQzgzTUJ1SkZCMFVGQTRGQ1FjSEJBTUFBd0JBLytFRHZ3Sm5BQU1BQndBTEFDWkFJd0FDQUFNQUFnTlhBQUFBQVFRQUFWY0FCQVFGVHdBRkJRc0ZRaEVSRVJFUkVBWVVLeE1oRlNFUklSVWhFU0VWSVVBRGYveUJBMy84Z1FOLy9JRUJQREFCV3pEOTJTOEFBQUFFQUJmL2lBUHBBcmdBQlFBaUFEa0FQd0E5UURvL1BqMDhPem81TFN3aklpRWZIaFFUQmdVRUF3SUJBQmNDQVFGQUFBQUFBUUlBQVZrQUFnTURBazBBQWdJRFVRQURBZ05GTHg0WExRUVNLd0VISndjWE55Y3dQUUV1QXlNaURnSUhGejRCTWg0QkZ4VVVCZ2NYTmpVeEJ3NEJJaTRCTlRRMk55Y0dIUU1lQWpNeU5qY0JCeGMzRnpjRDAxTlZGV3BwVVFGQmJaZFNOMmxjVFJzY01yRE1yR1VCQVFFZ0FsQXlzTXl0WlFFQklBSUNiN3B0YnNBMi9SeHBGbE5URmdFZ1UxTVdhbWtZQVFKVGxXeEFIVFpOTUJCWloyU3NaZzRHRGdjRUZSYTRXV2RrcldZS0ZBb0VGUllDQkFOc3VHdHdZQUZJYVJkVFV4Y0FBQUFCQVYvL253S2dBcUFBU1FCTFFFZzZBUUFGUng4S0F3SURBa0FBQlFBRmFBY0JBQU1BYUFBREFnTm9BQUlBQkFFQ0JGa0FBUVlHQVUwQUFRRUdVZ0FHQVFaR0FRQkRRVGMyTFNzbEl4MGJDQWNBU1FGSkNBNHJBU0lPQVJVUkZBWWlKamN3RVRRMk56WVhIZ0VWRVJRT0FnY0dJeUltTlRBUk5DWWpJZzRCRlFNVUZqTVdOejRDTlJNMEp5WWlCd1lITUIwREJoWXpGamMyTlJFMkpnS0pCZ3NHUlZ0RkFSSVFJeU1RRVFJQ0JBSUdDQWtORFFrSENnWUJLUndkRkFZSkJBRTRHejhhT0FFQllFQkRMaThCRFFIcUJnc0cvbm85UVVNOUFkWVhJd2tWRlFvakYvNC9CZ29JQ0FNSEZoTUJXZ29OQmdzRy9xY3FMd0VaQ0JRWERRSEJTeUlRRHlGTGVJMTlWRkZlQVM4d1R3R0ZDZzRBQXdBVC8vWUQ3UUpKQUJjQUl3QXhBSnBMc0E5UVdFQWlCd0VFQWdVQ0JGNEFCUU1EQlZ3QUFRWUJBZ1FCQWxrQUF3TUFVZ0FBQUFzQVFodExzQmhRV0VBa0J3RUVBZ1VDQkFWbUFBVURBZ1VEWkFBQkJnRUNCQUVDV1FBREF3QlNBQUFBQ3dCQ0cwQXBCd0VFQWdVQ0JBVm1BQVVEQWdVRFpBQUJCZ0VDQkFFQ1dRQURBQUFEVFFBREF3QlNBQUFEQUVaWldVQVVKU1FaR0NzcUpERWxNU0FmR0NNWkl5a21DQkFyQVJRT0JDTWlMZ00wUGdNek1oY1dGeFlsSWc0Q0ZSUVdNalkwSmdjaURnRVZGQll5TmpVMExnSUQ3U0U4V21xR1JsR2RkVnN2TDF0Mm5GSEluV01kQ1A0VE1GaEFKWXZGaTR0aktVWW9XSDVZR0NnNEFTQVlQa00vTXg4clJGQk5QRTFRUkNwd1Iwc1c0aVpDV2pGbGpvN0tqbGdwU0NwQVcxdEFJRGtxR0FBQUFRREFBR0FEUUFIZ0FBVUFCck1DQUFFbUt5VTNDUUVYQVFNWkovN0Evc0FuQVJsZ0tRRlgvcWtwQVMwQUFBQUFBUURBQUdBRFFBSGdBQVVBQnJNQ0FBRW1Ld0VYQ1FFM0FRTVpKLzdBL3NBbkFSa0I0Q24rcVFGWEtmN1RBQUFBQVFGQS8rQUN3QUpnQUFVQUJyTURBUUVtS3dFbkNRRTNBUUxBS2Y2cEFWY3AvdE1DT1NmK3dQN0FKd0VaQUFBQUFRRkEvK0FDd0FKZ0FBVUFCck1EQVFFbUt3RTNDUUVuQVFGQUtRRlgvcWtwQVMwQ09TZit3UDdBSndFWkFBQUFBUUZBLytBQ3dBSmdBQ0VBSlVBaUdSZ1RDd1FGQUFJQlFBQUFBZ0VDQUFGbUFBSUNBVkVBQVFFTEFVSXNGUkVERVNzQkJpSXZBUkVVQmlJbU5SRUhCaWNtTkRjMk56WXpNaFlmQVI0Qkh3RWVBUlVVQXJzRURRV1ZDUTRKbFF3S0JRV3VBZ1lGQXdVQkFnRllMQ3NEQWdHa0JBU0YvY2NIQ1FrSEFqbUVDd29GRGdTZkFRVUNBUUlCVUNnbkFnWURCd0FBQUFFQlFQL2dBc0FDWUFBZ0FDUkFJUmdUQ3dRRUFnQUJRQUFBQVFJQkFBSm1BQUVCQWxFQUFnSUxBa0lzRlJFREVTc2xKaUlQQVJFMEppSUdGUkVuSmdjR0ZCY1dGeFl6TWpZM1BnRS9BVDRCTlRRQ3V3UU5CWlVKRGdtVkRBb0ZCYTRDQmdVRUJnRUJXQ3dyQXdLY0JBU0ZBamtIQ1FrSC9jZUVDd29GRGdTZkFRVURBZ0ZRS0NjQ0JnTUhBQUFBQUFFQXdBQmdBMEFCNEFBZEFDcEFKeFlTQWdBQkFVQUFBZ0VDYUFBREFBTnBBQUVBQUFGTkFBRUJBRklBQUFFQVJod1VJeU1FRWlzbE5pOEJJVEkyTkNZaklUYzJKeVlpQndZSEJoVVVGeDRCSHdFV016WUJmQW9LaFFJNUJ3a0pCLzNIaEFzS0JRNEVud0VGQlFGUUtDY0VCd2RsQ2d5VkNRNEpsUXdLQlFXdUFnWUZCd1FCV0N3ckJRRUFBUURBQUdBRFFBSGhBQjRBSlVBaUZ4TUNBQUVCUUFBQ0FBSnBBQUVBQUFGTkFBRUJBRkVBQUFFQVJSMGNJeU1ERUNzbEpqOEJJU0ltTkRZeklTY21OejRCRmhjV0Z4WVZGQWNPQVE4QkJpTW1Bb1FLQ29YOXh3Y0pDUWNDT1lRTENnTUpDQU9mQVFVRkFWQW9Kd1FIQjJVS0RKVUpEZ21WREFvREF3SUVyZ0lHQlFjRUFWZ3NLd1VCQUFBQkFSNy9wd0xhQW44QUJnQVdRQk1BQVFBOUFBRUFBV2dDQVFBQVh4RVJFUU1SS3dVVEl4RWpFU01CL042Um01QlpBU2dCc1A1UUFBRUFYLzk3QTZFQ3ZRQUxBQUFKQWdjSkFSY0pBVGNKQVFOdC9wTCtsRFFCYmY2VE5BRnNBVzQwL3BFQmJ3SzkvcElCYkRQK2xQNlVNd0ZzL3BJekFXNEJiUUFBQkFCVi8zRURxZ0xJQUJNQUp3QStBRVFBQUFVR0xnRTBOejRCTkNZbkpqUStBUmNlQVJRR0p3NEJKalEzUGdFMEppY21ORFlXRng0QkZBWURKeU1pSmljUlBnRTNNemMrQVI0QkZSRVVEZ0VtSnpjUkJ5TVJNd013Q0JnUUNUSTJOVElKRUJnSk9qNC9yQWdZRVFnWUdSZ1hDQkVZQ0I4Z0l1SElweGNoQVFFaEY2ZkZEaDhlRUJBYkh3NGYxTHE0RkFrQkVoZ0pOSWFYaFRRSkdCSUJDVHljc0p4U0NBRVNGd2taUGtVK0dRa1hFUUVJSVZOY1UvN2dnaUVZQWJrWElRR1RDZ01QR3hEOUhCQWFEd0VJTUFMa24vNUhBQUFBQlFCQS8zd0R3QUs4QUFzQUh3QXpBRWdBWFFBQUpTRWlKalEyTXlFeUZoUUdBeU1pSmpRMk93RXlOajBCTkRZeUZoMEJEZ0VGSXk0Qkp6VTBOaklXSFFFVUZqc0JNaFlVQmdNaUpqMEJQZ0UzTXpJV0ZBWXJBU0lHSFFFVUJpRWlKajBCTkNZckFTSW1ORFk3QVI0QkZ4VVVCZ09nL01BT0VoSU9BMEFPRWhKdXdBNFNFZzdBRGhJU0hCSUJOdjMzb0NrMkFSSWNFaElPb0E0U0V1NE9FZ0UyS2FBT0VoSU9vQTRTRWdMeURoSVNEc0FPRWhJT3dDazJBUkw4RWh3U0Vod1Mvb0FTSEJJU0RxQU9FaElPb0NrMkFRRTJLYUFPRWhJT29BNFNFaHdTQWlBU0RxQXBOZ0VTSEJJU0RxQU9FaElPb0E0U0Vod1NBVFlwb0E0U0FBQUFEQUNXQUFFQUFBQUFBQUVBQ0FBU0FBRUFBQUFBQUFJQUFBQWhBQUVBQUFBQUFBTUFGZ0JVQUFFQUFBQUFBQVFBQ1FDREFBRUFBQUFBQUFVQU1BRHZBQUVBQUFBQUFBWUFDUUUwQUFNQUFRUUpBQUVBRUFBQUFBTUFBUVFKQUFJQUJBQWJBQU1BQVFRSkFBTUFNQUFpQUFNQUFRUUpBQVFBRmdCckFBTUFBUVFKQUFVQVlBQ05BQU1BQVFRSkFBWUFFZ0VnQUhVQWJnQnBBR2tBWXdCdkFHNEFjd0FBZFc1cGFXTnZibk1BWGppSnhBQUFBQUIxQUc0QWFRQnBBR01BYndCdUFITUFJRjQ0aWNRQU9nQldBR1VBY2dCekFHa0Fid0J1QUNBQU1RQXVBREFBTUFBQWRXNXBhV052Ym5NZ09sWmxjbk5wYjI0Z01TNHdNQUFBZFFCdUFHa0FhUUJqQUc4QWJnQnpBQ0JlT0luRUFBQjFibWxwWTI5dWN5QUFBRllBWlFCeUFITUFhUUJ2QUc0QUlBQXhBQzRBTUFBd0FDQUFVd0JsQUhBQWRBQmxBRzBBWWdCbEFISUFJQUF5QURBQUxBQWdBRElBTUFBeEFEa0FMQUFnQUdrQWJnQnBBSFFBYVFCaEFHd0FJQUJ5QUdVQWJBQmxBR0VBY3dCbEFBQldaWEp6YVc5dUlERXVNREFnVTJWd2RHVnRZbVZ5SURJd0xDQXlNREU1TENCcGJtbDBhV0ZzSUhKbGJHVmhjMlVBQUhVQWJnQnBBR2tBWXdCdkFHNEFjd0F0QUFCMWJtbHBZMjl1Y3kwQUFBSUFBQUFBQUFEL0h3QXlBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBWUFBQUFBRUFBZ0JiQVFJQkF3RUVBUVVCQmdFSEFRZ0JDUUVLQVFzQkRBRU5BUTRCRHdFUUFSRUJFZ0VUQVJRQkZRRVdBUmNCR0FFWkFSb0JHd0VjQVIwQkhnRWZBU0FCSVFFaUFTTUJKQUVsQVNZQkp3RW9BU2tCS2dFckFTd0JMUUV1QVM4Qk1BRXhBVElCTXdFMEFUVUJOZ0UzQVRnQk9RRTZBVHNCUEFFOUFUNEJQd0ZBQVVFQlFnRkRBVVFCUlFGR0FVY0JTQUZKQVVvQlN3Rk1BVTBCVGdGUEFWQUJVUUZTQVZNQlZBRlZBVllCVndGWUFWa0JXZ0ZiQVZ3QlhRZDFibWxGTVRBd0IzVnVhVVV4TURFSGRXNXBSVEV3TWdkMWJtbEZNVE13QjNWdWFVVXhNekVIZFc1cFJURXpNZ2QxYm1sRk1qQXdCM1Z1YVVVeU1ERUhkVzVwUlRJd01nZDFibWxGTWpBekIzVnVhVVV5TXpBSGRXNXBSVEl6TVFkMWJtbEZNak15QjNWdWFVVXlNek1IZFc1cFJUSTJNQWQxYm1sRk1qWXhCM1Z1YVVVeU5qSUhkVzVwUlRJMk13ZDFibWxGTWpZMEIzVnVhVVV6TURBSGRXNXBSVE13TVFkMWJtbEZNekF5QjNWdWFVVXpNRE1IZFc1cFJUTXpNZ2QxYm1sRk16TXpCM1Z1YVVVek5qQUhkVzVwUlRNMk13ZDFibWxGTXpZMEIzVnVhVVUwTURBSGRXNXBSVFF3TVFkMWJtbEZOREF5QjNWdWFVVTBNRE1IZFc1cFJUUXdOQWQxYm1sRk5EQTFCM1Z1YVVVME1EWUhkVzVwUlRRd053ZDFibWxGTkRBNEIzVnVhVVUwTURrSGRXNXBSVFF4TUFkMWJtbEZOREV4QjNWdWFVVTBNVE1IZFc1cFJUUXpOQWQxYm1sRk5ETTNCM1Z1YVVVME16Z0hkVzVwUlRRek9RZDFibWxGTkRRd0IzVnVhVVUwTkRFSGRXNXBSVFEwTWdkMWJtbEZORFF6QjNWdWFVVTBOakFIZFc1cFJUUTJNUWQxYm1sRk5EWXlCM1Z1YVVVME5qTUhkVzVwUlRRMk5BZDFibWxGTkRZMUIzVnVhVVUwTmpZSGRXNXBSVFEyT0FkMWJtbEZORGN3QjNWdWFVVTBOekVIZFc1cFJUUTNNZ2QxYm1sRk5UQXdCM1Z1YVVVMU1ERUhkVzVwUlRVd01nZDFibWxGTlRBekIzVnVhVVUxTURRSGRXNXBSVFV3TlFkMWJtbEZOVEEyQjNWdWFVVTFNRGNIZFc1cFJUVXdPQWQxYm1sRk5UTXdCM1Z1YVVVMU16SUhkVzVwUlRVek5BZDFibWxGTlRNMUIzVnVhVVUxTXpjSGRXNXBSVFUyTUFkMWJtbEZOVFl5QjNWdWFVVTFOak1IZFc1cFJUVTJOUWQxYm1sRk5UWTNCM1Z1YVVVMU5qZ0hkVzVwUlRVNE1BZDFibWxGTlRneEIzVnVhVVUxT0RJSGRXNXBSVFU0TXdkMWJtbEZOVGcwQjNWdWFVVTFPRFVIZFc1cFJUVTROZ2QxYm1sRk5UZzNCM1Z1YVVVMU9EZ0hkVzVwUlRVNE9RUkZkWEp2QjNWdWFVVTJNVElBQUFFQUFmLy9BQThBQVFBQUFBd0FBQUFXQUFBQUFnQUJBQUVBWHdBQkFBUUFBQUFDQUFBQUFBQUFBQUVBQUFBQTFhUW5DQUFBQUFEWnFsdTVBQUFBQU5tcVhBaz0nKVwiXHJcblx0fSk7XHJcblx0Ly8gI2VuZGlmXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0bmFtZTogJ1VuaUljb25zJyxcclxuXHRcdHByb3BzOiB7XHJcblx0XHRcdHR5cGU6IHtcclxuXHRcdFx0XHR0eXBlOiBTdHJpbmcsXHJcblx0XHRcdFx0ZGVmYXVsdDogJydcclxuXHRcdFx0fSxcclxuXHRcdFx0Y29sb3I6IHtcclxuXHRcdFx0XHR0eXBlOiBTdHJpbmcsXHJcblx0XHRcdFx0ZGVmYXVsdDogJyMzMzMzMzMnXHJcblx0XHRcdH0sXHJcblx0XHRcdHNpemU6IHtcclxuXHRcdFx0XHR0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IDE2XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGljb25zOiBpY29uc1xyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRfb25DbGljaygpIHtcclxuXHRcdFx0XHR0aGlzLiRlbWl0KCdjbGljaycpXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXHJcblx0QGZvbnQtZmFjZSB7XHJcblx0XHRmb250LWZhbWlseTogdW5paWNvbnM7XHJcblx0XHRzcmM6IHVybCgnZGF0YTpmb250L3RydWV0eXBlO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LEFBRUFBQUFRQVFBQUJBQUFSa1pVVFlqNDNzc0FBSGJZQUFBQUhFZEVSVVlBSndCbUFBQjJ1QUFBQUI1UFV5OHlXV2xjcWdBQUFZZ0FBQUJnWTIxaGNHQmhiQlVBQUFLMEFBQUNRbU4yZENBTXBmNDBBQUFQS0FBQUFDUm1jR2R0TVBlZWxRQUFCUGdBQUFtV1oyRnpjQUFBQUJBQUFIYXdBQUFBQ0dkc2VXWnNmZ2ZaQUFBUUVBQUFZUXhvWldGa0ZvZjYvd0FBQVF3QUFBQTJhR2hsWVFkK0F5WUFBQUZFQUFBQUpHaHRkSGdrZUJ1WUFBQUI2QUFBQU1wc2IyTmhQRWtuTGdBQUQwd0FBQURDYldGNGNBSWpBM0lBQUFGb0FBQUFJRzVoYldYV09UdFVBQUJ4SEFBQUFkUndiM04wVEpFNGlnQUFjdkFBQUFPL2NISmxjS1c1dm1ZQUFBNlFBQUFBbFFBQkFBQUFBUUFBQ1YvT09WOFBQUFVBSHdRQUFBQUFBTm1xVzdrQUFBQUEyYXBjQ1FBQS95QUVBQU1nQUFBQUNBQUNBQUFBQUFBQUFBRUFBQU1nL3lBQVhBUUFBQUFBQUFRQUFBRUFBQUFBQUFBQUFBQUFBQUFBQUFBRkFBRUFBQUJnQVhvQURBQUFBQUFBQWdCR0FGUUFiQUFBQVFRQm9nQUFBQUFBQkFQL0FaQUFCZ0FBQXBrQ3pBQUFBSThDbVFMTUFBQUI2d0F6QVFrQUFBSUFCZ01BQUFBQUFBQUFBQUFCRUFBQUFBQUFBQUFBQUFBQVVFWkZSQUdBQUIzbUVnTXMveXdBWEFNZ0FPQUFBQUFCQUFBQUFBTVlBczBBQUFBZ0FBRUJkZ0FpQUFBQUFBRlZBQUFENlFBc0JBQUFZQURBQU1BQVlBREFBTUFBb0FDQUFJQUFZQUNnQUlBQWdBQmdBTE1BUUFCQUFBVUFWd0JlQUlBQkFBRDBBUUFBOUFFQUFFQUFWZ0NnQU9BQXdBREFBRkVBZmdDQUFHQUFRQUJnQUdBQVlBQStBRkVBWUFCQUFHQUFZQUEwQUdBQVBnRkFBUUFBZ0FCQUFBQUFKUUNCQVFBQlFBRkFBU3dBZ0FCZ0FJQUF3QUJnQUdBQXdBREJBUUFBZ0FDQUFHQUFZQURCQUVBQVJBQkFBQmNCWHdBVEFNQUF3QUZBQVVBQlFBRkFBTUFBd0FFZUFGOEFWUUJBQUFBQUFBQURBQUFBQXdBQUFCd0FBUUFBQUFBQlBBQURBQUVBQUFBY0FBUUJJQUFBQUVRQVFBQUZBQVFBQUFBZEFIamhBdUV5NGdQaU0rSms0d1BqTStOZzQyVGtDZVFSNUJQa05PUTU1RVBrWnVSbzVITGxDT1V3NVRMbE5lVTM1V0RsWStWbDVXamxpZVdRNWhMLy93QUFBQUFBSFFCNDRRRGhNT0lBNGpEaVlPTUE0ekxqWU9OajVBRGtFT1FUNURUa04rUkE1R0RrYU9SdzVRRGxNT1V5NVRUbE4rVmc1V0xsWmVWbjVZRGxrT1lTLy84QUFmL2svNHNmQkI3WEhnb2QzaDJ5SFJjYzZSeTlITHNjSUJ3YUhCa2IrUnYzRy9FYjFSdlVHODBiUUJzWkd4Z2JGeHNXR3U0YTdScnNHdXNhMUJyT0drMEFBUUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUJCZ0FBQVFBQUFBQUFBQUFCQWdBQUFBSUFBQUFBQUFBQUFBQUFBQUFBQUFBQkFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUF3QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFzQUFzc0NCZ1ppMndBU3dnWkNDd3dGQ3dCQ1phc0FSRlcxZ2hJeUViaWxnZ3NGQlFXQ0d3UUZrYklMQTRVRmdoc0RoWldTQ3dDa1ZoWkxBb1VGZ2hzQXBGSUxBd1VGZ2hzREJaR3lDd3dGQllJR1lnaW9waElMQUtVRmhnR3lDd0lGQllJYkFLWUJzZ3NEWlFXQ0d3Tm1BYllGbFpXUnV3QUN0WldTT3dBRkJZWlZsWkxiQUNMQ0JGSUxBRUpXRmtJTEFGUTFCWXNBVWpRckFHSTBJYklTRlpzQUZnTGJBRExDTWhJeUVnWkxFRllrSWdzQVlqUXJJS0FBSXFJU0N3QmtNZ2lpQ0tzQUFyc1RBRkpZcFJXR0JRRzJGU1dWZ2pXU0Vnc0VCVFdMQUFLeHNoc0VCWkk3QUFVRmhsV1Myd0JDeXdDQ05Dc0FjalFyQUFJMEt3QUVPd0IwTlJXTEFJUXl1eUFBRUFRMkJDc0JabEhGa3RzQVVzc0FCRElFVWdzQUpGWTdBQlJXSmdSQzJ3Qml5d0FFTWdSU0N3QUNzanNRUUVKV0FnUllvallTQmtJTEFnVUZnaHNBQWJzREJRV0xBZ0c3QkFXVmtqc0FCUVdHVlpzQU1sSTJGRVJDMndCeXl4QlFWRnNBRmhSQzJ3Q0N5d0FXQWdJTEFLUTBxd0FGQllJTEFLSTBKWnNBdERTckFBVWxnZ3NBc2pRbGt0c0Frc0lMZ0VBR0lndUFRQVk0b2pZYkFNUTJBZ2ltQWdzQXdqUWlNdHNBb3NTMVJZc1FjQlJGa2tzQTFsSTNndHNBc3NTMUZZUzFOWXNRY0JSRmtiSVZra3NCTmxJM2d0c0F3c3NRQU5RMVZZc1EwTlE3QUJZVUt3Q1N0WnNBQkRzQUlsUXJJQUFRQkRZRUt4Q2dJbFFyRUxBaVZDc0FFV0l5Q3dBeVZRV0xBQVE3QUVKVUtLaWlDS0kyR3dDQ29oSTdBQllTQ0tJMkd3Q0NvaEc3QUFRN0FDSlVLd0FpVmhzQWdxSVZtd0NrTkhzQXREUjJDd2dHSWdzQUpGWTdBQlJXSmdzUUFBRXlORXNBRkRzQUErc2dFQkFVTmdRaTJ3RFN5eEFBVkZWRmdBc0EwalFpQmdzQUZodFE0T0FRQU1BRUpDaW1DeERBUXJzR3NyR3lKWkxiQU9MTEVBRFNzdHNBOHNzUUVOS3kyd0VDeXhBZzByTGJBUkxMRUREU3N0c0JJc3NRUU5LeTJ3RXl5eEJRMHJMYkFVTExFR0RTc3RzQlVzc1FjTkt5MndGaXl4Q0EwckxiQVhMTEVKRFNzdHNCZ3NzQWNyc1FBRlJWUllBTEFOSTBJZ1lMQUJZYlVPRGdFQURBQkNRb3Bnc1F3RUs3QnJLeHNpV1Myd0dTeXhBQmdyTGJBYUxMRUJHQ3N0c0Jzc3NRSVlLeTJ3SEN5eEF4Z3JMYkFkTExFRUdDc3RzQjRzc1FVWUt5MndIeXl4QmhnckxiQWdMTEVIR0NzdHNDRXNzUWdZS3kyd0lpeXhDUmdyTGJBakxDQmdzQTVnSUVNanNBRmdRN0FDSmJBQ0pWRllJeUE4c0FGZ0k3QVNaUndiSVNGWkxiQWtMTEFqSzdBaktpMndKU3dnSUVjZ0lMQUNSV093QVVWaVlDTmhPQ01naWxWWUlFY2dJTEFDUldPd0FVVmlZQ05oT0JzaFdTMndKaXl4QUFWRlZGZ0FzQUVXc0NVcXNBRVZNQnNpV1Myd0p5eXdCeXV4QUFWRlZGZ0FzQUVXc0NVcXNBRVZNQnNpV1Myd0tDd2dOYkFCWUMyd0tTd0FzQU5GWTdBQlJXS3dBQ3V3QWtWanNBRkZZckFBSzdBQUZyUUFBQUFBQUVRK0l6aXhLQUVWS2kyd0tpd2dQQ0JISUxBQ1JXT3dBVVZpWUxBQVEyRTRMYkFyTEM0WFBDMndMQ3dnUENCSElMQUNSV093QVVWaVlMQUFRMkd3QVVOak9DMndMU3l4QWdBV0pTQXVJRWV3QUNOQ3NBSWxTWXFLUnlOSEkyRWdXR0liSVZtd0FTTkNzaXdCQVJVVUtpMndMaXl3QUJhd0JDV3dCQ1ZISTBjalliQUdSU3RsaWk0aklDQThpamd0c0M4c3NBQVdzQVFsc0FRbElDNUhJMGNqWVNDd0JDTkNzQVpGS3lDd1lGQllJTEJBVVZpekFpQURJQnV6QWlZREdsbENRaU1nc0FsRElJb2pSeU5ISTJFalJtQ3dCRU93Z0dKZ0lMQUFLeUNLaW1FZ3NBSkRZR1Fqc0FORFlXUlFXTEFDUTJFYnNBTkRZRm13QXlXd2dHSmhJeUFnc0FRbUkwWmhPQnNqc0FsRFJyQUNKYkFKUTBjalJ5TmhZQ0N3QkVPd2dHSmdJeUN3QUNzanNBUkRZTEFBSzdBRkpXR3dCU1d3Z0dLd0JDWmhJTEFFSldCa0k3QURKV0JrVUZnaEd5TWhXU01nSUxBRUppTkdZVGhaTGJBd0xMQUFGaUFnSUxBRkppQXVSeU5ISTJFalBEZ3RzREVzc0FBV0lMQUpJMElnSUNCR0kwZXdBQ3NqWVRndHNESXNzQUFXc0FNbHNBSWxSeU5ISTJHd0FGUllMaUE4SXlFYnNBSWxzQUlsUnlOSEkyRWdzQVVsc0FRbFJ5TkhJMkd3QmlXd0JTVkpzQUlsWWJBQlJXTWpJRmhpR3lGWlk3QUJSV0pnSXk0aklDQThpamdqSVZrdHNETXNzQUFXSUxBSlF5QXVSeU5ISTJFZ1lMQWdZR2F3Z0dJaklDQThpamd0c0RRc0l5QXVSckFDSlVaU1dDQThXUzZ4SkFFVUt5MndOU3dqSUM1R3NBSWxSbEJZSUR4WkxyRWtBUlFyTGJBMkxDTWdMa2F3QWlWR1VsZ2dQRmtqSUM1R3NBSWxSbEJZSUR4WkxyRWtBUlFyTGJBM0xMQXVLeU1nTGthd0FpVkdVbGdnUEZrdXNTUUJGQ3N0c0Rnc3NDOHJpaUFnUExBRUkwS0tPQ01nTGthd0FpVkdVbGdnUEZrdXNTUUJGQ3V3QkVNdXNDUXJMYkE1TExBQUZyQUVKYkFFSmlBdVJ5TkhJMkd3QmtVckl5QThJQzRqT0xFa0FSUXJMYkE2TExFSkJDVkNzQUFXc0FRbHNBUWxJQzVISTBjallTQ3dCQ05Dc0FaRkt5Q3dZRkJZSUxCQVVWaXpBaUFESUJ1ekFpWURHbGxDUWlNZ1I3QUVRN0NBWW1BZ3NBQXJJSXFLWVNDd0FrTmdaQ093QTBOaFpGQllzQUpEWVJ1d0EwTmdXYkFESmJDQVltR3dBaVZHWVRnaklEd2pPQnNoSUNCR0kwZXdBQ3NqWVRnaFdiRWtBUlFyTGJBN0xMQXVLeTZ4SkFFVUt5MndQQ3l3THlzaEl5QWdQTEFFSTBJak9MRWtBUlFyc0FSRExyQWtLeTJ3UFN5d0FCVWdSN0FBSTBLeUFBRUJGUlFUTHJBcUtpMndQaXl3QUJVZ1I3QUFJMEt5QUFFQkZSUVRMckFxS2kyd1B5eXhBQUVVRTdBcktpMndRQ3l3TFNvdHNFRXNzQUFXUlNNZ0xpQkdpaU5oT0xFa0FSUXJMYkJDTExBSkkwS3dRU3N0c0VNc3NnQUFPaXN0c0VRc3NnQUJPaXN0c0VVc3NnRUFPaXN0c0VZc3NnRUJPaXN0c0Vjc3NnQUFPeXN0c0Vnc3NnQUJPeXN0c0Vrc3NnRUFPeXN0c0Vvc3NnRUJPeXN0c0Vzc3NnQUFOeXN0c0V3c3NnQUJOeXN0c0Uwc3NnRUFOeXN0c0U0c3NnRUJOeXN0c0U4c3NnQUFPU3N0c0ZBc3NnQUJPU3N0c0ZFc3NnRUFPU3N0c0ZJc3NnRUJPU3N0c0ZNc3NnQUFQQ3N0c0ZRc3NnQUJQQ3N0c0ZVc3NnRUFQQ3N0c0ZZc3NnRUJQQ3N0c0Zjc3NnQUFPQ3N0c0Znc3NnQUJPQ3N0c0Zrc3NnRUFPQ3N0c0Zvc3NnRUJPQ3N0c0Zzc3NEQXJMckVrQVJRckxiQmNMTEF3SzdBMEt5MndYU3l3TUN1d05Tc3RzRjRzc0FBV3NEQXJzRFlyTGJCZkxMQXhLeTZ4SkFFVUt5MndZQ3l3TVN1d05Dc3RzR0Vzc0RFcnNEVXJMYkJpTExBeEs3QTJLeTJ3WXl5d01pc3VzU1FCRkNzdHNHUXNzRElyc0RRckxiQmxMTEF5SzdBMUt5MndaaXl3TWl1d05pc3RzR2Nzc0RNckxyRWtBUlFyTGJCb0xMQXpLN0EwS3kyd2FTeXdNeXV3TlNzdHNHb3NzRE1yc0RZckxiQnJMQ3V3Q0dXd0F5UlFlTEFCRlRBdEFBQkx1QURJVWxpeEFRR09XYmtJQUFnQVl5Q3dBU05FSUxBREkzQ3dEa1VnSUV1NEFBNVJTN0FHVTFwWXNEUWJzQ2haWUdZZ2lsVllzQUlsWWJBQlJXTWpZckFDSTBTekNna0ZCQ3V6Q2dzRkJDdXpEZzhGQkN0WnNnUW9DVVZTUkxNS0RRWUVLN0VHQVVTeEpBR0lVVml3UUloWXNRWURSTEVtQVloUldMZ0VBSWhZc1FZQlJGbFpXVm00QWYrRnNBU05zUVVBUkFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQU1nQXlBeGovNFFNZy95QURHUC9oQXlEL0lBQUFBQ2dBS0FBb0FXUUNDZ08wQllvR0RnYWlCNGdJZ0FqSUNYWUo4QXA2Q3JRTEdBdHNEUGdOM0E1MEQxd1J5aEl5RXpBVG5oUWFGSElVdkJWQUZlSVhIQmQ4R0VvWWtCaldHVElaakJub0dtQWFvaHNDRzFRYmxCdnFIQ2djZWh5aUhPQWREQjFxSGFRZDZoNElIa1llbmg3WUh6Z2dtaURrSVF3aEpDRThJVndodmlJY0pHWWtpQ1QwSllZbUFDWjRKM1ludGlqRUtRNHBlaW02S3NRc0VDdytMTHd0U0MzZUxmWXVEaTRtTGo0dWlDN1FMeFl2WEM5NEw1b3dCakNHQUFBQUFnQWlBQUFCTWdLcUFBTUFCd0FwUUNZQUFBQURBZ0FEVndBQ0FRRUNTd0FDQWdGUEJBRUJBZ0ZEQUFBSEJnVUVBQU1BQXhFRkR5c3pFU0VSSnpNUkl5SUJFTzdNekFLcS9WWWlBbVlBQUFBRkFDei80UU84QXhnQUZnQXdBRG9BVWdCZUFYZExzQk5RV0VCS0FnRUFEUTROQUE1bUFBTU9BUTREWGdBQkNBZ0JYQkFCQ1FnS0JnbGVFUUVNQmdRR0RGNEFDd1FMYVE4QkNBQUdEQWdHV0FBS0J3VUNCQXNLQkZrU0FRNE9EVkVBRFEwS0RrSWJTN0FYVUZoQVN3SUJBQTBPRFFBT1pnQUREZ0VPQTE0QUFRZ0lBVndRQVFrSUNnZ0pDbVlSQVF3R0JBWU1YZ0FMQkF0cER3RUlBQVlNQ0FaWUFBb0hCUUlFQ3dvRVdSSUJEZzROVVFBTkRRb09RaHRMc0JoUVdFQk1BZ0VBRFE0TkFBNW1BQU1PQVE0RFhnQUJDQWdCWEJBQkNRZ0tDQWtLWmhFQkRBWUVCZ3dFWmdBTEJBdHBEd0VJQUFZTUNBWllBQW9IQlFJRUN3b0VXUklCRGc0TlVRQU5EUW9PUWh0QVRnSUJBQTBPRFFBT1pnQUREZ0VPQXdGbUFBRUlEZ0VJWkJBQkNRZ0tDQWtLWmhFQkRBWUVCZ3dFWmdBTEJBdHBEd0VJQUFZTUNBWllBQW9IQlFJRUN3b0VXUklCRGc0TlVRQU5EUW9PUWxsWldVQW9VMU03T3pJeEZ4ZFRYbE5lVzFnN1VqdFNTME0zTlRFNk1qb1hNQmN3VVJFeEdCRW9GVUFURmlzQkJpc0JJZzRDSFFFaE5UUW1OVFF1QWlzQkZTRUZGUlFXRkE0Q0l3WW1Ld0VuSVFjckFTSW5JaTRDUFFFWElnWVVGak15TmpRbUZ3WUhEZ01lQVRzR01qWW5MZ0VuSmljQk5UUStBanNCTWhZZEFRRVpHeHBURWlVY0VnT1FBUW9ZSng2Ri9rb0NvZ0VWSHlNT0RoOE9JQzMrU1N3ZEloUVpHU0FUQ0hjTUVoSU1EUklTakFnR0JRc0VBZ1FQRGlWRFVWQkFKQmNXQ1FVSkJRVUcvcVFGRHhvVnZCOHBBaDhCREJrbkdrd3BFQndFRFNBYkVtR0lOQmM2T2lVWENRRUJnSUFCRXhzZ0RxYy9FUm9SRVJvUmZCb1dFeVFPRUEwSUdCb05JeEVURkFGMzVBc1lFd3dkSnVNQUFBSUFZUCtBQTZBQ3dBQUhBRmNBU0VCRlNrbERPVGcySnlZY0dSY1dEQVFEVHc4Q0FRUUNRQUFFQXdFREJBRm1BQUFGQVFJREFBSlpBQU1FQVFOTkFBTURBVkVBQVFNQlJRa0lURXN3TFFoWENWY1RFQVlRS3dBZ0JoQVdJRFlRSlRJZUFoVVVCeVluTGdFMU5EYzFOajhEUGdFM05qYzJOell2QVRVbU56WW1KeVluSXdZSERnRVhGZ2NVQnhVT0FSY2VBUmNXRnhZVk1CVVVCaFFQQVJRakRnRUhKalUwUGdRQ3JQNm85UFFCV1BUK1lFMk9aanhZVVdrRUFnRUJBUUlDQWdFQ0FnMEZFd2dIQ0FFRUNnUU9FeWhOSTB3b0ZBNEVDZ1FCQkFFRUJRNElCQTRJQVFFQ0FTbHdIRmtiTVVkVFl3TEE5UDZvOVBRQldORThabzVOaW1vaEh3RUdEZ01EQmdNREJnWUdBd1VESFNJV0xDTVVBZ0VWT1JNNkdqTUZCVE1hT2hNNUZRRUJBUW9UR2hrZ0NTRWVFQ0FJQXdVQ0FRRUJEQ2dNYW9zMFkxTkhNUnNBQUFBQUF3REEvK0FEUUFKZ0FBQUFVd0RBQVRaTHNBdFFXRUFjazVLRkFBUUJDNTZhbFlSNkJRQUJxYWR6UWtBL0VRb0lDZ0FEUUJ0THNBeFFXRUFjazVLRkFBUUJDNTZhbFlSNkJRQUJxYWR6UWtBL0VRb0lCd0FEUUJ0QUhKT1NoUUFFQVF1ZW1wV0VlZ1VBQWFtbmMwSkFQeEVLQ0FvQUEwQlpXVXV3QzFCWVFEVURBUUVMQUFzQkFHWUVBUUFLQ3dBS1pBQUtCd3NLQjJRSkNBSUhCZ3NIQm1RQUFnQUxBUUlMV1F3QkJnWUZVQUFGQlFzRlFodExzQXhRV0VBdkF3RUJDd0FMQVFCbUJBRUFCd3NBQjJRS0NRZ0RCd1lMQndaa0FBSUFDd0VDQzFrTUFRWUdCVkFBQlFVTEJVSWJRRFVEQVFFTEFBc0JBR1lFQVFBS0N3QUtaQUFLQndzS0IyUUpDQUlIQmdzSEJtUUFBZ0FMQVFJTFdRd0JCZ1lGVUFBRkJRc0ZRbGxaUUI1VlZJdUtaV1JpWVY5ZVhWeFV3RlhBVGswNU9DOHVKeVVmSGhNU0RRNHJDUUV1QVNjbUp5NEJQd0UyTno0RE5UY3lQZ0UzUGdFMU5DNERJemMrQVRjMkppTWlEZ0VWSGdFZkFTSUhGQllYSGdNWE14WVhGaDhEQmdjT0FRY09CQWNHRlNFMExnTUhJVFkzTmpjK0FUY3lOakkrQVRJK0FUSTNOamMySnowQ05DWTlBeWN1QVNjbUx3RXVBaWNtSnlZK0FUYzFKaWNtTnpZeUZ4WUhEZ0lITVFZVkhnRUhCZ2NVRGdFVkJ3NENCdzRCRHdFZEFRWWRBUlFHRlJRWEhnSVhGaGNlQVJjV0Z4NENGd0dWQVVJUVJBTWVDZ01CQVFFTUJnSUVCQU1CQWdVSkF3RUxBd01EQWdFREFnWUJBVkJHTDBZZ0FRWUNBd3NCQ3dFQ0JRUUZBUUlIQndNRkJ3TUJBUUlGR0FzR0V4RVRFZ2hwQW9BU0Z5RVU0djd0QlF3V0lBa1pFUUVGQXdRREJBTUVBd0lwRUF3QkFRVURDZ01GQndFQkNBa0JCQVFDQWdjQkNRRUJIU0J5SUIwQkFRVURBUUVCQ3dNRUJRa0pBUUlFQlFFRENnTUZBUUVNQnh3UEJ3Z1lFUmtKSVJVRUJRVUNBWTMrdXdZTEFRWU1CQ2tTRXhNUkJSQVJEd1VGQVF3TEJ5WUxCUWNFQWdFSkJpd2FObEVvUENNYUtna0lFd3NrQ1FZS0JRSUJMaEVIQ1E4RlJBc0RCUW9EQVFNREJBUURKVU1TSVJVVUNFUUhDQkFMQkFVQ0FRRUJBUUVCQ1JRT01nZ0pCd1FGQWdNQ0NBY0ZFZ2dPS2djRUJRUURFeElNQ0FrRERCc3dLUjBoSVIwcEZTWU5Bd1VHQWhJTkVoTURCQVVFQndrV0ZRUUlFQWNIQ0FJREJBa0VEQVl5RGdrT0JRRUNCQUlGQkFzUUF3UUZBd0FBQkFEQS8rQURRQUpnQUFzQURBQmZBTXdCY2t1d0MxQllRQnlmbnBFTUJBY0VxcWFoa0lZRkJnZTFzMzlPVEVzZEZnZ1FCZ05BRzB1d0RGQllRQnlmbnBFTUJBY0VxcWFoa0lZRkJnZTFzMzlPVEVzZEZnZ05CZ05BRzBBY241NlJEQVFIQktxbW9aQ0dCUVlIdGJOL1RreExIUllJRUFZRFFGbFpTN0FMVUZoQVJ3a0JCd1FHQkFjR1pnb0JCaEFFQmhCa0FCQU5CQkFOWkE4T0FnME1CQTBNWkFBSUFCRUJDQkZaQWdFQUJRRURCQUFEVndBQkFBUUhBUVJYRWdFTURBdFFBQXNMQ3d0Q0cwdXdERkJZUUVFSkFRY0VCZ1FIQm1ZS0FRWU5CQVlOWkJBUERnTU5EQVFOREdRQUNBQVJBUWdSV1FJQkFBVUJBd1FBQTFjQUFRQUVCd0VFVnhJQkRBd0xVQUFMQ3dzTFFodEFSd2tCQndRR0JBY0daZ29CQmhBRUJoQmtBQkFOQkJBTlpBOE9BZzBNQkEwTVpBQUlBQkVCQ0JGWkFnRUFCUUVEQkFBRFZ3QUJBQVFIQVFSWEVnRU1EQXRRQUFzTEN3dENXVmxBSkdGZ2w1WnhjRzV0YTJwcGFHRE1ZY3hhV1VWRU96b3pNU3NxSHg0UkVSRVJFUkFURkNzQkl6VWpGU01WTXhVek5UTUZBUzRCSnlZbkxnRS9BVFkzUGdNMU56SStBVGMrQVRVMExnTWpOejRCTnpZbUl5SU9BUlVlQVI4QklnY1VGaGNlQXhjekZoY1dId01HQnc0QkJ3NEVCd1lWSVRRdUF3Y2hOamMyTno0Qk56STJNajRCTWo0Qk1qYzJOelluUFFJMEpqMERKeTRCSnlZdkFTNENKeVluSmo0Qk56VW1KeVkzTmpJWEZnY09BZ2N4QmhVZUFRY0dCeFFPQVJVSERnSUhEZ0VQQVIwQkJoMEJGQVlWRkJjZUFoY1dGeDRCRnhZWEhnSVhBMEF5SERJeUhETCtWUUZDRUVRREhnb0RBUUVCREFZQ0JBUURBUUlGQ1FNQkN3TURBd0lCQXdJR0FRRlFSaTlHSUFFR0FnTUxBUXNCQWdVRUJRRUNCd2NEQlFjREFRRUNCUmdMQmhNUkV4SUlhUUtBRWhjaEZPTCs3UVVNRmlBSkdSRUJCUU1FQXdRREJBTUNLUkFNQVFFRkF3b0RCUWNCQVFnSkFRUUVBZ0lIQVFrQkFSMGdjaUFkQVFFRkF3RUJBUXNEQkFVSkNRRUNCQVVCQXdvREJRRUJEQWNjRHdjSUdCRVpDU0VWQkFVRkFnSHVNakljTWpKRi9yc0dDd0VHREFRcEVoTVRFUVVRRVE4RkJRRU1Dd2NtQ3dVSEJBSUJDUVlzR2paUktEd2pHaW9KQ0JNTEpBa0dDZ1VDQVM0UkJ3a1BCVVFMQXdVS0F3RURBd1FFQXlWREVpRVZGQWhFQndnUUN3UUZBZ0VCQVFFQkFRa1VEaklJQ1FjRUJRSURBZ2dIQlJJSURpb0hCQVVFQXhNU0RBZ0pBd3diTUNrZElTRWRLUlVtRFFNRkJnSVNEUklUQXdRRkJBY0pGaFVFQ0JBSEJ3Z0NBd1FKQkF3R01nNEpEZ1VCQWdRQ0JRUUxFQU1FQlFNQUFBSUFZUCtBQTZBQ3dBQUhBRVFBTWtBdlFSc2FDd1FDQXdGQUFBQUFBd0lBQTFrRUFRSUJBUUpOQkFFQ0FnRlJBQUVDQVVVSkNDY2tDRVFKUkJNUUJSQXJBQ0FHRUJZZ05oQUJJaVluUGdFM1BnRTFOQ2NtSnlZbkpqOEJOVFltSnlZK0FqYzJOek1XRng0QkJ3WVhNQmNlQVFjT0FRY09CUlVVRmhjV0Z3NENBcXorcVBUMEFWajAvbUJXbVRVY2NDZ0VBZ2dPQkJNSkJ3Z0JBZ1FFQWdJR0Rnb29UQ05OS0JRT0JBb0VBUVFCQkFVUEJ3SUdCd2dGQkFJRGFWRWpXbTBDd1BUK3FQVDBBVmo5MTBoQURDZ01BUVlPSUJBZUlSVXRJeFFCQWdjeEZnY1pHaDhPTXdVRk14bzZFemtWQXdvVEdoa2dDUXNZRkJBT0VRZ09CZ0VmSVNzOUlRQUFBQUVBd1AvZ0EwQUNZQUJTQURkQU5FRS9QaEFKQlFVQUFVQURBUUVDQUFJQkFHWUVBUUFGQWdBRlpBQUNBZ1ZQQUFVRkN3VkNUVXc0Tnk0dEppUWVIUklSQmc0ckpTNEJKeVluTGdFL0FUWTNQZ00xTnpJK0FUYytBVFUwTGdNak56NEJOelltSXlJT0FSVWVBUjhCSWdjVUZoY2VBeGN6RmhjV0h3TUdCdzRCQnc0RUJ3WVZJVFF1QXdMWEVFUURIZ29EQVFFQkRBWUNCQVFEQVFJRkNRTUJDd01EQXdJQkF3SUdBUUZRUmk5R0lBRUdBZ01MQVFzQkFnVUVCUUVDQndjREJRY0RBUUVDQlJnTEJoTVJFeElJYVFLQUVoY2hGRWdHQ3dFR0RBUXBFaE1URVFVUUVROEZCUUVNQ3djbUN3VUhCQUlCQ1FZc0dqWlJLRHdqR2lvSkNCTUxKQWtHQ2dVQ0FTNFJCd2tQQlVRTEF3VUtBd0VEQXdRRUF5VkRFaUVWRkFnQUFBQUFBZ0RBLytBRFFBSmdBQXNBWGdEQVFBcE5TMG9jRlFVTEJnRkFTN0FMVUZoQUxnQUlBUUFJWEFrQkJ3UUdBQWRlQ2dFR0N3UUdDMlFDQVFBRkFRTUVBQU5ZQUFFQUJBY0JCRmNBQ3dzTEMwSWJTN0FNVUZoQUxRQUlBUWhvQ1FFSEJBWUFCMTRLQVFZTEJBWUxaQUlCQUFVQkF3UUFBMWdBQVFBRUJ3RUVWd0FMQ3dzTFFodEFMZ0FJQVFob0NRRUhCQVlFQndabUNnRUdDd1FHQzJRQ0FRQUZBUU1FQUFOWUFBRUFCQWNCQkZjQUN3c0xDMEpaV1VBVVdWaEVRem81TWpBcUtSNGRFUkVSRVJFUURCUXJBU00xSXhVakZUTVZNelV6QXk0Qkp5WW5MZ0UvQVRZM1BnTTFOekkrQVRjK0FUVTBMZ01qTno0Qk56WW1JeUlPQVJVZUFSOEJJZ2NVRmhjZUF4Y3pGaGNXSHdNR0J3NEJCdzRFQndZVklUUXVBd05BTWh3eU1od3lhUkJFQXg0S0F3RUJBUXdHQWdRRUF3RUNCUWtEQVFzREF3TUNBUU1DQmdFQlVFWXZSaUFCQmdJREN3RUxBUUlGQkFVQkFnY0hBd1VIQXdFQkFnVVlDd1lURVJNU0NHa0NnQklYSVJRQjdqSXlIREl5L25ZR0N3RUdEQVFwRWhNVEVRVVFFUThGQlFFTUN3Y21Dd1VIQkFJQkNRWXNHalpSS0R3akdpb0pDQk1MSkFrR0NnVUNBUzRSQndrUEJVUUxBd1VLQXdFREF3UUVBeVZERWlFVkZBZ0FBQUlBb1AvQUEzY0NnQUJKQUl3QVhFQlpZZ0VHQjNsM0VoQUVBQVlDUUFBREFnY0NBd2RtQUFZSEFBY0dBR1lBQWdBSEJnSUhXUUFBQUFrQkFBbFpBQUVBQ0FVQkNGa0FCUVFFQlUwQUJRVUVVUUFFQlFSRmhZT0FmbVZqWVdCUFRVSkFMU3dxS0NRaUNoQXJKUzRCSXlJT0FRY0dJeUltTHdFbUx3RW1Md0V1QXk4QkxnSTFORDRDTnpZbkppOEJKaU1pQndZakJ3NENCdzRCRkI0QkZ4NEJGeDRCRng0Qk16SStBamMySnlZSEJnY0dJeUluTGdFbkxnWTJOelkzTURjeU5UWXpNaFlmQVI0QkJ3WVhIZ0lmQVI0QkZ4WVhGaDhCRmg4QkZqTXlOamMyTXpJZUFoY1dCd1lEUUJ0bkpRWU1DZ1F3Q2dRS0N3SWxGZ1FCQWdRR0JnMFFEQUVLQ0FnQ0Jna0hJUjRRTVFJZEpod2tBUUVCRGhjUEJBUUVDQlFRSTBnekxEbzJOV0VrRmhZaklCSTJLd1lkSkNZS0ZVQm9ORGtyR1NnbElTTVRCQU1FQ1NFQ0FSMFREQlVMQWk0akZTQUNBUW9MREFFWEZRc0JBZ01CQXhZbkFod1JEUjhmQmdvUEt5a2pDaHNHQklFYk93SUVBaDhIQ2dJZkdBTUNBd01HQncwVERRRUxDZ3dFQXdnTERna3NQeUU3QXlRWEFRRUpGaGdNRFJZaUpETWRRR0UxTGpBbkppb0NDaG9XUVRjR2FTc0VBVW9tTHkwWkx6STFQek1tR0E0Y0ZRRUJFZ3dOQWpsS0hDd1lDUk1PRGdFWkZ3c0JBd0lCQkJjaUFoZ1BGQVFSR0JvS0d4WVJBQUFEQUlBQUlBT0FBaUFBQXdBR0FCTUFQRUE1RWhFT0RRd0pDQVFJQXdJQlFBUUJBUUFDQXdFQ1Z3VUJBd0FBQTBzRkFRTURBRThBQUFNQVF3Y0hBQUFIRXdjVEJnVUFBd0FERVFZUEt4TVJJUkVCSlNFQkVSY0hGemNYTnhjM0p6Y1JnQU1BL29EK3VnS00vVnJtaUFTZVlHQ2VCSWptQWlEK0FBSUEvdWo0L2tBQnJLK2JCSXRKU1lzRW02LytWQUFDQUlELzRBT0FBbUFBSndCVkFHcEFaelF5SVFNRUFCUUJBUUpLQVFnQlRoZ0NEQWsvQVFjTUJVQUFCQUFDQUFRQ1pnVURBZ0lCQUFJQlpBc0tBZ2dCQ1FFSUNXWUFDUXdCQ1F4a0FBWUFBQVFHQUZrQUFRQU1Cd0VNV1FBSEJ3c0hRbEZQVFV0SlNFWkZSVVErUENrb0VSSVJJU1lRRFJRckFESWVBUlVVQndZaklpY2lJeWNqSmljaUJ5TUhEZ0VQQVQ0RE5UUW5KaWNtSnlZMU5EWWtJZzRCRlJRWEhnSVhKalV4RmhVVUJ3WVdGek15UHdJMlB3RXpJelkzTWhjVk16SVZGak15UGdFMEpnR2h2cU5lWTJXV1ZEY0JBZ0VDRHc0UkVBRUVCUXNDVHdzTEJRRU5BZ0VEQVRWZUFXclFzV2M5QVFNQ0FRSUhKQUlKQ0FZREJBTmxBUW9KQVFFTEN3c0tBZ0U5V21pd1ptY0NRRXFBUzI5TVR4TUJCQUVHQWdFRUFTTWhKQk1GQWhZVEF3RUVBVU5QUzM5cVU0NVVXa3dCQkFRQkF3RUxEQUp5Qmd3Q0FRRXNBUU1FQXdFREFRRVVUWXFuamdBQUFBQURBR0QvZ0FPZ0FzQUFDUUFSQUJnQW5yVVVBUVlGQVVCTHNBcFFXRUE2QUFFQUNBQUJDR1lBQmdVRkJsMEFBZ0FBQVFJQVZ3d0JDQUFMQkFnTFZ3QUVBQU1KQkFOWENnRUpCUVVKU3dvQkNRa0ZUd2NCQlFrRlF4dEFPUUFCQUFnQUFRaG1BQVlGQm1rQUFnQUFBUUlBVnd3QkNBQUxCQWdMVndBRUFBTUpCQU5YQ2dFSkJRVUpTd29CQ1FrRlR3Y0JCUWtGUTFsQUZnb0tHQmNXRlJNU0NoRUtFUkVSRWhFUkVSRVFEUllyRXlFVk16VWhFVE0xSXpjUklSY3pOVE1SQXlNVkp5RVJJWUFDQUNEOXdPREE0QUZGZ0J0Z0lHQnUvczRDQUFLZ3dPRCtRQ0NnL2tDQWdBSEEvbUJ0YlFHQUFBQUFBUUNnLzhBRGR3S0FBRWtBTmtBekVoQUNBQU1CUUFBQ0F3Sm9BQU1BQTJnQUFRQUVBQUVFWmdBQUFRUUFUUUFBQUFSUkFBUUFCRVZDUUMwc0tpZ2tJZ1VRS3lVdUFTTWlEZ0VIQmlNaUppOEJKaThCSmk4QkxnTXZBUzRDTlRRK0FqYzJKeVl2QVNZaklnY0dJd2NPQWdjT0FSUWVBUmNlQVJjZUFSY2VBVE15UGdJM05pY21BMEFiWnlVR0RBb0VNQW9FQ2dzQ0pSWUVBUUlFQmdZTkVBd0JDZ2dJQWdZSkJ5RWVFREVDSFNZY0pBRUJBUTRYRHdRRUJBZ1VFQ05JTXl3Nk5qVmhKQllXSXlBU05pc0dnUnM3QWdRQ0h3Y0tBaDhZQXdJREF3WUhEUk1OQVFzS0RBUURDQXNPQ1N3L0lUc0RKQmNCQVFrV0dBd05GaUlrTXgxQVlUVXVNQ2NtS2dJS0doWkJOd1lBQUFBQUFnQ0FBQ0FEZ0FJZ0FBd0FEd0FyUUNnUEN3b0hCZ1VDQVFnQUFRRkFBQUVBQUFGTEFBRUJBRThDQVFBQkFFTUFBQTROQUF3QURBTU9LeVVSQlJjSEp3Y25CeWMzSlJFQklRRURnUDc2aUFTZVlHQ2VCSWorK2dMdi9TRUJjQ0FCNU1lYkJJdEpTWXNFbThmK0hBSUEvdWdBQUFBQkFJRC80QU9BQW1BQUxRQkJRRDRpREFvREFnQW1BUVlERndFQkJnTkFCUVFDQWdBREFBSURaZ0FEQmdBREJtUUFBQUFHQVFBR1dRQUJBUXNCUWlrbkpTTWhJQjRkSFJ3V0ZCQUhEeXNBSWc0QkZSUVhIZ0lYSmpVeEZoVVVCd1lXRnpNeVB3STJQd0V6SXpZM01oY1ZNeklWRmpNeVBnRTBKZ0pvMExGblBRRURBZ0VDQnlRQ0NRZ0dBd1FEWlFFS0NRRUJDd3NMQ2dJQlBWcG9zR1puQW1CVGpsUmFUQUVFQkFFREFRc01BbklHREFJQkFTd0JBd1FEQVFNQkFSUk5pcWVPQUFBQUFBSUFZUCtBQTZBQ3dBQUZBQTBBYlV1d0NsQllRQ2tBQVFZREJnRURaZ0FFQXdNRVhRQUFBQUlHQUFKWEJ3RUdBUU1HU3djQkJnWURUd1VCQXdZRFF4dEFLQUFCQmdNR0FRTm1BQVFEQkdrQUFBQUNCZ0FDVndjQkJnRURCa3NIQVFZR0EwOEZBUU1HQTBOWlFBNEdCZ1lOQmcwUkVSSVJFUkFJRkNzQklSRXpOU0VGRVNFWE16VXpFUUtnL2NEZ0FXRCt3QUZGZ0J0Z0FzRCtRT0FnL2tDQWdBSEFBQUFBQUFjQXMvL2hBeWdDWndBM0FFWUFXQUJtQUhFQWp3QzdBUUJBSVprQkN3a1pGQk1EQUFkMkFRUUFCUUVNQTB3cEFnSU1CVUIrQVFVbEFRMENQMHV3QzFCWVFGUUFDUWdMQ0FrTFpnQUtDd0VMQ2dGbUFBQUhCQUVBWGc4QkJBMEhCQTFrQUEwREJ3MERaQUFNQXdJRERBSm1EZ0VDQW1jQUNBQUxDZ2dMV1FBQkJRTUJUUVlCQlFBSEFBVUhXUUFCQVFOUkFBTUJBMFViUUZVQUNRZ0xDQWtMWmdBS0N3RUxDZ0ZtQUFBSEJBY0FCR1lQQVFRTkJ3UU5aQUFOQXdjTkEyUUFEQU1DQXd3Q1pnNEJBZ0puQUFnQUN3b0lDMWtBQVFVREFVMEdBUVVBQndBRkIxa0FBUUVEVVFBREFRTkZXVUFtYzNJNU9MVzBzckdrbzZDZm1KZVVrb1NEZ0g5OWZIS1BjNDlCUHpoR09VWWVIUkVRRUE0ckFTNENOajhCTmljdUFRNEJEd0VPQVNJbUp6VW1QZ0kzTkM0Q0JnY09CQlVPQVIwQkhnUVhGajRDTnpZbkpnTUdMZ0kxTkRZM05oWVZGQWNHSnc0REZ4VVVIZ0VYRmpZM1BnRXVBUWNHSmpVME5qYzJIZ0lWRkFZM0JpWW5KalkzTmhZWEZqY3lQZ0UzTlRZdUJBOEJJZ1lWRkRNMkhnTU9BUlVVRnhZbkxnRUdJZzRCQnlNUEFRWVZGQjRCTXpZM05qSWVBeGNXQnc0Q0ZSUVdNalkzTXo0QkxnTUNoUWNJQVFFQkFSZ2RDaUFnSFFrS0JRZ0dBd0VCQVFFQ0FRTU1GU1VaR1RNbklCQVhGd1FpTHo4NklTZFhUMElQSkVBUTZ5VkZNaDV0VFU5c1FqVllIU2dRQ0FFQkRnMHZVaG9NQWhJelBnOFVFdzRJRGdrR0ZTOEZDd0lEQWdVR0N3SUc5QVFIQlFFQ0J4QVZGaElGQmdjS0VSQVdEZ1lEQVFFT0Fnc0pFeEVPRHdZRkFRRUJFZ2NMQndFVkF3NFZHUmtaQ1JNTEFRRUREaFVNQVFFSkFSQVpJU0lCTGdFR0JnWUNBaklsREFrSENnVUZBZ0lCQXdRRENBY01CQTRYR2c0QkN3c3JMeXdiQVNoUEZCUXNSU3NmRGdNRUVpZENLbU0wRGY3bUFoVW5PU0ZCWHdVRVRFRktOeXY3QlNBbkpnME5CUTRnQ0I0WUtSUThOeUswQWhNUEVCc0NBUVVKRFFnUUdVRUZBUVlGRUFRRkFRWU50QVVJQmdJZUxSa1JCQUVCQVF3SkZnWUhDUllQRkFjQ0V3SUIvZ01EQVFNQ0FRRUJCaGdKRGdrQkJnRUNDeEFlRXpjeUFnWVFCdzBQQ2hBcVNqY3VIeFFBQUFZQVFQK2tBOEFDbXdBT0FCa0FQQUJIQUU4QWN3Q0pRSVpTQVFRTFpsNENEUUJmT2pFREJnMERRRGswQWdZOUNnRUhDQXNJQnd0bUVRRUxCQWdMQkdRUUFnOERBQUVOQVFBTlpnNEJEUVlCRFFaa0FBWUdad0FNQ1FFSUJ3d0lXUVVCQkFFQkJFMEZBUVFFQVZFREFRRUVBVVZSVUJBUEFRQnRhbWxvVmxSUWMxRnpUVXhKU0VOQlBqMHdMaUlmSGgwV0ZROFpFQmtHQkFBT0FRNFNEaXNsSWlZME5qTXlIZ01WRkE0Qkl5SXVBVFUwTmpJV0ZBWUZOQzRCSnlZckFTSU9CaFVVRng0Qk16STNGekFYSGdFK0FUVW5QZ0VBSWlZME5qTXlIZ0VWRkRZeUZoUUdJaVkwRnpJWExnRWpJZzRERlJRV0Z3Y1VCaFFlQVQ4QkhnRXpNRHNDTGdFMU5ENEJBdzRRRnhjUUJnd0tCd1FMRWRNS0Vnc1hJQmNYQVdwRWRVY0dCUWtkTmpJc0poNFZDd2dYbFdGQk9qNEJBZ1VFQXhJc012MVVJQmNYRUFzU0NyMGhGaFloRnRvR0N4RzBkelZoVHpzaFBUWVlBUVVKQ2xnY095QURCQU1FQkZDSTRSY2hGd1FJQ1F3SENoSUxDeElLRVJjWElSYzRQMnRDQkFFS0Vob2hKeW93R1IwZFQyZ1pLZ0VCQVFFSEJrSWlYZ0ZFRnlBWENoSUxFRGNYSUJjWElFRUJab2djTTBWVkxVQnZKMWtCQkFvREF3UTlDZ29QSFE5SGVFWUFBQWdBUVA5aEE4RUM0Z0FIQUJBQUZBQVlBQjBBSmdBdkFEY0Faa0JqTUNBVEF3SUVOaUVDQVFJM0hRd0JCQUFCTFJ3Q0F3QXNKeG9YQkFVREJVQUFBUUlBQWdFQVpnQUFBd0lBQTJRSUFRUUdBUUlCQkFKWEJ3RURCUVVEU3djQkF3TUZVUUFGQXdWRkh4NFZGUkVSS2lnZUpoOG1GUmdWR0JFVUVSUVNGUWtRS3lVQkJoVVVGeUVtQVNFV0Z3RStBVFUwSnlZbkJ3RVdGejhCRVRZM0p3TWlCeEVCTGdNREZqTXlOamNSQmdjQkRnUUhGd0ZkL3ZjVUdBRVBCZ0pJL3ZFRkJRRUpDZ28xUklLLy9tNUVnTC9iZjBDLzAwcEdBUk1RSHlFaWxFQkRKa2dpQlFYK3B4Z3VLU1FmREw2Y0FRbEFSRXBHQmdFYkJRYis5eDlDSWt1SWdFREEvbHAvUDc3RS9vTkVnYjhCeVJqKzhRRVRCUWNGQS95VEZBd01BUTRGQkFJdkRTQW1LaThadmdBQUFBQUZBQVgvUWdQN0F3QUFJUUEwQUVBQVVBQmdBTUZBRGdnQkFnVVdBUUVDQWtBUUFRRTlTN0FMVUZoQUtRb0JBQUFEQkFBRFdRMElEQVlFQkFrSEFnVUNCQVZaQ3dFQ0FRRUNUUXNCQWdJQlVRQUJBZ0ZGRzB1d0ZsQllRQ0lOQ0F3R0JBUUpCd0lGQWdRRldRc0JBZ0FCQWdGVkFBTURBRkVLQVFBQUNnTkNHMEFwQ2dFQUFBTUVBQU5aRFFnTUJnUUVDUWNDQlFJRUJWa0xBUUlCQVFKTkN3RUNBZ0ZSQUFFQ0FVVlpXVUFtVWxGQ1FTTWlBUUJiV1ZGZ1VtQktTRUZRUWxBOE96WTFMU3NpTkNNMEdoZ0FJUUVoRGc0ckFTSU9BaFVVRmhjV0RnUVBBVDRFTng0Qk16SStBalUwTGdFRElpNEJOVFErQXpNeUhnSVZGQTRCQWlJR0ZSUWVBVEkrQVRVMEpTSU9BaFVVRmpNeVBnSTFOQ1loSWdZVkZCNERNekkrQVRRdUFRSUZaNzJLVW1sYkFRZ09FeElRQlFVSUhWQkdVQmdhTnh4bnVvWlBodWVLZE1GMEsxQm9na1JWbTI5Q2NMNVBQU29VSVNjaUZQN09EeG9URENvZUR4c1VEQ3NCc1I4cEJ3MFNGZ3dVSVJRVUlRTUFSSFNnV0dXeVBCY3RKQ0VZRVFVRUFRWVRGaVFVQlFWRWRLQllkY2h6L1BSVG0yRTZibGxESlRwaGhVbGhtbFFCcHljZkZTTVZGU01WSHljS0Voc1BJQzBNRlJ3UUh5Y25IdzBYRXc0SUZTTXFJQkVBQUFFQVYvOXVBNmtDMFFGNUFhSkJqUUZpQUlZQWRBQnlBSEVBYmdCdEFHd0Fhd0JxQUdrQVlBQWhBQlFBRXdBU0FCRUFFQUFNQUFzQUNnQUZBQVFBQXdBQ0FBRUFBQUFiQUFzQUFBRkhBVVlCUlFBREFBSUFDd0ZnQVYwQlhBRmJBVm9CV1FGWUFVb0FxQUNuQUowQWtBQ1BBSTRBalFDTUFCQUFEUUFDQUpzQW1nQ1pBSlFBa3dDU0FBWUFBUUFOQVM0QkxRRXFBTFVBdEFDekFBWUFDUUFCQVNjQkpnRWxBU1FCSXdFaUFTRUJJQUVmQVI0QkhRRWNBUnNCR2dFWkFSZ0JGZ0VWQVJRQkV3RVNBUkVCRUFFUEFRNEJEUUVNQU8wQXpBRExBTWtBeUFESEFNWUF4QUREQU1JQXdRREFBTDhBdmdDOUFMd0FLd0FGQUFrQkNnRG9BT2NBMHdBRUFBTUFCUUFIQUVBQlJBQ0hBQUlBQ3dDY0FKRUFBZ0FOQVFzQUFRQUZBQU1BUDBCRkRBRUxBQUlBQ3dKbUFBSU5BQUlOWkFBTkFRQU5BV1FBQVFrQUFRbGtDZ0VKQlFBSkJXUUVBUU1GQndVREIyWUlBUWNIWndBQUN3VUFTd0FBQUFWUEJnRUZBQVZEUVI0QlZ3RlVBVU1CUWdGQkFUOEJMQUVyQVNrQktBRDlBUG9BK0FEM0FPd0E2d0RxQU9rQTJ3RGFBTmtBMkFDbUFLVUFtQUNWQURrQU53QU9BQTRyRXk4Q05UOEZOVDhITlQ4aU93RWZNUlVIRlE4REhRRWZFUlVQRFNzQ0x3d2pEd3dmRFJVWEJ4MEJCeFVQRHlNSEl5OE5JeWNqSnc4Skl3OEJLd0l2RkRVM05UYzlBVDhQTXo4Qk16VXZFU3NCTlNNUEFSVVBEU3NDTHdnMVB4ZlJBZ0VCQWdFREFnUUZBUUVDQWdJQ0FnTUJBZ01FQWdNREJBUUVCUVlEQXdjSEJ3a0pDUXNJQ0FrS0NRc0xDd3NNQ3cwTkdRMG5EUTBPREEwTkRRME1EQXdMQ3drRkJBa0lCd2NHQndVRkJnUUhCQU1EQWdJQ0JBTUNBUUlCQWdVREFnUURBZ0lDQVFFQkFRTUNBZ01NQ1FRR0JRWUdCd1FEQXdNQ0F3SURBUUVCQWdRQkFnSUNBd0lEQWdRREFnTURCQUlDQXdJRUJBUURCQVVGQVFFQ0FnSUVCUWNHQmdjSEF3VUtBUUVGRmdrSkNRZ0VBZ01EQVFJQkFRSUNCQU1EQXdZR0J3Z0pCQVFLQ2dzTERBc2xEZ3dORFE0T0RRME9EUWNHQkFRTERBY0lCUWNLQ3djR0VBZ0lEQWdJQ0FvbkZoWUxDd29LQ2drSkNBZ0dCd0lEQWdJQ0FRSUJBUUVCQWdFREFnRUVBd1FDQlFNRkJRVUdCZ2NIQWdFQkJBb0dDQWNJQ1FRRUJBTUZBd1FEQXdJQkFRRURBUUVCQlFJRUF3VUVCUVVHQmdVSEJ3RUNBUUlDQWdJQkFRSUJBUUVDQVFNREF3TUVCUVVGQndjSEJnY0lCQVVHQndzSUFVc0ZCd1FPQmdZSEJ3Z0hCUVVIQndrREJBUUNFd29MRFE0SENRY0lDZ2dKQ1FVRUNnb0pDZ2tLQ2djR0J3VUZCUVVFQXdRREFnSUVBUUlCQXdNREJBUUZCZ1VIQndZRUF3Y0lCd2dJQ0FrSUNRZ1JDUWdKQ0FjSkR3ME1DaEFDQXdnRkJnWUhDQWdJQkFZRUJBWUZDZ1VHQWdFRkVRMElDZ29MREE0SkNBa0lDUWdQRUE0VEJ3d0xDZ1FFQkFRQ0JBTUNBUUlEQVFFREFnUUdCZ1VHQ2dzQkFnTURDdzhSQ1FvS0NnVUZDZ0VCQXdzRkJRY0dBd1FFQkFRRUJBUURBd01EQWdNRkJRTUNCUU1FQXdRQkFRTUNBZ0lDQVFFQ0FRSUVBZ1FGQkFJQ0FnRUJBUVVFQlFZREF3WUNBZ01CQVFJQ0FnRUNBd0lFQXdRRUJRSURBZ01EQXdZREF3TUVCQU1IQkFVRUJRSURCUUlDQXdFQ0FnSUNBUUVCQVFFQ0FnZ0ZCd2NLQ2dZR0J3Y0hDQWtKQ0FzQkFRSUNBZ01JQlFRRkJnUUZCUU1FQWdJREFRWUVCQVVGQ3djV0VBZ0pDUWdLQ2drS0NRc0pDd2tLQ0FnSUJBVUdCUW9HQUFBQUJBQmVBQ0FEb2dJZ0FCTUFLQUFzQURFQU4wQTBNVEF2TGl3cktpa0lBZ01CUUFRQkFBQURBZ0FEV1FBQ0FRRUNUUUFDQWdGUkFBRUNBVVVDQUNZakdSWUxDQUFUQWhNRkRpc0JJU0lPQVJVUkZCWXpJVEkyTlJFMExnTVRGQVlqSVNJdUJUVVJORFl6QlRJV0ZSY1ZGeEVIRVNjMU53SmYva1lTSVJRckhBRzZIQ2NIREJBVUZSTU8va1lFQ0FjSEJRUUNGZzhCdWc0VFhzUWlnSUFDSUJFZUV2NklIQ3NxSFFGNEN4UVFEQWIrUnc4V0FnUUZCd2NJQkFGNERSSUJFUTFwcTJzQmdEeis5ME9FUXdBQUFBWUFnQUFBQTRBQ1FBQWZBRWtBVVFCWkFGMEFaUURmUzdBb1VGaEFVZ0FQQ3c0SEQxNEFFQTRTRGhBU1pnQUJDUUVJQXdFSVdRQURBQWNEU3dRQ0V3TUFDZ0VIQ3dBSFdRQUxBQTRRQ3c1WkFCSUFFUTBTRVZrQURRQU1CZzBNV1FBR0JRVUdUUUFHQmdWU0FBVUdCVVliUUZNQUR3c09DdzhPWmdBUURoSU9FQkptQUFFSkFRZ0RBUWhaQUFNQUJ3TkxCQUlUQXdBS0FRY0xBQWRaQUFzQURoQUxEbGtBRWdBUkRSSVJXUUFOQUF3R0RReFpBQVlGQlFaTkFBWUdCVklBQlFZRlJsbEFMQUVBWldSaFlGMWNXMXBYVmxOU1QwNUxTa1pFT2pnM05pOHRKaU1hRnhJUUR3NE5EQWdGQUI4Qkh4UU9Ld0VqSmljdUFTc0JJZ1lIQmdjak5TTVZJeUlHRlJFVUZqTWhNalkxRVRRbUV4UU9BU01oSWlZMUVUUStBanNCTno0Qk56WS9BVE13T3dFZUFoY2VBeDhCTXpJZUFSVWtJZ1lVRmpJMk5BWWlKalEyTWhZVU56TVZJd1FVRmpJMk5DWWlBME43QXdZd0pCQ3hFQ011Q0FRYlJCc2JLQ2thQW9BYUl5TURCdzRJL1lBTkZnWUpEUWVJQ1FRUEF5WU5ETEVCQVFFREJRTUZEeGdTQ2dtS0NRMEgvdWVPWkdTT1pIRjBVVkYwVVRVaUl2OEFKVFlsSlRZQjRBTUhOU0VmTkFnRklDQWtHZjZnR3lnb0d3RmdHaVArWXdvUENoWU5BV0FHQ3djRkJnVVRCQ29NQ0FFQ0F3TUZFUndVQ3dZSERnZ0NaSTVrWkk3U1VYUlJVWFRnSW1rMkpTVTJKUUFEQVFEL1lBTUFBdUFBQ3dBWEFERUFUVUJLREFzQ0JRTUNBd1VDWmdBQUFBTUZBQU5aQUFJQUFRUUNBVmtBQkFvQkJnY0VCbGtKQVFjSUNBZExDUUVIQndoUEFBZ0hDRU1ZR0JneEdERXVMU3dyRVJFVEV5Y1ZGeFVRRFJjckFDSUdGUkVVRmpJMk5SRTBBeFFHSWlZMUVUUTJNaFlWRnhVVURnRWpJaVk5QVNNVkZCWVhGU01WSVRVak5UNEJQUUVDUVlKZFhZSmRJRXBvU2twb1NtQTdaanRhZ2lhTFpaSUJRb3BqaHdMZ1lrWCt5MFZpWWtVQk5VWCtoamhQVHpnQk5UaFBUemlabnp4a080QmJuNTlsa3dkK0pDUitCNU5sbndBQUJBRDAvMkFEREFMZ0FCSUFKQUFzQURrQVJrQkRGaFFUREFvR0JnTUVBVUFZQ0FJRFBRQUFBQUVDQUFGWkFBSUFCUVFDQlZrR0FRUURBd1JOQmdFRUJBTlJBQU1FQTBVdUxUUXpMVGt1T1NvcEppVWhJQkFIRHlzQUlnWVZGQjhDR3dFM05qOEJQZ0kxTkFjVkJnOEJDd0VtSnk0Qk5UUTJNaFlWRkNZaUJoUVdNalkwQnlJbU5UUStBVEllQVJRT0FRSnYzcDBUQVFQMTlRRUJBUUVHQ1FReUFRRUMxdGdCQVFnS2lzU0t0MnBMUzJwTGdDYzNHU3d5TEJrWkxBTGdtMjR6TWdNRy9mY0NDUUlEQVFNUUlTSVJiOGdCQVFNRS9qa0J5d01CRmk0WFlZaUlZUzYzUzJwTFMycVROeWNaTEJrWkxESXNHUUFDQVFEL1lBTUFBdUFBQ3dBbEFFRkFQZ29KQWdNQkFBRURBR1lBQVFBQUFnRUFXUUFDQ0FFRUJRSUVXUWNCQlFZR0JVc0hBUVVGQms4QUJnVUdRd3dNRENVTUpSRVJFUkVURXlrVkVBc1hLeVF5TmpVUk5DWWlCaFVSRkNVVkZBNEJJeUltUFFFakZSUVdGeFVqRlNFMUl6VStBVDBCQWIrQ1hWMkNYUUY4TzJZN1dvSW1pMldTQVVLS1k0ZGRZa1VCTlVWaVlrWCt5MFhobnp4a080QmJuNTlsa3dkK0pDUitCNU5sbndBQUFBSUE5UDlnQXd3QzRBQVNBQjhBSzBBb0RBb0lCZ1FCUFFNQkFRSUJhUUFBQWdJQVRRQUFBQUpSQUFJQUFrVVVFeG9aRXg4VUh4QUVEeXNBSWdZVkZCOENHd0UzTmo4QlBnSTFOQVVpSmpVMFBnRXlIZ0VVRGdFQ2I5NmRFd0VEOWZVQkFRRUJCZ2tFL3ZRbk54a3NNaXdaR1N3QzRKdHVNeklEQnYzM0Fna0NBd0VERUNFaUVXL0ROeWNaTEJrWkxESXNHUUFGQVFEL1lBTXdBdUFBQXdBS0FCVUFIUUExQUY5QVhBY0JBZ0VjR3hRR0JBQUNJUUVFQUNBQkF3UUVRQVVCQWdFQUFRSUFaZ0FCQ2dFQUJBRUFXUUFFQmdFREJ3UURXUWtCQndnSUIwc0pBUWNIQ0U4QUNBY0lRd1VFTlRRek1qRXdMeTRyS2lRaUh4NFlGeEFPQkFvRkNnc09Ld0UzQVFjbE1qY0RGUlFXTnhFMEppTWlEZ0VIQVRZM05TTVZGQWNYTmdjMk55Y0dJeUl1QXowQkl4VVVGaGNWSXhVaE5TTUJFUndDQXh6KzdDVWc0MTNmWEVJWkx5WVBBUklKWWlJaUZERHFNaTBUTFRNalF6WXBGeWFMWlpJQlFvb0MwQkQ4a0JEOUVRR0I2MFZpcHdFMVJXSVFIUlArTFJvYW41OUFOU0pEcXdNWElCWVdLVFZESTZDZlpaTUhmaVFrQUFBREFFRC9vQVBBQXFBQUJ3QVhBRG9Ba0VBTE1RRUJCem93QWdNRkFrQkxzQmhRV0VBd0FBWUJBQUVHQUdZQUJBQUZCUVJlQ0FFQ0FBY0JBZ2RaQUFFQUFBUUJBRmtBQlFNREJVMEFCUVVEVWdBREJRTkdHMEF4QUFZQkFBRUdBR1lBQkFBRkFBUUZaZ2dCQWdBSEFRSUhXUUFCQUFBRUFRQlpBQVVEQXdWTkFBVUZBMUlBQXdVRFJsbEFGQW9JTmpNdUxDVWpHeGtTRHdnWENoY1RFQWtRS3dBeU5qUW1JZ1lVQVNFaUJoVVJGQll6SVRJMk5SRTBKZ01tSXlJR0R3RU9CQ01pSnk0Q0x3RW1JeUlIQXhFK0FUTWhNaDRCRlJNQ3VGQTRPRkE0QVFqODhCY2hJUmNERUJjaEllVUxEd2NMQnlZQ0JBVUVCUU1OQ1FFREF3RnNEUlFVRHYwQ0Rnb0N6QVlNQndFQllEaFFPRGhRQVFnaEdQMXlHQ0VoR0FLT0dDSCtkUXdHQlNBQ0FnTUJBUWdCQWdRQmRBOFAvczhDQ1FvTkJnc0gvZmNBQUFBSUFGYi9QUU8zQXNrQUtRQTJBRlVBWXdCeEFJQUFrUUNkQUxKQXIzSUJCd3hOQVFZSGNBRUxDVGczSUJNRUFnVk1SVVFaQkFBQ0tnRUJBQVpBVlZST0F3UU1QZ0FHQndrSEJnbG1BQVVPQWc0RkFtWUFBZ0FPQWdCa0FBQUJEZ0FCWkFBQkFXY0FEQUFMQkF3TFdRQUpBQW9EQ1FwWkFBUUFBdzBFQTFrU0FRMEFFQWdORUZrUkFRY0FDQThIQ0ZrQUR3NE9EMDBBRHc4T1VRQU9EdzVGZ29GWFZwaVdrNUtLaUlHUmdwRi9mbmQyYld4bFpGMWNWbU5YWTFGUVNVaEFQakl3SXlJZEhCY1ZFdzRyQVNjUEFTY21Ed0VPQVJVUkZCNEROajhCRnhZek1qOEJGaGNXTWpjMk54Y1dNalkzTmpVUk5BRXVBVFUwUGdFek1oWVZGQVkzSno0Qk5UUXVBU01pQmhVVUZ3Y25MZ0VqQmc4QkVUY1hGakkyUHdFWEJTSUdGUkVVRmpJMk5SRTBMZ0VYSWc0Q0hRRVVGakkyUFFFbU54VVVIZ0V5UGdFOUFUUXVBU01HQXlJT0FoVVVGak15UGdJMU5DNEJCaUltTkRZek1oNENGUlFEcWJjTDI4a0hCOU1HQmdJRUJBWUdBODNLQXdRRUF4NHZRd1VVQldRc1RnTUdCUUlIL3Z3MlhDZERLRDFXWGFrekJnVXhWREpNYXlZV3lRSURBZ1FEdXNIS0FnVUZBdHlpL2FvSUN3c1BDd1VJekFRSEJRTUxEd3NEeEFVSUNna0ZCUWtGRHpBT0dSSUxLQndPR1JNTEV4OEdHaE1URFFjTENRVUNueW9CWkZRREExSUNDUWI5dkFNR0JRTUNBUUZRVlFFQ0RWNW1DQWlYYmhJQkFnSUdDQUpGRHZ6VlZiVXFKMFFuVmp3cXRab01FUndNTVZVeGJFc3BVZ3BVQVFFQkFVZ0NIRXhWQVFFQlpDVTFDd2Yra0FnTEN3Z0JjQVVJQlVjREJRY0RqUWNMQ3dlTkQxSzZCUWtFQkFrRnVnVUlCUVArblFzU0dRNGNLQW9UR1E0U0lCSmtFeG9UQlFrTUJnMEFBQUFBQXdDZy8rQURnQUtnQUFrQUVnQWpBRUZBUGg0U0VRME1CUUlHRGdrSUF3UUJBa0FBQlFZRmFBQUdBZ1pvQUFRQkFBRUVBR1lBQWdBQkJBSUJWd0FBQUFOUEFBTURDd05DRWljWUVSRVJFQWNWS3lrQkVTRTNJUkVoRVFjRkp3RW5BUlV6QVNjM0p5NENJeUlQQVRNZkFUYytBVFUwQXVEOTRBR2dJUDRnQW1BZy92c1RBVllXL3BoQUFXa1hSaGtDQndjRUN3Z1pBUllxR0FRRUFnQWcvY0FCd0NDWUV3RlhGLzZZUVFGb0YwQVpBd01DQ0JnWEtoa0VDZ1VNQUFBQUJnRGcvNkFESUFLZ0FDQUFMd0JDQUVZQVNnQk9BTGhBQzBBNU9EQWVFQVlJQ3dGQVM3QVVVRmhBUVFBS0F3d0RDbDRPQVF3TkF3d05aQThCRFFzRERRdGtBQXNJQ0F0Y0FBRUFCZ0FCQmxrSEFnSUFDUVVDQXdvQUExY0FDQVFFQ0UwQUNBZ0VVZ0FFQ0FSR0cwQkRBQW9EREFNS0RHWU9BUXdOQXd3TlpBOEJEUXNERFF0a0FBc0lBd3NJWkFBQkFBWUFBUVpaQndJQ0FBa0ZBZ01LQUFOWEFBZ0VCQWhOQUFnSUJGSUFCQWdFUmxsQUdVNU5URXRLU1VoSFJrVkVRMEpCTkJZMUdqTVJGVE1RRUJjckFTTTFOQ1lyQVNJT0FoMEJJeFV6RXhRV015RXlQZ2MxRXpNbE5ENENPd0V5SGdNZEFTTUJGUlFHSXlFaUppOEJMZ1E5QVFNaEJ6TVJJeE1qQXpNREl4TXpBeUNnSWhtTEN4WVFDYUFxTHlNWUFSb0ZDd2tKQ0FZRkJBSXVLZjU5QlFnTEJZc0ZDUWNHQThZQkRoRU0vdVlEQmdNRUF3UURBZ0V3QWJQb0hCeU9IUlllemgwVkhnSTlLQmtpQ1JBV0RDZ2QvYnNaSWdJREJnWUlDQW9LQmdKRlJRWUxDQVVEQmdjSkJTajlud0VORVFFQ0FnSUVCUVVHQXdFQ1JFRCtIZ0hpL2g0QjR2NGVBQUFBQUFJQXdQK2dBMEFDNEFBTEFCUUFQMEE4RkJFUUR3NE5EQWNEUGdBR0FBRUFCZ0ZtQndVQ0F3SUJBQVlEQUZjQUFRUUVBVXNBQVFFRVVBQUVBUVJFQUFBVEVnQUxBQXNSRVJFUkVRZ1RLd0VWTXhFaEVUTTFJUkVoRVNVbk54Y0hKeEVqRVFKQTRQM0E0UDhBQW9EK1FoZVZsUmR1SUFJQUlQM2dBaUFnL2FBQ1lEUVhsWlVYYmY0YUFlWUFBZ0RBLzZBRFFBS2dBQXNBRkFBK1FEc1VFUkFQRGcwTUJ3RUFBVUFBQmdNR2FBY0ZBZ01DQVFBQkF3QlhBQUVFQkFGTEFBRUJCRkFBQkFFRVJBQUFFeElBQ3dBTEVSRVJFUkVJRXlzQkZUTVJJUkV6TlNFUklSRUZCeGMzSndjUkl4RUNRT0Q5d09EL0FBS0Eva0lYbFpVWGJpQUNBQ0Q5NEFJZ0lQMmdBbURaRjVXVkYyMEI1djRhQUFBREFGSC9jUU92QXNBQURnQWRBQ2tBSjBBa0tTZ25KaVVrSXlJaElCOGVEQUU5QUFBQkFRQk5BQUFBQVZFQUFRQUJSUmtZRWdJUEt3RXVBU0lHQnc0QkhnSStBaVlERGdFdUFqWTNQZ0V5RmhjV0VBTUhKd2NYQnhjM0Z6Y25Od01tUEp1ZW16eFFPVG1nMXRhZ09UbG9TY1hGa2pRMFNUZVBrSTgzYjlXb3FCaW9xQmlvcUJpcHFRSkdQRDQrUEZEVzFxQTVPYURXMXY0Y1NUUTBrc1hGU1RZNU9UWncvc1FCWHFpbkY2aW9GNmVvR0tpb0FBQUFBZ0IrQUFBRGdBSmdBQk1BSWdCQlFENFdDZ0lEQkJzWEVoQUpCUUFCQWtBVkN3SUNQZ0FBQVFCcEFBSUZBUVFEQWdSWkFBTUJBUU5OQUFNREFWRUFBUU1CUlJRVUZDSVVJaHNVRmhBR0VpczdBVGMyTno0Q054VUpBUlVHQndZWE1CVXdBVFVOQVRVaUJnY21QZ1dBRlNaS1Rod3JRQ1lCZ1A2QXQyaGpBZ0dnQVNqKzJJeXZSUUVCREJnNFQ0TStkeU1NRHd3Qm9BRUFBUUNoQ0doa3BRWUJZSUhCd29KY2R3Y1pSa0JPT0NjQUFBQUFBZ0NBQUFBRGdBSmdBQjhBS2dBNlFEY2xEQUlEQkNRZ0RRQUVBZ0VDUUNZTEFnQStBQUlCQW1rQUFBQUVBd0FFV1FBREFRRURUUUFEQXdGUkFBRURBVVVVSEJZVUdRVVRLeVV3TlRRdUFpY3VBU2MxQ1FFMUhnRVhIZ0VmQVRNd1BRY25MZ0VqRlMwQkZTQVhGZ09BQXhBc0l6V0xYdjZBQVlBM1RDb3JTaU1tRlNCRnI0eisyQUVvQVFSWkkwQUdHaXBSVVNNMU53U2gvd0QvQUtBQ0V4TVVUamcrQndjSUJ3Y0lCZ2dUZDF5Q3dzR0J0RWtBQUFNQVlQK0FBNkFDd0FBVkFCMEFMZ0JkUUZvTkFRSUlDd0VFQVFKQURBRUJBVDhKQVFRQkFBRUVBR1lBQlFBSUFnVUlXUUFDQUFFRUFnRlpBQUFBQXdjQUExa0tBUWNHQmdkTkNnRUhCd1pSQUFZSEJrVWZIZ0FBSnlZZUxoOHVHeG9YRmdBVkFCVVRGQlVpQ3hJckFSUUdJeUl1QVRRK0FUTVZOeWNWSWdZVUZqSTJOUUlnQmhBV0lEWVFBU0l1QVRVMFBnSXlIZ0lVRGdJQzJINWFPMk02T21NN3dNQnFscGJVbGxUK3FQVDBBVmowL21CbnNHWThabzZham1ZOFBHYU9BU0JhZmpwamRtTTZiMitBV0piVWxwVnJBYUQwL3FqMDlBRlkvZGRtc0dkTmptWThQR2FPbW81bVBBQUFBQUlBUVArQUE4QUN3QUFKQUJNQUxrQXJFQUlDQUQ0VERRd0xDZ2tJQndZRkNnSTlBUUVBQWdJQVN3RUJBQUFDVHdNQkFnQUNReElhRWhBRUVpc0JJUXNCSVFVREpRVURGeWNITnljaE54Y2hCd1BBL3FscGFmNnBBUmh0QVJVQkZXNHUxZFZWMkFFR1VsSUJCdGdCZ2dFKy9zTEUvc0xGeFFFKzZKaVk5WlgzOTVVQUFBTUFZUCtBQTZBQ3dBQUhBQm9BSmdCSFFFUUFBQUFEQkFBRFdRa0JCUWdCQmdjRkJsY0FCQUFIQWdRSFZ3b0JBZ0VCQWswS0FRSUNBVkVBQVFJQlJRa0lKaVVrSXlJaElCOGVIUndiRUE0SUdna2FFeEFMRUNzQUlBWVFGaUEyRUFFaUxnRTBQZ0V6TWg0RUZSUU9BZ01qRlNNVk14VXpOVE0xSXdLcy9xajA5QUZZOVA1Z1o3Qm1ackJuTkdOVFJ6RWJQR2FPUFNIdjd5SHc4QUxBOVA2bzlQUUJXUDNYWnJET3NHWWJNVWRUWXpSTmptWThBbjN3SWUvdklRQUFBQU1BWVArQUE2QUN3QUFIQUJnQUhBQThRRGtBQkFNRkF3UUZaZ0FGQWdNRkFtUUFBQUFEQkFBRFdRWUJBZ0VCQWswR0FRSUNBVklBQVFJQlJna0lIQnNhR1JFUUNCZ0pHQk1RQnhBckFDQUdFQllnTmhBQklpNEJOVFErQWpJZUFoUU9BZ0VoRlNFQ3JQNm85UFFCV1BUK1lHZXdaanhtanBxT1pqdzhabzcrc3dJQS9nQUN3UFQrcVBUMEFWajkxMmF3WjAyT1pqdzhabzZham1ZOEFZMGlBQUFBQWdCZy80QURvQUxBQUFjQUdBQXBRQ1lBQUFBREFnQURXUVFCQWdFQkFrMEVBUUlDQVZFQUFRSUJSUWtJRVJBSUdBa1lFeEFGRUNzQUlBWVFGaUEyRUFFaUxnRTFORDRDTWg0Q0ZBNENBcXorcVBUMEFWajAvbUJuc0dZOFpvNmFqbVk4UEdhT0FzRDAvcWowOUFGWS9kZG1zR2ROam1ZOFBHYU9tbzVtUEFBQ0FENy9YZ1BDQXVJQUVRQXJBQ3BBSndRQkFBQURBZ0FEV1FBQ0FRRUNUUUFDQWdGUkFBRUNBVVVDQUNZakdSWU1DUUFSQWhFRkRpc0JJU0lPQWhVUkZCWXpJVEkyTlJFMEpoTVVEZ0lqSVNJdUJUVVJORFl6SVRJZUF4VURXLzFLRlNZY0VEd3JBcllyUER3UENBNFRDdjA4QmdzS0NRY0ZBeDRWQXNRSUVBd0tCUUxpRUJ3bUZmMUtLenc4S3dLMkt6ejgzQW9URGdnREJRY0pDZ3NHQXNRVkhnVUtEQkFJQUFBQUFnQlIvM0VEcndMQUFBNEFHZ0FaUUJZYUdSZ1hGaFVVRXhJUkVBOE1BRDBBQUFCZkVnRVBLd0V1QVNJR0J3NEJIZ0krQWlZREJ5Y0hKemNuTnhjM0Z3Y0RKanlibnBzOFVEazVvTmJXb0RrNXRoaW9xQmlvcUJpb3FCaXBBa1k4UGo0OFVOYldvRGs1b05iVy9vSVlxS2NYcUtnWHA2Z1lxQUFBQUFJQVlQK0FBNkFDd0FBSEFCd0FRMEJBRGdFREFCQUJCZ1FDUUE4QkJBRS9BQVlFQlFRR0JXWUFBQUFEQkFBRFdRQUVBQVVDQkFWWkFBSUJBUUpOQUFJQ0FWRUFBUUlCUlJJVkZCTVRFeEFIRlNzQUlBWVFGaUEyRUFBaUpqUTJNelVYQnpVaURnRVZGQll5TmpVekZBS3MvcWowOUFGWTlQN0sxSmFXYXNEQU8yTTZmN04rS0FMQTlQNm85UFFCV1A1VWx0U1dXSUJ2Ynpwak8xbC9mbHBxQUFBQUFRQkEvNEFEd0FMQUFBa0FHRUFWQWdFQVBna0lCd1lGQlFBOUFRRUFBRjhTRUFJUUt3RWhDd0VoQlFNbEJRTUR3UDZwYVduK3FRRVliUUVWQVJWdUFZSUJQdjdDeFA3Q3hjVUJQZ0FBQUFBQ0FHRC9nQU9nQXNBQUJ3QVRBRFpBTXdjQkJRWUNCZ1VDWmdRQkFnTUdBZ05rQUFBQUJnVUFCbGNBQXdFQkEwc0FBd01CVWdBQkF3RkdFUkVSRVJFVEV4QUlGaXNBSUFZUUZpQTJFQWNqRlNNMUl6VXpOVE1WTXdLcy9xajA5QUZZOUtEd0l1N3VJdkFDd1BUK3FQVDBBVmkrN3U0aThQQUFBQUFBQWdCZy80QURvQUxBQUFjQUN3QWhRQjRBQUFBREFnQURWd0FDQVFFQ1N3QUNBZ0ZSQUFFQ0FVVVJFeE1RQkJJckFDQUdFQllnTmhBSElUVWhBcXorcVBUMEFWajBvUDRBQWdBQ3dQVCtxUFQwQVZpK0lnQUFBQU1BTlA5VEE4MEM3QUFIQUJnQUtnQTVRRFlBQVFRQUJBRUFaZ0FBQlFRQUJXUUFBd1lCQkFFREJGa0FCUUlDQlUwQUJRVUNVZ0FDQlFKR0doa2pJUmtxR2lvWEZSTVNCeElyQUJRV01qWTBKaUlGRkE0Q0lpNENORDRDTWg0Q0FTSU9BaFVVSGdFek1qNENOVFF1QVFFdWZLNTdlNjRDSTBoOHFyeXJlMGxKZTZ1OHFueEkvalJSbEd0QWE3aHRVWlJyUDJ1NEFYZXZlM3V2ZTlOZHEzdEpTWHVydTZ0N1NVbDdxd0V5UUdxVVVteTRhejlybEZGdHVHc0FBZ0JnLzRBRG9BTEFBQWNBRWdBblFDUVNFUkFQRGdVQ0FBRkFBQUFDQUdnQUFnRUJBazBBQWdJQlVnQUJBZ0ZHSkJNUUF4RXJBQ0FHRUJZZ05oQUJCaU1pSmk4Qk54YzNGd0tzL3FqMDlBRlk5UDRnQ1FrRUNnUndKRjc2SXdMQTlQNm85UFFCV1A3QkNRVUVjQ05lK3lRQUFBQUNBRDcvWGdQQ0F1SUFGQUFjQUNwQUp4d2JHaGtZRmdZQkFBRkFBZ0VBQVFFQVRRSUJBQUFCVVFBQkFBRkZBZ0FLQndBVUFoUUREaXNCSVNJR0ZSRVVGak1oTWpZMUVUUXVCUUVuQnljM0Z3RVhBMXY5U2lzOFBDc0N0aXM4QlFzT0VoUVgva1FGQmNvZ3J3RmpJQUxpUEN2OVNpczhQQ3NDdGd3WEZSRU9Dd1g5YndVRnlpQ3ZBV01nQUFFQlFBQmdBc0FCNEFBTEFBYXpDQUFCSmlzQkJ5Y0hGd2NYTnhjM0p6Y0NxS2lvR0tpb0dLaW9HS21wQWVDcHFCZW9xQmVucUJlcHFBQUFBQUVCQUFBZ0F3QUNlQUFVQURsQU5nZ0JCQUlCUUFjQkFnRS9CZ0VCUGdBRUFnTUNCQU5tQUFFQUFnUUJBbGtBQXdBQUEwMEFBd01BVVFBQUF3QkZFaFVVRXhBRkV5c2tJaVkwTmpNMUZ3YzFJZzRCRlJRV01qWTFNeFFDYXRTV2xtckF3RHRqT24remZpZ2dsdFNXV0lCdmJ6cGpPMWwvZmxwcUFBQUJBSUQvb0FRQUFxQUFKZ0E0UURVYkdnb0pDQWNHQlFRSkFnRUJRQVFCQUFBQkFnQUJXUUFDQXdNQ1RRQUNBZ05SQUFNQ0EwVUJBQjhkRnhVUURnQW1BU1lGRGlzQk1oNEJGVGNYQnljM0Z6UXVBaU1pRGdFVUhnRXpNajRCTnhjT0FTTWlMZ0UxTkQ0Q0FnQm9zV2R1RW8yRkVtWTVZSVJKWWFWZ1lLVmhUWXRqR0JrbnlIMW9zV2M5WjQ0Q29HYXhhR2tTaUlnU2FVbUVZRGhncGNLbFlENXVSd2Qwa21leGFFNk9aejBBQUFJQVFQK0FBOEFDd0FBSkFBOEFLa0FuQ2djQ0FENFBEZzBFQXdJQkFBZ0NQUUVCQUFJQ0FFc0JBUUFBQWs4QUFnQUNReElTRlFNUkt5VURKUVVESlNFTEFTRWxGeUVIRnljQldHMEJGUUVWYlFFWS9xbHBhZjZwQWNCU0FRYllWZFcrL3NMRnhRRSt4QUUrL3NMVTlwWDFsd0FBQWdBQS95QUVBQU1nQUJRQUt3QThRRGtBQlFFQ0FRVUNaZ0FDQkFFQ0JHUUFCQWNCQXdRRFZRQUJBUUJSQmdFQUFBb0JRaFlWQVFBbUpTRWZGU3NXS3c4T0NnZ0FGQUVVQ0E0ckFTSU9BZ2MrQWpNeUVoVVVGakkyTlRRdUFRTXlQZ00zRGdNaklnSTFOQ1lpQmhVVUhnRUNBR2U3aVZJREEzQytiNnowT0ZBNGlleUxVcHQ4WHpZQ0FrUnZtRk9zOURoUU9JbnNBeUJQaHJsbWQ4bDAvdnE2S0RnNEtJdnNpZndBTWwxNm1WSlpvblJGQVFhNktEZzRLSXZzaVFBQURBQWwvMFFEMndMNkFBOEFIUUF1QUR3QVRnQmZBSEFBZ0FDVkFLY0F0QUREQUcxQWFwV0JjQU1CQUU0OUFnWUJMaDRDQlFhMUFRa0tsZ0VDQ1FWQUFBb0ZDUVVLQ1dZQUNRSUZDUUprQ3dFQUFBRUdBQUZaQ0FFR0J3RUZDZ1lGV1FRQkFnTURBazBFQVFJQ0ExRUFBd0lEUlFFQXVMZVlsenM0TkRFcktDTWdIUndYRmhFUUNna0FEd0VQREE0ckFUSWVBeDBCRkFZaUpqMEJORFlUTWhZZEFSUUdJaVk5QVRRMk13RVVCaXNCSWk0Qk5UUTJPd0V5SGdFVklSUUdLd0VpSmpVME5qc0JNaFlsRmhRR0R3RUdKaWNtTmo4QlBnRWVBUmNCRmdZUEFRNEJMZ0VuSmpZL0FUWVdGd0VlQVE4QkRnRW5MZ0UvQVQ0Q0ZoY0JIZ0VQQVE0Qkp5NEJOajhCUGdFWEF6NEJIZ0VmQVJZR0J3WW1Md0V1QVQ0RE53RTJNaFlmQVJZR0J3NEJMZ0V2QVNZMk53RStBUjhCSGdFT0FTOEJMZ0VCUGdFeUh3RWVBUTRCTHdFdUFUY0NBQVVKQndZREVoZ1NFZ3dNRWhJWUVoSU1BZHNTREg0SURnZ1NESDRJRGdqOUJCSU1mZ3dTRWd4K0RCSUN2QVFJQjIwS0dBY0dCd3B0Qmd3S0NnUDlhZ1lHQzIwRkRBc0pBd2NIQzJ3TEdBWUI2QXNHQmo4R0dBb0xCd2MvQXdrTERBWCtnZ3NHQmo4R0dBc0hDQUVEUHdjWUNsMEdEQXNKQXo4R0Jnc0tHQWMvQWdJQkFnTUdBd0YvQnc4T0JEOEdCZ3NGREFzSkF6OEhCd3Y5MUFZWUNtMExCZ3dZQzJ3TEJ3S2NCUTRQQjIwTEJnd1lDMjBLQndZQytnTUZDQWtGZlEwUkVRMTlEUkg5QkJFTmZnd1NFZ3grRFJFQklRd1JDQTBJRFJFSURRa01FUkVNRFJFUjRRZ1BEZ1EvQmdZTEN4Z0dQd01CQXdjRi9vSUxHQVkvQXdFREJ3VUxHQVkvQmdjS0Fpd0dHQXR0Q3dZR0JoZ0xiUVVIQXdFRC9Xb0dHQXR0Q3dZR0JBNFFCMjBMQmdZQ2xnTUJBd2NGYlFzWUJnWUdDMjBEQ0FnSEJ3WUMvV29FQ0FkdEN4Z0dBd0VEQndWdEN4Z0dBZWdMQmdZL0JoZ1dCZ1kvQmhqK2pRY0lCRDhHR0JZR0JqOEdHQXNBQWdDQi82QURnUUtnQUE4QUlBQXRRQ29PQVFJREFnRkFEd0FDQVQwQUFBQUNBd0FDV1FBREFRRURUUUFEQXdGUkFBRURBVVVvR0NNbUJCSXJCU2MyTlRRdUFTTWlCaFFXTXpJM0Z3RXVBVFUwTmpJV0ZSUU9CQ01pQTRIalExS01VbjZ5c241clZPTDluaVlwbitHZ0V5TTBQVVVrY1RIaVZHdFNqVkd5L0xORTR3RVBKbVEyY2FDZmNTVkZQVFFqRXdBQUFBRUJBQUFnQXdBQ0lBQUxBQ1ZBSWdBRUF3RUVTd1VCQXdJQkFBRURBRmNBQkFRQlR3QUJCQUZERVJFUkVSRVFCaFFyQVNNVkl6VWpOVE0xTXhVekF3RHdJdTd1SXZBQkR1N3VJdkR3QUFBQUFRRkEvK0FDd0FKZ0FBVUFCck1EQVFFbUt3RTNDUUVuQVFGQVFRRS8vc0ZCQVA4Q0gwSCt3UDdBUVFEL0FBQUFBUUZBLytBQ3dBSmdBQVVBQnJNREFRRW1Ld0VuQ1FFM0F3TEFRZjdCQVQ5Qi93SWZRZjdBL3NCQkFQOEFBQUFBQVFFc0FJUUN5d0c5QUFvQUVrQVBDZ2tJQndZRkFENEFBQUJmSVFFUEt5VUdJeUltTHdFM0Z6Y1hBY0FKQ1FRS0JIQWtYdm9qalFrRkJIQWpYdnNrQUFRQWdQK2dBNEFDb0FBSUFCRUFHd0FmQUV4QVNSMGNHeG9ZRnhZVEVSQVBDQUVOQkFjQlFBQUJCd0UvR1JJQ0JqNEFCZ0FIQkFZSFZ3QUVBQUVEQkFGWEJRRURBQUFEU3dVQkF3TUFUd0lCQUFNQVF4a1dFUkVTRVJFU0NCWXJDUUVSTXhFekVUTVJBeU1SSVJFakVTVUZBUWMxSXhVSEZRa0JOU1VITlRNQ0FQN0E0TURnSUtEL0FLQUJJQUVnL3VEQWdFQUJnQUdBL2FCQVFBSkEvd0QrWUFFQS93QUJvUDZBQVFEL0FBRng1dVlCYjVwYXdETXBBVFArelNtQU00WUFBQUFEQUdEL2dBT2dBc0FBR1FBaEFDVUFQa0E3SWdFRUFDVUJBUVFDUUFBRUFBRUFCQUZtQUFJRkFRQUVBZ0JaQUFFREF3Rk5BQUVCQTFFQUF3RURSUUVBSkNNZkhoc2FFQTRBR1FFWkJnNHJBVEllQVJjZUFSUUdCdzRFSXlJdUFTY3VBVFErQXlBR0VCWWdOaEFuQlNFUkFnQXpZVmNrTmpvNk5oWXhOVGs3SHpOaFZ5UTJPanB0aS9uK3FQVDBBVmowNFA1QkFQOENueG95SkRlTG1vczNGU1FiRXdrYU1pUTNpNXFNYkRvaDlQNm85UFFCV0JUQS93QUFBQVFBZ1ArZ0E0QUNvQUFTQUI0QXBnRTNBVzVMc0NaUVdFQmhBQWNBSFFVSEhWa0pBUVVmR3dJYUJnVWFXUWdCQmg0QkhBQUdIRmtoQVFBQUF3UUFBMWtLSWdJRUlBRVpFZ1FaV1JnQkVoRUJDd0lTQzFrQUFnQUJGQUlCV1JZQkZBOEJEUk1VRFZrQUZRQU9GUTVWRndFVEV3eFJFQUVNREFzTVFodEFad0FIQUIwRkJ4MVpDUUVGSHhzQ0dnWUZHbGtJQVFZZUFSd0FCaHhaSVFFQUFBTUVBQU5aQ2lJQ0JDQUJHUklFR1ZrWUFSSVJBUXNDRWd0WkFBSUFBUlFDQVZrV0FSUVBBUTBURkExWkZ3RVRFQUVNRlJNTVdRQVZEZzRWVFFBVkZRNVJBQTRWRGtWWlFVd0FJUUFmQUFFQUFBRTJBVE1CSXdFaUFSNEJIQUVRQVEwQkJnRUVBUDhBL1FEOEFQc0E3d0RzQU9jQTVBRFpBTmNBMHdEUkFNc0F5QURCQUw4QXZBQzZBS3dBcVFDZkFKd0FrZ0NSQUk0QWpBQ0hBSVFBZndCOUFIa0Fkd0JxQUdjQVdnQlhBRXdBU2dCR0FFUUFQQUE1QURRQU1nQXRBQ3NBSHdDbUFDRUFwZ0FhQUJrQUZBQVRBQTBBREFBQUFCSUFBUUFTQUNNQURpc0JJZzRDQndZVkZCNEJGeFl5TmpVMEp5WUNJaVkxTkQ0Qk1oNEJGUlEzSXlJbU5UUS9BVFkwTHdFbUl5SVBBUTRDSXlJbVBRRTBKaXNCSWdZZEFSUU9BeU1pSmk4QkppTWlEd0VHRkI4QkZoVVVEZ0VyQVNJT0FnOEJEZ01kQVJRV093RXlIZ0VWRkE0QkR3RUdGQjhCRmpNeVB3RStBVE15RmgwQkZCWTdBVEkyUFFFME5qTXlId0VXTWo4Qk5qUXZBU1kxTkRZN0FUSTJQUUkwTGdFWEZSUXJBU0lIRGdJVkZCNEJId0VXRHdFR0l5SXZBU1lqSWdZZEFSUU9BaXNCSWlZOUFUUW5KaU1pQmc4QkJpTWlMd0VtTkQ4Qk5qVTBKeVlyQVNJbVBRRTBOanNCTWpjMk5UUW1Md0VtTkQ4Qk5qTXdNekllQVI4QkZqTXlQZ0UzTmowQk5Ec0JNaDRCSFFFVUh3RWVCRE15UHdFK0FUSVdId0VlQVJVVUR3RUdGUlFlQVJjV093RXlGUUlDRkNVaUlBMDREUmtTT0o5eE9UZ05oVjBxU2xkS0s2OGVFeHNQRkE0T0xRNFZGUTRUQkFzTkJoTWRIQlE4RlIwRkNBd09DQWtSQnhNT0ZSVU9MUTRPRXc4TUZRd2ZCQWtJQ0FNR0F3UURBaDRVSHd3VkRBTUhCUk1PRGkwTkZoUVBFd1lSQ2hNY0hSUTlGQjRiRXhRT0V3NHFEaTBPRGhRUEd4TWVGQnNNRmdJUEhpQVhCd29HQmdzSUV3ME5MQVVJQ0FRVEdDRWZMd01GQmdROEJ3c1hHQjhRSGdzU0JRZ0lCQzBGQlJJYUZ4WWhId2NMQ3djZklCY1dEUXdTQlFVc0JRZ0RBZ01EQVJNWElRc1RFZ2NZRVQwRUNBUVlDQVFKQ1FvS0JpRVlFZ0lIQndjQ0xRSURCUk1aQlFvSUZpRWVEd0hnQnc4VkRUaFFHakFzRWpod1VFODVPUDZnWGtJclNpc3JTaXRDa2hzVEZBMFREeWtPTEE0T0VnVUhCQnNUSGhRZUhoUWZCdzRMQ0FVSUJ4TU9EaXdPS1E4U0RoUU1GZ3dDQXdRREJnTUhDQWtGUEJVZERCWU1Cd3dLQlJJUEtRNHNEZzRUQndnYkV4NFZIUjBWSGhNYkVCTU9EaTBPS1E4VERSUVRIQndVSHg0T0Z3MVFIaEFZQnhJVUN3b1ZFZ2NUREF3dEJRVVNHaTBoSGdRSEJBTUtDQjRnRnhjTkRCTUZCUzBGRGdVU0dDRWdGeGNMQmowSEN4Y1hJQkFlQ3hJRkRnVXRCQUVDQVJNWkJRb0hGeUFmRWdVSUJSOGZHQVlEQlFRREFSa1NBd0lDQWkwQ0JnUUhCUk1YSVFzVEVRZ1hFZ0FBQXdEQS8rQURRQUpnQUFNQUJnQUpBQXEzQ0FjR0JRTUNBeVlyRXg4QkNRSURFd0Vud09sekFTVCtpQUU0NXVMK3RxWUJMV2ZtQW9EK2J3Rk0vZzhCOWY3R1NRQUVBR0QvZ0FPZ0FzQUFCd0FSQUJrQUtnQlJRRTRBQndBS0FRY0tXUUFCQUFBQ0FRQlpBQUlBQXdRQ0ExY0xCZ0lFQUFVSkJBVlhEQUVKQ0FnSlRRd0JDUWtJVVFBSUNRaEZHeG9JQ0NNaUdpb2JLaGNXRXhJSUVRZ1JFUkVSRWhNU0RSUXJBQlFXTWpZMEppSVRFU01WTXhVakZUTTFFaUFHRUJZZ05oQUJJaTRCTlRRK0FqSWVBaFFPQWdIUEZ5SVhGeUk2WUNBZ2dHeitxUFQwQVZqMC9tQm5zR1k4Wm82YWptWThQR2FPQWRraUZ4Y2lGLzZBQVFBUThCQVFBbEQwL3FqMDlBRlkvZGRtc0dkTmptWThQR2FPbW81bVBBQUVBR0QvZ0FPZ0FzQUFCd0FZQURNQVFBQmVRRnNBQlFZSEJnVUhaZ0FIQ0FZSENHUUFBQUFEQkFBRFdRc0JCQUFHQlFRR1dRd0JDQUFKQWdnSldRb0JBZ0VCQWswS0FRSUNBVkVBQVFJQlJUVTBHaGtKQ0RrNE5FQTFRQ3NxSVI4ZUhSa3pHak1SRUFnWUNSZ1RFQTBRS3dBZ0JoQVdJRFlRQVNJdUFUVTBQZ0l5SGdJVURnSURJZzRCRlRNbU16SVdGUlFHQnc0Q0J6TStBVGMrQVRVMEpnTWlCaFFXTWpZMU5DNERBcXorcVBUMEFWajAvbUJuc0dZOFpvNmFqbVk4UEdhT1JpczhJQ1lDWVNReUZSSVhHUXNCSmdFTklCb2FSakVQRXhRY0ZBUUdDQXNDd1BUK3FQVDBBVmo5MTJhd1owMk9aanc4Wm82YWptWThBbGtiT0NsZExTTVdKUkVWSmlrZEtpRWZHQzRmTWp2K2l4TWNGQlFPQlFzSUJnTUFBQUFBQlFEQS80QURRQUxBQUFzQUV3QVhBQ2tBTVFCWVFGVW5JQUlKQ2dGQUFBQUFCQUVBQkZrRkRBTURBUUFIQ0FFSFZ3QUlBQXNLQ0F0WkFBb0FDUVlLQ1ZrQUJnSUNCa3NBQmdZQ1R3QUNCZ0pEQUFBdkxpc3FKQ01iR2hjV0ZSUVRFZzhPQUFzQUN4RVRFdzBSS3dFMU5DWWlCaDBCSXhFaEVTVTBOaklXSFFFaEFTRVJJUWMwSmlJR0ZSUVdGeFVVRmpJMlBRRStBUVlpSmpRMk1oWVVBdEI2ckhwd0FvRCtFR2VTWi82Z0FkRDl3QUpBNENVMkpSc1ZDUTRKRlJzekdoTVRHaE1CWUpCV2VucFdrUDRnQWVDUVNXZG5TWkQrUUFHZ29Cc2xKUnNXSXdWU0J3a0pCMUlGSXdvVEdoTVRHZ0FBQUFZQXdRRGdBMEFCWUFBSEFBOEFIZ0FuQUM4QU53QkZRRUlLRFFZREFnZ01CQU1BQVFJQVdRa0ZBZ0VEQXdGTkNRVUNBUUVEVVFzSEFnTUJBMFVnSHhFUU5UUXhNQzBzS1Nna0l4OG5JQ2NZRmhBZUVSNFRFeE1RRGhJckFESVdGQVlpSmpRMklnWVVGakkyTkNVeUhnRVZGQVlqSWk0Q05UUTJOeUlHRkJZeU5qUW1CRElXRkFZaUpqUTJJZ1lVRmpJMk5BSHhIaFVWSGhVL05pVWxOaVgrd1FvUUNoVVBCdzRKQmhVUEd5VWxOU1ltQWRZZUZSVWVGVDgySlNVMkpRRkVGUjRWRlI0eEpUWWxKVFlKQ2hBS0R4VUdDUTRIRHhVY0pUWWxKVFlsSEJVZUZSVWVNU1UySlNVMkFBQUFBQUlCQVAvZ0F3QUNZQUF3QUVzQklVdXdDMUJZUUI0dkZ3SUpBMHMrQWdvQlBRRUZDREVCQndVdEtnSUdCd1ZBR3dFSEFUOGJTN0FNVUZoQUhpOFhBZ2tEU3o0Q0NnSTlBUVVJTVFFSEJTMHFBZ1lIQlVBYkFRY0JQeHRBSGk4WEFna0RTejRDQ2dFOUFRVUlNUUVIQlMwcUFnWUhCVUFiQVFjQlAxbFpTN0FMVUZoQUx3QUFDUUVKQUFGbUFBTUFDUUFEQ1ZrQ0FRRUFDZ2dCQ2xrQUNBQUZCd2dGV1FBSEFBWUVCd1paQUFRRUN3UkNHMHV3REZCWVFDOEJBUUFKQWdrQUFtWUFBd0FKQUFNSldRQUNBQW9JQWdwWkFBZ0FCUWNJQlZrQUJ3QUdCQWNHV1FBRUJBc0VRaHRBTHdBQUNRRUpBQUZtQUFNQUNRQURDVmtDQVFFQUNnZ0JDbGtBQ0FBRkJ3Z0ZXUUFIQUFZRUJ3WlpBQVFFQ3dSQ1dWbEFEMHBJUWtBa0xEUWpGaWt4RWhBTEZ5c0JJZzRFSXlJdUFTOEJKaWN1QWlNaURnRVBBUmtCTXhFK0FUTXlIZ0VYRmpNeVBnTTNQZ0UzRVRVR0F3WWpJaWN1QWlNaURnRUhFVDRCTXpJWEhnUXpNamNDNEFJU0NCRU1Ed2NPR2g0Skd4SUhIQ0V6RmlwQUVnVUhJQTB6S0JNcU5RNWFNUWdSRWdzVUF3b1BCd3dVTnhZdVZ3MDNMUlVZS2hzTERUTW9MVk1HSnhJZ0hBNFhPQUpBQXdFQkFRRUNCUUlHQkFFR0J3WUxDQU1GL3JmKzVBRWZCUWdJRHdNVEFRSUJBZ0VCQWdFQk9pRUMvc01IRWdNUENRUUZBd0VUQlFnU0FRa0RCZ0lIQUFBQ0FJRC9vQU9BQXFBQUNBQVNBRFZBTWhJUkR3NE5DZ2dCQUFrQkF3RkFFQWtDQXo0QUFRTUFBd0VBWmdBREFRQURTd0FEQXdCUEFnRUFBd0JERkJFUkVnUVNLd2tCRVRNUk14RXpFUUVITlNNVkJ4VUpBVFVDQVA3QTRNRGcvc0RBZ0VBQmdBR0FBa0QvQVA1Z0FRRC9BQUdnQVdDYVdzQXpLUUV6L3MwcEFBSUFnUCtnQTRBQ29BQ0JBSTRBcExhSWh3SUhBQUZBUzdBbVVGaEFNUUFEQUE4QUF3OVpCaEFDQUEwQkJ3NEFCMWtFQVFJTEFRa0lBZ2xaQUE0QUNnNEtWUVVCQVFFSVVRd0JDQWdMQ0VJYlFEY0FBd0FQQUFNUFdRWVFBZ0FOQVFjT0FBZFpBQTRKQ2c1TkJBRUNDd0VKQ0FJSldRVUJBUXdCQ0FvQkNGa0FEZzRLVVFBS0RncEZXVUFtQWdDTWk0V0VlM2hyYW1kbFgxeFhWVkZQUlVJOE9Td3FKU01iR0JNUkRRd0FnUUtCRVE0ckFTTWlKalUwUHdFMk5DOEJKaUlQQVE0Qkl5SW1QUUUwSmlzQklnNEJIUUVVRGdJaklpNEJMd0VtSXlJUEFRWVVId0VlQXhVVUJpc0JJZzRCSFFFVUZqc0JNaFlWRkE4QkJoUWZBUll6TWo4QlBnRXpNaFlkQVJRV093RXlOajBCTkQ0Qk16SWZBUll5UHdFK0FUUW1Md0VtTlRRK0FUc0JNalk5QWpZbUJ4UUdJaVkxTVRRK0FUSWVBUU5SSGhNYkR4UU9EaTBPS2c0VEJ4RUtFeHdkRkQwTkZnMElEUkVKQnd3S0JSTU9GUlVPTFE0T0V3UUZCQUliRWg4TkZ3NGVGQjhTR3c4VERnNHREUllVRHhNR0Vna1RIQjBVUFJRZERSVU5FdzhURGlrUExBY0lDQWNURHd3VkRCOFVHZ0VidzE2RlhTcEtWMG9yQVc4Y0V4TU9FdzRwRHl3T0RoTUhDQnNTSHhRZURoY05Id2tRRFFjREJ3VVREZzRzRGlrUEVnUUlDQWtGRXh3TkZnNDhGUndjRXhRT0VnOHBEaXdPRGhNSENCc1RIaFFlSFJVZURCVU5FQklPRGl3SEV4SVRCeE1ORkEwVkRSd1VIeDRWSEU5Q1hsNUNLMG9ySzBvQUFBTUFZUCtBQTZBQ3dBQUhBQkVBR3dBM1FEUUFBQUFDQXdBQ1dRQURBQWNHQXdkWEFBWUlBUVVFQmdWWEFBUUJBUVJMQUFRRUFWRUFBUVFCUlJFUkVSRVVGQk1URUFrWEt3QWdCaEFXSURZUUpESVdGUlFHSWlZMU5CTWpOVE0xSXpVekVUTUNyUDZvOVBRQldQVCtSaUlYRnlJWGNZQWdJR0FnQXNEMC9xajA5QUZZSkJjUkVCZ1lFQkgraHhEd0VQOEFBQUFEQUdEL2dBT2dBc0FBQndBVUFDNEFTRUJGQUFVSEJnY0ZCbVlBQmdRSEJnUmtBQUFBQndVQUIxa0FCQUFEQWdRRFdnZ0JBZ0VCQWswSUFRSUNBVklBQVFJQlJna0lLaWduSmlVakdSZ05EQWdVQ1JRVEVBa1FLd0FnQmhBV0lEWVFBU0ltTkRZeUZoVVVEZ00zRGdFSEl6UStBamMrQVRVMEppTWlGeU0yTXpJV0ZSUUdBcXorcVBUMEFWajAvbWtQRXhNZEZBUUdDQXMrSUEwQkpnY09GaEVTRlRJa1lRSW1BWVl6UmhvQ3dQVCtxUFQwQVZqK2VCUWNFeE1PQmdvSUJ3UG5JQ0VxRmlFZkd4QVJKaFVqTFYxOE96SWVMd0FEQU1FQTRBTkFBV0FBQndBUUFCZ0FLMEFvQkFZQ0F3QUJBUUJOQkFZQ0F3QUFBVkVGQXdJQkFBRkZDUWdXRlJJUkRRd0lFQWtRRXhBSEVDc0FJZ1lVRmpJMk5DVWlCaFFXTWpZMEppQWlCaFFXTWpZMEFoczJKU1UySmY3Qkd5VWxOU1ltQWdBMkpTVTJKUUZnSlRZbEpUWWxKVFlsSlRZbEpUWWxKVFlBQUF3QVFQL1FBOEFDY0FBSEFBOEFGd0FmQUNjQUx3QTFBRHNBUXdCTEFGTUFXd0VFUzdBaFVGaEFZZ0FDQUFKb0FBTUJDZ0VEQ21ZQUNnZ0JDZ2hrQUFzSkJna0xCbVlBQmdRSkJnUmtBQWNGQjJrWUZ3SVVGZ0VWQVJRVlZ3QUFBQUVEQUFGWkR3RU1EZ0VOQ1F3TldBQUlBQWtMQ0FsWkV3RVFFZ0VSQlJBUldBQUVCQVZSQUFVRkN3VkNHMEJuQUFJQUFtZ0FBd0VLQVFNS1pnQUtDQUVLQ0dRQUN3a0dDUXNHWmdBR0JBa0dCR1FBQndVSGFSZ1hBaFFXQVJVQkZCVlhBQUFBQVFNQUFWa1BBUXdPQVEwSkRBMVlBQWdBQ1FzSUNWa0FCQkFGQkUwVEFSQVNBUkVGRUJGWUFBUUVCVkVBQlFRRlJWbEFMVlJVVkZ0VVcxcFpUMDVOVEVwSlNFYy9QajA4T3pvNU9ETXlNVEF0TENrb0pTUVRFeE1URXhNVEV4QVpGeXNBTWhZVUJpSW1ORFlpQmhRV01qWTBBaklXRkFZaUpqUTJJZ1lVRmpJMk5BQXlGaFFHSWlZME5pSUdGQll5TmpRWElSVWhOalFpRkJjak5UTUJNeFVqTmpVMEpnY1VGaFVoTlNFR0V6TVZJelkxTkNZbkJoVVVGaFVoTlFLekdoTVRHaE02TkNZbU5DWk5HaE1UR2hNNk5DWW1OQ2IrTXhvVEV4b1RPalFtSmpRbUh3SWgvZDhCd0FHaG9RSStvYUVCQWI4Qi9kOENJUUcvb2FFQkFiNEJBZjNmQWxBVEdoTVRHak1tTkNZbU5QM21FeG9URXhvekpqUW1KalFCRmhNYUV4TWFNeVkwSmlZMENpQUlFQkFJSVA3d0lBZ0lCQWdNQkFnRUlBZ0NLQ0FJQ0FRSUJBZ0lCQWdFSUFBSkFFUUFJQU84QXNzQUZRQW5BRE1BUkFCUUFGMEFjUUIrQUl3QkVrdXdDbEJZUUY0WEFRd0xBd29NWGdBTkFnb0xEVjRBQndBSUFRY0lXUUFCRWdFQUNRRUFXUUFKRlFFR0N3a0dXUUFERXdFQ0RRTUNXUUFMRmdFS0R3c0tXUUFQR1FFUUJROFFXUUFGRkFFRUVRVUVXUUFSRGc0UlRRQVJFUTVSR0FFT0VRNUZHMEJnRndFTUN3TUxEQU5tQUEwQ0NnSU5DbVlBQndBSUFRY0lXUUFCRWdFQUNRRUFXUUFKRlFFR0N3a0dXUUFERXdFQ0RRTUNXUUFMRmdFS0R3c0tXUUFQR1FFUUJROFFXUUFGRkFFRUVRVUVXUUFSRGc0UlRRQVJFUTVSR0FFT0VRNUZXVUJHZ0g5emNsOWVVbEUxTkNvb0dCWUNBSVNEZjR5QWpIbDRjbjV6Zm1sblhuRmZjVmhYVVYxU1hVeExSa1U5T3pSRU5VUXdMU2d6S2pNaEhoWW5HQ2NPQ3dBVkFoVWFEaXNCSVNJdUJUVTBOak1oTWg0REZSUUdCeUVpTGdJMU5EWXpJVEllQWhVVUJnY2hJaVkwTmpNaE1oWVVCZ0VpSmpVMFBnSXpNaDRCRlJRT0FpWWlEZ0VVSGdFeVBnRTBKZ01pSmpVMFBnRXlIZ0VVRGdFbklnNEJGUlFlQXpNeVBnRTFOQzREQXlJbU5UUStBVEllQVJRT0FTY2lCaFFXTWpZMU5DNEVBNXI5M1FRSEJ3WUZBd0lVRGdJakJRc0lCZ1FVRHYzZEJnMEpCaFFPQWlNSERBa0dGQTc5M1E0VUZBNENJdzRVRlAwREt6d1JHeVlWR3pBYkVCd21DeE1QQ1FrUEV4QUpDUmtyUEJ3dk56QWJHekFiQ2c4SkF3WUpDZ1lKRUFrRUJnZ0xCU3M4SEM4M01Cc2JNQnNPRkJRY0ZBTUVCZ2dKQWtJQ0F3VUdCd2NFRGhRREJna0tCZzRVN3dZSkRBY09GQVVKRFFjT0ZPOFVIUlFVSFJRQm1qd3FGU1liRVJ3dkhCVWxIQkNJQ1E4VEVBa0pFQk1QL3BJOEtod3ZIQnd2TnpBYmlBa1BDZ1VMQ0FZRUNSQUpCZ29KQmdQK2lUd3FIQzhjSEM4M01CdUpGQjBVRkE0RkNRY0hCQU1BQXdCQS8rRUR2d0puQUFNQUJ3QUxBQ1pBSXdBQ0FBTUFBZ05YQUFBQUFRUUFBVmNBQkFRRlR3QUZCUXNGUWhFUkVSRVJFQVlVS3hNaEZTRVJJUlVoRVNFVklVQURmL3lCQTMvOGdRTi8vSUVCUERBQld6RDkyUzhBQUFBRUFCZi9pQVBwQXJnQUJRQWlBRGtBUHdBOVFEby9QajA4T3pvNUxTd2pJaUVmSGhRVEJnVUVBd0lCQUJjQ0FRRkFBQUFBQVFJQUFWa0FBZ01EQWswQUFnSURVUUFEQWdORkx4NFhMUVFTS3dFSEp3Y1hOeWN3UFFFdUF5TWlEZ0lIRno0Qk1oNEJGeFVVQmdjWE5qVXhCdzRCSWk0Qk5UUTJOeWNHSFFNZUFqTXlOamNCQnhjM0Z6Y0QwMU5WRldwcFVRRkJiWmRTTjJsY1RSc2NNckRNckdVQkFRRWdBbEF5c015dFpRRUJJQUlDYjdwdGJzQTIvUnhwRmxOVEZnRWdVMU1XYW1rWUFRSlRsV3hBSFRaTk1CQlpaMlNzWmc0R0RnY0VGUmE0V1dka3JXWUtGQW9FRlJZQ0JBTnN1R3R3WUFGSWFSZFRVeGNBQUFBQkFWLy9ud0tnQXFBQVNRQkxRRWc2QVFBRlJ4OEtBd0lEQWtBQUJRQUZhQWNCQUFNQWFBQURBZ05vQUFJQUJBRUNCRmtBQVFZR0FVMEFBUUVHVWdBR0FRWkdBUUJEUVRjMkxTc2xJeDBiQ0FjQVNRRkpDQTRyQVNJT0FSVVJGQVlpSmpjd0VUUTJOellYSGdFVkVSUU9BZ2NHSXlJbU5UQVJOQ1lqSWc0QkZRTVVGak1XTno0Q05STTBKeVlpQndZSE1CMERCaFl6RmpjMk5SRTJKZ0tKQmdzR1JWdEZBUklRSXlNUUVRSUNCQUlHQ0FrTkRRa0hDZ1lCS1J3ZEZBWUpCQUU0R3o4YU9BRUJZRUJETGk4QkRRSHFCZ3NHL25vOVFVTTlBZFlYSXdrVkZRb2pGLzQvQmdvSUNBTUhGaE1CV2dvTkJnc0cvcWNxTHdFWkNCUVhEUUhCU3lJUUR5RkxlSTE5VkZGZUFTOHdUd0dGQ2c0QUF3QVQvL1lEN1FKSkFCY0FJd0F4QUpwTHNBOVFXRUFpQndFRUFnVUNCRjRBQlFNREJWd0FBUVlCQWdRQkFsa0FBd01BVWdBQUFBc0FRaHRMc0JoUVdFQWtCd0VFQWdVQ0JBVm1BQVVEQWdVRFpBQUJCZ0VDQkFFQ1dRQURBd0JTQUFBQUN3QkNHMEFwQndFRUFnVUNCQVZtQUFVREFnVURaQUFCQmdFQ0JBRUNXUUFEQUFBRFRRQURBd0JTQUFBREFFWlpXVUFVSlNRWkdDc3FKREVsTVNBZkdDTVpJeWttQ0JBckFSUU9CQ01pTGdNMFBnTXpNaGNXRnhZbElnNENGUlFXTWpZMEpnY2lEZ0VWRkJZeU5qVTBMZ0lEN1NFOFdtcUdSbEdkZFZzdkwxdDJuRkhJbldNZENQNFRNRmhBSll2Rmk0dGpLVVlvV0g1WUdDZzRBU0FZUGtNL014OHJSRkJOUEUxUVJDcHdSMHNXNGlaQ1dqRmxqbzdLamxncFNDcEFXMXRBSURrcUdBQUFBUURBQUdBRFFBSGdBQVVBQnJNQ0FBRW1LeVUzQ1FFWEFRTVpKLzdBL3NBbkFSbGdLUUZYL3FrcEFTMEFBQUFBQVFEQUFHQURRQUhnQUFVQUJyTUNBQUVtS3dFWENRRTNBUU1aSi83QS9zQW5BUmtCNENuK3FRRlhLZjdUQUFBQUFRRkEvK0FDd0FKZ0FBVUFCck1EQVFFbUt3RW5DUUUzQVFMQUtmNnBBVmNwL3RNQ09TZit3UDdBSndFWkFBQUFBUUZBLytBQ3dBSmdBQVVBQnJNREFRRW1Ld0UzQ1FFbkFRRkFLUUZYL3FrcEFTMENPU2Yrd1A3QUp3RVpBQUFBQVFGQS8rQUN3QUpnQUNFQUpVQWlHUmdUQ3dRRkFBSUJRQUFBQWdFQ0FBRm1BQUlDQVZFQUFRRUxBVUlzRlJFREVTc0JCaUl2QVJFVUJpSW1OUkVIQmljbU5EYzJOell6TWhZZkFSNEJId0VlQVJVVUFyc0VEUVdWQ1E0SmxRd0tCUVd1QWdZRkF3VUJBZ0ZZTENzREFnR2tCQVNGL2NjSENRa0hBam1FQ3dvRkRnU2ZBUVVDQVFJQlVDZ25BZ1lEQndBQUFBRUJRUC9nQXNBQ1lBQWdBQ1JBSVJnVEN3UUVBZ0FCUUFBQUFRSUJBQUptQUFFQkFsRUFBZ0lMQWtJc0ZSRURFU3NsSmlJUEFSRTBKaUlHRlJFbkpnY0dGQmNXRnhZek1qWTNQZ0UvQVQ0Qk5UUUN1d1FOQlpVSkRnbVZEQW9GQmE0Q0JnVUVCZ0VCV0N3ckF3S2NCQVNGQWprSENRa0gvY2VFQ3dvRkRnU2ZBUVVEQWdGUUtDY0NCZ01IQUFBQUFBRUF3QUJnQTBBQjRBQWRBQ3BBSnhZU0FnQUJBVUFBQWdFQ2FBQURBQU5wQUFFQUFBRk5BQUVCQUZJQUFBRUFSaHdVSXlNRUVpc2xOaThCSVRJMk5DWWpJVGMySnlZaUJ3WUhCaFVVRng0Qkh3RVdNellCZkFvS2hRSTVCd2tKQi8zSGhBc0tCUTRFbndFRkJRRlFLQ2NFQndkbENneVZDUTRKbFF3S0JRV3VBZ1lGQndRQldDd3JCUUVBQVFEQUFHQURRQUhoQUI0QUpVQWlGeE1DQUFFQlFBQUNBQUpwQUFFQUFBRk5BQUVCQUZFQUFBRUFSUjBjSXlNREVDc2xKajhCSVNJbU5EWXpJU2NtTno0QkZoY1dGeFlWRkFjT0FROEJCaU1tQW9RS0NvWDl4d2NKQ1FjQ09ZUUxDZ01KQ0FPZkFRVUZBVkFvSndRSEIyVUtESlVKRGdtVkRBb0RBd0lFcmdJR0JRY0VBVmdzS3dVQkFBQUJBUjcvcHdMYUFuOEFCZ0FXUUJNQUFRQTlBQUVBQVdnQ0FRQUFYeEVSRVFNUkt3VVRJeEVqRVNNQi9ONlJtNUJaQVNnQnNQNVFBQUVBWC85N0E2RUN2UUFMQUFBSkFnY0pBUmNKQVRjSkFRTnQvcEwrbERRQmJmNlROQUZzQVc0MC9wRUJid0s5L3BJQmJEUCtsUDZVTXdGcy9wSXpBVzRCYlFBQUJBQlYvM0VEcWdMSUFCTUFKd0ErQUVRQUFBVUdMZ0UwTno0Qk5DWW5KalErQVJjZUFSUUdKdzRCSmpRM1BnRTBKaWNtTkRZV0Z4NEJGQVlESnlNaUppY1JQZ0UzTXpjK0FSNEJGUkVVRGdFbUp6Y1JCeU1STXdNd0NCZ1FDVEkyTlRJSkVCZ0pPajQvckFnWUVRZ1lHUmdYQ0JFWUNCOGdJdUhJcHhjaEFRRWhGNmZGRGg4ZUVCQWJIdzRmMUxxNEZBa0JFaGdKTklhWGhUUUpHQklCQ1R5Y3NKeFNDQUVTRndrWlBrVStHUWtYRVFFSUlWTmNVLzdnZ2lFWUFia1hJUUdUQ2dNUEd4RDlIQkFhRHdFSU1BTGtuLzVIQUFBQUJRQkEvM3dEd0FLOEFBc0FId0F6QUVnQVhRQUFKU0VpSmpRMk15RXlGaFFHQXlNaUpqUTJPd0V5TmowQk5EWXlGaDBCRGdFRkl5NEJKelUwTmpJV0hRRVVGanNCTWhZVUJnTWlKajBCUGdFM016SVdGQVlyQVNJR0hRRVVCaUVpSmowQk5DWXJBU0ltTkRZN0FSNEJGeFVVQmdPZy9NQU9FaElPQTBBT0VoSnV3QTRTRWc3QURoSVNIQklCTnYzM29DazJBUkljRWhJT29BNFNFdTRPRWdFMkthQU9FaElPb0E0U0VnTHlEaElTRHNBT0VoSU93Q2syQVJMOEVod1NFaHdTL29BU0hCSVNEcUFPRWhJT29DazJBUUUyS2FBT0VoSU9vQTRTRWh3U0FpQVNEcUFwTmdFU0hCSVNEcUFPRWhJT29BNFNFaHdTQVRZcG9BNFNBQUFBREFDV0FBRUFBQUFBQUFFQUNBQVNBQUVBQUFBQUFBSUFBQUFoQUFFQUFBQUFBQU1BRmdCVUFBRUFBQUFBQUFRQUNRQ0RBQUVBQUFBQUFBVUFNQUR2QUFFQUFBQUFBQVlBQ1FFMEFBTUFBUVFKQUFFQUVBQUFBQU1BQVFRSkFBSUFCQUFiQUFNQUFRUUpBQU1BTUFBaUFBTUFBUVFKQUFRQUZnQnJBQU1BQVFRSkFBVUFZQUNOQUFNQUFRUUpBQVlBRWdFZ0FIVUFiZ0JwQUdrQVl3QnZBRzRBY3dBQWRXNXBhV052Ym5NQVhqaUp4QUFBQUFCMUFHNEFhUUJwQUdNQWJ3QnVBSE1BSUY0NGljUUFPZ0JXQUdVQWNnQnpBR2tBYndCdUFDQUFNUUF1QURBQU1BQUFkVzVwYVdOdmJuTWdPbFpsY25OcGIyNGdNUzR3TUFBQWRRQnVBR2tBYVFCakFHOEFiZ0J6QUNCZU9JbkVBQUIxYm1scFkyOXVjeUFBQUZZQVpRQnlBSE1BYVFCdkFHNEFJQUF4QUM0QU1BQXdBQ0FBVXdCbEFIQUFkQUJsQUcwQVlnQmxBSElBSUFBeUFEQUFMQUFnQURJQU1BQXhBRGtBTEFBZ0FHa0FiZ0JwQUhRQWFRQmhBR3dBSUFCeUFHVUFiQUJsQUdFQWN3QmxBQUJXWlhKemFXOXVJREV1TURBZ1UyVndkR1Z0WW1WeUlESXdMQ0F5TURFNUxDQnBibWwwYVdGc0lISmxiR1ZoYzJVQUFIVUFiZ0JwQUdrQVl3QnZBRzRBY3dBdEFBQjFibWxwWTI5dWN5MEFBQUlBQUFBQUFBRC9Id0F5QUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQVlBQUFBQUVBQWdCYkFRSUJBd0VFQVFVQkJnRUhBUWdCQ1FFS0FRc0JEQUVOQVE0QkR3RVFBUkVCRWdFVEFSUUJGUUVXQVJjQkdBRVpBUm9CR3dFY0FSMEJIZ0VmQVNBQklRRWlBU01CSkFFbEFTWUJKd0VvQVNrQktnRXJBU3dCTFFFdUFTOEJNQUV4QVRJQk13RTBBVFVCTmdFM0FUZ0JPUUU2QVRzQlBBRTlBVDRCUHdGQUFVRUJRZ0ZEQVVRQlJRRkdBVWNCU0FGSkFVb0JTd0ZNQVUwQlRnRlBBVkFCVVFGU0FWTUJWQUZWQVZZQlZ3RllBVmtCV2dGYkFWd0JYUWQxYm1sRk1UQXdCM1Z1YVVVeE1ERUhkVzVwUlRFd01nZDFibWxGTVRNd0IzVnVhVVV4TXpFSGRXNXBSVEV6TWdkMWJtbEZNakF3QjNWdWFVVXlNREVIZFc1cFJUSXdNZ2QxYm1sRk1qQXpCM1Z1YVVVeU16QUhkVzVwUlRJek1RZDFibWxGTWpNeUIzVnVhVVV5TXpNSGRXNXBSVEkyTUFkMWJtbEZNall4QjNWdWFVVXlOaklIZFc1cFJUSTJNd2QxYm1sRk1qWTBCM1Z1YVVVek1EQUhkVzVwUlRNd01RZDFibWxGTXpBeUIzVnVhVVV6TURNSGRXNXBSVE16TWdkMWJtbEZNek16QjNWdWFVVXpOakFIZFc1cFJUTTJNd2QxYm1sRk16WTBCM1Z1YVVVME1EQUhkVzVwUlRRd01RZDFibWxGTkRBeUIzVnVhVVUwTURNSGRXNXBSVFF3TkFkMWJtbEZOREExQjNWdWFVVTBNRFlIZFc1cFJUUXdOd2QxYm1sRk5EQTRCM1Z1YVVVME1Ea0hkVzVwUlRReE1BZDFibWxGTkRFeEIzVnVhVVUwTVRNSGRXNXBSVFF6TkFkMWJtbEZORE0zQjNWdWFVVTBNemdIZFc1cFJUUXpPUWQxYm1sRk5EUXdCM1Z1YVVVME5ERUhkVzVwUlRRME1nZDFibWxGTkRRekIzVnVhVVUwTmpBSGRXNXBSVFEyTVFkMWJtbEZORFl5QjNWdWFVVTBOak1IZFc1cFJUUTJOQWQxYm1sRk5EWTFCM1Z1YVVVME5qWUhkVzVwUlRRMk9BZDFibWxGTkRjd0IzVnVhVVUwTnpFSGRXNXBSVFEzTWdkMWJtbEZOVEF3QjNWdWFVVTFNREVIZFc1cFJUVXdNZ2QxYm1sRk5UQXpCM1Z1YVVVMU1EUUhkVzVwUlRVd05RZDFibWxGTlRBMkIzVnVhVVUxTURjSGRXNXBSVFV3T0FkMWJtbEZOVE13QjNWdWFVVTFNeklIZFc1cFJUVXpOQWQxYm1sRk5UTTFCM1Z1YVVVMU16Y0hkVzVwUlRVMk1BZDFibWxGTlRZeUIzVnVhVVUxTmpNSGRXNXBSVFUyTlFkMWJtbEZOVFkzQjNWdWFVVTFOamdIZFc1cFJUVTRNQWQxYm1sRk5UZ3hCM1Z1YVVVMU9ESUhkVzVwUlRVNE13ZDFibWxGTlRnMEIzVnVhVVUxT0RVSGRXNXBSVFU0TmdkMWJtbEZOVGczQjNWdWFVVTFPRGdIZFc1cFJUVTRPUVJGZFhKdkIzVnVhVVUyTVRJQUFBRUFBZi8vQUE4QUFRQUFBQXdBQUFBV0FBQUFBZ0FCQUFFQVh3QUJBQVFBQUFBQ0FBQUFBQUFBQUFFQUFBQUExYVFuQ0FBQUFBRFpxbHU1QUFBQUFObXFYQWs9JykgZm9ybWF0KCd0cnVldHlwZScpO1xyXG5cdH1cclxuXHJcblx0LyogI2VuZGlmICovXHJcblxyXG5cdC51bmktaWNvbnMge1xyXG5cdFx0Zm9udC1mYW1pbHk6IHVuaWljb25zO1xyXG5cdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdH1cclxuPC9zdHlsZT4iLCJleHBvcnQgZGVmYXVsdCB7XHJcblx0J2NvbnRhY3QnOiAnXFx1ZTEwMCcsXHJcblx0J3BlcnNvbic6ICdcXHVlMTAxJyxcclxuXHQncGVyc29uYWRkJzogJ1xcdWUxMDInLFxyXG5cdCdjb250YWN0LWZpbGxlZCc6ICdcXHVlMTMwJyxcclxuXHQncGVyc29uLWZpbGxlZCc6ICdcXHVlMTMxJyxcclxuXHQncGVyc29uYWRkLWZpbGxlZCc6ICdcXHVlMTMyJyxcclxuXHQncGhvbmUnOiAnXFx1ZTIwMCcsXHJcblx0J2VtYWlsJzogJ1xcdWUyMDEnLFxyXG5cdCdjaGF0YnViYmxlJzogJ1xcdWUyMDInLFxyXG5cdCdjaGF0Ym94ZXMnOiAnXFx1ZTIwMycsXHJcblx0J3Bob25lLWZpbGxlZCc6ICdcXHVlMjMwJyxcclxuXHQnZW1haWwtZmlsbGVkJzogJ1xcdWUyMzEnLFxyXG5cdCdjaGF0YnViYmxlLWZpbGxlZCc6ICdcXHVlMjMyJyxcclxuXHQnY2hhdGJveGVzLWZpbGxlZCc6ICdcXHVlMjMzJyxcclxuXHQnd2VpYm8nOiAnXFx1ZTI2MCcsXHJcblx0J3dlaXhpbic6ICdcXHVlMjYxJyxcclxuXHQncGVuZ3lvdXF1YW4nOiAnXFx1ZTI2MicsXHJcblx0J2NoYXQnOiAnXFx1ZTI2MycsXHJcblx0J3FxJzogJ1xcdWUyNjQnLFxyXG5cdCd2aWRlb2NhbSc6ICdcXHVlMzAwJyxcclxuXHQnY2FtZXJhJzogJ1xcdWUzMDEnLFxyXG5cdCdtaWMnOiAnXFx1ZTMwMicsXHJcblx0J2xvY2F0aW9uJzogJ1xcdWUzMDMnLFxyXG5cdCdtaWMtZmlsbGVkJzogJ1xcdWUzMzInLFxyXG5cdCdzcGVlY2gnOiAnXFx1ZTMzMicsXHJcblx0J2xvY2F0aW9uLWZpbGxlZCc6ICdcXHVlMzMzJyxcclxuXHQnbWljb2ZmJzogJ1xcdWUzNjAnLFxyXG5cdCdpbWFnZSc6ICdcXHVlMzYzJyxcclxuXHQnbWFwJzogJ1xcdWUzNjQnLFxyXG5cdCdjb21wb3NlJzogJ1xcdWU0MDAnLFxyXG5cdCd0cmFzaCc6ICdcXHVlNDAxJyxcclxuXHQndXBsb2FkJzogJ1xcdWU0MDInLFxyXG5cdCdkb3dubG9hZCc6ICdcXHVlNDAzJyxcclxuXHQnY2xvc2UnOiAnXFx1ZTQwNCcsXHJcblx0J3JlZG8nOiAnXFx1ZTQwNScsXHJcblx0J3VuZG8nOiAnXFx1ZTQwNicsXHJcblx0J3JlZnJlc2gnOiAnXFx1ZTQwNycsXHJcblx0J3N0YXInOiAnXFx1ZTQwOCcsXHJcblx0J3BsdXMnOiAnXFx1ZTQwOScsXHJcblx0J21pbnVzJzogJ1xcdWU0MTAnLFxyXG5cdCdjaXJjbGUnOiAnXFx1ZTQxMScsXHJcblx0J2NoZWNrYm94JzogJ1xcdWU0MTEnLFxyXG5cdCdjbG9zZS1maWxsZWQnOiAnXFx1ZTQzNCcsXHJcblx0J2NsZWFyJzogJ1xcdWU0MzQnLFxyXG5cdCdyZWZyZXNoLWZpbGxlZCc6ICdcXHVlNDM3JyxcclxuXHQnc3Rhci1maWxsZWQnOiAnXFx1ZTQzOCcsXHJcblx0J3BsdXMtZmlsbGVkJzogJ1xcdWU0MzknLFxyXG5cdCdtaW51cy1maWxsZWQnOiAnXFx1ZTQ0MCcsXHJcblx0J2NpcmNsZS1maWxsZWQnOiAnXFx1ZTQ0MScsXHJcblx0J2NoZWNrYm94LWZpbGxlZCc6ICdcXHVlNDQyJyxcclxuXHQnY2xvc2VlbXB0eSc6ICdcXHVlNDYwJyxcclxuXHQncmVmcmVzaGVtcHR5JzogJ1xcdWU0NjEnLFxyXG5cdCdyZWxvYWQnOiAnXFx1ZTQ2MicsXHJcblx0J3N0YXJoYWxmJzogJ1xcdWU0NjMnLFxyXG5cdCdzcGlubmVyJzogJ1xcdWU0NjQnLFxyXG5cdCdzcGlubmVyLWN5Y2xlJzogJ1xcdWU0NjUnLFxyXG5cdCdzZWFyY2gnOiAnXFx1ZTQ2NicsXHJcblx0J3BsdXNlbXB0eSc6ICdcXHVlNDY4JyxcclxuXHQnZm9yd2FyZCc6ICdcXHVlNDcwJyxcclxuXHQnYmFjayc6ICdcXHVlNDcxJyxcclxuXHQnbGVmdC1uYXYnOiAnXFx1ZTQ3MScsXHJcblx0J2NoZWNrbWFya2VtcHR5JzogJ1xcdWU0NzInLFxyXG5cdCdob21lJzogJ1xcdWU1MDAnLFxyXG5cdCduYXZpZ2F0ZSc6ICdcXHVlNTAxJyxcclxuXHQnZ2Vhcic6ICdcXHVlNTAyJyxcclxuXHQncGFwZXJwbGFuZSc6ICdcXHVlNTAzJyxcclxuXHQnaW5mbyc6ICdcXHVlNTA0JyxcclxuXHQnaGVscCc6ICdcXHVlNTA1JyxcclxuXHQnbG9ja2VkJzogJ1xcdWU1MDYnLFxyXG5cdCdtb3JlJzogJ1xcdWU1MDcnLFxyXG5cdCdmbGFnJzogJ1xcdWU1MDgnLFxyXG5cdCdob21lLWZpbGxlZCc6ICdcXHVlNTMwJyxcclxuXHQnZ2Vhci1maWxsZWQnOiAnXFx1ZTUzMicsXHJcblx0J2luZm8tZmlsbGVkJzogJ1xcdWU1MzQnLFxyXG5cdCdoZWxwLWZpbGxlZCc6ICdcXHVlNTM1JyxcclxuXHQnbW9yZS1maWxsZWQnOiAnXFx1ZTUzNycsXHJcblx0J3NldHRpbmdzJzogJ1xcdWU1NjAnLFxyXG5cdCdsaXN0JzogJ1xcdWU1NjInLFxyXG5cdCdiYXJzJzogJ1xcdWU1NjMnLFxyXG5cdCdsb29wJzogJ1xcdWU1NjUnLFxyXG5cdCdwYXBlcmNsaXAnOiAnXFx1ZTU2NycsXHJcblx0J2V5ZSc6ICdcXHVlNTY4JyxcclxuXHQnYXJyb3d1cCc6ICdcXHVlNTgwJyxcclxuXHQnYXJyb3dkb3duJzogJ1xcdWU1ODEnLFxyXG5cdCdhcnJvd2xlZnQnOiAnXFx1ZTU4MicsXHJcblx0J2Fycm93cmlnaHQnOiAnXFx1ZTU4MycsXHJcblx0J2Fycm93dGhpbnVwJzogJ1xcdWU1ODQnLFxyXG5cdCdhcnJvd3RoaW5kb3duJzogJ1xcdWU1ODUnLFxyXG5cdCdhcnJvd3RoaW5sZWZ0JzogJ1xcdWU1ODYnLFxyXG5cdCdhcnJvd3RoaW5yaWdodCc6ICdcXHVlNTg3JyxcclxuXHQncHVsbGRvd24nOiAnXFx1ZTU4OCcsXHJcblx0J2Nsb3NlZmlsbCc6ICdcXHVlNTg5JyxcclxuXHQnc291bmQnOiAnXFx1ZTU5MCcsXHJcblx0J3NjYW4nOiAnXFx1ZTYxMidcclxufVxyXG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMC0xIS4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0wLTIhLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTAtMyEuLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy92dWUtbG9hZGVyL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktaWNvbnMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzU1NWRmNDkmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvd2VicGFjay11bmktbnZ1ZS1sb2FkZXIvbGliL3N0eWxlLmpzIS4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0wLTEhLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTAtMiEuLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMC0zIS4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3Z1ZS1sb2FkZXIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VuaS1pY29ucy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03NTU1ZGY0OSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInVuaS1pY29uc1wiOiB7XG4gICAgXCJmb250RmFtaWx5XCI6IFwidW5paWNvbnNcIixcbiAgICBcInRleHREZWNvcmF0aW9uXCI6IFwibm9uZVwiLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCJcbiAgfVxufSIsImZ1bmN0aW9uIGluaXRVbmkoKSB7XHJcblxyXG4gICAgdmFyIGlzRm4gPSBmdW5jdGlvbiBpc0ZuKHYpIHtcclxuICAgICAgICByZXR1cm4gdHlwZW9mIHYgPT09ICdmdW5jdGlvbic7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBoYW5kbGVQcm9taXNlID0gZnVuY3Rpb24gaGFuZGxlUHJvbWlzZShwcm9taXNlKSB7XHJcbiAgICAgICAgcmV0dXJuIHByb21pc2UudGhlbihmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbbnVsbCwgZGF0YV07XHJcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbZXJyXTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIFJFR0VYID0gL15cXCR8Xm9ufF5jcmVhdGV8U3luYyR8TWFuYWdlciR8XnBhdXNlLztcclxuICAgIHZhciBBUElfTk9STUFMX0xJU1QgPSBbJ29zJywgJ2dldEN1cnJlbnRTdWJOVnVlJywgJ2dldFN1Yk5WdWVCeUlkJywgJ3N0b3BSZWNvcmQnLCAnc3RvcFZvaWNlJyxcclxuICAgICAgICAnc3RvcEJhY2tncm91bmRBdWRpbycsICdzdG9wUHVsbERvd25SZWZyZXNoJywgJ2hpZGVLZXlib2FyZCcsICdoaWRlVG9hc3QnLCAnaGlkZUxvYWRpbmcnLFxyXG4gICAgICAgICdzaG93TmF2aWdhdGlvbkJhckxvYWRpbmcnLCAnaGlkZU5hdmlnYXRpb25CYXJMb2FkaW5nJywgJ2NhbklVc2UnLCAnbmF2aWdhdGVCYWNrJywgJ2Nsb3NlU29ja2V0JyxcclxuICAgICAgICAncGFnZVNjcm9sbFRvJywgJ2RyYXdDYW52YXMnXHJcbiAgICBdO1xyXG5cclxuICAgIHZhciBzaG91bGRQcm9taXNlID0gZnVuY3Rpb24gc2hvdWxkUHJvbWlzZShuYW1lKSB7XHJcbiAgICAgICAgaWYgKFJFR0VYLnRlc3QobmFtZSkgJiYgbmFtZSAhPT0gJ2NyZWF0ZUJMRUNvbm5lY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKH5BUElfTk9STUFMX0xJU1QuaW5kZXhPZihuYW1lKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgcHJvbWlzaWZ5ID0gZnVuY3Rpb24gcHJvbWlzaWZ5KGFwaSkge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHBhcmFtcyA9IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcclxuICAgICAgICAgICAgICAgIHBhcmFtc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpc0ZuKG9wdGlvbnMuc3VjY2VzcykgfHwgaXNGbihvcHRpb25zLmZhaWwpIHx8IGlzRm4ob3B0aW9ucy5jb21wbGV0ZSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhcGkuYXBwbHkodW5kZWZpbmVkLCBbb3B0aW9uc10uY29uY2F0KHBhcmFtcykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBoYW5kbGVQcm9taXNlKG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgICAgICAgICAgYXBpLmFwcGx5KHVuZGVmaW5lZCwgW09iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXNvbHZlLFxyXG4gICAgICAgICAgICAgICAgICAgIGZhaWw6IHJlamVjdFxyXG4gICAgICAgICAgICAgICAgfSldLmNvbmNhdChwYXJhbXMpKTtcclxuICAgICAgICAgICAgICAgIC8qIGVzbGludC1kaXNhYmxlIG5vLWV4dGVuZC1uYXRpdmUgKi9cclxuICAgICAgICAgICAgICAgIFByb21pc2UucHJvdG90eXBlLmZpbmFsbHkgPSBmdW5jdGlvbihjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwcm9taXNlID0gdGhpcy5jb25zdHJ1Y3RvcjtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbihmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24ocmVhc29uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbihmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHJlYXNvbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIG9uTWVzc2FnZUNhbGxiYWNrcyA9IFtdO1xyXG5cclxuICAgIHZhciBvcmlnaW4gPSB2b2lkIDA7XHJcblxyXG4gICAgZnVuY3Rpb24gb25TdWJOVnVlTWVzc2FnZShkYXRhKSB7XHJcbiAgICAgICAgb25NZXNzYWdlQ2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKHtcclxuICAgICAgICAgICAgICAgIG9yaWdpbjogb3JpZ2luLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogZGF0YVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgd2Vidmlld0lkID0gd2VleFBsdXMud2Vidmlldy5jdXJyZW50V2VidmlldygpLmlkO1xyXG5cclxuICAgIHZhciBjaGFubmVsID0gbmV3IEJyb2FkY2FzdENoYW5uZWwoJ1VOSS1BUFAtU1VCTlZVRScpO1xyXG4gICAgY2hhbm5lbC5vbm1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgIGlmIChldmVudC5kYXRhLnRvID09PSB3ZWJ2aWV3SWQpIHtcclxuICAgICAgICAgICAgb25TdWJOVnVlTWVzc2FnZShldmVudC5kYXRhLmRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gd3JhcHBlcih3ZWJ2aWV3KSB7XHJcbiAgICAgICAgd2Vidmlldy4kcHJvY2Vzc2VkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdmFyIGN1cnJlbnRXZWJ2aWV3SWQgPSB3ZWV4UGx1cy53ZWJ2aWV3LmN1cnJlbnRXZWJ2aWV3KCkuaWQ7XHJcbiAgICAgICAgdmFyIGlzUG9wdXBOVnVlID0gY3VycmVudFdlYnZpZXdJZCA9PT0gd2Vidmlldy5pZDtcclxuXHJcbiAgICAgICAgdmFyIGhvc3ROVnVlSWQgPSB3ZWJ2aWV3Ll9fdW5pYXBwX29yaWdpbl90eXBlID09PSAndW5pTlZpZXcnICYmIHdlYnZpZXcuX191bmlhcHBfb3JpZ2luX2lkO1xyXG4gICAgICAgIHZhciBwb3B1cE5WdWVJZCA9IHdlYnZpZXcuaWQ7XHJcblxyXG4gICAgICAgIHdlYnZpZXcucG9zdE1lc3NhZ2UgPSBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgIGlmIChob3N0TlZ1ZUlkKSB7XHJcbiAgICAgICAgICAgICAgICBjaGFubmVsLnBvc3RNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvOiBpc1BvcHVwTlZ1ZSA/IGhvc3ROVnVlSWQgOiBwb3B1cE5WdWVJZFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwb3N0TWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1VuaUFwcFN1Yk5WdWUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB3ZWJ2aWV3Lm9uTWVzc2FnZSA9IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIG9uTWVzc2FnZUNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAoIXdlYnZpZXcuX191bmlhcHBfbWFza19pZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9yaWdpbiA9IHdlYnZpZXcuX191bmlhcHBfaG9zdDtcclxuXHJcbiAgICAgICAgdmFyIG1hc2tDb2xvciA9IHdlYnZpZXcuX191bmlhcHBfbWFzaztcclxuXHJcbiAgICAgICAgdmFyIG1hc2tXZWJ2aWV3ID0gd2VleFBsdXMud2Vidmlldy5nZXRXZWJ2aWV3QnlJZCh3ZWJ2aWV3Ll9fdW5pYXBwX21hc2tfaWQpO1xyXG4gICAgICAgIG1hc2tXZWJ2aWV3ID0gbWFza1dlYnZpZXcucGFyZW50KCkgfHwgbWFza1dlYnZpZXc7Ly/lho3mrKHmo4DmtYvniLZcclxuICAgICAgICB2YXIgb2xkU2hvdyA9IHdlYnZpZXcuc2hvdztcclxuICAgICAgICB2YXIgb2xkSGlkZSA9IHdlYnZpZXcuaGlkZTtcclxuICAgICAgICB2YXIgb2xkQ2xvc2UgPSB3ZWJ2aWV3LmNsb3NlO1xyXG5cclxuICAgICAgICB2YXIgc2hvd01hc2sgPSBmdW5jdGlvbiBzaG93TWFzaygpIHtcclxuICAgICAgICAgICAgbWFza1dlYnZpZXcuc2V0U3R5bGUoe1xyXG4gICAgICAgICAgICAgICAgbWFzazogbWFza0NvbG9yXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdmFyIGNsb3NlTWFzayA9IGZ1bmN0aW9uIGNsb3NlTWFzaygpIHtcclxuICAgICAgICAgICAgbWFza1dlYnZpZXcuc2V0U3R5bGUoe1xyXG4gICAgICAgICAgICAgICAgbWFzazogJ25vbmUnXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgd2Vidmlldy5zaG93ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHNob3dNYXNrKCk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xyXG4gICAgICAgICAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG9sZFNob3cuYXBwbHkod2VidmlldywgYXJncyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB3ZWJ2aWV3LmhpZGUgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY2xvc2VNYXNrKCk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xyXG4gICAgICAgICAgICAgICAgYXJnc1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gb2xkSGlkZS5hcHBseSh3ZWJ2aWV3LCBhcmdzKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHdlYnZpZXcuY2xvc2UgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgY2xvc2VNYXNrKCk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBfbGVuMyA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuMyksIF9rZXkzID0gMDsgX2tleTMgPCBfbGVuMzsgX2tleTMrKykge1xyXG4gICAgICAgICAgICAgICAgYXJnc1tfa2V5M10gPSBhcmd1bWVudHNbX2tleTNdO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gb2xkQ2xvc2UuYXBwbHkod2VidmlldywgYXJncyk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRTdWJOVnVlQnlJZChpZCkge1xyXG4gICAgICAgIHZhciB3ZWJ2aWV3ID0gd2VleFBsdXMud2Vidmlldy5nZXRXZWJ2aWV3QnlJZChpZCk7XHJcbiAgICAgICAgaWYgKHdlYnZpZXcgJiYgIXdlYnZpZXcuJHByb2Nlc3NlZCkge1xyXG4gICAgICAgICAgICB3cmFwcGVyKHdlYnZpZXcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gd2VidmlldztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRDdXJyZW50U3ViTlZ1ZSgpIHtcclxuICAgICAgICByZXR1cm4gZ2V0U3ViTlZ1ZUJ5SWQod2VleFBsdXMud2Vidmlldy5jdXJyZW50V2VidmlldygpLmlkKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgcGx1cyA9IHdlZXgucmVxdWlyZU1vZHVsZSgncGx1cycpO1xyXG4gICAgdmFyIGdsb2JhbEV2ZW50ID0gd2VleC5yZXF1aXJlTW9kdWxlKCdnbG9iYWxFdmVudCcpO1xyXG5cclxuICAgIHZhciBpZCA9IDA7XHJcbiAgICB2YXIgY2FsbGJhY2tzID0ge307XHJcblxyXG4gICAgdmFyIFVOSUFQUF9TRVJWSUNFX05WVUVfSUQgPSAnX191bmlhcHBfX3NlcnZpY2UnO1xyXG5cclxuICAgIGdsb2JhbEV2ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3BsdXNNZXNzYWdlJywgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGlmIChlLmRhdGEudHlwZSA9PT0gJ1VuaUFwcEpzQXBpJykge1xyXG4gICAgICAgICAgICBpbnZva2UoZS5kYXRhLmlkLCBlLmRhdGEuZGF0YSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChlLmRhdGEudHlwZSA9PT0gJ1VuaUFwcFN1Yk5WdWUnKSB7XHJcbiAgICAgICAgICAgIG9uU3ViTlZ1ZU1lc3NhZ2UoZS5kYXRhLmRhdGEsIGUuZGF0YS5vcHRpb25zKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGUuZGF0YS50eXBlID09PSAnb25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwJykge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9uTmF2aWdhdGlvbkJhckJ1dHRvblRhcENhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICBvbk5hdmlnYXRpb25CYXJCdXR0b25UYXBDYWxsYmFjayhlLmRhdGEuZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGUuZGF0YS50eXBlID09PSAnb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkJykge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZENhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWRDYWxsYmFjayhlLmRhdGEuZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGUuZGF0YS50eXBlID09PSAnb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWQnKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWRDYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWRDYWxsYmFjayhlLmRhdGEuZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGUuZGF0YS50eXBlID09PSAnb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkJykge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZENhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWRDYWxsYmFjayhlLmRhdGEuZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB2YXIgY3JlYXRlQ2FsbGJhY2sgPSBmdW5jdGlvbiBjcmVhdGVDYWxsYmFjayhhcmdzLCB0eXBlKSB7XHJcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gZnVuY3Rpb24gY2FsbGJhY2socmVzKSB7XHJcbiAgICAgICAgICAgIGlmIChpc0ZuKGFyZ3MpKSB7XHJcbiAgICAgICAgICAgICAgICBhcmdzKHJlcyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYXJncykge1xyXG4gICAgICAgICAgICAgICAgaWYgKH5yZXMuZXJyTXNnLmluZGV4T2YoJzpvaycpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNGbihhcmdzLnN1Y2Nlc3MpICYmIGFyZ3Muc3VjY2VzcyhyZXMpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh+cmVzLmVyck1zZy5pbmRleE9mKCc6ZmFpbCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNGbihhcmdzLmZhaWwpICYmIGFyZ3MuZmFpbChyZXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaXNGbihhcmdzLmNvbXBsZXRlKSAmJiBhcmdzLmNvbXBsZXRlKHJlcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChpc0ZuKGFyZ3MpIHx8IGFyZ3MgJiYgaXNGbihhcmdzLmNhbGxiYWNrKSkge1xyXG4gICAgICAgICAgICBjYWxsYmFjay5rZWVwQWxpdmUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY2FsbGJhY2s7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBpbnZva2UgPSBmdW5jdGlvbiBpbnZva2UoY2FsbGJhY2tJZCwgZGF0YSkge1xyXG4gICAgICAgIHZhciBjYWxsYmFjayA9IGNhbGxiYWNrc1tjYWxsYmFja0lkXTtcclxuICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgY2FsbGJhY2soZGF0YSk7XHJcbiAgICAgICAgICAgIGlmICghY2FsbGJhY2sua2VlcEFsaXZlKSB7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgY2FsbGJhY2tzW2NhbGxiYWNrSWRdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignY2FsbGJhY2tbJyArIGNhbGxiYWNrSWQgKyAnXSBpcyB1bmRlZmluZWQnKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBwdWJsaXNoID0gZnVuY3Rpb24gcHVibGlzaChfcmVmKSB7XHJcbiAgICAgICAgdmFyIGlkID0gX3JlZi5pZCxcclxuICAgICAgICAgICAgdHlwZSA9IF9yZWYudHlwZSxcclxuICAgICAgICAgICAgcGFyYW1zID0gX3JlZi5wYXJhbXM7XHJcblxyXG4gICAgICAgIGNhbGxiYWNrc1tpZF0gPSBjcmVhdGVDYWxsYmFjayhwYXJhbXMsIHR5cGUpO1xyXG4gICAgICAgIHBsdXMucG9zdE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICBpZDogaWQsXHJcbiAgICAgICAgICAgIHR5cGU6IHR5cGUsXHJcbiAgICAgICAgICAgIHBhcmFtczogcGFyYW1zXHJcbiAgICAgICAgfSwgVU5JQVBQX1NFUlZJQ0VfTlZVRV9JRCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIHBvc3RNZXNzYWdlKGRhdGEpIHtcclxuICAgICAgICBwbHVzLnBvc3RNZXNzYWdlKGRhdGEsIFVOSUFQUF9TRVJWSUNFX05WVUVfSUQpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBjcmVhdGVQdWJsaXNoID0gZnVuY3Rpb24gY3JlYXRlUHVibGlzaChuYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGFyZ3MpIHtcclxuICAgICAgICAgICAgcHVibGlzaCh7XHJcbiAgICAgICAgICAgICAgICBpZDogaWQrKyxcclxuICAgICAgICAgICAgICAgIHR5cGU6IG5hbWUsXHJcbiAgICAgICAgICAgICAgICBwYXJhbXM6IGFyZ3NcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIG9uTmF2aWdhdGlvbkJhckJ1dHRvblRhcENhbGxiYWNrID0gdm9pZCAwO1xyXG4gICAgdmFyIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2hhbmdlZENhbGxiYWNrID0gdm9pZCAwO1xyXG4gICAgdmFyIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkQ2FsbGJhY2sgPSB2b2lkIDA7XHJcbiAgICB2YXIgb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkQ2FsbGJhY2sgPSB2b2lkIDA7XHJcblxyXG4gICAgZnVuY3Rpb24gb25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgb25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwQ2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWQoY2FsbGJhY2spIHtcclxuICAgICAgICBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWRDYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWRDYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZChjYWxsYmFjaykge1xyXG4gICAgICAgIG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZENhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVxdWlyZU5hdGl2ZVBsdWdpbihwbHVnaW5OYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHdlZXgucmVxdWlyZU1vZHVsZShwbHVnaW5OYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgZG9tID0gd2VleC5yZXF1aXJlTW9kdWxlKCdkb20nKTtcclxuXHJcbiAgICBmdW5jdGlvbiBsb2FkRm9udEZhY2UoX3JlZikge1xyXG4gICAgICAgIHZhciBmYW1pbHkgPSBfcmVmLmZhbWlseSxcclxuICAgICAgICAgICAgc291cmNlID0gX3JlZi5zb3VyY2UsXHJcbiAgICAgICAgICAgIGRlc2MgPSBfcmVmLmRlc2MsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSBfcmVmLnN1Y2Nlc3MsXHJcbiAgICAgICAgICAgIGZhaWwgPSBfcmVmLmZhaWwsXHJcbiAgICAgICAgICAgIGNvbXBsZXRlID0gX3JlZi5jb21wbGV0ZTtcclxuXHJcbiAgICAgICAgZG9tLmFkZFJ1bGUoJ2ZvbnRGYWNlJywge1xyXG4gICAgICAgICAgICBmb250RmFtaWx5OiBmYW1pbHksXHJcbiAgICAgICAgICAgIHNyYzogc291cmNlLnJlcGxhY2UoL1wiL2csICdcXCcnKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZhciByZXMgPSB7XHJcbiAgICAgICAgICAgIGVyck1zZzogJ2xvYWRGb250RmFjZTpvaycsXHJcbiAgICAgICAgICAgIHN0YXR1czogJ2xvYWRlZCdcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlzRm4oc3VjY2VzcykgJiYgc3VjY2VzcyhyZXMpO1xyXG4gICAgICAgIGlzRm4oY29tcGxldGUpICYmIGNvbXBsZXRlKHJlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGdsb2JhbEV2ZW50JDEgPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ2dsb2JhbEV2ZW50Jyk7XHJcblxyXG4gICAgdmFyIGNhbGxiYWNrcyQxID0gW107XHJcblxyXG4gICAgZ2xvYmFsRXZlbnQkMS5hZGRFdmVudExpc3RlbmVyKCdwbHVzTWVzc2FnZScsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBpZiAoZS5kYXRhLnR5cGUgPT09ICdVbmlBcHBSZWFkeScpIHtcclxuICAgICAgICAgICAgcmVhZHkuaXNVbmlBcHBSZWFkeSA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmIChjYWxsYmFja3MkMS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrcyQxLmZvckVhY2goZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2tzJDEgPSBbXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIHJlYWR5KGNhbGxiYWNrKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1VuaUFwcFJlYWR5KSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2tzJDEucHVzaChjYWxsYmFjayk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uKG9iaikge1xyXG4gICAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xyXG4gICAgfSA6IGZ1bmN0aW9uKG9iaikge1xyXG4gICAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/XHJcbiAgICAgICAgICAgIFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgc3RyZWFtID0gd2VleC5yZXF1aXJlTW9kdWxlKCdzdHJlYW0nKTtcclxuXHJcbiAgICAvLyBsZXQgcmVxdWVzdFRhc2tJZCA9IDBcclxuXHJcbiAgICB2YXIgTUVUSE9EX0dFVCA9ICdHRVQnO1xyXG4gICAgdmFyIE1FVEhPRF9QT1NUID0gJ1BPU1QnO1xyXG4gICAgdmFyIENPTlRFTlRfVFlQRV9KU09OID0gJ2FwcGxpY2F0aW9uL2pzb24nO1xyXG4gICAgdmFyIENPTlRFTlRfVFlQRV9GT1JNID0gJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCc7XHJcblxyXG4gICAgdmFyIHNlcmlhbGl6ZSA9IGZ1bmN0aW9uIHNlcmlhbGl6ZShkYXRhKSB7XHJcbiAgICAgICAgdmFyIG1ldGhvZCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogTUVUSE9EX0dFVDtcclxuICAgICAgICB2YXIgY29udGVudFR5cGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IENPTlRFTlRfVFlQRV9GT1JNO1xyXG5cclxuICAgICAgICBpZiAoKHR5cGVvZiBkYXRhID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihkYXRhKSkgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIGlmIChtZXRob2QudG9VcHBlckNhc2UoKSA9PT0gTUVUSE9EX1BPU1QgJiYgY29udGVudFR5cGUudG9Mb3dlckNhc2UoKSA9PT0gQ09OVEVOVF9UWVBFX0pTT04pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShkYXRhKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3Qua2V5cyhkYXRhKS5tYXAoZnVuY3Rpb24oa2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChrZXkpICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGRhdGFba2V5XSk7XHJcbiAgICAgICAgICAgICAgICB9KS5qb2luKCcmJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIHJlcXVlc3QoX3JlZikge1xyXG4gICAgICAgIHZhciB1cmwgPSBfcmVmLnVybCxcclxuICAgICAgICAgICAgZGF0YSA9IF9yZWYuZGF0YSxcclxuICAgICAgICAgICAgaGVhZGVyID0gX3JlZi5oZWFkZXIsXHJcbiAgICAgICAgICAgIF9yZWYkbWV0aG9kID0gX3JlZi5tZXRob2QsXHJcbiAgICAgICAgICAgIG1ldGhvZCA9IF9yZWYkbWV0aG9kID09PSB1bmRlZmluZWQgPyAnR0VUJyA6IF9yZWYkbWV0aG9kLFxyXG4gICAgICAgICAgICBfcmVmJGRhdGFUeXBlID0gX3JlZi5kYXRhVHlwZSxcclxuICAgICAgICAgICAgZGF0YVR5cGUgPSBfcmVmJGRhdGFUeXBlID09PSB1bmRlZmluZWQgPyAnanNvbicgOiBfcmVmJGRhdGFUeXBlLFxyXG4gICAgICAgICAgICByZXNwb25zZVR5cGUgPSBfcmVmLnJlc3BvbnNlVHlwZSxcclxuICAgICAgICAgICAgc3VjY2VzcyA9IF9yZWYuc3VjY2VzcyxcclxuICAgICAgICAgICAgZmFpbCA9IF9yZWYuZmFpbCxcclxuICAgICAgICAgICAgY29tcGxldGUgPSBfcmVmLmNvbXBsZXRlO1xyXG5cclxuICAgICAgICAvLyByZXF1ZXN0VGFza0lkKytcclxuICAgICAgICB2YXIgYWJvcnRlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICB2YXIgaGFzQ29udGVudFR5cGUgPSBmYWxzZTtcclxuICAgICAgICB2YXIgaGVhZGVycyA9IHt9O1xyXG4gICAgICAgIGlmIChoZWFkZXIpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgbmFtZSBpbiBoZWFkZXIpIHtcclxuICAgICAgICAgICAgICAgIGlmICghaGFzQ29udGVudFR5cGUgJiYgbmFtZS50b0xvd2VyQ2FzZSgpID09PSAnY29udGVudC10eXBlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGhhc0NvbnRlbnRUeXBlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzWydDb250ZW50LVR5cGUnXSA9IGhlYWRlcltuYW1lXTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyc1tuYW1lXSA9IGhlYWRlcltuYW1lXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobWV0aG9kID09PSBNRVRIT0RfR0VUICYmIGRhdGEpIHtcclxuICAgICAgICAgICAgdXJsID0gdXJsICsgKH51cmwuaW5kZXhPZignPycpID8gdXJsLnN1YnN0cigtMSkgPT09ICcmJyB8fCB1cmwuc3Vic3RyKC0xKSA9PT0gJz8nID8gJycgOiAnJicgOiAnPycpICtcclxuICAgICAgICAgICAgICAgIHNlcmlhbGl6ZShkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3RyZWFtLmZldGNoKHtcclxuICAgICAgICAgICAgdXJsOiB1cmwsXHJcbiAgICAgICAgICAgIG1ldGhvZDogbWV0aG9kLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzLFxyXG4gICAgICAgICAgICB0eXBlOiBkYXRhVHlwZSA9PT0gJ2pzb24nID8gJ2pzb24nIDogJ3RleHQnLFxyXG4gICAgICAgICAgICBib2R5OiBtZXRob2QgIT09IE1FVEhPRF9HRVQgPyBzZXJpYWxpemUoZGF0YSwgbWV0aG9kLCBoZWFkZXJzWydDb250ZW50LVR5cGUnXSkgOiAnJ1xyXG4gICAgICAgIH0sIGZ1bmN0aW9uKF9yZWYyKSB7XHJcbiAgICAgICAgICAgIHZhciBzdGF0dXMgPSBfcmVmMi5zdGF0dXMsXHJcbiAgICAgICAgICAgICAgICBvayA9IF9yZWYyLm9rLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzVGV4dCA9IF9yZWYyLnN0YXR1c1RleHQsXHJcbiAgICAgICAgICAgICAgICBkYXRhID0gX3JlZjIuZGF0YSxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnMgPSBfcmVmMi5oZWFkZXJzO1xyXG5cclxuICAgICAgICAgICAgdmFyIHJldCA9IHt9O1xyXG4gICAgICAgICAgICBpZiAoIXN0YXR1cyB8fCBzdGF0dXMgPT09IC0xIHx8IGFib3J0ZWQpIHtcclxuICAgICAgICAgICAgICAgIHJldC5lcnJNc2cgPSAncmVxdWVzdDpmYWlsJztcclxuICAgICAgICAgICAgICAgIGlzRm4oZmFpbCkgJiYgZmFpbChyZXQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0LmRhdGEgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgcmV0LnN0YXR1c0NvZGUgPSBzdGF0dXM7XHJcbiAgICAgICAgICAgICAgICByZXQuaGVhZGVyID0gaGVhZGVycztcclxuICAgICAgICAgICAgICAgIGlzRm4oc3VjY2VzcykgJiYgc3VjY2VzcyhyZXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlzRm4oY29tcGxldGUpICYmIGNvbXBsZXRlKHJldCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgYWJvcnQ6IGZ1bmN0aW9uIGFib3J0KCkge1xyXG4gICAgICAgICAgICAgICAgYWJvcnRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBzdG9yYWdlID0gd2VleC5yZXF1aXJlTW9kdWxlKCdwbHVzc3RvcmFnZScpO1xyXG4gICAgdmFyIFVOSUFQUF9TVE9SQUdFX0RBVEFfVFlQRSA9ICdfX1RZUEUnO1xyXG5cclxuICAgIGZ1bmN0aW9uIGdldFN0b3JhZ2UoX3JlZikge1xyXG4gICAgICAgIHZhciBrZXkgPSBfcmVmLmtleSxcclxuICAgICAgICAgICAgZGF0YSA9IF9yZWYuZGF0YSxcclxuICAgICAgICAgICAgc3VjY2VzcyA9IF9yZWYuc3VjY2VzcyxcclxuICAgICAgICAgICAgZmFpbCA9IF9yZWYuZmFpbCxcclxuICAgICAgICAgICAgY29tcGxldGUgPSBfcmVmLmNvbXBsZXRlO1xyXG5cclxuICAgICAgICBzdG9yYWdlLmdldEl0ZW0oa2V5ICsgVU5JQVBQX1NUT1JBR0VfREFUQV9UWVBFLCBmdW5jdGlvbihyZXQpIHtcclxuICAgICAgICAgICAgaWYgKHJldC5yZXN1bHQgPT09ICdzdWNjZXNzJykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGFUeXBlID0gcmV0LmRhdGE7XHJcbiAgICAgICAgICAgICAgICBzdG9yYWdlLmdldEl0ZW0oa2V5LCBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzLnJlc3VsdCA9PT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFUeXBlICYmIHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFUeXBlICE9PSAnU3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IEpTT04ucGFyc2UocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRm4oc3VjY2VzcykgJiYgc3VjY2Vzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyTXNnOiAnZ2V0U3RvcmFnZTpvaycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogcmVzdWx0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5lcnJNc2cgPSAnc2V0U3RvcmFnZTpmYWlsJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRm4oZmFpbCkgJiYgZmFpbChyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzLmVyck1zZyA9ICdzZXRTdG9yYWdlOmZhaWwnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0ZuKGZhaWwpICYmIGZhaWwocmVzKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaXNGbihjb21wbGV0ZSkgJiYgY29tcGxldGUocmVzKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0LmVyck1zZyA9ICdzZXRTdG9yYWdlOmZhaWwnO1xyXG4gICAgICAgICAgICAgICAgaXNGbihmYWlsKSAmJiBmYWlsKHJldCk7XHJcbiAgICAgICAgICAgICAgICBpc0ZuKGNvbXBsZXRlKSAmJiBjb21wbGV0ZShyZXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gc2V0U3RvcmFnZShfcmVmMikge1xyXG4gICAgICAgIHZhciBrZXkgPSBfcmVmMi5rZXksXHJcbiAgICAgICAgICAgIGRhdGEgPSBfcmVmMi5kYXRhLFxyXG4gICAgICAgICAgICBzdWNjZXNzID0gX3JlZjIuc3VjY2VzcyxcclxuICAgICAgICAgICAgZmFpbCA9IF9yZWYyLmZhaWwsXHJcbiAgICAgICAgICAgIGNvbXBsZXRlID0gX3JlZjIuY29tcGxldGU7XHJcblxyXG4gICAgICAgIHZhciBkYXRhVHlwZSA9ICdTdHJpbmcnO1xyXG4gICAgICAgIGlmICgodHlwZW9mIGRhdGEgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKGRhdGEpKSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgZGF0YVR5cGUgPSAnT2JqZWN0JztcclxuICAgICAgICAgICAgZGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzdG9yYWdlLnNldEl0ZW0oa2V5LCBkYXRhLCBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgaWYgKHJlcy5yZXN1bHQgPT09ICdzdWNjZXNzJykge1xyXG4gICAgICAgICAgICAgICAgc3RvcmFnZS5zZXRJdGVtKGtleSArIFVOSUFQUF9TVE9SQUdFX0RBVEFfVFlQRSwgZGF0YVR5cGUsIGZ1bmN0aW9uKHJldCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXQucmVzdWx0ID09PSAnc3VjY2VzcycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNGbihzdWNjZXNzKSAmJiBzdWNjZXNzKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVyck1zZzogJ3NldFN0b3JhZ2U6b2snXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldC5lcnJNc2cgPSAnc2V0U3RvcmFnZTpmYWlsJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNGbihmYWlsKSAmJiBmYWlsKHJldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXMuZXJyTXNnID0gJ3NldFN0b3JhZ2U6ZmFpbCc7XHJcbiAgICAgICAgICAgICAgICBpc0ZuKGZhaWwpICYmIGZhaWwocmVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpc0ZuKGNvbXBsZXRlKSAmJiBjb21wbGV0ZShyZXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbW92ZVN0b3JhZ2UoX3JlZjMpIHtcclxuICAgICAgICB2YXIga2V5ID0gX3JlZjMua2V5LFxyXG4gICAgICAgICAgICBkYXRhID0gX3JlZjMuZGF0YSxcclxuICAgICAgICAgICAgc3VjY2VzcyA9IF9yZWYzLnN1Y2Nlc3MsXHJcbiAgICAgICAgICAgIGZhaWwgPSBfcmVmMy5mYWlsLFxyXG4gICAgICAgICAgICBjb21wbGV0ZSA9IF9yZWYzLmNvbXBsZXRlO1xyXG5cclxuICAgICAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oa2V5LCBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgaWYgKHJlcy5yZXN1bHQgPT09ICdzdWNjZXNzJykge1xyXG4gICAgICAgICAgICAgICAgaXNGbihzdWNjZXNzKSAmJiBzdWNjZXNzKHtcclxuICAgICAgICAgICAgICAgICAgICBlcnJNc2c6ICdyZW1vdmVTdG9yYWdlOm9rJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXMuZXJyTXNnID0gJ3JlbW92ZVN0b3JhZ2U6ZmFpbCc7XHJcbiAgICAgICAgICAgICAgICBpc0ZuKGZhaWwpICYmIGZhaWwocmVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpc0ZuKGNvbXBsZXRlKSAmJiBjb21wbGV0ZShyZXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHN0b3JhZ2UucmVtb3ZlSXRlbShrZXkgKyBVTklBUFBfU1RPUkFHRV9EQVRBX1RZUEUpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNsZWFyU3RvcmFnZShfcmVmNCkge1xyXG4gICAgICAgIHZhciBrZXkgPSBfcmVmNC5rZXksXHJcbiAgICAgICAgICAgIGRhdGEgPSBfcmVmNC5kYXRhLFxyXG4gICAgICAgICAgICBzdWNjZXNzID0gX3JlZjQuc3VjY2VzcyxcclxuICAgICAgICAgICAgZmFpbCA9IF9yZWY0LmZhaWwsXHJcbiAgICAgICAgICAgIGNvbXBsZXRlID0gX3JlZjQuY29tcGxldGU7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGNsaXBib2FyZCA9IHdlZXgucmVxdWlyZU1vZHVsZSgnY2xpcGJvYXJkJyk7XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0Q2xpcGJvYXJkRGF0YShfcmVmKSB7XHJcbiAgICAgICAgdmFyIHN1Y2Nlc3MgPSBfcmVmLnN1Y2Nlc3MsXHJcbiAgICAgICAgICAgIGZhaWwgPSBfcmVmLmZhaWwsXHJcbiAgICAgICAgICAgIGNvbXBsZXRlID0gX3JlZi5jb21wbGV0ZTtcclxuXHJcbiAgICAgICAgY2xpcGJvYXJkLmdldFN0cmluZyhmdW5jdGlvbihfcmVmMikge1xyXG4gICAgICAgICAgICB2YXIgZGF0YSA9IF9yZWYyLmRhdGE7XHJcblxyXG4gICAgICAgICAgICB2YXIgcmVzID0ge1xyXG4gICAgICAgICAgICAgICAgZXJyTXNnOiAnZ2V0Q2xpcGJvYXJkRGF0YTpvaycsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGlzRm4oc3VjY2VzcykgJiYgc3VjY2VzcyhyZXMpO1xyXG4gICAgICAgICAgICBpc0ZuKGNvbXBsZXRlKSAmJiBjb21wbGV0ZShyZXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldENsaXBib2FyZERhdGEoX3JlZjMpIHtcclxuICAgICAgICB2YXIgZGF0YSA9IF9yZWYzLmRhdGEsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3MgPSBfcmVmMy5zdWNjZXNzLFxyXG4gICAgICAgICAgICBmYWlsID0gX3JlZjMuZmFpbCxcclxuICAgICAgICAgICAgY29tcGxldGUgPSBfcmVmMy5jb21wbGV0ZTtcclxuXHJcbiAgICAgICAgdmFyIHJlcyA9IHtcclxuICAgICAgICAgICAgZXJyTXNnOiAnc2V0Q2xpcGJvYXJkRGF0YTpvaydcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNsaXBib2FyZC5zZXRTdHJpbmcoZGF0YSk7XHJcbiAgICAgICAgaXNGbihzdWNjZXNzKSAmJiBzdWNjZXNzKHJlcyk7XHJcbiAgICAgICAgaXNGbihjb21wbGV0ZSkgJiYgY29tcGxldGUocmVzKTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgZ2V0RW1pdHRlciA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgZ2V0VW5pRW1pdHRlciA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bmRlZiAqL1xyXG4gICAgICAgICAgICByZXR1cm4gZ2V0VW5pRW1pdHRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIEVtaXR0ZXIgPSB7XHJcbiAgICAgICAgICAgICRvbjogZnVuY3Rpb24gJG9uKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCd1bmkuJG9uIGZhaWxlZCcpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAkb2ZmOiBmdW5jdGlvbiAkb2ZmKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCd1bmkuJG9mZiBmYWlsZWQnKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJG9uY2U6IGZ1bmN0aW9uICRvbmNlKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCd1bmkuJG9uY2UgZmFpbGVkJyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICRlbWl0OiBmdW5jdGlvbiAkZW1pdCgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybigndW5pLiRlbWl0IGZhaWxlZCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gZ2V0VW5pRW1pdHRlcigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIEVtaXR0ZXI7XHJcbiAgICAgICAgfTtcclxuICAgIH0oKTtcclxuXHJcbiAgICBmdW5jdGlvbiBhcHBseShjdHgsIG1ldGhvZCwgYXJncykge1xyXG4gICAgICAgIHJldHVybiBjdHhbbWV0aG9kXS5hcHBseShjdHgsIGFyZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uICRvbigpIHtcclxuICAgICAgICByZXR1cm4gYXBwbHkoZ2V0RW1pdHRlcigpLCAnJG9uJywgW10uY29uY2F0KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiAkb2ZmKCkge1xyXG4gICAgICAgIHJldHVybiBhcHBseShnZXRFbWl0dGVyKCksICckb2ZmJywgW10uY29uY2F0KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiAkb25jZSgpIHtcclxuICAgICAgICByZXR1cm4gYXBwbHkoZ2V0RW1pdHRlcigpLCAnJG9uY2UnLCBbXS5jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uICRlbWl0KCkge1xyXG4gICAgICAgIHJldHVybiBhcHBseShnZXRFbWl0dGVyKCksICckZW1pdCcsIFtdLmNvbmNhdChBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKSk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICB2YXIgYXBpID0gLyojX19QVVJFX18qLyBPYmplY3QuZnJlZXplKHtcclxuICAgICAgICBsb2FkRm9udEZhY2U6IGxvYWRGb250RmFjZSxcclxuICAgICAgICByZWFkeTogcmVhZHksXHJcbiAgICAgICAgcmVxdWVzdDogcmVxdWVzdCxcclxuICAgICAgICBnZXRTdG9yYWdlOiBnZXRTdG9yYWdlLFxyXG4gICAgICAgIHNldFN0b3JhZ2U6IHNldFN0b3JhZ2UsXHJcbiAgICAgICAgcmVtb3ZlU3RvcmFnZTogcmVtb3ZlU3RvcmFnZSxcclxuICAgICAgICBjbGVhclN0b3JhZ2U6IGNsZWFyU3RvcmFnZSxcclxuICAgICAgICBnZXRDbGlwYm9hcmREYXRhOiBnZXRDbGlwYm9hcmREYXRhLFxyXG4gICAgICAgIHNldENsaXBib2FyZERhdGE6IHNldENsaXBib2FyZERhdGEsXHJcbiAgICAgICAgb25TdWJOVnVlTWVzc2FnZTogb25TdWJOVnVlTWVzc2FnZSxcclxuICAgICAgICBnZXRTdWJOVnVlQnlJZDogZ2V0U3ViTlZ1ZUJ5SWQsXHJcbiAgICAgICAgZ2V0Q3VycmVudFN1Yk5WdWU6IGdldEN1cnJlbnRTdWJOVnVlLFxyXG4gICAgICAgICRvbjogJG9uLFxyXG4gICAgICAgICRvZmY6ICRvZmYsXHJcbiAgICAgICAgJG9uY2U6ICRvbmNlLFxyXG4gICAgICAgICRlbWl0OiAkZW1pdFxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIHZhciB3eCA9IHtcclxuICAgICAgICB1cGxvYWRGaWxlOiB0cnVlLFxyXG4gICAgICAgIGRvd25sb2FkRmlsZTogdHJ1ZSxcclxuICAgICAgICBjaG9vc2VJbWFnZTogdHJ1ZSxcclxuICAgICAgICBwcmV2aWV3SW1hZ2U6IHRydWUsXHJcbiAgICAgICAgZ2V0SW1hZ2VJbmZvOiB0cnVlLFxyXG4gICAgICAgIHNhdmVJbWFnZVRvUGhvdG9zQWxidW06IHRydWUsXHJcbiAgICAgICAgY2hvb3NlVmlkZW86IHRydWUsXHJcbiAgICAgICAgc2F2ZVZpZGVvVG9QaG90b3NBbGJ1bTogdHJ1ZSxcclxuICAgICAgICBzYXZlRmlsZTogdHJ1ZSxcclxuICAgICAgICBnZXRTYXZlZEZpbGVMaXN0OiB0cnVlLFxyXG4gICAgICAgIGdldFNhdmVkRmlsZUluZm86IHRydWUsXHJcbiAgICAgICAgcmVtb3ZlU2F2ZWRGaWxlOiB0cnVlLFxyXG4gICAgICAgIG9wZW5Eb2N1bWVudDogdHJ1ZSxcclxuICAgICAgICBzZXRTdG9yYWdlOiB0cnVlLFxyXG4gICAgICAgIGdldFN0b3JhZ2U6IHRydWUsXHJcbiAgICAgICAgZ2V0U3RvcmFnZUluZm86IHRydWUsXHJcbiAgICAgICAgcmVtb3ZlU3RvcmFnZTogdHJ1ZSxcclxuICAgICAgICBjbGVhclN0b3JhZ2U6IHRydWUsXHJcbiAgICAgICAgZ2V0TG9jYXRpb246IHRydWUsXHJcbiAgICAgICAgY2hvb3NlTG9jYXRpb246IHRydWUsXHJcbiAgICAgICAgb3BlbkxvY2F0aW9uOiB0cnVlLFxyXG4gICAgICAgIGdldFN5c3RlbUluZm86IHRydWUsXHJcbiAgICAgICAgZ2V0TmV0d29ya1R5cGU6IHRydWUsXHJcbiAgICAgICAgbWFrZVBob25lQ2FsbDogdHJ1ZSxcclxuICAgICAgICBzY2FuQ29kZTogdHJ1ZSxcclxuICAgICAgICBzZXRTY3JlZW5CcmlnaHRuZXNzOiB0cnVlLFxyXG4gICAgICAgIGdldFNjcmVlbkJyaWdodG5lc3M6IHRydWUsXHJcbiAgICAgICAgc2V0S2VlcFNjcmVlbk9uOiB0cnVlLFxyXG4gICAgICAgIHZpYnJhdGVMb25nOiB0cnVlLFxyXG4gICAgICAgIHZpYnJhdGVTaG9ydDogdHJ1ZSxcclxuICAgICAgICBhZGRQaG9uZUNvbnRhY3Q6IHRydWUsXHJcbiAgICAgICAgc2hvd1RvYXN0OiB0cnVlLFxyXG4gICAgICAgIHNob3dMb2FkaW5nOiB0cnVlLFxyXG4gICAgICAgIGhpZGVUb2FzdDogdHJ1ZSxcclxuICAgICAgICBoaWRlTG9hZGluZzogdHJ1ZSxcclxuICAgICAgICBzaG93TW9kYWw6IHRydWUsXHJcbiAgICAgICAgc2hvd0FjdGlvblNoZWV0OiB0cnVlLFxyXG4gICAgICAgIHNldE5hdmlnYXRpb25CYXJUaXRsZTogdHJ1ZSxcclxuICAgICAgICBzZXROYXZpZ2F0aW9uQmFyQ29sb3I6IHRydWUsXHJcbiAgICAgICAgbmF2aWdhdGVUbzogdHJ1ZSxcclxuICAgICAgICByZWRpcmVjdFRvOiB0cnVlLFxyXG4gICAgICAgIHJlTGF1bmNoOiB0cnVlLFxyXG4gICAgICAgIHN3aXRjaFRhYjogdHJ1ZSxcclxuICAgICAgICBuYXZpZ2F0ZUJhY2s6IHRydWUsXHJcbiAgICAgICAgZ2V0UHJvdmlkZXI6IHRydWUsXHJcbiAgICAgICAgbG9naW46IHRydWUsXHJcbiAgICAgICAgZ2V0VXNlckluZm86IHRydWUsXHJcbiAgICAgICAgc2hhcmU6IHRydWUsXHJcbiAgICAgICAgcmVxdWVzdFBheW1lbnQ6IHRydWUsXHJcbiAgICAgICAgc3Vic2NyaWJlUHVzaDogdHJ1ZSxcclxuICAgICAgICB1bnN1YnNjcmliZVB1c2g6IHRydWUsXHJcbiAgICAgICAgb25QdXNoOiB0cnVlLFxyXG4gICAgICAgIG9mZlB1c2g6IHRydWVcclxuICAgIH07XHJcblxyXG4gICAgdmFyIGJhc2VVbmkgPSB7XHJcbiAgICAgICAgb3M6IHtcclxuICAgICAgICAgICAgbnZ1ZTogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdmFyIHVuaSA9IHt9O1xyXG5cclxuICAgIGlmICh0eXBlb2YgUHJveHkgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgdW5pID0gbmV3IFByb3h5KHt9LCB7XHJcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KHRhcmdldCwgbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdvcycpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBudnVlOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChuYW1lID09PSAncG9zdE1lc3NhZ2UnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBvc3RNZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdyZXF1aXJlTmF0aXZlUGx1Z2luJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXF1aXJlTmF0aXZlUGx1Z2luO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdvbk5hdmlnYXRpb25CYXJCdXR0b25UYXAnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9uTmF2aWdhdGlvbkJhckJ1dHRvblRhcDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChuYW1lID09PSAnb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENoYW5nZWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gJ29uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q29uZmlybWVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChuYW1lID09PSAnb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDbGlja2VkJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENsaWNrZWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YXIgbWV0aG9kID0gYXBpW25hbWVdO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFtZXRob2QpIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXRob2QgPSBjcmVhdGVQdWJsaXNoKG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHNob3VsZFByb21pc2UobmFtZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzaWZ5KG1ldGhvZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbWV0aG9kO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIE9iamVjdC5rZXlzKGJhc2VVbmkpLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XHJcbiAgICAgICAgICAgIHVuaVtrZXldID0gYmFzZVVuaVtrZXldO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB1bmkucG9zdE1lc3NhZ2UgPSBwb3N0TWVzc2FnZTtcclxuXHJcbiAgICAgICAgdW5pLnJlcXVpcmVOYXRpdmVQbHVnaW4gPSByZXF1aXJlTmF0aXZlUGx1Z2luO1xyXG5cclxuICAgICAgICB1bmkub25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwID0gb25OYXZpZ2F0aW9uQmFyQnV0dG9uVGFwO1xyXG5cclxuICAgICAgICB1bmkub25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkID0gb25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDaGFuZ2VkO1xyXG5cclxuICAgICAgICB1bmkub25OYXZpZ2F0aW9uQmFyU2VhcmNoSW5wdXRDb25maXJtZWQgPSBvbk5hdmlnYXRpb25CYXJTZWFyY2hJbnB1dENvbmZpcm1lZDtcclxuXHJcbiAgICAgICAgdW5pLm9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZCA9IG9uTmF2aWdhdGlvbkJhclNlYXJjaElucHV0Q2xpY2tlZDtcclxuXHJcbiAgICAgICAgT2JqZWN0LmtleXMod3gpLmZvckVhY2goZnVuY3Rpb24obmFtZSkge1xyXG4gICAgICAgICAgICB2YXIgbWV0aG9kID0gYXBpW25hbWVdO1xyXG4gICAgICAgICAgICBpZiAoIW1ldGhvZCkge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kID0gY3JlYXRlUHVibGlzaChuYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc2hvdWxkUHJvbWlzZShuYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgdW5pW25hbWVdID0gcHJvbWlzaWZ5KG1ldGhvZCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB1bmlbbmFtZV0gPSBtZXRob2Q7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiB1bmk7XHJcbn1cclxuXHJcbnZhciBjcmVhdGVVbmk7XHJcblxyXG5pZiAodHlwZW9mIGdldFVuaSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgY3JlYXRlVW5pID0gZ2V0VW5pO1xyXG59IGVsc2Uge1xyXG4gICAgY3JlYXRlVW5pID0gaW5pdFVuaTtcclxufVxyXG52YXIgd2VleFBsdXMgPSBuZXcgV2VleFBsdXMod2VleCk7XHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVVuaSh3ZWV4LCB3ZWV4UGx1cywgQnJvYWRjYXN0Q2hhbm5lbCk7XHJcbmV4cG9ydCB7XHJcbiAgICB3ZWV4UGx1c1xyXG59O1xyXG4iLCJmdW5jdGlvbiB0eXBvZiAodikge1xyXG4gIHZhciBzID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHYpXHJcbiAgcmV0dXJuIHMuc3Vic3RyaW5nKDgsIHMubGVuZ3RoIC0gMSlcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0TG9nICgpIHtcclxuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcclxuICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV1cclxuICB9XHJcblxyXG4gIHZhciBtc2dzID0gYXJncy5tYXAoZnVuY3Rpb24gKHYpIHtcclxuICAgIHZhciB0eXBlID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHYpXHJcblxyXG4gICAgaWYgKHR5cGUudG9Mb3dlckNhc2UoKSA9PT0gJ1tvYmplY3Qgb2JqZWN0XScpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICB2ID0gJy0tLUJFR0lOOkpTT04tLS0nICsgSlNPTi5zdHJpbmdpZnkodikgKyAnLS0tRU5EOkpTT04tLS0nXHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICB2ID0gJ1tvYmplY3Qgb2JqZWN0XSdcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHYgPT09IG51bGwpIHtcclxuICAgICAgICB2ID0gJy0tLU5VTEwtLS0nXHJcbiAgICAgIH0gZWxzZSBpZiAodiA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdiA9ICctLS1VTkRFRklORUQtLS0nXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmFyIHZUeXBlID0gdHlwb2YodikudG9VcHBlckNhc2UoKVxyXG5cclxuICAgICAgICBpZiAodlR5cGUgPT09ICdOVU1CRVInIHx8IHZUeXBlID09PSAnQk9PTEVBTicpIHtcclxuICAgICAgICAgIHYgPSAnLS0tQkVHSU46JyArIHZUeXBlICsgJy0tLScgKyB2ICsgJy0tLUVORDonICsgdlR5cGUgKyAnLS0tJ1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB2ID0gU3RyaW5nKHYpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHZcclxuICB9KVxyXG4gIHZhciBtc2cgPSAnJ1xyXG5cclxuICBpZiAobXNncy5sZW5ndGggPiAxKSB7XHJcbiAgICB2YXIgbGFzdE1zZyA9IG1zZ3MucG9wKClcclxuICAgIG1zZyA9IG1zZ3Muam9pbignLS0tQ09NTUEtLS0nKVxyXG5cclxuICAgIGlmIChsYXN0TXNnLmluZGV4T2YoJyBhdCAnKSA9PT0gMCkge1xyXG4gICAgICBtc2cgKz0gbGFzdE1zZ1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbXNnICs9ICctLS1DT01NQS0tLScgKyBsYXN0TXNnXHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIG1zZyA9IG1zZ3NbMF1cclxuICB9XHJcblxyXG4gIHJldHVybiBtc2dcclxufVxyXG4iLCJcbiAgICAgICAgaW1wb3J0ICdAZGNsb3VkaW8vdW5pLXN0YXQnO1xuICAgICAgICBpbXBvcnQgJ3VuaS1hcHAtc3R5bGUnXG4gICAgICAgIGltcG9ydCBBcHAgZnJvbSAnLi9wYWdlcy9leHRVSS9pbmRleGVkLWxpc3QvaW5kZXhlZC1saXN0Lm52dWU/bXBUeXBlPXBhZ2UnXG4gICAgICAgIEFwcC5tcFR5cGUgPSAncGFnZSdcbiAgICAgICAgQXBwLnJvdXRlID0gJ3BhZ2VzL2V4dFVJL2luZGV4ZWQtbGlzdC9pbmRleGVkLWxpc3QnXG4gICAgICAgIEFwcC5lbCA9ICcjcm9vdCdcbiAgICAgICAgbmV3IFZ1ZShBcHApXG4gICAgICAgICIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vaW5kZXhlZC1saXN0Lm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZGIxMmM2NmEmbXBUeXBlPXBhZ2VcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleGVkLWxpc3QubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi9pbmRleGVkLWxpc3QubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKCkge1xuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxufVxuaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbn1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBcIjFlNGU1MWJiXCJcbiAgXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwid2ViMS91bmlhcHAvaGVsbG8vcGFnZXMvZXh0VUkvaW5kZXhlZC1saXN0L2luZGV4ZWQtbGlzdC5udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvd2VicGFjay11bmktbnZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvd2VicGFjay11bmktbnZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4uLy4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC0wIS4uLy4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3Z1ZS1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0wIS4vaW5kZXhlZC1saXN0Lm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZGIxMmM2NmEmbXBUeXBlPXBhZ2VcIiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJzY3JvbGwtdmlld1wiLFxuICAgIHtcbiAgICAgIHN0YXRpY1N0eWxlOiB7IGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIgfSxcbiAgICAgIGF0dHJzOiB7IHNjcm9sbFk6IHRydWUsIGVuYWJsZUJhY2tUb1RvcDogdHJ1ZSwgYnViYmxlOiBcInRydWVcIiB9XG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcInVuaS1pbmRleGVkLWxpc3RcIiwge1xuICAgICAgICBhdHRyczogeyBvcHRpb25zOiBfdm0ubGlzdCwgc2hvd1NlbGVjdDogdHJ1ZSB9LFxuICAgICAgICBvbjogeyBjbGljazogX3ZtLmJpbmRDbGljayB9XG4gICAgICB9KVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvdnVlLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LTAhLi9pbmRleGVkLWxpc3QubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy92dWUtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMCEuL2luZGV4ZWQtbGlzdC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiLCI8dGVtcGxhdGU+XHJcblx0PHVuaS1pbmRleGVkLWxpc3QgOm9wdGlvbnM9XCJsaXN0XCIgOnNob3ctc2VsZWN0PVwidHJ1ZVwiIEBjbGljaz1cImJpbmRDbGlja1wiIC8+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCBhaXJwb3J0IGZyb20gJ0AvY29tbW9uL2FpcnBvcnQuanMnXHJcblx0aW1wb3J0IHVuaUluZGV4ZWRMaXN0IGZyb20gJ0AvY29tcG9uZW50cy91bmktaW5kZXhlZC1saXN0L3VuaS1pbmRleGVkLWxpc3QudnVlJ1xyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdGNvbXBvbmVudHM6IHtcclxuXHRcdFx0dW5pSW5kZXhlZExpc3RcclxuXHRcdH0sXHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGxpc3Q6IGFpcnBvcnQubGlzdFxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRiaW5kQ2xpY2soZSkge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKCfngrnlh7tpdGVt77yM6L+U5Zue5pWw5o2uJyArIEpTT04uc3RyaW5naWZ5KGUpKVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT48L3N0eWxlPiIsIm1vZHVsZS5leHBvcnRzID17XHJcbiAgICBcImxpc3RcIjogW3tcclxuICAgICAgICBcImxldHRlclwiOiBcIkFcIixcclxuICAgICAgICBcImRhdGFcIjogW1xyXG4gICAgICAgICAgICBcIumYv+WFi+iLj+acuuWculwiLFxyXG4gICAgICAgICAgICBcIumYv+aLieWxseWPo+acuuWculwiLFxyXG4gICAgICAgICAgICBcIumYv+WLkuazsOacuuWculwiLFxyXG4gICAgICAgICAgICBcIumYv+mHjOaYhuiOjuacuuWculwiLFxyXG4gICAgICAgICAgICBcIuWuieW6huWkqeafseWxseacuuWculwiLFxyXG4gICAgICAgICAgICBcIua+s+mXqOWbvemZheacuuWculwiXHJcbiAgICAgICAgXVxyXG4gICAgfSwge1xyXG4gICAgICAgIFwibGV0dGVyXCI6IFwiQlwiLFxyXG4gICAgICAgIFwiZGF0YVwiOiBbXHJcbiAgICAgICAgICAgIFwi5L+d5bGx5py65Zy6XCIsXHJcbiAgICAgICAgICAgIFwi5YyF5aS05py65Zy6XCIsXHJcbiAgICAgICAgICAgIFwi5YyX5rW356aP5oiQ5py65Zy6XCIsXHJcbiAgICAgICAgICAgIFwi5YyX5Lqs5Y2X6IuR5py65Zy6XCIsXHJcbiAgICAgICAgICAgIFwi5YyX5Lqs6aaW6YO95Zu96ZmF5py65Zy6XCJcclxuICAgICAgICBdXHJcbiAgICB9LCB7XHJcbiAgICAgICAgXCJsZXR0ZXJcIjogXCJDXCIsXHJcbiAgICAgICAgXCJkYXRhXCI6IFtcclxuICAgICAgICAgICAgXCLplb/nmb3lsbHmnLrlnLpcIixcclxuICAgICAgICAgICAgXCLplb/mmKXpvpnlmInlm73pmYXmnLrlnLpcIixcclxuICAgICAgICAgICAgXCLluLjlvrfmoYPoirHmupDmnLrlnLpcIixcclxuICAgICAgICAgICAgXCLmmIzpg73pgqbovr7mnLrlnLpcIixcclxuICAgICAgICAgICAgXCLplb/mspnpu4ToirHlm73pmYXmnLrlnLpcIixcclxuICAgICAgICAgICAgXCLplb/msrvnjovmnZHmnLrlnLpcIixcclxuICAgICAgICAgICAgXCLluLjlt57lpZTniZvmnLrlnLpcIixcclxuICAgICAgICAgICAgXCLmiJDpg73lj4zmtYHlm73pmYXmnLrlnLpcIixcclxuICAgICAgICAgICAgXCLotaTls7DmnLrlnLpcIlxyXG4gICAgICAgIF1cclxuICAgIH0sIHtcclxuICAgICAgICBcImxldHRlclwiOiBcIkRcIixcclxuICAgICAgICBcImRhdGFcIjogW1xyXG4gICAgICAgICAgICBcIuWkp+eQhuacuuWculwiLFxyXG4gICAgICAgICAgICBcIuWkp+i/nuWRqOawtOWtkOWbvemZheacuuWculwiLFxyXG4gICAgICAgICAgICBcIuWkp+W6huiQqOWwlOWbvuacuuWculwiLFxyXG4gICAgICAgICAgICBcIuWkp+WQjOS4nOeOi+W6hOacuuWculwiLFxyXG4gICAgICAgICAgICBcIui+vuW3nuays+W4guacuuWculwiLFxyXG4gICAgICAgICAgICBcIuS4ueS4nOa1quWktOacuuWculwiLFxyXG4gICAgICAgICAgICBcIuW+t+Wuj+iKkuW4guacuuWculwiLFxyXG4gICAgICAgICAgICBcIui/quW6hummmeagvOmHjOaLieacuuWculwiLFxyXG4gICAgICAgICAgICBcIuS4nOiQpeacuuWculwiLFxyXG4gICAgICAgICAgICBcIuaVpueFjOacuuWculwiXHJcbiAgICAgICAgXVxyXG4gICAgfSwge1xyXG4gICAgICAgIFwibGV0dGVyXCI6IFwiRVwiLFxyXG4gICAgICAgIFwiZGF0YVwiOiBbXHJcbiAgICAgICAgICAgIFwi6YSC5bCU5aSa5pav5py65Zy6XCIsXHJcbiAgICAgICAgICAgIFwi5oGp5pa96K645a625Z2q5py65Zy6XCIsXHJcbiAgICAgICAgICAgIFwi5LqM6L+e5rWp54m56LWb5LmM6IuP5Zu96ZmF5py65Zy6XCJcclxuICAgICAgICBdXHJcbiAgICB9LCB7XHJcbiAgICAgICAgXCJsZXR0ZXJcIjogXCJGXCIsXHJcbiAgICAgICAgXCJkYXRhXCI6IFtcclxuICAgICAgICAgICAgXCLpmJzpmLPopb/lhbPmnLrlnLpcIixcclxuICAgICAgICAgICAgXCLnpo/lt57plb/kuZDlm73pmYXmnLrlnLpcIlxyXG4gICAgICAgIF1cclxuICAgIH0sIHtcclxuICAgICAgICBcImxldHRlclwiOiBcIkdcIixcclxuICAgICAgICBcImRhdGFcIjogW1xyXG4gICAgICAgICAgICBcIui1o+W3num7hOmHkeacuuWculwiLFxyXG4gICAgICAgICAgICBcIuagvOWwlOacqOacuuWculwiLFxyXG4gICAgICAgICAgICBcIuWbuuWOn+WFreebmOWxseacuuWculwiLFxyXG4gICAgICAgICAgICBcIuW5v+WFg+ebmOm+meacuuWculwiLFxyXG4gICAgICAgICAgICBcIuW5v+W3nueZveS6keWbvemZheacuuWculwiLFxyXG4gICAgICAgICAgICBcIuahguael+S4pOaxn+WbvemZheacuuWculwiLFxyXG4gICAgICAgICAgICBcIui0temYs+m+mea0nuWgoeWbvemZheacuuWculwiXHJcbiAgICAgICAgXVxyXG4gICAgfSwge1xyXG4gICAgICAgIFwibGV0dGVyXCI6IFwiSFwiLFxyXG4gICAgICAgIFwiZGF0YVwiOiBbXHJcbiAgICAgICAgICAgIFwi5ZOI5bCU5ruo5aSq5bmz5Zu96ZmF5py65Zy6XCIsXHJcbiAgICAgICAgICAgIFwi5ZOI5a+G5py65Zy6XCIsXHJcbiAgICAgICAgICAgIFwi5rW35Y+j576O5YWw5Zu96ZmF5py65Zy6XCIsXHJcbiAgICAgICAgICAgIFwi5rW35ouJ5bCU5Lic5bGx5Zu96ZmF5py65Zy6XCIsXHJcbiAgICAgICAgICAgIFwi6YKv6YO45py65Zy6XCIsXHJcbiAgICAgICAgICAgIFwi5rGJ5Lit5py65Zy6XCIsXHJcbiAgICAgICAgICAgIFwi5p2t5bee6JCn5bGx5Zu96ZmF5py65Zy6XCIsXHJcbiAgICAgICAgICAgIFwi5ZCI6IKl6aqG5bKX5Zu96ZmF5py65Zy6XCIsXHJcbiAgICAgICAgICAgIFwi5ZKM55Sw5py65Zy6XCIsXHJcbiAgICAgICAgICAgIFwi6buR5rKz5py65Zy6XCIsXHJcbiAgICAgICAgICAgIFwi5ZG85ZKM5rWp54m555m95aGU5Zu96ZmF5py65Zy6XCIsXHJcbiAgICAgICAgICAgIFwi5reu5a6J5raf5rC05py65Zy6XCIsXHJcbiAgICAgICAgICAgIFwi6buE5bGx5bGv5rqq5Zu96ZmF5py65Zy6XCJcclxuICAgICAgICBdXHJcbiAgICB9LCB7XHJcbiAgICAgICAgXCJsZXR0ZXJcIjogXCJJXCIsXHJcbiAgICAgICAgXCJkYXRhXCI6IFtdXHJcbiAgICB9LCB7XHJcbiAgICAgICAgXCJsZXR0ZXJcIjogXCJKXCIsXHJcbiAgICAgICAgXCJkYXRhXCI6IFtcclxuICAgICAgICAgICAgXCLmtY7ljZfpgaXlopnlm73pmYXmnLrlnLpcIixcclxuICAgICAgICAgICAgXCLmtY7lroHmm7LpmJzmnLrlnLpcIixcclxuICAgICAgICAgICAgXCLpuKHopb/lhbTlh6/muZbmnLrlnLpcIixcclxuICAgICAgICAgICAgXCLkvbPmnKjmlq/kuJzpg4rmnLrlnLpcIixcclxuICAgICAgICAgICAgXCLlmInls6rlhbPmnLrlnLpcIixcclxuICAgICAgICAgICAgXCLplKblt57lsI/lsq3lrZDmnLrlnLpcIixcclxuICAgICAgICAgICAgXCLmma/lvrfplYfmnLrlnLpcIixcclxuICAgICAgICAgICAgXCLkupXlhojlsbHmnLrlnLpcIixcclxuICAgICAgICAgICAgXCLkuZ3msZ/lupDlsbHmnLrlnLpcIixcclxuICAgICAgICAgICAgXCLkuZ3lr6jpu4TpvpnmnLrlnLpcIlxyXG4gICAgICAgIF1cclxuICAgIH0sIHtcclxuICAgICAgICBcImxldHRlclwiOiBcIktcIixcclxuICAgICAgICBcImRhdGFcIjogW1xyXG4gICAgICAgICAgICBcIuWWgOS7gOacuuWculwiLFxyXG4gICAgICAgICAgICBcIuWFi+aLieeOm+S+neacuuWculwiLFxyXG4gICAgICAgICAgICBcIuW6k+i9pum+n+WFueacuuWculwiLFxyXG4gICAgICAgICAgICBcIuW6k+WwlOWLkuacuuWculwiLFxyXG4gICAgICAgICAgICBcIuaYhuaYjuW3q+WutuWdneWbvemZheacuuWculwiXHJcbiAgICAgICAgXVxyXG4gICAgfSwge1xyXG4gICAgICAgIFwibGV0dGVyXCI6IFwiTFwiLFxyXG4gICAgICAgIFwiZGF0YVwiOiBbXHJcbiAgICAgICAgICAgIFwi5ouJ6JCo6LSh5ZiO5py65Zy6XCIsXHJcbiAgICAgICAgICAgIFwi5YWw5bee5Lit5bed5py65Zy6XCIsXHJcbiAgICAgICAgICAgIFwi5Li95rGf5LiJ5LmJ5py65Zy6XCIsXHJcbiAgICAgICAgICAgIFwi6buO5bmz5py65Zy6XCIsXHJcbiAgICAgICAgICAgIFwi6L+e5LqR5riv55m95aGU5Z+g5py65Zy6XCIsXHJcbiAgICAgICAgICAgIFwi5Li05rKn5py65Zy6XCIsXHJcbiAgICAgICAgICAgIFwi5Li05rKC5py65Zy6XCIsXHJcbiAgICAgICAgICAgIFwi5p6X6Iqd57Gz5p6X5py65Zy6XCIsXHJcbiAgICAgICAgICAgIFwi5p+z5bee55m96I6y5py65Zy6XCIsXHJcbiAgICAgICAgICAgIFwi6b6Z5bKp5Yag6LG45bGx5py65Zy6XCIsXHJcbiAgICAgICAgICAgIFwi5rO45bee6JOd55Sw5py65Zy6XCIsXHJcbiAgICAgICAgICAgIFwi5rSb6Ziz5YyX6YOK5py65Zy6XCJcclxuICAgICAgICBdXHJcbiAgICB9LCB7XHJcbiAgICAgICAgXCJsZXR0ZXJcIjogXCJNXCIsXHJcbiAgICAgICAgXCJkYXRhXCI6IFtcclxuICAgICAgICAgICAgXCLmu6HmtLLph4zopb/pg4rmnLrlnLpcIixcclxuICAgICAgICAgICAgXCLnu7XpmLPljZfpg4rmnLrlnLpcIixcclxuICAgICAgICAgICAgXCLmvKDmsrPlj6TojrLmnLrlnLpcIixcclxuICAgICAgICAgICAgXCLniaHkuLnmsZ/mtbfmtarmnLrlnLpcIlxyXG4gICAgICAgIF1cclxuICAgIH0sIHtcclxuICAgICAgICBcImxldHRlclwiOiBcIk5cIixcclxuICAgICAgICBcImRhdGFcIjogW1xyXG4gICAgICAgICAgICBcIuWNl+aYjOaYjOWMl+WbvemZheacuuWculwiLFxyXG4gICAgICAgICAgICBcIuWNl+WFhemrmOWdquacuuWculwiLFxyXG4gICAgICAgICAgICBcIuWNl+S6rOemhOWPo+WbvemZheacuuWculwiLFxyXG4gICAgICAgICAgICBcIuWNl+WugeWQtOWcqeacuuWculwiLFxyXG4gICAgICAgICAgICBcIuWNl+mAmuWFtOS4nOacuuWculwiLFxyXG4gICAgICAgICAgICBcIuWNl+mYs+WnnOiQpeacuuWculwiLFxyXG4gICAgICAgICAgICBcIuWugeazouagjuekvuWbvemZheacuuWculwiXHJcbiAgICAgICAgXVxyXG4gICAgfSwge1xyXG4gICAgICAgIFwibGV0dGVyXCI6IFwiT1wiLFxyXG4gICAgICAgIFwiZGF0YVwiOiBbXVxyXG4gICAgfSwge1xyXG4gICAgICAgIFwibGV0dGVyXCI6IFwiUFwiLFxyXG4gICAgICAgIFwiZGF0YVwiOiBbXHJcbiAgICAgICAgICAgIFwi5pmu5rSx5oCd6IyF5py65Zy6XCJcclxuICAgICAgICBdXHJcbiAgICB9LCB7XHJcbiAgICAgICAgXCJsZXR0ZXJcIjogXCJRXCIsXHJcbiAgICAgICAgXCJkYXRhXCI6IFtcclxuICAgICAgICAgICAgXCLpvZDpvZDlk4jlsJTkuInlrrblrZDmnLrlnLpcIixcclxuICAgICAgICAgICAgXCLnp6bnmoflspvlsbHmtbflhbPmnLrlnLpcIixcclxuICAgICAgICAgICAgXCLpnZLlspvmtYHkuq3lm73pmYXmnLrlnLpcIixcclxuICAgICAgICAgICAgXCLooaLlt57mnLrlnLpcIixcclxuICAgICAgICAgICAgXCLms4nlt57mmYvmsZ/mnLrlnLpcIlxyXG4gICAgICAgIF1cclxuICAgIH0sIHtcclxuICAgICAgICBcImxldHRlclwiOiBcIlJcIixcclxuICAgICAgICBcImRhdGFcIjogW1xyXG4gICAgICAgICAgICBcIuaXpeWWgOWImeWSjOW5s+acuuWculwiXHJcbiAgICAgICAgXVxyXG4gICAgfSwge1xyXG4gICAgICAgIFwibGV0dGVyXCI6IFwiU1wiLFxyXG4gICAgICAgIFwiZGF0YVwiOiBbXHJcbiAgICAgICAgICAgIFwi5LiJ5Lqa5Yek5Yew5Zu96ZmF5py65Zy6XCIsXHJcbiAgICAgICAgICAgIFwi5rGV5aS05aSW56CC5py65Zy6XCIsXHJcbiAgICAgICAgICAgIFwi5LiK5rW36Jm55qGl5Zu96ZmF5py65Zy6XCIsXHJcbiAgICAgICAgICAgIFwi5LiK5rW35rWm5Lic5Zu96ZmF5py65Zy6XCIsXHJcbiAgICAgICAgICAgIFwi5rex5Zyz5a6d5a6J5Zu96ZmF5py65Zy6XCIsXHJcbiAgICAgICAgICAgIFwi5rKI6Ziz5qGD5LuZ5Zu96ZmF5py65Zy6XCIsXHJcbiAgICAgICAgICAgIFwi55+z5a625bqE5q2j5a6a5Zu96ZmF5py65Zy6XCIsXHJcbiAgICAgICAgICAgIFwi6IuP5Y2X56GV5pS+5Zu96ZmF5py65Zy6XCJcclxuICAgICAgICBdXHJcbiAgICB9LCB7XHJcbiAgICAgICAgXCJsZXR0ZXJcIjogXCJUXCIsXHJcbiAgICAgICAgXCJkYXRhXCI6IFtcclxuICAgICAgICAgICAgXCLloZTln47mnLrlnLpcIixcclxuICAgICAgICAgICAgXCLlpKrljp/mrablrr/lm73pmYXmnLrlnLpcIixcclxuICAgICAgICAgICAgXCLlj7Dlt57ot6/moaXmnLrlnLogKOm7hOWyqeacuuWcuilcIixcclxuICAgICAgICAgICAgXCLllJDlsbHkuInlpbPmsrPmnLrlnLpcIixcclxuICAgICAgICAgICAgXCLohb7lhrLpqbzls7DmnLrlnLpcIixcclxuICAgICAgICAgICAgXCLlpKnmtKXmu6jmtbflm73pmYXmnLrlnLpcIixcclxuICAgICAgICAgICAgXCLpgJrovr3mnLrlnLpcIixcclxuICAgICAgICAgICAgXCLpk5zku4Hlh6Tlh7DmnLrlnLpcIlxyXG4gICAgICAgIF1cclxuICAgIH0sIHtcclxuICAgICAgICBcImxldHRlclwiOiBcIlVcIixcclxuICAgICAgICBcImRhdGFcIjogW11cclxuICAgIH0sIHtcclxuICAgICAgICBcImxldHRlclwiOiBcIlZcIixcclxuICAgICAgICBcImRhdGFcIjogW11cclxuICAgIH0sIHtcclxuICAgICAgICBcImxldHRlclwiOiBcIldcIixcclxuICAgICAgICBcImRhdGFcIjogW1xyXG4gICAgICAgICAgICBcIuS4h+W3nuS6lOahpeacuuWculwiLFxyXG4gICAgICAgICAgICBcIua9jeWdiuacuuWculwiLFxyXG4gICAgICAgICAgICBcIuWogea1t+Wkp+awtOaziuacuuWculwiLFxyXG4gICAgICAgICAgICBcIuaWh+WxseaZruiAhem7keacuuWculwiLFxyXG4gICAgICAgICAgICBcIua4qeW3nuawuOW8uuWbvemZheacuuWculwiLFxyXG4gICAgICAgICAgICBcIuS5jOa1t+acuuWculwiLFxyXG4gICAgICAgICAgICBcIuatpuaxieWkqeays+WbvemZheacuuWculwiLFxyXG4gICAgICAgICAgICBcIuS5jOWFsOa1qeeJueacuuWculwiLFxyXG4gICAgICAgICAgICBcIuS5jOmygeacqOm9kOWcsOeqneWgoeWbvemZheacuuWculwiLFxyXG4gICAgICAgICAgICBcIuatpuWkt+WxseacuuWculwiLFxyXG4gICAgICAgICAgICBcIuaip+W3numVv+a0suWym+acuuWculwiXHJcbiAgICAgICAgXVxyXG4gICAgfSwge1xyXG4gICAgICAgIFwibGV0dGVyXCI6IFwiWFwiLFxyXG4gICAgICAgIFwiZGF0YVwiOiBbXHJcbiAgICAgICAgICAgIFwi6KW/5a6J5ZK46Ziz5Zu96ZmF5py65Zy6XCIsXHJcbiAgICAgICAgICAgIFwi6KW/5piM6Z2S5bGx5py65Zy6XCIsXHJcbiAgICAgICAgICAgIFwi6ZSh5p6X5rWp54m55py65Zy6XCIsXHJcbiAgICAgICAgICAgIFwi6KW/5a6B5pu55a625aCh5py65Zy6XCIsXHJcbiAgICAgICAgICAgIFwi6KW/5Y+M54mI57qz5ZiO5rSS5py65Zy6XCIsXHJcbiAgICAgICAgICAgIFwi5Y6m6Zeo6auY5bSO5Zu96ZmF5py65Zy6XCIsXHJcbiAgICAgICAgICAgIFwi6aaZ5riv5Zu96ZmF5py65Zy6XCIsXHJcbiAgICAgICAgICAgIFwi6KWE6Ziz5YiY6ZuG5py65Zy6XCIsXHJcbiAgICAgICAgICAgIFwi5YW05LmJ5py65Zy6XCIsXHJcbiAgICAgICAgICAgIFwi5b6Q5bee6KeC6Z+z5py65Zy6XCJcclxuICAgICAgICBdXHJcbiAgICB9LCB7XHJcbiAgICAgICAgXCJsZXR0ZXJcIjogXCJZXCIsXHJcbiAgICAgICAgXCJkYXRhXCI6IFtcclxuICAgICAgICAgICAgXCLlu7blronkuozljYHph4zloKHmnLrlnLpcIixcclxuICAgICAgICAgICAgXCLnm5Dln47mnLrlnLpcIixcclxuICAgICAgICAgICAgXCLlu7blkInmnJ3pmLPlt53mnLrlnLpcIixcclxuICAgICAgICAgICAgXCLng5/lj7DojrHlsbHlm73pmYXmnLrlnLpcIixcclxuICAgICAgICAgICAgXCLlrpzlrr7oj5zlnZ3mnLrlnLpcIixcclxuICAgICAgICAgICAgXCLlrpzmmIzkuInls6HmnLrlnLpcIixcclxuICAgICAgICAgICAgXCLkvIrmmKXmnpfpg73mnLrlnLpcIixcclxuICAgICAgICAgICAgXCLkvIrlroHmnLrlnLpcIixcclxuICAgICAgICAgICAgXCLkuYnkuYzmnLrlnLpcIixcclxuICAgICAgICAgICAgXCLpk7blt53msrPkuJzmnLrlnLpcIixcclxuICAgICAgICAgICAgXCLmsLjlt57pm7bpmbXmnLrlnLpcIixcclxuICAgICAgICAgICAgXCLmpobmnpfmpobpmLPmnLrlnLpcIixcclxuICAgICAgICAgICAgXCLnjonmoJHlt7TloZjmnLrlnLpcIixcclxuICAgICAgICAgICAgXCLov5Dln47lvKDlrZ3mnLrlnLpcIlxyXG4gICAgICAgIF1cclxuICAgIH0sIHtcclxuICAgICAgICBcImxldHRlclwiOiBcIlpcIixcclxuICAgICAgICBcImRhdGFcIjogW1xyXG4gICAgICAgICAgICBcIua5m+axn+acuuWculwiLFxyXG4gICAgICAgICAgICBcIuaYremAmuacuuWculwiLFxyXG4gICAgICAgICAgICBcIumDkeW3nuaWsOmDkeWbvemZheacuuWculwiLFxyXG4gICAgICAgICAgICBcIuiKt+axn+acuuWculwiLFxyXG4gICAgICAgICAgICBcIumHjeW6huaxn+WMl+WbvemZheacuuWculwiLFxyXG4gICAgICAgICAgICBcIuS4reWNq+mmmeWxseacuuWculwiLFxyXG4gICAgICAgICAgICBcIuiIn+WxseacseWutuWwluacuuWculwiLFxyXG4gICAgICAgICAgICBcIuePoOa1t+S4ieeBtuacuuWculwiXHJcbiAgICAgICAgXVxyXG4gICAgfV1cclxufVxyXG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3VuaS1pbmRleGVkLWxpc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBiYjM3NTI2JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3VuaS1pbmRleGVkLWxpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi91bmktaW5kZXhlZC1saXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzICgpIHtcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbn1cbmlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG59XG5pZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vdW5pLWluZGV4ZWQtbGlzdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wYmIzNzUyNiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIikuZGVmYXVsdCwgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi91bmktaW5kZXhlZC1saXN0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTBiYjM3NTI2JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiKS5kZWZhdWx0KVxuICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjBiYjM3NTI2XCIsXG4gIFwiMzhkMDQ2MzZcIlxuICBcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ3ZWIxL3VuaWFwcC9oZWxsby9jb21wb25lbnRzL3VuaS1pbmRleGVkLWxpc3QvdW5pLWluZGV4ZWQtbGlzdC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy93ZWJwYWNrLXVuaS1udnVlLWxvYWRlci9saWIvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy93ZWJwYWNrLXVuaS1udnVlLWxvYWRlci9saWIvdGVtcGxhdGUucmVjeWNsZS5qcyEuLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtMCEuLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy92dWUtbG9hZGVyL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktaW5kZXhlZC1saXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wYmIzNzUyNiZzY29wZWQ9dHJ1ZSZcIiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ2aWV3XCIsXG4gICAgeyByZWY6IFwibGlzdFwiLCBzdGF0aWNDbGFzczogW1widW5pLWluZGV4ZWQtbGlzdFwiXSwgYXR0cnM6IHsgaWQ6IFwibGlzdFwiIH0gfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJsaXN0XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogW1widW5pLWluZGV4ZWQtbGlzdF9fc2Nyb2xsXCJdLFxuICAgICAgICAgIGF0dHJzOiB7IHNjcm9sbGFibGU6IFwidHJ1ZVwiLCBzaG93U2Nyb2xsYmFyOiBcImZhbHNlXCIgfVxuICAgICAgICB9LFxuICAgICAgICBfdm0uX2woX3ZtLmxpc3RzLCBmdW5jdGlvbihsaXN0LCBpZHgpIHtcbiAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICBcImNlbGxcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiBpZHgsXG4gICAgICAgICAgICAgIHJlZjogXCJ1bmktaW5kZXhlZC1saXN0LVwiICsgbGlzdC5rZXksXG4gICAgICAgICAgICAgIHJlZkluRm9yOiB0cnVlLFxuICAgICAgICAgICAgICBhcHBlbmRBc1RyZWU6IHRydWUsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IGFwcGVuZDogXCJ0cmVlXCIgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJ1bmktaW5kZXhlZC1saXN0LWl0ZW1cIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBsaXN0OiBsaXN0LFxuICAgICAgICAgICAgICAgICAgbG9hZGVkOiBfdm0ubG9hZGVkLFxuICAgICAgICAgICAgICAgICAgaWR4OiBpZHgsXG4gICAgICAgICAgICAgICAgICBzaG93U2VsZWN0OiBfdm0uc2hvd1NlbGVjdFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb246IHsgaXRlbUNsaWNrOiBfdm0ub25DbGljayB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgfSksXG4gICAgICAgIDBcbiAgICAgICksXG4gICAgICBfYyhcbiAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogW1widW5pLWluZGV4ZWQtbGlzdF9fbWVudVwiXSxcbiAgICAgICAgICBjbGFzczogX3ZtLnRvdWNobW92ZSA/IFwidW5pLWluZGV4ZWQtbGlzdF9fbWVudS0tYWN0aXZlXCIgOiBcIlwiLFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICB0b3VjaHN0YXJ0OiBfdm0udG91Y2hTdGFydCxcbiAgICAgICAgICAgIHRvdWNobW92ZTogX3ZtLnRvdWNoTW92ZSxcbiAgICAgICAgICAgIHRvdWNoZW5kOiBfdm0udG91Y2hFbmRcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIF92bS5fbChfdm0ubGlzdHMsIGZ1bmN0aW9uKGxpc3QsIGtleSkge1xuICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAgeyBrZXk6IGtleSwgc3RhdGljQ2xhc3M6IFtcInVuaS1pbmRleGVkLWxpc3RfX21lbnUtaXRlbVwiXSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInUtdGV4dFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJ1bmktaW5kZXhlZC1saXN0X19tZW51LXRleHRcIl0sXG4gICAgICAgICAgICAgICAgICBjbGFzczpcbiAgICAgICAgICAgICAgICAgICAgX3ZtLnRvdWNobW92ZUluZGV4ID09IGtleVxuICAgICAgICAgICAgICAgICAgICAgID8gXCJ1bmktaW5kZXhlZC1saXN0X19tZW51LXRleHQtLWFjdGl2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhsaXN0LmtleSkpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICB9KSxcbiAgICAgICAgMFxuICAgICAgKSxcbiAgICAgIF92bS50b3VjaG1vdmVcbiAgICAgICAgPyBfYyhcInZpZXdcIiwgeyBzdGF0aWNDbGFzczogW1widW5pLWluZGV4ZWQtbGlzdF9fYWxlcnQtd3JhcHBlclwiXSB9LCBbXG4gICAgICAgICAgICBfYyhcInUtdGV4dFwiLCB7IHN0YXRpY0NsYXNzOiBbXCJ1bmktaW5kZXhlZC1saXN0X19hbGVydFwiXSB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmxpc3RzW192bS50b3VjaG1vdmVJbmRleF0ua2V5KSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgOiBfdm0uX2UoKVxuICAgIF1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3Z1ZS1sb2FkZXIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VuaS1pbmRleGVkLWxpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy92dWUtbG9hZGVyL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktaW5kZXhlZC1saXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyBjbGFzcz1cInVuaS1pbmRleGVkLWxpc3RcIiByZWY9XCJsaXN0XCIgaWQ9XCJsaXN0XCI+XHJcblx0XHQ8IS0tICNpZmRlZiBBUFAtTlZVRSAtLT5cclxuXHRcdDxsaXN0IGNsYXNzPVwidW5pLWluZGV4ZWQtbGlzdF9fc2Nyb2xsXCIgc2Nyb2xsYWJsZT1cInRydWVcIiBzaG93LXNjcm9sbGJhcj1cImZhbHNlXCI+XHJcblx0XHRcdDxjZWxsIHYtZm9yPVwiKGxpc3QsIGlkeCkgaW4gbGlzdHNcIiA6a2V5PVwiaWR4XCIgOnJlZj1cIid1bmktaW5kZXhlZC1saXN0LScgKyBsaXN0LmtleVwiPlxyXG5cdFx0XHRcdDwhLS0gI2VuZGlmIC0tPlxyXG5cdFx0XHRcdDwhLS0gI2lmbmRlZiBBUFAtTlZVRSAtLT5cclxuXHRcdFx0XHQ8c2Nyb2xsLXZpZXcgOnNjcm9sbC1pbnRvLXZpZXc9XCJzY3JvbGxWaWV3SWRcIiBjbGFzcz1cInVuaS1pbmRleGVkLWxpc3RfX3Njcm9sbFwiIHNjcm9sbC15PlxyXG5cdFx0XHRcdFx0PHZpZXcgdi1mb3I9XCIobGlzdCwgaWR4KSBpbiBsaXN0c1wiIDprZXk9XCJpZHhcIiA6aWQ9XCIndW5pLWluZGV4ZWQtbGlzdC0nICsgbGlzdC5rZXlcIj5cclxuXHRcdFx0XHRcdFx0PCEtLSAjZW5kaWYgLS0+XHJcblx0XHRcdFx0XHRcdDx1bmktaW5kZXhlZC1saXN0LWl0ZW0gOmxpc3Q9XCJsaXN0XCIgOmxvYWRlZD1cImxvYWRlZFwiIDppZHg9XCJpZHhcIiA6c2hvd1NlbGVjdD1cInNob3dTZWxlY3RcIiBAaXRlbUNsaWNrPVwib25DbGlja1wiPjwvdW5pLWluZGV4ZWQtbGlzdC1pdGVtPlxyXG5cdFx0XHRcdFx0XHQ8IS0tICNpZm5kZWYgQVBQLU5WVUUgLS0+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC9zY3JvbGwtdmlldz5cclxuXHRcdFx0XHQ8IS0tICNlbmRpZiAtLT5cclxuXHRcdFx0XHQ8IS0tICNpZmRlZiBBUFAtTlZVRSAtLT5cclxuXHRcdFx0PC9jZWxsPlxyXG5cdFx0PC9saXN0PlxyXG5cdFx0PCEtLSAjZW5kaWYgLS0+XHJcblx0XHQ8dmlldyA6Y2xhc3M9XCJ0b3VjaG1vdmUgPyAndW5pLWluZGV4ZWQtbGlzdF9fbWVudS0tYWN0aXZlJyA6ICcnXCIgQHRvdWNoc3RhcnQ9XCJ0b3VjaFN0YXJ0XCIgQHRvdWNobW92ZS5zdG9wPVwidG91Y2hNb3ZlXCIgQHRvdWNoZW5kPVwidG91Y2hFbmRcIiBjbGFzcz1cInVuaS1pbmRleGVkLWxpc3RfX21lbnVcIj5cclxuXHRcdFx0PHZpZXcgdi1mb3I9XCIobGlzdCwga2V5KSBpbiBsaXN0c1wiIDprZXk9XCJrZXlcIiBjbGFzcz1cInVuaS1pbmRleGVkLWxpc3RfX21lbnUtaXRlbVwiPlxyXG5cdFx0XHRcdDx0ZXh0IGNsYXNzPVwidW5pLWluZGV4ZWQtbGlzdF9fbWVudS10ZXh0XCIgOmNsYXNzPVwidG91Y2htb3ZlSW5kZXggPT0ga2V5ID8gJ3VuaS1pbmRleGVkLWxpc3RfX21lbnUtdGV4dC0tYWN0aXZlJyA6ICcnXCI+e3sgbGlzdC5rZXkgfX08L3RleHQ+XHJcblx0XHRcdDwvdmlldz5cclxuXHRcdDwvdmlldz5cclxuXHRcdDx2aWV3IHYtaWY9XCJ0b3VjaG1vdmVcIiBjbGFzcz1cInVuaS1pbmRleGVkLWxpc3RfX2FsZXJ0LXdyYXBwZXJcIj5cclxuXHRcdFx0PHRleHQgY2xhc3M9XCJ1bmktaW5kZXhlZC1saXN0X19hbGVydFwiPnt7IGxpc3RzW3RvdWNobW92ZUluZGV4XS5rZXkgfX08L3RleHQ+XHJcblx0XHQ8L3ZpZXc+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCB1bmlJY29ucyBmcm9tICcuLi91bmktaWNvbnMvdW5pLWljb25zLnZ1ZSdcclxuXHRpbXBvcnQgdW5pSW5kZXhlZExpc3RJdGVtIGZyb20gJy4vdW5pLWluZGV4ZWQtbGlzdC1pdGVtLnZ1ZSdcclxuXHQvLyAjaWZkZWYgQVBQLU5WVUVcclxuXHRjb25zdCBkb20gPSB3ZWV4LnJlcXVpcmVNb2R1bGUoJ2RvbScpO1xyXG5cdC8vICNlbmRpZlxyXG5cdC8vICNpZmRlZiBBUFAtUExVU1xyXG5cdGZ1bmN0aW9uIHRocm90dGxlKGZ1bmMsIGRlbGF5KSB7XHJcblx0XHR2YXIgcHJldiA9IERhdGUubm93KCk7XHJcblx0XHRyZXR1cm4gZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciBjb250ZXh0ID0gdGhpcztcclxuXHRcdFx0dmFyIGFyZ3MgPSBhcmd1bWVudHM7XHJcblx0XHRcdHZhciBub3cgPSBEYXRlLm5vdygpO1xyXG5cdFx0XHRpZiAobm93IC0gcHJldiA+PSBkZWxheSkge1xyXG5cdFx0XHRcdGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XHJcblx0XHRcdFx0cHJldiA9IERhdGUubm93KCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIHRvdWNoTW92ZShlKSB7XHJcblx0XHRsZXQgcGFnZVkgPSBlLnRvdWNoZXNbMF0ucGFnZVlcclxuXHRcdGxldCBpbmRleCA9IE1hdGguZmxvb3IocGFnZVkgLyB0aGlzLml0ZW1IZWlnaHQpXHJcblx0XHRpZiAodGhpcy50b3VjaG1vdmVJbmRleCA9PT0gaW5kZXgpIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlXHJcblx0XHR9XHJcblx0XHRsZXQgaXRlbSA9IHRoaXMubGlzdHNbaW5kZXhdXHJcblx0XHRpZiAoaXRlbSkge1xyXG5cdFx0XHQvLyAjaWZuZGVmIEFQUC1OVlVFXHJcblx0XHRcdHRoaXMuc2Nyb2xsVmlld0lkID0gJ3VuaS1pbmRleGVkLWxpc3QtJyArIGl0ZW0ua2V5XHJcblx0XHRcdHRoaXMudG91Y2htb3ZlSW5kZXggPSBpbmRleFxyXG5cdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0Ly8gI2lmZGVmIEFQUC1OVlVFXHJcblx0XHRcdGRvbS5zY3JvbGxUb0VsZW1lbnQodGhpcy4kcmVmc1sndW5pLWluZGV4ZWQtbGlzdC0nICsgaXRlbS5rZXldWzBdLCB7XHJcblx0XHRcdFx0YW5pbWF0ZWQ6IGZhbHNlXHJcblx0XHRcdH0pXHJcblx0XHRcdHRoaXMudG91Y2htb3ZlSW5kZXggPSBpbmRleFxyXG5cdFx0XHQvLyAjZW5kaWZcclxuXHRcdH1cclxuXHR9XHJcblx0Y29uc3QgdGhyb3R0bGVUb3VjaE1vdmUgPSB0aHJvdHRsZSh0b3VjaE1vdmUsIDQwKVxyXG5cdC8vICNlbmRpZlxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdG5hbWU6ICdVbmlJbmRleGVkTGlzdCcsXHJcblx0XHRjb21wb25lbnRzOiB7XHJcblx0XHRcdHVuaUljb25zLFxyXG5cdFx0XHR1bmlJbmRleGVkTGlzdEl0ZW1cclxuXHRcdH0sXHJcblx0XHRwcm9wczoge1xyXG5cdFx0XHRvcHRpb25zOiB7XHJcblx0XHRcdFx0dHlwZTogQXJyYXksXHJcblx0XHRcdFx0ZGVmYXVsdCAoKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gW11cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdHNob3dTZWxlY3Q6IHtcclxuXHRcdFx0XHR0eXBlOiBCb29sZWFuLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IGZhbHNlXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGxpc3RzOiBbXSxcclxuXHRcdFx0XHR3aW5IZWlnaHQ6IDAsXHJcblx0XHRcdFx0aXRlbUhlaWdodDogMCxcclxuXHRcdFx0XHR0b3VjaG1vdmU6IGZhbHNlLFxyXG5cdFx0XHRcdHRvdWNobW92ZUluZGV4OiAtMSxcclxuXHRcdFx0XHRzY3JvbGxWaWV3SWQ6ICcnLFxyXG5cdFx0XHRcdHRvdWNobW92ZVRpbWVvdXQ6ICcnLFxyXG5cdFx0XHRcdGxvYWRlZDogZmFsc2VcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdHdhdGNoOiB7XHJcblx0XHRcdG9wdGlvbnM6IHtcclxuXHRcdFx0XHRoYW5kbGVyOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdHRoaXMuc2V0TGlzdCgpXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRkZWVwOiB0cnVlXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRtb3VudGVkKCkge1xyXG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHR0aGlzLnNldExpc3QoKVxyXG5cdFx0XHR9LCA1MClcclxuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5sb2FkZWQgPSB0cnVlXHJcblx0XHRcdH0sIDMwMCk7XHJcblx0XHR9LFxyXG5cdFx0bWV0aG9kczoge1xyXG5cdFx0XHRzZXRMaXN0KCkge1xyXG5cdFx0XHRcdGxldCBpbmRleCA9IDA7XHJcblx0XHRcdFx0dGhpcy5saXN0cyA9IFtdXHJcblx0XHRcdFx0dGhpcy5vcHRpb25zLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKHZhbHVlLmRhdGEubGVuZ3RoID09PSAwKSB7XHJcblx0XHRcdFx0XHRcdHJldHVyblxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2codmFsdWUpXHJcblx0XHRcdFx0XHRsZXQgaW5kZXhCZWZvcmUgPSBpbmRleFxyXG5cdFx0XHRcdFx0bGV0IGl0ZW1zID0gdmFsdWUuZGF0YS5tYXAoaXRlbSA9PiB7XHJcblx0XHRcdFx0XHRcdGxldCBvYmogPSB7fVxyXG5cdFx0XHRcdFx0XHQvLyBmb3IgKGxldCBrZXkgaW4gaXRlbSkge1xyXG5cdFx0XHRcdFx0XHRvYmpbJ2tleSddID0gdmFsdWUubGV0dGVyXHJcblx0XHRcdFx0XHRcdG9ialsnbmFtZSddID0gaXRlbVxyXG5cdFx0XHRcdFx0XHRvYmpbJ2l0ZW1JbmRleCddID0gaW5kZXhcclxuXHRcdFx0XHRcdFx0aW5kZXgrK1xyXG5cdFx0XHRcdFx0XHQvLyB9XHJcblx0XHRcdFx0XHRcdG9iai5jaGVja2VkID0gaXRlbS5jaGVja2VkID8gaXRlbS5jaGVja2VkIDogZmFsc2VcclxuXHRcdFx0XHRcdFx0cmV0dXJuIG9ialxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdHRoaXMubGlzdHMucHVzaCh7XHJcblx0XHRcdFx0XHRcdHRpdGxlOiB2YWx1ZS5sZXR0ZXIsXHJcblx0XHRcdFx0XHRcdGtleTogdmFsdWUubGV0dGVyLFxyXG5cdFx0XHRcdFx0XHRpdGVtczogaXRlbXMsXHJcblx0XHRcdFx0XHRcdGl0ZW1JbmRleDogaW5kZXhCZWZvcmVcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQvLyBjb25zb2xlLmxvZyh0aGlzLmxpc3RzKVxyXG5cdFx0XHRcdC8vICNpZm5kZWYgQVBQLU5WVUVcclxuXHRcdFx0XHR1bmkuY3JlYXRlU2VsZWN0b3JRdWVyeSgpXHJcblx0XHRcdFx0XHQuaW4odGhpcylcclxuXHRcdFx0XHRcdC5zZWxlY3QoJyNsaXN0JylcclxuXHRcdFx0XHRcdC5ib3VuZGluZ0NsaWVudFJlY3QoKVxyXG5cdFx0XHRcdFx0LmV4ZWMocmV0ID0+IHtcclxuXHRcdFx0XHRcdFx0dGhpcy53aW5IZWlnaHQgPSByZXRbMF0uaGVpZ2h0XHJcblx0XHRcdFx0XHRcdHRoaXMuaXRlbUhlaWdodCA9IHRoaXMud2luSGVpZ2h0IC8gdGhpcy5saXN0cy5sZW5ndGhcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdFx0Ly8gI2lmZGVmIEFQUC1OVlVFXHJcblx0XHRcdFx0ZG9tLmdldENvbXBvbmVudFJlY3QodGhpcy4kcmVmc1snbGlzdCddLCAocmVzKSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLndpbkhlaWdodCA9IHJlcy5zaXplLmhlaWdodFxyXG5cdFx0XHRcdFx0dGhpcy5pdGVtSGVpZ2h0ID0gdGhpcy53aW5IZWlnaHQgLyB0aGlzLmxpc3RzLmxlbmd0aFxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdH0sXHJcblx0XHRcdHRvdWNoU3RhcnQoZSkge1xyXG5cdFx0XHRcdHRoaXMudG91Y2htb3ZlID0gdHJ1ZVxyXG5cdFx0XHRcdGxldCBwYWdlWSA9IGUudG91Y2hlc1swXS5wYWdlWVxyXG5cdFx0XHRcdGxldCBpbmRleCA9IE1hdGguZmxvb3IocGFnZVkgLyB0aGlzLml0ZW1IZWlnaHQpXHJcblx0XHRcdFx0bGV0IGl0ZW0gPSB0aGlzLmxpc3RzW2luZGV4XVxyXG5cdFx0XHRcdGlmIChpdGVtKSB7XHJcblx0XHRcdFx0XHR0aGlzLnNjcm9sbFZpZXdJZCA9ICd1bmktaW5kZXhlZC1saXN0LScgKyBpdGVtLmtleVxyXG5cdFx0XHRcdFx0dGhpcy50b3VjaG1vdmVJbmRleCA9IGluZGV4XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR0b3VjaE1vdmUoZSkge1xyXG5cdFx0XHRcdC8vICNpZm5kZWYgQVBQLVBMVVNcclxuXHRcdFx0XHRsZXQgcGFnZVkgPSBlLnRvdWNoZXNbMF0ucGFnZVlcclxuXHRcdFx0XHRsZXQgaW5kZXggPSBNYXRoLmZsb29yKHBhZ2VZIC8gdGhpcy5pdGVtSGVpZ2h0KVxyXG5cdFx0XHRcdGlmICh0aGlzLnRvdWNobW92ZUluZGV4ID09PSBpbmRleCkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxldCBpdGVtID0gdGhpcy5saXN0c1tpbmRleF1cclxuXHRcdFx0XHRpZiAoaXRlbSkge1xyXG5cdFx0XHRcdFx0dGhpcy5zY3JvbGxWaWV3SWQgPSAndW5pLWluZGV4ZWQtbGlzdC0nICsgaXRlbS5rZXlcclxuXHRcdFx0XHRcdHRoaXMudG91Y2htb3ZlSW5kZXggPSBpbmRleFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQvLyAjZW5kaWZcclxuXHRcdFx0XHQvLyAjaWZkZWYgQVBQLVBMVVNcclxuXHRcdFx0XHR0aHJvdHRsZVRvdWNoTW92ZS5jYWxsKHRoaXMsIGUpXHJcblx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdH0sXHJcblx0XHRcdHRvdWNoRW5kKCkge1xyXG5cdFx0XHRcdHRoaXMudG91Y2htb3ZlID0gZmFsc2VcclxuXHRcdFx0XHR0aGlzLnRvdWNobW92ZUluZGV4ID0gLTFcclxuXHRcdFx0fSxcclxuXHRcdFx0b25DbGljayhlKSB7XHJcblx0XHRcdFx0bGV0IHtcclxuXHRcdFx0XHRcdGlkeCxcclxuXHRcdFx0XHRcdGluZGV4XHJcblx0XHRcdFx0fSA9IGVcclxuXHRcdFx0XHRsZXQgb2JqID0ge31cclxuXHRcdFx0XHRmb3IgKGxldCBrZXkgaW4gdGhpcy5saXN0c1tpZHhdLml0ZW1zW2luZGV4XSkge1xyXG5cdFx0XHRcdFx0b2JqW2tleV0gPSB0aGlzLmxpc3RzW2lkeF0uaXRlbXNbaW5kZXhdW2tleV1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGV0IHNlbGVjdCA9IFtdXHJcblx0XHRcdFx0aWYgKHRoaXMuc2hvd1NlbGVjdCkge1xyXG5cdFx0XHRcdFx0dGhpcy5saXN0c1tpZHhdLml0ZW1zW2luZGV4XS5jaGVja2VkID0gIXRoaXMubGlzdHNbaWR4XS5pdGVtc1tpbmRleF0uY2hlY2tlZFxyXG5cdFx0XHRcdFx0dGhpcy5saXN0cy5mb3JFYWNoKCh2YWx1ZSwgaWR4KSA9PiB7XHJcblx0XHRcdFx0XHRcdHZhbHVlLml0ZW1zLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKGl0ZW0uY2hlY2tlZCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0bGV0IG9iaiA9IHt9XHJcblx0XHRcdFx0XHRcdFx0XHRmb3IgKGxldCBrZXkgaW4gdGhpcy5saXN0c1tpZHhdLml0ZW1zW2luZGV4XSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRvYmpba2V5XSA9IHRoaXMubGlzdHNbaWR4XS5pdGVtc1tpbmRleF1ba2V5XVxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0c2VsZWN0LnB1c2gob2JqKVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMuJGVtaXQoJ2NsaWNrJywge1xyXG5cdFx0XHRcdFx0aXRlbTogb2JqLFxyXG5cdFx0XHRcdFx0c2VsZWN0OiBzZWxlY3RcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHQudW5pLWluZGV4ZWQtbGlzdCB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0dG9wOiAwO1xyXG5cdFx0cmlnaHQ6IDA7XHJcblx0XHRib3R0b206IDA7XHJcblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0LyogI2VuZGlmICovXHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdH1cclxuXHJcblx0LnVuaS1pbmRleGVkLWxpc3RfX3Njcm9sbCB7XHJcblx0XHRmbGV4OiAxO1xyXG5cdH1cclxuXHJcblx0LnVuaS1pbmRleGVkLWxpc3RfX21lbnUge1xyXG5cdFx0d2lkdGg6IDI0cHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XHJcblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0LyogI2VuZGlmICovXHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdH1cclxuXHJcblx0LnVuaS1pbmRleGVkLWxpc3RfX21lbnUtaXRlbSB7XHJcblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0LyogI2VuZGlmICovXHJcblx0XHRmbGV4OiAxO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LnVuaS1pbmRleGVkLWxpc3RfX21lbnUtdGV4dCB7XHJcblx0XHRsaW5lLWhlaWdodDogMjBweDtcclxuXHRcdGZvbnQtc2l6ZTogMTJweDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGNvbG9yOiAjYWFhO1xyXG5cdH1cclxuXHJcblx0LnVuaS1pbmRleGVkLWxpc3RfX21lbnUtLWFjdGl2ZSB7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAwLCAyMDAsIDIwMCk7XHJcblx0fVxyXG5cclxuXHQudW5pLWluZGV4ZWQtbGlzdF9fbWVudS10ZXh0LS1hY3RpdmUge1xyXG5cdFx0Y29sb3I6ICMwMDdhZmY7XHJcblx0fVxyXG5cclxuXHQudW5pLWluZGV4ZWQtbGlzdF9fYWxlcnQtd3JhcHBlciB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0dG9wOiAwO1xyXG5cdFx0cmlnaHQ6IDA7XHJcblx0XHRib3R0b206IDA7XHJcblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0LyogI2VuZGlmICovXHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LnVuaS1pbmRleGVkLWxpc3RfX2FsZXJ0IHtcclxuXHRcdHdpZHRoOiA4MHB4O1xyXG5cdFx0aGVpZ2h0OiA4MHB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogODBweDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGxpbmUtaGVpZ2h0OiA4MHB4O1xyXG5cdFx0Zm9udC1zaXplOiAzNXB4O1xyXG5cdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcblx0fVxyXG48L3N0eWxlPiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vdW5pLWluZGV4ZWQtbGlzdC1pdGVtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NzBjNGNiYSZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi91bmktaW5kZXhlZC1saXN0LWl0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi91bmktaW5kZXhlZC1saXN0LWl0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKCkge1xuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxufVxuaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbn1cbmlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi91bmktaW5kZXhlZC1saXN0LWl0ZW0udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NDcwYzRjYmEmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMuc3R5bGUscmVxdWlyZShcIi4vdW5pLWluZGV4ZWQtbGlzdC1pdGVtLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQ3MGM0Y2JhJnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiKS5kZWZhdWx0KVxuICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjQ3MGM0Y2JhXCIsXG4gIFwiZTFlNDIzMGNcIlxuICBcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJ3ZWIxL3VuaWFwcC9oZWxsby9jb21wb25lbnRzL3VuaS1pbmRleGVkLWxpc3QvdW5pLWluZGV4ZWQtbGlzdC1pdGVtLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS5yZWN5Y2xlLmpzIS4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC0wIS4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3Z1ZS1sb2FkZXIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VuaS1pbmRleGVkLWxpc3QtaXRlbS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDcwYzRjYmEmc2NvcGVkPXRydWUmXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwidmlld1wiLCBbXG4gICAgX3ZtLmxvYWRlZCB8fCBfdm0ubGlzdC5pdGVtSW5kZXggPCAxNVxuICAgICAgPyBfYyhcInZpZXdcIiwgeyBzdGF0aWNDbGFzczogW1widW5pLWluZGV4ZWQtbGlzdF9fdGl0bGUtd3JhcHBlclwiXSB9LCBbXG4gICAgICAgICAgX3ZtLmxpc3QuaXRlbXMgJiYgX3ZtLmxpc3QuaXRlbXMubGVuZ3RoID4gMFxuICAgICAgICAgICAgPyBfYyhcInUtdGV4dFwiLCB7IHN0YXRpY0NsYXNzOiBbXCJ1bmktaW5kZXhlZC1saXN0X190aXRsZVwiXSB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ubGlzdC5rZXkpKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICBdKVxuICAgICAgOiBfdm0uX2UoKSxcbiAgICAoX3ZtLmxvYWRlZCB8fCBfdm0ubGlzdC5pdGVtSW5kZXggPCAxNSkgJiZcbiAgICBfdm0ubGlzdC5pdGVtcyAmJlxuICAgIF92bS5saXN0Lml0ZW1zLmxlbmd0aCA+IDBcbiAgICAgID8gX2MoXG4gICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogW1widW5pLWluZGV4ZWQtbGlzdF9fbGlzdFwiXSB9LFxuICAgICAgICAgIF92bS5fbChfdm0ubGlzdC5pdGVtcywgZnVuY3Rpb24oaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IGluZGV4LFxuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJ1bmktaW5kZXhlZC1saXN0X19pdGVtXCJdLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhvdmVyQ2xhc3M6IFwidW5pLWluZGV4ZWQtbGlzdF9faXRlbS0taG92ZXJcIiB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1widW5pLWluZGV4ZWQtbGlzdF9faXRlbS1jb250YWluZXJcIl0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm9uQ2xpY2soX3ZtLmlkeCwgaW5kZXgpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInZpZXdcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogW1widW5pLWluZGV4ZWQtbGlzdF9faXRlbS1ib3JkZXJcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcInVuaS1pbmRleGVkLWxpc3RfX2l0ZW0tYm9yZGVyLS1sYXN0XCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggPT09IF92bS5saXN0Lml0ZW1zLmxlbmd0aCAtIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zaG93U2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZpZXdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljU3R5bGU6IHsgbWFyZ2luUmlnaHQ6IFwiMjBycHhcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidW5pLWljb25zXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogaXRlbS5jaGVja2VkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJjaGVja2JveC1maWxsZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiY2lyY2xlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogaXRlbS5jaGVja2VkID8gXCIjMDA3YWZmXCIgOiBcIiNhYWFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IFwiMjRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidS10ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcInVuaS1pbmRleGVkLWxpc3RfX2l0ZW0tY29udGVudFwiXSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhpdGVtLm5hbWUpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAwXG4gICAgICAgIClcbiAgICAgIDogX3ZtLl9lKClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy92dWUtbG9hZGVyL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktaW5kZXhlZC1saXN0LWl0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy92dWUtbG9hZGVyL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktaW5kZXhlZC1saXN0LWl0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiPHRlbXBsYXRlPlxyXG5cdDx2aWV3PlxyXG5cdFx0PHZpZXcgdi1pZj1cImxvYWRlZCB8fCBsaXN0Lml0ZW1JbmRleCA8IDE1XCIgY2xhc3M9XCJ1bmktaW5kZXhlZC1saXN0X190aXRsZS13cmFwcGVyXCI+XHJcblx0XHRcdDx0ZXh0IHYtaWY9XCJsaXN0Lml0ZW1zICYmIGxpc3QuaXRlbXMubGVuZ3RoID4gMFwiIGNsYXNzPVwidW5pLWluZGV4ZWQtbGlzdF9fdGl0bGVcIj57eyBsaXN0LmtleSB9fTwvdGV4dD5cclxuXHRcdDwvdmlldz5cclxuXHRcdDx2aWV3IHYtaWY9XCIobG9hZGVkIHx8IGxpc3QuaXRlbUluZGV4IDwgMTUpICYmIGxpc3QuaXRlbXMgJiYgbGlzdC5pdGVtcy5sZW5ndGggPiAwXCIgY2xhc3M9XCJ1bmktaW5kZXhlZC1saXN0X19saXN0XCI+XHJcblx0XHRcdDx2aWV3IHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBsaXN0Lml0ZW1zXCIgOmtleT1cImluZGV4XCIgY2xhc3M9XCJ1bmktaW5kZXhlZC1saXN0X19pdGVtXCIgaG92ZXItY2xhc3M9XCJ1bmktaW5kZXhlZC1saXN0X19pdGVtLS1ob3ZlclwiPlxyXG5cdFx0XHRcdDx2aWV3IGNsYXNzPVwidW5pLWluZGV4ZWQtbGlzdF9faXRlbS1jb250YWluZXJcIiBAY2xpY2s9XCJvbkNsaWNrKGlkeCwgaW5kZXgpXCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cInVuaS1pbmRleGVkLWxpc3RfX2l0ZW0tYm9yZGVyXCIgOmNsYXNzPVwieyd1bmktaW5kZXhlZC1saXN0X19pdGVtLWJvcmRlci0tbGFzdCc6aW5kZXg9PT1saXN0Lml0ZW1zLmxlbmd0aC0xfVwiPlxyXG5cdFx0XHRcdFx0XHQ8dmlldyB2LWlmPVwic2hvd1NlbGVjdFwiIHN0eWxlPVwibWFyZ2luLXJpZ2h0OiAyMHJweDtcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dW5pLWljb25zIDp0eXBlPVwiaXRlbS5jaGVja2VkID8gJ2NoZWNrYm94LWZpbGxlZCcgOiAnY2lyY2xlJ1wiIDpjb2xvcj1cIml0ZW0uY2hlY2tlZCA/ICcjMDA3YWZmJyA6ICcjYWFhJ1wiIHNpemU9XCIyNFwiIC8+XHJcblx0XHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJ1bmktaW5kZXhlZC1saXN0X19pdGVtLWNvbnRlbnRcIj57eyBpdGVtLm5hbWUgfX08L3RleHQ+XHJcblx0XHRcdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0PC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHRpbXBvcnQgdW5pSWNvbnMgZnJvbSAnLi4vdW5pLWljb25zL3VuaS1pY29ucy52dWUnXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0bmFtZTogJ1VuaUluZGV4ZWRMaXN0JyxcclxuXHRcdGNvbXBvbmVudHM6IHtcclxuXHRcdFx0dW5pSWNvbnNcclxuXHRcdH0sXHJcblx0XHRwcm9wczoge1xyXG5cdFx0XHRsb2FkZWQ6IHtcclxuXHRcdFx0XHR0eXBlOiBCb29sZWFuLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IGZhbHNlXHJcblx0XHRcdH0sXHJcblx0XHRcdGlkeDoge1xyXG5cdFx0XHRcdHR5cGU6IE51bWJlcixcclxuXHRcdFx0XHRkZWZhdWx0OiAwXHJcblx0XHRcdH0sXHJcblx0XHRcdGxpc3Q6IHtcclxuXHRcdFx0XHR0eXBlOiBPYmplY3QsXHJcblx0XHRcdFx0ZGVmYXVsdCAoKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4ge31cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdHNob3dTZWxlY3Q6IHtcclxuXHRcdFx0XHR0eXBlOiBCb29sZWFuLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IGZhbHNlXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdG9uQ2xpY2soaWR4LCBpbmRleCkge1xyXG5cdFx0XHRcdHRoaXMuJGVtaXQoXCJpdGVtQ2xpY2tcIiwge1xyXG5cdFx0XHRcdFx0aWR4LFxyXG5cdFx0XHRcdFx0aW5kZXhcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcblx0LnVuaS1pbmRleGVkLWxpc3RfX2xpc3Qge1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuXHRcdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHQvKiAjZW5kaWYgKi9cclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRib3JkZXItdG9wLXN0eWxlOiBzb2xpZDtcclxuXHRcdGJvcmRlci10b3Atd2lkdGg6IDFweDtcclxuXHRcdGJvcmRlci10b3AtY29sb3I6ICNlNWU1ZTU7XHJcblx0fVxyXG5cclxuXHQudW5pLWluZGV4ZWQtbGlzdF9faXRlbSB7XHJcblx0XHRmb250LXNpemU6IDMycnB4O1xyXG5cdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cdFx0ZmxleDogMTtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LnVuaS1pbmRleGVkLWxpc3RfX2l0ZW0tY29udGFpbmVyIHtcclxuXHRcdHBhZGRpbmctbGVmdDogMzBycHg7XHJcblx0XHRmbGV4OiAxO1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0XHQvKiAjZW5kaWYgKi9cclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LnVuaS1pbmRleGVkLWxpc3RfX2l0ZW0tYm9yZGVyIHtcclxuXHRcdGZsZXg6IDE7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRoZWlnaHQ6IDUwcHg7XHJcblx0XHRwYWRkaW5nOiAzMHJweDtcclxuXHRcdHBhZGRpbmctbGVmdDogMDtcclxuXHRcdGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xyXG5cdFx0Ym9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xyXG5cdFx0Ym9yZGVyLWJvdHRvbS1jb2xvcjogI2U1ZTVlNTtcclxuXHR9XHJcblxyXG5cdC51bmktaW5kZXhlZC1saXN0X19pdGVtLWJvcmRlci0tbGFzdCB7XHJcblx0XHRib3JkZXItYm90dG9tLXdpZHRoOiAwcHg7XHJcblx0fVxyXG5cclxuXHQudW5pLWluZGV4ZWQtbGlzdF9faXRlbS1jb250ZW50IHtcclxuXHRcdGZsZXg6IDE7XHJcblx0XHRmb250LXNpemU6IDE0cHg7XHJcblx0fVxyXG5cclxuXHQudW5pLWluZGV4ZWQtbGlzdCB7XHJcblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0LyogI2VuZGlmICovXHJcblx0XHRmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cdH1cclxuXHJcblx0LnVuaS1pbmRleGVkLWxpc3RfX3RpdGxlLXdyYXBwZXIge1xyXG5cdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0LyogI2VuZGlmICovXHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xyXG5cdH1cclxuXHJcblx0LnVuaS1pbmRleGVkLWxpc3RfX3RpdGxlIHtcclxuXHRcdHBhZGRpbmc6IDZweCAxMnB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDI0cHg7XHJcblx0XHRmb250LXNpemU6IDI0cnB4O1xyXG5cdH1cclxuPC9zdHlsZT4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMC0xIS4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0wLTIhLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTAtMyEuLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy92dWUtbG9hZGVyL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktaW5kZXhlZC1saXN0LWl0ZW0udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NDcwYzRjYmEmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvd2VicGFjay11bmktbnZ1ZS1sb2FkZXIvbGliL3N0eWxlLmpzIS4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0wLTEhLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTAtMiEuLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMC0zIS4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3Z1ZS1sb2FkZXIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VuaS1pbmRleGVkLWxpc3QtaXRlbS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00NzBjNGNiYSZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInVuaS1pbmRleGVkLWxpc3RfX2xpc3RcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwiYm9yZGVyVG9wU3R5bGVcIjogXCJzb2xpZFwiLFxuICAgIFwiYm9yZGVyVG9wV2lkdGhcIjogXCIxXCIsXG4gICAgXCJib3JkZXJUb3BDb2xvclwiOiBcIiNlNWU1ZTVcIlxuICB9LFxuICBcInVuaS1pbmRleGVkLWxpc3RfX2l0ZW1cIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIzMnJweFwiLFxuICAgIFwiZmxleFwiOiAxLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCJ1bmktaW5kZXhlZC1saXN0X19pdGVtLWNvbnRhaW5lclwiOiB7XG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjMwcnB4XCIsXG4gICAgXCJmbGV4XCI6IDEsXG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWJldHdlZW5cIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcInVuaS1pbmRleGVkLWxpc3RfX2l0ZW0tYm9yZGVyXCI6IHtcbiAgICBcImZsZXhcIjogMSxcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNTBcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCIzMHJweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMzBycHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIzMHJweFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogMCxcbiAgICBcImJvcmRlckJvdHRvbVN0eWxlXCI6IFwic29saWRcIixcbiAgICBcImJvcmRlckJvdHRvbVdpZHRoXCI6IFwiMVwiLFxuICAgIFwiYm9yZGVyQm90dG9tQ29sb3JcIjogXCIjZTVlNWU1XCJcbiAgfSxcbiAgXCJ1bmktaW5kZXhlZC1saXN0X19pdGVtLWJvcmRlci0tbGFzdFwiOiB7XG4gICAgXCJib3JkZXJCb3R0b21XaWR0aFwiOiBcIjBcIlxuICB9LFxuICBcInVuaS1pbmRleGVkLWxpc3RfX2l0ZW0tY29udGVudFwiOiB7XG4gICAgXCJmbGV4XCI6IDEsXG4gICAgXCJmb250U2l6ZVwiOiBcIjE0XCJcbiAgfSxcbiAgXCJ1bmktaW5kZXhlZC1saXN0XCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIlxuICB9LFxuICBcInVuaS1pbmRleGVkLWxpc3RfX3RpdGxlLXdyYXBwZXJcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2Y3ZjdmN1wiXG4gIH0sXG4gIFwidW5pLWluZGV4ZWQtbGlzdF9fdGl0bGVcIjoge1xuICAgIFwicGFkZGluZ1RvcFwiOiBcIjZcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjEyXCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiNlwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIxMlwiLFxuICAgIFwibGluZUhlaWdodFwiOiBcIjI0XCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjI0cnB4XCJcbiAgfVxufSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvd2VicGFjay11bmktbnZ1ZS1sb2FkZXIvbGliL3N0eWxlLmpzIS4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0wLTEhLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTAtMiEuLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMC0zIS4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3Z1ZS1sb2FkZXIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VuaS1pbmRleGVkLWxpc3QudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MGJiMzc1MjYmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvd2VicGFjay11bmktbnZ1ZS1sb2FkZXIvbGliL3N0eWxlLmpzIS4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0wLTEhLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTAtMiEuLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMC0zIS4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3Z1ZS1sb2FkZXIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VuaS1pbmRleGVkLWxpc3QudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MGJiMzc1MjYmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ1bmktaW5kZXhlZC1saXN0XCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiYWJzb2x1dGVcIixcbiAgICBcImxlZnRcIjogMCxcbiAgICBcInRvcFwiOiAwLFxuICAgIFwicmlnaHRcIjogMCxcbiAgICBcImJvdHRvbVwiOiAwLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiXG4gIH0sXG4gIFwidW5pLWluZGV4ZWQtbGlzdF9fc2Nyb2xsXCI6IHtcbiAgICBcImZsZXhcIjogMVxuICB9LFxuICBcInVuaS1pbmRleGVkLWxpc3RfX21lbnVcIjoge1xuICAgIFwid2lkdGhcIjogXCIyNFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0QzRDNEM1wiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiXG4gIH0sXG4gIFwidW5pLWluZGV4ZWQtbGlzdF9fbWVudS1pdGVtXCI6IHtcbiAgICBcImZsZXhcIjogMSxcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCJ1bmktaW5kZXhlZC1saXN0X19tZW51LXRleHRcIjoge1xuICAgIFwibGluZUhlaWdodFwiOiBcIjIwXCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjEyXCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICBcImNvbG9yXCI6IFwiI2FhYWFhYVwiXG4gIH0sXG4gIFwidW5pLWluZGV4ZWQtbGlzdF9fbWVudS0tYWN0aXZlXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYigyMDAsMjAwLDIwMClcIlxuICB9LFxuICBcInVuaS1pbmRleGVkLWxpc3RfX21lbnUtdGV4dC0tYWN0aXZlXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzAwN2FmZlwiXG4gIH0sXG4gIFwidW5pLWluZGV4ZWQtbGlzdF9fYWxlcnQtd3JhcHBlclwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJsZWZ0XCI6IDAsXG4gICAgXCJ0b3BcIjogMCxcbiAgICBcInJpZ2h0XCI6IDAsXG4gICAgXCJib3R0b21cIjogMCxcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCJ1bmktaW5kZXhlZC1saXN0X19hbGVydFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjgwXCIsXG4gICAgXCJoZWlnaHRcIjogXCI4MFwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiODBcIixcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiLFxuICAgIFwibGluZUhlaWdodFwiOiBcIjgwXCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjM1XCIsXG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcInJnYmEoMCwwLDAsMC41KVwiXG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCB7XCJwYWdlc1wiOnt9LFwiZ2xvYmFsU3R5bGVcIjp7fX0iLCJleHBvcnQgZGVmYXVsdCB7XCJhcHBpZFwiOlwiXCJ9IiwiVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fID0ge31cblZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCIpLmRlZmF1bHQsVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKVxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy93ZWJwYWNrLXVuaS1udnVlLWxvYWRlci9saWIvc3R5bGUuanMhLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTAtMSEuLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMC0yIS4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0wLTMhLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvdnVlLWxvYWRlci9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvd2VicGFjay11bmktbnZ1ZS1sb2FkZXIvbGliL3N0eWxlLmpzIS4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0wLTEhLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTAtMiEuLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMC0zIS4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3Z1ZS1sb2FkZXIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiIiwibW9kdWxlLmV4cG9ydHMgPSB7fSJdLCJzb3VyY2VSb290IjoiIn0=