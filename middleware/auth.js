export default (context)=>{
    const {app,redirect,route} =context
        if(!app.$cookies.get('token')&&route.path!=='/login'){
            redirect('/login')
        }
}