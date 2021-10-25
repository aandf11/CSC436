function userReducer (state, action) {
    switch (action.type) {
      case 'LOGIN':
      case 'REGISTER':
        return action.username
        case 'LOGOUT':
          return ''
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
           id: action.id
           }
           return [ newPost, ...state ]

           case 'TOGGLE_TODO':

            return state.map((todo) =>todo.id === action.id ? {  ...todo, complete:
               action.complete, dateCompleted: action.dateCompleted,}: todo);
          

           case 'DELETE_TODO':
             return state.filter(todo => todo.id  !== action.id);

                
            case 'FETCH_TODOS':
                return action.todos

           default:
             return state
            }
          }    


          export default function appReducer(state, action){
              return{
                  user: userReducer(state.user, action),
                  todos: postReducer(state.todos, action)
              }
          }