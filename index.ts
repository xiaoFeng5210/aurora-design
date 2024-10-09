// 如果需要默认导出
import { Counter } from '@/packages/components-vue/index'
import {App} from "vue";

export {
	Counter
}

export default {
	install: (app: App): void => {
		app.component('Counter', Counter)
	},
	// Counter
}