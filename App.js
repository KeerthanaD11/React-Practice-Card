import image from './Components/Assests/flowerImage.jpg'

function App() {
  return(
    <div className='Card'>
      <img className='card-image'src={image} alt='empty'></img>
      <h1 className='card-title'>Blossom</h1>
      <p className='card-detail'>The card of flower blossom.</p>
    </div>
  );
}
export default App;
