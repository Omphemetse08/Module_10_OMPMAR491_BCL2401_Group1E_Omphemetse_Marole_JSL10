document.addEventListener("DOMContentLoaded", () => {
  // **Room 1 - Event Listener & Result ID**
  document.getElementById("solveRoom1").addEventListener("click", () => {
    fetch("books.json")
      .then((response) => response.json())
      .then((books) => {
        const mostRecentBook = findMostRecentBook(books);
        document.getElementById(
          "room1Result"
        ).textContent = `The key to the next room is: ${mostRecentBook.title}`;
      });
  });

  // **Room 2 - Missing async & Intersection**
  document.getElementById("solveRoom2").addEventListener("click", () => {
    const jsConcepts = new Set(["closure", "scope", "hoisting"]);
    const reactConcepts = new Set(["components", "jsx", "hooks", "async"]); // Added 'async'
    const commonConcepts = new Set(
      [...jsConcepts].filter((concept) => reactConcepts.has(concept))
    ); // Use filter for intersection
    document.getElementById(
      "room2Result"
    ).textContent = `The code to unlock the door is: ${Array.from(
      commonConcepts
    ).join(", ")}`;
  });
});
