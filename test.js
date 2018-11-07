import test from 'ava';
import execa from 'execa';

test('main', async t => {
	const {stdout} = await execa('./cli.js', ['unicorn v1.2.3']);
	t.is(stdout, '1.2.3');
});
