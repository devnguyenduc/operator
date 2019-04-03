const styleCate = {
	width: "226px"
}

class Category extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div className="list-group mt-3" style={styleCate}>
				<button className="list-group-item list-group-item-action list-group-item-info" data-toggle="collapse" data-target={"#" + this.props.element.home}>
					Home
				</button>
				<button className="list-group-item list-group-item-action list-group-item-info" data-toggle="collapse" data-target={"#" + this.props.element.post}>
					Your Post
				</button>
				<button className="list-group-item list-group-item-action list-group-item-info" data-toggle="collapse" data-target={"#" + this.props.element.statistic}>
					Statistic
				</button>
				<button className="list-group-item list-group-item-action list-group-item-info" data-toggle="collapse" data-target={"#" + this.props.element.settings}>
					List Friends
				</button>
				<button className="list-group-item list-group-item-action list-group-item-info" data-toggle="collapse" data-target={"#" + this.props.element.settings}>
					Your Media
				</button>
				<button className="list-group-item list-group-item-action list-group-item-info" data-toggle="collapse" data-target={"#" + this.props.element.settings}>
					Setting
				</button>
			</div>
		);
	}

}
const zxc = {
	home: "home",
	post: "post",
	statistic: "statistic",
	setting: "setting"
}
ReactDOM.render(
	<Category element={zxc}/>,
	document.getElementById('hello_personal')
);
