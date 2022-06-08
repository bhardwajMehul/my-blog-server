import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Comment from 'App/Models/Comment'

export default class CommentsController {
  async create({ request }: HttpContextContract) {
    const { id, comment } = request.all()
    const row = await Comment.create({ user_id: id, comments: comment })
    return row
  }
}
