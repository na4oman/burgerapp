import React from 'react'

import Modal from '../../components/UI/Modal/Modal'
import useHttpErrorHandler from '../../hooks/http-error-handler'
import WrapperComponent from '../WrapperComponent/WrapperComponent'

const withErrorHandler = (WrappedComponent, axios) => {
  return (props) => {
    const [error, clearError] = useHttpErrorHandler(axios)

    return (
      <WrapperComponent>
        <Modal show={error} modalCosed={clearError}>
          {error ? error.message : null}
        </Modal>
        <WrappedComponent {...props} />
      </WrapperComponent>
    )
  }
}

export default withErrorHandler
