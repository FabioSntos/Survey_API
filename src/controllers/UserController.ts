import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { UsersRepository } from '../repositories/UsersRepository';

class UserController {
 async create(req: Request, res:Response){
  const {name, email} = req.body;

  const userRepository = getCustomRepository(UsersRepository)

  const userAlreadyExist = await userRepository.findOne({
    email
  })
  if(userAlreadyExist) {
    return res.status(400).json({
      error: "Usuario existente!"
    })
  }
  const user = userRepository.create({
    name, email
  })

  await userRepository.save(user)

  return res.status(201).json(user);
 }
}

export { UserController };
