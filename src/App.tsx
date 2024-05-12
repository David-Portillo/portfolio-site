import type { Component } from 'solid-js';
import Header from './components/shared/Header';

const App: Component = () => {
  return (
    <>
      <Header />
      <div class='title-section'>About Me</div>
      <div class='title-section'>Skills</div>
      <div class='title-section'>History</div>
      <div class='title-section'>Projects</div>
    </>
  );
};

export default App;
