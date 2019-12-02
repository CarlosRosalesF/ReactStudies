console.log("App.js is running")

// JSX - JavaScript XML
const page = {
    title: "Title",
    subtitle: "Subtitle",
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault()

    const option = e.target.elements.option.value
    
    if (option) {
        page.options.push(option)
        e.target.elements.option.value = ""
        renderApp()
    }
}

const onRemoveAll = () => {

    page.options = []
    renderApp()
}

const onMakeDecision = () => {
    const randomNum = Math.floor( Math.random() * page.options.length)
    const option = page.options[randomNum]
    alert(option)
}

const appRoot = document.getElementById("app")

const renderApp = () => {

    const template = (
        <div>
            <h1>{page.title}</h1>
            { page.subtitle && <p>{page.subtitle}</p>}
            <p>{page.options.length > 0 ? "Here are your options": "No options"}</p>
            <button disabled={page.options.length === 0} onClick={onMakeDecision}>What Should I Do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                {
                    page.options.map((option) => <li key={option}>{option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    )

    ReactDOM.render(template, appRoot)
}

renderApp()