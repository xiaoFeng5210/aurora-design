import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import AuroraComponents from '../../packages/ui-components-vue/index'

createApp(App).mount('#app').use(AuroraComponents)

