function ModeToggler() {
  let darkModeOn = true;
  const darkMode = <h1>Dark Mode is on</h1>;
  const lightMode = <h1>Light Mode is on</h1>;

  function handleClick() {
    darkModeOn = !darkModeOn;
    if (darkModeOn) {
      console.log("Dark Mode is on");
    } else {
      console.log("Light Mode is on");
    }
  }

  return (
    <div>
      {darkModeOn ? darkMode : lightMode}
      <button onClick={handleClick}>Toggle Mode</button>
    </div>
  );
}

export default ModeToggler;
