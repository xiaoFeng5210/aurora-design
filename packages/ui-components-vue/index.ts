// index.ts
import { App } from 'vue'
import Counter from './test/Counter.vue'

export { Counter }

export default {
	install: (app: App): void => {
		app.component('Counter', Counter)
	}
}