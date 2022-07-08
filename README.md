# Workout App

Was created for gaining React + Typescript practice during my internship at Innowise

### Recommendations: [docs.google.com](https://docs.google.com/document/d/1TgDG1SMdV44T6OrX23KF-JT49GiKAeDnXJE04Fff_EY/edit)

## Task: [workout-app-21.netlify.app](https://workout-app-21.netlify.app/)

### MainPage preview:

![Stolen preview image:(](src/assets/images/preview-image.png "Main page of my app")

## How to run the app

Open terminal and write:

```
git clone https://github.com/Yana-Lesina/Internship-Workout-app.git
cd workout-app
npm install
npm start
```

## Structure

```
├───.husky
├───.vscode
├───public
└───src
    ├───assets
    │   ├───fonts
    │   └───images
    ├───components
    │   ├───ExercisePage.tsx
            ├───ArrowButton.tsx
            ├───PauseInformer.tsx
            ├───PrepareImage.tsx
            ├───Timer.tsx
            ├───VideoFooter.tsx
            ├───VideoPlayer.tsx
    │   └───MainPage
            ├───Container
            ├───Exercise
            ├───Headers
            ├───Section
        └───WorkoutCompleted
        └───Button
    ├───pages
        └───ErrorPage.tsx
        └───ExercisePage.tsx
        └───MainPage.tsx
        └───WorkoutCompleted.tsx
    └───styles
        ├───ExercisePage
            ├───ArrowButton.tsx
            ├───PauseInformer.tsx
            ├───PrepareImage.tsx
            ├───Timer.tsx
            ├───VideoFooter.tsx
            ├───VideoPlayer.tsx
        ├───MainPage
            ├───Container
            ├───Exercise
            ├───Headers
            ├───Section
        └───WorkoutCompleted
```

## Application stack

- React
- TypeScript
- SCSS
- React-router-dom
- Eslint
- Prettier
- Husky
- Netlify
