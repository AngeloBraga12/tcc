const searchBar = document.getElementById("searchBar");
searchBar.addEventListener("keydown", function() {
    const searchTerm = searchBar.value;

    // Do a search based on the search term
    // e.g., fetch the data from an API and display it in the page
});

const searchIcon = document.getElementById("icons");

searchIcon.addEventListener("click", function() {
    const searchTerm = searchBar.value;

    // TODO: Do a search based on the search term
    // For example, you could use an API to search for a website or product

    // Notify the user of the search results
    alert(`Search results for "${searchTerm}"`);
});