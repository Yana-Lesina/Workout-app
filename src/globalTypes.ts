export type ExerciseType = {
  id: number;
  title: string;
  duration: number;
  video: string;
  photo: string;
  description: string;
  finished?: true | undefined;
};

export type QuestionType = {
  title: string;
  exercises: ExerciseType[];
  muscleGroup: MuscleGroupType;
};

export type WorkoutPartType = {
  name: string;
  slug: string;
  questions: QuestionType[];

  exerciseList: ExerciseType[] | undefined;
  startCounter: number | undefined;
  isWorkoutCompleted: undefined | boolean;
};

export type MuscleGroupType = {
  name: string;
  photo: string;
};
