/* eslint-disable max-len */
import { BasisParser, loadBasis } from '@pixi/basis';
import { Loader } from '../../assets/src/loader/Loader';

import type { Texture } from '@pixi/core';

const loaderJS = 'https://raw.githubusercontent.com/BinomialLLC/basis_universal/master/webgl/transcoder/build/basis_transcoder.js';
const loaderWASM = 'https://raw.githubusercontent.com/BinomialLLC/basis_universal/master/webgl/transcoder/build/basis_transcoder.wasm';
const basisTexture = 'https://github.com/Sparcks/pixijs/raw/feature/load-ktx2/packages/basis/test/images/kodim20.basis';

describe('Basis loading', () =>
{
    it('should load a a Basis image', async () =>
    {
        await BasisParser.loadTranscoder(loaderJS, loaderWASM);

        const loader = new Loader();

        loader['_parsers'].push(loadBasis);
        const texture = await loader.load<Texture>(basisTexture);

        expect(texture.baseTexture.valid).toBe(true);
        expect(texture.width).toBe(768);
        expect(texture.height).toBe(512);
    });
});
