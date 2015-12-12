import test from 'ava';
import execa from 'execa';

test(async t => {
	await t.throws(execa('./cli.js', ['curl', '>=8']), /doesn't satisfy/);
	await t.throws(execa('./cli.js', ['openssl', '>=10', '--args=version']), /doesn't satisfy/);
});
