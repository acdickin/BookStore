"use strict"

import {createStore} from 'redux'
import reducers from './reducers'
import {addToCart} from './actions/cartActions'
import {postBooks,deleteBooks,updateBooks} from './actions/bookActions'

const store= createStore(reducers)

store.subscribe(function(){
  console.log('current state is ' ,store.getState())
})

store.dispatch(postBooks(
  [{
     id:1,
     title:"Harry Pooter",
     description:"Magical boy who lived",
     price:33.33
  },
  {
    id:2,
    title:"Potato",
    description:"Kartoffel",
    price:24.42
 }]
))
store.dispatch(deleteBooks({id:1}))

store.dispatch(updateBooks(
    {
      id:2,
      title:"Potato Ed 2"
    }
  )
)


///carts
store.dispatch(addToCart({id:2}))
