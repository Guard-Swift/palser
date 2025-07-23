import { Router } from "express";

export default () => {

  const router = Router()

  router.get('/', (req, res) => {
    res.render('index', { title: 'Menu' })
  })

  return router
}