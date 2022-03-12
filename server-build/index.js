/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src */ \"./src/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n // import App from '../src/App';\n\nconst PORT = process.env.PORT || 3006;\nconst app = express__WEBPACK_IMPORTED_MODULE_4___default()();\napp.get('/', (req, res) => {\n  const appData = react_dom_server__WEBPACK_IMPORTED_MODULE_3___default().renderToNodeStream( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_src__WEBPACK_IMPORTED_MODULE_5__.AppData, null));\n  const indexFile = path__WEBPACK_IMPORTED_MODULE_0___default().resolve('./build/index.html');\n  fs__WEBPACK_IMPORTED_MODULE_1___default().readFile(indexFile, 'utf8', (err, data) => {\n    if (err) {\n      console.error('Something went wrong:', err);\n      return res.status(500).send('Oops, better luck next time!');\n    }\n\n    return res.send(data.replace('<div id=\"root\"></div>', `<div id=\"root\">${appData}</div>`));\n  });\n});\napp.use(express__WEBPACK_IMPORTED_MODULE_4___default()[\"static\"]('./build'));\napp.listen(PORT, () => {\n  console.log(`Server is listening on port ${PORT}`);\n});\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(PORT, \"PORT\", \"/home/manisha/Work/Trainings/ReactJs_Advance/ReactjsExpertPracticalTest_Manisha_Naik/server/index.js\");\n  reactHotLoader.register(app, \"app\", \"/home/manisha/Work/Trainings/ReactJs_Advance/ReactjsExpertPracticalTest_Manisha_Naik/server/index.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://assignmnet6_sagas_sessions/./server/index.js?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Dashboard_Dashboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Dashboard/Dashboard */ \"./src/components/Dashboard/Dashboard.js\");\n/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hot-loader */ \"react-hot-loader\");\n/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Movie_Details_Details__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Movie/Details/Details */ \"./src/components/Movie/Details/Details.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\nfunction App() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"App\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    exact: true,\n    path: \"/details/:movieId\",\n    component: _components_Movie_Details_Details__WEBPACK_IMPORTED_MODULE_5__.DetailsPage\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Route, {\n    exact: true,\n    path: \"/\",\n    component: _components_Dashboard_Dashboard__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  }))));\n}\n\nconst _default = (0,react_hot_loader__WEBPACK_IMPORTED_MODULE_4__.hot)(module)(App);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(App, \"App\", \"/home/manisha/Work/Trainings/ReactJs_Advance/ReactjsExpertPracticalTest_Manisha_Naik/src/App.js\");\n  reactHotLoader.register(_default, \"default\", \"/home/manisha/Work/Trainings/ReactJs_Advance/ReactjsExpertPracticalTest_Manisha_Naik/src/App.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://assignmnet6_sagas_sessions/./src/App.js?");

/***/ }),

/***/ "./src/components/Dashboard/Dashboard.js":
/*!***********************************************!*\
  !*** ./src/components/Dashboard/Dashboard.js ***!
  \***********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reselect */ \"reselect\");\n/* harmony import */ var reselect__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reselect__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Layout_DashboardLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Layout/DashboardLayout */ \"./src/components/Layout/DashboardLayout.js\");\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Grid */ \"@mui/material/Grid\");\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Paper */ \"@mui/material/Paper\");\n/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _Movie_Upcoming_Upcoming__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Movie/Upcoming/Upcoming */ \"./src/components/Movie/Upcoming/Upcoming.js\");\n/* harmony import */ var _Movie_NewMovies_NewMovies__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Movie/NewMovies/NewMovies */ \"./src/components/Movie/NewMovies/NewMovies.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _Slider_images__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Slider/images */ \"./src/components/Slider/images.js\");\n/* harmony import */ var _Movie_Slideshow_Slideshow__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Movie/Slideshow/Slideshow */ \"./src/components/Movie/Slideshow/Slideshow.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst Dashboard = props => {\n  // const currentUser = useSelector((state) => state.auth.currentUser.user);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Layout_DashboardLayout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Box, {\n    component: \"main\",\n    sx: {\n      backgroundColor: theme => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],\n      flexGrow: 1,\n      height: '100vh',\n      overflow: 'auto'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Toolbar, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Container, {\n    maxWidth: \"xl\",\n    sx: {},\n    style: {\n      padding: 0\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Movie_Slideshow_Slideshow__WEBPACK_IMPORTED_MODULE_12__[\"default\"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Box, {\n    component: \"main\",\n    sx: {\n      backgroundColor: theme => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],\n      flexGrow: 1 // height: '100vh',\n      // overflow: 'auto',\n\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_9__.Container, {\n    maxWidth: \"lg\",\n    sx: {\n      mt: 4,\n      mb: 4\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5___default()), {\n    container: true,\n    spacing: 3\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_material_Grid__WEBPACK_IMPORTED_MODULE_5___default()), {\n    item: true,\n    xs: 12\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h4\", null, \"New Movies\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Movie_NewMovies_NewMovies__WEBPACK_IMPORTED_MODULE_8__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h4\", null, \"Upcoming Movies\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Movie_Upcoming_Upcoming__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null)))))));\n};\n\nconst _default = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.connect)(state => ({\n  user: state.auth\n}), dispatch => ({\n  actions: (0,redux__WEBPACK_IMPORTED_MODULE_3__.bindActionCreators)({}, dispatch)\n}))(Dashboard);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Dashboard, \"Dashboard\", \"/home/manisha/Work/Trainings/ReactJs_Advance/ReactjsExpertPracticalTest_Manisha_Naik/src/components/Dashboard/Dashboard.js\");\n  reactHotLoader.register(_default, \"default\", \"/home/manisha/Work/Trainings/ReactJs_Advance/ReactjsExpertPracticalTest_Manisha_Naik/src/components/Dashboard/Dashboard.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://assignmnet6_sagas_sessions/./src/components/Dashboard/Dashboard.js?");

/***/ }),

/***/ "./src/components/Filter/Filter.js":
/*!*****************************************!*\
  !*** ./src/components/Filter/Filter.js ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Filter\": () => (/* binding */ Filter)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/InputLabel */ \"@mui/material/InputLabel\");\n/* harmony import */ var _mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/MenuItem */ \"@mui/material/MenuItem\");\n/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/FormControl */ \"@mui/material/FormControl\");\n/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_Select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Select */ \"@mui/material/Select\");\n/* harmony import */ var _mui_material_Select__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Select__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\nconst Filter = () => {\n  const [filterBy, setFilterBy] = react__WEBPACK_IMPORTED_MODULE_0__.useState('');\n\n  const handleChange = event => {\n    setFilterBy(event.target.value);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_3___default()), {\n    variant: \"standard\",\n    sx: {\n      m: 1,\n      minWidth: 120\n    },\n    style: {\n      color: 'white'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_1___default()), {\n    id: \"demo-simple-select-standard-label\",\n    style: {\n      color: 'white'\n    }\n  }, \"Filter By Movie\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_Select__WEBPACK_IMPORTED_MODULE_4___default()), {\n    labelId: \"demo-simple-select-standard-label\",\n    id: \"demo-simple-select-standard\",\n    value: filterBy,\n    onChange: handleChange,\n    label: \"Filter By\",\n    style: {\n      color: 'inherit'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_2___default()), {\n    value: \"\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"em\", null, \"None\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_2___default()), {\n    value: 'Name'\n  }, \"Name\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_2___default()), {\n    value: 'Category'\n  }, \"Category\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_2___default()), {\n    value: 'Tags'\n  }, \"Tags\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_2___default()), {\n    value: 'Genres'\n  }, \"Genres\"))));\n};\n\n__signature__(Filter, \"useState{[filterBy, setFilterBy]('')}\");\n\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Filter, \"Filter\", \"/home/manisha/Work/Trainings/ReactJs_Advance/ReactjsExpertPracticalTest_Manisha_Naik/src/components/Filter/Filter.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://assignmnet6_sagas_sessions/./src/components/Filter/Filter.js?");

/***/ }),

