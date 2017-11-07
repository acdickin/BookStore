
export const postBooks = (book) =>{
  return {
    type:"POST_BOOK",
    payload: book
  }
}

export const deleteBooks = (book) =>{
  return {
    type:"DELETE_BOOK",
    payload:book
  }
}

export const updateBooks = (book) =>{
  return {
    type:"UPDATE_BOOK",
    payload: book
  }
}
