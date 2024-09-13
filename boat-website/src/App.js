import AllRoutes from './AllRoutes/AllRoutes';
import './App.css';
import './MediaQuery/mediaquery.css'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App min-h-screen flex flex-col">
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  );
}
export default App;