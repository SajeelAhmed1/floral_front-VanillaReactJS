
import './App.css';
import Header from './components/header';
import Navtwo from './components/navtwo';
import Content from './components/content/content';
import Content1 from './components/content/content1';
import Content2 from './components/content/content2';
import Content3 from './components/content/content3';

import Content4 from './components/content/content4';
// import Footer from "./components/footer";
import Content5 from './components/content/content5';
import Content6 from './components/content/content6';
import Footer from './components/content/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Navtwo />
      <section>
      <Content />
      </section>
      <section>
      <Content1 />
      </section>
      <section>
      <Content2 />
      </section>
      
      <section>
      <Content3 />
      </section>
      <section>
      <Content4 />
      </section>

      <section>
      <Content5 />
      </section>
      <section>
      <Content6/>
      </section>
      
      <section>
        <Footer/>
      </section>
      
    </div>
  );
}

export default App;
