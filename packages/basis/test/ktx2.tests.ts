import { KTX2Parser, loadKTX2 } from '@pixi/basis';
import { path } from '@pixi/utils';
import { Loader } from '../../assets/src/loader/Loader';

import type { Texture } from '@pixi/core';

describe('KTX2 loading', () =>
{
    it('should load a a KTX2 image', async () =>
    {
        await KTX2Parser.loadTranscoder(
            path.join(__dirname, '../assets/basis_transcoder.js'),
            path.join(__dirname, '../assets/basis_transcoder.wasm')
        );

        const loader = new Loader();

        loader['_parsers'].push(loadKTX2);
        const texture = await loader.load<Texture>(path.join(__dirname, './images/kodim20.ktx2'));

        expect(texture.baseTexture.valid).toBe(true);
        expect(texture.width).toBe(768);
        expect(texture.height).toBe(512);
    });
});
