import VideoHome from '../../assets/home.mp4'
import './Home.scss';
const HomeComponent = () => {
  return (
    <div className='home'>
      <video autoPlay muted loop>
        <source src={VideoHome} type="video/mp4" />
      </video>
    </div>
  )
}
export default HomeComponent;

