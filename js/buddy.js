const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(response => response.json())
        .then(data => displayBuddies(data));
}
loadBuddies();
const displayBuddies = data => {
    // console.log(data);
    // console.log(data.results);
    const buddies = data.results;
    const buddiesdiv = document.getElementById('buddies');
    for (const buddy of buddies) {
        // console.log(buddy.email);
        // console.log(buddy.name.first, buddy.name.last);
        const p = document.createElement('p');
        p.innerText = `Name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last} Email: ${buddy.email}`;
        buddiesdiv.appendChild(p);
    }
}