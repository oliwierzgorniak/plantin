import "./css/main.css";
import "./css/header.css";
import "./css/hero.css";
import "./css/paris.css";
import "./css/market.css";
import "./css/heresey.css";
import "./css/regia.css";
import "./css/printer.css";
import "./css/fury.css";
import "./css/chart.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import handleMenu from "./js/handleMenu";
import hadnleHero from "./js/handleHero";

// gsap
gsap.registerPlugin(ScrollTrigger);
hadnleHero();

handleMenu();
