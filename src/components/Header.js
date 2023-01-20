import style from "./styles/Header.module.css";

function Header() {
  const wave = (
    // <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    //   <path
    //     fill="#0b1c38"
    //     fill-opacity="1"
    //     d="M0,32L120,42.7C240,53,480,75,720,85.3C960,96,1200,96,1320,96L1440,96L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
    //   ></path>
    // </svg>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
      <path
        fill="#0b1c38"
        fill-opacity="1"
        d="M0,64L120,85.3C240,107,480,149,720,160C960,171,1200,149,1320,138.7L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
      ></path>
    </svg>
  );

  return (
    <>
      <div className={style.header_box}>
        <div className={style.txt_box}>
          <h1>Roni Diwan</h1>
          <h2>Full-Stack Software Developer</h2>
        </div>
      </div>
      {wave}
    </>
  );
}

export default Header;
