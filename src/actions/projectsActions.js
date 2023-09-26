export const setProjects = (projects) => ({
  type: "SET_PROJECTS",
  payload: projects,
});

export const setSelectedProject = (project) => ({
  type: "SET_SELECTED_PROJECT",
  payload: project,
});

export const setFilteredCategory = (category) => ({
  type: "SET_FILTERED_CATEGORY",
  payload: category,
});

export const toggleModalOpen = () => ({
  type: "TOGGLE_MODAL_OPEN",
});
