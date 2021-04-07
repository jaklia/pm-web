import createSagaMiddleware from '@redux-saga/core'
import { combineReducers, createStore, applyMiddleware } from 'redux'
import { rootSaga } from '../state/saga'
import { appRootReducer } from '../state/store'

export function configureStore() {
  const sagaMiddleWare = createSagaMiddleware()

  const DeepRootReducer = combineReducers({
    app: appRootReducer
  })
  const store = createStore(DeepRootReducer, applyMiddleware(sagaMiddleWare))

  sagaMiddleWare.run(rootSaga)

  return { store }
}
