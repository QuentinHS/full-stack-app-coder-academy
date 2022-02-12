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


        case "setSuccessAlert":
            return update(currentState, {
                
                alert: {
                    success: {$set: action.data}
                } 
                
            })

        case "setErrorAlert":
            return update(currentState, {
                
                alert: {
                    error: {$set: action.data}
                } 
                
            })

        case "setStageSuccessAlert":
            return update(currentState, {
                
                alert: {
                    stageSuccess: {$set: action.data}
                } 
                
            })    
        case "setStageErrorAlert":
            return update(currentState, {
                
                alert: {
                    stageError: {$set: action.data}
                } 
                
            })
    }
}