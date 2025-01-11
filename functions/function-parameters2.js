var doSomething = function (activity, temp, isRaining) {
    if (isRaining) {
        console.log("Yikes, cannot do " + activity + "! Its raining. Stay indoors");
    }
    else {
        console.log("Lets do " + activity);
    }
};
doSomething("Hiking", 80, false);
doSomething("Cycling", 90, true);
//doSomething("Running");
doSomething("Swimming", 95);
