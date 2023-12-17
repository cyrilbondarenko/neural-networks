
# Neural Networks

Neural Networks - a project created as my course project for discipline "Web Development".

The app is designed for learning about neural networks, articles and books about them.

## Functionality
 - users can explore articles and information about books in a convenient way
 - administrator can add new articles to the site without knowledge of HTML markup, using a convenient WYSIWYG editor

## 🛠 Stack
- Frontend: React, Next.js, SCSS, Apollo, GraphQL
- Backend: PHP, Wordpress, GraphQL
- Database: MySQL/MariaDB



## Deployment

You will need a PHP web server and a MySQL/MariaDB database to deploy the application.

### Database & Backend

1. Place the files from directory on your PHP server
2. Open https://YOUR_DOMAIN/install.php in browser and follow the instructions
3. Specify the data to access the database
4. (Optionally) Change the data for accessing the admin panel
5. Once installed, the admin panel will be available at: https://YOUR_DOMAIN/wp-admin

### Frontend

1. Open directory in terminal
2. Replace "neural-networks" in ```src/apolloClient.ts``` and ```next.config.js``` with your domain
3. Run:
```
  npm i
```
4. And then:
```
  npm run dev
```

