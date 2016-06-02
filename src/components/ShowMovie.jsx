const React = require('react');

const ShowMovie  = React.createClass({
    render: function() {
        return (
            <div>
              <h1>imdbId: {this.props.params.imdbId}</h1>
            </div>
        );
    }
});

module.exports = ShowMovie;