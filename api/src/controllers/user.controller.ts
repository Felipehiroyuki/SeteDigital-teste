import express from 'express'
import { createUser, getUser } from 'src/services/users.service'

const router = express.Router()

router.post('/cadastro', async (req: express.Request, res: express.Response) => {
  try {
    if(req.body?.name && req.body?.age){
      const result = await createUser({
        name: req.body?.name || null,
        age: req.body?.age || null
      })

      if(result)
        return res.status(200).json({message: "Usuário criado com sucesso", result })
      else
        return res.status(400).json({message: "Ops ocorreu um erro !", error: result })
    } else {
      return res.status(422).json({message: "Nome e idade obrigatório", error: req.body })
    }
  } catch (error: any) {
    return res.status(400).json({message: 'Ops ocorreu um erro !', result: null, error })
  }
})

router.post('/login', async (req: express.Request, res: express.Response) => {
  try {
    const name = req.body?.name

    if(name){
      const result = await getUser(name)
      if(!result){
        return res.status(404).json({message: "Usuário não encontrado", name, result })  
      }
      return res.status(200).json({message: "Usuário encontrado com sucesso", result })
    } else {
      return res.status(422).json({message: "Parametro nome não informado", error: name })
    }
  } catch (error: any) {
    return res.status(400).json({ result: null, error })
  }
})

export default router