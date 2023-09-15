import { useState } from "react";

import BookCreate from "./components/BookCreat";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const CreateBook = (title) => {
    console.log("need to add book with:", title);
  };

  return (
    <div>
      <BookCreate onCreate={CreateBook} />
    </div>
  );
}

export default App;
