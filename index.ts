import type { App } from 'vue'
// 如果需要默认导出
import { AuVirtualScrolling, Counter } from '@/packages/components/index'

export {
  AuVirtualScrolling,
  Counter,
}

export default {
  install: (app: App): void => {
    app.component('Counter', Counter)
  },
  // Counter
}
