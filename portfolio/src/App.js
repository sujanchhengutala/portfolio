import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Intro from './Components/intro/Intro';
import Services from './Components/Services/Services';
import Experience from './Components/Experience/Experience';

function App() {
  return (
    <div className="App">
<Navbar />
<Intro />
<Services />
<Experience />
</div>
  );
}

export default App;
