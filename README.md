# profee

Hello Everyone,

This is the driver application which would be disintegrated into multiple microservices to demostrate this amazing application architecture and give a handson experience to all the potential readers of my articles at medium.com

Prefered IDE : 
1. IntelliJ Idea community Edition for Spring Application
2. VS Code for Angular
3. SSMS for monitoring the DB Related changes

To run this application, follow these steps :
1. Clone the app.
2. Go to angular directory and run npm install.
3. Once all relevant packages are installed, run ng build or ng build --watch to generate static javascript files which would be served by the Spring Boot App when we run it through Idea.
4. Update the DB conection strings in application.yml as per your local SQL Server configurations.
5. Run the InitializationScript.sql in your local SQL Server to initialize the required tables in the DdataBase.
6. Run ProfeeApplication.java and post successful application initialization, head over to localhost:8080 to see the complete app running.
