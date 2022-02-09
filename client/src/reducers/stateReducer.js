export default function (currentState, action){
    switch(action.type){
        case "addProjects":
            return{
                ...currentState,
                projects: [action.entry, ...currentState.projects]
            }
    }
}