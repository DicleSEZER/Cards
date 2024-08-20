import 'bulma/css/bulma.css'
import './App.css';
import  Course  from './Course';
import Angular from './images/angular.jpeg'
import Bootstrap from './images/bootstrap.png'
import Csharp from './images/csharp.jpg'
import KompleWeb from './images/web.png'

function App() {
  return (
    <div className="App">
<section className="hero is-link">
  <div className="hero-body">
    <p className="title">Kurslarım</p>
  
  </div>
</section>


  <div className="container">
    <section className="section">
    <div className="columns">
     <div className="column">
     <Course 
   image={Angular}
   title="Angular"
    description="selam naber  lorem ekleyemedim bununla idare edicez ama çözücem çöz yani ayıp"/>
     </div>
     
     <div className="column">
     <Course
   image={Bootstrap}
   title="Bootstrap 5" description="selam naber  lorem ekleyemedim bununla idare edicez ama çözücem çöz yani ayıp"/>
     </div>

     <div className="column">
     <Course 
   image={Csharp}
   title="Komple Web" description="selam naber  lorem ekleyemedim bununla idare edicez ama çözücem çöz yani ayıp"/>
     </div>

     <div className="column">
     <Course 
   image={KompleWeb}
   title="Frontend" description="selam naber  lorem ekleyemedim bununla idare edicez ama çözücem çöz yani ayıp"/>
     </div>
    </div>
    </section>
    
  </div>
   
  
   
    </div>
  );
}


export default App;
