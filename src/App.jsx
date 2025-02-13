import Navbar from "./Pages/Navbar/Navbar";
import "./App.css";
import TwoMain from "./Pages/TwoMain/TwoMain";
import Footer from "./Pages/Footer/Footer";
import  Plus from"./Pages/Plus/Plus";
import Fott from "./Pages/Fott/Fott";
import { createBrowserRouter, RouterProvider,} from "react-router-dom";


function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        {
          index: true,
          element: <TwoMain />,
        },
        {
          path: "/home",
          element: <Footer />,
        },
        {
          path: "/about",
          element: <Plus />,
        },
        {
          path: "/",
          element: <Fott />,
        },
      ],
    },
  ]);
 
  return (
    <section>

       <section  className="sect" style={{ backgroundColor: "blue"  }}>
      <div className="container">
        <div>
    <RouterProvider router={routes} />
    
          <TwoMain />
        </div>

       
      </div>
    </section>
    <div className="container">
   <Footer />
   <Plus />
    </div>
    
   <section style={{ backgroundColor: "blue"  }}>
    <div className="container">

      <Fott />
    </div>
    </section>
    </section>
   
   
  );
}

export default App;
