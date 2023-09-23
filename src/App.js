import { useState } from "react";

import BookCreate from "./components/BookCreat";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const deleteBookByID = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  const CreateBook = (title) => {
    const updatedBooks = [
      ...books,
      { id: Math.floor(Math.random() * 9999), title },
    ];

    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <BookList books={books} onDelete={deleteBookByID} />
      <BookCreate onCreate={CreateBook} />
    </div>
  );
}

export default App;
