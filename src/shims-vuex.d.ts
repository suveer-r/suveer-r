// vuex.d.ts
import { Store } from "vuex"
import { Data } from "./store/interfaces"

declare module "@vue/runtime-core" {
  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<Data>
    // $store: Store<ColorsClass & LanguageState>
  }
}
