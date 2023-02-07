import NavBar from "./NavBar/NavBar";
import AboutMe from "./AboutMe/AboutMe";
import MyProjects from "./MyProjects/MyProjects";
import ContactMe from "./ContactME/ContactMe";
export default function app() {
  // const project = [{Vacation Tracker}]
  return (
    <div>
      <NavBar />
      <AboutMe />
      <MyProjects />
      <ContactMe />
    </div>
  );
}
