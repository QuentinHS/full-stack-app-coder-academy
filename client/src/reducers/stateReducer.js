import update from 'immutability-helper'

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
        case "addStageToProjects":
            return update(currentState, {
                
                projects: {
                    [action.data.stage.project]: {
                        stages: {$set: action.data}
                    }
                } 
                
            })

        case "setCurrentUser":
            return{
                ...currentState,
                currentUser: action.data
            }

        case "setStages":
            return{
                ...currentState,
                stages: action.data
            }

        case "addStage":
            return {
                ...currentState, 
                stages: [action.data, ...currentState.stages]
            }
    }
}