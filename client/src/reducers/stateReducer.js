export default function (currentState, action){
    switch(action.type){
        case "addProjects":
            return{
                ...currentState,
                projects: [action.data, ...currentState.projects]
            }
        case "setProjects":
            return{
                ...currentState,
                projects: action.data
            }

        case "setCurrentUser":
            return{
                ...currentState,
                currentUser: action.data
            }
    }
}