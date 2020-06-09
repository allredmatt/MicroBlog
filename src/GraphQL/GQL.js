import {gql} from '@apollo/client';

export const BLOG = gql`
    mutation createMicro($author: ID!, $text: String!, $timestamp: Time!){
        createMicro(data:{
        text: $text
        timestamp: $timestamp
        author: {connect: $author}
        })
        {
        _id
        text
        timestamp
        }
    }
`;


export const UPDATE_FOLLOWERS = gql`
    mutation PartUpdateUser($id: ID!, $following: [String]) {
        partialUpdateUser(id: $id,
            data: {
                    following: $following
        }
        )
        {
            _id
            nickName    
            following
        }
    }
`;

export const ADD_USER = gql`
    mutation AddUser($nickName: String!) {
        createUser(data:{
            nickName: $nickName
            }) {
            _id
        }
    }
`;

export const GET_ALL_MICROS = gql`
    query{
    allMicros{
        data{
        timestamp 
        _id 
        text 
        author{_id nickName}
        }
    }
}`

export const GET_ALL_USERS = gql`
    query{
    allUsers{
        data{
        _id 
        nickName
        following
    }
    }
}`

export const USER_DETAILS = gql`
    query FindUsr($id: ID!){
    findUserByID(id: $id){
        _id
        nickName
		following
  }
}
    query {
    allUsers{
        data{
        _id 
        nickName
    }
    }
}`

export const MY_USER_LOCAL = gql`
    query{
        myID @client
        myNickName @client
    }`