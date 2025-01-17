/*
<div>
    <p></p>
    <div>
        <h1>kljdkjw</h1>
        <h2>kdjfnkj</h2>
    </div>
</div>
*/


const heading = React.createElement("div",{
    id:"div-1"
},[React.createElement("p",{
    id:"p-1"
},"i am p tag"),React.createElement("div",{
    id:"div-1.2"
},[React.createElement("h1",{
    id:"h-1"
},"i am h1 tag"),React.createElement("h2",{
    id:"h-2"
},"i am h2 tag")])]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

