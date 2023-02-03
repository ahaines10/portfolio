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
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <h5 className="card-title">Vacation Tracker</h5>
          <img
            className="vt1"
            src="https://i.imgur.com/IjCGOyH.jpg"
            title="source: imgur.com"
          />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
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
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
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
            <h5 className="card-title">Hiking California</h5>
            <img
              className="hc1"
              src="https://i.imgur.com/pSQxHyP.png"
              title="source: imgur.com"
            />
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
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
