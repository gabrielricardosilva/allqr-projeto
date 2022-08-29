import { Router } from 'express'
import * as PageController from '../controllers/pageController'
import * as SearchController from '../controllers/searchController'

const router = Router()

router.get('/',PageController.home)
router.get('/pedidos',PageController.pedidos)
router.get('/historia',PageController.historia)
router.get('/cardapio',PageController.cardapio)
router.get('/finalizar',PageController.finalizar)

router.get('/search',SearchController.search)

export default router
