import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { addTodo } from '../actions'
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';

const styles = {
  inputTodo: {
    marginTop: 10,
    marginBottom: 10,
  },
};
let AddTodo = ({ dispatch, classes }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <div className={classes.inputTodo}>
          <TextField label="input todo"
            inputRef={node => {
              input = node
            }}
          />
          <Button variant="raised" type="submit">
            Add Todo
          </Button>
        </div>
      </form>
    </div>
  )
}
export default compose(connect(), withStyles(styles))(AddTodo)
