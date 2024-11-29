import React, { useState, useEffect } from "react";
import Section from "./components/Section";
import ThemeToggle from "./components/ThemeToggle";
import "./App.css";
import { useSpring, animated } from "react-spring";
import { Link, Element } from "react-scroll";
import { ReactTyped as Typed } from "react-typed";

const App = () => {
  const [gradient, setGradient] = useState(0);
  const [dynamicFact, setDynamicFact] = useState("");
  const [manualFact, setManualFact] = useState(false);

  const facts = [
    "The universe is 13.8 billion years old.",
    "Mars has the largest dust storms in the solar system.",
    "The Moon is moving away from Earth at 3.8 cm per year.",
    "Saturn could float in water due to its low density.",
    "A day on Venus is longer than a year on Venus!",
  ];

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const docHeight = document.body.scrollHeight - windowHeight;

    const gradientValue = Math.min(scrollTop / docHeight, 1);
    setGradient(gradientValue);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (manualFact) return;

    const factInterval = setInterval(() => {
      const randomFact = facts[Math.floor(Math.random() * facts.length)];
      setDynamicFact(randomFact);
    }, 15000);

    return () => clearInterval(factInterval);
  }, [manualFact]);

  const showNewFact = () => {
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    setDynamicFact(randomFact);
    setManualFact(true);
  };

  const backgroundColor = `rgba(${255 * (1 - gradient)}, ${255 * (1 - gradient)}, ${255 * (1 - gradient)}, 1)`;

  return (
    <div
      className="app-wrapper"
      style={{
        backgroundColor,
        color: gradient > 0.5 ? "white" : "black",
      }}
    >
      {/* Navigation */}
      <nav className="navbar">
        <Link to="section1" smooth={true} duration={500}>
          Home
        </Link>
        <Link to="section2" smooth={true} duration={500}>
          About
        </Link>
        <Link to="section3" smooth={true} duration={500}>
          Contact
        </Link>
      </nav>
      
      {/* Header */}
      <div className="header">
        <Typed
          strings={[
            "Explore the Wonders of Space",
            "Dive Into the Mysteries of the Universe",
          ]}
          typeSpeed={50}
          backSpeed={30}
          loop
        />
      </div>


      {/* Sections */}
      <Element name="section1">
        <Section
          title="THE UNIVERSE'S WONDERS"
          description="Discover the vast expanse of the cosmos."
          image="https://englishpluspodcast.com/wp-content/uploads/2023/05/Astronomy-and-Astrophysics.jpg"
          theory={[
            "The universe is vast and full of mysteries.",
            "Scientists explore black holes, galaxies, and the origins of everything.",
          ]}
        />
      </Element>
      <Element name="section2">
      <Section
        title="EXPLORING THE MOON"
        description="Humanity's first steps on the Moon marked a defining moment in space exploration. Delve into the legacy of lunar exploration and its potential for future missions."
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP3oMiIG5aI47U7_8t2-sy8GBVfd8jgtUFDA&s"
        theory={["The Moon, Earth's natural satellite, has fascinated humans for millennia. The Apollo missions not only showcased our technological prowess but also provided valuable insights into the Moon's geological history and the origins of the solar system."
        ]}/>
      <Section
        title="MARS: OUR NEW HOME?"
        description="Mars has captured the imagination of scientists and visionaries as a potential second home for humanity. Learn about the challenges and opportunities of colonizing the Red Planet."
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG3nIg_JGL3YveosiO_I15Fo16OEbCpxgXFQ&s"
        theory={["Mars is a cold, desert-like planet with a thin atmosphere, primarily composed of carbon dioxide. Despite its harsh conditions, advances in technology and the discovery of frozen water have made it a prime candidate for future colonization."
        ]}/>
      <Section
        title="THE RINGS OF SATURN"
        description="Saturn's rings are one of the most iconic features in our solar system. Discover the science behind these beautiful formations."
        image="https://economymiddleeast.com/cdn-cgi/imagedelivery/Xfg_b7GtigYi5mxeAzkt9w/economymiddleeast.com/2023/07/shutterstock_1677454126.jpg/w=1200,h=633"
        theory={["Saturn's rings are made up of countless particles of ice and rock, ranging in size from micrometers to meters. These rings are a dynamic system, constantly shaped by the planet's gravity and interactions with its moons."
        ]}/>
      </Element>
      <Element name="section3">
        <Section
          title="CONTACT US"
          description="We'd love to hear from you!"
          image="https://th.bing.com/th/id/OIP.FwE92zbcnYirl0j-o5guJQHaEs?rs=1&pid=ImgDetMain"
          theory="Feel free to reach out to us for inquiries or collaborations."
        />
      </Element>

      {/* Dynamic Fact Section */}
      <div className="dynamic-fact">
        <h2>Did You Know?</h2>
        <animated.div>{dynamicFact}</animated.div>
        <button onClick={showNewFact}>Show Me Another Fact</button>
      </div>
    </div>
  );
};

export default App;
