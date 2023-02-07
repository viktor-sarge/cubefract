import cube from "./cube";

export class dockpoints {
    constructor(x, y, size, N=false, E=false, S=false, W=false) {
        this.parentSize = size;
        this.parentX = x;
        this.parentY = y;
        this.N = N;
        this.E = E;
        this.S = S;
        this.W = W;
        this.members = [new cube(x, y, size)];
        this.populateFreeSides();
    }

    populateFreeSides() {
        let x, y; 
        const size = this.parentSize/2-1;
        if(!this.N && size > 2) {
            x = this.parentX + this.parentSize/4;
            y = this.parentY - size +1;
            this.members.push(new dockpoints(x,y,size, false, false, true, false));
        }

        if(!this.S && size > 2) {
            x = this.parentX + this.parentSize/4;
            y = this.parentY + this.parentSize - 1;
            this.members.push(new dockpoints(x,y,size, true, false, false, false));
        }

        if(!this.E && size > 2) {
            x = this.parentX + this.parentSize - 1;
            y = this.parentY + this.parentSize / 4;
            this.members.push(new dockpoints(x,y,size, false, false, false, true));
        }

        if(!this.W && size > 2) {
            x = this.parentX - size + 1;
            y = this.parentY + this.parentSize / 4;
            this.members.push(new dockpoints(x,y,size, false, true, false, false));
        }
    }

    plot(ctx) {
        this.members.forEach(member => member.plot(ctx))
    }
}