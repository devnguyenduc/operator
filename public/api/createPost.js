class CreatePost extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const script = document.createElement("script");

        script.src = "./public/javascripts/mde_for_modal.js";
        script.async = true;

        document.body.appendChild(script);
    }
    render() {
        return (
            <div>
                <button type="button" class="btn btn-primary" id={this.props.open_modal}
                    data-toggle="modal" data-target={"#" + this.props.obj.target}>
                    Launch
                </button>

                <div class="modal fade" id={this.props.obj.target} tabindex="-1" role="dialog"
                 aria-labelledby="modelTitleId" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">{this.props.obj.title}</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <form class="modal-body" action={this.props.obj.url_send} method="POST">
                                <textarea id={this.props.obj.textarea_id}></textarea>
                                <button type="submit" class="btn btn-primary d-none" 
                                    id={this.props.obj.form_submit}>
                                    Submit
                                </button>
                            </form>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">
                                    Close
                                </button>
                                {/* <button type="button" class="btn btn-primary" onclick={this._buttonSendPostToServer()}>Save</button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const operater_object = {
    "title": "Hello World",
    "open_modal": "id_open_modal_hello_world",
    "target": "id_body_modal_hello_world",
    "url_send": "id_url_send_modal_hello_world",
    "textarea_id": "id_textarea_id_modal_hello_world",
    "form_submit": "id_form_submit_modal_hello_world"
}

ReactDOM.render(
    <CreatePost obj={operater_object} />,
    document.getElementById('test_create_post')
)