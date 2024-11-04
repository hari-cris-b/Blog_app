import express from "express";
import bodyParser from "body-parser";
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
// Get the current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
// Set the views directory
app.set('views', path.join(__dirname, 'views'));

// Set the view engine (assuming EJS)
app.set('view engine', 'ejs');

let posts = [];

// Home route to display posts
app.get("/", (req, res) => {
    const currentDate = new Date();

    // Calculate the time difference for each post
    const postsWithTimeAgo = posts.map(post => {
        const timeDiff = currentDate - post.postDate;
        const daysAgo = Math.floor(timeDiff / (1000 * 60 * 60 * 24)); // Convert milliseconds to days

        // Handle time display
        if (daysAgo === 0) {
            const hoursAgo = Math.floor(timeDiff / (1000 * 60 * 60));
            post.timeAgo = hoursAgo > 0 ? `${hoursAgo} hours ago` : "Just now";
        }
        return {
            ...post,
            daysAgo: daysAgo > 0 ? `${daysAgo} days ago` : "Today", // Handle "Today" case
            postDate: post.postDate.toLocaleString(), // Format post date for display (optional)
        };
    });

    res.render("index", { posts: postsWithTimeAgo });
});

// Route to render new post form
app.get("/new", (req, res) => {
    res.render("new");
});

// Route to handle new post creation
app.post("/new", (req, res) => {
    const newPost = {
        id: Date.now(),
        title: req.body.title,
        content: req.body.content,
        postDate: new Date(), // Store the current date
    };
    posts.push(newPost);
    res.redirect("/");
});

// About page route
app.get("/about", (req, res) => {
    res.render("about");
});

// Route to render edit post form
app.get("/edit/:id", (req, res) => {
    const post = posts.find(p => p.id == req.params.id);
    if (post) {
        res.render("edit", { post });
    } else {
        res.status(404).send("Post not found");
    }
});

// Route to handle post edits
app.post("/edit/:id", (req, res) => {
    const postIndex = posts.findIndex(p => p.id == req.params.id);
    if (postIndex !== -1) {
        posts[postIndex].title = req.body.title;
        posts[postIndex].content = req.body.content;
        res.redirect("/");
    } else {
        res.status(404).send("Post not found");
    }
});

// Route to handle post deletion
app.post("/delete/:id", (req, res) => {
    posts = posts.filter(p => p.id != req.params.id);
    res.redirect("/");
});

// Set up server to listen on specified port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});