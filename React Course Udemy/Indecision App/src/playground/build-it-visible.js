const app = {
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