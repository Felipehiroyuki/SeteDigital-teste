// eslint-disable-next-line no-unused-vars
import { PrismaClient } from '@prisma/client'
import { IUser } from 'src/models/users.model'

const prisma = new PrismaClient()

const userDB = prisma.user

export const createUser = async (body: IUser ) => {
  try {

    const result = await userDB.create({
      data: {
        ...body
      }
    })

    return result
  } catch (error: any) {
    return error
  }
}

export const getUser = async (name: string ) => {
  try {

    const result = await userDB.findUnique({
      where: {
        name
      }
    })

    return result
  } catch (error: any) {
    return error
  }
}