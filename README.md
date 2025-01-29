This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

-> RootLayout : you structure the html document by using the html ans bosu pages

-> Within the body tag, you include the naviagtion component, which is imported from the components directory. 
   this component represents your navigation bar and will be shared across that is displayed consistently throughout your app. 

-> the children prop is special prop that repsresents the content rendered within the RootLayout component. 

## routing 

-> Routing in NextJs is fundamental concept that determnes how different parts of your application are accessed; When you create a folder inside the app directory in NextJJs, it will be automaticaly becomes a route. Naming the file inside the route folder page.jsx transforms it into a ui route. this mean that it will serve as a regular page with ui components. 

-> on the other hand, if you name the file as route.js it becomes an API route that will be handle API requests and response. 

-> wit APPI routes, you can define custom routes that handle HTTP requests and response, allowing you to fetch or modify data, perform server side or intergrate with external services

   .NextResponse.json()  : it is import from next/server module. This object provides functions for handling server responses.


## props 
-> Regular HTML elements have attributes that you can use to pass pieces of information that change the behavior of those elements. For example, changing the src attribute of an <img> element changes the image that is shown. Changing the href attribute of an <a> tag changes the destination of the link.

In the same way, you can pass pieces of information as properties to React components. These are called props


## passings Props to a Component

-> React components use props to communicate with each other. Every parent component can pass some information to its child components by giving them props. 

## Familiar props 
Props are the information that you pass to a JSX tag. For example, className, src, alt, width, and height are some of the props you can pass to an <img>:

--> Don’t miss the pair of { and } curlies inside of ( and ) when declaring props:

## How Props change over time : 
  
  Props reflect a component's daa at any point in time rahter than only in the bigginning.

# React components

React components are independent, reusable building blocks in a React application that define what gets displayed on the UI. They accept inputs called props and return React elements describing the UI.

1. server side rendering (SSR)

  -> When to use : 

      . Dynamic Data : Pages that need to display data that changes frequently and must be up-to-date on every request, such as user profile or real time dashboards
                     this allows the browser to display the content immediately
      . SEO : Pages that benefits from SEO whhere the content changes based on user interactions or real time data, like products with live inventory# demo_nextJs
