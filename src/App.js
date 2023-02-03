import NavBar from "./NavBar/NavBar";
import AboutMe from "./AboutMe/AboutMe";
import MyProjects from "./MyProjects/MyProjects";
export default function app() {
  // const project = [{Vacation Tracker}]
  return (
    <div>
      <NavBar />
      <AboutMe />
      <MyProjects />
    </div>
  );
}
