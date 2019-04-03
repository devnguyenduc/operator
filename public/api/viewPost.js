class ViewPost extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const script = document.createElement("script");

        script.src = "./public/javascripts/mde_for_view.js";
        script.async = true;

        document.body.appendChild(script);
    }
    render() {
        return (
            <div>
                <textarea id="mde_post_view"></textarea>
            </div>
        );
    }
}

ReactDOM.render(
    <ViewPost />,
    document.getElementById("post_view")
)