/***/ "./src/components/Layout/DashboardLayout.js":
/*!**************************************************!*\
  !*** ./src/components/Layout/DashboardLayout.js ***!
  \**************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DashboardLayout)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/CssBaseline */ \"@mui/material/CssBaseline\");\n/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Drawer */ \"@mui/material/Drawer\");\n/* harmony import */ var _mui_material_Drawer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Box */ \"@mui/material/Box\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/AppBar */ \"@mui/material/AppBar\");\n/* harmony import */ var _mui_material_AppBar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Toolbar */ \"@mui/material/Toolbar\");\n/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/List */ \"@mui/material/List\");\n/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_List__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Typography */ \"@mui/material/Typography\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Divider */ \"@mui/material/Divider\");\n/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/IconButton */ \"@mui/material/IconButton\");\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _mui_material_Badge__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/Badge */ \"@mui/material/Badge\");\n/* harmony import */ var _mui_material_Badge__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Badge__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @mui/material/Container */ \"@mui/material/Container\");\n/* harmony import */ var _mui_material_Container__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Container__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @mui/material/Grid */ \"@mui/material/Grid\");\n/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @mui/material/Paper */ \"@mui/material/Paper\");\n/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @mui/icons-material/Menu */ \"@mui/icons-material/Menu\");\n/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @mui/icons-material/ChevronLeft */ \"@mui/icons-material/ChevronLeft\");\n/* harmony import */ var _mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ChevronLeft__WEBPACK_IMPORTED_MODULE_17__);\n/* harmony import */ var _mui_icons_material_Notifications__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @mui/icons-material/Notifications */ \"@mui/icons-material/Notifications\");\n/* harmony import */ var _mui_icons_material_Notifications__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Notifications__WEBPACK_IMPORTED_MODULE_18__);\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../utils/utils */ \"./src/utils/utils.js\");\n/* harmony import */ var _images_logo_jpg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../images/logo.jpg */ \"./src/images/logo.jpg\");\n/* harmony import */ var _Search_Search__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../Search/Search */ \"./src/components/Search/Search.js\");\n/* harmony import */ var _Filter_Filter__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../Filter/Filter */ \"./src/components/Filter/Filter.js\");\n/* harmony import */ var _Slider_Slider__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../Slider/Slider */ \"./src/components/Slider/Slider.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_24__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n // import Link from '@mui/material/Link';\n\n\n\n\n\n\n\n\n\n\n\nfunction Copyright(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_9___default()), _extends({\n    variant: \"body2\",\n    color: \"text.secondary\",\n    align: \"center\"\n  }, props), 'Copyright © ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_24__.Link, {\n    color: \"inherit\",\n    href: \"https://mui.com/\"\n  }, \"Your Website\"), ' ', new Date().getFullYear(), '.');\n}\n\nconst drawerWidth = 240;\nconst AppBar = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.styled)((_mui_material_AppBar__WEBPACK_IMPORTED_MODULE_6___default()), {\n  shouldForwardProp: prop => prop !== 'open'\n})(_ref => {\n  let {\n    theme,\n    open\n  } = _ref;\n  return {\n    zIndex: theme.zIndex.drawer + 1,\n    transition: theme.transitions.create(['width', 'margin'], {\n      easing: theme.transitions.easing.sharp,\n      duration: theme.transitions.duration.leavingScreen\n    }),\n    ...(open && {\n      marginLeft: drawerWidth,\n      // width: `calc(100% - ${drawerWidth}px)`, // reduce header width\n      transition: theme.transitions.create(['width', 'margin'], {\n        easing: theme.transitions.easing.sharp,\n        duration: theme.transitions.duration.enteringScreen\n      })\n    })\n  };\n});\nconst Drawer = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.styled)((_mui_material_Drawer__WEBPACK_IMPORTED_MODULE_4___default()), {\n  shouldForwardProp: prop => prop !== 'open'\n})(_ref2 => {\n  let {\n    theme,\n    open\n  } = _ref2;\n  return {\n    '& .MuiDrawer-paper': {\n      position: 'relative',\n      whiteSpace: 'nowrap',\n      width: drawerWidth,\n      transition: theme.transitions.create('width', {\n        easing: theme.transitions.easing.sharp,\n        duration: theme.transitions.duration.enteringScreen\n      }),\n      boxSizing: 'border-box',\n      ...(!open && {\n        overflowX: 'hidden',\n        transition: theme.transitions.create('width', {\n          easing: theme.transitions.easing.sharp,\n          duration: theme.transitions.duration.leavingScreen\n        }),\n        width: theme.spacing(7),\n        [theme.breakpoints.up('sm')]: {\n          width: theme.spacing(9)\n        }\n      })\n    }\n  };\n});\nconst mdTheme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.createTheme)();\nfunction DashboardLayout(props) {\n  const currentUser = (0,_utils_utils__WEBPACK_IMPORTED_MODULE_19__.getUserFromStorage)();\n  const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_0__.useState(true);\n\n  const toggleDrawer = () => {\n    setOpen(!open);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {\n    theme: mdTheme\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_Box__WEBPACK_IMPORTED_MODULE_5___default()), {\n    sx: {\n      display: 'flex'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_3___default()), null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(AppBar, {\n    position: \"absolute\",\n    open: open\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_7___default()), {\n    sx: {\n      pr: '24px' // keep right padding when drawer closed\n\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_11___default()), {\n    edge: \"start\",\n    color: \"inherit\",\n    \"aria-label\": \"open drawer\",\n    onClick: toggleDrawer,\n    sx: {\n      marginRight: '36px',\n      ...(open && {\n        display: 'none'\n      })\n    }\n  }, \"[\", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_16___default()), null), \"............]\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_9___default()), {\n    component: \"h1\",\n    variant: \"h6\",\n    color: \"inherit\",\n    paddingTop: \"7px\",\n    noWrap: true,\n    sx: {\n      flexGrow: 1\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_24__.Link, {\n    to: \"/\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    src: _images_logo_jpg__WEBPACK_IMPORTED_MODULE_20__[\"default\"],\n    height: \"50px\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    style: {\n      padding: '10px 5px',\n      position: 'absolute'\n    }\n  }, \"Movies Galaxy\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Search_Search__WEBPACK_IMPORTED_MODULE_21__.SearchBoxWrapper, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Filter_Filter__WEBPACK_IMPORTED_MODULE_22__.Filter, null))), props.children));\n}\n\n__signature__(DashboardLayout, \"useState{[open, setOpen](true)}\");\n\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Copyright, \"Copyright\", \"/home/manisha/Work/Trainings/ReactJs_Advance/ReactjsExpertPracticalTest_Manisha_Naik/src/components/Layout/DashboardLayout.js\");\n  reactHotLoader.register(drawerWidth, \"drawerWidth\", \"/home/manisha/Work/Trainings/ReactJs_Advance/ReactjsExpertPracticalTest_Manisha_Naik/src/components/Layout/DashboardLayout.js\");\n  reactHotLoader.register(AppBar, \"AppBar\", \"/home/manisha/Work/Trainings/ReactJs_Advance/ReactjsExpertPracticalTest_Manisha_Naik/src/components/Layout/DashboardLayout.js\");\n  reactHotLoader.register(Drawer, \"Drawer\", \"/home/manisha/Work/Trainings/ReactJs_Advance/ReactjsExpertPracticalTest_Manisha_Naik/src/components/Layout/DashboardLayout.js\");\n  reactHotLoader.register(mdTheme, \"mdTheme\", \"/home/manisha/Work/Trainings/ReactJs_Advance/ReactjsExpertPracticalTest_Manisha_Naik/src/components/Layout/DashboardLayout.js\");\n  reactHotLoader.register(DashboardLayout, \"DashboardLayout\", \"/home/manisha/Work/Trainings/ReactJs_Advance/ReactjsExpertPracticalTest_Manisha_Naik/src/components/Layout/DashboardLayout.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://assignmnet6_sagas_sessions/./src/components/Layout/DashboardLayout.js?");

/***/ }),

