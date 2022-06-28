import "./App.css";
import { useEffect, useRef } from "react";
import useWindowSize from "./hooks/useWindowSize";
import { useState } from "react";
import {
  Home,
  About,
  Contact,
  Project,
  Skill,
  Sidebar,
  Footer,
} from "./Components/index";
import RingLoader from "react-spinners/RingLoader";

function App() {
  const scrollContainer = useRef();
  const size = useWindowSize();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const data = {
    ease: 0.13,
    current: 0,
    previous: 0,
    rounded: 0,
  };
  console.log(open);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  useEffect(() => {
    !loading && requestAnimationFrame(() => skewScrolling());
  }, [loading]);

  useEffect(() => {
    !loading && setBodyHeight();
  }, [size.height, size.width, loading]);

  const setBodyHeight = () => {
    console.log("height");
    document.body.style.height = `${
      scrollContainer.current.getBoundingClientRect().height
    }px`;
  };

  const skewScrolling = () => {
    // console.log(window.scrollY);
    //Set Current to the scroll position amount
    data.current = window.scrollY;
    // Set Previous to the scroll previous position
    data.previous += (data.current - data.previous) * data.ease;
    // Set rounded to
    data.rounded = Math.round(data.previous * 100) / 100;

    // Difference between
    const difference = data.current - data.rounded;
    const acceleration = difference / size.width;
    const velocity = +acceleration;
    const skew = velocity * 3;

    //Assign skew and smooth scrolling to the scroll container
    scrollContainer.current.style.transform = `translate3d(0, -${data.rounded}px, 0) skewY(${skew}deg)`;
    requestAnimationFrame(() => skewScrolling());
  };

  useEffect(() => {
    window.addEventListener("dblclick", () => {
      setOpen((prev) => !prev);
    });
  }, []);

  return (
    <>
      {loading ? (
        <div className='loader'>
          <RingLoader
            color='#764ABC'
            loading={loading}
            size={100}
            className='loader1'
          />
          <p>Double click to open sidebar</p>
        </div>
      ) : (
        <div className='app'>
          <Sidebar scroll={scrollContainer} />
          <div className='scroll' ref={scrollContainer}>
            <Home />
            <About />
            <Project />
            <Skill />
            <Contact />
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
