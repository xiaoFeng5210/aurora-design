import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import UIComponent from "../../output/aurora-design.js";
import "../../output/aurora-design.css";

console.log(UIComponent)
createApp(App)
	.use(UIComponent)
	.mount('#app')

