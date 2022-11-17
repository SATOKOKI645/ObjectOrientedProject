// 鳥クラスを定義
class Bird {
	// プライベートな変数
	#className = "鳥類";

	constructor(name) {
		this.name = name;
	}

	cry = (sound) => {
		console.log(`${this.name}が「${sound}」と鳴きました`);
	};

	introduce = () => {
		console.log(`私は${this.#className}の${this.name}です`);
	};

	static explain = () => {
		console.log(`これは鳥のクラスです`);
	};
}

class FlyableBird extends Bird {
	constructor(name) {
		super(name);
	}

	fly = () => {
		console.log(`${this.name}が飛びました!!!!`);
	};
}

Bird.explain();

// ペンギンのBirdインスタンスを生成
const penguin = new Bird("ペンギン");
// ペンギンインスタンスから自己紹介する
penguin.introduce(); // 私は鳥類のペンギンです

// タカのBirdインスタンスを生成
const hawk = new FlyableBird("タカ");
hawk.cry(`ピィーーーー！`); //鳴き声の変数を代入する
hawk.fly(); //タカが飛びました
