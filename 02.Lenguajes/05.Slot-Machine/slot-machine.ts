class SlotMachine {
	slot1: boolean;
	slot2: boolean;
	slot3: boolean;
	coins: number;
	message: string;
	round: boolean;

	constructor() {
		this.coins = 0;
		this.slot1 = false;
		this.slot2 = false;
		this.slot3 = false;
		this.message = "";
		this.round = false;
	}

	play() {
		++this.coins;
		this.slot1 = Math.random() > 0.5;
		this.slot2 = Math.random() > 0.5;
		this.slot3 = Math.random() > 0.5;
		this.round = this.slot1 && this.slot2 && this.slot3;

		this.message =
			this.round ?
				`Congratulations!!!. You won ${this.coins} coins!!`
			:	`Good luck next time!!`;

		if (this.round) this.coins = 0;

		return this.message;
	}
}

const machine1 = new SlotMachine();
console.log(`%cClass Created            `, "font-weight: bold");
console.log({ ...machine1 });
//
console.log(`%cFirst Round            `, "font-weight: bold");
console.log(machine1.play());
console.log({ ...machine1 });
//
console.log(`%c2nd Round            `, "font-weight: bold");
console.log(machine1.play());
console.log({ ...machine1 });
//
console.log(`%c3rd Round            `, "font-weight: bold");
console.log(machine1.play());
console.log({ ...machine1 });
//
console.log(`%c4rd Round            `, "font-weight: bold");
console.log(machine1.play());
console.log({ ...machine1 });
//
console.log(`%c5th Round            `, "font-weight: bold");
console.log(machine1.play());
console.log({ ...machine1 });
