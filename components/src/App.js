import './App.css';
import Header from './com/Header';
import Footer from './com/Footer';
import List from './com/List';
import ListItem from './com/ListItem';

const headerText = "I am the header";
const headerItems = ["Header item one", "Header item two", "Header item three"];
const footerText = "I am the footer";
const footerItems = ["Footer item one", "Footer item two", "Footer item three"];

function App() {
  return (
    <div className="App">
      <Header text={headerText} /> 
      <List item={headerItems}/>
      <Footer text={footerText} />
      <ListItem item={footerItems}/>
    </div>
  );
}

export default App;