/***/ "./src/components/Movie/Details/Details.js":
/*!*************************************************!*\
  !*** ./src/components/Movie/Details/Details.js ***!
  \*************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DetailsPage\": () => (/* binding */ DetailsPage),\n/* harmony export */   \"MovieDetails\": () => (/* binding */ MovieDetails)\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _graphql_Queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../graphql/Queries */ \"./src/graphql/Queries.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_material_Table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Table */ \"@mui/material/Table\");\n/* harmony import */ var _mui_material_Table__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Table__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _mui_material_TableBody__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/TableBody */ \"@mui/material/TableBody\");\n/* harmony import */ var _mui_material_TableBody__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableBody__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/TableCell */ \"@mui/material/TableCell\");\n/* harmony import */ var _mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableCell__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _mui_material_TableHead__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/TableHead */ \"@mui/material/TableHead\");\n/* harmony import */ var _mui_material_TableHead__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableHead__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _mui_material_TableRow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/TableRow */ \"@mui/material/TableRow\");\n/* harmony import */ var _mui_material_TableRow__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_material_TableRow__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _Layout_DashboardLayout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../Layout/DashboardLayout */ \"./src/components/Layout/DashboardLayout.js\");\n/* harmony import */ var _Upcoming_Upcoming__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Upcoming/Upcoming */ \"./src/components/Movie/Upcoming/Upcoming.js\");\n/* harmony import */ var react_player_youtube__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-player/youtube */ \"react-player/youtube\");\n/* harmony import */ var react_player_youtube__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_player_youtube__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _MovieModal_MovieModal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../MovieModal/MovieModal */ \"./src/components/MovieModal/MovieModal.js\");\n/* harmony import */ var _Slider_styles__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../Slider/styles */ \"./src/components/Slider/styles.js\");\n/* harmony import */ var _context_movieContext__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../context/movieContext */ \"./src/context/movieContext.js\");\n/* harmony import */ var _store_movie_actions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../store/movie/actions */ \"./src/store/movie/actions.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_17__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\n\n\n\n // import Title from './Title';\n\n\n\n\n\n\n\n\nconst Details = props => {\n  const {\n    movieId\n  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useParams)(); //   const { loading, error, data, refetch } = useQuery(GET_MOVIE_DETAILS, {\n  //     variables: {\n  //       input: {\n  //         id: parseInt(movieId),\n  //       },\n  //     },\n  //   });\n\n  const [getMovie, {\n    loading,\n    error,\n    data,\n    refetch\n  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.useLazyQuery)(_graphql_Queries__WEBPACK_IMPORTED_MODULE_3__.GET_MOVIE_DETAILS, {\n    variables: {\n      input: {\n        id: parseInt(movieId)\n      }\n    }\n  });\n\n  const updateMovie = async () => {\n    if (!props.movie) {\n      await getMovie();\n    }\n\n    props.storeMovie(data);\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    updateMovie();\n  }, []);\n\n  if (loading) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"p\", null, \"Loading...\");\n  }\n\n  if (error) {\n    console.log(error);\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"p\", null, \"Error :\");\n  }\n\n  if (data && data.getMovieDetails) {\n    console.log(data.getMovieDetails);\n  } //   props.storeMovie(data);\n\n\n  console.log('from redux====>', props.movie);\n  return data ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(MovieDetails, {\n    data: data\n  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, \"Loading...\");\n};\n\n__signature__(Details, \"useParams{{ movieId }}\\nuseLazyQuery{[getMovie, { loading, error, data, refetch }]}\\nuseEffect{}\", () => [react_router_dom__WEBPACK_IMPORTED_MODULE_2__.useParams, _apollo_client__WEBPACK_IMPORTED_MODULE_0__.useLazyQuery]);\n\nconst mapStateToProps = state => {\n  return {\n    movie: state?.movie?.data?.getMovieDetails\n  };\n};\n\nconst mapDispatchToProps = dispatch => {\n  return {\n    storeMovie: data => {\n      dispatch((0,_store_movie_actions__WEBPACK_IMPORTED_MODULE_16__.storeMovie)(data));\n    }\n  };\n}; // @todo: to load new and upcoming movie from redux\n\n\nconst DetailsPage = (0,react_redux__WEBPACK_IMPORTED_MODULE_17__.connect)(mapStateToProps, mapDispatchToProps)(Details);\nconst MovieDetails = _ref => {\n  let {\n    data\n  } = _ref;\n  //   console.log('Movie details:', data);\n  const pictures = JSON.parse(data.getMovieDetails.pictures);\n  const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n  const [modalSource, setModalSource] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n  const [mediaType, setMediaType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n\n  const handleOpen = (e, mediaType, source) => {\n    setOpen(true);\n    setModalSource(source || e.target.src);\n    setMediaType(mediaType);\n  };\n\n  const handleClose = () => setOpen(false);\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Layout_DashboardLayout__WEBPACK_IMPORTED_MODULE_10__[\"default\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {\n    component: \"main\",\n    sx: {\n      backgroundColor: theme => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],\n      flexGrow: 1,\n      height: '100vh',\n      overflow: 'auto'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Toolbar, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Container, {\n    maxWidth: \"xl\",\n    sx: {},\n    style: {\n      padding: 0,\n      ..._Slider_styles__WEBPACK_IMPORTED_MODULE_14__.styles.slider\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    style: {\n      background: pictures.filenames[0] ? `url(${pictures.baseUrl}${pictures.filenames[0]}) no-repeat` : 'linear-gradient(140deg, #EADEDB 0%, #BC70A4 50%, #BFD641 75%)',\n      height: '100vh',\n      backgroundSize: 'cover',\n      ..._Slider_styles__WEBPACK_IMPORTED_MODULE_14__.styles.sliderContent\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", {\n    className: \"slider--feature\",\n    style: {\n      position: 'sticky',\n      ..._Slider_styles__WEBPACK_IMPORTED_MODULE_14__.styles.sliderFeature\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"h5\", {\n    style: {\n      paddingLeft: 10,\n      textAlign: 'left',\n      ..._Slider_styles__WEBPACK_IMPORTED_MODULE_14__.styles.featureText\n    }\n  }, \"Genre: \", data.getMovieDetails.Genre), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"h5\", {\n    style: {\n      paddingLeft: 10,\n      textAlign: 'left',\n      ..._Slider_styles__WEBPACK_IMPORTED_MODULE_14__.styles.featureText\n    }\n  }, \"Story Line: \", data.getMovieDetails.text)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Box, {\n    component: \"main\",\n    sx: {\n      backgroundColor: theme => theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],\n      flexGrow: 1,\n      height: '100vh',\n      overflow: 'auto'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Container, {\n    maxWidth: \"lg\",\n    sx: {\n      mt: 4,\n      mb: 4\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {\n    container: true,\n    spacing: 3\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {\n    item: true,\n    xs: 12\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"h4\", null, \"Pictures\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_MovieModal_MovieModal__WEBPACK_IMPORTED_MODULE_13__.MovieModal, {\n    source: modalSource,\n    modalStatus: open,\n    handleClose: handleClose,\n    mediaType: mediaType\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {\n    container: true,\n    spacing: 3\n  }, pictures.filenames ? pictures.filenames.map((picture, index) => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {\n      item: true,\n      xs: 12,\n      md: 4,\n      lg: 3,\n      key: index\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Paper, {\n      sx: {\n        display: 'flex',\n        flexDirection: 'column' // minHeight: 400,\n\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"img\", {\n      src: `${pictures.baseUrl}${picture}`,\n      height: \"100\",\n      width: \"100%\",\n      onClick: e => {\n        handleOpen(e, 'image');\n      }\n    })));\n  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {\n    item: true,\n    xs: 12,\n    md: 4,\n    lg: 3\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"p\", null, \"No videos uploaded\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"h4\", null, \"Videos\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {\n    container: true,\n    spacing: 3\n  }, data.getMovieDetails.videos ? JSON.parse(data.getMovieDetails.videos).map((video, index) => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {\n      item: true,\n      xs: 12,\n      md: 4,\n      lg: 3,\n      key: index\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Paper, {\n      sx: {\n        display: 'flex',\n        flexDirection: 'column'\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"img\", {\n      src: `${pictures.baseUrl}${pictures.filenames[0]}`,\n      height: \"100\",\n      width: \"100%\",\n      onClick: e => {\n        handleOpen(e, 'video', video);\n      }\n    })));\n  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_4__.Grid, {\n    item: true,\n    xs: 12,\n    md: 4,\n    lg: 3\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"p\", null, \"No videos uploaded\")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"h4\", null, \"Movie cast\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", null, data.getMovieDetails.cast && JSON.parse(data.getMovieDetails.cast).join(', ')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"h4\", null, \"Taglines\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", null, data.getMovieDetails.tags && JSON.parse(data.getMovieDetails.tags).join(', ')))))))));\n};\n\n__signature__(MovieDetails, \"useState{[open, setOpen](false)}\\nuseState{[modalSource, setModalSource]('')}\\nuseState{[mediaType, setMediaType]}\");\n\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Details, \"Details\", \"/home/manisha/Work/Trainings/ReactJs_Advance/ReactjsExpertPracticalTest_Manisha_Naik/src/components/Movie/Details/Details.js\");\n  reactHotLoader.register(mapStateToProps, \"mapStateToProps\", \"/home/manisha/Work/Trainings/ReactJs_Advance/ReactjsExpertPracticalTest_Manisha_Naik/src/components/Movie/Details/Details.js\");\n  reactHotLoader.register(mapDispatchToProps, \"mapDispatchToProps\", \"/home/manisha/Work/Trainings/ReactJs_Advance/ReactjsExpertPracticalTest_Manisha_Naik/src/components/Movie/Details/Details.js\");\n  reactHotLoader.register(DetailsPage, \"DetailsPage\", \"/home/manisha/Work/Trainings/ReactJs_Advance/ReactjsExpertPracticalTest_Manisha_Naik/src/components/Movie/Details/Details.js\");\n  reactHotLoader.register(MovieDetails, \"MovieDetails\", \"/home/manisha/Work/Trainings/ReactJs_Advance/ReactjsExpertPracticalTest_Manisha_Naik/src/components/Movie/Details/Details.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://assignmnet6_sagas_sessions/./src/components/Movie/Details/Details.js?");

/***/ }),

/***/ "./src/components/Movie/MovieCard/MovieCard.js":
/*!*****************************************************!*\
  !*** ./src/components/Movie/MovieCard/MovieCard.js ***!
  \*****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MovieCard\": () => (/* binding */ MovieCard)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/Card */ \"@mui/material/Card\");\n/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Card__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_CardActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/CardActions */ \"@mui/material/CardActions\");\n/* harmony import */ var _mui_material_CardActions__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardActions__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/CardContent */ \"@mui/material/CardContent\");\n/* harmony import */ var _mui_material_CardContent__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/CardMedia */ \"@mui/material/CardMedia\");\n/* harmony import */ var _mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Button */ \"@mui/material/Button\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Typography */ \"@mui/material/Typography\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/IconButton */ \"@mui/material/IconButton\");\n/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_9__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\n\n // import Link from '@mui/material/Link';\n\nconst MovieCard = _ref => {\n  let {\n    movie\n  } = _ref;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Grid, {\n    item: true,\n    xs: 12,\n    md: 4,\n    lg: 3\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Paper, {\n    sx: {\n      display: 'flex',\n      flexDirection: 'column' // minHeight: 400,\n\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_Card__WEBPACK_IMPORTED_MODULE_1___default()), {\n    sx: {\n      maxWidth: 345\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_CardMedia__WEBPACK_IMPORTED_MODULE_4___default()), {\n    component: \"img\",\n    alt: \"green iguana\",\n    height: \"140\",\n    image: movie.src\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_CardContent__WEBPACK_IMPORTED_MODULE_3___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default()), {\n    gutterBottom: true,\n    variant: \"h5\",\n    component: \"div\",\n    noWrap: true\n  }, movie.Film), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_6___default()), {\n    variant: \"body2\",\n    color: \"text.secondary\"\n  }, movie.text)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_CardActions__WEBPACK_IMPORTED_MODULE_2___default()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_8___default()), {\n    size: \"small\"\n  }, \"Ratings: \", movie.ratings, \" Star\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_Button__WEBPACK_IMPORTED_MODULE_5___default()), {\n    size: \"small\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Link, {\n    to: `/details/${movie.id}`,\n    underline: \"none\",\n    movie: movie\n  }, \"Learn More\"))))));\n};\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(MovieCard, \"MovieCard\", \"/home/manisha/Work/Trainings/ReactJs_Advance/ReactjsExpertPracticalTest_Manisha_Naik/src/components/Movie/MovieCard/MovieCard.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://assignmnet6_sagas_sessions/./src/components/Movie/MovieCard/MovieCard.js?");

/***/ }),

/***/ "./src/components/Movie/NewMovies/NewMovies.js":
/*!*****************************************************!*\
  !*** ./src/components/Movie/NewMovies/NewMovies.js ***!
  \*****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _graphql_Queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../graphql/Queries */ \"./src/graphql/Queries.js\");\n/* harmony import */ var _MovieCard_MovieCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../MovieCard/MovieCard */ \"./src/components/Movie/MovieCard/MovieCard.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\nconst NewMovies = () => {\n  // const { loading, error, data, refetch } = useQuery(gql`\n  //   query GetUpcomingMovies($input: MovieReleaseFilter) {\n  //     getUpcomingMovies(input: $input) {\n  //       Film\n  //     }\n  //   }\n  // `);\n  const {\n    loading,\n    error,\n    data,\n    refetch\n  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.useQuery)(_graphql_Queries__WEBPACK_IMPORTED_MODULE_3__.GET_NEW_MOVIES, {\n    variables: {\n      input: {\n        releasedDate: new Date().toDateString()\n      }\n    }\n  });\n\n  if (loading) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"p\", null, \"Loading...\");\n  }\n\n  if (error) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"p\", null, \"Error : \", error.message);\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {\n    container: true,\n    spacing: 3\n  }, data.getNewMovies.map((movie, index) => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_MovieCard_MovieCard__WEBPACK_IMPORTED_MODULE_4__.MovieCard, {\n      movie: movie,\n      key: index\n    });\n  })));\n};\n\n__signature__(NewMovies, \"useQuery{{ loading, error, data, refetch }}\", () => [_apollo_client__WEBPACK_IMPORTED_MODULE_0__.useQuery]);\n\nconst _default = NewMovies;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(NewMovies, \"NewMovies\", \"/home/manisha/Work/Trainings/ReactJs_Advance/ReactjsExpertPracticalTest_Manisha_Naik/src/components/Movie/NewMovies/NewMovies.js\");\n  reactHotLoader.register(_default, \"default\", \"/home/manisha/Work/Trainings/ReactJs_Advance/ReactjsExpertPracticalTest_Manisha_Naik/src/components/Movie/NewMovies/NewMovies.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://assignmnet6_sagas_sessions/./src/components/Movie/NewMovies/NewMovies.js?");

