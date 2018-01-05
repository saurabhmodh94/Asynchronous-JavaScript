// PROBLEM
document.getElementById('prob').onclick = function () {
    function a() {
        setTimeout(function () { console.log("A"); }, 2000);
    }

    function b() {
        setTimeout(function () { console.log("B"); }, 1000);
    }

    a();
    b();
}



// Callback
document.getElementById('sol1').onclick = function () {
    function a(callback) {
        setTimeout(function () { console.log("A"); callback(); }, 2000);
    }

    function b() {
        setTimeout(function () { console.log("B"); }, 1000);
    }

    a(b);
}


// Promises
document.getElementById('sol2').onclick = function () {
    function a() {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                console.log("A");
                let err = false;
                if (!err) {
                    resolve();
                } else {
                    reject("Something Went Wrong!")
                }
            }, 2000);
        })
    }

    function b() {
        setTimeout(function () { console.log("B"); }, 1000);
    }

    // Use of Arrow Func.
    a().then(b).catch(err => console.log(err));
}



// Async/Await with Promises
document.getElementById('sol3').onclick = function () {
    async function a() {
        let res = new Promise(function (resolve, reject) {
            setTimeout(function () {
                console.log("A");
                let err = false;
                if (!err) {
                    resolve();
                } else {
                    reject()
                }
            }, 2000);
        })
        let response = await res;
        return response;
    }

    function b() {
        setTimeout(function () { console.log("B"); }, 1000);
    }

    a()
        .then(() => b())
        .catch(() => { });
}
