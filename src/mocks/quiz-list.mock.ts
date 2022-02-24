import { Quiz } from '../models/quiz.model';
import { Question } from '../models/question.model';

export const QUESTION_ACTOR: Question = {
     label: 'Jean Gabin a joué dans...',
     answers: [
         {
             value: 'Les tuches II',
             isCorrect: false,
         },
         {
             value: 'La grande illusion',
             isCorrect: true,
         }
     ]
};

export const QUESTION_SPORT: Question = {
  label: 'Jean Gabin a joué dans...',
  answers: [
      {
          value: 'PSG',
          isCorrect: false,
      },
      {
          value: 'Bled paumé',
          isCorrect: true,
      }
  ]
};

export const QUIZ_LIST: Quiz[] = [
    {
        name: 'Les Acteurs', // What's happening if I change this value..?
        theme: 'Actor',
        questions: [QUESTION_ACTOR],
    },
    {
        name: 'Les Sportifs',
        theme: 'Sport',
        questions: [QUESTION_SPORT],
    }
];
