'use strict';

const formStyle = {
  width: "40rem",
};

class PageEditor extends React.Component{
  constructor(props){
    super(props);
  }

  // This Function to create a script element to render
  componentDidMount() {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = `CKEDITOR.replace(${this.props.id})`;
    this.instance.appendChild(script);
  }

  // We can use placeholder and defaultValue to catch Error.
  render(){
    return(
      <form style={formStyle}>
        <textarea name={this.props.name} id={this.props.id}
          placeholder="Search..."
        >

        </textarea>
        <div ref={element => (this.instance = element)} />
      </form>
    );
  }
}


ReactDOM.render(
  <PageEditor name="editor" id="editor" />,
  document.getElementById('test_edit')
);
