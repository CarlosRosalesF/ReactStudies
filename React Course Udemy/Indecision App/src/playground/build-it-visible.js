class VisibilityToogle extends React.Component {
    constructor(props) {
        super(props)
        this.handleToogleVisibility = this.handleToogleVisibility.bind(this)
        this.state = {
            visibility: false
        }
    }
    handleToogleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Visibility App</h1>
                <button onClick={this.handleToogleVisibility}>
                    {this.state.visibility ? "Hide details" : "Show details"}
                </button>
                {this.state.visibility &&<p>Some random text</p>}
            </div>           
        )
    }
}

ReactDOM.render(<VisibilityToogle />, document.getElementById("app"))

/* const app = {
    title: "Visibility App",
    showDetails: false,
    details: "Some random text"
}

const showDetails = () => {
    app.showDetails = !app.showDetails
    render()
}


const appRoot = document.getElementById("app")

const render = () =>{
    const template = (
        <div>
            <h1>{app.title}</h1>
            <button onClick={showDetails}>
                {app.showDetails ? "Hide details" : "Show details"}
            </button>
            {app.showDetails &&<p>{app.details}</p>}
        </div>
    )

    ReactDOM.render(template, appRoot)
}

render()

*/