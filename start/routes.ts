/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.group(() => {
  Route.get('/stories', () => {
    return []
  })

  Route.get('/story/:id', () => {
    return { content: {} }
  })

  Route.post('/story/:id', () => {
    return { content: {} }
  })

  Route.get('/user', () => {
    return { user: {} }
  })

  Route.put('story/:id', () => {
    return { content: {} }
  })

  Route.delete('/user', () => {
    return { user: null }
  })
}).prefix('/api/v1')
