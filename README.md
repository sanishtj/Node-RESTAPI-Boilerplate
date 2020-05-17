# NodeJs Rest API Boilerplate

### content 

 - ExpressJS - web application framework used for this rest API.
 - Routing - Express comes with build-in routing.
 - Express-Validator - A separate package to validate your inputs.
 - MVC - Controllers are separated into different files.
 - Unique response style.
 - dotenv - Secrets are secrets now.
 - Logging - File system logging with Winston, Morgan and rotating file stream.
 - CORS - for cross-origin support
 - Unit tests - Mocha with chai and sinon for mocking
 - ESLint - For linting or forcing a style of coding standards [AirBnB]

> I am using this API code as a starting point for a few microservices. I have another boilerplate underway with MongoDB. This one is not connected to any DB. FYI !!

## ExpressJS - the web application framework 
This API is done with ExpressJS even though there are several other options like Meteor, FeathersJS etc.
ExpressJS is easy to understand especially when you have worked with an MVC architecture like ASP.NET MVC. 
## Routing - Express comes with build-in routing.
ExpressJS comes with routing. I have added validation inline but this can be moved to separate file.
## Express-Validator
This is a separate package but easy to use with a router. I have left a few examples in code.
## MVC
I am a big fan of the Model View Controller pattern. There is no view here but that's the JSON data you get.
## dotenv
This is an important package you must use in your projects to keep your secrets like connection strings, secret keys, API URLs and anything you don't want to expose in the source control. We have to git ignore this file if it's not excluded by default. This is your file of secrets which you don't want to share publically. If you are using private repositories then this won't be a big deal but still better to use it.
## Logging
I am using Morgan for logging all incoming requests and that's routed to Winston which is a robust logging option. I am logging everything to file system and using rotating-file-stream to split the logs. In production, you can limit the logging if with only faults or exceptions and not info or debugging logs.
## CORS
  Cross-Origin Resource sharing is not enabled by default so we need to add that separately. 

## Unit tests - Mocha with chai and sinon for mocking
  I am using Mocha with Chai for better readability of unit tests. I have added a few examples. Like we use MOQ in C# for mocking methods, SINON can be used with nodeJS for that purpose.
## ESLint
Linting is a must in any javascript project whether it's server-side or client-side. I am using Airbnb style guide which covers many scenarios. There are definite exceptions for some style which can be marked ignored in different ways. If you add ESLint plugin for VS Code, things will be pretty easy to format on save and autocorrect mistakes. 
  







