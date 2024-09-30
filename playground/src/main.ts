import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import * as AuroraDesign from "../../output/aurora-design.js";
import "../../output/aurora-design.css";

createApp(App)
	.use(AuroraDesign)
	.mount('#app')