/***/ }),

/***/ "./src/components/Movie/Slideshow/Slideshow.js":
/*!*****************************************************!*\
  !*** ./src/components/Movie/Slideshow/Slideshow.js ***!
  \*****************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Slider_images__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Slider/images */ \"./src/components/Slider/images.js\");\n/* harmony import */ var _Slider_Slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Slider/Slider */ \"./src/components/Slider/Slider.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\nconst Slideshow = () => {\n  const {\n    loading,\n    error,\n    data\n  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery)(_apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql`\n    {\n      movies {\n        Film\n        Genre\n        ratings\n        Profitability\n        Year\n        src\n        text\n        releasedDate\n      }\n    }\n  `);\n\n  if (loading) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Loading...\");\n  }\n\n  if (error) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Error :\");\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Slider_Slider__WEBPACK_IMPORTED_MODULE_3__.Slider, {\n    images: data.movies\n  }));\n};\n\n__signature__(Slideshow, \"useQuery{{ loading, error, data }}\", () => [_apollo_client__WEBPACK_IMPORTED_MODULE_1__.useQuery]);\n\nconst _default = Slideshow;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Slideshow, \"Slideshow\", \"/home/manisha/Work/Trainings/ReactJs_Advance/ReactjsExpertPracticalTest_Manisha_Naik/src/components/Movie/Slideshow/Slideshow.js\");\n  reactHotLoader.register(_default, \"default\", \"/home/manisha/Work/Trainings/ReactJs_Advance/ReactjsExpertPracticalTest_Manisha_Naik/src/components/Movie/Slideshow/Slideshow.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://assignmnet6_sagas_sessions/./src/components/Movie/Slideshow/Slideshow.js?");

/***/ }),

/***/ "./src/components/Movie/Upcoming/Upcoming.js":
/*!***************************************************!*\
  !*** ./src/components/Movie/Upcoming/Upcoming.js ***!
  \***************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _graphql_Queries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../graphql/Queries */ \"./src/graphql/Queries.js\");\n/* harmony import */ var _MovieCard_MovieCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../MovieCard/MovieCard */ \"./src/components/Movie/MovieCard/MovieCard.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\nconst Upcoming = _ref => {\n  let {\n    client\n  } = _ref;\n  // const { loading, error, data, refetch } = useQuery(gql`\n  //   query GetUpcomingMovies($input: MovieReleaseFilter) {\n  //     getUpcomingMovies(input: $input) {\n  //       Film\n  //     }\n  //   }\n  // `);\n  const {\n    loading,\n    error,\n    data,\n    refetch\n  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.useQuery)(_graphql_Queries__WEBPACK_IMPORTED_MODULE_3__.GET_UPCOMING_MOVIES, {\n    variables: {\n      input: {\n        releasedDate: '2019-07-20T17:30:15+05:30'\n      }\n    }\n  });\n\n  if (loading) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"p\", null, \"Loading...\");\n  }\n\n  if (error) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"p\", null, \"Error : \", error.message);\n  } //    result =\n  //   useEffect(async () => {\n  //     const result = await client.query({\n  //       query: GET_UPCOMING_MOVIES,\n  //       variables: {\n  //         input: {\n  //           releasedDate: '2019-07-20T17:30:15+05:30',\n  //         },\n  //       },\n  //     });\n  //     // refetch({\n  //     //   input: {\n  //     //     releasedDate: '2019-07-20T17:30:15+05:30',\n  //     //   },\n  //     // });\n  //   }, []);\n\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Grid, {\n    container: true,\n    spacing: 3\n  }, data.getUpcomingMovies.map((movie, index) => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_MovieCard_MovieCard__WEBPACK_IMPORTED_MODULE_4__.MovieCard, {\n      movie: movie,\n      key: index\n    });\n  })));\n};\n\n__signature__(Upcoming, \"useQuery{{ loading, error, data, refetch }}\", () => [_apollo_client__WEBPACK_IMPORTED_MODULE_0__.useQuery]);\n\nconst _default = Upcoming;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Upcoming, \"Upcoming\", \"/home/manisha/Work/Trainings/ReactJs_Advance/ReactjsExpertPracticalTest_Manisha_Naik/src/components/Movie/Upcoming/Upcoming.js\");\n  reactHotLoader.register(_default, \"default\", \"/home/manisha/Work/Trainings/ReactJs_Advance/ReactjsExpertPracticalTest_Manisha_Naik/src/components/Movie/Upcoming/Upcoming.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://assignmnet6_sagas_sessions/./src/components/Movie/Upcoming/Upcoming.js?");

/***/ }),

/***/ "./src/components/MovieModal/MovieModal.js":
/*!*************************************************!*\
  !*** ./src/components/MovieModal/MovieModal.js ***!
  \*************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MovieModal\": () => (/* binding */ MovieModal)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/Box */ \"@mui/material/Box\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Button */ \"@mui/material/Button\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Typography */ \"@mui/material/Typography\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_Modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Modal */ \"@mui/material/Modal\");\n/* harmony import */ var _mui_material_Modal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Modal__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_player_youtube__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-player/youtube */ \"react-player/youtube\");\n/* harmony import */ var react_player_youtube__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_player_youtube__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\nconst style = {\n  position: 'absolute',\n  top: '50%',\n  left: '50%',\n  transform: 'translate(-50%, -50%)',\n  bgcolor: 'background.paper',\n  border: '2px solid #000',\n  boxShadow: 24,\n  p: 4\n};\nconst MovieModal = _ref => {\n  let {\n    source,\n    modalStatus,\n    handleClose,\n    mediaType\n  } = _ref;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_Modal__WEBPACK_IMPORTED_MODULE_4___default()), {\n    open: modalStatus,\n    onClose: handleClose,\n    \"aria-labelledby\": \"modal-modal-title\",\n    \"aria-describedby\": \"modal-modal-description\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_Box__WEBPACK_IMPORTED_MODULE_1___default()), {\n    sx: style\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((_mui_material_Typography__WEBPACK_IMPORTED_MODULE_3___default()), {\n    id: \"modal-modal-title\",\n    variant: \"h6\",\n    component: \"h2\"\n  }, \"Text in a modal\"), mediaType === 'image' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    src: source,\n    height: \"400\",\n    width: \"500\"\n  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement((react_player_youtube__WEBPACK_IMPORTED_MODULE_5___default()), {\n    url: source // light={`${pictures.baseUrl}${pictures.filenames[0]}`}\n    ,\n    light: true\n  }))));\n};\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(style, \"style\", \"/home/manisha/Work/Trainings/ReactJs_Advance/ReactjsExpertPracticalTest_Manisha_Naik/src/components/MovieModal/MovieModal.js\");\n  reactHotLoader.register(MovieModal, \"MovieModal\", \"/home/manisha/Work/Trainings/ReactJs_Advance/ReactjsExpertPracticalTest_Manisha_Naik/src/components/MovieModal/MovieModal.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://assignmnet6_sagas_sessions/./src/components/MovieModal/MovieModal.js?");

/***/ }),

