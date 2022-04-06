(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./assets/js/theme/brands.js":
/*!***********************************!*\
  !*** ./assets/js/theme/brands.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Brands; });
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./catalog */ "./assets/js/theme/catalog.js");
/* harmony import */ var _theme_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../theme/common/utils/translations-utils */ "./assets/js/theme/common/utils/translations-utils.js");
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Brands = /*#__PURE__*/function (_CatalogPage) {
  _inheritsLoose(Brands, _CatalogPage);

  function Brands(context) {
    var _this;

    _this = _CatalogPage.call(this, context) || this;
    _this.validationDictionary = Object(_theme_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_1__["createTranslationDictionary"])(context);
    _this.currentUrl = window.location.href;
    _this.brandsContainer = document.getElementById('brands-filter');
    return _this;
  }

  var _proto = Brands.prototype;

  _proto.onReady = function onReady() {
    this.checkURL();
  };

  _proto.checkURL = function checkURL() {
    this.currentUrl.includes('brands/?starting') ? this.clearBrandsContainer() : null;
  };

  _proto.clearBrandsContainer = function clearBrandsContainer() {
    this.brandsContainer.innerHTML = "<div class='my-loader' style=\"display:flex; justify-content: center; aligh-items: center;\"><img src=\"https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921\"></div>";
    this.getBrandsInfo();
  };

  _proto.getBrandsInfo = function getBrandsInfo() {
    var _this2 = this;

    var token = this.context.token;
    var serverData = '';
    fetch('/graphql', {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + token
      },
      body: JSON.stringify({
        query: "\n                query MyFirstQuery {\n                site {\n                        brands {\n                            edges {\n                                node {\n                                    name,\n                                    defaultImage {\n                                        urlOriginal,\n                                        altText\n                                    }\n                                    seo {\n                                        metaDescription \n                                    }\n                                }\n                            }\n                        }\n                    }\n                }\n                "
      })
    }).then(function (res) {
      return res.json();
    }).then(function (json) {
      var _json$data, _json$data$site, _json$data$site$brand;

      serverData = json == null ? void 0 : (_json$data = json.data) == null ? void 0 : (_json$data$site = _json$data.site) == null ? void 0 : (_json$data$site$brand = _json$data$site.brands) == null ? void 0 : _json$data$site$brand.edges;

      var filterParametr = _this2.currentUrl.split('').slice(-1).join('');

      var filterServerData = serverData.filter(function (el) {
        return el.node.name[0].toLowerCase() == filterParametr;
      });

      if (filterServerData.length) {
        _this2.brandsContainer.innerHTML = '';

        _this2.brandsContainer.classList.add('flex');

        for (var el = 0; el < filterServerData.length; el++) {
          var _filterServerData$el, _filterServerData$el$, _filterServerData$el2, _filterServerData$el3, _filterServerData$el4, _filterServerData$el5, _filterServerData$el6, _filterServerData$el7, _filterServerData$el8, _filterServerData$el9, _filterServerData$el10, _filterServerData$el11, _filterServerData$el12, _filterServerData$el13;

          var li = document.createElement('li');
          li.setAttribute('class', 'filtered-brand__item');
          li.innerHTML = "<div class='brand-img__container'>\n                                        <a href='/" + ((_filterServerData$el = filterServerData[el]) == null ? void 0 : (_filterServerData$el$ = _filterServerData$el.node) == null ? void 0 : _filterServerData$el$.name) + "'><img src='" + ((_filterServerData$el2 = filterServerData[el]) == null ? void 0 : (_filterServerData$el3 = _filterServerData$el2.node) == null ? void 0 : (_filterServerData$el4 = _filterServerData$el3.defaultImage) == null ? void 0 : _filterServerData$el4.urlOriginal) + "' alt='" + ((_filterServerData$el5 = filterServerData[el]) == null ? void 0 : (_filterServerData$el6 = _filterServerData$el5.node) == null ? void 0 : _filterServerData$el6.name) + "'/></a>\n                                    </div>\n                                    <div class=\"brand-info__container\">\n                                        <h3 class=\"brand-name\"><a href='/" + ((_filterServerData$el7 = filterServerData[el]) == null ? void 0 : (_filterServerData$el8 = _filterServerData$el7.node) == null ? void 0 : _filterServerData$el8.name) + "'>" + ((_filterServerData$el9 = filterServerData[el]) == null ? void 0 : (_filterServerData$el10 = _filterServerData$el9.node) == null ? void 0 : _filterServerData$el10.name) + "</a></h3>\n                                        <p class=\"brand-description\" style='font-size:20px'>" + ((_filterServerData$el11 = filterServerData[el]) == null ? void 0 : (_filterServerData$el12 = _filterServerData$el11.node) == null ? void 0 : (_filterServerData$el13 = _filterServerData$el12.seo) == null ? void 0 : _filterServerData$el13.metaDescription) + "</p>\n                                    </div>";

          _this2.brandsContainer.append(li);
        }
      } else {
        _this2.brandsContainer.innerHTML = "<p style='font-size: 20px; text-align: center'>There are no Brands starting from " + filterParametr + "</p>";
      }
    });
  };

  return Brands;
}(_catalog__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./assets/js/theme/catalog.js":
/*!************************************!*\
  !*** ./assets/js/theme/catalog.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CatalogPage; });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/utils/url-utils */ "./assets/js/theme/common/utils/url-utils.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_2__);
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var CatalogPage = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(CatalogPage, _PageManager);

  function CatalogPage(context) {
    var _this;

    _this = _PageManager.call(this, context) || this;
    window.addEventListener('beforeunload', function () {
      if (document.activeElement.id === 'sort') {
        window.localStorage.setItem('sortByStatus', 'selected');
      }
    });
    return _this;
  }

  var _proto = CatalogPage.prototype;

  _proto.arrangeFocusOnSortBy = function arrangeFocusOnSortBy() {
    var $sortBySelector = $('[data-sort-by="product"] #sort');

    if (window.localStorage.getItem('sortByStatus')) {
      $sortBySelector.focus();
      window.localStorage.removeItem('sortByStatus');
    }
  };

  _proto.onSortBySubmit = function onSortBySubmit(event, currentTarget) {
    var url = url__WEBPACK_IMPORTED_MODULE_2___default.a.parse(window.location.href, true);
    var queryParams = $(currentTarget).serialize().split('=');
    url.query[queryParams[0]] = queryParams[1];
    delete url.query.page;
    event.preventDefault();
    window.location = url__WEBPACK_IMPORTED_MODULE_2___default.a.format({
      pathname: url.pathname,
      search: _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_1__["default"].buildQueryString(url.query)
    });
  };

  return CatalogPage;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/utils/translations-utils.js":
/*!************************************************************!*\
  !*** ./assets/js/theme/common/utils/translations-utils.js ***!
  \************************************************************/
/*! exports provided: createTranslationDictionary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslationDictionary", function() { return createTranslationDictionary; });
var TRANSLATIONS = 'translations';

var isTranslationDictionaryNotEmpty = function isTranslationDictionaryNotEmpty(dictionary) {
  return !!Object.keys(dictionary[TRANSLATIONS]).length;
};

var chooseActiveDictionary = function chooseActiveDictionary() {
  for (var i = 0; i < arguments.length; i++) {
    var dictionary = JSON.parse(i < 0 || arguments.length <= i ? undefined : arguments[i]);

    if (isTranslationDictionaryNotEmpty(dictionary)) {
      return dictionary;
    }
  }
};
/**
 * defines Translation Dictionary to use
 * @param context provides access to 3 validation JSONs from en.json:
 * validation_messages, validation_fallback_messages and default_messages
 * @returns {Object}
 */


var createTranslationDictionary = function createTranslationDictionary(context) {
  var validationDictionaryJSON = context.validationDictionaryJSON,
      validationFallbackDictionaryJSON = context.validationFallbackDictionaryJSON,
      validationDefaultDictionaryJSON = context.validationDefaultDictionaryJSON;
  var activeDictionary = chooseActiveDictionary(validationDictionaryJSON, validationFallbackDictionaryJSON, validationDefaultDictionaryJSON);
  var localizations = Object.values(activeDictionary[TRANSLATIONS]);
  var translationKeys = Object.keys(activeDictionary[TRANSLATIONS]).map(function (key) {
    return key.split('.').pop();
  });
  return translationKeys.reduce(function (acc, key, i) {
    acc[key] = localizations[i];
    return acc;
  }, {});
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvYnJhbmRzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9jYXRhbG9nLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vdXRpbHMvdHJhbnNsYXRpb25zLXV0aWxzLmpzIl0sIm5hbWVzIjpbIkJyYW5kcyIsImNvbnRleHQiLCJ2YWxpZGF0aW9uRGljdGlvbmFyeSIsImNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeSIsImN1cnJlbnRVcmwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJicmFuZHNDb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwib25SZWFkeSIsImNoZWNrVVJMIiwiaW5jbHVkZXMiLCJjbGVhckJyYW5kc0NvbnRhaW5lciIsImlubmVySFRNTCIsImdldEJyYW5kc0luZm8iLCJ0b2tlbiIsInNlcnZlckRhdGEiLCJmZXRjaCIsIm1ldGhvZCIsImNyZWRlbnRpYWxzIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicXVlcnkiLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJzaXRlIiwiYnJhbmRzIiwiZWRnZXMiLCJmaWx0ZXJQYXJhbWV0ciIsInNwbGl0Iiwic2xpY2UiLCJqb2luIiwiZmlsdGVyU2VydmVyRGF0YSIsImZpbHRlciIsImVsIiwibm9kZSIsIm5hbWUiLCJ0b0xvd2VyQ2FzZSIsImxlbmd0aCIsImNsYXNzTGlzdCIsImFkZCIsImxpIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImRlZmF1bHRJbWFnZSIsInVybE9yaWdpbmFsIiwic2VvIiwibWV0YURlc2NyaXB0aW9uIiwiYXBwZW5kIiwiQ2F0YWxvZ1BhZ2UiLCJhZGRFdmVudExpc3RlbmVyIiwiYWN0aXZlRWxlbWVudCIsImlkIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImFycmFuZ2VGb2N1c09uU29ydEJ5IiwiJHNvcnRCeVNlbGVjdG9yIiwiJCIsImdldEl0ZW0iLCJmb2N1cyIsInJlbW92ZUl0ZW0iLCJvblNvcnRCeVN1Ym1pdCIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsInVybCIsIlVybCIsInBhcnNlIiwicXVlcnlQYXJhbXMiLCJzZXJpYWxpemUiLCJwYWdlIiwicHJldmVudERlZmF1bHQiLCJmb3JtYXQiLCJwYXRobmFtZSIsInNlYXJjaCIsInVybFV0aWxzIiwiYnVpbGRRdWVyeVN0cmluZyIsIlBhZ2VNYW5hZ2VyIiwiVFJBTlNMQVRJT05TIiwiaXNUcmFuc2xhdGlvbkRpY3Rpb25hcnlOb3RFbXB0eSIsImRpY3Rpb25hcnkiLCJPYmplY3QiLCJrZXlzIiwiY2hvb3NlQWN0aXZlRGljdGlvbmFyeSIsImkiLCJ2YWxpZGF0aW9uRGljdGlvbmFyeUpTT04iLCJ2YWxpZGF0aW9uRmFsbGJhY2tEaWN0aW9uYXJ5SlNPTiIsInZhbGlkYXRpb25EZWZhdWx0RGljdGlvbmFyeUpTT04iLCJhY3RpdmVEaWN0aW9uYXJ5IiwibG9jYWxpemF0aW9ucyIsInZhbHVlcyIsInRyYW5zbGF0aW9uS2V5cyIsIm1hcCIsImtleSIsInBvcCIsInJlZHVjZSIsImFjYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7SUFFcUJBLE07OztBQUNqQixrQkFBWUMsT0FBWixFQUFxQjtBQUFBOztBQUNqQixvQ0FBTUEsT0FBTjtBQUNBLFVBQUtDLG9CQUFMLEdBQTRCQywwR0FBMkIsQ0FBQ0YsT0FBRCxDQUF2RDtBQUNBLFVBQUtHLFVBQUwsR0FBa0JDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsSUFBbEM7QUFDQSxVQUFLQyxlQUFMLEdBQXVCQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsZUFBeEIsQ0FBdkI7QUFKaUI7QUFLcEI7Ozs7U0FFREMsTyxHQUFBLG1CQUFVO0FBQ04sU0FBS0MsUUFBTDtBQUNILEc7O1NBRURBLFEsR0FBQSxvQkFBVztBQUNQLFNBQUtSLFVBQUwsQ0FBZ0JTLFFBQWhCLENB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cEQsTUFBUXlGLHdCQUFSLEdBQXdHekYsT0FBeEcsQ0FBUXlGLHdCQUFSO0FBQUEsTUFBa0NDLGdDQUFsQyxHQUF3RzFGLE9BQXhHLENBQWtDMEYsZ0NBQWxDO0FBQUEsTUFBb0VDLCtCQUFwRSxHQUF3RzNGLE9BQXhHLENBQW9FMkYsK0JBQXBFO0FBQ0EsTUFBTUMsZ0JBQWdCLEdBQUdMLHNCQUFzQixDQUFDRSx3QkFBRCxFQUEyQkMsZ0NBQTNCLEVBQTZEQywrQkFBN0QsQ0FBL0M7QUFDQSxNQUFNRSxhQUFhLEdBQUdSLE1BQU0sQ0FBQ1MsTUFBUCxDQUFjRixnQkFBZ0IsQ0FBQ1YsWUFBRCxDQUE5QixDQUF0QjtBQUNBLE1BQU1hLGVBQWUsR0FBR1YsTUFBTSxDQUFDQyxJQUFQLENBQVlNLGdCQUFnQixDQUFDVixZQUFELENBQTVCLEVBQTRDYyxHQUE1QyxDQUFnRCxVQUFBQyxHQUFHO0FBQUEsV0FBSUEsR0FBRyxDQUFDL0QsS0FBSixDQUFVLEdBQVYsRUFBZWdFLEdBQWYsRUFBSjtBQUFBLEdBQW5ELENBQXhCO0FBRUEsU0FBT0gsZUFBZSxDQUFDSSxNQUFoQixDQUF1QixVQUFDQyxHQUFELEVBQU1ILEdBQU4sRUFBV1QsQ0FBWCxFQUFpQjtBQUMzQ1ksT0FBRyxDQUFDSCxHQUFELENBQUgsR0FBV0osYUFBYSxDQUFDTCxDQUFELENBQXhCO0FBQ0EsV0FBT1ksR0FBUDtBQUNILEdBSE0sRUFHSixFQUhJLENBQVA7QUFJSCxDQVZNLEMiLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLjEwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhdGFsb2dQYWdlIGZyb20gJy4vY2F0YWxvZyc7XG5pbXBvcnQgeyBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkgfSBmcm9tICcuLi90aGVtZS9jb21tb24vdXRpbHMvdHJhbnNsYXRpb25zLXV0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnJhbmRzIGV4dGVuZHMgQ2F0YWxvZ1BhZ2Uge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcbiAgICAgICAgc3VwZXIoY29udGV4dCk7XG4gICAgICAgIHRoaXMudmFsaWRhdGlvbkRpY3Rpb25hcnkgPSBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkoY29udGV4dCk7XG4gICAgICAgIHRoaXMuY3VycmVudFVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgICAgICB0aGlzLmJyYW5kc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdicmFuZHMtZmlsdGVyJylcbiAgICB9XG5cbiAgICBvblJlYWR5KCkge1xuICAgICAgICB0aGlzLmNoZWNrVVJMKClcbiAgICB9XG5cbiAgICBjaGVja1VSTCgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50VXJsLmluY2x1ZGVzKCdicmFuZHMvP3N0YXJ0aW5nJykgPyB0aGlzLmNsZWFyQnJhbmRzQ29udGFpbmVyKCkgOiBudWxsO1xuICAgIH1cblxuICAgIGNsZWFyQnJhbmRzQ29udGFpbmVyICgpIHtcbiAgICAgICAgdGhpcy5icmFuZHNDb250YWluZXIuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9J215LWxvYWRlcicgc3R5bGU9XCJkaXNwbGF5OmZsZXg7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBhbGlnaC1pdGVtczogY2VudGVyO1wiPjxpbWcgc3JjPVwiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy9iL2IxL0xvYWRpbmdfaWNvbi5naWY/MjAxNTEwMjQwMzQ5MjFcIj48L2Rpdj5gO1xuICAgICAgICB0aGlzLmdldEJyYW5kc0luZm8oKVxuICAgIH1cblxuICAgIGdldEJyYW5kc0luZm8gKCkge1xuICAgICAgICB2YXIgdG9rZW4gPSB0aGlzLmNvbnRleHQudG9rZW47XG4gICAgICAgIHZhciBzZXJ2ZXJEYXRhID0gJydcblxuICAgICAgICBmZXRjaCgnL2dyYXBocWwnLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7dG9rZW59YFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBxdWVyeTogYFxuICAgICAgICAgICAgICAgIHF1ZXJ5IE15Rmlyc3RRdWVyeSB7XG4gICAgICAgICAgICAgICAgc2l0ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmFuZHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkZ2VzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdEltYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmxPcmlnaW5hbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHRUZXh0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZW8ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGFEZXNjcmlwdGlvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICAgICAgc2VydmVyRGF0YSA9IGpzb24/LmRhdGE/LnNpdGU/LmJyYW5kcz8uZWRnZXM7XG4gICAgICAgICAgICB2YXIgZmlsdGVyUGFyYW1ldHIgPSB0aGlzLmN1cnJlbnRVcmwuc3BsaXQoJycpLnNsaWNlKC0xKS5qb2luKCcnKTtcbiAgICAgICAgICAgIGNvbnN0IGZpbHRlclNlcnZlckRhdGEgPSBzZXJ2ZXJEYXRhLmZpbHRlcigoZWwpID0+IGVsLm5vZGUubmFtZVswXS50b0xvd2VyQ2FzZSgpID09IGZpbHRlclBhcmFtZXRyKTtcbiAgICAgICAgICAgIGlmIChmaWx0ZXJTZXJ2ZXJEYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYnJhbmRzQ29udGFpbmVyLmlubmVySFRNTCA9JydcbiAgICAgICAgICAgICAgICB0aGlzLmJyYW5kc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmbGV4JylcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBlbCA9IDA7IGVsIDwgZmlsdGVyU2VydmVyRGF0YS5sZW5ndGg7IGVsKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgICAgICAgICAgbGkuc2V0QXR0cmlidXRlKCdjbGFzcycsICdmaWx0ZXJlZC1icmFuZF9faXRlbScpXG4gICAgICAgICAgICAgICAgICAgIGxpLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPSdicmFuZC1pbWdfX2NvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj0nLyR7ZmlsdGVyU2VydmVyRGF0YVtlbF0/Lm5vZGU/Lm5hbWV9Jz48aW1nIHNyYz0nJHtmaWx0ZXJTZXJ2ZXJEYXRhW2VsXT8ubm9kZT8uZGVmYXVsdEltYWdlPy51cmxPcmlnaW5hbH0nIGFsdD0nJHtmaWx0ZXJTZXJ2ZXJEYXRhW2VsXT8ubm9kZT8ubmFtZX0nLz48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJicmFuZC1pbmZvX19jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJicmFuZC1uYW1lXCI+PGEgaHJlZj0nLyR7ZmlsdGVyU2VydmVyRGF0YVtlbF0/Lm5vZGU/Lm5hbWV9Jz4ke2ZpbHRlclNlcnZlckRhdGFbZWxdPy5ub2RlPy5uYW1lfTwvYT48L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiYnJhbmQtZGVzY3JpcHRpb25cIiBzdHlsZT0nZm9udC1zaXplOjIwcHgnPiR7ZmlsdGVyU2VydmVyRGF0YVtlbF0/Lm5vZGU/LnNlbz8ubWV0YURlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnJhbmRzQ29udGFpbmVyLmFwcGVuZChsaSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuYnJhbmRzQ29udGFpbmVyLmlubmVySFRNTCA9IGA8cCBzdHlsZT0nZm9udC1zaXplOiAyMHB4OyB0ZXh0LWFsaWduOiBjZW50ZXInPlRoZXJlIGFyZSBubyBCcmFuZHMgc3RhcnRpbmcgZnJvbSAke2ZpbHRlclBhcmFtZXRyfTwvcD5gXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCBQYWdlTWFuYWdlciBmcm9tICcuL3BhZ2UtbWFuYWdlcic7XG5pbXBvcnQgdXJsVXRpbHMgZnJvbSAnLi9jb21tb24vdXRpbHMvdXJsLXV0aWxzJztcbmltcG9ydCBVcmwgZnJvbSAndXJsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2F0YWxvZ1BhZ2UgZXh0ZW5kcyBQYWdlTWFuYWdlciB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xuICAgICAgICBzdXBlcihjb250ZXh0KTtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmVmb3JldW5sb2FkJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuaWQgPT09ICdzb3J0Jykge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc29ydEJ5U3RhdHVzJywgJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFycmFuZ2VGb2N1c09uU29ydEJ5KCkge1xuICAgICAgICBjb25zdCAkc29ydEJ5U2VsZWN0b3IgPSAkKCdbZGF0YS1zb3J0LWJ5PVwicHJvZHVjdFwiXSAjc29ydCcpO1xuXG4gICAgICAgIGlmICh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NvcnRCeVN0YXR1cycpKSB7XG4gICAgICAgICAgICAkc29ydEJ5U2VsZWN0b3IuZm9jdXMoKTtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnc29ydEJ5U3RhdHVzJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvblNvcnRCeVN1Ym1pdChldmVudCwgY3VycmVudFRhcmdldCkge1xuICAgICAgICBjb25zdCB1cmwgPSBVcmwucGFyc2Uod2luZG93LmxvY2F0aW9uLmhyZWYsIHRydWUpO1xuICAgICAgICBjb25zdCBxdWVyeVBhcmFtcyA9ICQoY3VycmVudFRhcmdldCkuc2VyaWFsaXplKCkuc3BsaXQoJz0nKTtcblxuICAgICAgICB1cmwucXVlcnlbcXVlcnlQYXJhbXNbMF1dID0gcXVlcnlQYXJhbXNbMV07XG4gICAgICAgIGRlbGV0ZSB1cmwucXVlcnkucGFnZTtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24gPSBVcmwuZm9ybWF0KHsgcGF0aG5hbWU6IHVybC5wYXRobmFtZSwgc2VhcmNoOiB1cmxVdGlscy5idWlsZFF1ZXJ5U3RyaW5nKHVybC5xdWVyeSkgfSk7XG4gICAgfVxufVxuIiwiY29uc3QgVFJBTlNMQVRJT05TID0gJ3RyYW5zbGF0aW9ucyc7XG5jb25zdCBpc1RyYW5zbGF0aW9uRGljdGlvbmFyeU5vdEVtcHR5ID0gKGRpY3Rpb25hcnkpID0+ICEhT2JqZWN0LmtleXMoZGljdGlvbmFyeVtUUkFOU0xBVElPTlNdKS5sZW5ndGg7XG5jb25zdCBjaG9vc2VBY3RpdmVEaWN0aW9uYXJ5ID0gKC4uLmRpY3Rpb25hcnlKc29uTGlzdCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGljdGlvbmFyeUpzb25MaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGRpY3Rpb25hcnkgPSBKU09OLnBhcnNlKGRpY3Rpb25hcnlKc29uTGlzdFtpXSk7XG4gICAgICAgIGlmIChpc1RyYW5zbGF0aW9uRGljdGlvbmFyeU5vdEVtcHR5KGRpY3Rpb25hcnkpKSB7XG4gICAgICAgICAgICByZXR1cm4gZGljdGlvbmFyeTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbi8qKlxuICogZGVmaW5lcyBUcmFuc2xhdGlvbiBEaWN0aW9uYXJ5IHRvIHVzZVxuICogQHBhcmFtIGNvbnRleHQgcHJvdmlkZXMgYWNjZXNzIHRvIDMgdmFsaWRhdGlvbiBKU09OcyBmcm9tIGVuLmpzb246XG4gKiB2YWxpZGF0aW9uX21lc3NhZ2VzLCB2YWxpZGF0aW9uX2ZhbGxiYWNrX21lc3NhZ2VzIGFuZCBkZWZhdWx0X21lc3NhZ2VzXG4gKiBAcmV0dXJucyB7T2JqZWN0fVxuICovXG5leHBvcnQgY29uc3QgY3JlYXRlVHJhbnNsYXRpb25EaWN0aW9uYXJ5ID0gKGNvbnRleHQpID0+IHtcbiAgICBjb25zdCB7IHZhbGlkYXRpb25EaWN0aW9uYXJ5SlNPTiwgdmFsaWRhdGlvbkZhbGxiYWNrRGljdGlvbmFyeUpTT04sIHZhbGlkYXRpb25EZWZhdWx0RGljdGlvbmFyeUpTT04gfSA9IGNvbnRleHQ7XG4gICAgY29uc3QgYWN0aXZlRGljdGlvbmFyeSA9IGNob29zZUFjdGl2ZURpY3Rpb25hcnkodmFsaWRhdGlvbkRpY3Rpb25hcnlKU09OLCB2YWxpZGF0aW9uRmFsbGJhY2tEaWN0aW9uYXJ5SlNPTiwgdmFsaWRhdGlvbkRlZmF1bHREaWN0aW9uYXJ5SlNPTik7XG4gICAgY29uc3QgbG9jYWxpemF0aW9ucyA9IE9iamVjdC52YWx1ZXMoYWN0aXZlRGljdGlvbmFyeVtUUkFOU0xBVElPTlNdKTtcbiAgICBjb25zdCB0cmFuc2xhdGlvbktleXMgPSBPYmplY3Qua2V5cyhhY3RpdmVEaWN0aW9uYXJ5W1RSQU5TTEFUSU9OU10pLm1hcChrZXkgPT4ga2V5LnNwbGl0KCcuJykucG9wKCkpO1xuXG4gICAgcmV0dXJuIHRyYW5zbGF0aW9uS2V5cy5yZWR1Y2UoKGFjYywga2V5LCBpKSA9PiB7XG4gICAgICAgIGFjY1trZXldID0gbG9jYWxpemF0aW9uc1tpXTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==