import type { Component } from "solid-js";
import Header from "./components/shared/Header";
import { createSignal } from "solid-js";


const App: Component = () => {

  const [imageSrc, setImageSrc] = createSignal(null);

  const handleDragStart = (e) => {
    const imgSrc = e.target.src;
    console.log('image: ', imgSrc);
    e.dataTransfer.setData("text/plain", imgSrc);
  }

  const handleDrop = (e) => {
    e.preventDefault();
    const imgSrc = e.dataTransfer.getData("text/plain");
    console.log('source: ', imgSrc);
    if (imgSrc) {
      setImageSrc(imgSrc);
    }
  };
  return (
    <>
      <Header />
      <div class='jumbotron'>
        <img draggable="true" onDragStart={handleDragStart} src='https://sapulse.blob.core.windows.net/pulse-bc/apps/porfolio/portfolio-jumbotron-1.svg' alt='' />
      </div>
      <div
        style={{
          background: "red",
          width: "100px",
          height: "100px",
        }}
        onDragOver={(e) => {
          e.preventDefault();
          if(e.dataTransfer) {
            e.dataTransfer.dropEffect = "copy"; // Show the copy icon when dragging
          }
        }}
        onDrop={handleDrop}>
          {imageSrc() ? (
          <img
            src={imageSrc()}
            alt="Dropped"
            style={{ "max-width": "100%", "max-height": "100%" }}
          />
        ) : (
          <span>Drag and drop an image here</span>
        )}
        </div>
      <section>
        <span class='title'>Bio</span>
        <p class='description'>
          I'm a full-stack React/Node developer with a solid IT background. As a senior programmer analyst, I exceed
          goals using agile methods and advanced coding skills. I work well with executives, engineers, and managers to
          achieve business goals and am committed to ongoing growth.
        </p>
      </section>
      <section class='title'>
        <span class='title'>Skills</span>
        <p class='description'>
          I enjoy working with React.js to create dynamic and user-friendly web interfaces. My approach involves
          developing reusable components, effectively managing application state, and continually optimizing for better
          performance. I'm passionate about integrating modern design trends into my projects and am always eager to
          learn and adopt new techniques to enhance user experiences.
        </p>
        <p class='description'>
          I enjoy using Node.js to build scalable and high-performance backend systems. My skills include developing
          RESTful APIs, handling asynchronous programming, and integrating with various databases like MongoDB and SQL.
          I focus on security and efficiency to ensure robust and reliable server-side applications. I'm always keen to
          learn and improve, staying updated with the latest practices to enhance my work.
        </p>
      </section>
      <div class='title'>Projects</div>
      <div class='title'>Contact</div>

      
    </>
  );
};

export default App;
