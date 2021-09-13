webpackHotUpdate_N_E("pages/consultar-inventarios",{

/***/ "./node_modules/react-sticky-mouse-tooltip/dist/MouseTooltip.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-sticky-mouse-tooltip/dist/MouseTooltip.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var PropTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"); // eslint-disable-line import/no-extraneous-dependencies

class MouseTooltip extends React.PureComponent {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      xPosition: 0,
      yPosition: 0,
      mouseMoved: false,
      listenerActive: false
    });

    _defineProperty(this, "getTooltipPosition", ({
      clientX: xPosition,
      clientY: yPosition
    }) => {
      this.setState({
        xPosition,
        yPosition,
        mouseMoved: true
      });
    });

    _defineProperty(this, "addListener", () => {
      window.addEventListener('mousemove', this.getTooltipPosition);
      this.setState({
        listenerActive: true
      });
    });

    _defineProperty(this, "removeListener", () => {
      window.removeEventListener('mousemove', this.getTooltipPosition);
      this.setState({
        listenerActive: false
      });
    });

    _defineProperty(this, "updateListener", () => {
      if (!this.state.listenerActive && this.props.visible) {
        this.addListener();
      }

      if (this.state.listenerActive && !this.props.visible) {
        this.removeListener();
      }
    });
  }

  componentDidMount() {
    this.addListener();
  }

  componentDidUpdate() {
    this.updateListener();
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    return React.createElement("div", {
      className: this.props.className,
      style: _objectSpread({
        display: this.props.visible && this.state.mouseMoved ? 'block' : 'none',
        position: 'fixed',
        top: this.state.yPosition + this.props.offsetY,
        left: this.state.xPosition + this.props.offsetX
      }, this.props.style)
    }, this.props.children);
  }

}

_defineProperty(MouseTooltip, "defaultProps", {
  visible: true,
  offsetX: 0,
  offsetY: 0
});

MouseTooltip.propTypes = {
  visible: PropTypes.bool,
  children: PropTypes.node.isRequired,
  offsetX: PropTypes.number,
  offsetY: PropTypes.number,
  className: PropTypes.string,
  style: PropTypes.object // eslint-disable-line react/forbid-prop-types

};

module.exports = MouseTooltip;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Nb3VzZVRvb2x0aXAuanN4Il0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiTW91c2VUb29sdGlwIiwiUHVyZUNvbXBvbmVudCIsInhQb3NpdGlvbiIsInlQb3NpdGlvbiIsIm1vdXNlTW92ZWQiLCJsaXN0ZW5lckFjdGl2ZSIsImNsaWVudFgiLCJjbGllbnRZIiwic2V0U3RhdGUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZ2V0VG9vbHRpcFBvc2l0aW9uIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInN0YXRlIiwicHJvcHMiLCJ2aXNpYmxlIiwiYWRkTGlzdGVuZXIiLCJyZW1vdmVMaXN0ZW5lciIsImNvbXBvbmVudERpZE1vdW50IiwiY29tcG9uZW50RGlkVXBkYXRlIiwidXBkYXRlTGlzdGVuZXIiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInJlbmRlciIsImNsYXNzTmFtZSIsImRpc3BsYXkiLCJwb3NpdGlvbiIsInRvcCIsIm9mZnNldFkiLCJsZWZ0Iiwib2Zmc2V0WCIsInN0eWxlIiwiY2hpbGRyZW4iLCJwcm9wVHlwZXMiLCJib29sIiwibm9kZSIsImlzUmVxdWlyZWQiLCJudW1iZXIiLCJzdHJpbmciLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPQSxLQUFQLE1BQWtCLE9BQWxCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QixDLENBQW9DOztBQUVwQyxNQUFNQyxZQUFOLFNBQTJCRixLQUFLLENBQUNHLGFBQWpDLENBQStDO0FBQUE7QUFBQTs7QUFBQSxtQ0FPckM7QUFDTkMsTUFBQUEsU0FBUyxFQUFFLENBREw7QUFFTkMsTUFBQUEsU0FBUyxFQUFFLENBRkw7QUFHTkMsTUFBQUEsVUFBVSxFQUFFLEtBSE47QUFJTkMsTUFBQUEsY0FBYyxFQUFFO0FBSlYsS0FQcUM7O0FBQUEsZ0RBMEJ4QixDQUFDO0FBQUVDLE1BQUFBLE9BQU8sRUFBRUosU0FBWDtBQUFzQkssTUFBQUEsT0FBTyxFQUFFSjtBQUEvQixLQUFELEtBQWdEO0FBQ25FLFdBQUtLLFFBQUwsQ0FBYztBQUNaTixRQUFBQSxTQURZO0FBRVpDLFFBQUFBLFNBRlk7QUFHWkMsUUFBQUEsVUFBVSxFQUFFO0FBSEEsT0FBZDtBQUtELEtBaEM0Qzs7QUFBQSx5Q0FrQy9CLE1BQU07QUFDbEJLLE1BQUFBLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsV0FBeEIsRUFBcUMsS0FBS0Msa0JBQTFDO0FBQ0EsV0FBS0gsUUFBTCxDQUFjO0FBQUVILFFBQUFBLGNBQWMsRUFBRTtBQUFsQixPQUFkO0FBQ0QsS0FyQzRDOztBQUFBLDRDQXVDNUIsTUFBTTtBQUNyQkksTUFBQUEsTUFBTSxDQUFDRyxtQkFBUCxDQUEyQixXQUEzQixFQUF3QyxLQUFLRCxrQkFBN0M7QUFDQSxXQUFLSCxRQUFMLENBQWM7QUFBRUgsUUFBQUEsY0FBYyxFQUFFO0FBQWxCLE9BQWQ7QUFDRCxLQTFDNEM7O0FBQUEsNENBNEM1QixNQUFNO0FBQ3JCLFVBQUksQ0FBQyxLQUFLUSxLQUFMLENBQVdSLGNBQVosSUFBOEIsS0FBS1MsS0FBTCxDQUFXQyxPQUE3QyxFQUFzRDtBQUNwRCxhQUFLQyxXQUFMO0FBQ0Q7O0FBRUQsVUFBSSxLQUFLSCxLQUFMLENBQVdSLGNBQVgsSUFBNkIsQ0FBQyxLQUFLUyxLQUFMLENBQVdDLE9BQTdDLEVBQXNEO0FBQ3BELGFBQUtFLGNBQUw7QUFDRDtBQUNGLEtBcEQ0QztBQUFBOztBQWM3Q0MsRUFBQUEsaUJBQWlCLEdBQUc7QUFDbEIsU0FBS0YsV0FBTDtBQUNEOztBQUVERyxFQUFBQSxrQkFBa0IsR0FBRztBQUNuQixTQUFLQyxjQUFMO0FBQ0Q7O0FBRURDLEVBQUFBLG9CQUFvQixHQUFHO0FBQ3JCLFNBQUtKLGNBQUw7QUFDRDs7QUE4QkRLLEVBQUFBLE1BQU0sR0FBRztBQUNQLFdBQ0U7QUFDRSxNQUFBLFNBQVMsRUFBRSxLQUFLUixLQUFMLENBQVdTLFNBRHhCO0FBRUUsTUFBQSxLQUFLO0FBQ0hDLFFBQUFBLE9BQU8sRUFBRSxLQUFLVixLQUFMLENBQVdDLE9BQVgsSUFBc0IsS0FBS0YsS0FBTCxDQUFXVCxVQUFqQyxHQUE4QyxPQUE5QyxHQUF3RCxNQUQ5RDtBQUVIcUIsUUFBQUEsUUFBUSxFQUFFLE9BRlA7QUFHSEMsUUFBQUEsR0FBRyxFQUFFLEtBQUtiLEtBQUwsQ0FBV1YsU0FBWCxHQUF1QixLQUFLVyxLQUFMLENBQVdhLE9BSHBDO0FBSUhDLFFBQUFBLElBQUksRUFBRSxLQUFLZixLQUFMLENBQVdYLFNBQVgsR0FBdUIsS0FBS1ksS0FBTCxDQUFXZTtBQUpyQyxTQUtBLEtBQUtmLEtBQUwsQ0FBV2dCLEtBTFg7QUFGUCxPQVVHLEtBQUtoQixLQUFMLENBQVdpQixRQVZkLENBREY7QUFjRDs7QUFyRTRDOztnQkFBekMvQixZLGtCQUNrQjtBQUNwQmUsRUFBQUEsT0FBTyxFQUFFLElBRFc7QUFFcEJjLEVBQUFBLE9BQU8sRUFBRSxDQUZXO0FBR3BCRixFQUFBQSxPQUFPLEVBQUU7QUFIVyxDOztBQXVFeEIzQixZQUFZLENBQUNnQyxTQUFiLEdBQXlCO0FBQ3ZCakIsRUFBQUEsT0FBTyxFQUFFaEIsU0FBUyxDQUFDa0MsSUFESTtBQUV2QkYsRUFBQUEsUUFBUSxFQUFFaEMsU0FBUyxDQUFDbUMsSUFBVixDQUFlQyxVQUZGO0FBR3ZCTixFQUFBQSxPQUFPLEVBQUU5QixTQUFTLENBQUNxQyxNQUhJO0FBSXZCVCxFQUFBQSxPQUFPLEVBQUU1QixTQUFTLENBQUNxQyxNQUpJO0FBS3ZCYixFQUFBQSxTQUFTLEVBQUV4QixTQUFTLENBQUNzQyxNQUxFO0FBTXZCUCxFQUFBQSxLQUFLLEVBQUUvQixTQUFTLENBQUN1QyxNQU5NLENBTUU7O0FBTkYsQ0FBekI7QUFTQSxlQUFldEMsWUFBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGltcG9ydC9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llc1xuXG5jbGFzcyBNb3VzZVRvb2x0aXAgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICB2aXNpYmxlOiB0cnVlLFxuICAgIG9mZnNldFg6IDAsXG4gICAgb2Zmc2V0WTogMCxcbiAgfTtcblxuICBzdGF0ZSA9IHtcbiAgICB4UG9zaXRpb246IDAsXG4gICAgeVBvc2l0aW9uOiAwLFxuICAgIG1vdXNlTW92ZWQ6IGZhbHNlLFxuICAgIGxpc3RlbmVyQWN0aXZlOiBmYWxzZSxcbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmFkZExpc3RlbmVyKCk7XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgdGhpcy51cGRhdGVMaXN0ZW5lcigpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgdGhpcy5yZW1vdmVMaXN0ZW5lcigpO1xuICB9XG5cbiAgZ2V0VG9vbHRpcFBvc2l0aW9uID0gKHsgY2xpZW50WDogeFBvc2l0aW9uLCBjbGllbnRZOiB5UG9zaXRpb24gfSkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgeFBvc2l0aW9uLFxuICAgICAgeVBvc2l0aW9uLFxuICAgICAgbW91c2VNb3ZlZDogdHJ1ZSxcbiAgICB9KTtcbiAgfTtcblxuICBhZGRMaXN0ZW5lciA9ICgpID0+IHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5nZXRUb29sdGlwUG9zaXRpb24pO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBsaXN0ZW5lckFjdGl2ZTogdHJ1ZSB9KTtcbiAgfTtcblxuICByZW1vdmVMaXN0ZW5lciA9ICgpID0+IHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5nZXRUb29sdGlwUG9zaXRpb24pO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBsaXN0ZW5lckFjdGl2ZTogZmFsc2UgfSk7XG4gIH07XG5cbiAgdXBkYXRlTGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgaWYgKCF0aGlzLnN0YXRlLmxpc3RlbmVyQWN0aXZlICYmIHRoaXMucHJvcHMudmlzaWJsZSkge1xuICAgICAgdGhpcy5hZGRMaXN0ZW5lcigpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnN0YXRlLmxpc3RlbmVyQWN0aXZlICYmICF0aGlzLnByb3BzLnZpc2libGUpIHtcbiAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIoKTtcbiAgICB9XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWV9XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgZGlzcGxheTogdGhpcy5wcm9wcy52aXNpYmxlICYmIHRoaXMuc3RhdGUubW91c2VNb3ZlZCA/ICdibG9jaycgOiAnbm9uZScsXG4gICAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgICAgdG9wOiB0aGlzLnN0YXRlLnlQb3NpdGlvbiArIHRoaXMucHJvcHMub2Zmc2V0WSxcbiAgICAgICAgICBsZWZ0OiB0aGlzLnN0YXRlLnhQb3NpdGlvbiArIHRoaXMucHJvcHMub2Zmc2V0WCxcbiAgICAgICAgICAuLi50aGlzLnByb3BzLnN0eWxlLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuTW91c2VUb29sdGlwLnByb3BUeXBlcyA9IHtcbiAgdmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICBvZmZzZXRYOiBQcm9wVHlwZXMubnVtYmVyLFxuICBvZmZzZXRZOiBQcm9wVHlwZXMubnVtYmVyLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHJlYWN0L2ZvcmJpZC1wcm9wLXR5cGVzXG59O1xuXG5leHBvcnQgZGVmYXVsdCBNb3VzZVRvb2x0aXA7XG4iXX0=

