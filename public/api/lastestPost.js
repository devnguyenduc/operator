class LastestPost extends React.Component{
  constructor(props){
    super(props);
  }

  IntroducePost(){
    var a = "";
    for(var i=0;i < 30;i++){
      a += this.props.element.content[i];
    }
    a += "...";
    return a;
  }

  render(){
    return(
      <div className="card" style={stylesheet}>
        <img className="card-img-top" src={this.props.element.img.view}
         alt={this.props.element.img.alt} style={imgstyle} />
        <div className="card-img-overlay">
          <h5 className="card-title text-white text-center bg-info border border-info rounded">
            <strong>{this.props.element.title}</strong>
          </h5>
          <a href="/post" className="btn btn-primary">Read</a>
        </div>
      </div>
    );
  }
};

const stylesheet = {
  width: "200px",
  height: "200px",
  backgroundColor:"DarkViolet",
  background: "linear-gradient(to right,DarkViolet,Violet)",
  border: "solid 1px",
}
const imgstyle = {
  width: "198px",
  height: "198px"
}

const element2 = {
  img:{
    view:"/static/images/logo.png",
    alt:"Hello"
  } ,
  title: "sdfgsdfgsdfg",
  content: "sdfsdfgsdfgsfsdsadfasdfasdfasdfsadfsadffsf",
  times: 3,
}

ReactDOM.render(
  <LastestPost element={element2} />,
  document.getElementById("test_post")
);
