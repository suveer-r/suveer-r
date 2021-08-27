import { createStore } from "vuex"
import { DataManager } from "./modules/DataManager"

export default createStore({
  modules: { DataManager },
})
