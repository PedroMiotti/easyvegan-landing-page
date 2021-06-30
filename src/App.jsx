import Navbar from './components/Navbar';
import Book from "./components/Book";

import frontPageWave from './assets/img/frontPageWave.svg';
import frontPageBlob from './assets/img/blob.svg';



import './app.css';
import DownloadContainer from "./components/DownloadContainer";

const App = () => {
    return (
        <div className="easyVegan-container">
            <Navbar/>
            <div className="easyVegan-body">
                <div className="easyVegan-body-section1">
                    <div className="easyVegan-body-info">
                        <h1>Garanta já o seu E-Book da
                            larica vegana</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>

                    <DownloadContainer />
                </div>

                <Book/>

            </div>
            {/*<img className="easyVegan-blob" src={frontPageBlob} alt="front page wave"/>*/}
            <img className="easyVegan-wave" src={frontPageWave} alt="front page wave"/>

        </div>
    );
}

export default App;
