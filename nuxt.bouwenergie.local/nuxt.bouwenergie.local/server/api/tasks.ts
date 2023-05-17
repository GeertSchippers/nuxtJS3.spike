import tasks from '~~/data/tasks.json'

export default defineEventHandler(event => {

    if(event.req.method === 'POST'){
        console.log(event)
    }
    if(event.req.method === 'PATCH'){
        console.log(event)
    }
    if(event.req.method === 'DELETE'){
        console.log(event)
    }
console.log(event);
    return tasks
  })