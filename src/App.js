import './App.css';
import Header from './Components/Header/Header';
import HeaderSection from './Components/Header/HeaderSection/HeaderSection';
import OverLay from './Components/UI/Overlay/Overlay';
import TopBar from "./Components/Header/TopBar/TopBar";
import NavBar from './Components/UI/NavBar/NavBar';
import Main from './Components/Main/Main';
import NavItemsMobile from './Components/UI/NavBar/NavItems/NavItemsMobile/NavItemsMobile';
import { useState, Component } from 'react';
import { useSpring, animated } from 'react-spring';
class App extends Component {
  // const [MobileNavStatus, setMobileNavStatus] = useState(false)
  state = {
    MobileNavStatus: false
  }

  ShowMobileNav = () => {
    
      this.setState({
        MobileNavStatus : true
      }
      )
      // console.log(this.state.MobileNavStatus)
  }

  RemoveMobileNav = () => {
      this.setState({
        MobileNavStatus : false
      })
  }

  



  


  render() {
  return (
    <div className="App">
     
      <Header />
      <OverLay height = "70vh" thickness = "0.4" position = 'absolute'>
        <div className = "Top-Group">
     <TopBar />
     <NavBar ShowMobileNav = {this.ShowMobileNav}/>
     </div>

     <div className = "Top-Second-Group">
       
     <HeaderSection />
     </div>
        </OverLay>
        {/* <Transition 
        native
        item={this.state.MobileNavStatus}
        from={{ opacity: 0}}
        to={{ opacity: 1}}
        leave={{ opacity: 0}}>
      {show => show && (props => (
        <animate.div style={props}>
          <NavItemsMobile />
          </animate.div>
      ))}
      </Transition> */}
      {this.state.MobileNavStatus?<NavItemsMobile RemoveMobileNav = {this.RemoveMobileNav} />:null}
      
      
      <Main />
    </div>
  )
      };
}
export default App;