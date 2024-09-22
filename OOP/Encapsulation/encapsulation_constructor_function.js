const Calculate = function() {
    let count = 0;

    this.increament = function() {
        count++;
    }
    this.decreament = () => {
        count--;
    }
    this.getCount = () => {
        console.log("count :",count);
    }
}

let object = new Calculate();
object.increament();
object.increament();
object.increament();
object.getCount();

object.decreament();
object.getCount();