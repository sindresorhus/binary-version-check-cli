import test from 'ava';
import {execa} from 'execa';

test('main', async t => {
	await t.throwsAsync(execa('./cli.js', ['curl', '>=99']), {message: /does not satisfy/});
	await t.throwsAsync(execa('./cli.js', ['openssl', '>=99', '--args=version']), {message: /does not satisfy/});
});
