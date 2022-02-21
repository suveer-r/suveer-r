import { defineStore } from "pinia"
import { Data, KnowledgeClass, ColorsClass } from "./interfaces"
import { default as getData } from "../data/data.json"

export const dataStore = defineStore("allData", {
  state: (): Data => ({
    knowledge: <KnowledgeClass>{},
    colors: <ColorsClass>{},
  }),

  getters: {
    // Knowledge
    allKnowledge: (state: Data) => state.knowledge,
    languages: (state: Data) => state.knowledge?.language,
    tools: (state: Data) => state.knowledge?.["tools/frameworks"],
    skills: (state: Data) => state.knowledge?.skills,

    // Colors
    allColors: (state: Data) => state.colors,
    primaryColor: (state: Data) => state.colors?.primary || "#00BFA9",
    secondaryColor: (state: Data) => state.colors?.secondary || "#0083D8",
    tertiaryColor: (state: Data) => state.colors?.tertiary || "#5964C4",
    contrastColor: (state: Data) => state.colors?.contrast || "#F0544F",
    darkColor: (state: Data) => state.colors?.dark || "#45607B",
    lightColor: (state: Data) => state.colors?.light || "#EBFFFD",
    blackColor: (state: Data) => state.colors?.black || "#212121",
    whiteColor: (state: Data) => state.colors?.white || "#FFFFFF",
  },

  actions: {
    async FetchJsonData(_data: Data = getData) {
      this.knowledge = _data.knowledge
      this.colors = _data.colors
    },

    clearAllData() {
      this.$reset()
    },
  },
})
