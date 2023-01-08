import { configureStore } from "@reduxjs/toolkit";
import quizzesReducer from "../features/quizzes/quizzesSlice";
import topicSlice from "../features/topics/topicsSlice";
import cardsSlice from "../features/cards/cardsSlice";



export default configureStore({
  reducer: {
    topics: topicSlice,
    quizzes: quizzesReducer,
    cards: cardsSlice

  }
});
