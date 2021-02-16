const Book = require('../models/Book')

const bookController = {
  createBook: (req,res) => {
    const book = req.body.book
    var url = []
    book.genre==='Acción' 
    ? url.push("https://media.istockphoto.com/illustrations/after-the-war-in-battlefield-illustration-id1133395584?k=6&m=1133395584&s=612x612&w=0&h=7Mt6MDN_pcjZChU1mog6VW1DpOZlXPpoGQas-7nqtW8=")
    : book.genre==='Aventura' 
    ? url.push("https://img.freepik.com/free-vector/explorer-with-backpack-background_23-2148159527.jpg?size=626&ext=jpg")
    : book.genre==='Clásicos'
    ? url.push('https://lithub.com/wp-content/uploads/2018/04/a1a64211b2e1f8dbc07546bcc2d25352.jpg')
    : book.genre==='Ciencia Ficción'
    ? url.push('http://s2.thingpic.com/images/7z/DABz323r1rhXM5f5dK3oCiZ2.jpeg')
    : book.genre==='Historias Cortas'
    ? url.push('https://image.freepik.com/free-vector/fantastic-stories-illustration_23-2147534105.jpg')
    : book.genre==='Históricas'
    ? url.push('https://cdn1.iconfinder.com/data/icons/landscape-v-2/512/Landscape_Circle_2_512px_00025-512.png')
    : book.genre==='Humor'
    ? url.push('https://thumbs.dreamstime.com/b/drag%C3%B3n-rojo-divertido-en-estilo-de-la-historieta-134547157.jpg')
    : book.genre==='Romance'
    ? url.push('https://cdn.architecturendesign.net/wp-content/uploads/2017/09/AD-Love-Illustrations-Hyocheon-Jeong-12.jpg')
    : book.genre==='Suspenso'
    ? url.push('https://st2.depositphotos.com/1998651/6007/v/600/depositphotos_60075979-stock-illustration-dark-labyrinth-with-exit-to.jpg')
    : book.genre==='Terror'
    && url.push('https://img.maspormas.com/2017/08/bosque.jpg')

    const {title, description, mainCharacters, genre, 
      user, stars, views, chapters, image} = book
    const createBook = new Book({title, description, mainCharacters, genre:{genre, image: url[0]}, 
      user, stars, views, chapters, image})
    createBook.save()
    .then( async createBook => {
      const book = await createBook.populate('user').execPopulate() 
      res.json({success: true, response: book})})
    .catch(error => res.json({success: false, error}))
  }
}


module.exports = bookController