/***/ }),

/***/ "./src/components/Header/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Header/index.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fi */ "./node_modules/react-icons/fi/index.esm.js");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Drawer */ "./node_modules/@material-ui/core/esm/Drawer/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/esm/Divider/index.js");
/* harmony import */ var react_sticky_mouse_tooltip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-sticky-mouse-tooltip */ "./node_modules/react-sticky-mouse-tooltip/dist/MouseTooltip.js");
/* harmony import */ var react_sticky_mouse_tooltip__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_sticky_mouse_tooltip__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./styles.module.scss */ "./src/components/Header/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _contexts_auth__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../contexts/auth */ "./src/contexts/auth.tsx");




var _jsxFileName = "C:\\Users\\User\\Desktop\\Projetos\\utilitarios-resulth\\cliente-front\\src\\components\\Header\\index.tsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }















var drawerWidth = 240;
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["makeStyles"])(function (theme) {
  var _drawerClose;

  return {
    root: {
      display: "flex"
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: "calc(100% - ".concat(drawerWidth, "px)"),
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    menuButton: Object(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      marginRight: 36
    }, "@media (max-width: 600px)", {
      marginRight: "1rem"
    }),
    hide: {
      display: "none"
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: "nowrap",
      background: "#233548"
    },
    drawerOpen: {
      width: drawerWidth,
      background: "#233548",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      }),
      paddingTop: "1em",
      "&::-webkit-scrollbar": {
        width: 4
      },
      "&::-webkit-scrollbar-track": {
        boxShadow: "inset 0 0 6px rgba(0, 0, 0, 0.3)"
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "rgba(221, 154, 66, 0.7)",
        outline: "1px solid slategrey"
      }
    },
    drawerBackground: {
      background: "#233548"
    },
    drawerClose: (_drawerClose = {
      background: "#233548",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      overflowX: "hidden",
      width: theme.spacing(7) + 1
    }, Object(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_drawerClose, theme.breakpoints.up("sm"), {
      width: theme.spacing(8) + 1
    }), Object(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_drawerClose, "paddingTop", "1em"), Object(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_drawerClose, "&::-webkit-scrollbar", {
      width: 4
    }), Object(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_drawerClose, "&::-webkit-scrollbar-track", {
      boxShadow: "inset 0 0 6px rgba(0, 0, 0, 0.3)"
    }), Object(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_drawerClose, "&::-webkit-scrollbar-thumb", {
      backgroundColor: "rgba(221, 154, 66, 0.7)",
      outline: "1px solid slategrey"
    }), _drawerClose),
    toolbar: _objectSpread({
      display: "flex",
      height: "84px",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1)
    }, theme.mixins.toolbar),
    content: {
      flexGrow: 1
    },
    link: Object(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      margin: "0 0 0 auto"
    }, "@media (max-width: 600px)", {
      visibility: "hidden",
      opacity: 0,
      display: "none"
    }),
    logo: {
      margin: "0 0 0 auto",
      width: "250px",
      height: "auto"
    },
    mobLogo: {
      margin: "0 0 0 auto",
      width: "140px",
      height: "auto"
    },
    shiftTextLeft: {
      marginLeft: "0px"
    },
    shiftTextRight: {
      marginLeft: drawerWidth
    }
  };
});
function Header(_ref) {
  _s();

  var _clsx3, _user$permissions;

  var open = _ref.open,
      handleDrawerOpen = _ref.handleDrawerOpen,
      handleDrawerClose = _ref.handleDrawerClose;
  var classes = useStyles();
  var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["useTheme"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false),
      toggleMouseTooltip = _useState[0],
      setToggleMouseTooltip = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(""),
      titleTooltip = _useState2[0],
      setTitleTooltip = _useState2[1];

  var _useAuth = Object(_contexts_auth__WEBPACK_IMPORTED_MODULE_15__["useAuth"])(),
      logout = _useAuth.logout,
      user = _useAuth.user,
      filialPrincipal = _useAuth.filialPrincipal;

  var windowSize = window.innerWidth;
  var maxMobSize = 700;

  var handleMouseToogleTooltip = function handleMouseToogleTooltip(state, title) {
    if (!open) {
      setTitleTooltip(title);
      setToggleMouseTooltip(state);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_11__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["AppBar"], {
      position: "fixed",
      style: {
        background: "#233548",
        padding: "0.6rem 0.6rem"
      },
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_7__["default"])(classes.appBar, Object(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, classes.appBarShift, open)),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Toolbar"], {
        style: {
          display: "flex",
          justifyContent: "space-between"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
          edge: "start",
          color: "inherit",
          "aria-label": "open drawer",
          onClick: handleDrawerOpen,
          className: Object(clsx__WEBPACK_IMPORTED_MODULE_7__["default"])(classes.menuButton, Object(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, classes.hide, open)),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiMenu"], {
            color: "#DD9A42",
            size: 30
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 214,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 11
        }, this), user && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_14___default.a.headerInfo,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_14___default.a.headerUserInfo,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_14___default.a.spanUser,
              children: user.USUARIO
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 219,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_14___default.a.spanFilial,
              children: "".concat(filialPrincipal.CODEMPRESA, " - ").concat(filialPrincipal.NOMERED)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 220,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 218,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiLogOut"], {
            onClick: logout,
            size: 20,
            color: "#f4f4f4"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 224,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          href: "/",
          className: classes.link,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            className: windowSize > maxMobSize ? classes.logo : classes.mobLogo,
            src: "/images/utilitarios-logo.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 228,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 227,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 7
    }, this), windowSize > maxMobSize ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_9__["default"], {
      variant: "permanent",
      classes: {
        paper: Object(clsx__WEBPACK_IMPORTED_MODULE_7__["default"])((_clsx3 = {}, Object(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_clsx3, classes.drawerOpen, open), Object(C_Users_User_Desktop_Projetos_utilitarios_resulth_cliente_front_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_clsx3, classes.drawerClose, !open), _clsx3))
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.toolbar,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["IconButton"], {
          onClick: handleDrawerClose,
          children: theme.direction === "rtl" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiChevronRight"], {
            color: "#DD9A42"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 250,
            columnNumber: 17
          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiChevronLeft"], {
            color: "#DD9A42"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 252,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 248,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 247,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_10__["default"], {
        className: "sideBar-ul",
        children: [(user === null || user === void 0 ? void 0 : user.permissions.consultarProdutos) !== "SEM_ACESSO" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/consultar-produto",
            onMouseEnter: function onMouseEnter() {
              return handleMouseToogleTooltip(true, "Consultar Produto");
            },
            onMouseLeave: function onMouseLeave() {},
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiSearch"], {
                size: 28,
                color: "#DD9A42"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 269,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 268,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
              style: {
                whiteSpace: "nowrap"
              },
              primary: "Consultar Produtos"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 271,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 259,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 258,
          columnNumber: 15
        }, this), (user === null || user === void 0 ? void 0 : user.permissions.parametrosGerais) !== "SEM_ACESSO" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/parametros-gerais",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiTool"], {
                size: 28,
                color: "#DD9A42"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 283,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 282,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
              style: {
                whiteSpace: "nowrap"
              },
              primary: "Parâmetros Gerais"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 285,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 281,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 280,
          columnNumber: 15
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/gerar-cod-barras",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__["AiOutlineBarcode"], {
                size: 28,
                color: "#DD9A42"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 296,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 295,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
              style: {
                whiteSpace: "nowrap"
              },
              primary: "Gerar Código de Barras"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 298,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 294,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 293,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_12__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 304,
          columnNumber: 13
        }, this), (user === null || user === void 0 ? void 0 : user.permissions.contasAReceber) !== "SEM_ACESSO" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/receber",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaRegMoneyBillAlt"], {
                size: 28,
                color: "#DD9A42"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 310,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 309,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
              style: {
                whiteSpace: "nowrap"
              },
              primary: "Contas a Receber"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 312,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 308,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 307,
          columnNumber: 15
        }, this), (user === null || user === void 0 ? void 0 : user.permissions.alteraAdmConvenio) !== "SEM_ACESSO" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/altera-adm-convenio",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiCreditCard"], {
                size: 28,
                color: "#DD9A42"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 324,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 323,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
              style: {
                whiteSpace: "nowrap"
              },
              primary: "Alterar Adm. Convênio"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 326,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 322,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 321,
          columnNumber: 15
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_12__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 334,
          columnNumber: 13
        }, this), (user === null || user === void 0 ? void 0 : user.permissions.digitacaoInventario) !== "SEM_ACESSO" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/digitacao-inventario",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiEdit"], {
                size: 28,
                color: "#DD9A42"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 340,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 339,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
              style: {
                whiteSpace: "nowrap"
              },
              primary: "Digitação de Inventário"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 342,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 338,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 337,
          columnNumber: 15
        }, this), (user === null || user === void 0 ? void 0 : user.permissions.consultarInventarios) !== "SEM_ACESSO" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/consultar-inventarios",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiList"], {
                size: 28,
                color: "#DD9A42"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 354,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 353,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
              style: {
                whiteSpace: "nowrap"
              },
              primary: "Consultar Inventários"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 356,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 352,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 351,
          columnNumber: 15
        }, this), (user === null || user === void 0 ? void 0 : user.permissions.comprasRequisitar) !== "SEM_ACESSO" && (user === null || user === void 0 ? void 0 : user.permissions.comprasConsultar) !== "SEM_ACESSO" && (user === null || user === void 0 ? void 0 : user.permissions.comprasPainelDoComprador) !== "SEM_ACESSO" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/compras",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiDollarSign"], {
                size: 28,
                color: "#DD9A42"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 370,
                columnNumber: 23
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 369,
              columnNumber: 21
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
              style: {
                whiteSpace: "nowrap"
              },
              primary: "Compras"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 372,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 368,
            columnNumber: 19
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 367,
          columnNumber: 17
        }, this), (user === null || user === void 0 ? void 0 : user.permissions.demandarReposicao) !== "SEM_ACESSO" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/demandar-reposicao",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiPackage"], {
                size: 28,
                color: "#DD9A42"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 384,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 383,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
              style: {
                whiteSpace: "nowrap"
              },
              primary: "Demandar Reposição"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 386,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 382,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 381,
          columnNumber: 15
        }, this), (user === null || user === void 0 ? void 0 : user.permissions.visualizarReposicoes) !== "SEM_ACESSO" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/consultar-reposicoes",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiGrid"], {
                size: 28,
                color: "#DD9A42"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 398,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 397,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
              style: {
                whiteSpace: "nowrap"
              },
              primary: "Visualizar Reposições"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 400,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 396,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 395,
          columnNumber: 15
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_12__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 408,
          columnNumber: 13
        }, this), (user === null || user === void 0 ? void 0 : user.permissions.configuracoes) !== "SEM_ACESSO" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/configuracoes",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiSettings"], {
                size: 28,
                color: "#DD9A42"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 414,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 413,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
              style: {
                whiteSpace: "nowrap"
              },
              primary: "Configurações"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 416,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 412,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 411,
          columnNumber: 15
        }, this), (user === null || user === void 0 ? void 0 : (_user$permissions = user.permissions) === null || _user$permissions === void 0 ? void 0 : _user$permissions.permissoes) !== "SEM_ACESSO" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/permissoes",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiUser"], {
                size: 28,
                color: "#DD9A42"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 428,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 427,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
              style: {
                whiteSpace: "nowrap"
              },
              primary: "Permissões"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 430,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 426,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 425,
          columnNumber: 15
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
          style: {
            cursor: "pointer "
          },
          onClick: logout,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiLogOut"], {
                size: 28,
                color: "#DD9A42"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 441,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 440,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
              style: {
                whiteSpace: "nowrap"
              },
              primary: "Sair"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 443,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 439,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 438,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 256,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_sticky_mouse_tooltip__WEBPACK_IMPORTED_MODULE_13___default.a, {
        style: {
          zIndex: 2147483647
        },
        visible: toggleMouseTooltip,
        offsetX: 15,
        offsetY: 10,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "observacao-compra",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: titleTooltip
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 457,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 456,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 450,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 9
    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_9__["default"], {
      classes: {
        paper: Object(clsx__WEBPACK_IMPORTED_MODULE_7__["default"])(classes.drawerBackground)
      },
      variant: "temporary",
      anchor: "top",
      open: open,
      onClose: handleDrawerClose,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_10__["default"], {
        className: "sideBar-ul",
        children: [(user === null || user === void 0 ? void 0 : user.permissions.consultarProdutos) !== "SEM_ACESSO" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/consultar-produto",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiSearch"], {
                size: 30,
                color: "#DD9A42"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 476,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 475,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
              primary: "Consultar Produtos"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 478,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 474,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 473,
          columnNumber: 15
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_12__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 483,
          columnNumber: 13
        }, this), (user === null || user === void 0 ? void 0 : user.permissions.digitacaoInventario) !== "SEM_ACESSO" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/digitacao-inventario",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiEdit"], {
                size: 30,
                color: "#DD9A42"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 489,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 488,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
              primary: "Digitação de Inventário"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 491,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 487,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 486,
          columnNumber: 15
        }, this), (user === null || user === void 0 ? void 0 : user.permissions.comprasRequisitar) !== "SEM_ACESSO" || (user === null || user === void 0 ? void 0 : user.permissions.comprasConsultar) !== "SEM_ACESSO" || (user === null || user === void 0 ? void 0 : user.permissions.comprasPainelDoComprador) !== "SEM_ACESSO" || /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/compras",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiDollarSign"], {
                size: 30,
                color: "#DD9A42"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 502,
                columnNumber: 23
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 501,
              columnNumber: 21
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
              primary: "Compras"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 504,
              columnNumber: 21
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 500,
            columnNumber: 19
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 499,
          columnNumber: 17
        }, this), (user === null || user === void 0 ? void 0 : user.permissions.demandarReposicao) !== "SEM_ACESSO" && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/demandar-reposicao",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiPackage"], {
                size: 30,
                color: "#DD9A42"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 513,
                columnNumber: 21
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 512,
              columnNumber: 19
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
              primary: "Demandar Reposição"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 515,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 511,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 510,
          columnNumber: 15
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_12__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 519,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItem"], {
          onClick: logout,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemIcon"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_4__["FiLogOut"], {
                size: 30,
                color: "#DD9A42"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 524,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 523,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["ListItemText"], {
              primary: "Sair"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 526,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 522,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 521,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 471,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 462,
      columnNumber: 9
    }, this)]
  }, void 0, true);
}

