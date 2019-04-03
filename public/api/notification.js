class Notifications extends React.Component{
  constructor(props){
    super(props);
  }
  listNotifications(){
    var data = {}
    var xml = new XMLHtppRequest();

    return "<a href='#'>Actionsdsadfasdfsdfsdfsdgsdfgsdfgdfg</a><br/>";
  }

  componentDidMount(){
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = `$(document).ready(function(){
      $('[data-toggle="popover"]').popover({html:true});
    });`;
    this.instance.appendChild(script);
  }
  render(){
    return(
      <div>
        <a href={this.props.element.link} data-toggle="popover" data-html="true"
          data-placement="bottom" data-content={listNotifications()}>
          <i class="fa fa-bell-o"></i>
        </a>
        <div ref={el => (this.instance = el )} />
      </div>
    );
  }
}
