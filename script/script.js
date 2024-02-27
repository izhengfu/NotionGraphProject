const { Client } = require("@notionhq/client")

// Initializing a client
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

const {results} = await notion.databases.query({ database_id: process.env.NOTION_DB_ID });


await results.map((book:any) => {
    const bookProps: any = book.properties;
    books = [...books, {author: bookProps.Author.rich_text[0].plain_text, cover: 'https://covers.openlibrary.org/b/isbn/' + bookProps.ISBN.rich_text[0].plain_text + '-L.jpg', name: bookProps.Name.title[0].text.content}]
  })