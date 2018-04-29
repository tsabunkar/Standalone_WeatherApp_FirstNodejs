var getUser = (id, callback) => {

    console.log('in getUser vara')
    var user = {
        id : id,
        name : 'Tejas'
    };
    // setTimeout(() => {
    //     callback(user);
    // }, 2000)

    callback(user);
    
    console.log('out getUser vara')
};


getUser(12, (userObj)=>{
    console.log('in getUser callbackfun')
    console.log(userObj);
    console.log('out getUser callbackfun')

})