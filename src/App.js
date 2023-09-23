import { useState } from "react";

import BookCreate from "./components/BookCreat";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const CreateBook = (title) => {
    const updatedBooks = [
      ...books,
      { id: Math.floor(Math.random() * 9999), title },
    ];

    setBooks(updatedBooks);
  };

  const editBookByID = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }

      return book;
    });

    setBooks(updatedBooks);
  };

  const deleteBookByID = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={books} onEdit={editBookByID} onDelete={deleteBookByID} />
      <BookCreate onCreate={CreateBook} />
    </div>
  );
}

export default App;
