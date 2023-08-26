import { BasisParser, loadBasis } from '@pixi/basis';
import { path } from '@pixi/utils';
import { Loader } from '../../assets/src/loader/Loader';

import type { Texture } from '@pixi/core';

describe('Basis loading', () =>
{
    it('should load a a Basis image', async () =>
    {
        await BasisParser.loadTranscoder(
            path.join(__dirname, '../assets/basis_transcoder.js'),
            path.join(__dirname, '../assets/basis_transcoder.wasm')
        );

        const loader = new Loader();

        loader['_parsers'].push(loadBasis);
        const texture = await loader.load<Texture>(path.join(__dirname, './images/kodim20.basis'));

        expect(texture.baseTexture.valid).toBe(true);
        expect(texture.width).toBe(768);
        expect(texture.height).toBe(512);
    });
});
