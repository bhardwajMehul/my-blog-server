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
import User from 'App/Models/User'

Route.group(() => {
  Route.post('/user', 'UsersController.index')
  Route.put('/user', 'UsersController.updateUser')
  Route.delete('/user', 'UsersController.deleteUser')

  Route.post('/story', 'StoriesController.createStory')
  Route.put('/story/:id', 'StoriesController.updateStory')
  Route.delete('/story/:id', 'StoriesController.deleteStory')

  Route.post('/comment', '')
  Route.delete('/comment', '')
})
  .prefix('/api/v1')
  .middleware('auth:api')

Route.group(() => {
  Route.get('/stories', 'StoriesController.getStories')
  Route.get('/story/:id', 'StoriesController.getStory')
}).prefix('/api/v1')
