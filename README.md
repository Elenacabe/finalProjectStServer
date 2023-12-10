
AUTH ROUTES 
Base URL `/api/auth`

| HTTP Method   | URI path      | Description           |
|---------------|---------------|-----------------------|
| POST          | `/signUp`     | SignUp User           |
| POST          | `/logIn`      | LogIn User            |
| GET           | `/verify`     | Verify Auth TOKEN     |
______________________________________________________


PROFILE ROUTES 
Base URL `api/profile`

| HTTP Method   | URI path       | Description           |
|---------------|----------------|-----------------------|
| GET           | `/edit/:_id`   | Edit matching ID user |
| PUT           | `/edit/:_id`   | Edit matching ID user |
| DELETE        | `/delete:/_id` | Edit matching ID user |
_____________________________________________________

STORIES ROUTES 
Base URL `api/stories`

| HTTP Method | URI path            | Description                           |
|-------------|---------------------|---------------------------------------|
| POST        | /newStory           | Create new microStory                 |
| GET         | /getAllStories      | List of microStory (filtered by rate) |
| GET         | /details/:_id       | Matching ID microStory details        |
| PUT         | /edit/:_id          | Edit Matching ID microStory details   |
| DELETE      | /delete/:_id        | Delete Matching ID microStory details |
| BaseURL     |                     | /stories                              |
___________________________________________________________________________