export default (context)=>{
    const {app,redirect} =context
        if(!app.$cookies.get('token')){
            redirect('/login')
        }
}