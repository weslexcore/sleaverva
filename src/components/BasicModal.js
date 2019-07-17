import React from 'react'
import { Modal } from 'semantic-ui-react'

const BasicModal = props => (
    <Modal trigger={props.children} basic size='small' closeIcon>
    {props.modal && props.modal.header}
    <Modal.Actions>
        {props.modal && props.modal.content }
    </Modal.Actions>
    </Modal>
)


export default BasicModal