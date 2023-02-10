
import './App.css';
import Bill from './components/Bill';
import Logo from './components/Logo';
import SelectTip from './components/SelectTip';



function App() {

    const colors = {
        strongCyan:'#26bfab',
        veryDarkCyan: '#00494d',
        darkGrayishCyan:'#5e7a7d',
        grayishCyan: '#7f9c9f',
        lightGrayishCyan:'#c5e4e7',
        veryLightGrayishCyan:  '#f4fafa',
        white:'#ffffff',
    }
    

  return (
    <div className="App">
        <Logo/>
        <Bill color={colors}/>
        <SelectTip />
    </div>
    
  );
}
<script src="https://kit.fontawesome.com/418b2b2652.js" crossorigin="anonymous"></script>
export default App;
