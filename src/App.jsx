import ifunanyaImage from '/Ifunanya.png'
import './App.css'

function App() {

  return (
    <>
      <div>
          <img src={ifunanyaImage} className="homeImage" alt="Vite logo" />
      </div>
      <h1>Ifunanya here</h1>
      <div className="card">
        <p className='welcomeMessage'>
          Welcome to my portfolio
        </p>
      </div>
      <p className="constructionNotice">
        Under construction, check back in a few...
      </p>
    </>
  )
}

export default App
