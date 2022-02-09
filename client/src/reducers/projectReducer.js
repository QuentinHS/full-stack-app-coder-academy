export default function (currentState, action){
    switch(action.type){
        case "setProjects":
            return{
                ...currentState,
                projects: [action.entry, ...currentState.projects]
            }
    }
}