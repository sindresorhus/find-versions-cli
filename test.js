import childProcess from 'child_process';
import test from 'ava';
import pify from 'pify';

test('main', async t => {
	const stdout = await pify(childProcess.execFile)('./cli.js', ['unicorn v1.2.3']);
	t.is(stdout.trim(), '1.2.3');
});

test('stdin', async t => {
	const stdout = await pify(childProcess.exec)('echo \'unicorn v1.2.3\' | ./cli.js');
	t.is(stdout.trim(), '1.2.3');
});
