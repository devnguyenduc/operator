class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {value:""};
    }
    handleSubmit()
    render(){
        return(
            <form onSubmit={this.handleSubmit}></form>
        )
    }
}