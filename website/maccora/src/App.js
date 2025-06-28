// import headshot from './images/professionalHeadshot.jpeg';
import backgroundImage from './images/homepageBanner.png';
import './App.css';

function App() {
  return (
    <div className='Wrapper'>
      <h1 className="floatingHeader">Hi, I'm James — I have a passion for using algorithms tackle complex societal issues</h1>
    <div className="Background" 
    style={{ backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    backgroundPosition: "center",
    overflow: "hidden",
    width: "100vw" ,
    height: "100vh" ,
    backgroundAttachment: "fixed"   }}>
  </div>
  <div className="resumeDownloadButtonWrapper">
  <a
    href="/resume/James_Maccora_Resume.docx"
    download="resumeJamesMaccora"
    className="resumeDownloadButton"
  >
   Resume
  </a>
  </div>
  <div className="githubNavigationWrapper">
  <a
    href="https://github.com/maccora"
    className="githubNavigation"
  >
    GitHub
  </a>
</div>
<div className="linkedinNavigationWrapper">
  <a
    href="https://www.linkedin.com/in/james-maccora-2a2427179/"
    className="linkedinNavigation"
  >
    LinkedIn
  </a>
</div>

</div>

  );
}

export default App;
