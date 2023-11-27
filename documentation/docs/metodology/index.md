---
sidebar_position: 2
---

# Methodology

Single Page Startup project is a comprehensive solution for optimizing the process of developing projects of different sizes. It includes frequently repeated project-to-project functions, configured configuration files of tools that help in project development, and a certain methodology for project development. This page will specifically talk about this methodology.

## Our experience

Before coming to the conclusions described on this page, our team spent 2 years developing a big startup that had already become outdated by the end of its development. During those 2 years, our team tried dozens of approaches, increased the number of employees threefold, and then reduced it by five times. The code base during this time grew to a size where it took several hours of a Middle Plus (20$/hour) developer to fix a small bug.

After that, we started developing another startup, which we were able to complete in 3 months because we drew conclusions based on past experience. We made the next startup even faster, but the code bases for these two projects diverged, so we had to maintain them separately from each other and spend twice as much time solving the same bug.

This prompted us to think, "Is it possible to create such a project foundation that there are no multiple versions of the code base for different startups?" And yes, after 6 months of fruitful work and hypothesis testing, a stable version of Single Page Startup was created, which serves as the basis for different, dissimilar projects, while minimal time is spent on supporting projects based on Single Page Startup, and such projects can be maintained by Junior Plus (8$/hour) / Middle Minus (15$/hour) level developers.

## Conclusions

### BDD (Behavior-Driven Development)

After years of developing major projects, we have realized the importance of close collaboration with business owners for successful project implementation. In order to involve them in the work, effective communication in a shared language is necessary. To achieve this, we utilize BDD (Behavior-Driven Development), which is based on User Stories. By using Cucumber.js and Gherkin files, we can describe the required business processes and deliver the product that meets the needs of the business owners to the customers.

### Rest API and normalized data on the backend

Using normalized data on the backend is also a good idea because it allows for more efficient data storage and retrieval. Normalizing data involves breaking it down into smaller, more manageable pieces and storing it in separate tables, which can then be joined together when needed. This approach reduces data redundancy and ensures data consistency, making it easier to maintain and update the database over time. By using both a REST API and normalized data, you can create a scalable and efficient web application that is easy to maintain and update in the future.

Strapi is the perfect tool for creating a REST API, as it saves time in development and provides numerous plugins to help you create the best possible API. Strapi automates tasks such as routing, models, controllers, and other repetitive operations, allowing you to focus on business logic while creating a high-quality API.

By using Strapi, you can significantly reduce the time and effort required to build a complete API, as everything is already pre-built and ready to use. Strapi provides a user-friendly interface, making it simple for developers to create and manage APIs.

### Working with data on the backend

It's better to make calculations and work with data on the backend rather than on the frontend because the frontend may not have access to all the data needed for the calculation, or the client computer's processing power may not be sufficient to perform the calculation. By making an extra request to the backend, the necessary data can be retrieved and processed on a more powerful server, reducing the load on the client computer and ensuring that the calculation is performed accurately and efficiently.

This approach also helps to keep the frontend code simpler and easier to maintain, as it can focus on displaying data and user interactions rather than complex calculations.

### Page Blocks

After having extensive experience in creating several startups and dozens of regular sites, we have concluded that Page-Blocks are the most convenient way to describe the visual and functional parts of an application in detail.

By dividing any project into Page-Blocks, you can ensure that each component is given the appropriate attention and that the overall user experience is enhanced. Importantly, Page-Blocks should not be seen as mere blocks that can only be located in the main content area but can be used throughout the project.

This allows for greater flexibility in design and ensures that the user interface is consistent and easy to navigate. Furthermore, utilizing variations and inheritance techniques can enable flexible customization of interface parts without breaking the logic of the main project, thereby ensuring that the application is functional and user-friendly..

### CI/CD

Implementing CI/CD (Continuous Integration/Continuous Deployment) is crucial for successful product development. We choose to utilize CI/CD in our projects for several reasons. It allows for faster and more frequent delivery of features and updates by automating the build, testing, and deployment processes. This ensures timely release and promotes efficient iteration. CI/CD enhances product quality and reliability through automated tests and continuous integration, reducing the risk of bugs and improving the user experience.

It fosters collaboration and transparency within development teams, keeping all members synchronized and promoting better communication and coordination. Furthermore, CI/CD enables the embracing of DevOps principles by automating tasks, encouraging collaboration and continuous improvement. In summary, our experience has shown that CI/CD is vital for exceptional product development, enabling faster delivery, improved quality, collaboration, and the implementation of DevOps practices.
