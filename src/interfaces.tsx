export type IExercise = {
  id: number;
  title: string;
  duration: number;
  video: string;
  photo: string;
  description: string;
};

export type IQuestion = {
  title: string;
  exercises: IExercise[];
  muscle_group: {
    name: string;
    photo: string;
  };
};

export type IWorkoutPart = {
  name: string;
  slug: string;
  questions: IQuestion[];
};
