# Intelly - General Overview and Current State

Intelly is a platform being built to help small-to-medium-sized food and beverage brands manage various aspects of their business. The project is divided into separate repos to allow indeoendent development. Below, you can find a list of the specific fton and back ends that make up this project, links to their individual repos, as well as whether or not they have been deployed for public demo.

The public demos should be accessed thought this link: https://gallant-wing-415919.netlify.app/
This will bring you to a login page, which you can enter with the following credentials:

email: guest@intelly.test
password: guest

Once logged in, you will be brough to a dashboard that allows you to navigate the project in its current form. The guest account will have access to all services currently deployed for public demo, with only certain subservices being excluded to prevent any possible interference with sensitive data.

# This Specific Repo - Overview

As mentioned above, Intelly is split into several independent repos in order to facilitate different timelines for development, and thus make it possible to demonstrate those services that have reached an appropriate stage of devlopment.

The repo you are currently visiting is the back end for the Retail Data Dashboard. It provides the server-side functionality needed to allow the front end to function. To read more about that, please visit the front end repo in the link provided below.

# Additional Goals for Development

The development of this server will be guided by the goals for the front end, and ensuring that the necessary routes are built, as well as continuously revised for optimal performance.

# Installation and Contribution

If you wish to test this project locally, you may clone the repo to a directory on your machine. Navigate to the new directory using your terminal, and install all necessary dependencies by running the command 'npm i'.

The app itself should be set up to connect to the deployed server, so at that point, you should be able to start it up by running the command 'npm start' and accessing its routes via localhost:5000 or a service such as Postman.

At this time, I am not inviting individual contribution, unless there has been a specific conversation around it. If you come across something in the code that you wish to share, by all means message me and we can speak about it.

# All Repos Related to the Intelly Project

The following is a list of all related projects that have entered some stage of development. It will be updated as work begins on new services.

Authorization - Front End: https://github.com/tomekregulski/intelly-auth-client - Deployed as part of the Public Demo
Authorization - Back End: https://github.com/tomekregulski/intelly-auth-service - Deployed as part of the Public Demo
Retail Data Dashboard - Front End: https://github.com/tomekregulski/intelly - Deployed as part of the Public Demo
Retail Data Dashboard - Back End: https://github.com/tomekregulski/intelly-server - Deployed as part of the Public Demo
Field Reporting - Front End: https://github.com/tomekregulski/fieldist-rep-web-client - Deployed as part of the Public Demo
Field Events - Back End: https://github.com/tomekregulski/fieldist-back-end - Deployed as part of the Public Demo
Field Events Administration - Front End: https://github.com/tomekregulski/fieldist-admin-web-client - Deployed as part of the Public Demo
Administrative Tasks - Front End: https://github.com/tomekregulski/intelly-admin-tasks-client - Deployed as part of the Public Demo
Administrative Tasks - Back End: https://github.com/tomekregulski/intelly-admin-task-server - Deployed as part of the Public Demo
