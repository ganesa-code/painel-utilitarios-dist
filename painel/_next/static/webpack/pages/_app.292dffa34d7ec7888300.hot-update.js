webpackHotUpdate_N_E("pages/_app",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXN0aWNreS1tb3VzZS10b29sdGlwL2Rpc3QvTW91c2VUb29sdGlwLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvaW5kZXgudHN4Il0sIm5hbWVzIjpbImRyYXdlcldpZHRoIiwidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsImRpc3BsYXkiLCJhcHBCYXIiLCJ6SW5kZXgiLCJkcmF3ZXIiLCJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvbnMiLCJjcmVhdGUiLCJlYXNpbmciLCJzaGFycCIsImR1cmF0aW9uIiwibGVhdmluZ1NjcmVlbiIsImFwcEJhclNoaWZ0IiwibWFyZ2luTGVmdCIsIndpZHRoIiwiZW50ZXJpbmdTY3JlZW4iLCJtZW51QnV0dG9uIiwibWFyZ2luUmlnaHQiLCJoaWRlIiwiZmxleFNocmluayIsIndoaXRlU3BhY2UiLCJiYWNrZ3JvdW5kIiwiZHJhd2VyT3BlbiIsInBhZGRpbmdUb3AiLCJib3hTaGFkb3ciLCJiYWNrZ3JvdW5kQ29sb3IiLCJvdXRsaW5lIiwiZHJhd2VyQmFja2dyb3VuZCIsImRyYXdlckNsb3NlIiwib3ZlcmZsb3dYIiwic3BhY2luZyIsImJyZWFrcG9pbnRzIiwidXAiLCJ0b29sYmFyIiwiaGVpZ2h0IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwicGFkZGluZyIsIm1peGlucyIsImNvbnRlbnQiLCJmbGV4R3JvdyIsImxpbmsiLCJtYXJnaW4iLCJ2aXNpYmlsaXR5Iiwib3BhY2l0eSIsImxvZ28iLCJtb2JMb2dvIiwic2hpZnRUZXh0TGVmdCIsInNoaWZ0VGV4dFJpZ2h0IiwiSGVhZGVyIiwib3BlbiIsImhhbmRsZURyYXdlck9wZW4iLCJoYW5kbGVEcmF3ZXJDbG9zZSIsImNsYXNzZXMiLCJ1c2VUaGVtZSIsInVzZVN0YXRlIiwidG9nZ2xlTW91c2VUb29sdGlwIiwic2V0VG9nZ2xlTW91c2VUb29sdGlwIiwidGl0bGVUb29sdGlwIiwic2V0VGl0bGVUb29sdGlwIiwidXNlQXV0aCIsImxvZ291dCIsInVzZXIiLCJmaWxpYWxQcmluY2lwYWwiLCJ3aW5kb3dTaXplIiwid2luZG93IiwiaW5uZXJXaWR0aCIsIm1heE1vYlNpemUiLCJoYW5kbGVNb3VzZVRvb2dsZVRvb2x0aXAiLCJzdGF0ZSIsInRpdGxlIiwiY2xzeCIsInN0eWxlcyIsImhlYWRlckluZm8iLCJoZWFkZXJVc2VySW5mbyIsInNwYW5Vc2VyIiwiVVNVQVJJTyIsInNwYW5GaWxpYWwiLCJDT0RFTVBSRVNBIiwiTk9NRVJFRCIsInBhcGVyIiwiZGlyZWN0aW9uIiwicGVybWlzc2lvbnMiLCJjb25zdWx0YXJQcm9kdXRvcyIsInBhcmFtZXRyb3NHZXJhaXMiLCJjb250YXNBUmVjZWJlciIsImFsdGVyYUFkbUNvbnZlbmlvIiwiZGlnaXRhY2FvSW52ZW50YXJpbyIsImNvbnN1bHRhckludmVudGFyaW9zIiwiY29tcHJhc1JlcXVpc2l0YXIiLCJjb21wcmFzQ29uc3VsdGFyIiwiY29tcHJhc1BhaW5lbERvQ29tcHJhZG9yIiwiZGVtYW5kYXJSZXBvc2ljYW8iLCJ2aXN1YWxpemFyUmVwb3NpY29lcyIsImNvbmZpZ3VyYWNvZXMiLCJwZXJtaXNzb2VzIiwiY3Vyc29yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxnQ0FBZ0MsZ0JBQWdCLHNCQUFzQixPQUFPLHVEQUF1RCxtQ0FBbUMsMERBQTBELHNGQUFzRixnRUFBZ0UsRUFBRSxHQUFHLEVBQUUsaUNBQWlDLDJDQUEyQyxFQUFFLEVBQUUsRUFBRSxlQUFlOztBQUUvZCwyQ0FBMkMsa0JBQWtCLGtDQUFrQyxxRUFBcUUsRUFBRSxFQUFFLE9BQU8sa0JBQWtCLEVBQUUsWUFBWTs7QUFFL00sWUFBWSxtQkFBTyxDQUFDLDRDQUFPO0FBQzNCLGdCQUFnQixtQkFBTyxDQUFDLHNEQUFZLEVBQUU7O0FBRXRDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Es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LGVBZ0RFLHFFQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBaERGLGVBa0RFLHFFQUFDLDBEQUFEO0FBQVUsaUJBQU8sRUFBRS9CLE1BQW5CO0FBQUEsaUNBQ0U7QUFBQSxvQ0FDRSxxRUFBQyw4REFBRDtBQUFBLHFDQUNFLHFFQUFDLHVEQUFEO0FBQVUsb0JBQUksRUFBRSxFQUFoQjtBQUFvQixxQkFBSyxFQUFDO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBSUUscUVBQUMsOERBQUQ7QUFBYyxxQkFBTyxFQUFFO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFsREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQW5SSjtBQUFBLGtCQURGO0FBNFZEOztHQWxYdUJaLE07VUFLTnBELFMsRUFDRnlELGlFLEVBSTRCTSx1RDs7O0tBVnBCWCxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMjkyZGZmYTM0ZDdlYzc4ODgzMDAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyB2YXIgb3duS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7IGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gJ2Z1bmN0aW9uJykgeyBvd25LZXlzID0gb3duS2V5cy5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwgc3ltKS5lbnVtZXJhYmxlOyB9KSk7IH0gb3duS2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxudmFyIFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xudmFyIFByb3BUeXBlcyA9IHJlcXVpcmUoJ3Byb3AtdHlwZXMnKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXNcblxuY2xhc3MgTW91c2VUb29sdGlwIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInN0YXRlXCIsIHtcbiAgICAgIHhQb3NpdGlvbjogMCxcbiAgICAgIHlQb3NpdGlvbjogMCxcbiAgICAgIG1vdXNlTW92ZWQ6IGZhbHNlLFxuICAgICAgbGlzdGVuZXJBY3RpdmU6IGZhbHNlXG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJnZXRUb29sdGlwUG9zaXRpb25cIiwgKHtcbiAgICAgIGNsaWVudFg6IHhQb3NpdGlvbixcbiAgICAgIGNsaWVudFk6IHlQb3NpdGlvblxuICAgIH0pID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICB4UG9zaXRpb24sXG4gICAgICAgIHlQb3NpdGlvbixcbiAgICAgICAgbW91c2VNb3ZlZDogdHJ1ZVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBfZGVmaW5lUHJvcGVydHkodGhpcywgXCJhZGRMaXN0ZW5lclwiLCAoKSA9PiB7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5nZXRUb29sdGlwUG9zaXRpb24pO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGxpc3RlbmVyQWN0aXZlOiB0cnVlXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInJlbW92ZUxpc3RlbmVyXCIsICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLmdldFRvb2x0aXBQb3NpdGlvbik7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgbGlzdGVuZXJBY3RpdmU6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIF9kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcInVwZGF0ZUxpc3RlbmVyXCIsICgpID0+IHtcbiAgICAgIGlmICghdGhpcy5zdGF0ZS5saXN0ZW5lckFjdGl2ZSAmJiB0aGlzLnByb3BzLnZpc2libGUpIHtcbiAgICAgICAgdGhpcy5hZGRMaXN0ZW5lcigpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5zdGF0ZS5saXN0ZW5lckFjdGl2ZSAmJiAhdGhpcy5wcm9wcy52aXNpYmxlKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuYWRkTGlzdGVuZXIoKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICB0aGlzLnVwZGF0ZUxpc3RlbmVyKCk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiB0aGlzLnByb3BzLmNsYXNzTmFtZSxcbiAgICAgIHN0eWxlOiBfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgZGlzcGxheTogdGhpcy5wcm9wcy52aXNpYmxlICYmIHRoaXMuc3RhdGUubW91c2VNb3ZlZCA/ICdibG9jaycgOiAnbm9uZScsXG4gICAgICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxuICAgICAgICB0b3A6IHRoaXMuc3RhdGUueVBvc2l0aW9uICsgdGhpcy5wcm9wcy5vZmZzZXRZLFxuICAgICAgICBsZWZ0OiB0aGlzLnN0YXRlLnhQb3NpdGlvbiArIHRoaXMucHJvcHMub2Zmc2V0WFxuICAgICAgfSwgdGhpcy5wcm9wcy5zdHlsZSlcbiAgICB9LCB0aGlzLnByb3BzLmNoaWxkcmVuKTtcbiAgfVxuXG59XG5cbl9kZWZpbmVQcm9wZXJ0eShNb3VzZVRvb2x0aXAsIFwiZGVmYXVsdFByb3BzXCIsIHtcbiAgdmlzaWJsZTogdHJ1ZSxcbiAgb2Zmc2V0WDogMCxcbiAgb2Zmc2V0WTogMFxufSk7XG5cbk1vdXNlVG9vbHRpcC5wcm9wVHlwZXMgPSB7XG4gIHZpc2libGU6IFByb3BUeXBlcy5ib29sLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcbiAgb2Zmc2V0WDogUHJvcFR5cGVzLm51bWJlcixcbiAgb2Zmc2V0WTogUHJvcFR5cGVzLm51bWJlcixcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIHJlYWN0L2ZvcmJpZC1wcm9wLXR5cGVzXG5cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gTW91c2VUb29sdGlwO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnlZeTlOYjNWelpWUnZiMngwYVhBdWFuTjRJbDBzSW01aGJXVnpJanBiSWxKbFlXTjBJaXdpVUhKdmNGUjVjR1Z6SWl3aVRXOTFjMlZVYjI5c2RHbHdJaXdpVUhWeVpVTnZiWEJ2Ym1WdWRDSXNJbmhRYjNOcGRHbHZiaUlzSW5sUWIzTnBkR2x2YmlJc0ltMXZkWE5sVFc5MlpXUWlMQ0pzYVhOMFpXNWxja0ZqZEdsMlpTSXNJbU5zYVdWdWRGZ2lMQ0pqYkdsbGJuUlpJaXdpYzJWMFUzUmhkR1VpTENKM2FXNWtiM2NpTENKaFpHUkZkbVZ1ZEV4cGMzUmxibVZ5SWl3aVoyVjBWRzl2YkhScGNGQnZjMmwwYVc5dUlpd2ljbVZ0YjNabFJYWmxiblJNYVhOMFpXNWxjaUlzSW5OMFlYUmxJaXdpY0hKdmNITWlMQ0oyYVhOcFlteGxJaXdpWVdSa1RHbHpkR1Z1WlhJaUxDSnlaVzF2ZG1WTWFYTjBaVzVsY2lJc0ltTnZiWEJ2Ym1WdWRFUnBaRTF2ZFc1MElpd2lZMjl0Y0c5dVpXNTBSR2xrVlhCa1lYUmxJaXdpZFhCa1lYUmxUR2x6ZEdWdVpYSWlMQ0pqYjIxd2IyNWxiblJYYVd4c1ZXNXRiM1Z1ZENJc0luSmxibVJsY2lJc0ltTnNZWE56VG1GdFpTSXNJbVJwYzNCc1lYa2lMQ0p3YjNOcGRHbHZiaUlzSW5SdmNDSXNJbTltWm5ObGRGa2lMQ0pzWldaMElpd2liMlptYzJWMFdDSXNJbk4wZVd4bElpd2lZMmhwYkdSeVpXNGlMQ0p3Y205d1ZIbHdaWE1pTENKaWIyOXNJaXdpYm05a1pTSXNJbWx6VW1WeGRXbHlaV1FpTENKdWRXMWlaWElpTENKemRISnBibWNpTENKdlltcGxZM1FpWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3UVVGQlFTeFBRVUZQUVN4TFFVRlFMRTFCUVd0Q0xFOUJRV3hDTzBGQlEwRXNUMEZCVDBNc1UwRkJVQ3hOUVVGelFpeFpRVUYwUWl4RExFTkJRVzlET3p0QlFVVndReXhOUVVGTlF5eFpRVUZPTEZOQlFUSkNSaXhMUVVGTExFTkJRVU5ITEdGQlFXcERMRU5CUVN0RE8wRkJRVUU3UVVGQlFUczdRVUZCUVN4dFEwRlBja003UVVGRFRrTXNUVUZCUVVFc1UwRkJVeXhGUVVGRkxFTkJSRXc3UVVGRlRrTXNUVUZCUVVFc1UwRkJVeXhGUVVGRkxFTkJSa3c3UVVGSFRrTXNUVUZCUVVFc1ZVRkJWU3hGUVVGRkxFdEJTRTQ3UVVGSlRrTXNUVUZCUVVFc1kwRkJZeXhGUVVGRk8wRkJTbFlzUzBGUWNVTTdPMEZCUVVFc1owUkJNRUo0UWl4RFFVRkRPMEZCUVVWRExFMUJRVUZCTEU5QlFVOHNSVUZCUlVvc1UwRkJXRHRCUVVGelFrc3NUVUZCUVVFc1QwRkJUeXhGUVVGRlNqdEJRVUV2UWl4TFFVRkVMRXRCUVdkRU8wRkJRMjVGTEZkQlFVdExMRkZCUVV3c1EwRkJZenRCUVVOYVRpeFJRVUZCUVN4VFFVUlpPMEZCUlZwRExGRkJRVUZCTEZOQlJsazdRVUZIV2tNc1VVRkJRVUVzVlVGQlZTeEZRVUZGTzBGQlNFRXNUMEZCWkR0QlFVdEVMRXRCYUVNMFF6czdRVUZCUVN4NVEwRnJReTlDTEUxQlFVMDdRVUZEYkVKTExFMUJRVUZCTEUxQlFVMHNRMEZCUTBNc1owSkJRVkFzUTBGQmQwSXNWMEZCZUVJc1JVRkJjVU1zUzBGQlMwTXNhMEpCUVRGRE8wRkJRMEVzVjBGQlMwZ3NVVUZCVEN4RFFVRmpPMEZCUVVWSUxGRkJRVUZCTEdOQlFXTXNSVUZCUlR0QlFVRnNRaXhQUVVGa08wRkJRMFFzUzBGeVF6UkRPenRCUVVGQkxEUkRRWFZETlVJc1RVRkJUVHRCUVVOeVFra3NUVUZCUVVFc1RVRkJUU3hEUVVGRFJ5eHRRa0ZCVUN4RFFVRXlRaXhYUVVFelFpeEZRVUYzUXl4TFFVRkxSQ3hyUWtGQk4wTTdRVUZEUVN4WFFVRkxTQ3hSUVVGTUxFTkJRV003UVVGQlJVZ3NVVUZCUVVFc1kwRkJZeXhGUVVGRk8wRkJRV3hDTEU5QlFXUTdRVUZEUkN4TFFURkRORU03TzBGQlFVRXNORU5CTkVNMVFpeE5RVUZOTzBGQlEzSkNMRlZCUVVrc1EwRkJReXhMUVVGTFVTeExRVUZNTEVOQlFWZFNMR05CUVZvc1NVRkJPRUlzUzBGQlMxTXNTMEZCVEN4RFFVRlhReXhQUVVFM1F5eEZRVUZ6UkR0QlFVTndSQ3hoUVVGTFF5eFhRVUZNTzBGQlEwUTdPMEZCUlVRc1ZVRkJTU3hMUVVGTFNDeExRVUZNTEVOQlFWZFNMR05CUVZnc1NVRkJOa0lzUTBGQlF5eExRVUZMVXl4TFFVRk1MRU5CUVZkRExFOUJRVGRETEVWQlFYTkVPMEZCUTNCRUxHRkJRVXRGTEdOQlFVdzdRVUZEUkR0QlFVTkdMRXRCY0VRMFF6dEJRVUZCT3p0QlFXTTNRME1zUlVGQlFVRXNhVUpCUVdsQ0xFZEJRVWM3UVVGRGJFSXNVMEZCUzBZc1YwRkJURHRCUVVORU96dEJRVVZFUnl4RlFVRkJRU3hyUWtGQmEwSXNSMEZCUnp0QlFVTnVRaXhUUVVGTFF5eGpRVUZNTzBGQlEwUTdPMEZCUlVSRExFVkJRVUZCTEc5Q1FVRnZRaXhIUVVGSE8wRkJRM0pDTEZOQlFVdEtMR05CUVV3N1FVRkRSRHM3UVVFNFFrUkxMRVZCUVVGQkxFMUJRVTBzUjBGQlJ6dEJRVU5RTEZkQlEwVTdRVUZEUlN4TlFVRkJMRk5CUVZNc1JVRkJSU3hMUVVGTFVpeExRVUZNTEVOQlFWZFRMRk5CUkhoQ08wRkJSVVVzVFVGQlFTeExRVUZMTzBGQlEwaERMRkZCUVVGQkxFOUJRVThzUlVGQlJTeExRVUZMVml4TFFVRk1MRU5CUVZkRExFOUJRVmdzU1VGQmMwSXNTMEZCUzBZc1MwRkJUQ3hEUVVGWFZDeFZRVUZxUXl4SFFVRTRReXhQUVVFNVF5eEhRVUYzUkN4TlFVUTVSRHRCUVVWSWNVSXNVVUZCUVVFc1VVRkJVU3hGUVVGRkxFOUJSbEE3UVVGSFNFTXNVVUZCUVVFc1IwRkJSeXhGUVVGRkxFdEJRVXRpTEV0QlFVd3NRMEZCVjFZc1UwRkJXQ3hIUVVGMVFpeExRVUZMVnl4TFFVRk1MRU5CUVZkaExFOUJTSEJETzBGQlNVaERMRkZCUVVGQkxFbEJRVWtzUlVGQlJTeExRVUZMWml4TFFVRk1MRU5CUVZkWUxGTkJRVmdzUjBGQmRVSXNTMEZCUzFrc1MwRkJUQ3hEUVVGWFpUdEJRVXB5UXl4VFFVdEJMRXRCUVV0bUxFdEJRVXdzUTBGQlYyZENMRXRCVEZnN1FVRkdVQ3hQUVZWSExFdEJRVXRvUWl4TFFVRk1MRU5CUVZkcFFpeFJRVlprTEVOQlJFWTdRVUZqUkRzN1FVRnlSVFJET3p0blFrRkJla012UWl4WkxHdENRVU5yUWp0QlFVTndRbVVzUlVGQlFVRXNUMEZCVHl4RlFVRkZMRWxCUkZjN1FVRkZjRUpqTEVWQlFVRkJMRTlCUVU4c1JVRkJSU3hEUVVaWE8wRkJSM0JDUml4RlFVRkJRU3hQUVVGUExFVkJRVVU3UVVGSVZ5eERPenRCUVhWRmVFSXpRaXhaUVVGWkxFTkJRVU5uUXl4VFFVRmlMRWRCUVhsQ08wRkJRM1pDYWtJc1JVRkJRVUVzVDBGQlR5eEZRVUZGYUVJc1UwRkJVeXhEUVVGRGEwTXNTVUZFU1R0QlFVVjJRa1lzUlVGQlFVRXNVVUZCVVN4RlFVRkZhRU1zVTBGQlV5eERRVUZEYlVNc1NVRkJWaXhEUVVGbFF5eFZRVVpHTzBGQlIzWkNUaXhGUVVGQlFTeFBRVUZQTEVWQlFVVTVRaXhUUVVGVExFTkJRVU54UXl4TlFVaEpPMEZCU1haQ1ZDeEZRVUZCUVN4UFFVRlBMRVZCUVVVMVFpeFRRVUZUTEVOQlFVTnhReXhOUVVwSk8wRkJTM1pDWWl4RlFVRkJRU3hUUVVGVExFVkJRVVY0UWl4VFFVRlRMRU5CUVVOelF5eE5RVXhGTzBGQlRYWkNVQ3hGUVVGQlFTeExRVUZMTEVWQlFVVXZRaXhUUVVGVExFTkJRVU4xUXl4TlFVNU5MRU5CVFVVN08wRkJUa1lzUTBGQmVrSTdRVUZUUVN4bFFVRmxkRU1zV1VGQlppSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQlNaV0ZqZENCbWNtOXRJQ2R5WldGamRDYzdYRzVwYlhCdmNuUWdVSEp2Y0ZSNWNHVnpJR1p5YjIwZ0ozQnliM0F0ZEhsd1pYTW5PeUF2THlCbGMyeHBiblF0WkdsellXSnNaUzFzYVc1bElHbHRjRzl5ZEM5dWJ5MWxlSFJ5WVc1bGIzVnpMV1JsY0dWdVpHVnVZMmxsYzF4dVhHNWpiR0Z6Y3lCTmIzVnpaVlJ2YjJ4MGFYQWdaWGgwWlc1a2N5QlNaV0ZqZEM1UWRYSmxRMjl0Y0c5dVpXNTBJSHRjYmlBZ2MzUmhkR2xqSUdSbFptRjFiSFJRY205d2N5QTlJSHRjYmlBZ0lDQjJhWE5wWW14bE9pQjBjblZsTEZ4dUlDQWdJRzltWm5ObGRGZzZJREFzWEc0Z0lDQWdiMlptYzJWMFdUb2dNQ3hjYmlBZ2ZUdGNibHh1SUNCemRHRjBaU0E5SUh0Y2JpQWdJQ0I0VUc5emFYUnBiMjQ2SURBc1hHNGdJQ0FnZVZCdmMybDBhVzl1T2lBd0xGeHVJQ0FnSUcxdmRYTmxUVzkyWldRNklHWmhiSE5sTEZ4dUlDQWdJR3hwYzNSbGJtVnlRV04wYVhabE9pQm1ZV3h6WlN4Y2JpQWdmVHRjYmx4dUlDQmpiMjF3YjI1bGJuUkVhV1JOYjNWdWRDZ3BJSHRjYmlBZ0lDQjBhR2x6TG1Ga1pFeHBjM1JsYm1WeUtDazdYRzRnSUgxY2JseHVJQ0JqYjIxd2IyNWxiblJFYVdSVmNHUmhkR1VvS1NCN1hHNGdJQ0FnZEdocGN5NTFjR1JoZEdWTWFYTjBaVzVsY2lncE8xeHVJQ0I5WEc1Y2JpQWdZMjl0Y0c5dVpXNTBWMmxzYkZWdWJXOTFiblFvS1NCN1hHNGdJQ0FnZEdocGN5NXlaVzF2ZG1WTWFYTjBaVzVsY2lncE8xeHVJQ0I5WEc1Y2JpQWdaMlYwVkc5dmJIUnBjRkJ2YzJsMGFXOXVJRDBnS0hzZ1kyeHBaVzUwV0RvZ2VGQnZjMmwwYVc5dUxDQmpiR2xsYm5SWk9pQjVVRzl6YVhScGIyNGdmU2tnUFQ0Z2UxeHVJQ0FnSUhSb2FYTXVjMlYwVTNSaGRHVW9lMXh1SUNBZ0lDQWdlRkJ2YzJsMGFXOXVMRnh1SUNBZ0lDQWdlVkJ2YzJsMGFXOXVMRnh1SUNBZ0lDQWdiVzkxYzJWTmIzWmxaRG9nZEhKMVpTeGNiaUFnSUNCOUtUdGNiaUFnZlR0Y2JseHVJQ0JoWkdSTWFYTjBaVzVsY2lBOUlDZ3BJRDArSUh0Y2JpQWdJQ0IzYVc1a2IzY3VZV1JrUlhabGJuUk1hWE4wWlc1bGNpZ25iVzkxYzJWdGIzWmxKeXdnZEdocGN5NW5aWFJVYjI5c2RHbHdVRzl6YVhScGIyNHBPMXh1SUNBZ0lIUm9hWE11YzJWMFUzUmhkR1VvZXlCc2FYTjBaVzVsY2tGamRHbDJaVG9nZEhKMVpTQjlLVHRjYmlBZ2ZUdGNibHh1SUNCeVpXMXZkbVZNYVhOMFpXNWxjaUE5SUNncElEMCtJSHRjYmlBZ0lDQjNhVzVrYjNjdWNtVnRiM1psUlhabGJuUk1hWE4wWlc1bGNpZ25iVzkxYzJWdGIzWmxKeXdnZEdocGN5NW5aWFJVYjI5c2RHbHdVRzl6YVhScGIyNHBPMXh1SUNBZ0lIUm9hWE11YzJWMFUzUmhkR1VvZXlCc2FYTjBaVzVsY2tGamRHbDJaVG9nWm1Gc2MyVWdmU2s3WEc0Z0lIMDdYRzVjYmlBZ2RYQmtZWFJsVEdsemRHVnVaWElnUFNBb0tTQTlQaUI3WEc0Z0lDQWdhV1lnS0NGMGFHbHpMbk4wWVhSbExteHBjM1JsYm1WeVFXTjBhWFpsSUNZbUlIUm9hWE11Y0hKdmNITXVkbWx6YVdKc1pTa2dlMXh1SUNBZ0lDQWdkR2hwY3k1aFpHUk1hWE4wWlc1bGNpZ3BPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHbG1JQ2gwYUdsekxuTjBZWFJsTG14cGMzUmxibVZ5UVdOMGFYWmxJQ1ltSUNGMGFHbHpMbkJ5YjNCekxuWnBjMmxpYkdVcElIdGNiaUFnSUNBZ0lIUm9hWE11Y21WdGIzWmxUR2x6ZEdWdVpYSW9LVHRjYmlBZ0lDQjlYRzRnSUgwN1hHNWNiaUFnY21WdVpHVnlLQ2tnZTF4dUlDQWdJSEpsZEhWeWJpQW9YRzRnSUNBZ0lDQThaR2wyWEc0Z0lDQWdJQ0FnSUdOc1lYTnpUbUZ0WlQxN2RHaHBjeTV3Y205d2N5NWpiR0Z6YzA1aGJXVjlYRzRnSUNBZ0lDQWdJSE4wZVd4bFBYdDdYRzRnSUNBZ0lDQWdJQ0FnWkdsemNHeGhlVG9nZEdocGN5NXdjbTl3Y3k1MmFYTnBZbXhsSUNZbUlIUm9hWE11YzNSaGRHVXViVzkxYzJWTmIzWmxaQ0EvSUNkaWJHOWpheWNnT2lBbmJtOXVaU2NzWEc0Z0lDQWdJQ0FnSUNBZ2NHOXphWFJwYjI0NklDZG1hWGhsWkNjc1hHNGdJQ0FnSUNBZ0lDQWdkRzl3T2lCMGFHbHpMbk4wWVhSbExubFFiM05wZEdsdmJpQXJJSFJvYVhNdWNISnZjSE11YjJabWMyVjBXU3hjYmlBZ0lDQWdJQ0FnSUNCc1pXWjBPaUIwYUdsekxuTjBZWFJsTG5oUWIzTnBkR2x2YmlBcklIUm9hWE11Y0hKdmNITXViMlptYzJWMFdDeGNiaUFnSUNBZ0lDQWdJQ0F1TGk1MGFHbHpMbkJ5YjNCekxuTjBlV3hsTEZ4dUlDQWdJQ0FnSUNCOWZWeHVJQ0FnSUNBZ1BseHVJQ0FnSUNBZ0lDQjdkR2hwY3k1d2NtOXdjeTVqYUdsc1pISmxibjFjYmlBZ0lDQWdJRHd2WkdsMlBseHVJQ0FnSUNrN1hHNGdJSDFjYm4xY2JseHVUVzkxYzJWVWIyOXNkR2x3TG5CeWIzQlVlWEJsY3lBOUlIdGNiaUFnZG1semFXSnNaVG9nVUhKdmNGUjVjR1Z6TG1KdmIyd3NYRzRnSUdOb2FXeGtjbVZ1T2lCUWNtOXdWSGx3WlhNdWJtOWtaUzVwYzFKbGNYVnBjbVZrTEZ4dUlDQnZabVp6WlhSWU9pQlFjbTl3Vkhsd1pYTXViblZ0WW1WeUxGeHVJQ0J2Wm1aelpYUlpPaUJRY205d1ZIbHdaWE11Ym5WdFltVnlMRnh1SUNCamJHRnpjMDVoYldVNklGQnliM0JVZVhCbGN5NXpkSEpwYm1jc1hHNGdJSE4wZVd4bE9pQlFjbTl3Vkhsd1pYTXViMkpxWldOMExDQXZMeUJsYzJ4cGJuUXRaR2x6WVdKc1pTMXNhVzVsSUhKbFlXTjBMMlp2Y21KcFpDMXdjbTl3TFhSNWNHVnpYRzU5TzF4dVhHNWxlSEJ2Y25RZ1pHVm1ZWFZzZENCTmIzVnpaVlJ2YjJ4MGFYQTdYRzRpWFgwPSIsImltcG9ydCB7XHJcbiAgQXBwQmFyLFxyXG4gIEljb25CdXR0b24sXHJcbiAgTGlzdEl0ZW0sXHJcbiAgTGlzdEl0ZW1JY29uLFxyXG4gIExpc3RJdGVtVGV4dCxcclxuICBUb29sYmFyLFxyXG59IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgeyBGYVJlZ01vbmV5QmlsbEFsdCB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xyXG5pbXBvcnQge1xyXG4gIEZpQ2hldnJvbkxlZnQsXHJcbiAgRmlDaGV2cm9uUmlnaHQsXHJcbiAgRmlEb2xsYXJTaWduLFxyXG4gIEZpRWRpdCxcclxuICBGaUdyaWQsXHJcbiAgRmlMaXN0LFxyXG4gIEZpTG9nT3V0LFxyXG4gIEZpTWVudSxcclxuICBGaVBhY2thZ2UsXHJcbiAgRmlTZWFyY2gsXHJcbiAgRmlTZXR0aW5ncyxcclxuICBGaVRvb2wsXHJcbiAgRmlVc2VyLFxyXG4gIEZpQ3JlZGl0Q2FyZCxcclxufSBmcm9tIFwicmVhY3QtaWNvbnMvZmlcIjtcclxuaW1wb3J0IHsgQWlPdXRsaW5lQmFyY29kZSB9IGZyb20gXCJyZWFjdC1pY29ucy9haVwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgY2xzeCBmcm9tIFwiY2xzeFwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzLCB1c2VUaGVtZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IERyYXdlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRHJhd2VyXCI7XHJcbmltcG9ydCBMaXN0IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaXN0XCI7XHJcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmVcIjtcclxuaW1wb3J0IERpdmlkZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpdmlkZXJcIjtcclxuaW1wb3J0IE1vdXNlVG9vbFRpcCBmcm9tIFwicmVhY3Qtc3RpY2t5LW1vdXNlLXRvb2x0aXBcIjtcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzLm1vZHVsZS5zY3NzXCI7XHJcblxyXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSBcIi4uLy4uL2NvbnRleHRzL2F1dGhcIjtcclxuY29uc3QgZHJhd2VyV2lkdGggPSAyNDA7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICB9LFxyXG4gIGFwcEJhcjoge1xyXG4gICAgekluZGV4OiB0aGVtZS56SW5kZXguZHJhd2VyICsgMSxcclxuICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShbXCJ3aWR0aFwiLCBcIm1hcmdpblwiXSwge1xyXG4gICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5zaGFycCxcclxuICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLmxlYXZpbmdTY3JlZW4sXHJcbiAgICB9KSxcclxuICB9LFxyXG4gIGFwcEJhclNoaWZ0OiB7XHJcbiAgICBtYXJnaW5MZWZ0OiBkcmF3ZXJXaWR0aCxcclxuICAgIHdpZHRoOiBgY2FsYygxMDAlIC0gJHtkcmF3ZXJXaWR0aH1weClgLFxyXG4gICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFtcIndpZHRoXCIsIFwibWFyZ2luXCJdLCB7XHJcbiAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uZW50ZXJpbmdTY3JlZW4sXHJcbiAgICB9KSxcclxuICB9LFxyXG4gIG1lbnVCdXR0b246IHtcclxuICAgIG1hcmdpblJpZ2h0OiAzNixcclxuICAgIFtcIkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweClcIl06IHtcclxuICAgICAgbWFyZ2luUmlnaHQ6IFwiMXJlbVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGhpZGU6IHtcclxuICAgIGRpc3BsYXk6IFwibm9uZVwiLFxyXG4gIH0sXHJcbiAgZHJhd2VyOiB7XHJcbiAgICB3aWR0aDogZHJhd2VyV2lkdGgsXHJcbiAgICBmbGV4U2hyaW5rOiAwLFxyXG4gICAgd2hpdGVTcGFjZTogXCJub3dyYXBcIixcclxuICAgIGJhY2tncm91bmQ6IFwiIzIzMzU0OFwiLFxyXG4gIH0sXHJcbiAgZHJhd2VyT3Blbjoge1xyXG4gICAgd2lkdGg6IGRyYXdlcldpZHRoLFxyXG4gICAgYmFja2dyb3VuZDogXCIjMjMzNTQ4XCIsXHJcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoXCJ3aWR0aFwiLCB7XHJcbiAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uZW50ZXJpbmdTY3JlZW4sXHJcbiAgICB9KSxcclxuICAgIHBhZGRpbmdUb3A6IFwiMWVtXCIsXHJcbiAgICBcIiY6Oi13ZWJraXQtc2Nyb2xsYmFyXCI6IHtcclxuICAgICAgd2lkdGg6IDQsXHJcbiAgICB9LFxyXG4gICAgXCImOjotd2Via2l0LXNjcm9sbGJhci10cmFja1wiOiB7XHJcbiAgICAgIGJveFNoYWRvdzogYGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpYCxcclxuICAgIH0sXHJcbiAgICBcIiY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iXCI6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjIxLCAxNTQsIDY2LCAwLjcpXCIsXHJcbiAgICAgIG91dGxpbmU6IGAxcHggc29saWQgc2xhdGVncmV5YCxcclxuICAgIH0sXHJcbiAgfSxcclxuICBkcmF3ZXJCYWNrZ3JvdW5kOiB7XHJcbiAgICBiYWNrZ3JvdW5kOiBcIiMyMzM1NDhcIixcclxuICB9LFxyXG4gIGRyYXdlckNsb3NlOiB7XHJcbiAgICBiYWNrZ3JvdW5kOiBcIiMyMzM1NDhcIixcclxuICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShcIndpZHRoXCIsIHtcclxuICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5sZWF2aW5nU2NyZWVuLFxyXG4gICAgfSksXHJcbiAgICBvdmVyZmxvd1g6IFwiaGlkZGVuXCIsXHJcbiAgICB3aWR0aDogdGhlbWUuc3BhY2luZyg3KSArIDEsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoXCJzbVwiKV06IHtcclxuICAgICAgd2lkdGg6IHRoZW1lLnNwYWNpbmcoOCkgKyAxLFxyXG4gICAgfSxcclxuICAgIHBhZGRpbmdUb3A6IFwiMWVtXCIsXHJcbiAgICBcIiY6Oi13ZWJraXQtc2Nyb2xsYmFyXCI6IHtcclxuICAgICAgd2lkdGg6IDQsXHJcbiAgICB9LFxyXG4gICAgXCImOjotd2Via2l0LXNjcm9sbGJhci10cmFja1wiOiB7XHJcbiAgICAgIGJveFNoYWRvdzogYGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpYCxcclxuICAgIH0sXHJcbiAgICBcIiY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iXCI6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjIxLCAxNTQsIDY2LCAwLjcpXCIsXHJcbiAgICAgIG91dGxpbmU6IGAxcHggc29saWQgc2xhdGVncmV5YCxcclxuICAgIH0sXHJcbiAgfSxcclxuICB0b29sYmFyOiB7XHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGhlaWdodDogXCI4NHB4XCIsXHJcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiZmxleC1lbmRcIixcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMCwgMSksXHJcbiAgICAvLyBuZWNlc3NhcnkgZm9yIGNvbnRlbnQgdG8gYmUgYmVsb3cgYXBwIGJhclxyXG4gICAgLi4udGhlbWUubWl4aW5zLnRvb2xiYXIsXHJcbiAgfSxcclxuICBjb250ZW50OiB7XHJcbiAgICBmbGV4R3JvdzogMSxcclxuICB9LFxyXG4gIGxpbms6IHtcclxuICAgIG1hcmdpbjogXCIwIDAgMCBhdXRvXCIsXHJcbiAgICBbXCJAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpXCJdOiB7XHJcbiAgICAgIHZpc2liaWxpdHk6IFwiaGlkZGVuXCIsXHJcbiAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgIGRpc3BsYXk6IFwibm9uZVwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGxvZ286IHtcclxuICAgIG1hcmdpbjogXCIwIDAgMCBhdXRvXCIsXHJcbiAgICB3aWR0aDogXCIyNTBweFwiLFxyXG4gICAgaGVpZ2h0OiBcImF1dG9cIixcclxuICB9LFxyXG4gIG1vYkxvZ286IHtcclxuICAgIG1hcmdpbjogXCIwIDAgMCBhdXRvXCIsXHJcbiAgICB3aWR0aDogXCIxNDBweFwiLFxyXG4gICAgaGVpZ2h0OiBcImF1dG9cIixcclxuICB9LFxyXG4gIHNoaWZ0VGV4dExlZnQ6IHtcclxuICAgIG1hcmdpbkxlZnQ6IFwiMHB4XCIsXHJcbiAgfSxcclxuICBzaGlmdFRleHRSaWdodDoge1xyXG4gICAgbWFyZ2luTGVmdDogZHJhd2VyV2lkdGgsXHJcbiAgfSxcclxufSkpO1xyXG5cclxuaW50ZXJmYWNlIEhlYWRlclByb3BzIHtcclxuICBvcGVuOiBib29sZWFuO1xyXG4gIGhhbmRsZURyYXdlck9wZW46ICgpID0+IHZvaWQ7XHJcbiAgaGFuZGxlRHJhd2VyQ2xvc2U6ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcih7XHJcbiAgb3BlbixcclxuICBoYW5kbGVEcmF3ZXJPcGVuLFxyXG4gIGhhbmRsZURyYXdlckNsb3NlLFxyXG59OiBIZWFkZXJQcm9wcykge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XHJcblxyXG4gIGNvbnN0IFt0b2dnbGVNb3VzZVRvb2x0aXAsIHNldFRvZ2dsZU1vdXNlVG9vbHRpcF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgY29uc3QgW3RpdGxlVG9vbHRpcCwgc2V0VGl0bGVUb29sdGlwXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XHJcbiAgY29uc3QgeyBsb2dvdXQsIHVzZXIsIGZpbGlhbFByaW5jaXBhbCB9ID0gdXNlQXV0aCgpO1xyXG5cclxuICBjb25zdCB3aW5kb3dTaXplID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgY29uc3QgbWF4TW9iU2l6ZSA9IDcwMDtcclxuXHJcbiAgY29uc3QgaGFuZGxlTW91c2VUb29nbGVUb29sdGlwID0gKHN0YXRlOiBib29sZWFuLCB0aXRsZTogc3RyaW5nKSA9PiB7XHJcbiAgICBpZiAoIW9wZW4pIHtcclxuICAgICAgc2V0VGl0bGVUb29sdGlwKHRpdGxlKTtcclxuICAgICAgc2V0VG9nZ2xlTW91c2VUb29sdGlwKHN0YXRlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPENzc0Jhc2VsaW5lIC8+XHJcbiAgICAgIDxBcHBCYXJcclxuICAgICAgICBwb3NpdGlvbj1cImZpeGVkXCJcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogXCIjMjMzNTQ4XCIsXHJcbiAgICAgICAgICBwYWRkaW5nOiBcIjAuNnJlbSAwLjZyZW1cIixcclxuICAgICAgICB9fVxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLmFwcEJhciwge1xyXG4gICAgICAgICAgW2NsYXNzZXMuYXBwQmFyU2hpZnRdOiBvcGVuLFxyXG4gICAgICAgIH0pfVxyXG4gICAgICA+XHJcbiAgICAgICAgPFRvb2xiYXJcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICAgIGVkZ2U9XCJzdGFydFwiXHJcbiAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJvcGVuIGRyYXdlclwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZURyYXdlck9wZW59XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLm1lbnVCdXR0b24sIHtcclxuICAgICAgICAgICAgICBbY2xhc3Nlcy5oaWRlXTogb3BlbixcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxGaU1lbnUgY29sb3I9XCIjREQ5QTQyXCIgc2l6ZT17MzB9IC8+XHJcbiAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICB7dXNlciAmJiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVySW5mb30+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJVc2VySW5mb30+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5zcGFuVXNlcn0+e3VzZXIuVVNVQVJJT308L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5zcGFuRmlsaWFsfT5cclxuICAgICAgICAgICAgICAgICAge2Ake2ZpbGlhbFByaW5jaXBhbC5DT0RFTVBSRVNBfSAtICR7ZmlsaWFsUHJpbmNpcGFsLk5PTUVSRUR9YH1cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8RmlMb2dPdXQgb25DbGljaz17bG9nb3V0fSBzaXplPXsyMH0gY29sb3I9XCIjZjRmNGY0XCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgPGEgaHJlZj1cIi9cIiBjbGFzc05hbWU9e2NsYXNzZXMubGlua30+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgd2luZG93U2l6ZSA+IG1heE1vYlNpemUgPyBjbGFzc2VzLmxvZ28gOiBjbGFzc2VzLm1vYkxvZ29cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy91dGlsaXRhcmlvcy1sb2dvLnBuZ1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICA8L0FwcEJhcj5cclxuICAgICAge3dpbmRvd1NpemUgPiBtYXhNb2JTaXplID8gKFxyXG4gICAgICAgIDxEcmF3ZXJcclxuICAgICAgICAgIHZhcmlhbnQ9XCJwZXJtYW5lbnRcIlxyXG4gICAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgICBwYXBlcjogY2xzeCh7XHJcbiAgICAgICAgICAgICAgW2NsYXNzZXMuZHJhd2VyT3Blbl06IG9wZW4sXHJcbiAgICAgICAgICAgICAgW2NsYXNzZXMuZHJhd2VyQ2xvc2VdOiAhb3BlbixcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRvb2xiYXJ9PlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVEcmF3ZXJDbG9zZX0+XHJcbiAgICAgICAgICAgICAge3RoZW1lLmRpcmVjdGlvbiA9PT0gXCJydGxcIiA/IChcclxuICAgICAgICAgICAgICAgIDxGaUNoZXZyb25SaWdodCBjb2xvcj1cIiNERDlBNDJcIiAvPlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8RmlDaGV2cm9uTGVmdCBjb2xvcj1cIiNERDlBNDJcIiAvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPExpc3QgY2xhc3NOYW1lPVwic2lkZUJhci11bFwiPlxyXG4gICAgICAgICAgICB7dXNlcj8ucGVybWlzc2lvbnMuY29uc3VsdGFyUHJvZHV0b3MgIT09IFwiU0VNX0FDRVNTT1wiICYmIChcclxuICAgICAgICAgICAgICA8TGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICBocmVmPVwiL2NvbnN1bHRhci1wcm9kdXRvXCJcclxuICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZU1vdXNlVG9vZ2xlVG9vbHRpcCh0cnVlLCBcIkNvbnN1bHRhciBQcm9kdXRvXCIpXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZpU2VhcmNoIHNpemU9ezI4fSBjb2xvcj1cIiNERDlBNDJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdoaXRlU3BhY2U6IFwibm93cmFwXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICBwcmltYXJ5PXtcIkNvbnN1bHRhciBQcm9kdXRvc1wifVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICB7dXNlcj8ucGVybWlzc2lvbnMucGFyYW1ldHJvc0dlcmFpcyAhPT0gXCJTRU1fQUNFU1NPXCIgJiYgKFxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvcGFyYW1ldHJvcy1nZXJhaXNcIj5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICA8RmlUb29sIHNpemU9ezI4fSBjb2xvcj1cIiNERDlBNDJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdoaXRlU3BhY2U6IFwibm93cmFwXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICBwcmltYXJ5PXtcIlBhcsOibWV0cm9zIEdlcmFpc1wifVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICA8TGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cIi9nZXJhci1jb2QtYmFycmFzXCI+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICA8QWlPdXRsaW5lQmFyY29kZSBzaXplPXsyOH0gY29sb3I9XCIjREQ5QTQyXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dFxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiIH19XHJcbiAgICAgICAgICAgICAgICAgIHByaW1hcnk9e1wiR2VyYXIgQ8OzZGlnbyBkZSBCYXJyYXNcIn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICA8RGl2aWRlciAvPlxyXG5cclxuICAgICAgICAgICAge3VzZXI/LnBlcm1pc3Npb25zLmNvbnRhc0FSZWNlYmVyICE9PSBcIlNFTV9BQ0VTU09cIiAmJiAoXHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9yZWNlYmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZhUmVnTW9uZXlCaWxsQWx0IHNpemU9ezI4fSBjb2xvcj1cIiNERDlBNDJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdoaXRlU3BhY2U6IFwibm93cmFwXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICBwcmltYXJ5PXtcIkNvbnRhcyBhIFJlY2ViZXJcIn1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAge3VzZXI/LnBlcm1pc3Npb25zLmFsdGVyYUFkbUNvbnZlbmlvICE9PSBcIlNFTV9BQ0VTU09cIiAmJiAoXHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9hbHRlcmEtYWRtLWNvbnZlbmlvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZpQ3JlZGl0Q2FyZCBzaXplPXsyOH0gY29sb3I9XCIjREQ5QTQyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHRcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgcHJpbWFyeT17XCJBbHRlcmFyIEFkbS4gQ29udsOqbmlvXCJ9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcblxyXG4gICAgICAgICAgICB7dXNlcj8ucGVybWlzc2lvbnMuZGlnaXRhY2FvSW52ZW50YXJpbyAhPT0gXCJTRU1fQUNFU1NPXCIgJiYgKFxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvZGlnaXRhY2FvLWludmVudGFyaW9cIj5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICA8RmlFZGl0IHNpemU9ezI4fSBjb2xvcj1cIiNERDlBNDJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdoaXRlU3BhY2U6IFwibm93cmFwXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICBwcmltYXJ5PXtcIkRpZ2l0YcOnw6NvIGRlIEludmVudMOhcmlvXCJ9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIHt1c2VyPy5wZXJtaXNzaW9ucy5jb25zdWx0YXJJbnZlbnRhcmlvcyAhPT0gXCJTRU1fQUNFU1NPXCIgJiYgKFxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvY29uc3VsdGFyLWludmVudGFyaW9zXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZpTGlzdCBzaXplPXsyOH0gY29sb3I9XCIjREQ5QTQyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHRcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgcHJpbWFyeT17XCJDb25zdWx0YXIgSW52ZW50w6FyaW9zXCJ9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIHt1c2VyPy5wZXJtaXNzaW9ucy5jb21wcmFzUmVxdWlzaXRhciAhPT0gXCJTRU1fQUNFU1NPXCIgJiZcclxuICAgICAgICAgICAgICB1c2VyPy5wZXJtaXNzaW9ucy5jb21wcmFzQ29uc3VsdGFyICE9PSBcIlNFTV9BQ0VTU09cIiAmJlxyXG4gICAgICAgICAgICAgIHVzZXI/LnBlcm1pc3Npb25zLmNvbXByYXNQYWluZWxEb0NvbXByYWRvciAhPT0gXCJTRU1fQUNFU1NPXCIgJiYgKFxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2NvbXByYXNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEZpRG9sbGFyU2lnbiBzaXplPXsyOH0gY29sb3I9XCIjREQ5QTQyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBwcmltYXJ5PXtcIkNvbXByYXNcIn1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICB7dXNlcj8ucGVybWlzc2lvbnMuZGVtYW5kYXJSZXBvc2ljYW8gIT09IFwiU0VNX0FDRVNTT1wiICYmIChcclxuICAgICAgICAgICAgICA8TGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2RlbWFuZGFyLXJlcG9zaWNhb1wiPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGaVBhY2thZ2Ugc2l6ZT17Mjh9IGNvbG9yPVwiI0REOUE0MlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2hpdGVTcGFjZTogXCJub3dyYXBcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHByaW1hcnk9e1wiRGVtYW5kYXIgUmVwb3Npw6fDo29cIn1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAge3VzZXI/LnBlcm1pc3Npb25zLnZpc3VhbGl6YXJSZXBvc2ljb2VzICE9PSBcIlNFTV9BQ0VTU09cIiAmJiAoXHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9jb25zdWx0YXItcmVwb3NpY29lc1wiPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGaUdyaWQgc2l6ZT17Mjh9IGNvbG9yPVwiI0REOUE0MlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2hpdGVTcGFjZTogXCJub3dyYXBcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHByaW1hcnk9e1wiVmlzdWFsaXphciBSZXBvc2nDp8O1ZXNcIn1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuXHJcbiAgICAgICAgICAgIHt1c2VyPy5wZXJtaXNzaW9ucy5jb25maWd1cmFjb2VzICE9PSBcIlNFTV9BQ0VTU09cIiAmJiAoXHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9jb25maWd1cmFjb2VzXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZpU2V0dGluZ3Mgc2l6ZT17Mjh9IGNvbG9yPVwiI0REOUE0MlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2hpdGVTcGFjZTogXCJub3dyYXBcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHByaW1hcnk9e1wiQ29uZmlndXJhw6fDtWVzXCJ9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIHt1c2VyPy5wZXJtaXNzaW9ucz8ucGVybWlzc29lcyAhPT0gXCJTRU1fQUNFU1NPXCIgJiYgKFxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvcGVybWlzc29lc1wiPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGaVVzZXIgc2l6ZT17Mjh9IGNvbG9yPVwiI0REOUE0MlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2hpdGVTcGFjZTogXCJub3dyYXBcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgIHByaW1hcnk9e1wiUGVybWlzc8O1ZXNcIn1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgPExpc3RJdGVtIHN0eWxlPXt7IGN1cnNvcjogXCJwb2ludGVyIFwiIH19IG9uQ2xpY2s9e2xvZ291dH0+XHJcbiAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICA8RmlMb2dPdXQgc2l6ZT17Mjh9IGNvbG9yPVwiI0REOUE0MlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHRcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2hpdGVTcGFjZTogXCJub3dyYXBcIiB9fVxyXG4gICAgICAgICAgICAgICAgICBwcmltYXJ5PXtcIlNhaXJcIn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgICAgPE1vdXNlVG9vbFRpcFxyXG4gICAgICAgICAgICBzdHlsZT17eyB6SW5kZXg6IDIxNDc0ODM2NDcgfX1cclxuICAgICAgICAgICAgdmlzaWJsZT17dG9nZ2xlTW91c2VUb29sdGlwfVxyXG4gICAgICAgICAgICBvZmZzZXRYPXsxNX1cclxuICAgICAgICAgICAgb2Zmc2V0WT17MTB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib2JzZXJ2YWNhby1jb21wcmFcIj5cclxuICAgICAgICAgICAgICA8c3Bhbj57dGl0bGVUb29sdGlwfTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L01vdXNlVG9vbFRpcD5cclxuICAgICAgICA8L0RyYXdlcj5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8RHJhd2VyXHJcbiAgICAgICAgICBjbGFzc2VzPXt7XHJcbiAgICAgICAgICAgIHBhcGVyOiBjbHN4KGNsYXNzZXMuZHJhd2VyQmFja2dyb3VuZCksXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgdmFyaWFudD1cInRlbXBvcmFyeVwiXHJcbiAgICAgICAgICBhbmNob3I9XCJ0b3BcIlxyXG4gICAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZURyYXdlckNsb3NlfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxMaXN0IGNsYXNzTmFtZT1cInNpZGVCYXItdWxcIj5cclxuICAgICAgICAgICAge3VzZXI/LnBlcm1pc3Npb25zLmNvbnN1bHRhclByb2R1dG9zICE9PSBcIlNFTV9BQ0VTU09cIiAmJiAoXHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9jb25zdWx0YXItcHJvZHV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGaVNlYXJjaCBzaXplPXszMH0gY29sb3I9XCIjREQ5QTQyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17XCJDb25zdWx0YXIgUHJvZHV0b3NcIn0gLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgPERpdmlkZXIgLz5cclxuXHJcbiAgICAgICAgICAgIHt1c2VyPy5wZXJtaXNzaW9ucy5kaWdpdGFjYW9JbnZlbnRhcmlvICE9PSBcIlNFTV9BQ0VTU09cIiAmJiAoXHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9kaWdpdGFjYW8taW52ZW50YXJpb1wiPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGaUVkaXQgc2l6ZT17MzB9IGNvbG9yPVwiI0REOUE0MlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9e1wiRGlnaXRhw6fDo28gZGUgSW52ZW50w6FyaW9cIn0gLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAge3VzZXI/LnBlcm1pc3Npb25zLmNvbXByYXNSZXF1aXNpdGFyICE9PSBcIlNFTV9BQ0VTU09cIiB8fFxyXG4gICAgICAgICAgICAgIHVzZXI/LnBlcm1pc3Npb25zLmNvbXByYXNDb25zdWx0YXIgIT09IFwiU0VNX0FDRVNTT1wiIHx8XHJcbiAgICAgICAgICAgICAgdXNlcj8ucGVybWlzc2lvbnMuY29tcHJhc1BhaW5lbERvQ29tcHJhZG9yICE9PSBcIlNFTV9BQ0VTU09cIiB8fCAoXHJcbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvY29tcHJhc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8RmlEb2xsYXJTaWduIHNpemU9ezMwfSBjb2xvcj1cIiNERDlBNDJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17XCJDb21wcmFzXCJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIHt1c2VyPy5wZXJtaXNzaW9ucy5kZW1hbmRhclJlcG9zaWNhbyAhPT0gXCJTRU1fQUNFU1NPXCIgJiYgKFxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvZGVtYW5kYXItcmVwb3NpY2FvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZpUGFja2FnZSBzaXplPXszMH0gY29sb3I9XCIjREQ5QTQyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT17XCJEZW1hbmRhciBSZXBvc2nDp8Ojb1wifSAvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDxEaXZpZGVyIC8+XHJcblxyXG4gICAgICAgICAgICA8TGlzdEl0ZW0gb25DbGljaz17bG9nb3V0fT5cclxuICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XHJcbiAgICAgICAgICAgICAgICAgIDxGaUxvZ091dCBzaXplPXszMH0gY29sb3I9XCIjREQ5QTQyXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgICAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PXtcIlNhaXJcIn0gLz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICA8L0xpc3Q+XHJcbiAgICAgICAgPC9EcmF3ZXI+XHJcbiAgICAgICl9XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=