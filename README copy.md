[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11146225&assignment_repo_type=AssignmentRepo)
## Recap task

### Create your API routes

👉 Create a REST API using the user JSON data found in `data/users.json`. Your API must be RESTful with all CRUD routes (create, read, update, delete).

| Operation         | Path             | Response body shape                                                          |
| ----------------- | ---------------- | ---------------------------------------------------------------------------- |
| Get all users     | `/api/users`     | <code>{ success: true, payload: array of user objects } </code>              |
| Get user by id    | `/api/users/:id` | <code>{ success: true, payload: user object }</code>                         |
| Create new user   | `/api/users`     | <code>{ success: true, payload: newly created user object }</code>           |
| Update user by id | `/api/users/:id` | <code>{ success: true, payload: new user object (after replacement) }</code> |
| Delete user by id | `/api/users/:id` | <code>{ success: true, payload: deleted user } </code>                       |

Remember to break down the task and tackle it step by step.

- Start by looking at the data and familiarizing yourself with how it's structured.
- Make a plan for each CRUD route, and break down the logic in that plan until you can't break it down anymore!
- Code each route handler in the `app.js` file.
- Code each helper function in the `users.js` file.
  - Test each route with Postman or Thunder Client as you finish it before you move on to the next one!
  - Add, commit, and push after you complete each route/helper function.

## Bonus challenges (_These are optional if you're ready for an extra challenge!_)

⭐ If you've finished everything above and have time left over, keep developing! Think through what ideas you can come up with to improve functionality.

This can include:

- Implementing the correct HTTP response status code
- Making a front end to consume and display your data
- Additional routes that include searching the data using query strings
- Implementing middleware (start with a simple logger, and then explore what else you can add)
