export type DataType = {
  data: WorkoutPartType[];
};

export type WorkoutPartType = {
  name: string;
  slug: string;
  ifCompleted: true | undefined;
  questions: QuestionType[];
};

export type QuestionType = {
  title: string;
  exercises: ExerciseType[];
  muscleGroup: MuscleGroupType;
};

export type ExerciseType = {
  id: number;
  title: string;
  duration: number;
  video: string;
  photo: string;
  description: string;
  finished?: true | undefined;
};

export type MuscleGroupType = {
  name: string;
  photo: string;
};
