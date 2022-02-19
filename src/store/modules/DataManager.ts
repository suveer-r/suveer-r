import { Module } from "vuex"
import { ColorsClass, Data, KnowledgeClass } from "../interfaces"
import { default as jsonData } from "../../data/data.json"

const state: Data = {
  colors: <ColorsClass>{},
  knowledge: <KnowledgeClass>{},
}

const getters = {
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
}

const mutations = {
  WRITE_COLORS(state: Data, dataJson: ColorsClass) {
    state.colors = dataJson
  },
  WRITE_KNOWLEDGE(state: Data, dataJson: KnowledgeClass) {
    state.knowledge = dataJson
  },
}

const actions = {
  async FetchJsonData(
    { dispatch }: { dispatch: (_name: string, _arg: Data) => void },
    _data = jsonData
  ) {
    dispatch("FetchColors", _data)
    dispatch("FetchKnowledge", _data)
  },

  async FetchColors(
    {
      commit,
    }: {
      commit: (_name: string, _arg: Data | ColorsClass | KnowledgeClass) => void
    },
    _data = jsonData
  ) {
    console.log(`dataFile: \n`, _data.colors)
    commit("WRITE_COLORS", _data.colors)
  },

  async FetchKnowledge(
    {
      commit,
    }: {
      commit: (_name: string, _arg: Data | ColorsClass | KnowledgeClass) => void
    },
    _data = jsonData
  ) {
    console.log(`dataFile: \n`, _data.knowledge)
    commit("WRITE_KNOWLEDGE", _data.knowledge)
  },
}

export const DataManager: Module<Data, unknown> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
