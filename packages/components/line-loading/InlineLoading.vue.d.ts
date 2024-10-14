import type { DefineComponent } from 'vue'

declare const InlineLoading: DefineComponent<{
  fillColor: {
    type: StringConstructor
    default: string
  }
  type: {
    type: StringConstructor
    default: string
  }
}, {}, any>
export default InlineLoading
