function BooksMap(){
    const books = [
        {title: "Time Machine", author: "H.G. Wells"},
        {title: "Origin of species", author: "Charles Darvin"},
        {title: "Oddessy", author: "Homer"}
    ];

    const bookList = books.map((book,index)=>(
        <li key = {index}>
            <h3>{book.title}</h3> 
            <p>by {book.author}</p>
        </li>
    ))

    const items=[
        {id:1, name:"item1"},
        {id:2, name:"item2"},
        {id:3, name:"item3"}
    ]

    function ItemList(){
        return(
            <ul>
                {items.map((item)=>(
                    <li key={item.id}>{item.name}</li>  
                ))}
            </ul>

        )
    }

    return(<>

    <ul>
            {bookList}
    </ul>
    
      <ul>
                {ItemList()}
            </ul>
    </>
        
    )
}

export default BooksMap;