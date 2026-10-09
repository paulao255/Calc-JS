function print_error()
{
	process.stderr.write(`Fatal error (${process.argv[3]})!\n`);
	process.stderr.write(`Syntax: ${process.argv[0]} ${process.argv[1]} n1 +|-|*|/|%|^|// n2...\n`);
}
function main()
{
	const n =
	[
		Number(process.argv[2]),
		Number(process.argv[4])
	];

	if(isNaN(n[0]) || isNaN(n[1]))
	{
		print_error();
		process.exit(1);
	}

	if(process.argv[3] === "+")
	{
		process.stdout.write(`Result: ${n[0] + n[1]}\n`);
	}

	else if(process.argv[3] === "-")
	{
		process.stdout.write(`Result: ${n[0] - n[1]}\n`);
	}

	else if(process.argv[3] === "*")
	{
		process.stdout.write(`Result: ${n[0] * n[1]}\n`);
	}

	else if(process.argv[3] === "/")
	{
		process.stdout.write(`Result: ${n[0] / n[1]}\n`);
	}

	else if(process.argv[3] === "%")
	{
		process.stdout.write(`Result: ${n[0] % n[1]}\n`);
	}

	else if(process.argv[3] === "^")
	{
		process.stdout.write(`Result: ${Math.pow(n[0], n[1])}\n`);
	}

	else if(process.argv[3] === "//")
	{
		process.stdout.write(`Result: ${Math.pow(n[0], 1 / n[1])}\n`);
	}

	else
	{
		print_error();
		process.exit(1);
	}

	return 0;
}

process.exit(main());
