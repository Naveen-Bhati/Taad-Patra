import React, { useEffect, useState } from "react";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainScreen from "../../components/Header/MainScreen";
import classes from "./MyNotes.module.css";

import axios from 'axios'

const MyNotes = () => {
    const [notes, setNotes] = useState([])


    useEffect(() => {

        const fetchNotes = async () => {
            const { data } = await axios.get("/api/notes")

            setNotes(data)
        }

        fetchNotes();


    }, [])
    console.log(notes);


    const deleteNoteHandler = () => {
        if (window.confirm("Are you sure you want to delete?")) {
        }
    };
    return (
        <MainScreen title="Welcome Back Professor Dumbledore...">
            <Link to="/createnode">
                <Button
                    style={{ marginLeft: 10, marginBottom: 6 }}
                    size="md"
                    variant="outline-light"
                >
                    Create New Note
                </Button>
            </Link>
            {notes.map((note) => {
                return (
                    <Accordion key={note._id}>
                        <Card style={{ margin: 10 }} >
                            <Card.Header style={{ display: "flex", background: "#bdbdbd" }}>
                                <span className={classes.titleSpan}>
                                    <Accordion.Toggle as={Card.Text} variant="link" eventKey="0">
                                        {note.title}
                                    </Accordion.Toggle>
                                </span>
                                <div>
                                    <Button
                                        style={{ width: "100px", border: "1px solid lightgrey" }}
                                        variant="outline-light"
                                        className="mx-2"
                                        href={`/note/${note._id}`}
                                    >
                                        Edit
                                    </Button>
                                    <Button
                                        style={{ width: "100px", border: "1px solid white" }}
                                        variant="outline-danger"
                                        className="mx-2"
                                        onClick={deleteNoteHandler}
                                    >
                                        Delete
                                    </Button>
                                </div>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <h4>
                                        <Badge style={{ background: "#43cc29", padding: "5px" }}>
                                            Category - {note.category}
                                        </Badge>
                                    </h4>
                                    <blockquote className="blockquote mb-0">
                                        <p>{note.content}</p>
                                        <footer className="blockquote-footer">
                                            Created on date
                                        </footer>
                                    </blockquote>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                );
            })}
        </MainScreen>
    );
};

export default MyNotes;
