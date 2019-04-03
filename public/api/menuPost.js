class MenuPost extends React.Component{
	constructor(props){super(props)}

	render(){
		return(
			<ul className="list-group">
				<li className="list-group-item">
					<button className="btn btn-info"
					 data-toggle="collapse" data-target={"#" + this.props.element.id_target}>
					 	{this.props.element.menu}
					</button>
					<div id={this.props.element.id_target} className="collapse">
						<Menu target={this.props.element.children_target} />
					</div>
				</li>
				<li className="list-group-item">
					<button className="btn btn-info"
					data-toggle="collapse" data-target="#vinahouse">
						Nhạc sàn 2017
					</button>
					<div id="vinahouse" className="collapse">
						<button className="btn btn-success">VinaHouse</button>
					</div>
				</li>
			</ul>
		);
	}
}

const elementvalue = {
	menu:"Nhạc hot 2018",
	id_post: "",
	id_target: "hello",
	children_target:{
		id: "new",
		value:"1. Sơn Tùng MTP",
	}
}

ReactDOM.render(
	<MenuPost element={elementvalue}/>,
	document.getElementById("test_list")
);
