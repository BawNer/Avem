export const getSchema = state => group => state.schema.filter(a => a.group == group)[0].schema

export const getGroups = state => state.groups