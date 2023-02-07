import "./MyProjects.css";
export default function MyProjects() {
  return (
    <div className="bdy">
      <h1 className="project">Projects</h1>
      <div className="cards">
        <div className="card" style={{ width: "18rem" }}>
          <img
            // className="c4"
            src="https://i.imgur.com/AWAxMoE.png"
            title="source: imgur.com"
          />
          <div className="card-body">
            <h5 className="card-title">Connect Four</h5>
            <p className="card-text">
              Established Horizontal, Vertical, and Diagonal functionality to
              process a win in the game by using both the DOM and Javascript
              logic with HTML to place pieces in a 6x7 grid Programmed Connect
              Four logic applied through buttons added to UI to play the game,
              with an additional reset option to start a fresh game with a fresh
              board
            </p>

            <button>
              <a href="https://ahaines10.github.io/connect-four/">Try it out</a>
            </button>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            className="vt1"
            src="https://i.imgur.com/IjCGOyH.jpg"
            title="source: imgur.com"
          />
          <h5 className="card-title">Vacation Tracker</h5>
          <div className="card-body">
            <p className="card-text">
              Utilized a MERN stack (MongoDB, Express, React.js, Node.js) to
              build a full stack application in a week with full create, read,
              update, delete (CRUD) operations for vacationers to post travels
              and costs
            </p>

            <button>
              <a href="https://vacation-tracker14.herokuapp.com/">Try it out</a>
            </button>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            className="bd1"
            src="https://i.imgur.com/nWTvQ3G.png"
            title="source: imgur.com"
          />
          <div className="card-body">
            <h5 className="card-title">Bidding Wars</h5>
            <p className="card-text">
              Worked on a team to develop a full stack Django/Python bidding app
              using a crypto wallet using both “divide and conquer” and “mob
              programming” techniques
            </p>
            <a href="#" className="btn">
              <button>
                <a href="https://biddingwars.herokuapp.com/">Try it out</a>
              </button>
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          {/* <img
            // className="c4"
            src="https://i.imgur.com/AWAxMoE.png"
            title="source: imgur.com"
          /> */}
          <div className="card-body">
            <img
              className="hc1"
              src="https://i.imgur.com/pSQxHyP.png"
              title="source: imgur.com"
            />
            <h5 className="card-title">Hiking California</h5>
            <p className="card-text">
              Utilized a MERN stack (MongoDB, Express, Node.js) to build a full
              stack application in four days for hikers to post their hikes with
              full create, read, update, delete (CRUD) operations Created an
              application with a Bootstrap template and styled using
              Styled-Components and CSS3 with flexbox layouts
            </p>

            <button>Try it out</button>
          </div>
        </div>

        {/* <div>
        <img
          className="c4"
          src="https://i.imgur.com/AWAxMoE.png"
          title="source: imgur.com"
        />

        <a href="https://ahaines10.github.io/connect-four/">Connect Four</a>
      </div> */}
        {/* <div>
          <img
            className="v4"
            src="https://i.imgur.com/tlJ8FB5.png"
            title="source: imgur.com"
          />

          <a href="https://vacation-tracker14.herokuapp.com/">
            Vacation Tracker
          </a>
        </div>
        <div>
          <img
            className="b4"
            src="https://i.imgur.com/nWTvQ3G.png"
            title="source: imgur.com"
          />

          <a href="https://biddingwars.herokuapp.com">Bidding Wars</a>
        </div> */}
      </div>
    </div>
  );
}
