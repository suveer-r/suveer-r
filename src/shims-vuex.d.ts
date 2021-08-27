// vuex.d.ts
import { ComponentCustomProperties } from "vue"
import { Store } from "vuex"
import { Data, ColorsClass, LanguageState } from "./store/interfaces"

declare module "@vue/runtime-core" {
  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<Data>
    // $store: Store<ColorsClass & LanguageState>
  }
}
