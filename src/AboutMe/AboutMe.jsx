import "./AboutMe.css";
export default function AboutMe() {
  return (
    <div>
      <div className="body">
        <img
          className="img"
          src="https://i.imgur.com/Mhd1Yat.jpg"
          title="source: imgur.com"
        />
      </div>
      <div>
        <h1 className="name">Alexander Haines </h1>
      </div>
      <div className="abme">
        {" "}
        <h1>About Me</h1>
        <p>
          I am a highly motivated software engineer with a passion for
          technology and a drive to continuously learn and grow in my field. I
          recently graduated from the General Assembly software engineering
          bootcamp, where I honed my skills in full-stack web development and
          gained hands-on experience building and deploying a variety of
          projects. Throughout my studies, I have demonstrated a strong aptitude
          for coding, problem-solving, and working collaboratively with a team.
          I have a deep understanding of programming concepts, including
          object-oriented programming, databases, and web development
          frameworks, and I am proficient in a range of programming languages,
          including JavaScript, Python, and Ruby. With a positive attitude and a
          desire to make a difference in the world through my work, I am
          confident that I can make a valuable contribution to any organization.
          I look forward to the opportunity to bring my skills and passion to a
          new challenge and to continue growing as a software engineer.
        </p>
      </div>
    </div>
  );
}
