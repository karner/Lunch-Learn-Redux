
# Lunch & Learn

## Handling global state with Redux

---
---

## Objectives

- Motivation
- Principles of Redux
- Look at some code

---

## Motivation

Redux is trying to solve issues with current MVC/MVVM approaches.

---
---

### Issues

- Complex application state

This complexity is difficult to handle as **we're mixing two concepts** that are very hard for the human mind to reason about: **mutation and asynchronicity.**

---

## Complex application state

- Server responses
- Cached data
- Sensor data
- Locally created data that has not yet been persisted to the server
- UI state
- Navigation

---
---

## Things we should also do

- Optimistic updates
- Fetching data before navigating

---

Redux is a predictable state container for JavaScript apps. It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. 

It complements React's composable view components by utilizing a unidirectional data flow. It's more of a pattern rather than a formal framework.

---

## Three principles of Redux

1. **Single source of truth**

The [**state**](https://redux.js.org/glossary#state) of your whole application is stored in an object tree within a single [**store**](https://redux.js.org/glossary#store)**.**
2. **State is read-only**

The only way to change the state is to emit an [**action**](https://redux.js.org/glossary#action), an object describing what happened.
3. **Changes are made with pure functions**

To specify how the state tree is transformed by actions, you write pure [**reducers**](https://redux.js.org/glossary#reducer)**.**

---

## Data flow

Redux architecture revolves around a **strict unidirectional data flow**.

![Redux data flow](https://jrsinclair.com/assets/redux-flow.png)

---

## Async - redux-saga

![Redux Saga flow](https://image.slidesharecdn.com/redux-saga-170510234042/95/redux-saga-managing-your-side-effects-also-generators-in-es6-5-638.jpg?cb=1494492153)

---

# Let's look at some code now
