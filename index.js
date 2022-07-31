const express = require("express");
const app = express();
const cors = require("cors");
const knex = require("./database/database");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Server is ready");
});

app.get("/students", (req, res) => {
    knex.select()
        .from("students")
        .then((students) => {
            res.send(students);
        });
});

app.get("/students/:id", (req, res) => {
    const { id } = req.params;
    knex.where("id", id)
        .select()
        .from("students")
        .then((students) => {
            res.send(students);
        });
});

app.post("/students", async (req, res) => {
    try {
        const { firstName, lastName } = req.body;
        const newStudent = await knex("students").insert({
            firstName: firstName,
            lastName: lastName,
        });
        res.json(newStudent);
    } catch (error) {
        console.error(error.message);
    }
});

// app.post("/students", (req, res) => {
//     knex("students")
//         .insert({
//             firstName: "Manish",
//             lastName: "Mulchandnai",
//         })
//         .then(() => {
//             knex.select()
//                 .from("students")
//                 .then((students) => {
//                     res.send(students);
//                 });
//         });
// });

app.put("/students/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { firstName, lastName } = req.body;
        const updatedStudent = await knex("students")
            .where("id", id)
            .update({ firstName: firstName, lastName: lastName });
        res.json(updatedStudent);
    } catch (error) {
        console.error(error.message);
    }
});

app.delete("/students/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deletedStudent = await knex("students").where("id", id).del();
        res.json(deletedStudent);
    } catch (error) {
        console.error(error.message);
    }
});

app.get("/books", (req, res) => {
    knex.select()
        .from("books")
        .then((students) => {
            res.send(students);
        });
});

app.post("/books", async (req, res) => {
    try {
        const { name, author, borrowedBy, borrowDate, returnDate } = req.body;
        const newBook = await knex("books").insert({
            name: name,
            author: author,
            borrowedBy: borrowedBy,
            borrowDate: borrowDate,
            returnDate: returnDate,
        });
        res.json(newBook);
    } catch (error) {
        console.error(error.message);
    }
});

app.put("/books/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { name, author, borrowedBy, borrowDate, returnDate } = req.body;
        const updatedBook = await knex("books").where("id", id).update({
            name: name,
            author: author,
            borrowedBy: borrowedBy,
            borrowDate: borrowDate,
            returnDate: returnDate,
        });
        res.json(updatedBook);
    } catch (error) {
        console.error(error.message);
    }
});

app.delete("/books/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deletedBook = await knex("books").where("id", id).del();
        res.json(deletedBook);
    } catch (error) {
        console.error(error.message);
    }
});

app.listen(5000, () => {
    console.log("Server has started at port 5000");
});
