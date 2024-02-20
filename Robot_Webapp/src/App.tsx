import Home from "./Home.tsx";
import ControllerPage from "./ControllerPage.tsx";
import CameraPage from "./CameraPage.tsx";
import { Fragment } from "react";
import TaskPage from "./TaskPage.tsx";

export function Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid d-flex flex-row justify-content-between">
        <a className="navbar-brand" href="index.html">
          COSub Home
        </a>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" aria-current="page" href="camera.html">
              Camera
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="controller.html">
              Controller
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="tasks.html">
              Tasks
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function App({ page }: { page: string }) {
  switch (page) {
    case "COSUB Home":
      return (
        <Fragment>
          <h1>
            <Nav />
            <Home />
          </h1>
        </Fragment>
      );
      break;
    case "COSUB Controller":
      return (
        <Fragment>
          <h1>
            <Nav />
            <ControllerPage />
          </h1>
        </Fragment>
      );
      break;
    case "COSUB Camera":
      return (
        <Fragment>
          <h1>
            <Nav />
            <CameraPage />
          </h1>
        </Fragment>
      );
      break;
    case "COSUB Tasks":
      return (
        <Fragment>
          <h1>
            <Nav />
            <TaskPage />
          </h1>
        </Fragment>
      );
      break;
    default:
      return <h1>404 page not found</h1>;
  }
}

export default App;
