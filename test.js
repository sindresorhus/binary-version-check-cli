import test from 'ava';
import execa from 'execa';

test('main', async t => {
	await t.throwsAsync(execa('./cli.js', ['curl', '>=8']), {message: /doesn't satisfy/});
	await t.throwsAsync(execa('./cli.js', ['openssl', '>=10', '--args=version']), {message: /doesn't satisfy/});
});
