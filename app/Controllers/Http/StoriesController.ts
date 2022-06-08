import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Stories from 'App/Models/Story'

export default class StoriesController {
  async getStories() {
    const stories = await Stories.all()
    return stories
  }

  async getStory({ request }: HttpContextContract) {
    const story = await Stories.findBy('id', request.param('id'))
    return story
  }

  async createStory({ request }: HttpContextContract) {
    const { title, content, id } = request.all()
    const story = await Stories.create({ content, title, user_id: id })
    return story.serialize()
  }

  async updateStory({ request }: HttpContextContract) {
    const story = await Stories.findBy('id', request.param('id'))
    story?.merge(request.all())
    story?.save()
    return story
  }

  async deleteStory({ request }: HttpContextContract) {
    const story = await Stories.findBy('id', request.param('id'))
    story?.delete()
    return { success: 'Story deleted successfully.' }
  }
}
