async function main() {
  try {
    await client.connect();

    const db = client.db('mymoviedb');
    const games = db.collection('games');

    // Insert a movie document
    const result = await games.insertOne({
      "title": "The Shawshank Redemption",
      "year": 1994,
      "description": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      "director": "Frank Darabont",
      "genre": ["Drama"],
      "rating": 9.3,
      "cast": [
        {
          "actor": "Tim Robbins",
          "role": "Andy Dufresne"
        },
        {
          "actor": "Morgan Freeman",
          "role": "Ellis Redding"
        }
      ]
    });

    console.log(`Inserted a movie with ID: ${result.insertedId}`);

    // Find all games with a rating greater than 8.5
    const gamesRating8p5 = await games.find({ rating: { $gt: 8.5 } }).toArray();
    console.log(gamesRating8p5);

  } catch (error) {
    console.error('Error connecting to the database:', error);
  } finally {
    await client.close();
  }
}

main().catch(console.error);