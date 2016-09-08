var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About!</h1>
      <p>This is a weather application buil on React. I have build this for complete React Web App developer course.</p>
      <p>Here are some of the tools I used:</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This was the Javascript framework used.
        </li>
        <li>
          <a href="https://openweathermap.org">Open weather map</a> - I used open weather map to search for weather data by city name.
        </li>
      </ul>
    </div>
  )
};

module.exports = About;
