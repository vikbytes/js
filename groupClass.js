class Group {
    constructor() {
        this.members = [];
    }

    add(value) {
        if(this.members.includes(value)) {
            // do nothing
        }
        else {
            this.members.push(value);
        }
    }
    delete(value) {
        if(this.members.includes(value)) {
            this.members = this.members.filter(equals(value))
        }
    }
    has(value) {
        //
    }
    equals(first, second) {
        if(first === second) {
            return false;
        }
        else {
            return true;
        }
    }

    static from() {
        //
    }
}