_s(Header, "K4wk0HhBKy34Yy9o00aUp2lMNZw=", false, function () {
  return [useStyles, _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["useTheme"], _contexts_auth__WEBPACK_IMPORTED_MODULE_15__["useAuth"]];
});

_c = Header;

var _c;

$RefreshReg$(_c, "Header");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXN0aWNreS1tb3VzZS10b29sdGlwL2Rpc3QvTW91c2VUb29sdGlwLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvaW5kZXgudHN4Il0sIm5hbWVzIjpbImRyYXdlcldpZHRoIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImRpc3BsYXkiLCJhcHBCYXIiLCJ6SW5kZXgiLCJkcmF3ZXIiLCJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvbnMiLCJjcmVhdGUiLCJlYXNpbmciLCJzaGFycCIsImR1cmF0aW9uIiwibGVhdmluZ1NjcmVlbiIsImFwcEJhclNoaWZ0IiwibWFyZ2luTGVmdCIsIndpZHRoIiwiZW50ZXJpbmdTY3JlZW4iLCJtZW51QnV0dG9uIiwibWFyZ2luUmlnaHQiLCJoaWRlIiwiZmxleFNocmluayIsIndoaXRlU3BhY2UiLCJiYWNrZ3JvdW5kIiwiZHJhd2VyT3BlbiIsInBhZGRpbmdUb3AiLCJib3hTaGFkb3ciLCJiYWNrZ3JvdW5kQ29sb3IiLCJvdXRsaW5lIiwiZHJhd2VyQmFja2dyb3VuZCIsImRyYXdlckNsb3NlIiwib3ZlcmZsb3dYIiwic3BhY2luZyIsImJyZWFrcG9pbnRzIiwidXAiLCJ0b29sYmFyIiwiaGVpZ2h0IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwicGFkZGluZyIsIm1peGlucyIsImNvbnRlbnQiLCJmbGV4R3JvdyIsImxpbmsiLCJtYXJnaW4iLCJ2aXNpYmlsaXR5Iiwib3BhY2l0eSIsImxvZ28iLCJtb2JMb2dvIiwic2hpZnRUZXh0TGVmdCIsInNoaWZ0VGV4dFJpZ2h0IiwiSGVhZGVyIiwib3BlbiIsImhhbmRsZURyYXdlck9wZW4iLCJoYW5kbGVEcmF3ZXJDbG9zZSIsImNsYXNzZXMiLCJ1c2VUaGVtZSIsInVzZVN0YXRlIiwidG9nZ2xlTW91c2VUb29sdGlwIiwic2V0VG9nZ2xlTW91c2VUb29sdGlwIiwidGl0bGVUb29sdGlwIiwic2V0VGl0bGVUb29sdGlwIiwidXNlQXV0aCIsImxvZ291dCIsInVzZXIiLCJmaWxpYWxQcmluY2lwYWwiLCJ3aW5kb3dTaXplIiwid2luZG93IiwiaW5uZXJXaWR0aCIsIm1heE1vYlNpemUiLCJoYW5kbGVNb3VzZVRvb2dsZVRvb2x0aXAiLCJzdGF0ZSIsInRpdGxlIiwiY2xzeCIsInN0eWxlcyIsImhlYWRlckluZm8iLCJoZWFkZXJVc2VySW5mbyIsInNwYW5Vc2VyIiwiVVNVQVJJTyIsInNwYW5GaWxpYWwiLCJDT0RFTVBSRVNBIiwiTk9NRVJFRCIsInBhcGVyIiwiZGlyZWN0aW9uIiwicGVybWlzc2lvbnMiLCJjb25zdWx0YXJQcm9kdXRvcyIsInBhcmFtZXRyb3NHZXJhaXMiLCJjb250YXNBUmVjZWJlciIsImFsdGVyYUFkbUNvbnZlbmlvIiwiZGlnaXRhY2FvSW52ZW50YXJpbyIsImNvbnN1bHRhckludmVudGFyaW9zIiwiY29tcHJhc1JlcXVpc2l0YXIiLCJjb21wcmFzQ29uc3VsdGFyIiwiY29tcHJhc1BhaW5lbERvQ29tcHJhZG9yIiwiZGVtYW5kYXJSZXBvc2ljYW8iLCJ2aXN1YWxpemFyUmVwb3NpY29lcyIsImNvbmZpZ3VyYWNvZXMiLCJwZXJtaXNzb2VzIiwiY3Vyc29yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxnQ0FBZ0MsZ0JBQWdCLHNCQUFzQixPQUFPLHVEQUF1RCxtQ0FBbUMsMERBQTBELHNGQUFzRixnRUFBZ0UsRUFBRSxHQUFHLEVBQUUsaUNBQWlDLDJDQUEyQyxFQUFFLEVBQUUsRUFBRSxlQUFlOztBQUUvZCwyQ0FBMkMsa0JBQWtCLGtDQUFrQyxxRUFBcUUsRUFBRSxFQUFFLE9BQU8sa0JBQWtCLEVBQUUsWUFBWTs7QUFFL00sWUFBWSxtQkFBTyxDQUFDLDRDQUFPO0FBQzNCLGdCQUFnQixtQkFBTyxDQUFDLHNEQUFZLEVBQUU7O0FBRXRDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Es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LGVBZ0RFLHFFQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBaERGLGVBa0RFLHFFQUFDLDBEQUFEO0FBQVUsaUJBQU8sRUFBRS9CLE1BQW5CO0FBQUEsaUNBQ0U7QUFBQSxvQ0FDRSxxRUFBQyw4REFBRDtBQUFBLHFDQUNFLHFFQUFDLHVEQUFEO0FBQVUsb0JBQUksRUFBRSxFQUFoQjtBQUFvQixxQkFBSyxFQUFDO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBSUUscUVBQUMsOERBQUQ7QUFBYyxxQkFBTyxFQUFFO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFsREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQW5SSjtBQUFBLGtCQURGO0FBNFZEOztHQWxYdUJaLE07VUFLTnBELFMsRUFDRnlELGlFLEVBSTRCTSx1RDs7O0tBVnBCWCxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NvbnN1bHRhci1pbnZlbnRhcmlvcy4yOTJkZmZhMzRkN2VjNzg4ODMwMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IHZhciBvd25LZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTsgaWYgKHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSAnZnVuY3Rpb24nKSB7IG93bktleXMgPSBvd25LZXlzLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSkuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBzeW0pLmVudW1lcmFibGU7IH0pKTsgfSBvd25LZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG52YXIgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG52YXIgUHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGltcG9ydC9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llc1xuXG5jbGFzcyBNb3VzZVRvb2x0aXAgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwic3RhdGVcIiwge1xuICAgICAgeFBvc2l0aW9uOiAwLFxuICAgICAgeVBvc2l0aW9uOiAwLFxuICAgICAgbW91c2VNb3ZlZDogZmFsc2UsXG4gICAgICBsaXN0ZW5lckFjdGl2ZTogZmFsc2VcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImdldFRvb2x0aXBQb3NpdGlvblwiLCAoe1xuICAgICAgY2xpZW50WDogeFBvc2l0aW9uLFxuICAgICAgY2xpZW50WTogeVBvc2l0aW9uXG4gICAgfSkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHhQb3NpdGlvbixcbiAgICAgICAgeVBvc2l0aW9uLFxuICAgICAgICBtb3VzZU1vdmVkOiB0cnVlXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcImFkZExpc3RlbmVyXCIsICgpID0+IHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLmdldFRvb2x0aXBQb3NpdGlvbik7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbGlzdGVuZXJBY3RpdmU6IHRydWVcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwicmVtb3ZlTGlzdGVuZXJcIiwgKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuZ2V0VG9vbHRpcFBvc2l0aW9uKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBsaXN0ZW5lckFjdGl2ZTogZmFsc2VcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KHRoaXMsIFwidXBkYXRlTGlzdGVuZXJcIiwgKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLnN0YXRlLmxpc3RlbmVyQWN0aXZlICYmIHRoaXMucHJvcHMudmlzaWJsZSkge1xuICAgICAgICB0aGlzLmFkZExpc3RlbmVyKCk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnN0YXRlLmxpc3RlbmVyQWN0aXZlICYmICF0aGlzLnByb3BzLnZpc2libGUpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcigpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5hZGRMaXN0ZW5lcigpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIHRoaXMudXBkYXRlTGlzdGVuZXIoKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IHRoaXMucHJvcHMuY2xhc3NOYW1lLFxuICAgICAgc3R5bGU6IF9vYmplY3RTcHJlYWQoe1xuICAgICAgICBkaXNwbGF5OiB0aGlzLnByb3BzLnZpc2libGUgJiYgdGhpcy5zdGF0ZS5tb3VzZU1vdmVkID8gJ2Jsb2NrJyA6ICdub25lJyxcbiAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgIHRvcDogdGhpcy5zdGF0ZS55UG9zaXRpb24gKyB0aGlzLnByb3BzLm9mZnNldFksXG4gICAgICAgIGxlZnQ6IHRoaXMuc3RhdGUueFBvc2l0aW9uICsgdGhpcy5wcm9wcy5vZmZzZXRYXG4gICAgICB9LCB0aGlzLnByb3BzLnN0eWxlKVxuICAgIH0sIHRoaXMucHJvcHMuY2hpbGRyZW4pO1xuICB9XG5cbn1cblxuX2RlZmluZVByb3BlcnR5KE1vdXNlVG9vbHRpcCwgXCJkZWZhdWx0UHJvcHNcIiwge1xuICB2aXNpYmxlOiB0cnVlLFxuICBvZmZzZXRYOiAwLFxuICBvZmZzZXRZOiAwXG59KTtcblxuTW91c2VUb29sdGlwLnByb3BUeXBlcyA9IHtcbiAgdmlzaWJsZTogUHJvcFR5cGVzLmJvb2wsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICBvZmZzZXRYOiBQcm9wVHlwZXMubnVtYmVyLFxuICBvZmZzZXRZOiBQcm9wVHlwZXMubnVtYmVyLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcmVhY3QvZm9yYmlkLXByb3AtdHlwZXNcblxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBNb3VzZVRvb2x0aXA7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1TDNOeVl5OU5iM1Z6WlZSdmIyeDBhWEF1YW5ONElsMHNJbTVoYldWeklqcGJJbEpsWVdOMElpd2lVSEp2Y0ZSNWNHVnpJaXdpVFc5MWMyVlViMjlzZEdsd0lpd2lVSFZ5WlVOdmJYQnZibVZ1ZENJc0luaFFiM05wZEdsdmJpSXNJbmxRYjNOcGRHbHZiaUlzSW0xdmRYTmxUVzkyWldRaUxDSnNhWE4wWlc1bGNrRmpkR2wyWlNJc0ltTnNhV1Z1ZEZnaUxDSmpiR2xsYm5SWklpd2ljMlYwVTNSaGRHVWlMQ0ozYVc1a2IzY2lMQ0poWkdSRmRtVnVkRXhwYzNSbGJtVnlJaXdpWjJWMFZHOXZiSFJwY0ZCdmMybDBhVzl1SWl3aWNtVnRiM1psUlhabGJuUk1hWE4wWlc1bGNpSXNJbk4wWVhSbElpd2ljSEp2Y0hNaUxDSjJhWE5wWW14bElpd2lZV1JrVEdsemRHVnVaWElpTENKeVpXMXZkbVZNYVhOMFpXNWxjaUlzSW1OdmJYQnZibVZ1ZEVScFpFMXZkVzUwSWl3aVkyOXRjRzl1Wlc1MFJHbGtWWEJrWVhSbElpd2lkWEJrWVhSbFRHbHpkR1Z1WlhJaUxDSmpiMjF3YjI1bGJuUlhhV3hzVlc1dGIzVnVkQ0lzSW5KbGJtUmxjaUlzSW1Oc1lYTnpUbUZ0WlNJc0ltUnBjM0JzWVhraUxDSndiM05wZEdsdmJpSXNJblJ2Y0NJc0ltOW1abk5sZEZraUxDSnNaV1owSWl3aWIyWm1jMlYwV0NJc0luTjBlV3hsSWl3aVkyaHBiR1J5Wlc0aUxDSndjbTl3Vkhsd1pYTWlMQ0ppYjI5c0lpd2libTlrWlNJc0ltbHpVbVZ4ZFdseVpXUWlMQ0p1ZFcxaVpYSWlMQ0p6ZEhKcGJtY2lMQ0p2WW1wbFkzUWlYU3dpYldGd2NHbHVaM01pT2lJN096czdRVUZCUVN4UFFVRlBRU3hMUVVGUUxFMUJRV3RDTEU5QlFXeENPMEZCUTBFc1QwRkJUME1zVTBGQlVDeE5RVUZ6UWl4WlFVRjBRaXhETEVOQlFXOURPenRCUVVWd1F5eE5RVUZOUXl4WlFVRk9MRk5CUVRKQ1JpeExRVUZMTEVOQlFVTkhMR0ZCUVdwRExFTkJRU3RETzBGQlFVRTdRVUZCUVRzN1FVRkJRU3h0UTBGUGNrTTdRVUZEVGtNc1RVRkJRVUVzVTBGQlV5eEZRVUZGTEVOQlJFdzdRVUZGVGtNc1RVRkJRVUVzVTBGQlV5eEZRVUZGTEVOQlJrdzdRVUZIVGtNc1RVRkJRVUVzVlVGQlZTeEZRVUZGTEV0QlNFNDdRVUZKVGtNc1RVRkJRVUVzWTBGQll5eEZRVUZGTzBGQlNsWXNTMEZRY1VNN08wRkJRVUVzWjBSQk1FSjRRaXhEUVVGRE8wRkJRVVZETEUxQlFVRkJMRTlCUVU4c1JVRkJSVW9zVTBGQldEdEJRVUZ6UWtzc1RVRkJRVUVzVDBGQlR5eEZRVUZGU2p0QlFVRXZRaXhMUVVGRUxFdEJRV2RFTzBGQlEyNUZMRmRCUVV0TExGRkJRVXdzUTBGQll6dEJRVU5hVGl4UlFVRkJRU3hUUVVSWk8wRkJSVnBETEZGQlFVRkJMRk5CUmxrN1FVRkhXa01zVVVGQlFVRXNWVUZCVlN4RlFVRkZPMEZCU0VFc1QwRkJaRHRCUVV0RUxFdEJhRU0wUXpzN1FVRkJRU3g1UTBGclF5OUNMRTFCUVUwN1FVRkRiRUpMTEUxQlFVRkJMRTFCUVUwc1EwRkJRME1zWjBKQlFWQXNRMEZCZDBJc1YwRkJlRUlzUlVGQmNVTXNTMEZCUzBNc2EwSkJRVEZETzBGQlEwRXNWMEZCUzBnc1VVRkJUQ3hEUVVGak8wRkJRVVZJTEZGQlFVRkJMR05CUVdNc1JVRkJSVHRCUVVGc1FpeFBRVUZrTzBGQlEwUXNTMEZ5UXpSRE96dEJRVUZCTERSRFFYVkROVUlzVFVGQlRUdEJRVU55UWtrc1RVRkJRVUVzVFVGQlRTeERRVUZEUnl4dFFrRkJVQ3hEUVVFeVFpeFhRVUV6UWl4RlFVRjNReXhMUVVGTFJDeHJRa0ZCTjBNN1FVRkRRU3hYUVVGTFNDeFJRVUZNTEVOQlFXTTdRVUZCUlVnc1VVRkJRVUVzWTBGQll5eEZRVUZGTzBGQlFXeENMRTlCUVdRN1FVRkRSQ3hMUVRGRE5FTTdPMEZCUVVFc05FTkJORU0xUWl4TlFVRk5PMEZCUTNKQ0xGVkJRVWtzUTBGQlF5eExRVUZMVVN4TFFVRk1MRU5CUVZkU0xHTkJRVm9zU1VGQk9FSXNTMEZCUzFNc1MwRkJUQ3hEUVVGWFF5eFBRVUUzUXl4RlFVRnpSRHRCUVVOd1JDeGhRVUZMUXl4WFFVRk1PMEZCUTBRN08wRkJSVVFzVlVGQlNTeExRVUZMU0N4TFFVRk1MRU5CUVZkU0xHTkJRVmdzU1VGQk5rSXNRMEZCUXl4TFFVRkxVeXhMUVVGTUxFTkJRVmRETEU5QlFUZERMRVZCUVhORU8wRkJRM0JFTEdGQlFVdEZMR05CUVV3N1FVRkRSRHRCUVVOR0xFdEJjRVEwUXp0QlFVRkJPenRCUVdNM1EwTXNSVUZCUVVFc2FVSkJRV2xDTEVkQlFVYzdRVUZEYkVJc1UwRkJTMFlzVjBGQlREdEJRVU5FT3p0QlFVVkVSeXhGUVVGQlFTeHJRa0ZCYTBJc1IwRkJSenRCUVVOdVFpeFRRVUZMUXl4alFVRk1PMEZCUTBRN08wRkJSVVJETEVWQlFVRkJMRzlDUVVGdlFpeEhRVUZITzBGQlEzSkNMRk5CUVV0S0xHTkJRVXc3UVVGRFJEczdRVUU0UWtSTExFVkJRVUZCTEUxQlFVMHNSMEZCUnp0QlFVTlFMRmRCUTBVN1FVRkRSU3hOUVVGQkxGTkJRVk1zUlVGQlJTeExRVUZMVWl4TFFVRk1MRU5CUVZkVExGTkJSSGhDTzBGQlJVVXNUVUZCUVN4TFFVRkxPMEZCUTBoRExGRkJRVUZCTEU5QlFVOHNSVUZCUlN4TFFVRkxWaXhMUVVGTUxFTkJRVmRETEU5QlFWZ3NTVUZCYzBJc1MwRkJTMFlzUzBGQlRDeERRVUZYVkN4VlFVRnFReXhIUVVFNFF5eFBRVUU1UXl4SFFVRjNSQ3hOUVVRNVJEdEJRVVZJY1VJc1VVRkJRVUVzVVVGQlVTeEZRVUZGTEU5QlJsQTdRVUZIU0VNc1VVRkJRVUVzUjBGQlJ5eEZRVUZGTEV0QlFVdGlMRXRCUVV3c1EwRkJWMVlzVTBGQldDeEhRVUYxUWl4TFFVRkxWeXhMUVVGTUxFTkJRVmRoTEU5QlNIQkRPMEZCU1VoRExGRkJRVUZCTEVsQlFVa3NSVUZCUlN4TFFVRkxaaXhMUVVGTUxFTkJRVmRZTEZOQlFWZ3NSMEZCZFVJc1MwRkJTMWtzUzBGQlRDeERRVUZYWlR0QlFVcHlReXhUUVV0QkxFdEJRVXRtTEV0QlFVd3NRMEZCVjJkQ0xFdEJURmc3UVVGR1VDeFBRVlZITEV0QlFVdG9RaXhMUVVGTUxFTkJRVmRwUWl4UlFWWmtMRU5CUkVZN1FVRmpSRHM3UVVGeVJUUkRPenRuUWtGQmVrTXZRaXhaTEd0Q1FVTnJRanRCUVVOd1FtVXNSVUZCUVVFc1QwRkJUeXhGUVVGRkxFbEJSRmM3UVVGRmNFSmpMRVZCUVVGQkxFOUJRVThzUlVGQlJTeERRVVpYTzBGQlIzQkNSaXhGUVVGQlFTeFBRVUZQTEVWQlFVVTdRVUZJVnl4RE96dEJRWFZGZUVJelFpeFpRVUZaTEVOQlFVTm5ReXhUUVVGaUxFZEJRWGxDTzBGQlEzWkNha0lzUlVGQlFVRXNUMEZCVHl4RlFVRkZhRUlzVTBGQlV5eERRVUZEYTBNc1NVRkVTVHRCUVVWMlFrWXNSVUZCUVVFc1VVRkJVU3hGUVVGRmFFTXNVMEZCVXl4RFFVRkRiVU1zU1VGQlZpeERRVUZsUXl4VlFVWkdPMEZCUjNaQ1RpeEZRVUZCUVN4UFFVRlBMRVZCUVVVNVFpeFRRVUZUTEVOQlFVTnhReXhOUVVoSk8wRkJTWFpDVkN4RlFVRkJRU3hQUVVGUExFVkJRVVUxUWl4VFFVRlRMRU5CUVVOeFF5eE5RVXBKTzBGQlMzWkNZaXhGUVVGQlFTeFRRVUZUTEVWQlFVVjRRaXhUUVVGVExFTkJRVU56UXl4TlFVeEZPMEZCVFhaQ1VDeEZRVUZCUVN4TFFVRkxMRVZCUVVVdlFpeFRRVUZUTEVOQlFVTjFReXhOUVU1TkxFTkJUVVU3TzBGQlRrWXNRMEZCZWtJN1FVRlRRU3hsUVVGbGRFTXNXVUZCWmlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltbHRjRzl5ZENCU1pXRmpkQ0JtY205dElDZHlaV0ZqZENjN1hHNXBiWEJ2Y25RZ1VISnZjRlI1Y0dWeklHWnliMjBnSjNCeWIzQXRkSGx3WlhNbk95QXZMeUJsYzJ4cGJuUXRaR2x6WVdKc1pTMXNhVzVsSUdsdGNHOXlkQzl1YnkxbGVIUnlZVzVsYjNWekxXUmxjR1Z1WkdWdVkybGxjMXh1WEc1amJHRnpjeUJOYjNWelpWUnZiMngwYVhBZ1pYaDBaVzVrY3lCU1pXRmpkQzVRZFhKbFEyOXRjRzl1Wlc1MElIdGNiaUFnYzNSaGRHbGpJR1JsWm1GMWJIUlFjbTl3Y3lBOUlIdGNiaUFnSUNCMmFYTnBZbXhsT2lCMGNuVmxMRnh1SUNBZ0lHOW1abk5sZEZnNklEQXNYRzRnSUNBZ2IyWm1jMlYwV1RvZ01DeGNiaUFnZlR0Y2JseHVJQ0J6ZEdGMFpTQTlJSHRjYmlBZ0lDQjRVRzl6YVhScGIyNDZJREFzWEc0Z0lDQWdlVkJ2YzJsMGFXOXVPaUF3TEZ4dUlDQWdJRzF2ZFhObFRXOTJaV1E2SUdaaGJITmxMRnh1SUNBZ0lHeHBjM1JsYm1WeVFXTjBhWFpsT2lCbVlXeHpaU3hjYmlBZ2ZUdGNibHh1SUNCamIyMXdiMjVsYm5SRWFXUk5iM1Z1ZENncElIdGNiaUFnSUNCMGFHbHpMbUZrWkV4cGMzUmxibVZ5S0NrN1hHNGdJSDFjYmx4dUlDQmpiMjF3YjI1bGJuUkVhV1JWY0dSaGRHVW9LU0I3WEc0Z0lDQWdkR2hwY3k1MWNHUmhkR1ZNYVhOMFpXNWxjaWdwTzF4dUlDQjlYRzVjYmlBZ1kyOXRjRzl1Wlc1MFYybHNiRlZ1Ylc5MWJuUW9LU0I3WEc0Z0lDQWdkR2hwY3k1eVpXMXZkbVZNYVhOMFpXNWxjaWdwTzF4dUlDQjlYRzVjYmlBZ1oyVjBWRzl2YkhScGNGQnZjMmwwYVc5dUlEMGdLSHNnWTJ4cFpXNTBXRG9nZUZCdmMybDBhVzl1TENCamJHbGxiblJaT2lCNVVHOXphWFJwYjI0Z2ZTa2dQVDRnZTF4dUlDQWdJSFJvYVhNdWMyVjBVM1JoZEdVb2UxeHVJQ0FnSUNBZ2VGQnZjMmwwYVc5dUxGeHVJQ0FnSUNBZ2VWQnZjMmwwYVc5dUxGeHVJQ0FnSUNBZ2JXOTFjMlZOYjNabFpEb2dkSEoxWlN4Y2JpQWdJQ0I5S1R0Y2JpQWdmVHRjYmx4dUlDQmhaR1JNYVhOMFpXNWxjaUE5SUNncElEMCtJSHRjYmlBZ0lDQjNhVzVrYjNjdVlXUmtSWFpsYm5STWFYTjBaVzVsY2lnbmJXOTFjMlZ0YjNabEp5d2dkR2hwY3k1blpYUlViMjlzZEdsd1VHOXphWFJwYjI0cE8xeHVJQ0FnSUhSb2FYTXVjMlYwVTNSaGRHVW9leUJzYVhOMFpXNWxja0ZqZEdsMlpUb2dkSEoxWlNCOUtUdGNiaUFnZlR0Y2JseHVJQ0J5WlcxdmRtVk1hWE4wWlc1bGNpQTlJQ2dwSUQwK0lIdGNiaUFnSUNCM2FXNWtiM2N1Y21WdGIzWmxSWFpsYm5STWFYTjBaVzVsY2lnbmJXOTFjMlZ0YjNabEp5d2dkR2hwY3k1blpYUlViMjlzZEdsd1VHOXphWFJwYjI0cE8xeHVJQ0FnSUhSb2FYTXVjMlYwVTNSaGRHVW9leUJzYVhOMFpXNWxja0ZqZEdsMlpUb2dabUZzYzJVZ2ZTazdYRzRnSUgwN1hHNWNiaUFnZFhCa1lYUmxUR2x6ZEdWdVpYSWdQU0FvS1NBOVBpQjdYRzRnSUNBZ2FXWWdLQ0YwYUdsekxuTjBZWFJsTG14cGMzUmxibVZ5UVdOMGFYWmxJQ1ltSUhSb2FYTXVjSEp2Y0hNdWRtbHphV0pzWlNrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTVoWkdSTWFYTjBaVzVsY2lncE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUdsbUlDaDBhR2x6TG5OMFlYUmxMbXhwYzNSbGJtVnlRV04wYVhabElDWW1JQ0YwYUdsekxuQnliM0J6TG5acGMybGliR1VwSUh0Y2JpQWdJQ0FnSUhSb2FYTXVjbVZ0YjNabFRHbHpkR1Z1WlhJb0tUdGNiaUFnSUNCOVhHNGdJSDA3WEc1Y2JpQWdjbVZ1WkdWeUtDa2dlMXh1SUNBZ0lISmxkSFZ5YmlBb1hHNGdJQ0FnSUNBOFpHbDJYRzRnSUNBZ0lDQWdJR05zWVhOelRtRnRaVDE3ZEdocGN5NXdjbTl3Y3k1amJHRnpjMDVoYldWOVhHNGdJQ0FnSUNBZ0lITjBlV3hsUFh0N1hHNGdJQ0FnSUNBZ0lDQWdaR2x6Y0d4aGVUb2dkR2hwY3k1d2NtOXdjeTUyYVhOcFlteGxJQ1ltSUhSb2FYTXVjM1JoZEdVdWJXOTFjMlZOYjNabFpDQS9JQ2RpYkc5amF5Y2dPaUFuYm05dVpTY3NYRzRnSUNBZ0lDQWdJQ0FnY0c5emFYUnBiMjQ2SUNkbWFYaGxaQ2NzWEc0Z0lDQWdJQ0FnSUNBZ2RHOXdPaUIwYUdsekxuTjBZWFJsTG5sUWIzTnBkR2x2YmlBcklIUm9hWE11Y0hKdmNITXViMlptYzJWMFdTeGNiaUFnSUNBZ0lDQWdJQ0JzWldaME9pQjBhR2x6TG5OMFlYUmxMbmhRYjNOcGRHbHZiaUFySUhSb2FYTXVjSEp2Y0hNdWIyWm1jMlYwV0N4Y2JpQWdJQ0FnSUNBZ0lDQXVMaTUwYUdsekxuQnliM0J6TG5OMGVXeGxMRnh1SUNBZ0lDQWdJQ0I5ZlZ4dUlDQWdJQ0FnUGx4dUlDQWdJQ0FnSUNCN2RHaHBjeTV3Y205d2N5NWphR2xzWkhKbGJuMWNiaUFnSUNBZ0lEd3ZaR2wyUGx4dUlDQWdJQ2s3WEc0Z0lIMWNibjFjYmx4dVRXOTFjMlZVYjI5c2RHbHdMbkJ5YjNCVWVYQmxjeUE5SUh0Y2JpQWdkbWx6YVdKc1pUb2dVSEp2Y0ZSNWNHVnpMbUp2YjJ3c1hHNGdJR05vYVd4a2NtVnVPaUJRY205d1ZIbHdaWE11Ym05a1pTNXBjMUpsY1hWcGNtVmtMRnh1SUNCdlptWnpaWFJZT2lCUWNtOXdWSGx3WlhNdWJuVnRZbVZ5TEZ4dUlDQnZabVp6WlhSWk9pQlFjbTl3Vkhsd1pYTXViblZ0WW1WeUxGeHVJQ0JqYkdGemMwNWhiV1U2SUZCeWIzQlVlWEJsY3k1emRISnBibWNzWEc0Z0lITjBlV3hsT2lCUWNtOXdWSGx3WlhNdWIySnFaV04wTENBdkx5QmxjMnhwYm5RdFpHbHpZV0pzWlMxc2FXNWxJSEpsWVdOMEwyWnZjbUpwWkMxd2NtOXdMWFI1Y0dWelhHNTlPMXh1WEc1bGVIQnZjblFnWkdWbVlYVnNkQ0JOYjNWelpWUnZiMngwYVhBN1hHNGlYWDA9IiwiaW1wb3J0IHtcclxuICBBcHBCYXIsXHJcbiAgSWNvbkJ1dHRvbixcclxuICBMaXN0SXRlbSxcclxuICBMaXN0SXRlbUljb24sXHJcbiAgTGlzdEl0ZW1UZXh0LFxyXG4gIFRvb2xiYXIsXHJcbn0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCB7IEZhUmVnTW9uZXlCaWxsQWx0IH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XHJcbmltcG9ydCB7XHJcbiAgRmlDaGV2cm9uTGVmdCxcclxuICBGaUNoZXZyb25SaWdodCxcclxuICBGaURvbGxhclNpZ24sXHJcbiAgRmlFZGl0LFxyXG4gIEZpR3JpZCxcclxuICBGaUxpc3QsXHJcbiAgRmlMb2dPdXQsXHJcbiAgRmlNZW51LFxyXG4gIEZpUGFja2FnZSxcclxuICBGaVNlYXJjaCxcclxuICBGaVNldHRpbmdzLFxyXG4gIEZpVG9vbCxcclxuICBGaVVzZXIsXHJcbiAgRmlDcmVkaXRDYXJkLFxyXG59IGZyb20gXCJyZWFjdC1pY29ucy9maVwiO1xyXG5pbXBvcnQgeyBBaU91dGxpbmVCYXJjb2RlIH0gZnJvbSBcInJlYWN0LWljb25zL2FpXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMsIHVzZVRoZW1lIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgRHJhd2VyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EcmF3ZXJcIjtcclxuaW1wb3J0IExpc3QgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpc3RcIjtcclxuaW1wb3J0IENzc0Jhc2VsaW5lIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZVwiO1xyXG5pbXBvcnQgRGl2aWRlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGl2aWRlclwiO1xyXG5pbXBvcnQgTW91c2VUb29sVGlwIGZyb20gXCJyZWFjdC1zdGlja3ktbW91c2UtdG9vbHRpcFwiO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMubW9kdWxlLnNjc3NcIjtcclxuXHJcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tIFwiLi4vLi4vY29udGV4dHMvYXV0aFwiO1xyXG5jb25zdCBkcmF3ZXJXaWR0aCA9IDI0MDtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gIH0sXHJcbiAgYXBwQmFyOiB7XHJcbiAgICB6SW5kZXg6IHRoZW1lLnpJbmRleC5kcmF3ZXIgKyAxLFxyXG4gICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFtcIndpZHRoXCIsIFwibWFyZ2luXCJdLCB7XHJcbiAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24ubGVhdmluZ1NjcmVlbixcclxuICAgIH0pLFxyXG4gIH0sXHJcbiAgYXBwQmFyU2hpZnQ6IHtcclxuICAgIG1hcmdpbkxlZnQ6IGRyYXdlcldpZHRoLFxyXG4gICAgd2lkdGg6IGBjYWxjKDEwMCUgLSAke2RyYXdlcldpZHRofXB4KWAsXHJcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoW1wid2lkdGhcIiwgXCJtYXJnaW5cIl0sIHtcclxuICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5lbnRlcmluZ1NjcmVlbixcclxuICAgIH0pLFxyXG4gIH0sXHJcbiAgbWVudUJ1dHRvbjoge1xyXG4gICAgbWFyZ2luUmlnaHQ6IDM2LFxyXG4gICAgW1wiQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KVwiXToge1xyXG4gICAgICBtYXJnaW5SaWdodDogXCIxcmVtXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgaGlkZToge1xyXG4gICAgZGlzcGxheTogXCJub25lXCIsXHJcbiAgfSxcclxuICBkcmF3ZXI6IHtcclxuICAgIHdpZHRoOiBkcmF3ZXJXaWR0aCxcclxuICAgIGZsZXhTaHJpbms6IDAsXHJcbiAgICB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiLFxyXG4gICAgYmFja2dyb3VuZDogXCIjMjMzNTQ4XCIsXHJcbiAgfSxcclxuICBkcmF3ZXJPcGVuOiB7XHJcbiAgICB3aWR0aDogZHJhd2VyV2lkdGgsXHJcbiAgICBiYWNrZ3JvdW5kOiBcIiMyMzM1NDhcIixcclxuICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShcIndpZHRoXCIsIHtcclxuICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5lbnRlcmluZ1NjcmVlbixcclxuICAgIH0pLFxyXG4gICAgcGFkZGluZ1RvcDogXCIxZW1cIixcclxuICAgIFwiJjo6LXdlYmtpdC1zY3JvbGxiYXJcIjoge1xyXG4gICAgICB3aWR0aDogNCxcclxuICAgIH0sXHJcbiAgICBcIiY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrXCI6IHtcclxuICAgICAgYm94U2hhZG93OiBgaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMylgLFxyXG4gICAgfSxcclxuICAgIFwiJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWJcIjoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyMjEsIDE1NCwgNjYsIDAuNylcIixcclxuICAgICAgb3V0bGluZTogYDFweCBzb2xpZCBzbGF0ZWdyZXlgLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGRyYXdlckJhY2tncm91bmQ6IHtcclxuICAgIGJhY2tncm91bmQ6IFwiIzIzMzU0OFwiLFxyXG4gIH0sXHJcbiAgZHJhd2VyQ2xvc2U6IHtcclxuICAgIGJhY2tncm91bmQ6IFwiIzIzMzU0OFwiLFxyXG4gICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFwid2lkdGhcIiwge1xyXG4gICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmxlYXZpbmdTY3JlZW4sXHJcbiAgICB9KSxcclxuICAgIG92ZXJmbG93WDogXCJoaWRkZW5cIixcclxuICAgIHdpZHRoOiB0aGVtZS5zcGFjaW5nKDcpICsgMSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cChcInNtXCIpXToge1xyXG4gICAgICB3aWR0aDogdGhlbWUuc3BhY2luZyg4KSArIDEsXHJcbiAgICB9LFxyXG4gICAgcGFkZGluZ1RvcDogXCIxZW1cIixcclxuICAgIFwiJjo6LXdlYmtpdC1zY3JvbGxiYXJcIjoge1xyXG4gICAgICB3aWR0aDogNCxcclxuICAgIH0sXHJcbiAgICBcIiY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrXCI6IHtcclxuICAgICAgYm94U2hhZG93OiBgaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMylgLFxyXG4gICAgfSxcclxuICAgIFwiJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWJcIjoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyMjEsIDE1NCwgNjYsIDAuNylcIixcclxuICAgICAgb3V0bGluZTogYDFweCBzb2xpZCBzbGF0ZWdyZXlgLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHRvb2xiYXI6IHtcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgaGVpZ2h0OiBcIjg0cHhcIixcclxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogXCJmbGV4LWVuZFwiLFxyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygwLCAxKSxcclxuICAgIC8vIG5lY2Vzc2FyeSBmb3IgY29udGVudCB0byBiZSBiZWxvdyBhcHAgYmFyXHJcbiAgICAuLi50aGVtZS5taXhpbnMudG9vbGJhcixcclxuICB9LFxyXG4gIGNvbnRlbnQ6IHtcclxuICAgIGZsZXhHcm93OiAxLFxyXG4gIH0sXHJcbiAgbGluazoge1xyXG4gICAgbWFyZ2luOiBcIjAgMCAwIGF1dG9cIixcclxuICAgIFtcIkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweClcIl06IHtcclxuICAgICAgdmlzaWJpbGl0eTogXCJoaWRkZW5cIixcclxuICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgZGlzcGxheTogXCJub25lXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbG9nbzoge1xyXG4gICAgbWFyZ2luOiBcIjAgMCAwIGF1dG9cIixcclxuICAgIHdpZHRoOiBcIjI1MHB4XCIsXHJcbiAgICBoZWlnaHQ6IFwiYXV0b1wiLFxyXG4gIH0sXHJcbiAgbW9iTG9nbzoge1xyXG4gICAgbWFyZ2luOiBcIjAgMCAwIGF1dG9cIixcclxuICAgIHdpZHRoOiBcIjE0MHB4XCIsXHJcbiAgICBoZWlnaHQ6IFwiYXV0b1wiLFxyXG4gIH0sXHJcbiAgc2hpZnRUZXh0TGVmdDoge1xyXG4gICAgbWFyZ2luTGVmdDogXCIwcHhcIixcclxuICB9LFxyXG4gIHNoaWZ0VGV4dFJpZ2h0OiB7XHJcbiAgICBtYXJnaW5MZWZ0OiBkcmF3ZXJXaWR0aCxcclxuICB9LFxyXG59KSk7XHJcblxyXG5pbnRlcmZhY2UgSGVhZGVyUHJvcHMge1xyXG4gIG9wZW46IGJvb2xlYW47XHJcbiAgaGFuZGxlRHJhd2VyT3BlbjogKCkgPT4gdm9pZDtcclxuICBoYW5kbGVEcmF3ZXJDbG9zZTogKCkgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKHtcclxuICBvcGVuLFxyXG4gIGhhbmRsZURyYXdlck9wZW4sXHJcbiAgaGFuZGxlRHJhd2VyQ2xvc2UsXHJcbn06IEhlYWRlclByb3BzKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcclxuXHJcbiAgY29uc3QgW3RvZ2dsZU1vdXNlVG9vbHRpcCwgc2V0VG9nZ2xlTW91c2VUb29sdGlwXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICBjb25zdCBbdGl0bGVUb29sdGlwLCBzZXRUaXRsZVRvb2x0aXBdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcclxuICBjb25zdCB7IGxvZ291dCwgdXNlciwgZmlsaWFsUHJpbmNpcGFsIH0gPSB1c2VBdXRoKCk7XHJcblxyXG4gIGNvbnN0IHdpbmRvd1NpemUgPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICBjb25zdCBtYXhNb2JTaXplID0gNzAwO1xyXG5cclxuICBjb25zdCBoYW5kbGVNb3VzZVRvb2dsZVRvb2x0aXAgPSAoc3RhdGU6IGJvb2xlYW4sIHRpdGxlOiBzdHJpbmcpID0+IHtcclxuICAgIGlmICghb3Blbikge1xyXG4gICAgICBzZXRUaXRsZVRvb2x0aXAodGl0bGUpO1xyXG4gICAgICBzZXRUb2dnbGVNb3VzZVRvb2x0aXAoc3RhdGUpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Q3NzQmFzZWxpbmUgLz5cclxuICAgICAgPEFwcEJhclxyXG4gICAgICAgIHBvc2l0aW9uPVwiZml4ZWRcIlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBcIiMyMzM1NDhcIixcclxuICAgICAgICAgIHBhZGRpbmc6IFwiMC42cmVtIDAuNnJlbVwiLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMuYXBwQmFyLCB7XHJcbiAgICAgICAgICBbY2xhc3Nlcy5hcHBCYXJTaGlmdF06IG9wZW4sXHJcbiAgICAgICAgfSl9XHJcbiAgICAgID5cclxuICAgICAgICA8VG9vbGJhclxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgZWRnZT1cInN0YXJ0XCJcclxuICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIm9wZW4gZHJhd2VyXCJcclxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlRHJhd2VyT3Blbn1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMubWVudUJ1dHRvbiwge1xyXG4gICAgICAgICAgICAgIFtjbGFzc2VzLmhpZGVdOiBvcGVuLFxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEZpTWVudSBjb2xvcj1cIiNERDlBNDJcIiBzaXplPXszMH0gLz5cclxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIHt1c2VyICYmIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJJbmZvfT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlclVzZXJJbmZvfT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnNwYW5Vc2VyfT57dXNlci5VU1VBUklPfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnNwYW5GaWxpYWx9PlxyXG4gICAgICAgICAgICAgICAgICB7YCR7ZmlsaWFsUHJpbmNpcGFsLkNPREVNUFJFU0F9IC0gJHtmaWxpYWxQcmluY2lwYWwuTk9NRVJFRH1gfVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxGaUxvZ091dCBvbkNsaWNrPXtsb2dvdXR9IHNpemU9ezIwfSBjb2xvcj1cIiNmNGY0ZjRcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICA8YSBocmVmPVwiL1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy5saW5rfT5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17XHJcbiAgICAgICAgICAgICAgICB3aW5kb3dTaXplID4gbWF4TW9iU2l6ZSA/IGNsYXNzZXMubG9nbyA6IGNsYXNzZXMubW9iTG9nb1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL3V0aWxpdGFyaW9zLWxvZ28ucG5nXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgIDwvQXBwQmFyPlxyXG4gICAgICB7d2luZG93U2l6ZSA+IG1heE1vYlNpemUgPyAoXHJcbiAgICAgICAgPERyYXdlclxyXG4gICAgICAgICAgdmFyaWFudD1cInBlcm1hbmVudFwiXHJcbiAgICAgICAgICBjbGFzc2VzPXt7XHJcbiAgICAgICAgICAgIHBhcGVyOiBjbHN4KHtcclxuICAgICAgICAgICAgICBbY2xhc3Nlcy5kcmF3ZXJPcGVuXTogb3BlbixcclxuICAgICAgICAgICAgICBbY2xhc3Nlcy5kcmF3ZXJDbG9zZV06ICFvcGVuLFxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudG9vbGJhcn0+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2hhbmRsZURyYXdlckNsb3NlfT5cclxuICAgICAgICAgICAgICB7dGhlbWUuZGlyZWN0aW9uID09PSBcInJ0bFwiID8gKFxyXG4gICAgICAgICAgICAgICAgPEZpQ2hldnJvblJpZ2h0IGNvbG9yPVwiI0REOUE0MlwiIC8+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxGaUNoZXZyb25MZWZ0IGNvbG9yPVwiI0REOUE0MlwiIC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8TGlzdCBjbGFzc05hbWU9XCJzaWRlQmFyLXVsXCI+XHJcbiAgICAgICAgICAgIHt1c2VyPy5wZXJtaXNzaW9ucy5jb25zdWx0YXJQcm9kdXRvcyAhPT0gXCJTRU1fQUNFU1NPXCIgJiYgKFxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCIvY29uc3VsdGFyLXByb2R1dG9cIlxyXG4gICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlTW91c2VUb29nbGVUb29sdGlwKHRydWUsIFwiQ29uc3VsdGFyIFByb2R1dG9cIilcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICA8RmlTZWFyY2ggc2l6ZT17Mjh9IGNvbG9yPVwiI0REOUE0MlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2hpdGVTcGFjZTogXCJub3dyYXBcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHByaW1hcnk9e1wiQ29uc3VsdGFyIFByb2R1dG9zXCJ9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIHt1c2VyPy5wZXJtaXNzaW9ucy5wYXJhbWV0cm9zR2VyYWlzICE9PSBcIlNFTV9BQ0VTU09cIiAmJiAoXHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9wYXJhbWV0cm9zLWdlcmFpc1wiPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGaVRvb2wgc2l6ZT17Mjh9IGNvbG9yPVwiI0REOUE0MlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2hpdGVTcGFjZTogXCJub3dyYXBcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHByaW1hcnk9e1wiUGFyw6JtZXRyb3MgR2VyYWlzXCJ9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgICA8YSBocmVmPVwiL2dlcmFyLWNvZC1iYXJyYXNcIj5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgIDxBaU91dGxpbmVCYXJjb2RlIHNpemU9ezI4fSBjb2xvcj1cIiNERDlBNDJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0XHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdoaXRlU3BhY2U6IFwibm93cmFwXCIgfX1cclxuICAgICAgICAgICAgICAgICAgcHJpbWFyeT17XCJHZXJhciBDw7NkaWdvIGRlIEJhcnJhc1wifVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcblxyXG4gICAgICAgICAgICB7dXNlcj8ucGVybWlzc2lvbnMuY29udGFzQVJlY2ViZXIgIT09IFwiU0VNX0FDRVNTT1wiICYmIChcclxuICAgICAgICAgICAgICA8TGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiL3JlY2ViZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICA8RmFSZWdNb25leUJpbGxBbHQgc2l6ZT17Mjh9IGNvbG9yPVwiI0REOUE0MlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2hpdGVTcGFjZTogXCJub3dyYXBcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHByaW1hcnk9e1wiQ29udGFzIGEgUmVjZWJlclwifVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICB7dXNlcj8ucGVybWlzc2lvbnMuYWx0ZXJhQWRtQ29udmVuaW8gIT09IFwiU0VNX0FDRVNTT1wiICYmIChcclxuICAgICAgICAgICAgICA8TGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2FsdGVyYS1hZG0tY29udmVuaW9cIj5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICA8RmlDcmVkaXRDYXJkIHNpemU9ezI4fSBjb2xvcj1cIiNERDlBNDJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdoaXRlU3BhY2U6IFwibm93cmFwXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICBwcmltYXJ5PXtcIkFsdGVyYXIgQWRtLiBDb252w6puaW9cIn1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuXHJcbiAgICAgICAgICAgIHt1c2VyPy5wZXJtaXNzaW9ucy5kaWdpdGFjYW9JbnZlbnRhcmlvICE9PSBcIlNFTV9BQ0VTU09cIiAmJiAoXHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9kaWdpdGFjYW8taW52ZW50YXJpb1wiPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGaUVkaXQgc2l6ZT17Mjh9IGNvbG9yPVwiI0REOUE0MlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2hpdGVTcGFjZTogXCJub3dyYXBcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHByaW1hcnk9e1wiRGlnaXRhw6fDo28gZGUgSW52ZW50w6FyaW9cIn1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAge3VzZXI/LnBlcm1pc3Npb25zLmNvbnN1bHRhckludmVudGFyaW9zICE9PSBcIlNFTV9BQ0VTU09cIiAmJiAoXHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9jb25zdWx0YXItaW52ZW50YXJpb3NcIj5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICA8RmlMaXN0IHNpemU9ezI4fSBjb2xvcj1cIiNERDlBNDJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdoaXRlU3BhY2U6IFwibm93cmFwXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICBwcmltYXJ5PXtcIkNvbnN1bHRhciBJbnZlbnTDoXJpb3NcIn1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAge3VzZXI/LnBlcm1pc3Npb25zLmNvbXByYXNSZXF1aXNpdGFyICE9PSBcIlNFTV9BQ0VTU09cIiAmJlxyXG4gICAgICAgICAgICAgIHVzZXI/LnBlcm1pc3Npb25zLmNvbXByYXNDb25zdWx0YXIgIT09IFwiU0VNX0FDRVNTT1wiICYmXHJcbiAgICAgICAgICAgICAgdXNlcj8ucGVybWlzc2lvbnMuY29tcHJhc1BhaW5lbERvQ29tcHJhZG9yICE9PSBcIlNFTV9BQ0VTU09cIiAmJiAoXHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvY29tcHJhc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8RmlEb2xsYXJTaWduIHNpemU9ezI4fSBjb2xvcj1cIiNERDlBNDJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHRcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdoaXRlU3BhY2U6IFwibm93cmFwXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIHByaW1hcnk9e1wiQ29tcHJhc1wifVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIHt1c2VyPy5wZXJtaXNzaW9ucy5kZW1hbmRhclJlcG9zaWNhbyAhPT0gXCJTRU1fQUNFU1NPXCIgJiYgKFxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvZGVtYW5kYXItcmVwb3NpY2FvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZpUGFja2FnZSBzaXplPXsyOH0gY29sb3I9XCIjREQ5QTQyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHRcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgcHJpbWFyeT17XCJEZW1hbmRhciBSZXBvc2nDp8Ojb1wifVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICB7dXNlcj8ucGVybWlzc2lvbnMudmlzdWFsaXphclJlcG9zaWNvZXMgIT09IFwiU0VNX0FDRVNTT1wiICYmIChcclxuICAgICAgICAgICAgICA8TGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2NvbnN1bHRhci1yZXBvc2ljb2VzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZpR3JpZCBzaXplPXsyOH0gY29sb3I9XCIjREQ5QTQyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHRcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgcHJpbWFyeT17XCJWaXN1YWxpemFyIFJlcG9zacOnw7Vlc1wifVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICA8RGl2aWRlciAvPlxyXG5cclxuICAgICAgICAgICAge3VzZXI/LnBlcm1pc3Npb25zLmNvbmZpZ3VyYWNvZXMgIT09IFwiU0VNX0FDRVNTT1wiICYmIChcclxuICAgICAgICAgICAgICA8TGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2NvbmZpZ3VyYWNvZXNcIj5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICA8RmlTZXR0aW5ncyBzaXplPXsyOH0gY29sb3I9XCIjREQ5QTQyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHRcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgcHJpbWFyeT17XCJDb25maWd1cmHDp8O1ZXNcIn1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAge3VzZXI/LnBlcm1pc3Npb25zPy5wZXJtaXNzb2VzICE9PSBcIlNFTV9BQ0VTU09cIiAmJiAoXHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9wZXJtaXNzb2VzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZpVXNlciBzaXplPXsyOH0gY29sb3I9XCIjREQ5QTQyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHRcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgcHJpbWFyeT17XCJQZXJtaXNzw7Vlc1wifVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICA8TGlzdEl0ZW0gc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXIgXCIgfX0gb25DbGljaz17bG9nb3V0fT5cclxuICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgIDxGaUxvZ091dCBzaXplPXsyOH0gY29sb3I9XCIjREQ5QTQyXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dFxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiIH19XHJcbiAgICAgICAgICAgICAgICAgIHByaW1hcnk9e1wiU2FpclwifVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgICA8TW91c2VUb29sVGlwXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHpJbmRleDogMjE0NzQ4MzY0NyB9fVxyXG4gICAgICAgICAgICB2aXNpYmxlPXt0b2dnbGVNb3VzZVRvb2x0aXB9XHJcbiAgICAgICAgICAgIG9mZnNldFg9ezE1fVxyXG4gICAgICAgICAgICBvZmZzZXRZPXsxMH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvYnNlcnZhY2FvLWNvbXByYVwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuPnt0aXRsZVRvb2x0aXB9PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvTW91c2VUb29sVGlwPlxyXG4gICAgICAgIDwvRHJhd2VyPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxEcmF3ZXJcclxuICAgICAgICAgIGNsYXNzZXM9e3tcclxuICAgICAgICAgICAgcGFwZXI6IGNsc3goY2xhc3Nlcy5kcmF3ZXJCYWNrZ3JvdW5kKSxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICB2YXJpYW50PVwidGVtcG9yYXJ5XCJcclxuICAgICAgICAgIGFuY2hvcj1cInRvcFwiXHJcbiAgICAgICAgICBvcGVuPXtvcGVufVxyXG4gICAgICAgICAgb25DbG9zZT17aGFuZGxlRHJhd2VyQ2xvc2V9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPExpc3QgY2xhc3NOYW1lPVwic2lkZUJhci11bFwiPlxyXG4gICAgICAgICAgICB7dXNlcj8ucGVybWlzc2lvbnMuY29uc3VsdGFyUHJvZHV0b3MgIT09IFwiU0VNX0FDRVNTT1wiICYmIChcclxuICAgICAgICAgICAgICA8TGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2NvbnN1bHRhci1wcm9kdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZpU2VhcmNoIHNpemU9ezMwfSBjb2xvcj1cIiNERDlBNDJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtcIkNvbnN1bHRhciBQcm9kdXRvc1wifSAvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICA8RGl2aWRlciAvPlxyXG5cclxuICAgICAgICAgICAge3VzZXI/LnBlcm1pc3Npb25zLmRpZ2l0YWNhb0ludmVudGFyaW8gIT09IFwiU0VNX0FDRVNTT1wiICYmIChcclxuICAgICAgICAgICAgICA8TGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2RpZ2l0YWNhby1pbnZlbnRhcmlvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZpRWRpdCBzaXplPXszMH0gY29sb3I9XCIjREQ5QTQyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17XCJEaWdpdGHDp8OjbyBkZSBJbnZlbnTDoXJpb1wifSAvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICB7dXNlcj8ucGVybWlzc2lvbnMuY29tcHJhc1JlcXVpc2l0YXIgIT09IFwiU0VNX0FDRVNTT1wiIHx8XHJcbiAgICAgICAgICAgICAgdXNlcj8ucGVybWlzc2lvbnMuY29tcHJhc0NvbnN1bHRhciAhPT0gXCJTRU1fQUNFU1NPXCIgfHxcclxuICAgICAgICAgICAgICB1c2VyPy5wZXJtaXNzaW9ucy5jb21wcmFzUGFpbmVsRG9Db21wcmFkb3IgIT09IFwiU0VNX0FDRVNTT1wiIHx8IChcclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9jb21wcmFzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxGaURvbGxhclNpZ24gc2l6ZT17MzB9IGNvbG9yPVwiI0REOUE0MlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtcIkNvbXByYXNcIn0gLz5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAge3VzZXI/LnBlcm1pc3Npb25zLmRlbWFuZGFyUmVwb3NpY2FvICE9PSBcIlNFTV9BQ0VTU09cIiAmJiAoXHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9kZW1hbmRhci1yZXBvc2ljYW9cIj5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICA8RmlQYWNrYWdlIHNpemU9ezMwfSBjb2xvcj1cIiNERDlBNDJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtcIkRlbWFuZGFyIFJlcG9zacOnw6NvXCJ9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuXHJcbiAgICAgICAgICAgIDxMaXN0SXRlbSBvbkNsaWNrPXtsb2dvdXR9PlxyXG4gICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgPEZpTG9nT3V0IHNpemU9ezMwfSBjb2xvcj1cIiNERDlBNDJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e1wiU2FpclwifSAvPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgIDwvTGlzdD5cclxuICAgICAgICA8L0RyYXdlcj5cclxuICAgICAgKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==