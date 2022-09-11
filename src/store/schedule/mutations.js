
export const SET_SCHEDULE = (state, props) => {
  state.groups = props.groups
  state.schema = props.schema.reverse()
}
