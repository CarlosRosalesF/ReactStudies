console.log("App.js is running")

// JSX - JavaScript XML
const page = {
    title: "Title",
    subtitle: "Subtitle",
    options: ["one", "two"]
}

const template = (
    <div>
        <h1>{page.title}</h1>
        { page.subtitle && <p>{page.subtitle}</p>}
        <p>{page.options.length > 0 ? "Here are your options": "No options"}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
)
function getLocation(location) {
    if(location)
    {
        return <p>{location}</p>
    }
}
const user = {
    age: 25
}
const templateTwo = (
    <div>
        <h1>{user.name ? user.name : "Anonymous"}</h1>
        { user.age >= 18 && <p>age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
)

const appRoot = document.getElementById("app")

ReactDOM.render(template, appRoot)