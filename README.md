# iCasei Front-end Test

All the instructions, architecture and decisions about the project can be found below.

## Language and Framework

Following the challenge recommendation, it was used JavaScript and its framework, React.

## Dependencies

- **TypeScript**: it types the code at runtime
- **Axios**: used to access APIs, it gives you the ability to take advantage of JavaScript's _async_ and _await_ for more readable asynchronous code.
- **React-router-dom**: it provides a better rendering to the different routes inside a SPA.
- **Material-ui/icons**: an easier way to get svg icons as React components.
- **Styled Components**: it optimizes the styling experience for React components.

## Architecture

This project architecture was created in order to support its growth and keep it organized.

**Project Tree**

```
├── public
│  ├── favicon.ico
│  ├── index.html
│  ├── manifest.json
│  └── robots.txt
├── src
│  ├── components
│  │  ├── Details
│  │  │  ├── index.tsx
│  │  │  └── styles.ts
│  │  ├── Error
│  │  │  ├── index.tsx
│  │  │  └── styles.ts
│  │  ├── Home
│  │  │  ├── index.tsx
│  │  │  └── styles.ts
│  │  └── VideoCard
│  │  │  ├── index.tsx
│  │  │  └── styles.ts
│  ├── services
│  │  └── index.ts
│  ├── styles
│  │  └── GlobalStyles.ts
│  ├── App.tsx
│  ├── env.ts
│  ├── index.tsx
│  ├── react-app-env.d.ts
│  └── types.d.ts
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.json
├── yarn.lock
```

The simplified version of the project tree is described below:

- **components**: react components used inside the pages and that can be reusable
- **services**: API request
- **styles**: global styles to be used in the entire application

The project is visually structured by two pages created to be navigated by `react-router-dom`. The Home page has, initially, a search input in the center, which slides up once is submitted. If the API request fails, an error message is exhibited. If not, it's going to result in a list of videos related to the search, with a maximum of 9 videos per page and two buttons at the bottom: previous and next buttons, which are only exhibited if there are previous and next videos.

Then, once you click on the _Video Details_ button, the application will redirect you to the Details page, which exhibits the video thumbnail, name, likes, dislikes and views, and the channel name.

The entire application was built with the concept of Mobile First and responsive layout.

The state is controlled by _React Hooks_.

## Settings

You must have Git installed in your machine to download the following GitHub repository:

- https://github.com/danielejsantos/icasei

Or you can download it by following the command:

`git clone https://github.com/danielejsantos/icasei.git`

You must add your YouTube API key in a env.ts file.

Then, you must install its dependencies. At the root, run the command:

```
# with yarn:
yarn install
# with npm:
npm install
```

## How to run

Navigate to the root folder and run the following command:

```
# with yarn:
yarn start
# with npm:
npm start
```
