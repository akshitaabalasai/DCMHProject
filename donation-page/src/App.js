import DonationForm from './components/DonationForm';
import HelpUs from './components/HelpUs';
import classes from './App.module.css';
import myImage from '../src/img.jpeg'

function App() {
  return (
    <main className={classes.App}>
      <HelpUs />
      <DonationForm />
      <div>
      <img src={myImage} alt="Description" width="100" height="100" className="my-custom-class" />
    </div>
    </main>
  );
}

export default App;