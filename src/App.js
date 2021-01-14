import logo from './logo.svg';
import './App.css';
import Title from './Title';
import LinkToLearnReact from './LinkToLearnReact';
import ChangeLanguage from './ChangeLanguage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ChangeLanguage></ChangeLanguage>
        <Title></Title>
        <LinkToLearnReact></LinkToLearnReact>
      </header>
    </div>
  );
}

export default App;
