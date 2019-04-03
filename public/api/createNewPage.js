class CreateNewPage extends React.Component{
	constructor(props){
		super(props)
		if(this.props.user != null){
			if(this.props.user.admin != null){
				if(this.props.user.admin.valid != null){
					this.state ={valid: true}
				}else{this.state={valid: false}}
			}else{this.state={valid: false}}
		}else{this.state={valid: false}}
	}
	ValidSigned(){
		if(this.state.valid){
			return true;
		}else{
			return flase;
		}
	}
	ChangePage(){
		if(this.ValidSigned){
			window.location.href="/create-new-paper"
		}else{
			window.location.href="/error"
		}
	}

	render(){
		return(
			<div className="col-md-4">
				<button className="btn" onClick={this.ChangePage}><i></i></button>
			</div>
		)
	}

}