/***/ "./src/components/Search/Search.js":
/*!*****************************************!*\
  !*** ./src/components/Search/Search.js ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SearchBoxWrapper\": () => (/* binding */ SearchBoxWrapper),\n/* harmony export */   \"default\": () => (/* binding */ SearchBox)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Box */ \"@mui/material/Box\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Toolbar */ \"@mui/material/Toolbar\");\n/* harmony import */ var _mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Toolbar__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Typography */ \"@mui/material/Typography\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _mui_material_InputBase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/InputBase */ \"@mui/material/InputBase\");\n/* harmony import */ var _mui_material_InputBase__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_InputBase__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/Menu */ \"@mui/icons-material/Menu\");\n/* harmony import */ var _mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Menu__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/icons-material/Search */ \"@mui/icons-material/Search\");\n/* harmony import */ var _mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _graphql_Queries__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../graphql/Queries */ \"./src/graphql/Queries.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _store_movie_actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../store/movie/actions */ \"./src/store/movie/actions.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_13__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst Search = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.styled)('div')(_ref => {\n  let {\n    theme\n  } = _ref;\n  return {\n    position: 'relative',\n    borderRadius: theme.shape.borderRadius,\n    backgroundColor: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.alpha)(theme.palette.common.white, 0.15),\n    '&:hover': {\n      backgroundColor: (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.alpha)(theme.palette.common.white, 0.25)\n    },\n    marginLeft: 0,\n    marginRight: '10px',\n    width: '100%',\n    [theme.breakpoints.up('sm')]: {\n      marginLeft: theme.spacing(1),\n      width: 'auto'\n    }\n  };\n});\nconst SearchIconWrapper = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.styled)('div')(_ref2 => {\n  let {\n    theme\n  } = _ref2;\n  return {\n    padding: theme.spacing(0, 2),\n    height: '100%',\n    position: 'absolute',\n    pointerEvents: 'none',\n    display: 'flex',\n    alignItems: 'center',\n    justifyContent: 'center'\n  };\n});\nconst StyledInputBase = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_1__.styled)((_mui_material_InputBase__WEBPACK_IMPORTED_MODULE_6___default()))(_ref3 => {\n  let {\n    theme\n  } = _ref3;\n  return {\n    color: 'inherit',\n    '& .MuiInputBase-input': {\n      padding: theme.spacing(1, 1, 1, 0),\n      // vertical padding + font size from searchIcon\n      paddingLeft: `calc(1em + ${theme.spacing(4)})`,\n      transition: theme.transitions.create('width'),\n      width: '100%',\n      [theme.breakpoints.up('sm')]: {\n        width: '20ch',\n        '&:focus': {\n          width: '20ch'\n        }\n      }\n    }\n  };\n});\nfunction SearchBox(props) {\n  const [searchText, setSearchText] = react__WEBPACK_IMPORTED_MODULE_0___default().useState('');\n  const [search, {\n    loading,\n    error,\n    data,\n    refetch\n  }] = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_9__.useLazyQuery)(_graphql_Queries__WEBPACK_IMPORTED_MODULE_10__.SEARCH_DETAILS, {\n    variables: {\n      input: {\n        filter: {\n          Film: searchText\n        }\n      }\n    }\n  });\n\n  const searchMovie = async () => {\n    await search();\n    props.storeSearchResult(data);\n  };\n\n  const handleSearch = e => {\n    searchMovie();\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    searchMovie();\n  }, []);\n\n  const handleSearchInput = e => {\n    setSearchText(e.target.value);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Search, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SearchIconWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_8___default()), null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(StyledInputBase, {\n    value: searchText,\n    onChange: handleSearchInput,\n    placeholder: \"Search\\u2026\",\n    inputProps: {\n      'aria-label': 'search'\n    }\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__.IconButton, {\n    \"aria-label\": \"delete\",\n    onClick: handleSearch\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_icons_material_Search__WEBPACK_IMPORTED_MODULE_8___default()), null)), props.searchResults && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      position: 'relative'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"nav\", {\n    \"aria-label\": \"secondary mailbox folders\",\n    style: {\n      position: 'fixed',\n      right: '13.5%',\n      top: '6.2%',\n      width: '17.8%',\n      fontSize: '0.8em'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__.List, {\n    c: true\n  }, props.searchResults.map((res, index) => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__.ListItem, {\n      disablePadding: true,\n      style: {\n        background: '#a2cef9'\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material__WEBPACK_IMPORTED_MODULE_2__.ListItemButton, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__.Link, {\n      to: `/details/${res.id}`,\n      style: {\n        color: 'white'\n      }\n    }, res.Film)));\n  })))));\n}\n\n__signature__(SearchBox, \"useState{[searchText, setSearchText]('')}\\nuseLazyQuery{[search, { loading, error, data, refetch }]}\\nuseEffect{}\", () => [_apollo_client__WEBPACK_IMPORTED_MODULE_9__.useLazyQuery]);\n\nconst mapStateToProps = state => {\n  return {\n    searchResults: state?.movie?.data?.searchedMovies\n  };\n};\n\nconst mapDispatchToProps = dispatch => {\n  return {\n    storeSearchResult: data => {\n      dispatch((0,_store_movie_actions__WEBPACK_IMPORTED_MODULE_12__.storeSearchResult)(data));\n    }\n  };\n}; // @todo: to load new and upcoming movie from redux\n\n\nconst SearchBoxWrapper = (0,react_redux__WEBPACK_IMPORTED_MODULE_11__.connect)(mapStateToProps, mapDispatchToProps)(SearchBox);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Search, \"Search\", \"/home/manisha/Work/Trainings/ReactJs_Advance/ReactjsExpertPracticalTest_Manisha_Naik/src/components/Search/Search.js\");\n  reactHotLoader.register(SearchIconWrapper, \"SearchIconWrapper\", \"/home/manisha/Work/Trainings/ReactJs_Advance/ReactjsExpertPracticalTest_Manisha_Naik/src/components/Search/Search.js\");\n  reactHotLoader.register(StyledInputBase, \"StyledInputBase\", \"/home/manisha/Work/Trainings/ReactJs_Advance/ReactjsExpertPracticalTest_Manisha_Naik/src/components/Search/Search.js\");\n  reactHotLoader.register(SearchBox, \"SearchBox\", \"/home/manisha/Work/Trainings/ReactJs_Advance/ReactjsExpertPracticalTest_Manisha_Naik/src/components/Search/Search.js\");\n  reactHotLoader.register(mapStateToProps, \"mapStateToProps\", \"/home/manisha/Work/Trainings/ReactJs_Advance/ReactjsExpertPracticalTest_Manisha_Naik/src/components/Search/Search.js\");\n  reactHotLoader.register(mapDispatchToProps, \"mapDispatchToProps\", \"/home/manisha/Work/Trainings/ReactJs_Advance/ReactjsExpertPracticalTest_Manisha_Naik/src/components/Search/Search.js\");\n  reactHotLoader.register(SearchBoxWrapper, \"SearchBoxWrapper\", \"/home/manisha/Work/Trainings/ReactJs_Advance/ReactjsExpertPracticalTest_Manisha_Naik/src/components/Search/Search.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://assignmnet6_sagas_sessions/./src/components/Search/Search.js?");

/***/ }),

/***/ "./src/components/Slider/Slider.js":
/*!*****************************************!*\
  !*** ./src/components/Slider/Slider.js ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Slider\": () => (/* binding */ Slider)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _hooks_useSlider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useSlider */ \"./src/components/hooks/useSlider.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./src/components/Slider/styles.js\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Box */ \"@mui/material/Box\");\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Box__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _mui_material_MobileStepper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/MobileStepper */ \"@mui/material/MobileStepper\");\n/* harmony import */ var _mui_material_MobileStepper__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_material_MobileStepper__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Paper */ \"@mui/material/Paper\");\n/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Typography */ \"@mui/material/Typography\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Button */ \"@mui/material/Button\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material_Button__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _mui_icons_material_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/icons-material/KeyboardArrowLeft */ \"@mui/icons-material/KeyboardArrowLeft\");\n/* harmony import */ var _mui_icons_material_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _mui_icons_material_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/icons-material/KeyboardArrowRight */ \"@mui/icons-material/KeyboardArrowRight\");\n/* harmony import */ var _mui_icons_material_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _mui_icons_material_ArrowCircleLeft__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/icons-material/ArrowCircleLeft */ \"@mui/icons-material/ArrowCircleLeft\");\n/* harmony import */ var _mui_icons_material_ArrowCircleLeft__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ArrowCircleLeft__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _mui_icons_material_ArrowCircleRight__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/icons-material/ArrowCircleRight */ \"@mui/icons-material/ArrowCircleRight\");\n/* harmony import */ var _mui_icons_material_ArrowCircleRight__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material_ArrowCircleRight__WEBPACK_IMPORTED_MODULE_12__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst Slider = _ref => {\n  let {\n    images\n  } = _ref;\n  const slideImage = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  const slideText = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  const slideTitle = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  const {\n    goToPreviousSlide,\n    goToNextSlide\n  } = (0,_hooks_useSlider__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(slideImage, slideText, slideTitle, images);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    ref: slideImage,\n    style: _styles__WEBPACK_IMPORTED_MODULE_2__.styles.slider\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"slider--content\",\n    style: _styles__WEBPACK_IMPORTED_MODULE_2__.styles.sliderContent\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    onClick: goToPreviousSlide,\n    className: \"slider__btn-left\",\n    style: _styles__WEBPACK_IMPORTED_MODULE_2__.styles.slider__btnLeft\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_icons_material_ArrowCircleLeft__WEBPACK_IMPORTED_MODULE_11___default()), null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: \"slider--feature\",\n    style: _styles__WEBPACK_IMPORTED_MODULE_2__.styles.sliderFeature\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n    ref: slideTitle,\n    className: \"feature--title\",\n    style: _styles__WEBPACK_IMPORTED_MODULE_2__.styles.featureTitle\n  }, \"Dreaming\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    ref: slideText,\n    className: \"feature--text\",\n    style: _styles__WEBPACK_IMPORTED_MODULE_2__.styles.featureText\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    className: \"feature__btn\",\n    style: _styles__WEBPACK_IMPORTED_MODULE_2__.styles.featureBtn\n  }, \"Get started\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    onClick: goToNextSlide,\n    className: \"slider__btn-right\",\n    style: _styles__WEBPACK_IMPORTED_MODULE_2__.styles.slider__btnRight\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((_mui_icons_material_ArrowCircleRight__WEBPACK_IMPORTED_MODULE_12___default()), null)))));\n};\n\n__signature__(Slider, \"useRef{slideImage}\\nuseRef{slideText}\\nuseRef{slideTitle}\\nuseSlider{{ goToPreviousSlide, goToNextSlide }}\", () => [_hooks_useSlider__WEBPACK_IMPORTED_MODULE_1__[\"default\"]]);\n\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Slider, \"Slider\", \"/home/manisha/Work/Trainings/ReactJs_Advance/ReactjsExpertPracticalTest_Manisha_Naik/src/components/Slider/Slider.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://assignmnet6_sagas_sessions/./src/components/Slider/Slider.js?");

/***/ }),

/***/ "./src/components/Slider/images.js":
/*!*****************************************!*\
  !*** ./src/components/Slider/images.js ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst _default = [{\n  src: 'https://drive.google.com/uc?id=1_oA9Sx4D4DhFrYBFQdL0I1CUIz_LhQue',\n  text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse',\n  title: 'Dreaming'\n}, {\n  title: 'Learning',\n  src: 'https://drive.google.com/uc?id=1rJFs-8So16UCiDag__hG4yyf_RnC08Fa',\n  text: 'Consectetur adipisicing elit cillum dolore eu fugiat nulla'\n}, {\n  title: 'Traveling',\n  src: 'https://drive.google.com/uc?id=1HO2AGjd_1yyYI4pYTTBmGXBaWHoGSqCl',\n  text: 'Asperiores ex animi explicabo cillum dolore eu fugiat nulla'\n}];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, \"default\", \"/home/manisha/Work/Trainings/ReactJs_Advance/ReactjsExpertPracticalTest_Manisha_Naik/src/components/Slider/images.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://assignmnet6_sagas_sessions/./src/components/Slider/images.js?");

/***/ }),

