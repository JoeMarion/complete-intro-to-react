var div = React.DOM.div
var h1 = React.DOM.h1

var MyTitle = React.createClass({
  render () {
    return (
      div(null,
        h1({style: {color: this.props.color}}, this.props.title)
      )
    )
  }
})

var MyTitleFact = React.createFactory(MyTitle)
var ec = React.createElement

var MyFirstComponent = (
  div(null,
    React.createElement(MyTitle, {title: 'Props are great', color: 'rebeccapurple'}),
    ec(MyTitle, {title: 'Use props everywhere!', color: 'mediumaquamarine'}),
    MyTitleFact({title: 'Props are the best!', color: 'papayawhip'})
  )
)

ReactDOM.render(MyFirstComponent, document.getElementById('app'))
