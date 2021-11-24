import './App.css';
import Titulo from './component/Titulo';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormVet from './component/FormVet';

function App() {
  return (
    <div className='container'>
      <Titulo></Titulo>
      <section>
        <FormVet></FormVet>
      </section>
    </div>
  );
}

export default App;
