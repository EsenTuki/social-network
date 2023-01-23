import profileReducer, { addPostActionCreator, deletePost } from "./profileReducer"
import { render, screen } from '@testing-library/react';

let state = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: '0' },
        { id: 2, message: "It's my first post", likesCount: '24' },
        { id: 3, message: 'WOW!', likesCount: '999' }
    ]
}

test('length of posts should be incremented', () => {
    // test data
    let action = addPostActionCreator("it-kamasutra.com")
    // action
    let newState = profileReducer(state, action)
    // expectation
    expect(newState.posts.length).toBe(4)
});

test('message of new post should be correct', () => {
    // test data
    let action = addPostActionCreator("it-kamasutra.com")
    // action
    let newState = profileReducer(state, action)
    // expectation
    expect(newState.posts[3].message).toBe("it-kamasutra.com")
});

test('after deleting length of posts should be decrease', () => {
    // test data
    let action = deletePost(1)
    // action
    let newState = profileReducer(state, action)
    // expectation
    expect(newState.posts.length).toBe(2)
});

test('after deleting length of posts shouldnt be decrement if id is incorrect', () => {
    // test data
    let action = deletePost(100000)
    // action
    let newState = profileReducer(state, action)
    // expectation
    expect(newState.posts.length).toBe(3)
});