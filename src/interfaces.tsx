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
  muscle_group: Imuscle_group;
};

export type IWorkoutPart = {
  name: string;
  slug: string;
  questions: IQuestion[];
};

export type Imuscle_group = {
  name: string;
  photo: string;
};

export type ExerciseIntro = {
  title: string;
  duration: number;
  photo: string;
};
