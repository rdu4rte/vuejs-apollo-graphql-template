import gql from 'graphql-tag'

export const GET_TASKS = gql`
  query {
    todos {
      _id
      content
      createdAt
      done
    }
  }
`
export const UPDATE_TASK = gql`
  mutation($content: String, $done: Boolean, $id: ObjectId!) {
    update(todo: { content: $content, done: $done }, id: $id) {
      _id
      content
      createdAt
      done
    }
  }
`
