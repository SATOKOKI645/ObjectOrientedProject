// 手続き方プラグラミング
{
	const octuples = [];

	for (let n = 0; n < 100; n += 1) {
		if (n % 8 === 0) {
			octuples.push(n);
		}
	}
	console.log(octuples);
}

// 関数型プラグラミング
{
	const range = (start, end) =>
		[...Array(end - start)].map((_, n) => n + start);
	const octuples = range(1, 100).filter((n) => n % 8 === 0);
	console.log(octuples);
}
