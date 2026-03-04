import "./App.css";

const bandNames = [
    { name: "Dire Straits", members: "Mark, David, John, Pick", formed: 1977 },
    { name: "R.E.M", members: "Micheal, Peter, Mike, Bill", formed: 1980 },
    {
      name: "Collective Soul",
      members: "Ed, Dean, David, Ross, Shane",
      formed: 1992,
    },
  ];

function Welcome() {
  return <h1>Criminally Underrated Bands</h1>;
}

function Band({name, members, formed}: {name: string; members: string; formed: number}){
  return (
    <>
      <h2>{name} </h2>
      <h3>Original Members: {members}</h3>
      <h3>Formed: {formed}</h3>
    </>
  );
}

function BandList() {
  

  return (
    <>
      <Band/>
    </>
  );
}

function App() {
  return (
    <>
      <Welcome />
      <BandList />
    </>
  );
}

export default App;
