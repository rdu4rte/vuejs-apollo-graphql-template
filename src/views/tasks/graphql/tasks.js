import gql from 'graphql-tag'

export const GET_TASKS = gql`
  query {
    getAll {
      _id
      content
      createdAt
      done
    }
  }
`
export const GET_DONE = gql`
  query {
    getByDone {
      _id
      content
      done
      createdAt
    }
  }
`

export const UPDATE_TASK = gql`
  mutation($content: String, $done: Boolean, $id: ObjectId!) {
    updateOne(updateContent: { content: $content, done: $done }, id: $id) {
      _id
      content
      createdAt
      done
    }
  }
`
