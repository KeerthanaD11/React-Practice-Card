import image from './Components/Assests/flowerImage.jpg'

function App() {
  /*return (
    <><div className="App">
      <h1>Welcome Home!!</h1>
      <h1>My Website</h1>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>Js</li>
        <li>React Js</li>
      </ul>
    </div>
    </>
  );*/

  return(
    <div className='Card'>
      <img className='card-image'src={image} alt='empty'></img>
      <h1 className='card-title'>Blossom</h1>
      <p className='card-detail'>The card of flower blossom.</p>
    </div>
  );
}
export default App;