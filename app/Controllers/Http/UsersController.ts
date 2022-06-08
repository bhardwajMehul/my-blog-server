import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from 'App/Models/User'

export default class UsersController {
  async index({ request }: HttpContextContract) {
    const { email } = request.only(['email'])
    const user = await User.firstOrCreate({ email: email })
    return user.serialize({ fields: { omit: ['password'] } })
  }

  async updateUser({ request }: HttpContextContract) {
    const { id } = request.all()
    const user = await User.findBy('id', id)
    const userData = request.all()
    await user?.merge(userData).save()
    return user?.serialize({ fields: { omit: ['password'] } })
  }

  async deleteUser({ request, response }: HttpContextContract) {
    const { id } = request.all()
    const user = await User.findBy('id', id)
    user?.delete()
    response.status(200)
    return { success: 'User deleted successfully.' }
  }
}
