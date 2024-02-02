import Header from "./components/Header";
import { useContext } from "react";
import CoronaForCountry from "./components/CoronaForCountry";
import RecordedCorona from "./components/RecordedCorona";
import CoronaForContinent from "./components/CoronaForContinent";
import { context1 } from "./contextApi/Store";

function App() {
  const [key] = useContext(context1);

  const backgroundStyle = {
    minHeight: "100vh", // Set minimum height to cover the entire viewport
    backgroundColor: "#e5e5e5", // Replace with your desired background color
    backgroundImage: 'url("your-background-image-url.jpg")', // If you have a background image
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div style={backgroundStyle}>
      <Header />
      <div className="md:container md:mx-auto p-8  ">
        {key === 1 && <CoronaForCountry></CoronaForCountry>}
        {key === 2 && <RecordedCorona></RecordedCorona>}
        {key === 3 && <CoronaForContinent></CoronaForContinent>}
      </div>
    </div>
  );
}

export default App;
