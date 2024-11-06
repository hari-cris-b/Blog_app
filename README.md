# **Blog App**

A simple Node.js and Express.js based blogging platform that allows users to create, edit, delete, and view blog posts. This project demonstrates basic web application development using server-side rendering (SSR) with EJS templates.

## **Features**
- Create, edit, and delete blog posts.
- View all blog posts on the homepage.
- Responsive design for good user experience on both mobile and desktop devices.
- Express.js server rendering using EJS templates.
- Styled with Bootstrap for a clean UI.

## **Technologies Used**
- **Node.js**: JavaScript runtime for building server-side applications.
- **Express.js**: Web framework for Node.js.
- **EJS**: Templating engine for rendering server-side views.
- **CSS Framework**: Bootstrap for styling.
- **JavaScript**: For handling interactive elements in the front-end.
- **Vercel** (Optional): For hosting and deployment.

## **Installation**

### **1. Clone the repository**

```bash
git clone https://github.com/hari-cris-b/Blog_app.git
cd Blog_app
```

### **2. Install dependencies**

```bash
npm install
```

### **3. Run the app locally**

```bash
npm start
```

The application will run on `http://localhost:3000`.

## **File Structure**

```bash
├── public               # Contains static files like CSS, images, JavaScript
│   ├── css              # CSS files for styling
│   └── js               # JavaScript files (if any)
├── views                # EJS templates for rendering pages
│   ├── index.ejs        # Homepage template
│   ├── edit.ejs         # Template for editing a blog post
│   └── new.ejs          # Template for creating a new blog post
├── routes               # Routes to handle different HTTP requests
│   └── blogRoutes.js    # Route handlers for blog-related actions
├── app.js               # Main server file
├── package.json         # Project metadata and dependencies
└── README.md            # This file
```

## **Usage**

- **Creating a Post**: Navigate to `/new` and submit the form to create a new blog post.
- **Editing a Post**: Click the "Edit" button on any post and update its content.
- **Deleting a Post**: Click the "Delete" button on any post to remove it.

## **Deployment**

### **Deploying on Vercel**:

1. Sign up for a free Vercel account.
2. Install the Vercel CLI and deploy your app with the following command:

```bash
npm install -g vercel
vercel
```

3. Follow the prompts to configure your project and deploy.

Alternatively, connect your GitHub repository to Vercel for continuous deployment.

### **Deploying on Heroku**:

1. Sign up for a free Heroku account.
2. Install the Heroku CLI and login:

```bash
heroku login
```

3. Create a new Heroku app:

```bash
heroku create
```

4. Deploy the app:

```bash
git push heroku main
```

5. Open your app:

```bash
heroku open
```

## **Contributing**

If you would like to contribute, feel free to create a pull request or open an issue. Contributions are welcome!

## **License**

This project is open source and available under the [MIT License](LICENSE).
