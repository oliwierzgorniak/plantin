import "./css/main.css";
import "./css/header.css";
import "./css/hero.css";
import "./css/paris.css";
import "./css/market.css";
import "./css/religion.css";
import "./css/heresey.css";
import "./css/scale.css";
import "./css/duke.css";
import "./css/regia.css";
import "./css/printer.css";
import "./css/fury.css";
import "./css/leiden.css";
import "./css/chart.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import handleMenu from "./js/handleMenu";
import handleHero from "./js/handleHero";
import handleMarket from "./js/handleMarket";
import handleRegia from "./js/handleRegia";
import handlePrinter from "./js/handlePrinter";
import handleFury from "./js/handleFury";
import handleParis from "./js/handleParis";
import handleScale from "./js/handleScale";
import handleReligion from "./js/handleReligion";
import handleHersey from "./js/handleHeresey";
import handleDuke from "./js/handleDuke";
import handleLeiden from "./js/handleLeiden";

// gsap
gsap.registerPlugin(ScrollTrigger);
handleHero();
handleParis();
handleMarket();
handleReligion();
handleHersey();
handleScale();
handleDuke();
handleRegia();
handlePrinter();
handleFury();
handleLeiden();

handleMenu();
