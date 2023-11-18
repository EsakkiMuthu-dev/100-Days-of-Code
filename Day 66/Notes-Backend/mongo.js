const mongoose = require('mongoose');

if (process.argv.length < 3) {
  console.log('Give the password as an argument');
  process.exit(1);
}

const password = process.argv[2];

const url = `mongodb+srv://esakkimuthu6842:${password}@cluster0.mnw5k9a.mongodb.net/noteApp?retryWrites=true&w=majority`;

mongoose.set('strictQuery', false);

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to the database!');
    
    // Fetch documents
    Note.find({}).then(result => {
      result.forEach(note => {
        console.log(note);
      });
      
      // Close the connection after fetching documents
      mongoose.connection.close();
    });
  })
  .catch(error => {
    console.error('Error connecting to the database:', error);
    process.exit(1);
  });

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
});

const Note = mongoose.model('Note', noteSchema);
