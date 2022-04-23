import React from 'react'
import { Button } from 'reactstrap';
import SaveIcon from '@material-ui/icons/Save';

export default function SaveButton(props) {
  return (
    <Button color="primary" size="lg" onClick={props.onSubmit}>
        <SaveIcon className="mr-2" />
        Save Changes
    </Button>
  )
}