/***/ "./src/components/Slider/styles.js":
/*!*****************************************!*\
  !*** ./src/components/Slider/styles.js ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"styles\": () => (/* binding */ styles)\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst styles = {\n  slider: {\n    backgroundPosition: 'center',\n    backgroundRepeat: 'no-repeat',\n    backgroundSize: 'cover',\n    height: '100vh',\n    // to be made to 100vh\n    width: '100%'\n  },\n  sliderContent: {\n    display: 'flex',\n    justifyContent: 'space-between',\n    alignItems: 'center',\n    height: '100vh'\n  },\n  slider__btnLeft: {\n    background: 'transparent',\n    border: 'none',\n    outline: 'none',\n    fontSize: '4rem',\n    color: '#eee',\n    padding: '0 1rem',\n    cursor: 'pointer',\n    transition: 'transform 0.1s ease-in-out'\n  },\n  slider__btnRight: {\n    background: 'transparent',\n    border: 'none',\n    outline: 'none',\n    fontSize: '4rem',\n    color: '#eee',\n    padding: '0 1rem',\n    cursor: 'pointer',\n    transition: 'transform 0.1s ease-in-out'\n  },\n  sliderFeature: {\n    textAlign: 'center'\n  },\n  featureTitle: {\n    fontSize: '2.5rem',\n    color: '#fff',\n    textTransform: 'uppercase',\n    fontWeight: 700\n  },\n  featureText: {\n    fontSize: '1rem',\n    color: '#fff',\n    margin: '1rem 0'\n  },\n  featureBtn: {\n    background: '#fff',\n    textTransform: 'uppercase',\n    // border: 'none',\n    color: '#444',\n    border: '1px solid #444',\n    outline: 'none',\n    fontWeight: '700',\n    padding: '0.8rem 2rem',\n    cursor: 'pointer'\n  }\n};\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(styles, \"styles\", \"/home/manisha/Work/Trainings/ReactJs_Advance/ReactjsExpertPracticalTest_Manisha_Naik/src/components/Slider/styles.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://assignmnet6_sagas_sessions/./src/components/Slider/styles.js?");

/***/ }),

/***/ "./src/components/hooks/useSlider.js":
/*!*******************************************!*\
  !*** ./src/components/hooks/useSlider.js ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\nconst useSlider = (slideImage, slideText, slideTitle, images) => {\n  let slideCounter = 0;\n\n  const startSlider = () => {\n    slideImage.current.style.backgroundImage = `linear-gradient(\n            to right,\n            rgba(34, 34, 34, 0.4),\n            rgba(68, 68, 68, 0.4)\n            ), url(${images[0].src})`;\n    slideText.current.innerText = images[0].text;\n    slideTitle.current.innerText = images[0].Film;\n  };\n\n  const animateSlide = () => {\n    slideImage.current.classList.add('fadeIn');\n    setTimeout(() => {\n      slideImage.current.classList.remove('fadeIn');\n    }, 50);\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => startSlider());\n\n  const handleSlide = slide => {\n    slideImage.current.style.backgroundImage = `linear-gradient(\n            to right,\n            rgba(34, 34, 34, 0.4),\n            rgba(68, 68, 68, 0.4)\n          ), url(${images[slide - 1].src})`;\n    slideText.current.innerText = images[slide - 1].text;\n    slideTitle.current.innerText = images[slide - 1].Film;\n    animateSlide(slideImage);\n  };\n\n  const goToPreviousSlide = () => {\n    if (slideCounter === 0) {\n      handleSlide(images.length);\n      slideCounter = images.length;\n    }\n\n    handleSlide(slideCounter);\n    slideCounter--;\n  };\n\n  const goToNextSlide = () => {\n    if (slideCounter === images.length - 1) {\n      startSlider();\n      slideCounter = -1;\n      animateSlide(slideImage);\n    }\n\n    slideImage.current.style.backgroundImage = `linear-gradient(\n          to right,\n          rgba(34, 34, 34, 0.4),\n          rgba(68, 68, 68, 0.4)\n          ),url(${images[slideCounter + 1].src})`;\n    slideText.current.innerText = images[slideCounter + 1].text;\n    slideTitle.current.innerText = images[slideCounter + 1].Film;\n    slideCounter++;\n    animateSlide(slideImage);\n  };\n\n  return {\n    goToPreviousSlide,\n    goToNextSlide\n  };\n};\n\n__signature__(useSlider, \"useEffect{}\");\n\nconst _default = useSlider;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(useSlider, \"useSlider\", \"/home/manisha/Work/Trainings/ReactJs_Advance/ReactjsExpertPracticalTest_Manisha_Naik/src/components/hooks/useSlider.js\");\n  reactHotLoader.register(_default, \"default\", \"/home/manisha/Work/Trainings/ReactJs_Advance/ReactjsExpertPracticalTest_Manisha_Naik/src/components/hooks/useSlider.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://assignmnet6_sagas_sessions/./src/components/hooks/useSlider.js?");

/***/ }),

/***/ "./src/context/movieContext.js":
/*!*************************************!*\
  !*** ./src/context/movieContext.js ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GetMovie\": () => (/* binding */ GetMovie),\n/* harmony export */   \"MovieContextProvider\": () => (/* binding */ MovieContextProvider),\n/* harmony export */   \"movieContext\": () => (/* binding */ movieContext),\n/* harmony export */   \"useMovieContext\": () => (/* binding */ useMovieContext)\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _graphql_Queries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../graphql/Queries */ \"./src/graphql/Queries.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\nconst movieContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n  movie: null,\n  getMovie: () => {},\n  getMovies: () => {}\n});\nconst MOVIE = {};\nconst GetMovie = movieId => {\n  const {\n    loading,\n    error,\n    data,\n    refetch\n  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_0__.useQuery)(_graphql_Queries__WEBPACK_IMPORTED_MODULE_2__.GET_MOVIE_DETAILS, {\n    variables: {\n      input: {\n        id: parseInt(movieId)\n      }\n    }\n  }); //   return { loading, error, data, refetch };\n\n  /*#__PURE__*/\n  react__WEBPACK_IMPORTED_MODULE_1___default().createElement(GetMovie, {\n    loading: loading\n  });\n};\n\n__signature__(GetMovie, \"useQuery{{ loading, error, data, refetch }}\", () => [_apollo_client__WEBPACK_IMPORTED_MODULE_0__.useQuery]);\n\nfunction MovieContextProvider(_ref) {\n  let {\n    children\n  } = _ref;\n  const [movie, setMovie] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(MOVIE);\n  const [movieId, setMovieId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n\n  function getMovie(movieId) {\n    const {\n      data\n    } = GetMovie(movieId);\n    setMovieId(movieId);\n    setMovie(data);\n  }\n\n  function getMovies() {\n    setMovie();\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(movieContext.Provider, {\n    value: {\n      movie,\n      getMovie,\n      getMovies\n    }\n  }, children);\n}\n\n__signature__(MovieContextProvider, \"useState{[movie, setMovie](MOVIE)}\\nuseState{[movieId, setMovieId]('')}\");\n\nfunction useMovieContext() {\n  const {\n    movie,\n    getMovie,\n    getMovies\n  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(movieContext);\n  return {\n    movie,\n    getMovie,\n    getMovies\n  };\n}\n\n__signature__(useMovieContext, \"useContext{{ movie, getMovie, getMovies }}\");\n\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(movieContext, \"movieContext\", \"/home/manisha/Work/Trainings/ReactJs_Advance/ReactjsExpertPracticalTest_Manisha_Naik/src/context/movieContext.js\");\n  reactHotLoader.register(MOVIE, \"MOVIE\", \"/home/manisha/Work/Trainings/ReactJs_Advance/ReactjsExpertPracticalTest_Manisha_Naik/src/context/movieContext.js\");\n  reactHotLoader.register(GetMovie, \"GetMovie\", \"/home/manisha/Work/Trainings/ReactJs_Advance/ReactjsExpertPracticalTest_Manisha_Naik/src/context/movieContext.js\");\n  reactHotLoader.register(MovieContextProvider, \"MovieContextProvider\", \"/home/manisha/Work/Trainings/ReactJs_Advance/ReactjsExpertPracticalTest_Manisha_Naik/src/context/movieContext.js\");\n  reactHotLoader.register(useMovieContext, \"useMovieContext\", \"/home/manisha/Work/Trainings/ReactJs_Advance/ReactjsExpertPracticalTest_Manisha_Naik/src/context/movieContext.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://assignmnet6_sagas_sessions/./src/context/movieContext.js?");

/***/ }),

