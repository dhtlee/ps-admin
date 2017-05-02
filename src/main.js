$ = jQuery = require('jquery');
var React = require('react');
var Home = require('./components/homePage');
var About = require('./components/about/aboutPage');
var Authors = require('./components/authors/authorPage');
var Header = require('./components/common/header');
var MOUNT_ELEMENT = document.getElementById('app');

(function(win) {
  "use strict";
  var App = React.createClass({
    render: function() {
      var Child;
        switch(this.props.route) {
          case 'about': Child = About; break;
          case 'authors': Child = Authors; break;
          default: Child = Home;
        }
        return (
          <div>
            <Header/>
            <Child/>
          </div>
        );
    }
  });

  function render() {
    var route = window.location.hash.substr(1);
    React.render(<App route={route} />, MOUNT_ELEMENT);
  }

  win.addEventListener('hashchange', render);
  render();
})(window);
