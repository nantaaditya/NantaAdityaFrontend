import Vuex from 'vuex';

const createStore = () => {
    return new Vuex.Store({
        state: {
            about: {},
            educations: [],
            skills: [],
            projects: [],
            blogs: [],
            post: {}
        },        
        mutations: {
            SET_ABOUT: (state, data) => {
                state.about = data;
            },
            SET_EDUCATION: (state, data) => {
                state.educations = data;
            },
            SET_SKILL: (state, data) => {
                state.skills = data;
            },
            SET_PROJECT: (state, data) => {
                state.projects = data;
            },
            SET_BLOGS: (state, data) => {                
                state.blogs = data;
            },
            SET_POST: (state, data) =>{
                state.post = data;
            }
        },
        getters:{
            getAbout: (state) => {
                return state.about;
            },
            getEducations: (state) => {
                return state.educations;
            },
            getSkills: (state) => {
                return state.skills;
            },
            getProjects: (state) => {
                return state.projects;
            },
            getBlogs: (state) => {
                return state.blogs;
            },
            getPost: (state) => {
                return state.post;
            }
        }
    })
}

export default createStore;