/***/ "./src/graphql/Queries.js":
/*!********************************!*\
  !*** ./src/graphql/Queries.js ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GET_MOVIE_DETAILS\": () => (/* binding */ GET_MOVIE_DETAILS),\n/* harmony export */   \"GET_NEW_MOVIES\": () => (/* binding */ GET_NEW_MOVIES),\n/* harmony export */   \"GET_UPCOMING_MOVIES\": () => (/* binding */ GET_UPCOMING_MOVIES),\n/* harmony export */   \"SEARCH_DETAILS\": () => (/* binding */ SEARCH_DETAILS),\n/* harmony export */   \"UPLOAD_FILE\": () => (/* binding */ UPLOAD_FILE),\n/* harmony export */   \"UPLOAD_FILE_STREAM\": () => (/* binding */ UPLOAD_FILE_STREAM)\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst {\n  gql\n} = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n\nconst GET_NEW_MOVIES = gql`\n  query GetUpcomingMovies($input: MovieReleaseFilter) {\n    getNewMovies(input: $input) {\n      id\n      Film\n      src\n      text\n      ratings\n    }\n  }\n`;\nconst GET_UPCOMING_MOVIES = gql`\n  query GetUpcomingMovies($input: MovieReleaseFilter) {\n    getUpcomingMovies(input: $input) {\n      id\n      Film\n      src\n      text\n    }\n  }\n`;\nconst GET_MOVIE_DETAILS = gql`\n  query MovieDetails($input: MovieIdFilter) {\n    getMovieDetails(input: $input) {\n      id\n      Film\n      Genre\n      src\n      text\n      cast\n      tags\n      videos\n      pictures\n    }\n  }\n`;\nconst UPLOAD_FILE = gql`\n  mutation SingleUpload($file: Upload!) {\n    singleUpload(file: $file) {\n      filename\n      mimetype\n      encoding\n    }\n  }\n`;\nconst UPLOAD_FILE_STREAM = gql`\n  mutation SingleUploadStream($file: Upload!) {\n    singleUploadStream(file: $file) {\n      filename\n      mimetype\n      encoding\n    }\n  }\n`;\nconst SEARCH_DETAILS = gql`\n  query searchedMovies($input: MovieSearchInput) {\n    searchedMovies(input: $input) {\n      id\n      Film\n      Genre\n      src\n      text\n      cast\n      tags\n      videos\n      pictures\n    }\n  }\n`;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(GET_NEW_MOVIES, \"GET_NEW_MOVIES\", \"/home/manisha/Work/Trainings/ReactJs_Advance/ReactjsExpertPracticalTest_Manisha_Naik/src/graphql/Queries.js\");\n  reactHotLoader.register(GET_UPCOMING_MOVIES, \"GET_UPCOMING_MOVIES\", \"/home/manisha/Work/Trainings/ReactJs_Advance/ReactjsExpertPracticalTest_Manisha_Naik/src/graphql/Queries.js\");\n  reactHotLoader.register(GET_MOVIE_DETAILS, \"GET_MOVIE_DETAILS\", \"/home/manisha/Work/Trainings/ReactJs_Advance/ReactjsExpertPracticalTest_Manisha_Naik/src/graphql/Queries.js\");\n  reactHotLoader.register(UPLOAD_FILE, \"UPLOAD_FILE\", \"/home/manisha/Work/Trainings/ReactJs_Advance/ReactjsExpertPracticalTest_Manisha_Naik/src/graphql/Queries.js\");\n  reactHotLoader.register(UPLOAD_FILE_STREAM, \"UPLOAD_FILE_STREAM\", \"/home/manisha/Work/Trainings/ReactJs_Advance/ReactjsExpertPracticalTest_Manisha_Naik/src/graphql/Queries.js\");\n  reactHotLoader.register(SEARCH_DETAILS, \"SEARCH_DETAILS\", \"/home/manisha/Work/Trainings/ReactJs_Advance/ReactjsExpertPracticalTest_Manisha_Naik/src/graphql/Queries.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://assignmnet6_sagas_sessions/./src/graphql/Queries.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AppData\": () => (/* binding */ AppData)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ \"./src/App.js\");\n/* harmony import */ var _reportWebVitals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reportWebVitals */ \"./src/reportWebVitals.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store/store */ \"./src/store/store.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var cross_fetch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! cross-fetch */ \"cross-fetch\");\n/* harmony import */ var cross_fetch__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(cross_fetch__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _context_movieContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./context/movieContext */ \"./src/context/movieContext.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\n\n // @todo: solve cross fetch error\n\nconst client = new _apollo_client__WEBPACK_IMPORTED_MODULE_7__.ApolloClient({\n  link: new _apollo_client__WEBPACK_IMPORTED_MODULE_7__.HttpLink({\n    uri: 'http://localhost:4000/graphql',\n    fetch: (cross_fetch__WEBPACK_IMPORTED_MODULE_8___default())\n  }),\n  cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_7__.InMemoryCache()\n});\nconst AppData = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_5__.Provider, {\n    store: _store_store__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_context_movieContext__WEBPACK_IMPORTED_MODULE_9__.MovieContextProvider, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_apollo_client__WEBPACK_IMPORTED_MODULE_7__.ApolloProvider, {\n    client: client\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_App__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null))));\n}; // serverside rendering document not defined\n\nif (typeof window !== 'undefined') {\n  react_dom__WEBPACK_IMPORTED_MODULE_1___default().render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().StrictMode), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AppData, null)), document.getElementById('root'));\n} // If you want to start measuring performance in your app, pass a function\n// to log results (for example: reportWebVitals(console.log))\n// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals\n\n\n(0,_reportWebVitals__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(client, \"client\", \"/home/manisha/Work/Trainings/ReactJs_Advance/ReactjsExpertPracticalTest_Manisha_Naik/src/index.js\");\n  reactHotLoader.register(AppData, \"AppData\", \"/home/manisha/Work/Trainings/ReactJs_Advance/ReactjsExpertPracticalTest_Manisha_Naik/src/index.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://assignmnet6_sagas_sessions/./src/index.js?");

/***/ }),

/***/ "./src/reportWebVitals.js":
/*!********************************!*\
  !*** ./src/reportWebVitals.js ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst reportWebVitals = onPerfEntry => {\n  if (onPerfEntry && onPerfEntry instanceof Function) {\n    Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! web-vitals */ \"web-vitals\", 23)).then(_ref => {\n      let {\n        getCLS,\n        getFID,\n        getFCP,\n        getLCP,\n        getTTFB\n      } = _ref;\n      getCLS(onPerfEntry);\n      getFID(onPerfEntry);\n      getFCP(onPerfEntry);\n      getLCP(onPerfEntry);\n      getTTFB(onPerfEntry);\n    });\n  }\n};\n\nconst _default = reportWebVitals;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(reportWebVitals, \"reportWebVitals\", \"/home/manisha/Work/Trainings/ReactJs_Advance/ReactjsExpertPracticalTest_Manisha_Naik/src/reportWebVitals.js\");\n  reactHotLoader.register(_default, \"default\", \"/home/manisha/Work/Trainings/ReactJs_Advance/ReactjsExpertPracticalTest_Manisha_Naik/src/reportWebVitals.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://assignmnet6_sagas_sessions/./src/reportWebVitals.js?");

/***/ }),

/***/ "./src/store/movie/actions.js":
/*!************************************!*\
  !*** ./src/store/movie/actions.js ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"storeMovie\": () => (/* binding */ storeMovie),\n/* harmony export */   \"storeSearchResult\": () => (/* binding */ storeSearchResult)\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst storeMovie = data => async dispatch => {\n  console.log('===========>', data);\n  dispatch({\n    type: 'STORE_MOVIE',\n    payload: data\n  });\n};\nconst storeSearchResult = data => async dispatch => {\n  dispatch({\n    type: 'STORE_SEARCH_RESULTS',\n    payload: data\n  });\n};\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(storeMovie, \"storeMovie\", \"/home/manisha/Work/Trainings/ReactJs_Advance/ReactjsExpertPracticalTest_Manisha_Naik/src/store/movie/actions.js\");\n  reactHotLoader.register(storeSearchResult, \"storeSearchResult\", \"/home/manisha/Work/Trainings/ReactJs_Advance/ReactjsExpertPracticalTest_Manisha_Naik/src/store/movie/actions.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://assignmnet6_sagas_sessions/./src/store/movie/actions.js?");

/***/ }),

/***/ "./src/store/movie/reducer.js":
/*!************************************!*\
  !*** ./src/store/movie/reducer.js ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst initialState = {\n  error: null,\n  validationError: null\n};\n\nconst movieReducer = function () {\n  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  let action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case 'STORE_MOVIE':\n      {\n        return { ...state,\n          data: { ...action.payload\n          },\n          error: null,\n          validationError: null\n        };\n      }\n\n    case 'STORE_SEARCH_RESULTS':\n      {\n        return { ...state,\n          data: { ...action.payload\n          },\n          error: null,\n          validationError: null\n        };\n      }\n\n    default:\n      {\n        return state;\n      }\n  }\n};\n\nconst _default = movieReducer;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(initialState, \"initialState\", \"/home/manisha/Work/Trainings/ReactJs_Advance/ReactjsExpertPracticalTest_Manisha_Naik/src/store/movie/reducer.js\");\n  reactHotLoader.register(movieReducer, \"movieReducer\", \"/home/manisha/Work/Trainings/ReactJs_Advance/ReactjsExpertPracticalTest_Manisha_Naik/src/store/movie/reducer.js\");\n  reactHotLoader.register(_default, \"default\", \"/home/manisha/Work/Trainings/ReactJs_Advance/ReactjsExpertPracticalTest_Manisha_Naik/src/store/movie/reducer.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://assignmnet6_sagas_sessions/./src/store/movie/reducer.js?");

/***/ }),

/***/ "./src/store/rootReducer.js":
/*!**********************************!*\
  !*** ./src/store/rootReducer.js ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _movie_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movie/reducer */ \"./src/store/movie/reducer.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\nconst _default = (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({\n  movie: _movie_reducer__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n});\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, \"default\", \"/home/manisha/Work/Trainings/ReactJs_Advance/ReactjsExpertPracticalTest_Manisha_Naik/src/store/rootReducer.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://assignmnet6_sagas_sessions/./src/store/rootReducer.js?");

/***/ }),

/***/ "./src/store/store.js":
/*!****************************!*\
  !*** ./src/store/store.js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-redux */ \"react-router-redux\");\n/* harmony import */ var react_router_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _rootReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rootReducer */ \"./src/store/rootReducer.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n // import { reduxSagaMiddleware, initSagas } from './sagas';\n\n\n\nfunction configureStore() {\n  let initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  const reduxThunkMiddleware = (redux_thunk__WEBPACK_IMPORTED_MODULE_2___default());\n  const reduxRouterMiddleware = (0,react_router_redux__WEBPACK_IMPORTED_MODULE_1__.routerMiddleware)();\n  const enhancers = (0,redux__WEBPACK_IMPORTED_MODULE_0__.compose)(typeof window !== 'undefined' && window.devToolsExtension ? window.devToolsExtension() : f => f); // const composeEnhancers =\n  //   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;\n\n  const middleware = enhancers((0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)( //   reduxSagaMiddleware,\n  reduxThunkMiddleware, reduxRouterMiddleware));\n  const store = (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(_rootReducer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], initialState, middleware); //   initSagas();\n\n  return store;\n}\n\nconst _default = configureStore();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(configureStore, \"configureStore\", \"/home/manisha/Work/Trainings/ReactJs_Advance/ReactjsExpertPracticalTest_Manisha_Naik/src/store/store.js\");\n  reactHotLoader.register(_default, \"default\", \"/home/manisha/Work/Trainings/ReactJs_Advance/ReactjsExpertPracticalTest_Manisha_Naik/src/store/store.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://assignmnet6_sagas_sessions/./src/store/store.js?");

/***/ }),

