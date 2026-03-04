import "./App.css";

function Welcome() {
  return <h1>Criminally Underrated Bands</h1>;
}

function BandList() {
  const bandNames = [
    {name: 'Dire Straits', members: 'Mark, David, John, Pick', formed: 1977},
    {name: 'R.E.M', members: "Micheal, Peter, Mike, Bill", formed: 1980},
    {name: "Collective Soul", members: "Ed, Dean, David, Ross, Shane", formed: 1992}
  ];

  return (
    <>
      <h2>{bandNames[0].name}</h2>
      <h2>{bandNames[1].name}</h2>
      <h2>{bandNames[2].name}</h2>
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
