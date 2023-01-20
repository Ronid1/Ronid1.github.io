function Social() {
  const linkedin = "https://linkedin.com/in/roni-diwan";
  const github = "https://github.com/Ronid1";
  const email = "ronidiwan@gmail.com";

  return (
    <div>
      <a href={linkedin} class="social-btn fa fa-linkedin-square"></a>
      <a href={github} class="social-btn fa fa-github"></a>
      <a href={`mailto: ${email}`} class="social-btn fa fa-envelope-open"></a>
    </div>
  );
}

export default Social;
