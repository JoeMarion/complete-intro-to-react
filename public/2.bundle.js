webpackJsonp([2],{

/***/ 239:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var React = __webpack_require__(1);
	var ShowCard = __webpack_require__(240);
	var Header = __webpack_require__(241);
	var _React$PropTypes = React.PropTypes,
	    object = _React$PropTypes.object,
	    string = _React$PropTypes.string,
	    arrayOf = _React$PropTypes.arrayOf;

	var _require = __webpack_require__(219),
	    connector = _require.connector;

	var Search = React.createClass({
	  displayName: 'Search',

	  propTypes: {
	    shows: arrayOf(object),
	    searchTerm: string
	  },
	  render: function render() {
	    var _this = this;

	    return React.createElement(
	      'div',
	      { className: 'container' },
	      React.createElement(Header, { showSearch: true }),
	      React.createElement(
	        'div',
	        { className: 'shows' },
	        this.props.shows.filter(function (show) {
	          return (show.title + ' ' + show.description).toUpperCase().indexOf(_this.props.searchTerm.toUpperCase()) >= 0;
	        }).map(function (show) {
	          return React.createElement(ShowCard, _extends({}, show, { key: show.imdbID }));
	        })
	      )
	    );
	  }
	});

	module.exports = connector(Search);

/***/ },

/***/ 240:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);

	var _require = __webpack_require__(162),
	    Link = _require.Link;

	var ShowCard = function ShowCard(props) {
	  return React.createElement(
	    Link,
	    { to: '/details/' + props.imdbID },
	    React.createElement(
	      'div',
	      { className: 'show-card' },
	      React.createElement('img', { src: 'public/img/posters/' + props.poster, className: 'show-card-img' }),
	      React.createElement(
	        'div',
	        { className: 'show-card-text' },
	        React.createElement(
	          'h3',
	          { className: 'show-card-title' },
	          props.title
	        ),
	        React.createElement(
	          'h3',
	          { className: 'show-card-year' },
	          props.year
	        ),
	        React.createElement(
	          'h3',
	          { className: 'show-card-description' },
	          props.description
	        )
	      )
	    )
	  );
	};

	var string = React.PropTypes.string;


	ShowCard.propTypes = {
	  title: string.isRequired,
	  description: string.isRequired,
	  year: string.isRequired,
	  poster: string.isRequired,
	  imdbID: string.isRequired
	};

	module.exports = ShowCard;

/***/ },

/***/ 241:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);

	var _require = __webpack_require__(162),
	    Link = _require.Link;

	var _React$PropTypes = React.PropTypes,
	    func = _React$PropTypes.func,
	    bool = _React$PropTypes.bool,
	    string = _React$PropTypes.string;

	var _require2 = __webpack_require__(219),
	    connector = _require2.connector;

	var Header = React.createClass({
	  displayName: 'Header',

	  propTypes: {
	    setSearchTerm: func,
	    showSearch: bool,
	    searchTerm: string
	  },
	  handleSearchTermEvent: function handleSearchTermEvent(event) {
	    this.props.setSearchTerm(event.target.value);
	  },
	  render: function render() {
	    var utilSpace = void 0;
	    if (this.props.showSearch) {
	      utilSpace = React.createElement('input', { type: 'text', className: 'search-input', placeholder: 'search', value: this.props.searchTerm, onChange: this.handleSearchTermEvent });
	    } else {
	      utilSpace = React.createElement(
	        'h2',
	        { className: 'header-back' },
	        React.createElement(
	          Link,
	          { to: '/search' },
	          'Back'
	        )
	      );
	    }
	    return React.createElement(
	      'header',
	      { className: 'header' },
	      React.createElement(
	        'h1',
	        { className: 'brand' },
	        React.createElement(
	          Link,
	          { to: '/', className: 'brand-link' },
	          'svideo'
	        )
	      ),
	      utilSpace
	    );
	  }
	});

	module.exports = connector(Header);

/***/ }

});