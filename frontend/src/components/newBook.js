const newBook =()=>{
  return (
    <section>
      <form>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title"/>
        <label htmlFor="description">Description</label>
        <input type="text" name="description" id="description"/>
        <label htmlFor="mainCharacters">Main Characters</label>
        <input type="text" name="mainCharacters" id="mainCharacters"/>
        <select name="genre" id="genre">
          <option value="Accion"></option>
          <option value="Aventura"></option>
          <option value="Ciencia Ficción"></option>
          <option value="Clásicos"></option>
          <option value="Historias Cortas"></option>
          <option value="Históricas"></option>
          <option value="Humor"></option>
          <option value="Romance"></option>
          <option value="Suspenso"></option>
          <option value="Terror"></option>
        </select>
      </form>
    </section>
  )
}
export default newBook