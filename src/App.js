import "./App.css";

export const Footer = () => (
  <div className="footer">
    <p>
      This is an onlyfans page. No recorded or collected data, no analytics, no
      statistics. Work safe content. Feel free to share with somebody, who needs
      it.
    </p>
  </div>
);

function App() {
  return (
    <div className="App">
      <div class="row">
        <div class="column">
          <img src="fan2.png" alt="fans" />
          <img src="fan3.png" alt="fans" />
        </div>
        <div class="column">
          <img src="fan4.png" alt="fans" />
          <img src="fan1.png" alt="fans" />
        </div>
        <div class="column">
          <img src="fan5.png" alt="fans" />
          <img src="fan6.png" alt="fans" />
        </div>
      </div>
      <div class="row">
        <div class="column">
          <img src="fan7.png" alt="fans" />
          <img src="fan8.png" alt="fans" />
        </div>
        <div class="column">
          <img src="fan9.png" alt="fans" />
          <img src="fan10.png" alt="fans" />
        </div>
        <div class="column">
          <img src="fan11.png" alt="fans" />
          <img src="fan12.png" alt="fans" />
        </div>
      </div>

      <div class="row">
        <div class="column">
          <img src="fan13.png" alt="fans" />
          <img src="fan14.png" alt="fans" />
        </div>
        <div class="column">
          <img src="fan15.png" alt="fans" />
          <img src="fan16.png" alt="fans" />
        </div>
        <div class="column">
          <img src="fan17.png" alt="fans" />
          <img src="fan18.png" alt="fans" />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
