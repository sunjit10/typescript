const doSomething = (activity: string, temp: number, isRaining: boolean) => {

      if (isRaining) {
        console.log("Yikes, cannot do " + activity + "! Its raining. Stay indoors");
      } else {
        console.log("Lets do " + activity);
      }
};

doSomething("Hiking", 80, false);
doSomething("Cycling", 90, true);

// TS will not allow below, has to call with 3 parameters and with right type
//doSomething("Running");
//doSomething("Swimming", 95);
