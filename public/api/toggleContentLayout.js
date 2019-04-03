'use strict';

const toggleLayoutStyle = {
  fontSize: "14px",
  cursor:"pointer",
  transitionDuration: "2s",
  backgroundColor:"CornflowerBlue",
  background:"linear-gradient(to right,CornflowerBlue,Cyan)",
};

class ToggleContentLayout extends React.Component{
  constructor(props){
    super(props);
  }
  render(){
      return(
        <div className="collapse" id={this.props.element.targeted_id}>
          <button type="button" className="card" style={toggleLayoutStyle}
           data-toggle="modal" data-target={"#" + this.props.element.target}>
            <div className="card-body text-center">
              <strong className="card-text text-white">{this.props.element.title}</strong>
            </div>
          </button>

          <div className="modal fade" id={this.props.element.target}>
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">{this.props.element.content.title}</h4>
                </div>

                <div className="modal-body">
                  {this.props.element.content.body}
                </div>

                <div className="modal-footer">
                  <button type="button" className="btn btn-success" data-dismiss="modal">Previous</button>
               	  <button type="button" className="btn btn-success" data-dismiss="modal">Next</button>
                  <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                </div>

              </div>
            </div>
          </div>
        </div>
      );

  }
};

const el = {
  targeted_id:"new",
  target: "hellox",
  title: "Chúng ta không thuộc về nhau",
  content:{
  	title:"hello",
  	body:"hello",
  }

};


ReactDOM.render(
  <ToggleContentLayout element={el} />,
  document.getElementById('test_toggle')
);
