import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { addQuizIdForTopic } from "../topics/topicsSlice";




const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuizzes: (state, action) => {
            const { id } = action.payload;
            state.quizzes[id] = action.payload;
        },
    }
})
export const addQuizzesIdForTopic = (quiz) => {
    const { topicId, id } = quiz;
    return (dispatch) => {
        dispatch(quizzesSlice.actions.addQuizzes(quiz));
        dispatch(addQuizIdForTopic({ topicId: topicId, quizId: id }));
    };
}
export const { addQuizzes } = quizzesSlice.actions;
export const selectQuizzes = (state) => state.quizzes.quizzes;
export default quizzesSlice.reducer;
