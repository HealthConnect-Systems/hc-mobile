const initialState = {
    topics: [] as any[],
}

export const topicReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "ADD_TOPIC":
            return {
                ...state,
                topics: [...state.topics, action.topic],
            };
        case "DELETE_TOPIC":
            return {
                ...state,
                topics: state.topics.filter((topic) => topic.id !== action.topic.id),
            };
        case "UPDATE_TOPIC":
            return {
                ...state,
                topics: state.topics.map((topic) =>
                    topic.id === action.topic.id ? action.topic : topic
                ),
            };
        case "LOAD_TOPICS_SUCCESS":
            return {
                ...state,
                topics: action.topics,
            };
        default:
            return state;
    }
};