/***/ "./src/utils/utils.js":
/*!****************************!*\
  !*** ./src/utils/utils.js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkHttpStatus\": () => (/* binding */ checkHttpStatus),\n/* harmony export */   \"createFormData\": () => (/* binding */ createFormData),\n/* harmony export */   \"getUserFromStorage\": () => (/* binding */ getUserFromStorage),\n/* harmony export */   \"parseJSON\": () => (/* binding */ parseJSON),\n/* harmony export */   \"sum\": () => (/* binding */ sum)\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nfunction checkHttpStatus(response) {\n  if (response.status >= 200 && response.status < 300) {\n    return response;\n  }\n\n  const error = new Error(response.statusText);\n  error.response = response;\n  throw error;\n}\nfunction parseJSON(response) {\n  return response.json();\n}\nfunction createFormData(response) {\n  let urlEncodedData = '';\n  const urlEncodedDataPairs = [];\n  let name;\n\n  for (name in response) {\n    urlEncodedDataPairs.push(`${encodeURIComponent(name)}=${encodeURIComponent(response[name])}`);\n  }\n\n  urlEncodedData = urlEncodedDataPairs.join('&').replace(/%20/g, '+');\n  return urlEncodedData;\n}\nconst getUserFromStorage = () => {\n  const currentUser = localStorage.getItem('auth_user');\n  return JSON.parse(currentUser);\n};\nconst sum = (a, b) => {\n  return a + b;\n};\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(checkHttpStatus, \"checkHttpStatus\", \"/home/manisha/Work/Trainings/ReactJs_Advance/ReactjsExpertPracticalTest_Manisha_Naik/src/utils/utils.js\");\n  reactHotLoader.register(parseJSON, \"parseJSON\", \"/home/manisha/Work/Trainings/ReactJs_Advance/ReactjsExpertPracticalTest_Manisha_Naik/src/utils/utils.js\");\n  reactHotLoader.register(createFormData, \"createFormData\", \"/home/manisha/Work/Trainings/ReactJs_Advance/ReactjsExpertPracticalTest_Manisha_Naik/src/utils/utils.js\");\n  reactHotLoader.register(getUserFromStorage, \"getUserFromStorage\", \"/home/manisha/Work/Trainings/ReactJs_Advance/ReactjsExpertPracticalTest_Manisha_Naik/src/utils/utils.js\");\n  reactHotLoader.register(sum, \"sum\", \"/home/manisha/Work/Trainings/ReactJs_Advance/ReactjsExpertPracticalTest_Manisha_Naik/src/utils/utils.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://assignmnet6_sagas_sessions/./src/utils/utils.js?");

/***/ }),

/***/ "./src/images/logo.jpg":
/*!*****************************!*\
  !*** ./src/images/logo.jpg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"logo.jpg\");\n\n//# sourceURL=webpack://assignmnet6_sagas_sessions/./src/images/logo.jpg?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://assignmnet6_sagas_sessions/./src/index.css?");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ "@mui/icons-material/ArrowCircleLeft":
/*!******************************************************!*\
  !*** external "@mui/icons-material/ArrowCircleLeft" ***!
  \******************************************************/
/***/ ((module) => {

module.exports = require("@mui/icons-material/ArrowCircleLeft");

/***/ }),

/***/ "@mui/icons-material/ArrowCircleRight":
/*!*******************************************************!*\
  !*** external "@mui/icons-material/ArrowCircleRight" ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = require("@mui/icons-material/ArrowCircleRight");

/***/ }),

/***/ "@mui/icons-material/ChevronLeft":
/*!**************************************************!*\
  !*** external "@mui/icons-material/ChevronLeft" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("@mui/icons-material/ChevronLeft");

/***/ }),

/***/ "@mui/icons-material/KeyboardArrowLeft":
/*!********************************************************!*\
  !*** external "@mui/icons-material/KeyboardArrowLeft" ***!
  \********************************************************/
/***/ ((module) => {

module.exports = require("@mui/icons-material/KeyboardArrowLeft");

/***/ }),

/***/ "@mui/icons-material/KeyboardArrowRight":
/*!*********************************************************!*\
  !*** external "@mui/icons-material/KeyboardArrowRight" ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = require("@mui/icons-material/KeyboardArrowRight");

/***/ }),

/***/ "@mui/icons-material/Menu":
/*!*******************************************!*\
  !*** external "@mui/icons-material/Menu" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@mui/icons-material/Menu");

/***/ }),

/***/ "@mui/icons-material/Notifications":
/*!****************************************************!*\
  !*** external "@mui/icons-material/Notifications" ***!
  \****************************************************/
/***/ ((module) => {

module.exports = require("@mui/icons-material/Notifications");

/***/ }),

/***/ "@mui/icons-material/Search":
/*!*********************************************!*\
  !*** external "@mui/icons-material/Search" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("@mui/icons-material/Search");

/***/ }),

/***/ "@mui/material":
/*!********************************!*\
  !*** external "@mui/material" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ "@mui/material/AppBar":
/*!***************************************!*\
  !*** external "@mui/material/AppBar" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@mui/material/AppBar");

/***/ }),

/***/ "@mui/material/Badge":
/*!**************************************!*\
  !*** external "@mui/material/Badge" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Badge");

/***/ }),

/***/ "@mui/material/Box":
/*!************************************!*\
  !*** external "@mui/material/Box" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Box");

/***/ }),

/***/ "@mui/material/Button":
/*!***************************************!*\
  !*** external "@mui/material/Button" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Button");

/***/ }),

/***/ "@mui/material/Card":
/*!*************************************!*\
  !*** external "@mui/material/Card" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Card");

/***/ }),

/***/ "@mui/material/CardActions":
/*!********************************************!*\
  !*** external "@mui/material/CardActions" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@mui/material/CardActions");

/***/ }),

/***/ "@mui/material/CardContent":
/*!********************************************!*\
  !*** external "@mui/material/CardContent" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@mui/material/CardContent");

/***/ }),

/***/ "@mui/material/CardMedia":
/*!******************************************!*\
  !*** external "@mui/material/CardMedia" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("@mui/material/CardMedia");

/***/ }),

/***/ "@mui/material/Container":
/*!******************************************!*\
  !*** external "@mui/material/Container" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Container");

/***/ }),

/***/ "@mui/material/CssBaseline":
/*!********************************************!*\
  !*** external "@mui/material/CssBaseline" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@mui/material/CssBaseline");

/***/ }),

/***/ "@mui/material/Divider":
/*!****************************************!*\
  !*** external "@mui/material/Divider" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Divider");

/***/ }),

/***/ "@mui/material/Drawer":
/*!***************************************!*\
  !*** external "@mui/material/Drawer" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Drawer");

/***/ }),

/***/ "@mui/material/FormControl":
/*!********************************************!*\
  !*** external "@mui/material/FormControl" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@mui/material/FormControl");

/***/ }),

/***/ "@mui/material/Grid":
/*!*************************************!*\
  !*** external "@mui/material/Grid" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Grid");

/***/ }),

/***/ "@mui/material/IconButton":
/*!*******************************************!*\
  !*** external "@mui/material/IconButton" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@mui/material/IconButton");

/***/ }),

/***/ "@mui/material/InputBase":
/*!******************************************!*\
  !*** external "@mui/material/InputBase" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("@mui/material/InputBase");

/***/ }),

/***/ "@mui/material/InputLabel":
/*!*******************************************!*\
  !*** external "@mui/material/InputLabel" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@mui/material/InputLabel");

/***/ }),

/***/ "@mui/material/List":
/*!*************************************!*\
  !*** external "@mui/material/List" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("@mui/material/List");

/***/ }),

/***/ "@mui/material/MenuItem":
/*!*****************************************!*\
  !*** external "@mui/material/MenuItem" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("@mui/material/MenuItem");

/***/ }),

/***/ "@mui/material/MobileStepper":
/*!**********************************************!*\
  !*** external "@mui/material/MobileStepper" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("@mui/material/MobileStepper");

/***/ }),

/***/ "@mui/material/Modal":
/*!**************************************!*\
  !*** external "@mui/material/Modal" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Modal");

/***/ }),

/***/ "@mui/material/Paper":
/*!**************************************!*\
  !*** external "@mui/material/Paper" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Paper");

/***/ }),

/***/ "@mui/material/Select":
/*!***************************************!*\
  !*** external "@mui/material/Select" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Select");

/***/ }),

/***/ "@mui/material/Table":
/*!**************************************!*\
  !*** external "@mui/material/Table" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Table");

/***/ }),

/***/ "@mui/material/TableBody":
/*!******************************************!*\
  !*** external "@mui/material/TableBody" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("@mui/material/TableBody");

/***/ }),

/***/ "@mui/material/TableCell":
/*!******************************************!*\
  !*** external "@mui/material/TableCell" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("@mui/material/TableCell");

/***/ }),

/***/ "@mui/material/TableHead":
/*!******************************************!*\
  !*** external "@mui/material/TableHead" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("@mui/material/TableHead");

/***/ }),

/***/ "@mui/material/TableRow":
/*!*****************************************!*\
  !*** external "@mui/material/TableRow" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("@mui/material/TableRow");

/***/ }),

/***/ "@mui/material/Toolbar":
/*!****************************************!*\
  !*** external "@mui/material/Toolbar" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Toolbar");

/***/ }),

/***/ "@mui/material/Typography":
/*!*******************************************!*\
  !*** external "@mui/material/Typography" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@mui/material/Typography");

/***/ }),

/***/ "@mui/material/styles":
/*!***************************************!*\
  !*** external "@mui/material/styles" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ "cross-fetch":
/*!******************************!*\
  !*** external "cross-fetch" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("cross-fetch");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-hot-loader":
/*!***********************************!*\
  !*** external "react-hot-loader" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-hot-loader");

/***/ }),

/***/ "react-player/youtube":
/*!***************************************!*\
  !*** external "react-player/youtube" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("react-player/youtube");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-router-dom");

/***/ }),

/***/ "react-router-redux":
/*!*************************************!*\
  !*** external "react-router-redux" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("react-router-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

module.exports = require("redux");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("redux-thunk");

/***/ }),

/***/ "reselect":
/*!***************************!*\
  !*** external "reselect" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("reselect");

/***/ }),

/***/ "web-vitals":
/*!*****************************!*\
  !*** external "web-vitals" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("web-vitals");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./server/index.js");
/******/ 	
/******/ })()
;