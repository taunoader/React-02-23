import { Link, Route, Routes } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
        <img className="main-picture" src="https://storage.googleapis.com/website-zkhiphani/uploads/2020/04/a1f14c34-a-agency-2.jpg" alt="" />
        <div className="rectangle"></div>
        <p>Hello I am programming professional, check that out.</p>

        <div className="navigation-pictures">
          <Link className='main-link' to='work'>
            <img src="https://storage.googleapis.com/website-zkhiphani/uploads/2020/04/fc3a5d12-a-agency-3.jpg" alt="" />
            <p>Toodete lehele</p>
          </Link>
          <Link className='main-link' to='hobbies'>
            <img src="https://www.koeratoit.ee/media/wysiwyg/6BD96F36-C806-4BA5-ADF3-2B43D720A741_002_.jpg" alt="" />
            <p>Hobide lehele</p>
          </Link>
          <Link className='main-link' to='courses'>
            <img src="https://f12.pmo.ee/rFwmMAKx_O07jWo459hoYERG3qQ=/1536x0/filters:focal(0x185:945x637)/nginx/o/2019/01/20/11728795t1h4a52.jpg" alt="" />
            <p>Kursuste lehele</p>
          </Link>
        </div>

        <iframe width="400" height="250" src="https://www.youtube.com/embed/UTgSnM3mA-4" title="YouTube video player" frameborder="0" allow="; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <Routes>
          <Route path='work' element={ <div>Work</div> } />
          <Route path='hobbies' element={ <div>Hobbies</div> } />
          <Route path='courses' element={ <div>Courses</div> } />
        </Routes>

        <a className='facebook-button' href='https://www.facebook.com/jee'>
          <img src='/facebook.png' alt='' />
          <span>Facebook</span>
        </a>
    </div>
  );
}
export default App;
