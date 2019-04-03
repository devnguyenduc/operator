class Menu extends React.Component{
  render(){
    return(
      <button
        className="btn btn-success"
        data-toggle="collapse"
        data-target={"#" + this.props.target.id}
      >
        {this.props.target.value}
      </button>
    )
  }
}
const hey = {
	id:"new",
	value:"Hello boy"
}
ReactDOM.render(
  <Menu target={hey} />,
  document.getElementById('root')
);
