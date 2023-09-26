import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projects: [],
  filteredProjects: [],
};

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    setProjects: (state, action) => {
      state.projects = action.payload;
      state.filteredProjects = action.payload;
    },
    filterProjects: (state, action) => {
      const category = action.payload;
      state.filteredProjects = state.projects.filter(
        (project) => project.category === category,
      );
    },
    resetFilter: (state) => {
      state.filteredProjects = state.projects;
    },
  },
});

export const { setProjects, filterProjects, resetFilter } =
  projectsSlice.actions;

export const selectProjects = (state) => state.projects.projects;
export const selectFilteredProjects = (state) =>
  state.projects.filteredProjects;

export default projectsSlice.reducer;
