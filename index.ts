// 如果需要默认导出
import { AuVirtualScrolling, Counter } from '@/packages/components-vue/index'
import {App} from "vue";

export {
	Counter,
	AuVirtualScrolling
}

export default {
	install: (app: App): void => {
		app.component('Counter', Counter)
	},
	// Counter
}