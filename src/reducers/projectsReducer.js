import ExampleImage from "./example-project.jpg";
const initialState = {
  projects: [],
  selectedProject: null,
  filteredCategory: "Hepsi",
  isModalOpen: false,
};

const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PROJECTS":
      return { ...state, projects: action.payload };
    case "SET_SELECTED_PROJECT":
      return { ...state, selectedProject: action.payload };
    case "SET_FILTERED_CATEGORY":
      return { ...state, filteredCategory: action.payload };
    case "TOGGLE_MODAL_OPEN":
      return { ...state, isModalOpen: !state.isModalOpen };
    default:
      return state;
  }
};

export default projectsReducer;
