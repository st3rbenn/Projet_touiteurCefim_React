import {Header} from './Layout/Header/Header';
import {HeroPage} from "./Section/Hero_Section/Hero";

function App() {
    return (
        <>
            <header className="headerColor position-sticky top-0 z-index">
                <Header/>
            </header>
            <main id="main" className="position-relative sectionColor">
                <HeroPage/>
            </main>
        </>
    );
}

export default App;
