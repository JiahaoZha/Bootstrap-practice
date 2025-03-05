const action ={
    type: 'LOGIN'
  }

  function actionCreator(){
    return action()
  }

  store.dispatch(loginAction())