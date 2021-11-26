function userReducer (state, action) {
    switch (action.type) {
      case 'LOGIN':
      // case 'REGISTER':
      //   return action.username
      //   case 'LOGOUT':
      //     return ''

    case 'REGISTER':
            return {
                'username': action.username,
                'access_token': action.access_token
            }
        case 'LOGOUT':
            return {
                'username': undefined,
                'access_token': undefined
            }

          default:
            return state
          }
        }


        function usersReducer (state, action) {
          switch (action.type) {
              case 'FETCH_USERS':
                  return action.users
              default:
                  return state
          }   
      }

  function postReducer (state, action) {
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    switch (action.type) {
      case 'CREATE_TODO':
        const newPost = {
           title: action.title,
           description: action.description,
           //content: action.content,
           dateCreated:today.toUTCString(),
           complete: false,
           dateCompleted: undefined,
           _id: action.todoId
           }
           return [ newPost, ...state ]

           case 'TOGGLE_TODO':

            return state.map((todo) =>todo._id === action.todoId ? {  ...todo, complete:
               action.complete, dateCompleted: action.dateCompleted,}: todo);
          

           case 'DELETE_TODO':
             return state.filter(todo => todo._id  !== action.todoId);

                
            case 'FETCH_TODOS':
                return action.todos

           default:
             return state
            }
          }    


          export default function appReducer(state, action){
              return{
                  user: userReducer(state.user, action),
                  todos: postReducer(state.todos, action),
                  users: usersReducer(state.users, action)
              }
          }