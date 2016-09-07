var React = require('react');

var WeatherMessage = React.createClass({

  render: function(){

  }
});

var WeatherMessage = ({temp, location}) => {
  return (
    <div>
      <h3>It's it {temp} in {location}.</h3>
    </div>
  );
}

module.exports = WeatherMessage;
